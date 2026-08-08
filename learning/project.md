# Project: Reel-A-Recipe

## About me
- Studying Computer Science; has written code before, mostly in structured university/coursework settings rather than as a regular habit
- Already comfortable using the command line
- Wants to learn to code to build software that solves real problems (for themself and others), and to build a habit of shipping projects
- Outside interests: reading, guitar, video games, and cooking new dishes now that uni has given more free time
- Learns best through concrete, real-world examples rather than abstract/theoretical explanations (e.g. explained frontend/backend via a coffee shop analogy)

## The idea
A personal cooking app: build a recipe box of recipes you know (with their ingredients), track a pantry of what you currently have, and let the app match the two — showing which recipes you can cook right now and generating a shopping list for whatever's missing. Motivated by real UK-student budgeting pain: overbuying ingredients you already own, and feeling overwhelmed trying to figure out what to cook from what's on hand.

## MVP
### In
- Recipe box — add a recipe with its name and ingredient list
- Pantry — add/remove ingredients you currently have
- Matching — see which saved recipes you can make right now with what's in your pantry
- Shopping list — for a recipe you want to make, generate a list of what's missing

### Parking lot (v2)
- Budget/cost tracking, waste/expiry nudges
- Video content, social feed, sharing recipes/videos with others (original README concept)
- UK ingredient-substitute finder
- Recipe importing/scraping from links or Instagram

## Design
### Colour palette (locked, Section 5)
- Background (`Ground`) — `#f3f2f2`, warm near-white
- Text (`Ink`) — `#201e1d`, near-black, used for all type and rule lines
- Accent — `#ec3013`, hot red, used sparingly: primary buttons, headings, anything meant to draw the eye

### Parked from the same source palette (not used yet)
- Neutrals — a 100–900 grey ramp, for secondary copy, unfilled chips, and hairline row rules. Comes due if/when the UI grows secondary text or chip-style tags.
- Scan overlay — `#111010`, a dark surface meant to make a camera view read as a distinct mode. Comes due only if a scan-to-add feature (e.g. scanning a receipt or pantry item) gets built — not currently in the MVP or parking lot.

## The trunk — core components
### Source control (Git)
The save-and-undo system professionals use. Every change gets a checkpoint you can return to — used from day one, before there's even an app.

### Frontend / User Interface
What you see and click: the screen where you add a recipe, add pantry items, and see which recipes you can cook right now.

### Backend / Application logic
The "brain" behind the scenes — runs the matching logic (comparing recipe ingredients against your pantry) and builds the shopping list.

### Database
Where your recipes, pantry items, and lists actually live so they're still there tomorrow instead of vanishing when you close the app.

### API
The agreed way the frontend and backend talk to each other — the frontend asks "what can I cook?", the backend answers with a list.

### Where it runs
Your own laptop while building it, versus a real server once it's live for anyone (including you, from your phone) to use.

### Deployment
The process of actually publishing it onto the internet, turning "it works on my machine" into "it works at a real address."
