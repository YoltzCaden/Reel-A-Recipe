# Learning plan: Reel-A-Recipe

## Locked decisions
- Language: JavaScript (Node.js) full-stack — one language for frontend and backend, avoids the "magic" that made Django hard to follow
- Backend framework: Express — minimal and unopinionated, every route is written by hand
- Frontend: Plain HTML, CSS, and vanilla JavaScript — the foundation React itself is built on; React is a planned v2 migration once fundamentals are solid
- Database: PostgreSQL — relational structure fits recipes/ingredients/pantry naturally, and works the same locally and once deployed
- Hosting: Render — beginner-friendly, hosts both the Express app and a free Postgres database in one place

## Sections
### 1. A page that renders locally  [x] complete
**Deliverable:** A static HTML/CSS page showing a hardcoded list of recipes and pantry items, viewable in the browser.
**Concepts:** html-structure, css-basics

- [x] Create `index.html` with a basic page skeleton and open it in the browser
- [x] Add a heading and a hardcoded list of recipes to the page
- [x] Add a hardcoded list of pantry items to the page
- [x] Create and link a CSS file, add basic styling
- [x] Commit the page to git

### 2. Making it interactive  [ ] not started
**Deliverable:** Add a recipe or pantry item through a form and see it appear on the page instantly (no saving yet — gone on refresh).
**Concepts:** dom, event-listeners, js-functions, forms, js-objects-arrays

- [x] Create `app.js`, link it from `index.html`, and prove it runs in the browser console
- [x] Reach into the page from JavaScript and change some text on it (the DOM)
- [x] Add an HTML form with a text box and an "Add recipe" button (it won't do anything yet)
- [x] Listen for the form's submit event and log what was typed
- [x] Write a function that adds the typed recipe to the page as a new list item
- [x] Move the recipes into a JavaScript array and build the list from that array
- [ ] Repeat the whole pattern for the pantry form, from memory

### 3. A simple local server  [ ] not started
**Deliverable:** A running Express server that responds when you visit it locally.
**Concepts:** npm-package-json, express-routes, http-request-response, localhost-ports

### 4. Frontend talks to the server  [ ] not started
**Deliverable:** The page fetches recipe data from the Express server instead of using hardcoded JS.
**Concepts:** fetch-api, json, async-await

### 5. Remembering things  [ ] not started
**Deliverable:** Recipes and pantry items are saved in PostgreSQL and survive a refresh or server restart.
**Concepts:** sql-basics, tables-schema, node-postgres-connection, environment-variables, primary-keys

### 6. The core feature  [ ] not started
**Deliverable:** The app shows which saved recipes you can make right now from your pantry, and builds a shopping list of missing ingredients for a chosen recipe.
**Concepts:** relational-joins, many-to-many-relationships, backend-business-logic

### 7. Tests and safety rails  [ ] not started
**Deliverable:** Automated tests checking the matching logic works correctly, plus basic input validation (e.g. can't add an empty recipe).
**Concepts:** automated-testing, input-validation, error-handling

### 8. Going live  [ ] not started
**Deliverable:** The app is deployed on Render with a live database, reachable from your phone at a real URL.
**Concepts:** deployment-workflow, production-env-vars, git-push-to-deploy

### 9. Finishing the MVP loop  [ ] not started
**Deliverable:** All four MVP features (recipe box, pantry, matching, shopping list) work end-to-end on the live app, polished enough to actually use for real grocery shopping.
**Concepts:** end-to-end-review, bug-fixing, ui-polish
