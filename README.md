# EquivalentJS Plugin Scaffold Example

A module plugin is a loose coupled module class and their dependencies which loaded into
[equivalent-js][equivalent-js] framework stack.

## an example scaffold for an EquivalentJS plugin

How to use the framework:

* [Module Manager][MM]
* [Test Runner][MTR]
* [Doc Runner][MDR]

How to build and use equivalent-js plugins:

* [Module Plugin][MP]

## Requirements

Install dependencies with [npmjs][npmjs] at project root folder

    npm install

## Configuration

The equivalent-js plugin package has a dev requirement to the equivalent-js framework.

Inside the plugin project dev environment the [EquivalentJS Dependency Injection Container (DIC)][MM] loads
the plugin that is developed currently.

It is also possible to require other equivalent-js plugins in [*package.json*](package.json)
to build new plugins based on others.

All in [*package.json*](package.json) required equivalent-js plugins get also added to this [DIC][MM] stack. 

Also the [test][MTR] and [doc][MDR] runner are available and are reduced to the framework and plugin scope.

For plugin development at [*parameters.json*](src/config/parameters.json) the configuration property "plugins"
holds the collection of loadable equivalent-js plugins.

The boolean flag indicates the plugin is active and the framework try to load it.

```json
{
  "plugins": {
    "equivalent-js-plugin-scaffold-example": true
  }
}
```

## Documentation, scripts and stylesheets

Generate scripts and stylesheets ([Sass][sass]) 
and documentation ([JSDoc][jsdoc] & [JSDoc Type][jsdoc-type])

    npm run dev:run

or

    npm run dev:watch

## Run demo application in browser with loaded plugins

    npm run dev:http
    
    http://127.0.0.1:8084/index.html

## Build all EquivalentJS modules as concatenated minified library file

    npm run prod:minify
    
    http://127.0.0.1:8084/prod.html

## How to contribute

[Contributing][contributing]

## Appendix

[Code of Conduct][coc]


...live long and prosper

[equivalent-js]: https://github.com/xeroxzone/equivalent-js
[MM]: https://github.com/xeroxzone/equivalent-js/blob/master/docs/MODULE_MANAGER.md
[MP]: https://github.com/xeroxzone/equivalent-js/blob/master/docs/MODULE_PLUGIN.md
[MTR]: https://github.com/xeroxzone/equivalent-js/blob/master/docs/TEST_RUNNER.md
[MDR]: https://github.com/xeroxzone/equivalent-js/blob/master/docs/DOC_RUNNER.md
[contributing]: https://github.com/xeroxzone/equivalent-js/blob/master/CONTRIBUTING.md
[coc]: https://github.com/xeroxzone/equivalent-js/blob/master/CODE_OF_CONDUCT.md
[npmjs]: https://www.npmjs.com
[gulp]: http://gulpjs.com
[jquery]: https://jquery.com
[qunit]: https://qunitjs.com
[jsdoc]: http://usejsdoc.org
[jsdoc-type]: http://usejsdoc.org/tags-type.html
[sass]: http://sass-lang.com
