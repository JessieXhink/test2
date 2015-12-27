/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$369$$, $callback$$103$$, $callbackObj$$58$$, $bStaticRendering$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$369$$, $callback$$103$$, $callbackObj$$58$$);
  this.$_bStaticRendering$ = $bStaticRendering$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$369$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$122$$) {
  this.$Options$ = $options$$122$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$, $container$$98_eventManager$$17_width$$86$$, $ariaId_height$$80_oldShapes_value$$162$$) {
  $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$98_eventManager$$17_width$$86$$) && !(0,window.isNaN)($ariaId_height$$80_oldShapes_value$$162$$) && (this.$Width$ = $container$$98_eventManager$$17_width$$86$$, this.$Height$ = $ariaId_height$$80_oldShapes_value$$162$$);
  $ariaId_height$$80_oldShapes_value$$162$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$98_eventManager$$17_width$$86$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChildAt$($container$$98_eventManager$$17_width$$86$$, 0);
  this.$Render$($container$$98_eventManager$$17_width$$86$$, this.$Width$, this.$Height$);
  var $bData$$inline_6286_newObjs$$inline_10991$$ = $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$ = this.$Width$, $context$$inline_6295_endState$$inline_10997_height$$inline_6289$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDataChange, $animationOnDisplay$$inline_6292_i$$inline_10994$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDisplay, $animationDuration$$inline_6293$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$getOptions$().animationDuration) / 1E3;
  if($animationOnDisplay$$inline_6292_i$$inline_10994$$ || $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$) {
    $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$, $context$$inline_6295_endState$$inline_10997_height$$inline_6289$$);
    $context$$inline_6295_endState$$inline_10997_height$$inline_6289$$ = this.$getCtx$();
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_6292_i$$inline_10994$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_6295_endState$$inline_10997_height$$inline_6289$$, $animationOnDisplay$$inline_6292_i$$inline_10994$$, $container$$98_eventManager$$17_width$$86$$, $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$, $animationDuration$$inline_6293$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_6292_i$$inline_10994$$, $animationDuration$$inline_6293$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$ && $bData$$inline_6286_newObjs$$inline_10991$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_6295_endState$$inline_10997_height$$inline_6289$$, $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$, this.$_container$, $container$$98_eventManager$$17_width$$86$$, $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$, $animationDuration$$inline_6293$$)) {
          $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_6286_newObjs$$inline_10991$$ = this.$__shapes$;
          $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$ = [];
          for($animationOnDisplay$$inline_6292_i$$inline_10994$$ = 0;$animationOnDisplay$$inline_6292_i$$inline_10994$$ < $ariaId_height$$80_oldShapes_value$$162$$.length;$animationOnDisplay$$inline_6292_i$$inline_10994$$++) {
            var $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$ = $bData$$inline_6286_newObjs$$inline_10991$$[$animationOnDisplay$$inline_6292_i$$inline_10994$$], $animation$$inline_10998_startState$$inline_10996$$ = $ariaId_height$$80_oldShapes_value$$162$$[$animationOnDisplay$$inline_6292_i$$inline_10994$$].$getAnimationParams$(), $context$$inline_6295_endState$$inline_10997_height$$inline_6289$$ = $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$.$getAnimationParams$();
            $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$.$setAnimationParams$($animation$$inline_10998_startState$$inline_10996$$);
            $animation$$inline_10998_startState$$inline_10996$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$, $animationDuration$$inline_6293$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_10998_startState$$inline_10996$$.$_animator$, "typeNumberArray", $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$, $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$.$getAnimationParams$, $bounds$$inline_6294_newObj$$inline_10995_width$$inline_6288$$.$setAnimationParams$, $context$$inline_6295_endState$$inline_10997_height$$inline_6289$$);
            $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$.push($animation$$inline_10998_startState$$inline_10996$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$inline_10993_animationOnDataChange$$inline_6291$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$98_eventManager$$17_width$$86$$
  }
  this.$_editingOverlay$ && this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$));
  !this.$_bStaticRendering$ && !this.$Options$.readOnly && ($container$$98_eventManager$$17_width$$86$$.$setAriaRole$("slider"), $container$$98_eventManager$$17_width$$86$$.$setAriaProperty$("valuemin", this.$Options$.min), $container$$98_eventManager$$17_width$$86$$.$setAriaProperty$("valuemax", this.$Options$.max), $ariaId_height$$80_oldShapes_value$$162$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $container$$98_eventManager$$17_width$$86$$.$setAriaProperty$("valuenow", 
  $ariaId_height$$80_oldShapes_value$$162$$), $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_container$.$setAriaProperty$("live", "assertive"), $ariaId_height$$80_oldShapes_value$$162$$ != $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ && ($bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ = $ariaId_height$$80_oldShapes_value$$162$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "ARIA_LABEL_DESC_DELIMITER") + $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$)), $ariaId_height$$80_oldShapes_value$$162$$ != $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$ && $container$$98_eventManager$$17_width$$86$$.$setAriaProperty$("label", $bBlackBoxUpdate$$inline_6290_options$$123_tooltip$$30$$), this.$_renderCount$ = this.$_renderCount$ != D.$JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $ariaId_height$$80_oldShapes_value$$162$$ = this.getId() + "_" + this.$_renderCount$, 
  $container$$98_eventManager$$17_width$$86$$.setId($ariaId_height$$80_oldShapes_value$$162$$), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), $container$$98_eventManager$$17_width$$86$$), ($container$$98_eventManager$$17_width$$86$$ = this.$__getEventManager$()) && $container$$98_eventManager$$17_width$$86$$.$associate$(this.$_editingOverlay$, this.$GetLogicalObject$(), D.$JSCompiler_alias_TRUE$$));
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$()
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$GetLogicalObject$$() {
  var $tooltip$$31$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), $color$$55$$ = D.$DvtGaugeStyleUtils$$.$getColor$(this);
  return new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $tooltip$$31$$, $color$$55$$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  this.$render$();
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$ = function $$JSCompiler_StaticMethods_UpdateAriaLiveValue$$$($JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$, $container$$101$$, $value$$163$$) {
  $value$$163$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($value$$163$$ ? $value$$163$$ : $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$.$Options$.value, $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$);
  $container$$101$$.$setAriaProperty$("valuenow", $value$$163$$);
  (0,D.$DvtAgent$isTouchDevice$$)() && $container$$101$$.$setAriaProperty$("label", $value$$163$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$195$$, $y$$170$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$195$$, $y$$170$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$196$$, $y$$171$$) {
  this.$_oldValue$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$196$$, $y$$171$$)), this.$renderUpdate$(), this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$)))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$197$$, $y$$172$$) {
  this.$__processValueChangeMove$($x$$197$$, $y$$172$$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $value$$164$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $tooltip$$32$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    $value$$164$$ != $tooltip$$32$$ && ($tooltip$$32$$ = $value$$164$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER") + $tooltip$$32$$, this.$_container$.$setAriaProperty$("label", $tooltip$$32$$))
  }
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$55$$, $b$$40$$) {
  return $a$$55$$.max != D.$JSCompiler_alias_NULL$$ && $b$$40$$.max != D.$JSCompiler_alias_NULL$$ ? $a$$55$$.max - $b$$40$$.max : $a$$55$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$14$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$14$$, this)
};
D.$DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "GAUGE")
};
D.$DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
  if(!this.$_bStaticRendering$) {
    var $tooltip$$33$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    (0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this) ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), $tooltip$$33$$ ? [$tooltip$$33$$] : D.$JSCompiler_alias_NULL$$)]))) : 
    (this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), 
    $tooltip$$33$$ ? [$tooltip$$33$$] : D.$JSCompiler_alias_NULL$$)))
  }
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportPath_$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
(0,D.$DvtBundle$addDefaultStrings$$)("DvtGaugeBundle", {});
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), textType:"number"}, _thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$88$$) {
  $defaultsMap$$1_ret$$88$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$88$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$18$$) {
  return"skyros" == $gauge$$18$$.$getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$14_options$$124$$) {
  $gauge$$14_options$$124$$ = $gauge$$14_options$$124$$.$getOptions$();
  return!$gauge$$14_options$$124$$ || (0,window.isNaN)($gauge$$14_options$$124$$.value) || $gauge$$14_options$$124$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$15$$, $value$$165$$) {
  var $options$$125_thresholds$$1$$ = $gauge$$15$$.$getOptions$(), $gaugeValue$$ = $value$$165$$ != D.$JSCompiler_alias_NULL$$ ? $value$$165$$ : $options$$125_thresholds$$1$$.value, $options$$125_thresholds$$1$$ = $options$$125_thresholds$$1$$.thresholds;
  if(!$options$$125_thresholds$$1$$) {
    return-1
  }
  for(var $i$$605$$ = 0;$i$$605$$ < $options$$125_thresholds$$1$$.length;$i$$605$$++) {
    if($gaugeValue$$ <= $options$$125_thresholds$$1$$[$i$$605$$].max) {
      return $i$$605$$
    }
  }
  return $options$$125_thresholds$$1$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$16$$, $index$$199$$) {
  var $thresholds$$2$$ = $gauge$$16$$.$getOptions$().thresholds;
  return $thresholds$$2$$ && 0 <= $index$$199$$ && $index$$199$$ < $thresholds$$2$$.length ? $thresholds$$2$$[$index$$199$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$17$$, $index$$200$$) {
  var $referenceObjects$$ = $gauge$$17$$.$getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$200$$ && $index$$200$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$200$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$19$$) {
  this.Init($gauge$$19$$.$getCtx$(), $gauge$$19$$.$__dispatchEvent$, $gauge$$19$$);
  this.$_gauge$ = $gauge$$19$$;
  this.$isEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$26_event$$493$$) {
  this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$26_event$$493$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$26_event$$493$$.pageX, $coords$$26_event$$493$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$26_event$$493$$.x, $coords$$26_event$$493$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$26_event$$493$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$27_event$$494$$) {
  this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$27_event$$494$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$27_event$$494$$.pageX, $coords$$27_event$$494$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$27_event$$494$$.x, $coords$$27_event$$494$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$27_event$$494$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$495$$) {
  if(this.$isEditing$) {
    var $coords$$28$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$495$$.pageX, $event$$495$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$28$$.x, $coords$$28$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$isEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$495$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$496$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$496$$.type && this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$29$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$496$$.touches[0].pageX, $event$$496$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$29$$.x, $coords$$29$$.y);
    $event$$496$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$496$$.type && this.$isEditing$ ? ($coords$$29$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$496$$.touches[0].pageX, $event$$496$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$29$$.x, $coords$$29$$.y), $event$$496$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$496$$.type && this.$isEditing$ && (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$29$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$496$$.changedTouches[0].pageX, $event$$496$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$29$$.x, $coords$$29$$.y), $event$$496$$.preventDefault())
  }
  (!this.$isEditing$ || this.$IsShowingTooltipWhileEditing$()) && D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$496$$)
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$9_stageCoords$$, $pageY$$9$$) {
  $pageX$$9_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$getCtx$(), $pageX$$9_stageCoords$$, $pageY$$9$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$9_stageCoords$$)
};
D.$DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$15$$, $gauge$$20$$) {
  this.Init($manager$$15$$, $gauge$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$16$$, $gauge$$21$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$16$$);
  this.$_gauge$ = $gauge$$21$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$497$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ = $event$$497$$.keyCode, $isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$getCtx$());
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ == ($isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.readOnly || ($isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value + $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.max - 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$render$(), 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), (0,D.$DvtEventManager$consumeEvent$$)($event$$497$$)
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ == ($isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.readOnly || ($isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value - $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.max - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$render$(), 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$5_oldValue$$inline_6314_oldValue$$inline_6317$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6316_JSCompiler_StaticMethods___increaseValue$self$$inline_6313_keyCode$$32$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), (0,D.$DvtEventManager$consumeEvent$$)($event$$497$$)
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$28$$) {
  var $options$$135$$ = $gauge$$28$$.$getOptions$(), $thresholdIndex$$1$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$28$$), $threshold$$7$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$28$$, $thresholdIndex$$1$$);
  return $threshold$$7$$ && (!($gauge$$28$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$28$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$135$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$28$$, $threshold$$7$$, $thresholdIndex$$1$$) : $options$$135$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$29$$) {
  var $options$$136$$ = $gauge$$29$$.$getOptions$(), $threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$29$$);
  return($threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$29$$, $threshold$$8_thresholdIndex$$2$$)) && $threshold$$8_thresholdIndex$$2$$.borderColor && (!($gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$136$$.thresholdDisplay) ? $threshold$$8_thresholdIndex$$2$$.borderColor : $options$$136$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$30$$) {
  var $options$$137$$ = $gauge$$30$$.$getOptions$(), $thresholdIndex$$3$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$30$$), $threshold$$9$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$30$$, $thresholdIndex$$3$$);
  return $threshold$$9$$ && (!($gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$137$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$30$$, $threshold$$9$$, $thresholdIndex$$3$$) : $options$$137$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$31_options$$138$$, $threshold$$10$$, $thresholdIndex$$4$$) {
  if($threshold$$10$$.color) {
    return $threshold$$10$$.color
  }
  $gauge$$31_options$$138$$ = $gauge$$31_options$$138$$.$getOptions$();
  return $gauge$$31_options$$138$$._thresholdColors[$thresholdIndex$$4$$ % $gauge$$31_options$$138$$._thresholdColors.length]
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$1$$) {
  return"rectangleAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : 
  "rectangleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$1$$) {
  return"needleAntique" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$22$$, $container$$102$$, $availSpace$$83$$) {
  var $options$$127$$ = $gauge$$22$$.$getOptions$(), $emptyTextStr$$1$$ = $options$$127$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($options$$127$$, "labelNoData", "DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  $options$$127$$.metricLabel.style.$getStyle$("font-size") || $options$$127$$.metricLabel.style.$setStyle$("font-size", "13px");
  D.$DvtTextUtils$$.$renderEmptyText$($container$$102$$, $emptyTextStr$$1$$, new D.$DvtRectangle$$($availSpace$$83$$.x, $availSpace$$83$$.y, $availSpace$$83$$.$w$, $availSpace$$83$$.$h$), $gauge$$22$$.$__getEventManager$(), $options$$127$$.metricLabel.style)
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$166$$, $gauge$$23$$) {
  var $options$$128$$ = $gauge$$23$$.$getOptions$(), $converter$$5$$ = D.$JSCompiler_alias_NULL$$, $isPercent$$ = "percent" == $options$$128$$.metricLabel.textType;
  "on" == $options$$128$$.metricLabel.rendered && $options$$128$$.metricLabel.converter && ($converter$$5$$ = $options$$128$$.metricLabel.converter);
  var $scaling$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$128$$.metricLabel.rendered && $options$$128$$.metricLabel.scaling && ($scaling$$1$$ = $options$$128$$.metricLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$166$$, $gauge$$23$$, $converter$$5$$, $scaling$$1$$, $options$$128$$.metricLabel.autoPrecision ? $options$$128$$.metricLabel.autoPrecision : "on", $isPercent$$)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$167$$, $gauge$$24$$) {
  var $options$$129$$ = $gauge$$24$$.$getOptions$(), $converter$$6$$ = D.$JSCompiler_alias_NULL$$, $isPercent$$1$$ = "percent" == $options$$129$$.tickLabel.textType;
  "on" == $options$$129$$.tickLabel.rendered && $options$$129$$.tickLabel.converter && ($converter$$6$$ = $options$$129$$.tickLabel.converter);
  var $scaling$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$129$$.tickLabel.rendered && $options$$129$$.tickLabel.scaling && ($scaling$$2$$ = $options$$129$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$167$$, $gauge$$24$$, $converter$$6$$, $scaling$$2$$, $options$$129$$.tickLabel.autoPrecision ? $options$$129$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($output_value$$168$$, $formatter$$1_gauge$$25$$, $converter$$7$$, $scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $options$$130$$ = $formatter$$1_gauge$$25$$.$getOptions$(), $percentConverter$$1$$ = D.$JSCompiler_alias_NULL$$, $minValue$$12$$ = $options$$130$$.min, $maxValue$$11$$ = $options$$130$$.max, $difference$$ = $maxValue$$11$$ - $minValue$$12$$, $increment$$2$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$) || ($increment$$2$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $isPercent$$2$$ && ($output_value$$168$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$130$$, $options$$130$$.min, $output_value$$168$$), $percentConverter$$1$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)($formatter$$1_gauge$$25$$.$getCtx$(), {style:"percent", maximumFractionDigits:0}));
  $formatter$$1_gauge$$25$$ = new D.$DvtLinearScaleAxisValueFormatter$$($formatter$$1_gauge$$25$$.$getCtx$(), $minValue$$12$$, $maxValue$$11$$, $increment$$2$$, $scaling$$3$$, $autoPrecision$$7$$);
  $output_value$$168$$ = $converter$$7$$ && $converter$$7$$.getAsString ? $formatter$$1_gauge$$25$$.$format$($output_value$$168$$, $converter$$7$$) : $converter$$7$$ && $converter$$7$$.format ? $formatter$$1_gauge$$25$$.$format$($output_value$$168$$, $converter$$7$$) : $percentConverter$$1$$ ? $formatter$$1_gauge$$25$$.$format$($output_value$$168$$, $percentConverter$$1$$) : $isPercent$$2$$ ? $formatter$$1_gauge$$25$$.$format$(100 * $output_value$$168$$) : $formatter$$1_gauge$$25$$.$format$($output_value$$168$$);
  return $isPercent$$2$$ && (!$percentConverter$$1$$ || $converter$$7$$) ? (0,window.String)($output_value$$168$$) + "%" : $output_value$$168$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$131_percentFill$$, $min$$17$$, $value$$169$$) {
  $options$$131_percentFill$$ = ($value$$169$$ - $min$$17$$) / ($options$$131_percentFill$$.max - $options$$131_percentFill$$.min);
  return $options$$131_percentFill$$ = window.Math.min(window.Math.max(0, $options$$131_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$26$$) {
  var $options$$132$$ = $gauge$$26$$.$getOptions$(), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$26$$);
  return($threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$26$$, $threshold$$6_thresholdIndex$$)) && $threshold$$6_thresholdIndex$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $threshold$$6_thresholdIndex$$.shortDesc : $options$$132$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $options$$132$$.shortDesc : D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$132$$.value, $gauge$$26$$)
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$27_label$$53$$, $container$$103$$, $bounds$$86$$, $color$$56$$) {
  var $options$$133_size$$30$$ = $gauge$$27_label$$53$$.$getOptions$();
  if("on" == $options$$133_size$$30$$.metricLabel.rendered) {
    var $labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$133_size$$30$$.value, $gauge$$27_label$$53$$), $minString$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$133_size$$30$$.min, $gauge$$27_label$$53$$), $maxString$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$133_size$$30$$.max, $gauge$$27_label$$53$$), $labelWidth$$7$$ = $bounds$$86$$.$w$, $labelHeight$$3$$ = $bounds$$86$$.$h$;
    $gauge$$27_label$$53$$ = new D.$DvtOutputText$$($gauge$$27_label$$53$$.$getCtx$(), $labelString$$4$$, $bounds$$86$$.x + $bounds$$86$$.$w$ / 2, $bounds$$86$$.y + $bounds$$86$$.$h$ / 2);
    $gauge$$27_label$$53$$.$setCSSStyle$($options$$133_size$$30$$.metricLabel.style);
    $options$$133_size$$30$$ = ($options$$133_size$$30$$ = $options$$133_size$$30$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($options$$133_size$$30$$) : D.$JSCompiler_alias_NULL$$;
    $options$$133_size$$30$$ || ($options$$133_size$$30$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$4$$, $minString$$1$$, $maxString$$1$$], $gauge$$27_label$$53$$, $bounds$$86$$), $gauge$$27_label$$53$$.$setTextString$($labelString$$4$$), $gauge$$27_label$$53$$.$setFontSize$($options$$133_size$$30$$));
    $gauge$$27_label$$53$$.$alignMiddle$();
    $gauge$$27_label$$53$$.$alignCenter$();
    $color$$56$$ != D.$JSCompiler_alias_NULL$$ && $gauge$$27_label$$53$$.$setSolidFill$($color$$56$$);
    D.$DvtTextUtils$$.$fitText$($gauge$$27_label$$53$$, $labelWidth$$7$$, $labelHeight$$3$$, $container$$103$$) && $gauge$$27_label$$53$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($labels$$18$$, $label$$54$$, $bounds$$87$$) {
  for(var $maxWidth$$18$$ = 0, $maxLabel$$ = D.$JSCompiler_alias_NULL$$, $width$$89$$ = 0, $i$$606$$ = 0;$i$$606$$ < $labels$$18$$.length;$i$$606$$++) {
    $label$$54$$.$setTextString$($labels$$18$$[$i$$606$$]), $width$$89$$ = $label$$54$$.$measureDimensions$().$w$, $width$$89$$ > $maxWidth$$18$$ && ($maxLabel$$ = $labels$$18$$[$i$$606$$], $maxWidth$$18$$ = $width$$89$$)
  }
  $label$$54$$.$setTextString$($maxLabel$$);
  return $label$$54$$.$getOptimalFontSize$($bounds$$87$$)
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$134$$, $value$$170$$) {
  var $step$$3$$ = (0,window.Number)($options$$134$$.step);
  if($step$$3$$ && 0 < $step$$3$$) {
    var $stepNum$$ = ($value$$170$$ - $options$$134$$.min) / $step$$3$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$134$$.max, window.Math.round($stepNum$$) * $step$$3$$ + $options$$134$$.min), $options$$134$$.min) : $options$$134$$.min
  }
  return $value$$170$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$371$$, $callback$$104$$, $callbackObj$$59$$, $bStaticRendering$$1$$) {
  var $gauge$$32$$ = new D.$DvtLedGauge$$;
  $gauge$$32$$.Init($context$$371$$, $callback$$104$$, $callbackObj$$59$$, $bStaticRendering$$1$$);
  return $gauge$$32$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$372$$, $callback$$105$$, $callbackObj$$60$$, $bStaticRendering$$2$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$372$$, $callback$$105$$, $callbackObj$$60$$, $bStaticRendering$$2$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$139$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$139$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$104$$, $width$$90$$, $height$$83$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$104$$, $width$$90$$, $height$$83$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$__RECTANGLE_CORNER_RADIUS$ = 1 / 6;
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$33$$, $container$$105$$, $bounds$$88_width$$91$$, $height$$84_labelColor$$1$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$33$$)) {
    var $options$$140$$ = $gauge$$33$$.$getOptions$(), $outerGap$$1$$ = $options$$140$$.__layout.outerGap, $size$$31$$ = $options$$140$$ && (0 <= $options$$140$$.size || 1 > $options$$140$$.size) ? window.Math.sqrt($options$$140$$.size) : 1;
    $bounds$$88_width$$91$$ = new D.$DvtRectangle$$($outerGap$$1$$ + ($bounds$$88_width$$91$$ - 2 * $outerGap$$1$$) * (1 - $size$$31$$) / 2, $outerGap$$1$$ + ($height$$84_labelColor$$1$$ - 2 * $outerGap$$1$$) * (1 - $size$$31$$) / 2, ($bounds$$88_width$$91$$ - 2 * $outerGap$$1$$) * $size$$31$$, ($height$$84_labelColor$$1$$ - 2 * $outerGap$$1$$) * $size$$31$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$33$$, $container$$105$$, $bounds$$88_width$$91$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$33$$, $container$$105$$, $bounds$$88_width$$91$$);
    "on" == $options$$140$$.metricLabel.rendered && (D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$140$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$33$$, $container$$105$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$33$$, $bounds$$88_width$$91$$), D.$JSCompiler_alias_NULL$$) : ($height$$84_labelColor$$1$$ = D.$DvtColorUtils$$.$getContrastingTextColor$(D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$33$$)), 
    $options$$140$$.metricLabel.style.$setStyle$("color", $height$$84_labelColor$$1$$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$33$$, $container$$105$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$33$$, $bounds$$88_width$$91$$), $height$$84_labelColor$$1$$)))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$33$$, $container$$105$$, new D.$DvtRectangle$$(0, 0, $bounds$$88_width$$91$$, $height$$84_labelColor$$1$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$34$$, $container$$106$$, $bounds$$89$$) {
  var $context$$373_shape$$56$$ = $gauge$$34$$.$getCtx$(), $options$$141$$ = $gauge$$34$$.$getOptions$(), $type$$229$$ = $options$$141$$.type, $color$$57$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$34$$), $borderColor$$34_eventManager$$18$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$34$$), $arColors$$21_cx$$44_tooltip$$34$$ = $bounds$$89$$.x + $bounds$$89$$.$w$ / 2, $cy$$45_rotation$$2$$ = $bounds$$89$$.y + $bounds$$89$$.$h$ / 2, $r$$36$$ = window.Math.min($bounds$$89$$.$w$, $bounds$$89$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$34$$), $cmds$$17$$, $scale$$25$$ = window.Math.min($bounds$$89$$.$w$ / 100, $bounds$$89$$.$h$ / 100);
  "rectangle" == $type$$229$$ ? $context$$373_shape$$56$$ = new D.$DvtRect$$($context$$373_shape$$56$$, $bounds$$89$$.x, $bounds$$89$$.y, $bounds$$89$$.$w$, $bounds$$89$$.$h$) : "diamond" == $type$$229$$ ? $context$$373_shape$$56$$ = new D.$DvtPolygon$$($context$$373_shape$$56$$, [$arColors$$21_cx$$44_tooltip$$34$$ - $r$$36$$, $cy$$45_rotation$$2$$, $arColors$$21_cx$$44_tooltip$$34$$, $cy$$45_rotation$$2$$ - $r$$36$$, $arColors$$21_cx$$44_tooltip$$34$$ + $r$$36$$, $cy$$45_rotation$$2$$, $arColors$$21_cx$$44_tooltip$$34$$, 
  $cy$$45_rotation$$2$$ + $r$$36$$]) : "star" == $type$$229$$ || "triangle" == $type$$229$$ || "arrow" == $type$$229$$ || "human" == $type$$229$$ ? ("star" == $type$$229$$ ? $cmds$$17$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$229$$ ? $cmds$$17$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$229$$ ? $cmds$$17$$ = 
  $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $type$$229$$ && ($cmds$$17$$ = D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$), $isSkyros$$ && "triangle" == $type$$229$$ || $isSkyros$$ && "arrow" == $type$$229$$ || "human" == $type$$229$$ ? ($cmds$$17$$ = D.$DvtPathUtils$$.$transformPath$($cmds$$17$$, $bounds$$89$$.x + $bounds$$89$$.$w$ / 2, $bounds$$89$$.y + $bounds$$89$$.$h$ / 2, $scale$$25$$, $scale$$25$$), $context$$373_shape$$56$$ = 
  new D.$DvtPath$$($context$$373_shape$$56$$, $cmds$$17$$)) : ($cmds$$17$$ = D.$DvtPolygonUtils$$.scale($cmds$$17$$, $scale$$25$$, $scale$$25$$), $cmds$$17$$ = D.$DvtPolygonUtils$$.translate($cmds$$17$$, $bounds$$89$$.x + $bounds$$89$$.$w$ / 2, $bounds$$89$$.y + $bounds$$89$$.$h$ / 2), $context$$373_shape$$56$$ = new D.$DvtPolygon$$($context$$373_shape$$56$$, $cmds$$17$$))) : $context$$373_shape$$56$$ = new D.$DvtCircle$$($context$$373_shape$$56$$, $arColors$$21_cx$$44_tooltip$$34$$, $cy$$45_rotation$$2$$, 
  $r$$36$$);
  $isSkyros$$ || "none" == $options$$141$$.visualEffects ? $context$$373_shape$$56$$.$setSolidFill$($color$$57$$) : ($arColors$$21_cx$$44_tooltip$$34$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$57$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$57$$, -0.04, -0.05)], $cy$$45_rotation$$2$$ = $options$$141$$ && 0 == $options$$141$$.rotation % 90 ? $options$$141$$.rotation : 0, $context$$373_shape$$56$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == $type$$229$$ || "star" == $type$$229$$ || 
  "triangle" == $type$$229$$ ? $cy$$45_rotation$$2$$ - 90 : 270, $arColors$$21_cx$$44_tooltip$$34$$, [1, 1], [0, 1])));
  $borderColor$$34_eventManager$$18$$ && $context$$373_shape$$56$$.$setSolidStroke$($borderColor$$34_eventManager$$18$$);
  $borderColor$$34_eventManager$$18$$ = $gauge$$34$$.$__getEventManager$();
  ($arColors$$21_cx$$44_tooltip$$34$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$34$$)) && $borderColor$$34_eventManager$$18$$ && $borderColor$$34_eventManager$$18$$.$associate$($context$$373_shape$$56$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $arColors$$21_cx$$44_tooltip$$34$$, $color$$57$$));
  $cy$$45_rotation$$2$$ = $isSkyros$$ ? $options$$141$$.rotation + 90 : $options$$141$$.rotation;
  if(0 != $cy$$45_rotation$$2$$ && ("arrow" == $type$$229$$ || "triangle" == $type$$229$$)) {
    $context$$373_shape$$56$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$34$$, $container$$106$$, $context$$373_shape$$56$$, $bounds$$89$$)
  }
  $container$$106$$.$addChild$($context$$373_shape$$56$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$35_translateGroup$$, $container$$107_groupDims_matrix$$16_rotation$$3$$, $shape$$57_tx$$24$$, $bounds$$90_ty$$25$$) {
  var $options$$142_rotationMatrix$$2$$ = $gauge$$35_translateGroup$$.$getOptions$();
  $gauge$$35_translateGroup$$ = new D.$DvtContainer$$($gauge$$35_translateGroup$$.$getCtx$());
  $container$$107_groupDims_matrix$$16_rotation$$3$$.$addChild$($gauge$$35_translateGroup$$);
  $gauge$$35_translateGroup$$.$addChild$($shape$$57_tx$$24$$);
  $container$$107_groupDims_matrix$$16_rotation$$3$$ = $options$$142_rotationMatrix$$2$$ && 0 == $options$$142_rotationMatrix$$2$$.rotation % 90 ? $options$$142_rotationMatrix$$2$$.rotation : 0;
  $options$$142_rotationMatrix$$2$$ = new D.$DvtMatrix$$;
  $options$$142_rotationMatrix$$2$$.rotate(window.Math.PI * $container$$107_groupDims_matrix$$16_rotation$$3$$ / 180);
  $shape$$57_tx$$24$$.$setMatrix$($options$$142_rotationMatrix$$2$$);
  $container$$107_groupDims_matrix$$16_rotation$$3$$ = $gauge$$35_translateGroup$$.$getDimensions$();
  $shape$$57_tx$$24$$ = $bounds$$90_ty$$25$$.x + $bounds$$90_ty$$25$$.$w$ / 2 - ($container$$107_groupDims_matrix$$16_rotation$$3$$.x + $container$$107_groupDims_matrix$$16_rotation$$3$$.$w$ / 2);
  $bounds$$90_ty$$25$$ = $bounds$$90_ty$$25$$.y + $bounds$$90_ty$$25$$.$h$ / 2 - ($container$$107_groupDims_matrix$$16_rotation$$3$$.y + $container$$107_groupDims_matrix$$16_rotation$$3$$.$h$ / 2);
  $container$$107_groupDims_matrix$$16_rotation$$3$$ = new D.$DvtMatrix$$;
  $container$$107_groupDims_matrix$$16_rotation$$3$$.translate($shape$$57_tx$$24$$, $bounds$$90_ty$$25$$);
  $gauge$$35_translateGroup$$.$setMatrix$($container$$107_groupDims_matrix$$16_rotation$$3$$);
  return $gauge$$35_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$36$$, $container$$108$$, $bounds$$91$$) {
  var $options$$143$$ = $gauge$$36$$.$getOptions$(), $type$$230$$ = $options$$143$$.type;
  "none" != $options$$143$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$36$$) && ("rectangle" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$36$$, $container$$108$$, $bounds$$91$$) : "diamond" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$36$$, $container$$108$$, $bounds$$91$$) : "triangle" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$36$$, $container$$108$$, $bounds$$91$$) : "star" == $type$$230$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$36$$, $container$$108$$) : "arrow" == $type$$230$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$36$$, $container$$108$$, $bounds$$91$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$36$$, $container$$108$$, $bounds$$91$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$37_overlay$$9$$, $container$$109_gradient$$7$$, $bounds$$92_overlayBounds$$1$$) {
  var $dx$$20$$ = 0.05 * $bounds$$92_overlayBounds$$1$$.$w$, $dy$$23$$ = 0.05 * $bounds$$92_overlayBounds$$1$$.$h$;
  $bounds$$92_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$92_overlayBounds$$1$$.x + $dx$$20$$, $bounds$$92_overlayBounds$$1$$.y + $dy$$23$$, $bounds$$92_overlayBounds$$1$$.$w$ - 2 * $dx$$20$$, $bounds$$92_overlayBounds$$1$$.$h$ - 2 * $dy$$23$$);
  $gauge$$37_overlay$$9$$ = new D.$DvtRect$$($gauge$$37_overlay$$9$$.$getCtx$(), $bounds$$92_overlayBounds$$1$$.x, $bounds$$92_overlayBounds$$1$$.y, $bounds$$92_overlayBounds$$1$$.$w$, $bounds$$92_overlayBounds$$1$$.$h$);
  $gauge$$37_overlay$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$109_gradient$$7$$.$addChild$($gauge$$37_overlay$$9$$);
  $container$$109_gradient$$7$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$37_overlay$$9$$.$setFill$($container$$109_gradient$$7$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$38_overlay$$10$$, $container$$110_gradient$$8$$, $bounds$$93_cx$$45$$) {
  var $cy$$46_dx$$21$$ = 0.05 * $bounds$$93_cx$$45$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$ = 0.05 * $bounds$$93_cx$$45$$.$h$, $dy$$24_overlayBounds$$2_r$$37$$ = new D.$DvtRectangle$$($bounds$$93_cx$$45$$.x + $cy$$46_dx$$21$$, $bounds$$93_cx$$45$$.y + $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$93_cx$$45$$.$w$ - 2 * $cy$$46_dx$$21$$, $bounds$$93_cx$$45$$.$h$ - 2 * $dy$$24_overlayBounds$$2_r$$37$$);
  $bounds$$93_cx$$45$$ = $dy$$24_overlayBounds$$2_r$$37$$.x + $dy$$24_overlayBounds$$2_r$$37$$.$w$ / 2;
  $cy$$46_dx$$21$$ = $dy$$24_overlayBounds$$2_r$$37$$.y + $dy$$24_overlayBounds$$2_r$$37$$.$h$ / 2;
  $dy$$24_overlayBounds$$2_r$$37$$ = window.Math.min($dy$$24_overlayBounds$$2_r$$37$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$.$h$) / 2;
  $gauge$$38_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$38_overlay$$10$$.$getCtx$(), [$bounds$$93_cx$$45$$ - $dy$$24_overlayBounds$$2_r$$37$$, $cy$$46_dx$$21$$, $bounds$$93_cx$$45$$, $cy$$46_dx$$21$$ - $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$93_cx$$45$$ + $dy$$24_overlayBounds$$2_r$$37$$, $cy$$46_dx$$21$$, $bounds$$93_cx$$45$$, $cy$$46_dx$$21$$ + $dy$$24_overlayBounds$$2_r$$37$$]);
  $gauge$$38_overlay$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$110_gradient$$8$$.$addChild$($gauge$$38_overlay$$10$$);
  $container$$110_gradient$$8$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$38_overlay$$10$$.$setFill$($container$$110_gradient$$8$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$39$$, $container$$111$$, $bounds$$94_overlay$$11$$) {
  var $dx$$22_overlayBounds$$3$$ = 0.05 * $bounds$$94_overlay$$11$$.$w$, $cmds$$18_dy$$25_options$$144_rotation$$4$$ = 0.05 * $bounds$$94_overlay$$11$$.$h$, $gradient$$9_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$39$$), $dx$$22_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$94_overlay$$11$$.x + $dx$$22_overlayBounds$$3$$, $bounds$$94_overlay$$11$$.y + $cmds$$18_dy$$25_options$$144_rotation$$4$$, $bounds$$94_overlay$$11$$.$w$ - 2 * $dx$$22_overlayBounds$$3$$, $bounds$$94_overlay$$11$$.$h$ - 
  2 * $cmds$$18_dy$$25_options$$144_rotation$$4$$), $cmds$$18_dy$$25_options$$144_rotation$$4$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$26$$ = window.Math.min($dx$$22_overlayBounds$$3$$.$w$ / 100, $dx$$22_overlayBounds$$3$$.$h$ / 100), $cmds$$18_dy$$25_options$$144_rotation$$4$$ = D.$DvtPolygonUtils$$.scale($cmds$$18_dy$$25_options$$144_rotation$$4$$, $scale$$26$$, $scale$$26$$), $cmds$$18_dy$$25_options$$144_rotation$$4$$ = D.$DvtPolygonUtils$$.translate($cmds$$18_dy$$25_options$$144_rotation$$4$$, 
  $bounds$$94_overlay$$11$$.x + $bounds$$94_overlay$$11$$.$w$ / 2, $bounds$$94_overlay$$11$$.y + $bounds$$94_overlay$$11$$.$h$ / 2);
  $bounds$$94_overlay$$11$$ = new D.$DvtPolygon$$($gauge$$39$$.$getCtx$(), $cmds$$18_dy$$25_options$$144_rotation$$4$$);
  $cmds$$18_dy$$25_options$$144_rotation$$4$$ = ($cmds$$18_dy$$25_options$$144_rotation$$4$$ = $gauge$$39$$.$getOptions$()) && 0 == $cmds$$18_dy$$25_options$$144_rotation$$4$$.rotation % 90 ? $cmds$$18_dy$$25_options$$144_rotation$$4$$.rotation : 0;
  $gradient$$9_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$9_isSkyros$$1$$ ? $cmds$$18_dy$$25_options$$144_rotation$$4$$ - 90 : 360 - $cmds$$18_dy$$25_options$$144_rotation$$4$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$94_overlay$$11$$.$setFill$($gradient$$9_isSkyros$$1$$);
  $bounds$$94_overlay$$11$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$39$$, $container$$111$$, $bounds$$94_overlay$$11$$, $dx$$22_overlayBounds$$3$$);
  $bounds$$94_overlay$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$111$$.$addChild$($bounds$$94_overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$40$$, $container$$112$$, $bounds$$95_overlay$$12$$) {
  var $dx$$23_overlayBounds$$4$$ = 0.05 * $bounds$$95_overlay$$12$$.$w$, $cmds$$19_dy$$26_options$$145_rotation$$5$$ = 0.05 * $bounds$$95_overlay$$12$$.$h$, $gradient$$10_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$40$$), $dx$$23_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$95_overlay$$12$$.x + $dx$$23_overlayBounds$$4$$, $bounds$$95_overlay$$12$$.y + $cmds$$19_dy$$26_options$$145_rotation$$5$$, $bounds$$95_overlay$$12$$.$w$ - 2 * $dx$$23_overlayBounds$$4$$, $bounds$$95_overlay$$12$$.$h$ - 
  2 * $cmds$$19_dy$$26_options$$145_rotation$$5$$), $cmds$$19_dy$$26_options$$145_rotation$$5$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$27$$ = window.Math.min($dx$$23_overlayBounds$$4$$.$w$ / 100, $dx$$23_overlayBounds$$4$$.$h$ / 100), $cmds$$19_dy$$26_options$$145_rotation$$5$$ = D.$DvtPolygonUtils$$.scale($cmds$$19_dy$$26_options$$145_rotation$$5$$, $scale$$27$$, $scale$$27$$), $cmds$$19_dy$$26_options$$145_rotation$$5$$ = D.$DvtPolygonUtils$$.translate($cmds$$19_dy$$26_options$$145_rotation$$5$$, 
  $bounds$$95_overlay$$12$$.x + $bounds$$95_overlay$$12$$.$w$ / 2, $bounds$$95_overlay$$12$$.y + $bounds$$95_overlay$$12$$.$h$ / 2);
  $bounds$$95_overlay$$12$$ = new D.$DvtPolygon$$($gauge$$40$$.$getCtx$(), $cmds$$19_dy$$26_options$$145_rotation$$5$$);
  $cmds$$19_dy$$26_options$$145_rotation$$5$$ = ($cmds$$19_dy$$26_options$$145_rotation$$5$$ = $gauge$$40$$.$getOptions$()) && 0 == $cmds$$19_dy$$26_options$$145_rotation$$5$$.rotation % 90 ? $cmds$$19_dy$$26_options$$145_rotation$$5$$.rotation : 0;
  $gradient$$10_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$10_isSkyros$$2$$ ? $cmds$$19_dy$$26_options$$145_rotation$$5$$ - 90 : 360 - $cmds$$19_dy$$26_options$$145_rotation$$5$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$95_overlay$$12$$.$setFill$($gradient$$10_isSkyros$$2$$);
  $bounds$$95_overlay$$12$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$40$$, $container$$112$$, $bounds$$95_overlay$$12$$, $dx$$23_overlayBounds$$4$$);
  $bounds$$95_overlay$$12$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$112$$.$addChild$($bounds$$95_overlay$$12$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$41$$, $container$$113$$) {
  var $overlay$$13$$ = new D.$DvtPath$$($gauge$$41$$.$getCtx$(), D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $gradient$$11_gradientRotation$$3_options$$146$$ = $gauge$$41$$.$getOptions$(), $gradient$$11_gradientRotation$$3_options$$146$$ = 360 - ($gradient$$11_gradientRotation$$3_options$$146$$ && 0 == $gradient$$11_gradientRotation$$3_options$$146$$.rotation % 90 ? $gradient$$11_gradientRotation$$3_options$$146$$.rotation : 0), $arColors$$26_color$$58$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$41$$), 
  $arColors$$26_color$$58$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$26_color$$58$$, 0.9), $arColors$$26_color$$58$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$26_color$$58$$)], $gradient$$11_gradientRotation$$3_options$$146$$ = new D.$DvtLinearGradientFill$$($gradient$$11_gradientRotation$$3_options$$146$$, $arColors$$26_color$$58$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $overlay$$13$$.$setFill$($gradient$$11_gradientRotation$$3_options$$146$$);
  $overlay$$13$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$113$$.$addChild$($overlay$$13$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$42_highlight$$, $container$$114_highlightGradient$$, $bounds$$97_gradientBounds$$) {
  var $cx$$46_dx$$24$$ = 0.05 * $bounds$$97_gradientBounds$$.$w$, $cy$$47_dy$$27$$ = 0.05 * $bounds$$97_gradientBounds$$.$h$;
  $bounds$$97_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$97_gradientBounds$$.x + $cx$$46_dx$$24$$, $bounds$$97_gradientBounds$$.y + $cy$$47_dy$$27$$, $bounds$$97_gradientBounds$$.$w$ - 2 * $cx$$46_dx$$24$$, $bounds$$97_gradientBounds$$.$h$ - 2 * $cy$$47_dy$$27$$);
  var $cx$$46_dx$$24$$ = $bounds$$97_gradientBounds$$.x + $bounds$$97_gradientBounds$$.$w$ / 2, $cy$$47_dy$$27$$ = $bounds$$97_gradientBounds$$.y + $bounds$$97_gradientBounds$$.$h$ / 2, $radius$$18_ry$$24$$ = window.Math.min($bounds$$97_gradientBounds$$.$w$, $bounds$$97_gradientBounds$$.$h$) / 2, $overlay$$14_rx$$28$$ = new D.$DvtCircle$$($gauge$$42_highlight$$.$getCtx$(), $cx$$46_dx$$24$$, $cy$$47_dy$$27$$, $radius$$18_ry$$24$$);
  $overlay$$14_rx$$28$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$114_highlightGradient$$.$addChild$($overlay$$14_rx$$28$$);
  var $gradient$$12$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$46_dx$$24$$, $cy$$47_dy$$27$$ - 0.6 * $radius$$18_ry$$24$$, 1.5 * $radius$$18_ry$$24$$, [$bounds$$97_gradientBounds$$.x, $bounds$$97_gradientBounds$$.y, $bounds$$97_gradientBounds$$.$w$, $bounds$$97_gradientBounds$$.$h$]);
  $overlay$$14_rx$$28$$.$setFill$($gradient$$12$$);
  $overlay$$14_rx$$28$$ = 0.6 * $radius$$18_ry$$24$$;
  $radius$$18_ry$$24$$ *= 0.4;
  $cy$$47_dy$$27$$ -= 0.3 * $radius$$18_ry$$24$$;
  $gauge$$42_highlight$$ = new D.$DvtOval$$($gauge$$42_highlight$$.$getCtx$(), $cx$$46_dx$$24$$, $cy$$47_dy$$27$$ - $radius$$18_ry$$24$$, $overlay$$14_rx$$28$$, $radius$$18_ry$$24$$);
  $gauge$$42_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$114_highlightGradient$$.$addChild$($gauge$$42_highlight$$);
  $container$$114_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$46_dx$$24$$, $cy$$47_dy$$27$$, $overlay$$14_rx$$28$$, [$bounds$$97_gradientBounds$$.x, $bounds$$97_gradientBounds$$.y, $bounds$$97_gradientBounds$$.$w$, $bounds$$97_gradientBounds$$.$h$]);
  $gauge$$42_highlight$$.$setFill$($container$$114_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$43$$, $bounds$$98$$) {
  var $options$$147_rotation$$7$$ = $gauge$$43$$.$getOptions$(), $type$$231$$ = $options$$147_rotation$$7$$.type, $options$$147_rotation$$7$$ = 0 == $options$$147_rotation$$7$$.rotation % 90 ? $options$$147_rotation$$7$$.rotation : 0, $minDim$$ = window.Math.min($bounds$$98$$.$w$, $bounds$$98$$.$h$), $newX$$6$$ = $bounds$$98$$.x + $bounds$$98$$.$w$ / 2 - $minDim$$ / 2, $newY$$7$$ = $bounds$$98$$.y + $bounds$$98$$.$h$ / 2 - $minDim$$ / 2, $newWidth$$3$$ = $minDim$$, $newHeight$$2$$ = $minDim$$;
  if("triangle" == $type$$231$$) {
    0 == $options$$147_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.25 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$) : 90 == $options$$147_rotation$$7$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 180 == $options$$147_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.05 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 
    0.3 * $minDim$$) : 270 == $options$$147_rotation$$7$$ && ($newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$)
  }else {
    if("arrow" == $type$$231$$) {
      0 == $options$$147_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 90 == $options$$147_rotation$$7$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.28 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 180 == $options$$147_rotation$$7$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 
      0.4 * $minDim$$) : 270 == $options$$147_rotation$$7$$ && ($newX$$6$$ += 0.23 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.28 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$)
    }else {
      if("star" == $type$$231$$) {
        $newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 0.25 * $minDim$$, $newWidth$$3$$ -= 0.5 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$
      }else {
        if("diamond" == $type$$231$$) {
          $newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$
        }else {
          if("rectangle" == $type$$231$$) {
            $newX$$6$$ += 0.1 * $minDim$$, $newY$$7$$ += 0.1 * $minDim$$, $newWidth$$3$$ -= 0.2 * $minDim$$, $newHeight$$2$$ -= 0.2 * $minDim$$
          }else {
            if("circle" == $type$$231$$ || "human" == $type$$231$$) {
              $newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$
            }
          }
        }
      }
    }
  }
  return new D.$DvtRectangle$$($newX$$6$$, $newY$$7$$, $newWidth$$3$$, $newHeight$$2$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$$.newInstance = function $$DvtStatusMeterGauge$$$newInstance$($context$$376$$, $callback$$108$$, $callbackObj$$63$$) {
  var $gauge$$48$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$48$$.Init($context$$376$$, $callback$$108$$, $callbackObj$$63$$);
  return $gauge$$48$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$377$$, $callback$$109$$, $callbackObj$$64$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$377$$, $callback$$109$$, $callbackObj$$64$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$151$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$151$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$119$$, $width$$94$$, $height$$87$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$119$$, $width$$94$$, $height$$87$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$60$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$7$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$608$$ = 0;$i$$608$$ < $objs$$60$$.length;$i$$608$$++) {
    var $obj$$289$$ = $objs$$60$$[$i$$608$$], $endState$$15$$ = $obj$$289$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$289$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[0], $endState$$15$$[2], $endState$$15$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$289$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], $endState$$15$$[3], $endState$$15$$[3]]) : "circular" == this.$Options$.orientation && $obj$$289$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], 0, $endState$$15$$[3], $endState$$15$$[4]]);
    var $animation$$3$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$289$$, $animationDuration$$7$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$3$$.$_animator$, "typeNumberArray", $obj$$289$$, $obj$$289$$.$getAnimationParams$, $obj$$289$$.$setAnimationParams$, $endState$$15$$);
    $animation$$3$$.$_animator$.$setEasing$(function($objs$$60$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$60$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$3$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$204$$, $y$$179$$) {
  var $maxValue$$14_options$$152$$ = this.$Options$, $angle$$42_isRTL$$22$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$());
  if("horizontal" == $maxValue$$14_options$$152$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$204$$)
  }
  if("vertical" == $maxValue$$14_options$$152$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$179$$)
  }
  if("circular" == $maxValue$$14_options$$152$$.orientation) {
    var $angleExtent$$9$$ = $maxValue$$14_options$$152$$.angleExtent, $angleRads$$11_minValue$$13_value$$173$$ = window.Math.atan2($y$$179$$ - this.$cy$, $x$$204$$ - this.$cx$), $angle$$42_isRTL$$22$$ = $angle$$42_isRTL$$22$$ ? 180 - (D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$173$$) - $maxValue$$14_options$$152$$.startAngle) : D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$173$$) - (360 - $maxValue$$14_options$$152$$.startAngle), $angle$$42_isRTL$$22$$ = ($angle$$42_isRTL$$22$$ + 
    720) % 360, $angleRads$$11_minValue$$13_value$$173$$ = $maxValue$$14_options$$152$$.min, $maxValue$$14_options$$152$$ = $maxValue$$14_options$$152$$.max, $angleRads$$11_minValue$$13_value$$173$$ = $angle$$42_isRTL$$22$$ / $angleExtent$$9$$ * ($maxValue$$14_options$$152$$ - $angleRads$$11_minValue$$13_value$$173$$) + $angleRads$$11_minValue$$13_value$$173$$;
    $angle$$42_isRTL$$22$$ > $angleExtent$$9$$ && ($angleRads$$11_minValue$$13_value$$173$$ = 0.5 < ($angle$$42_isRTL$$22$$ - $angleExtent$$9$$) / (360 - $angleExtent$$9$$) ? 0 : $maxValue$$14_options$$152$$);
    return $angleRads$$11_minValue$$13_value$$173$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#f5f6f7", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {angleExtent:360, color:"#313842", indicatorSize:1, innerRadius:0.7, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; color: #333333;")}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$51$$, $container$$120$$, $bounds$$103_width$$96$$, $height$$89$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$51$$)) {
    var $options$$153$$ = $gauge$$51$$.$getOptions$(), $outerGap$$4$$ = $options$$153$$.__layout.outerGap;
    $bounds$$103_width$$96$$ = new D.$DvtRectangle$$($outerGap$$4$$, $outerGap$$4$$, $bounds$$103_width$$96$$ - 2 * $outerGap$$4$$, $height$$89$$ - 2 * $outerGap$$4$$);
    "horizontal" == $options$$153$$.orientation || "vertical" == $options$$153$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$($gauge$$51$$, $container$$120$$, $bounds$$103_width$$96$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$51$$, $container$$120$$, $bounds$$103_width$$96$$)) : "circular" == $options$$153$$.orientation && D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($gauge$$51$$, $container$$120$$, $bounds$$103_width$$96$$)
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$51$$, $container$$120$$, new D.$DvtRectangle$$(0, 0, $bounds$$103_width$$96$$, $height$$89$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($gauge$$52$$, $container$$121_tooltip$$36$$, $bounds$$104_overlayRect$$1$$) {
  var $options$$154$$ = $gauge$$52$$.$getOptions$(), $innerRadiusLength_isRTL$$23_referenceLineWidth$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$52$$.$getCtx$()), $angleExtent$$13_max$$19_percentFill$$1$$ = 0, $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ = D.$JSCompiler_alias_NULL$$, $angle$$43_value$$174$$ = $options$$154$$.value, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = $options$$154$$.innerRadius, $i$$609_thresholds$$3$$ = $options$$154$$.thresholds, $maxDiameter_referenceLineColor$$ = 
  D.$JSCompiler_alias_NULL$$, $startAngleRads$$1$$ = D.$DvtMath$$.$TWO_PI$ - D.$DvtMath$$.$degreesToRads$($options$$154$$.startAngle), $angleExtentRads$$2$$ = D.$DvtMath$$.$degreesToRads$($options$$154$$.angleExtent), $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = ($startAngleRads$$1$$ + $angleExtentRads$$2$$) % (2 * window.Math.PI);
  $gauge$$52$$.$cx$ = $bounds$$104_overlayRect$$1$$.$w$ / 2;
  $gauge$$52$$.$cy$ = $bounds$$104_overlayRect$$1$$.$h$ / 2;
  $angleExtentRads$$2$$ != 2 * window.Math.PI && ($labelBounds$$8_maxInnerDiameter_startAngle$$15$$ = D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($gauge$$52$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $bounds$$104_overlayRect$$1$$, $innerRadiusLength_isRTL$$23_referenceLineWidth$$));
  var $maxDiameter_referenceLineColor$$ = $maxDiameter_referenceLineColor$$ ? $maxDiameter_referenceLineColor$$ : window.Math.min($bounds$$104_overlayRect$$1$$.$w$, $bounds$$104_overlayRect$$1$$.$h$), $innerRadiusLength_isRTL$$23_referenceLineWidth$$ = 0.5 * $maxDiameter_referenceLineColor$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 0.5 * $maxDiameter_referenceLineColor$$, $indicatorSize$$ = $options$$154$$.indicatorSize;
  if($indicatorSize$$ && 1 < $indicatorSize$$) {
    var $currentThresholdIndex_spaceWidth$$ = (1 - 1 / $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$23_referenceLineWidth$$), $innerRadiusLength_isRTL$$23_referenceLineWidth$$ = $innerRadiusLength_isRTL$$23_referenceLineWidth$$ + $currentThresholdIndex_spaceWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = $endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $currentThresholdIndex_spaceWidth$$
  }
  $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ || ($labelBounds$$8_maxInnerDiameter_startAngle$$15$$ = window.Math.min($bounds$$104_overlayRect$$1$$.$w$, $bounds$$104_overlayRect$$1$$.$h$) * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ * window.Math.min($bounds$$104_overlayRect$$1$$.$w$, $bounds$$104_overlayRect$$1$$.$h$) : window.Math.min($bounds$$104_overlayRect$$1$$.$w$, $bounds$$104_overlayRect$$1$$.$h$), 
  $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ = new D.$DvtRectangle$$($bounds$$104_overlayRect$$1$$.x + $bounds$$104_overlayRect$$1$$.$w$ / 2 - $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ * (3 / 7), $bounds$$104_overlayRect$$1$$.y + $bounds$$104_overlayRect$$1$$.$h$ / 2 - $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ * (2.5 / 7), $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ * (6 / 7), $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ * (5 / 7)));
  D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$52$$, $container$$121_tooltip$$36$$, $labelBounds$$8_maxInnerDiameter_startAngle$$15$$, D.$JSCompiler_alias_NULL$$);
  $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ = $startAngleRads$$1$$;
  $angleExtent$$13_max$$19_percentFill$$1$$ *= $angleExtentRads$$2$$;
  if($i$$609_thresholds$$3$$ && "off" != $options$$154$$.plotArea.rendered && "all" == $options$$154$$.thresholdDisplay) {
    for($currentThresholdIndex_spaceWidth$$ = 0;$currentThresholdIndex_spaceWidth$$ < $i$$609_thresholds$$3$$.length;$currentThresholdIndex_spaceWidth$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$52$$, $i$$609_thresholds$$3$$[$currentThresholdIndex_spaceWidth$$], $currentThresholdIndex_spaceWidth$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $i$$609_thresholds$$3$$[$currentThresholdIndex_spaceWidth$$].max < $options$$154$$.max ? $i$$609_thresholds$$3$$[$currentThresholdIndex_spaceWidth$$].max : $options$$154$$.max, $min$$18$$ = 0 == $currentThresholdIndex_spaceWidth$$ ? $options$$154$$.min : $i$$609_thresholds$$3$$[$currentThresholdIndex_spaceWidth$$ - 
      1].max, $labelBounds$$8_maxInnerDiameter_startAngle$$15$$ = $startAngleRads$$1$$ + $angleExtentRads$$2$$ * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$154$$, $options$$154$$.min, $min$$18$$), $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$154$$, $min$$18$$, $angleExtent$$13_max$$19_percentFill$$1$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$52$$, $container$$121_tooltip$$36$$, $bounds$$104_overlayRect$$1$$, $labelBounds$$8_maxInnerDiameter_startAngle$$15$$, $angleExtent$$13_max$$19_percentFill$$1$$, $innerRadiusLength_isRTL$$23_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    "off" != $options$$154$$.plotArea.rendered && (!("auto" == $options$$154$$.plotArea.rendered && "onIndicator" == $options$$154$$.thresholdDisplay) && "all" != $options$$154$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$52$$), D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$52$$, $container$$121_tooltip$$36$$, $bounds$$104_overlayRect$$1$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$23_referenceLineWidth$$, 
    $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  $innerRadiusLength_isRTL$$23_referenceLineWidth$$ = 0.5 * $maxDiameter_referenceLineColor$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$;
  $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 0.5 * $maxDiameter_referenceLineColor$$;
  $indicatorSize$$ && 1 > $indicatorSize$$ && ($innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = (1 - $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$23_referenceLineWidth$$), $innerRadiusLength_isRTL$$23_referenceLineWidth$$ += $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ -= $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$);
  $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$154$$, $options$$154$$.min, $angle$$43_value$$174$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$52$$, $container$$121_tooltip$$36$$, $bounds$$104_overlayRect$$1$$, $startAngleRads$$1$$, $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$23_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$52$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = $options$$154$$.referenceLines) {
    for($i$$609_thresholds$$3$$ = 0;$i$$609_thresholds$$3$$ < $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$.length;$i$$609_thresholds$$3$$++) {
      $maxDiameter_referenceLineColor$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$609_thresholds$$3$$].color ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$609_thresholds$$3$$].color : "black", $innerRadiusLength_isRTL$$23_referenceLineWidth$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$609_thresholds$$3$$].lineWidth ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$609_thresholds$$3$$].lineWidth : 2, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 
      $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$609_thresholds$$3$$].lineStyle, $angle$$43_value$$174$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$609_thresholds$$3$$].value, $angle$$43_value$$174$$ = $startAngleRads$$1$$ + D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$154$$, $options$$154$$.min, $angle$$43_value$$174$$) * $angleExtentRads$$2$$, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$52$$, $container$$121_tooltip$$36$$, $bounds$$104_overlayRect$$1$$, 
      $angle$$43_value$$174$$, $maxDiameter_referenceLineColor$$, $innerRadiusLength_isRTL$$23_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$)
    }
  }
  $bounds$$104_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$52$$.$getCtx$(), $bounds$$104_overlayRect$$1$$.x, $bounds$$104_overlayRect$$1$$.y, $bounds$$104_overlayRect$$1$$.$w$, $bounds$$104_overlayRect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$104_overlayRect$$1$$);
  $container$$121_tooltip$$36$$.$addChild$($bounds$$104_overlayRect$$1$$);
  (($container$$121_tooltip$$36$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$52$$)) || $gauge$$52$$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$52$$.$__getEventManager$().$associate$($bounds$$104_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$121_tooltip$$36$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$52$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$53$$, $container$$122_tooltip$$37$$, $axisArea_bounds$$105$$) {
  var $options$$155$$ = $gauge$$53$$.$getOptions$(), $color$$59_isRTL$$24$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$53$$.$getCtx$()), $isVert$$9$$ = "vertical" == $options$$155$$.orientation, $axisInfo$$14_axisOptions$$16$$ = {layout:{}};
  $axisInfo$$14_axisOptions$$16$$.layout.gapRatio = 0;
  $axisInfo$$14_axisOptions$$16$$.timeAxisType = "disabled";
  $axisInfo$$14_axisOptions$$16$$.position = $isVert$$9$$ ? "left" : "bottom";
  $axisInfo$$14_axisOptions$$16$$.min = $options$$155$$.min;
  $axisInfo$$14_axisOptions$$16$$.max = $options$$155$$.max;
  $axisInfo$$14_axisOptions$$16$$.dataMin = $options$$155$$.min;
  $axisInfo$$14_axisOptions$$16$$.dataMax = $options$$155$$.max;
  $axisInfo$$14_axisOptions$$16$$.tickLabel = {rendered:"off"};
  $axisInfo$$14_axisOptions$$16$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$53$$.$getCtx$(), $axisInfo$$14_axisOptions$$16$$, $axisArea_bounds$$105$$);
  $gauge$$53$$.$__axisInfo$ = $axisInfo$$14_axisOptions$$16$$;
  var $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = 0;
  0 >= $options$$155$$.max ? $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = $options$$155$$.max : 0 <= $options$$155$$.min && ($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = $options$$155$$.min);
  $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = $axisInfo$$14_axisOptions$$16$$.$getCoordAt$($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$);
  "off" != $options$$155$$.plotArea.rendered && !("auto" == $options$$155$$.plotArea.rendered && "onIndicator" == $options$$155$$.thresholdDisplay) && ($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.min));
  var $endCoord$$8_gradientAngle$$1_value$$175$$ = $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.value), $endCoord$$8_gradientAngle$$1_value$$175$$ = $isVert$$9$$ ? window.Math.max($axisArea_bounds$$105$$.y, window.Math.min($axisArea_bounds$$105$$.y + $axisArea_bounds$$105$$.$h$, $endCoord$$8_gradientAngle$$1_value$$175$$)) : window.Math.max($axisArea_bounds$$105$$.x, window.Math.min($axisArea_bounds$$105$$.x + $axisArea_bounds$$105$$.$w$, $endCoord$$8_gradientAngle$$1_value$$175$$)), 
  $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = $options$$155$$.indicatorSize, $indicatorX2_referenceObjects$$2$$, $indicatorY1_refColor_shadow$$7_stroke$$73$$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$, $arColors$$28_gradient$$13_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$ = 0, $bRender_drawnPlotSize_referenceLineSize$$ = 1 > $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ ? 1 : $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$;
  $drawnIndicatorSize_indicatorY2_xCoord$$12$$ = 1 < $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ ? 1 : $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$;
  $isVert$$9$$ ? ($indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = $axisArea_bounds$$105$$.x + (1 - $drawnIndicatorSize_indicatorY2_xCoord$$12$$) / 2 * $axisArea_bounds$$105$$.$w$ + 0.5, $indicatorX2_referenceObjects$$2$$ = $axisArea_bounds$$105$$.x + $axisArea_bounds$$105$$.$w$ * (1 + $drawnIndicatorSize_indicatorY2_xCoord$$12$$) / 2 - 0.5, $drawnIndicatorSize_indicatorY2_xCoord$$12$$ = $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ - 0.5, $indicatorY1_refColor_shadow$$7_stroke$$73$$ = 
  $endCoord$$8_gradientAngle$$1_value$$175$$ + 0.5, $arColors$$28_gradient$$13_plotX1$$ = $axisArea_bounds$$105$$.x + (1 - 1 / $bRender_drawnPlotSize_referenceLineSize$$) / 2 * $axisArea_bounds$$105$$.$w$, $plotX2$$ = $axisArea_bounds$$105$$.x + $axisArea_bounds$$105$$.$w$ * (1 + 1 / $bRender_drawnPlotSize_referenceLineSize$$) / 2, $plotY1$$ = $axisArea_bounds$$105$$.y, $plotY2$$ = $axisArea_bounds$$105$$.y + $axisArea_bounds$$105$$.$h$) : ($indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = 
  $color$$59_isRTL$$24$$ ? $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ - 0.5 : $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ + 0.5, $indicatorX2_referenceObjects$$2$$ = $color$$59_isRTL$$24$$ ? $endCoord$$8_gradientAngle$$1_value$$175$$ + 0.5 : $endCoord$$8_gradientAngle$$1_value$$175$$ - 0.5, $indicatorY1_refColor_shadow$$7_stroke$$73$$ = $axisArea_bounds$$105$$.y + (1 - $drawnIndicatorSize_indicatorY2_xCoord$$12$$) / 2 * $axisArea_bounds$$105$$.$h$ + 
  0.5, $drawnIndicatorSize_indicatorY2_xCoord$$12$$ = $axisArea_bounds$$105$$.y + $axisArea_bounds$$105$$.$h$ * (1 + $drawnIndicatorSize_indicatorY2_xCoord$$12$$) / 2 - 0.5, $arColors$$28_gradient$$13_plotX1$$ = $axisArea_bounds$$105$$.x, $plotX2$$ = $axisArea_bounds$$105$$.x + $axisArea_bounds$$105$$.$w$, $plotY1$$ = $axisArea_bounds$$105$$.y + (1 - 1 / $bRender_drawnPlotSize_referenceLineSize$$) / 2 * $axisArea_bounds$$105$$.$h$, $plotY2$$ = $axisArea_bounds$$105$$.y + $axisArea_bounds$$105$$.$h$ * 
  (1 + 1 / $bRender_drawnPlotSize_referenceLineSize$$) / 2);
  $bRender_drawnPlotSize_referenceLineSize$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$8_gradientAngle$$1_value$$175$$ == $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ && ($bRender_drawnPlotSize_referenceLineSize$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$35$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$53$$), $plotAreaBorderColor$$ = $options$$155$$.plotArea.borderColor, $thresholds$$4$$ = $options$$155$$.thresholds, $endCoord$$8_gradientAngle$$1_value$$175$$ = $isVert$$9$$ ? 0 : 270;
  if($thresholds$$4$$ && "off" != $options$$155$$.plotArea.rendered && "all" == $options$$155$$.thresholdDisplay) {
    for($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = $thresholds$$4$$.length - 1;0 <= $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$;$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$--) {
      var $currentThresholdIndex$$1$$ = $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$, $plotArea$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $arColors$$28_gradient$$13_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$), $cp$$4$$ = new D.$DvtClipPath$$("pacp" + $gauge$$53$$.getId());
      $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ == $thresholds$$4$$.length - 1 ? !$isVert$$9$$ && $color$$59_isRTL$$24$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.max), 0, $axisArea_bounds$$105$$.$w$ + 2, $axisArea_bounds$$105$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, $axisArea_bounds$$105$$.$w$ + 2, $axisArea_bounds$$105$$.$h$ + 2, 0, 0) : $isVert$$9$$ ? 
      (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.max), $axisArea_bounds$$105$$.$w$ + 2, 1 * ($options$$155$$.max - $thresholds$$4$$[$thresholds$$4$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$155$$.min - $options$$155$$.max) * $axisArea_bounds$$105$$.$h$, 0, 0) : $color$$59_isRTL$$24$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, 1 * ($options$$155$$.max - ($thresholds$$4$$[$thresholds$$4$$.length - 
      2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$4$$[$thresholds$$4$$.length - 2 - $currentThresholdIndex$$1$$].max)) / window.Math.abs($options$$155$$.min - $options$$155$$.max) * $axisArea_bounds$$105$$.$w$, $axisArea_bounds$$105$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, 1 * ($thresholds$$4$$[$currentThresholdIndex$$1$$].max - $options$$155$$.min) / window.Math.abs($options$$155$$.min - $options$$155$$.max) * $axisArea_bounds$$105$$.$w$, 
      $axisArea_bounds$$105$$.$h$ + 2, 0, 0);
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$3$$, $cp$$4$$);
      if($color$$59_isRTL$$24$$ || $isVert$$9$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$4$$.length - 1 - $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$
      }
      $plotArea$$3$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$53$$, $thresholds$$4$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$3$$.$setSolidStroke$($plotAreaBorderColor$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$53$$, $container$$122_tooltip$$37$$, $plotArea$$3$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$53$$, $thresholds$$4$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $endCoord$$8_gradientAngle$$1_value$$175$$)
    }
  }else {
    "off" != $options$$155$$.plotArea.rendered && (!("auto" == $options$$155$$.plotArea.rendered && "onIndicator" == $options$$155$$.thresholdDisplay) && "all" != $options$$155$$.thresholdDisplay) && ($plotArea$$3$$ = $isVert$$9$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $arColors$$28_gradient$$13_plotX1$$, $plotX2$$, $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.max), $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.min)) : 
    D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.min), $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($options$$155$$.max), $plotY1$$, $plotY2$$), $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$53$$), $plotArea$$3$$.$setSolidFill$($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$), 
    $plotArea$$3$$.$setSolidStroke$($plotAreaBorderColor$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$53$$, $container$$122_tooltip$$37$$, $plotArea$$3$$, $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$, $endCoord$$8_gradientAngle$$1_value$$175$$))
  }
  $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$, $indicatorX2_referenceObjects$$2$$, $indicatorY1_refColor_shadow$$7_stroke$$73$$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$);
  $gauge$$53$$.$__shapes$.push($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$);
  $color$$59_isRTL$$24$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$53$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$53$$) && "none" != $options$$155$$.visualEffects ? ($arColors$$28_gradient$$13_plotX1$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$59_isRTL$$24$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$59_isRTL$$24$$, -0.04, -0.05)], $arColors$$28_gradient$$13_plotX1$$ = new D.$DvtLinearGradientFill$$($endCoord$$8_gradientAngle$$1_value$$175$$, $arColors$$28_gradient$$13_plotX1$$, [1, 1], [0, 1]), $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$.$setFill$($arColors$$28_gradient$$13_plotX1$$)) : 
  $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$.$setSolidFill$($color$$59_isRTL$$24$$);
  $borderColor$$35$$ && $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$.$setSolidStroke$($borderColor$$35$$);
  $bRender_drawnPlotSize_referenceLineSize$$ && $container$$122_tooltip$$37$$.$addChild$($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$);
  $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$, $indicatorX2_referenceObjects$$2$$, $indicatorY1_refColor_shadow$$7_stroke$$73$$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$53$$, $container$$122_tooltip$$37$$, $baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$, $bRender_drawnPlotSize_referenceLineSize$$, $endCoord$$8_gradientAngle$$1_value$$175$$);
  if($indicatorX2_referenceObjects$$2$$ = $options$$155$$.referenceLines) {
    for($baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ = 0;$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$ < $indicatorX2_referenceObjects$$2$$.length;$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$++) {
      $indicatorY1_refColor_shadow$$7_stroke$$73$$ = $indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].color ? $indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].color : "white", $endCoord$$8_gradientAngle$$1_value$$175$$ = $indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].value, $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = 
      $options$$155$$.indicatorSize, $isVert$$9$$ ? ($bRender_drawnPlotSize_referenceLineSize$$ = ((1 - $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$) / 2 + $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$) * $axisArea_bounds$$105$$.$w$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$ = $axisArea_bounds$$105$$.x + (1 - $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$) / 4 * $axisArea_bounds$$105$$.$w$, $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($endCoord$$8_gradientAngle$$1_value$$175$$), 
      $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = new D.$DvtLine$$($gauge$$53$$.$getCtx$(), $drawnIndicatorSize_indicatorY2_xCoord$$12$$, $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$ + $bRender_drawnPlotSize_referenceLineSize$$, $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$)) : ($bRender_drawnPlotSize_referenceLineSize$$ = ((1 - $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$) / 2 + $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$) * 
      $axisArea_bounds$$105$$.$h$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$ = $axisInfo$$14_axisOptions$$16$$.$getUnboundedCoordAt$($endCoord$$8_gradientAngle$$1_value$$175$$), $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = $axisArea_bounds$$105$$.y + (1 - $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$) / 4 * $axisArea_bounds$$105$$.$h$, $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ = new D.$DvtLine$$($gauge$$53$$.$getCtx$(), $drawnIndicatorSize_indicatorY2_xCoord$$12$$, 
      $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$, $drawnIndicatorSize_indicatorY2_xCoord$$12$$, $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$ + $bRender_drawnPlotSize_referenceLineSize$$)), $indicatorY1_refColor_shadow$$7_stroke$$73$$ = new D.$DvtSolidStroke$$($indicatorY1_refColor_shadow$$7_stroke$$73$$, 1, $indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].lineWidth ? $indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].lineWidth : 
      2), $indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].lineStyle && $indicatorY1_refColor_shadow$$7_stroke$$73$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($indicatorX2_referenceObjects$$2$$[$baseline$$12_baselineCoord$$8_i$$610_overlay$$15_plotAreaColor_shape$$58$$].lineStyle)), $indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$.$setStroke$($indicatorY1_refColor_shadow$$7_stroke$$73$$), $container$$122_tooltip$$37$$.$addChild$($indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$), 
      !(0,D.$DvtAgent$isPlatformIE$$)() && "none" != $options$$155$$.visualEffects && ($indicatorY1_refColor_shadow$$7_stroke$$73$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)($indicatorSize$$1_indicatorX1_referenceLine_yCoord$$8$$, $indicatorY1_refColor_shadow$$7_stroke$$73$$))
    }
  }
  $axisArea_bounds$$105$$ = new D.$DvtRect$$($gauge$$53$$.$getCtx$(), $axisArea_bounds$$105$$.x, $axisArea_bounds$$105$$.y, $axisArea_bounds$$105$$.$w$, $axisArea_bounds$$105$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$105$$);
  $container$$122_tooltip$$37$$.$addChild$($axisArea_bounds$$105$$);
  (($container$$122_tooltip$$37$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$53$$)) || $options$$155$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$53$$.$__getEventManager$().$associate$($axisArea_bounds$$105$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$122_tooltip$$37$$, $color$$59_isRTL$$24$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($gauge$$54$$, $context$$382$$, $x1$$47$$, $x2$$43$$, $y1$$37$$, $y2$$34$$) {
  return new D.$DvtStatusMeterGaugeIndicator$$($gauge$$54$$, $context$$382$$, $x1$$47$$, $x2$$43$$, $y1$$37$$, $y2$$34$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$55$$, $container$$123$$, $shape$$59$$, $bRender$$1$$, $gradient$$14_gradientAngle$$2$$) {
  "none" != $gauge$$55$$.$getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$55$$) && ($gradient$$14_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$14_gradientAngle$$2$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$59$$.$setFill$($gradient$$14_gradientAngle$$2$$), $gauge$$55$$.$__shapes$.push($shape$$59$$), $shape$$59$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$1$$ && $container$$123$$.$addChild$($shape$$59$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$30_gauge$$56$$, $container$$124$$, $shape$$60$$, $color$$60$$, $gradient$$15_gradientAngle$$3$$) {
  var $options$$157$$ = $arColors$$30_gauge$$56$$.$getOptions$();
  $shape$$60$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$124$$.$addChild$($shape$$60$$);
  "none" != $options$$157$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$30_gauge$$56$$) ? ($arColors$$30_gauge$$56$$ = [D.$DvtColorUtils$$.$getDarker$($color$$60$$, 0.9), $color$$60$$, D.$DvtColorUtils$$.$getBrighter$($color$$60$$)], $gradient$$15_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$15_gradientAngle$$3$$, $arColors$$30_gauge$$56$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$30_gauge$$56$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$60$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$60$$, -0.09, 0.04)], $gradient$$15_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$15_gradientAngle$$3$$, $arColors$$30_gauge$$56$$, [1, 1], [0, 1])), $shape$$60$$.$setFill$($gradient$$15_gradientAngle$$3$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabel$$($gauge$$57_minLabelDims$$1$$, $container$$125$$, $bounds$$106$$) {
  var $options$$158$$ = $gauge$$57_minLabelDims$$1$$.$getOptions$(), $isRTL$$25_labelBounds$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$57_minLabelDims$$1$$.$getCtx$()), $isVert$$10_minValue$$14_size$$33$$ = "vertical" == $options$$158$$.orientation, $label$$55$$ = new D.$DvtOutputText$$($gauge$$57_minLabelDims$$1$$.$getCtx$(), ""), $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$158$$.value, $gauge$$57_minLabelDims$$1$$), $labelGap$$ = $options$$158$$.__layout.labelGap;
  $label$$55$$.$setCSSStyle$($options$$158$$.metricLabel.style);
  if($isVert$$10_minValue$$14_size$$33$$ && "on" == $options$$158$$.metricLabel.rendered) {
    var $bound$$8_labelSpace_maxValue$$15$$ = 0 < $options$$158$$.max ? $options$$158$$.max : $options$$158$$.min, $bound$$8_labelSpace_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_labelSpace_maxValue$$15$$, $gauge$$57_minLabelDims$$1$$), $maxLabel$$1_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$57_minLabelDims$$1$$.$getCtx$(), $bound$$8_labelSpace_maxValue$$15$$);
    $maxLabel$$1_maxLabelDims$$1$$.$setCSSStyle$($options$$158$$.metricLabel.style);
    $isRTL$$25_labelBounds$$9$$ = new D.$DvtRectangle$$($bounds$$106$$.x, $bounds$$106$$.y + 0.8 * $bounds$$106$$.$h$, $bounds$$106$$.$w$, 0.2 * $bounds$$106$$.$h$);
    $isVert$$10_minValue$$14_size$$33$$ = ($isVert$$10_minValue$$14_size$$33$$ = $options$$158$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$10_minValue$$14_size$$33$$) : $maxLabel$$1_maxLabelDims$$1$$.$getOptimalFontSize$($isRTL$$25_labelBounds$$9$$);
    $maxLabel$$1_maxLabelDims$$1$$ = $maxLabel$$1_maxLabelDims$$1$$.$measureDimensions$();
    $bounds$$106$$.$h$ -= $maxLabel$$1_maxLabelDims$$1$$.$h$;
    $bound$$8_labelSpace_maxValue$$15$$ = $maxLabel$$1_maxLabelDims$$1$$.$w$;
    $label$$55$$.$setFontSize$($isVert$$10_minValue$$14_size$$33$$);
    $label$$55$$.$setTextString$($labelString$$5$$);
    $label$$55$$.$setX$($bounds$$106$$.x + $bounds$$106$$.$w$ / 2);
    $label$$55$$.$setY$($bounds$$106$$.y + $bounds$$106$$.$h$);
    $bounds$$106$$.$h$ -= $labelGap$$;
    $label$$55$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$55$$, $bounds$$106$$.$w$, $bounds$$106$$.$h$, $container$$125$$)
  }else {
    if(!$isVert$$10_minValue$$14_size$$33$$ && "on" == $options$$158$$.metricLabel.rendered) {
      var $isVert$$10_minValue$$14_size$$33$$ = ($isVert$$10_minValue$$14_size$$33$$ = $options$$158$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$10_minValue$$14_size$$33$$) : 13, $minLabel$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$158$$.min, $gauge$$57_minLabelDims$$1$$), $maxLabel$$1_maxLabelDims$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$158$$.max, $gauge$$57_minLabelDims$$1$$);
      18 > $bounds$$106$$.$h$ && ($isVert$$10_minValue$$14_size$$33$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$5$$, $minLabel$$, $maxLabel$$1_maxLabelDims$$1$$], $label$$55$$, $bounds$$106$$));
      $label$$55$$.$setFontSize$($isVert$$10_minValue$$14_size$$33$$);
      var $alignCoord$$;
      if(0 < $options$$158$$.max || "off" != $options$$158$$.plotArea.rendered || !("auto" == $options$$158$$.plotArea.rendered && "onIndicator" == $options$$158$$.thresholdDisplay)) {
        $bound$$8_labelSpace_maxValue$$15$$ = 0 < $options$$158$$.max ? $options$$158$$.max : $options$$158$$.min, $bound$$8_labelSpace_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_labelSpace_maxValue$$15$$, $gauge$$57_minLabelDims$$1$$), $maxLabel$$1_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$57_minLabelDims$$1$$.$getCtx$(), $bound$$8_labelSpace_maxValue$$15$$), $maxLabel$$1_maxLabelDims$$1$$.$setCSSStyle$($options$$158$$.metricLabel.style), $maxLabel$$1_maxLabelDims$$1$$.$setFontSize$($isVert$$10_minValue$$14_size$$33$$), 
        $maxLabel$$1_maxLabelDims$$1$$ = $maxLabel$$1_maxLabelDims$$1$$.$measureDimensions$(), $alignCoord$$ = $isRTL$$25_labelBounds$$9$$ ? $bounds$$106$$.x + $maxLabel$$1_maxLabelDims$$1$$.$w$ : $bounds$$106$$.x + $bounds$$106$$.$w$, $bound$$8_labelSpace_maxValue$$15$$ = $maxLabel$$1_maxLabelDims$$1$$.$w$, $isRTL$$25_labelBounds$$9$$ && ($bounds$$106$$.x += $maxLabel$$1_maxLabelDims$$1$$.$w$ + $labelGap$$), $bounds$$106$$.$w$ -= $maxLabel$$1_maxLabelDims$$1$$.$w$ + $labelGap$$
      }
      if(0 > $options$$158$$.min && "on" != $options$$158$$.plotArea.rendered && !("auto" == $options$$158$$.plotArea.rendered && "onIndicator" == $options$$158$$.thresholdDisplay)) {
        $isVert$$10_minValue$$14_size$$33$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$158$$.min, $gauge$$57_minLabelDims$$1$$);
        $minLabel$$ = new D.$DvtOutputText$$($gauge$$57_minLabelDims$$1$$.$getCtx$(), $isVert$$10_minValue$$14_size$$33$$);
        $minLabel$$.$setCSSStyle$($options$$158$$.metricLabel.style);
        $gauge$$57_minLabelDims$$1$$ = $minLabel$$.$measureDimensions$();
        if(0 > $options$$158$$.value || 0 >= $options$$158$$.max) {
          $alignCoord$$ = $isRTL$$25_labelBounds$$9$$ ? $bounds$$106$$.x + $bounds$$106$$.$w$ : $bounds$$106$$.x + $gauge$$57_minLabelDims$$1$$.$w$, $bound$$8_labelSpace_maxValue$$15$$ = $gauge$$57_minLabelDims$$1$$.$w$
        }
        $isRTL$$25_labelBounds$$9$$ || ($bounds$$106$$.x += $gauge$$57_minLabelDims$$1$$.$w$ + $labelGap$$);
        $bounds$$106$$.$w$ -= $gauge$$57_minLabelDims$$1$$.$w$ + $labelGap$$
      }
      $label$$55$$.$setTextString$($labelString$$5$$);
      $label$$55$$.$setX$($alignCoord$$);
      $label$$55$$.$setY$($bounds$$106$$.y + $bounds$$106$$.$h$ / 2);
      $label$$55$$.$alignMiddle$();
      $label$$55$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$55$$, $bound$$8_labelSpace_maxValue$$15$$, $bounds$$106$$.$h$, $container$$125$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$107$$, $radius$$20$$, $angle$$44$$) {
  return{x:window.Math.cos($angle$$44$$) * $radius$$20$$ + $bounds$$107$$.$w$ / 2 + $bounds$$107$$.x, y:window.Math.sin($angle$$44$$) * $radius$$20$$ + $bounds$$107$$.$h$ / 2 + $bounds$$107$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$36_gauge$$58$$, $container$$126$$, $bounds$$108_shape$$61$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$, $color$$61$$, $isPlotArea$$) {
  var $context$$383$$ = $borderColor$$36_gauge$$58$$.$getCtx$();
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$36_gauge$$58$$.$getCtx$()) && ($startAngle$$16$$ = window.Math.PI - $startAngle$$16$$ - $angleExtent$$14$$, $startAngle$$16$$ = 0 < $startAngle$$16$$ ? $startAngle$$16$$ : $startAngle$$16$$ + 2 * window.Math.PI);
  $isPlotArea$$ ? $bounds$$108_shape$$61$$ = new D.$DvtPath$$($context$$383$$, D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$108_shape$$61$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$)) : ($bounds$$108_shape$$61$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$383$$, $bounds$$108_shape$$61$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$), $borderColor$$36_gauge$$58$$.$__shapes$.push($bounds$$108_shape$$61$$));
  $bounds$$108_shape$$61$$.$setSolidFill$($color$$61$$);
  ($borderColor$$36_gauge$$58$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$36_gauge$$58$$)) && !$isPlotArea$$ && $bounds$$108_shape$$61$$.$setSolidStroke$($borderColor$$36_gauge$$58$$);
  $container$$126$$.$addChild$($bounds$$108_shape$$61$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$59_p1$$7$$, $container$$127$$, $bounds$$109_p2$$6$$, $angle$$45$$, $color$$62_stroke$$74$$, $lineWidth$$8$$, $lineStyle$$2$$) {
  var $context$$384_shape$$62$$ = $gauge$$59_p1$$7$$.$getCtx$(), $maxDiameter$$1_outerRadius$$5$$ = window.Math.min($bounds$$109_p2$$6$$.$w$, $bounds$$109_p2$$6$$.$h$), $innerRadius$$6$$ = 0.275 * $maxDiameter$$1_outerRadius$$5$$, $maxDiameter$$1_outerRadius$$5$$ = 0.5 * $maxDiameter$$1_outerRadius$$5$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$59_p1$$7$$.$getCtx$()) && ($angle$$45$$ = window.Math.PI - $angle$$45$$, $angle$$45$$ = 0 < $angle$$45$$ ? $angle$$45$$ : $angle$$45$$ + 2 * window.Math.PI);
  $gauge$$59_p1$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$109_p2$$6$$, $innerRadius$$6$$, $angle$$45$$);
  $bounds$$109_p2$$6$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$109_p2$$6$$, $maxDiameter$$1_outerRadius$$5$$, $angle$$45$$);
  $context$$384_shape$$62$$ = new D.$DvtLine$$($context$$384_shape$$62$$, $gauge$$59_p1$$7$$.x, $gauge$$59_p1$$7$$.y, $bounds$$109_p2$$6$$.x, $bounds$$109_p2$$6$$.y);
  $color$$62_stroke$$74$$ = new D.$DvtSolidStroke$$($color$$62_stroke$$74$$, 1, $lineWidth$$8$$);
  $lineStyle$$2$$ && $color$$62_stroke$$74$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$2$$));
  $context$$384_shape$$62$$.$setStroke$($color$$62_stroke$$74$$);
  $container$$127$$.$addChild$($context$$384_shape$$62$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$110_p4$$2$$, $startAngle$$17$$, $angleExtent$$15$$, $innerRadius$$7$$, $cmd$$15_outerRadius$$6$$) {
  var $p1$$8$$, $p2$$7$$, $p3$$2$$;
  $angleExtent$$15$$ < D.$DvtMath$$.$TWO_PI$ ? ($p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$ + $angleExtent$$15$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$ + $angleExtent$$15$$), $bounds$$110_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, 
  $innerRadius$$7$$, $startAngle$$17$$), $cmd$$15_outerRadius$$6$$ = D.$DvtPathUtils$$.moveTo($p1$$8$$.x, $p1$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.lineTo($p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$, 0, $bounds$$110_p4$$2$$.x, $bounds$$110_p4$$2$$.y) + D.$DvtPathUtils$$.closePath()) : ($p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, 
  $cmd$$15_outerRadius$$6$$, $startAngle$$17$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$ + $angleExtent$$15$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$), $bounds$$110_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$110_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$ + $angleExtent$$15$$ / 2), $cmd$$15_outerRadius$$6$$ = 
  D.$DvtPathUtils$$.moveTo($p1$$8$$.x, $p1$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p1$$8$$.x, $p1$$8$$.y), 0 < $innerRadius$$7$$ && ($cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.moveTo($bounds$$110_p4$$2$$.x, $bounds$$110_p4$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, 
  $angleExtent$$15$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$ / 2, 0, $bounds$$110_p4$$2$$.x, $bounds$$110_p4$$2$$.y)), $cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$15_outerRadius$$6$$
};
D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($angle$$46$$, $bStart$$1$$) {
  var $quadrant$$ = 1;
  if($bStart$$1$$) {
    $angle$$46$$ >= D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ < window.Math.PI ? $quadrant$$ = 2 : $angle$$46$$ >= window.Math.PI && $angle$$46$$ < 1.5 * window.Math.PI ? $quadrant$$ = 3 : $angle$$46$$ >= 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ && ($quadrant$$ = 4)
  }else {
    if($angle$$46$$ > D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ <= window.Math.PI) {
      $quadrant$$ = 2
    }else {
      if($angle$$46$$ > window.Math.PI && $angle$$46$$ <= 1.5 * window.Math.PI) {
        $quadrant$$ = 3
      }else {
        if($angle$$46$$ > 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ || 0 == $angle$$46$$) {
          $quadrant$$ = 4
        }
      }
    }
  }
  return $quadrant$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($gauge$$60$$, $innerRadius$$8_maxInnerDiameter$$1$$, $maxDiameter$$2_startAngleRads$$2$$, $angleExtentRads$$3$$, $endAngle$$4$$, $bounds$$111$$, $isRTL$$27$$) {
  var $labelBounds$$10_labelCenterOffset$$ = D.$JSCompiler_alias_NULL$$, $startQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($maxDiameter$$2_startAngleRads$$2$$, D.$JSCompiler_alias_TRUE$$), $endQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($endAngle$$4$$, D.$JSCompiler_alias_FALSE$$), $width$$97$$ = $bounds$$111$$.$w$, $height$$90$$ = $bounds$$111$$.$h$, $cx$$47$$ = $width$$97$$ / 2, $cy$$48$$ = $height$$90$$ / 2;
  if($startQuadrant$$ == $endQuadrant$$ && $angleExtentRads$$3$$ <= D.$DvtMath$$.$HALF_PI$) {
    if($maxDiameter$$2_startAngleRads$$2$$ = 2 * window.Math.min($bounds$$111$$.$w$, $bounds$$111$$.$h$), $bounds$$111$$.$w$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$111$$.$h$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, !$isRTL$$27$$ && 1 == $startQuadrant$$ || $isRTL$$27$$ && 2 == $startQuadrant$$) {
      $bounds$$111$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$111$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$47$$ = $width$$97$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$48$$ = $height$$90$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - 1, $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
      (2.5 / 7) - 2)
    }else {
      if(!$isRTL$$27$$ && 2 == $startQuadrant$$ || $isRTL$$27$$ && 1 == $startQuadrant$$) {
        $bounds$$111$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$47$$ = $width$$97$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$48$$ = $height$$90$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
        (2.5 / 7) - 2)
      }else {
        if(!$isRTL$$27$$ && 3 == $startQuadrant$$ || $isRTL$$27$$ && 4 == $startQuadrant$$) {
          $cx$$47$$ = $width$$97$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$48$$ = $height$$90$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
          (2.5 / 7) - 2)
        }else {
          if(!$isRTL$$27$$ && 4 == $startQuadrant$$ || $isRTL$$27$$ && 3 == $startQuadrant$$) {
            $bounds$$111$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$47$$ = $width$$97$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$48$$ = $height$$90$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - 1, $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
            (2.5 / 7) - 2)
          }
        }
      }
    }
  }else {
    $startQuadrant$$ % 4 + 1 == $endQuadrant$$ && $angleExtentRads$$3$$ <= window.Math.PI ? 1 == $startQuadrant$$ || 3 == $startQuadrant$$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min($bounds$$111$$.$w$, 2 * $bounds$$111$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $bounds$$111$$.$w$ > $bounds$$111$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * 
    (3 / 7), $bounds$$111$$.y + $bounds$$111$$.$h$ - ($bounds$$111$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.75 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7)), 1 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.y = $bounds$$111$$.y + ($bounds$$111$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.5 / 7), $bounds$$111$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - ($bounds$$111$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$48$$ = $height$$90$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$111$$.y += ($bounds$$111$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$48$$ = $height$$90$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$111$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$)) : ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * $bounds$$111$$.$w$, $bounds$$111$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= 
    $maxDiameter$$2_startAngleRads$$2$$, $bounds$$111$$.$w$ < $bounds$$111$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ - ($bounds$$111$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3.25 / 7), $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), 
    !$isRTL$$27$$ && 4 == $startQuadrant$$ || $isRTL$$27$$ && 2 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.x = $bounds$$111$$.x + ($bounds$$111$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.25 / 7), $bounds$$111$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2 - ($bounds$$111$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$47$$ = $width$$97$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$111$$.x += ($bounds$$111$$.$w$ - 
    $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$47$$ = $width$$97$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$111$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$)) : $endQuadrant$$ % 4 + 1 == $startQuadrant$$ && $angleExtentRads$$3$$ > window.Math.PI && (1 == $startQuadrant$$ && $bounds$$111$$.$h$ > $bounds$$111$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$111$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$) + 1)), 2 * ($bounds$$111$$.$w$ / 
    (window.Math.sin($endAngle$$4$$ - 1.5 * window.Math.PI) + 1)), $bounds$$111$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$111$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$27$$ ? ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, 
    $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$111$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$111$$.$w$, $cx$$47$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$97$$) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$111$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$47$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2), $bounds$$111$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$) : 2 == $startQuadrant$$ && $bounds$$111$$.$h$ < $bounds$$111$$.$w$ ? 
    ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$111$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - D.$DvtMath$$.$HALF_PI$) + 1)), 2 * ($bounds$$111$$.$h$ / (window.Math.sin($endAngle$$4$$) + 1)), $bounds$$111$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$111$$.y + 
    $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (1 + (2 * $bounds$$111$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1))), $bounds$$111$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$48$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : 3 == $startQuadrant$$ && $bounds$$111$$.$h$ > $bounds$$111$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * 
    ($bounds$$111$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - window.Math.PI) + 1)), 2 * ($bounds$$111$$.$w$ / (window.Math.sin($endAngle$$4$$ - D.$DvtMath$$.$HALF_PI$) + 1)), $bounds$$111$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$111$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$27$$ ? ($labelBounds$$10_labelCenterOffset$$ = 
    new D.$DvtRectangle$$($bounds$$111$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$111$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$47$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + 
    $bounds$$111$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $bounds$$111$$.y + $bounds$$111$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$111$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$111$$.$w$, $cx$$47$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$97$$), $bounds$$111$$.$w$ = 
    $maxDiameter$$2_startAngleRads$$2$$) : 4 == $startQuadrant$$ && $bounds$$111$$.$h$ < $bounds$$111$$.$w$ && ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$111$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - 1.5 * window.Math.PI) + 1)), 2 * ($bounds$$111$$.$h$ / (window.Math.sin(D.$DvtMath$$.$TWO_PI$ - $endAngle$$4$$) + 1)), $bounds$$111$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = 
    $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (2 * $bounds$$111$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$111$$.x + $bounds$$111$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$111$$.y + $bounds$$111$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + $labelBounds$$10_labelCenterOffset$$), 
    $bounds$$111$$.y -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$111$$.$h$, $bounds$$111$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$48$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $height$$90$$))
  }
  $gauge$$60$$.$cx$ = $cx$$47$$;
  $gauge$$60$$.$cy$ = $cy$$48$$;
  return $labelBounds$$10_labelCenterOffset$$
};
D.$DvtStatusMeterGaugeIndicator$$ = function $$DvtStatusMeterGaugeIndicator$$$($gauge$$49$$, $context$$380$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$) {
  this.Init($gauge$$49$$, $context$$380$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeIndicator$$, D.$DvtRect$$, "DvtStatusMeterGaugeIndicator");
D.$DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($gauge$$50$$, $context$$381$$, $x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$) {
  D.$DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $context$$381$$);
  this.$_gauge$ = $gauge$$50$$;
  this.$_isVert$ = "vertical" == $gauge$$50$$.$getOptions$().orientation;
  this.$setCoords$($x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($width$$95_x1$$46$$, $x2$$42$$, $height$$88_y1$$36$$, $y2$$33$$) {
  this.$_x1$ = $width$$95_x1$$46$$;
  this.$_x2$ = $x2$$42$$;
  this.$_y1$ = $height$$88_y1$$36$$;
  this.$_y2$ = $y2$$33$$;
  var $radius$$19_x$$205$$ = window.Math.min($width$$95_x1$$46$$, $x2$$42$$), $y$$180$$ = window.Math.min($height$$88_y1$$36$$, $y2$$33$$);
  $width$$95_x1$$46$$ = window.Math.abs($width$$95_x1$$46$$ - $x2$$42$$);
  $height$$88_y1$$36$$ = window.Math.abs($y2$$33$$ - $height$$88_y1$$36$$);
  (0,D.$JSCompiler_StaticMethods_setRect$$)(this, $radius$$19_x$$205$$, $y$$180$$, $width$$95_x1$$46$$, $height$$88_y1$$36$$);
  $radius$$19_x$$205$$ = (this.$_isVert$ ? $width$$95_x1$$46$$ : $height$$88_y1$$36$$) * ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? 0.25 : 0.15);
  2.5 <= $radius$$19_x$$205$$ && (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)(this, $radius$$19_x$$205$$, $radius$$19_x$$205$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($params$$34$$) {
  $params$$34$$ && 4 == $params$$34$$.length && this.$setCoords$($params$$34$$[0], $params$$34$$[1], $params$$34$$[2], $params$$34$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$378$$, $bounds$$100$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$) {
  this.Init($context$$378$$, $bounds$$100$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$379$$, $bounds$$101$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$379$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$101$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$102$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$) {
  $bounds$$102$$ && $bounds$$102$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$102$$ : $bounds$$102$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$14$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$12$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$3$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$2$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$(D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$102$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$))
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$33$$) {
  $params$$33$$ && 5 == $params$$33$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$33$$[0], $params$$33$$[1], $params$$33$$[2], $params$$33$$[3], $params$$33$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$$.newInstance = function $$DvtDialGauge$$$newInstance$($context$$366$$, $callback$$101$$, $callbackObj$$56$$) {
  var $gauge$$ = new D.$DvtDialGauge$$;
  $gauge$$.Init($context$$366$$, $callback$$101$$, $callbackObj$$56$$);
  return $gauge$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$367$$, $callback$$102$$, $callbackObj$$57$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$367$$, $callback$$102$$, $callbackObj$$57$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$117$$) {
  var $backgroundType$$ = $options$$117$$.background, $indicatorType$$ = $options$$117$$.indicator;
  "string" === typeof $backgroundType$$ && ($options$$117$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$), $options$$117$$.background.images = $options$$117$$._backgroundImages);
  "string" === typeof $indicatorType$$ && ($options$$117$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$), $options$$117$$.indicator.images = $options$$117$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$117$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$92$$, $width$$81$$, $height$$75$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$92$$, $width$$81$$, $height$$75$$)
};
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$58$$, $animatedObjs_animationType$$, $animationDuration$$3$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$601$$ = 0;$i$$601$$ < $objs$$58$$.length;$i$$601$$++) {
    var $obj$$287$$ = $objs$$58$$[$i$$601$$], $endState$$13$$ = $obj$$287$$.$getAnimationParams$(), $animation$$1_startAngle$$8$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$287$$.$setAngle$($animation$$1_startAngle$$8$$);
    $animation$$1_startAngle$$8$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$287$$, $animationDuration$$3$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$1_startAngle$$8$$.$_animator$, "typeNumberArray", $obj$$287$$, $obj$$287$$.$getAnimationParams$, $obj$$287$$.$setAnimationParams$, $endState$$13$$);
    $animation$$1_startAngle$$8$$.$_animator$.$setEasing$(function($objs$$58$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$58$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$1_startAngle$$8$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$192$$, $y$$168$$) {
  var $angle$$41_ratio$$13$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$168$$ - this.$__anchorPt$.y, $x$$192$$ - this.$__anchorPt$.x));
  0 >= $angle$$41_ratio$$13$$ && ($angle$$41_ratio$$13$$ += 360);
  var $isRTL$$15_minValue$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $angleExtent$$7_backgroundOptions$$ = this.$getOptions$().background, $startAngle$$9$$ = $isRTL$$15_minValue$$9$$ ? 180 + $angleExtent$$7_backgroundOptions$$.startAngle : 360 - $angleExtent$$7_backgroundOptions$$.startAngle, $angleExtent$$7_backgroundOptions$$ = $angleExtent$$7_backgroundOptions$$.angleExtent, $endAngle$$2$$ = $startAngle$$9$$ + $angleExtent$$7_backgroundOptions$$;
  if($isRTL$$15_minValue$$9$$) {
    $endAngle$$2$$ = $startAngle$$9$$;
    for($startAngle$$9$$ -= $angleExtent$$7_backgroundOptions$$;0 > $startAngle$$9$$;) {
      $startAngle$$9$$ += 360, $endAngle$$2$$ += 360
    }
  }
  $angle$$41_ratio$$13$$ + 360 >= $startAngle$$9$$ && $angle$$41_ratio$$13$$ + 360 <= $endAngle$$2$$ ? $angle$$41_ratio$$13$$ += 360 : $angle$$41_ratio$$13$$ >= $startAngle$$9$$ && $angle$$41_ratio$$13$$ <= $endAngle$$2$$ || ($angle$$41_ratio$$13$$ = $angle$$41_ratio$$13$$ > $endAngle$$2$$ ? $startAngle$$9$$ + 360 - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ - $endAngle$$2$$ ? $startAngle$$9$$ : $endAngle$$2$$ : $startAngle$$9$$ - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ + 360 - $endAngle$$2$$ ? 
  $startAngle$$9$$ : $endAngle$$2$$);
  $angle$$41_ratio$$13$$ = ($angle$$41_ratio$$13$$ - $startAngle$$9$$) / $angleExtent$$7_backgroundOptions$$;
  $isRTL$$15_minValue$$9$$ && ($angle$$41_ratio$$13$$ = 1 - $angle$$41_ratio$$13$$);
  $isRTL$$15_minValue$$9$$ = this.$Options$.min;
  return $angle$$41_ratio$$13$$ * (this.$Options$.max - $isRTL$$15_minValue$$9$$) + $isRTL$$15_minValue$$9$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$1$$, $container$$93$$, $bounds$$75_width$$82$$, $height$$76$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$1$$) ? ($bounds$$75_width$$82$$ = new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$82$$, $height$$76$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$1$$, $container$$93$$, $bounds$$75_width$$82$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$1$$, $container$$93$$, $bounds$$75_width$$82$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$1$$, $container$$93$$, new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$82$$, $height$$76$$))
};
D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($gauge$$2$$, $container$$94$$, $width$$83$$, $height$$77$$) {
  $gauge$$2$$.$__indicatorContainer$.$setAngle$(D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$2$$, $gauge$$2$$.$getOptions$().value));
  $container$$94$$.removeChild($gauge$$2$$.$__label$);
  D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$2$$, $container$$94$$, new D.$DvtRectangle$$(0, 0, $width$$83$$, $height$$77$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$3$$, $container$$95$$, $bounds$$76_scale$$23$$) {
  var $options$$118_tooltip$$29$$ = $gauge$$3$$.$getOptions$(), $background$$5_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$3$$, $bounds$$76_scale$$23$$);
  $container$$95$$.$addChild$($background$$5_backgroundAnchor$$);
  $options$$118_tooltip$$29$$.background.majorTickCount && $options$$118_tooltip$$29$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$3$$, $container$$95$$, $bounds$$76_scale$$23$$);
  var $indicator$$7$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$3$$, $bounds$$76_scale$$23$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$3$$.$getCtx$()), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$3$$.$getCtx$());
  $container$$95$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$7$$);
  var $indicatorBounds_mat$$43$$ = $indicator$$7$$.$getDimensions$(), $angleRads$$9$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$3$$, $options$$118_tooltip$$29$$.value), $background$$5_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$3$$, $bounds$$76_scale$$23$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$3$$, $indicatorBounds_mat$$43$$);
  $bounds$$76_scale$$23$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$3$$, $bounds$$76_scale$$23$$, $indicatorBounds_mat$$43$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$43$$.scale($bounds$$76_scale$$23$$, $bounds$$76_scale$$23$$);
  $indicator$$7$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $rotateContainer$$.$setAngle$($angleRads$$9$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate($background$$5_backgroundAnchor$$.x, $background$$5_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $gauge$$3$$.$__shapes$.push($rotateContainer$$);
  $gauge$$3$$.$__indicatorContainer$ = $rotateContainer$$;
  (($options$$118_tooltip$$29$$ = $options$$118_tooltip$$29$$.shortDesc) || $gauge$$3$$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$3$$.$__getEventManager$().$associate$($container$$95$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$118_tooltip$$29$$));
  $gauge$$3$$.$__anchorPt$ = $background$$5_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$4$$, $bounds$$77$$) {
  var $backgroundOptions$$1$$ = $gauge$$4$$.$getOptions$().background, $isRTL$$16_radiusScale$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$4$$.$getCtx$()), $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$54_widthRes$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ ? 2 * $bounds$$77$$.$w$ : $bounds$$77$$.$w$, $heightRes_scale$$24$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ ? 2 * $bounds$$77$$.$h$ : $bounds$$77$$.$h$, $images$$10_tx$$23$$ = 
  $backgroundOptions$$1$$.images;
  if($images$$10_tx$$23$$ && 0 < $images$$10_tx$$23$$.length) {
    var $i$$602_ty$$24$$, $refWidth$$, $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = [];
    for($i$$602_ty$$24$$ = 0;$i$$602_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$602_ty$$24$$++) {
      var $imageDims$$1_isImageRTL_source$$29$$ = "rtl" == $images$$10_tx$$23$$[$i$$602_ty$$24$$].dir;
      $isRTL$$16_radiusScale$$1$$ && $imageDims$$1_isImageRTL_source$$29$$ ? $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.push($images$$10_tx$$23$$[$i$$602_ty$$24$$]) : !$isRTL$$16_radiusScale$$1$$ && !$imageDims$$1_isImageRTL_source$$29$$ && $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.push($images$$10_tx$$23$$[$i$$602_ty$$24$$])
    }
    $images$$10_tx$$23$$ = 0 < $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.length ? $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ : $images$$10_tx$$23$$;
    for($i$$602_ty$$24$$ = 0;$i$$602_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$602_ty$$24$$++) {
      var $height$$78_image$$11$$ = $images$$10_tx$$23$$[$i$$602_ty$$24$$], $imageDims$$1_isImageRTL_source$$29$$ = $height$$78_image$$11$$.src, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = $height$$78_image$$11$$.width, $height$$78_image$$11$$ = $height$$78_image$$11$$.height, $isSvg$$ = $imageDims$$1_isImageRTL_source$$29$$ && -1 < $imageDims$$1_isImageRTL_source$$29$$.search(".svg");
      0 == $i$$602_ty$$24$$ && ($refWidth$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$, $refHeight$$ = $height$$78_image$$11$$);
      if($isSvg$$ || $isTouchDevice$$3_locImages_metLblBounds_width$$84$$ >= $shape$$54_widthRes$$ && $height$$78_image$$11$$ >= $heightRes_scale$$24$$ || $i$$602_ty$$24$$ == $images$$10_tx$$23$$.length - 1) {
        var $shape$$54_widthRes$$ = new D.$DvtImage$$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$29$$, 0, 0, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$, $height$$78_image$$11$$), $matrix$$15$$ = new D.$DvtMatrix$$, $heightRes_scale$$24$$ = window.Math.min($bounds$$77$$.$w$ / $isTouchDevice$$3_locImages_metLblBounds_width$$84$$, $bounds$$77$$.$h$ / $height$$78_image$$11$$), $images$$10_tx$$23$$ = ($bounds$$77$$.$w$ - $heightRes_scale$$24$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$84$$) / 
        2;
        $i$$602_ty$$24$$ = ($bounds$$77$$.$h$ - $heightRes_scale$$24$$ * $height$$78_image$$11$$) / 2;
        $matrix$$15$$.scale($heightRes_scale$$24$$, $heightRes_scale$$24$$);
        $matrix$$15$$.translate($images$$10_tx$$23$$, $i$$602_ty$$24$$);
        $shape$$54_widthRes$$.$setMatrix$($matrix$$15$$);
        $isSvg$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims$$1_isImageRTL_source$$29$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$29$$, D.$DvtObj$$.$createCallback$($shape$$54_widthRes$$, $shape$$54_widthRes$$.$__setDimensions$))) && $shape$$54_widthRes$$.$__setDimensions$($imageDims$$1_isImageRTL_source$$29$$);
        $bounds$$77$$.x += $images$$10_tx$$23$$;
        $bounds$$77$$.y += $i$$602_ty$$24$$;
        $bounds$$77$$.$w$ = $heightRes_scale$$24$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$84$$;
        $bounds$$77$$.$h$ = $heightRes_scale$$24$$ * $height$$78_image$$11$$;
        !(0,window.isNaN)($backgroundOptions$$1$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$16_radiusScale$$1$$ ? $bounds$$77$$.x + $bounds$$77$$.$w$ - $bounds$$77$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$ : $bounds$$77$$.x + $bounds$$77$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$, $backgroundOptions$$1$$._anchorY = $bounds$$77$$.y + $bounds$$77$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice$$3_locImages_metLblBounds_width$$84$$ = {}, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.width = $bounds$$77$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.height = $bounds$$77$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.y = $bounds$$77$$.y + $bounds$$77$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.x = $isRTL$$16_radiusScale$$1$$ ? $bounds$$77$$.x + $bounds$$77$$.$w$ - $bounds$$77$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice$$3_locImages_metLblBounds_width$$84$$.width : $bounds$$77$$.x + $bounds$$77$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$1$$._metricLabelBounds = $isTouchDevice$$3_locImages_metLblBounds_width$$84$$);
        $isRTL$$16_radiusScale$$1$$ = window.Math.min($bounds$$77$$.$w$ / $refWidth$$, $bounds$$77$$.$h$ / $refHeight$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$16_radiusScale$$1$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$77$$.$h$ / $refHeight$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$77$$.$w$ / $refWidth$$;
        return $shape$$54_widthRes$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$5$$, $bounds$$78$$) {
  var $indicatorOptions$$ = $gauge$$5$$.$getOptions$().indicator, $indicatorLength_source$$30$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$5$$, $bounds$$78$$), $heightRes$$1_shape$$55$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$30$$ : $indicatorLength_source$$30$$, $refWidth$$1$$, $refHeight$$1$$, $images$$11$$ = $indicatorOptions$$.images;
  if($images$$11$$ && 0 < $images$$11$$.length) {
    for(var $i$$603$$ = 0;$i$$603$$ < $images$$11$$.length;$i$$603$$++) {
      var $height$$79_image$$12$$ = $images$$11$$[$i$$603$$], $indicatorLength_source$$30$$ = $height$$79_image$$12$$.src, $width$$85$$ = $height$$79_image$$12$$.width, $height$$79_image$$12$$ = $height$$79_image$$12$$.height, $isSvg$$1$$ = $indicatorLength_source$$30$$ && -1 < $indicatorLength_source$$30$$.search(".svg");
      0 == $i$$603$$ && ($refWidth$$1$$ = $width$$85$$, $refHeight$$1$$ = $height$$79_image$$12$$);
      if($isSvg$$1$$ || $height$$79_image$$12$$ >= $heightRes$$1_shape$$55$$ || $i$$603$$ == $images$$11$$.length - 1) {
        return $heightRes$$1_shape$$55$$ = new D.$DvtImage$$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$30$$, 0, 0, $width$$85$$, $height$$79_image$$12$$), $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$30$$, D.$DvtObj$$.$createCallback$($heightRes$$1_shape$$55$$, $heightRes$$1_shape$$55$$.$__setDimensions$)) && ($heightRes$$1_shape$$55$$.$setWidth$($width$$85$$), $heightRes$$1_shape$$55$$.$setHeight$($height$$79_image$$12$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$85$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$79_image$$12$$ / $refHeight$$1$$), $heightRes$$1_shape$$55$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$6_startAngle$$10$$) {
  var $backgroundOptions$$2$$ = $gauge$$6_startAngle$$10$$.$getOptions$().background;
  $gauge$$6_startAngle$$10$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$6_startAngle$$10$$.$getCtx$()) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return window.Math.PI * (90 - $gauge$$6_startAngle$$10$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$7$$, $value$$161$$) {
  var $isRTL$$18_maxValue$$9_options$$119$$ = $gauge$$7$$.$getOptions$(), $backgroundOptions$$3$$ = $isRTL$$18_maxValue$$9_options$$119$$.background, $minValue$$10_ratio$$14$$ = $isRTL$$18_maxValue$$9_options$$119$$.min, $isRTL$$18_maxValue$$9_options$$119$$ = $isRTL$$18_maxValue$$9_options$$119$$.max;
  $value$$161$$ = window.Math.max(window.Math.min($value$$161$$, $isRTL$$18_maxValue$$9_options$$119$$), $minValue$$10_ratio$$14$$);
  $minValue$$10_ratio$$14$$ = ($value$$161$$ - $minValue$$10_ratio$$14$$) / ($isRTL$$18_maxValue$$9_options$$119$$ - $minValue$$10_ratio$$14$$);
  $isRTL$$18_maxValue$$9_options$$119$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$7$$.$getCtx$());
  return window.Math.PI * (90 - (($isRTL$$18_maxValue$$9_options$$119$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$10_ratio$$14$$ * ($isRTL$$18_maxValue$$9_options$$119$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$8$$, $bounds$$79$$) {
  var $anchorY_backgroundOptions$$4$$ = $gauge$$8$$.$getOptions$().background, $anchorX$$ = $anchorY_backgroundOptions$$4$$._anchorX, $anchorY_backgroundOptions$$4$$ = $anchorY_backgroundOptions$$4$$._anchorY;
  return!(0,window.isNaN)($anchorX$$) && !(0,window.isNaN)($anchorY_backgroundOptions$$4$$) ? new D.$DvtPoint$$($anchorX$$, $anchorY_backgroundOptions$$4$$) : new D.$DvtPoint$$($bounds$$79$$.x + $bounds$$79$$.$w$ / 2, $bounds$$79$$.y + $bounds$$79$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$9$$, $bounds$$80$$) {
  var $radius$$16$$ = window.Math.min($bounds$$80$$.$w$, $bounds$$80$$.$h$) / 2;
  return $gauge$$9$$.$getOptions$().background.indicatorLength * $radius$$16$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$10$$, $indicatorBounds$$1$$) {
  var $anchorY$$1_indicatorOptions$$1$$ = $gauge$$10$$.$getOptions$().indicator, $anchorX$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorX, $anchorY$$1_indicatorOptions$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$1$$) && !(0,window.isNaN)($anchorY$$1_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$1$$, $anchorY$$1_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$11$$, $bounds$$82$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$11$$, $bounds$$82$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$12$$, $container$$96$$, $bounds$$83$$) {
  var $options$$120_size$$29$$ = $gauge$$12$$.$getOptions$();
  if("on" == $options$$120_size$$29$$.metricLabel.rendered) {
    var $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$120_size$$29$$.value, $gauge$$12$$), $minString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$120_size$$29$$.min, $gauge$$12$$), $maxString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$120_size$$29$$.max, $gauge$$12$$), $cx$$42_label$$51$$ = $bounds$$83$$.x + $bounds$$83$$.$w$ / 2, $cy$$43$$ = $bounds$$83$$.y + $bounds$$83$$.$h$ / 2, $labelWidth$$6$$ = $bounds$$83$$.$w$, $labelHeight$$2$$ = 
    $bounds$$83$$.$h$, $metricLabelBounds$$ = $options$$120_size$$29$$.background._metricLabelBounds;
    $metricLabelBounds$$ && ($cx$$42_label$$51$$ = $metricLabelBounds$$.x + $metricLabelBounds$$.width / 2, $cy$$43$$ = $metricLabelBounds$$.y + $metricLabelBounds$$.height / 2, $bounds$$83$$.$w$ = $metricLabelBounds$$.width, $bounds$$83$$.$h$ = $metricLabelBounds$$.height);
    $cx$$42_label$$51$$ = new D.$DvtOutputText$$($gauge$$12$$.$getCtx$(), $labelString$$2$$, $cx$$42_label$$51$$, $cy$$43$$);
    !$options$$120_size$$29$$.metricLabel.style.$getStyle$("color") && $options$$120_size$$29$$.background._isDark && $options$$120_size$$29$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$42_label$$51$$.$setCSSStyle$($options$$120_size$$29$$.metricLabel.style);
    $options$$120_size$$29$$ = ($options$$120_size$$29$$ = (0,window.parseInt)($options$$120_size$$29$$.metricLabel.style.$getFontSize$())) ? (0,window.parseInt)($options$$120_size$$29$$) : D.$JSCompiler_alias_NULL$$;
    $options$$120_size$$29$$ || ($options$$120_size$$29$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$2$$, $minString$$, $maxString$$], $cx$$42_label$$51$$, $bounds$$83$$), $cx$$42_label$$51$$.$setTextString$($labelString$$2$$), $cx$$42_label$$51$$.$setFontSize$($options$$120_size$$29$$));
    $cx$$42_label$$51$$.$alignCenter$();
    $cx$$42_label$$51$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$42_label$$51$$, $labelWidth$$6$$, $labelHeight$$2$$, $container$$96$$) && ($gauge$$12$$.$__label$ = $cx$$42_label$$51$$, $cx$$42_label$$51$$.$isTruncated$() && $gauge$$12$$.$__getEventManager$().$associate$($cx$$42_label$$51$$, new D.$DvtSimpleObjPeer$$($labelString$$2$$)))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$13$$, $container$$97$$, $bounds$$84$$) {
  var $options$$121$$ = $gauge$$13$$.$getOptions$(), $isRTL$$19$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$13$$.$getCtx$());
  if($options$$121$$.background.radius && $options$$121$$.background.majorTickCount) {
    var $radius$$17$$ = $options$$121$$.background._radius, $minValue$$11$$ = $options$$121$$.min, $maxValue$$10$$ = $options$$121$$.max, $majorTickCount$$1$$ = $options$$121$$.background.majorTickCount, $fontSize$$12$$ = 12, $labelBounds$$7$$ = new D.$DvtRectangle$$($cx$$43_labelValue$$, $angleRads$$10_cy$$44$$, $bounds$$84$$.$w$, $bounds$$84$$.$h$), $style$$85_x$$193$$ = $options$$121$$.metricLabel.style.$getStyle$("font-size");
    $options$$121$$.background._tickLabelHeight && !$style$$85_x$$193$$ && ($labelBounds$$7$$.$h$ = $options$$121$$.background._tickLabelHeight);
    $options$$121$$.background._tickLabelWidth && !$style$$85_x$$193$$ && ($labelBounds$$7$$.$w$ = $options$$121$$.background._tickLabelWidth);
    if(!$style$$85_x$$193$$) {
      var $label$$52_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), "", $cx$$43_labelValue$$, $angleRads$$10_cy$$44$$), $fontSize$$12$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$121$$.max, $gauge$$13$$), D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$121$$.min, $gauge$$13$$)], $label$$52_labelString$$3$$, $labelBounds$$7$$)
    }
    for($style$$85_x$$193$$ = 0;$style$$85_x$$193$$ < $majorTickCount$$1$$;$style$$85_x$$193$$++) {
      var $cx$$43_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * $style$$85_x$$193$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$19$$ && ($cx$$43_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * ($majorTickCount$$1$$ - 1 - $style$$85_x$$193$$) / ($majorTickCount$$1$$ - 1));
      var $label$$52_labelString$$3$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$43_labelValue$$, $gauge$$13$$), $angleRads$$10_cy$$44$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$13$$, $cx$$43_labelValue$$), $anchor$$7$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$13$$, $bounds$$84$$), $cx$$43_labelValue$$ = $anchor$$7$$.x + $radius$$17$$ * window.Math.cos($angleRads$$10_cy$$44$$ - window.Math.PI / 2), $angleRads$$10_cy$$44$$ = $anchor$$7$$.y + $radius$$17$$ * 
      window.Math.sin($angleRads$$10_cy$$44$$ - window.Math.PI / 2), $label$$52_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), $label$$52_labelString$$3$$, $cx$$43_labelValue$$, $angleRads$$10_cy$$44$$);
      !$options$$121$$.tickLabel.style.$getStyle$("color") && $options$$121$$.background._isDark && $options$$121$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$52_labelString$$3$$.$setCSSStyle$($options$$121$$.tickLabel.style);
      $options$$121$$.tickLabel.style.$getStyle$("font-size") || $label$$52_labelString$$3$$.$setFontSize$($fontSize$$12$$);
      $label$$52_labelString$$3$$.$alignCenter$();
      $label$$52_labelString$$3$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$52_labelString$$3$$, $labelBounds$$7$$.$w$ + 0.5, $labelBounds$$7$$.$h$ + 0.5, $container$$97$$) && $label$$52_labelString$$3$$.$isTruncated$() && $gauge$$13$$.$__getEventManager$().$associate$($label$$52_labelString$$3$$, new D.$DvtSimpleObjPeer$$($label$$52_labelString$$3$$.$getUntruncatedTextString$()))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$368$$) {
  this.Init($context$$368$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$8$$) {
  var $mat$$42$$ = new D.$DvtMatrix$$;
  $mat$$42$$.rotate($angleRads$$8$$);
  this.$setMatrix$($mat$$42$$);
  this.$_angleRads$ = $angleRads$$8$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$32$$) {
  $params$$32$$ && 1 == $params$$32$$.length && this.$setAngle$($params$$32$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$$.newInstance = function $$DvtRatingGauge$$$newInstance$($context$$374$$, $callback$$106$$, $callbackObj$$61$$) {
  var $gauge$$44$$ = new D.$DvtRatingGauge$$;
  $gauge$$44$$.Init($context$$374$$, $callback$$106$$, $callbackObj$$61$$);
  return $gauge$$44$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$375$$, $callback$$107$$, $callbackObj$$62$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$375$$, $callback$$107$$, $callbackObj$$62$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$148$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$148$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$116$$, $width$$92$$, $height$$85$$) {
  var $outerGap$$2$$ = this.$getOptions$().__layout.outerGap, $maxValue$$12$$ = this.$Options$.max, $isVert$$6$$ = "vertical" == this.$Options$.orientation;
  this.$_size$ = $isVert$$6$$ ? window.Math.min($width$$92$$ - 2 * $outerGap$$2$$, ($height$$85$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$) : window.Math.min($height$$85$$ - 2 * $outerGap$$2$$, ($width$$92$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$);
  this.$_bounds$ = $isVert$$6$$ ? new D.$DvtRectangle$$($outerGap$$2$$, (this.$Height$ - this.$_size$ * $maxValue$$12$$) / 2, this.$Width$ - 2 * $outerGap$$2$$, this.$_size$ * $maxValue$$12$$) : new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$12$$) / 2, $outerGap$$2$$, this.$_size$ * $maxValue$$12$$, this.$Height$ - 2 * $outerGap$$2$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$116$$, $width$$92$$, $height$$85$$)
};
D.$JSCompiler_prototypeAlias$$.$GetLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$GetLogicalObject$$() {
  return new D.$DvtRatingGaugePeer$$(this)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$198$$, $y$$173$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    if("vertical" == this.$Options$.orientation) {
      $y$$173$$ = window.Math.max(window.Math.min($y$$173$$, this.$_bounds$.y + this.$_bounds$.$h$), this.$_bounds$.y), $val$$71$$ = window.Math.max((this.$_bounds$.y + this.$_bounds$.$h$ - $y$$173$$) / this.$_size$, this.$Options$.min)
    }else {
      $x$$198$$ = window.Math.max(window.Math.min($x$$198$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
      var $val$$71$$ = 0, $val$$71$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$198$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$198$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min)
    }
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$71$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$200$$, $y$$175$$) {
  this.$__processValueChangeMove$($x$$200$$, $y$$175$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$201$$, $y$$176$$) {
  var $value$$171$$ = this.$GetValueAt$($x$$201$$, $y$$176$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$171$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$171$$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$202$$, $y$$177$$) {
  var $oldValue$$5$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$202$$, $y$$177$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $value$$172$$, $hoverClip_proc_selContainer_unselContainer$$, $container$$117$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$117$$ || ($container$$117$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$20_selClip_unselClip$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$getCtx$()), $isVert$$7$$ = "vertical" == $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.orientation;
    $value$$172$$ = window.Math.max(window.Math.min($value$$172$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$56_hoverContainer$$ = 0, $b$$41$$ = $value$$172$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$23$$ = $value$$172$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $hoverClip_proc_selContainer_unselContainer$$ && ($a$$56_hoverContainer$$ = $value$$172$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$41$$ = 0);
    $isVert$$7$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$20_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$20_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - 
    $c$$23$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$20_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$20_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$20_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $a$$56_hoverContainer$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$20_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $b$$41$$)) : $isRTL$$20_selClip_unselClip$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$20_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$20_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $isRTL$$20_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$20_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$20_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$20_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$20_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$20_selClip_unselClip$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$20_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$20_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$20_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$20_selClip_unselClip$$), 
    $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($a$$56_hoverContainer$$, $hoverClip_proc_selContainer_unselContainer$$);
    (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)($JSCompiler_StaticMethods___updateClipRects$self$$, $container$$117$$, $value$$172$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$46$$) {
  this.Init();
  this.$_gauge$ = $gauge$$46$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$149_target$$114$$, $threshold$$11_thresholdIndex$$5_x$$203$$, $y$$178$$) {
  $options$$149_target$$114$$ = this.$_gauge$.$getOptions$();
  $threshold$$11_thresholdIndex$$5_x$$203$$ = this.$_gauge$.$__getEventManager$().$isEditing$ ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$11_thresholdIndex$$5_x$$203$$, $y$$178$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$11_thresholdIndex$$5_x$$203$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$11_thresholdIndex$$5_x$$203$$)) && $threshold$$11_thresholdIndex$$5_x$$203$$.shortDesc ? $threshold$$11_thresholdIndex$$5_x$$203$$.shortDesc : $options$$149_target$$114$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$ = "circle diamond rectangle star triangle human".split(" ");
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$47$$, $container$$118$$, $bounds$$99_width$$93$$, $height$$86_threshold$$12_thresholdIndex$$6$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$47$$)) {
    var $options$$150$$ = $gauge$$47$$.$getOptions$(), $isRTL$$21_overlayRect$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$47$$.$getCtx$()), $isVert$$8$$ = "vertical" == $options$$150$$.orientation, $outerGap$$3_unselectedOptions$$ = $options$$150$$.__layout.outerGap, $maxValue$$13$$ = $options$$150$$.max, $size$$32$$ = $isVert$$8$$ ? window.Math.min($bounds$$99_width$$93$$ - 2 * $outerGap$$3_unselectedOptions$$, ($height$$86_threshold$$12_thresholdIndex$$6$$ - 2 * $outerGap$$3_unselectedOptions$$) / 
    $maxValue$$13$$) : window.Math.min($height$$86_threshold$$12_thresholdIndex$$6$$ - 2 * $outerGap$$3_unselectedOptions$$, ($bounds$$99_width$$93$$ - 2 * $outerGap$$3_unselectedOptions$$) / $maxValue$$13$$);
    $bounds$$99_width$$93$$ = $isVert$$8$$ ? new D.$DvtRectangle$$($outerGap$$3_unselectedOptions$$, ($height$$86_threshold$$12_thresholdIndex$$6$$ - $size$$32$$ * $maxValue$$13$$) / 2, $bounds$$99_width$$93$$ - 2 * $outerGap$$3_unselectedOptions$$, $size$$32$$ * $maxValue$$13$$) : new D.$DvtRectangle$$(($bounds$$99_width$$93$$ - $size$$32$$ * $maxValue$$13$$) / 2, $outerGap$$3_unselectedOptions$$, $size$$32$$ * $maxValue$$13$$, $height$$86_threshold$$12_thresholdIndex$$6$$ - 2 * $outerGap$$3_unselectedOptions$$);
    $height$$86_threshold$$12_thresholdIndex$$6$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$47$$);
    $height$$86_threshold$$12_thresholdIndex$$6$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$47$$, $height$$86_threshold$$12_thresholdIndex$$6$$);
    var $selectedColor_selectedOptions$$ = $options$$150$$.selectedState.color, $changedColor_changedOptions$$ = $options$$150$$.changedState.color, $selectedBorderColor_unselContainer$$1$$ = $options$$150$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$150$$.changedState.borderColor;
    $height$$86_threshold$$12_thresholdIndex$$6$$ && $height$$86_threshold$$12_thresholdIndex$$6$$.color && ($changedColor_changedOptions$$ = $selectedColor_selectedOptions$$ = $height$$86_threshold$$12_thresholdIndex$$6$$.color);
    $height$$86_threshold$$12_thresholdIndex$$6$$ && $height$$86_threshold$$12_thresholdIndex$$6$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor_unselContainer$$1$$ = $height$$86_threshold$$12_thresholdIndex$$6$$.borderColor);
    $outerGap$$3_unselectedOptions$$ = {value:0, type:$options$$150$$.unselectedState.shape, color:$options$$150$$.unselectedState.color, borderColor:$options$$150$$.unselectedState.borderColor, visualEffects:$options$$150$$.visualEffects};
    $selectedColor_selectedOptions$$ = {value:0, type:$options$$150$$.selectedState.shape, color:$selectedColor_selectedOptions$$, borderColor:$selectedBorderColor_unselContainer$$1$$, visualEffects:$options$$150$$.visualEffects};
    $changedColor_changedOptions$$ = {value:0, type:$options$$150$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$150$$.visualEffects};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$150$$.hoverState.shape, color:$options$$150$$.hoverState.color, borderColor:$options$$150$$.hoverState.borderColor, visualEffects:$options$$150$$.visualEffects};
    "dot" == $options$$150$$.unselectedState.shape && ($outerGap$$3_unselectedOptions$$.type = "circle", $outerGap$$3_unselectedOptions$$.visualEffects = "none", $outerGap$$3_unselectedOptions$$.size = 0.05);
    $selectedBorderColor_unselContainer$$1$$ = new D.$DvtContainer$$($gauge$$47$$.$getCtx$());
    $container$$118$$.$addChild$($selectedBorderColor_unselContainer$$1$$);
    var $selContainer$$1$$ = new D.$DvtContainer$$($gauge$$47$$.$getCtx$());
    $container$$118$$.$addChild$($selContainer$$1$$);
    var $hoverContainer$$1$$ = new D.$DvtContainer$$($gauge$$47$$.$getCtx$());
    $container$$118$$.$addChild$($hoverContainer$$1$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$47$$, $options$$150$$.value, "render", $container$$118$$);
    for(var $i$$607$$ = 0;$i$$607$$ < $maxValue$$13$$;$i$$607$$++) {
      if("none" != $options$$150$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $selectedBorderColor_unselContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ / 2 - $size$$32$$ / 2, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ - ($i$$607$$ + 1) * $size$$32$$) : $isRTL$$21_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ - ($i$$607$$ + 1) * $size$$32$$, 
        $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $i$$607$$ * $size$$32$$, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap$$3_unselectedOptions$$.type) && ($outerGap$$3_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$3_unselectedOptions$$, $size$$32$$, $size$$32$$)
      }
      $options$$150$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ / 2 - $size$$32$$ / 2, $bounds$$99_width$$93$$.y + 
      $bounds$$99_width$$93$$.$h$ - ($i$$607$$ + 1) * $size$$32$$) : $isRTL$$21_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ - ($i$$607$$ + 1) * $size$$32$$, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $i$$607$$ * $size$$32$$, 
      $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedColor_changedOptions$$.type) && ($changedColor_changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedColor_changedOptions$$, $size$$32$$, $size$$32$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, 
      D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ / 2 - $size$$32$$ / 2, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ - ($i$$607$$ + 1) * $size$$32$$) : $isRTL$$21_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, 
      $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ - ($i$$607$$ + 1) * $size$$32$$, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $i$$607$$ * $size$$32$$, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $selectedColor_selectedOptions$$.type) && 
      ($selectedColor_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($selectedColor_selectedOptions$$, $size$$32$$, $size$$32$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ / 2 - $size$$32$$ / 2, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ - ($i$$607$$ + 1) * $size$$32$$) : $isRTL$$21_overlayRect$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $bounds$$99_width$$93$$.$w$ - ($i$$607$$ + 1) * $size$$32$$, 
      $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$99_width$$93$$.x + $i$$607$$ * $size$$32$$, $bounds$$99_width$$93$$.y + $bounds$$99_width$$93$$.$h$ / 2 - $size$$32$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedBorderColor_hoverOptions$$.type) && ($changedBorderColor_hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedBorderColor_hoverOptions$$, $size$$32$$, $size$$32$$)
    }
    $isRTL$$21_overlayRect$$ = new D.$DvtRect$$($gauge$$47$$.$getCtx$(), $bounds$$99_width$$93$$.x, $bounds$$99_width$$93$$.y, $bounds$$99_width$$93$$.$w$, $bounds$$99_width$$93$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($isRTL$$21_overlayRect$$);
    $container$$118$$.$addChild$($isRTL$$21_overlayRect$$);
    ($height$$86_threshold$$12_thresholdIndex$$6$$ && $height$$86_threshold$$12_thresholdIndex$$6$$.shortDesc ? $height$$86_threshold$$12_thresholdIndex$$6$$.shortDesc : $options$$150$$.shortDesc) && $gauge$$47$$.$__getEventManager$().$associate$($isRTL$$21_overlayRect$$, new D.$DvtRatingGaugePeer$$($gauge$$47$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$47$$, $container$$118$$, new D.$DvtRectangle$$(0, 0, $bounds$$99_width$$93$$, $height$$86_threshold$$12_thresholdIndex$$6$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$45$$) {
  this.Init($gauge$$45$$.$getCtx$(), $gauge$$45$$.$__dispatchEvent$, $gauge$$45$$);
  this.$_gauge$ = $gauge$$45$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$498$$) {
  if(this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    var $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$498$$.pageX, $event$$498$$.pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$30$$.x, $coords$$30$$.y);
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$498$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$499$$) {
  if(this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$499$$.pageX, $event$$499$$.pageY);
    var $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6327$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6327$$, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6327$$.$Options$.value, "render");
    $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6327$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6327$$.$Options$.value, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6327$$.$Options$.value, D.$JSCompiler_alias_FALSE$$))
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$499$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$500$$) {
  var $coords$$32$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$500$$.pageX, $event$$500$$.pageY);
  this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && (!this.$isEditing$ && this.$_gauge$.$getOptions$().value != this.$_gauge$.$GetValueAt$($coords$$32$$.x, $coords$$32$$.y)) && (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$);
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$500$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$501$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$501$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
  return D;
});