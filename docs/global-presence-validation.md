# Global Presence integration — 2026-11-02

## Implementation

- Standalone HTML at `/global-presence`, copied by Vite from `public/global-presence.html` with its local asset directory.
- Entry links added to the desktop and mobile navigation on both existing homepage languages.
- Official corporate wordmark, Noto Sans HK, navy background, sky-blue accents and fixed translucent header applied to the new page.
- Core order: Hong Kong, Mainland China, Singapore, Philippines. The world projection is centered on Hong Kong, which is the default and reset selection.
- Contact and service links return to the matching homepage language. React waits until its sections mount before applying incoming hash navigation.
- Global Presence added to the existing sitemap function. No form submission behavior or service pricing was changed.

## Verification

- Existing and integrated production builds passed with the repository's `npm run build` command.
- HTTP 200 verified for `/`, `/en`, `/global-presence`, its Chinese query variant, application script and integration stylesheet.
- Browser navigation verified from the Chinese homepage and English homepage/mobile menu into the independent page; direct reload preserved the independent page and 15 nodes.
- Industry filter counts matched the brief: FinTech 7; Real Estate 9; Deep Tech 3; Software/AI 5; Natural Resources 3; AI Marketing 4.
- Core order, Hong Kong default selection and exact projected center verified in the browser.
- Mobile menu opens/closes and returns to the correct homepage language. No horizontal overflow or out-of-bounds map labels at widths 390 and 320.
- English contact navigation reached `/en#contact` with the section visible below the fixed header. Chinese contact navigation reached `/#contact`.
- The sitemap endpoint returned XML with all three page URLs.

## Release

The existing Cloudflare Pages project `cloudwindai` is connected to `cloudwindcc/cloudwindai`, builds with `npm run build`, publishes `dist`, and uses `main` for production. Verify the feature branch preview before advancing `main`; then verify `/global-presence` on the official domain. Generated output and installed dependencies are excluded from new source commits.
