# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## source-control-git
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted git status output before running it, correctly distinguished tracked/modified vs untracked files, reasoned that README/learning/.claude deserved separate commits rather than being bundled with the page files, correctly predicted staged and post-commit git status output, wrote a descriptive commit message from scratch, and after an initial "not sure" on git log, correctly reasoned out that it would show message + author, then confirmed the actual hash/date/message output

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
- status: introduced
- depends-on: none
- introduced: 2026-08-04
- last-reviewed: 2026-08-04
- evidence: locked as full-stack language; existing exposure from coursework

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
- last-reviewed: 2026-08-04
- evidence: correctly explained why <h1> goes in <body> not <head> ("body displays content... head is metadata... if moved to head it would show a blank page"), and correctly predicted <h1> would render as big bold text before running

## css-basics
- status: practicing
- depends-on: html-css
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly explained why the stylesheet link goes in <head> ("metadata task... not for the user but for the browser"), correctly predicted font-family on body would cascade to all child text and nothing else, wrote the body rule correctly, and independently wrote a second rule (h1 { color: #333; }) with correct selector/property syntax

## dom
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —

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
