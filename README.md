Timer
=====

[![Build Status](https://travis-ci.org/davidleston/timer.svg?branch=master)](https://travis-ci.org/davidleston/timer)
[![devDependency Status](https://david-dm.org/davidleston/timer/dev-status.svg)](https://david-dm.org/davidleston/timer#info=devDependencies)

A simple countdown timer with a focus on performance.

Tactics used to reduce download size:
* Minification, concatenation, hashes in file names for 'cache forever' 
* Include only needed parts of Bootstrap
* Override Bootstrap Sass variables rather than override CSS styles

Technologies used (list of buzzwords):
* App and tests written in [TypeScript](http://www.typescriptlang.org)
* [Sass](http://sass-lang.com)
* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes)
* [Angular](https://angularjs.org)
* [Bootstrap](http://getbootstrap.com)
* [HTML5 semantic elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

## Build

If you don't already have `npm`, get it by installing [node.js](http://nodejs.org).

Change directory to the root of this project and run the following:

1. `npm install`
2. `npm install -g gulp bower`
3. `bower install`
4. `gulp build`

Running `gulp serve` generates source maps allowing the browser to debug through TypeScript.
