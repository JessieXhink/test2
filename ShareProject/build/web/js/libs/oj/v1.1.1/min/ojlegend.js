/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtLegend"],function(a,f,d,b,c){a.Da("oj.ojLegend",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{categoryFilter:null,categoryHighlight:null,drill:null},Ef:function(a,b,d){return c.DvtLegend.newInstance(a,b,d)},mj:function(a){var b=a.subId;"oj-legend-section"==b?b="section"+this.Un(a.indexPath):"oj-legend-item"==b&&(b="section"+this.Un(a.sectionIndexPath),b+=":item["+a.itemIndex+"]");return b},nj:function(a){var b=
{};if(0<a.indexOf(":item")){var c=a.indexOf(":item"),d=a.substring(0,c);a=a.substring(c);b.subId="oj-legend-item";b.sectionIndexPath=this.qk(d);b.itemIndex=this.ri(a)}else 0==a.indexOf("section")&&(b.subId="oj-legend-section",b.indexPath=this.qk(a));return b},He:function(){var a=this._super();a.push("oj-legend");return a},pi:function(){var a=this._super();a["oj-legend"]={path:"textStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-title"]={path:"titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-section-title"]=
{path:"_sectionTitleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-section-close-icon"]={path:"_resources/closedEnabled",property:"CSS_URL"};a["oj-legend-section-close-icon oj-hover"]={path:"_resources/closedOver",property:"CSS_URL"};a["oj-legend-section-close-icon oj-active"]={path:"_resources/closedDown",property:"CSS_URL"};a["oj-legend-section-open-icon"]={path:"_resources/openEnabled",property:"CSS_URL"};a["oj-legend-section-open-icon oj-hover"]={path:"_resources/openOver",property:"CSS_URL"};
a["oj-legend-section-open-icon oj-active"]={path:"_resources/openDown",property:"CSS_URL"};return a},Gh:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.LEGEND"]=a.componentName;return b},qi:function(){return["categoryFilter","categoryHighlight","drill"]},si:function(a){var b=a&&a.getType?a.getType():null;b===c.DvtCategoryHideShowEvent.TYPE_HIDE||b===c.DvtCategoryHideShowEvent.TYPE_SHOW?(b=b===c.DvtCategoryHideShowEvent.TYPE_HIDE?"out":"in",this._trigger("categoryFilter",
null,{category:a.getCategory(),type:b}),this.Cc("hiddenCategories",a.hiddenCategories)):b===c.DvtCategoryRolloverEvent.TYPE_OVER||b===c.DvtCategoryRolloverEvent.TYPE_OUT?(b=b===c.DvtCategoryRolloverEvent.TYPE_OVER?"on":"off",this._trigger("categoryHighlight",null,{categories:a.categories,type:b}),this.Cc("highlightedCategories",a.categories)):b===c.DvtDrillEvent.TYPE?this._trigger("drill",null,{id:a.getId()}):this._super(a)},jq:function(){null==this.options._resources&&(this.options._resources={});
this.options._resources.overviewGrippy=a.ba.kb("resources/internal-deps/dvt/chart/drag_horizontal.png")},Gf:function(){this._super();this.element.attr("role")||this.element.attr("tabIndex",null)},getTitle:function(){return this.qa.getAutomation().getTitle()},getSection:function(a){var b=this.qa.getAutomation().getSection(a);if(b){var c=this;this.kg(b);b.getSection=function(a){(a=b.sections?b.sections[a]:null)&&c.kg(a);return a};b.getItem=function(a){(a=b.items?b.items[a]:null)&&c.kg(a);return a}}return b},
getItem:function(a){a=this.qa.getAutomation().getItem(a);this.kg(a);return a},getPreferredSize:function(a,b){var c=this.qa.getPreferredSize(this.options,a,b);return{width:c.getWidth(),height:c.getHeight()}}})});