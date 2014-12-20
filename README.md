mimosa-polymer-demo
===================

## Overview

This is a port of the [Polymer Starter App](https://www.polymer-project.org/docs/start/tutorial/intro.html).

## Usage

Install Mimosa and Bower.

```
npm install -g mimosa
npm install -g bower
```

Clone the app then execute the following commands.

```
cd mimosa-polymer-demo
npm install && bower install
mimosa watch --server
```

## Notes

* Need to figure out a strategy for handling Polymer bower components
  and dependencies. Given the imports included in the components, the
  contents of each component need to be located in the same directory,
  rather than spread across multiple directories based on their types
  (javascripts, stylesheets, etc.).
  In its current state, this repo requires that you run `bower install`
  directly instead of using the `mimosa-bower` module.
* Need to incorporate Vulcanize into the build process.
