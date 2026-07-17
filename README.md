# El Brujo Llanero — Fase 3: setup del proyecto

Este es el esqueleto real del proyecto descrito en las Fases 1 y 2:
Next.js + TypeScript + Tailwind + shadcn/ui + XYFlow como motor de navegacion ZUI.

## Como correrlo

Este proyecto se genero sin acceso a internet, por lo que las dependencias
de `package.json` **no estan instaladas todavia**. Pasos:

```bash
npm install
npx shadcn@latest init        # usa la config ya definida en components.json
npx shadcn@latest add button card accordion label select
npm run dev
```

Luego abre http://localhost:3000

## Que ya esta resuelto en este esqueleto

- Tokens de diseno de la Fase 2 conectados a Tailwind (`styles/tokens.css` + `tailwind.config.ts`).
- Tipografias Cinzel / Cormorant Garamond / Inter / Poppins cargadas via `next/font/google`.
- Modelo de datos tipado de los 11 servicios (`content/services.ts`) con placeholders `TODO`
  listos para reemplazar por el contenido real extraido del HTTrack.
- Grafo declarativo del ZUI (`flows/siteFlow.config.ts`) que XYFlow renderiza en `features/zui-canvas/ZuiCanvas.tsx`,
  configurado explicitamente como **motor de navegacion** (nodos no arrastrables, no conectables, sin panel de edicion).
- Arquitectura de doble capa: cada servicio tiene su propia ruta SSR real (`app/servicios/[slug]/page.tsx`)
  con metadata dinamica, independiente de si el usuario llega por el canvas o directo desde Google.
- Formulario de contacto validado con Zod, que arma el mensaje de WhatsApp automaticamente.
- WhatsApp flotante persistente y toggle "Vista simple" en el navbar (fallback real de accesibilidad,
  no cosmetico — colapsa el canvas a una lista de scroll lineal).
- `sitemap.ts` y `robots.ts` generados dinamicamente a partir del contenido.

## Pendientes explicitos (marcados como TODO en el codigo)

1. Numero real de WhatsApp (`WHATSAPP_NUMBER` en `WhatsAppFloating.tsx`, `ContactForm.tsx` y `app/servicios/[slug]/page.tsx`).
2. Contenido real de cada servicio (`content/services.ts`) — hoy tiene placeholders `TODO`.
3. Imagenes finales en `public/images/servicios/` (hoy no hay assets, los nodos de servicio no requieren imagen para funcionar).
4. Dominio final en `app/layout.tsx`, `app/sitemap.ts` y `app/robots.ts` (hoy usan `elbrujollanero.com` como placeholder).
5. Redirects 301 desde las URLs antiguas de WordPress en `next.config.mjs` (`redirects()`), una vez se tenga el listado real de URLs indexadas.
6. Faltan las paginas `/nosotros`, `/contacto` y `/faq` (carpetas creadas, sin `page.tsx` todavia) y los nodos `TestimonialNode`/`CtaNode` — se completan en la siguiente iteracion junto con el contenido real.

## Estructura

Sigue exactamente el arbol definido en la Fase 1, seccion 2.3.
