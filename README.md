# Next Dimension Wonder Shader

Embeddable Vite/React wrapper for the Wonder shader used on the Next Dimension Webflow site.

GitHub repo: https://github.com/ebaqcompany/nextdim-wonder-shader

The Wonder texture is vendored at `public/wonder-texture.png` so the shader does not depend on cross-origin image loading from Wonder's CDN.

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Deploy this repo to Vercel as a Vite app. No environment variables are required.

## Routes

- `/` renders the footer shader.
- `/stats19` renders the stats image shader.
- `/?shader=card-bg1` renders the card background shader used behind the card artwork.
- `/?shader=card-bg1-wonder` renders the Wonder shader test for the first card background.

## Webflow Embed

After Vercel deploys, add this inside a Webflow Embed element in the target section:

```html
<iframe
  src="https://YOUR-VERCEL-DOMAIN.vercel.app/"
  title="Next Dimension shader background"
  style="position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:none;"
  loading="eager"
  aria-hidden="true"
></iframe>
```

Set the Webflow section or wrapper to:

- `position: relative`
- `overflow: hidden`
- `isolation: isolate`

Put the iframe behind content with Webflow z-index controls. Avoid negative z-index unless the parent stacking context is controlled.
