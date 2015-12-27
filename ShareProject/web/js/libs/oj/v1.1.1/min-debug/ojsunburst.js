/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$27$$, $$$$26$$, $comp$$6$$, $base$$6$$, $dvt$$3$$) {
  $oj$$27$$.$__registerWidget$("oj.ojSunburst", $$$$26$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$80$$, $callback$$101$$, $callbackObj$$5$$) {
    return $dvt$$3$$.DvtSunburst.newInstance($context$$80$$, $callback$$101$$, $callbackObj$$5$$);
  }, $_ConvertLocatorToSubId$:function($locator$$27$$) {
    var $subId$$26$$ = $locator$$27$$.subId;
    "oj-sunburst-node" == $subId$$26$$ && ($subId$$26$$ = "node" + this.$_GetStringFromIndexPath$($locator$$27$$.indexPath));
    return $subId$$26$$;
  }, $_ConvertSubIdToLocator$:function($subId$$27$$) {
    var $locator$$28$$ = {};
    0 == $subId$$27$$.indexOf("node") && ($locator$$28$$.subId = "oj-sunburst-node", $locator$$28$$.indexPath = this.$_GetIndexPath$($subId$$27$$));
    return $locator$$28$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-sunburst");
    return $styleClasses$$6$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$7$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$7$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $translations$$12$$ = this.options.translations, $ret$$33$$ = this._super();
    $ret$$33$$["DvtSunburstBundle.COLOR"] = $translations$$12$$.labelColor;
    $ret$$33$$["DvtSunburstBundle.SIZE"] = $translations$$12$$.labelSize;
    $ret$$33$$["DvtUtilBundle.SUNBURST"] = $translations$$12$$.componentName;
    return $ret$$33$$;
  }, $_HandleEvent$:function($event$$339$$) {
    var $type$$86$$ = $event$$339$$ && $event$$339$$.getType ? $event$$339$$.getType() : null;
    $type$$86$$ === $dvt$$3$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$339$$.getSelection()) : $type$$86$$ === $dvt$$3$$.DvtSunburstRotationEvent.TYPE ? this.$_UserOptionChange$("startAngle", $event$$339$$.getStartAngle()) : $type$$86$$ === $dvt$$3$$.DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$339$$.getStartAngle()}) : this._super($event$$339$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$27$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNode:function($ret$$34_subIdPath$$) {
    $ret$$34_subIdPath$$ = this.$_component$.getAutomation().getNode($ret$$34_subIdPath$$);
    this.$_AddAutomationGetters$($ret$$34_subIdPath$$);
    return $ret$$34_subIdPath$$;
  }});
});
