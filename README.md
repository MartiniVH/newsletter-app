# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Basic Newsletter app with Svelte

This is a basic newsletter app with the JSON placeholder API, TailwindCSS, Svelte and Tanstack Query.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Usage

You can add aritcles in `src/data/articles` and make them accessible in the `src/data/articles.json` by adding them to the list correctly. To do so following the first two examples.

On the tech blog page you can see some news articles from the JSON placeholder API. You can add a post manually by clicking the add post button.