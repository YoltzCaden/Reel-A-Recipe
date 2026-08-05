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
- index.html — known (2026-08-05) — the app's single page so far, opened directly in the browser (no server yet). No longer contains any recipes: `#recipe-list` is an empty `<ul>` that app.js fills from its `recipes` array. The pantry list is still hardcoded, and gets the same treatment in the next task. The Pantry `<h2>` carries `id="pantry-heading"` so JavaScript can address that one heading instead of the first h2 it finds. Also holds the "Add recipe" form (`#recipe-form` with a text box `#recipe-input`). Both lists carry ids — `#recipe-list` and `#pantry-list` — so JavaScript can append to a specific one → [[html-structure]], [[html-lists]], [[html-attributes]], [[forms]]
- styles.css — known (2026-08-05) — stylesheet linked from index.html's <head>; styles the body font and the h1 color → [[css-basics]]
- app.js — known (2026-08-05) — the page's JavaScript, loaded by a <script> tag at the bottom of index.html's <body> so the page exists before it runs. Reaches into the live page to rewrite the h1 text, and listens for the recipe form's submit event — cancelling the browser's default reload. Holds the `recipes` array — the single source of truth for what's on the page — the `addRecipe(name)` function that builds an `<li>` from a name, and the loop that renders the array on load. This is where all the interactive behaviour lives → [[javascript]], [[browser-console]], [[dom]], [[dom-create-append]], [[js-variables]], [[js-functions]], [[js-objects-arrays]], [[js-loops]], [[data-driven-rendering]], [[event-listeners]], [[forms]]
