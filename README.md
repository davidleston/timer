Timer
=====

[![Build Status](https://travis-ci.org/davidleston/timer.svg?branch=master)](https://travis-ci.org/davidleston/timer)
![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

A simple countdown timer with a focus on performance.

Tactics used to reduce download size:
* Minification and concatenation
* Include only needed parts of Bootstrap
* Override Bootstrap Sass variables rather than override CSS styles

Technologies used (list of buzzwords):
* [Sass](http://sass-lang.com)
* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes)
* [Frameworkless JavaScript](https://twitter.com/hashtag/frameworkless)
* [Bootstrap](http://getbootstrap.com)
* [HTML5 semantic elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

## Build

If you don't already have `npm`, get it by installing [node.js](http://nodejs.org).

Change directory to the root of this project and run the following:

1. `npm install`
2. `npm install -g gulp bower`
3. `bower install`
4. `gulp`

Run `gulp serve` to run the app.
