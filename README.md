# Ricky Malstrom — portfolio

Hugo portfolio at https://rmalstrom.github.io, using [PaperMod](https://github.com/adityatelange/hugo-PaperMod) with custom portfolio layouts. GitHub Pages builds `main` with Hugo Extended 0.151.2.

## Work locally

```sh
git clone --recurse-submodules https://github.com/RMalstrom/RMalstrom.github.io.git
cd RMalstrom.github.io
hugo server -D
```

For an existing clone, run `git submodule update --init --recursive` before building. The theme is pinned through the submodule; no Go installation is required.

## Content and customization

- Project writeups: `content/projects/`. Keep `draft: true` until ready.
- `discipline`: Controls, Embedded systems, CAD, or 3D printing (used by the project filters).
- `tech`: list of tools; `external_url`: source repository.
- PaperMod covers use `cover.image` and `cover.alt`.
- For a 3D model, set `model: true` and use `{{< cad-model src="/models/example.glb" alt="Descriptive model name" >}}`. The component loads only on model pages, with a download fallback.
- Existing `image` and Hugo `youtube` shortcodes remain supported.
- Homepage: `layouts/index.html` and `content/_index.md`.
- Colors, spacing, and responsive layouts: `assets/css/extended/portfolio.css`.
- Navigation and theme options: `config.toml`. PaperMod provides theme switching and search; the homepage JSON output is required for search.

## Build

```sh
hugo --cleanDestinationDir --minify
```

Generated output is ignored. GitHub Actions checks out the pinned PaperMod submodule and publishes `public/` to Pages. Update the theme deliberately with `git submodule update --remote themes/PaperMod`, then build and review before committing the new pin. The previous portfolio is preserved in Git history.
