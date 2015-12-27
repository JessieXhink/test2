/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$40$$, $$$$39$$, $comp$$13$$, $base$$10$$, $dvt$$7$$) {
  $oj$$40$$.$__registerWidget$("oj.ojTreemap", $$$$39$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$106$$, $callback$$115$$, $callbackObj$$9$$) {
    return $dvt$$7$$.DvtTreemap.newInstance($context$$106$$, $callback$$115$$, $callbackObj$$9$$);
  }, $_ConvertLocatorToSubId$:function($locator$$41$$) {
    var $subId$$39$$ = $locator$$41$$.subId;
    "oj-treemap-node" == $subId$$39$$ && ($subId$$39$$ = "node" + this.$_GetStringFromIndexPath$($locator$$41$$.indexPath));
    return $subId$$39$$;
  }, $_ConvertSubIdToLocator$:function($subId$$40$$) {
    var $locator$$42$$ = {};
    0 == $subId$$40$$.indexOf("node") && ($locator$$42$$.subId = "oj-treemap-node", $locator$$42$$.indexPath = this.$_GetIndexPath$($subId$$40$$));
    return $locator$$42$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-treemap");
    return $styleClasses$$14$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$15$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$15$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$15$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$15$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$15$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$15$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$47$$ = this._super();
    $ret$$47$$["DvtTreemapBundle.COLOR"] = $translations$$16$$.labelColor;
    $ret$$47$$["DvtTreemapBundle.ISOLATE"] = $translations$$16$$.tooltipIsolate;
    $ret$$47$$["DvtTreemapBundle.RESTORE"] = $translations$$16$$.tooltipRestore;
    $ret$$47$$["DvtTreemapBundle.SIZE"] = $translations$$16$$.labelSize;
    $ret$$47$$["DvtUtilBundle.TREEMAP"] = $translations$$16$$.componentName;
    return $ret$$47$$;
  }, $_HandleEvent$:function($event$$505_isolatedNode$$) {
    var $isolatedNodes_type$$94$$ = $event$$505_isolatedNode$$ && $event$$505_isolatedNode$$.getType ? $event$$505_isolatedNode$$.getType() : null;
    $isolatedNodes_type$$94$$ === $dvt$$7$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$505_isolatedNode$$.getSelection()) : $isolatedNodes_type$$94$$ === $dvt$$7$$.DvtTreemapIsolateEvent.TYPE ? ($isolatedNodes_type$$94$$ = this.options.$_isolatedNodes$, $isolatedNodes_type$$94$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes_type$$94$$ = this.options.$_isolatedNodes$), ($event$$505_isolatedNode$$ = $event$$505_isolatedNode$$.getId()) ? ($isolatedNodes_type$$94$$.push($event$$505_isolatedNode$$), 
    this.$_UserOptionChange$("isolatedNode", $event$$505_isolatedNode$$)) : ($isolatedNodes_type$$94$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes_type$$94$$.length ? $isolatedNodes_type$$94$$[$isolatedNodes_type$$94$$.length] : null))) : this._super($event$$505_isolatedNode$$);
  }, getNode:function($ret$$48_subIdPath$$1$$) {
    $ret$$48_subIdPath$$1$$ = this.$_component$.getAutomation().getNode($ret$$48_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$48_subIdPath$$1$$);
    return $ret$$48_subIdPath$$1$$;
  }});
});
