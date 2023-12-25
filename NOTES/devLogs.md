# Initialize NPM

`npm` is a package manager which we utilize to install and manage dependencies for our project ([more information](https://docs.npmjs.com/about-npm)).

To initialize `npm` in your project, run the following command from the console in your project's root directory:

```bash
npm init
```

This will prompt a series of questions (e.g., the name and author of the project) which you can fill in or leave empty.
You now have a `package.json` file that contains the information just provided. This file will be updated in subsequent steps to include information about the dependencies we install. The same file can be used to restore a project when sharing with others. It is akin to using `renv` in R and `venv` in Python.

# Initialize Webpack

We use `webpack` to process and bundle our code into files which are ready for production ([more information](https://webpack.js.org/concepts/)). We chose `webpack` over other bundlers because of its popularity and the ability to process files other than JavaScript (e.g., CSS, images, etc.).

To initialize `webpack` and other functionalities in your project, run the following command from the console in your project's root directory:

```bash
npm install webpack webpack-cli copy-webpack-plugin css-loader mini-css-extract-plugin webpack-dev-server npm-run-all webpack-merge --save-dev
```

This will install the required _development dependencies_ and add them to the `package.json` file:

- webpack: the bundler
- webpack-cli: the command line interface for webpack
- copy-webpack-plugin: a plugin to copy files from one location to another. We use this to copy the assets (e.g., images) to the `dist` directory.
- css-loader: a loader to process CSS files
- mini-css-extract-plugin: a plugin to extract CSS into separate files
- webpack-dev-server: a development server that provides live reloading (for testing)
- npm-run-all: a package to run multiple scripts in parallel (for more convenient development)
- webpack-merge: a package to merge webpack configurations that overlap/differ between production and development.

You now will also have a `node_modules` directory which contains files for the installed dependencies.
_note_: there is no need to commit the `node_modules` directory to version control. This directory can be restored by running `npm install` in the project's root directory. We therefore go ahead and add `node_modules` to the `.gitignore` file.

## Production Dependencies

The dependencies mentioned above are only used during developement. We further add the following dependencies which are used in production:
By using the `--save` flag, the dependency is added to the `package.json` file as a regular/deployable dependency.

```bash
npm install lodash kaboom --save
```

- lodash: a utility library (in webpack tutorial)
- kaboom: a JavaScript game library

## Configuration File

We created three configuration file for `webpack` which will tell it how to process our files.
The first file is `webpack.common.js` which contains the configuration that is shared between development and production. The `dev` and `prod` files contain the configuration specific to each environment.
