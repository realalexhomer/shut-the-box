module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["dev/templates/layouts/main.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n  <div>\n"
    + ((stack1 = this.invokePartial(partials.game,(depth0 != null ? depth0.gameData : depth0),{"name":"game","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["dev/templates/partials/game.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <div class=\"card\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.number : depth0), depth0))
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "      <div class=\"die\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.showing : depth0), depth0))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"game\">\n\n  <div class=\"cards\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"dice\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.dice : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"controls\">\n    <button id=\"control-roll\">Roll</button>\n    <button id=\"control-end-turn\">End Turn</button>\n    <button id=\"control-end-game\">End Game</button>\n  </div>\n\n</div>";
},"useData":true});

return this["JST"];

};