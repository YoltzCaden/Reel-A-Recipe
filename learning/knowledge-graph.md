# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## source-control-git
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted git status output before running it, correctly distinguished tracked/modified vs untracked files, reasoned that README/learning/.claude deserved separate commits rather than being bundled with the page files, correctly predicted staged and post-commit git status output, wrote a descriptive commit message from scratch, and after an initial "not sure" on git log, correctly reasoned out that it would show message + author, then confirmed the actual hash/date/message output. Immediately after, independently repeated the add-then-commit workflow unprompted for a second, unrelated group of files (docs + tool config), correctly distinguishing the two categories after one refresher on .claude/. Later that day, ran the full stage-and-commit cycle twice more with no command dictated beyond `git add`, writing both messages themselves ("Add simple JS print message", "Add learning docs and docs for Claude") and keeping app code separate from notes/config

## frontend-ui
- status: introduced
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: explained via coffee-shop analogy — "the tils where you place the order... how it looks"

## backend-logic
- status: introduced
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: explained via coffee-shop analogy — "the barista would then make the coffee, that's the backend work the user may not see"

## database-concept
- status: introduced
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: "relational mapping would make data querying easier... compared to a plain text file where sorting and linking isn't possible"

## api-concept
- status: seed
- depends-on: frontend-ui, backend-logic
- introduced: —
- last-reviewed: —
- evidence: —

## local-vs-deployed
- status: introduced
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: "Locally it's only on my computer, deployed makes it public"

## deployment-concept
- status: seed
- depends-on: local-vs-deployed
- introduced: —
- last-reviewed: —
- evidence: —

## javascript
- status: practicing
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-05
- evidence: locked as full-stack language; existing exposure from coursework. 2026-08-05: wrote their first working line of JS (`console.log("Hello");`) into app.js from an explanation of the parts, with correct quotes, parentheses and semicolon, and no example line to copy

## nodejs
- status: introduced
- depends-on: javascript
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: asked to clarify vs Express; correctly restated "Node.js runs the JavaScript"

## express
- status: introduced
- depends-on: nodejs
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: "Using Express would give me a more hands-on understanding... nothing handed to me like Django"

## html-css
- status: introduced
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: locked as frontend approach; existing coursework exposure

## postgresql
- status: introduced
- depends-on: database-concept
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: same relational-mapping explanation as database-concept

## render
- status: introduced
- depends-on: deployment-concept
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: locked as hosting choice

## html-structure
- status: practicing
- depends-on: html-css
- introduced: 2026-08-04
- last-reviewed: 2026-08-05
- evidence: correctly explained why <h1> goes in <body> not <head> ("body displays content... head is metadata... if moved to head it would show a blank page"), and correctly predicted <h1> would render as big bold text before running. 2026-08-05: given only the fact that the browser reads HTML top to bottom, independently reasoned that <script> belongs after the page content — "nothing would load on the screen if the app.js file is big" (the render-blocking reason, arrived at unprompted), then placed the tag correctly just before </body>

## css-basics
- status: practicing
- depends-on: html-css
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly explained why the stylesheet link goes in <head> ("metadata task... not for the user but for the browser"), correctly predicted font-family on body would cascade to all child text and nothing else, wrote the body rule correctly, and independently wrote a second rule (h1 { color: #333; }) with correct selector/property syntax. 2026-08-05 (later): carried selector syntax across into JavaScript, writing `#pantry-heading` as a querySelector argument from the single hint that ids are written with `#`

## browser-console
- status: practicing
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted that loading a page running console.log("Hello") would change nothing visible on the page itself, then opened DevTools and found the message in the Console tab — showing they hold the split between what the user sees and what the developer sees. Also correctly predicted a misspelled script src would produce a "can't find the file" error in the Console before seeing it. Later that day, ran a series of console commands with a prediction stated before each, and used the console deliberately as a scratchpad — testing a DOM change there before committing it to a file

## disk-vs-editor-buffer
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: hit this live — reported "the console shows Hello" after intending to misspell the script src. Did not diagnose it themselves; once shown that index.html on disk still read app.js, immediately recognised the unsaved edit ("i see my mistake"). Worth re-checking later. Re-checked the same day and passed, from the other direction: explained without help that a console-only DOM change disappears on refresh because "the change is not saved to the disk but rather the browser", and volunteered "save the file" as a necessary step when reasoning about a JS edit taking effect

## dom
- status: practicing
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted that a JS change to the h1 would survive a refresh, and unprompted added "save the file first" as a required step. Then correctly reasoned the opposite case — the same change typed into the console does NOT survive, because "the change is not saved to the disk but rather the browser". Predicted the element-vs-text distinction wrong twice (expected both `querySelector("h1")` and `.textContent` to return the content) and closed the gap immediately on seeing the real output. Confidently predicted that one `querySelector("h2")` call would change both h2s, ran it, saw only the first change. Wrote `heading.textContent = "Reel-A-Recipe";` into app.js as a fill-in with no example line, then composed `document.querySelector("#pantry-heading").textContent = "My Pantry";` from scratch given only the hint that ids are written with `#`

## js-variables
- status: introduced
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: met `const heading = document.querySelector("h1");` in app.js (agent-written) and correctly wrote the next line against it — `heading.textContent = "Reel-A-Recipe";` — showing they understood the name was pointing at the element. Has not yet written a `const` themselves or explained in their own words what const means vs. let

## html-attributes
- status: introduced
- depends-on: html-structure
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: added `id="pantry-heading"` to a specific <h2> from a shown example, then used that id to address that one element from JavaScript. Understood the purpose — naming one element so it can be picked out from among identical siblings — but hasn't yet generalised to other attributes

## event-listeners
- status: seed
- depends-on: dom
- introduced: —
- last-reviewed: —
- evidence: —

## js-functions
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —

## forms
- status: seed
- depends-on: html-structure
- introduced: —
- last-reviewed: —
- evidence: —

## js-objects-arrays
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —

## html-lists
- status: understood
- depends-on: html-structure
- introduced: 2026-08-04
- last-reviewed: 2026-08-05
- evidence: wrote a second ul/li list from memory with no example shown, found her own missing </ul> by comparing to working code, and correctly predicted the browser would render fine anyway due to error recovery ("only problem would be if any code written after it")

## npm-package-json
- status: seed
- depends-on: nodejs
- introduced: —
- last-reviewed: —
- evidence: —

## express-routes
- status: seed
- depends-on: express
- introduced: —
- last-reviewed: —
- evidence: —

## http-request-response
- status: seed
- depends-on: nodejs
- introduced: —
- last-reviewed: —
- evidence: —

## localhost-ports
- status: seed
- depends-on: nodejs
- introduced: —
- last-reviewed: —
- evidence: —

## fetch-api
- status: seed
- depends-on: express-routes, dom
- introduced: —
- last-reviewed: —
- evidence: —

## json
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## async-await
- status: seed
- depends-on: js-functions
- introduced: —
- last-reviewed: —
- evidence: —

## sql-basics
- status: seed
- depends-on: postgresql
- introduced: —
- last-reviewed: —
- evidence: —

## tables-schema
- status: seed
- depends-on: postgresql
- introduced: —
- last-reviewed: —
- evidence: —

## node-postgres-connection
- status: seed
- depends-on: postgresql, express
- introduced: —
- last-reviewed: —
- evidence: —

## environment-variables
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## primary-keys
- status: seed
- depends-on: tables-schema
- introduced: —
- last-reviewed: —
- evidence: —

## relational-joins
- status: seed
- depends-on: sql-basics, tables-schema
- introduced: —
- last-reviewed: —
- evidence: —

## many-to-many-relationships
- status: seed
- depends-on: relational-joins
- introduced: —
- last-reviewed: —
- evidence: —

## backend-business-logic
- status: seed
- depends-on: express-routes
- introduced: —
- last-reviewed: —
- evidence: —

## automated-testing
- status: seed
- depends-on: js-functions
- introduced: —
- last-reviewed: —
- evidence: —

## input-validation
- status: seed
- depends-on: forms
- introduced: —
- last-reviewed: —
- evidence: —

## error-handling
- status: seed
- depends-on: js-functions
- introduced: —
- last-reviewed: —
- evidence: —

## deployment-workflow
- status: seed
- depends-on: render, source-control-git
- introduced: —
- last-reviewed: —
- evidence: —

## production-env-vars
- status: seed
- depends-on: environment-variables
- introduced: —
- last-reviewed: —
- evidence: —

## git-push-to-deploy
- status: seed
- depends-on: source-control-git, deployment-workflow
- introduced: —
- last-reviewed: —
- evidence: —

## end-to-end-review
- status: seed
- depends-on: deployment-workflow
- introduced: —
- last-reviewed: —
- evidence: —

## bug-fixing
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## ui-polish
- status: seed
- depends-on: css-basics
- introduced: —
- last-reviewed: —
- evidence: —
