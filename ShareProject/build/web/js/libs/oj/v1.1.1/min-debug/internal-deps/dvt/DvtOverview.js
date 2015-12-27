/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$15$$, $width$$140$$) {
  $number$$2_time$$15$$ = ($number$$2_time$$15$$ - $denominator$$1_startTime$$4$$) * $width$$140$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$15$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$15$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$63$$, $width$$141$$) {
  $endTime$$5_number$$3$$ = $pos$$63$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$141$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$141$$ + $startTime$$5$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$458$$, $callback$$133$$, $callbackObj$$83$$) {
  this.Init($context$$458$$, $callback$$133$$, $callbackObj$$83$$)
};
(0,D.$goog$exportPath_$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$459$$, $callback$$134$$, $callbackObj$$84$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$459$$);
  this.$_callback$ = $callback$$134$$;
  this.$_callbackObj$ = $callbackObj$$84$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    this.$EventManager$ = new D.$DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
    this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$37_viewportStart$$, $end$$21_size$$34$$, $overviewLength$$) {
  $overviewLength$$ == D.$JSCompiler_alias_NULL$$ && ($overviewLength$$ = this.$Width$);
  $start$$37_viewportStart$$ = this.$getDatePosition$($start$$37_viewportStart$$);
  var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($end$$21_size$$34$$);
  $start$$37_viewportStart$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this) || ($end$$21_size$$34$$ = window.Math.max($slidingWindow_viewportEnd$$ - $start$$37_viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this)), 0 < $end$$21_size$$34$$ && (0 <= $start$$37_viewportStart$$ && $slidingWindow_viewportEnd$$ <= $overviewLength$$) && ($slidingWindow_viewportEnd$$ = this.$getChildAt$(1), this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, 
  $slidingWindow_viewportEnd$$, $overviewLength$$ - ($start$$37_viewportStart$$ + $end$$21_size$$34$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $start$$37_viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow_viewportEnd$$, $end$$21_size$$34$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this)))
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$) {
  if($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ == D.$JSCompiler_alias_NULL$$) {
    var $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = this.$_start$, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 
    this.$_end$, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = this.$getChildAt$(1), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
    $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$);
    $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ && (this.$_renderStart$ = 
    D.$DvtTimeUtils$$.$getPositionDate$($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, 
    $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ != D.$JSCompiler_alias_NULL$$ && $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, this.$Height$ = $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$);
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ && ($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = this.$Parse$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$), this.$_applyParsedProperties$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$));
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$);
  if($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$) {
    $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = ($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = this.$isVertical$()) ? 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, 0, "window") : new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "window");
    $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$) {
        var $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ = ($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ - 36) / 2, $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 
        3, 6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 8, 8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 28, 8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 33, 6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 3, -6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 
        8, -8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 28, -8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 33, -6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        var $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$, 
        "lhb"), $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$, "rhb"), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = 
        "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, 10), $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, 
          10)
        }else {
          $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$), $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$)
        }
      }else {
        $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ = ($height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ - 36) / 2, $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$ = D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 3, 8, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 
        8) + D.$DvtPathUtils$$.lineTo(8, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 28) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 33, 0, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 36), D.$DvtPathUtils$$.closePath(), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = 
        D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 3, -8, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 8) + D.$DvtPathUtils$$.lineTo(-8, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 28) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 
        33, 0, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ + 36), D.$DvtPathUtils$$.closePath(), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = new D.$DvtRect$$(this.$getCtx$(), 0 - $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
        0, $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "lhb"), $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ = new D.$DvtRect$$(this.$getCtx$(), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
        0, $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "rhb"), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = "col-resize", this.$_handleBackgroundImage$ ? ($bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 
        10, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$), $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$)) : ($bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$), 
        $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$))
      }
      $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$);
      $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$ = new D.$DvtPath$$(this.$getCtx$(), $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$, "lh");
      $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = new D.$DvtPath$$(this.$getCtx$(), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, 
      "rh");
      $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$.$setSolidStroke$(this.$_handleFillColor$);
      $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$));
      $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.setCursor($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$);
      $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$.setCursor($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$);
      $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$.setCursor($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$);
      $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.setCursor($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$);
      $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$.setCursor($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$);
      $handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$.setCursor($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$);
      $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$addChild$($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$);
      $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$addChild$($leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$);
      $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$addChild$($bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$);
      $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$addChild$($handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$);
      $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$addChild$($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$);
      $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$addChild$($handleX$$inline_7481_handleY$$inline_7489_rightGrippy$$inline_7488$$)
    }
    $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.setCursor("move");
    this.$addChild$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$);
    $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ ? new D.$DvtLine$$(this.$getCtx$(), 
    $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ - this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ - this.$getTimeAxisWidth$(), $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "tab") : "above" == this.$_overviewPosition$ ? 
    new D.$DvtLine$$(this.$getCtx$(), 0, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab") : new D.$DvtLine$$(this.$getCtx$(), 0, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), 
    $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab");
    $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$);
    this.$_timeAxisTopBar$ = $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$;
    this.$addChild$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$);
    this.$isLeftAndRightFilterRendered$() && ($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ ? ($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, 0, "lbg"), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, 
    0, "rbg")) : ($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "lbg"), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "rbg")), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$), 
    $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$), 
    D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ ? 
    ($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
    "lbgrh"), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
    "rbgrh")) : ($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
    $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "lbgrh"), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
    $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "rbgrh")), $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$), 
    $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$)))
  }
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this);
    for($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = 0;$bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ < 
    this.$_ticks$.length;$bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$++) {
      $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = this.$_ticks$[$bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$], $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 
      (0,window.parseInt)($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$getAttr$("time"), 10), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = this.$getDatePosition$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$), 
      $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$getAttr$("label"), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = 
      0, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ + 1 < this.$_ticks$.length ? ($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = 
      (0,window.parseInt)(this.$_ticks$[$bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ + 1].$getAttr$("time"), 10), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = 
      this.$getDatePosition$($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$) - $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$) : $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = 
      $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ - $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, this.$isRTL$() && 
      ($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ - $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$), 
      this.$addTick$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "tick" + 
      $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$), this.$addLabel$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
      $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, "label" + $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$)
    }
  }
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = 0;$actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ < 
    this.$_formattedTimeRanges$.length;$actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$++) {
      $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = this.$_formattedTimeRanges$[$actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$], $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = 
      $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = 
      (0,window.parseInt)($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$getAttr$("rs"), 10), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = (0,window.parseInt)($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$getAttr$("re"), 
      10), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$.$getAttr$("c"), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ != 
      D.$JSCompiler_alias_NULL$$ && $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ != D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = 
      this.$getDatePosition$($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = this.$getDatePosition$($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$) - 
      $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$, this.$isRTL$() && ($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ - $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ - $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$), 
      $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = this.$isVertical$() ? new D.$DvtRect$$(this.$getCtx$(), 0, $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ - 
      this.$getTimeAxisWidth$(), $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, "ftr") : new D.$DvtRect$$(this.$getCtx$(), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$, "above" == this.$_overviewPosition$ ? (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) : 
      0, $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), 
      "ftr"), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ != D.$JSCompiler_alias_NULL$$ && $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$.$setSolidFill$($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
      0.4), $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$.setCursor("move"), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$), 
      this.$addChild$($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ - $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$), 
  $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = new D.$DvtLine$$(this.$getCtx$(), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  0, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, "ocd")), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$), this.$addChild$($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$));
  this.$parseDataXML$($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$);
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ && ($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = 
  $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.$getY$(), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = 
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ + 0.5, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ + 
  $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.getHeight(), $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ - 
  0.5, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 0, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = 0.5, $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$ = 
  $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ - 0.5, $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, 
  $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  "lh"), $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, 
  $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$, "rh"), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 0, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, "ltb"), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
  $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, 
  "rtb"), $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$, $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, 
  "bb"), $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
  $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, "tb")) : ($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = 0, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = 
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ + 0.5, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, 
  $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ - 0.5, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 
  $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.$getX$(), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ + 
  0.5, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ = $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ + $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.getWidth(), 
  $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$ = $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ - 0.5, $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = new D.$DvtLine$$(this.$getCtx$(), $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
  $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, 
  "lh"), $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$, $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $leftHandle$$inline_7490_leftHandleCmds$$inline_7482_rightCenter$$inline_7534$$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, 
  "rh"), $cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$ = new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ + 
  1, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, "ltb"), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = new D.$DvtLine$$(this.$getCtx$(), $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ - 
  1, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  "rtb"), $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, 
  $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$, "bb"), $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$), "none" != this.$_windowBorderLeftStyle$ && $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$), "none" != this.$_windowBorderRightStyle$ && $handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($handleSize$$inline_7478_rightHandle$$inline_7536_rightHandleBackground$$inline_7485_size$$inline_11273$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($cursor$$inline_7486_leftTopBar$$inline_7537_rangeStart$$inline_11270_rangeStart_pos$$inline_11274$$), 
  this.$addChild$($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_7539_bottomCenter$$inline_7530_leftGrippy$$inline_7487$$), "none" != this.$_windowBorderTopStyle$ && $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = this.$isVertical$() ? D.$DvtPathUtils$$.moveTo(6, 0) + D.$DvtPathUtils$$.lineTo(0, 5) + D.$DvtPathUtils$$.lineTo(5, 5) + D.$DvtPathUtils$$.lineTo(5, 17) + D.$DvtPathUtils$$.lineTo(0, 17) + D.$DvtPathUtils$$.lineTo(6, 
  22) + D.$DvtPathUtils$$.lineTo(12, 17) + D.$DvtPathUtils$$.lineTo(7, 17) + D.$DvtPathUtils$$.lineTo(7, 5) + D.$DvtPathUtils$$.lineTo(12, 5) + D.$DvtPathUtils$$.closePath() : D.$DvtPathUtils$$.moveTo(5, 0) + D.$DvtPathUtils$$.lineTo(0, 6) + D.$DvtPathUtils$$.lineTo(5, 12) + D.$DvtPathUtils$$.lineTo(5, 7) + D.$DvtPathUtils$$.lineTo(17, 7) + D.$DvtPathUtils$$.lineTo(17, 12) + D.$DvtPathUtils$$.lineTo(22, 6) + D.$DvtPathUtils$$.lineTo(17, 0) + D.$DvtPathUtils$$.lineTo(17, 4) + D.$DvtPathUtils$$.lineTo(5, 
  4) + D.$DvtPathUtils$$.lineTo(5, 0) + D.$DvtPathUtils$$.closePath(), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = new D.$DvtPath$$(this.$getCtx$(), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, "arr"), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$.$setSolidFill$("#ffffff"), 
  $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$.$setSolidStroke$("#000000"), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$addChild$($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), 
  this.$_resizeArrow$ = $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = this.$isVertical$(), $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ = this.$getChildAt$(1), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = 
  (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ ? this.$Height$ : this.$Width$, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 
  this.$_width$, $child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$ = this.$_start$, $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = 
  this.$_renderStart$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = D.$DvtTimeUtils$$.$getPositionDate$($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, 
  $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, 0, $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$), $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($child$$inline_7503_color$$inline_11272_elem$$inline_11267_label$$inline_7506_leftCenter$$inline_7532_leftHandleBackground$$inline_7484_rightBackground$$inline_7494_slidingWindow$$1_start$$inline_7552$$, $end$$inline_7553_leftHandle$$inline_7535_maxWidth$$inline_7507_next_time$$inline_7508_rangeEnd$$inline_11271_rangeWidth$$inline_11275_rightHandle$$inline_7491_rightHandleCmds$$inline_7483_slidingWindow$$inline_7526_slidingWindowPos$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  $end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$), $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = this.$getDatePosition$($bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$), 
  $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = window.Math.min($actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  this.$getDatePosition$($end$$22_height$$inline_11269_left$$inline_7531_leftBackground$$inline_7493_rangeEndTime$$inline_7556_slidingWindow$$inline_7477_time$$inline_7504_timeAxisTopBar$$inline_7492_time_pos$$inline_7505_timelineWidth$$inline_7551$$)), $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = this.$getDatePosition$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$), 
  $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ -= $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, 
  this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ - $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ - $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$) : 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$), 
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$ = this.$_width$, $interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$ = this.$_start$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$ = 
  this.$_end$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  1, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  2, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, 
  $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$, 
  $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$313_props$$2_renderStart$$inline_7554_renderStartPos$$inline_7559_start$$inline_11281_top$$inline_7527_vertical$$inline_7547$$, $actualSize$$inline_7550_end$$inline_11282_handleStart$$inline_7479_i$$inline_7515_line$$inline_7521_newWidth$$inline_7560_rangeEndPos$$inline_7558_rightBackgroundResizeHandle$$inline_7496_size$$inline_7501_time_pos$$inline_7520_topCenter$$inline_7528$$, 
  $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$, $height$$115_right$$inline_7533_timelineWidth$$inline_11280_topBar$$inline_7540_window$$inline_7548$$) - $bottom$$inline_7529_day1$$inline_11283_displayable$$inline_11276_i$$inline_7502_leftBackgroundResizeHandle$$inline_7495_pos1$$inline_11285_rangeStartPos$$inline_7557_rangeStartTime$$inline_7555_start$$38_vertical$$inline_7476_width$$inline_11268$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = this.$_initPos$ / this.$_increment$, this.$isRTL$() && ($actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$ = 0 - $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_7564_arrow$$inline_7544_arrowCmds$$inline_7543_day2$$inline_11284_rightTopBar$$inline_7538_size$$inline_7549_width$$126$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$315$$) {
  return this.$getParser$($obj$$315$$).parse($obj$$315$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$3$$) {
  this.$_start$ = $props$$3$$.start;
  this.$_end$ = $props$$3$$.end;
  this.$_width$ = $props$$3$$.width;
  this.$_renderStart$ = $props$$3$$.$renderStart$;
  this.$_currentTime$ = $props$$3$$.currentTime;
  this.$_initialFocusTime$ = $props$$3$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$3$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$3$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$3$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$3$$.orientation;
  this.$_overviewPosition$ = $props$$3$$.$overviewPosition$;
  this.$_isRtl$ = $props$$3$$.$isRtl$;
  $props$$3$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$3$$.$featuresOff$.split(" "));
  $props$$3$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$3$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$3$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$3$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$3$$.$timeAxisInfo$;
  $props$$3$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$3$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$3$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$3$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$3$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$3$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$3$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$3$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$3$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$3$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$3$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$3$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$3$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$3$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$3$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$3$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$3$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$3$$.$handleWidth$;
  this.$_handleHeight$ = $props$$3$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$3$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$3$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$3$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$3$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$3$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$3$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$3$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$3$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$3$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$10$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$10$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$52$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$52$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return!this.$isVertical$() && "true" == this.$_isRtl$
};
D.$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$) {
  var $id$$236$$ = $drawable$$.getId();
  return"lh" == $id$$236$$ || "rh" == $id$$236$$ || "lhb" == $id$$236$$ || "rhb" == $id$$236$$ || "grpy" == $id$$236$$ || "lbgrh" == $id$$236$$ || "rbgrh" == $id$$236$$ || $drawable$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$127$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$127$$) && $width$$127$$ < this.$Width$ ? $width$$127$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$JSCompiler_StaticMethods_getTimeAxisHeight$$ = function $$JSCompiler_StaticMethods_getTimeAxisHeight$$$($JSCompiler_StaticMethods_getTimeAxisHeight$self$$) {
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$116$$ = (0,window.parseInt)($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$.height, 10);
    $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ = !(0,window.isNaN)($height$$116$$) && $height$$116$$ < $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$Height$ ? $height$$116$$ : 20
  }
  return $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$601$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$601$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$601$$.targetTouches.length ? $event$$601$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$601$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$602$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$602$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$602$$.targetTouches.length ? $event$$602$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$602$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightHandle$$ = function $$JSCompiler_StaticMethods_getRightHandle$$$($JSCompiler_StaticMethods_getRightHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightHandle$self$$.$getChildAt$($JSCompiler_StaticMethods_getRightHandle$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_getRightHandle$self$$.$_lastChildIndex$ - 1))
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$12$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$12$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$12$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$13$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$13$$.$getY1$() : $line$$13$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$603_target$$123$$) {
  $event$$603_target$$123$$ = $event$$603_target$$123$$.target;
  if($event$$603_target$$123$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$237$$ = $event$$603_target$$123$$.getId();
    if($id$$237$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$237$$.substr($id$$237$$.length - 7)) {
      return this.$getChildAfter$($event$$603_target$$123$$)
    }
    if("tick" != $id$$237$$.substr(0, 4) && "ltb" != $id$$237$$ && "rtb" != $id$$237$$ && "bb" != $id$$237$$ && "tab" != $id$$237$$) {
      return $event$$603_target$$123$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$1$$) {
  return"window" == $drawable$$1$$.getId() || "ftr" == $drawable$$1$$.getId() || "sta" == $drawable$$1$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$1$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$128$$, $height$$117$$) {
  var $background$$12$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$128$$, $height$$117$$, "bg");
  $background$$12$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$12$$);
  this.$addChild$($background$$12$$);
  return $background$$12$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$, $width$$130$$, $height$$119$$) {
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$getCtx$(), $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleBackgroundImage$, ($width$$130$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$) / 2, ($height$$119$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$, 
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$, "grpy");
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), "grpy"), $color$$79$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$2$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$749$$ = 0;9 > $i$$749$$;$i$$749$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$749$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$749$$ + 1, $starty$$1$$, "dot1" + $i$$749$$);
      $dot$$.$setSolidStroke$($color$$79$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 1 + 2 * $i$$749$$, $starty$$1$$, $startx$$2$$ + 1 + 2 * $i$$749$$ + 1, $starty$$1$$, "dot2" + $i$$749$$);
      $dot$$.$setSolidStroke$($color$$79$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$749$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$749$$ + 1, $starty$$1$$, "dot3" + $i$$749$$);
      $dot$$.$setSolidStroke$($color$$79$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$79$$);
    $grippy$$1$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$2$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$749$$ = 0;9 > $i$$749$$;$i$$749$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$749$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$749$$ + 1, "dot1" + $i$$749$$), $dot$$.$setSolidStroke$($color$$79$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$749$$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$749$$ + 1, "dot2" + $i$$749$$), $dot$$.$setSolidStroke$($color$$79$$), 
      $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$749$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$749$$ + 1, "dot3" + $i$$749$$), $dot$$.$setSolidStroke$($color$$79$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$79$$);
    $grippy$$1$$.$addChild$($dot$$);
    $startx$$2$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$79$$);
  $grippy$$1$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$1$$);
  return $grippy$$1$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$42$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$42$$.getHeight() : $rect$$42$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$4$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$4$$.$getTranslateY$() : $slidingWindow$$4$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$, $pos$$54$$) {
  $pos$$54$$ = window.Math.max(0, $pos$$54$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$5$$.$setTranslateY$($pos$$54$$) : $rightStart_slidingWindow$$5$$.$setTranslateX$($pos$$54$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$54$$);
    $rightStart_slidingWindow$$5$$ = $pos$$54$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$5$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$5$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$54$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$5$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$, $size$$37$$) {
  $size$$37$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$37$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$ = $size$$37$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$37$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$7$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$) : $rightGrippy$$1_slidingWindow$$7$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$) + $size$$37$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$7$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$37$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$.$setTranslateY$($size$$37$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateY$($size$$37$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$37$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_7572$$.$setTranslateX$($size$$37$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateX$($size$$37$$ - 10)))
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$14_pos$$55$$, $stroke$$96_width$$134$$, $height$$123$$, $id$$238$$) {
  $line$$14_pos$$55$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$getCtx$(), 0, $line$$14_pos$$55$$, $stroke$$96_width$$134$$, $line$$14_pos$$55$$, $id$$238$$) : new D.$DvtLine$$(this.$getCtx$(), $line$$14_pos$$55$$, 0, $line$$14_pos$$55$$, $height$$123$$, $id$$238$$);
  $stroke$$96_width$$134$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$96_width$$134$$.$setStyle$(1, 3);
  $line$$14_pos$$55$$.$setStroke$($stroke$$96_width$$134$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$14_pos$$55$$);
  this.$addChild$($line$$14_pos$$55$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($pos$$56$$, $label$$68_text$$99$$, $width$$135_y$$218$$, $height$$124$$, $maxWidth$$21$$, $dim$$63_id$$239$$) {
  this.$isVertical$() ? ($label$$68_text$$99$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$68_text$$99$$, 4, $pos$$56$$, $dim$$63_id$$239$$), $label$$68_text$$99$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"))) : ($width$$135_y$$218$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$124$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) + 2, $label$$68_text$$99$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$68_text$$99$$, $pos$$56$$ + 5, $width$$135_y$$218$$, $dim$$63_id$$239$$), 
  $label$$68_text$$99$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold")), this.$isRTL$() && (this.$addChild$($label$$68_text$$99$$), $dim$$63_id$$239$$ = $label$$68_text$$99$$.$getDimensions$(), this.removeChild($label$$68_text$$99$$), $maxWidth$$21$$ -= 10, $label$$68_text$$99$$.$setX$($pos$$56$$ - window.Math.min($dim$$63_id$$239$$.$w$, $maxWidth$$21$$) - 5)));
  D.$DvtTextUtils$$.$fitText$($label$$68_text$$99$$, $maxWidth$$21$$, window.Infinity, this);
  $label$$68_text$$99$$.$_rawText$ = $label$$68_text$$99$$.$getUntruncatedTextString$()
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$2$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(5);
  if($newLeft$$2$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$105_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$);
    $newLeft$$2$$ = window.Math.max($animator$$105_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$2$$));
    $animator$$105_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getCtx$(), 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $posGetter$$, $posSetter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$2$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $newLeft$$2$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$2$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$105_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$105_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$106$$, $obj$$316$$, $getter$$5$$, $setter$$3$$, $value$$179$$) {
  $animator$$106$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$106$$, "typeNumber", $obj$$316$$, $getter$$5$$, $setter$$3$$, $value$$179$$) : $setter$$3$$.call($obj$$316$$, $value$$179$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$604_relPos$$57$$) {
  var $drawable$$2$$ = this.$_findDrawable$($event$$604_relPos$$57$$);
  if($drawable$$2$$ && !("bg" == $drawable$$2$$.getId() || "ocd" == $drawable$$2$$.getId())) {
    if("label" == $drawable$$2$$.getId().substr(0, 5) && ($drawable$$2$$ instanceof D.$DvtOutputText$$ || $drawable$$2$$ instanceof D.$DvtBackgroundOutputText$$)) {
      $drawable$$2$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$604_relPos$$57$$.pageX, $event$$604_relPos$$57$$.pageY, $drawable$$2$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$) && ($event$$604_relPos$$57$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $event$$604_relPos$$57$$.pageX, $event$$604_relPos$$57$$.pageY), $event$$604_relPos$$57$$ = this.$stageToLocal$($event$$604_relPos$$57$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$604_relPos$$57$$.x + 6, $event$$604_relPos$$57$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$604_relPos$$57$$.x - 6, $event$$604_relPos$$57$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$2$$.getId() || "ftr" == $drawable$$2$$.getId() || "arr" == $drawable$$2$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$2$$
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$3_event$$605$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$3_event$$605$$ = this.$_findDrawable$($drawable$$3_event$$605$$);
  if($drawable$$3_event$$605$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$3_event$$605$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$3_event$$605$$
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$606_newEndTime_relPos$$58_slidingWindow$$9$$, $newPos$$1_pageX$$10$$, $evt$$60_pageY$$10_pos$$57$$) {
  $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$.stopPropagation();
  var $drawable$$4_newStartTime_size$$40$$ = this.$_findDrawable$($event$$606_newEndTime_relPos$$58_slidingWindow$$9$$);
  if($drawable$$4_newStartTime_size$$40$$ && !("window" == $drawable$$4_newStartTime_size$$40$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$4_newStartTime_size$$40$$))) {
    if("bg" == $drawable$$4_newStartTime_size$$40$$.getId() || "label" == $drawable$$4_newStartTime_size$$40$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$40$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$40$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$40$$.getId()) {
      $newPos$$1_pageX$$10$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$1_pageX$$10$$ = $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$.pageX);
      $evt$$60_pageY$$10_pos$$57$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$60_pageY$$10_pos$$57$$ = $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$.pageY);
      $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $newPos$$1_pageX$$10$$, $evt$$60_pageY$$10_pos$$57$$);
      $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$stageToLocal$($event$$606_newEndTime_relPos$$58_slidingWindow$$9$$);
      this.$isVertical$() ? ($evt$$60_pageY$$10_pos$$57$$ = $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$.y, $drawable$$4_newStartTime_size$$40$$ = this.$Height$) : ($evt$$60_pageY$$10_pos$$57$$ = $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$.x, $drawable$$4_newStartTime_size$$40$$ = this.$Width$);
      $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$getChildAt$(1);
      $newPos$$1_pageX$$10$$ = $evt$$60_pageY$$10_pos$$57$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$1_pageX$$10$$);
      this.$isRTL$() && ($evt$$60_pageY$$10_pos$$57$$ = this.$Width$ - $evt$$60_pageY$$10_pos$$57$$);
      var $time$$10$$ = this.$getPositionDate$($evt$$60_pageY$$10_pos$$57$$);
      $evt$$60_pageY$$10_pos$$57$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$60_pageY$$10_pos$$57$$.setTime($time$$10$$);
      $newPos$$1_pageX$$10$$ = window.Math.max(0, window.Math.min($newPos$$1_pageX$$10$$, $drawable$$4_newStartTime_size$$40$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$)));
      this.$isRTL$() ? ($drawable$$4_newStartTime_size$$40$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$1_pageX$$10$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$))), $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$getPositionDate$(this.$Width$ - $newPos$$1_pageX$$10$$)) : ($drawable$$4_newStartTime_size$$40$$ = this.$getPositionDate$($newPos$$1_pageX$$10$$), $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$ = this.$getPositionDate$($newPos$$1_pageX$$10$$ + 
      (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$60_pageY$$10_pos$$57$$, $drawable$$4_newStartTime_size$$40$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$60_pageY$$10_pos$$57$$, $event$$606_newEndTime_relPos$$58_slidingWindow$$9$$);
      this.dispatchEvent($evt$$60_pageY$$10_pos$$57$$)
    }else {
      return $drawable$$4_newStartTime_size$$40$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($drawable$$5_event$$607_evt$$61$$, $compX_cursor$$inline_7575_slidingWindow$$10$$, $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$) {
  $drawable$$5_event$$607_evt$$61$$ = this.$_findDrawable$($drawable$$5_event$$607_evt$$61$$);
  if($drawable$$5_event$$607_evt$$61$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$5_event$$607_evt$$61$$)) {
    if("ftr" == $drawable$$5_event$$607_evt$$61$$.getId() || "sta" == $drawable$$5_event$$607_evt$$61$$.getId()) {
      $drawable$$5_event$$607_evt$$61$$ = this.$getChildAt$(1)
    }
    this.$_initX$ = $compX_cursor$$inline_7575_slidingWindow$$10$$;
    this.$_initY$ = $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$;
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$5_event$$607_evt$$61$$)) {
      $compX_cursor$$inline_7575_slidingWindow$$10$$ = this.$getChildAt$(1);
      this.$isRTL$() ? (this.$_oldEndPos$ = this.$Width$ - $compX_cursor$$inline_7575_slidingWindow$$10$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $compX_cursor$$inline_7575_slidingWindow$$10$$.getWidth()) : (this.$_oldStartPos$ = $compX_cursor$$inline_7575_slidingWindow$$10$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $compX_cursor$$inline_7575_slidingWindow$$10$$.getWidth());
      "grpy" == $drawable$$5_event$$607_evt$$61$$.getParent().getId() && ($drawable$$5_event$$607_evt$$61$$ = $drawable$$5_event$$607_evt$$61$$.getParent());
      $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ = $drawable$$5_event$$607_evt$$61$$.getId();
      "grpy" == $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ && ($drawable$$5_event$$607_evt$$61$$ = $compX_cursor$$inline_7575_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$607_evt$$61$$), $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ = $drawable$$5_event$$607_evt$$61$$.getId());
      if("lh" == $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ || "rh" == $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$) {
        $drawable$$5_event$$607_evt$$61$$ = $compX_cursor$$inline_7575_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$607_evt$$61$$), $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ = $drawable$$5_event$$607_evt$$61$$.getId()
      }
      "lbgrh" == $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ && ($drawable$$5_event$$607_evt$$61$$ = $compX_cursor$$inline_7575_slidingWindow$$10$$.$getChildAt$(0));
      "rbgrh" == $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ && ($drawable$$5_event$$607_evt$$61$$ = $compX_cursor$$inline_7575_slidingWindow$$10$$.$getChildAt$($compX_cursor$$inline_7575_slidingWindow$$10$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? ($drawable$$5_event$$607_evt$$61$$.$setY$(-20), $drawable$$5_event$$607_evt$$61$$.$setHeight$(2 * ($drawable$$5_event$$607_evt$$61$$.getHeight() + 20))) : ($drawable$$5_event$$607_evt$$61$$.$setX$(-20), $drawable$$5_event$$607_evt$$61$$.$setWidth$(2 * ($drawable$$5_event$$607_evt$$61$$.getWidth() + 20))));
      $compX_cursor$$inline_7575_slidingWindow$$10$$ = $drawable$$5_event$$607_evt$$61$$.getCursor();
      $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ = this.$getChildAt$(1);
      $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ != D.$JSCompiler_alias_NULL$$ && $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$.setCursor($compX_cursor$$inline_7575_slidingWindow$$10$$);
      if(this.$isLeftAndRightFilterRendered$()) {
        $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this);
        var $rightBackground$$inline_7578$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
        $compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7578$$ != D.$JSCompiler_alias_NULL$$ && ($compY_drawableId_leftBackground$$inline_7577_slidingWindow$$inline_7576$$.setCursor($compX_cursor$$inline_7575_slidingWindow$$10$$), $rightBackground$$inline_7578$$.setCursor($compX_cursor$$inline_7575_slidingWindow$$10$$))
      }
    }
    this.$_moveDrawable$ = $drawable$$5_event$$607_evt$$61$$;
    $drawable$$5_event$$607_evt$$61$$ = new D.$DvtOverviewEvent$$("dropCallback");
    this.dispatchEvent($drawable$$5_event$$607_evt$$61$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == this.$_moveDrawable$.getId()) {
      this.$finishWindowDrag$(0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)(this.$_moveDrawable$)) {
        this.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_7582_slidingWindow$$inline_7581$$ = this.$getChildAt$(1);
        $leftBackground$$inline_7582_slidingWindow$$inline_7581$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_7582_slidingWindow$$inline_7581$$.setCursor("move");
        if(this.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_7582_slidingWindow$$inline_7581$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this), $rightBackground$$inline_7583$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
          $leftBackground$$inline_7582_slidingWindow$$inline_7581$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7583$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_7582_slidingWindow$$inline_7581$$.setCursor("default"), $rightBackground$$inline_7583$$.setCursor("default"))
        }
      }
    }
    this.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    this.$_initX$ = -1
  }
};
D.$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($event$$608$$, $compX$$1$$, $compY$$1$$) {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != this.$_initX$) {
    var $diffX$$11$$ = $compX$$1$$ - this.$_initX$, $diffY$$12$$ = $compY$$1$$ - this.$_initY$;
    this.$_initX$ = $compX$$1$$;
    this.$_initY$ = $compY$$1$$;
    "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$11$$, $diffY$$12$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$608$$, $diffX$$11$$, $diffY$$12$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($event$$608$$, $diffX$$11$$, $diffY$$12$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$609$$) {
  var $touches$$10$$ = $event$$609$$.touches;
  this.$_touchStartX$ = $touches$$10$$[0].pageX;
  this.$_touchStartY$ = $touches$$10$$[0].pageY;
  2 == $touches$$10$$.length && ($event$$609$$.preventDefault(), this.$_touchStartX2$ = $touches$$10$$[1].pageX, this.$_touchStartY2$ = $touches$$10$$[1].pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$610_touches$$11$$) {
  $event$$610_touches$$11$$.preventDefault();
  $event$$610_touches$$11$$ = $event$$610_touches$$11$$.touches;
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $event$$610_touches$$11$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $event$$610_touches$$11$$[1].pageX, this.$_counter$ = 0)
  }else {
    var $pageDy$$1$$ = window.Math.abs(this.$_touchStartY$ - $event$$610_touches$$11$$[0].pageY);
    if(3 < window.Math.abs(this.$_touchStartX$ - $event$$610_touches$$11$$[0].pageX) || 3 < $pageDy$$1$$) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$611$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$611$$, this.$_touchStartX$, this.$_touchStartY$);
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$612$$) {
  var $delta$$17_keyCode$$38$$ = $event$$612$$.keyCode;
  if(37 === $delta$$17_keyCode$$38$$ || 39 === $delta$$17_keyCode$$38$$) {
    $delta$$17_keyCode$$38$$ = 37 === $delta$$17_keyCode$$38$$ ? -1 : 1, ($event$$612$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$612$$, $delta$$17_keyCode$$38$$, $delta$$17_keyCode$$38$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$613$$) {
  var $delta$$18_keyCode$$39$$ = $event$$613$$.keyCode;
  if(37 === $delta$$18_keyCode$$39$$ || 39 === $delta$$18_keyCode$$39$$) {
    $delta$$18_keyCode$$39$$ = 37 === $delta$$18_keyCode$$39$$ ? -1 : 1, ($event$$613$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $delta$$18_keyCode$$39$$, $delta$$18_keyCode$$39$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$614$$, $deltaX$$15$$, $deltaY$$18$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$15$$, $deltaY$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($deltaX$$16$$, $deltaY$$19$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$16$$, $deltaY$$19$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$62_type$$242$$, $delta$$19_deltaX$$17$$, $deltaY$$20$$) {
  var $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$61$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$41$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$19_deltaX$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$20$$ : $delta$$19_deltaX$$17$$;
  $pos$$61$$ + $delta$$19_deltaX$$17$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$41$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -2 : -1) : $pos$$61$$ + $newStartTime$$1_scrollTo_size$$41$$ + $delta$$19_deltaX$$17$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$41$$), $newStartTime$$1_scrollTo_size$$41$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $pos$$61$$ + $delta$$19_deltaX$$17$$), $newStartTime$$1_scrollTo_size$$41$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$41$$ - 
  $pos$$61$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$61$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$62_type$$242$$ = new D.$DvtOverviewEvent$$($evt$$62_type$$242$$);
  $evt$$62_type$$242$$.$setPosition$($newStartTime$$1_scrollTo_size$$41$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($newStartTime$$1_scrollTo_size$$41$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$61$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$61$$)) : ($newStartTime$$1_scrollTo_size$$41$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$61$$), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$61$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$62_type$$242$$, $newStartTime$$1_scrollTo_size$$41$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$62_type$$242$$, $newEndTime$$1_slidingWindow$$17$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$62_type$$242$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$616$$, $deltaX$$19$$, $deltaY$$22$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$616$$, $deltaX$$19$$, $deltaY$$22$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$, $delta$$20_deltaY$$23$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$63_size$$42$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$20_deltaY$$23$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$20_deltaY$$23$$ : $deltaX$$20_newEndTime$$2_slidingWindow$$18$$;
  if(0 != $delta$$20_deltaY$$23$$) {
    $deltaX$$20_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$20_deltaY$$23$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$20_deltaY$$23$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$)).x;
      $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$);
      if(0 < $delta$$20_deltaY$$23$$ && $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ <= $windowPos$$ || 0 > $delta$$20_deltaY$$23$$ && $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$, $windowPos$$ + $delta$$20_deltaY$$23$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ - $delta$$20_deltaY$$23$$)
    }else {
      if($windowSize$$ + $delta$$20_deltaY$$23$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$20_deltaY$$23$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$)).x;
      $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$);
      if(0 < $delta$$20_deltaY$$23$$ && $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$20_deltaY$$23$$ && $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ + $delta$$20_deltaY$$23$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$));
    $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $evt$$63_size$$42$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $evt$$63_size$$42$$ = new D.$DvtOverviewEvent$$("rangeChanging");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$42$$, "newSize", $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$);
    $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$42$$, "endHandle", $endHandle$$inline_7594_event$$617_newSize$$1_relPos$$59_time$$12$$);
    $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$42$$, "expand", 0 > $delta$$20_deltaY$$23$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$63_size$$42$$, "expand", 0 < $delta$$20_deltaY$$23$$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$20_newEndTime$$2_slidingWindow$$18$$))), $deltaX$$20_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$20_newEndTime$$2_slidingWindow$$18$$)), $deltaX$$20_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$)));
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$63_size$$42$$, $isLeft$$5_newStartTime$$2$$);
    (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$63_size$$42$$, $deltaX$$20_newEndTime$$2_slidingWindow$$18$$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$63_size$$42$$)
  }
};
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$45$$ = this.$_start$, $end$$29_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$43$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$19$$ = this.$getChildAt$(1), $newStartTime$$3_time$$13$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newSize$$2_start$$45$$ = $oldEndTime_size$$43$$ * ($end$$29_oldStartTime$$ - $newSize$$2_start$$45$$) / 
  ($newStartTime$$3_time$$13$$ - $newSize$$2_start$$45$$), $end$$29_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$43$$ = this.$getPositionDate$(this.$_oldEndPos$);
  this.$isRTL$() ? ($newStartTime$$3_time$$13$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$13$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
  $newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)));
  var $evt$$64$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "newSize", $newSize$$2_start$$45$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "oldStartTime", $end$$29_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$64$$, "oldEndTime", $oldEndTime_size$$43$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$64$$, $newStartTime$$3_time$$13$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$64$$, $newEndTime$$3_slidingWindow$$19$$);
  this.dispatchEvent($evt$$64$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $rightCenter$$1_slidingWindow$$20$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $left$$19$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$), $leftCenter$$1$$ = $left$$19$$ + 0.5, $rightCenter$$1_slidingWindow$$20$$ = $left$$19$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$) - 0.5, $leftHandle$$3$$ = 
  $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, $leftCenter$$1$$, $leftCenter$$1$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, $rightCenter$$1_slidingWindow$$20$$, $rightCenter$$1_slidingWindow$$20$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, $left$$19$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$), -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$618$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$618$$)
};
D.$DvtOverview$$.prototype.$destroy$ = function $$DvtOverview$$$$$destroy$$() {
  D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : 
  (this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, 
  this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this));
  D.$DvtOverview$$.$superclass$.$destroy$.call(this)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$55$$) {
  this.Init($view$$55$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$97$$) {
  return this.$ParseRootAttributes$($data$$97$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$230$$) {
  var $ret$$92$$ = {};
  $ret$$92$$.$animationOnClick$ = $options$$230$$.animationOnClick;
  $options$$230$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = $options$$230$$.startTime);
  $options$$230$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.end = $options$$230$$.endTime);
  $ret$$92$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = (new window.Date).getTime());
  if($ret$$92$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$92$$.end <= $ret$$92$$.start) {
    $ret$$92$$.end = $ret$$92$$.start + 864E5
  }
  $options$$230$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.currentTime = $options$$230$$.currentTime);
  $options$$230$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$initialFocusTime$ = $options$$230$$.initialFocusTime);
  $ret$$92$$.orientation = "horizontal";
  $options$$230$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.orientation = $options$$230$$.orientation);
  $ret$$92$$.$featuresOff$ = $options$$230$$.featuresOff;
  $ret$$92$$.$minimumWindowSize$ = $options$$230$$.minimumWindowSize;
  $ret$$92$$.$leftMargin$ = $options$$230$$.leftMargin;
  $ret$$92$$.$rightMargin$ = $options$$230$$.rightMargin;
  if($options$$230$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$230$$.viewportEndTime, $viewportStartTime$$ = $ret$$92$$.start;
    $options$$230$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$230$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$230$$.viewportStartTime);
    $ret$$92$$.width = $options$$230$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$230$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$92$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$92$$.$renderStart$ = $ret$$92$$.start
  }
  0 == $ret$$92$$.width && ($ret$$92$$.width = 1E3);
  $ret$$92$$.$overviewPosition$ = "below";
  $ret$$92$$.$selectionMode$ = "none";
  $ret$$92$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$getCtx$()).toString();
  $options$$230$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$isRtl$ = $options$$230$$.rtl.toString());
  $ret$$92$$.$handleFillColor$ = "#FFFFFF";
  $ret$$92$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$92$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$92$$.$windowBackgroundAlpha$ = 1;
  $ret$$92$$.$windowBorderTopStyle$ = "solid";
  $ret$$92$$.$windowBorderRightStyle$ = "solid";
  $ret$$92$$.$windowBorderBottomStyle$ = "solid";
  $ret$$92$$.$windowBorderLeftStyle$ = "solid";
  $ret$$92$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$92$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$92$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$92$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$92$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$92$$.$timeAxisBarOpacity$ = 1;
  $ret$$92$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$92$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$230$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$230$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleFillColor$ = $options$$230$$.style.handleFillColor), $options$$230$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleTextureColor$ = $options$$230$$.style.handleTextureColor), $options$$230$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleBackgroundImage$ = $options$$230$$.style.handleBackgroundImage), 
  $options$$230$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleWidth$ = $options$$230$$.style.handleWidth), $options$$230$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleHeight$ = $options$$230$$.style.handleHeight), $options$$230$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBackgroundColor$ = $options$$230$$.style.windowBackgroundColor), $options$$230$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$windowBackgroundAlpha$ = $options$$230$$.style.windowBackgroundAlpha), $options$$230$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopStyle$ = $options$$230$$.style.windowBorderTopStyle), $options$$230$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightStyle$ = $options$$230$$.style.windowBorderRightStyle), $options$$230$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomStyle$ = 
  $options$$230$$.style.windowBorderBottomStyle), $options$$230$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftStyle$ = $options$$230$$.style.windowBorderLeftStyle), $options$$230$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopColor$ = $options$$230$$.style.windowBorderTopColor), $options$$230$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightColor$ = $options$$230$$.style.windowBorderRightColor), 
  $options$$230$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomColor$ = $options$$230$$.style.windowBorderBottomColor), $options$$230$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftColor$ = $options$$230$$.style.windowBorderLeftColor), $options$$230$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$overviewBackgroundColor$ = $options$$230$$.style.overviewBackgroundColor), $options$$230$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$currentTimeIndicatorColor$ = $options$$230$$.style.currentTimeIndicatorColor), $options$$230$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$timeIndicatorColor$ = $options$$230$$.style.timeIndicatorColor), $options$$230$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$leftFilterPanelColor$ = $options$$230$$.style.leftFilterPanelColor), $options$$230$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$leftFilterPanelAlpha$ = $options$$230$$.style.leftFilterPanelAlpha), $options$$230$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelColor$ = $options$$230$$.style.rightFilterPanelColor), $options$$230$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelAlpha$ = $options$$230$$.style.rightFilterPanelAlpha));
  return $ret$$92$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$1_startTime$$3$$, $endTime$$3$$, $denominator_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$1_startTime$$3$$ = $viewportEndPos$$ * ($endTime$$3$$ - $number$$1_startTime$$3$$);
  $denominator_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator_viewportStartTime$$1$$;
  return 0 == $number$$1_startTime$$3$$ || 0 == $denominator_viewportStartTime$$1$$ ? 0 : $number$$1_startTime$$3$$ / $denominator_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$243$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$243$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$14$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$62$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$62$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
D.$DvtOverviewEventManager$$ = function $$DvtOverviewEventManager$$$($overview$$1$$) {
  this.Init($overview$$1$$.$getCtx$(), $overview$$1$$.$processEvent$, $overview$$1$$);
  this.$_overview$ = $overview$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEventManager$$, D.$DvtEventManager$$, "DvtOverviewEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverviewEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$74$$) {
  D.$DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$74$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$619$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$619$$) : this.$_onMouseDragStart$($event$$619$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$620$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$620$$) : this.$_onMouseDragMove$($event$$620$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$621$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$621$$) : this.$_onMouseDragEnd$($event$$621$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$11$$, $pageY$$11$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$11$$ - this.$_stageAbsolutePosition$.x, $pageY$$11$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$622$$) {
  if(2 != $event$$622$$.button) {
    var $relPos$$60$$ = this.$_getRelativePosition$($event$$622$$.pageX, $event$$622$$.pageY);
    (0,D.$DvtEventManager$consumeEvent$$)($event$$622$$);
    this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
    return this.$_overview$.$beginDragPan$($event$$622$$, $relPos$$60$$.x, $relPos$$60$$.y)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$623$$) {
  var $relPos$$61$$ = this.$_getRelativePosition$($event$$623$$.pageX, $event$$623$$.pageY);
  $event$$623$$.stopPropagation();
  this.$_overview$.$contDragPan$($event$$623$$, $relPos$$61$$.x, $relPos$$61$$.y);
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($event$$624$$) {
  $event$$624$$.stopPropagation();
  this.$_overview$.$endDragPan$();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$625$$) {
  var $relPos$$62_touches$$12$$ = $event$$625$$.touches;
  $event$$625$$.stopPropagation();
  return 1 == $relPos$$62_touches$$12$$.length ? ($relPos$$62_touches$$12$$ = this.$_getRelativePosition$($relPos$$62_touches$$12$$[0].pageX, $relPos$$62_touches$$12$$[0].pageY), $event$$625$$.preventDefault(), this.$_overview$.$beginDragPan$($event$$625$$, $relPos$$62_touches$$12$$.x, $relPos$$62_touches$$12$$.y)) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$626$$) {
  var $relPos$$63_touches$$13$$ = $event$$626$$.touches;
  1 == $relPos$$63_touches$$13$$.length && ($relPos$$63_touches$$13$$ = this.$_getRelativePosition$($relPos$$63_touches$$13$$[0].pageX, $relPos$$63_touches$$13$$[0].pageY), this.$_overview$.$contDragPan$($event$$626$$, $relPos$$63_touches$$13$$.x, $relPos$$63_touches$$13$$.y), $event$$626$$.preventDefault());
  $event$$626$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$627$$) {
  this.$_overview$.$endDragPan$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$627$$);
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
  return D;
});