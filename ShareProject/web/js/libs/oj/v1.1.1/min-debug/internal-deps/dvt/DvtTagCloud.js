/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTagCloud$$ = function $$DvtTagCloud$$$($context$$575$$, $callback$$154$$, $callbackObj$$104$$) {
  this.Init($context$$575$$, $callback$$154$$, $callbackObj$$104$$)
};
(0,D.$goog$exportPath_$$)("DvtTagCloud", D.$DvtTagCloud$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloud$$, D.$DvtBaseComponent$$, "DvtTagCloud");
D.$DvtTagCloud$$.newInstance = function $$DvtTagCloud$$$newInstance$($context$$576$$, $callback$$155$$, $callbackObj$$105$$) {
  return new D.$DvtTagCloud$$($context$$576$$, $callback$$155$$, $callbackObj$$105$$)
};
D.$DvtTagCloud$$.prototype.Init = function $$DvtTagCloud$$$$Init$($context$$577$$, $callback$$156$$, $callbackObj$$106$$) {
  D.$DvtTagCloud$$.$superclass$.Init.call(this, $context$$577$$, $callback$$156$$, $callbackObj$$106$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS(D.$JSCompiler_alias_NULL$$, "text-rendering", "geometricPrecision");
  this.$EventManager$ = new D.$DvtTagCloudEventManager$$(this, $context$$577$$, this.$__dispatchEvent$, this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, new D.$DvtTagCloudKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new D.$DvtTagCloudDefaults$$;
  this.$_items$ = [];
  this.$_peers$ = []
};
D.$DvtTagCloud$$.prototype.$render$ = function $$DvtTagCloud$$$$$render$$($ah$$4_options$$248$$, $animationDuration$$10_width$$155$$, $bounds$$150_height$$140$$) {
  !(0,window.isNaN)($animationDuration$$10_width$$155$$) && !(0,window.isNaN)($bounds$$150_height$$140$$) && (this.$Width$ = $animationDuration$$10_width$$155$$, this.$Height$ = $bounds$$150_height$$140$$);
  this.$__cleanUp$();
  this.$SetOptions$($ah$$4_options$$248$$);
  this.$_animation$ && this.$_animation$.stop();
  this.$_oldContainer$ = this.$_container$;
  this.$_oldItems$ = this.$_items$;
  this.$_items$ = [];
  this.$_itemCollection$ = [];
  this.$_container$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_container$);
  D.$DvtTagCloudRenderer$$.$render$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  $animationDuration$$10_width$$155$$ = this.$Options$.animationDuration;
  $bounds$$150_height$$140$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$_oldContainer$ ? "none" !== this.$Options$.animationOnDataChange && $ah$$4_options$$248$$ && (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$()), this.$addChild$(this.$_deleteContainer$), $ah$$4_options$$248$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$4_options$$248$$, this.$_oldItems$, this.$_items$), this.$_animation$ = $ah$$4_options$$248$$.$getAnimation$()) : "none" !== this.$Options$.animationOnDisplay && 
  (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$, this.$_container$, $bounds$$150_height$$140$$, $animationDuration$$10_width$$155$$));
  this.$_animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnRenderEnd$, this), this.$_animation$.play()) : this.$OnRenderEnd$();
  this.$UpdateAriaAttributes$()
};
D.$DvtTagCloud$$.prototype.render = D.$DvtTagCloud$$.prototype.$render$;
D.$DvtTagCloud$$.prototype.$getAutomation$ = function $$DvtTagCloud$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTagCloudAutomation$$(this));
  return this.$Automation$
};
D.$DvtTagCloud$$.prototype.getAutomation = D.$DvtTagCloud$$.prototype.$getAutomation$;
D.$DvtTagCloud$$.prototype.$registerObject$ = function $$DvtTagCloud$$$$$registerObject$$($peer$$27$$, $index$$228$$) {
  this.$_peers$.push($peer$$27$$);
  this.$_itemCollection$[$index$$228$$] = $peer$$27$$
};
D.$DvtTagCloud$$.prototype.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$DvtTagCloud$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_itemCollection$");
D.$DvtTagCloud$$.prototype.$highlight$ = function $$DvtTagCloud$$$$$highlight$$($categories$$25$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$25$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$25$$, this.$getObjects$(), "any" === this.$Options$.highlightMatch)
};
D.$DvtTagCloud$$.prototype.highlight = D.$DvtTagCloud$$.prototype.$highlight$;
D.$DvtTagCloud$$.prototype.select = function $$DvtTagCloud$$$$select$($selection$$37$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$37$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$())
};
D.$DvtTagCloud$$.prototype.select = D.$DvtTagCloud$$.prototype.select;
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloud$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$249_selectionMode$$12$$) {
  $options$$249_selectionMode$$12$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$249_selectionMode$$12$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$249_selectionMode$$12$$ = this.$Options$.selectionMode;
  this.$SelectionHandler$ = "single" === $options$$249_selectionMode$$12$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" === $options$$249_selectionMode$$12$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TAG_CLOUD")
};
D.$JSCompiler_prototypeAlias$$.$OnRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$OnRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$(), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ && (this.$_animation$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$addListeners$(this));
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$());
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtTagCloudAutomation$$ = (0,D.$JSCompiler_set$$)("$_tagCloud$");
(0,D.$goog$exportPath_$$)("DvtTagCloudAutomation", D.$DvtTagCloudAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudAutomation$$, D.$DvtAutomation$$, "DvtTagCloudAutomation");
D.$DvtTagCloudAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTagCloudAutomation$$$$$GetSubIdForDomElement$$($displayable$$79_logicalObj$$16$$) {
  return($displayable$$79_logicalObj$$16$$ = this.$_tagCloud$.$EventManager$.$GetLogicalObject$($displayable$$79_logicalObj$$16$$)) && $displayable$$79_logicalObj$$16$$ instanceof D.$DvtTagCloudObjPeer$$ ? "item[" + this.$_tagCloud$.$getItems$().indexOf($displayable$$79_logicalObj$$16$$) + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTagCloudAutomation$$$$$getDomElementForSubId$$($index$$230_peer$$28_subId$$23$$) {
  var $parenIdx$$ = $index$$230_peer$$28_subId$$23$$.indexOf("[");
  return 0 < $parenIdx$$ && "item" === $index$$230_peer$$28_subId$$23$$.substring(0, $parenIdx$$) && ($index$$230_peer$$28_subId$$23$$ = (0,window.parseInt)($index$$230_peer$$28_subId$$23$$.substring($parenIdx$$ + 1, $index$$230_peer$$28_subId$$23$$.length - 1)), $index$$230_peer$$28_subId$$23$$ = this.$_tagCloud$.$getItems$()[$index$$230_peer$$28_subId$$23$$]) ? $index$$230_peer$$28_subId$$23$$.$getDisplayables$()[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.getDomElementForSubId = D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTagCloudAutomation$$.prototype.getItem = function $$DvtTagCloudAutomation$$$$getItem$($index$$231_peer$$29$$) {
  if($index$$231_peer$$29$$ = this.$_tagCloud$.$getItems$()[$index$$231_peer$$29$$]) {
    var $data$$100$$ = {};
    $data$$100$$.color = $index$$231_peer$$29$$.$getDatatipColor$();
    $data$$100$$.tooltip = $index$$231_peer$$29$$.$getShortDesc$();
    $data$$100$$.label = $index$$231_peer$$29$$.$getLabel$();
    $data$$100$$.value = $index$$231_peer$$29$$.getValue();
    $data$$100$$.selected = $index$$231_peer$$29$$.$isSelected$();
    return $data$$100$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.getItem = D.$DvtTagCloudAutomation$$.prototype.getItem;
D.$DvtTagCloudAutomation$$.prototype.$getItemCount$ = function $$DvtTagCloudAutomation$$$$$getItemCount$$() {
  return this.$_tagCloud$.$getObjects$().length
};
D.$DvtTagCloudAutomation$$.prototype.getItemCount = D.$DvtTagCloudAutomation$$.prototype.$getItemCount$;
D.$DvtTagCloudItem$$ = function $$DvtTagCloudItem$$$($tagCloud$$, $context$$579$$, $textStr$$12$$, $x$$262$$, $y$$236$$, $style$$103$$, $id$$274$$) {
  this.Init($tagCloud$$, $context$$579$$, $textStr$$12$$, $x$$262$$, $y$$236$$, $style$$103$$, $id$$274$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudItem$$, D.$DvtBackgroundOutputText$$, "DvtTagCloudItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$1$$, $context$$580$$, $textStr$$13$$, $x$$263$$, $y$$237$$, $style$$104$$, $id$$275$$) {
  D.$DvtTagCloudItem$$.$superclass$.Init.call(this, $context$$580$$, $textStr$$13$$, $x$$263$$, $y$$237$$, $style$$104$$, $id$$275$$);
  this.$_tagCloud$ = $tagCloud$$1$$;
  $style$$104$$ && (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, $style$$104$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateBackground$ = function $$JSCompiler_prototypeAlias$$$$CreateBackground$$($context$$581$$, $text$$109$$) {
  this.$alignAuto$();
  return D.$DvtTagCloudItem$$.$superclass$.$CreateBackground$.call(this, $context$$581$$, $text$$109$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$7$$) {
  this.$_isSelected$ != $bSelected$$7$$ && ((this.$_isSelected$ = $bSelected$$7$$) ? this.$_isShowingHoverEffect$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$_isSelected$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_hoverStyle$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isSelected$ ? this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$);
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$52$$, $oldObj$$2$$) {
  var $anim$$38$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $endSize_endX$$1_endY$$1_style$$105$$ = this.$getCSSStyle$(), $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getCSSStyle$(), $bSizeChange_startY$$6_x$$inline_8146$$ = D.$JSCompiler_alias_FALSE$$, $dims$$inline_8148_startColor$$14_startX$$5$$ = $oldStyle_startAlign_startSize$$.$getStyle$("color"), $endAlign_endColor$$17$$ = $endSize_endX$$1_endY$$1_style$$105$$.$getStyle$("color");
  if($dims$$inline_8148_startColor$$14_startX$$5$$ != $endAlign_endColor$$17$$) {
    var $tag$$2$$ = this;
    this.$setCSSStyle$($endSize_endX$$1_endY$$1_style$$105$$.$setStyle$("color", $dims$$inline_8148_startColor$$14_startX$$5$$));
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeColor", this, function() {
      return $tag$$2$$.$getCSSStyle$().$getStyle$("color")
    }, function($handler$$52$$) {
      $tag$$2$$.$setCSSStyle$($tag$$2$$.$getCSSStyle$().$setStyle$("color", $handler$$52$$))
    }, $endAlign_endColor$$17$$)
  }
  $oldStyle_startAlign_startSize$$ = (0,window.parseFloat)($oldStyle_startAlign_startSize$$.$getStyle$("font-size"));
  $endSize_endX$$1_endY$$1_style$$105$$ = (0,window.parseFloat)($endSize_endX$$1_endY$$1_style$$105$$.$getStyle$("font-size"));
  $oldStyle_startAlign_startSize$$ != $endSize_endX$$1_endY$$1_style$$105$$ && ($bSizeChange_startY$$6_x$$inline_8146$$ = D.$JSCompiler_alias_TRUE$$, $tag$$2$$ = this, this.$setFontSize$($oldStyle_startAlign_startSize$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, function() {
    return(0,window.parseFloat)($tag$$2$$.$getCSSStyle$().$getStyle$("font-size"))
  }, this.$setFontSize$, $endSize_endX$$1_endY$$1_style$$105$$));
  $dims$$inline_8148_startColor$$14_startX$$5$$ = $oldObj$$2$$.$getX$();
  $endSize_endX$$1_endY$$1_style$$105$$ = this.$getX$();
  $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getHorizAlignment$();
  $endAlign_endColor$$17$$ = this.$getHorizAlignment$();
  if($endSize_endX$$1_endY$$1_style$$105$$ != $dims$$inline_8148_startColor$$14_startX$$5$$ || $bSizeChange_startY$$6_x$$inline_8146$$ && $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$) {
    $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$ && ($bSizeChange_startY$$6_x$$inline_8146$$ = $dims$$inline_8148_startColor$$14_startX$$5$$, $dims$$inline_8148_startColor$$14_startX$$5$$ = $oldObj$$2$$.$_outputText$.$getDimensions$(D.$JSCompiler_alias_VOID$$), $dims$$inline_8148_startColor$$14_startX$$5$$ = "left" == $oldStyle_startAlign_startSize$$ ? $bSizeChange_startY$$6_x$$inline_8146$$ + $dims$$inline_8148_startColor$$14_startX$$5$$.$w$ : "right" == $oldStyle_startAlign_startSize$$ ? 
    $bSizeChange_startY$$6_x$$inline_8146$$ - $dims$$inline_8148_startColor$$14_startX$$5$$.$w$ : $bSizeChange_startY$$6_x$$inline_8146$$), this.$setX$($dims$$inline_8148_startColor$$14_startX$$5$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getX$, this.$setX$, $endSize_endX$$1_endY$$1_style$$105$$)
  }
  $bSizeChange_startY$$6_x$$inline_8146$$ = $oldObj$$2$$.$getY$();
  $endSize_endX$$1_endY$$1_style$$105$$ = this.$getY$();
  $endSize_endX$$1_endY$$1_style$$105$$ != $bSizeChange_startY$$6_x$$inline_8146$$ && (this.$setY$($bSizeChange_startY$$6_x$$inline_8146$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getY$, this.$setY$, $endSize_endX$$1_endY$$1_style$$105$$));
  $oldObj$$2$$.$setAlpha$(0);
  $handler$$52$$.add($anim$$38$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$53$$) {
  $handler$$53$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$54$$) {
  this.$setAlpha$(0);
  $handler$$54$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 2)
};
D.$JSCompiler_prototypeAlias$$.$setFontSize$ = function $$JSCompiler_prototypeAlias$$$$setFontSize$$($size$$44$$) {
  D.$DvtTagCloudItem$$.$superclass$.$setFontSize$.call(this, $size$$44$$);
  (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, this.$getCSSStyle$())
};
D.$JSCompiler_StaticMethods__createFeedbackStyles$$ = function $$JSCompiler_StaticMethods__createFeedbackStyles$$$($JSCompiler_StaticMethods__createFeedbackStyles$self$$, $style$$106$$) {
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$ = $style$$106$$;
  var $color$$88_hoverSelectedColor$$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$getStyle$("color");
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$setStyle$("background-color", D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  var $hoverColor$$7$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$88_hoverSelectedColor$$, 0.3);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("background-color", $hoverColor$$7$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($hoverColor$$7$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("background-color", $color$$88_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$88_hoverSelectedColor$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $color$$88_hoverSelectedColor$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$88_hoverSelectedColor$$, 0.6);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("background-color", $color$$88_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$88_hoverSelectedColor$$))
};
D.$DvtTagCloudItem$_lightenColor$$ = function $$DvtTagCloudItem$_lightenColor$$$($color$$89$$, $opacity$$4$$) {
  var $r$$88$$ = D.$DvtColorUtils$$.$getRed$($color$$89$$), $g$$28$$ = D.$DvtColorUtils$$.$getGreen$($color$$89$$), $b$$62$$ = D.$DvtColorUtils$$.$getBlue$($color$$89$$);
  return D.$DvtColorUtils$$.$makeRGB$(window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $r$$88$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $g$$28$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $b$$62$$))
};
D.$DvtTagCloudObjPeer$$ = function $$DvtTagCloudObjPeer$$$($tagCloud$$2$$, $displayable$$80$$, $data$$101$$) {
  this.Init($tagCloud$$2$$, $displayable$$80$$, $data$$101$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudObjPeer$$, D.$DvtObj$$, "DvtTagCloudObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$3$$, $displayable$$81$$, $data$$102$$) {
  this.$_view$ = $tagCloud$$3$$;
  this.$_displayable$ = $displayable$$81$$;
  this.$_data$ = $data$$102$$;
  this.$_bSelectable$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  $data$$102$$.url ? ($displayable$$81$$.$setAriaRole$("link"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$102$$.url)) : $displayable$$81$$.$setAriaRole$("img");
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_data$.label
};
D.$JSCompiler_prototypeAlias$$.getValue = function $$JSCompiler_prototypeAlias$$$getValue$() {
  return this.$_data$.value
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$8$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$8$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$8$$, this.$getDataContext$()) : this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), color:this.$getDatatipColor$(), value:this.getValue()}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  this.$_dataColor$ || (this.$_dataColor$ = (new D.$DvtCSSStyle$$(this.$_data$.style)).$getStyle$("color"));
  return this.$_dataColor$
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$8$$) {
  this.$_isSelected$ = $bSelected$$8$$;
  this.$_displayable$.$setSelected$($bSelected$$8$$);
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_displayable$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_displayable$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$744$$) {
  var $keyboardHandler$$8$$ = this.$_view$.$EventManager$.$KeyboardHandler$;
  return $event$$744$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$8$$.$isMultiSelectEvent$($event$$744$$) ? this : $keyboardHandler$$8$$.$isNavigationEvent$($event$$744$$) ? (0,D.$DvtTagCloudKeyboardHandler$getNextNavigable$$)(this, $event$$744$$, this.$_view$.$getObjects$()) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$59$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$16$$ = [];
  this.$isSelectable$() && $states$$16$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtTagCloudDefaults$$ = function $$DvtTagCloudDefaults$$$() {
  this.Init({alta:D.$DvtTagCloudDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtTagCloudDefaults");
D.$DvtTagCloudDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, hiddenCategories:[], hideAndShowBehavior:"none", highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", layout:"rectangular", selectionMode:"none", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, style:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333;"}};
D.$DvtTagCloudRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudRenderer$$, D.$DvtObj$$, "DvtTagCloudRenderer");
D.$DvtTagCloudRenderer$$.$render$ = function $$DvtTagCloudRenderer$$$$render$$($tagCloud$$4$$, $container$$181$$, $availSpace$$118$$) {
  D.$DvtTagCloudRenderer$$.$_renderBackground$($tagCloud$$4$$, $container$$181$$, $availSpace$$118$$);
  var $items$$35_options$$251$$ = $tagCloud$$4$$.$getOptions$();
  $items$$35_options$$251$$.items && 0 < $items$$35_options$$251$$.items.length ? ($items$$35_options$$251$$ = D.$DvtTagCloudRenderer$$.$_renderItems$($tagCloud$$4$$, $container$$181$$, $availSpace$$118$$), 0 < $items$$35_options$$251$$.length ? ($tagCloud$$4$$.$_items$ = $items$$35_options$$251$$, (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($tagCloud$$4$$.$EventManager$, $tagCloud$$4$$.$getObjects$()[0])) : D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$181$$, $availSpace$$118$$)) : 
  D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$181$$, $availSpace$$118$$)
};
D.$DvtTagCloudRenderer$$.$_renderEmptyText$ = function $$DvtTagCloudRenderer$$$$_renderEmptyText$$($tagCloud$$5$$, $container$$182$$, $availSpace$$119$$) {
  var $options$$252$$ = $tagCloud$$5$$.$getOptions$(), $emptyTextStr$$2$$ = $options$$252$$.emptyText;
  $emptyTextStr$$2$$ || ($emptyTextStr$$2$$ = (0,D.$DvtBundle$getTranslation$$)($options$$252$$, "labelNoData", "DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$182$$, $emptyTextStr$$2$$, new D.$DvtRectangle$$($availSpace$$119$$.x, $availSpace$$119$$.y, $availSpace$$119$$.$w$, $availSpace$$119$$.$h$), $tagCloud$$5$$.$EventManager$, new D.$DvtCSSStyle$$($options$$252$$.styleDefaults.style))
};
D.$DvtTagCloudRenderer$$.$_renderBackground$ = function $$DvtTagCloudRenderer$$$$_renderBackground$$($rect$$51_tagCloud$$6$$, $container$$183$$, $availSpace$$120$$) {
  $rect$$51_tagCloud$$6$$ = new D.$DvtRect$$($rect$$51_tagCloud$$6$$.$getCtx$(), $availSpace$$120$$.x, $availSpace$$120$$.y, $availSpace$$120$$.$w$, $availSpace$$120$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$51_tagCloud$$6$$);
  $container$$183$$.$addChild$($rect$$51_tagCloud$$6$$)
};
D.$DvtTagCloudRenderer$$.$_renderItems$ = function $$DvtTagCloudRenderer$$$$_renderItems$$($tagCloud$$7$$, $container$$184$$, $availSpace$$121$$) {
  for(var $options$$253$$ = $tagCloud$$7$$.$getOptions$(), $items$$36$$ = [], $dataItems$$2$$ = $options$$253$$.items, $fontSizeFunction_minValue$$17$$ = window.Number.MAX_VALUE, $categoryMap$$1_maxValue$$18$$ = -window.Number.MAX_VALUE, $i$$784$$ = 0;$i$$784$$ < $dataItems$$2$$.length;$i$$784$$++) {
    $fontSizeFunction_minValue$$17$$ = window.Math.min($fontSizeFunction_minValue$$17$$, $dataItems$$2$$[$i$$784$$].value), $categoryMap$$1_maxValue$$18$$ = window.Math.max($categoryMap$$1_maxValue$$18$$, $dataItems$$2$$[$i$$784$$].value)
  }
  $fontSizeFunction_minValue$$17$$ = D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$($fontSizeFunction_minValue$$17$$, $categoryMap$$1_maxValue$$18$$);
  $categoryMap$$1_maxValue$$18$$ = D.$DvtArrayUtils$$.$createBooleanMap$($options$$253$$.hiddenCategories);
  for($i$$784$$ = 0;$i$$784$$ < $dataItems$$2$$.length;$i$$784$$++) {
    var $data$$103$$ = $dataItems$$2$$[$i$$784$$];
    $data$$103$$.categories || ($data$$103$$.categories = [$data$$103$$.label]);
    if(!$categoryMap$$1_maxValue$$18$$ || !D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$1_maxValue$$18$$, $data$$103$$.categories)) {
      var $item$$46_style$$107$$ = new D.$DvtCSSStyle$$($options$$253$$.styleDefaults.style);
      (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($item$$46_style$$107$$, $data$$103$$.style);
      $item$$46_style$$107$$.$setStyle$("font-size", $fontSizeFunction_minValue$$17$$.call(D.$JSCompiler_alias_NULL$$, $data$$103$$.value).toString());
      var $item$$46_style$$107$$ = new D.$DvtTagCloudItem$$($tagCloud$$7$$, $tagCloud$$7$$.$getCtx$(), $data$$103$$.label, 0, 0, $item$$46_style$$107$$, $data$$103$$.id), $peer$$30$$ = new D.$DvtTagCloudObjPeer$$($tagCloud$$7$$, $item$$46_style$$107$$, $data$$103$$);
      $tagCloud$$7$$.$EventManager$.$associate$($item$$46_style$$107$$, $peer$$30$$);
      $tagCloud$$7$$.$registerObject$($peer$$30$$, $i$$784$$);
      "none" !== $options$$253$$.selectionMode && $peer$$30$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
      ($peer$$30$$.$isSelectable$() || $data$$103$$.url || $peer$$30$$.$getAction$()) && $item$$46_style$$107$$.setCursor("pointer");
      $items$$36$$.push($item$$46_style$$107$$);
      $container$$184$$.$addChild$($item$$46_style$$107$$)
    }
  }
  0 < $items$$36$$.length && ("cloud" === $options$$253$$.layout ? D.$DvtTagCloudLayoutUtils$$.$cloudLayout$($availSpace$$121$$.$w$, $availSpace$$121$$.$h$, $items$$36$$) : D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$($availSpace$$121$$.$w$, $availSpace$$121$$.$h$, $items$$36$$, (0,D.$DvtAgent$isRightToLeft$$)($tagCloud$$7$$.$getCtx$())));
  return $items$$36$$
};
D.$DvtTagCloudLayoutUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudLayoutUtils$$, D.$DvtObj$$, "DvtTagCloudLayoutUtils");
D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$ = function $$DvtTagCloudLayoutUtils$$$$getFontSizeFunction$$($minValue$$16$$, $maxValue$$17$$) {
  return function($value$$183$$) {
    return 12 + window.Math.ceil(12 * (2 * ($value$$183$$ - $minValue$$16$$) / ($maxValue$$17$$ - $minValue$$16$$)))
  }
};
D.$DvtTagCloudLayoutUtils$$.$cloudLayout$ = function $$DvtTagCloudLayoutUtils$$$$cloudLayout$$($width$$156$$, $height$$141$$, $items$$33$$) {
  var $positions$$2_scale$$64$$ = [], $cx$$57_xrStep$$ = 10 / 180, $fontSize$$15_yrStep$$ = 10 / 180;
  $width$$156$$ > $height$$141$$ ? $cx$$57_xrStep$$ *= $width$$156$$ / $height$$141$$ : $fontSize$$15_yrStep$$ *= $height$$141$$ / $width$$156$$;
  for(var $thetaStep$$1$$ = 2 * window.Math.PI / 180, $bounds$$151_cy$$58$$ = D.$JSCompiler_alias_NULL$$, $maxFontSize$$ = 0, $cosCache$$ = [], $sinCache$$ = [], $i$$781$$ = 0;$i$$781$$ < $items$$33$$.length;$i$$781$$++) {
    for(var $placed$$ = D.$JSCompiler_alias_FALSE$$, $step$$5$$ = 0, $stepIncrement$$ = 4, $tag$$4$$ = $items$$33$$[$i$$781$$], $dims$$67$$ = $tag$$4$$.$getDimensions$(), $maxFontSize$$ = window.Math.max($maxFontSize$$, (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size"))), $lastCollisionIndex$$ = -1;!$placed$$;) {
      var $j$$105_lookup$$ = $step$$5$$ % 180;
      $cosCache$$[$j$$105_lookup$$] === D.$JSCompiler_alias_VOID$$ && ($cosCache$$[$j$$105_lookup$$] = window.Math.cos($step$$5$$ * $thetaStep$$1$$));
      $sinCache$$[$j$$105_lookup$$] === D.$JSCompiler_alias_VOID$$ && ($sinCache$$[$j$$105_lookup$$] = window.Math.sin($step$$5$$ * $thetaStep$$1$$));
      var $x$$265$$ = $cx$$57_xrStep$$ * $step$$5$$ * $cosCache$$[$j$$105_lookup$$], $y$$238$$ = $fontSize$$15_yrStep$$ * $step$$5$$ * $sinCache$$[$j$$105_lookup$$], $rect$$50$$ = new D.$DvtRectangle$$($x$$265$$, $y$$238$$, $dims$$67$$.$w$, $dims$$67$$.$h$), $placed$$ = D.$JSCompiler_alias_TRUE$$;
      -1 != $lastCollisionIndex$$ && $positions$$2_scale$$64$$[$lastCollisionIndex$$].$intersects$($rect$$50$$) && ($placed$$ = D.$JSCompiler_alias_FALSE$$);
      if($placed$$) {
        for($j$$105_lookup$$ = 0;$j$$105_lookup$$ < $i$$781$$;$j$$105_lookup$$++) {
          if($positions$$2_scale$$64$$[$j$$105_lookup$$].$intersects$($rect$$50$$)) {
            $lastCollisionIndex$$ = $j$$105_lookup$$;
            $placed$$ = D.$JSCompiler_alias_FALSE$$;
            break
          }
        }
      }
      $placed$$ && ($bounds$$151_cy$$58$$ = $bounds$$151_cy$$58$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$151_cy$$58$$, $rect$$50$$) : $rect$$50$$, $lastCollisionIndex$$ = -1, $positions$$2_scale$$64$$[$i$$781$$] = $rect$$50$$, $tag$$4$$.$setX$($x$$265$$), $tag$$4$$.$setY$(-$dims$$67$$.y + $y$$238$$));
      3600 === $step$$5$$ ? $stepIncrement$$ = 3 : 5400 === $step$$5$$ ? $stepIncrement$$ = 2 : 10800 === $step$$5$$ && ($stepIncrement$$ = 1);
      $step$$5$$ += $stepIncrement$$
    }
  }
  $positions$$2_scale$$64$$ = window.Math.max($bounds$$151_cy$$58$$.$w$ / $width$$156$$, $bounds$$151_cy$$58$$.$h$ / $height$$141$$);
  $cx$$57_xrStep$$ = $bounds$$151_cy$$58$$.x + $bounds$$151_cy$$58$$.$w$ / 2;
  $bounds$$151_cy$$58$$ = $bounds$$151_cy$$58$$.y + $bounds$$151_cy$$58$$.$h$ / 2;
  for($j$$105_lookup$$ = 0;$j$$105_lookup$$ < $items$$33$$.length;$j$$105_lookup$$++) {
    $tag$$4$$ = $items$$33$$[$j$$105_lookup$$], $tag$$4$$.$setX$($tag$$4$$.$getX$() / $positions$$2_scale$$64$$ + ($width$$156$$ / 2 - $cx$$57_xrStep$$ / $positions$$2_scale$$64$$)), $tag$$4$$.$setY$($tag$$4$$.$getY$() / $positions$$2_scale$$64$$ + ($height$$141$$ / 2 - $bounds$$151_cy$$58$$ / $positions$$2_scale$$64$$)), $fontSize$$15_yrStep$$ = (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size")), $tag$$4$$.$setFontSize$($fontSize$$15_yrStep$$ / $positions$$2_scale$$64$$)
  }
};
D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$ = function $$DvtTagCloudLayoutUtils$$$$rectangleLayout$$($width$$157$$, $height$$142_lineStart$$, $items$$34$$, $isBidi$$) {
  for(var $arDims$$1$$ = [], $maxWidth$$26_scale$$65$$ = 0, $maxHeight$$15$$ = 0, $arLines_maxFontSize$$1$$ = 0, $i$$782_minScale$$9$$ = 0;$i$$782_minScale$$9$$ < $items$$34$$.length;$i$$782_minScale$$9$$++) {
    var $lineWidth$$9_maxScale_tag$$5$$ = $items$$34$$[$i$$782_minScale$$9$$], $dims$$68_lineEnd$$ = $lineWidth$$9_maxScale_tag$$5$$.$getDimensions$(), $maxWidth$$26_scale$$65$$ = window.Math.max($maxWidth$$26_scale$$65$$, $dims$$68_lineEnd$$.$w$), $maxHeight$$15$$ = window.Math.max($maxHeight$$15$$, $dims$$68_lineEnd$$.$h$), $arLines_maxFontSize$$1$$ = window.Math.max($arLines_maxFontSize$$1$$, (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size")));
    $arDims$$1$$.push(new D.$DvtDimension$$($dims$$68_lineEnd$$.$w$, $dims$$68_lineEnd$$.$h$))
  }
  $i$$782_minScale$$9$$ = 0;
  for($lineWidth$$9_maxScale_tag$$5$$ = ($width$$157$$ - 10) / $maxWidth$$26_scale$$65$$;0.001 < $lineWidth$$9_maxScale_tag$$5$$ - $i$$782_minScale$$9$$;) {
    $maxWidth$$26_scale$$65$$ = ($i$$782_minScale$$9$$ + $lineWidth$$9_maxScale_tag$$5$$) / 2, $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($width$$157$$ - 10) / $maxWidth$$26_scale$$65$$), $arLines_maxFontSize$$1$$.length * ($maxWidth$$26_scale$$65$$ * $maxHeight$$15$$ + 2) - 2 > $height$$142_lineStart$$ - 10 ? $lineWidth$$9_maxScale_tag$$5$$ = $maxWidth$$26_scale$$65$$ : $i$$782_minScale$$9$$ = $maxWidth$$26_scale$$65$$
  }
  $maxWidth$$26_scale$$65$$ = $i$$782_minScale$$9$$;
  $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($width$$157$$ - 10) / $maxWidth$$26_scale$$65$$);
  $arLines_maxFontSize$$1$$.push($items$$34$$.length);
  for($i$$782_minScale$$9$$ = 0;$i$$782_minScale$$9$$ < $arLines_maxFontSize$$1$$.length - 1;$i$$782_minScale$$9$$++) {
    $height$$142_lineStart$$ = $arLines_maxFontSize$$1$$[$i$$782_minScale$$9$$];
    var $dims$$68_lineEnd$$ = $arLines_maxFontSize$$1$$[$i$$782_minScale$$9$$ + 1], $hPadding$$1$$ = 0, $bottomY$$2_maxLineHeight$$ = 0, $justified$$ = D.$JSCompiler_alias_TRUE$$;
    if(1 < $dims$$68_lineEnd$$ - $height$$142_lineStart$$) {
      for(var $lineWidth$$9_maxScale_tag$$5$$ = 0, $flowPadding_j$$106$$ = $height$$142_lineStart$$;$flowPadding_j$$106$$ < $dims$$68_lineEnd$$;$flowPadding_j$$106$$++) {
        $lineWidth$$9_maxScale_tag$$5$$ += $arDims$$1$$[$flowPadding_j$$106$$].$w$ * $maxWidth$$26_scale$$65$$, $bottomY$$2_maxLineHeight$$ = window.Math.max($bottomY$$2_maxLineHeight$$, $arDims$$1$$[$flowPadding_j$$106$$].$h$ * $maxWidth$$26_scale$$65$$)
      }
      $hPadding$$1$$ = ($width$$157$$ - 10 - $lineWidth$$9_maxScale_tag$$5$$) / ($dims$$68_lineEnd$$ - $height$$142_lineStart$$ - 1);
      $i$$782_minScale$$9$$ == $arLines_maxFontSize$$1$$.length - 2 && ($flowPadding_j$$106$$ = 0.5 * $bottomY$$2_maxLineHeight$$, $flowPadding_j$$106$$ < $hPadding$$1$$ && $lineWidth$$9_maxScale_tag$$5$$ + ($dims$$68_lineEnd$$ - $height$$142_lineStart$$) * $flowPadding_j$$106$$ < 0.9 * ($width$$157$$ - 10) && ($hPadding$$1$$ = $flowPadding_j$$106$$, $justified$$ = D.$JSCompiler_alias_FALSE$$))
    }
    for(var $bottomY$$2_maxLineHeight$$ = 5 + ($i$$782_minScale$$9$$ + 1) * ($maxHeight$$15$$ * $maxWidth$$26_scale$$65$$ + 2) - 2, $curX$$2$$ = $isBidi$$ ? $width$$157$$ - 5 : 5, $flowPadding_j$$106$$ = $height$$142_lineStart$$;$flowPadding_j$$106$$ < $dims$$68_lineEnd$$;$flowPadding_j$$106$$++) {
      var $lineWidth$$9_maxScale_tag$$5$$ = $items$$34$$[$flowPadding_j$$106$$], $fontSize$$16$$ = (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size"));
      $lineWidth$$9_maxScale_tag$$5$$.$setFontSize$($fontSize$$16$$ * $maxWidth$$26_scale$$65$$);
      $lineWidth$$9_maxScale_tag$$5$$.$setY$($bottomY$$2_maxLineHeight$$);
      $justified$$ && $flowPadding_j$$106$$ == $dims$$68_lineEnd$$ - 1 && $flowPadding_j$$106$$ != $height$$142_lineStart$$ ? $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$(5)) : ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($width$$157$$ - 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$setX$($curX$$2$$), $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), $curX$$2$$ -= $arDims$$1$$[$flowPadding_j$$106$$].$w$ * 
      $maxWidth$$26_scale$$65$$ + $hPadding$$1$$) : ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $curX$$2$$ += $arDims$$1$$[$flowPadding_j$$106$$].$w$ * $maxWidth$$26_scale$$65$$ + $hPadding$$1$$))
    }
  }
};
D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$ = function $$DvtTagCloudLayoutUtils$$$$_calculateLineBreaks$$($arDims$$2$$, $width$$158$$) {
  var $lines$$1$$ = [0], $curWidth$$ = $arDims$$2$$[0].$w$ + 2;
  if(1 < $arDims$$2$$.length) {
    for(var $i$$783$$ = 1;$i$$783$$ < $arDims$$2$$.length;$i$$783$$++) {
      $curWidth$$ + $arDims$$2$$[$i$$783$$].$w$ > $width$$158$$ && ($lines$$1$$.push($i$$783$$), $curWidth$$ = 0), $curWidth$$ += $arDims$$2$$[$i$$783$$].$w$ + 2
    }
  }
  return $lines$$1$$
};
D.$DvtTagCloudStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudStyleUtils$$, D.$DvtObj$$, "DvtTagCloudStyleUtils");
D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$ = function $$DvtTagCloudStyleUtils$$$$getAnimationDuration$$($tagCloud$$8$$) {
  return $tagCloud$$8$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtTagCloudEventManager$$ = function $$DvtTagCloudEventManager$$$($view$$63$$, $context$$578$$, $callback$$157$$, $callbackObj$$107$$) {
  this.Init($context$$578$$, $callback$$157$$, $callbackObj$$107$$);
  this.$_view$ = $view$$63$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudEventManager$$, D.$DvtEventManager$$, "DvtTagCloudEventManager");
D.$DvtTagCloudEventManager$$.prototype.$OnClickInternal$ = function $$DvtTagCloudEventManager$$$$$OnClickInternal$$($event$$736_obj$$339$$) {
  $event$$736_obj$$339$$ = this.$GetLogicalObject$($event$$736_obj$$339$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$736_obj$$339$$);
  this.$_processActionEvent$($event$$736_obj$$339$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchHoverEndInternal$$($event$$737_obj$$340$$) {
  $event$$737_obj$$340$$ = this.$GetLogicalObject$($event$$737_obj$$340$$.target);
  this.$_processActionEvent$($event$$737_obj$$340$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchClickInternal$$($event$$738_obj$$341$$) {
  $event$$738_obj$$341$$ = this.$GetLogicalObject$($event$$738_obj$$341$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$738_obj$$341$$);
  this.$_processActionEvent$($event$$738_obj$$341$$)
};
D.$JSCompiler_StaticMethods__handleLinkCallback$$ = function $$JSCompiler_StaticMethods__handleLinkCallback$$$($callback$$158_obj$$342$$) {
  $callback$$158_obj$$342$$ instanceof D.$DvtTagCloudObjPeer$$ && ($callback$$158_obj$$342$$ = $callback$$158_obj$$342$$.$getLinkCallback$()) && $callback$$158_obj$$342$$.call()
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessKeyboardEvent$$($event$$739$$) {
  var $eventConsumed$$6$$ = D.$JSCompiler_alias_TRUE$$, $focusObj$$1$$ = this.$getFocus$();
  13 == $event$$739$$.keyCode ? (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($focusObj$$1$$) : $eventConsumed$$6$$ = D.$DvtTagCloudEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$739$$);
  return $eventConsumed$$6$$
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessRolloverEvent$$($event$$740$$, $categories$$26_hoverBehaviorDelay$$5_obj$$343$$, $bOver$$12_rolloverEvent$$6$$) {
  var $options$$250$$ = this.$_view$.$getOptions$();
  "dim" == $options$$250$$.hoverBehavior && ($categories$$26_hoverBehaviorDelay$$5_obj$$343$$ = $categories$$26_hoverBehaviorDelay$$5_obj$$343$$.$getCategories$ ? $categories$$26_hoverBehaviorDelay$$5_obj$$343$$.$getCategories$() : [], $options$$250$$.highlightedCategories = $bOver$$12_rolloverEvent$$6$$ ? $categories$$26_hoverBehaviorDelay$$5_obj$$343$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$12_rolloverEvent$$6$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$12_rolloverEvent$$6$$ ? "categoryRollOver" : 
  "categoryRollOut", $options$$250$$.highlightedCategories), $categories$$26_hoverBehaviorDelay$$5_obj$$343$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$250$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$12_rolloverEvent$$6$$, this.$_view$.$getObjects$(), $categories$$26_hoverBehaviorDelay$$5_obj$$343$$, "any" == $options$$250$$.highlightMatch), $event$$740$$.stopPropagation())
};
D.$DvtTagCloudEventManager$$.prototype.$_processActionEvent$ = function $$DvtTagCloudEventManager$$$$$_processActionEvent$$($obj$$344$$) {
  $obj$$344$$ && ($obj$$344$$.$getAction$ && $obj$$344$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$344$$.$getAction$(), $obj$$344$$.getId()))
};
D.$DvtTagCloudKeyboardHandler$$ = function $$DvtTagCloudKeyboardHandler$$$($manager$$26$$) {
  this.Init($manager$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTagCloudKeyboardHandler");
D.$DvtTagCloudKeyboardHandler$$.prototype.Init = function $$DvtTagCloudKeyboardHandler$$$$Init$($manager$$27$$) {
  D.$DvtTagCloudKeyboardHandler$$.$superclass$.Init.call(this, $manager$$27$$)
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isSelectionEvent$$($event$$741$$) {
  return this.$isNavigationEvent$($event$$741$$) && !$event$$741$$.ctrlKey
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isMultiSelectEvent$$($event$$742$$) {
  return 32 == $event$$742$$.keyCode && $event$$742$$.ctrlKey
};
D.$DvtTagCloudKeyboardHandler$getNextNavigable$$ = function $$DvtTagCloudKeyboardHandler$getNextNavigable$$$($currentNavigable$$14_nextIdx$$1$$, $event$$743$$, $navigableItems$$4$$) {
  $currentNavigable$$14_nextIdx$$1$$ = $navigableItems$$4$$.indexOf($currentNavigable$$14_nextIdx$$1$$) + (39 == $event$$743$$.keyCode || 40 == $event$$743$$.keyCode ? 1 : -1);
  return $currentNavigable$$14_nextIdx$$1$$ < $navigableItems$$4$$.length && 0 <= $currentNavigable$$14_nextIdx$$1$$ ? $navigableItems$$4$$[$currentNavigable$$14_nextIdx$$1$$] : D.$JSCompiler_alias_NULL$$
};
  return D;
});