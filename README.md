# Made in Xiaolin — Roller Academy

Budtender training / quiz / rewards MVP for **Made in Xiaolin** (madeinxiaolin.com),
Colorado's only creative rolling studio. Mirrors the JBD budtender flow:
**train → quiz (80% to pass) → unlock budtender discount + free-merch + monthly cannagar draw.**

Static, client-only (localStorage) — a quick shareable MVP before the backend is wired up.

## Stack
- `index.html` / `styles.css` — Xiaolin brand shell (parchment + lacquer-red + gold; Cormorant / Manrope / Noto Serif SC)
- `data.js` — products, 6 training sections, per-section quizzes (built from madeinxiaolin.com)
- `app.js` — hash-router SPA, localStorage progress, quiz grading, reward code

## Demo receipt
`demo-receipt.png` is a realistic dispensary receipt (Higher Ground / Made in Xiaolin line items) for demoing the `#/sale` receipt scanner. Upload it when prompted. Source: `tools/receipt.html` (rendered via headless Chrome).

## Run locally
    python -m http.server 8080   # then open http://localhost:8080

## Deploy
GitHub Pages → CNAME `xiaolinbudtender.cannacrypted.com`.

## TODO (backend phase)
- Real signup + AI doc verification (port from jbd-glass budtender)
- Sales logging, points, live leaderboard, monthly draw
- Woo/discount code issuance instead of deterministic local code
