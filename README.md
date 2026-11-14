# Sky_enterprises

Simple static website project ready to run locally and publish with GitHub Pages.

## Run locally

From `/home/runner/work/Sky_enterprises/Sky_enterprises`:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Pages

- Home: `http://localhost:8080/index.html`
- Gallery (images from `assets`): `http://localhost:8080/gallery.html`

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` (or your default branch), folder `/ (root)`
3. Save and wait for deployment.
