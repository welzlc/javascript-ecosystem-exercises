# Lesson: Webpack Loaders
## Transpiling ES6 to ES5
1. Create webpack config and define entry file and bundle path
1. Install babel-loader as dev dependency
1. Add babel-loader, babel-preset-env, babel-core to webpack config
1. Adjust npm script "build"
1. Generate bundle with webpack __beware__: The official babel-loader docs on github tell you to add ``@babel/preset-env`` to the presets, however you need to use ``env`` with this version.
1. Confirm that bundle is ES5 code

## Import Bootstrap CSS
1. Import css files (style.css & bootstrap) into app.js
1. Add style / css / file loaders
1. Configure that css files are handled

Hint: Fonts have to be loaded with the "file-loader".

## Use dist folder
1. Configure dist folder output
1. Add html-webpack-plugin
1. Configure html webpack plugin to create html file in dist folder

## Documentation
[https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)
