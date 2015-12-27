/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$37$$, $$$$36$$, $comp$$8$$, $base$$8$$, $dvt$$5$$) {
  $oj$$37$$.$__registerWidget$("oj.ojDiagram", $$$$36$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$37$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$1$$ = this;
    return function($context$$99_elem$$149$$) {
      var $dummyDiv$$1$$ = document.createElement("div");
      $dummyDiv$$1$$.style.display = "none";
      $dummyDiv$$1$$.$_dvtcontext$ = $thisRef$$1$$.$_context$;
      $thisRef$$1$$.element.append($dummyDiv$$1$$);
      $templateFunction$$({parentElement:$dummyDiv$$1$$, data:$context$$99_elem$$149$$.data});
      return($context$$99_elem$$149$$ = $dummyDiv$$1$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$99_elem$$149$$.namespaceURI ? ($$$$36$$($dummyDiv$$1$$).remove(), $context$$99_elem$$149$$) : $context$$99_elem$$149$$ ? $thisRef$$1$$.$_GetDvtComponent$($context$$99_elem$$149$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$2$$ = this;
    return function($parentElement$$6$$, $rootElement$$, $data$$169$$, $state$$16$$, $previousState$$) {
      return{component:$oj$$37$$.Components.$getWidgetConstructor$($thisRef$$2$$.element), parentElement:$parentElement$$6$$, rootElement:$rootElement$$, data:$data$$169$$, state:$state$$16$$, previousState:$previousState$$, id:$data$$169$$.id, type:"node", label:$data$$169$$.label};
    };
  }, renderDefaultHover:function($context$$101$$) {
    $context$$101$$.previousState && $context$$101$$.state.hovered == $context$$101$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$101$$.id, $context$$101$$.state.hovered);
  }, renderDefaultSelection:function($context$$102$$) {
    $context$$102$$.previousState && $context$$102$$.state.selected == $context$$102$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$102$$.id, $context$$102$$.state.selected);
  }, renderDefaultFocus:function($context$$103$$) {
    $context$$103$$.previousState && $context$$103$$.state.focused == $context$$103$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$103$$.id, $context$$103$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$104$$, $callback$$113$$, $callbackObj$$7$$) {
    return $dvt$$5$$.DvtDiagram.newInstance($context$$104$$, $callback$$113$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$36$$) {
    var $subId$$34$$ = $locator$$36$$.subId;
    "oj-diagram-link" == $subId$$34$$ ? $subId$$34$$ = "link[" + $locator$$36$$.index + "]" : "oj-diagram-node" == $subId$$34$$ && ($subId$$34$$ = "node[" + $locator$$36$$.index + "]");
    return $subId$$34$$;
  }, $_ConvertSubIdToLocator$:function($subId$$35$$) {
    var $locator$$37$$ = {};
    0 == $subId$$35$$.indexOf("link") ? ($locator$$37$$.subId = "oj-diagram-link", $locator$$37$$.index = this.$_GetFirstIndex$($subId$$35$$)) : 0 == $subId$$35$$.indexOf("node") && ($locator$$37$$.subId = "oj-diagram-node", $locator$$37$$.index = this.$_GetFirstIndex$($subId$$35$$));
    return $locator$$37$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-diagram");
    return $styleClasses$$10$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$11$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$44$$ = this._super();
    $ret$$44$$["DvtUtilBundle.DIAGRAM"] = $translations$$14$$.componentName;
    return $ret$$44$$;
  }, $_HandleEvent$:function($event$$500$$) {
    ($event$$500$$ && $event$$500$$.getType ? $event$$500$$.getType() : null) === $dvt$$5$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$500$$.getSelection()) : this._super($event$$500$$);
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }});
});
