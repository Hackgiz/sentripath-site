# SentriPath PM — Website

A small React + Tailwind site for the SentriPath PM app.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `dist/`.

## Deploy to Cloudflare Pages
- Connect this repo in Cloudflare Pages.
- Framework: **Vite**
- Build command: `npm run build`
- Output dir: `dist`

## Set the download URL
Edit the two places in `src/App.jsx` that currently point to:
```
https://downloads.example.com/SentriPathPM.dmg
```
Replace with your Cloudflare R2 public link or your custom domain (e.g. `https://downloads.sentripath.app/SentriPathPM.dmg`).

## Notes
- Do not upload your `.dmg` to this repo. Host it on Cloudflare R2.
- Adjust the content (features, copy) as needed.
