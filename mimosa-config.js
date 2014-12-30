exports.config = {
  "modules": [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower@1.8.1"
  ],
  "server": {
    "views": {
      "compileWith": "handlebars",
      "extension": "hbs"
    }
  },
  "bower": {
    "copy": {
      "strategy": {
        "/^(polymer|paper-|core-|font-)/": "together"
      },
      "unknownMainFullCopy": true
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
