/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$582$$, $callback$$159$$, $callbackObj$$108$$) {
  this.Init($context$$582$$, $callback$$159$$, $callbackObj$$108$$)
};
(0,D.$goog$exportPath_$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$583$$, $callback$$160$$, $callbackObj$$109$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$583$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$583$$, $callback$$160$$, $callbackObj$$109$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$583$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$584$$, $callback$$161$$, $callbackObj$$110$$) {
  return new D.$DvtAmxThematicMap$$($context$$584$$, $callback$$161$$, $callbackObj$$110$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$254$$, $availSpace$$122_width$$159$$, $height$$143$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$254$$);
  this.$_width$ = $availSpace$$122_width$$159$$;
  this.$_height$ = $height$$143$$;
  $availSpace$$122_width$$159$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$122_width$$159$$, $height$$143$$);
  this.$_renderLegend$(this, $availSpace$$122_width$$159$$);
  this.$_tmap$.$render$($options$$254$$, $availSpace$$122_width$$159$$.$w$, $availSpace$$122_width$$159$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$185$$, $availSpace$$123$$) {
  this.$_legend$ && ($container$$185$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$123$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$123$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$27_options$$255$$ = this.$Options$, $position$$55_rendered$$4$$ = $gap$$27_options$$255$$.legend.rendered, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ = $gap$$27_options$$255$$.legend.scrolling, 
  $legendOptions$$9$$ = D.$DvtJSONUtils$$.$clone$($gap$$27_options$$255$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$9$$);
  if($position$$55_rendered$$4$$ && !($legendOptions$$9$$.$sections$ && 0 == $legendOptions$$9$$.$sections$.length)) {
    $position$$55_rendered$$4$$ = $gap$$27_options$$255$$.legend.position;
    delete $legendOptions$$9$$.position;
    $legendOptions$$9$$.layout.gapRatio = (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this);
    $legendOptions$$9$$.hideAndShowBehavior = "none";
    $legendOptions$$9$$.rolloverBehavior = "none";
    $legendOptions$$9$$.scrolling = $gap$$27_options$$255$$.legend.scrolling;
    var $legend$$30$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$getCtx$());
    $container$$185$$.$addChild$($legend$$30$$);
    "auto" == $position$$55_rendered$$4$$ && "asNeeded" !== $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ ? $position$$55_rendered$$4$$ = "bottom" : "auto" == $position$$55_rendered$$4$$ && "asNeeded" == $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ && ($position$$55_rendered$$4$$ = "end");
    $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$185$$.$getCtx$());
    "start" == $position$$55_rendered$$4$$ ? $position$$55_rendered$$4$$ = $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ ? "right" : "left" : "end" == $position$$55_rendered$$4$$ && ($position$$55_rendered$$4$$ = $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ ? "left" : "right");
    $legendOptions$$9$$.orientation = "left" == $position$$55_rendered$$4$$ || "right" == $position$$55_rendered$$4$$ ? "vertical" : "horizontal";
    $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ = "top" == $position$$55_rendered$$4$$ || "bottom" == $position$$55_rendered$$4$$;
    $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ = $legend$$30$$.$getPreferredSize$($legendOptions$$9$$, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ ? $availLegendSpace$$.$w$ : $gap$$27_options$$255$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$ ? $gap$$27_options$$255$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$w$ && 0 < $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$h$) {
      switch($legend$$30$$.$render$($legendOptions$$9$$, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$h$), this.$_legend$ = $legend$$30$$, $gap$$27_options$$255$$ = window.Math.ceil($gap$$27_options$$255$$.layout.legendGap * (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this)), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$55_rendered$$4$$, $legend$$30$$, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$h$, 
      $gap$$27_options$$255$$), $position$$55_rendered$$4$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$123$$.$h$ -= $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$123$$.$w$ -= $actualSize$$2_isHoriz$$16_isRTL$$34_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getGapRatio$$ = function $$JSCompiler_StaticMethods_getGapRatio$$$($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$) {
  if($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio)) {
    return $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio
  }
  var $wRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_width$ / 400, 1);
  $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_height$ / 300, 1);
  return window.Math.min($wRatio$$, $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$104$$, $legendOptions$$10$$) {
  $legendOptions$$10$$.title = $data$$104$$.legend ? $data$$104$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$10$$.sections = [];
  if($data$$104$$ && $data$$104$$.legend && $data$$104$$.legend.sections) {
    for(var $i$$785$$ = 0;$i$$785$$ < $data$$104$$.legend.sections.length;$i$$785$$++) {
      var $dataSection$$1$$ = $data$$104$$.legend.sections[$i$$785$$];
      $dataSection$$1$$ && $legendOptions$$10$$.sections.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items, sections:$dataSection$$1$$.sections})
    }
  }
  return $legendOptions$$10$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$592$$, $callback$$162$$, $callbackObj$$111$$) {
  this.Init($context$$592$$, $callback$$162$$, $callbackObj$$111$$)
};
(0,D.$goog$exportPath_$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$593$$, $callback$$163$$, $callbackObj$$112$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$593$$, $callback$$163$$, $callbackObj$$112$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$;
  this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$;
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_eventHandler$.$associate$(this, this);
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$594$$, $callback$$164$$, $callbackObj$$113$$) {
  return new D.$DvtThematicMap$$($context$$594$$, $callback$$164$$, $callbackObj$$113$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$256$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$256$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$DvtThematicMap$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$20$$) {
  for(var $i$$808$$ = 0;$i$$808$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$808$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$808$$].$LayerName$ == $layerName$$20$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$808$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$20$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$22_featuresOff$$1$$) {
  $attr$$22_featuresOff$$1$$ = (0,window.parseInt)($attr$$22_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if(1 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -257
  }
  this.$_displayedControls$ = $controls$$5$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$27$$) {
  this.$_drillMode$ = $attr$$27$$;
  this.$_eventHandler$.$setDrillMode$($attr$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$getCtx$()), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$, this.$_eventHandler$.$removeListeners$(this), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$, this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$associate$(this, 
  this))
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$getCtx$(), $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$750_x$$269$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) || ($event$$750_x$$269$$ = this.getWidth() - 5 - $event$$750_x$$269$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$750_x$$269$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendData$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = "true" == this.$_legendData$.disclosed, $isFixed$$2$$ = "fixed" == this.$_legendData$.display || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$2$$ || $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$) {
      var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$ = this.$_legendData$.maxWidth, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$.indexOf("%"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$ = 
      -1 != $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$ ? (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$.substring(0, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$)) / 100 * this.getWidth() : (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$), 
      $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$ = this.getHeight() - 10;
      "alta" == this.$_skinName$ ? (this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$), this.$_legendPanel$.$setMaxHeight$($collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$), 
      this.$_legendPanel$.$_isFixed$ = $isFixed$$2$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$getCtx$(), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$, 
      "col_northeast", (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$, $isFixed$$2$$), this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$ = 
      this.$_legendPanel$, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$ = this.$_legendData$.collapseTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$.$_expandTooltip$ = this.$_legendData$.expandTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$.$_collapseTooltip$ = $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$);
      $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$ = this.$_legendData$;
      this.$_legend$ = (0,D.$DvtLegend$newInstance$$)(this.$getCtx$(), this.$processLegendEvent$, this);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$ = this.$_legend$.$getPreferredSize$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
      this.$_legend$.$render$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$.$w$, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$.$h$);
      var $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, this.$_legend$.$getContentDimensions$().$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $downState$$20$$ = new D.$DvtImage$$(this.$getCtx$(), 
        (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$5$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$, $collapse$$inline_8278_maxHeight$$17_overState$$20_percentIndex$$1_preferredSize$$6$$, $downState$$20$$, $tip$$5$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$ = this.$_legendPanel$, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_contentContainer$.$addChild$($dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$), $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$), $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_contentContainer$.$getDimensions$(), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_width$ = 
        window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_maxWidth$, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$.$w$ + 10), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_height$ = window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_maxHeight$, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$.$h$ + 
        10), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_background$ ? ($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_height$)), $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$ && $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ && $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_width$)) : 
        ($dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_height$)), 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_styleMap$.borderAlpha, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_bgAlpha$), 
        $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_borderColor$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8276_alpha$$inline_11373_legendData$$6_maxWidth$$28_upState$$23$$), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_background$ = $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_background$, 0), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$getCtx$(), 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_styleMap$.borderAlpha), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$), $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_styleMap$, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_styleMap$, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseExpandButton$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ ? $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_width$ : -10), (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$) : ($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$OnButtonHoverOut$, 
        D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$_collapse$ && (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$ = 
        (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$w$ - $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $dims$$inline_8282_disclosed$$4_object$$inline_8281_rect$$inline_11372_west$$inline_11376_west$$inline_8283_x$$270$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$w$ += 
        5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_8280_legendPanelDim$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$getCtx$()), $bounds$$153_cpContainer$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($bounds$$153_cpContainer$$);
  this.$_render$($pzcContainer$$, $bounds$$153_cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    $bounds$$153_cpContainer$$ = new D.$DvtRectangle$$(0, 0, this.getWidth(), this.getHeight());
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $bounds$$153_cpContainer$$, this.$_animationDuration$))
    }else {
      var $anim$$43$$ = D.$JSCompiler_alias_NULL$$;
      this.$_bBaseMapChanged$ && !this.$_isResize$ ? $anim$$43$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$43$$ = this.$_topLayer$.$getAnimation$());
      D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$43$$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $anim$$43$$, this.$_oldPzc$, this.$_pzc$, $bounds$$153_cpContainer$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$)
    }
    this.$_animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()) : this.$OnAnimationEnd$();
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this]);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$809$$ = 0;$i$$809$$ < this.$_layers$.length;$i$$809$$++) {
    var $layer$$10$$ = this.$_layers$[$i$$809$$];
    if(!this.$_topLayerRendered$ && $layer$$10$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$10$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$10$$.$render$($isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$), !this.$_topLayerRendered$ && $layer$$10$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$10$$)
    }
  }
  this.$_topLayer$ && ($isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$ && (this.$_isolatedArea$ = $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$, this.$_initialZoom$ = this.$_initialCenterY$ = this.$_initialCenterX$ = D.$JSCompiler_alias_NULL$$), $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 
  0 == $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$.length && ($isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && ($isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$ = $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $isolatedArea$$1_navigable$$inline_8295_navigables$$11_pzcMatrix$$18$$), 
  this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : 
  this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_prototypeAlias$$.$updateLayer$ = function $$JSCompiler_prototypeAlias$$$$updateLayer$$($dataLayerOptions$$, $parentLayer$$2$$, $isAreaDataLayer$$) {
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(new D.$DvtThematicMapJsonParser$$(this), [$dataLayerOptions$$], (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, $parentLayer$$2$$), this.$_topLayer$.$LayerName$, $isAreaDataLayer$$);
  this.$_renderLegend$();
  this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this)
};
D.$DvtThematicMap$$.prototype.updateLayer = D.$DvtThematicMap$$.prototype.$updateLayer$;
D.$JSCompiler_StaticMethods__updateZoomLimits$$ = function $$JSCompiler_StaticMethods__updateZoomLimits$$$($JSCompiler_StaticMethods__updateZoomLimits$self$$) {
  var $fittedZoom_zoomPadding$$inline_8314$$;
  $fittedZoom_zoomPadding$$inline_8314$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$_zoomToFitPadding$;
  var $mapDim$$inline_8315$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_topLayer$.$getLayerDim$(), $pzcDim$$inline_8316$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$getSize$();
  $fittedZoom_zoomPadding$$inline_8314$$ = window.Math.min(($pzcDim$$inline_8316$$.$w$ - 2 * $fittedZoom_zoomPadding$$inline_8314$$) / $mapDim$$inline_8315$$.$w$, ($pzcDim$$inline_8316$$.$h$ - 2 * $fittedZoom_zoomPadding$$inline_8314$$) / $mapDim$$inline_8315$$.$h$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMinZoom$($fittedZoom_zoomPadding$$inline_8314$$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMaxZoom$($fittedZoom_zoomPadding$$inline_8314$$ * ($JSCompiler_StaticMethods__updateZoomLimits$self$$.$_zooming$ ? $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_maxZoomFactor$ : 1))
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$());
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$)
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$19$$) {
  var $mat$$50$$ = new D.$DvtMatrix$$;
  $mat$$50$$.translate($pzcMatrix$$19$$.$_tx$, $pzcMatrix$$19$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$50$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$50$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$751$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, "isLegendDisclosed", "show" == $event$$751$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$127_event$$752$$, $bRecenterObjs_transMat$$) {
  if($animator$$127_event$$752$$ = $animator$$127_event$$752$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$51$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$127_event$$752$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127_event$$752$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$51$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$51$$.$_tx$, $mat$$51$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127_event$$752$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127_event$$752$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$) {
  switch($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$_newZoom$;
        $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$ = this.$_pzc$.$getSize$();
        $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$ = new D.$DvtRectangle$$($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$.$w$ - 2 * $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$.$h$ - 2 * 
        $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$);
        var $legendAdjust$$inline_8352_mapDim$$inline_8347$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_8353_zoomedMapX$$inline_8348$$ = $legendAdjust$$inline_8352_mapDim$$inline_8347$$.x * $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$, $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$ = $legendAdjust$$inline_8352_mapDim$$inline_8347$$.y * $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$, $zoomedMapW$$inline_8350$$ = $legendAdjust$$inline_8352_mapDim$$inline_8347$$.$w$ * 
        $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$, $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$ = $legendAdjust$$inline_8352_mapDim$$inline_8347$$.$h$ * $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$, $legendAdjust$$inline_8352_mapDim$$inline_8347$$ = 0;
        $zoomedMapW$$inline_8350$$ > $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$w$ ? (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8352_mapDim$$inline_8347$$ = this.$_legendWidth$), this.$_pzc$.$_minPanX$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.x + $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$w$ + $legendAdjust$$inline_8352_mapDim$$inline_8347$$ - 
        ($minMaxX$$inline_8353_zoomedMapX$$inline_8348$$ + $zoomedMapW$$inline_8350$$), this.$_pzc$.$_maxPanX$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.x - $minMaxX$$inline_8353_zoomedMapX$$inline_8348$$ + $legendAdjust$$inline_8352_mapDim$$inline_8347$$) : (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8352_mapDim$$inline_8347$$ = 2 * this.$_legendWidth$), $minMaxX$$inline_8353_zoomedMapX$$inline_8348$$ = 
        ($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.x + $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$w$ + $legendAdjust$$inline_8352_mapDim$$inline_8347$$) / 2 - ($minMaxX$$inline_8353_zoomedMapX$$inline_8348$$ + $zoomedMapW$$inline_8350$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_8353_zoomedMapX$$inline_8348$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_8353_zoomedMapX$$inline_8348$$);
        $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$ > $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.y + $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$h$ - ($pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$ + $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$), this.$_pzc$.$_maxPanY$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.y - 
        $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$) : ($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$ = ($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.y + $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$h$) / 2 - ($pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$ + $i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$ / 2), this.$_pzc$.$_minPanY$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, 
        this.$_pzc$.$_maxPanY$ = $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, "panX", $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, "panY", $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$.$_ty$);
        $event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        this.$__dispatchEvent$($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$);
        for($i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$ = 0;$i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$ < this.$_layers$.length;$i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$++) {
          this.$_layers$[$i$$810_zoom$$inline_8343_zoomedMapH$$inline_8351$$].$HandleZoomEvent$($event$$753_minMaxY$$inline_8354_padding$$inline_8344_viewportDim$$inline_8346$$, $pzcDim$$inline_8345_pzcMatrix$$20_zoomedMapY$$inline_8349$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitEnd":
      this.$__dispatchEvent$(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$754_i$$811_stroke$$111$$) {
  var $subType$$9$$ = $event$$754_i$$811_stroke$$111$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$9$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$754_i$$811_stroke$$111$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$9$$ && $event$$754_i$$811_stroke$$111$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$21_styleMap$$91$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$754_i$$811_stroke$$111$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$754_i$$811_stroke$$111$$, "panX", $pzcMatrix$$21_styleMap$$91$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$754_i$$811_stroke$$111$$, "panY", $pzcMatrix$$21_styleMap$$91$$.$_ty$);
      $event$$754_i$$811_stroke$$111$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      this.$__dispatchEvent$($event$$754_i$$811_stroke$$111$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$21_styleMap$$91$$);
      for($event$$754_i$$811_stroke$$111$$ = 0;$event$$754_i$$811_stroke$$111$$ < this.$_layers$.length;$event$$754_i$$811_stroke$$111$$++) {
        this.$_layers$[$event$$754_i$$811_stroke$$111$$].$HandlePanEvent$($pzcMatrix$$21_styleMap$$91$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$9$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$9$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$21_styleMap$$91$$ = this.$getSubcomponentStyles$(), $event$$754_i$$811_stroke$$111$$ = this.$_legendPanel$.$_background$.$getStroke$().$clone$(), "dragPanBegin" === $subType$$9$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$21_styleMap$$91$$.backgroundDragAlpha), 
  $event$$754_i$$811_stroke$$111$$.$setAlpha$($pzcMatrix$$21_styleMap$$91$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$754_i$$811_stroke$$111$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$91$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$9$$ && (this.$_legend$.$setAlpha$(1), $event$$754_i$$811_stroke$$111$$.$setAlpha$($pzcMatrix$$21_styleMap$$91$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$754_i$$811_stroke$$111$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$91$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$getCtx$(), this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$812$$ = 0;$i$$812$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$812$$++) {
    var $layerName$$22$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$812$$].$LayerName$;
    $layerName$$22$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$22$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$22$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$22$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$22$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_8357_removeObjs$$ = [], $addObjs$$ = [], $i$$813_j$$113$$ = this.$_layers$.length - 1;-1 < $i$$813_j$$113$$;$i$$813_j$$113$$--) {
    this.$_layers$[$i$$813_j$$113$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$813_j$$113$$].reset($addObjs$$) : this.$_layers$[$i$$813_j$$113$$].reset($animator$$inline_8357_removeObjs$$)
  }
  for($i$$813_j$$113$$ = 0;$i$$813_j$$113$$ < $animator$$inline_8357_removeObjs$$.length;$i$$813_j$$113$$++) {
    if($animator$$inline_8357_removeObjs$$[$i$$813_j$$113$$]) {
      var $parent$$85$$ = $animator$$inline_8357_removeObjs$$[$i$$813_j$$113$$].getParent();
      $parent$$85$$ && $parent$$85$$.removeChild($animator$$inline_8357_removeObjs$$[$i$$813_j$$113$$])
    }
  }
  for($i$$813_j$$113$$ = 0;$i$$813_j$$113$$ < $addObjs$$.length;$i$$813_j$$113$$++) {
    $addObjs$$[$i$$813_j$$113$$] && $addObjs$$[$i$$813_j$$113$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_8357_removeObjs$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_8357_removeObjs$$);
  $animator$$inline_8357_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$154$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$52$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$52$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$52$$.$_d$;
    $pointBounds$$.x /= $mat$$52$$.$_a$;
    $pointBounds$$.y /= $mat$$52$$.$_d$
  }
  $areaBounds_bounds$$154$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$154$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  var $maxZoom$$4$$;
  $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_bZoomingEnabled$ || ($maxZoom$$4$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$getMaxZoom$(), $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$ * $JSCompiler_StaticMethods__zoomData$self$$.$_maxZoomFactor$));
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$getCtx$(), 0.3));
  0 < $areaBounds_bounds$$154$$.$w$ && 0 < $areaBounds_bounds$$154$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$154$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play();
  $maxZoom$$4$$ && $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$)
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$155$$) {
  var $animator$$128$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$128$$, $bounds$$155$$);
  $animator$$128$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$13_selection$$40_selectionHandler$$12$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$13_selection$$40_selectionHandler$$12$$ && ($dataLayer$$13_selection$$40_selectionHandler$$12$$ = $dataLayer$$13_selection$$40_selectionHandler$$12$$.$_selectionHandler$)) {
      for(var $dataLayer$$13_selection$$40_selectionHandler$$12$$ = $dataLayer$$13_selection$$40_selectionHandler$$12$$.getSelection(), $i$$814$$ = 0;$i$$814$$ < $dataLayer$$13_selection$$40_selectionHandler$$12$$.length;$i$$814$$++) {
        $dataLayer$$13_selection$$40_selectionHandler$$12$$[$i$$814$$] = $dataLayer$$13_selection$$40_selectionHandler$$12$$[$i$$814$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$13_selection$$40_selectionHandler$$12$$.length) {
        for(var $bounds$$156$$ = $dataLayer$$13_selection$$40_selectionHandler$$12$$[0].$getDimensions$(), $i$$814$$ = 1;$i$$814$$ < $dataLayer$$13_selection$$40_selectionHandler$$12$$.length;$i$$814$$++) {
          $bounds$$156$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$156$$, $dataLayer$$13_selection$$40_selectionHandler$$12$$[$i$$814$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$156$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$23$$) {
  var $parentLayerName$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$23$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$24$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$24$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$5$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$815$$ = 0;$i$$815$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$815$$++) {
      var $dataLayers$$3$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$815$$].$DataLayers$, $id$$285$$;
      for($id$$285$$ in $dataLayers$$3$$) {
        $disclosed$$5$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$815$$].$LayerName$ ? $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$3$$[$id$$285$$])) : $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$3$$[$id$$285$$]))
      }
    }
  }
  return $disclosed$$5$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$18$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$816$$ = 0;$i$$816$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$816$$++) {
      var $dataLayers$$4$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$816$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$816$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$816$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$286$$ in $dataLayers$$4$$) {
          $navigable$$18$$ = $navigable$$18$$.concat($dataLayers$$4$$[$id$$286$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$18$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$22$$) {
  this.$_currentAnimMatrix$ = $matrix$$22$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$63$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$817_j$$114$$ = 0;$i$$817_j$$114$$ < $numLabelLayers_objs$$63$$.length;$i$$817_j$$114$$++) {
      $numLabelLayers_objs$$63$$[$i$$817_j$$114$$].$HandleZoomEvent$($matrix$$22$$)
    }
    $numLabelLayers_objs$$63$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$817_j$$114$$ = 0;$i$$817_j$$114$$ < $numLabelLayers_objs$$63$$;$i$$817_j$$114$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$817_j$$114$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$10$$ = 0;$k$$10$$ < $numLabels$$1$$;$k$$10$$++) {
        var $label$$95$$ = $labelLayer$$.$getChildAt$($k$$10$$);
        $label$$95$$ instanceof D.$DvtMapLabel$$ && $label$$95$$.update($matrix$$22$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$3$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$3$$.reset($fadeInObjs$$5$$, $selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$818$$ = 0;$i$$818$$ < $selectedAreas$$1$$.length;$i$$818$$++) {
      var $parentArea$$ = $selectedAreas$$1$$[$i$$818$$], $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$3$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_8360_j$$115$$ = 0;$areaName$$inline_8360_j$$115$$ < $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.length;$areaName$$inline_8360_j$$115$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$[$areaName$$inline_8360_j$$115$$]] = $selectedAreas$$1$$[$i$$818$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_8360_j$$115$$ = $parentArea$$, $fadeOutObjs$$inline_8361$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$ = 0;$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$ < $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$].$getLocation$() == $areaName$$inline_8360_j$$115$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_8360_j$$115$$);
            $fadeOutObjs$$inline_8361$$.push($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$].$getDisplayable$());
            if($i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$ = $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$].$getLabel$()) {
              $fadeOutObjs$$inline_8361$$.push($i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$), ($i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$ = $i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$.$_leaderLine$) && $fadeOutObjs$$inline_8361$$.push($i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$)
            }
            break
          }
        }
        for($i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$ = 0;$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$ < $JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$].$getLocation$() == $areaName$$inline_8360_j$$115$$) {
            $fadeOutObjs$$inline_8361$$.push($JSCompiler_StaticMethods_drill$self$$inline_8359_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8362_label$$inline_8363_leaderLine$$inline_8364$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$819$$ = 0;$i$$819$$ < $selectedAreas$$2$$.length;$i$$819$$++) {
    var $index$$235_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$819$$]];
    $newSelectedAreas$$1$$.push($index$$235_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$235_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $index$$235_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_8366$$ = $parentLayer$$4$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$4$$.$LayerName$]), $areaName$$inline_8367$$ = $index$$235_parentArea$$1$$, $fadeInObjs$$inline_8368$$ = $fadeInObjs$$6$$, $i$$inline_8369_label$$inline_8372$$ = 0;$i$$inline_8369_label$$inline_8372$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_areaObjs$.length;$i$$inline_8369_label$$inline_8372$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_areaObjs$[$i$$inline_8369_label$$inline_8372$$].$getLocation$() == $areaName$$inline_8367$$) {
          var $displayable$$inline_8371_idx$$inline_8370$$ = D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_drilled$, $areaName$$inline_8367$$);
          $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_drilled$.splice($displayable$$inline_8371_idx$$inline_8370$$, 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_areaObjs$[$i$$inline_8369_label$$inline_8372$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          $displayable$$inline_8371_idx$$inline_8370$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_areaObjs$[$i$$inline_8369_label$$inline_8372$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_dataAreaLayer$.$addChild$($displayable$$inline_8371_idx$$inline_8370$$);
          $fadeInObjs$$inline_8368$$.push($displayable$$inline_8371_idx$$inline_8370$$);
          if($i$$inline_8369_label$$inline_8372$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_areaObjs$[$i$$inline_8369_label$$inline_8372$$].$getLabel$()) {
            $i$$inline_8369_label$$inline_8372$$.update($JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_pzcMatrix$), $fadeInObjs$$inline_8368$$.push($i$$inline_8369_label$$inline_8372$$), $fadeInObjs$$inline_8368$$.push($i$$inline_8369_label$$inline_8372$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_8369_label$$inline_8372$$ = 0;$i$$inline_8369_label$$inline_8372$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_dataObjs$.length;$i$$inline_8369_label$$inline_8372$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_dataObjs$[$i$$inline_8369_label$$inline_8372$$].$getLocation$() == $areaName$$inline_8367$$) {
          $displayable$$inline_8371_idx$$inline_8370$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_dataObjs$[$i$$inline_8369_label$$inline_8372$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8366$$.$_dataPointLayer$.$addChild$($displayable$$inline_8371_idx$$inline_8370$$);
          $fadeInObjs$$inline_8368$$.push($displayable$$inline_8371_idx$$inline_8370$$);
          break
        }
      }
      $index$$235_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$235_parentArea$$1$$);
      -1 != $index$$235_parentArea$$1$$ && this.$_drilled$.splice($index$$235_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$4$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$3$$, $newObjs$$3$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if("zoomToFit" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$130$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$130$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$130$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$130$$ && $animator$$130$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  if((0,D.$DvtAgent$isEnvironmentBrowser$$)() && ("alphaFade" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ || "auto" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$)) {
    $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), "alphaFade", $oldObjs$$3$$, $newObjs$$3$$, D.$JSCompiler_alias_NULL$$, 0.5)
  }
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$755$$) {
  var $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ = $event$$755$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$755$$.getSelection();
      for(var $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$9312$$ = this.$_clickedLayerName$, $selectedObjs$$inline_11403$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_11404$$ = [], $areaObjs$$inline_11405$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_11406$$ = 0;$i$$inline_11406$$ < $selectedObjs$$inline_11403$$.length;$i$$inline_11406$$++) {
        for(var $j$$inline_11407$$ = 0;$j$$inline_11407$$ < $areaObjs$$inline_11405$$.length;$j$$inline_11407$$++) {
          if($areaObjs$$inline_11405$$[$j$$inline_11407$$].getId() == $selectedObjs$$inline_11403$$[$i$$inline_11406$$]) {
            $selectedAreas$$inline_11404$$.push($areaObjs$$inline_11405$$[$j$$inline_11407$$].$getLocation$());
            break
          }
        }
      }
      $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$[$JSCompiler_temp_const$$9312$$] = $selectedAreas$$inline_11404$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$755$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$755$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ = $event$$755$$.$_drillType$, $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$755$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$ || "hidePopup" == $JSCompiler_temp_const$$9313_drillType$$inline_8379_type$$248$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$755$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.$__dispatchEvent$.call(this, $event$$755$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$26$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$26$$), $parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$26$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$5$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)(this);
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
  this.$_bListenersRemoved$ && (this.$_eventHandler$.$addListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$820$$ = 0;$i$$820$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$820$$++) {
      var $obj$$351$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$820$$];
      if($obj$$351$$) {
        if($obj$$351$$ instanceof D.$DvtMapLabel$$) {
          $obj$$351$$.reset()
        }else {
          if($obj$$351$$.$isDrilled$ && $obj$$351$$.$isDrilled$()) {
            $obj$$351$$.$setAlpha$(0)
          }else {
            var $parent$$86$$ = $obj$$351$$.getParent();
            $parent$$86$$ && $parent$$86$$.removeChild($obj$$351$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$249$$, $category$$22$$) {
  var $rolloverEvent$$7$$ = new D.$DvtCategoryRolloverEvent$$($type$$249$$, $category$$22$$), $objects$$5$$ = [], $layerId_legendItems$$;
  for($layerId_legendItems$$ in this.$_areas$) {
    for(var $key$$123_wrapper$$ in this.$_areas$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$][$key$$123_wrapper$$])
    }
  }
  for($layerId_legendItems$$ in this.$_markers$) {
    for($key$$123_wrapper$$ in this.$_markers$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$][$key$$123_wrapper$$])
    }
  }
  $layerId_legendItems$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$ in $layerId_legendItems$$) {
    $key$$123_wrapper$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$[$legendCategory$$].$getContentShape$(), $legendCategory$$), $objects$$5$$.push($key$$123_wrapper$$)
  }
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($rolloverEvent$$7$$.$_category$, $objects$$5$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtThematicMap$$.prototype.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMap$$.prototype.$GetComponentDescription$ = function $$DvtThematicMap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "THEMATIC_MAP")
};
D.$DvtThematicMap$$.prototype.$processLegendEvent$ = function $$DvtThematicMap$$$$$processLegendEvent$$($event$$758$$) {
  "dvtResizeEvent" == $event$$758$$.$getType$() && this.$_legend$ && this.$_legend$.$FireListener$($event$$758$$)
};
D.$DvtThematicMap$$.prototype.$highlight$ = function $$DvtThematicMap$$$$$highlight$$($categories$$27$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$27$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$27$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), "any" == this.$Options$.highlightMatch)
};
D.$DvtThematicMap$$.prototype.highlight = D.$DvtThematicMap$$.prototype.$highlight$;
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:0.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, 
layout:{gapRatio:D.$JSCompiler_alias_NULL$$, legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selectionMode:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$832$$ = 0;$i$$832$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$832$$++) {
    var $dataLayers$$9$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$832$$].$DataLayers$, $id$$290$$;
    for($id$$290$$ in $dataLayers$$9$$) {
      var $dragSource$$3$$ = $dataLayers$$9$$[$id$$290$$].$_dragSource$;
      if($dragSource$$3$$ && $dragSource$$3$$.$_dragCandidate$) {
        return $dragSource$$3$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$isDragAvailable$ = function $$DvtThematicMap$$$$$isDragAvailable$$($dragSource$$4_mouseX$$43$$, $mouseY$$43$$, $clientIds$$18$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$4_mouseX$$43$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$4_mouseX$$43$$.$isDragAvailable$($clientIds$$18$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$getDragTransferable$ = function $$DvtThematicMap$$$$$getDragTransferable$$($mouseX$$44$$, $mouseY$$44$$) {
  var $dragSource$$5$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$5$$ ? $dragSource$$5$$.$getDragTransferable$($mouseX$$44$$, $mouseY$$44$$) : D.$JSCompiler_alias_NULL$$
};

D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$, $basemap$$3$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportPath_$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$93_logicalObj$$17$$) {
  $displayable$$93_logicalObj$$17$$ = this.$_tmap$.$__getEventManager$().$GetLogicalObject$($displayable$$93_logicalObj$$17$$);
  var $JSCompiler_temp$$456_id$$inline_8399$$;
  if($displayable$$93_logicalObj$$17$$ && ($displayable$$93_logicalObj$$17$$ instanceof D.$DvtMapAreaPeer$$ || $displayable$$93_logicalObj$$17$$ instanceof D.$DvtMapObjPeer$$)) {
    a: {
      for(var $displayable$$inline_8395$$ = $displayable$$93_logicalObj$$17$$.$getDisplayable$(), $layers$$inline_8396$$ = this.$_tmap$.$_layers$, $i$$inline_8397$$ = 0;$i$$inline_8397$$ < $layers$$inline_8396$$.length;$i$$inline_8397$$++) {
        var $dataLayers$$inline_8398$$ = $layers$$inline_8396$$[$i$$inline_8397$$].$DataLayers$;
        for($JSCompiler_temp$$456_id$$inline_8399$$ in $dataLayers$$inline_8398$$) {
          if($displayable$$inline_8395$$ instanceof D.$DvtPath$$) {
            for(var $areas$$inline_8400_markers$$inline_8402$$ = $dataLayers$$inline_8398$$[$JSCompiler_temp$$456_id$$inline_8399$$].$_areaObjs$, $k$$inline_8401$$ = 0;$k$$inline_8401$$ < $areas$$inline_8400_markers$$inline_8402$$.length;$k$$inline_8401$$++) {
              if($areas$$inline_8400_markers$$inline_8402$$[$k$$inline_8401$$] === $displayable$$93_logicalObj$$17$$) {
                $JSCompiler_temp$$456_id$$inline_8399$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$456_id$$inline_8399$$) + ":area[" + $k$$inline_8401$$ + "]";
                break a
              }
            }
          }else {
            if($displayable$$inline_8395$$ instanceof D.$DvtSimpleMarker$$ || $displayable$$inline_8395$$ instanceof D.$DvtImageMarker$$) {
              $areas$$inline_8400_markers$$inline_8402$$ = $dataLayers$$inline_8398$$[$JSCompiler_temp$$456_id$$inline_8399$$].$_dataObjs$;
              for($k$$inline_8401$$ = 0;$k$$inline_8401$$ < $areas$$inline_8400_markers$$inline_8402$$.length;$k$$inline_8401$$++) {
                if($areas$$inline_8400_markers$$inline_8402$$[$k$$inline_8401$$] === $displayable$$93_logicalObj$$17$$) {
                  $JSCompiler_temp$$456_id$$inline_8399$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$456_id$$inline_8399$$) + ":marker[" + $k$$inline_8401$$ + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$456_id$$inline_8399$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$456_id$$inline_8399$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$456_id$$inline_8399$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$) {
  var $colonIdx$$1$$ = $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.indexOf(":"), $parenIdx$$1$$ = $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.indexOf("[");
  $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$ = 0 < $colonIdx$$1$$ && 0 < $parenIdx$$1$$ ? ($JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.substring(0, $colonIdx$$1$$), $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.substring($colonIdx$$1$$ + 1, $parenIdx$$1$$), (0,window.parseInt)($JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.substring($parenIdx$$1$$ + 
  1, $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.length - 1)))) ? $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$180_dataObj$$inline_8408_subId$$24$$
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$1_dataObj$$2$$, $data$$110_dataObjType$$1$$, $index$$237_label$$96$$) {
  return($dataLayerId$$1_dataObj$$2$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$1_dataObj$$2$$, $data$$110_dataObjType$$1$$, $index$$237_label$$96$$)) ? ($data$$110_dataObjType$$1$$ = {}, $data$$110_dataObjType$$1$$.color = $dataLayerId$$1_dataObj$$2$$.$getDatatipColor$(), $data$$110_dataObjType$$1$$.tooltip = $dataLayerId$$1_dataObj$$2$$.$getShortDesc$(), $index$$237_label$$96$$ = $dataLayerId$$1_dataObj$$2$$.$getLabel$(), $data$$110_dataObjType$$1$$.label = $index$$237_label$$96$$ ? 
  $index$$237_label$$96$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$110_dataObjType$$1$$.selected = $dataLayerId$$1_dataObj$$2$$.$isSelected$(), $data$$110_dataObjType$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$3$$, $dataObjType$$3$$, $index$$239$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$823$$ = 0;$i$$823$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$823$$++) {
    var $dataLayers$$7$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$823$$].$DataLayers$, $id$$289$$;
    for($id$$289$$ in $dataLayers$$7$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$289$$) == $dataLayerId$$3$$) {
        if("area" == $dataObjType$$3$$) {
          return $dataLayers$$7$$[$id$$289$$].$_dataAreaCollection$[$index$$239$$]
        }
        if("marker" == $dataObjType$$3$$) {
          return $dataLayers$$7$$[$id$$289$$].$_dataMarkerCollection$[$index$$239$$]
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$4$$) {
  var $colonIdx$$2$$ = $dataLayerId$$4$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$4$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$4$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$585$$, $bSupportsVectorEffects$$) {
  this.Init($context$$585$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$586$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$586$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled_parent$$82$$) {
  this.$_isDrilled$ != $drilled_parent$$82$$ && (this.$_isDrilled$ = $drilled_parent$$82$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $drilled_parent$$82$$ = 
  this.getParent(), $drilled_parent$$82$$.$addChild$(this.$_disclosedOuterShape$), $drilled_parent$$82$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$IsShowingHoverEffect$ = 
  D.$JSCompiler_alias_FALSE$$) : (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$42$$) {
  this.$IsSelected$ != $selected$$42$$ && ($selected$$42$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$42$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.$clone$(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.$clone$(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$3$$, $outerStroke$$3$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$3$$, $outerStroke$$3$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$4$$, $outerStroke$$4$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$4$$, $outerStroke$$4$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$5$$, $outerStroke$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$5$$, $outerStroke$$5$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$92$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$104$$ = $shape$$92$$.$getStroke$();
    $stroke$$104$$ && ($stroke$$104$$ = $stroke$$104$$.$clone$(), $stroke$$104$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$92$$.$setStroke$($stroke$$104$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$105$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$105$$ = $adjustedStroke_stroke$$105$$.$clone$(), $adjustedStroke_stroke$$105$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$105$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
this ? this.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = D.$DvtBaseMapManager$$ = {}, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = window.DvtBaseMapManager : (D.$DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = D.$DvtBaseMapManager$$, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
[[]]);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$];
  return $dimAr_layer$$ && ($dimAr_layer$$ = $dimAr_layer$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$[0], $dimAr_layer$$[1], $dimAr_layer$$[2], $dimAr_layer$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$1$$];
  return $layer$$1$$ ? $layer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$2$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$2$$];
  return $layer$$2$$ ? $layer$$2$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$3$$, $layerName$$3$$, $areaId$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$3$$][$layerName$$3$$];
  var $labels$$26$$;
  $baseMapName$$3_layer$$3$$ && ($labels$$26$$ = $baseMapName$$3_layer$$3$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$26$$ && $labels$$26$$[$areaId$$] ? $labels$$26$$[$areaId$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap_cityLayer_coords$$33$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap_cityLayer_coords$$33$$ && ($basemap_cityLayer_coords$$33$$ = $basemap_cityLayer_coords$$33$$.cities)) {
    if($basemap_cityLayer_coords$$33$$ = $basemap_cityLayer_coords$$33$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap_cityLayer_coords$$33$$[0], $basemap_cityLayer_coords$$33$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$1_cityLabel_cityLayer$$1$$ && ($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$1_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$6_path$$38$$, $layerName$$4$$, $areaId$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_labelInfo$$7_layer$$4$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$];
  if($basemap$$2_labelInfo$$7_layer$$4$$ && ($basemap$$2_labelInfo$$7_layer$$4$$ = $basemap$$2_labelInfo$$7_layer$$4$$[$layerName$$4$$])) {
    if(($basemap$$2_labelInfo$$7_layer$$4$$ = $basemap$$2_labelInfo$$7_layer$$4$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$2_labelInfo$$7_layer$$4$$[$areaId$$1$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$2_labelInfo$$7_layer$$4$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$][$layerName$$4$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath$$2_baseMapName$$6_path$$38$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtPathUtils$$.$createPathArray$($arPath$$2_baseMapName$$6_path$$38$$);
    return D.$DvtPathUtils$$.$getDimensions$($arPath$$2_baseMapName$$6_path$$38$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$5$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$5$$];
  return $layer$$5$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$5$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$6$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$7$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$7$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$8$$, $area$$3$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$8$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$3$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$17$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$9$$);
  return $childLayerName_children$$17$$ && ($childLayerName_children$$17$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName_children$$17$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$17$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$232$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$232$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$10$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$233$$, $dim$$83$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$10$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$10$$] = $baseMapName$$13_layerMetadata$$, $index$$233$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$233$$] = $layerName$$10$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$83$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$233$$
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$11$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$11$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$12$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$12$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$12$$]) {
      for(var $prop$$18$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$18$$] = $labelMetadata$$2$$[$prop$$18$$]
      }
    }
  }
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$786_index$$234$$, $args$$6$$, $unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS;
  if($unprocessedMaps_unprocessedParentUpdates$$) {
    for($i$$786_index$$234$$ = 0;$i$$786_index$$234$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$786_index$$234$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$786_index$$234$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$786_index$$234$$ = 0;$i$$786_index$$234$$ < $unprocessedMaps_unprocessedParentUpdates$$[1].length;$i$$786_index$$234$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[1][$i$$786_index$$234$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$786_index$$234$$ = 0;$i$$786_index$$234$$ < $unprocessedMaps_unprocessedParentUpdates$$[2].length;$i$$786_index$$234$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[2][$i$$786_index$$234$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []]
  }
  if($unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
    for($i$$786_index$$234$$ = 0;$i$$786_index$$234$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$786_index$$234$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$786_index$$234$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$13_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$786_index$$234$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$786_index$$234$$, 0, $layerName$$13_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$13_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$786_index$$234$$;
          for($i$$786_index$$234$$ += 1;$i$$786_index$$234$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$786_index$$234$$++) {
            ($layerName$$13_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$786_index$$234$$]]) && $layerName$$13_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$66$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$66$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$66$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$66$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$39$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$39$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = D.$DvtPathUtils$$.$createPathArray$($paths$$[$path$$39$$])), $basemapH_simplifiedPaths$$[$path$$39$$] = D.$DvtPathUtils$$.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$66$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$95$$, $category$$23$$) {
  this.Init($displayable$$95$$, $category$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$96$$, $category$$24$$) {
  this.$_displayable$ = $displayable$$96$$;
  this.$_category$ = $category$$24$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$5$$, $rowKey$$19$$, $action$$28$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$5$$;
  this.$_rowKey$ = $rowKey$$19$$;
  this.$_action$ = $action$$28$$
};
(0,D.$goog$exportPath_$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$590$$, $label$$89$$, $labelInfo$$8$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$590$$, $label$$89$$, $labelInfo$$8$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$591$$, $i$$803_label$$90$$, $labelInfo$$9$$, $labelDisplay$$6_line$$16_polyline$$1$$, $parentContainer$$1_stroke$$109$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$591$$, $i$$803_label$$90$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$6_line$$16_polyline$$1$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$109$$;
  if($labelInfo$$9$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$9$$[0])), 1 < $labelInfo$$9$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$803_label$$90$$ = 1;$i$$803_label$$90$$ < $labelInfo$$9$$.length;$i$$803_label$$90$$++) {
      $labelDisplay$$6_line$$16_polyline$$1$$ = $labelInfo$$9$$[$i$$803_label$$90$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$6_line$$16_polyline$$1$$[0])), $labelDisplay$$6_line$$16_polyline$$1$$ = new D.$DvtPolyline$$($context$$591$$, $labelDisplay$$6_line$$16_polyline$$1$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$6_line$$16_polyline$$1$$), $parentContainer$$1_stroke$$109$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && 
      ($parentContainer$$1_stroke$$109$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $labelDisplay$$6_line$$16_polyline$$1$$.$setStroke$($parentContainer$$1_stroke$$109$$), this.$_leaderLines$.push($labelDisplay$$6_line$$16_polyline$$1$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$12_zoom$$14$$) {
  $pzcMatrix$$12_zoom$$14$$ = $pzcMatrix$$12_zoom$$14$$.$_a$;
  for(var $mat$$49_state$$96_stroke$$110$$ = -1, $center$$12_estimatedDims$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$110$$ = D.$JSCompiler_alias_FALSE$$, $i$$804_leaderLinePoints$$ = 0;$i$$804_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$804_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$804_leaderLinePoints$$].$w$ * $pzcMatrix$$12_zoom$$14$$;
    if($center$$12_estimatedDims$$3$$.$h$ <= this.$_boundRectangle$[$i$$804_leaderLinePoints$$].$h$ * $pzcMatrix$$12_zoom$$14$$) {
      if($center$$12_estimatedDims$$3$$.$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$49_state$$96_stroke$$110$$ = $i$$804_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$110$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
          $mat$$49_state$$96_stroke$$110$$ = $i$$804_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat$$49_state$$96_stroke$$110$$ && "on" == this.$_labelDisplay$ && ($mat$$49_state$$96_stroke$$110$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$49_state$$96_stroke$$110$$ ? (-1 == $mat$$49_state$$96_stroke$$110$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$12_estimatedDims$$3$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$110$$].$getCenter$(), this.$setCenter$($center$$12_estimatedDims$$3$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$49_state$$96_stroke$$110$$ ? 
  (this.$_leaderLine$ = this.$_leaderLines$[$mat$$49_state$$96_stroke$$110$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$110$$ = this.$getCSSStyle$(), $labelBox_remove_style$$110$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$110$$), $labelBox_remove_style$$110$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$110$$], $i$$804_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$804_leaderLinePoints$$.length, 
  $labelBox_remove_style$$110$$.x > $i$$804_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$110$$.x, $center$$12_estimatedDims$$3$$.y))) : $labelBox_remove_style$$110$$.y > $i$$804_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$12_estimatedDims$$3$$.x, $labelBox_remove_style$$110$$.y))) : $labelBox_remove_style$$110$$.x + 
  $labelBox_remove_style$$110$$.$w$ < $i$$804_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$110$$.x + $labelBox_remove_style$$110$$.$w$, $center$$12_estimatedDims$$3$$.y))) : $labelBox_remove_style$$110$$.y + $labelBox_remove_style$$110$$.$h$ < $i$$804_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$12_estimatedDims$$3$$.x, 
  $labelBox_remove_style$$110$$.y + $labelBox_remove_style$$110$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$110$$ = this.$getCSSStyle$(), $labelBox_remove_style$$110$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$110$$)))), this.$_currentState$ = $mat$$49_state$$96_stroke$$110$$) : -1 == $mat$$49_state$$96_stroke$$110$$ && $labelBox_remove_style$$110$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$49_state$$96_stroke$$110$$ = new D.$DvtMatrix$$, $mat$$49_state$$96_stroke$$110$$.translate($pzcMatrix$$12_zoom$$14$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$12_zoom$$14$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$49_state$$96_stroke$$110$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$12_zoom$$14$$, 0, 0, $pzcMatrix$$12_zoom$$14$$)), this.$_bSupportsVectorEffects$ || ($mat$$49_state$$96_stroke$$110$$ = 
  this.$_leaderLine$.$getStroke$().$clone$(), $mat$$49_state$$96_stroke$$110$$.$setWidth$(1 / $pzcMatrix$$12_zoom$$14$$), this.$_leaderLine$.$setStroke$($mat$$49_state$$96_stroke$$110$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$29$$) {
  this.$_center$ = $p$$29$$;
  this.$setX$($p$$29$$.x);
  this.$setY$($p$$29$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$39$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$39$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$39$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapObjPeer$$ = function $$DvtMapObjPeer$$$($data$$107$$, $dataLayer$$11$$, $displayable$$91$$, $label$$91$$, $center$$13$$) {
  this.Init($data$$107$$, $dataLayer$$11$$, $displayable$$91$$, $label$$91$$, $center$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapObjPeer$$, D.$DvtObj$$, "DvtMapObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$108$$, $dataLayer$$12_mapLayer_preDatatip$$, $displayable$$92_location$$26$$, $label$$92$$, $center$$14$$) {
  this.$_data$ = $data$$108$$;
  this.$_dataLayer$ = $dataLayer$$12_mapLayer_preDatatip$$;
  this.$Displayable$ = $displayable$$92_location$$26$$;
  this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($data$$108$$.color);
  this.$_label$ = $label$$92$$;
  this.$_center$ = $center$$14$$;
  this.$_zoom$ = 1;
  this.$_view$ = $dataLayer$$12_mapLayer_preDatatip$$.$_tmap$;
  this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
  $displayable$$92_location$$26$$ = $data$$108$$.location;
  "auto" == this.$_view$.$_displayTooltips$ && $displayable$$92_location$$26$$ && ($dataLayer$$12_mapLayer_preDatatip$$ = $dataLayer$$12_mapLayer_preDatatip$$.$_parentLayer$, ($dataLayer$$12_mapLayer_preDatatip$$ = !($dataLayer$$12_mapLayer_preDatatip$$ instanceof D.$DvtMapAreaLayer$$) || $dataLayer$$12_mapLayer_preDatatip$$ instanceof D.$DvtMapCustomAreaLayer$$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $displayable$$92_location$$26$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, 
  $dataLayer$$12_mapLayer_preDatatip$$.$LayerName$, $displayable$$92_location$$26$$)) && (this.$_data$.shortDesc = $data$$108$$.shortDesc ? $dataLayer$$12_mapLayer_preDatatip$$ + ": " + $data$$108$$.shortDesc : $dataLayer$$12_mapLayer_preDatatip$$));
  this.$Displayable$ && !(this.$Displayable$ instanceof D.$DvtBaseComponent$$) && ($data$$108$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$Displayable$.setCursor("pointer"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$108$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = function $$JSCompiler_prototypeAlias$$$$getClientId$$() {
  return this.$_data$.clientId
};
D.$JSCompiler_prototypeAlias$$.$getLocation$ = function $$JSCompiler_prototypeAlias$$$$getLocation$$() {
  return this.$_data$.location
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($center$$15$$) {
  this.$_center$ = $center$$15$$;
  this.$__recenter$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Displayable$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$11$$) {
  this.$Displayable$.$setVisible$($bVisible$$11$$);
  this.$_label$ && this.$_label$.$setVisible$($bVisible$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  if("none" != this.$_view$.$_displayTooltips$) {
    var $tooltipFunc$$9$$ = this.$_view$.$getOptions$().tooltip;
    return $tooltipFunc$$9$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$9$$, this.$getDataContext$()) : this.$getShortDesc$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : D.$JSCompiler_alias_NULL$$, color:this.$getDatatipColor$(), location:this.$getLocation$(), x:this.$_data$.x, y:this.$_data$.y}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_data$.color ? this.$_data$.color : "#000000"
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  if(!(this.$Displayable$ instanceof D.$DvtBaseComponent$$)) {
    var $states$$17$$ = [];
    this.$isSelectable$() && $states$$17$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$17$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$getDisplayable$()]
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$27$$ = this.$getAriaLabel$();
    $desc$$27$$ && this.$Displayable$.$setAriaProperty$("label", $desc$$27$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Displayable$.$isSelectable$ ? this.$Displayable$.$isSelectable$() : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$Displayable$.$isSelected$ ? this.$Displayable$.$isSelected$() : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$44$$) {
  this.$isSelectable$() && (this.$Displayable$.$setSelected$($selected$$44$$), this.$UpdateAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ || this.$HideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$Displayable$.$hideHoverEffect$ && this.$Displayable$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$16$$) {
  for(var $parentId$$29$$ = this.$_dataLayer$.$getClientId$(), $i$$807$$ = 0;$i$$807$$ < $clientIds$$16$$.length && $clientIds$$16$$[$i$$807$$] != $parentId$$29$$;$i$$807$$++) {
  }
  return $parentId$$29$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$749$$) {
  return $event$$749$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$749$$.keyCode && $event$$749$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$749$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$60$$) {
  return this.$Displayable$.getParent() ? this.$Displayable$ instanceof D.$DvtBaseComponent$$ ? this.$Displayable$.$getDimensions$($targetCoordinateSpace$$60$$ ? $targetCoordinateSpace$$60$$ : this.$Displayable$.$getCtx$().$_stage$) : this.$Displayable$.$getDimensions$($targetCoordinateSpace$$60$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$Displayable$ instanceof D.$DvtBaseComponent$$ ? (this.$_keyboardFocusEffect$ || (this.$_keyboardFocusEffect$ = new D.$DvtKeyboardFocusEffect$$(this.$Displayable$.$getCtx$(), this.$Displayable$, new D.$DvtRectangle$$(0, 0, this.$Displayable$.getWidth(), this.$Displayable$.getHeight()))), this.$_keyboardFocusEffect$.show()) : this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$Displayable$ instanceof D.$DvtBaseComponent$$ ? this.$_keyboardFocusEffect$ && this.$_keyboardFocusEffect$.$hide$() : this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$17$$) {
  this.$Displayable$.getParent() && (this.$_zoom$ = $pzcMatrix$$17$$.$_a$, this.$__recenter$())
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$() {
  if(this.$_label$) {
    this.$_label$.$alignCenter$();
    var $x$$268$$ = this.$Displayable$.$getCx$() * this.$_zoom$, $markerY$$2_y$$241$$ = this.$Displayable$.$getCy$() * this.$_zoom$, $markerH$$ = this.$Displayable$.getHeight(), $markerType$$1$$ = this.$Displayable$ instanceof D.$DvtSimpleMarker$$ ? this.$Displayable$.$getType$() : "image", $position$$56$$ = this.$_data$.labelPosition;
    "top" == $position$$56$$ ? ($markerY$$2_y$$241$$ = $markerY$$2_y$$241$$ - $markerH$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $position$$56$$ ? ($markerY$$2_y$$241$$ += $markerH$$ / 2, this.$_label$.$alignTop$()) : ($markerY$$2_y$$241$$ = "triangleUp" == $markerType$$1$$ ? $markerY$$2_y$$241$$ + $markerH$$ / 6 : "triangleDown" == $markerType$$1$$ ? $markerY$$2_y$$241$$ - $markerH$$ / 6 : $markerY$$2_y$$241$$, this.$_label$.$alignMiddle$());
    this.$_label$.$setX$($x$$268$$).$setY$($markerY$$2_y$$241$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = function $$JSCompiler_prototypeAlias$$$$__recenter$$() {
  var $width$$161$$ = this.$Displayable$.getWidth(), $height$$145$$ = this.$Displayable$.getHeight();
  if($width$$161$$ != D.$JSCompiler_alias_NULL$$ && $height$$145$$ != D.$JSCompiler_alias_NULL$$ && this.$Displayable$.getParent()) {
    var $rotation$$8_shapeY$$ = 0, $shapeX$$ = this.$_center$.x, $rotation$$8_shapeY$$ = this.$_center$.y;
    this.$Displayable$.$getRotation$ && ($rotation$$8_shapeY$$ = this.$Displayable$.$getRotation$(), $shapeX$$ = this.$_center$.x * window.Math.cos($rotation$$8_shapeY$$) - this.$_center$.y * window.Math.sin($rotation$$8_shapeY$$), $rotation$$8_shapeY$$ = this.$_center$.x * window.Math.sin($rotation$$8_shapeY$$) + this.$_center$.y * window.Math.cos($rotation$$8_shapeY$$));
    $shapeX$$ = this.$_center$.x * this.$_zoom$ - $shapeX$$;
    $rotation$$8_shapeY$$ = this.$_center$.y * this.$_zoom$ - $rotation$$8_shapeY$$;
    this.$Displayable$ instanceof D.$DvtBaseComponent$$ && ($shapeX$$ += this.$_center$.x - $width$$161$$ / 2, $rotation$$8_shapeY$$ += this.$_center$.y - $height$$145$$ / 2);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Displayable$, $shapeX$$, $rotation$$8_shapeY$$);
    (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Displayable$);
    this.$positionLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$56$$, $oldObj$$4$$) {
  var $anim$$40$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $oldDisplayable$$2$$ = $oldObj$$4$$.$getDisplayable$();
  if(this.$Displayable$.$getFill$) {
    var $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = $oldDisplayable$$2$$.$getFill$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = this.$Displayable$.$getFill$();
    $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ instanceof D.$DvtSolidFill$$ && !($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$getColor$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getColor$() && $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$getAlpha$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getAlpha$()) && (this.$Displayable$.$setFill$($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$), 
    $oldObj$$4$$.$getLabel$() && this.$_label$ && ($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($oldObj$$4$$.$getLabel$().$getFill$().$clone$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeFill", this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
    "typeFill", this.$Displayable$, this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$))
  }
  if(this.$Displayable$.$getCenterDimensions$ && ($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getDisplayable$().$getCenterDimensions$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getCenterDimensions$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.x != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.x || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.y != 
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.y || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$w$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$w$ || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$.$h$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$h$)) {
    this.$Displayable$.$setCenterDimensions$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeRectangle", this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldDisplayable$$2$$.$getRotation$();
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getRotation$();
  if($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$) {
    var $diffRotation_startCenter$$ = $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ - $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$;
    $diffRotation_startCenter$$ > window.Math.PI ? $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ -= 2 * window.Math.PI : $diffRotation_startCenter$$ < -window.Math.PI && ($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ += 2 * window.Math.PI);
    this.$Displayable$.$setRotation$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  var $diffRotation_startCenter$$ = $oldObj$$4$$.$getCenter$(), $endCenter$$ = this.$getCenter$();
  if($diffRotation_startCenter$$ && $endCenter$$ && ($diffRotation_startCenter$$.x != $endCenter$$.x || $diffRotation_startCenter$$.y != $endCenter$$.y || $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)) {
    this.$setCenter$(new D.$DvtPoint$$($diffRotation_startCenter$$.x, $diffRotation_startCenter$$.y)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typePoint", this, this.$getCenter$, this.$setCenter$, new D.$DvtPoint$$($endCenter$$.x, $endCenter$$.y))
  }
  this.$_label$ && $oldObj$$4$$.$getLabel$() ? ($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getX$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getX$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setX$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
  "typeNumber", this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getY$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getY$(), $endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setY$($endFill$$3_startLabelX_startLabelY_startRect$$1_startRotation$$), 
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $oldObj$$4$$.$getLabel$().$setAlpha$(0)) : $oldObj$$4$$.$getLabel$() && $oldObj$$4$$.$getLabel$().$setAlpha$(0);
  $oldDisplayable$$2$$.$setAlpha$(0);
  $handler$$56$$.add($anim$$40$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$57$$) {
  var $anim$$41_fadeObjs$$ = [this.$Displayable$], $label$$93$$ = this.$getLabel$();
  $label$$93$$ && $anim$$41_fadeObjs$$.push($label$$93$$);
  $anim$$41_fadeObjs$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), $anim$$41_fadeObjs$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$57$$.add($anim$$41_fadeObjs$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$58$$) {
  var $anim$$42_fadeObjs$$1$$ = [this.$Displayable$];
  this.$Displayable$.$setAlpha$(0);
  var $label$$94$$ = this.$getLabel$();
  $label$$94$$ && ($label$$94$$.$setAlpha$(0), $anim$$42_fadeObjs$$1$$.push($label$$94$$));
  $anim$$42_fadeObjs$$1$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), $anim$$42_fadeObjs$$1$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$58$$.add($anim$$42_fadeObjs$$1$$, 2)
};
D.$DvtMapAreaPeer$$ = function $$DvtMapAreaPeer$$$($data$$105$$, $dataLayer$$6$$, $displayable$$82$$, $label$$80$$) {
  this.Init($data$$105$$, $dataLayer$$6$$, $displayable$$82$$, $label$$80$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaPeer$$, D.$DvtMapObjPeer$$, "DvtMapAreaPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$106$$, $dataLayer$$7$$, $displayable$$83$$, $label$$81$$) {
  D.$DvtMapAreaPeer$$.$superclass$.Init.call(this, $data$$106$$, $dataLayer$$7$$, $displayable$$83$$, $label$$81$$);
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$43$$) {
  $selected$$43$$ && !this.$_isHoverEffectShowing$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
  this.$Displayable$.$setSelected$($selected$$43$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
  this.$Displayable$.$showHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  this.$Displayable$.$hideHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Displayable$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1$$) {
  $drilled$$1$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  this.$Displayable$.$setDrilled$($drilled$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$5$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$5$$);
  this.$Displayable$.getParent() && ((0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Displayable$, $pzcMatrix$$5$$), this.$isDrilled$() || this.$positionLabel$($pzcMatrix$$5$$))
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$($pzcMatrix$$6$$) {
  this.$getLabel$() && this.$getLabel$().update($pzcMatrix$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$55$$, $oldObj$$3$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $handler$$55$$, $oldObj$$3$$);
  this.$getDataLayer$().$_parentLayer$.$_renderArea$[this.$getLocation$()] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$587$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$587$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$588_stroke$$106$$, $dvtShape$$1$$, $areaName$$1$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$588_stroke$$106$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$1$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  if($context$$588_stroke$$106$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$588_stroke$$106$$.getWidth()
  }
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$107$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$107$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$75$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$75$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$28$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$28$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$23$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$23$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$266$$, $y$$239$$) {
  var $dims$$69$$ = this.$getDimensions$();
  return $x$$266$$ >= $dims$$69$$.x && $x$$266$$ <= $dims$$69$$.x + $dims$$69$$.$w$ && $y$$239$$ >= $dims$$69$$.y && $y$$239$$ <= $dims$$69$$.y + $dims$$69$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$1$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().$clone$();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$1$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$6$$, $layerName$$18$$, $eventHandler$$6$$) {
  this.Init($tmap$$6$$, $layerName$$18$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$, $layerName$$19$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$LayerName$ = $layerName$$19$$;
  this.$EventHandler$ = $eventHandler$$7$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$9$$, $pzcMatrix$$13$$) {
  this.$_animation$ && this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$);
  this.$PzcMatrix$ = $pzcMatrix$$13$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$9$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$9$$.$getClientId$()] = $dataLayer$$9$$;
  $dataLayer$$9$$.$render$(this.$PzcMatrix$);
  $dataLayer$$9$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$39_oldContainers$$ = $dataLayer$$9$$.$getAnimation$(), $animDur$$2$$ = $dataLayer$$9$$.$getAnimationDuration$();
    if("auto" == $anim$$39_oldContainers$$) {
      var $anim2_animHandler_i$$805$$ = new D.$DvtDataAnimationHandler$$(this.$_tmap$.$getCtx$());
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim2_animHandler_i$$805$$, this.$_oldDataLayer$.$_dataObjs$.concat(this.$_oldDataLayer$.$_areaObjs$), $dataLayer$$9$$.$_dataObjs$.concat($dataLayer$$9$$.$_areaObjs$));
      this.$_animation$ = $anim2_animHandler_i$$805$$.$getAnimation$()
    }else {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$39_oldContainers$$)) {
        this.$_removeAnimRect$ = D.$JSCompiler_alias_TRUE$$;
        for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_animHandler_i$$805$$ = 0;$anim2_animHandler_i$$805$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_animHandler_i$$805$$++) {
          var $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
          $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$);
          $bounds2_oldNonScaledContainers$$[$anim2_animHandler_i$$805$$].$addChild$($rect$$52$$)
        }
        for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$9$$), $anim2_animHandler_i$$805$$ = 0;$anim2_animHandler_i$$805$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler_i$$805$$++) {
          $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler_i$$805$$].$addChild$($rect$$52$$)
        }
        $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$2$$);
        $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
        $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
        for($anim2_animHandler_i$$805$$ = 0;$anim2_animHandler_i$$805$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler_i$$805$$++) {
          $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler_i$$805$$].$addChild$($rect$$52$$)
        }
        for(var $newScaledContainers$$ = [$dataLayer$$9$$.$_dataAreaLayer$], $anim2_animHandler_i$$805$$ = 0;$anim2_animHandler_i$$805$$ < $newScaledContainers$$.length;$anim2_animHandler_i$$805$$++) {
          $rect$$52$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$52$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_animHandler_i$$805$$].$addChild$($rect$$52$$)
        }
        $anim2_animHandler_i$$805$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$2$$);
        this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$getCtx$(), [$anim1_bounds1$$, $anim2_animHandler_i$$805$$])
      }else {
        $anim$$39_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
        for($anim2_animHandler_i$$805$$ = 0;$anim2_animHandler_i$$805$$ < $anim$$39_oldContainers$$.length;$anim2_animHandler_i$$805$$++) {
          $anim$$39_oldContainers$$[$anim2_animHandler_i$$805$$].getParent().removeChild($anim$$39_oldContainers$$[$anim2_animHandler_i$$805$$])
        }
      }
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$42$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$42$$.$OnAnimationEnd$($dataLayer$$9$$)
      }, this);
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$8$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$8$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$281$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$281$$].$render$($pzcMatrix$$14$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$282$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$282$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$748$$, $pzcMatrix$$15$$) {
  this.$PzcMatrix$ = $pzcMatrix$$15$$;
  for(var $id$$283$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$283$$].$HandleZoomEvent$($event$$748$$, $pzcMatrix$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$16$$) {
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  for(var $id$$284$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$284$$].$HandlePanEvent$($pzcMatrix$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$10_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$806$$ = 0;$i$$806$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$806$$++) {
      var $parent$$84$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$806$$].getParent();
      $parent$$84$$ && $parent$$84$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$806$$])
    }
  }
  if(this.$_removeAnimRect$) {
    this.$_removeAnimRect$ = D.$JSCompiler_alias_FALSE$$;
    $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$10_newScaledContainers$$1$$);
    for($i$$806$$ = 0;$i$$806$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$806$$++) {
      $newNonScaledContainers$$1_oldContainers$$1$$[$i$$806$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$806$$].$getNumChildren$() - 1)
    }
    $dataLayer$$10_newScaledContainers$$1$$ = [$dataLayer$$10_newScaledContainers$$1$$.$_dataAreaLayer$];
    for($i$$806$$ = 0;$i$$806$$ < $dataLayer$$10_newScaledContainers$$1$$.length;$i$$806$$++) {
      $dataLayer$$10_newScaledContainers$$1$$[$i$$806$$].$removeChildAt$($dataLayer$$10_newScaledContainers$$1$$[$i$$806$$].$getNumChildren$() - 1)
    }
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$, $layerName$$14$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$14$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$, $layerName$$15$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$15$$, $eventHandler$$1$$);
  this.$_labelDisplay$ = $labelDisplay$$2$$;
  this.$_labelType$ = $labelType$$2$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$16$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$16$$;
  for(var $area$$4$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$4$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$4$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$7$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$7$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$8$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = D.$DvtPathUtils$$.$getDimensions$(D.$DvtPathUtils$$.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$84$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$84$$.$w$ && 0 < $dim$$84$$.$h$ && (this.$_layerDim$ = $dim$$84$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$12$$, $bForceUpdateArea_label$$76_labelText$$1_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$12$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$76_labelText$$1_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$12$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] || ($bForceUpdateArea_label$$76_labelText$$1_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$, $area$$12$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] = $bForceUpdateArea_label$$76_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$76_labelText$$1_mapArea$$), $bForceUpdateArea_label$$76_labelText$$1_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$12$$] && ($bForceUpdateArea_label$$76_labelText$$1_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$], !$bForceUpdateArea_label$$76_labelText$$1_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$76_labelText$$1_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$] ? $bForceUpdateArea_label$$76_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$76_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$), $bForceUpdateArea_label$$76_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$76_labelText$$1_mapArea$$, 
    [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$] = $bForceUpdateArea_label$$76_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$76_labelText$$1_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$13$$, $fadeInObjs$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$13$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]);
    var $label$$77$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$13$$];
    $label$$77$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$] ? $label$$77$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$77$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$13$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$]);
    $fadeInObjs$$ && ($fadeInObjs$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]), $label$$77$$ && ($fadeInObjs$$.push($label$$77$$), $fadeInObjs$$.push($label$$77$$.$_leaderLine$)))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateAreaShape$ = function $$JSCompiler_prototypeAlias$$$$updateAreaShape$$($area$$14$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$19_layerDim$$;
    this.$_paths$ = ($cmd$$19_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$19_layerDim$$.$w$, $cmd$$19_layerDim$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$19_layerDim$$ = this.$_paths$[$area$$14$$];
  this.$AreaShapes$[$area$$14$$] && $cmd$$19_layerDim$$ ? this.$AreaShapes$[$area$$14$$].$setCmds$($cmd$$19_layerDim$$) : delete this.$AreaShapes$[$area$$14$$]
};
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$5$$, $pzcMatrix$$2$$, $topLayerName$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$5$$, $pzcMatrix$$2$$, $topLayerName$$);
  if($topLayerName$$ == this.$LayerName$) {
    for(var $area$$16$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$16$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$16$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$16$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$3$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$17$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$17$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$17$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$17$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$18$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$18$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$18$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$18$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$19$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$19$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$19$$]);
      var $label$$78_leaderLine$$ = this.$_areaLabels$[$area$$19$$];
      $label$$78_leaderLine$$ && (this.$_renderedLabels$[$area$$19$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$78_leaderLine$$), ($label$$78_leaderLine$$ = $label$$78_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$78_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$1$$, $fadeInObjs$$2$$) {
  for(var $i$$inline_8226$$ = 0;$i$$inline_8226$$ < $areas$$1$$.length;$i$$inline_8226$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8226$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$1$$[$i$$inline_8226$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8226$$], $fadeInObjs$$2$$)
  }
  for(var $id$$278$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$278$$].$discloseAreas$($areas$$1$$, $fadeInObjs$$2$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$2$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$279$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$279$$].$undiscloseAreas$($areas$$2$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$279$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$788$$ = 0;$i$$788$$ < $areas$$2$$.length;$i$$788$$++) {
    var $areaName$$2$$ = $areas$$2$$[$i$$788$$];
    if(this.$Areas$[$areaName$$2$$]) {
      var $idx$$35$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$2$$);
      -1 !== $idx$$35$$ && (this.$_disclosed$.splice($idx$$35$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$2$$]))
    }
    $childAreaLayer_id$$279$$ && $childAreaLayer_id$$279$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$2$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$745$$, $pzcMatrix$$4$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$745$$, $pzcMatrix$$4$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$20$$ in this.$Areas$) {
      this.$Areas$[$area$$20$$].$HandleZoomEvent$($pzcMatrix$$4$$)
    }
  }
  for($area$$20$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$20$$]) {
      var $label$$79$$ = this.$_areaLabels$[$area$$20$$];
      $label$$79$$ && $label$$79$$.update($pzcMatrix$$4$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$2$$, $layerName$$16$$, $labelDisplay$$3$$, $labelType$$3$$, $eventHandler$$2$$) {
  this.Init($tmap$$2$$, $layerName$$16$$, $labelDisplay$$3$$, $labelType$$3$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$3$$, $layerName$$17$$, $labelDisplay$$4$$, $labelType$$4$$, $eventHandler$$3$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $layerName$$17$$, $labelDisplay$$4$$, $labelType$$4$$, $eventHandler$$3$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getWidth(), $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getHeight();
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_areaLayerImages$;
  for(var $i$$789$$ = 0;$i$$789$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length;$i$$789$$++) {
    var $height$$144_image$$22$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$[$i$$789$$], $source$$36$$ = $height$$144_image$$22$$.source, $width$$160$$ = $height$$144_image$$22$$.width, $height$$144_image$$22$$ = $height$$144_image$$22$$.height;
    if($source$$36$$ && -1 < $source$$36$$.search(".svg") || $width$$160$$ >= $widthRes$$1$$ && $height$$144_image$$22$$ >= $heightRes$$2$$ || $i$$789$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length - 1) {
      return $source$$36$$
    }
  }
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$746$$, $pzcMatrix$$7$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$746$$, $pzcMatrix$$7$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$4$$, $parentLayer$$, $clientId$$6$$, $eventHandler$$4$$) {
  this.Init($tmap$$4$$, $parentLayer$$, $clientId$$6$$, $eventHandler$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$5$$, $parentLayer$$1$$, $clientId$$7$$, $eventHandler$$5$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_clientId$ = $clientId$$7$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_dataAreaCollection$ = [];
  this.$_dataMarkerCollection$ = [];
  this.$_eventHandler$ = $eventHandler$$5$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$5$$.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$1$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$9$$ = [], $i$$791$$ = 0;$i$$791$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$791$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$791$$].$isDrilled$() || $navigables$$9$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$791$$])
  }
  return $navigables$$9$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$10$$ = [], $i$$792$$ = 0;$i$$792$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$792$$++) {
    for(var $j$$107$$ = 0;$j$$107$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$107$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$792$$].$getLocation$() == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$107$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$792$$].$isDrilled$() || $navigables$$10$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$792$$]))
    }
  }
  return $navigables$$10$$
};
D.$JSCompiler_StaticMethods_addDataObject$$ = function $$JSCompiler_StaticMethods_addDataObject$$$($JSCompiler_StaticMethods_addDataObject$self$$, $obj$$346$$) {
  $JSCompiler_StaticMethods_addDataObject$self$$.$_dataMarkerCollection$.push($obj$$346$$);
  $obj$$346$$ && ($JSCompiler_StaticMethods_addDataObject$self$$.$_dataObjs$.push($obj$$346$$), $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($obj$$346$$.$getDisplayable$(), $obj$$346$$))
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$347$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaCollection$.push($obj$$347$$);
  $obj$$347$$ && ($JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$347$$), $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$347$$.$getDisplayable$(), $obj$$347$$), $obj$$347$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$13$$) {
  if(this.$_selectionMode$ = $mode$$13$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$;
  $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim$$1_displayable$$85_displayable$$inline_8240$$ = $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$.$getDisplayable$(), $pathToCopy$$inline_8241$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$.$getLocation$()];
  $pathToCopy$$inline_8241$$ ? ($areaDim$$1_displayable$$85_displayable$$inline_8240$$.$setCmds$($pathToCopy$$inline_8241$$.$getCmds$()), $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$), -1 !== 
  $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$ && $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$, 1), $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$) {
    $areaDim$$1_displayable$$85_displayable$$inline_8240$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$85_displayable$$inline_8240$$);
    if($JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$85_displayable$$inline_8240$$ = $areaDim$$1_displayable$$85_displayable$$inline_8240$$.$getDimensions$(), $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$.$_boundRectangle$.push($areaDim$$1_displayable$$85_displayable$$inline_8240$$)), $JSCompiler_inline_result$$400_areaObj$$inline_8239_idx$$inline_11364_label$$82$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($areaLabelsToRemove_pzcMatrix$$8$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $areaLabelsToRemove_pzcMatrix$$8$$;
  $areaLabelsToRemove_pzcMatrix$$8$$ = {};
  var $dataObjs$$ = this.$_dataObjs$.slice();
  $dataObjs$$.sort(function compare($areaLabelsToRemove_pzcMatrix$$8$$, $dataObjs$$) {
    return $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() < $dataObjs$$.$getSize$() ? 1 : $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() > $dataObjs$$.$getSize$() ? -1 : 0
  });
  for(var $i$$793$$ = 0;$i$$793$$ < $dataObjs$$.length;$i$$793$$++) {
    var $dataObj$$1_regionId$$ = $dataObjs$$[$i$$793$$], $displayable$$86$$ = $dataObj$$1_regionId$$.$getDisplayable$(), $label$$83$$ = $dataObj$$1_regionId$$.$getLabel$();
    if($label$$83$$) {
      var $container$$186$$ = new D.$DvtContainer$$($displayable$$86$$.$getCtx$());
      this.$_dataPointLayer$.$addChild$($container$$186$$);
      $container$$186$$.$addChild$($displayable$$86$$);
      $container$$186$$.$addChild$($label$$83$$);
      $dataObj$$1_regionId$$.$positionLabel$()
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$86$$)
    }
    ($dataObj$$1_regionId$$ = $dataObj$$1_regionId$$.$getLocation$()) && ($areaLabelsToRemove_pzcMatrix$$8$$[$dataObj$$1_regionId$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$793$$ = 0;$i$$793$$ < this.$_areaObjs$.length;$i$$793$$++) {
    $areaLabelsToRemove_pzcMatrix$$8$$[this.$_areaObjs$[$i$$793$$].$getLocation$()] && (this.$_areaObjs$[$i$$793$$].$_label$ = D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$793$$) || $i$$793$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$3$$, $fadeInObjs$$3$$, $pzcMatrix$$9_regionId$$1$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$9_regionId$$1$$;
  for(var $drilledAreas$$ = [], $j$$108$$ = 0;$j$$108$$ < $areas$$3$$.length;$j$$108$$++) {
    for(var $i$$794_label$$84_leaderLine$$1$$ = 0;$i$$794_label$$84_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$794_label$$84_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$794_label$$84_leaderLine$$1$$].$getLocation$() == $areas$$3$$[$j$$108$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$794_label$$84_leaderLine$$1$$].$getLocation$());
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$794_label$$84_leaderLine$$1$$);
        var $displayable$$87$$ = this.$_areaObjs$[$i$$794_label$$84_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$3$$.push($displayable$$87$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$87$$, $pzcMatrix$$9_regionId$$1$$);
        if($i$$794_label$$84_leaderLine$$1$$ = this.$_areaObjs$[$i$$794_label$$84_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$3$$.push($i$$794_label$$84_leaderLine$$1$$), ($i$$794_label$$84_leaderLine$$1$$ = $i$$794_label$$84_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$3$$.push($i$$794_label$$84_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$794_label$$84_leaderLine$$1$$ = 0;$i$$794_label$$84_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$794_label$$84_leaderLine$$1$$++) {
    for($j$$108$$ = 0;$j$$108$$ < $areas$$3$$.length;$j$$108$$++) {
      $pzcMatrix$$9_regionId$$1$$ = this.$_dataObjs$[$i$$794_label$$84_leaderLine$$1$$].$getLocation$(), $displayable$$87$$ = this.$_dataObjs$[$i$$794_label$$84_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$9_regionId$$1$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$9_regionId$$1$$ == $areas$$3$$[$j$$108$$] && (this.$_dataPointLayer$.$addChild$($displayable$$87$$), $fadeInObjs$$3$$.push($displayable$$87$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$87$$), $fadeInObjs$$3$$.push($displayable$$87$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$4$$, $fadeOutObjs$$2$$) {
  for(var $j$$109$$ = 0;$j$$109$$ < $areas$$4$$.length;$j$$109$$++) {
    for(var $i$$795_label$$85$$ = 0;$i$$795_label$$85$$ < this.$_areaObjs$.length;$i$$795_label$$85$$++) {
      if(this.$_areaObjs$[$i$$795_label$$85$$].$getLocation$() == $areas$$4$$[$j$$109$$]) {
        this.$_areaObjs$[$i$$795_label$$85$$].$isDrilled$() && this.$_areaObjs$[$i$$795_label$$85$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$795_label$$85$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$795_label$$85$$]);
        var $idx$$37$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$4$$[$j$$109$$]);
        if(-1 < $idx$$37$$ && (this.$_disclosed$.splice($idx$$37$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$795_label$$85$$].$getDisplayable$()), $i$$795_label$$85$$ = this.$_areaObjs$[$i$$795_label$$85$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$795_label$$85$$), $fadeOutObjs$$2$$.push($i$$795_label$$85$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$110_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$798_label$$88$$ = 0;$i$$798_label$$88$$ < $j$$110_selectedObjs$$.length;$i$$798_label$$88$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$110_selectedObjs$$[$i$$798_label$$88$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($j$$110_selectedObjs$$[$i$$798_label$$88$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$110_selectedObjs$$ = 0;$j$$110_selectedObjs$$ < this.$_drilled$.length;$j$$110_selectedObjs$$++) {
      for($i$$798_label$$88$$ = 0;$i$$798_label$$88$$ < this.$_areaObjs$.length;$i$$798_label$$88$$++) {
        if(this.$_areaObjs$[$i$$798_label$$88$$].$getLocation$() == this.$_drilled$[$j$$110_selectedObjs$$]) {
          this.$_areaObjs$[$i$$798_label$$88$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$89$$ = this.$_areaObjs$[$i$$798_label$$88$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$89$$);
          $fadeOutObjs$$4$$.push($displayable$$89$$);
          if($i$$798_label$$88$$ = this.$_areaObjs$[$i$$798_label$$88$$].$getLabel$()) {
            $i$$798_label$$88$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$798_label$$88$$), $fadeOutObjs$$4$$.push($i$$798_label$$88$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$798_label$$88$$ = 0;$i$$798_label$$88$$ < this.$_dataObjs$.length;$i$$798_label$$88$$++) {
        if(this.$_dataObjs$[$i$$798_label$$88$$].$getLocation$() == this.$_drilled$[$j$$110_selectedObjs$$]) {
          $displayable$$89$$ = this.$_dataObjs$[$i$$798_label$$88$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$89$$);
          $fadeOutObjs$$4$$.push($displayable$$89$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$747$$, $pzcMatrix$$10$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$10$$;
  var $i$$799_zoom$$13$$ = $pzcMatrix$$10$$.$_a$, $areaObjs_dataObjs$$1_j$$111_type$$246$$ = $event$$747$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs$$1_j$$111_type$$246$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs_dataObjs$$1_j$$111_type$$246$$ = 0;$areaObjs_dataObjs$$1_j$$111_type$$246$$ < this.$_areaObjs$.length;$areaObjs_dataObjs$$1_j$$111_type$$246$$++) {
      var $displayable$$90$$ = this.$_areaObjs$[$areaObjs_dataObjs$$1_j$$111_type$$246$$].$getDisplayable$(), $fill$$76$$ = $displayable$$90$$.$_ptFill$;
      if($fill$$76$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$76$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$799_zoom$$13$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$799_zoom$$13$$));
        $displayable$$90$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs$$1_j$$111_type$$246$$ = this.$_areaObjs$;
  for($i$$799_zoom$$13$$ = 0;$i$$799_zoom$$13$$ < $areaObjs_dataObjs$$1_j$$111_type$$246$$.length;$i$$799_zoom$$13$$++) {
    $areaObjs_dataObjs$$1_j$$111_type$$246$$[$i$$799_zoom$$13$$].$HandleZoomEvent$($pzcMatrix$$10$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs$$1_j$$111_type$$246$$ = this.$_dataObjs$;
    for($i$$799_zoom$$13$$ = 0;$i$$799_zoom$$13$$ < $areaObjs_dataObjs$$1_j$$111_type$$246$$.length;$i$$799_zoom$$13$$++) {
      $areaObjs_dataObjs$$1_j$$111_type$$246$$[$i$$799_zoom$$13$$].$HandleZoomEvent$($pzcMatrix$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$349_rowKeys$$2$$) {
  if(this.$_selectionHandler$) {
    $obj$$349_rowKeys$$2$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$349_rowKeys$$2$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$349_rowKeys$$2$$));
    $obj$$349_rowKeys$$2$$ = [];
    for(var $selection$$38$$ = this.$_selectionHandler$.getSelection(), $i$$800$$ = 0;$i$$800$$ < $selection$$38$$.length;$i$$800$$++) {
      $obj$$349_rowKeys$$2$$.push($selection$$38$$[$i$$800$$].getId())
    }
    return $obj$$349_rowKeys$$2$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$28$$ = [], $selection$$39$$ = this.$_selectionHandler$.getSelection(), $i$$801$$ = 0;$i$$801$$ < $selection$$39$$.length;$i$$801$$++) {
    $displayables$$28$$.push($selection$$39$$[$i$$801$$].$getDisplayable$())
  }
  return $displayables$$28$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$11$$, $manager$$28$$) {
  this.Init($tmap$$11$$, $manager$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$, $manager$$29$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $tmap$$12$$, $manager$$29$$);
  this.$_tmap$ = $tmap$$12$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$769$$) {
  return this.$isNavigationEvent$($event$$769$$) && !$event$$769$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$770$$) {
  var $focusObj$$3_keyCode$$48$$ = $event$$770$$.keyCode;
  if(221 == $focusObj$$3_keyCode$$48$$) {
    var $focusObj$$3_keyCode$$48$$ = this.$_eventManager$.$getFocus$(), $navigables$$12$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$3_keyCode$$48$$ instanceof D.$DvtMapAreaPeer$$ && 0 < $navigables$$12$$.length && ($focusObj$$3_keyCode$$48$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$48$$, $event$$770$$, $navigables$$12$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$48$$)
  }else {
    219 == $focusObj$$3_keyCode$$48$$ ? ($focusObj$$3_keyCode$$48$$ = this.$_eventManager$.$getFocus$(), $navigables$$12$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$3_keyCode$$48$$ instanceof D.$DvtMapAreaPeer$$) && 0 < $navigables$$12$$.length && ($focusObj$$3_keyCode$$48$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$48$$, $event$$770$$, $navigables$$12$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, 
    $focusObj$$3_keyCode$$48$$)) : ($focusObj$$3_keyCode$$48$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$770$$), this.$isNavigationEvent$($event$$770$$) && !$event$$770$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$48$$))
  }
  return $focusObj$$3_keyCode$$48$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$771$$) {
  return 32 == $event$$771$$.keyCode && $event$$771$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$772_keyCode$$49$$) {
  var $isNavigable$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$772_keyCode$$49$$);
  if(!$isNavigable$$ && ($event$$772_keyCode$$49$$ = $event$$772_keyCode$$49$$.keyCode, 219 == $event$$772_keyCode$$49$$ || 221 == $event$$772_keyCode$$49$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$595$$, $callback$$165$$, $callbackObj$$114$$) {
  this.Init($context$$595$$, $callback$$165$$, $callbackObj$$114$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$596$$, $callback$$166$$, $callbackObj$$115$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$596$$, $callback$$166$$, $callbackObj$$115$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$115$$;
  this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$18$$) {
  if($logicalObj$$18$$ && $logicalObj$$18$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$18$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$5$$, $handler$$59$$) {
  this.$_selectionHandlers$[$dataLayerId$$5$$] = $handler$$59$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$12$$, $obj$$354$$) {
  var $selectionHandler$$13$$ = this.$_selectionHandlers$[$clientId$$12$$];
  $selectionHandler$$13$$ && $selectionHandler$$13$$.$removeFromSelection$($obj$$354$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$13_selectionHandler$$14$$) {
  ($clientId$$13_selectionHandler$$14$$ = this.$_selectionHandlers$[$clientId$$13_selectionHandler$$14$$]) && $clientId$$13_selectionHandler$$14$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$759$$) {
  var $obj$$355$$ = this.$GetLogicalObject$($event$$759$$.target);
  $obj$$355$$ && ($obj$$355$$.$getShowPopupBehaviors$ && $obj$$355$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$355$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$759$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$760$$) {
  this.$_tmap$.$_eventClientId$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$760$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$761$$) {
  var $obj$$356$$ = this.$GetLogicalObject$($event$$761$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$356$$);
  if(!$obj$$356$$ || !$obj$$356$$.$isSelectable$ || !$obj$$356$$.$isSelectable$()) {
    for(var $clientId$$14$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$14$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$761$$.ctrlKey)) {
        var $selectionEvent$$2$$ = new D.$DvtSelectionEvent$$([]);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$2$$, "clientId", $clientId$$14$$);
        this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$761$$);
  this.$_handleClick$($obj$$356$$, $event$$761$$.pageX, $event$$761$$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$357$$, $pageX$$13$$, $pageY$$13$$) {
  if($obj$$357$$ instanceof D.$DvtMapObjPeer$$) {
    var $callback$$167$$ = $obj$$357$$.$getLinkCallback$();
    $callback$$167$$ ? $callback$$167$$.call() : $obj$$357$$.$getAction$() != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$357$$, $pageX$$13$$, $pageY$$13$$) : $obj$$357$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$357$$.$getDataLayer$().$getClientId$())
  }
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$358_offset$$35$$, $pageX$$14$$, $pageY$$14$$) {
  var $actionEvent$$3$$ = new D.$DvtMapActionEvent$$($obj$$358_offset$$35$$.$getClientId$(), $obj$$358_offset$$35$$.getId(), $obj$$358_offset$$35$$.$getAction$());
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$3$$, "clientId", $obj$$358_offset$$35$$.$getDataLayer$().$getClientId$());
  $pageX$$14$$ != D.$JSCompiler_alias_NULL$$ && $pageY$$14$$ != D.$JSCompiler_alias_NULL$$ && ($obj$$358_offset$$35$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$getCtx$(), $pageX$$14$$, $pageY$$14$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$3$$, "pointXY", {x:$obj$$358_offset$$35$$.x, y:$obj$$358_offset$$35$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$3$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$359$$) {
  var $clientId$$15$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$15_mapLayer$$1$$ = D.$JSCompiler_alias_NULL$$, $clickedObj$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$359$$ && ($obj$$359$$ instanceof D.$DvtMapObjPeer$$ ? $clickedObj$$ = $obj$$359$$.$getDisplayable$() : $obj$$359$$ instanceof D.$DvtMapArea$$ && ($clickedObj$$ = $obj$$359$$), $obj$$359$$.$getDataLayer$ && ($dataLayer$$15_mapLayer$$1$$ = $obj$$359$$.$getDataLayer$(), $clientId$$15$$ = $dataLayer$$15_mapLayer$$1$$.$getClientId$(), $dataLayer$$15_mapLayer$$1$$ = $dataLayer$$15_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_8427$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8427$$.$_clickedLayerName$ = $dataLayer$$15_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8427$$.$_clickedDataLayerId$ = $clientId$$15$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8427$$.$_clickedObject$ = $clickedObj$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($drillEvent_event$$762_obj$$360$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.$OnDblClick$.call(this, $drillEvent_event$$762_obj$$360$$);
  $drillEvent_event$$762_obj$$360$$ = this.$GetLogicalObject$($drillEvent_event$$762_obj$$360$$.target);
  this.$getSelectionHandler$($drillEvent_event$$762_obj$$360$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$762_obj$$360$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$762_obj$$360$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($callback$$168_event$$763$$) {
  var $eventConsumed$$7$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$47$$ = $callback$$168_event$$763$$.keyCode, $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$ = this.$getFocus$(), $focusDisp$$1_toFit$$inline_8433$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$getDisplayable$();
  9 != $keyCode$$47$$ && this.$_bPassOnEvent$ ? ($focusDisp$$1_toFit$$inline_8433$$.$FireListener$($callback$$168_event$$763$$, D.$JSCompiler_alias_VOID$$), $callback$$168_event$$763$$.preventDefault()) : (48 == $keyCode$$47$$ || 96 == $keyCode$$47$$) && $callback$$168_event$$763$$.ctrlKey && $callback$$168_event$$763$$.shiftKey ? (this.$_tmap$.$resetMap$(), $callback$$168_event$$763$$.preventDefault()) : 220 == $keyCode$$47$$ ? (($JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$ = 
  this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.isCollapsed()) : $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$isDisclosed$())), 
  $callback$$168_event$$763$$.preventDefault()) : 13 == $keyCode$$47$$ ? $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$ instanceof D.$DvtMapObjPeer$$ ? ($callback$$168_event$$763$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$getLinkCallback$()) ? $callback$$168_event$$763$$.call() : $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$getAction$() != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, 
  $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$) : ($callback$$168_event$$763$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $callback$$168_event$$763$$.preventDefault()) : 32 == $keyCode$$47$$ && $callback$$168_event$$763$$.ctrlKey ? ((0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$, 
  D.$JSCompiler_alias_TRUE$$), $callback$$168_event$$763$$.preventDefault()) : (48 == $keyCode$$47$$ || 96 == $keyCode$$47$$) && $callback$$168_event$$763$$.ctrlKey ? ($callback$$168_event$$763$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$ = this.$_tmap$, $focusDisp$$1_toFit$$inline_8433$$ || ($focusDisp$$1_toFit$$inline_8433$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$_zoomToFitObject$), $focusDisp$$1_toFit$$inline_8433$$ || 
  ($focusDisp$$1_toFit$$inline_8433$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$_clickedObject$), $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$_zoomToFitBounds$($focusDisp$$1_toFit$$inline_8433$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$), $callback$$168_event$$763$$.preventDefault()) : 9 == $keyCode$$47$$ && $focusDisp$$1_toFit$$inline_8433$$ instanceof D.$DvtBaseComponent$$ ? 
  !$callback$$168_event$$763$$.shiftKey && $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$isShowingKeyboardFocusEffect$() ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$hideKeyboardFocusEffect$(), $focusDisp$$1_toFit$$inline_8433$$.$FireListener$($callback$$168_event$$763$$, D.$JSCompiler_alias_VOID$$), $callback$$168_event$$763$$.preventDefault(), this.$_bPassOnEvent$ = D.$JSCompiler_alias_TRUE$$) : ($callback$$168_event$$763$$.shiftKey && 
  this.$_bPassOnEvent$ ? ((0,D.$JSCompiler_StaticMethods_ShowFocusEffect$$)(this, $callback$$168_event$$763$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$), $callback$$168_event$$763$$.preventDefault()) : (this.$_bPassOnEvent$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8432_focusObj$$2_legendPanel$$.$showKeyboardFocusEffect$(), $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $callback$$168_event$$763$$)), 
  this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$) : $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $callback$$168_event$$763$$);
  return $eventConsumed$$7$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$764$$) {
  var $obj$$361$$ = this.$GetLogicalObject$($event$$764$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$361$$);
  if($obj$$361$$ instanceof D.$DvtThematicMap$$) {
    for(var $clientId$$16$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$16$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$764$$.ctrlKey)) {
        for(var $selectedObjs$$2_selectionEvent$$3$$ = this.$_selectionHandlers$[$clientId$$16$$].getSelection(), $selectedIds$$9$$ = [], $i$$824$$ = 0;$i$$824$$ < $selectedObjs$$2_selectionEvent$$3$$.length;$i$$824$$++) {
          $selectedIds$$9$$.push($selectedObjs$$2_selectionEvent$$3$$[$i$$824$$].getId())
        }
        $selectedObjs$$2_selectionEvent$$3$$ = new D.$DvtSelectionEvent$$($selectedIds$$9$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$3$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$764$$);
  this.$_handleClick$($obj$$361$$, $event$$764$$.$touch$.pageX, $event$$764$$.$touch$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$765_obj$$362$$) {
  $event$$765_obj$$362$$ = this.$GetLogicalObject$($event$$765_obj$$362$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$765_obj$$362$$ && $event$$765_obj$$362$$.$getShowPopupBehaviors$ && $event$$765_obj$$362$$.$getDataLayer$ ? $event$$765_obj$$362$$.$getDataLayer$().$getClientId$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$766_obj$$363$$) {
  $event$$766_obj$$363$$ = this.$GetLogicalObject$($event$$766_obj$$363$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$766_obj$$363$$ && $event$$766_obj$$363$$.$getShowPopupBehaviors$ && $event$$766_obj$$363$$.$getDataLayer$ ? $event$$766_obj$$363$$.$getDataLayer$().$getClientId$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($drillEvent$$1_event$$767$$) {
  var $obj$$364$$ = this.$GetLogicalObject$($drillEvent$$1_event$$767$$.target);
  $obj$$364$$ && (this.$getSelectionHandler$($obj$$364$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$364$$, $drillEvent$$1_event$$767$$.ctrlKey), $drillEvent$$1_event$$767$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$767$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$768$$, $categories$$28_hoverBehaviorDelay$$6_obj$$365$$, $bOver$$13_rolloverEvent$$8$$) {
  var $options$$257$$ = this.$_tmap$.$getOptions$();
  "dim" == $options$$257$$.hoverBehavior && ($categories$$28_hoverBehaviorDelay$$6_obj$$365$$ = $categories$$28_hoverBehaviorDelay$$6_obj$$365$$.$getCategories$ ? $categories$$28_hoverBehaviorDelay$$6_obj$$365$$.$getCategories$() : [], $options$$257$$.highlightedCategories = $bOver$$13_rolloverEvent$$8$$ ? $categories$$28_hoverBehaviorDelay$$6_obj$$365$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$13_rolloverEvent$$8$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$13_rolloverEvent$$8$$ ? "categoryRollOver" : 
  "categoryRollOut", $options$$257$$.highlightedCategories), $categories$$28_hoverBehaviorDelay$$6_obj$$365$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$257$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$13_rolloverEvent$$8$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$)), $categories$$28_hoverBehaviorDelay$$6_obj$$365$$, "any" == $options$$257$$.highlightMatch), 
  $event$$768$$.stopPropagation())
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$9$$) {
  this.Init($tmap$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($tmap$$10$$) {
  this.$_tmap$ = $tmap$$10$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {};
  this.$_customMarkerDefs$ = {}
};
D.$DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($options$$258$$) {
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = $options$$258$$.animationDuration;
  "string" == typeof $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ ? "ms" == $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.slice(-2) ? $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = 
  (0,window.parseInt)($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.slice(0, -2)) / 1E3 : "s" == $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.slice(-1) && ($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = 
  (0,window.parseFloat)($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.slice(0, -1))) : $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ /= 1E3;
  this.$_tmap$.$setAnimationDuration$($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$258$$.animationOnDisplay ? "alphaFade" : $options$$258$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$258$$.animationOnMapChange ? "alphaFade" : $options$$258$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$258$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = this.$_tmap$, $attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$ = this.$_isCustomBasemap$ ? "$" + $options$$258$$.basemap : $options$$258$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.$_mapName$ != 
  $attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.$_mapName$ = $attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$;
  this.$_tmap$.$setFeaturesOff$($options$$258$$.featuresOff);
  this.$_tmap$.$_controlPanelBehavior$ = $options$$258$$.controlPanelBehavior;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = $options$$258$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = "shortDescOnly" : "labelAndShortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ && 
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$;
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = $options$$258$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$));
  this.$_tmap$.$setDrillMode$($options$$258$$.drilling);
  this.$_tmap$.$_animationOnDrill$ = $options$$258$$.animationOnDrill;
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$258$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$258$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$258$$.panning;
  this.$_tmap$.$_zooming$ = "auto" == $options$$258$$.zooming;
  this.$_tmap$.$_initialCenterX$ = $options$$258$$.panX;
  this.$_tmap$.$_initialCenterY$ = $options$$258$$.panY;
  this.$_tmap$.$_initialZoom$ = $options$$258$$.zoom;
  (0,window.isNaN)($options$$258$$.maxZoom) || (this.$_tmap$.$_maxZoomFactor$ = $options$$258$$.maxZoom);
  $options$$258$$._legend && (this.$_tmap$.$_legendData$ = $options$$258$$._legend);
  $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = $options$$258$$.styleDefaults;
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$);
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.areaStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.labelStyle);
  this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.dropTargetStyle);
  this.$_tmap$.$_styleDefaults$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$;
  if(this.$_isCustomBasemap$ && $options$$258$$.sourceXml) {
    for(var $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = (new D.$DvtXmlParser$$).parse($options$$258$$.sourceXml).$getChildNodes$(), $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$, $attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$ = 
    0;$attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.length;$attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$++) {
      if($childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$[$attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$], $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$ = $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$.getName(), 
      "layer" == $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$) {
        $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$ = $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$;
        $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$ = $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getChildNodes$();
        $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$ = $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getAttr$("id");
        for(var $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ = D.$JSCompiler_alias_VOID$$, $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$ = [], $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ = 
        0;$children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ < $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$.length;$children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$++) {
          if($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$[$children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$], $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.getName(), 
          "image" == $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$) {
            $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ = {};
            $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$.source = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$getAttr$("source");
            $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$.width = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$getAttr$("width");
            $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$.height = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$getAttr$("height");
            var $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$getAttr$("bidi"), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$getAttr$("dir");
            $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$.dir = "true" == $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ || "rtl" == $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ ? "rtl" : "ltr";
            $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.push($JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$)
          }
        }
        this.$_customAreaLayerImages$[$areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$] = $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$
      }else {
        if("points" == $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$) {
          $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$ = $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$.$getChildNodes$();
          $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$ = $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$ = D.$JSCompiler_alias_VOID$$;
          $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ = {};
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = {};
          for($JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ = 0;$JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ < $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$.length;$JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$++) {
            $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$ = $childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$[$JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$], $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$ = $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.getName(), 
            "point" == $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$ && ($children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[$areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getAttr$("name")] = [$areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getAttr$("x"), $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getAttr$("y")], 
            $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$[$areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.$getAttr$("longLabel")])
          }
          D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$, $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
        }
      }
    }
  }
  $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$ = $options$$258$$.areaLayers;
  $attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$ = this.$_tmap$.$_mapName$;
  for($childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$ = 0;$childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$.length;$childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$++) {
    if($areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods_setMapName$self$$inline_11424_animDur$$inline_8449_areaLayers$$inline_8467_childNodes$$inline_8461_popups$$inline_8451_styles$$inline_8457_tooltipDisplay$$inline_8450$$[$childNodes$$inline_11465_childNodes$$inline_11477_i$$inline_8469_node$$inline_8462$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ = 
    $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.layer) {
      $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.areaStyle);
      $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.labelStyle);
      if(this.$_isCustomBasemap$) {
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.labelDisplay, 
        $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.labelType, this.$_tmap$.$__getEventManager$());
        $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ = this.$_customAreaLayerImages$[$children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$];
        $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_tmap$.$getCtx$());
        if($children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ && 0 < $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$.length) {
          var $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ = $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[0].width, $context$$inline_11496_refHeight$$inline_11489$$ = $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[0].height;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_layerWidth$ = $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_layerHeight$ = $context$$inline_11496_refHeight$$inline_11489$$;
          for(var $area$$inline_11497_locImages$$inline_11490$$ = [], $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ = 0;$areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ < $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$.length;$areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$++) {
            $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ && "rtl" == $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[$areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$].dir ? $area$$inline_11497_locImages$$inline_11490$$.push($children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[$areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$]) : 
            !$JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ && "ltr" == $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[$areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$].dir && $area$$inline_11497_locImages$$inline_11490$$.push($children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$[$areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$])
          }
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_areaLayerImages$ = 0 < $area$$inline_11497_locImages$$inline_11490$$.length ? $area$$inline_11497_locImages$$inline_11490$$ : $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$);
          $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$_imageSrc$, 0, 0, $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$, 
          $context$$inline_11496_refHeight$$inline_11489$$)
        }
        $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$.$AreaShapes$ = 
        {image:$bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$})
      }else {
        $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.labelDisplay, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.labelType, this.$_tmap$.$__getEventManager$());
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$, $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$);
        $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$ = $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$;
        $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$;
        $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$ = {};
        $context$$inline_11496_refHeight$$inline_11489$$ = this.$_tmap$.$getCtx$();
        $area$$inline_11497_locImages$$inline_11490$$ = D.$JSCompiler_alias_VOID$$;
        for($area$$inline_11497_locImages$$inline_11490$$ in $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$) {
          $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$[$area$$inline_11497_locImages$$inline_11490$$] = new D.$DvtPath$$($context$$inline_11496_refHeight$$inline_11489$$);
          if(($areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ = this.$_areaLayerStyle$.$getStyle$("border-color")) && "transparent" != $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$) {
            $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ = new D.$DvtSolidStroke$$($areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$[$area$$inline_11497_locImages$$inline_11490$$].$setStroke$($areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$)
          }
          $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ = this.$_areaLayerStyle$.$getStyle$("background-color");
          "transparent" != $areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$ ? $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$[$area$$inline_11497_locImages$$inline_11490$$].$setSolidFill$($areaNames$$inline_11494_backgroundColor$$inline_11500_borderColor$$inline_11498_i$$inline_11491_stroke$$inline_11499$$) : $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$[$area$$inline_11497_locImages$$inline_11490$$].$setFill$(D.$JSCompiler_alias_NULL$$)
        }
        $JSCompiler_temp_const$$9342_i$$inline_11482_image$$inline_11471_isRTL$$inline_11487_nodeName$$inline_11468$$.$AreaShapes$ = $bidi$$inline_11472_refWidth$$inline_11488_shape$$inline_11486_shapes$$inline_11495$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$inline_11425_basemap$$inline_8468_i$$inline_8464$$, $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$);
        $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.$_labelInfo$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11484_areaNames$$inline_8473_dir$$inline_11473_labels$$inline_11481_node$$inline_11467_values$$inline_11506$$;
        $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$);
        $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.$_children$ = $children$$inline_11509_i$$inline_11470_images$$inline_11485_layer$$inline_8471_points$$inline_11480$$
      }
      $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
      $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.$setAnimation$("auto" == $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.animationOnLayerChange);
      $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$);
      $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.areaDataLayer && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, [$areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.areaDataLayer], $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.pointDataLayers && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $areaLayer$$inline_8470_layerName$$inline_11466_node$$inline_11478_nodeName$$inline_8463_xmlNode$$inline_11464$$.pointDataLayers, $images$$inline_11469_mapLayer$$inline_8472_nodeName$$inline_11479$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $options$$258$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_ParseDataLayers$$ = function $$JSCompiler_StaticMethods_ParseDataLayers$$$($JSCompiler_StaticMethods_ParseDataLayers$self$$, $dataLayers$$8$$, $parentLayer$$6$$, $topLayerName$$2$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$) {
  if($dataLayers$$8$$) {
    for(var $i$$826$$ = 0;$i$$826$$ < $dataLayers$$8$$.length;$i$$826$$++) {
      var $dataLayerOptions$$1_initSelections$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$8$$[$i$$826$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      if($dataLayerOptions$$1_initSelections$$.markerDefs) {
        var $area$$inline_8530_dataLayer$$16_markerDefs$$ = $dataLayerOptions$$1_initSelections$$.markerDefs, $markerDef$$16$$;
        for($markerDef$$16$$ in $area$$inline_8530_dataLayer$$16_markerDefs$$) {
          if(!$JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$]) {
            var $initDisclosed_xmlNode$$68$$ = (new D.$DvtXmlParser$$).parse($area$$inline_8530_dataLayer$$16_markerDefs$$[$markerDef$$16$$]);
            $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getCtx$(), $initDisclosed_xmlNode$$68$$)
          }
        }
      }
      $dataLayerOptions$$1_initSelections$$.legend && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_legendData$ = $dataLayerOptions$$1_initSelections$$.legend);
      if($parentLayer$$6$$) {
        if($parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$) {
          for($area$$inline_8530_dataLayer$$16_markerDefs$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$ = $parentLayer$$6$$, $area$$inline_8530_dataLayer$$16_markerDefs$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$.$AreaNames$) {
            $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$.$_renderArea$[$area$$inline_8530_dataLayer$$16_markerDefs$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$.$_renderLabel$[$area$$inline_8530_dataLayer$$16_markerDefs$$] = D.$JSCompiler_alias_TRUE$$
          }
        }
      }else {
        $parentLayer$$6$$ = new D.$DvtMapLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__getEventManager$()), $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_layers$.push($parentLayer$$6$$)
      }
      $area$$inline_8530_dataLayer$$16_markerDefs$$ = new D.$DvtMapDataLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $parentLayer$$6$$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__getEventManager$());
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$ = $dataLayerOptions$$1_initSelections$$.selectionMode;
      "single" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$ ? $area$$inline_8530_dataLayer$$16_markerDefs$$.$setSelectionMode$("s") : "multiple" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$ && $area$$inline_8530_dataLayer$$16_markerDefs$$.$setSelectionMode$("m");
      $area$$inline_8530_dataLayer$$16_markerDefs$$.$setAnimation$($dataLayerOptions$$1_initSelections$$.animationOnDataChange);
      $area$$inline_8530_dataLayer$$16_markerDefs$$.$setAnimationDuration$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getAnimationDuration$());
      var $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ = $dataLayerOptions$$1_initSelections$$.isolatedItem);
      var $disclosedItems_isolatedArea$$inline_8552$$ = $dataLayerOptions$$1_initSelections$$.disclosedItems, $initDisclosed_xmlNode$$68$$ = [], $isolatedAreaId$$;
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$ = $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$;
      var $popups$$1$$;
      $dataLayerOptions$$1_initSelections$$.popups && ($popups$$1$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_getShowPopupBehaviors$($dataLayerOptions$$1_initSelections$$.popups));
      var $hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$().hiddenCategories, $areas$$6_components$$ = $dataLayerOptions$$1_initSelections$$.areas;
      if($areas$$6_components$$) {
        for(var $area$$inline_8553_j$$116$$ = 0;$area$$inline_8553_j$$116$$ < $areas$$6_components$$.length;$area$$inline_8553_j$$116$$++) {
          if($hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$12_images$$22$$, $areas$$6_components$$[$area$$inline_8553_j$$116$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8530_dataLayer$$16_markerDefs$$, D.$JSCompiler_alias_NULL$$)
          }else {
            var $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $areas$$6_components$$[$area$$inline_8553_j$$116$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ != $areas$$6_components$$[$area$$inline_8553_j$$116$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$
              }
            }
            $disclosedItems_isolatedArea$$inline_8552$$ && -1 != $disclosedItems_isolatedArea$$inline_8552$$.indexOf($areas$$6_components$$[$area$$inline_8553_j$$116$$].id) && $initDisclosed_xmlNode$$68$$.push($areaId$$2_dataLayer$$inline_8537_dataObj$$4$$);
            var $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$, $layer$$inline_8536$$ = $parentLayer$$6$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $area$$inline_8530_dataLayer$$16_markerDefs$$, $data$$inline_8538_displayable$$97$$ = $areas$$6_components$$[$area$$inline_8553_j$$116$$], $areaId$$inline_8539_path$$inline_8540$$ = $data$$inline_8538_displayable$$97$$.location;
            if($layer$$inline_8536$$.$AreaShapes$[$areaId$$inline_8539_path$$inline_8540$$] && $data$$inline_8538_displayable$$97$$.color) {
              $layer$$inline_8536$$.$_renderArea$[$areaId$$inline_8539_path$$inline_8540$$] = D.$JSCompiler_alias_FALSE$$;
              $areaId$$inline_8539_path$$inline_8540$$ = new D.$DvtDrillablePath$$($JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$.$_tmap$.$_bSupportsVectorEffects$);
              $data$$inline_8538_displayable$$97$$ = D.$DvtJSONUtils$$.$merge$($data$$inline_8538_displayable$$97$$, $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$.$_tmap$.$_styleDefaults$.dataAreaDefaults);
              $data$$inline_8538_displayable$$97$$.labelStyle || ($data$$inline_8538_displayable$$97$$.labelStyle = $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$.$_tmap$.$_styleDefaults$.labelStyle);
              var $dis$$inline_8544_hs$$inline_8541$$ = new D.$DvtSolidStroke$$($data$$inline_8538_displayable$$97$$.hoverColor, 1, 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$ = new D.$DvtSolidStroke$$($data$$inline_8538_displayable$$97$$.selectedInnerColor, 1, 1), $dos$$inline_8545_outerStroke$$inline_11534_sos$$inline_8543$$ = new D.$DvtSolidStroke$$($data$$inline_8538_displayable$$97$$.selectedOuterColor, 1, 4);
              $areaId$$inline_8539_path$$inline_8540$$.$setHoverStroke$($dis$$inline_8544_hs$$inline_8541$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$, $dos$$inline_8545_outerStroke$$inline_11534_sos$$inline_8543$$);
              $dis$$inline_8544_hs$$inline_8541$$ = new D.$DvtSolidStroke$$($data$$inline_8538_displayable$$97$$.drilledInnerColor, 1, 2);
              $dos$$inline_8545_outerStroke$$inline_11534_sos$$inline_8543$$ = new D.$DvtSolidStroke$$($data$$inline_8538_displayable$$97$$.drilledOuterColor, 1, 4);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$ = $areaId$$inline_8539_path$$inline_8540$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_disclosedInnerStroke$ = $dis$$inline_8544_hs$$inline_8541$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_disclosedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_disclosedOuterStroke$ = $dos$$inline_8545_outerStroke$$inline_11534_sos$$inline_8543$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11532_sis$$inline_8542$$.$_disclosedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
              $layer$$inline_8536$$.$_renderLabel$[$data$$inline_8538_displayable$$97$$.location] = D.$JSCompiler_alias_FALSE$$;
              (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$, $data$$inline_8538_displayable$$97$$, $areaId$$inline_8539_path$$inline_8540$$);
              $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$ = $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$.$_createLabel$($layer$$inline_8536$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$, $data$$inline_8538_displayable$$97$$, $areaId$$inline_8539_path$$inline_8540$$, D.$JSCompiler_alias_TRUE$$);
              $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = new D.$DvtMapAreaPeer$$($data$$inline_8538_displayable$$97$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$, $areaId$$inline_8539_path$$inline_8540$$, $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$)
            }else {
              $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = D.$JSCompiler_alias_NULL$$
            }
            $popups$$1$$ && $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ && ($area$$inline_8530_dataLayer$$16_markerDefs$$.$isSelectable$() && ($data$$inline_8538_displayable$$97$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$getDisplayable$(), $data$$inline_8538_displayable$$97$$.$setSelectable$ && $data$$inline_8538_displayable$$97$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8530_dataLayer$$16_markerDefs$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$))
          }
        }
      }
      $areas$$6_components$$ = $dataLayerOptions$$1_initSelections$$._components;
      if(($JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$ = $dataLayerOptions$$1_initSelections$$.markers) && !$areas$$6_components$$) {
        for($area$$inline_8553_j$$116$$ = 0;$area$$inline_8553_j$$116$$ < $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$.length;$area$$inline_8553_j$$116$$++) {
          if($hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$12_images$$22$$, $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$[$area$$inline_8553_j$$116$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8530_dataLayer$$16_markerDefs$$, D.$JSCompiler_alias_NULL$$)
          }else {
            $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$[$area$$inline_8553_j$$116$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ != $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$[$area$$inline_8553_j$$116$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$
              }
            }
            $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createMarker$($parentLayer$$6$$, $area$$inline_8530_dataLayer$$16_markerDefs$$, $JSCompiler_StaticMethods__createArea$self$$inline_8535_label$$inline_8546_markers$$10$$[$area$$inline_8553_j$$116$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$);
            $popups$$1$$ && $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ && ($area$$inline_8530_dataLayer$$16_markerDefs$$.$isSelectable$() && ($data$$inline_8538_displayable$$97$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$getDisplayable$(), $data$$inline_8538_displayable$$97$$.$setSelectable$ && $data$$inline_8538_displayable$$97$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8530_dataLayer$$16_markerDefs$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$))
          }
        }
      }
      if($hiddenCategories$$12_images$$22$$ = $dataLayerOptions$$1_initSelections$$.images) {
        for($area$$inline_8553_j$$116$$ = 0;$area$$inline_8553_j$$116$$ < $hiddenCategories$$12_images$$22$$.length;$area$$inline_8553_j$$116$$++) {
          $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $hiddenCategories$$12_images$$22$$[$area$$inline_8553_j$$116$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ != $hiddenCategories$$12_images$$22$$[$area$$inline_8553_j$$116$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$
            }
          }
          $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createImage$($parentLayer$$6$$, $area$$inline_8530_dataLayer$$16_markerDefs$$, $hiddenCategories$$12_images$$22$$[$area$$inline_8553_j$$116$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$);
          $popups$$1$$ && $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ && (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8530_dataLayer$$16_markerDefs$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$)
        }
      }
      if($areas$$6_components$$) {
        for($area$$inline_8553_j$$116$$ = 0;$area$$inline_8553_j$$116$$ < $areas$$6_components$$.length;$area$$inline_8553_j$$116$$++) {
          $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $areas$$6_components$$[$area$$inline_8553_j$$116$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ != $areas$$6_components$$[$area$$inline_8553_j$$116$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$
            }
          }
          $disclosedItems_isolatedArea$$inline_8552$$ && -1 != $disclosedItems_isolatedArea$$inline_8552$$.indexOf($areas$$6_components$$[$area$$inline_8553_j$$116$$].id) && $initDisclosed_xmlNode$$68$$.push($areaId$$2_dataLayer$$inline_8537_dataObj$$4$$);
          $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createComponent$($parentLayer$$6$$, $area$$inline_8530_dataLayer$$16_markerDefs$$, $areas$$6_components$$[$area$$inline_8553_j$$116$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8529_isAreaDataLayer$$1_selectionMode$$13$$);
          $popups$$1$$ && $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$ && ($area$$inline_8530_dataLayer$$16_markerDefs$$.$isSelectable$() && ($data$$inline_8538_displayable$$97$$ = $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$.$getDisplayable$(), $data$$inline_8538_displayable$$97$$.$setSelectable$ && $data$$inline_8538_displayable$$97$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8530_dataLayer$$16_markerDefs$$, $areaId$$2_dataLayer$$inline_8537_dataObj$$4$$))
        }
      }
      if($isolatedAreaId$$) {
        for($area$$inline_8553_j$$116$$ in $area$$inline_8530_dataLayer$$16_markerDefs$$.$_isolatedAreaRowKey$ = $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$ = $parentLayer$$6$$, $disclosedItems_isolatedArea$$inline_8552$$ = $isolatedAreaId$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$.$_isolatedArea$ = $disclosedItems_isolatedArea$$inline_8552$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$.$_layerDim$ = 
        D.$JSCompiler_alias_NULL$$, $area$$inline_8553_j$$116$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$.$AreaShapes$) {
          $area$$inline_8553_j$$116$$ != $disclosedItems_isolatedArea$$inline_8552$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8551_isolatedRowKey$$.$_renderArea$[$area$$inline_8553_j$$116$$] = D.$JSCompiler_alias_FALSE$$)
        }
      }
      if(($dataLayerOptions$$1_initSelections$$ = $dataLayerOptions$$1_initSelections$$.selection) && 0 < $dataLayerOptions$$1_initSelections$$.length) {
        $area$$inline_8530_dataLayer$$16_markerDefs$$.$_initSelections$ = $dataLayerOptions$$1_initSelections$$
      }
      $initDisclosed_xmlNode$$68$$ && 0 < $initDisclosed_xmlNode$$68$$.length && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_initDrilled$[$parentLayer$$6$$.$LayerName$] = [$area$$inline_8530_dataLayer$$16_markerDefs$$.$getClientId$(), $initDisclosed_xmlNode$$68$$]);
      $topLayerName$$2$$ ? $parentLayer$$6$$.$updateDataLayer$($area$$inline_8530_dataLayer$$16_markerDefs$$, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $topLayerName$$2$$) : $parentLayer$$6$$.$DataLayers$[$area$$inline_8530_dataLayer$$16_markerDefs$$.$getClientId$()] = $area$$inline_8530_dataLayer$$16_markerDefs$$
    }
  }
};
D.$DvtThematicMapJsonParser$$.prototype.$_createMarker$ = function $$DvtThematicMapJsonParser$$$$$_createMarker$$($label$$98_layer$$13$$, $dataLayer$$18$$, $data$$112$$, $isParentAreaDataLayer$$) {
  var $center$$16$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$18$$, $data$$112$$);
  if(!$center$$16$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $marker$$17_markerDefaults_sx$$18$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $markerLabelStyle_rotation$$9_sy$$18$$ = new D.$DvtCSSStyle$$($marker$$17_markerDefaults_sx$$18$$.labelStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($markerLabelStyle_rotation$$9_sy$$18$$, $data$$112$$.labelStyle);
  $data$$112$$ = D.$DvtJSONUtils$$.$merge$($data$$112$$, $marker$$17_markerDefaults_sx$$18$$);
  $data$$112$$.labelStyle = $markerLabelStyle_rotation$$9_sy$$18$$.toString();
  $marker$$17_markerDefaults_sx$$18$$ = 1;
  (0,window.isNaN)($data$$112$$.scaleX) || ($marker$$17_markerDefaults_sx$$18$$ = $data$$112$$.scaleX);
  $markerLabelStyle_rotation$$9_sy$$18$$ = 1;
  (0,window.isNaN)($data$$112$$.scaleY) || ($markerLabelStyle_rotation$$9_sy$$18$$ = $data$$112$$.scaleY);
  var $w$$66$$ = $data$$112$$.width, $h$$64$$ = $data$$112$$.height;
  if(!$w$$66$$ || (0,window.isNaN)($w$$66$$)) {
    $w$$66$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width
  }
  if(!$h$$64$$ || (0,window.isNaN)($h$$64$$)) {
    $h$$64$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height
  }
  if($data$$112$$.source) {
    $marker$$17_markerDefaults_sx$$18$$ = new D.$DvtImageMarker$$(this.$_tmap$.$getCtx$(), $center$$16$$.x, $center$$16$$.y, $w$$66$$ * $marker$$17_markerDefaults_sx$$18$$, $h$$64$$ * $markerLabelStyle_rotation$$9_sy$$18$$, $data$$112$$.source, $data$$112$$.sourceSelected, $data$$112$$.sourceHover, $data$$112$$.sourceHoverSelected)
  }else {
    var $shapeType$$1$$ = $data$$112$$.shape ? $data$$112$$.shape : this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $marker$$17_markerDefaults_sx$$18$$ = new D.$DvtSimpleMarker$$(this.$_tmap$.$getCtx$(), $shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$16$$.x, $center$$16$$.y, $w$$66$$ * $marker$$17_markerDefaults_sx$$18$$, $h$$64$$ * $markerLabelStyle_rotation$$9_sy$$18$$)
  }
  ($markerLabelStyle_rotation$$9_sy$$18$$ = $data$$112$$.rotation) && $marker$$17_markerDefaults_sx$$18$$.$setRotation$($markerLabelStyle_rotation$$9_sy$$18$$ * window.Math.PI / 180);
  $isParentAreaDataLayer$$ && ($label$$98_layer$$13$$.$_renderLabel$[$data$$112$$.location] = D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, $data$$112$$, $marker$$17_markerDefaults_sx$$18$$);
  $label$$98_layer$$13$$ = this.$_createLabel$($label$$98_layer$$13$$, $dataLayer$$18$$, $data$$112$$, $marker$$17_markerDefaults_sx$$18$$, $isParentAreaDataLayer$$);
  return new D.$DvtMapObjPeer$$($data$$112$$, $dataLayer$$18$$, $marker$$17_markerDefaults_sx$$18$$, $label$$98_layer$$13$$, $center$$16$$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_createImage$ = function $$DvtThematicMapJsonParser$$$$$_createImage$$($layer$$14$$, $dataLayer$$19$$, $data$$113$$, $isParentAreaDataLayer$$1$$) {
  var $center$$17$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$19$$, $data$$113$$);
  if(!$center$$17$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $image$$24$$ = new D.$DvtImage$$(this.$_tmap$.$getCtx$(), $data$$113$$.url), $width$$162$$ = $data$$113$$.width, $height$$146$$ = $data$$113$$.height;
  $width$$162$$ != D.$JSCompiler_alias_NULL$$ && $height$$146$$ != D.$JSCompiler_alias_NULL$$ && ($image$$24$$.$setX$($center$$17$$.x - $width$$162$$ / 2), $image$$24$$.$setY$($center$$17$$.y - $height$$146$$ / 2), $image$$24$$.$setWidth$($width$$162$$), $image$$24$$.$setHeight$($height$$146$$));
  $isParentAreaDataLayer$$1$$ && ($layer$$14$$.$_renderLabel$[$data$$113$$.location] = D.$JSCompiler_alias_FALSE$$);
  var $peer$$31$$ = new D.$DvtMapObjPeer$$($data$$113$$, $dataLayer$$19$$, $image$$24$$, D.$JSCompiler_alias_NULL$$, $center$$17$$);
  (!$width$$162$$ || !$height$$146$$) && D.$DvtImageLoader$$.$loadImage$(this.$_tmap$.$getCtx$(), $data$$113$$.url, function($layer$$14$$) {
    $layer$$14$$ && ($layer$$14$$.width && $layer$$14$$.height) && ($image$$24$$.$setWidth$($layer$$14$$.width), $image$$24$$.$setHeight$($layer$$14$$.height), $image$$24$$.$setX$($center$$17$$.x - $layer$$14$$.width / 2), $image$$24$$.$setY$($center$$17$$.y - $layer$$14$$.height / 2), $peer$$31$$.$__recenter$())
  });
  return $peer$$31$$
};
D.$DvtThematicMapJsonParser$$.prototype.$_createComponent$ = function $$DvtThematicMapJsonParser$$$$$_createComponent$$($layer$$15$$, $dataLayer$$20$$, $data$$114$$, $isParentAreaDataLayer$$2$$) {
  var $center$$18$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$20$$, $data$$114$$);
  if(!$center$$18$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $isParentAreaDataLayer$$2$$ && ($layer$$15$$.$_renderLabel$[$data$$114$$.location] = D.$JSCompiler_alias_FALSE$$);
  return new D.$DvtMapObjPeer$$($data$$114$$, $dataLayer$$20$$, $data$$114$$.displayable, D.$JSCompiler_alias_NULL$$, $center$$18$$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_createLabel$ = function $$DvtThematicMapJsonParser$$$$$_createLabel$$($fillColor$$10_layer$$16$$, $dataLayer$$21_labelStyle$$18$$, $data$$115$$, $displayable$$98_isArea$$1$$, $isParentAreaDataLayer$$3$$) {
  var $areaId$$4$$ = $data$$115$$.location, $labelText$$2$$ = $data$$115$$.label, $labelDisplay$$7$$ = $labelText$$2$$ ? "on" : "off";
  $isParentAreaDataLayer$$3$$ && ($labelDisplay$$7$$ = $fillColor$$10_layer$$16$$.$getLabelDisplay$());
  $displayable$$98_isArea$$1$$ = $displayable$$98_isArea$$1$$ instanceof D.$DvtPath$$;
  if(!$labelText$$2$$ && $isParentAreaDataLayer$$3$$ && ($displayable$$98_isArea$$1$$ && "off" != $labelDisplay$$7$$ || !$displayable$$98_isArea$$1$$ && "on" == $labelDisplay$$7$$)) {
    $labelText$$2$$ = "long" == $fillColor$$10_layer$$16$$.$_labelType$ ? $fillColor$$10_layer$$16$$.$AreaNames$[$areaId$$4$$][1] : $fillColor$$10_layer$$16$$.$AreaNames$[$areaId$$4$$][0]
  }
  if($labelText$$2$$) {
    var $context$$599_label$$99$$ = this.$_tmap$.$getCtx$(), $context$$599_label$$99$$ = $displayable$$98_isArea$$1$$ ? new D.$DvtMapLabel$$($context$$599_label$$99$$, $labelText$$2$$, $fillColor$$10_layer$$16$$.$getLabelInfoForArea$ ? $fillColor$$10_layer$$16$$.$getLabelInfoForArea$($areaId$$4$$) : D.$JSCompiler_alias_NULL$$, $labelDisplay$$7$$, $dataLayer$$21_labelStyle$$18$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new D.$DvtOutputText$$($context$$599_label$$99$$, $labelText$$2$$, 
    0, 0);
    $dataLayer$$21_labelStyle$$18$$ = new D.$DvtCSSStyle$$;
    $displayable$$98_isArea$$1$$ && $dataLayer$$21_labelStyle$$18$$.$merge$(new D.$DvtCSSStyle$$($fillColor$$10_layer$$16$$.$_layerCSSStyle$));
    $data$$115$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($dataLayer$$21_labelStyle$$18$$, $data$$115$$.labelStyle);
    $fillColor$$10_layer$$16$$ = $dataLayer$$21_labelStyle$$18$$.$getStyle$("color");
    $dataLayer$$21_labelStyle$$18$$.$setStyle$("color", D.$JSCompiler_alias_NULL$$);
    $context$$599_label$$99$$.$setCSSStyle$($dataLayer$$21_labelStyle$$18$$);
    if($context$$599_label$$99$$ instanceof D.$DvtMapLabel$$ && (D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ || !$fillColor$$10_layer$$16$$)) {
      $fillColor$$10_layer$$16$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($data$$115$$.color)
    }
    $fillColor$$10_layer$$16$$ && $context$$599_label$$99$$.$setSolidFill$($fillColor$$10_layer$$16$$)
  }
  return $context$$599_label$$99$$
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$, $borderColor$$59_style$$111$$, $displayable$$99$$) {
  var $pattern$$14$$ = $borderColor$$59_style$$111$$.pattern, $backgroundColor$$26$$ = $borderColor$$59_style$$111$$.color, $gradient$$16$$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$.$_tmap$.$_skinName$ ? "none" : $borderColor$$59_style$$111$$.visualEffects;
  if($displayable$$99$$ instanceof D.$DvtSimpleMarker$$) {
    if("none" != $borderColor$$59_style$$111$$.borderStyle) {
      var $borderWidth$$15_opacity$$5$$ = $borderColor$$59_style$$111$$.borderWidth;
      "string" == typeof $borderWidth$$15_opacity$$5$$ && ($borderWidth$$15_opacity$$5$$ = "px" == $borderWidth$$15_opacity$$5$$.slice(-2) ? (0,window.parseFloat)($borderColor$$59_style$$111$$.borderWidth.slice(0, -2)) : (0,window.parseFloat)($borderColor$$59_style$$111$$.borderWidth));
      var $stroke$$113$$ = new D.$DvtSolidStroke$$($borderColor$$59_style$$111$$.borderColor, 1, $borderWidth$$15_opacity$$5$$);
      $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($stroke$$113$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $stroke$$113$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$59_style$$111$$.borderStyle));
      $displayable$$99$$.$setStroke$($stroke$$113$$)
    }
    $borderWidth$$15_opacity$$5$$ = $borderColor$$59_style$$111$$.opacity;
    "none" != $gradient$$16$$ ? $displayable$$99$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$26$$, $displayable$$99$$, $borderWidth$$15_opacity$$5$$)) : $pattern$$14$$ ? $displayable$$99$$.$setFill$(new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF")) : $backgroundColor$$26$$ && $displayable$$99$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$15_opacity$$5$$)
  }else {
    if($displayable$$99$$ instanceof D.$DvtPath$$) {
      if($borderColor$$59_style$$111$$ = $borderColor$$59_style$$111$$.borderColor) {
        $stroke$$113$$ = new D.$DvtSolidStroke$$($borderColor$$59_style$$111$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$.$_tmap$.$_bSupportsVectorEffects$ && ($stroke$$113$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$99$$.$setStroke$($stroke$$113$$)
      }
      $pattern$$14$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$ = new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF"), $displayable$$99$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8598$$) : $displayable$$99$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$15_opacity$$5$$)
    }
  }
};
D.$DvtThematicMapJsonParser$getCenter$$ = function $$DvtThematicMapJsonParser$getCenter$$$($dataLayer$$22$$, $data$$116$$) {
  var $locationCoords_map$$29$$ = $dataLayer$$22$$.$_tmap$, $mapName$$ = $locationCoords_map$$29$$.$_mapName$, $location$$27$$ = $data$$116$$.location;
  return $location$$27$$ ? (($locationCoords_map$$29$$ = D.$DvtBaseMapManager$$.$getAreaCenter$($mapName$$, $dataLayer$$22$$.$_parentLayer$.$LayerName$, $location$$27$$)) || ($locationCoords_map$$29$$ = D.$DvtBaseMapManager$$.$getCityCoordinates$($mapName$$, $location$$27$$)), $locationCoords_map$$29$$) : D.$DvtThematicMapProjections$$.$project$($data$$116$$.x, $data$$116$$.y, $locationCoords_map$$29$$.$_mapName$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($popups$$2$$) {
  for(var $spbs$$5$$ = [], $i$$830$$ = 0;$i$$830$$ < $popups$$2$$.length;$i$$830$$++) {
    $spbs$$5$$.push(new D.$DvtShowPopupBehavior$$($popups$$2$$[$i$$830$$].popupId, $popups$$2$$[$i$$830$$].triggerType, D.$JSCompiler_alias_NULL$$, $popups$$2$$[$i$$830$$].align))
  }
  return $spbs$$5$$
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$271$$, $y$$242$$, $basemap$$5$$) {
  var $point$$59$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$271$$, $y$$242$$));
      break;
    case "asia":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$271$$, $y$$242$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$271$$, $y$$242$$);
      break;
    case "europe":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$271$$, $y$$242$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$271$$, $y$$242$$));
      break;
    case "southAmerica":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$271$$, $y$$242$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$271$$, $y$$242$$));
      break;
    case "emea":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$271$$, $y$$242$$));
      break;
    case "latinAmerica":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$271$$, $y$$242$$));
      break;
    case "usaAndCanada":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$271$$, $y$$242$$));
      break;
    case "worldRegions":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$271$$, $y$$242$$);
      break;
    case "usa":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$271$$, $y$$242$$);
      break;
    case "world":
      $point$$59$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$271$$, $y$$242$$)
  }
  return $point$$59$$ ? new D.$DvtPoint$$(10 * $point$$59$$.x, 10 * $point$$59$$.y) : new D.$DvtPoint$$($x$$271$$, $y$$242$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$272$$, $y$$243$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$272$$, $y$$243$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$272$$, $y$$243$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$272$$, $y$$243$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$272$$, $y$$243$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$272$$, $y$$243$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$272$$, $y$$243$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$272$$, $y$$243$$))) : new D.$DvtPoint$$($x$$272$$, 
  $y$$243$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$273$$, $y$$244$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$273$$, $y$$244$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$274$$, $y$$245$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$274$$, $y$$245$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$274$$, $y$$245$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$60$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$60$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$44_sP1$$, $n$$39_sP2$$, $theta$$4_x$$275$$, $rho_y$$246$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$44_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$44_sP1$$);
  $n$$39_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$39_sP2$$);
  $n$$39_sP2$$ = 0.5 * (window.Math.sin($c$$44_sP1$$) + window.Math.sin($n$$39_sP2$$));
  $c$$44_sP1$$ = window.Math.pow(window.Math.cos($c$$44_sP1$$), 2) + 2 * $n$$39_sP2$$ * window.Math.sin($c$$44_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$44_sP1$$ - 2 * $n$$39_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$39_sP2$$;
  $theta$$4_x$$275$$ = $n$$39_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$4_x$$275$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$246$$ = $c$$44_sP1$$ - 2 * $n$$39_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$246$$));
  $rho_y$$246$$ = window.Math.sqrt($rho_y$$246$$) / $n$$39_sP2$$;
  return new D.$DvtPoint$$($rho_y$$246$$ * window.Math.sin($theta$$4_x$$275$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$246$$ * window.Math.cos($theta$$4_x$$275$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$276$$, $y$$247$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$247$$)));
  return new D.$DvtPoint$$($x$$276$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$19_centerY$$5$$, $radX$$1_x$$277$$, $radY$$1_y$$248$$) {
  $radX$$1_x$$277$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX$$1_x$$277$$);
  $radY$$1_y$$248$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY$$1_y$$248$$);
  var $centerX$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$19_centerY$$5$$.x);
  $center$$19_centerY$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$19_centerY$$5$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY$$1_y$$248$$) * window.Math.sin($radX$$1_x$$277$$ - $centerX$$5$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$19_centerY$$5$$) * window.Math.sin($radY$$1_y$$248$$) - window.Math.sin($center$$19_centerY$$5$$) * window.Math.cos($radY$$1_y$$248$$) * window.Math.cos($radX$$1_x$$277$$ - $centerX$$5$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$278$$, $y$$249$$) {
  var $newY$$13_ycriteria$$ = window.Math.floor(window.Math.abs($y$$249$$) / 5);
  $newY$$13_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$249$$) - 5 * $newY$$13_ycriteria$$) / 5, $newX$$12$$ = $x$$278$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0])), $newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1] + $yInterval$$ * 
  (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1]);
  0 > $y$$249$$ && ($newY$$13_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$12$$, 180 * $newY$$13_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$23$$, $point$$61$$) {
  return new D.$DvtPoint$$($point$$61$$.x * $matrix$$23$$.$_a$ + $matrix$$23$$.$_tx$, $point$$61$$.y * $matrix$$23$$.$_d$ + $matrix$$23$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$831$$ = $deviceView$$.x, $d6_j$$117$$ = $deviceView$$.y, $d$$12$$ = $mapBound$$.$w$, $d1$$1$$ = $mapBound$$.$h$, $d2$$1_d3$$1$$ = 0, $d2$$1_d3$$1$$ = $deviceView$$.$w$ / $d$$12$$, $d4$$ = $deviceView$$.$h$ / $d1$$1$$, $d2$$1_d3$$1$$ = $d2$$1_d3$$1$$ <= $d4$$ ? $d2$$1_d3$$1$$ : $d4$$, $d5_i$$831$$ = $d5_i$$831$$ - $mapBound$$.x * $d2$$1_d3$$1$$, $d6_j$$117$$ = $d6_j$$117$$ + $mapBound$$.y * $d2$$1_d3$$1$$, $d5_i$$831$$ = $d5_i$$831$$ + ($deviceView$$.$w$ - $d$$12$$ * $d2$$1_d3$$1$$) / 
  2, $d6_j$$117$$ = $d6_j$$117$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - $d1$$1$$ * $d2$$1_d3$$1$$) / 2);
  return new D.$DvtMatrix$$($d2$$1_d3$$1$$, 0, 0, -$d2$$1_d3$$1$$, $d5_i$$831$$, $d6_j$$117$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$279$$) {
  return $x$$279$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$280$$) {
  return $x$$280$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$281$$, $y$$250$$, $basemap$$6$$) {
  var $point$$62$$;
  $x$$281$$ /= 10;
  $y$$250$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$62$$.x, $point$$62$$.y);
      break;
    case "asia":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$62$$.x, $point$$62$$.y);
      break;
    case "australia":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$281$$, $y$$250$$);
      break;
    case "europe":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$62$$.x, $point$$62$$.y);
      break;
    case "northAmerica":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$62$$.x, $point$$62$$.y);
      break;
    case "southAmerica":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$62$$.x, $point$$62$$.y);
      break;
    case "emea":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$62$$.x, $point$$62$$.y);
      break;
    case "latinAmerica":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$));
      break;
    case "usaAndCanada":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$281$$, $y$$250$$));
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$62$$.x, $point$$62$$.y);
      break;
    case "worldRegions":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$281$$, $y$$250$$);
      break;
    case "usa":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$281$$, $y$$250$$);
      break;
    case "world":
      $point$$62$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$281$$, $y$$250$$)
  }
  return $point$$62$$ ? $point$$62$$ : new D.$DvtPoint$$($x$$281$$, $y$$250$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$282$$, $y$$251$$) {
  var $point$$63_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$282$$, $y$$251$$) ? ($point$$63_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$63_viewPortTransform$$4$$.$invert$(), $point$$63_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$63_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$282$$, 
  $y$$251$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$63_viewPortTransform$$4$$.x, $point$$63_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$282$$, $y$$251$$) ? ($point$$63_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$63_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$63_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$282$$, $y$$251$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$282$$, $y$$251$$) ? ($point$$63_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$63_viewPortTransform$$4$$.$invert$(), $point$$63_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$63_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$282$$, $y$$251$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$63_viewPortTransform$$4$$.x, $point$$63_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$282$$, $y$$251$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$283$$, $y$$252$$) {
  var $point$$64_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$64_viewPortTransform$$5$$.$invert$();
  $point$$64_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$64_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$283$$, $y$$252$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$64_viewPortTransform$$5$$.x, $point$$64_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$284$$, $y$$253$$) {
  var $point$$65_viewPortTransform$$6$$;
  $point$$65_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$284$$, $y$$253$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$65_viewPortTransform$$6$$.$invert$();
  $point$$65_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$65_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$284$$, $y$$253$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$65_viewPortTransform$$6$$.x, $point$$65_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$66$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$66$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0$$4_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$46_sP1$$1$$, $n$$40_sP2$$1$$, $x$$285$$, $y$$254$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $c$$46_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$46_sP1$$1$$);
  $n$$40_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$40_sP2$$1$$);
  $n$$40_sP2$$1$$ = 0.5 * (window.Math.sin($c$$46_sP1$$1$$) + window.Math.sin($n$$40_sP2$$1$$));
  $c$$46_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$46_sP1$$1$$), 2) + 2 * $n$$40_sP2$$1$$ * window.Math.sin($c$$46_sP1$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = $c$$46_sP1$$1$$ - 2 * $n$$40_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0$$4_phi0$$1$$) / $n$$40_sP2$$1$$;
  var $p$$30$$ = window.Math.sqrt($x$$285$$ * $x$$285$$ + ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$254$$) * ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$254$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$285$$ / ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$254$$)) / $n$$40_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$46_sP1$$1$$ - $p$$30$$ * $p$$30$$ * $n$$40_sP2$$1$$ * $n$$40_sP2$$1$$) / (2 * $n$$40_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$286$$, $y$$255$$) {
  return new D.$DvtPoint$$($x$$286$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$255$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$20$$, $radX$$2_x$$287$$, $radY$$2_y$$256$$) {
  $radX$$2_x$$287$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$2_y$$256$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$6$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$20$$.y), $p$$31$$ = window.Math.sqrt($radX$$2_x$$287$$ * $radX$$2_x$$287$$ + $radY$$2_y$$256$$ * $radY$$2_y$$256$$), $c$$47$$ = window.Math.asin($p$$31$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$20$$.x) + window.Math.atan($radX$$2_x$$287$$ * window.Math.sin($c$$47$$) / ($p$$31$$ * window.Math.cos($centerY$$6$$) * window.Math.cos($c$$47$$) - $radY$$2_y$$256$$ * window.Math.sin($centerY$$6$$) * window.Math.sin($c$$47$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$47$$) * window.Math.sin($centerY$$6$$) + $radY$$2_y$$256$$ * window.Math.sin($c$$47$$) * 
  window.Math.cos($centerY$$6$$) / $p$$31$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$288$$, $y$$257$$) {
  var $criteria$$2_originalX$$ = window.Math.floor(window.Math.abs($y$$257$$) / 5);
  $criteria$$2_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$2_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$257$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$2_originalX$$, $criteria$$2_originalX$$ = $x$$288$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0]));
  0 > $y$$257$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$2_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$600$$, $button$$82$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$9$$, $eventManager$$46$$) {
  this.Init($context$$600$$, $button$$82$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$9$$, $eventManager$$46$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$601_proxy$$14$$, $button$$83$$, $mapCallback$$4$$, $panZoomCanvas$$22$$, $btype$$4$$, $eventManager$$47$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$601_proxy$$14$$);
  this.$_btype$ = $btype$$4$$;
  this.$_button$ = $button$$83$$;
  this.$_eventManager$ = $eventManager$$47$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  $context$$601_proxy$$14$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$601_proxy$$14$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$4$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$21$$) {
  this.$setAlpha$($enabled$$21$$ ? 1 : 0.4);
  this.$_isEnabled$ = $enabled$$21$$;
  this.$_button$.$setEnabled$($enabled$$21$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$773$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$773$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$602$$, $view$$64$$, $state$$97$$) {
  this.Init($context$$602$$, $view$$64$$, $state$$97$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$603$$, $view$$65$$, $state$$98$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$603$$, $view$$65$$, $state$$98$$);
  this.$_drillMode$ = $view$$65$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$65$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$65$$, $view$$65$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$65$$, $view$$65$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$65$$, $view$$65$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$65$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$2$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$2$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$2$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$3$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$3$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$3$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$getCtx$(), this.$_resetCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$getCtx$(), this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$getCtx$(), this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};
  return D;
});