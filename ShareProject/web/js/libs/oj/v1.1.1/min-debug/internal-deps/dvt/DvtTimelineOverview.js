/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimelineOverview$$ = function $$DvtTimelineOverview$$$($context$$612$$, $callback$$176$$, $callbackObj$$122$$) {
  this.Init($context$$612$$, $callback$$176$$, $callbackObj$$122$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverview", D.$DvtTimelineOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverview$$, D.$DvtOverview$$, "DvtTimelineOverview");
D.$DvtTimelineOverview$$.prototype.Init = function $$DvtTimelineOverview$$$$Init$($colors$$5_context$$613$$, $callback$$177$$, $callbackObj$$123$$) {
  D.$DvtTimelineOverview$$.$superclass$.Init.call(this, $colors$$5_context$$613$$, $callback$$177$$, $callbackObj$$123$$);
  $colors$$5_context$$613$$ = [D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getPastel$("#aadd77", 0.35)), "#aadd77", D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getDarker$("#aadd77", 0.5))];
  D.$DvtTimeUtils$$.$supportsTouch$() && ($colors$$5_context$$613$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$5_context$$613$$;
  this.$_markerBorderFill$ = (0,D.$DvtSolidFill$invisibleFill$$)();
  this.$_markerSize$ = 12
};
D.$DvtTimelineOverview$$.prototype.$getParser$ = function $$DvtTimelineOverview$$$$$getParser$$() {
  return new D.$DvtTimelineOverviewParser$$(this)
};
D.$DvtTimelineOverview$$.prototype.$_applyParsedProperties$ = function $$DvtTimelineOverview$$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$10$$) {
  D.$DvtTimelineOverview$$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$10$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$10$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$10$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$10$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$10$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$10$$ = "solid" == this.$getStyle$("_", "bs") ? (0,window.parseInt)(this.$getStyle$("_", "bof"), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$("_as", "bs") ? (0,window.parseInt)(this.$getStyle$("_as", "bof"), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$("_s", "bs") ? (0,window.parseInt)(this.$getStyle$("_s", "bof"), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? window.Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$10$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : 0.75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new D.$DvtLinearGradientFill$$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new D.$DvtLinearGradientFill$$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$10$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new D.$DvtSolidStroke$$("#aadd77", $_eOffset_borderOpacity_props$$10$$)
};
D.$JSCompiler_StaticMethods_getDrawableById$$ = function $$JSCompiler_StaticMethods_getDrawableById$$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$296$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$296$$, $durationId$$ = "_drn_" + $id$$296$$, $numChildren$$16$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$11$$ = 0;$childIndex$$11$$ < $numChildren$$16$$;$childIndex$$11$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$11$$);
    if($drawable$$7$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5)
};
D.$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$99$$, $style$$114$$) {
  return this.$_borderStyles$[$state$$99$$ + $style$$114$$]
};
D.$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return $drawable$$9$$.$_node$ != D.$JSCompiler_alias_NULL$$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$
};
D.$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return $drawable$$10$$.$_node$ != D.$JSCompiler_alias_NULL$$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$
};
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$301_scaleX$$7$$) {
  $node$$301_scaleX$$7$$ = $node$$301_scaleX$$7$$.$getScaleX$();
  $node$$301_scaleX$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$301_scaleX$$7$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$301_scaleX$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$302_scaleY$$7$$) {
  $node$$302_scaleY$$7$$ = $node$$302_scaleY$$7$$.$getScaleY$();
  $node$$302_scaleY$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$302_scaleY$$7$$ = 1);
  return $node$$302_scaleY$$7$$
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$170$$, $height$$152$$) {
  D.$DvtTimelineOverview$$.$superclass$.$parseDataXML$.call(this, $width$$170$$, $height$$152$$);
  if(this.$_markers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $opt$$2$$ = (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)(this, this.$_start$, this.$_end$, $width$$170$$, $height$$152$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_8888_j$$121$$ = 0;$context$$inline_8888_j$$121$$ < this.$_markers$.length;$context$$inline_8888_j$$121$$++) {
      var $i$$inline_8889_marker$$18$$ = this.$_markers$[$context$$inline_8888_j$$121$$];
      $i$$inline_8889_marker$$18$$.$_endTime$ == D.$JSCompiler_alias_NULL$$ ? this.$addMarker$($i$$inline_8889_marker$$18$$, $opt$$2$$) : $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_8889_marker$$18$$
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_8888_j$$121$$ = this.$getCtx$();
    for($i$$inline_8889_marker$$18$$ = this.$_maxDurationY$;0 < $i$$inline_8889_marker$$18$$;$i$$inline_8889_marker$$18$$--) {
      for(var $j$$inline_8890$$ = 0;$j$$inline_8890$$ < $durationMarkers$$.length;$j$$inline_8890$$++) {
        var $node$$inline_8891$$ = $durationMarkers$$[$j$$inline_8890$$];
        if($i$$inline_8889_marker$$18$$ == $node$$inline_8891$$.$_durationLevel$) {
          var $duration$$inline_8896_x$$inline_8892$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $node$$inline_8891$$.getTime(), this.$isVertical$() ? this.$Height$ : this.$Width$), $durationId$$inline_8893_feelerStroke$$inline_8897$$ = "_drn_" + $node$$inline_8891$$.getId(), $durationY$$inline_8894$$ = 9 + 5 * $node$$inline_8891$$.$_durationLevel$, $x2$$inline_8895$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $node$$inline_8891$$.$_endTime$, this.$isVertical$() ? 
          this.$Height$ : this.$Width$), $duration$$inline_8896_x$$inline_8892$$ = this.$isVertical$() ? new D.$DvtRect$$($context$$inline_8888_j$$121$$, this.$Width$ - $durationY$$inline_8894$$, $duration$$inline_8896_x$$inline_8892$$, $durationY$$inline_8894$$, $x2$$inline_8895$$ - $duration$$inline_8896_x$$inline_8892$$, $durationId$$inline_8893_feelerStroke$$inline_8897$$) : this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8888_j$$121$$, this.$Width$ - $x2$$inline_8895$$, this.$Height$ - $durationY$$inline_8894$$ - 
          20, $x2$$inline_8895$$ - $duration$$inline_8896_x$$inline_8892$$, $durationY$$inline_8894$$, $durationId$$inline_8893_feelerStroke$$inline_8897$$) : new D.$DvtRect$$($context$$inline_8888_j$$121$$, $duration$$inline_8896_x$$inline_8892$$, this.$Height$ - $durationY$$inline_8894$$ - 20, $x2$$inline_8895$$ - $duration$$inline_8896_x$$inline_8892$$, $durationY$$inline_8894$$, $durationId$$inline_8893_feelerStroke$$inline_8897$$);
          $duration$$inline_8896_x$$inline_8892$$.$setFill$(new D.$DvtSolidFill$$($node$$inline_8891$$.$_durationFillColor$));
          $durationId$$inline_8893_feelerStroke$$inline_8897$$ = new D.$DvtSolidStroke$$(this.$getStyle$("_", "dbc"), 1, 1);
          $duration$$inline_8896_x$$inline_8892$$.$setStroke$($durationId$$inline_8893_feelerStroke$$inline_8897$$);
          (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($duration$$inline_8896_x$$inline_8892$$);
          $duration$$inline_8896_x$$inline_8892$$.$_node$ = $node$$inline_8891$$;
          this.$addChild$($duration$$inline_8896_x$$inline_8892$$);
          $node$$inline_8891$$.$_durationBar$ = $duration$$inline_8896_x$$inline_8892$$;
          $node$$inline_8891$$.$_durationY$ = $durationY$$inline_8894$$ - 2
        }
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$2$$
  }
};
D.$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = D.$JSCompiler_alias_NULL$$;
  this.$_durationColorMap$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$ = {});
  for(var $i$$851$$ = 0;$i$$851$$ < $durationMarkers$$1$$.length;$i$$851$$++) {
    var $marker$$19$$ = $durationMarkers$$1$$[$i$$851$$], $id$$297$$ = $marker$$19$$.getId(), $sId$$2$$ = $id$$297$$.substring($id$$297$$.indexOf(":") + 1, $id$$297$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$19$$.$_durationLevel$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)(this, $marker$$19$$, $durationMarkers$$1$$);
    $marker$$19$$.$_durationFillColor$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$[$id$$297$$] == D.$JSCompiler_alias_NULL$$ ? (this.$_durationColorMap$[$id$$297$$] = this.$_colorCount$, $marker$$19$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$19$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$297$$]])
  }
};
D.$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverview$$.prototype.getDurationColorMap = D.$DvtTimelineOverview$$.prototype.$getDurationColorMap$;
D.$JSCompiler_StaticMethods_calculateOptimalSize$$ = function $$JSCompiler_StaticMethods_calculateOptimalSize$$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$49$$, $end$$33$$, $width$$171$$, $height$$153$$, $size$$45$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$, $JSCompiler_object_inline_maxy_11729_result$$inline_11620$$, $result$$7$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$153$$ : $width$$171$$, $i$$852$$ = 0;$i$$852$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$852$$++) {
    var $marker$$20_node$$inline_8904$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$852$$];
    if($marker$$20_node$$inline_8904$$.$_endTime$ != D.$JSCompiler_alias_NULL$$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$49$$, $end$$33$$, $marker$$20_node$$inline_8904$$.getTime(), $canvasSize$$);
      !$JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() && $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isRTL$() && ($JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$);
      $marker$$20_node$$inline_8904$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_8913_start$$inline_8905$$ = $start$$49$$, $counter$$inline_8917_end$$inline_8906$$ = $end$$33$$, $cy$$inline_8915_size$$inline_8907$$ = $canvasSize$$, $borderOffset$$inline_8914_hsz$$inline_8908$$ = $size$$45$$ / 2, $result$$inline_8909$$ = $result$$7$$, $maxHeight$$inline_8910$$ = $height$$153$$, $hszx$$inline_8911$$ = $borderOffset$$inline_8914_hsz$$inline_8908$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$getScaleX$($marker$$20_node$$inline_8904$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$_markerSpacingOffset$, $hszy$$inline_8912$$ = $borderOffset$$inline_8914_hsz$$inline_8908$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$getScaleY$($marker$$20_node$$inline_8904$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$_markerSpacingOffset$, $cx$$inline_8913_start$$inline_8905$$ = 
      D.$DvtTimeUtils$$.$getDatePosition$($cx$$inline_8913_start$$inline_8905$$, $counter$$inline_8917_end$$inline_8906$$, $marker$$20_node$$inline_8904$$.getTime(), $cy$$inline_8915_size$$inline_8907$$);
      $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$isRTL$() && ($cx$$inline_8913_start$$inline_8905$$ = $cy$$inline_8915_size$$inline_8907$$ - $cx$$inline_8913_start$$inline_8905$$ - 2 * $hszx$$inline_8911$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$isVertical$()) {
        $borderOffset$$inline_8914_hsz$$inline_8908$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$getStyle$("_", "bs") && ($borderOffset$$inline_8914_hsz$$inline_8908$$ = (0,window.parseInt)($JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$getStyle$("_", "bw"), 10)), $cy$$inline_8915_size$$inline_8907$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$Width$ - 2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$.$getScaleX$($marker$$20_node$$inline_8904$$) - 
        $borderOffset$$inline_8914_hsz$$inline_8908$$ - 4
      }else {
        for(var $cy$$inline_8915_size$$inline_8907$$ = 3, $maxy$$inline_11626_maxy$$inline_8916$$ = 0, $counter$$inline_8917_end$$inline_8906$$ = 0;1 > $counter$$inline_8917_end$$inline_8906$$;) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8903_x$$291$$;
          $JSCompiler_object_inline_maxy_11729_result$$inline_11620$$ = $result$$inline_8909$$;
          var $shape$$inline_11621$$ = $marker$$20_node$$inline_8904$$.$getShape$(), $cx$$inline_11622$$ = $cx$$inline_8913_start$$inline_8905$$, $cy$$inline_11623$$ = $cy$$inline_8915_size$$inline_8907$$, $hszx$$inline_11624$$ = $hszx$$inline_8911$$, $hszy$$inline_11625$$ = $hszy$$inline_8912$$, $hsz$$inline_11627$$ = $borderOffset$$inline_8914_hsz$$inline_8908$$, $maxHeight$$inline_11628$$ = $maxHeight$$inline_8910$$;
          "above" == $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$.$_overviewPosition$ && ($cy$$inline_11623$$ += (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)($JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$));
          for(var $i$$inline_11629$$ = 0;$i$$inline_11629$$ < $JSCompiler_object_inline_maxy_11729_result$$inline_11620$$.$arr$.length;$i$$inline_11629$$++) {
            var $prevMarker$$inline_11630_prevScaleY$$inline_11635$$ = $JSCompiler_object_inline_maxy_11729_result$$inline_11620$$.$arr$[$i$$inline_11629$$], $prevX$$inline_11631_xDist$$inline_11636$$ = $prevMarker$$inline_11630_prevScaleY$$inline_11635$$.$getX$(), $prevY$$inline_11632$$ = $prevMarker$$inline_11630_prevScaleY$$inline_11635$$.$getY$(), $height$$inline_11638_prevShape$$inline_11633$$ = $prevMarker$$inline_11630_prevScaleY$$inline_11635$$.$getShape$(), $prevScaleX$$inline_11634$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$.$getScaleX$($prevMarker$$inline_11630_prevScaleY$$inline_11635$$), $prevMarker$$inline_11630_prevScaleY$$inline_11635$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$.$getScaleY$($prevMarker$$inline_11630_prevScaleY$$inline_11635$$), $prevX$$inline_11631_xDist$$inline_11636$$ = window.Math.abs($cx$$inline_11622$$ - $prevX$$inline_11631_xDist$$inline_11636$$), 
            $minDist$$inline_11637$$ = $hsz$$inline_11627$$ * $prevScaleX$$inline_11634$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$.$_markerSpacingOffset$ + $hszx$$inline_11624$$;
            if(!($prevX$$inline_11631_xDist$$inline_11636$$ >= $minDist$$inline_11637$$) && ($height$$inline_11638_prevShape$$inline_11633$$ = "circle" == $shape$$inline_11621$$ && "circle" == $height$$inline_11638_prevShape$$inline_11633$$ && $hszx$$inline_11624$$ == $hszy$$inline_11625$$ && $prevScaleX$$inline_11634$$ == $prevMarker$$inline_11630_prevScaleY$$inline_11635$$ ? window.Math.sqrt($minDist$$inline_11637$$ * $minDist$$inline_11637$$ - $prevX$$inline_11631_xDist$$inline_11636$$ * $prevX$$inline_11631_xDist$$inline_11636$$) : 
            $hsz$$inline_11627$$ * $prevMarker$$inline_11630_prevScaleY$$inline_11635$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$.$_markerSpacingOffset$ + $hszy$$inline_11625$$, $height$$inline_11638_prevShape$$inline_11633$$ > window.Math.abs($cy$$inline_11623$$ - $prevY$$inline_11632$$) && ($cy$$inline_11623$$ = $prevY$$inline_11632$$ + $height$$inline_11638_prevShape$$inline_11633$$, $maxy$$inline_11626_maxy$$inline_8916$$ = window.Math.max($maxy$$inline_11626_maxy$$inline_8916$$, 
            $cy$$inline_11623$$ + $height$$inline_11638_prevShape$$inline_11633$$), 1 <= $hsz$$inline_11627$$ && $maxHeight$$inline_11628$$ != D.$JSCompiler_alias_VOID$$ && $maxy$$inline_11626_maxy$$inline_8916$$ > $maxHeight$$inline_11628$$))) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$ = $cy$$inline_11623$$;
          $JSCompiler_object_inline_maxy_11729_result$$inline_11620$$ = $maxy$$inline_11626_maxy$$inline_8916$$;
          $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$ == $cy$$inline_8915_size$$inline_8907$$ && ($counter$$inline_8917_end$$inline_8906$$ = 1);
          $maxy$$inline_11626_maxy$$inline_8916$$ = $JSCompiler_object_inline_maxy_11729_result$$inline_11620$$;
          $cy$$inline_8915_size$$inline_8907$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11619_JSCompiler_object_inline_cy_11728$$;
          $counter$$inline_8917_end$$inline_8906$$++
        }
      }
      $marker$$20_node$$inline_8904$$.$setX$($cx$$inline_8913_start$$inline_8905$$);
      $marker$$20_node$$inline_8904$$.$setY$($cy$$inline_8915_size$$inline_8907$$);
      $result$$inline_8909$$.$arr$.push($marker$$20_node$$inline_8904$$);
      $maxy$$inline_11626_maxy$$inline_8916$$ > $result$$inline_8909$$.max && ($result$$inline_8909$$.max = $maxy$$inline_11626_maxy$$inline_8916$$);
      if($result$$7$$.max > $height$$153$$) {
        break
      }
    }
  }
  return $result$$7$$.max > $height$$153$$ && 1 < $size$$45$$ ? (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$49$$, $end$$33$$, $width$$171$$, $height$$153$$, $size$$45$$ - 1) : $size$$45$$
};
D.$DvtTimelineOverview$$.prototype.$addMarker$ = function $$DvtTimelineOverview$$$$$addMarker$$($node$$303$$, $sz$$) {
  var $displayable$$103_itemId$$2$$ = "_mrk_" + $node$$303$$.getId(), $color$$90_count$$23_stroke$$116$$ = $node$$303$$.$getColor$(), $fill$$77_isGradient$$ = $node$$303$$.$_gradient$, $lastChild$$1_opacity$$6$$ = $node$$303$$.$getOpacity$();
  $lastChild$$1_opacity$$6$$ == D.$JSCompiler_alias_NULL$$ && ($lastChild$$1_opacity$$6$$ = this.$_defOpacity$, 0 == $lastChild$$1_opacity$$6$$ && $color$$90_count$$23_stroke$$116$$ != D.$JSCompiler_alias_NULL$$ && ($lastChild$$1_opacity$$6$$ = 1));
  var $colors$$6_lighter_scaleX$$8$$ = this.$getScaleX$($node$$303$$), $alphas$$1_darker_scaleY$$8$$ = this.$getScaleY$($node$$303$$), $marker$$21$$ = $node$$303$$.$getShape$();
  this.$isVertical$() ? ($marker$$21$$ = "square", $displayable$$103_itemId$$2$$ = new D.$DvtMarker$$(this.$getCtx$(), $marker$$21$$, D.$JSCompiler_alias_NULL$$, $node$$303$$.$getY$(), $node$$303$$.$getX$(), 2, 2, $displayable$$103_itemId$$2$$, $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$)) : $displayable$$103_itemId$$2$$ = new D.$DvtMarker$$(this.$getCtx$(), $marker$$21$$, D.$JSCompiler_alias_NULL$$, $node$$303$$.$getX$(), $node$$303$$.$getY$(), $sz$$, $sz$$, $displayable$$103_itemId$$2$$, 
  $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$);
  $displayable$$103_itemId$$2$$.$_node$ = $node$$303$$;
  $color$$90_count$$23_stroke$$116$$ == D.$JSCompiler_alias_NULL$$ && $lastChild$$1_opacity$$6$$ == this.$_defOpacity$ && $fill$$77_isGradient$$ == D.$JSCompiler_alias_NULL$$ ? ($fill$$77_isGradient$$ = "circle" == $marker$$21$$ ? this.$_radialFill$ : this.$_linearFill$, $color$$90_count$$23_stroke$$116$$ = this.$_border$) : ($colors$$6_lighter_scaleX$$8$$ = this.$_defColors$, $color$$90_count$$23_stroke$$116$$ != D.$JSCompiler_alias_NULL$$ && (D.$DvtTimeUtils$$.$supportsTouch$() ? $colors$$6_lighter_scaleX$$8$$ = 
  [$color$$90_count$$23_stroke$$116$$] : ($colors$$6_lighter_scaleX$$8$$ = D.$DvtColorUtils$$.$getPastel$($color$$90_count$$23_stroke$$116$$, 0.5), $alphas$$1_darker_scaleY$$8$$ = D.$DvtColorUtils$$.$getDarker$($color$$90_count$$23_stroke$$116$$, 0.5), $colors$$6_lighter_scaleX$$8$$ = [$colors$$6_lighter_scaleX$$8$$, $color$$90_count$$23_stroke$$116$$, $alphas$$1_darker_scaleY$$8$$])), $alphas$$1_darker_scaleY$$8$$ = [$lastChild$$1_opacity$$6$$, $lastChild$$1_opacity$$6$$, $lastChild$$1_opacity$$6$$], 
  $fill$$77_isGradient$$ = $fill$$77_isGradient$$ == D.$JSCompiler_alias_NULL$$ ? "circle" == $marker$$21$$ ? new D.$DvtLinearGradientFill$$(250, $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$) : new D.$DvtLinearGradientFill$$(180, $colors$$6_lighter_scaleX$$8$$, $alphas$$1_darker_scaleY$$8$$) : new D.$DvtSolidFill$$($color$$90_count$$23_stroke$$116$$, $alphas$$1_darker_scaleY$$8$$[0]), $color$$90_count$$23_stroke$$116$$ = new D.$DvtSolidStroke$$($color$$90_count$$23_stroke$$116$$, 
  $lastChild$$1_opacity$$6$$));
  $displayable$$103_itemId$$2$$.$setFill$($fill$$77_isGradient$$);
  $displayable$$103_itemId$$2$$.$setStroke$($color$$90_count$$23_stroke$$116$$);
  "none" != this.$_selectionMode$ && $displayable$$103_itemId$$2$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
  $color$$90_count$$23_stroke$$116$$ = this.$getNumChildren$();
  $lastChild$$1_opacity$$6$$ = this.$getChildAt$($color$$90_count$$23_stroke$$116$$ - 1);
  $color$$90_count$$23_stroke$$116$$ > this.$_lastChildIndex$ && ("tb" == $lastChild$$1_opacity$$6$$.getId() || "arr" == $lastChild$$1_opacity$$6$$.getId()) ? this.$addChildAt$($displayable$$103_itemId$$2$$, $color$$90_count$$23_stroke$$116$$ - this.$_lastChildIndex$) : this.$addChild$($displayable$$103_itemId$$2$$);
  $node$$303$$.$setDisplayable$($displayable$$103_itemId$$2$$);
  this.$applyState$($displayable$$103_itemId$$2$$, "_");
  (this.$isVertical$() || "square" == $marker$$21$$ || "diamond" == $marker$$21$$ || "triangleUp" == $marker$$21$$ || "triangleDown" == $marker$$21$$ || "plus" == $marker$$21$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($displayable$$103_itemId$$2$$);
  return $displayable$$103_itemId$$2$$
};
D.$JSCompiler_StaticMethods_calculateDurationY$$ = function $$JSCompiler_StaticMethods_calculateDurationY$$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$53$$, $durationMarkers$$3$$) {
  var $index$$240$$ = $durationMarkers$$3$$.length, $startTime$$6$$ = $item$$53$$.getTime(), $y$$261$$ = $item$$53$$.$_durationLevel$;
  $y$$261$$ == D.$JSCompiler_alias_NULL$$ && ($y$$261$$ = 1);
  for(var $i$$855$$ = 0;$i$$855$$ < $index$$240$$;$i$$855$$++) {
    var $currItem_curry$$ = $durationMarkers$$3$$[$i$$855$$];
    if($currItem_curry$$ != $item$$53$$) {
      var $currEndTime$$ = $currItem_curry$$.$_endTime$;
      if($currEndTime$$ != D.$JSCompiler_alias_NULL$$) {
        var $currStartTime$$ = $currItem_curry$$.getTime(), $currItem_curry$$ = $currItem_curry$$.$_durationLevel$;
        $currItem_curry$$ == D.$JSCompiler_alias_NULL$$ && ($currItem_curry$$ = 1);
        $startTime$$6$$ >= $currStartTime$$ && ($startTime$$6$$ <= $currEndTime$$ && $y$$261$$ == $currItem_curry$$) && ($y$$261$$ = $currItem_curry$$ + 1, $item$$53$$.$_durationLevel$ = $y$$261$$, $y$$261$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$53$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$261$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$261$$);
  return $y$$261$$
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOver$$($event$$808_isSelected$$1_itemId$$3$$) {
  var $drawable$$11$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$808_isSelected$$1_itemId$$3$$);
  if($drawable$$11$$ != D.$JSCompiler_alias_NULL$$) {
    if($drawable$$11$$.$_node$ != D.$JSCompiler_alias_NULL$$) {
      var $evt$$75_i$$856_tooltip$$58$$ = $drawable$$11$$.$_node$.$_desc$;
      $evt$$75_i$$856_tooltip$$58$$ != D.$JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$808_isSelected$$1_itemId$$3$$.pageX, $event$$808_isSelected$$1_itemId$$3$$.pageY, $evt$$75_i$$856_tooltip$$58$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$808_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_FALSE$$;
      if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
        for($evt$$75_i$$856_tooltip$$58$$ = 0;$evt$$75_i$$856_tooltip$$58$$ < this.$_selectedMarkers$.length;$evt$$75_i$$856_tooltip$$58$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$75_i$$856_tooltip$$58$$]) {
            $event$$808_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      $event$$808_isSelected$$1_itemId$$3$$ || ($event$$808_isSelected$$1_itemId$$3$$ = this.$getItemId$($drawable$$11$$), $evt$$75_i$$856_tooltip$$58$$ = new D.$DvtTimelineOverviewEvent$$("highlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$75_i$$856_tooltip$$58$$, "itemId", $event$$808_isSelected$$1_itemId$$3$$), this.dispatchEvent($evt$$75_i$$856_tooltip$$58$$), (0,D.$JSCompiler_StaticMethods_highlightMarker$$)(this, $drawable$$11$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOut$$($drawable$$12_event$$809$$) {
  $drawable$$12_event$$809$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$809$$);
  if($drawable$$12_event$$809$$ != D.$JSCompiler_alias_NULL$$ && !(0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$12_event$$809$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_FALSE$$;
    if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
      for(var $evt$$76_i$$857$$ = 0;$evt$$76_i$$857$$ < this.$_selectedMarkers$.length;$evt$$76_i$$857$$++) {
        if($drawable$$12_event$$809$$ == this.$_selectedMarkers$[$evt$$76_i$$857$$]) {
          $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $isSelected$$2_itemId$$4$$ || ($isSelected$$2_itemId$$4$$ = this.$getItemId$($drawable$$12_event$$809$$), $evt$$76_i$$857$$ = new D.$DvtTimelineOverviewEvent$$("unhighlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$76_i$$857$$, "itemId", $isSelected$$2_itemId$$4$$), this.dispatchEvent($evt$$76_i$$857$$), (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)(this, $drawable$$12_event$$809$$))
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeClick$ = function $$DvtTimelineOverview$$$$$HandleShapeClick$$($event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$, $drawable$$13_newPos$$inline_8926_pageX$$16$$, $evt$$inline_8924_itemId$$inline_11643_pageY$$16$$) {
  $drawable$$13_newPos$$inline_8926_pageX$$16$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeClick$.call(this, $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$, $drawable$$13_newPos$$inline_8926_pageX$$16$$, $evt$$inline_8924_itemId$$inline_11643_pageY$$16$$);
  if($drawable$$13_newPos$$inline_8926_pageX$$16$$ != D.$JSCompiler_alias_NULL$$ && ($event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$ = $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$.ctrlKey || $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$.shiftKey || (0,D.$DvtAgent$isTouchDevice$$)(), "none" != this.$_selectionMode$)) {
    $evt$$inline_8924_itemId$$inline_11643_pageY$$16$$ = this.$getItemId$($drawable$$13_newPos$$inline_8926_pageX$$16$$);
    var $evt$$inline_11644$$ = new D.$DvtTimelineOverviewEvent$$("selection");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11644$$, "itemId", $evt$$inline_8924_itemId$$inline_11643_pageY$$16$$);
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11644$$, "multiSelect", $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$);
    this.dispatchEvent($evt$$inline_11644$$);
    $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$ = $drawable$$13_newPos$$inline_8926_pageX$$16$$.$_node$.getTime();
    $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$ != D.$JSCompiler_alias_NULL$$ && ($evt$$inline_8924_itemId$$inline_11643_pageY$$16$$ = new D.$DvtTimelineOverviewEvent$$("scrollTime"), $evt$$inline_8924_itemId$$inline_11643_pageY$$16$$.setTime($event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$), this.dispatchEvent($evt$$inline_8924_itemId$$inline_11643_pageY$$16$$), $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$ = 
    this.$getChildAt$(1), $drawable$$13_newPos$$inline_8926_pageX$$16$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_8926_pageX$$16$$) - $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_8926_pageX$$16$$) - $event$$810_isMultiSelect$$inline_8922_slidingWindow$$inline_8925_time$$inline_8923$$.getWidth() / 2, (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $drawable$$13_newPos$$inline_8926_pageX$$16$$))
  }
};
D.$JSCompiler_StaticMethods_highlightMarker$$ = function $$JSCompiler_StaticMethods_highlightMarker$$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if($JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$858$$ = 0;$i$$858$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$858$$++) {
      if($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$858$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, "_h")
};
D.$JSCompiler_StaticMethods_unhighlightMarker$$ = function $$JSCompiler_StaticMethods_unhighlightMarker$$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if($JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$859$$ = 0;$i$$859$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$859$$++) {
      if($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$859$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, "_")
};
D.$DvtTimelineOverview$$.prototype.$applyState$ = function $$DvtTimelineOverview$$$$$applyState$$($drawable$$25$$, $state$$100$$) {
  if($drawable$$25$$ instanceof D.$DvtMarker$$) {
    var $requiresBorderMarker_width$$173$$ = D.$JSCompiler_alias_FALSE$$, $requiresGlowMarker$$ = D.$JSCompiler_alias_FALSE$$;
    if("solid" == this.$getStyle$($state$$100$$, "bs")) {
      var $requiresBorderMarker_width$$173$$ = D.$JSCompiler_alias_TRUE$$, $borderColor$$60_stroke$$117$$ = this.$getStyle$($state$$100$$, "bc");
      $borderColor$$60_stroke$$117$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$60_stroke$$117$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_8932$$ = this.$getStyle$($state$$100$$, "gc");
      $glowColor_glowStroke_width$$inline_8932$$ != D.$JSCompiler_alias_NULL$$ && "none" != $glowColor_glowStroke_width$$inline_8932$$ && ($requiresGlowMarker$$ = D.$JSCompiler_alias_TRUE$$)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$requiresBorderMarker_width$$173$$ && $borderMarker$$ != D.$JSCompiler_alias_NULL$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = D.$JSCompiler_alias_NULL$$, $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = D.$JSCompiler_alias_NULL$$)) : !$requiresGlowMarker$$ && $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = 
    D.$JSCompiler_alias_NULL$$);
    var $borderColor$$inline_8931_id$$298_markerType$$2$$ = $drawable$$25$$.$getType$();
    if($requiresBorderMarker_width$$173$$) {
      var $requiresBorderMarker_width$$173$$ = (0,window.parseInt)(this.$getStyle$($state$$100$$, "bw"), 10), $borderOffset$$1$$ = (0,window.parseInt)(this.$getStyle$($state$$100$$, "bof"), 10);
      $borderMarker$$ == D.$JSCompiler_alias_NULL$$ && ("circle" == $borderColor$$inline_8931_id$$298_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0), $borderMarker$$ = new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8931_id$$298_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $borderOffset$$1$$, this.$getY$($drawable$$25$$) - $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$h$ + 
      2 * $borderOffset$$1$$, $drawable$$25$$.getId() + "_border", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$())) : $borderMarker$$ = this.$isVertical$() ? new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8931_id$$298_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getY$($drawable$$25$$) - ($requiresBorderMarker_width$$173$$ + 1) / 2, this.$getX$($drawable$$25$$) - ($requiresBorderMarker_width$$173$$ + 1) / 2, $drawable$$25$$.$getDimensions$().$w$ + ($requiresBorderMarker_width$$173$$ + 
      1), $drawable$$25$$.$getDimensions$().$h$ + ($requiresBorderMarker_width$$173$$ + 1), $drawable$$25$$.getId() + "_border", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()) : new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8931_id$$298_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $borderOffset$$1$$, this.$getY$($drawable$$25$$) - $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$, $drawable$$25$$.$getDimensions$().$h$ + 
      2 * $borderOffset$$1$$, $drawable$$25$$.getId() + "_border", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()), this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$)), $drawable$$25$$.$_borderMarker$ = $borderMarker$$, $borderMarker$$.$setFill$(this.$_markerBorderFill$));
      $borderColor$$60_stroke$$117$$ = new D.$DvtSolidStroke$$($borderColor$$60_stroke$$117$$, this.$getStyle$($state$$100$$, "bo"), $requiresBorderMarker_width$$173$$);
      $borderMarker$$.$setStroke$($borderColor$$60_stroke$$117$$);
      (this.$isVertical$() || "square" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "diamond" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "plus" == $borderColor$$inline_8931_id$$298_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($borderMarker$$);
      $requiresGlowMarker$$ && ($glowMarker_glowOffset$$ == D.$JSCompiler_alias_NULL$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $requiresBorderMarker_width$$173$$, "circle" == $borderColor$$inline_8931_id$$298_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $glowMarker_glowOffset$$ = new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8931_id$$298_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$, 
      this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$, $drawable$$25$$.getId() + "_glow", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$())) : $glowMarker_glowOffset$$ = this.$isVertical$() ? new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8931_id$$298_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getY$($drawable$$25$$), this.$getX$($drawable$$25$$) - 
      1, $drawable$$25$$.$getDimensions$().$w$ + 3, $drawable$$25$$.$getDimensions$().$h$ + 3, $drawable$$25$$.getId() + "_glow", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()) : new D.$DvtMarker$$(this.$getCtx$(), $borderColor$$inline_8931_id$$298_markerType$$2$$, D.$JSCompiler_alias_NULL$$, this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$, this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$, $drawable$$25$$.$getDimensions$().$h$ + 
      2 * $glowMarker_glowOffset$$, $drawable$$25$$.getId() + "_glow", $drawable$$25$$.$getScaleX$(), $drawable$$25$$.$getScaleY$()), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_8932$$ = new D.$DvtSolidStroke$$($glowColor_glowStroke_width$$inline_8932$$, this.$getStyle$($state$$100$$, "go"), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_8932$$), 
      (this.$isVertical$() || "square" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "diamond" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8931_id$$298_markerType$$2$$ || "plus" == $borderColor$$inline_8931_id$$298_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($glowMarker_glowOffset$$))
    }
  }else {
    if(($borderColor$$inline_8931_id$$298_markerType$$2$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_8931_id$$298_markerType$$2$$.substring(0, 5)) {
      $borderColor$$inline_8931_id$$298_markerType$$2$$ = this.$getStyle$($state$$100$$, "dbc"), $borderColor$$inline_8931_id$$298_markerType$$2$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$inline_8931_id$$298_markerType$$2$$ = "#000000"), $glowColor_glowStroke_width$$inline_8932$$ = (0,window.parseInt)(this.$getStyle$($state$$100$$, "dbw"), 10), $drawable$$25$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_8931_id$$298_markerType$$2$$, 1, $glowColor_glowStroke_width$$inline_8932$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$getAutomation$ = function $$DvtTimelineOverview$$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new D.$DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$
};
D.$DvtTimelineOverview$$.prototype.getAutomation = D.$DvtTimelineOverview$$.prototype.$getAutomation$;
D.$DvtTimelineOverviewParser$$ = function $$DvtTimelineOverviewParser$$$($timelineOverview$$) {
  this.Init($timelineOverview$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewParser$$, D.$DvtObj$$, "DvtTimelineOverviewParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$6$$) {
  this.$_view$ = $overview$$6$$;
  this.$_parser$ = new D.$DvtXmlParser$$
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$99_xmlString$$9$$) {
  var $childNodes$$27_rootNode$$3$$ = this.$_parser$.parse($ret$$99_xmlString$$9$$);
  $ret$$99_xmlString$$9$$ = this.$ParseRootAttributes$($childNodes$$27_rootNode$$3$$);
  var $childNodes$$27_rootNode$$3$$ = $childNodes$$27_rootNode$$3$$.$getChildNodes$(), $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$;
  if($JSCompiler_inline_result$$70_xmlNode$$inline_8954$$ = $childNodes$$27_rootNode$$3$$[0]) {
    var $ret$$inline_8955$$ = {};
    $ret$$inline_8955$$.width = $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$.$getAttr$("width");
    $ret$$inline_8955$$.height = $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$.$getAttr$("height");
    $ret$$inline_8955$$.$ticks$ = $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$.$getChildNodes$();
    $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$ = $ret$$inline_8955$$
  }else {
    $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$99_xmlString$$9$$.$timeAxisInfo$ = $JSCompiler_inline_result$$70_xmlNode$$inline_8954$$;
  $ret$$99_xmlString$$9$$.$markers$ = this.$_parseDataNode$($childNodes$$27_rootNode$$3$$[1], $ret$$99_xmlString$$9$$.$defaultMarkerStyles$);
  2 < $childNodes$$27_rootNode$$3$$.length && ($ret$$99_xmlString$$9$$.$formattedTimeRanges$ = !$childNodes$$27_rootNode$$3$$[2] ? D.$JSCompiler_alias_NULL$$ : $childNodes$$27_rootNode$$3$$[2].$getChildNodes$());
  return $ret$$99_xmlString$$9$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$72$$) {
  var $ret$$100$$ = {};
  $ret$$100$$.start = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("start"));
  $ret$$100$$.end = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("end"));
  $ret$$100$$.width = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("width"));
  $ret$$100$$.$renderStart$ = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("renstart"));
  $ret$$100$$.currentTime = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("ocd"));
  $ret$$100$$.orientation = $xmlNode$$72$$.$getAttr$("orn");
  $ret$$100$$.$overviewPosition$ = $xmlNode$$72$$.$getAttr$("ovp");
  $ret$$100$$.$selectionMode$ = $xmlNode$$72$$.$getAttr$("selmode");
  $ret$$100$$.$isRtl$ = $xmlNode$$72$$.$getAttr$("rtl");
  $ret$$100$$.borderTopStyle = $xmlNode$$72$$.$getAttr$("_bts");
  $ret$$100$$.borderTopColor = $xmlNode$$72$$.$getAttr$("_btc");
  $ret$$100$$.$seriesIds$ = $xmlNode$$72$$.$getAttr$("sid");
  $ret$$100$$.$animationOnClick$ = $xmlNode$$72$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$72$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$72$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$72$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$72$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$72$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$72$$.$getAttr$("_ph");
  $ret$$100$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$100$$.$handleFillColor$ = $xmlNode$$72$$.$getAttr$("_hfc");
  $ret$$100$$.$handleTextureColor$ = $xmlNode$$72$$.$getAttr$("_htc");
  $ret$$100$$.$handleBackgroundImage$ = $xmlNode$$72$$.$getAttr$("_hbi");
  $ret$$100$$.$handleWidth$ = $xmlNode$$72$$.$getAttr$("_hw");
  $ret$$100$$.$handleHeight$ = $xmlNode$$72$$.$getAttr$("_hh");
  $ret$$100$$.$windowBackgroundColor$ = $xmlNode$$72$$.$getAttr$("_wbc");
  $ret$$100$$.$windowBorderTopStyle$ = $xmlNode$$72$$.$getAttr$("_wbts");
  $ret$$100$$.$windowBorderRightStyle$ = $xmlNode$$72$$.$getAttr$("_wbrs");
  $ret$$100$$.$windowBorderBottomStyle$ = $xmlNode$$72$$.$getAttr$("_wbbs");
  $ret$$100$$.$windowBorderLeftStyle$ = $xmlNode$$72$$.$getAttr$("_wbls");
  $ret$$100$$.$windowBorderTopColor$ = $xmlNode$$72$$.$getAttr$("_wbtc");
  $ret$$100$$.$windowBorderRightColor$ = $xmlNode$$72$$.$getAttr$("_wbrc");
  $ret$$100$$.$windowBorderBottomColor$ = $xmlNode$$72$$.$getAttr$("_wbbc");
  $ret$$100$$.$windowBorderLeftColor$ = $xmlNode$$72$$.$getAttr$("_wblc");
  $ret$$100$$.$overviewBackgroundColor$ = $xmlNode$$72$$.$getAttr$("_obc");
  $ret$$100$$.$currentTimeIndicatorColor$ = $xmlNode$$72$$.$getAttr$("_ctic");
  $ret$$100$$.$timeIndicatorColor$ = $xmlNode$$72$$.$getAttr$("_tic");
  $ret$$100$$.$timeAxisBarColor$ = $xmlNode$$72$$.$getAttr$("_tabc");
  $ret$$100$$.$timeAxisBarOpacity$ = $xmlNode$$72$$.$getAttr$("_tabo");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$72$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$72$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$72$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$72$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$72$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$72$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$72$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$72$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$72$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$72$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$72$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$72$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$72$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$72$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$72$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$72$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$72$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$72$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$72$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$72$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$72$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$72$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$72$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$72$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$72$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$72$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$72$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$72$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$72$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$72$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$72$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$72$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$72$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$72$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$72$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$72$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$72$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$72$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$72$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$72$$.$getAttr$("_asdbw");
  $ret$$100$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$100$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$73$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$73$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $treeNodes$$ = [], $markers$$12$$ = $xmlNode$$73$$.$getChildNodes$(), $i$$867$$ = 0;$i$$867$$ < $markers$$12$$.length;$i$$867$$++) {
    var $props$$14_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$12$$[$i$$867$$], $defaultMarkerStyles$$1$$), $props$$14_treeNode$$1$$ = new D.$DvtTimelineOverviewNode$$(this.$_view$, $props$$14_treeNode$$1$$);
    $treeNodes$$.push($props$$14_treeNode$$1$$)
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$74$$, $defaultMarkerStyles$$2$$) {
  var $ret$$101$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$74$$.$getAttr$("_sd");
  $ret$$101$$.id = $xmlNode$$74$$.$getAttr$("tid");
  $ret$$101$$.$rowKey$ = $xmlNode$$74$$.$getAttr$("rk");
  $ret$$101$$.time = $xmlNode$$74$$.$getAttr$("t");
  $ret$$101$$.$endTime$ = $xmlNode$$74$$.$getAttr$("et");
  $ret$$101$$.shape = $xmlNode$$74$$.$getAttr$("s");
  $useSkinningDefaults$$ && $ret$$101$$.shape == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$101$$.$desc$ = $xmlNode$$74$$.$getAttr$("d");
  $ret$$101$$.color = $xmlNode$$74$$.$getAttr$("c");
  $ret$$101$$.$durationFillColor$ = $xmlNode$$74$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && $ret$$101$$.color == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$101$$.$scaleX$ = $xmlNode$$74$$.$getAttr$("sx");
  $useSkinningDefaults$$ && $ret$$101$$.$scaleX$ == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$101$$.$scaleY$ = $xmlNode$$74$$.$getAttr$("sy");
  $useSkinningDefaults$$ && $ret$$101$$.$scaleY$ == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$101$$.$gradient$ = $xmlNode$$74$$.$getAttr$("g");
  $ret$$101$$.opacity = $xmlNode$$74$$.$getAttr$("o");
  $useSkinningDefaults$$ && $ret$$101$$.opacity == D.$JSCompiler_alias_NULL$$ && ($ret$$101$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$101$$
};
D.$DvtTimelineOverviewNode$$ = function $$DvtTimelineOverviewNode$$$($overview$$4$$, $props$$11$$) {
  this.Init($overview$$4$$, $props$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewNode$$, D.$DvtObj$$, "DvtTimelineOverviewNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$12$$) {
  this.$_view$ = $overview$$5$$;
  this.$_rowKey$ = $props$$12$$.$rowKey$;
  this.$_id$ = $props$$12$$.id;
  this.$_time$ = (0,window.parseInt)($props$$12$$.time);
  this.$_endTime$ = $props$$12$$.$endTime$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,window.parseInt)($props$$12$$.$endTime$);
  this.$_shape$ = "circle";
  "square" == $props$$12$$.shape ? this.$_shape$ = "square" : "plus" == $props$$12$$.shape ? this.$_shape$ = "plus" : "diamond" == $props$$12$$.shape ? this.$_shape$ = "diamond" : "triangleUp" == $props$$12$$.shape ? this.$_shape$ = "triangleUp" : "triangleDown" == $props$$12$$.shape && (this.$_shape$ = "triangleDown");
  this.$_desc$ = $props$$12$$.$desc$;
  this.$_color$ = $props$$12$$.color;
  this.$_gradient$ = $props$$12$$.$gradient$;
  $props$$12$$.opacity != D.$JSCompiler_alias_NULL$$ && (this.$_opacity$ = (0,window.parseFloat)($props$$12$$.opacity));
  $props$$12$$.$scaleX$ != D.$JSCompiler_alias_NULL$$ && (this.$_scaleX$ = (0,window.parseFloat)($props$$12$$.$scaleX$));
  $props$$12$$.$scaleY$ != D.$JSCompiler_alias_NULL$$ && (this.$_scaleY$ = (0,window.parseFloat)($props$$12$$.$scaleY$));
  $props$$12$$.$durationFillColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_durationFillColor$ = $props$$12$$.$durationFillColor$)
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.getTime = (0,D.$JSCompiler_get$$)("$_time$");
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = (0,D.$JSCompiler_get$$)("$_scaleX$");
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = (0,D.$JSCompiler_get$$)("$_scaleY$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShape$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getOpacity$ = (0,D.$JSCompiler_get$$)("$_opacity$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = (0,D.$JSCompiler_set$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtTimelineOverviewEvent$$ = function $$DvtTimelineOverviewEvent$$$($type$$255$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$255$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewEvent$$, D.$DvtOverviewEvent$$, "DvtTimelineOverviewEvent");
D.$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId")
};
D.$DvtTimelineOverviewAutomation$$ = function $$DvtTimelineOverviewAutomation$$$($overview$$2$$) {
  this.$_Init$($overview$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewAutomation$$, D.$DvtAutomation$$, "DvtTimelineOverviewAutomation");
D.$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = (0,D.$JSCompiler_set$$)("$_overview$");
D.$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$17_displayable$$104_prev$$4$$) {
  var $id$$299_seriesIds$$1_seriesIndex$$117$$ = $arr$$17_displayable$$104_prev$$4$$.getId();
  if($arr$$17_displayable$$104_prev$$4$$ instanceof D.$DvtMarker$$) {
    $arr$$17_displayable$$104_prev$$4$$ = $id$$299_seriesIds$$1_seriesIndex$$117$$.split(":");
    if(4 != $arr$$17_displayable$$104_prev$$4$$.length) {
      return D.$JSCompiler_alias_NULL$$
    }
    $id$$299_seriesIds$$1_seriesIndex$$117$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" ");
    if($id$$299_seriesIds$$1_seriesIndex$$117$$ != D.$JSCompiler_alias_NULL$$ && ($id$$299_seriesIds$$1_seriesIndex$$117$$ = $id$$299_seriesIds$$1_seriesIndex$$117$$.indexOf($arr$$17_displayable$$104_prev$$4$$[1]), -1 < $id$$299_seriesIds$$1_seriesIndex$$117$$)) {
      return"marker[" + $id$$299_seriesIds$$1_seriesIndex$$117$$ + "][" + $arr$$17_displayable$$104_prev$$4$$[2] + "]"
    }
  }else {
    if("window" == $id$$299_seriesIds$$1_seriesIndex$$117$$) {
      return"range_window"
    }
    if("lh" == $id$$299_seriesIds$$1_seriesIndex$$117$$ || "lhb" == $id$$299_seriesIds$$1_seriesIndex$$117$$ || "lbgrh" == $id$$299_seriesIds$$1_seriesIndex$$117$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$299_seriesIds$$1_seriesIndex$$117$$ || "rhb" == $id$$299_seriesIds$$1_seriesIndex$$117$$ || "rbgrh" == $id$$299_seriesIds$$1_seriesIndex$$117$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$299_seriesIds$$1_seriesIndex$$117$$) {
      return $arr$$17_displayable$$104_prev$$4$$ = $arr$$17_displayable$$104_prev$$4$$.getParent().$getChildBefore$($arr$$17_displayable$$104_prev$$4$$), this.$GetSubIdForDomElement$($arr$$17_displayable$$104_prev$$4$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_8946_subId$$26$$) {
  for(var $array$$inline_8939_marker$$31_markerId$$inline_8949$$ = $markers$$inline_8946_subId$$26$$.split("["), $i$$inline_8950_len$$inline_8940_seriesIds$$2$$ = $array$$inline_8939_marker$$31_markerId$$inline_8949$$.length, $i$$inline_8941_index$$242_marker$$inline_8951$$ = 1;$i$$inline_8941_index$$242_marker$$inline_8951$$ < $i$$inline_8950_len$$inline_8940_seriesIds$$2$$;$i$$inline_8941_index$$242_marker$$inline_8951$$++) {
    var $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$ = $array$$inline_8939_marker$$31_markerId$$inline_8949$$[$i$$inline_8941_index$$242_marker$$inline_8951$$], $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$ = $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$.substr(0, $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$.length - 1), $tempIdAsNumber$$inline_8944$$ = (0,window.parseFloat)($elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$), $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$ = 
    (0,window.isNaN)($tempIdAsNumber$$inline_8944$$) ? $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$ : $tempIdAsNumber$$inline_8944$$;
    $array$$inline_8939_marker$$31_markerId$$inline_8949$$[$i$$inline_8941_index$$242_marker$$inline_8951$$] = $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$
  }
  if($array$$inline_8939_marker$$31_markerId$$inline_8949$$ && 3 == $array$$inline_8939_marker$$31_markerId$$inline_8949$$.length && "marker" == $array$$inline_8939_marker$$31_markerId$$inline_8949$$[0]) {
    if($i$$inline_8950_len$$inline_8940_seriesIds$$2$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" "), $i$$inline_8950_len$$inline_8940_seriesIds$$2$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_8941_index$$242_marker$$inline_8951$$ = (0,window.parseInt)($array$$inline_8939_marker$$31_markerId$$inline_8949$$[1], 10), -1 < $i$$inline_8941_index$$242_marker$$inline_8951$$ && $i$$inline_8941_index$$242_marker$$inline_8951$$ < 
    $i$$inline_8950_len$$inline_8940_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_8946_subId$$26$$ = this.$_overview$.$_markers$;
        $array$$inline_8939_marker$$31_markerId$$inline_8949$$ = "tl1:" + $i$$inline_8950_len$$inline_8940_seriesIds$$2$$[$i$$inline_8941_index$$242_marker$$inline_8951$$] + ":" + $array$$inline_8939_marker$$31_markerId$$inline_8949$$[2] + ":";
        for($i$$inline_8950_len$$inline_8940_seriesIds$$2$$ = 0;$i$$inline_8950_len$$inline_8940_seriesIds$$2$$ < $markers$$inline_8946_subId$$26$$.length;$i$$inline_8950_len$$inline_8940_seriesIds$$2$$++) {
          if($i$$inline_8941_index$$242_marker$$inline_8951$$ = $markers$$inline_8946_subId$$26$$[$i$$inline_8950_len$$inline_8940_seriesIds$$2$$], $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$ = $i$$inline_8941_index$$242_marker$$inline_8951$$.getId(), $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$ != D.$JSCompiler_alias_NULL$$ && 0 == $elem$$inline_8942_id$$inline_8952_tempId$$inline_8943$$.indexOf($array$$inline_8939_marker$$31_markerId$$inline_8949$$)) {
            $array$$inline_8939_marker$$31_markerId$$inline_8949$$ = $i$$inline_8941_index$$242_marker$$inline_8951$$;
            break a
          }
        }
        $array$$inline_8939_marker$$31_markerId$$inline_8949$$ = D.$JSCompiler_alias_NULL$$
      }
      return $array$$inline_8939_marker$$31_markerId$$inline_8949$$ ? $array$$inline_8939_marker$$31_markerId$$inline_8949$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
    }
  }else {
    if("range_window" == $markers$$inline_8946_subId$$26$$) {
      return this.$_overview$.$getChildAt$(1).$getElem$()
    }
    if("range_start_handle" == $markers$$inline_8946_subId$$26$$) {
      return this.$_overview$.$getChildAt$(this.$_overview$.$getNumChildren$() - this.$_overview$.$_lastChildIndex$).$getElem$()
    }
    if("range_end_handle" == $markers$$inline_8946_subId$$26$$) {
      return(0,D.$JSCompiler_StaticMethods_getRightHandle$$)(this.$_overview$).$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);
  return D;
});