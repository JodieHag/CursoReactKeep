# Basic Starter BY: JodieHag

Basic Starter inspired in [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started)

I add a webpack configuration, eslintrc, babelrc...

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  src/
    static/
      favicon/
        favicon.icon
        manifest.json
      img/
        logo.svg
    App.css
    App.jsx
    index.css
    index.html
    index.jsx
  .babelrc
  .editorconfig
  .env.local
  .eslintrc
  package.json
  webpack.common.js
  webpack.config.js
  webpack.dev.js
  webpack.prod.js
```

For the project to build, **these files must exist with exact filenames**:

* `src/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
