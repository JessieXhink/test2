/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$438$$, $callback$$119$$, $callbackObj$$71$$) {
  var $legend$$3$$ = new D.$DvtLegend$$;
  $legend$$3$$.Init($context$$438$$, $callback$$119$$, $callbackObj$$71$$);
  return $legend$$3$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$16$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$16$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$439$$, $callback$$120$$, $callbackObj$$72$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$439$$, $callback$$120$$, $callbackObj$$72$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_navigablePeers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = []
};
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$166$$) {
  $options$$166$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$166$$), (0,D.$JSCompiler_StaticMethods__transferVisibilityProperties$$)(this, this.$Options$.sections)) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$62_options$$167$$, $maxWidth$$19$$, $maxHeight$$11$$) {
  this.$SetOptions$($dim$$62_options$$167$$);
  this.$getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$62_options$$167$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$19$$, $maxHeight$$11$$));
  this.$getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return new D.$DvtDimension$$($dim$$62_options$$167$$.$w$, $dim$$62_options$$167$$.$h$)
};
D.$DvtLegend$$.prototype.getPreferredSize = D.$DvtLegend$$.prototype.$getPreferredSize$;
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($highlightedCategories_options$$168$$, $width$$115$$, $height$$107$$) {
  this.$SetOptions$($highlightedCategories_options$$168$$);
  !(0,window.isNaN)($width$$115$$) && !(0,window.isNaN)($height$$107$$) && (this.$Width$ = $width$$115$$, this.$Height$ = $height$$107$$);
  this.$getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  this.$_peers$ = [];
  this.$_navigablePeers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = [];
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
  this.$UpdateAriaAttributes$();
  this.$_contentDimensions$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  ($highlightedCategories_options$$168$$ = this.$getOptions$().highlightedCategories) && 0 < $highlightedCategories_options$$168$$.length && this.$highlight$($highlightedCategories_options$$168$$);
  return this.$_contentDimensions$
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$14$$) {
  this.$getOptions$().highlightedCategories = $categories$$14$$ && 0 < $categories$$14$$.length ? $categories$$14$$.slice() : D.$JSCompiler_alias_NULL$$;
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$14$$, this.$_peers$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$DvtLegend$$.prototype.$processEvent$ = function $$DvtLegend$$$$$processEvent$$($event$$547$$, $source$$33$$) {
  var $type$$234$$ = $event$$547$$.$getType$();
  if(("categoryRollOver" == $type$$234$$ || "categoryRollOut" == $type$$234$$) && "dim" == this.$getOptions$().hoverBehavior) {
    var $peers$$6$$ = this.$_peers$;
    this != $source$$33$$ && this.$highlight$($event$$547$$.categories);
    for(var $i$$690$$ = 0;$i$$690$$ < $peers$$6$$.length;$i$$690$$++) {
      if($peers$$6$$[$i$$690$$].getId() == $event$$547$$.$_category$) {
        this.$container$.scrollIntoView($peers$$6$$[$i$$690$$].$getDisplayables$()[0]);
        break
      }
    }
  }
  (this == $source$$33$$ || "showPopup" == $type$$234$$ || "hidePopup" == $type$$234$$) && this.$__dispatchEvent$($event$$547$$)
};
D.$DvtLegend$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtLegend$$.prototype.$destroy$ = function $$DvtLegend$$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$DvtLegend$$.prototype.destroy = D.$DvtLegend$$.prototype.$destroy$;
D.$DvtLegend$$.prototype.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$DvtLegend$$.prototype.$getAutomation$ = function $$DvtLegend$$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$DvtLegend$$.prototype.$getKeyboardFocus$ = function $$DvtLegend$$$$$getKeyboardFocus$$() {
  return this.$_eventManager$.$getFocus$()
};
D.$JSCompiler_StaticMethods_setKeyboardFocus$$ = function $$JSCompiler_StaticMethods_setKeyboardFocus$$$($JSCompiler_StaticMethods_setKeyboardFocus$self$$, $focus$$3_navigable$$13$$, $displayable$$57_isShowingFocusEffect$$1$$) {
  for(var $peers$$7$$ = $JSCompiler_StaticMethods_setKeyboardFocus$self$$.$_navigablePeers$, $i$$691$$ = 0;$i$$691$$ < $peers$$7$$.length;$i$$691$$++) {
    if($peers$$7$$[$i$$691$$].getId() == $focus$$3_navigable$$13$$.getId()) {
      (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods_setKeyboardFocus$self$$.$_eventManager$, $peers$$7$$[$i$$691$$]);
      $displayable$$57_isShowingFocusEffect$$1$$ && $peers$$7$$[$i$$691$$].$showKeyboardFocusEffect$();
      break
    }
  }
  if($focus$$3_navigable$$13$$ = $JSCompiler_StaticMethods_setKeyboardFocus$self$$.$getKeyboardFocus$()) {
    $displayable$$57_isShowingFocusEffect$$1$$ = $focus$$3_navigable$$13$$.$getDisplayables$()[0], $displayable$$57_isShowingFocusEffect$$1$$.$setAriaProperty$("label", $focus$$3_navigable$$13$$.$getAriaLabel$()), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)($JSCompiler_StaticMethods_setKeyboardFocus$self$$.$getCtx$(), $displayable$$57_isShowingFocusEffect$$1$$)
  }
};
D.$DvtLegend$$.prototype.$getDimensions$ = function $$DvtLegend$$$$$getDimensions$$($targetCoordinateSpace$$43$$) {
  var $bounds$$134$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  return!$targetCoordinateSpace$$43$$ || $targetCoordinateSpace$$43$$ === this ? $bounds$$134$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$134$$, $targetCoordinateSpace$$43$$)
};
D.$DvtLegend$$.prototype.$getContentDimensions$ = function $$DvtLegend$$$$$getContentDimensions$$($targetCoordinateSpace$$44$$) {
  return!$targetCoordinateSpace$$44$$ || $targetCoordinateSpace$$44$$ === this ? this.$_contentDimensions$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$_contentDimensions$, $targetCoordinateSpace$$44$$)
};
D.$DvtLegend$$.prototype.$GetComponentDescription$ = function $$DvtLegend$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND")
};
D.$JSCompiler_StaticMethods__transferVisibilityProperties$$ = function $$JSCompiler_StaticMethods__transferVisibilityProperties$$$($JSCompiler_StaticMethods__transferVisibilityProperties$self$$, $sections$$2$$) {
  if($sections$$2$$ && !(0 >= $sections$$2$$.length)) {
    for(var $hiddenCategories$$7$$ = $JSCompiler_StaticMethods__transferVisibilityProperties$self$$.$getOptions$().hiddenCategories, $i$$692$$ = 0;$i$$692$$ < $sections$$2$$.length;$i$$692$$++) {
      var $items$$25_section$$4$$ = $sections$$2$$[$i$$692$$];
      $items$$25_section$$4$$.sections && ($hiddenCategories$$7$$ = (0,D.$JSCompiler_StaticMethods__transferVisibilityProperties$$)($JSCompiler_StaticMethods__transferVisibilityProperties$self$$, $items$$25_section$$4$$.sections));
      if(($items$$25_section$$4$$ = $items$$25_section$$4$$.items) && !(0 >= $items$$25_section$$4$$.length)) {
        for(var $j$$92$$ = 0;$j$$92$$ < $items$$25_section$$4$$.length;$j$$92$$++) {
          var $item$$24$$ = $items$$25_section$$4$$[$j$$92$$], $itemCategory$$ = D.$DvtLegendRenderer$$.$getItemCategory$($item$$24$$);
          "hidden" == $item$$24$$.categoryVisibility && 0 > D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$7$$, $itemCategory$$) && $hiddenCategories$$7$$.push($itemCategory$$);
          $item$$24$$.categoryVisibility = D.$JSCompiler_alias_NULL$$
        }
      }
    }
  }
};
D.$DvtLegend$$.prototype.$UpdateAriaAttributes$ = function $$DvtLegend$$$$$UpdateAriaAttributes$$() {
  if((0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this)) {
    var $options$$169$$ = this.$getOptions$(), $hideAndShow$$1$$ = $options$$169$$.hideAndShowBehavior;
    if("off" != $hideAndShow$$1$$ && "none" != $hideAndShow$$1$$ || "dim" == $options$$169$$.hoverBehavior) {
      this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))
    }
  }
};
D.$DvtLegend$$.prototype.$isNavigable$ = function $$DvtLegend$$$$$isNavigable$$() {
  return 0 < this.$_navigablePeers$.length
};
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportPath_$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$10$$) {
  this.$_legend$ = $dvtComponent$$10$$;
  this.$_options$ = this.$_legend$.$getOptions$()
};
(0,D.$goog$exportPath_$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$58_indexList$$4_item$$25_logicalObj$$14$$) {
  if(($displayable$$58_indexList$$4_item$$25_logicalObj$$14$$ = this.$_legend$.$__getEventManager$().$GetLogicalObject$($displayable$$58_indexList$$4_item$$25_logicalObj$$14$$)) && $displayable$$58_indexList$$4_item$$25_logicalObj$$14$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$58_indexList$$4_item$$25_logicalObj$$14$$ = $displayable$$58_indexList$$4_item$$25_logicalObj$$14$$.getData(), $displayable$$58_indexList$$4_item$$25_logicalObj$$14$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$58_indexList$$4_item$$25_logicalObj$$14$$, this.$_options$)) {
      return"section" + $displayable$$58_indexList$$4_item$$25_logicalObj$$14$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$, $item$$26$$, $legendOptions$$4$$) {
  if($legendOptions$$4$$.sections && 0 < $legendOptions$$4$$.sections.length) {
    for(var $s$$148$$ = 0;$s$$148$$ < $legendOptions$$4$$.sections.length;$s$$148$$++) {
      if($legendOptions$$4$$.sections[$s$$148$$] == $item$$26$$) {
        return"[" + $s$$148$$ + "]"
      }
      var $itemIndex$$8$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$, $item$$26$$, $legendOptions$$4$$.sections[$s$$148$$]);
      if($itemIndex$$8$$) {
        return"[" + $s$$148$$ + "]" + $itemIndex$$8$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$4$$.items && 0 < $legendOptions$$4$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$ < $legendOptions$$4$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$++) {
      if($legendOptions$$4$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$] == $item$$26$$) {
        return":item[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods_getIndicesFromSeries$$$($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$, $series$$18$$, $legendOptions$$5$$) {
  if($legendOptions$$5$$.sections && 0 < $legendOptions$$5$$.sections.length) {
    for(var $s$$149$$ = 0;$s$$149$$ < $legendOptions$$5$$.sections.length;$s$$149$$++) {
      var $itemIndex$$9$$ = (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$, $series$$18$$, $legendOptions$$5$$.sections[$s$$149$$]);
      if($itemIndex$$9$$) {
        return"[" + $s$$149$$ + "]" + $itemIndex$$9$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$5$$.items && 0 < $legendOptions$$5$$.items.length) {
    for($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$ = 0;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$ < $legendOptions$$5$$.items.length;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$++) {
      if($legendOptions$$5$$.items[$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$].text == $series$$18$$.name) {
        return":item[" + $JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getLegendItem$$ = function $$JSCompiler_StaticMethods_getLegendItem$$$($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$170$$, $subId$$18$$) {
  var $index$$210_openParen$$2$$ = $subId$$18$$.indexOf("["), $closeParen$$2_nextCloseParen$$ = $subId$$18$$.indexOf("]");
  if(0 <= $index$$210_openParen$$2$$ && 0 <= $closeParen$$2_nextCloseParen$$) {
    var $index$$210_openParen$$2$$ = $subId$$18$$.substring($index$$210_openParen$$2$$ + 1, $closeParen$$2_nextCloseParen$$), $colonIndex$$2$$ = $subId$$18$$.indexOf(":");
    $subId$$18$$ = $subId$$18$$.substring($closeParen$$2_nextCloseParen$$ + 1);
    $closeParen$$2_nextCloseParen$$ = $subId$$18$$.indexOf("]");
    return 0 <= $subId$$18$$.indexOf("[") && 0 <= $closeParen$$2_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods_getLegendItem$$)($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$170$$.sections[$index$$210_openParen$$2$$], $subId$$18$$) : 0 == $colonIndex$$2$$ ? $options$$170$$.items[$index$$210_openParen$$2$$] : $options$$170$$.sections[$index$$210_openParen$$2$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem$$3_subId$$19$$) {
  $legendItem$$3_subId$$19$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this, this.$_options$, $legendItem$$3_subId$$19$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$695$$ = 0;$i$$695$$ < $legendPeers$$.length;$i$$695$$++) {
    var $item$$27$$ = $legendPeers$$[$i$$695$$].getData();
    if($legendItem$$3_subId$$19$$ == $item$$27$$) {
      return $legendPeers$$[$i$$695$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
  return this.$_options$.title
};
D.$DvtLegendAutomation$$.prototype.getTitle = D.$DvtLegendAutomation$$.prototype.$getTitle$;
D.$DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($subIdPath$$) {
  for(var $item$$28$$, $index$$211$$ = $subIdPath$$.shift(), $options$$171$$ = this.$_options$;$index$$211$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$.length ? $options$$171$$ = $options$$171$$.sections[$index$$211$$] : $item$$28$$ = $options$$171$$.items[$index$$211$$], $index$$211$$ = $subIdPath$$.shift()
  }
  return{text:$item$$28$$.text ? $item$$28$$.text : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getItem = D.$DvtLegendAutomation$$.prototype.getItem;
D.$DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($subIdPath$$1$$) {
  for(var $section$$5$$, $index$$212$$ = $subIdPath$$1$$.shift(), $options$$172$$ = this.$_options$;$index$$212$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$1$$.length ? $options$$172$$ = $options$$172$$.sections[$index$$212$$] : $section$$5$$ = $options$$172$$.sections[$index$$212$$], $index$$212$$ = $subIdPath$$1$$.shift()
  }
  return{title:$section$$5$$.title ? $section$$5$$.title : D.$JSCompiler_alias_NULL$$, items:$section$$5$$.items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($section$$5$$.items) : D.$JSCompiler_alias_NULL$$, sections:$section$$5$$.sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)(this, $section$$5$$.sections) : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getSection = D.$DvtLegendAutomation$$.prototype.$getSection$;
D.$JSCompiler_StaticMethods__generateItemObjects$$ = function $$JSCompiler_StaticMethods__generateItemObjects$$$($items$$26$$) {
  for(var $itemDataArray$$ = [], $i$$696$$ = 0;$i$$696$$ < $items$$26$$.length;$i$$696$$++) {
    $itemDataArray$$.push({text:$items$$26$$[$i$$696$$].text})
  }
  return $itemDataArray$$
};
D.$JSCompiler_StaticMethods__generateSectionObjects$$ = function $$JSCompiler_StaticMethods__generateSectionObjects$$$($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$) {
  for(var $sectionDataArray$$ = [], $i$$697$$ = 0;$i$$697$$ < $sections$$3$$.length;$i$$697$$++) {
    $sectionDataArray$$.push({title:$sections$$3$$[$i$$697$$].title ? $sections$$3$$[$i$$697$$].title : D.$JSCompiler_alias_NULL$$, items:$sections$$3$$[$i$$697$$].items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($sections$$3$$[$i$$697$$].items) : D.$JSCompiler_alias_NULL$$, sections:$sections$$3$$[$i$$697$$].sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$[$i$$697$$].sections) : D.$JSCompiler_alias_NULL$$})
  }
  return $sectionDataArray$$
};
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$, next:D.$DvtLegendDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_NEXT$$ = {skin:"next", titleStyle:new D.$DvtCSSStyle$$("color: #737373;"), _sectionTitleStyle:new D.$DvtCSSStyle$$("color: #737373;"), layout:{titleGapWidth:17, titleGapHeight:9, symbolGapWidth:7, symbolGapHeight:4, rowGap:4, columnGap:10, sectionGapHeight:16, sectionGapWidth:24}};
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", colors:D.$DvtCSSStyle$COLORS_ALTA$$, textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), _sectionTitleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;")};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;"), titleHalign:"start", hiddenCategories:[], hideAndShowBehavior:"off", hoverBehavior:"none", hoverBehaviorDelay:200, 
scrolling:"asNeeded", halign:"start", valign:"top", drilling:"off", colors:D.$DvtCSSStyle$COLORS_SKYROS$$, markerShape:"square", lineWidth:3, layout:{outerGapWidth:3, outerGapHeight:3, titleGapWidth:8, titleGapHeight:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($legend$$4$$, $defaultSize$$1$$) {
  var $scalingFactor$$2$$ = window.Math.min(D.$DvtTextUtils$$.$getTextStringHeight$($legend$$4$$.$getCtx$(), $legend$$4$$.$getOptions$().textStyle) / 14, 1);
  return window.Math.ceil($defaultSize$$1$$ * $scalingFactor$$2$$)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$5$$) {
  this.Init($legend$$5$$.$getCtx$(), $legend$$5$$.$processEvent$, $legend$$5$$);
  this.$_legend$ = $legend$$5$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$236$$, $logicalObj$$15$$) {
  var $id$$inline_7350_params$$59$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$15$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$15$$.$getParams$() != D.$JSCompiler_alias_NULL$$ ? $id$$inline_7350_params$$59$$ = $logicalObj$$15$$.$getParams$() : $logicalObj$$15$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_7350_params$$59$$ = $logicalObj$$15$$.getId(), $id$$inline_7350_params$$59$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_7350_params$$59$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$236$$, $id$$inline_7350_params$$59$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$548$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$548$$);
  var $action$$22_obj$$294$$ = this.$GetLogicalObject$($event$$548$$.target);
  if($action$$22_obj$$294$$) {
    var $hideShow$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$22_obj$$294$$), $action$$22_obj$$294$$ = this.$_processActionEvent$($action$$22_obj$$294$$);
    ($hideShow$$ || $action$$22_obj$$294$$) && $event$$548$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$549_obj$$295$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$549_obj$$295$$);
  ($event$$549_obj$$295$$ = this.$GetLogicalObject$($event$$549_obj$$295$$.target)) && this.$UpdateActiveElement$($event$$549_obj$$295$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$550$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$550$$);
  this.$GetLogicalObject$($event$$550$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$59_touchEvent$$7$$) {
  var $action$$23_obj$$297$$ = this.$GetLogicalObject$($evt$$59_touchEvent$$7$$.target);
  if($action$$23_obj$$297$$) {
    $evt$$59_touchEvent$$7$$ = $evt$$59_touchEvent$$7$$.$touchEvent$;
    var $hideShow$$1$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$23_obj$$297$$), $action$$23_obj$$297$$ = this.$_processActionEvent$($action$$23_obj$$297$$);
    ($hideShow$$1$$ || $action$$23_obj$$297$$) && $evt$$59_touchEvent$$7$$ && $evt$$59_touchEvent$$7$$.preventDefault()
  }
};
D.$JSCompiler_StaticMethods_processHideShowEvent$$ = function $$JSCompiler_StaticMethods_processHideShowEvent$$$($JSCompiler_StaticMethods_processHideShowEvent$self$$, $obj$$298$$) {
  var $hiddenCategories$$8_hideAndShow$$2$$ = $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hideAndShowBehavior;
  if("none" == $hiddenCategories$$8_hideAndShow$$2$$ || "off" == $hiddenCategories$$8_hideAndShow$$2$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$15_id$$217$$ = $obj$$298$$.$getCategories$ ? $obj$$298$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$15_id$$217$$ || 0 >= $categories$$15_id$$217$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $category$$17_event$$551$$ = $obj$$298$$.$getCategories$()[0], $hiddenCategories$$8_hideAndShow$$2$$ = $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hiddenCategories || [], $hiddenCategories$$8_hideAndShow$$2$$ = $hiddenCategories$$8_hideAndShow$$2$$.slice(), $displayables$$18$$ = $obj$$298$$.$getDisplayables$(), $i$$698$$ = 0;$i$$698$$ < $displayables$$18$$.length;$i$$698$$++) {
    var $displayable$$59$$ = $displayables$$18$$[$i$$698$$];
    $displayable$$59$$ instanceof D.$DvtSimpleMarker$$ ? $displayable$$59$$.$setHollow$($obj$$298$$.$getColor$()) : $displayable$$59$$ instanceof D.$DvtRect$$ && (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($obj$$298$$)
  }
  $categories$$15_id$$217$$ = $categories$$15_id$$217$$[0];
  D.$DvtLegendRenderer$$.$isCategoryHidden$($category$$17_event$$551$$, $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$) ? ($hiddenCategories$$8_hideAndShow$$2$$.splice($hiddenCategories$$8_hideAndShow$$2$$.indexOf($category$$17_event$$551$$), 1), $category$$17_event$$551$$ = new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$15_id$$217$$)) : ($hiddenCategories$$8_hideAndShow$$2$$.push($category$$17_event$$551$$), $category$$17_event$$551$$ = 
  new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, $categories$$15_id$$217$$));
  $category$$17_event$$551$$.hiddenCategories = $hiddenCategories$$8_hideAndShow$$2$$;
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hiddenCategories = $hiddenCategories$$8_hideAndShow$$2$$;
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$($category$$17_event$$551$$, $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendEventManager$$.prototype.$_processActionEvent$ = function $$DvtLegendEventManager$$$$$_processActionEvent$$($obj$$299_text$$93$$) {
  return $obj$$299_text$$93$$ && $obj$$299_text$$93$$.$getAction$ && $obj$$299_text$$93$$.$getAction$() ? (this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$299_text$$93$$.$getAction$(), $obj$$299_text$$93$$.getId()), this.$_legend$), D.$JSCompiler_alias_TRUE$$) : $obj$$299_text$$93$$ instanceof D.$DvtLegendObjPeer$$ && $obj$$299_text$$93$$.$isDrillable$() ? ($obj$$299_text$$93$$ = $obj$$299_text$$93$$.getData().text, this.$FireEvent$(new D.$DvtDrillEvent$$($obj$$299_text$$93$$, $obj$$299_text$$93$$, 
  D.$JSCompiler_alias_NULL$$), this.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtLegendEventManager$$$$$ProcessRolloverEvent$$($event$$552$$, $categories$$16_obj$$300$$, $bOver$$9_rolloverEvent$$3$$) {
  var $hoverBehaviorDelay$$2_options$$173$$ = this.$_legend$.$getOptions$();
  "none" == $hoverBehaviorDelay$$2_options$$173$$.hoverBehavior || $categories$$16_obj$$300$$.$getDisplayables$ && $categories$$16_obj$$300$$.$getDisplayables$()[0] instanceof D.$DvtButton$$ || ($categories$$16_obj$$300$$ = $categories$$16_obj$$300$$.$getCategories$ ? $categories$$16_obj$$300$$.$getCategories$() : [], $hoverBehaviorDelay$$2_options$$173$$.highlightedCategories = $bOver$$9_rolloverEvent$$3$$ ? $categories$$16_obj$$300$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$9_rolloverEvent$$3$$ = 
  new D.$DvtCategoryRolloverEvent$$($bOver$$9_rolloverEvent$$3$$ ? "categoryRollOver" : "categoryRollOut", $hoverBehaviorDelay$$2_options$$173$$.highlightedCategories), $hoverBehaviorDelay$$2_options$$173$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($hoverBehaviorDelay$$2_options$$173$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$9_rolloverEvent$$3$$, this.$_legend$.$_peers$, $hoverBehaviorDelay$$2_options$$173$$, D.$JSCompiler_alias_TRUE$$), $event$$552$$.stopPropagation())
};
D.$DvtLegendEventManager$$.prototype.$onCollapseButtonClick$ = function $$DvtLegendEventManager$$$$$onCollapseButtonClick$$($event$$553$$, $button$$64$$) {
  for(var $bounds$$135_buttonId$$1_focus$$4_peer$$21$$ = $button$$64$$.getId(), $isShowingFocusEffect$$2_section$$6$$ = this.$_legend$.$getOptions$(), $i$$699$$ = 0;$i$$699$$ < $bounds$$135_buttonId$$1_focus$$4_peer$$21$$.length;$i$$699$$++) {
    $isShowingFocusEffect$$2_section$$6$$ = $isShowingFocusEffect$$2_section$$6$$.sections[$bounds$$135_buttonId$$1_focus$$4_peer$$21$$[$i$$699$$]]
  }
  $isShowingFocusEffect$$2_section$$6$$.expanded = "off" == $isShowingFocusEffect$$2_section$$6$$.expanded ? "on" : "off";
  $event$$553$$.type == D.$DvtMouseEvent$CLICK$$ && ($bounds$$135_buttonId$$1_focus$$4_peer$$21$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$553$$)), (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this, $bounds$$135_buttonId$$1_focus$$4_peer$$21$$.$getNextNavigable$($event$$553$$)));
  $isShowingFocusEffect$$2_section$$6$$ = ($bounds$$135_buttonId$$1_focus$$4_peer$$21$$ = this.$_legend$.$getKeyboardFocus$()) ? $bounds$$135_buttonId$$1_focus$$4_peer$$21$$.$isShowingKeyboardFocusEffect$() : D.$JSCompiler_alias_FALSE$$;
  this.$_legend$.$render$();
  $bounds$$135_buttonId$$1_focus$$4_peer$$21$$ && (0,D.$JSCompiler_StaticMethods_setKeyboardFocus$$)(this.$_legend$, $bounds$$135_buttonId$$1_focus$$4_peer$$21$$, $isShowingFocusEffect$$2_section$$6$$);
  this.$hideTooltip$();
  $bounds$$135_buttonId$$1_focus$$4_peer$$21$$ = this.$_legend$.$getContentDimensions$();
  this.$FireEvent$(new D.$DvtResizeEvent$$($bounds$$135_buttonId$$1_focus$$4_peer$$21$$.$w$, $bounds$$135_buttonId$$1_focus$$4_peer$$21$$.$h$, $bounds$$135_buttonId$$1_focus$$4_peer$$21$$.x, $bounds$$135_buttonId$$1_focus$$4_peer$$21$$.y), this.$_legend$)
};
D.$DvtLegendKeyboardHandler$$ = function $$DvtLegendKeyboardHandler$$$($manager$$17$$, $legend$$6$$) {
  this.Init($manager$$17$$, $legend$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtLegendKeyboardHandler");
D.$DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($manager$$18$$, $legend$$7$$) {
  D.$DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $manager$$18$$);
  this.$_legend$ = $legend$$7$$
};
D.$DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($event$$554$$) {
  var $keyCode$$35_navigables$$6$$ = $event$$554$$.keyCode, $currentNavigable$$10$$ = this.$_eventManager$.$getFocus$(), $em$$4$$ = this.$_legend$.$__getEventManager$(), $isButton$$ = $currentNavigable$$10$$ && $currentNavigable$$10$$.$getDisplayables$()[0] instanceof D.$DvtButton$$;
  if(9 == $keyCode$$35_navigables$$6$$) {
    if($currentNavigable$$10$$) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$554$$), $currentNavigable$$10$$
    }
    $keyCode$$35_navigables$$6$$ = this.$_legend$.$_navigablePeers$;
    if(0 < $keyCode$$35_navigables$$6$$.length) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$554$$), this.$getDefaultNavigable$($keyCode$$35_navigables$$6$$)
    }
  }else {
    if(13 == $keyCode$$35_navigables$$6$$ || 32 == $keyCode$$35_navigables$$6$$) {
      $currentNavigable$$10$$ && ($isButton$$ ? $em$$4$$.$onCollapseButtonClick$($event$$554$$, $currentNavigable$$10$$.$getDisplayables$()[0]) : (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)($em$$4$$, $currentNavigable$$10$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$554$$))
    }else {
      if($isButton$$ && (37 == $keyCode$$35_navigables$$6$$ || 39 == $keyCode$$35_navigables$$6$$)) {
        $em$$4$$.$onCollapseButtonClick$($event$$554$$, $currentNavigable$$10$$.$getDisplayables$()[0]), (0,D.$DvtEventManager$consumeEvent$$)($event$$554$$)
      }else {
        return D.$DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$554$$)
      }
    }
  }
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$8$$, $displayables$$19$$, $id$$218$$, $tooltip$$42$$, $datatip$$16$$, $drillable$$5$$) {
  this.Init($legend$$8$$, $displayables$$19$$, $id$$218$$, $tooltip$$42$$, $datatip$$16$$, $drillable$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($i$$700_legend$$9$$, $displayables$$20$$, $item$$29$$, $tooltip$$43$$, $datatip$$17$$, $drillable$$6$$) {
  this.$_legend$ = $i$$700_legend$$9$$;
  this.$_displayables$ = $displayables$$20$$;
  this.$_item$ = $item$$29$$;
  this.$_id$ = (this.$_category$ = D.$DvtLegendRenderer$$.$getItemCategory$(this.$_item$)) ? this.$_category$ : $item$$29$$.title;
  this.$_action$ = $item$$29$$.action;
  this.$_drillable$ = $drillable$$6$$;
  this.$_spb$ = $item$$29$$._spb;
  this.$_tooltip$ = $tooltip$$43$$;
  this.$_datatip$ = $datatip$$17$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_action$ || this.$_drillable$) {
    for($i$$700_legend$$9$$ = 0;$i$$700_legend$$9$$ < this.$_displayables$.length;$i$$700_legend$$9$$++) {
      this.$_displayables$[$i$$700_legend$$9$$].setCursor("pointer")
    }
  }
};
D.$DvtLegendObjPeer$associate$$ = function $$DvtLegendObjPeer$associate$$$($displayables$$21$$, $legend$$10$$, $identObj$$1_item$$30$$, $hideAndShow$$inline_7354_i$$701_tooltip$$44$$, $datatip$$18$$, $drillable$$7$$) {
  if(!$displayables$$21$$ || !$identObj$$1_item$$30$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $identObj$$1_item$$30$$ = new D.$DvtLegendObjPeer$$($legend$$10$$, $displayables$$21$$, $identObj$$1_item$$30$$, $hideAndShow$$inline_7354_i$$701_tooltip$$44$$, $datatip$$18$$, $drillable$$7$$);
  $identObj$$1_item$$30$$.$getDisplayables$()[0] instanceof D.$DvtButton$$ ? $legend$$10$$.$_navigablePeers$.push($identObj$$1_item$$30$$) : ($hideAndShow$$inline_7354_i$$701_tooltip$$44$$ = $legend$$10$$.$getOptions$().hideAndShowBehavior, ($identObj$$1_item$$30$$.$getDatatip$() != D.$JSCompiler_alias_NULL$$ || "none" != $hideAndShow$$inline_7354_i$$701_tooltip$$44$$ && "off" != $hideAndShow$$inline_7354_i$$701_tooltip$$44$$) && $legend$$10$$.$_navigablePeers$.push($identObj$$1_item$$30$$), $legend$$10$$.$_peers$.push($identObj$$1_item$$30$$));
  for($hideAndShow$$inline_7354_i$$701_tooltip$$44$$ = 0;$hideAndShow$$inline_7354_i$$701_tooltip$$44$$ < $displayables$$21$$.length;$hideAndShow$$inline_7354_i$$701_tooltip$$44$$++) {
    $legend$$10$$.$__getEventManager$().$associate$($displayables$$21$$[$hideAndShow$$inline_7354_i$$701_tooltip$$44$$], $identObj$$1_item$$30$$)
  }
  return $identObj$$1_item$$30$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_category$ != D.$JSCompiler_alias_NULL$$ ? [this.$_category$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $hideAndShow$$3_states$$10$$;
  $hideAndShow$$3_states$$10$$ = this.$_legend$.$getOptions$().hideAndShowBehavior;
  var $bHiddenCategory$$ = D.$DvtLegendRenderer$$.$isCategoryHidden$(this.$_category$, this.$_legend$);
  return this.$_displayables$[0] instanceof D.$DvtButton$$ ? ($hideAndShow$$3_states$$10$$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "off" == this.getData().expanded ? "STATE_COLLAPSED" : "STATE_EXPANDED")], (0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().title, $hideAndShow$$3_states$$10$$)) : this.getData().shortDesc != D.$JSCompiler_alias_NULL$$ ? ($hideAndShow$$3_states$$10$$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $bHiddenCategory$$ ? "STATE_HIDDEN" : 
  "STATE_VISIBLE")], (0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().shortDesc, $hideAndShow$$3_states$$10$$)) : "off" != $hideAndShow$$3_states$$10$$ && "none" != $hideAndShow$$3_states$$10$$ ? ($hideAndShow$$3_states$$10$$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $bHiddenCategory$$ ? "STATE_HIDDEN" : "STATE_VISIBLE")], (0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().text, $hideAndShow$$3_states$$10$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateAriaLabel$$ = function $$JSCompiler_StaticMethods_updateAriaLabel$$$($JSCompiler_StaticMethods_updateAriaLabel$self$$) {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && $JSCompiler_StaticMethods_updateAriaLabel$self$$.$_displayables$[0] && $JSCompiler_StaticMethods_updateAriaLabel$self$$.$_displayables$[0].$setAriaProperty$("label", $JSCompiler_StaticMethods_updateAriaLabel$self$$.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$555$$) {
  return $event$$555$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$555$$, this.$_legend$.$_navigablePeers$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$45$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$45$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_displayables$[0] && (this.$_displayables$[0] instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods_drawOverState$$)(this.$_displayables$[0]) : this.$_displayables$[0].$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)()))
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayables$[0] && (this.$_displayables$[0] instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods_drawUpState$$)(this.$_displayables$[0]) : this.$_displayables$[0].$setStroke$(D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_item$.color
};
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = 0.6;
D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ = 12;
D.$DvtLegendRenderer$$.$_FOCUS_GAP$ = 2;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$11$$, $availSpace$$86$$) {
  var $options$$174_titles$$ = $legend$$11$$.$getOptions$(), $context$$440_totalDim$$ = $legend$$11$$.$getCtx$(), $contentDims_isRTL$$28_valign$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$440_totalDim$$);
  $options$$174_titles$$.isLayout || D.$DvtLegendRenderer$$.$_renderBackground$($legend$$11$$, $availSpace$$86$$);
  var $container$$128_translateX$$1$$ = new D.$DvtSimpleScrollableContainer$$($context$$440_totalDim$$, $availSpace$$86$$.$w$, $availSpace$$86$$.$h$), $contentContainer$$3_i$$702$$ = new D.$DvtContainer$$($context$$440_totalDim$$);
  $container$$128_translateX$$1$$.$_container$.$addChild$($contentContainer$$3_i$$702$$);
  $legend$$11$$.$addChild$($container$$128_translateX$$1$$);
  $legend$$11$$.$container$ = $container$$128_translateX$$1$$;
  var $gapWidth$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$11$$, $options$$174_titles$$.layout.outerGapWidth), $gapHeight$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$11$$, $options$$174_titles$$.layout.outerGapHeight);
  $availSpace$$86$$.x += $gapWidth$$2$$;
  $availSpace$$86$$.y += $gapHeight$$2$$;
  $availSpace$$86$$.$w$ -= 2 * $gapWidth$$2$$;
  $availSpace$$86$$.$h$ -= 2 * $gapHeight$$2$$;
  $legend$$11$$.$__setBounds$($availSpace$$86$$);
  if(0 >= $availSpace$$86$$.$w$ || 0 >= $availSpace$$86$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  $context$$440_totalDim$$ = D.$DvtLegendRenderer$$.$_renderContents$($legend$$11$$, $contentContainer$$3_i$$702$$, new D.$DvtRectangle$$($availSpace$$86$$.x, $availSpace$$86$$.y, $availSpace$$86$$.$w$, $availSpace$$86$$.$h$));
  if(0 == $context$$440_totalDim$$.$w$ || 0 == $context$$440_totalDim$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($container$$128_translateX$$1$$);
  $context$$440_totalDim$$.$h$ > $availSpace$$86$$.$h$ && ($context$$440_totalDim$$.$h$ = $availSpace$$86$$.$h$);
  var $translateY$$1$$ = $container$$128_translateX$$1$$ = 0, $halign$$5$$ = $options$$174_titles$$.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$174_titles$$.hAlign : $options$$174_titles$$.halign;
  "center" == $halign$$5$$ ? $container$$128_translateX$$1$$ = $availSpace$$86$$.x - $context$$440_totalDim$$.x + ($availSpace$$86$$.$w$ - $context$$440_totalDim$$.$w$) / 2 : "end" == $halign$$5$$ && ($container$$128_translateX$$1$$ = $contentDims_isRTL$$28_valign$$2$$ ? $availSpace$$86$$.x - $context$$440_totalDim$$.x : $availSpace$$86$$.x - $context$$440_totalDim$$.x + $availSpace$$86$$.$w$ - $context$$440_totalDim$$.$w$);
  $contentDims_isRTL$$28_valign$$2$$ = $options$$174_titles$$.vAlign != D.$JSCompiler_alias_NULL$$ ? $options$$174_titles$$.vAlign : $options$$174_titles$$.valign;
  "middle" == $contentDims_isRTL$$28_valign$$2$$ ? $translateY$$1$$ = $availSpace$$86$$.y - $context$$440_totalDim$$.y + ($availSpace$$86$$.$h$ - $context$$440_totalDim$$.$h$) / 2 : "bottom" == $contentDims_isRTL$$28_valign$$2$$ && ($translateY$$1$$ = $availSpace$$86$$.y - $context$$440_totalDim$$.y + $availSpace$$86$$.$h$ - $context$$440_totalDim$$.$h$);
  $contentDims_isRTL$$28_valign$$2$$ = new D.$DvtRectangle$$($context$$440_totalDim$$.x + $container$$128_translateX$$1$$ - $gapWidth$$2$$, $context$$440_totalDim$$.y + $translateY$$1$$ - $gapHeight$$2$$, $context$$440_totalDim$$.$w$ + 2 * $gapWidth$$2$$, $context$$440_totalDim$$.$h$ + 2 * $gapHeight$$2$$);
  if($options$$174_titles$$.isLayout) {
    return $contentDims_isRTL$$28_valign$$2$$
  }
  ($container$$128_translateX$$1$$ || $translateY$$1$$) && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($contentContainer$$3_i$$702$$, $container$$128_translateX$$1$$, $translateY$$1$$);
  $options$$174_titles$$ = $legend$$11$$.$_titles$;
  for($contentContainer$$3_i$$702$$ = 0;$contentContainer$$3_i$$702$$ < $options$$174_titles$$.length;$contentContainer$$3_i$$702$$++) {
    (0,D.$DvtLayoutUtils$align$$)($context$$440_totalDim$$, $options$$174_titles$$[$contentContainer$$3_i$$702$$].$halign$, $options$$174_titles$$[$contentContainer$$3_i$$702$$].text, $options$$174_titles$$[$contentContainer$$3_i$$702$$].text.$measureDimensions$().$w$)
  }
  return $contentDims_isRTL$$28_valign$$2$$
};
D.$DvtLegendRenderer$$.$_renderContents$ = function $$DvtLegendRenderer$$$$_renderContents$$($legend$$12_sectionsDim$$, $container$$129$$, $availSpace$$87$$) {
  var $options$$175$$ = $legend$$12_sectionsDim$$.$getOptions$();
  $availSpace$$87$$ = $availSpace$$87$$.$clone$();
  var $title$$12$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$12_sectionsDim$$, $container$$129$$, $options$$175$$.title, $availSpace$$87$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
  if($title$$12$$) {
    var $titleDim$$ = $title$$12$$.$measureDimensions$(), $titleGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$12_sectionsDim$$, $options$$175$$.layout.titleGapHeight);
    $availSpace$$87$$.y += $titleDim$$.$h$ + $titleGap$$;
    $availSpace$$87$$.$h$ -= window.Math.floor($titleDim$$.$h$ + $titleGap$$)
  }
  $legend$$12_sectionsDim$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$12_sectionsDim$$, $container$$129$$, $options$$175$$.sections, $availSpace$$87$$, []);
  return $title$$12$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$, $legend$$12_sectionsDim$$) : $legend$$12_sectionsDim$$
};
D.$DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($legend$$13$$, $availSpace$$88$$) {
  var $borderColor$$49_options$$176$$ = $legend$$13$$.$getOptions$(), $backgroundColor$$23$$ = $borderColor$$49_options$$176$$.backgroundColor, $borderColor$$49_options$$176$$ = $borderColor$$49_options$$176$$.borderColor;
  if($backgroundColor$$23$$ || $borderColor$$49_options$$176$$) {
    var $rect$$35$$ = new D.$DvtRect$$($legend$$13$$.$getCtx$(), $availSpace$$88$$.x, $availSpace$$88$$.y, $availSpace$$88$$.$w$, $availSpace$$88$$.$h$);
    $backgroundColor$$23$$ ? $rect$$35$$.$setSolidFill$($backgroundColor$$23$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$35$$);
    $borderColor$$49_options$$176$$ && ($rect$$35$$.$setSolidStroke$($borderColor$$49_options$$176$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$35$$));
    $legend$$13$$.$__getEventManager$().$associate$($rect$$35$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
    $legend$$13$$.$addChild$($rect$$35$$)
  }
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$14$$, $container$$130$$, $title$$13_titleStr$$, $availSpace$$89$$, $section$$7$$, $isAligned$$) {
  var $options$$177$$ = $legend$$14$$.$getOptions$(), $context$$441_titleStyle$$ = $container$$130$$.$getCtx$(), $isRTL$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$441_titleStyle$$);
  if(!$title$$13_titleStr$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $title$$13_titleStr$$ = new D.$DvtOutputText$$($context$$441_titleStyle$$, $title$$13_titleStr$$, $availSpace$$89$$.x, $availSpace$$89$$.y);
  $context$$441_titleStyle$$ = $options$$177$$.titleStyle;
  $section$$7$$ && $section$$7$$.titleStyle ? $context$$441_titleStyle$$ = new D.$DvtCSSStyle$$($section$$7$$.titleStyle) : $section$$7$$ && $options$$177$$._sectionTitleStyle && ($context$$441_titleStyle$$ = $options$$177$$._sectionTitleStyle);
  $title$$13_titleStr$$.$setCSSStyle$($context$$441_titleStyle$$);
  return D.$DvtTextUtils$$.$fitText$($title$$13_titleStr$$, $availSpace$$89$$.$w$, window.Infinity, $container$$130$$) ? ($isRTL$$29$$ && $title$$13_titleStr$$.$setX$($availSpace$$89$$.x + $availSpace$$89$$.$w$ - $title$$13_titleStr$$.$measureDimensions$().$w$), $options$$177$$.isLayout ? $container$$130$$.removeChild($title$$13_titleStr$$) : ($legend$$14$$.$__getEventManager$().$associate$($title$$13_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$13_titleStr$$.$getUntruncatedTextString$(), D.$JSCompiler_alias_NULL$$, 
  D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$})), $isAligned$$ && $legend$$14$$.$_titles$.push({text:$title$$13_titleStr$$, $halign$:$section$$7$$ && $section$$7$$.titleHalign ? $section$$7$$.titleHalign : $options$$177$$.titleHalign})), $title$$13_titleStr$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($legend$$15$$, $container$$131$$, $sections$$4$$, $availSpace$$90$$, $id$$219$$) {
  var $isHoriz$$15_options$$178$$ = $legend$$15$$.$getOptions$();
  $isHoriz$$15_options$$178$$.symbolWidth == D.$JSCompiler_alias_NULL$$ && $isHoriz$$15_options$$178$$.symbolHeight == D.$JSCompiler_alias_NULL$$ ? ($isHoriz$$15_options$$178$$.symbolWidth = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $isHoriz$$15_options$$178$$.symbolHeight = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : $isHoriz$$15_options$$178$$.symbolWidth == D.$JSCompiler_alias_NULL$$ ? $isHoriz$$15_options$$178$$.symbolWidth = $isHoriz$$15_options$$178$$.symbolHeight : $isHoriz$$15_options$$178$$.symbolHeight == 
  D.$JSCompiler_alias_NULL$$ && ($isHoriz$$15_options$$178$$.symbolHeight = $isHoriz$$15_options$$178$$.symbolWidth);
  for(var $sectionGapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$15_options$$178$$.layout.sectionGapHeight), $titleGapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$15_options$$178$$.layout.titleGapHeight), $gapWidth$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$15_options$$178$$.layout.sectionGapWidth), $rowHeight$$2$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$15$$), $isHoriz$$15_options$$178$$ = "vertical" != 
  $isHoriz$$15_options$$178$$.orientation, $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $horizAvailSpace$$ = $availSpace$$90$$.$clone$(), $sectionDim$$, $i$$703$$ = 0;$i$$703$$ < $sections$$4$$.length;$i$$703$$++) {
    var $sectionId$$4$$ = $id$$219$$.concat([$i$$703$$]), $gapHeight$$3$$ = "off" == $sections$$4$$[$i$$703$$].expanded || $sections$$4$$[$i$$703$$].expanded == D.$JSCompiler_alias_FALSE$$ ? $titleGapHeight$$ : $sectionGapHeight$$;
    $isHoriz$$15_options$$178$$ ? ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, $container$$131$$, $sections$$4$$[$i$$703$$], $horizAvailSpace$$, $rowHeight$$2$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $availSpace$$90$$.$w$ && ($availSpace$$90$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$90$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $availSpace$$90$$.$w$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, 
    $container$$131$$, $sections$$4$$[$i$$703$$], $availSpace$$90$$, $rowHeight$$2$$) : D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$131$$, $sections$$4$$[$i$$703$$], $availSpace$$90$$, $rowHeight$$2$$, $sectionId$$4$$, D.$JSCompiler_alias_TRUE$$), $availSpace$$90$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$90$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$, $horizAvailSpace$$ = $availSpace$$90$$.$clone$()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$3$$, 
    (0,D.$DvtAgent$isRightToLeft$$)($legend$$15$$.$getCtx$()) || ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$131$$, $sections$$4$$[$i$$703$$], $availSpace$$90$$, $rowHeight$$2$$, $sectionId$$4$$, D.$JSCompiler_alias_FALSE$$), $availSpace$$90$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$90$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$);
    $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_createButton$ = function $$DvtLegendRenderer$$$$_createButton$$($button$$65_context$$442$$, $legend$$16_peer$$22$$, $item$$31$$, $downState$$14_resources$$5$$, $prefix$$5$$, $x$$227$$, $y$$202$$, $tooltip$$45$$, $id$$220$$, $callback$$121$$, $callbackObj$$73$$) {
  var $upState$$17$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$442$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Enabled", $x$$227$$, $y$$202$$), $overState$$14$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$442$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Over", $x$$227$$, $y$$202$$);
  $downState$$14_resources$$5$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$442$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Down", $x$$227$$, $y$$202$$);
  $button$$65_context$$442$$ = new D.$DvtButton$$($button$$65_context$$442$$, $upState$$17$$, $overState$$14$$, $downState$$14_resources$$5$$, D.$JSCompiler_alias_NULL$$, $id$$220$$, $callback$$121$$, $callbackObj$$73$$);
  $legend$$16_peer$$22$$ = (0,D.$DvtLegendObjPeer$associate$$)([$button$$65_context$$442$$], $legend$$16_peer$$22$$, $item$$31$$, $tooltip$$45$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$);
  $button$$65_context$$442$$.$setAriaRole$("button");
  (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($legend$$16_peer$$22$$);
  return $button$$65_context$$442$$
};
D.$DvtLegendRenderer$$.$_createButtonImage$ = function $$DvtLegendRenderer$$$$_createButtonImage$$($context$$443_image$$13$$, $resources$$6$$, $name$$101$$, $x$$228$$, $y$$203$$) {
  var $suffix$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$443_image$$13$$) ? "RTL" : "";
  $context$$443_image$$13$$ = new D.$DvtImage$$($context$$443_image$$13$$, $resources$$6$$[$name$$101$$ + $suffix$$3$$] ? $resources$$6$$[$name$$101$$ + $suffix$$3$$] : $resources$$6$$[$name$$101$$], $x$$228$$, $y$$203$$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$443_image$$13$$);
  return $context$$443_image$$13$$
};
D.$DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($legend$$17$$, $container$$132$$, $section$$8$$, $availSpace$$91_sectionSpace$$, $rowHeight$$3$$, $id$$221_nestedSectionDim_numRows$$, $minimizeNumRows_numCols$$) {
  if($section$$8$$) {
    var $options$$179_textSpace$$ = $legend$$17$$.$getOptions$(), $currRow_symbolGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$179_textSpace$$.layout.symbolGapWidth), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$179_textSpace$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$179_textSpace$$.layout.columnGap), $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ = $legend$$17$$.$getCtx$(), 
    $isRTL$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$);
    $availSpace$$91_sectionSpace$$ = $availSpace$$91_sectionSpace$$.$clone$();
    "off" != $options$$179_textSpace$$.scrolling && ($availSpace$$91_sectionSpace$$.$h$ = window.Infinity);
    var $buttonDim_buttonX_colInitY$$, $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ = "on" == $section$$8$$.collapsible || $section$$8$$.collapsible == D.$JSCompiler_alias_TRUE$$;
    if($isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$) {
      $buttonDim_buttonX_colInitY$$ = $isRTL$$30$$ ? $availSpace$$91_sectionSpace$$.x + $availSpace$$91_sectionSpace$$.$w$ - D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ : $availSpace$$91_sectionSpace$$.x;
      if(!$options$$179_textSpace$$.isLayout) {
        var $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = "off" == $section$$8$$.expanded || $section$$8$$.expanded == D.$JSCompiler_alias_FALSE$$, $buttonType_contentHeight$$2_currCol$$ = $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ ? "closed" : "open", $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ ? "EXPAND" : "COLLAPSE", D.$JSCompiler_alias_NULL$$), 
        $em$$5_i$$704$$ = $legend$$17$$.$__getEventManager$(), $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ = D.$DvtLegendRenderer$$.$_createButton$($button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$, $legend$$17$$, $section$$8$$, $options$$179_textSpace$$._resources, $buttonType_contentHeight$$2_currCol$$, $buttonDim_buttonX_colInitY$$, $availSpace$$91_sectionSpace$$.y, $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$, $id$$221_nestedSectionDim_numRows$$, 
        $em$$5_i$$704$$.$onCollapseButtonClick$, $em$$5_i$$704$$);
        $container$$132$$.$addChild$($button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$)
      }
      $buttonDim_buttonX_colInitY$$ = new D.$DvtRectangle$$($buttonDim_buttonX_colInitY$$, $availSpace$$91_sectionSpace$$.y, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$);
      $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$179_textSpace$$.layout.symbolGapWidth);
      $isRTL$$30$$ || ($availSpace$$91_sectionSpace$$.x += D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ + $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$);
      $availSpace$$91_sectionSpace$$.$w$ -= D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ + $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$
    }
    $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ = ($isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$17$$, $container$$132$$, $section$$8$$.title, $availSpace$$91_sectionSpace$$, $section$$8$$, !$isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ && 1 >= $id$$221_nestedSectionDim_numRows$$.length)) ? $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$30$$ ? $availSpace$$91_sectionSpace$$.x + 
    $availSpace$$91_sectionSpace$$.$w$ : $availSpace$$91_sectionSpace$$.x, $availSpace$$91_sectionSpace$$.y, 0, 0);
    $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ = $buttonDim_buttonX_colInitY$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$, $buttonDim_buttonX_colInitY$$) : $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$;
    if(!$section$$8$$.items && !$section$$8$$.sections || "off" == $section$$8$$.expanded || $section$$8$$.expanded == D.$JSCompiler_alias_FALSE$$) {
      return $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$
    }
    0 < $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$.$h$ && ($button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$179_textSpace$$.layout.titleGapHeight), $availSpace$$91_sectionSpace$$.y += $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$.$h$ + $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$, $availSpace$$91_sectionSpace$$.$h$ -= $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$.$h$ + $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$);
    $section$$8$$.sections && ($id$$221_nestedSectionDim_numRows$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$17$$, $container$$132$$, $section$$8$$.sections, $availSpace$$91_sectionSpace$$, $id$$221_nestedSectionDim_numRows$$), $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$, $id$$221_nestedSectionDim_numRows$$));
    if(!$section$$8$$.items) {
      return $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$
    }
    $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ = D.$DvtLegendRenderer$$.$_calcColumns$($legend$$17$$, $availSpace$$91_sectionSpace$$, $rowHeight$$3$$, $section$$8$$.items, $minimizeNumRows_numCols$$);
    $minimizeNumRows_numCols$$ = $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$.numCols;
    $id$$221_nestedSectionDim_numRows$$ = $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$.numRows;
    $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ = $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$.width;
    $buttonDim_buttonX_colInitY$$ = $availSpace$$91_sectionSpace$$.y;
    if(0 == $id$$221_nestedSectionDim_numRows$$ || 0 == $minimizeNumRows_numCols$$) {
      return $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$
    }
    $buttonType_contentHeight$$2_currCol$$ = $id$$221_nestedSectionDim_numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$;
    $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = window.Math.min($minimizeNumRows_numCols$$ * ($button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ + $colGap$$) - $colGap$$, $availSpace$$91_sectionSpace$$.$w$);
    $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$, new D.$DvtRectangle$$($isRTL$$30$$ ? $availSpace$$91_sectionSpace$$.x + $availSpace$$91_sectionSpace$$.$w$ - $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ : $availSpace$$91_sectionSpace$$.x, $availSpace$$91_sectionSpace$$.y, $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$, $buttonType_contentHeight$$2_currCol$$));
    if($options$$179_textSpace$$.isLayout) {
      return $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$
    }
    $options$$179_textSpace$$ = $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ - $options$$179_textSpace$$.symbolWidth - $currRow_symbolGap$$;
    $currRow_symbolGap$$ = 0;
    $buttonType_contentHeight$$2_currCol$$ = 1;
    $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = $section$$8$$.items.length;
    for($em$$5_i$$704$$ = 0;$em$$5_i$$704$$ < $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$;$em$$5_i$$704$$++) {
      D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$17$$, $container$$132$$, $section$$8$$.items[$em$$5_i$$704$$], $availSpace$$91_sectionSpace$$, $options$$179_textSpace$$, $rowHeight$$3$$, $em$$5_i$$704$$), $availSpace$$91_sectionSpace$$.y += $rowHeight$$3$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $id$$221_nestedSectionDim_numRows$$ && $buttonType_contentHeight$$2_currCol$$ !== $minimizeNumRows_numCols$$ && ($availSpace$$91_sectionSpace$$.y = $buttonDim_buttonX_colInitY$$, 
      $availSpace$$91_sectionSpace$$.$w$ -= $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ + $colGap$$, $isRTL$$30$$ || ($availSpace$$91_sectionSpace$$.x += $button$$66_buttonGap_colInfo_colWidth_context$$444_titleGap$$1$$ + $colGap$$), $currRow_symbolGap$$ = 0, $buttonType_contentHeight$$2_currCol$$++)
    }
    return $isCollapsible_sectionDim$$1_title$$14_titleDim$$1$$
  }
};
D.$DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($legend$$18$$, $container$$133$$, $section$$9$$, $availSpace$$92_colWidth$$1$$, $rowHeight$$4$$) {
  if($section$$9$$) {
    var $options$$180$$ = $legend$$18$$.$getOptions$(), $symbolWidth$$ = $options$$180$$.symbolWidth, $symbolGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$180$$.layout.symbolGapWidth), $colGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$180$$.layout.columnGap), $textWidths$$1_titleGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$180$$.layout.titleGapWidth), $numItems$$3$$ = $section$$9$$.items.length, $isRTL$$31$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$18$$.$getCtx$()), 
    $sectionSpace$$1$$ = $availSpace$$92_colWidth$$1$$.$clone$(), $title$$15$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$18$$, $container$$133$$, $section$$9$$.title, $availSpace$$92_colWidth$$1$$, $section$$9$$, D.$JSCompiler_alias_FALSE$$), $sectionDim$$2_titleDim$$2$$ = $title$$15$$ ? $title$$15$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$31$$ ? $availSpace$$92_colWidth$$1$$.x + $availSpace$$92_colWidth$$1$$.$w$ : $availSpace$$92_colWidth$$1$$.x, $availSpace$$92_colWidth$$1$$.y, 
    0, 0);
    if($section$$9$$.items) {
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths$$1_titleGap$$2$$, $isRTL$$31$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths$$1_titleGap$$2$$))
    }else {
      return $sectionDim$$2_titleDim$$2$$
    }
    var $textWidths$$1_titleGap$$2$$ = [], $totalWidth$$5$$ = $availSpace$$92_colWidth$$1$$.$w$ - $sectionSpace$$1$$.$w$, $item$$33_textWidth$$2$$, $i$$705$$;
    for($i$$705$$ = 0;$i$$705$$ < $numItems$$3$$;$i$$705$$++) {
      $item$$33_textWidth$$2$$ = $section$$9$$.items[$i$$705$$], $item$$33_textWidth$$2$$ = window.Math.ceil(D.$DvtTextUtils$$.$getTextStringWidth$($legend$$18$$.$getCtx$(), $item$$33_textWidth$$2$$.text, $options$$180$$.textStyle)), $totalWidth$$5$$ += $item$$33_textWidth$$2$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths$$1_titleGap$$2$$.push($item$$33_textWidth$$2$$)
    }
    0 < $numItems$$3$$ && ($totalWidth$$5$$ -= $colGap$$1$$);
    $sectionDim$$2_titleDim$$2$$ = new D.$DvtRectangle$$($isRTL$$31$$ ? $availSpace$$92_colWidth$$1$$.x + $availSpace$$92_colWidth$$1$$.$w$ - $totalWidth$$5$$ : $availSpace$$92_colWidth$$1$$.x, $availSpace$$92_colWidth$$1$$.y, $totalWidth$$5$$, window.Math.max($rowHeight$$4$$, $sectionDim$$2_titleDim$$2$$.$h$));
    if($options$$180$$.isLayout || $totalWidth$$5$$ > $availSpace$$92_colWidth$$1$$.$w$) {
      return $container$$133$$.removeChild($title$$15$$), $sectionDim$$2_titleDim$$2$$
    }
    for($i$$705$$ = 0;$i$$705$$ < $numItems$$3$$;$i$$705$$++) {
      $item$$33_textWidth$$2$$ = $section$$9$$.items[$i$$705$$], D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$18$$, $container$$133$$, $item$$33_textWidth$$2$$, $sectionSpace$$1$$, $textWidths$$1_titleGap$$2$$[$i$$705$$], $rowHeight$$4$$, $i$$705$$), $availSpace$$92_colWidth$$1$$ = $textWidths$$1_titleGap$$2$$[$i$$705$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $availSpace$$92_colWidth$$1$$ + $colGap$$1$$, $isRTL$$31$$ || ($sectionSpace$$1$$.x += $availSpace$$92_colWidth$$1$$ + 
      $colGap$$1$$)
    }
    return $sectionDim$$2_titleDim$$2$$
  }
};
D.$DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($colGap$$2_legend$$19$$, $availSpace$$93_colWidth$$2$$, $numRows$$1_rowHeight$$5$$, $items$$27$$, $minimizeNumRows$$1_numCols$$1$$) {
  for(var $options$$181$$ = $colGap$$2_legend$$19$$.$getOptions$(), $fullColWidth_textWidth$$3$$ = 0, $i$$706_symbolWidth$$1$$ = 0;$i$$706_symbolWidth$$1$$ < $items$$27$$.length;$i$$706_symbolWidth$$1$$++) {
    var $rowGap$$1_tempWidth$$ = D.$DvtTextUtils$$.$getTextStringWidth$($colGap$$2_legend$$19$$.$getCtx$(), $items$$27$$[$i$$706_symbolWidth$$1$$].text, $options$$181$$.textStyle);
    $rowGap$$1_tempWidth$$ > $fullColWidth_textWidth$$3$$ && ($fullColWidth_textWidth$$3$$ = $rowGap$$1_tempWidth$$)
  }
  var $i$$706_symbolWidth$$1$$ = $options$$181$$.symbolWidth, $symbolGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$181$$.layout.symbolGapWidth), $rowGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$181$$.layout.rowGap);
  $colGap$$2_legend$$19$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$181$$.layout.columnGap);
  $fullColWidth_textWidth$$3$$ = window.Math.ceil($i$$706_symbolWidth$$1$$ + $symbolGap$$2$$ + $fullColWidth_textWidth$$3$$);
  $minimizeNumRows$$1_numCols$$1$$ ? ($minimizeNumRows$$1_numCols$$1$$ = window.Math.min(window.Math.floor(($availSpace$$93_colWidth$$2$$.$w$ + $colGap$$2_legend$$19$$) / ($fullColWidth_textWidth$$3$$ + $colGap$$2_legend$$19$$)), $items$$27$$.length), $numRows$$1_rowHeight$$5$$ = window.Math.ceil($items$$27$$.length / $minimizeNumRows$$1_numCols$$1$$)) : window.Infinity == $availSpace$$93_colWidth$$2$$.$h$ ? ($minimizeNumRows$$1_numCols$$1$$ = 1, $numRows$$1_rowHeight$$5$$ = $items$$27$$.length) : 
  ($numRows$$1_rowHeight$$5$$ = window.Math.min(window.Math.floor(($availSpace$$93_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$5$$ + $rowGap$$1_tempWidth$$)), $items$$27$$.length), $minimizeNumRows$$1_numCols$$1$$ = window.Math.ceil($items$$27$$.length / $numRows$$1_rowHeight$$5$$), $numRows$$1_rowHeight$$5$$ = window.Math.ceil($items$$27$$.length / $minimizeNumRows$$1_numCols$$1$$));
  $availSpace$$93_colWidth$$2$$ = window.Math.min($fullColWidth_textWidth$$3$$, ($availSpace$$93_colWidth$$2$$.$w$ - $colGap$$2_legend$$19$$ * ($minimizeNumRows$$1_numCols$$1$$ - 1)) / $minimizeNumRows$$1_numCols$$1$$);
  return $availSpace$$93_colWidth$$2$$ < $i$$706_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$availSpace$$93_colWidth$$2$$, numCols:$minimizeNumRows$$1_numCols$$1$$, numRows:$numRows$$1_rowHeight$$5$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($legend$$20_symbolHeight$$) {
  var $options$$182$$ = $legend$$20_symbolHeight$$.$getOptions$(), $text$$94_textHeight$$ = new D.$DvtOutputText$$($legend$$20_symbolHeight$$.$getCtx$(), "Test");
  $text$$94_textHeight$$.$setCSSStyle$($options$$182$$.textStyle);
  $text$$94_textHeight$$.$alignMiddle$();
  $text$$94_textHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($text$$94_textHeight$$).$h$;
  $legend$$20_symbolHeight$$ = $options$$182$$.symbolHeight + (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$20_symbolHeight$$, $options$$182$$.layout.symbolGapHeight);
  return window.Math.ceil(window.Math.max($text$$94_textHeight$$, $legend$$20_symbolHeight$$))
};
D.$DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($legend$$21$$, $container$$134_displayables$$22$$, $item$$35$$, $availSpace$$94_itemRect$$, $textSpace$$1$$, $rowHeight$$6$$, $i$$707_marker$$15$$) {
  var $hideAndShow$$4_options$$183$$ = $legend$$21$$.$getOptions$(), $context$$445$$ = $legend$$21$$.$getCtx$(), $isRTL$$32$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$445$$), $symbolWidth$$2$$ = $hideAndShow$$4_options$$183$$.symbolWidth, $symbolGap$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$21$$, $hideAndShow$$4_options$$183$$.layout.symbolGapWidth), $symbolX$$ = $isRTL$$32$$ ? $availSpace$$94_itemRect$$.x + $availSpace$$94_itemRect$$.$w$ - $symbolWidth$$2$$ : $availSpace$$94_itemRect$$.x, 
  $textX$$ = $isRTL$$32$$ ? $availSpace$$94_itemRect$$.x + $availSpace$$94_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$94_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$;
  $i$$707_marker$$15$$ = D.$DvtLegendRenderer$$.$_createLegendSymbol$($legend$$21$$, $symbolX$$, $availSpace$$94_itemRect$$.y, $rowHeight$$6$$, $item$$35$$, $i$$707_marker$$15$$);
  var $label$$58$$ = $item$$35$$.text, $peer$$23_text$$95$$;
  if($label$$58$$ && ($peer$$23_text$$95$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$134_displayables$$22$$, $textSpace$$1$$, $label$$58$$, $hideAndShow$$4_options$$183$$.textStyle))) {
    $peer$$23_text$$95$$.$setX$($textX$$), $peer$$23_text$$95$$.$setY$($availSpace$$94_itemRect$$.y + $rowHeight$$6$$ / 2), $isRTL$$32$$ && $peer$$23_text$$95$$.$alignRight$()
  }
  $container$$134_displayables$$22$$.$addChild$($i$$707_marker$$15$$);
  $availSpace$$94_itemRect$$ = new D.$DvtRect$$($context$$445$$, $isRTL$$32$$ ? $textX$$ - $textSpace$$1$$ - D.$DvtLegendRenderer$$.$_FOCUS_GAP$ : $symbolX$$ - D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $availSpace$$94_itemRect$$.y - D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $symbolWidth$$2$$ + $symbolGap$$3$$ + $textSpace$$1$$ + 2 * D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $rowHeight$$6$$ + 2 * D.$DvtLegendRenderer$$.$_FOCUS_GAP$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$94_itemRect$$);
  $hideAndShow$$4_options$$183$$ = $hideAndShow$$4_options$$183$$.hideAndShowBehavior;
  "none" != $hideAndShow$$4_options$$183$$ && "off" != $hideAndShow$$4_options$$183$$ && $availSpace$$94_itemRect$$.setCursor("pointer");
  $container$$134_displayables$$22$$.$addChild$($availSpace$$94_itemRect$$);
  $container$$134_displayables$$22$$ = [$availSpace$$94_itemRect$$, $i$$707_marker$$15$$];
  $peer$$23_text$$95$$ != D.$JSCompiler_alias_NULL$$ && $container$$134_displayables$$22$$.push($peer$$23_text$$95$$);
  $peer$$23_text$$95$$ = (0,D.$DvtLegendObjPeer$associate$$)($container$$134_displayables$$22$$, $legend$$21$$, $item$$35$$, $peer$$23_text$$95$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$23_text$$95$$.$getUntruncatedTextString$() : D.$JSCompiler_alias_NULL$$, $item$$35$$.shortDesc, D.$DvtLegendRenderer$$.$_isItemDrillable$($legend$$21$$, $item$$35$$));
  D.$DvtLegendRenderer$$.$isCategoryHidden$(D.$DvtLegendRenderer$$.$getItemCategory$($item$$35$$), $legend$$21$$) && $i$$707_marker$$15$$.$setHollow$($peer$$23_text$$95$$.$getColor$());
  if("none" != $hideAndShow$$4_options$$183$$ && "off" != $hideAndShow$$4_options$$183$$ || $item$$35$$.shortDesc != D.$JSCompiler_alias_NULL$$) {
    $availSpace$$94_itemRect$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($peer$$23_text$$95$$)
  }
};
D.$DvtLegendRenderer$$.$_isItemDrillable$ = function $$DvtLegendRenderer$$$$_isItemDrillable$$($legend$$22$$, $item$$36$$) {
  return"on" == $item$$36$$.drilling ? D.$JSCompiler_alias_TRUE$$ : "off" == $item$$36$$.drilling ? D.$JSCompiler_alias_FALSE$$ : "on" == $legend$$22$$.$getOptions$().drilling
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($container$$135$$, $textSpace$$2$$, $label$$59_text$$96$$, $style$$91$$) {
  $label$$59_text$$96$$ = new D.$DvtOutputText$$($container$$135$$.$getCtx$(), $label$$59_text$$96$$);
  $label$$59_text$$96$$.$alignMiddle$();
  $label$$59_text$$96$$.$setCSSStyle$($style$$91$$);
  return $label$$59_text$$96$$ = D.$DvtTextUtils$$.$fitText$($label$$59_text$$96$$, $textSpace$$2$$, window.Infinity, $container$$135$$) ? $label$$59_text$$96$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($legend$$23$$, $symbol$$1_x$$229$$, $y$$204$$, $rowHeight$$7$$, $item$$37$$, $i$$708_symbolWidth$$3$$) {
  var $legendOptions$$6_symbolHeight$$1$$ = $legend$$23$$.$getOptions$();
  $item$$37$$.markerShape || ($item$$37$$.markerShape = $legendOptions$$6_symbolHeight$$1$$.markerShape);
  if(!$item$$37$$.color) {
    var $colorRamp_cy$$52$$ = $legendOptions$$6_symbolHeight$$1$$.colors;
    $item$$37$$.color = $colorRamp_cy$$52$$[$i$$708_symbolWidth$$3$$ % $colorRamp_cy$$52$$.length]
  }
  $item$$37$$.lineWidth || ($item$$37$$.lineWidth = $legendOptions$$6_symbolHeight$$1$$.lineWidth);
  $i$$708_symbolWidth$$3$$ = $legendOptions$$6_symbolHeight$$1$$.symbolWidth;
  var $legendOptions$$6_symbolHeight$$1$$ = $legendOptions$$6_symbolHeight$$1$$.symbolHeight, $colorRamp_cy$$52$$ = $y$$204$$ + $rowHeight$$7$$ / 2, $cx$$51$$ = $symbol$$1_x$$229$$ + $i$$708_symbolWidth$$3$$ / 2, $symbolType$$ = $item$$37$$.type != D.$JSCompiler_alias_NULL$$ ? $item$$37$$.type : $item$$37$$.symbolType;
  "line" == $symbolType$$ ? ($item$$37$$.lineWidth = window.Math.min($item$$37$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $symbol$$1_x$$229$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$23$$.$getCtx$(), $symbol$$1_x$$229$$, $y$$204$$, $i$$708_symbolWidth$$3$$, $rowHeight$$7$$, $item$$37$$)) : "lineWithMarker" == $symbolType$$ ? ($item$$37$$.lineWidth = window.Math.min($item$$37$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), $symbol$$1_x$$229$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$23$$.$getCtx$(), 
  $symbol$$1_x$$229$$, $y$$204$$, $i$$708_symbolWidth$$3$$, $rowHeight$$7$$, $item$$37$$), D.$DvtLegendRenderer$$.$isCategoryHidden$(D.$DvtLegendRenderer$$.$getItemCategory$($item$$37$$), $legend$$23$$) || $symbol$$1_x$$229$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$23$$, $cx$$51$$, $colorRamp_cy$$52$$, $i$$708_symbolWidth$$3$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $legendOptions$$6_symbolHeight$$1$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $item$$37$$))) : 
  $symbol$$1_x$$229$$ = "image" == $symbolType$$ ? D.$DvtLegendRenderer$$.$_createImage$($legend$$23$$, $symbol$$1_x$$229$$, $y$$204$$, $i$$708_symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $rowHeight$$7$$, $item$$37$$) : D.$DvtLegendRenderer$$.$_createMarker$($legend$$23$$, $cx$$51$$, $colorRamp_cy$$52$$, $i$$708_symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $item$$37$$);
  return $symbol$$1_x$$229$$
};
D.$DvtLegendRenderer$$.$_createImage$ = function $$DvtLegendRenderer$$$$_createImage$$($legend$$24$$, $x$$230$$, $y$$205$$, $symbolWidth$$4$$, $symbolHeight$$2$$, $rowHeight$$8$$, $item$$38$$) {
  return new D.$DvtImage$$($legend$$24$$.$getCtx$(), $item$$38$$.source, $x$$230$$, $y$$205$$ + ($rowHeight$$8$$ - $symbolHeight$$2$$) / 2, $symbolWidth$$4$$, $symbolHeight$$2$$)
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($legend$$25_shape$$72$$, $cx$$52$$, $cy$$53$$, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$, $item$$39$$) {
  var $context$$447$$ = $legend$$25_shape$$72$$.$getCtx$(), $legendOptions$$7$$ = $legend$$25_shape$$72$$.$getOptions$();
  $legend$$25_shape$$72$$ = $item$$39$$.markerShape;
  var $color$$67$$ = $item$$39$$.markerColor ? $item$$39$$.markerColor : $item$$39$$.color, $pattern$$12$$ = $item$$39$$.pattern;
  $pattern$$12$$ && "none" != $pattern$$12$$ ? ($legendMarker_symbolWidth$$5$$ = new D.$DvtSimpleMarker$$($context$$447$$, $legend$$25_shape$$72$$, $legendOptions$$7$$.skin, 0, 0, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$), $legendMarker_symbolWidth$$5$$.$setFill$(new D.$DvtPatternFill$$($pattern$$12$$, $color$$67$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($legendMarker_symbolWidth$$5$$, $cx$$52$$, $cy$$53$$)) : ($legendMarker_symbolWidth$$5$$ = new D.$DvtSimpleMarker$$($context$$447$$, 
  $legend$$25_shape$$72$$, $legendOptions$$7$$.skin, $cx$$52$$, $cy$$53$$, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$), $legendMarker_symbolWidth$$5$$.$setSolidFill$($color$$67$$));
  $item$$39$$.borderColor && $legendMarker_symbolWidth$$5$$.$setSolidStroke$($item$$39$$.borderColor, D.$JSCompiler_alias_NULL$$, $item$$39$$._borderWidth ? $item$$39$$._borderWidth : 1);
  "square" == $legend$$25_shape$$72$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($legendMarker_symbolWidth$$5$$);
  return $legendMarker_symbolWidth$$5$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$448_line$$11$$, $stroke$$95_x$$231$$, $lineY_y$$206$$, $colWidth$$3$$, $rowHeight$$9$$, $item$$40_style$$92$$) {
  $lineY_y$$206$$ += $rowHeight$$9$$ / 2;
  $context$$448_line$$11$$ = new D.$DvtLine$$($context$$448_line$$11$$, $stroke$$95_x$$231$$, $lineY_y$$206$$, $stroke$$95_x$$231$$ + $colWidth$$3$$, $lineY_y$$206$$);
  $stroke$$95_x$$231$$ = new D.$DvtSolidStroke$$($item$$40_style$$92$$.color, 1, $item$$40_style$$92$$.lineWidth);
  $item$$40_style$$92$$ = $item$$40_style$$92$$.lineStyle;
  "dashed" == $item$$40_style$$92$$ ? $stroke$$95_x$$231$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$40_style$$92$$), "4,2,4") : "dotted" == $item$$40_style$$92$$ && $stroke$$95_x$$231$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$40_style$$92$$), "2");
  $context$$448_line$$11$$.$setStroke$($stroke$$95_x$$231$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$448_line$$11$$);
  return $context$$448_line$$11$$
};
D.$DvtLegendRenderer$$.$getItemCategory$ = function $$DvtLegendRenderer$$$$getItemCategory$$($item$$41$$) {
  var $category$$19$$ = D.$JSCompiler_alias_NULL$$;
  return $category$$19$$ = $item$$41$$.categories && 0 < $item$$41$$.categories.length ? $item$$41$$.categories[0] : $item$$41$$.id ? $item$$41$$.id : $item$$41$$.text
};
D.$DvtLegendRenderer$$.$isCategoryHidden$ = function $$DvtLegendRenderer$$$$isCategoryHidden$$($category$$20$$, $legend$$26$$) {
  var $hiddenCategories$$9$$ = $legend$$26$$.$getOptions$().hiddenCategories;
  return!$hiddenCategories$$9$$ || 0 >= $hiddenCategories$$9$$.length ? D.$JSCompiler_alias_FALSE$$ : -1 !== $hiddenCategories$$9$$.indexOf($category$$20$$)
};
  return D;
});