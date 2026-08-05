# File map

<!-- Every file/folder is either explained or parked — no mystery boxes. -->
<!-- known: explained in the learner's own words | parked: honest one-liner for now, deep dive scheduled | generated: machine-made, never edit, always rebuildable -->

## /
- learning/project.md — known (2026-08-04) — your project, MVP, and trunk
- learning/plan.md — known (2026-08-04) — the build plan and locked decisions
- learning/knowledge-graph.md — known (2026-08-04) — the living map of what you actually know
- learning/file-map.md — known (2026-08-04) — this file: why every file in the repo exists
- README.md — known (2026-08-04) — project overview for anyone landing on the repo, points to learning/project.md
- LICENSE — known (2026-08-04) — the legal license for this code, not app code, no deep dive needed
- .claude/ — parked (2026-08-04) — Claude Code's own tool settings, not part of the app; not a mystery, just not relevant to the build
- CLAUDE.md — known (2026-08-05) — standing notes for Claude Code about this repo; records that the `altitude` CLI isn't installed here, so lessons run in free mode off the local plan and knowledge graph. Not app code
- index.html — known (2026-08-05) — the app's single page so far: a main heading, a hardcoded bullet list of recipes, and a hardcoded bullet list of pantry items, opened directly in the browser (no server yet). The Pantry `<h2>` carries `id="pantry-heading"` so JavaScript can address that one heading instead of the first h2 it finds → [[html-structure]], [[html-lists]], [[html-attributes]]
- styles.css — known (2026-08-05) — stylesheet linked from index.html's <head>; styles the body font and the h1 color → [[css-basics]]
- app.js — known (2026-08-05) — the page's JavaScript, loaded by a <script> tag at the bottom of index.html's <body> so the page exists before it runs. Now reaches into the live page and rewrites the h1 text on every load; this is where all the interactive behaviour will live → [[javascript]], [[browser-console]], [[dom]], [[js-variables]]
