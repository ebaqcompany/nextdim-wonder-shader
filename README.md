# Next Dimension Wonder Shader

Embeddable Vite/React wrapper for the Wonder shader used on the Next Dimension Webflow site.

The Wonder texture is vendored at `public/wonder-texture.png` so the shader does not depend on cross-origin image loading from Wonder's CDN.

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Deploy this repo to Vercel as a Vite app. No environment variables are required.

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
