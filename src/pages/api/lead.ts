import type { APIRoute } from 'astro';

export const prerender = false;

const CARRIERS = new Set([
  'Aetna',
  'Cigna',
  'Blue Cross Blue Shield',
  'UnitedHealthcare',
  'Anthem',
  'Kaiser',
  'Humana',
  'Health Net',
  'TRICARE',
  'Other',
]);

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 8;
const hits = new Map<string, number[]>();

const ATTRIBUTION_KEYS = ['gclid', 'campaign_id', 'adgroup_id', 'creative_id', 'form_id'] as const;

type LeadBody = {
  name: string;
  phone: string;
  insurance_carrier: string;
  policy_id: string;
  date_of_birth: string;
  visitor_sid: string;
  company_website: string;
  consent: boolean;
  attribution: Record<string, string>;
};

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') || 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function wantsJson(request: Request): boolean {
  const accept = request.headers.get('accept') || '';
  const contentType = request.headers.get('content-type') || '';
  return accept.includes('application/json') || contentType.includes('application/json');
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function redirectThankYou(): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: '/thank-you/', 'Cache-Control': 'no-store' },
  });
}

function toE164(raw: string): string {
  const digits = (raw || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return `+${digits}`;
}

function asString(value: FormDataEntryValue | null | undefined): string {
  return typeof value === 'string' ? value.trim() : '';
}

async function readBody(request: Request): Promise<LeadBody> {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const raw = (await request.json()) as Record<string, unknown>;
    const attribution: Record<string, string> = {};
    const src = (raw.attribution && typeof raw.attribution === 'object' ? raw.attribution : {}) as Record<string, unknown>;
    for (const key of ATTRIBUTION_KEYS) {
      const v = src[key];
      if (typeof v === 'string' && v.trim()) attribution[key] = v.trim().slice(0, 200);
    }
    return {
      name: typeof raw.name === 'string' ? raw.name.trim() : '',
      phone: typeof raw.phone === 'string' ? raw.phone.trim() : '',
      insurance_carrier: typeof raw.insurance_carrier === 'string' ? raw.insurance_carrier.trim() : '',
      policy_id: typeof raw.policy_id === 'string' ? raw.policy_id.trim() : '',
      date_of_birth: typeof raw.date_of_birth === 'string' ? raw.date_of_birth.trim() : '',
      visitor_sid: typeof raw.visitor_sid === 'string' ? raw.visitor_sid.trim() : '',
      company_website: typeof raw.company_website === 'string' ? raw.company_website.trim() : '',
      consent: raw.consent === true || raw.consent === 'true' || raw.consent === 'on' || raw.consent === '1',
      attribution,
    };
  }

  const form = await request.formData();
  const attribution: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const v = asString(form.get(`paid_${key}`));
    if (v) attribution[key] = v.slice(0, 200);
  }
  const consentRaw = form.get('sms_consent');
  return {
    name: asString(form.get('name')),
    phone: asString(form.get('phone')),
    insurance_carrier: asString(form.get('insurance_carrier')),
    policy_id: asString(form.get('policy_id')),
    date_of_birth: asString(form.get('date_of_birth')),
    visitor_sid: asString(form.get('visitor_sid')),
    company_website: asString(form.get('company_website')),
    consent: consentRaw === 'on' || consentRaw === '1' || consentRaw === 'true',
    attribution,
  };
}

// <input type="date"> submits YYYY-MM-DD. CTM gets MM/DD/YYYY, the way
// admissions reads a date of birth. Returns '' for anything that is not a
// real calendar date between 1900 and today.
function dobForCtm(raw: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if (!m) return '';
  const [, y, mo, d] = m;
  const date = new Date(Date.UTC(Number(y), Number(mo) - 1, Number(d)));
  if (date.getUTCFullYear() !== Number(y) || date.getUTCMonth() !== Number(mo) - 1 || date.getUTCDate() !== Number(d)) return '';
  if (Number(y) < 1900 || date.getTime() > Date.now()) return '';
  return `${mo}/${d}/${y}`;
}

// CTM session ids are short alphanumeric tokens. Anything else is dropped
// rather than forwarded.
function cleanSid(raw: string): string {
  return /^[A-Za-z0-9_-]{1,100}$/.test(raw) ? raw : '';
}

function validate(body: LeadBody): string | null {
  if (body.name.length < 2 || body.name.length > 80) return 'Please enter your full name.';
  const digits = body.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return 'Please enter a valid phone number.';
  if (!CARRIERS.has(body.insurance_carrier)) return 'Please select your insurance carrier.';
  if (body.policy_id && (body.policy_id.length > 40 || /[^A-Za-z0-9\-_]/.test(body.policy_id))) {
    return 'Policy ID can only include letters, numbers, hyphens, and underscores.';
  }
  if (body.date_of_birth && !dobForCtm(body.date_of_birth)) return 'Please enter a valid date of birth.';
  if (!body.consent) return 'Consent is required to request a callback.';
  return null;
}

export const POST: APIRoute = async ({ request }) => {
  const asJson = wantsJson(request);

  if (rateLimited(clientIp(request))) {
    return asJson
      ? json(429, { ok: false, error: 'Too many requests. Please wait a few minutes and try again.' })
      : json(429, { ok: false, error: 'Too many requests.' });
  }

  let body: LeadBody;
  try {
    body = await readBody(request);
  } catch {
    return asJson
      ? json(400, { ok: false, error: 'We could not read that submission. Please try again.' })
      : new Response('Invalid form submission.', { status: 400 });
  }

  // Honeypot: bots that fill hidden fields get a fake success (no CTM call).
  if (body.company_website) {
    return asJson ? json(200, { ok: true }) : redirectThankYou();
  }

  const error = validate(body);
  if (error) {
    return asJson ? json(400, { ok: false, error }) : new Response(error, { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }

  const endpoint = process.env['CTM_FORMREACTOR_ENDPOINT'];
  const key = process.env['CTM_FORMREACTOR_KEY'];
  if (!endpoint || !key) {
    console.error('CTM_FORMREACTOR_ENDPOINT or CTM_FORMREACTOR_KEY is not set');
    return asJson
      ? json(503, { ok: false, error: 'This form is temporarily unavailable. Please call (818) 264-4388.' })
      : new Response('Form unavailable. Please call (818) 264-4388.', { status: 503 });
  }

  const params = new URLSearchParams();
  params.set('name', body.name);
  params.set('phone_number', toE164(body.phone));
  params.set('custom_fields[insurance_carrier]', body.insurance_carrier);
  if (body.policy_id) params.set('custom_fields[member__policy_id]', body.policy_id);
  const dob = dobForCtm(body.date_of_birth);
  if (dob) params.set('custom_fields[date_of_birth]', dob);
  // Ties the lead to the visitor's CTM session, so CTM reports the real
  // source. Without it the post comes from Vercel and files as a referral.
  const sid = cleanSid(body.visitor_sid);
  if (sid) params.set('visitor_sid', sid);
  for (const [ctmKey, value] of Object.entries(body.attribution)) {
    params.set(`paid_attribution[${ctmKey}]`, value);
  }

  const url = `${String(endpoint).replace(/\?.*$/, '')}?key=${encodeURIComponent(String(key))}`;

  try {
    const ctm = await fetch(url, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(8000),
    });
    if (!ctm.ok) {
      console.error('CTM FormReactor responded', ctm.status);
      return asJson
        ? json(502, { ok: false, error: 'We could not send your request. Please call (818) 264-4388 or try again.' })
        : new Response('We could not send your request. Please call (818) 264-4388.', { status: 502 });
    }
  } catch {
    console.error('CTM FormReactor request failed');
    return asJson
      ? json(502, { ok: false, error: 'We could not send your request. Please call (818) 264-4388 or try again.' })
      : new Response('We could not send your request. Please call (818) 264-4388.', { status: 502 });
  }

  return asJson ? json(200, { ok: true }) : redirectThankYou();
};

export const GET: APIRoute = () =>
  new Response(null, { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });
