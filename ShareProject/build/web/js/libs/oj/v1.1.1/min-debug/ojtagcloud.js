/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTagCloud"], function($oj$$61$$, $$$$56$$, $comp$$17$$, $base$$14$$, $dvt$$11$$) {
  $oj$$61$$.$__registerWidget$("oj.ojTagCloud", $$$$56$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$112$$, $callback$$123$$, $callbackObj$$14$$) {
    return $dvt$$11$$.DvtTagCloud.newInstance($context$$112$$, $callback$$123$$, $callbackObj$$14$$);
  }, $_ConvertLocatorToSubId$:function($locator$$58$$) {
    var $subId$$55$$ = $locator$$58$$.subId;
    "oj-tagcloud-item" == $subId$$55$$ && ($subId$$55$$ = "item[" + $locator$$58$$.index + "]");
    return $subId$$55$$;
  }, $_ConvertSubIdToLocator$:function($subId$$56$$) {
    var $locator$$59$$ = {};
    0 == $subId$$56$$.indexOf("item") && ($locator$$59$$.subId = "oj-tagcloud-item", $locator$$59$$.index = this.$_GetFirstIndex$($subId$$56$$));
    return $locator$$59$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$.push("oj-tagcloud");
    return $styleClasses$$23$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$24$$ = this._super();
    $styleClasses$$24$$["oj-tagcloud"] = {path:"styleDefaults/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$24$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$69$$ = this._super();
    $ret$$69$$["DvtUtilBundle.TAG_CLOUD"] = $translations$$22$$.componentName;
    return $ret$$69$$;
  }, $_HandleEvent$:function($event$$576$$) {
    ($event$$576$$ && $event$$576$$.getType ? $event$$576$$.getType() : null) === $dvt$$11$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$576$$.getSelection()) : this._super($event$$576$$);
  }, getItem:function($index$$292$$) {
    return this.$_component$.getAutomation().getItem($index$$292$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }});
});
