# SnapWorth

AI **What Is This Worth?** app.

Photograph an antique, tool, coin, jewelry piece, furniture item, or thrift find. SnapWorth identifies it, estimates a resale range, explains what drives value, and writes a Facebook Marketplace / eBay listing.

This is the four-screen product from the concept brief — not a social network and not a 75-feature dashboard.

## Screens

1. **Home** — giant TAKE PHOTO button + camera-roll upload
2. **Result** — title, era, condition, resale range, value factors, sell advice
3. **Sell It** — Marketplace/eBay title + description, copy/share
4. **History** — previous scans on this device

## Monetization (product)

- Free: 3 scans
- Pro: $5.99 / month or $29.99 / year
- Demo unlock is local so testers can walk the full flow before store billing is connected

## Run locally

Open `docs/index.html` in a browser, or serve the docs folder:

```bash
npx --yes serve docs
```

Then open the printed localhost URL.

## Test on GitHub Pages

After Pages is enabled for this repo (Settings → Pages → Deploy from branch `main` / folder `/docs`):

https://mraffordableai.github.io/SnapWorth/

Until Pages is on, use the raw file or a local server.

## How identification works in v1

v1 ships an on-device heuristic catalog (filename + size hash → closest item family) so the app works **offline** and needs **no API key** for the first test.

Production next step: send the photo to a vision model (OpenAI / Gemini / Claude) and keep the same Result + Sell It schema.

Estimates are educational. They are not formal appraisals.

## Launch checklist

See `LAUNCH.md`.
