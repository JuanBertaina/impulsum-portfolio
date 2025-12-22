# Impulsum Portfolio (Next.js + Mantine)

Landing SPA de Impulsum reconstruida en **Next.js 15 (App Router) + React 19 RC + TypeScript**, con UI basada en **Mantine** y export estático para **Azure Static Web Apps**.

## Stack
- Next.js 15.4.10 · React 19 RC · TypeScript
- Mantine 7 (core/hooks/notifications) + Tabler Icons
- Export estático (`output: 'export'`) sin API/SSR
- Estilos base en `app/globals.css`, componentes en `app/components/*`, copy en `app/copy.ts`

## Scripts locales (pnpm)
```bash
pnpm install           # instalar deps
pnpm dev               # entorno de desarrollo en http://localhost:3000
pnpm lint              # ESLint
pnpm build             # genera /out para Azure Static Web Apps
# Previsualizar export: pnpm build && npx serve out
```

## Despliegue en Azure Static Web Apps
El workflow `.github/workflows/azure-static-web-apps-white-tree-070184810.yml` publica en Azure con cada push a `main`.

Valores clave:
- `app_location: "/"` (raíz del proyecto Next)
- `output_location: "out"` (resultado del export)
- `api_location: ""` (no se usa API)

Requisitos:
1. Static Web App creada (ej: `impulsum-web`).
2. Token de deployment desde Azure Portal → tu Static Web App → **Manage tokens**.
3. Secreto en GitHub Actions con ese token:
   - Nombre usado en el workflow: `AZURE_STATIC_WEB_APPS_API_TOKEN_WHITE_TREE_070184810`

## Configuración
- `staticwebapp.config.json` mantiene headers de seguridad, caché de `/_next/static/*` y `/*.png`, y fallback de navegación.
- Assets en `public/` (`/icon.png`, `/flags/*`).
- `next.config.mjs` usa `output: 'export'` e `images.unoptimized` para SWA.

## Notas
- El sitio es SPA con navegación suave y formularios sin backend (mailto/WhatsApp).
- Si cambiás el nombre de la SWA o el secreto, ajustá el workflow en `.github/workflows/azure-static-web-apps-white-tree-070184810.yml`.

