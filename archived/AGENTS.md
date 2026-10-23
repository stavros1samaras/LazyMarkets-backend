# AGENTS.md — `archived/`

Rules for working inside this folder. These are read in addition to the repository-level `AGENTS.md`, which always wins on conflict.

## 1. Purpose of this folder

- `archived/` is used to **archive some features of LazyMarkets**.
- **Archiving means:** the developer wants to get rid of this particular code — but does not want to delete it right now. The code is moved here and parked, so it can be brought back later.
- Therefore an archived feature must be **completely gone from the running app**: not mounted, not reachable, not imported by active code, and not present in the Swagger API. It merely stops existing for a period of time.
- Archived code is reference only. It is not imported at runtime and is not part of the running application.
- Do not delete anything from this folder unless the developer explicitly asks.

## 2. Archiving always moves the whole parent tree

Never drop a single loose file into `archived/`. When archiving, mirror the tree the file lives in, so its origin is obvious.

- **Archiving a single file** — if the developer says _"archive `balanceSheet.route.js`"_, create an `archived/routes/` folder and put `balanceSheet.route.js` inside it.
- **Archiving a whole feature / endpoint** — if the developer says _"archive the balance sheet feature"_, archive every layer that belongs to it, one folder per role:
  - `archived/routes/` → the balance sheet route
  - `archived/services/` → the balance sheet service
  - `archived/utils/` → the balance sheet utility

Keep file names unchanged when archiving. The folder structure inside `archived/` mirrors the role-based structure of the project — role folders only, no deep nesting.

## 3. Cut the feature out of the live app

Archiving is a move plus a disconnection, not a rewrite. When a feature is archived:

- **Unmount it.** Remove its route wiring (e.g. the `app.use(...)` registration and its import) so the endpoint no longer exists in the main app.
- **Remove its Swagger documentation.** Delete the archived endpoint's `@swagger` block from the active docs files, so it no longer appears in the Swagger API. The endpoint must be absent from both the app and the docs.
- **Do not update the imports inside the archived files.** Leave them exactly as they were, even if they no longer resolve from the new location. Archived code is frozen and is not expected to run.
- **Do not delete anything.** The code moves, it is not removed from the repository.
- **Keep everything else identical.** No other URL, response shape, status code, or Swagger entry may change.
- If a feature cannot be disconnected without touching unrelated behavior, stop and ask instead of forcing the move.

## 4. Keep the architecture the same

- The role-based structure of the project is preserved after archiving: the archived feature is still organized as route / service / utility, not flattened into a single file or a single folder.
- Active code must never import from `archived/`. Bundling the whole tree under its role folders is what keeps the original architecture recognizable and restorable.

## 5. Scope

- Archiving is the only task this folder triggers. Do not refactor, fix, or "improve" archived code.
- Do not create new work inside `archived/`. New code belongs in the active project structure.

## 6. Main endpoints vs. secondary endpoints

- **Main endpoints:** every endpoint under the `Countries` and `FHT` Swagger tags. These are the core of the app and are not archiving candidates unless the developer explicitly names one.
- **Secondary endpoints:** everything else. These are the ones that will be archived over time, as the developer asks for them one at a time.

When the developer asks to archive an endpoint:

1. **Check first whether archiving it breaks the app.** Trace the endpoint's route, its service, its utility, and every active file that imports any of them.
2. **If it breaks something, do not archive.** Inform the developer what would break and which file still depends on it.
3. **If it breaks nothing, archive the whole feature** — every layer of it — following §2, §3, and §4.
