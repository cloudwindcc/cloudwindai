# Global Presence

This is a standalone, buildless HTML page under the existing official website. Its entry is `public/global.html`; this directory contains the page assets. Vite copies both to `dist/` during the normal `npm run build`. Cloudflare Pages serves `/global.html` at the clean URL `/global` before its React SPA fallback. Homepage navigation uses ordinary anchors to enter this page.

- URL: `/global` (English), `/global?lang=zh` (Simplified Chinese).
- Header: official corporate wordmark, Noto Sans HK type, sky-blue accents and translucent fixed navigation. Links return to the matching existing homepage language and contact section.
- Core order: Hong Kong, Mainland China, Singapore, Philippines. China expands into Shenzhen, Suzhou and Dongguan.
- Center: Hong Kong, 22.27832° N / 114.17469° E; also the initial and reset selection.
- Update `data.js` for markets and industry content. `app.js` owns local interactions; `styles.css` owns page styling. No API keys, backend, iframe or external map service is required.
- Preserve the distinction between core-market priority, business status and proposed industry directions. Unverified status remains `tbc`; Dubai remains `exploring`.

Map outlines: [Natural Earth](https://www.naturalearthdata.com/), public domain, via world-atlas 2.0.2. Representative city coordinates: [GeoNames](https://www.geonames.org/), CC BY 4.0. D3 7.9.0 and topojson-client 3.1.0 retain their license headers under `vendor/`.

Markers are representative city locations, not office addresses. The site does not establish local entities, licenses, project rights or verified partnerships.


新增 `/cases` 客户案例页（11 个网站卡片）；导航和页脚包含探索产品入口 `https://www.cloudwind.ai`。旧全球足迹地址通过 301 跳转至 `/global`。
