module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["dev/templates/layouts/game.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"game\">\n  <div class=\"cards\">\n"
    + ((stack1 = this.invokePartial(partials.cards,(depth0 != null ? depth0.cardData : depth0),{"name":"cards","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"dice\">\n"
    + ((stack1 = this.invokePartial(partials.dice,(depth0 != null ? depth0.diceData : depth0),{"name":"dice","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"controls\">\n"
    + ((stack1 = this.invokePartial(partials.controls,depth0,{"name":"controls","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["dev/templates/partials/cards.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "  <div class=\"card "
    + alias2(alias1((depth0 != null ? depth0.flipped : depth0), depth0))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.shut : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.number : depth0), depth0))
    + "</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "shut";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["dev/templates/partials/controls.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button id=\"control-roll\">Roll</button>\n<button id=\"control-end-turn\">End Turn</button>\n<button id=\"control-end-game\">End Game</button>\n\n";
},"useData":true});

this["JST"]["dev/templates/partials/dice.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <div class=\"die\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.showing : depth0), depth0))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.dice : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

return this["JST"];

};