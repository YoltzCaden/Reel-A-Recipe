# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## source-control-git
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted git status output before running it, correctly distinguished tracked/modified vs untracked files, reasoned that README/learning/.claude deserved separate commits rather than being bundled with the page files, correctly predicted staged and post-commit git status output, wrote a descriptive commit message from scratch, and after an initial "not sure" on git log, correctly reasoned out that it would show message + author, then confirmed the actual hash/date/message output. Immediately after, independently repeated the add-then-commit workflow unprompted for a second, unrelated group of files (docs + tool config), correctly distinguishing the two categories after one refresher on .claude/. Later that day, ran the full stage-and-commit cycle twice more with no command dictated beyond `git add`, writing both messages themselves ("Add simple JS print message", "Add learning docs and docs for Claude") and keeping app code separate from notes/config. Later: spotted independently that local commits and the GitHub remote are not the same thing — see [[git-remotes]]. 2026-08-06: predicted `git status` correctly twice in one lesson, before and after adding a `.gitignore`, and distinguished untracked from modified without prompting. Wrote both of the day's commit messages themselves → [[gitignore]]

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
- status: practicing
- depends-on: javascript
- introduced: 2026-08-04
- last-reviewed: 2026-08-05
- evidence: asked to clarify vs Express; correctly restated "Node.js runs the JavaScript". 2026-08-05: asked what would stop `app.js` running in the terminal, answered unprompted and correctly with the mechanism, not the symptom — "there is no document to grab an object h1... app.js requires a document to run on". Correctly predicted `node --version` would report command-not-found from their own memory of never installing it, installed Node 24 on Fedora themselves, then ran a JS file from the terminal and correctly predicted its output would land in the terminal rather than DevTools. Holds the split: the language runs anywhere, `document` is the browser's. 2026-08-06: ran `node index.html` after correctly predicting a SyntaxError, and met the rule that Node reads every file handed to it as JavaScript regardless of extension → [[syntax-vs-runtime-errors]]

## express
- status: practicing
- depends-on: nodejs, package-managers
- introduced: 2026-08-04
- last-reviewed: 2026-08-06
- evidence: "Using Express would give me a more hands-on understanding... nothing handed to me like Django". 2026-08-06: installed it, but the concept check beforehand missed — asked what Express does that plain Node doesn't, answered "it is going to host my project on my laptop", which is Node's job, not Express's. Was told the actual distinction (raw Node funnels every request into one function and you hand-write the URL if/else; Express turns that into named routes) rather than retrieving it. Did then explore the installed package on disk and correctly identify it as ordinary JavaScript files someone else wrote. 2026-08-06 (later): debt paid on re-check. First answer was still generic ("saves me from rewriting existing code"), but given one concrete scaffold — three different URLs all arriving at the same function — named the actual problem Express solves without further help: "an if else statement for each url". Then built and ran a working Express server, and read its 404 correctly. Retrieved with a nudge rather than cold, so `practicing` not `understood`

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
- evidence: correctly predicted that a JS change to the h1 would survive a refresh, and unprompted added "save the file first" as a required step. Then correctly reasoned the opposite case — the same change typed into the console does NOT survive, because "the change is not saved to the disk but rather the browser". Predicted the element-vs-text distinction wrong twice (expected both `querySelector("h1")` and `.textContent` to return the content) and closed the gap immediately on seeing the real output. Confidently predicted that one `querySelector("h2")` call would change both h2s, ran it, saw only the first change. Wrote `heading.textContent = "Reel-A-Recipe";` into app.js as a fill-in with no example line, then composed `document.querySelector("#pantry-heading").textContent = "My Pantry";` from scratch given only the hint that ids are written with `#`. Reinforced later the same day: saw first-hand that the DOM the browser builds can differ from the HTML on disk, when a mistyped comma showed up in the Inspector as an invented attribute that they had not written. Reinforced again: distinguished `.textContent` (text between tags) from `.value` (a control's current contents) by testing both in the console

## devtools-inspector
- status: practicing
- depends-on: dom
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: opened the Elements/Inspector panel for the first time (guided), found their own `<input>` in the live DOM, and read its attributes back accurately — including noticing which of two stray commas survived and which had vanished, a detail sharp enough that it corrected my own expectation. Took the point that a page can render fine and still be wrong, and that the Inspector is how you tell

## dom-create-append
- status: practicing
- depends-on: dom
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted that `document.createElement("li")` plus a textContent assignment would change nothing on the page — the element exists in memory, attached to nothing. Then correctly predicted that `appendChild` would place it at the bottom of the list. Wrote all three steps (create, fill, append) into their own function afterwards with no example to copy

## js-type-coercion
- status: introduced
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: passed the `input` element where `input.value` was needed, correctly said "it won't show the value, that's all i know" rather than guessing, then ran it and saw `[object HTMLInputElement]` land in the list. Met the rule that `[object Something]` in the UI means an object was passed where text was expected. Has not yet met coercion in any other form (string/number, truthiness)

## js-loops
- status: practicing
- depends-on: js-objects-arrays
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: wrote a `for...of` loop over `recipes` calling addRecipe for each item, from a neutral `for (const colour of colours)` example and a written spec — correct syntax and correct body first time. Has only met `for...of`; classic index-counting `for` loops and array methods like forEach/map not yet introduced. 2026-08-05 (later): wrote the same loop shape again from memory into a scratch Node file with no example on screen, correct first time, swapping the body from `addItem` to `console.log` unprompted

## data-driven-rendering
- status: practicing
- depends-on: js-objects-arrays, dom-create-append
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted that adding the loop while the `<li>` tags were still hardcoded would render six recipes, each duplicated — the concrete cost of the same data living in two places. After emptying the `<ul>`, took the point that index.html now contains no recipes at all and the page is built from the array. Spotted unprompted that a pushed recipe vanishes on refresh, and connected it to the array being rebuilt from app.js on every load

## js-runtime-errors
- status: practicing
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: deliberately misspelled `recipes` as `recipess` in the loop and correctly predicted a loud ReferenceError plus a dead page — both the list and the form stopped working. Then, asked what the `<h1>` said, answered "it says Reel-A-Recipe so the script stopped at the loop", deducing from what still worked exactly where execution halted. Holds the rule that an uncaught error stops the script at that line, so several simultaneous failures usually mean one error near the top. 2026-08-05 (later): predicted a ReferenceError for `document` in Node — not independently, but immediately once pointed back at their own `recipess` misspelling, so the "name JavaScript can't find → loud ReferenceError" rule transferred across environments

## stack-traces
- status: introduced
- depends-on: js-runtime-errors
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: read their first Node stack trace — met the caret/column pointer (`app.js:6:17`) and confirmed from it that execution died on `document`, never reaching `.querySelector`. Met the rule "read top-down, stop at the first line naming a file you wrote; everything below is Node's plumbing". Asked why a failure inside `addItem` would produce two `app.js` frames, said "not sure", and after a hint got the first frame (where it broke) but not the second (who called it) — the caller/call-site half was told, not retrieved. Has not yet read a stack trace for a bug they didn't set up

## client-vs-server
- status: introduced
- depends-on: nodejs, frontend-ui, backend-logic
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: asked whether `server.js` will be able to call `document.querySelector`, answered "yes, because the server will serve the html document for app.js to work on" — the classic conflation of *sending* a document with *having* one. Given a scaffold about timing and location (Node runs server.js possibly for hours before any visitor; the browser builds the DOM from the text it receives, on the visitor's machine), corrected it themselves: "it exists on my laptop and the server cannot reach it". The correction was guided, not independent — re-check this before Section 4, where it's load-bearing. 2026-08-06 re-check, and it did not hold clean: asked whether npm's guess of `"main": "app.js"` was right, said "Yes. If node tries to run it there will be a ReferenceError" — holding the correct fact and the wrong conclusion in one sentence. Shown the contradiction, picked the right half without further help ("the yes gives, main should not be app.js"). Then answered `index.html` instead — reasoning from what starts the app *for a user* rather than what Node can execute. Only settled it by running `node index.html` themselves and seeing the SyntaxError, having predicted it correctly. The distinction now has a hard experiment behind it rather than an analogy, but two wrong answers on the way means it is still not automatic — keep watching it through Section 4

## package-managers
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: asked to install two named packages, correctly predicted dnf would list more than two — "since they will have dependencies" — and saw seven. Read the transaction summary with help: noticed `nodejs24-bin` is 154 KiB while the real engine `nodejs24-libs` is 62.8 MiB, and met "weak dependencies" as optional extras. Also met the `[y/N]` capital-letter-is-the-default convention. Comes due again immediately in [[npm-package-json]], where npm does the same job for JavaScript libraries. 2026-08-06: met the second package manager, npm, and correctly deduced from memory of the dnf transaction that it had already arrived alongside Node. Met the scope distinction — dnf manages software for the whole machine, npm manages libraries for one project folder. 2026-08-06 (later): ran their first `npm install`. Predicted `node_modules/` would appear from prior exposure, and predicted unprompted that Express would arrive "with all the other packages express is dependent on, these are called dependencies" — using the term correctly and transferring the reasoning straight from the dnf transaction. Then went past the fact to the mechanism: after finding a `package.json` inside `node_modules/express`, explained without help how one request became 65 folders — "npm read express's package.json and installed its dependencies too" → [[dependency-tree]]

## js-undefined
- status: introduced
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: deliberately misspelled `input.value` as `input.valu` and predicted it would throw an error. It logged `undefined` instead. Met the distinction between a misspelled property (silent `undefined`) and a misspelled variable (loud `ReferenceError`), but has only seen the first of those two failures happen. Same day: met the *other* undefined — a function with no `return` — and explained it correctly and unprompted. Holds the distinction that `undefined` is only a bug when a value was expected

## git-remotes
- status: practicing
- depends-on: source-control-git
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: noticed unprompted, mid-lesson, that six commits had never been pushed and asked why. Correctly predicted both halves of `git push` — that the six commits would go to GitHub and that the uncommitted `app.js` edit would stay local. Ran the push. Also asked whether pushing was in the plan, which it was not until Section 8; the concept was pulled forward on their own initiative

## html-error-recovery
- status: practicing
- depends-on: html-structure
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: third encounter with malformed HTML that still worked — stray commas became an invented attribute, an id on a closing tag was discarded, and `type="sumbit"` fell back to "submit". Predicted the button typo would break the form ("it won't work but i'm not too sure"), tested it, and found it worked. Formed their own hypothesis about which mechanism was responsible — the input rather than the button — which turned out to be correct for the Enter case. Holds the contrast: HTML guesses and carries on, JavaScript stops dead

## refactoring
- status: practicing
- depends-on: js-functions
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: spotted the duplication between addRecipe and addPantry themselves, then went away and did the refactor unprompted between lessons. The target shape — `addItem(name, list)` — was shown to them in chat, but the edit was entirely theirs. Changed the definition without updating the four call sites; when asked to predict, said "it will throw a ReferenceError and nothing will render", which was exactly right, then fixed all four. Took the point that a refactor must preserve behaviour, and verified by exercising both forms by hand

## js-naming-conventions
- status: practicing
- depends-on: js-variables
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: renamed `form`/`input`/`list` to `recipeForm`/`recipeInput`/`recipeList` on their own initiative once a second set existed, correctly reasoning that bare names were now ambiguous. Did it first in snake_case; once told JavaScript uses camelCase, converted all twelve occurrences across declarations and uses with no stragglers left behind

## js-variables
- status: introduced
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: met `const heading = document.querySelector("h1");` in app.js (agent-written) and correctly wrote the next line against it — `heading.textContent = "Reel-A-Recipe";` — showing they understood the name was pointing at the element. Has not yet written a `const` themselves or explained in their own words what const means vs. let

## html-attributes
- status: practicing
- depends-on: html-structure
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: added `id="pantry-heading"` to a specific <h2> from a shown example, then used that id to address that one element from JavaScript. Understood the purpose — naming one element so it can be picked out from among identical siblings. 2026-08-05 (later): wrote three attributes onto one `<input>` tag from a spec, but separated them with commas (a JavaScript/Python carry-over). Correctly spotted the difference when pointed at their own working `<link>` tag ("the link tag is space separated, the input tag is comma separated") but drew the wrong conclusion about which was correct, and needed to be told. Then predicted the browser would discard the stray commas; inspected the live DOM and found one had become an attribute literally named `,`. Fixed it and verified in the Inspector. 2026-08-05 (later): put `id="recipe-list"` on a closing `</ul>` tag as well as the opening one, then reasoned out why that's meaningless when asked what a closing tag's job is ("the /ul tag closes the list wrapper"). Also ended up with the same id on two different `<ul>` elements; when shown, stated both rules correctly without help — ids must be unique, and querySelector returns the first match

## event-listeners
- status: practicing
- depends-on: dom
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: wrote the body of a submit listener themselves (the console.log line, then `event.preventDefault();`), and placed preventDefault first in the body unprompted. Correctly predicted the pre-preventDefault behaviour ("it will log Form Submitted! then the page reloads") and watched the log flash and vanish with the reload. Then correctly predicted all three consequences of preventDefault — log stays, no reload, typed text stays in the box. Has not yet written an `addEventListener` call from scratch; the call and its `function (event)` wrapper were given

## js-functions
- status: practicing
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: met an anonymous function passed as an argument to addEventListener, and the idea that you hand a function over for the browser to call later rather than calling it yourself. Wrote statements inside the function body correctly, including using the `event` parameter. Debt paid the same day: wrote their first complete function unaided — `addRecipe(name)` with a correct declaration, one parameter, and a three-line body — from a written spec and a neutral `greet()` example, with no example of this function to copy. Called it from the console with a correct prediction of the result. When the console printed `undefined` after the call, reasoned it out themselves: "it doesn't return anything so it evaluates to undefined". Still has not written a function that *returns* a value. 2026-08-05 (later): wrote a second function, `addPantry`, from memory with no spec beyond "repeat the pattern". Then spotted unprompted that it and `addRecipe` differ only in which list they append to, and said "this could become one function" — reaching for an `if` to distinguish them rather than a parameter, which is the right instinct via a costlier route. Refactor parked in plan.md

## forms
- status: practicing
- depends-on: html-structure
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: wrote the `<input>` and `<button type="submit">Add Recipe</button>` from a written spec with no example markup to copy, and got the void-element rule right (no `</input>`). Predicted "nothing will happen" on clicking the submit button with zero JS wired up; ran it and reported the real result accurately — page reloaded, typed text gone, `?` appended to the URL. 2026-08-05 (later): stopped that default behaviour with `event.preventDefault()`, and learned that a text box's typed content lives in `.value`, not `.textContent` — ran `input.textContent` in the console, got an empty string, and connected it back to `<input>` being a void element with no inside to read. 2026-08-05 (later): built a second complete form from a written spec with no skeleton — form, input, submit button, correct ids — and wired it up end to end. Also met two ways a form submits: implicit submission (Enter in a single-input form, which they hypothesised themselves) and a submit button. Learned that an invalid `type` on a `<button>` falls back to "submit"

## js-objects-arrays
- status: practicing
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly predicted `testList[1]` returns "b", showing they already had zero-indexing. Wrote `const recipes = [...]` as an array literal unaided. Reasoned out unprompted that a recipe added through the form would NOT be in the array, and gave the right reason — addRecipe only touches the page. Wrote `recipes.push(input.value)` from the method name alone, and correctly predicted the console would show four items afterwards. Has only met arrays of strings; objects not yet introduced despite the concept name

## html-lists
- status: understood
- depends-on: html-structure
- introduced: 2026-08-04
- last-reviewed: 2026-08-05
- evidence: wrote a second ul/li list from memory with no example shown, found her own missing </ul> by comparing to working code, and correctly predicted the browser would render fine anyway due to error recovery ("only problem would be if any code written after it")

## npm-package-json
- status: practicing
- depends-on: nodejs, package-managers
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: predicted `npm --version` would report a version *before* running it, and gave real evidence rather than a guess — recalled the package name `nodejs24-npm-bin` scrolling past in the previous day's dnf transaction. Ran `npm init` and accepted the defaults. Predicted the resulting file would be "filled with dependencies installed"; on seeing no `dependencies` key at all, immediately gave the correct reason unprompted — "because I haven't installed any". Wrote their own one-sentence `description` replacing the markdown npm had scraped out of README.md. Got `main` wrong twice before getting it right (see [[client-vs-server]]), which is where the real learning was. 2026-08-06 (later): saw the `dependencies` field appear on the first `npm install`, exactly as they had reasoned the day before → [[dependency-tree]]

## syntax-vs-runtime-errors
- status: practicing
- depends-on: js-runtime-errors
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: met the split by running their own two files through Node — `app.js` parsed fine and died at `document` with a ReferenceError (failed *while running*), `index.html` never parsed at all and died with a SyntaxError (failed *while reading*). Predicted the `index.html` SyntaxError before running it. Then transferred the distinction unaided to a third case: asked whether a missing comma in package.json would fail like the ReferenceError or the SyntaxError, chose SyntaxError with the correct reason — "because the file cannot be read". Also worked out unprompted why a parse error names the line *after* the mistake ("it kept reading until it found something wrong"), and met the rule: a parser reports where it noticed, not where you erred — when the flagged line looks fine, check the line above → [[json]], [[stack-traces]]

## dependency-tree
- status: practicing
- depends-on: package-managers, npm-package-json
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: predicted ~10 entries in `node_modules` and found 65 — the gap did the teaching. Met the three-way split: `package.json` is the shopping list (what you asked for), `node_modules/` is the delivered goods (machine-made, never edited, always rebuildable), `package-lock.json` is the itemised receipt pinning exact versions. Met caret ranges (`^5.2.1` = 5.2.1 or newer within 5.x) as the reason a lock file has to exist. Explained the recursion themselves once shown that Express ships its own `package.json`. Has not yet deleted and rebuilt `node_modules` to prove the "always rebuildable" claim first-hand → [[gitignore]]

## gitignore
- status: practicing
- depends-on: source-control-git
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: asked which of `node_modules/` and `package-lock.json` belonged in git, answered correctly and gave *both* independent reasons unprompted — "I can always build node_modules back from scratch using package-lock" and "all the packages node_modules will hold would use up a lot of space". Wrote `.gitignore` themselves from a spec, correct filename, correct trailing-slash convention, no example to copy. Then predicted the exact post-ignore `git status` — `.gitignore` and `package-lock.json` untracked, `node_modules` gone — and spotted that `package.json` had also become *modified*, which was not part of the question. Has only met the folder-name pattern; wildcards and negation not yet introduced

## shell-pipes
- status: introduced
- depends-on: none
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: ran `ls node_modules | wc -l` after being told what both halves do. The `|` and `wc -l` were explained, not retrieved — no independent evidence yet. Re-check by asking them to count something else

## express-routes
- status: practicing
- depends-on: express, http-request-response
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: met routes as the thing Express exists to provide, and diagnosed their absence from a real 404 — "it doesn't have a route for /". Same day: wrote their first route. Given the shape `app.get(path, handler)` and told that `response.send()` replies, filled in both gaps themselves — read the path `/` off the `Cannot GET /` message rather than being told it, and wrote `response.send("Welcome to my Express server!")` with no example line to copy. Then predicted `Cannot GET /recipes` for an unregistered path and confirmed it, showing they hold that a route matches one specific path and nothing else. Has only written `app.get`; POST and other methods, route parameters, and `res.json` not yet introduced

## server-restart-required
- status: practicing
- depends-on: long-running-processes, disk-vs-editor-buffer
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: hit this unprompted and in the wild. Added a route, saved, refreshed, saw no change, and diagnosed and fixed it themselves before being asked to predict anything — "I was trying to get the message to show up but it didn't so i shut the server and started it again and that fixed it". Fixed by trial, but then gave the mechanism cold when asked why: "node reads the file once when it starts". Met the asymmetry with the browser — a refresh re-fetches `app.js`, but a refresh cannot reach into an already-running Node process. Told that file-watching auto-restart tools exist; deliberately not installed → parked

## commonjs-require
- status: introduced
- depends-on: nodejs, dependency-tree
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: met `const express = require("express");` and the fact that Node files share nothing unless explicitly imported. Asked where Node physically looks when that line runs, answered `node_modules` correctly — a connection they made rather than one I stated. Met that this is CommonJS, the module system their own `package.json` already declared with `"type": "commonjs"`, and that `import` is the newer alternative. Has not yet written a `require` line themselves, nor exported anything from a file of their own

## callbacks
- status: practicing
- depends-on: js-functions, event-listeners
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: generalised the pattern across two unrelated APIs. Having previously written the body of an `addEventListener` callback, wrote the body of the `app.listen` callback from the analogy alone — you hand a function over and something *else* decides when to call it. Understood why the "server is running" message belongs inside the function rather than on the following line: Express calls it only once the server is genuinely accepting connections. Has still not written the `function () { ... }` wrapper itself from scratch — all three times it was given. 2026-08-06 (later): met the third instance of the pattern in `app.get`, and the distinction that matters — `app.listen`'s callback runs once at startup, `app.get`'s runs every time a matching request arrives

## long-running-processes
- status: practicing
- depends-on: nodejs, localhost-ports
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: asked whether the shell prompt would come back after `node server.js`, answered no and gave the reason plus the escape hatch unprompted — "the server will be running, like a process in a terminal for which i have to ctrl+c to shut it down". Holds the contrast with every previous Node run, which reached the end of the file and exited; `listen` keeps the process alive waiting for connections

## http-request-response
- status: practicing
- depends-on: nodejs, client-vs-server
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: was told what `GET` and `/` mean in the message `Cannot GET /`, then supplied the conclusion themselves — "it doesn't have a route for /". Correctly separated the two failure modes by prediction: a 404 is the server *replying* that it has nothing for that URL, while `ERR_CONNECTION_REFUSED` is no reply at all. Took the point that a server sends only what it is told to send — `index.html` sat in the same folder and was not served. Has only met `GET`; other methods, status codes as numbers, and headers not yet introduced → [[express-routes]]. 2026-08-06 (later): met the request/response pair as the two arguments Express hands a route handler, and that nothing is sent to the browser until `response.send` is called. Then closed the loop they opened earlier — the same `Cannot GET` message they had diagnosed as a missing route was made to disappear by adding that route, and reappeared on a different path

## localhost-ports
- status: practicing
- depends-on: nodejs
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: chose 3000 from a spec ("above 1024, 3000 is the Node convention") and wrote it into `app.listen` themselves. Asked what URL would reach the running server, answered `localhost:3000` unprompted. Then predicted `ERR_CONNECTION_REFUSED` after Ctrl+C and gave the mechanism, not just the symptom — "the server has stopped at the port and a connection is severed". Holds the fork: a reply you don't like (404) means look at your code, silence (connection refused) means look at whether the server is up. Met the port-as-numbered-door model and the below-1024-is-reserved rule, but has not yet hit a port collision (`EADDRINUSE`)

## fetch-api
- status: seed
- depends-on: express-routes, dom
- introduced: —
- last-reviewed: —
- evidence: —

## json
- status: practicing
- depends-on: none
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: first contact via package.json, pulled forward from Section 4. Hand-edited two values in a real JSON file without breaking it, then broke it deliberately: removed one comma and correctly predicted the failure would be a SyntaxError "because the file cannot be read" — choosing parse-time over run-time for the right reason, unprompted. Read the resulting EJSONPARSE error and worked out on their own why it names line 17 when the comma was deleted from line 16 ("it kept reading until it found something wrong"). Met the rule that a parser reports where it *noticed*, not where you erred. Met that JSON has no comments. Has only met JSON as a config file on disk — not yet as data sent over a network, which is where it comes due in Section 4 → [[fetch-api]]

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
- evidence: — (parked deliberately on 2026-08-05: submitting the empty form currently adds a blank list item. Named out loud as a known gap, comes due in Section 7)

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
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: located where a script stopped executing by reasoning about which effects had and hadn't happened, rather than by reading the stack trace. That is real debugging reasoning, but it was a break I set up deliberately with a prediction asked for in advance — they have not yet diagnosed a bug they didn't know was coming. See [[js-runtime-errors]]. 2026-08-05 (later): predicted the exact failure of their own half-finished rename before running it, and learned that four broken call sites produce one error at a time because the script halts at the first — so "fix, refresh, repeat" is the expected workflow, not a sign of going in circles. 2026-08-06 (later): **the standing debt on this concept is paid** — diagnosed and fixed a failure nobody had set up for them and nobody had warned them about, silently, mid-lesson. Saved a correct route, saw the browser not change, and restarted the server on their own initiative. The fix came before the explanation, which is the normal order for real debugging → [[server-restart-required]]. 2026-08-06: read an npm EJSONPARSE error they had not seen before and located the real cause a line above where the error pointed, reasoning it out rather than being told → [[syntax-vs-runtime-errors]]

## css-classes
- status: seed
- depends-on: css-basics, html-attributes
- introduced: —
- last-reviewed: —
- evidence: —

## box-model
- status: seed
- depends-on: css-basics
- introduced: —
- last-reviewed: —
- evidence: —

## flexbox
- status: seed
- depends-on: box-model
- introduced: —
- last-reviewed: —
- evidence: —

## responsive-basics
- status: seed
- depends-on: flexbox
- introduced: —
- last-reviewed: —
- evidence: —

## colour-and-typography
- status: seed
- depends-on: css-basics
- introduced: —
- last-reviewed: —
- evidence: —

## ui-polish
- status: seed
- depends-on: css-basics, flexbox, colour-and-typography
- introduced: —
- last-reviewed: —
- evidence: —
