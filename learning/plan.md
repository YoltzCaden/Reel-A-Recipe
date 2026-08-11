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

### 2. Making it interactive  [x] complete
**Deliverable:** Add a recipe or pantry item through a form and see it appear on the page instantly (no saving yet — gone on refresh).
**Concepts:** dom, event-listeners, js-functions, forms, js-objects-arrays

- [x] Create `app.js`, link it from `index.html`, and prove it runs in the browser console
- [x] Reach into the page from JavaScript and change some text on it (the DOM)
- [x] Add an HTML form with a text box and an "Add recipe" button (it won't do anything yet)
- [x] Listen for the form's submit event and log what was typed
- [x] Write a function that adds the typed recipe to the page as a new list item
- [x] Move the recipes into a JavaScript array and build the list from that array
- [x] Repeat the whole pattern for the pantry form, from memory

- [x] Refactor `addRecipe`/`addPantry` into one `addItem(name, list)` — unplanned,
  done on their own initiative immediately after spotting the duplication

### 3. A simple local server  [x] complete
**Deliverable:** A running Express server that responds when you visit it locally.
**Concepts:** npm-package-json, express-routes, http-request-response, localhost-ports

- [x] Install Node.js and prove it runs JavaScript outside the browser
- [x] Create `package.json` with `npm init` and read what's inside it
- [x] Install Express with `npm install` and tour what appeared (`node_modules/`, `package-lock.json`)
- [x] Write the smallest Express server that starts and listens on a port
- [x] Add a route that responds with text, and visit it in the browser
- [x] Commit the server to git

### 4. Frontend talks to the server  [x] complete
**Deliverable:** The page fetches recipe data from the Express server instead of using hardcoded JS.
**Concepts:** fetch-api, json, async-await

- [x] Add a route in `server.js` that responds with the recipes array as JSON
- [x] Predict what visiting that route in the browser will show, then check
- [x] In `app.js`, replace the hardcoded `recipes` array with a `fetch()` call to the new route, and render the list from the response
- [x] Repeat the pattern for pantry, from memory
- [x] Commit the change to git

### 5. Making it look like a real app  [x] complete
**Deliverable:** The page has a proper centred layout, styled forms and lists, a consistent colour palette, and holds up at phone width.
**Concepts:** css-classes, box-model, flexbox, responsive-basics, colour-and-typography

- [x] Wrap the page content in a container `<div>`, give it a class, and style it (max-width, centred margin) so the page stops stretching edge to edge
- [x] Add classes to the recipe and pantry sections and space them apart with box-model properties (padding/margin)
- [x] Style the forms and their inputs/buttons (borders, padding, spacing) using classes
- [x] Pick a small colour palette and apply it consistently to headings, buttons, and backgrounds
- [x] Use flexbox to lay an input and its button out side by side
- [x] Add a media query so the layout holds up at phone width

### 6. Remembering things  [ ] not started
**Deliverable:** Recipes and pantry items are saved in PostgreSQL and survive a refresh or server restart.
**Concepts:** sql-basics, tables-schema, node-postgres-connection, environment-variables, primary-keys

- [x] Install PostgreSQL, start the service, and connect with `psql` to prove it's running
- [ ] Create a database and a `recipes` table by hand in `psql`, choosing columns/types and a primary key
- [ ] Repeat the pattern for a `pantry` table, from memory
- [ ] Install `pg` (node-postgres) and write a small script that connects and runs one query
- [ ] Move the connection details into an environment variable instead of hardcoding them, and keep them out of git
- [ ] Replace the `/recipes` route in `server.js` with a real database query
- [ ] Repeat the pattern for `/pantry`, then wire both "Add" forms to insert into the database, from memory

### 7. The core feature  [ ] not started
**Deliverable:** The app shows which saved recipes you can make right now from your pantry, and builds a shopping list of missing ingredients for a chosen recipe.
**Concepts:** relational-joins, many-to-many-relationships, backend-business-logic

### 8. Tests and safety rails  [ ] not started
**Deliverable:** Automated tests checking the matching logic works correctly, plus basic input validation (e.g. can't add an empty recipe).
**Concepts:** automated-testing, input-validation, error-handling

### 9. Going live  [ ] not started
**Deliverable:** The app is deployed on Render with a live database, reachable from your phone at a real URL.
**Concepts:** deployment-workflow, production-env-vars, git-push-to-deploy

### 10. Finishing the MVP loop  [ ] not started
**Deliverable:** All four MVP features (recipe box, pantry, matching, shopping list) work end-to-end on the live app, polished enough to actually use for real grocery shopping.
**Concepts:** end-to-end-review, bug-fixing, ui-polish
