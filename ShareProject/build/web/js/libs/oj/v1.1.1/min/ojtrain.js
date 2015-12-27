/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){(function(){a.Da("oj.ojTrain",f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{steps:[],selected:"",optionChange:null,beforeDeselect:null,deselect:null,beforeSelect:null,select:null},Ne:0,Qb:null,_ComponentCreate:function(){this._super();this.aW()},aW:function(){var a=this.options,b=a.steps;this.Ne=b.length;this.Tr=f("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");this.Tr.appendTo(this.element);
this.ry=f("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");this.ry.appendTo(this.Tr);var c=this.element.attr("class");(this.vW=null!=c&&0<=c.indexOf("oj-train-stretch"))&&this.ry.css("padding","0 "+100/(2*this.Ne)+"%");this.pP=f("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");this.pP.appendTo(this.ry);this.jf=f("\x3cul\x3e");this.jf.addClass("oj-train-step-list");this.BE=f("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");this.BE.appendTo(this.ry);this.yda();this.al=
this.$q(a.selected);-1===this.al&&b[0]&&b[0].id&&(this.al=0,a.selected=b[0].id);for(a=0;a<this.Ne;a++)b=f("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.Qb[a][1]}),b.appendTo(this.jf),this.C6(a),this.F6(a),this.B6(a),this.D6(a),this.vW&&b.css("width",100/this.Ne+"%");this.BE.css({width:(this.Ne-1===this.al?100:100/(2*(this.Ne-1))+this.al/(this.Ne-1)*100)+"%"});this.jf.appendTo(this.Tr);this.element.addClass("oj-train")},yda:function(){var a=this.options;this.Qb=[];for(var b=0;b<this.Ne;b++){var c=
a.steps[b];this.Qb[b]=Array(5);this.Qb[b][0]=c.label?c.label:null;this.Qb[b][1]=c.id?c.id:null;this.Qb[b][2]=c.disabled?!0:!1;this.Qb[b][3]=c.visited?!0:!1;this.Qb[b][4]=c.messageType?c.messageType:null}},B6:function(a){var b=f("\x3cdiv/\x3e").addClass("oj-train-button"),c=f("\x3cspan/\x3e"),e=this,g="";if(this.Qb[a]){var h=this.Qb[a][3],k=this.Qb[a][2];this.al===a?(b.addClass("oj-selected"),g=" current "):h&&!k?(b.addClass("oj-visited"),g=" visited "):h||k?b.addClass("oj-disabled"):(b.addClass("oj-default"),
g=" not visited ");this.Qb[a][2]||this.al===a||(this._hoverable(b),b.on("click"+this.eventNamespace,function(){e.sF("selected",e.options.selected,this.parentNode.parentNode.id,!0);e.refresh()}));h=this.jf.children().eq(a).find(".oj-train-button-connector");1<=h.length&&h.children().remove();h.append(b);c.text(g);c.addClass("oj-helper-hidden-accessible");this.jf.children().eq(a).find("a").append(c)}},D6:function(a){var b=f("\x3cdiv/\x3e").addClass("oj-train-icon"),c=f("\x3cspan/\x3e"),e="",g=this;
if(this.Qb[a]){var h=this.Qb[a][4];"confirmation"===h?(b.addClass("oj-confirmation"),e=" Confirmation "):"info"===h?(b.addClass("oj-info"),e=" Info "):"error"===h?(b.addClass("oj-error"),e=" Error "):"fatal"===h?(b.addClass("oj-error"),e=" Error "):"warning"===h&&(b.addClass("oj-warning"),e=" Warning ");var k=this.jf.children().eq(a).find(".oj-train-button");1<=k.children().length&&k.children().remove();this.Qb[a][2]||this.al===a||(this._hoverable(b),b.on("click"+this.eventNamespace,function(){g.sF("selected",
g.options.selected,this.parentNode.parentNode.parentNode.id,!0);g.refresh()}));null!=h&&(c.text(e),c.addClass("oj-helper-hidden-accessible"),this.jf.children().eq(a).find("a").append(c),k.append(b))}},sF:function(a,b,c,e){a={option:a,fromStep:this.getStep(b),toStep:this.getStep(c),optionMetadata:{writeback:e?"shouldWrite":"shouldNotWrite"}};!1!==this._trigger("beforeDeselect",null,a)&&!1!==this._trigger("beforeSelect",null,a)&&(b=this.$q(b),-1!==b&&(this.options.steps[b].visited=!0),this._trigger("deselect",
null,a),this.option("selected",c,{_context:{originalEvent:e,mb:!0}}),this._trigger("select",null,a))},F6:function(a){var b=f("\x3cdiv/\x3e");b.addClass("oj-train-button-connector");this.Qb[a]&&(a<=this.al&&b.addClass("oj-train-fill"),a=this.jf.children().eq(a).children(),b.insertBefore(a))},C6:function(a){var b=this;if(this.Qb[a]){var c=f("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"),e=f("\x3ca\x3e"+this.Qb[a][0]+"\x3c/a\x3e"),g=this.Qb[a][2];c.append(e);e.addClass("oj-train-label");a===this.al?
e.addClass("oj-selected"):this.Qb[a][3]&&!g?e.addClass("oj-visited"):g&&e.addClass("oj-disabled");g||(e.attr("href","#"),this._hoverable(e),e.on("click keydown"+this.eventNamespace,function(a){if(a.keyCode===f.ui.keyCode.ENTER||"click"===a.type)a.preventDefault(),b.sF("selected",b.options.selected,this.parentNode.parentNode.id,!0),b.refresh(),a.keyCode===f.ui.keyCode.ENTER&&b.vA(this.parentNode.parentNode.id)}));e=this.jf.children().eq(a).children();1<=e.length&&e[0].remove();this.jf.children().eq(a).append(c)}},
$q:function(a){for(var b=0;b<this.Ne;b++)if(this.Qb[b]&&this.Qb[b][1]===a)return b;return-1},getStep:function(a){for(var b=0;b<this.Ne;b++)if(this.Qb[b]&&this.Qb[b][1]===a)return jQuery.extend({},this.options.steps[b]);return null},nextSelectableStep:function(){for(var a=this.$q(this.options.selected);a<this.Ne;a++)if(a+1<this.Ne&&this.Qb[a+1]&&!this.Qb[a+1][2])return this.Qb[a+1][1];return null},previousSelectableStep:function(){for(var a=this.$q(this.options.selected);0<=a;a--)if(this.Qb[a-1]&&
!this.Qb[a-1][2])return this.Qb[a-1][1];return null},setStep:function(a){if(a.id){var b=this.getStep(a.id),c=this.$q(a.id);-1!==c&&(c=this.options.steps[c],a.label&&(b[0]=a.label,c.label=a.label),"boolean"===typeof a.disabled&&(b[2]=a.disabled,c.disabled=a.disabled),"boolean"===typeof a.visited&&(b[3]=a.visited,c.visited=a.visited),a.messageType&&(b[4]=a.messageType,c.messageType=a.messageType));this.refresh()}},_setOptions:function(a){this._super(a);this.refresh()},refresh:function(){this._super();
this._destroy();this.aW()},_destroy:function(){this.jf.children().each(function(){f(this).remove()});this.element.removeClass("oj-train");this.element.find(".oj-train-wrapper").remove();this.element.find(".oj-train-connector-wrapper").remove();this.element.find(".oj-train-step-list").remove();this.element.find(".oj-train-step-list").remove();this._super()},vA:function(a){a=this.$q(a);for(var b=0;b<this.Ne;b++)if(this.Qb[(a+b+1)%this.Ne]&&!this.Qb[(a+b+1)%this.Ne][2]){this.jf.children().eq((a+b+1)%
this.Ne).find(".oj-train-label").focus();break}},getNodeBySubId:function(a){if(null===a)return this.element?this.element[0]:null;var b=a.index;if("number"!==typeof b||0>b||b>=this.Ne)return null;switch(a.subId){case "oj-train-button":return this.jf.children().eq(b).find(".oj-train-button")[0];case "oj-train-button-connector":return this.jf.children().eq(b).find(".oj-train-button-connector")[0];case "oj-train-connector":return this.pP;case "oj-train-connector-fill":return this.BE;case "oj-train-icon":return this.jf.children().eq(b).find(".oj-train-icon")[0];
case "oj-train-label":return this.jf.children().eq(b).find(".oj-train-label")[0]}return null}})})()});