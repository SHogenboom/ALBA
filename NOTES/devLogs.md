# Development Logs

This document is for personal use to keep track of the steps / decisions taken during this project.

## Setup

I chose to go with the following software:

- [Visual Studio Code](https://code.visualstudio.com/) as the _code editor_
  - VS Code is highly popular and consequently has a large number of extensions available (e.g., prettier for code formatting)
  - Integration with Github Copilot
  - Other code editors are said to be more lightweight, but so far I have not encountered any performance issues.
- [Node.js](https://nodejs.org/en/) as the JavaScript _package manager_
  - In the first tutorials I followed, Node.js was used. I have not explored other package managers such as Yarn.
- [Webpack](https://webpack.js.org/) as the _bundler_
  - Webpack, again was one of the first bundlers I encountered. Although the setup can get quite complex, it is highly configurable and has pretty clear documentation.
  - I have also tried Parcel in an earlier iteration, but could not get that setup to work with more complex projects.
  - We chose `webpack` over other bundlers because of its ability to process files other than JavaScript (e.g., CSS, images, etc.).
- [Kaboom.js](https://kaboomjs.com/) as the _2D game framework_
  - First of all, a game framework - when sufficiently lightweight - is preferred over vanilla JS because it provides a lot of functionality out of the box. I tried a range of frameworks such as `kaboom.js`, `pixi.js`, and `Phaser3`.
  - I ultimately found that `kaboom.js` was most beginner friendly, had good documentation, is actively maintained, requires the fewest (none) dependencies, and can easily be extended with vanilla JS.

### NPM: Manage Packages

To initialize `npm` in your project, run the following command from the console in your project's root directory:

```bash
npm init
```

This will prompt a series of questions (e.g., the name and author of the project) which you can fill in or leave empty.
You now have a `package.json` file that contains the information just provided. This file will be updated in subsequent steps to include information about the dependencies we install. The `package.json` file is akin to using `renv` in R and `venv` in Python - it can be used to restore the project correctly when sharing the code with others.

### Webpack: Bundle Files

We need to bundle the code into smaller files that are suited for loading/displaying in the browser. `Webpack` is a bundler that will do this for us.

#### Dependencies

When you initially configure the development environment, the relevant dependencies need to be installed. To see which dependencies we utilized see the `package.json` file.

In this file we distinguish between _development dependencies_ and _production dependencies_. The development dependencies are only used during development (e.g., to bundle the code) and are not required to run the code in production.

If you want to add a dependency for _development_ you use the `--save-dev` flag:

```bash
npm install webpack --save-dev
```

If you want to add a dependency for _production_ you use the `--save` flag:

```bash
npm install kaboom@3000.0.15 --save
```

We use the following dependencies for development:

- webpack: the actual bundler
- webpack-cli: the command line interface for webpack
- copy-webpack-plugin: a plugin to copy files from one location to another. We use this to copy the assets (e.g., images) to the `dist` directory.
- css-loader: a loader to process CSS files
- mini-css-extract-plugin: a plugin to extract CSS into separate files
- webpack-dev-server: a development server that provides live reloading (for testing)
- npm-run-all: a package to run multiple scripts in parallel (for more convenient development commands)
- webpack-merge: a package to merge webpack configurations that overlap/differ between production and development.

After installing the dependencies you now will also have a `node_modules` directory which contains files for the installed dependencies.
_note_: there is no need to commit the `node_modules` directory to version control - the packages/versions are already version controlled elsewhere! We therefore go ahead and add `node_modules` to a `.gitignore` file.

#### Configuration

The `webpack` configuration consists of three files. This setup is based on the [NetNinja Webpack & Typescript Tutorial](https://www.youtube.com/watch?v=3On5Z0gjf4U&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=2), the [Webpack Guides](https://webpack.js.org/guides/), and the [Oding Project materials](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

1. `webpack.common.js`: contains the configuration that is shared between development and production. For example how `.css`` files should be processed and how assets should be copied.
2. `webpack.dev.js`: contains the configuration specific to development. For example where the development server should run.
3. `webpack.prod.js`: contains the configuration specific to production. For example how the code should be minified.

## Kaboom.js: 2D Game Framework

### Version

When setting up this project I encountered a problem where the `webpack` bundle resulted in a syntax error as soon as I loadded the `kaboom` library. This error occurred specifically when running/serving the code in `DuckDuckGo`, it did _not_ occur when running the code in `Chrome` or `Safari`. I created a [GitHub issue](https://github.com/replit/kaboom/issues/812) to detail the occurrence:

- The error occurs in DuckDuckGo browser, not in Chrome and Safari
- The error occurs when using npm / webpack bundling
- The error occurs when using <script src="https://unpkg.com/kaboom@3000.1.0/dist/kaboom.js"></script>
- The error occurs irrespective of using the .js or .mjs bundles
- The error does not occur in versions prior to 3000.1.0 (e.g., [3000.0.15](https://www.npmjs.com/package/kaboom/v/3000.0.15) does not produce the syntax error)

So for now the solution has been to install a specific version of `kaboom`: `npm install kaboom@3000.0.15 --save` which does not produce the syntax error!

### Context

We have refrained from loading `kaboom` as a global variable/context. This is because it becomes diffifult to read the code and determine which functions belong to `kaboom`, `Vanilla JS` or future other frameworks. This was suggested in the following [tutorial](https://youtu.be/pVAmEJqK-3A)

# Tricks / Sources

- Use `await` functions to ensure that, for example the map.json file, is fully loaded before continuing.
- Cannot use `hex` colors together with k contexts (https://youtu.be/pVAmEJqK-3A)
- How to use `Tiled` together with Kaboom (https://youtu.be/pVAmEJqK-3A)
