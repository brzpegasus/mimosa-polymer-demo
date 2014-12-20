exports.config = {
  "modules": [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload"
  ],
  "server": {
    "views": {
      "compileWith": "handlebars",
      "extension": "hbs"
    }
  },
  "jshint": {
    "exclude": [/\/components\//]
  },
  "csslint": {
    "exclude": [/\/components\//],
    "rules": {
      "ids": false
    }
  },
  "require": {
    "exclude": [/\/components\//]
  }
}
