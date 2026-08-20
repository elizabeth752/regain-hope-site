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
