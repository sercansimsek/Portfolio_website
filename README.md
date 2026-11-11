# Portfolio site

React + Vite + React Router. Design tokens live in `src/styles.css` (orangered `#FF4500` on charcoal, light theme included). The logo is the letter S in Bungee Shade, loaded from Google Fonts in `index.html`.

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the build locally
```

## What to replace

- Search the project for `[Your Name]`, `your@email.com` and `[username]`.
- Projects: edit `src/data/projects.js`.
- About text and tools: `src/pages/About.jsx`.
- Page title and description: `index.html`.
- Contact form: it only shows a thank-you message right now. Connect Formspree, EmailJS or your own Express route in `src/pages/Contact.jsx`.

## Put it on GitHub

A GitHub repository is not required to run the site, but the easiest hosting services deploy straight from one, so it is worth doing now.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
# create an empty repository on github.com (no README), then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy

Pick one. All three have free plans and rebuild the site every time you push.

- **Vercel**: Add New Project, import the repo, keep the defaults (Vite is detected). `vercel.json` already makes page refreshes work on `/projects`, `/about` and `/contact`.
- **Netlify**: Add new site, import from Git, build command `npm run build`, publish directory `dist`. `public/_redirects` handles the page routes.
- **Cloudflare Pages**: connect the repo, build command `npm run build`, output directory `dist`.

GitHub Pages also works, but it does not support routes like `/about` on refresh, so you would switch `BrowserRouter` to `HashRouter` in `src/main.jsx` and set `base` in `vite.config.js` to your repo name.
