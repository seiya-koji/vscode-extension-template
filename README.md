# VS Code Extension Template

A batteries-included template for building VS Code extensions with TypeScript.

## What's included

- **TypeScript** (CommonJS, ES2022) — `tsconfig.json` / `tsconfig.test.json`
- **Vitest** with a `vscode` API mock — `vitest.config.ts`, `__mocks__/vscode.ts`
- **ESLint + Prettier** — `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`
- **Husky + commitlint** — pre-commit (lint + format) and Conventional Commits enforcement
- **GitHub Actions** — CI (lint / format / type-check / test), PR title check, and release-please with Marketplace publishing
- **Dev Container** — `.devcontainer/devcontainer.json`
- **Hello World sample** — `src/extension.ts` with a registered command and a matching test

## Getting started

1. Click **Use this template** on GitHub to create your repository (or clone this repo).
2. Update `package.json`: `name`, `displayName`, `description`, `publisher`, and the `contributes` section.
3. Implement your extension in `src/extension.ts`.
4. Install dependencies and run the checks:

   ```bash
   npm install
   npm run lint
   npm run format:check
   npm run compile
   npm test
   ```

   > **Note:** `npm install` generates `package-lock.json`. Commit it — the CI uses `npm ci`, which requires a lockfile. Generate it inside the dev container (Linux) so every platform's optional native dependency is recorded; otherwise the CI test step can fail with a missing native binding.

5. Press `F5` in VS Code to launch the Extension Development Host and try the **Hello World** command.

## Releasing (optional)

The `release-please` workflow opens a release PR from your Conventional Commits and, on merge, publishes to the VS Code Marketplace. Set these repository secrets:

- `RELEASE_PLEASE_PAT` — a PAT for release-please to open release PRs
- `VSCE_PAT` — a Marketplace token for publishing

## Scripts

| Script            | Description                    |
| ----------------- | ------------------------------ |
| `npm run compile` | Type-check and build to `out/` |
| `npm run watch`   | Incremental build              |
| `npm test`        | Run tests with Vitest          |
| `npm run lint`    | Lint `src/`                    |
| `npm run format`  | Format with Prettier           |
| `npm run package` | Build a `.vsix`                |

## License

MIT
