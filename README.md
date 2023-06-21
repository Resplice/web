# Resplice Web

This is the monorepo for all Resplice web products

## Build & Run

### Node

Use this method if you have node installed on your local machine:

1. Install dependencies.

```sh
npm install
```

2. Build shared packages

```sh
npm run build:packages
```

3. Build applications

```sh
npm run build:apps
```

4. Finally, run the application of your choice.

```sh
npm run preview:resplice
```

or

```sh
npm run preview:reauth
```

## Development

### Structure

This repo is a monorepo with NPM workspace support. Here is an outline of its structure:

- `apps/*`: This workspace contains all web applications.
  - `reauth`: This is the web application containing the resplice authentication flow.
  - `resplice`: This is the main consumer web application.

- `packages/*`: This workspace contains all shared packages across web apps and sites.
  - `components`: This is the share svelte component library for all web apps.
  - `proto`: This is the TypeScript library generated from Resplice protobuf files.
  - `utils`: This is a library containing common utility functions for web apps and sites.

- `sites/*`: This workspace contains all marketing and analytic sites.
  - `stats`: This is the public analytics site for Resplice.

### Setting Up A Development Environment

1. Install [NodeJS](https://nodejs.org/en/) or [nvm](https://github.com/nvm-sh/nvm)

2. Install workspace dependencies: `npm install`

3. Build libraries: `npm run build:libs`

4. Spin up the Vite dev server: `npm run dev:resplice`
