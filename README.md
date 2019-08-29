# vue-webpack-require-demo

![license](https://img.shields.io/github/license/oliverfindl/vue-webpack-require-demo.svg?style=flat)
[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg?colorB=0070ba&style=flat)](https://paypal.me/oliverfindl)

Demo for using [Webpack][webpack] require function for inline-ing SVGs with dynamic paths in [Vue][vue] apps.

> This approach was promoted in [Laracast][laracast]: Whatcha Working On Series - Episode 38 - How to Dynamically Inline SVG Files in Vue Components.

---

## Description

**This repository is proof-of-concept, why this technique is generally a bad idea.**

```html
<div v-html="require(`@/assets/${file}.svg`)"></div>
```

Issue here is, that at build time your [Vue][vue] variables are unknown\* to [Webpack][webpack], so it includes all SVG files\*\* in app bundle and then uses only those, that are really required. This can significatly increase your build time and bundle size. Not to mention optimization techniques as [Lazy Loading Routes](https://router.vuejs.org/guide/advanced/lazy-loading.html)\*\*\* won't be as effective, as they could be.

\* [Vue][vue] variables get populated when app runs in client (browser).  
\*\* All SVG files in directory (and all subdirectories), that matches static part of required path to file.  
\*\*\* You don't need download (and parse) whole bundle with all SVGs, if user is only viewing 1 page, where are only few (possibly none) SVGs.  

**This issue wasn't covered in mentioned [Laracast][laracast] video above. So, if you want to use this approach, you need to have specific directory structure, where you need to have all used SVGs in one directory (or its subdirectories). If you have there some SVGs, that you are not currently using, they will end up in your app bundle too. Alternatively, this could be solved with [excluding](https://webpack.js.org/configuration/module/#ruleexclude) files by [Webpack][webpack], e.g.: all SVG files starting with underscore.  
Not to mention, if there is no static file extension defined (as there wasn't in [Laracast][laracast] video), [Webpack][webpack] will bundle (or atleast try to) all resources (e.g.: `*.svg`, `*.jpg`, `*.png` and even `*.ai` files). And if there are some `*.js` files, this will result into crashing [Webpack][webpack] process in most cases.**

**Real world example:**  
Imagine having all [Font-Awesome](https://github.com/FortAwesome/Font-Awesome) SVG icons symlinked from `node_modules` into your `assets` directory. Why? Because you don't like its provided [Vue usage](https://github.com/FortAwesome/vue-fontawesome#usage). Ofcourse, you use only few icons from this set in your project, but described behavior will include whole set into your app bundle...

---

## Project setup
```bash
# clone this repository
$ git clone https://github.com/oliverfindl/vue-webpack-require-demo.git <DIRECTORY>

# change directory
$ cd <DIRECTORY>

# install dependencies
$ npm install

# download vue art repository
$ npm run setup
```

### Compiles and hot-reloads for development
```bash
# run develepment server
$ npm run serve
```

### Compiles and minifies for production
```bash
# build for production
$ npm run build
```

### Run your tests
```bash
# run tests [no tests included]
$ npm run test
```

### Lints and fixes files
```bash
# lint code
$ npm run lint
```

### Inspect webpack config
```bash
# save generated webpack config to file
$ npm run inspect
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## License

[MIT](http://opensource.org/licenses/MIT)

[laracast]: https://laracasts.com/series/whatcha-working-on/episodes/38
[vue]: https://github.com/vuejs/vue
[webpack]: https://github.com/webpack/webpack
