/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$57$$, $$$$52$$, $comp$$16$$, $base$$13$$, $dvt$$10$$) {
  $oj$$57$$.$__registerWidget$("oj.ojLegend", $$$$52$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, drill:null}, $_CreateDvtComponent$:function($context$$111$$, $callback$$121$$, $callbackObj$$13$$) {
    return $dvt$$10$$.DvtLegend.newInstance($context$$111$$, $callback$$121$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$56$$) {
    var $subId$$53$$ = $locator$$56$$.subId;
    "oj-legend-section" == $subId$$53$$ ? $subId$$53$$ = "section" + this.$_GetStringFromIndexPath$($locator$$56$$.indexPath) : "oj-legend-item" == $subId$$53$$ && ($subId$$53$$ = "section" + this.$_GetStringFromIndexPath$($locator$$56$$.sectionIndexPath), $subId$$53$$ += ":item[" + $locator$$56$$.itemIndex + "]");
    return $subId$$53$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr$$1_subId$$54$$) {
    var $locator$$57$$ = {};
    if (0 < $itemSubstr$$1_subId$$54$$.indexOf(":item")) {
      var $itemStartIndex$$1$$ = $itemSubstr$$1_subId$$54$$.indexOf(":item"), $sectionSubstr$$1$$ = $itemSubstr$$1_subId$$54$$.substring(0, $itemStartIndex$$1$$);
      $itemSubstr$$1_subId$$54$$ = $itemSubstr$$1_subId$$54$$.substring($itemStartIndex$$1$$);
      $locator$$57$$.subId = "oj-legend-item";
      $locator$$57$$.sectionIndexPath = this.$_GetIndexPath$($sectionSubstr$$1$$);
      $locator$$57$$.itemIndex = this.$_GetFirstIndex$($itemSubstr$$1_subId$$54$$);
    } else {
      0 == $itemSubstr$$1_subId$$54$$.indexOf("section") && ($locator$$57$$.subId = "oj-legend-section", $locator$$57$$.indexPath = this.$_GetIndexPath$($itemSubstr$$1_subId$$54$$));
    }
    return $locator$$57$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$21$$ = this._super();
    $styleClasses$$21$$.push("oj-legend");
    return $styleClasses$$21$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-legend-title"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-legend-section-title"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$22$$["oj-legend-section-close-icon"] = {path:"_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$22$$["oj-legend-section-close-icon oj-hover"] = {path:"_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$22$$["oj-legend-section-close-icon oj-active"] = {path:"_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$22$$["oj-legend-section-open-icon"] = {path:"_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$22$$["oj-legend-section-open-icon oj-hover"] = {path:"_resources/openOver", property:"CSS_URL"};
    $styleClasses$$22$$["oj-legend-section-open-icon oj-active"] = {path:"_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$22$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$21$$ = this.options.translations, $ret$$66$$ = this._super();
    $ret$$66$$["DvtUtilBundle.LEGEND"] = $translations$$21$$.componentName;
    return $ret$$66$$;
  }, $_GetEventTypes$:function() {
    return["categoryFilter", "categoryHighlight", "drill"];
  }, $_HandleEvent$:function($event$$568$$) {
    var $filterType$$1_highlightType$$1_type$$101$$ = $event$$568$$ && $event$$568$$.getType ? $event$$568$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$101$$ = $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$568$$.getCategory(), type:$filterType$$1_highlightType$$1_type$$101$$}), this.$_UserOptionChange$("hiddenCategories", 
    $event$$568$$.hiddenCategories)) : $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtCategoryRolloverEvent.TYPE_OVER || $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$101$$ = $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:$event$$568$$.categories, type:$filterType$$1_highlightType$$1_type$$101$$}), 
    this.$_UserOptionChange$("highlightedCategories", $event$$568$$.categories)) : $filterType$$1_highlightType$$1_type$$101$$ === $dvt$$10$$.DvtDrillEvent.TYPE ? this._trigger("drill", null, {id:$event$$568$$.getId()}) : this._super($event$$568$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.overviewGrippy = $oj$$57$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
  }, $_Render$:function() {
    this._super();
    this.element.attr("role") || this.element.attr("tabIndex", null);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getSection:function($subIdPath$$2$$) {
    var $ret$$67$$ = this.$_component$.getAutomation().getSection($subIdPath$$2$$);
    if ($ret$$67$$) {
      var $ojComponent$$ = this;
      this.$_AddAutomationGetters$($ret$$67$$);
      $ret$$67$$.getSection = function $$ret$$67$$$getSection$($section$$1_sectionIndex$$) {
        ($section$$1_sectionIndex$$ = $ret$$67$$.sections ? $ret$$67$$.sections[$section$$1_sectionIndex$$] : null) && $ojComponent$$.$_AddAutomationGetters$($section$$1_sectionIndex$$);
        return $section$$1_sectionIndex$$;
      };
      $ret$$67$$.getItem = function $$ret$$67$$$getItem$($item$$96_itemIndex$$4$$) {
        ($item$$96_itemIndex$$4$$ = $ret$$67$$.items ? $ret$$67$$.items[$item$$96_itemIndex$$4$$] : null) && $ojComponent$$.$_AddAutomationGetters$($item$$96_itemIndex$$4$$);
        return $item$$96_itemIndex$$4$$;
      };
    }
    return $ret$$67$$;
  }, getItem:function($ret$$68_subIdPath$$3$$) {
    $ret$$68_subIdPath$$3$$ = this.$_component$.getAutomation().getItem($ret$$68_subIdPath$$3$$);
    this.$_AddAutomationGetters$($ret$$68_subIdPath$$3$$);
    return $ret$$68_subIdPath$$3$$;
  }, getPreferredSize:function($width$$32$$, $height$$30$$) {
    var $dims$$ = this.$_component$.getPreferredSize(this.options, $width$$32$$, $height$$30$$);
    return{width:$dims$$.getWidth(), height:$dims$$.getHeight()};
  }});
});
