/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(a,f,d,b,c){a.Da("oj.dvtBaseGauge",f.oj.dvtBaseComponent,{Ix:function(){this._super();this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3];this.options._threshold1=null;this.options._threshold2=null;this.options._threshold3=null},pi:function(){var a=this._super();a["oj-gauge-metric-label"]={path:"metricLabel/style",property:"CSS_TEXT_PROPERTIES"};
a["oj-gauge-tick-label"]={path:"tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-threshold1"]={path:"_threshold1",property:"color"};a["oj-gauge-threshold2"]={path:"_threshold2",property:"color"};a["oj-gauge-threshold3"]={path:"_threshold3",property:"color"};return a},qi:function(){return["input","optionChange"]},Gh:function(){var a=this.options.translations,b=this._super();b["DvtGaugeBundle.EMPTY_TEXT"]=this.RM("labelNoData");b["DvtUtilBundle.GAUGE"]=a.componentName;return b},si:function(a){var b=
a&&a.getType?a.getType():null;b===c.DvtValueChangeEvent.TYPE?this.Cc("value",a.getNewValue()):b===c.DvtValueChangeEvent.TYPE_INPUT?this._trigger("input",null,{value:a.getNewValue()}):this._super(a)}},!0);a.Da("oj.ojStatusMeterGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null},Ef:function(a,b,d){return c.DvtStatusMeterGauge.newInstance(a,b,d)},He:function(){var a=this._super();a.push("oj-statusmetergauge");return a},Gf:function(){this.element.attr("title")?(this.options.shortDesc=
this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.qa.getAutomation().getMetricLabel()}});a.Da("oj.ojLedGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{},Ef:function(a,b,d){return c.DvtLedGauge.newInstance(a,b,d)},He:function(){var a=this._super();a.push("oj-ledgauge");return a},Gf:function(){this.element.attr("title")?
(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.qa.getAutomation().getMetricLabel()}});a.Da("oj.ojRatingGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null},Ef:function(a,b,d){return c.DvtRatingGauge.newInstance(a,b,d)},He:function(){var a=
this._super();a.push("oj-ratinggauge");return a},Gf:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},Cc:function(a,b){this._superApply(arguments);"value"==a&&this.Cc("changed",!0)}});a.Da("oj.ojDialGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,
optionChange:null},Ef:function(a,b,d){return c.DvtDialGauge.newInstance(a,b,d)},He:function(){var a=this._super();a.push("oj-dialgauge");return a},Gf:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this.hda();this._super()},hda:function(){var b=this.options.background,c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),
width:200,height:200},{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),width:400,height:400}],d=this.options.indicator,f=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}];"string"===typeof b&&("rectangleAlta"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===
b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:a.ba.kb("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),width:200,height:200},{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),
width:200,height:168},{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),width:400,height:352}]:"circleLight"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),
width:400,height:400}]:"rectangleLight"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),width:200,height:138},{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),
width:200,height:200},{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===b?c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),width:400,height:307}]:"domeDark"===b&&(c=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),
width:400,height:276}]),this.options._backgroundImages=c);"string"===typeof d&&("needleAntique"===d?f=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,height:734}]:"needleDark"===d?f=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===d&&(f=[{src:a.ba.kb("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=f)},getMetricLabel:function(){return this.qa.getAutomation().getMetricLabel()}})});