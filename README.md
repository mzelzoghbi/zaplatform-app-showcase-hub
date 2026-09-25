# zaplatform.com

The public site for **ZaPlatform**, the apps made by Zak (Mohamed Zakaria El-Zoghbi): ZaPixel,
Masarefy and King IPTV, plus RWW Agency ERP as client work.

This repository holds **generated static files**. Don't edit them by hand.

## Where the site comes from

The design is the source of truth: `design-thoughts/zaplatform/home.html` (private repo
`mzelzoghbi/design-thoughts`). Change the design there first, then rebuild:

```sh
cd design-thoughts/zaplatform
python3 tools/build-site.py /path/to/this/repo   # writes pages, img/, sitemap, robots
```

| Path | What it is |
|---|---|
| `/` | English homepage |
| `/ar/` | Arabic homepage (right to left) |
| `/privacy/`, `/ar/privacy/` | Links each app's own privacy policy; says what this site collects |
| `404.html` | Not-found page |
| `img/og.png` | Link-preview image, rendered from `og.html` in the design folder |

## Don't touch

- **`CNAME`**: points GitHub Pages at `zaplatform.com`.
- **`app-ads.txt`**: verifies ZaPixel's AdMob publisher account. It must stay byte for byte, or ad fill drops.

The build never writes either file.

## Deploying

GitHub Pages serves the **`gh-pages`** branch. Commit the rebuilt files to `gh-pages` and push. `main`
mirrors it so the repo shows what's live.

The previous Lovable/React site is in this repo's history (`main` before September 2026).
