module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["dev/templates/layouts/main.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div>\n  "
    + this.escapeExpression(((helper = (helper = helpers.variable || (depth0 != null ? depth0.variable : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"variable","hash":{},"data":data}) : helper)))
    + "\n</div>";
},"useData":true});

return this["JST"];

};