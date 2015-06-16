var $           = require('jquery'),
    _           = require('underscore'),
    Handlebars  = require('handlebars'),
    Templates   = require('./Templates')(Handlebars); //  precompiled templates
                                                      //  go to Templates.js

var data = {
  variable : "hello there."  
}

var main = Templates['dev/templates/layouts/main.hbs']
var html = main(data)


console.log(html)
console.log('sanity check');