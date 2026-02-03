# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Outer Rim is a Jekyll static site that aggregates stats for Fantasy Flight Games' Star Wars RPG. It uses a data-driven architecture where YAML files in `_data/` are automatically converted into hundreds of individual pages via the `jekyll-datapage-generator` plugin. Frontend assets are bundled with Vite.

## Development Commands

**Prerequisites:** Ruby >= 3.3, Node 20.x, `gem install foreman`

```bash
# Install dependencies
bundle install && npm install

# Run local dev server (Jekyll + Vite via Foreman)
./bin/dev
# Site available at http://localhost:4000, Vite dev server on port 3036

# Production build
jekyll build
```

There are no test or lint commands configured.

## Architecture

### Data Flow

`_data/*.yaml` → `jekyll-datapage-generator` (configured in `_config.yml` `page_gen`) → `_layouts/items/*.html` (Liquid templates) → individual HTML pages at `/{item-type}/{generatedId}/`

Each YAML data file has a corresponding `page_gen` entry in `_config.yml` and a layout template in `_layouts/items/`.

### Key Directories

- **`_data/`** - YAML files containing all game stats (armor, weapons, species, etc.). Each item needs a `generatedId`, `full_name`, `description`, and `index` (array of book references in `bookId:page` format).
- **`_plugins/`** - Custom Jekyll plugins (Ruby). `build_hooks.rb` is the most significant: it enriches item data with book names, generates search JSON, and creates SEO meta descriptions during `site:post_read`.
- **`_layouts/items/`** - Liquid templates for individual item detail pages.
- **`pages/`** - Category listing pages (one per item type) with DataTables.
- **`_frontend/`** - Vite-managed frontend source: JS entrypoints, SCSS styles, fonts, images.

### Frontend Stack

Bootstrap 5 (Bootswatch Journal theme) + jQuery + DataTables for table UI. Theme switcher supports dark/light mode with localStorage persistence. Entry points are `_frontend/entrypoints/application.js` and `_frontend/entrypoints/search.js`.

### Adding a New Item Type

1. Create `_data/{type}.yaml` with items containing `generatedId`, `full_name`, `description`, `index`
2. Add a `page_gen` entry in `_config.yml`
3. Create `_layouts/items/{type}.html` template
4. Create `pages/{type}.html` listing page
5. Add the type to the `item_types` array in `_plugins/build_hooks.rb`

### Book Index Format

Items reference books via `index` arrays with format `bookGeneratedId:pageNumber`. The `build_hooks.rb` plugin appends the book's `full_name` at build time, producing `bookGeneratedId:pageNumber:Book Name`.

### Deployment

Deployed to Vercel. PRs automatically get preview deployments. Production deploys on merge to `master`.
