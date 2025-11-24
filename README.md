# Dannyel's Personal Site

My personal website built with Astro.js, Tailwind CSS, and deployed on Cloudflare Pages.

🌐 **Live Site:** https://dannyelcf.dev

## Features

- ⚡ **Blazing Fast** - Built with Astro for optimal performance
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- ☁️ **Cloudflare Pages** - Deployed on edge network
- 📝 **MDX Support** - Write content with components
- 🔍 **SEO Optimized** - Meta tags, sitemap, RSS feed
- 📱 **Responsive Design** - Works on all devices
- 🌙 **Dark Theme** - Beautiful dark UI
- 🎯 **Type-Safe** - TypeScript + Content Collections

## Quick Start

### Prerequisites

- Node.js 18+ (check with `node -v`)
- npm or your preferred package manager

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit http://localhost:4321

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy

```bash
# Deploy to Cloudflare Pages
npm run deploy
```

## Project Structure

```
/
├── public/           # Static assets
│   ├── me.png       # Profile image
│   ├── favicon.svg
│   ├── _headers     # Security headers
│   └── _redirects   # URL redirects
├── src/
│   ├── components/  # Reusable Astro components
│   │   ├── Alert.astro
│   │   └── YouTube.astro
│   ├── content/     # Content collections
│   │   ├── config.ts
│   │   └── blog/    # Blog posts (MDX)
│   ├── layouts/     # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/       # File-based routing
│   │   ├── index.astro
│   │   ├── blog/
│   │   └── rss.xml.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tailwind.config.js
```

## Content Management

### Adding a Blog Post

1. Create a new directory in `src/content/blog/`:

   ```bash
   mkdir src/content/blog/my-new-post
   ```

2. Create `index.mdx` with frontmatter:

   ```mdx
   ---
   title: 'My Awesome Post'
   description: 'A description of the post'
   date: 2024-01-15
   categories: ['Tech']
   tags: ['astro', 'web-dev']
   homepage: true
   draft: false
   ---

   import Alert from '../../../components/Alert.astro';

   Your content here...

   <Alert icon="💡" text="Use components in your posts!" />
   ```

3. Add images to the same directory
4. Build and deploy!

### Available Components

#### Alert

```mdx
<Alert icon="💡" text="Your message here" />

<Alert icon="⚠️">Multi-line content with **markdown** support!</Alert>
```

#### YouTube

```mdx
<YouTube id="VIDEO_ID" title="Video Title" />
<YouTube id="https://youtube.com/watch?v=VIDEO_ID" />
```

## Deployment

### Option 1: Git Integration (Recommended)

1. Push code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect repository
4. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy!

### Option 2: Wrangler CLI

```bash
# Login to Cloudflare
wrangler login

# Deploy
npm run deploy
```

## Configuration

### Site Settings

Edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://dannyelcf.dev', // Your domain
  // ... other config
});
```

### Tailwind Customization

Edit `src/styles/global.css`:

```css
@import 'tailwindcss';

:root {
  --accent: 136, 58, 234;
  /* Add your custom CSS variables */
}
```

### Security Headers

Edit `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  # Add more headers...
```

## Scripts

| Command              | Action                               |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start dev server at `localhost:4321` |
| `npm run build`      | Build production site to `dist/`     |
| `npm run preview`    | Preview production build locally     |
| `npm run deploy`     | Build and deploy to Cloudflare Pages |
| `npm run astro`      | Run Astro CLI commands               |
| `npm run cf-typegen` | Generate Cloudflare types            |

## Tech Stack

- **[Astro](https://astro.build)** - Web framework
- **[Tailwind CSS](https://tailwindcss.com)** - CSS framework
- **[MDX](https://mdxjs.com)** - Markdown + JSX
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Hosting
- **TypeScript** - Type safety

## Performance

- 🚀 **Lighthouse Score:** 95-100
- ⚡ **Build Time:** ~1-2 seconds
- 📦 **Bundle Size:** Minimal (zero JS on most pages)
- 🌍 **Global CDN:** Deployed on Cloudflare's edge network

## SEO Features

- ✅ Sitemap (`/sitemap-index.xml`)
- ✅ RSS Feed (`/rss.xml`)
- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Fast loading times

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## License

© 2024 Dannyel Cardoso da Fonseca. All rights reserved.

## Links

- 🌐 [Website](https://dannyelcf.dev)
- 💼 [LinkedIn](https://linkedin.com/in/dannyelcf)
- 🦊 [GitLab](https://gitlab.com/dannyelcf)

---

Built with ❤️ using Astro
