Timer
=====

[![Build Status](https://travis-ci.org/davidleston/timer.svg?branch=master)](https://travis-ci.org/davidleston/timer)
[![devDependency Status](https://david-dm.org/davidleston/timer/dev-status.svg)](https://david-dm.org/davidleston/timer#info=devDependencies)

A simple countdown timer web app written in TypeScript with a focus on performance.

Tactics used to reduce download size:
* Minification, concatenation, hashes in file names for 'cache forever' 
* Include only needed parts of Bootstrap
* Override Bootstrap Sass variables rather than override CSS styles

## Build

If you don't already have `npm`, get it by installing [node.js](http://nodejs.org/).

Change directory to the root of this project and run the following:

1. `npm install`
2. `npm install -g gulp bower`
3. `bower install`
4. `gulp build`

Running `gulp serve` generates source maps allowing the browser to debug through TypeScript.
