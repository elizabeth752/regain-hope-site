# Regain Hope Detox — sitio web

Sitio de marketing estático con [Astro](https://astro.build/) para [regainhopedetox.com](https://www.regainhopedetox.com/). El HTML se sirve desde Vercel; el único endpoint de servidor es `/api/lead/` (proxy a CallTrackingMetrics FormReactor).

## Documentación

- **[Guía: levantar el sitio en local y crear un blog](docs/GUIA-LOCAL-Y-BLOG.doc)** — desarrollo local y artículos nuevos.
- **[Auditoría de seguridad e infraestructura](docs/SECURITY-INFRASTRUCTURE-AUDIT.doc)** — hallazgos de agosto 2026 y el plan de endurecimiento.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build
npm run preview
```

Requisito: **Node.js ≥ 22.12.0**.

## Variables de entorno (obligatorias para el formulario)

Copia `.env.example` a `.env` en local. En Vercel, añade las mismas claves como **server / Production** (y Preview si hace falta). **Nunca** uses el prefijo `PUBLIC_`.

| Variable | Uso |
| --- | --- |
| `CTM_FORMREACTOR_ENDPOINT` | URL del FormReactor **sin** `?key=` |
| `CTM_FORMREACTOR_KEY` | Clave del reactor (solo servidor) |

Si esa clave llegó a aparecer en git o en el HTML público, **rótala en CTM** antes de producción.

## Checklist Vercel (ops)

- [ ] Deployment Protection en previews
- [ ] Variables de entorno solo server-side, no expuestas al cliente
- [ ] Alertas de Spend Management
- [ ] Dominio de producción + redirect `www`
- [ ] Acceso de colaboradores revisado
- [ ] Confirmar BAA con CTM (y CRM aguas abajo) si se sigue recogiendo Policy ID

## Privacidad y consentimiento (no romper)

- `ConsentDefaults.astro` va en `<head>` antes de GTM: todo negado hasta que el visitante elija; `ad_personalization` siempre negado.
- `CookieConsent.astro`: banner, cookie `rhd_consent`, evento `consent_update` (`consent_analytics`, `consent_advertising`, `consent_source`) en cada elección y en cada visita de regreso. `[data-cookie-prefs]` abre preferencias y `[data-cookie-dns]` hace el opt-out.
- Google Maps solo con `MapEmbed.astro` (carga al hacer clic). Nunca un iframe directo.
- `lead_accepted` se envía solo en `/thank-you/?sent=1`, después de que CTM acepta el lead.
- `/api/lead/` nunca escribe en logs lo que envía el visitante (`safeText`).
- `/privacy/` muestra el Notice of Privacy Practices hasta que el cliente apruebe el texto de una política separada.
