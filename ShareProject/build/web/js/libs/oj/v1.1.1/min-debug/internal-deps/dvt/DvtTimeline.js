/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtTimelineOverview'], function(dvt) {
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
D.$DvtTimeComponent$$ = function $$DvtTimeComponent$$$($context$$604$$, $callback$$170$$, $callbackObj$$116$$) {
  this.Init($context$$604$$, $callback$$170$$, $callbackObj$$116$$)
};
(0,D.$goog$exportPath_$$)("DvtTimeComponent", D.$DvtTimeComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponent$$, D.$DvtBaseComponent$$, "DvtTimeComponent");
D.$DvtTimeComponent$$.prototype.Init = function $$DvtTimeComponent$$$$Init$($context$$605$$, $callback$$171$$, $callbackObj$$117$$) {
  D.$DvtTimeComponent$$.$superclass$.Init.call(this, $context$$605$$);
  this.$_callback$ = $callback$$171$$;
  this.$_callbackObj$ = $callbackObj$$117$$;
  this.$_virtualize$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtTimeComponent$$.prototype.$render$ = function $$DvtTimeComponent$$$$$render$$($props$$6_width$$163$$, $height$$147$$, $options$$260$$) {
  $options$$260$$ && this.$SetOptions$($options$$260$$);
  this.$Width$ = $props$$6_width$$163$$;
  this.$Height$ = $height$$147$$;
  this.$Options$ && ($props$$6_width$$163$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($props$$6_width$$163$$))
};
D.$DvtTimeComponent$$.prototype.render = D.$DvtTimeComponent$$.prototype.$render$;
D.$DvtTimeComponent$$.prototype.$SetOptions$ = function $$DvtTimeComponent$$$$$SetOptions$$($options$$261$$) {
  this.$Options$ = D.$DvtJSONUtils$$.$clone$($options$$261$$)
};
D.$DvtTimeComponent$$.prototype.$addTick$ = function $$DvtTimeComponent$$$$$addTick$$($container$$188$$, $line$$17_x1$$54$$, $x2$$50$$, $y1$$44$$, $y2$$41$$, $stroke$$114$$, $id$$291$$) {
  $line$$17_x1$$54$$ = new D.$DvtLine$$(this.$getCtx$(), $line$$17_x1$$54$$, $y1$$44$$, $x2$$50$$, $y2$$41$$, $id$$291$$);
  $line$$17_x1$$54$$.$setStroke$($stroke$$114$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$17_x1$$54$$);
  $container$$188$$.$addChild$($line$$17_x1$$54$$);
  return $line$$17_x1$$54$$
};
D.$JSCompiler_StaticMethods_addAxisLabel$$ = function $$JSCompiler_StaticMethods_addAxisLabel$$$($container$$189$$, $label$$100$$, $x$$289$$, $y$$258$$, $maxLength$$) {
  $label$$100$$.$setX$($x$$289$$);
  $label$$100$$.$setY$($y$$258$$);
  $label$$100$$.$isTruncated$() && $label$$100$$.$setTextString$($label$$100$$.$getUntruncatedTextString$());
  D.$DvtTextUtils$$.$fitText$($label$$100$$, $maxLength$$, window.Infinity, $container$$189$$);
  $label$$100$$.$alignCenter$()
};
D.$DvtTimeComponent$$.prototype.$addLabel$ = function $$DvtTimeComponent$$$$$addLabel$$($container$$190$$, $backgroundRect$$1_pos$$70$$, $label$$101_text$$110$$, $maxLength$$1$$, $y$$259$$, $labelStyle$$19$$, $id$$292$$, $renderBackground_width$$164$$, $labelPadding$$, $labelList$$, $isRTL$$36$$) {
  $label$$101_text$$110$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$101_text$$110$$, $backgroundRect$$1_pos$$70$$, 0, $id$$292$$);
  $labelStyle$$19$$ != D.$JSCompiler_alias_NULL$$ && $label$$101_text$$110$$.$setCSSStyle$($labelStyle$$19$$);
  $container$$190$$.$addChild$($label$$101_text$$110$$);
  var $dim$$85$$ = $label$$101_text$$110$$.$getDimensions$();
  $container$$190$$.removeChild($label$$101_text$$110$$);
  $y$$259$$ -= $dim$$85$$.$h$;
  $label$$101_text$$110$$.$setY$($y$$259$$);
  $isRTL$$36$$ && $label$$101_text$$110$$.$setX$($backgroundRect$$1_pos$$70$$ - $dim$$85$$.$w$);
  $renderBackground_width$$164$$ && ($renderBackground_width$$164$$ = window.Math.min($dim$$85$$.$w$ + 2 * $labelPadding$$, $maxLength$$1$$), $backgroundRect$$1_pos$$70$$ = new D.$DvtRect$$(this.$getCtx$(), ($isRTL$$36$$ ? $backgroundRect$$1_pos$$70$$ - $renderBackground_width$$164$$ + 2 * $labelPadding$$ : $backgroundRect$$1_pos$$70$$) - $labelPadding$$, $y$$259$$ - $labelPadding$$, $renderBackground_width$$164$$, $dim$$85$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$292$$), $backgroundRect$$1_pos$$70$$.$setCSSStyle$($labelStyle$$19$$), 
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backgroundRect$$1_pos$$70$$, 3), $container$$190$$.$addChild$($backgroundRect$$1_pos$$70$$), $labelList$$ && $labelList$$.push($backgroundRect$$1_pos$$70$$));
  D.$DvtTextUtils$$.$fitText$($label$$101_text$$110$$, $maxLength$$1$$, window.Infinity, $container$$190$$);
  $labelList$$ && $labelList$$.push($label$$101_text$$110$$);
  return $label$$101_text$$110$$
};
D.$DvtTimeComponent$$.prototype.$_applyParsedProperties$ = function $$DvtTimeComponent$$$$$_applyParsedProperties$$($props$$7$$) {
  this.$_origStart$ = $props$$7$$.$origStart$;
  this.$_origEnd$ = $props$$7$$.$origEnd$;
  this.$_start$ = $props$$7$$.start;
  this.$_end$ = $props$$7$$.end;
  this.$_inlineStyle$ = $props$$7$$.$inlineStyle$;
  this.$_scale$ = $props$$7$$.scale;
  this.$_converter$ = $props$$7$$.$converter$;
  this.$applyStyleValues$()
};
D.$DvtTimeComponent$$.prototype.$applyStyleValues$ = function $$DvtTimeComponent$$$$$applyStyleValues$$() {
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, this.$_inlineStyle$)
};
D.$JSCompiler_StaticMethods_setContentLength$$ = function $$JSCompiler_StaticMethods_setContentLength$$$($JSCompiler_StaticMethods_setContentLength$self$$, $length$$25$$) {
  $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$ < $length$$25$$ ? $length$$25$$ : $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$;
  $JSCompiler_StaticMethods_setContentLength$self$$.$_virtualize$ || ($JSCompiler_StaticMethods_setContentLength$self$$.$_fetchStartPos$ = 0, $JSCompiler_StaticMethods_setContentLength$self$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$)
};
D.$JSCompiler_StaticMethods_renderScrollableCanvas$$ = function $$JSCompiler_StaticMethods_renderScrollableCanvas$$$($JSCompiler_StaticMethods_renderScrollableCanvas$self$$) {
  $JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$_canvas$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$getCtx$(), "canvas");
  $JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$addChild$($JSCompiler_StaticMethods_renderScrollableCanvas$self$$.$_canvas$)
};
D.$DvtTimeComponent$$.prototype.$isRTL$ = function $$DvtTimeComponent$$$$$isRTL$$() {
  return(0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$())
};
D.$DvtTimeComponentAxis$$ = function $$DvtTimeComponentAxis$$$($context$$606$$, $callback$$172$$, $callbackObj$$118$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$) {
  this.Init($context$$606$$, $callback$$172$$, $callbackObj$$118$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentAxis$$, D.$DvtContainer$$, "DvtTimeComponentAxis");
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$ = 2;
D.$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$ = 1;
D.$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
D.$DvtTimeComponentAxis$$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
D.$DvtTimeComponentAxis$$.prototype.Init = function $$DvtTimeComponentAxis$$$$Init$($context$$607$$, $callback$$173$$, $callbackObj$$119$$, $isVertical$$2$$, $zoomOrder$$1$$, $dateFormatStrings$$) {
  D.$DvtTimeComponentAxis$$.$superclass$.Init.call(this, $context$$607$$);
  this.$_calendar$ = new D.$DvtTimeComponentCalendar$$;
  this.$_formatter$ = new D.$DvtTimeComponentAxisFormatter$$(D.$DvtTimeComponentAxisFormatter$$.SHORT, $dateFormatStrings$$);
  this.$_contentSize$ = $isVertical$$2$$ ? D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ : D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
  this.$_borderWidth$ = D.$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$;
  this.$_zoomOrder$ = $zoomOrder$$1$$;
  this.$_dateToIsoConverter$ = $context$$607$$.$getLocaleHelpers$().dateToIsoConverter
};
D.$DvtTimeComponentAxis$$.prototype.$setScale$ = (0,D.$JSCompiler_set$$)("$_scale$");
D.$JSCompiler_StaticMethods_setContentSize$$ = function $$JSCompiler_StaticMethods_setContentSize$$$($JSCompiler_StaticMethods_setContentSize$self$$, $contentSize$$) {
  $contentSize$$ > $JSCompiler_StaticMethods_setContentSize$self$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$.$_contentSize$ = $contentSize$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeComponentAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$
};
D.$JSCompiler_prototypeAlias$$.$setBorderWidth$ = (0,D.$JSCompiler_set$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = (0,D.$JSCompiler_get$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$
};
D.$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$251$$, $dateFormatStrings$$1$$) {
  this.$_formatter$ = new D.$DvtTimeComponentAxisFormatter$$($type$$251$$, $dateFormatStrings$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$11$$) {
  return this.$_calendar$.$adjustDate$(new window.Date($date$$11$$), this.$_scale$)
};
D.$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($date$$12$$) {
  return this.$_calendar$.$getNextDate$(new window.Date($date$$12$$), this.$_scale$)
};
D.$JSCompiler_StaticMethods_formatDate$$ = function $$JSCompiler_StaticMethods_formatDate$$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$13$$) {
  if($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$)
    }
  }
  if($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$)
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.$format$($date$$13$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$)
};
D.$DvtTimeComponentAxisFormatter$$ = function $$DvtTimeComponentAxisFormatter$$$($type$$252$$, $locale$$8$$) {
  this.Init($type$$252$$, $locale$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentAxisFormatter$$, D.$DvtObj$$, "DvtTimeComponentAxisFormatter");
D.$DvtTimeComponentAxisFormatter$$.$LONG$ = 0;
D.$DvtTimeComponentAxisFormatter$$.SHORT = 1;
D.$DvtTimeComponentAxisFormatter$$.prototype.Init = function $$DvtTimeComponentAxisFormatter$$$$Init$($type$$253$$, $dateFormatStrings$$2$$) {
  this.$_type$ = $type$$253$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$2$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy"
};
D.$DvtTimeComponentAxisFormatter$$.prototype.$format$ = function $$DvtTimeComponentAxisFormatter$$$$$format$$($date$$14$$, $scale$$69$$) {
  var $format$$9$$ = this.$_formats$[this.$_type$][$scale$$69$$];
  return $format$$9$$ != D.$JSCompiler_alias_NULL$$ ? $date$$14$$.$format$($format$$9$$, D.$JSCompiler_alias_NULL$$, this.$_dateFormatStrings$) : $date$$14$$.toLocaleString()
};
D.$token$$inline_8604$$ = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
D.$timezone$$inline_8605$$ = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
D.$timezoneClip$$inline_8606$$ = /[^-+\dA-Z]/g;
D.$pad$$inline_8607$$ = function $$pad$$inline_8607$$$($val$$inline_8608$$, $len$$inline_8609$$) {
  $val$$inline_8608$$ = (0,window.String)($val$$inline_8608$$);
  for($len$$inline_8609$$ = $len$$inline_8609$$ || 2;$val$$inline_8608$$.length < $len$$inline_8609$$;) {
    $val$$inline_8608$$ = "0" + $val$$inline_8608$$
  }
  return $val$$inline_8608$$
};
D.$dateFormat$$ = function $$dateFormat$$$($date$$inline_8610$$, $mask$$inline_8611$$, $utc$$inline_8612$$, $dateFormatStrings$$inline_8613$$) {
  1 == arguments.length && ("[object String]" == window.Object.prototype.toString.call($date$$inline_8610$$) && !/\d/.test($date$$inline_8610$$)) && ($mask$$inline_8611$$ = $date$$inline_8610$$, $date$$inline_8610$$ = D.$JSCompiler_alias_VOID$$);
  $date$$inline_8610$$ = $date$$inline_8610$$ ? new window.Date($date$$inline_8610$$) : new window.Date;
  if((0,window.isNaN)($date$$inline_8610$$)) {
    throw(0,window.SyntaxError)("invalid date");
  }
  $mask$$inline_8611$$ = (0,window.String)(D.$dateFormat$$.$masks$[$mask$$inline_8611$$] || $mask$$inline_8611$$ || D.$dateFormat$$.$masks$["default"]);
  "UTC:" == $mask$$inline_8611$$.slice(0, 4) && ($mask$$inline_8611$$ = $mask$$inline_8611$$.slice(4), $utc$$inline_8612$$ = D.$JSCompiler_alias_TRUE$$);
  var $L$$inline_8622__$$inline_8614$$ = $utc$$inline_8612$$ ? "getUTC" : "get", $d$$inline_8615$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "Date"](), $D$$inline_8616$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "Day"](), $m$$inline_8617$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "Month"](), $y$$inline_8618$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "FullYear"](), $H$$inline_8619$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + 
  "Hours"](), $M$$inline_8620$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "Minutes"](), $s$$inline_8621$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "Seconds"](), $L$$inline_8622__$$inline_8614$$ = $date$$inline_8610$$[$L$$inline_8622__$$inline_8614$$ + "Milliseconds"](), $o$$inline_8623$$ = $utc$$inline_8612$$ ? 0 : $date$$inline_8610$$.getTimezoneOffset(), $flags$$inline_8624$$ = {d:$d$$inline_8615$$, dd:(0,D.$pad$$inline_8607$$)($d$$inline_8615$$), ddd:$dateFormatStrings$$inline_8613$$.$dayNames$[$D$$inline_8616$$], 
  dddd:$dateFormatStrings$$inline_8613$$.$dayNames$[$D$$inline_8616$$ + 7], m:$m$$inline_8617$$ + 1, mm:(0,D.$pad$$inline_8607$$)($m$$inline_8617$$ + 1), mmm:$dateFormatStrings$$inline_8613$$.$monthNames$[$m$$inline_8617$$], mmmm:$dateFormatStrings$$inline_8613$$.$monthNames$[$m$$inline_8617$$ + 12], yy:(0,window.String)($y$$inline_8618$$).slice(2), yyyy:$y$$inline_8618$$, h:$H$$inline_8619$$ % 12 || 12, hh:(0,D.$pad$$inline_8607$$)($H$$inline_8619$$ % 12 || 12), H:$H$$inline_8619$$, HH:(0,D.$pad$$inline_8607$$)($H$$inline_8619$$), 
  M:$M$$inline_8620$$, MM:(0,D.$pad$$inline_8607$$)($M$$inline_8620$$), s:$s$$inline_8621$$, ss:(0,D.$pad$$inline_8607$$)($s$$inline_8621$$), l:(0,D.$pad$$inline_8607$$)($L$$inline_8622__$$inline_8614$$, 3), L:(0,D.$pad$$inline_8607$$)(99 < $L$$inline_8622__$$inline_8614$$ ? window.Math.round($L$$inline_8622__$$inline_8614$$ / 10) : $L$$inline_8622__$$inline_8614$$), t:12 > $H$$inline_8619$$ ? "a" : "p", tt:12 > $H$$inline_8619$$ ? "am" : "pm", T:12 > $H$$inline_8619$$ ? "A" : "P", TT:12 > $H$$inline_8619$$ ? 
  "AM" : "PM", Z:$utc$$inline_8612$$ ? "UTC" : ((0,window.String)($date$$inline_8610$$).match(D.$timezone$$inline_8605$$) || [""]).pop().replace(D.$timezoneClip$$inline_8606$$, ""), o:(0 < $o$$inline_8623$$ ? "-" : "+") + (0,D.$pad$$inline_8607$$)(100 * window.Math.floor(window.Math.abs($o$$inline_8623$$) / 60) + window.Math.abs($o$$inline_8623$$) % 60, 4), S:["th", "st", "nd", "rd"][3 < $d$$inline_8615$$ % 10 ? 0 : (10 != $d$$inline_8615$$ % 100 - $d$$inline_8615$$ % 10) * $d$$inline_8615$$ % 10]};
  return $mask$$inline_8611$$.replace(D.$token$$inline_8604$$, function($date$$inline_8610$$) {
    return $date$$inline_8610$$ in $flags$$inline_8624$$ ? $flags$$inline_8624$$[$date$$inline_8610$$] : $date$$inline_8610$$.slice(1, $date$$inline_8610$$.length - 1)
  })
};
D.$dateFormat$$.$masks$ = {"default":"ddd mmm dd yyyy HH:MM:ss", $shortDate$:"m/d/yy", $mediumDate$:"mmm d, yyyy", $longDate$:"mmmm d, yyyy", $fullDate$:"dddd, mmmm d, yyyy", $shortTime$:"h:MM TT", $mediumTime$:"h:MM:ss TT", $longTime$:"h:MM:ss TT Z", $isoDate$:"yyyy-mm-dd", $isoTime$:"HH:MM:ss", $isoDateTime$:"yyyy-mm-dd'T'HH:MM:ss", $isoUtcDateTime$:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};
window.Date.prototype.$format$ = function $Date$$$format$$($mask$$8$$, $utc$$1$$, $dateFormatStrings$$5$$) {
  return(0,D.$dateFormat$$)(this, $mask$$8$$, $utc$$1$$, $dateFormatStrings$$5$$)
};
D.$DvtTimeComponentCalendar$$ = function $$DvtTimeComponentCalendar$$$($options$$262$$) {
  this.Init($options$$262$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentCalendar$$, D.$DvtObj$$, "DvtTimeComponentCalendar");
D.$DvtTimeComponentCalendar$$.prototype.Init = function $$DvtTimeComponentCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5
};
D.$DvtTimeComponentCalendar$$.prototype.$adjustDate$ = function $$DvtTimeComponentCalendar$$$$$adjustDate$$($date$$16$$, $scale$$70$$) {
  var $_adjustedDate$$ = new window.Date($date$$16$$.getTime());
  if("weeks" == $scale$$70$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$16$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$)
  }else {
    "months" == $scale$$70$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$70$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$70$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$70$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$70$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$70$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$16$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$70$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$16$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$70$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$70$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1))
  }
  return $_adjustedDate$$
};
D.$DvtTimeComponentCalendar$$.prototype.$getNextDate$ = function $$DvtTimeComponentCalendar$$$$$getNextDate$$($date$$17$$, $scale$$71$$) {
  var $_nextDate$$ = new window.Date($date$$17$$.getTime());
  "seconds" == $scale$$71$$ ? $_nextDate$$.setSeconds($date$$17$$.getSeconds() + 1) : "minutes" == $scale$$71$$ ? $_nextDate$$.setMinutes($date$$17$$.getMinutes() + 1) : "hours" == $scale$$71$$ ? $_nextDate$$.setHours($date$$17$$.getHours() + 1) : "days" == $scale$$71$$ ? $_nextDate$$.setDate($date$$17$$.getDate() + 1) : "weeks" == $scale$$71$$ ? $_nextDate$$.setDate($date$$17$$.getDate() + 7) : "months" == $scale$$71$$ ? $_nextDate$$.setMonth($date$$17$$.getMonth() + 1) : "quarters" == $scale$$71$$ ? 
  $_nextDate$$.setMonth($date$$17$$.getMonth() + 3) : "halfyears" == $scale$$71$$ ? $_nextDate$$.setMonth($date$$17$$.getMonth() + 6) : "years" == $scale$$71$$ ? $_nextDate$$.setFullYear($date$$17$$.getFullYear() + 1) : "twoyears" == $scale$$71$$ ? $_nextDate$$.setFullYear($date$$17$$.getFullYear() + 2) : $_nextDate$$.setYear($date$$17$$.getYear() + 1);
  return $_nextDate$$
};
D.$DvtTimeComponentParser$$ = function $$DvtTimeComponentParser$$$($view$$66$$) {
  this.Init($view$$66$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentParser$$, D.$DvtObj$$, "DvtTimeComponentParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeComponentParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($view$$67$$) {
  this.$_view$ = $view$$67$$;
  this.$_calendar$ = new D.$DvtTimeComponentCalendar$$
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$263$$) {
  this.$_startTime$ = new window.Date($options$$263$$.start);
  this.$_endTime$ = new window.Date($options$$263$$.end);
  var $ret$$97$$ = this.$ParseRootAttributes$();
  $ret$$97$$.$inlineStyle$ = $options$$263$$.style;
  return $ret$$97$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$() {
  var $ret$$98$$ = {};
  $ret$$98$$.$origStart$ = this.$_startTime$;
  $ret$$98$$.$origEnd$ = this.$_endTime$;
  $ret$$98$$.orientation = "horizontal";
  return $ret$$98$$
};
D.$JSCompiler_prototypeAlias$$.getDate = function $$JSCompiler_prototypeAlias$$$getDate$($date$$18$$) {
  return $date$$18$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $date$$18$$.getTime ? $date$$18$$.getTime() : (0,window.isNaN)($date$$18$$) ? (new window.Date($date$$18$$)).getTime() + 0 : $date$$18$$
};
D.$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$19$$, $scale$$72$$) {
  return this.$_calendar$.$adjustDate$($date$$19$$, $scale$$72$$)
};
D.$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($date$$20$$, $scale$$73$$) {
  return this.$_calendar$.$getNextDate$($date$$20$$, $scale$$73$$)
};
D.$DvtTimelineKeyboardHandler$$ = function $$DvtTimelineKeyboardHandler$$$($manager$$30$$) {
  this.Init($manager$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTimelineKeyboardHandler");
D.$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$31$$) {
  D.$DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$31$$)
};
D.$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$804$$) {
  return this.$isNavigationEvent$($event$$804$$) && !$event$$804$$.ctrlKey
};
D.$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$805$$) {
  return 32 == $event$$805$$.keyCode && $event$$805$$.ctrlKey
};
D.$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$806$$) {
  var $keyCode$$50$$ = $event$$806$$.keyCode;
  (0,D.$DvtKeyboardEvent$isEquals$$)($event$$806$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$806$$) ? this.$_eventManager$.$zoomBy$(1 / 1.5) : (0,D.$DvtKeyboardEvent$isMinus$$)($event$$806$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$806$$) ? this.$_eventManager$.$zoomBy$(1.5) : 33 == $keyCode$$50$$ ? ($event$$806$$.shiftKey ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$806$$)) : 34 == $keyCode$$50$$ && 
  ($event$$806$$.shiftKey ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$806$$));
  return D.$DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$806$$)
};
D.$DvtTimelineKeyboardHandler$getNextNavigable$$ = function $$DvtTimelineKeyboardHandler$getNextNavigable$$$($currentNavigable$$15$$, $event$$807$$, $navigableItems$$5$$) {
  var $isVertical$$3_series$$29$$ = $currentNavigable$$15$$.$getSeries$(), $seriesIndex$$116$$ = $currentNavigable$$15$$.$getSeriesIndex$(), $isRTL$$37$$ = (0,D.$DvtAgent$isRightToLeft$$)($isVertical$$3_series$$29$$.$getCtx$()), $isVertical$$3_series$$29$$ = $isVertical$$3_series$$29$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$5$$.length;
  if(!$isRTL$$37$$ && 39 == $event$$807$$.keyCode || $isRTL$$37$$ && 37 == $event$$807$$.keyCode) {
    if($isVertical$$3_series$$29$$) {
      if($isDualSeries$$ && 1 != $seriesIndex$$116$$) {
        return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[1])
      }
    }else {
      return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    if(!$isRTL$$37$$ && 37 == $event$$807$$.keyCode || $isRTL$$37$$ && 39 == $event$$807$$.keyCode) {
      if($isVertical$$3_series$$29$$) {
        if($isDualSeries$$ && 0 != $seriesIndex$$116$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[0])
        }
      }else {
        return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_FALSE$$)
      }
    }else {
      if(40 == $event$$807$$.keyCode) {
        if($isVertical$$3_series$$29$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_TRUE$$)
        }
        if($isDualSeries$$ && 1 != $seriesIndex$$116$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[1])
        }
      }else {
        if(38 == $event$$807$$.keyCode) {
          if($isVertical$$3_series$$29$$) {
            return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[$seriesIndex$$116$$], D.$JSCompiler_alias_FALSE$$)
          }
          if($isDualSeries$$ && 0 != $seriesIndex$$116$$) {
            return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$15$$, $navigableItems$$5$$[0])
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineKeyboardHandler$getNextItem$$ = function $$DvtTimelineKeyboardHandler$getNextItem$$$($item$$51_nextIndex$$5$$, $navigableItems$$6$$, $isNext$$) {
  $item$$51_nextIndex$$5$$ = $navigableItems$$6$$.indexOf($item$$51_nextIndex$$5$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$51_nextIndex$$5$$ && $item$$51_nextIndex$$5$$ < $navigableItems$$6$$.length ? $navigableItems$$6$$[$item$$51_nextIndex$$5$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineKeyboardHandler$getClosestItem$$ = function $$DvtTimelineKeyboardHandler$getClosestItem$$$($item$$52$$, $navigableItems$$7$$) {
  if(0 < $navigableItems$$7$$.length) {
    for(var $closest$$ = $navigableItems$$7$$[0], $itemLoc$$ = $item$$52$$.$_loc$, $dist$$2$$ = window.Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$850$$ = 1;$i$$850$$ < $navigableItems$$7$$.length;$i$$850$$++) {
      var $testDist$$ = window.Math.abs($itemLoc$$ - $navigableItems$$7$$[$i$$850$$].$_loc$);
      $testDist$$ < $dist$$2$$ && ($dist$$2$$ = $testDist$$, $closest$$ = $navigableItems$$7$$[$i$$850$$])
    }
    return $closest$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineEventManager$$ = function $$DvtTimelineEventManager$$$($timeline$$2$$) {
  this.Init($timeline$$2$$.$getCtx$(), $timeline$$2$$.$processEvent$, $timeline$$2$$);
  this.$_timeline$ = $timeline$$2$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineEventManager$$, D.$DvtEventManager$$, "DvtTimelineEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$101_stage$$21$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$101_stage$$21$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$101_stage$$21$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$101_stage$$21$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isPlatformIE$$)() && ($displayable$$101_stage$$21$$ = this.$getCtx$().$_stage$, $displayable$$101_stage$$21$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, 
  D.$JSCompiler_alias_FALSE$$, this), $displayable$$101_stage$$21$$.$addEvtListener$("mouseleave", this.$OnMouseLeave$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$102_stage$$22$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$102_stage$$22$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$102_stage$$22$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$102_stage$$22$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isPlatformIE$$)() && ($displayable$$102_stage$$22$$ = this.$getCtx$().$_stage$, $displayable$$102_stage$$22$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, 
  D.$JSCompiler_alias_FALSE$$, this), $displayable$$102_stage$$22$$.$removeEvtListener$("mouseleave", this.$OnMouseLeave$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$783$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$783$$);
  this.$_timeline$.$HandleKeyDown$($event$$783$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$784$$) {
  this.$_isDragPanning$ || (D.$DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$784$$), (0,D.$JSCompiler_StaticMethods_handleShapeClick$$)(this.$_timeline$, $event$$784$$))
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$785$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$785$$);
  !(0,D.$DvtAgent$isPlatformIE$$)() && !this.$isMouseOver$ && (this.$isMouseOver$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_timeline$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_timeline$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$788$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$788$$);
  (0,D.$DvtAgent$isPlatformIE$$)() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$789$$) {
  this.$_isDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$789$$);
  this.$_timeline$.$HandleMouseDown$($event$$789$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($compLoc$$inline_8862_event$$790$$) {
  var $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$ = this.$_timeline$;
  (0,D.$DvtEventManager$consumeEvent$$)($compLoc$$inline_8862_event$$790$$);
  var $wheelDelta$$inline_8860$$ = $compLoc$$inline_8862_event$$790$$.wheelDelta;
  if($wheelDelta$$inline_8860$$) {
    var $compPagePos$$inline_8861_time$$inline_8863$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$getCtx$());
    $compLoc$$inline_8862_event$$790$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$_isVertical$ ? $compLoc$$inline_8862_event$$790$$.pageY - $compPagePos$$inline_8861_time$$inline_8863$$.y : $compLoc$$inline_8862_event$$790$$.pageX - $compPagePos$$inline_8861_time$$inline_8863$$.x;
    $compPagePos$$inline_8861_time$$inline_8863$$ = ($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$_end$ - $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$_start$) / $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$_contentLength$ * $compLoc$$inline_8862_event$$790$$ + $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$_viewStartTime$;
    (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$, $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8858$$.$_contentLength$ * (0.02 * $wheelDelta$$inline_8860$$ + 1), $compPagePos$$inline_8861_time$$inline_8863$$, $compLoc$$inline_8862_event$$790$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$791$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$791$$);
  this.$_timeline$.$HandleTouchStart$($event$$791$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus()
};
D.$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$792$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$792$$);
  this.$_timeline$.$HandleTouchEnd$($event$$792$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$793$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$793$$) : this.$_onMouseDragStart$($event$$793$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$794$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$794$$) : this.$_onMouseDragMove$($event$$794$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$795$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$795$$) : this.$_onMouseDragEnd$($event$$795$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$15$$, $pageY$$15$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$15$$ - this.$_stageAbsolutePosition$.x, $pageY$$15$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$796_relPos$$66$$) {
  return 2 != $event$$796_relPos$$66$$.button ? ($event$$796_relPos$$66$$ = this.$_getRelativePosition$($event$$796_relPos$$66$$.pageX, $event$$796_relPos$$66$$.pageY), this.$_timeline$.$beginDragPan$($event$$796_relPos$$66$$.x, $event$$796_relPos$$66$$.y), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$797_relPos$$67$$) {
  $event$$797_relPos$$67$$ = this.$_getRelativePosition$($event$$797_relPos$$67$$.pageX, $event$$797_relPos$$67$$.pageY);
  this.$_timeline$.$contDragPan$($event$$797_relPos$$67$$.x, $event$$797_relPos$$67$$.y) && (this.$_isDragPanning$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$799_relPos$$68$$) {
  var $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$ = $event$$799_relPos$$68$$.touches;
  if(1 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.length) {
    return $event$$799_relPos$$68$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$799_relPos$$68$$.x, $event$$799_relPos$$68$$.y), D.$JSCompiler_alias_TRUE$$
  }
  if(2 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = D.$JSCompiler_alias_TRUE$$;
    var $relPos1$$4_y1$$inline_8867$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$[0].pageY), $relPos2$$4_y2$$inline_8869$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$[1].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$[1].pageY), $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$ = 
    this.$_timeline$, $x1$$inline_8866$$ = $relPos1$$4_y1$$inline_8867$$.x, $relPos1$$4_y1$$inline_8867$$ = $relPos1$$4_y1$$inline_8867$$.y, $x2$$inline_8868$$ = $relPos2$$4_y2$$inline_8869$$.x, $relPos2$$4_y2$$inline_8869$$ = $relPos2$$4_y2$$inline_8869$$.y;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_initialPinchZoomLoc$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_isVertical$ ? window.Math.sqrt(($relPos1$$4_y1$$inline_8867$$ - $relPos2$$4_y2$$inline_8869$$) * ($relPos1$$4_y1$$inline_8867$$ - $relPos2$$4_y2$$inline_8869$$)) + ($relPos1$$4_y1$$inline_8867$$ < $relPos2$$4_y2$$inline_8869$$ ? $relPos1$$4_y1$$inline_8867$$ : $relPos2$$4_y2$$inline_8869$$) : window.Math.sqrt(($x1$$inline_8866$$ - 
    $x2$$inline_8868$$) * ($x1$$inline_8866$$ - $x2$$inline_8868$$)) + ($x1$$inline_8866$$ < $x2$$inline_8868$$ ? $x1$$inline_8866$$ : $x2$$inline_8868$$);
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_initialPinchZoomTime$ = ($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_end$ - $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_start$) / $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_contentLength$ * $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_initialPinchZoomLoc$ + $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_initialPinchZoomDist$ = window.Math.sqrt(($x1$$inline_8866$$ - $x2$$inline_8868$$) * ($x1$$inline_8866$$ - $x2$$inline_8868$$) + ($relPos1$$4_y1$$inline_8867$$ - $relPos2$$4_y2$$inline_8869$$) * ($relPos1$$4_y1$$inline_8867$$ - $relPos2$$4_y2$$inline_8869$$));
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_initialPinchZoomLength$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8865_touches$$16$$.$_contentLength$;
    (0,D.$DvtEventManager$consumeEvent$$)($event$$799_relPos$$68$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$800$$) {
  var $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$ = $event$$800$$.touches;
  if(1 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.length) {
    $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$[0].pageY), this.$_timeline$.$contDragPan$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.x, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.y), 
    $event$$800$$.preventDefault()
  }else {
    if(2 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.length) {
      var $relPos1$$5_y1$$inline_8873$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$[0].pageY), $relPos2$$5_y2$$inline_8875$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$[1].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$[1].pageY), 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$ = this.$_timeline$, $currPinchZoomDist$$inline_8876_x1$$inline_8872$$ = $relPos1$$5_y1$$inline_8873$$.x, $relPos1$$5_y1$$inline_8873$$ = $relPos1$$5_y1$$inline_8873$$.y, $x2$$inline_8874$$ = $relPos2$$5_y2$$inline_8875$$.x, $relPos2$$5_y2$$inline_8875$$ = $relPos2$$5_y2$$inline_8875$$.y, $currPinchZoomDist$$inline_8876_x1$$inline_8872$$ = window.Math.sqrt(($currPinchZoomDist$$inline_8876_x1$$inline_8872$$ - $x2$$inline_8874$$) * 
      ($currPinchZoomDist$$inline_8876_x1$$inline_8872$$ - $x2$$inline_8874$$) + ($relPos1$$5_y1$$inline_8873$$ - $relPos2$$5_y2$$inline_8875$$) * ($relPos1$$5_y1$$inline_8873$$ - $relPos2$$5_y2$$inline_8875$$));
      $currPinchZoomDist$$inline_8876_x1$$inline_8872$$ != $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.$_initialPinchZoomDist$ && ($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.$_triggerViewportChange$ = D.$JSCompiler_alias_TRUE$$);
      (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$, $currPinchZoomDist$$inline_8876_x1$$inline_8872$$ / $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.$_initialPinchZoomDist$ * $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.$_initialPinchZoomLength$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.$_initialPinchZoomTime$, 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8871_relPos$$69_touches$$17$$.$_initialPinchZoomLoc$, D.$JSCompiler_alias_FALSE$$);
      $event$$800$$.preventDefault()
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$801$$) {
  if(this.$_isPinchZoom$) {
    this.$_isPinchZoom$ = D.$JSCompiler_alias_FALSE$$;
    var $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$ = this.$_timeline$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_initialPinchZoomDist$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_initialPinchZoomLoc$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_initialPinchZoomLength$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_initialPinchZoomTime$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_triggerViewportChange$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8878$$.$_scale$)))
  }else {
    this.$_timeline$.$endDragPan$()
  }
  $event$$801$$.preventDefault();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$14$$) {
  this.$_timeline$.$zoomBy$($dz$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$33$$, $dy$$36$$) {
  var $deltaX$$26$$ = $dx$$33$$ * this.$_timeline$.$_canvasLength$ * ((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? -1 : 1), $deltaY$$29$$ = $dy$$36$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$26$$ && (this.$_timeline$.$_triggerViewportChange$ = D.$JSCompiler_alias_TRUE$$);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$26$$, $deltaY$$29$$);
  (0,D.$JSCompiler_StaticMethods_endPan$$)(this.$_timeline$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$zoomBy$(1 / 1.5)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$zoomBy$(1.5)
};
D.$DvtTimeline$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtTimeline", D.$DvtTimeline$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimeline$$, D.$DvtTimeComponent$$, "DvtTimeline");
D.$DvtTimeline$$.newInstance = function $$DvtTimeline$$$newInstance$($context$$608$$, $callback$$174$$, $callbackObj$$120$$) {
  var $timeline$$ = new D.$DvtTimeline$$;
  $timeline$$.Init($context$$608$$, $callback$$174$$, $callbackObj$$120$$);
  return $timeline$$
};
D.$DvtTimeline$$.prototype.Init = function $$DvtTimeline$$$$Init$($context$$609$$, $callback$$175$$, $callbackObj$$121$$) {
  D.$DvtTimeline$$.$superclass$.Init.call(this, $context$$609$$, $callback$$175$$, $callbackObj$$121$$);
  this.$EventManager$ = new D.$DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : (this.$_keyboardHandler$ = new D.$DvtTimelineKeyboardHandler$$(this.$EventManager$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$_keyboardHandler$))
};
D.$DvtTimeline$$.prototype.$Parse$ = function $$DvtTimeline$$$$$Parse$$($options$$264$$) {
  this.$_parser$ = new D.$DvtTimelineParser$$(this);
  return this.$_parser$.parse($options$$264$$)
};
D.$DvtTimeline$$.prototype.$_applyParsedProperties$ = function $$DvtTimeline$$$$$_applyParsedProperties$$($props$$8$$) {
  var $orientation$$3$$ = $props$$8$$.orientation;
  this.$_isVertical$ = $orientation$$3$$ && "vertical" == $orientation$$3$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_hasOverview$ = $props$$8$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$8$$.$viewStart$;
  this.$_viewEndTime$ = $props$$8$$.$viewEnd$;
  this.$_selectionMode$ = $props$$8$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == this.$_selectionMode$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_axisInlineStyle$ = $props$$8$$.$axisStyle$;
  this.$_shortDesc$ = $props$$8$$.$shortDesc$;
  this.$_id$ = $props$$8$$.id;
  this.$_referenceObjects$ = $props$$8$$.$referenceObjects$;
  this.$_zoomOrder$ = $props$$8$$.$zoomOrder$;
  this.$_seriesScale$ = $props$$8$$.$seriesScale$;
  this.$_dateFormatStrings$ = {$dayNames$:[(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_SUNDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_MONDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_TUESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_WEDNESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "DAY_SHORT_THURSDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_FRIDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_SATURDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SUNDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_MONDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "DAY_TUESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_WEDNESDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_THURSDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_FRIDAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SATURDAY", D.$JSCompiler_alias_NULL$$)], $monthNames$:[(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SEPTEMBER", 
  D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_DECEMBER", D.$JSCompiler_alias_NULL$$)]};
  this.$_seriesScale$ && (this.$_seriesConverter$ = $props$$8$$.$seriesConverter$, this.$_seriesTimeAxis$ = new D.$DvtTimeComponentAxis$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$_converter$ = this.$_seriesConverter$, this.$_isVertical$ ? (this.$_seriesTimeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = 
  this.$_resources$.converterVert) : (this.$_seriesTimeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.$LONG$, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converter));
  this.$_defaultInversions$ = [D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$];
  D.$DvtTimeline$$.$superclass$.$_applyParsedProperties$.call(this, $props$$8$$)
};
D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$ = function $$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$25$$) {
  return!$JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ && 1 == $seriesCount$$25$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$()
};
D.$DvtTimeline$$.prototype.select = function $$DvtTimeline$$$$select$($selection$$41$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$41$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_applyInitialSelections$$)(this)
};
D.$DvtTimeline$$.prototype.select = D.$DvtTimeline$$.prototype.select;
D.$DvtTimeline$$.prototype.$render$ = function $$DvtTimeline$$$$$render$$($options$$265$$, $width$$165$$, $height$$148$$) {
  $options$$265$$ && this.$SetOptions$($options$$265$$);
  this.$_overviewCanvas$ = this.$_overview$ = this.$_innerCanvas$ = this.$_canvas$ = this.$_axis$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && (this.$_resources$ = this.$Options$._resources, this.$_resources$ == D.$JSCompiler_alias_NULL$$ && (this.$_resources$ = []));
  this.$Width$ = $width$$165$$;
  this.$Height$ = $height$$148$$;
  if($options$$265$$) {
    var $props$$9$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($props$$9$$)
  }else {
    this.$applyStyleValues$()
  }
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$148$$ : $width$$165$$;
  this.$removeChildren$();
  this.$Options$.styleDefaults && (this.$_axisStyleDefaults$ = this.$Options$.styleDefaults.minorAxis, this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_itemStyleDefaults$ = this.$Options$.styleDefaults.item, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series, this.$_referenceObjectStyleDefaults$ = this.$Options$.styleDefaults.referenceObject, this.$_overviewStyleDefaults$ = this.$Options$.styleDefaults.overview);
  this.$_setLength$ = D.$JSCompiler_alias_TRUE$$;
  this.$_startPos$ = 0;
  this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
  if(this.$_viewStartTime$ && this.$_viewEndTime$) {
    var $viewTime$$inline_8645$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    if(0 < $viewTime$$inline_8645$$) {
      this.$_setLength$ = D.$JSCompiler_alias_FALSE$$;
      var $widthFactor$$inline_8646$$ = this.$_canvasLength$ / $viewTime$$inline_8645$$;
      (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $widthFactor$$inline_8646$$ * (this.$_end$ - this.$_start$));
      this.$_startPos$ = $widthFactor$$inline_8646$$ * (this.$_start$ - this.$_viewStartTime$);
      this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)
    }
  }
  if(this.$_scale$) {
    var $startDate$$inline_8649$$ = this.$_start$, $endDate$$inline_8650$$ = this.$_end$, $context$$inline_8651$$ = this.$getCtx$(), $axisLabelStyle$$inline_8652$$ = new D.$DvtCSSStyle$$("color:#333333;font-size:12px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
    this.$_axisStyleDefaults$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($axisLabelStyle$$inline_8652$$, this.$_axisStyleDefaults$.labelStyle);
    this.$_timeAxis$ = new D.$DvtTimeComponentAxis$$($context$$inline_8651$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_isVertical$, this.$_zoomOrder$);
    this.$_timeAxis$.$_converter$ = this.$_converter$;
    this.$_timeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$);
    this.$_dates$ = [];
    this.$_labels$ = [];
    this.$_zoomLevelLengths$ = [];
    if(this.$_isVertical$) {
      var $defaultLength$$inline_8653$$ = D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
      this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converterVert
    }else {
      $defaultLength$$inline_8653$$ = D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$, this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converter
    }
    for(var $i$$inline_8654$$ = 0;$i$$inline_8654$$ < this.$_timeAxis$.$_zoomOrder$.length;$i$$inline_8654$$++) {
      var $scale$$inline_8655$$ = this.$_timeAxis$.$_zoomOrder$[$i$$inline_8654$$];
      this.$_timeAxis$.$setScale$($scale$$inline_8655$$);
      var $axis$$inline_8656$$ = new D.$DvtRect$$($context$$inline_8651$$, 0, 0, 0, 0, "tempAxis"), $minLength$$inline_8657$$ = window.Infinity, $maxSize$$inline_8658$$ = 0, $dates$$inline_8659$$ = [], $labels$$inline_8660$$ = [], $currentDate$$inline_8661$$ = this.$_timeAxis$.$adjustDate$($startDate$$inline_8649$$).getTime();
      for($dates$$inline_8659$$.push($currentDate$$inline_8661$$);$currentDate$$inline_8661$$ < $endDate$$inline_8650$$;) {
        var $labelText$$inline_8662$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_timeAxis$, this.$_timeAxis$.$adjustDate$($currentDate$$inline_8661$$)), $label$$inline_8663$$ = new D.$DvtOutputText$$($context$$inline_8651$$, $labelText$$inline_8662$$, 0, 0, "s_label" + $currentDate$$inline_8661$$);
        $label$$inline_8663$$.$setCSSStyle$($axisLabelStyle$$inline_8652$$);
        $label$$inline_8663$$.time = $currentDate$$inline_8661$$;
        $labels$$inline_8660$$.push($label$$inline_8663$$);
        var $nextDate$$inline_8664$$ = this.$_timeAxis$.$getNextDate$(this.$_timeAxis$.$adjustDate$($currentDate$$inline_8661$$)).getTime();
        $axis$$inline_8656$$.$addChild$($label$$inline_8663$$);
        var $dim$$inline_8665$$ = $label$$inline_8663$$.$getDimensions$();
        $axis$$inline_8656$$.removeChild($label$$inline_8663$$);
        if(this.$_isVertical$) {
          var $lengthDim$$inline_8666$$ = $dim$$inline_8665$$.$h$, $sizeDim$$inline_8667$$ = $dim$$inline_8665$$.$w$
        }else {
          $lengthDim$$inline_8666$$ = $dim$$inline_8665$$.$w$, $sizeDim$$inline_8667$$ = $dim$$inline_8665$$.$h$
        }
        var $labelLength$$inline_8668$$ = window.Math.max($defaultLength$$inline_8653$$, $lengthDim$$inline_8666$$ + 2 * D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$), $lengthFactor$$inline_8669$$ = ($nextDate$$inline_8664$$ - $currentDate$$inline_8661$$) / $labelLength$$inline_8668$$;
        $lengthFactor$$inline_8669$$ < $minLength$$inline_8657$$ && ($minLength$$inline_8657$$ = $lengthFactor$$inline_8669$$);
        $sizeDim$$inline_8667$$ > $maxSize$$inline_8658$$ && ($maxSize$$inline_8658$$ = $sizeDim$$inline_8667$$);
        $currentDate$$inline_8661$$ = $nextDate$$inline_8664$$;
        $dates$$inline_8659$$.push($currentDate$$inline_8661$$)
      }
      (0,D.$JSCompiler_StaticMethods_setContentSize$$)(this.$_timeAxis$, $maxSize$$inline_8658$$ + 2 * D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$);
      this.$_dates$.push($dates$$inline_8659$$);
      this.$_labels$.push($labels$$inline_8660$$);
      var $zoomLevelLength$$inline_8670$$ = ($endDate$$inline_8650$$ - $startDate$$inline_8649$$) / $minLength$$inline_8657$$;
      this.$_zoomLevelLengths$.push($zoomLevelLength$$inline_8670$$);
      if($scale$$inline_8655$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $i$$inline_8654$$, this.$_setLength$)) {
        if((0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $zoomLevelLength$$inline_8670$$), this.$_setLength$ = D.$JSCompiler_alias_FALSE$$, this.$_viewStartTime$ == D.$JSCompiler_alias_NULL$$) {
          if(this.$_viewEndTime$ != D.$JSCompiler_alias_NULL$$) {
            this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $zoomLevelLength$$inline_8670$$ * ($endDate$$inline_8650$$ - $startDate$$inline_8649$$);
            this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$);
            var $viewTime$$inline_8671$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $widthFactor$$inline_8672$$ = this.$_canvasLength$ / $viewTime$$inline_8671$$;
            (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $widthFactor$$inline_8672$$ * (this.$_end$ - this.$_start$));
            this.$_startPos$ = $widthFactor$$inline_8672$$ * (this.$_start$ - this.$_viewStartTime$);
            this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)
          }else {
            this.$_viewStartTime$ = this.$_start$, this.$_startPos$ = 0, this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_viewEndTime$ = this.$_canvasLength$ / $zoomLevelLength$$inline_8670$$ * ($endDate$$inline_8650$$ - $startDate$$inline_8649$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)
          }
        }else {
          this.$_viewEndTime$ = this.$_canvasLength$ / $zoomLevelLength$$inline_8670$$ * ($endDate$$inline_8650$$ - $startDate$$inline_8649$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $viewTime$$inline_8671$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $widthFactor$$inline_8672$$ = this.$_canvasLength$ / $viewTime$$inline_8671$$, (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $widthFactor$$inline_8672$$ * (this.$_end$ - this.$_start$)), 
          this.$_startPos$ = $widthFactor$$inline_8672$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)
        }
      }
      0 == $i$$inline_8654$$ && (this.$_maxContentLength$ = $labels$$inline_8660$$.length * this.$_canvasLength$)
    }
    this.$_timeAxis$.$setScale$(this.$_scale$);
    this.$_series$ = [];
    this.$_seriesOptions$ = [];
    var $series$$inline_8675$$ = this.$Options$.series;
    if($series$$inline_8675$$) {
      for(var $seriesCount$$inline_8676$$ = window.Math.min($series$$inline_8675$$.length, 2), $i$$inline_8677$$ = 0;$i$$inline_8677$$ < $seriesCount$$inline_8676$$;$i$$inline_8677$$++) {
        var $seriesOptions$$inline_8678$$ = $series$$inline_8675$$[$i$$inline_8677$$];
        $seriesOptions$$inline_8678$$.start = this.$_start$;
        $seriesOptions$$inline_8678$$.end = this.$_end$;
        $seriesOptions$$inline_8678$$.inverted = this.$_defaultInversions$[$i$$inline_8677$$];
        $seriesOptions$$inline_8678$$.orientation = this.$Options$.orientation;
        $seriesOptions$$inline_8678$$.referenceObjects = this.$_referenceObjects$;
        $seriesOptions$$inline_8678$$.timeline = this;
        $seriesOptions$$inline_8678$$.index = $i$$inline_8677$$;
        this.$Options$.majorAxis && ($seriesOptions$$inline_8678$$.scale = this.$Options$.majorAxis.scale, $seriesOptions$$inline_8678$$.timeAxis = this.$_seriesTimeAxis$);
        this.$Options$.styleDefaults && ($seriesOptions$$inline_8678$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $seriesOptions$$inline_8678$$.itemStyleDefaults = this.$_itemStyleDefaults$, $seriesOptions$$inline_8678$$.referenceObjectStyleDefaults = this.$_referenceObjectStyleDefaults$, $seriesOptions$$inline_8678$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$);
        this.$_seriesOptions$.push($seriesOptions$$inline_8678$$);
        var $s$$inline_8679$$ = new D.$DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this);
        this.$_series$.push($s$$inline_8679$$)
      }
    }
    (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this)
  }
  this.$createBackground$();
  (0,D.$JSCompiler_StaticMethods_renderScrollableCanvas$$)(this);
  this.$_innerCanvas$ = new D.$DvtContainer$$(this.$getCtx$(), "iCanvas");
  var $cp$$inline_8682$$ = new D.$DvtClipPath$$;
  this.$_isVertical$ ? ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8682$$, this.$_startX$, this.$_startY$, this.$_canvasSize$, this.$_canvasLength$), this.$_innerCanvas$.$setTranslateX$(this.$_startX$), this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$)) : ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8682$$, this.$_startX$, this.$_startY$, this.$_canvasLength$, this.$_canvasSize$), this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.$_innerCanvas$.$setTranslateY$(this.$_startY$));
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_canvas$, $cp$$inline_8682$$);
  this.$_canvas$.$addChild$(this.$_innerCanvas$);
  var $hasValidStartAndEnd$$inline_8685$$ = this.$_start$ && this.$_end$ && this.$_end$ > this.$_start$, $hasValidSeries$$inline_8686$$ = this.$_series$ && 0 < this.$_series$.length, $hasValidSeriesScale$$inline_8687$$ = this.$_seriesScale$ ? -1 != D.$DvtTimeComponentAxis$$.$_VALID_SCALES$.indexOf(this.$_seriesScale$) : D.$JSCompiler_alias_TRUE$$, $hasValidViewport$$inline_8688$$ = this.$_viewStartTime$ && this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_viewStartTime$ : D.$JSCompiler_alias_TRUE$$, 
  $hasValidViewStart$$inline_8689$$ = this.$_viewStartTime$ ? this.$_viewStartTime$ >= this.$_start$ && this.$_viewStartTime$ < this.$_end$ : D.$JSCompiler_alias_TRUE$$, $hasValidViewEnd$$inline_8690$$ = this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_start$ && this.$_viewEndTime$ <= this.$_end$ : D.$JSCompiler_alias_TRUE$$;
  if(this.$_scale$ && -1 != D.$DvtTimeComponentAxis$$.$_VALID_SCALES$.indexOf(this.$_scale$) && $hasValidStartAndEnd$$inline_8685$$ && $hasValidSeries$$inline_8686$$ && $hasValidSeriesScale$$inline_8687$$ && $hasValidViewport$$inline_8688$$ && $hasValidViewStart$$inline_8689$$ && $hasValidViewEnd$$inline_8690$$) {
    if(this.$_series$) {
      var $seriesCount$$inline_8693$$ = this.$_series$.length, $axisSize$$inline_8694$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8693$$);
      !this.$_isVertical$ && (1 < $seriesCount$$inline_8693$$ && this.$_canvasSize$ % 2 != $axisSize$$inline_8694$$ % 2) && ((0,D.$JSCompiler_StaticMethods_setContentSize$$)(this.$_timeAxis$, this.$_timeAxis$.$_contentSize$ + 1), $axisSize$$inline_8694$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8693$$));
      this.$_seriesSize$ = (this.$_canvasSize$ - $axisSize$$inline_8694$$) / $seriesCount$$inline_8693$$;
      for(var $i$$inline_8695$$ = 0;$i$$inline_8695$$ < $seriesCount$$inline_8693$$;$i$$inline_8695$$++) {
        var $series$$inline_8696$$ = this.$_series$[$i$$inline_8695$$], $cp$$inline_8697$$ = new D.$DvtClipPath$$;
        if(this.$_isVertical$) {
          var $key$$inline_8698$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8695$$ - 1) : $i$$inline_8695$$;
          if(this.$isRTL$() && 1 == this.$_series$.length) {
            (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8697$$, $axisSize$$inline_8694$$, 0, this.$_seriesSize$, this.$_contentLength$);
            var $posMatrix$$inline_8699$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $axisSize$$inline_8694$$, 0)
          }else {
            (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8697$$, $key$$inline_8698$$ * (this.$_seriesSize$ + $axisSize$$inline_8694$$), 0, this.$_seriesSize$, this.$_contentLength$), $posMatrix$$inline_8699$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $key$$inline_8698$$ * (this.$_seriesSize$ + $axisSize$$inline_8694$$), 0)
          }
          var $width$$inline_8700$$ = this.$_seriesSize$, $height$$inline_8701$$ = this.$_contentLength$
        }else {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$inline_8697$$, 0, $i$$inline_8695$$ * (this.$_seriesSize$ + $axisSize$$inline_8694$$), this.$_contentLength$, this.$_seriesSize$), $posMatrix$$inline_8699$$ = new D.$DvtMatrix$$(1, 0, 0, 1, 0, $i$$inline_8695$$ * (this.$_seriesSize$ + $axisSize$$inline_8694$$)), $width$$inline_8700$$ = this.$_contentLength$, $height$$inline_8701$$ = this.$_seriesSize$
        }
        (0,D.$JSCompiler_StaticMethods_setClipPath$$)($series$$inline_8696$$, $cp$$inline_8697$$);
        $series$$inline_8696$$.$setMatrix$($posMatrix$$inline_8699$$);
        this.$_innerCanvas$.$addChild$($series$$inline_8696$$);
        $series$$inline_8696$$.$render$($width$$inline_8700$$, $height$$inline_8701$$, this.$_seriesOptions$[$i$$inline_8695$$])
      }
    }
    if(this.$_series$) {
      for(var $seriesCount$$inline_8704$$ = this.$_series$.length, $i$$inline_8705$$ = 0;$i$$inline_8705$$ < $seriesCount$$inline_8704$$;$i$$inline_8705$$++) {
        var $series$$inline_8706$$ = this.$_series$[$i$$inline_8705$$], $seriesLabel$$inline_8707$$ = $series$$inline_8706$$.$getLabel$();
        if($seriesLabel$$inline_8707$$ != D.$JSCompiler_alias_NULL$$) {
          var $seriesLabelStyle$$inline_8708$$ = $series$$inline_8706$$.$getLabelStyle$();
          this.$_seriesBackgroundOverlayStyle$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($seriesLabelStyle$$inline_8708$$, this.$_seriesBackgroundOverlayStyle$);
          var $seriesLabelElem$$inline_8709$$ = new D.$DvtOutputText$$(this.$getCtx$(), $seriesLabel$$inline_8707$$, 0, 0, "sl_s" + $i$$inline_8705$$);
          $seriesLabelElem$$inline_8709$$.$setCSSStyle$($seriesLabelStyle$$inline_8708$$);
          this.$addChild$($seriesLabelElem$$inline_8709$$);
          var $dim$$inline_8710$$ = $seriesLabelElem$$inline_8709$$.$getDimensions$();
          this.removeChild($seriesLabelElem$$inline_8709$$);
          var $width$$inline_8711$$ = window.Math.min($dim$$inline_8710$$.$w$, (this.$_isVertical$ ? this.$_seriesSize$ : this.$_canvasLength$) - -38 * ($i$$inline_8705$$ - 1) - 40), $backgroundRect$$inline_8712$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$inline_8711$$ + 4, $dim$$inline_8710$$.$h$ + 4, "slb_s" + $i$$inline_8705$$);
          $backgroundRect$$inline_8712$$.$setCSSStyle$($seriesLabelStyle$$inline_8708$$);
          (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backgroundRect$$inline_8712$$, 3);
          if(this.$_isVertical$) {
            $posX$$inline_8713$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8705$$ - 1) * (this.$_canvasSize$ - $width$$inline_8711$$ - 40) + 20 + this.$_startX$ + 38 * ($i$$inline_8705$$ - 1) : $i$$inline_8705$$ * (this.$_canvasSize$ - $width$$inline_8711$$ - 40) + 20 + this.$_startX$ + -38 * ($i$$inline_8705$$ - 1), $posY$$inline_8714$$ = this.$_startY$ + 20
          }else {
            var $posX$$inline_8713$$ = this.$isRTL$() ? this.$_canvasLength$ - $width$$inline_8711$$ - 20 - -38 * ($i$$inline_8705$$ - 1) : this.$_startX$ + 20 + -38 * ($i$$inline_8705$$ - 1), $posY$$inline_8714$$ = $i$$inline_8705$$ * (this.$_canvasSize$ - $dim$$inline_8710$$.$h$ - 40) + 20 + this.$_startY$
          }
          var $posMatrix$$inline_8715$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $posX$$inline_8713$$, $posY$$inline_8714$$);
          $seriesLabelElem$$inline_8709$$.$setMatrix$($posMatrix$$inline_8715$$);
          $posMatrix$$inline_8715$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $posX$$inline_8713$$ - 2, $posY$$inline_8714$$ - 2);
          $backgroundRect$$inline_8712$$.$setMatrix$($posMatrix$$inline_8715$$);
          this.$addChild$($backgroundRect$$inline_8712$$);
          D.$DvtTextUtils$$.$fitText$($seriesLabelElem$$inline_8709$$, $width$$inline_8711$$, window.Infinity, this)
        }
        if($series$$inline_8706$$.$_isEmpty$) {
          var $seriesEmptyText$$inline_8716$$ = $series$$inline_8706$$.$getEmptyText$();
          if($seriesEmptyText$$inline_8716$$ != D.$JSCompiler_alias_NULL$$) {
            var $seriesEmptyTextStyle$$inline_8717$$ = $series$$inline_8706$$.$_emptyTextStyle$, $seriesEmptyTextElem$$inline_8718$$ = new D.$DvtOutputText$$(this.$getCtx$(), $seriesEmptyText$$inline_8716$$, 0, 0, "et_s" + $i$$inline_8705$$);
            $seriesEmptyTextElem$$inline_8718$$.$setCSSStyle$($seriesEmptyTextStyle$$inline_8717$$);
            this.$addChild$($seriesEmptyTextElem$$inline_8718$$);
            $dim$$inline_8710$$ = $seriesEmptyTextElem$$inline_8718$$.$getDimensions$();
            this.removeChild($seriesEmptyTextElem$$inline_8718$$);
            $posMatrix$$inline_8715$$ = new D.$DvtMatrix$$(1, 0, 0, 1, (this.$_canvasLength$ - $dim$$inline_8710$$.$w$) / 2 + this.$_startX$, $i$$inline_8705$$ * (this.$_seriesSize$ + (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8704$$)) + (this.$_seriesSize$ - $dim$$inline_8710$$.$h$) / 2 + this.$_startY$);
            $seriesEmptyTextElem$$inline_8718$$.$setMatrix$($posMatrix$$inline_8715$$);
            this.$addChild$($seriesEmptyTextElem$$inline_8718$$)
          }
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_renderAxis$$)(this);
    if(this.$_hasOverview$) {
      this.$_overviewCanvas$ = new D.$DvtContainer$$(this.$getCtx$(), "oCanvas");
      var $borderWidth$$inline_8721$$ = this.$_style$.$getBorderWidth$(), $halfBorderWidth$$inline_8722$$ = $borderWidth$$inline_8721$$ / 2;
      if(this.$_isVertical$) {
        var $width$$inline_8723$$ = this.$_overviewSize$, $height$$inline_8724$$ = this.$Height$ - $borderWidth$$inline_8721$$;
        this.$isRTL$() || this.$_overviewCanvas$.$setTranslateX$(this.$Width$ - this.$_overviewSize$ - $halfBorderWidth$$inline_8722$$);
        this.$_overviewCanvas$.$setTranslateY$($halfBorderWidth$$inline_8722$$)
      }else {
        $width$$inline_8723$$ = this.$Width$ - $borderWidth$$inline_8721$$, $height$$inline_8724$$ = this.$_overviewSize$, this.$_overviewCanvas$.$setTranslateY$(this.$Height$ - this.$_overviewSize$ - $halfBorderWidth$$inline_8722$$), this.$_overviewCanvas$.$setTranslateX$($halfBorderWidth$$inline_8722$$)
      }
      this.$addChild$(this.$_overviewCanvas$);
      this.$_overview$ = new D.$DvtTimelineOverview$$(this.$getCtx$(), this.$HandleEvent$, this);
      this.$_overviewCanvas$.$addChild$(this.$_overview$);
      var $sizing$$inline_11556$$ = this.$_isVertical$ ? "" : '_ds\x3d"square" _dsx\x3d"1.3d" _dsy\x3d"0.9d" ', $windowBorderColor$$inline_11557$$ = this.$_overviewStyleDefaults$ && this.$_overviewStyleDefaults$.window && this.$_overviewStyleDefaults$.window.borderColor ? this.$_overviewStyleDefaults$.window.borderColor : "#4f4f4f", $JSCompiler_temp_const$$inline_11558$$ = '\x3ctimelineOverview renstart\x3d"' + this.$_viewStartTime$ + '" start\x3d"' + this.$_start$ + '" end\x3d"' + this.$_end$ + 
      '" width\x3d"' + this.$_contentLength$ + '" orn\x3d"' + (this.$_isVertical$ ? "vertical" : "horizontal") + (this.$_referenceObjects$ && 0 < this.$_referenceObjects$.length && this.$_referenceObjects$[0] ? '" ocd\x3d"' + this.$_referenceObjects$[0].getTime() : "") + '" _hbi\x3d"' + (this.$_isVertical$ ? this.$_resources$.overviewHandleVert + '" _hw\x3d"15" _hh\x3d"3"' : this.$_resources$.overviewHandleHor + '" _hw\x3d"3" _hh\x3d"15"') + ' ovp\x3d"below" selmode\x3d"' + this.$_selectionMode$ + 
      '" rtl\x3d"' + this.$isRTL$() + '" sid\x3d"ts1" _bts\x3d"none" _btc\x3d"#4f4f4f" _fc\x3d"#aadd77" ' + $sizing$$inline_11556$$ + '_do\x3d"0" _wbc\x3d"' + (this.$_overviewStyleDefaults$ && this.$_overviewStyleDefaults$.window && this.$_overviewStyleDefaults$.window.backgroundColor ? this.$_overviewStyleDefaults$.window.backgroundColor : "#ffffff") + '" _wbts\x3d"solid" _wbrs\x3d"solid" _wbbs\x3d"solid" _wbls\x3d"solid" _wbtc\x3d"' + $windowBorderColor$$inline_11557$$ + '" _wbrc\x3d"' + $windowBorderColor$$inline_11557$$ + 
      '" _wbbc\x3d"' + $windowBorderColor$$inline_11557$$ + '" _wblc\x3d"' + $windowBorderColor$$inline_11557$$ + '" _hfc\x3d"#FFFFFF" _obc\x3d"' + (this.$_overviewStyleDefaults$ && this.$_overviewStyleDefaults$.backgroundColor ? this.$_overviewStyleDefaults$.backgroundColor : "#e6ecf3") + '" _ctic\x3d"#FF591F" _tic\x3d"#BCC7D2" _tabc\x3d"#D9DFE3" _tabo\x3d"1" _bs\x3d"solid" _bc\x3d"#648BAF" _bw\x3d"1px" _bof\x3d"0px" _dbs\x3d"solid" _dbc\x3d"#648BAF" _dbw\x3d"1px" _hbs\x3d"solid" _hbc\x3d"#85bbe7" _hbw\x3d"2px" _hbof\x3d"0px" _hgc\x3d"#ebeced" _hgo\x3d"1" _hdbs\x3d"solid" _hdbc\x3d"#85bbe7" _hdbw\x3d"2px" _sbs\x3d"solid" _sbc\x3d"#000000" _sbw\x3d"2px" _sbof\x3d"0px" _sbo\x3d"1" _sdbs\x3d"solid" _sdbc\x3d"#000000" _sdbw\x3d"2px" _asbs\x3d"solid" _asbc\x3d"#000000" _asbw\x3d"2px" _asbof\x3d"0px" _asbo\x3d"1" _asgc\x3d"#e4f0fa" _asgo\x3d"1" _asdbs\x3d"solid" _asdbc\x3d"#000000" _asdbw\x3d"2px" _aoc\x3d"off"\x3e', 
      $xml$$inline_11559$$ = "\x3cticks\x3e";
      if(this.$_seriesTimeAxis$) {
        for(var $start$$inline_11560$$ = this.$_start$, $end$$inline_11561$$ = this.$_end$, $length$$inline_11562$$ = this.$_isVertical$ ? this.$Height$ : this.$Width$, $startDate$$inline_11563$$ = D.$DvtTimeUtils$$.$getPositionDate$($start$$inline_11560$$, $end$$inline_11561$$, this.$_fetchStartPos$, $length$$inline_11562$$), $adjustedStartDate$$inline_11564$$ = this.$_seriesTimeAxis$.$adjustDate$($startDate$$inline_11563$$), $current$$inline_11565$$ = new window.Date($adjustedStartDate$$inline_11564$$), 
        $currentPos$$inline_11566$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$inline_11560$$, $end$$inline_11561$$, $adjustedStartDate$$inline_11564$$, $length$$inline_11562$$);$currentPos$$inline_11566$$ < this.$_fetchEndPos$;) {
          var $label$$inline_11567$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_seriesTimeAxis$, this.$_seriesTimeAxis$.$adjustDate$($current$$inline_11565$$)), $next$$inline_11568$$ = this.$_seriesTimeAxis$.$getNextDate$(this.$_seriesTimeAxis$.$adjustDate$($current$$inline_11565$$)), $next_time_pos$$inline_11569$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$inline_11560$$, $end$$inline_11561$$, $next$$inline_11568$$, $length$$inline_11562$$), $xml$$inline_11559$$ = $xml$$inline_11559$$ + 
          ('\x3ctick time\x3d"' + $current$$inline_11565$$.getTime() + '" label\x3d"' + $label$$inline_11567$$ + '"/\x3e'), $current$$inline_11565$$ = $next$$inline_11568$$, $currentPos$$inline_11566$$ = $next_time_pos$$inline_11569$$
        }
      }
      var $xml$$inline_11559$$ = $xml$$inline_11559$$ + "\x3c/ticks\x3e", $JSCompiler_temp_const$$inline_11570$$ = $JSCompiler_temp_const$$inline_11558$$ + $xml$$inline_11559$$, $JSCompiler_inline_result$$inline_11571$$;
      if(this.$_series$) {
        for(var $overviewMarkers$$inline_11572$$ = "\x3cmarkers\x3e", $seriesCount$$inline_11573$$ = this.$_series$.length, $i$$inline_11574$$ = 0;$i$$inline_11574$$ < $seriesCount$$inline_11573$$;$i$$inline_11574$$++) {
          for(var $items$$inline_11575$$ = this.$_series$[$i$$inline_11574$$].$_items$, $j$$inline_11576$$ = 0;$j$$inline_11576$$ < $items$$inline_11575$$.length;$j$$inline_11576$$++) {
            var $item$$inline_11577$$ = $items$$inline_11575$$[$j$$inline_11576$$], $overviewMarkers$$inline_11572$$ = $overviewMarkers$$inline_11572$$ + ('\x3cti rk\x3d"' + $j$$inline_11576$$), $overviewMarkers$$inline_11572$$ = $overviewMarkers$$inline_11572$$ + ('" tid\x3d"' + $item$$inline_11577$$.getId()), $overviewMarkers$$inline_11572$$ = $overviewMarkers$$inline_11572$$ + ('" t\x3d"' + $item$$inline_11577$$.$_startTime$), $endTime$$inline_11578$$ = $item$$inline_11577$$.$_endTime$;
            if($endTime$$inline_11578$$) {
              var $overviewMarkers$$inline_11572$$ = $overviewMarkers$$inline_11572$$ + ('" et\x3d"' + $endTime$$inline_11578$$), $durationFillColor$$inline_11579$$ = $item$$inline_11577$$.$_durationFillColor$;
              $durationFillColor$$inline_11579$$ && ($overviewMarkers$$inline_11572$$ += '" dfc\x3d"' + $durationFillColor$$inline_11579$$)
            }
            $overviewMarkers$$inline_11572$$ += '" _sd\x3d"true"/\x3e'
          }
        }
        $JSCompiler_inline_result$$inline_11571$$ = $overviewMarkers$$inline_11572$$ += "\x3c/markers\x3e"
      }else {
        $JSCompiler_inline_result$$inline_11571$$ = D.$JSCompiler_alias_VOID$$
      }
      this.$_overview$.$render$($JSCompiler_temp_const$$inline_11570$$ + $JSCompiler_inline_result$$inline_11571$$ + "\x3c/timelineOverview\x3e", $width$$inline_8723$$, $height$$inline_8724$$)
    }
    if(this.$_keyboardHandler$) {
      for(var $i$$834$$ = 0;$i$$834$$ < this.$_series$.length;$i$$834$$++) {
        var $series$$19$$ = this.$_series$[$i$$834$$];
        if($series$$19$$.$_items$ && 0 < $series$$19$$.$_items$.length) {
          (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $series$$19$$.$_items$[0]);
          break
        }
      }
    }
    if(this.$_series$) {
      var $seriesCount$$inline_8728$$ = this.$_series$.length, $axisSize$$inline_8729$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, $seriesCount$$inline_8728$$);
      this.$_scrollHotspots$ = [];
      for(var $i$$inline_8730$$ = 0;$i$$inline_8730$$ < $seriesCount$$inline_8728$$;$i$$inline_8730$$++) {
        var $scrollHotspots$$inline_8731$$ = new D.$DvtContainer$$(this.$getCtx$(), "hotspots_s" + $i$$inline_8730$$);
        this.$addChild$($scrollHotspots$$inline_8731$$);
        if(this.$_isVertical$) {
          var $key$$inline_8732$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8730$$ - 1) : $i$$inline_8730$$, $forwardX$$inline_8734$$ = $backX$$inline_8733$$ = this.$_startX$ + $key$$inline_8732$$ * (this.$_seriesSize$ + $axisSize$$inline_8729$$) + (this.$_seriesSize$ - 28) / 2, $backY$$inline_8735$$ = this.$_startY$ + 3, $forwardY$$inline_8736$$ = this.$_startY$ + this.$_canvasLength$ - 28 - 3, $arrowForwardX$$inline_8738$$ = $arrowBackX$$inline_8737$$ = $backX$$inline_8733$$ + 7, $arrowBackY$$inline_8739$$ = 
          $backY$$inline_8735$$ + 7, $arrowForwardY$$inline_8740$$ = $forwardY$$inline_8736$$ + 7, $arrowBackResource$$inline_8741$$ = this.$_resources$.scrollUp, $arrowForwardResource$$inline_8742$$ = this.$_resources$.scrollDown
        }else {
          var $backX$$inline_8733$$ = this.$_startX$ + 3, $forwardX$$inline_8734$$ = this.$_startX$ + this.$_canvasLength$ - 28 - 3, $backY$$inline_8735$$ = this.$_startY$ + $i$$inline_8730$$ * (this.$_seriesSize$ + $axisSize$$inline_8729$$) + (this.$_seriesSize$ - 28) / 2, $forwardY$$inline_8736$$ = $backY$$inline_8735$$, $arrowBackX$$inline_8737$$ = $backX$$inline_8733$$ + 7, $arrowForwardX$$inline_8738$$ = $forwardX$$inline_8734$$ + 7, $arrowBackY$$inline_8739$$ = $backY$$inline_8735$$ + 7, $arrowForwardY$$inline_8740$$ = 
          $arrowBackY$$inline_8739$$, $arrowBackResource$$inline_8741$$ = this.$_resources$.scrollLeft, $arrowForwardResource$$inline_8742$$ = this.$_resources$.scrollRight
        }
        var $leftHotspot$$inline_8743$$ = new D.$DvtRect$$(this.$getCtx$(), $backX$$inline_8733$$, $backY$$inline_8735$$, 28, 28, "lhs");
        $leftHotspot$$inline_8743$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($leftHotspot$$inline_8743$$, 2);
        $leftHotspot$$inline_8743$$.$hotspot$ = "left";
        $leftHotspot$$inline_8743$$.$setAlpha$(0);
        $leftHotspot$$inline_8743$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $leftArrow$$inline_8744$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowBackResource$$inline_8741$$, $arrowBackX$$inline_8737$$, $arrowBackY$$inline_8739$$, 14, 14, "lhs_arr");
        $leftArrow$$inline_8744$$.$hotspot$ = "left";
        $leftHotspot$$inline_8743$$.$addChild$($leftArrow$$inline_8744$$);
        var $rightHotspot$$inline_8745$$ = new D.$DvtRect$$(this.$getCtx$(), $forwardX$$inline_8734$$, $forwardY$$inline_8736$$, 28, 28, "rhs");
        $rightHotspot$$inline_8745$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($rightHotspot$$inline_8745$$, 2);
        $rightHotspot$$inline_8745$$.$hotspot$ = "right";
        $rightHotspot$$inline_8745$$.$setAlpha$(0);
        $rightHotspot$$inline_8745$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $rightArrow$$inline_8746$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowForwardResource$$inline_8742$$, $arrowForwardX$$inline_8738$$, $arrowForwardY$$inline_8740$$, 14, 14, "rhs_arr");
        $rightArrow$$inline_8746$$.$hotspot$ = "right";
        $rightHotspot$$inline_8745$$.$addChild$($rightArrow$$inline_8746$$);
        $scrollHotspots$$inline_8731$$.$addChild$($leftHotspot$$inline_8743$$);
        this.$_scrollHotspots$.push($leftHotspot$$inline_8743$$);
        $scrollHotspots$$inline_8731$$.$addChild$($rightHotspot$$inline_8745$$);
        this.$_scrollHotspots$.push($rightHotspot$$inline_8745$$);
        if(this.$_isVertical$) {
          $key$$inline_8732$$ = this.$isRTL$() ? window.Math.abs($i$$inline_8730$$ - 1) : $i$$inline_8730$$, $topX$$inline_8747$$ = this.$_startX$ + $key$$inline_8732$$ * (this.$_seriesSize$ + $axisSize$$inline_8729$$) + 3, $bottomX$$inline_8748$$ = this.$_startX$ + ($key$$inline_8732$$ + 1) * this.$_seriesSize$ + $key$$inline_8732$$ * $axisSize$$inline_8729$$ - 28 - 3, $bottomY$$inline_8750$$ = $topY$$inline_8749$$ = this.$_startY$ + (this.$_canvasLength$ - 28) / 2, $arrowTopX$$inline_8751$$ = $topX$$inline_8747$$ + 
          7, $arrowBottomX$$inline_8752$$ = $bottomX$$inline_8748$$ + 7, $arrowBottomY$$inline_8754$$ = $arrowTopY$$inline_8753$$ = $topY$$inline_8749$$ + 7, $arrowTopResource$$inline_8755$$ = this.$_resources$.scrollLeft, $arrowBottomResource$$inline_8756$$ = this.$_resources$.scrollRight
        }else {
          var $topX$$inline_8747$$ = this.$_startX$ + (this.$_canvasLength$ - 28) / 2, $bottomX$$inline_8748$$ = $topX$$inline_8747$$, $topY$$inline_8749$$ = this.$_startY$ + $i$$inline_8730$$ * (this.$_seriesSize$ + $axisSize$$inline_8729$$) + 3, $bottomY$$inline_8750$$ = this.$_startY$ + ($i$$inline_8730$$ + 1) * this.$_seriesSize$ + $i$$inline_8730$$ * $axisSize$$inline_8729$$ - 28 - 3, $arrowTopX$$inline_8751$$ = $topX$$inline_8747$$ + 7, $arrowBottomX$$inline_8752$$ = $arrowTopX$$inline_8751$$, 
          $arrowTopY$$inline_8753$$ = $topY$$inline_8749$$ + 7, $arrowBottomY$$inline_8754$$ = $bottomY$$inline_8750$$ + 7, $arrowTopResource$$inline_8755$$ = this.$_resources$.scrollUp, $arrowBottomResource$$inline_8756$$ = this.$_resources$.scrollDown
        }
        var $topHotspot$$inline_8757$$ = new D.$DvtRect$$(this.$getCtx$(), $topX$$inline_8747$$, $topY$$inline_8749$$, 28, 28, "ths");
        $topHotspot$$inline_8757$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($topHotspot$$inline_8757$$, 2);
        $topHotspot$$inline_8757$$.$hotspot$ = "top";
        $topHotspot$$inline_8757$$.$setAlpha$(0);
        $topHotspot$$inline_8757$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $upArrow$$inline_8758$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowTopResource$$inline_8755$$, $arrowTopX$$inline_8751$$, $arrowTopY$$inline_8753$$, 14, 14, "ths_arr");
        $upArrow$$inline_8758$$.$hotspot$ = "top";
        $topHotspot$$inline_8757$$.$addChild$($upArrow$$inline_8758$$);
        var $bottomHotspot$$inline_8759$$ = new D.$DvtRect$$(this.$getCtx$(), $bottomX$$inline_8748$$, $bottomY$$inline_8750$$, 28, 28, "bhs");
        $bottomHotspot$$inline_8759$$.$setSolidFill$("#000000", 1);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($bottomHotspot$$inline_8759$$, 2);
        $bottomHotspot$$inline_8759$$.$hotspot$ = "bottom";
        $bottomHotspot$$inline_8759$$.$setAlpha$(0);
        $bottomHotspot$$inline_8759$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        var $downArrow$$inline_8760$$ = new D.$DvtImage$$(this.$getCtx$(), $arrowBottomResource$$inline_8756$$, $arrowBottomX$$inline_8752$$, $arrowBottomY$$inline_8754$$, 14, 14, "bhs_arr");
        $downArrow$$inline_8760$$.$hotspot$ = "bottom";
        $bottomHotspot$$inline_8759$$.$addChild$($downArrow$$inline_8760$$);
        $scrollHotspots$$inline_8731$$.$addChild$($topHotspot$$inline_8757$$);
        this.$_scrollHotspots$.push($topHotspot$$inline_8757$$);
        $scrollHotspots$$inline_8731$$.$addChild$($bottomHotspot$$inline_8759$$);
        this.$_scrollHotspots$.push($bottomHotspot$$inline_8759$$)
      }
    }
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() && (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this);
    var $context$$inline_8763$$ = this.$getCtx$(), $upState$$inline_8764$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomIn), $overState$$inline_8765$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomIn_h), $downState$$inline_8766$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomIn_a), $disabledState$$inline_8767$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, 
    this.$_resources$.zoomIn_d);
    this.$zoomin$ = new D.$DvtTransientButton$$(this.$getCtx$(), $upState$$inline_8764$$, $overState$$inline_8765$$, $downState$$inline_8766$$, $disabledState$$inline_8767$$, this.$EventManager$, this.$EventManager$.$HandleZoomInClick$);
    this.$zoomin$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_IN", D.$JSCompiler_alias_NULL$$));
    $upState$$inline_8764$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomOut);
    $overState$$inline_8765$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomOut_h);
    $downState$$inline_8766$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomOut_a);
    $disabledState$$inline_8767$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($context$$inline_8763$$, this.$_resources$.zoomOut_d);
    this.$zoomout$ = new D.$DvtTransientButton$$(this.$getCtx$(), $upState$$inline_8764$$, $overState$$inline_8765$$, $downState$$inline_8766$$, $disabledState$$inline_8767$$, this.$EventManager$, this.$EventManager$.$HandleZoomOutClick$);
    this.$zoomout$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_OUT", D.$JSCompiler_alias_NULL$$));
    this.$zoomin$.$hide$();
    this.$zoomout$.$hide$();
    D.$DvtTimeUtils$$.$supportsTouch$() && (D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomin$.$getElem$(), "role", "button"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomin$.$getElem$(), "aria-label", (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_IN", D.$JSCompiler_alias_NULL$$)), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomout$.$getElem$(), "role", "button"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$zoomout$.$getElem$(), "aria-label", (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
    "ZOOM_OUT", D.$JSCompiler_alias_NULL$$)));
    this.$EventManager$.$associate$(this.$zoomin$, this.$zoomin$);
    this.$EventManager$.$associate$(this.$zoomout$, this.$zoomout$);
    this.$isRTL$() ? (this.$zoomin$.$setTranslateX$(this.$_backgroundWidth$ - 44), this.$zoomout$.$setTranslateX$(this.$_backgroundWidth$ - 44)) : (this.$zoomin$.$setTranslateX$(this.$_startX$ + 11), this.$zoomout$.$setTranslateX$(this.$_startX$ + 11));
    this.$zoomin$.$setTranslateY$(this.$_startY$ + 11);
    this.$zoomout$.$setTranslateY$(this.$_startY$ + 48);
    this.$_canvas$.$addChild$(this.$zoomin$);
    this.$_canvas$.$addChild$(this.$zoomout$);
    var $contentLength$$inline_8768$$ = this.$_contentLength$;
    $contentLength$$inline_8768$$ >= this.$_maxContentLength$ && (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)(this, D.$JSCompiler_alias_TRUE$$);
    this.$_canvasLength$ >= $contentLength$$inline_8768$$ && (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)(this, D.$JSCompiler_alias_FALSE$$);
    this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_applyInitialSelections$$)(this);
    D.$DvtTimeUtils$$.$supportsTouch$() && (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)(this, "flowto", this.$_series$[0].getId())
  }else {
    this.$renderEmptyText$()
  }
  this.$UpdateAriaAttributes$();
  (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this])
};
D.$DvtTimeline$$.prototype.render = D.$DvtTimeline$$.prototype.$render$;
D.$DvtTimeline$$.prototype.$renderEmptyText$ = function $$DvtTimeline$$$$$renderEmptyText$$() {
  var $emptyTextStr$$3$$ = this.$Options$.series ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "INVALID_DATA", D.$JSCompiler_alias_NULL$$) : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$);
  D.$DvtTextUtils$$.$renderEmptyText$(this.$_canvas$, $emptyTextStr$$3$$, new D.$DvtRectangle$$(0, 0, this.$_backgroundWidth$, this.$_backgroundHeight$), this.$EventManager$, new D.$DvtCSSStyle$$("color:#333333;white-space:nowrap;font-size:12px;font-weight:normal;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;"))
};
D.$DvtTimeline$$.prototype.$GetComponentDescription$ = function $$DvtTimeline$$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "TIMELINE")
};
D.$JSCompiler_StaticMethods_showThenHideHotspots$$ = function $$JSCompiler_StaticMethods_showThenHideHotspots$$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$20$$) {
  for(var $animator$$131$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), 0.3, 0, D.$DvtEasing$linear$$), $i$$836$$ = 0;$i$$836$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$836$$++) {
    var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$836$$], $id$$293$$ = $hotspot$$.getId(), $show$$2$$ = D.$JSCompiler_alias_TRUE$$;
    if($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$293$$ || "rhs" == $id$$293$$)) {
      $show$$2$$ = D.$JSCompiler_alias_FALSE$$
    }
    var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
    if($pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), $series$$20$$ != D.$JSCompiler_alias_NULL$$ && $series$$20$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$293$$ || "bhs" == $id$$293$$))) {
      $show$$2$$ = D.$JSCompiler_alias_FALSE$$
    }
    $show$$2$$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$131$$, "typeNumber", $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, 0.6)
  }
  (0,D.$DvtPlayable$appendOnEnd$$)($animator$$131$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
  $animator$$131$$.play()
};
D.$DvtTimeline$$.prototype.$hideHotspots$ = function $$DvtTimeline$$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if(0 != $hotSpotsLength$$) {
    for(var $animator$$132$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3, 0, D.$DvtEasing$linear$$), $i$$837$$ = 0;$i$$837$$ < $hotSpotsLength$$;$i$$837$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$837$$];
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0)
    }
    $animator$$132$$.play()
  }
};
D.$DvtTimeline$$.prototype.$applyStyleValues$ = function $$DvtTimeline$$$$$applyStyleValues$$() {
  this.$_style$ = new D.$DvtCSSStyle$$("border:1px #d9dfe3;background-color:#f9f9f9;");
  if(this.$Options$.styleDefaults) {
    var $borderWidth$$17_overviewStyle_splits$$2_style$$112$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$17_overviewStyle_splits$$2_style$$112$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "border-color:" + $borderWidth$$17_overviewStyle_splits$$2_style$$112$$ + ";")
  }
  if(this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? 60 : 100, $borderWidth$$17_overviewStyle_splits$$2_style$$112$$ = this.$Options$.overview.style)) {
    for(var $borderWidth$$17_overviewStyle_splits$$2_style$$112$$ = $borderWidth$$17_overviewStyle_splits$$2_style$$112$$.split(";"), $doubleBorderWidth_i$$838$$ = 0;$doubleBorderWidth_i$$838$$ < $borderWidth$$17_overviewStyle_splits$$2_style$$112$$.length;$doubleBorderWidth_i$$838$$++) {
      var $s$$161$$ = $borderWidth$$17_overviewStyle_splits$$2_style$$112$$[$doubleBorderWidth_i$$838$$];
      if($s$$161$$ && 0 < $s$$161$$.length) {
        var $colonIndex$$3$$ = $s$$161$$.indexOf(":");
        if(-1 < $colonIndex$$3$$) {
          var $attrName$$4$$ = D.$DvtStringUtils$$.trim($s$$161$$.substring(0, $colonIndex$$3$$));
          if(this.$_isVertical$ && "width" == $attrName$$4$$ || !this.$_isVertical$ && "height" == $attrName$$4$$) {
            this.$_overviewSize$ = (0,window.parseInt)(D.$DvtStringUtils$$.trim($s$$161$$.substring($colonIndex$$3$$ + 1)), 10);
            break
          }
        }
      }
    }
  }
  D.$DvtTimeline$$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$17_overviewStyle_splits$$2_style$$112$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$838$$ = 2 * $borderWidth$$17_overviewStyle_splits$$2_style$$112$$;
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "border:" + $doubleBorderWidth_i$$838$$ + "px;");
  this.$_startY$ = this.$_startX$ = $borderWidth$$17_overviewStyle_splits$$2_style$$112$$;
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$838$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$838$$, this.$isRTL$() && (this.$_startX$ += this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$838$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$838$$, this.$_canvasSize$ = this.$_hasOverview$ ? this.$Height$ - 
  this.$_overviewSize$ - $doubleBorderWidth_i$$838$$ : this.$Height$ - $doubleBorderWidth_i$$838$$)
};
D.$JSCompiler_StaticMethods_applyAxisStyleValues$$ = function $$JSCompiler_StaticMethods_applyAxisStyleValues$$$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$ = new D.$DvtCSSStyle$$("background-color:#f9f9f9;border:1px #d9dfe3;");
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$) {
    var $axisStyles_r$$89$$ = "", $g$$29_style$$113$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.backgroundColor;
    $g$$29_style$$113$$ && ($axisStyles_r$$89$$ = $axisStyles_r$$89$$ + "background-color:" + $g$$29_style$$113$$ + ";");
    ($g$$29_style$$113$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderColor) && ($axisStyles_r$$89$$ = $axisStyles_r$$89$$ + "border-color:" + $g$$29_style$$113$$ + ";");
    ($g$$29_style$$113$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderWidth) && ($axisStyles_r$$89$$ = $axisStyles_r$$89$$ + "border-width:" + $g$$29_style$$113$$ + ";");
    (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, $axisStyles_r$$89$$)
  }
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisInlineStyle$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$getBorderWidth$();
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, "border:" + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ + "px;");
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_timeAxis$.$setBorderWidth$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisLength$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_contentLength$ + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ - D.$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$;
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor) {
    var $b$$65_bgColor$$15$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor, $axisStyles_r$$89$$ = D.$DvtColorUtils$$.$getRed$($b$$65_bgColor$$15$$), $g$$29_style$$113$$ = D.$DvtColorUtils$$.$getGreen$($b$$65_bgColor$$15$$), $b$$65_bgColor$$15$$ = D.$DvtColorUtils$$.$getBlue$($b$$65_bgColor$$15$$);
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesBackgroundOverlayStyle$ = "background-color:rgba(" + $axisStyles_r$$89$$ + "," + $g$$29_style$$113$$ + "," + $b$$65_bgColor$$15$$ + ",0.8);"
  }
};
D.$DvtTimeline$$.prototype.$createBackground$ = function $$DvtTimeline$$$$$createBackground$$() {
  this.$_background$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, this.$_backgroundWidth$, this.$_backgroundHeight$, "bg");
  this.$_background$.$setCSSStyle$(this.$_style$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_background$);
  var $cp$$9$$ = new D.$DvtClipPath$$;
  (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$9$$, 0, 0, this.$_backgroundWidth$, this.$_backgroundHeight$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_background$, $cp$$9$$);
  this.$addChild$(this.$_background$)
};
D.$JSCompiler_StaticMethods_renderAxis$$ = function $$JSCompiler_StaticMethods_renderAxis$$$($JSCompiler_StaticMethods_renderAxis$self$$) {
  var $axisStart_seriesCount$$28$$ = $JSCompiler_StaticMethods_renderAxis$self$$.$_series$.length, $axisSize$$2$$ = $JSCompiler_StaticMethods_renderAxis$self$$.$_timeAxis$.$getSize$(), $axisVisibleSize_cp$$11$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($JSCompiler_StaticMethods_renderAxis$self$$, $axisStart_seriesCount$$28$$), $axisStart_seriesCount$$28$$ = 1 == $axisStart_seriesCount$$28$$ ? $JSCompiler_StaticMethods_renderAxis$self$$.$_canvasSize$ - $axisVisibleSize_cp$$11$$ : 
  $JSCompiler_StaticMethods_renderAxis$self$$.$_canvasSize$ / $axisStart_seriesCount$$28$$ - $axisVisibleSize_cp$$11$$ / 2;
  $JSCompiler_StaticMethods_renderAxis$self$$.$isRTL$() && ($JSCompiler_StaticMethods_renderAxis$self$$.$_isVertical$ && 1 == $JSCompiler_StaticMethods_renderAxis$self$$.$_series$.length) && ($axisStart_seriesCount$$28$$ = 0);
  $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$ == D.$JSCompiler_alias_NULL$$ ? ($axisVisibleSize_cp$$11$$ = new D.$DvtClipPath$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_isVertical$ ? ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$ = new D.$DvtRect$$($JSCompiler_StaticMethods_renderAxis$self$$.$getCtx$(), $axisStart_seriesCount$$28$$, -$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$, $axisSize$$2$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$, "axis"), 
  (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, $axisStart_seriesCount$$28$$, 0, $axisSize$$2$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$)) : ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$ = new D.$DvtRect$$($JSCompiler_StaticMethods_renderAxis$self$$.$getCtx$(), -$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$, $axisStart_seriesCount$$28$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$, $axisSize$$2$$, "axis"), (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, 
  0, $axisStart_seriesCount$$28$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$, $axisSize$$2$$)), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setCSSStyle$($JSCompiler_StaticMethods_renderAxis$self$$.$_axisStyle$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$, $axisVisibleSize_cp$$11$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_innerCanvas$.$addChild$($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$)) : 
  ($axisVisibleSize_cp$$11$$ = new D.$DvtClipPath$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_isVertical$ ? ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setX$($axisStart_seriesCount$$28$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setY$(-$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setWidth$($axisSize$$2$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setHeight$($JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$), 
  (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, $axisStart_seriesCount$$28$$, 0, $axisSize$$2$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$)) : ($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setX$(-$JSCompiler_StaticMethods_renderAxis$self$$.$_axisBorderWidth$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setY$($axisStart_seriesCount$$28$$), $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setWidth$($JSCompiler_StaticMethods_renderAxis$self$$.$_axisLength$), 
  $JSCompiler_StaticMethods_renderAxis$self$$.$_axis$.$setHeight$($axisSize$$2$$), (0,D.$JSCompiler_StaticMethods_addRect$$)($axisVisibleSize_cp$$11$$, 0, $axisStart_seriesCount$$28$$, $JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$, $axisSize$$2$$)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_renderAxis$self$$.$_axis$, $axisVisibleSize_cp$$11$$));
  $JSCompiler_StaticMethods_renderAxis$self$$.$createSeriesTicks$($JSCompiler_StaticMethods_renderAxis$self$$.$_contentLength$, $axisStart_seriesCount$$28$$)
};
D.$DvtTimeline$$.prototype.$createSeriesTicks$ = function $$DvtTimeline$$$$$createSeriesTicks$$($length$$26$$, $axisStartPos$$) {
  this.$_axis$.$removeChildren$();
  var $separatorStroke_separatorStyle$$ = new D.$DvtCSSStyle$$("color:#bcc7d2;"), $seriesAxisLabelStyle$$ = new D.$DvtCSSStyle$$("background-color:rgba(249,249,249,0.8);color:#4f4f4f;white-space:nowrap;font-size:14px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
  if(this.$_axisStyleDefaults$) {
    var $axisStart$$1_separatorColor$$ = this.$_axisStyleDefaults$.separatorColor;
    $axisStart$$1_separatorColor$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($separatorStroke_separatorStyle$$, "color:" + $axisStart$$1_separatorColor$$ + ";");
    this.$_seriesBackgroundOverlayStyle$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($seriesAxisLabelStyle$$, this.$_seriesBackgroundOverlayStyle$);
    this.$_majorAxisStyleDefaults$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($seriesAxisLabelStyle$$, this.$_majorAxisStyleDefaults$.labelStyle)
  }
  var $separatorStroke_separatorStyle$$ = new D.$DvtSolidStroke$$($separatorStroke_separatorStyle$$.$getStyle$("color")), $axisStart$$1_separatorColor$$ = $axisStartPos$$ + this.$_timeAxis$.$_borderWidth$, $dates$$inline_8793_startPos$$inline_8784$$ = this.$_fetchStartPos$, $endPos$$inline_8785_labels$$inline_8794$$ = this.$_fetchEndPos$, $container$$inline_8786_i$$inline_8795$$ = this.$_axis$, $axisEnd$$inline_8788$$ = $axisStart$$1_separatorColor$$ + this.$_timeAxis$.$_contentSize$, $block$$inline_8792$$ = 
  new D.$DvtContainer$$(this.$getCtx$(), "block_" + $dates$$inline_8793_startPos$$inline_8784$$ + "_" + $endPos$$inline_8785_labels$$inline_8794$$);
  $block$$inline_8792$$.$startPos$ = $dates$$inline_8793_startPos$$inline_8784$$;
  $block$$inline_8792$$.$endPos$ = $endPos$$inline_8785_labels$$inline_8794$$;
  $container$$inline_8786_i$$inline_8795$$.$addChild$($block$$inline_8792$$);
  $dates$$inline_8793_startPos$$inline_8784$$ = this.$_dates$[this.$_zoomLevelOrder$];
  $endPos$$inline_8785_labels$$inline_8794$$ = this.$_labels$[this.$_zoomLevelOrder$];
  for($container$$inline_8786_i$$inline_8795$$ = 0;$container$$inline_8786_i$$inline_8795$$ < $dates$$inline_8793_startPos$$inline_8784$$.length - 1;$container$$inline_8786_i$$inline_8795$$++) {
    var $date$$inline_8796$$ = $dates$$inline_8793_startPos$$inline_8784$$[$container$$inline_8786_i$$inline_8795$$], $next$$inline_8797_nextPos$$inline_8799$$ = $dates$$inline_8793_startPos$$inline_8784$$[$container$$inline_8786_i$$inline_8795$$ + 1], $currentPos$$inline_8798$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$inline_8796$$, $length$$26$$), $next$$inline_8797_nextPos$$inline_8799$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $next$$inline_8797_nextPos$$inline_8799$$, 
    $length$$26$$), $maxLength$$inline_8800$$ = $next$$inline_8797_nextPos$$inline_8799$$ - $currentPos$$inline_8798$$;
    0 != $currentPos$$inline_8798$$ && ((this.$_isVertical$ ? this.$addTick$($block$$inline_8792$$, $axisEnd$$inline_8788$$, $axisStart$$1_separatorColor$$, $currentPos$$inline_8798$$, $currentPos$$inline_8798$$, $separatorStroke_separatorStyle$$, "s_tick" + $date$$inline_8796$$) : this.$isRTL$() ? this.$addTick$($block$$inline_8792$$, $length$$26$$ - $currentPos$$inline_8798$$, $length$$26$$ - $currentPos$$inline_8798$$, $axisEnd$$inline_8788$$, $axisStart$$1_separatorColor$$, $separatorStroke_separatorStyle$$, 
    "s_tick" + $date$$inline_8796$$) : this.$addTick$($block$$inline_8792$$, $currentPos$$inline_8798$$, $currentPos$$inline_8798$$, $axisEnd$$inline_8788$$, $axisStart$$1_separatorColor$$, $separatorStroke_separatorStyle$$, "s_tick" + $date$$inline_8796$$)).time = $date$$inline_8796$$);
    this.$_isVertical$ ? (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block$$inline_8792$$, $endPos$$inline_8785_labels$$inline_8794$$[$container$$inline_8786_i$$inline_8795$$], $axisStart$$1_separatorColor$$ + ($axisEnd$$inline_8788$$ - $axisStart$$1_separatorColor$$) / 2, $currentPos$$inline_8798$$ + ($next$$inline_8797_nextPos$$inline_8799$$ - $currentPos$$inline_8798$$) / 2 - 7, $axisEnd$$inline_8788$$ - $axisStart$$1_separatorColor$$) : this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block$$inline_8792$$, 
    $endPos$$inline_8785_labels$$inline_8794$$[$container$$inline_8786_i$$inline_8795$$], $length$$26$$ - ($currentPos$$inline_8798$$ + ($next$$inline_8797_nextPos$$inline_8799$$ - $currentPos$$inline_8798$$) / 2), $axisStart$$1_separatorColor$$ + 2, $maxLength$$inline_8800$$) : (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block$$inline_8792$$, $endPos$$inline_8785_labels$$inline_8794$$[$container$$inline_8786_i$$inline_8795$$], $currentPos$$inline_8798$$ + ($next$$inline_8797_nextPos$$inline_8799$$ - 
    $currentPos$$inline_8798$$) / 2, $axisStart$$1_separatorColor$$ + 2, $maxLength$$inline_8800$$)
  }
  this.$_seriesScale$ && this.$renderSeriesTimeAxis$(this.$_fetchStartPos$, this.$_fetchEndPos$, this.$_innerCanvas$, "o_", $length$$26$$, $seriesAxisLabelStyle$$)
};
D.$DvtTimeline$$.prototype.$renderSeriesTimeAxis$ = function $$DvtTimeline$$$$$renderSeriesTimeAxis$$($current$$8_startDate$$1_startPos$$4$$, $endPos$$6$$, $container$$192$$, $prefix$$6$$, $length$$28$$, $labelStyle$$20$$) {
  if(this.$_majorAxisLabels$) {
    for(var $i$$842_start$$46$$ = 0;$i$$842_start$$46$$ < this.$_majorAxisLabels$.length;$i$$842_start$$46$$++) {
      $container$$192$$.removeChild(this.$_majorAxisLabels$[$i$$842_start$$46$$])
    }
  }
  this.$_majorAxisLabels$ = [];
  var $i$$842_start$$46$$ = this.$_start$, $end$$30$$ = this.$_end$;
  $current$$8_startDate$$1_startPos$$4$$ = D.$DvtTimeUtils$$.$getPositionDate$($i$$842_start$$46$$, $end$$30$$, $current$$8_startDate$$1_startPos$$4$$, $length$$28$$);
  var $adjustedStartDate_currentPos$$1$$ = this.$_seriesTimeAxis$.$adjustDate$($current$$8_startDate$$1_startPos$$4$$);
  $current$$8_startDate$$1_startPos$$4$$ = new window.Date($adjustedStartDate_currentPos$$1$$);
  for($adjustedStartDate_currentPos$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($i$$842_start$$46$$, $end$$30$$, $adjustedStartDate_currentPos$$1$$, $length$$28$$);$adjustedStartDate_currentPos$$1$$ < $endPos$$6$$;) {
    var $label$$103$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_seriesTimeAxis$, this.$_seriesTimeAxis$.$adjustDate$($current$$8_startDate$$1_startPos$$4$$)), $next$$19$$ = this.$_seriesTimeAxis$.$getNextDate$(this.$_seriesTimeAxis$.$adjustDate$($current$$8_startDate$$1_startPos$$4$$)), $next_time_pos$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($i$$842_start$$46$$, $end$$30$$, $next$$19$$, $length$$28$$), $maxLength$$3$$ = $next_time_pos$$1$$ - $adjustedStartDate_currentPos$$1$$, $time_pos$$2$$ = 
    $adjustedStartDate_currentPos$$1$$;
    (this.$isRTL$() ? this.$_isVertical$ ? this.$addLabel$($container$$192$$, this.$_canvasSize$ - 5, $label$$103$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $labelStyle$$20$$, $prefix$$6$$ + "label" + $adjustedStartDate_currentPos$$1$$ + "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$()) : this.$addLabel$($container$$192$$, $length$$28$$ - ($time_pos$$2$$ + 5), $label$$103$$, $maxLength$$3$$, this.$_seriesSize$ - 2, $labelStyle$$20$$, $prefix$$6$$ + "label" + $adjustedStartDate_currentPos$$1$$ + 
    "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$()) : this.$_isVertical$ ? this.$addLabel$($container$$192$$, 5, $label$$103$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $labelStyle$$20$$, $prefix$$6$$ + "label" + $adjustedStartDate_currentPos$$1$$ + "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$()) : this.$addLabel$($container$$192$$, $time_pos$$2$$ + 5, $label$$103$$, $maxLength$$3$$, this.$_seriesSize$ - 2, $labelStyle$$20$$, $prefix$$6$$ + 
    "label" + $adjustedStartDate_currentPos$$1$$ + "_s0", D.$JSCompiler_alias_TRUE$$, 1, this.$_majorAxisLabels$, this.$isRTL$())).time = $current$$8_startDate$$1_startPos$$4$$.getTime();
    $current$$8_startDate$$1_startPos$$4$$ = $next$$19$$;
    $adjustedStartDate_currentPos$$1$$ = $next_time_pos$$1$$
  }
};
D.$DvtTimeline$$.prototype.$HandleTouchStart$ = function $$DvtTimeline$$$$$HandleTouchStart$$($event$$774$$) {
  if(1 == $event$$774$$.touches.length) {
    if(this.$_dragPanSeries$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)(this, $event$$774$$.target)) {
      var $series$$24$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this, $series$$24$$)
  }
};
D.$JSCompiler_StaticMethods_handleZoomWheel$$ = function $$JSCompiler_StaticMethods_handleZoomWheel$$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$, $compLoc$$1_s$$inline_8826_s$$inline_8829$$, $triggerViewportChangeEvent$$) {
  $newLength_viewTime$$2$$ > $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$, (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods_enableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$ > $newLength_viewTime$$2$$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$, (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_FALSE$$)) : (0,D.$JSCompiler_StaticMethods_enableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, D.$JSCompiler_alias_FALSE$$);
  var $zoomIn$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ <= $newLength_viewTime$$2$$, $viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$) / ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) * $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$;
  (0,D.$JSCompiler_StaticMethods_setContentLength$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$);
  $newLength_viewTime$$2$$ = $viewLength_widthFactor$$4$$ / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$);
  $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$ ? ($viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$ - 
  $compLoc$$1_s$$inline_8826_s$$inline_8829$$ * $viewLength_widthFactor$$4$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ > 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$)), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 1 / $viewLength_widthFactor$$4$$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$)) : ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + 
  $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 0);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$isRTL$() && !$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Height$ : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Width$);
  if($zoomIn$$) {
    for(;0 < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ - 1], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ >= $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$--;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_8826_s$$inline_8829$$ = 1;$compLoc$$1_s$$inline_8826_s$$inline_8829$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_zoomOrder$.length;$compLoc$$1_s$$inline_8826_s$$inline_8829$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8826_s$$inline_8829$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8826_s$$inline_8829$$ - 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }else {
    for(;$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$.length - 1;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$++;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_8826_s$$inline_8829$$ = 0;$compLoc$$1_s$$inline_8826_s$$inline_8829$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_zoomOrder$.length - 1;$compLoc$$1_s$$inline_8826_s$$inline_8829$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8826_s$$inline_8829$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8825_JSCompiler_StaticMethods_increaseScale$self$$inline_8828_minLength$$1_time$$18$$.$_zoomOrder$[$compLoc$$1_s$$inline_8826_s$$inline_8829$$ + 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  (0,D.$JSCompiler_StaticMethods_renderAxis$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  (0,D.$JSCompiler_StaticMethods_updateSeries$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startY$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$) : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startX$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $triggerViewportChangeEvent$$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$))
};
D.$DvtTimeline$$.prototype.$zoomBy$ = function $$DvtTimeline$$$$$zoomBy$$($dz$$13$$) {
  var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
  (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)(this, this.$_contentLength$ * ((1 / $dz$$13$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_updateSeries$$ = function $$JSCompiler_StaticMethods_updateSeries$$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$32$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$5$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$32$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$5$$) / $seriesCount$$32$$;
    for(var $i$$846$$ = 0;$i$$846$$ < $seriesCount$$32$$;$i$$846$$++) {
      var $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$846$$];
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$, D.$JSCompiler_alias_NULL$$);
      var $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ = new D.$DvtClipPath$$;
      if($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? window.Math.abs($i$$846$$ - 1) : $i$$846$$;
        if($JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length) {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$, $axisSize$$5$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$);
          var $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $axisSize$$5$$, 0)
        }else {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$), 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = 
          new D.$DvtMatrix$$(1, 0, 0, 1, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$), 0)
        }
        var $endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$
      }else {
        (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$, 0, $i$$846$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, 0, $i$$846$$ * 
        ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$5$$)), $endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$, $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$setMatrix$($block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$);
      $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ = $endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_canvas$.$setTranslateY$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_canvas$.$setTranslateX$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$Width$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$Height$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_fetchStartPos$ = 0;
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_isVertical$ ? ($JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$, $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_maxOverflowValue$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$, $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_length$ = 
      $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$, $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_size$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$) : ($JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_fetchEndPos$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$, $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_maxOverflowValue$ = 
      $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$, $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_length$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$, $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_size$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_background$.$setWidth$($cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$.$_background$.$setHeight$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$);
      $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$ = $JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$;
      if(!($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$ == D.$JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$.length)) {
        $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$isRTL$();
        $endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_fetchEndPos$;
        $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_blocks$[0];
        $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$.$startPos$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_fetchStartPos$;
        $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$.$endPos$ = $endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$;
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$prepareDurations$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$);
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_initialSpacing$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isVertical$ ? 20 * (0 < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_maxDurationSize$ ? 1 : 0) + 15 + 10 * $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_maxDurationSize$ : 
        35 + 10 * $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_maxDurationSize$;
        for($endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ = 0;$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$.length;$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$++) {
          var $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$[$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$], $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_startTime$, $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = 
          D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_start$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_end$, $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$), 
          $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_endTime$;
          $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ && $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ != $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ && ($feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_start$, 
          $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_end$, $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$) - $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$, $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ += 
          window.Math.min(10, $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ / 2));
          $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_loc$ = $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$;
          $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_spacing$ = D.$JSCompiler_alias_NULL$$
        }
        for($endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ = 0;$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$.length;$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$++) {
          if($duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$[$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$], $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_startTime$, !($block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ < 
          $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_start$ || $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ > $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_end$)) {
            $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_loc$;
            $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$, $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$.length);
            $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_spacing$ = $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$;
            var $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_displayable$, $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.getWidth(), $itemHeight$$inline_11596_transY$$inline_11598$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.getHeight();
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isVertical$ ? ($itemHeight$$inline_11596_transY$$inline_11598$$ = $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ - $itemHeight$$inline_11596_transY$$inline_11598$$ / 2, $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ && 
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ || !$cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ && !$JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ ? $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_size$ - ($endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ + 
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_initialSpacing$) : $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_initialSpacing$) : ($endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ ? $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$ - 
            $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ - $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ + 20 : $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ - 20, $itemHeight$$inline_11596_transY$$inline_11598$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ ? 
            $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ : $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$Height$ - $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ - $itemHeight$$inline_11596_transY$$inline_11598$$);
            (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$, $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$, $itemHeight$$inline_11596_transY$$inline_11598$$);
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isVertical$ || ($duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$ = $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$_feeler$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ ? $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ = 
            0 : ($bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$Height$, $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$Height$ - $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$), 
            $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ ? $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$ - $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ : $block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$, 
            $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setTranslateY$(0), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setX1$($block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setY1$($bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setX2$($block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$), 
            $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setY2$($feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$))
          }
        }
        $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$isRTL$();
        for($endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_maxDurationSize$;0 < $endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$;$endPos$$inline_11584_i$$inline_11604_j$$inline_11586_width$$169$$--) {
          for($block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ = 0;$block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$ < $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$.length;$block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$++) {
            $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ = $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_items$[$block$$inline_11585_feelerX$$inline_11602_itemTime$$inline_11592_j$$inline_11605_loc$$inline_11589_posMatrix$$2$$], $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$ = $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$.$_durationBar$, 
            $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isVertical$ ? $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setTranslateY$(0) : $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setTranslateX$(0), $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ = 
            D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_start$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_end$, $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$.$_startTime$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$), 
            $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ = 22 + 10 * $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$.$_durationLevel$, $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_start$, 
            $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_end$, $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$.$_endTime$, $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$), $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isVertical$ ? (!$cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ && 
            !$JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ || $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ && $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ ? $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setX$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_size$ - 
            $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ + 5) : $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setX$(-5), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setY$($feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setWidth$($bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$), 
            $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setHeight$($endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ - $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$)) : ($endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$ -= $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$, 
            $cp$$13_isRTL$$inline_11583_isRTL$$inline_11603_width$$inline_8832$$ ? $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setX$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_length$ - $feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$ - $endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$) : 
            $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setX$($feelerHeight$$inline_11601_loc$$inline_11608_spacing$$inline_11593_span$$inline_11591_startTime$$inline_11588$$), $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ ? $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setY$(-5) : $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setY$($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_size$ - 
            $bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$ + 5), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setWidth$($endLoc$$inline_11610_itemWidth$$inline_11595_node$$inline_11606_transX$$inline_11597_width$$inline_11611$$), $duration$$inline_11607_feeler$$inline_11599_item$$inline_11587$$.$setHeight$($bubble$$inline_11594_durationSize$$inline_11609_endTime$$inline_11590_feelerY$$inline_11600$$)))
          }
        }
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isVertical$ || (0,D.$JSCompiler_StaticMethods_adjustFeelers$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$);
        $JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$.$_isInverted$ || ((0,D.$JSCompiler_StaticMethods_adjustDurations$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$), (0,D.$JSCompiler_StaticMethods_adjustItems$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$));
        (0,D.$JSCompiler_StaticMethods_adjustBackground$$)($JSCompiler_StaticMethods_adjustItemsForZoom$self$$inline_11582_height$$151_height$$inline_8833_key$$127$$)
      }
      (0,D.$JSCompiler_StaticMethods_updateReferenceObjects$$)($JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$);
      (0,D.$JSCompiler_StaticMethods_updateSeriesTicks$$)($JSCompiler_StaticMethods_reRender$self$$inline_8831_series$$25$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeline$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$776$$) {
  (39 == $event$$776$$.keyCode || 37 == $event$$776$$.keyCode || 40 == $event$$776$$.keyCode || 38 == $event$$776$$.keyCode) && (0,D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$)(this, this.$EventManager$.$getFocus$())
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$777$$) {
  this.$_dragPanSeries$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)(this, $event$$777$$.target)
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$778$$) {
  "none" != this.$_selectionMode$ && (0,D.$JSCompiler_StaticMethods_handleShapeClick$$)(this, $event$$778$$)
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_endPan$$)(this)
};
D.$JSCompiler_StaticMethods_endPan$$ = function $$JSCompiler_StaticMethods_endPan$$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPan$self$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_scale$)))
};
D.$DvtTimeline$$.prototype.$contDragPan$ = function $$DvtTimeline$$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if(this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$24$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$27$$ = this.$_currentY$ - $compY$$3$$;
    if(0 == $deltaX$$24$$ && 0 == $deltaY$$27$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
    this.$_triggerViewportChange$ = D.$JSCompiler_alias_TRUE$$;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$24$$, $deltaY$$27$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtTimeline$$.prototype.$panBy$ = function $$DvtTimeline$$$$$panBy$$($deltaX$$25$$, $deltaY$$28$$) {
  var $axisSize$$6_maxTranslateY$$1$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, this.$_series$.length);
  if(this.$_isVertical$) {
    var $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$;
    if(this.$_dragPanSeries$) {
      var $newTranslateX$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$25$$;
      1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$) ? ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$6_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$6_maxTranslateY$$1$$) : this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? 
      ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$6_maxTranslateY$$1$$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = $axisSize$$6_maxTranslateY$$1$$) : ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = 0, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      $newTranslateX$$ < $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ && ($newTranslateX$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX$$)
    }
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_innerCanvas$.$getTranslateY$() - $deltaY$$28$$;
    $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$);
    $axisSize$$6_maxTranslateY$$1$$ = this.$_startY$;
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ ? $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ : $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ > $axisSize$$6_maxTranslateY$$1$$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$6_maxTranslateY$$1$$);
    this.$_innerCanvas$.$setTranslateY$($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$);
    this.$_startPos$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ - this.$_startY$;
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$;
    this.$_hasOverview$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }else {
    $newTranslateX$$ = this.$_innerCanvas$.$getTranslateX$() - $deltaX$$25$$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_startX$, $newTranslateX$$ < $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ && 
    ($newTranslateX$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$), this.$_innerCanvas$.$setTranslateX$($newTranslateX$$), this.$_startPos$ = $newTranslateX$$ - this.$_startX$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$, 
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$, this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_hasOverview$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, 
    this.$_viewEndTime$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$)), this.$_dragPanSeries$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$28$$, this.$_dragPanSeries$.$_isInverted$ ? ($maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = $axisSize$$6_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$6_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Height$ + 
    $axisSize$$6_maxTranslateY$$1$$) : ($maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = 0, $axisSize$$6_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ ? $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ : $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ > 
    $axisSize$$6_maxTranslateY$$1$$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$6_maxTranslateY$$1$$), this.$_dragPanSeries$.$setTranslateY$($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }
};
D.$DvtTimeline$$.prototype.$HandleEvent$ = function $$DvtTimeline$$$$$HandleEvent$$($event$$780_i$$847_isMultiSelect$$inline_8836$$) {
  var $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getType$();
  if("selection" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ || "dvtAct" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
    D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$780_i$$847_isMultiSelect$$inline_8836$$)
  }else {
    if("overview" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
      $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getSubType$();
      if("rangeChanging" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ || "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
        var $item$$48_oldViewTime$$1_zoomLevelOrder$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getParamValue$("newStartTime");
        this.$_viewEndTime$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getParamValue$("newEndTime");
        var $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if(0 < $isMultiSelect$$2_minLength$$2_viewTime$$4$$) {
          var $s$$163_viewSize$$inline_8840_widthFactor$$7$$ = this.$_canvasLength$ / $isMultiSelect$$2_minLength$$2_viewTime$$4$$;
          (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $s$$163_viewSize$$inline_8840_widthFactor$$7$$ * (this.$_end$ - this.$_start$));
          this.$_startPos$ = $s$$163_viewSize$$inline_8840_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$);
          this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
          if($item$$48_oldViewTime$$1_zoomLevelOrder$$ > $isMultiSelect$$2_minLength$$2_viewTime$$4$$) {
            $item$$48_oldViewTime$$1_zoomLevelOrder$$ = this.$_zoomLevelLengths$.length;
            for($isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$48_oldViewTime$$1_zoomLevelOrder$$ - 1];this.$_contentLength$ >= $isMultiSelect$$2_minLength$$2_viewTime$$4$$ && 0 < $item$$48_oldViewTime$$1_zoomLevelOrder$$;) {
              $item$$48_oldViewTime$$1_zoomLevelOrder$$--, $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$48_oldViewTime$$1_zoomLevelOrder$$ - 1]
            }
            $item$$48_oldViewTime$$1_zoomLevelOrder$$ == this.$_zoomLevelLengths$.length && $item$$48_oldViewTime$$1_zoomLevelOrder$$--
          }else {
            $item$$48_oldViewTime$$1_zoomLevelOrder$$ = 0;
            for($isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$48_oldViewTime$$1_zoomLevelOrder$$];this.$_contentLength$ < $isMultiSelect$$2_minLength$$2_viewTime$$4$$ && $item$$48_oldViewTime$$1_zoomLevelOrder$$ < this.$_zoomLevelLengths$.length - 1;) {
              $item$$48_oldViewTime$$1_zoomLevelOrder$$++, $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$48_oldViewTime$$1_zoomLevelOrder$$]
            }
          }
          this.$_zoomLevelOrder$ = $item$$48_oldViewTime$$1_zoomLevelOrder$$;
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$item$$48_oldViewTime$$1_zoomLevelOrder$$]);
          this.$_scale$ = this.$_timeAxis$.$_scale$;
          (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this);
          (0,D.$JSCompiler_StaticMethods_renderAxis$$)(this);
          (0,D.$JSCompiler_StaticMethods_updateSeries$$)(this);
          this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$)
        }
        "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ && this.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
      if("scrollPos" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ || "scrollTime" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
        this.$_viewStartTime$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getParamValue$("newStartTime"), this.$_viewEndTime$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getParamValue$("newEndTime"), $s$$163_viewSize$$inline_8840_widthFactor$$7$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), this.$_startPos$ = $s$$163_viewSize$$inline_8840_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - 
        this.$_contentLength$ - this.$_startPos$), this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
    }else {
      if($itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getSubType$(), "selection" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
        $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getItemId$();
        $event$$780_i$$847_isMultiSelect$$inline_8836$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getParamValue$("multiSelect");
        $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = ($event$$780_i$$847_isMultiSelect$$inline_8836$$ != D.$JSCompiler_alias_NULL$$ ? $event$$780_i$$847_isMultiSelect$$inline_8836$$ : D.$JSCompiler_alias_FALSE$$) && "multiple" == this.$_selectionMode$;
        for($event$$780_i$$847_isMultiSelect$$inline_8836$$ = 0;$event$$780_i$$847_isMultiSelect$$inline_8836$$ < this.$_series$.length;$event$$780_i$$847_isMultiSelect$$inline_8836$$++) {
          for(var $s$$163_viewSize$$inline_8840_widthFactor$$7$$ = this.$_series$[$event$$780_i$$847_isMultiSelect$$inline_8836$$], $j$$119$$ = 0;$j$$119$$ < $s$$163_viewSize$$inline_8840_widthFactor$$7$$.$_items$.length;$j$$119$$++) {
            if($item$$48_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8840_widthFactor$$7$$.$_items$[$j$$119$$], $item$$48_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
              (0,D.$JSCompiler_StaticMethods__addToSelection$$)(this.$SelectionHandler$, $item$$48_oldViewTime$$1_zoomLevelOrder$$, $isMultiSelect$$2_minLength$$2_viewTime$$4$$);
              (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $item$$48_oldViewTime$$1_zoomLevelOrder$$);
              $s$$163_viewSize$$inline_8840_widthFactor$$7$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$48_oldViewTime$$1_zoomLevelOrder$$.$_startTime$ - $s$$163_viewSize$$inline_8840_widthFactor$$7$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $s$$163_viewSize$$inline_8840_widthFactor$$7$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $s$$163_viewSize$$inline_8840_widthFactor$$7$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $s$$163_viewSize$$inline_8840_widthFactor$$7$$;
              this.$_startPos$ = this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$);
              this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
              this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
              this.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
              break
            }
          }
        }
      }else {
        if("highlight" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
          $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getItemId$();
          for($event$$780_i$$847_isMultiSelect$$inline_8836$$ = 0;$event$$780_i$$847_isMultiSelect$$inline_8836$$ < this.$_series$.length;$event$$780_i$$847_isMultiSelect$$inline_8836$$++) {
            $s$$163_viewSize$$inline_8840_widthFactor$$7$$ = this.$_series$[$event$$780_i$$847_isMultiSelect$$inline_8836$$];
            for($j$$119$$ = 0;$j$$119$$ < $s$$163_viewSize$$inline_8840_widthFactor$$7$$.$_items$.length;$j$$119$$++) {
              if($item$$48_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8840_widthFactor$$7$$.$_items$[$j$$119$$], $item$$48_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
                $item$$48_oldViewTime$$1_zoomLevelOrder$$.$showHoverEffect$(D.$JSCompiler_alias_TRUE$$);
                break
              }
            }
          }
        }else {
          if("unhighlight" == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
            $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$ = $event$$780_i$$847_isMultiSelect$$inline_8836$$.$getItemId$();
            for($event$$780_i$$847_isMultiSelect$$inline_8836$$ = 0;$event$$780_i$$847_isMultiSelect$$inline_8836$$ < this.$_series$.length;$event$$780_i$$847_isMultiSelect$$inline_8836$$++) {
              $s$$163_viewSize$$inline_8840_widthFactor$$7$$ = this.$_series$[$event$$780_i$$847_isMultiSelect$$inline_8836$$];
              for($j$$119$$ = 0;$j$$119$$ < $s$$163_viewSize$$inline_8840_widthFactor$$7$$.$_items$.length;$j$$119$$++) {
                if($item$$48_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8840_widthFactor$$7$$.$_items$[$j$$119$$], $item$$48_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$254$$) {
                  $item$$48_oldViewTime$$1_zoomLevelOrder$$.$hideHoverEffect$(D.$JSCompiler_alias_TRUE$$);
                  break
                }
              }
            }
          }
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_enableZoomButton$$ = function $$JSCompiler_StaticMethods_enableZoomButton$$$($JSCompiler_StaticMethods_enableZoomButton$self$$, $isZoomIn$$) {
  $isZoomIn$$ ? ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$setEnabled$(D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_drawUpState$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$)) : ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$setEnabled$(D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_drawUpState$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$))
};
D.$JSCompiler_StaticMethods_disableZoomButton$$ = function $$JSCompiler_StaticMethods_disableZoomButton$$$($JSCompiler_StaticMethods_disableZoomButton$self$$, $isZoomIn$$1$$) {
  $isZoomIn$$1$$ ? ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$setEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.setCursor(D.$JSCompiler_alias_NULL$$)) : ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$setEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$), 
  $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.setCursor(D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$ = function $$JSCompiler_StaticMethods_updateScrollForItemNavigation$$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$50$$) {
  var $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$50$$.getHeight() : $item$$50$$.getWidth(), $itemStart_widthFactor$$9$$ = $item$$50$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$5$$ / 2 + 2 : 22);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$9$$ -= 2, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  var $itemEnd_itemSize_viewTime$$5$$ = $itemStart_widthFactor$$9$$ + $itemEnd_itemSize_viewTime$$5$$ + 4, $endPos$$7$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$9$$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemStart_widthFactor$$9$$ : -$itemEnd_itemSize_viewTime$$5$$ < $endPos$$7$$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemEnd_itemSize_viewTime$$5$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$9$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ / $itemStart_widthFactor$$9$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * 
  $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$5$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$5$$, 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startY$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$) : $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startX$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$__dispatchEvent$(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_scale$))
};
D.$JSCompiler_StaticMethods_handleShapeClick$$ = function $$JSCompiler_StaticMethods_handleShapeClick$$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$781$$) {
  if($event$$781$$) {
    var $drawable$$6_event$$inline_8845_item$$inline_8843$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$781$$.target);
    if($drawable$$6_event$$inline_8845_item$$inline_8843$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8842_series$$26$$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_8845_item$$inline_8843$$);
      if($drawable$$6_event$$inline_8845_item$$inline_8843$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8842_series$$26$$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_8845_item$$inline_8843$$), $drawable$$6_event$$inline_8845_item$$inline_8843$$ = $drawable$$6_event$$inline_8845_item$$inline_8843$$.$_node$, $action$$inline_8844$$ = $drawable$$6_event$$inline_8845_item$$inline_8843$$.$getAction$();
        $action$$inline_8844$$ && ($drawable$$6_event$$inline_8845_item$$inline_8843$$ = new D.$DvtTimelineSeriesActionEvent$$($action$$inline_8844$$, $drawable$$6_event$$inline_8845_item$$inline_8843$$.getId()), D.$DvtEventDispatcher$$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_8842_series$$26$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8842_series$$26$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8842_series$$26$$, 
        $drawable$$6_event$$inline_8845_item$$inline_8843$$))
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applyInitialSelections$$ = function $$JSCompiler_StaticMethods_applyInitialSelections$$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for(var $items$$38$$ = [], $i$$848$$ = 0;$i$$848$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$848$$++) {
      for(var $s$$164$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$848$$], $j$$120$$ = 0;$j$$120$$ < $s$$164$$.$_items$.length;$j$$120$$++) {
        $items$$38$$.push($s$$164$$.$_items$[$j$$120$$])
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$, $JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$38$$)
};
D.$DvtTimeline$$.prototype.$processEvent$ = function $$DvtTimeline$$$$$processEvent$$($event$$782$$) {
  $event$$782$$ && this.$__dispatchEvent$($event$$782$$)
};
D.$JSCompiler_StaticMethods__findSeries$$ = function $$JSCompiler_StaticMethods__findSeries$$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$125$$) {
  if($target$$125$$ && $target$$125$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$294$$ = $target$$125$$.getId();
    return $target$$125$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$125$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$125$$ : $id$$294$$ && "_s0" == $id$$294$$.substring($id$$294$$.length - 3, $id$$294$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$294$$ && "_s1" == $id$$294$$.substring($id$$294$$.length - 3, $id$$294$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods__findSeries$self$$, $target$$125$$.getParent())
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimeline$$.prototype.$_findDrawable$ = function $$DvtTimeline$$$$$_findDrawable$$($grandParent_target$$126$$) {
  if($grandParent_target$$126$$) {
    var $id$$295$$ = $grandParent_target$$126$$.getId();
    if($id$$295$$ && "_duration_" == $id$$295$$.substring(0, 10) && $grandParent_target$$126$$.$_node$) {
      return $grandParent_target$$126$$
    }
    var $parent$$87$$ = $grandParent_target$$126$$.getParent();
    if($parent$$87$$) {
      if($id$$295$$ && "zoom" == $id$$295$$.substring(0, 4)) {
        return $grandParent_target$$126$$
      }
      if($id$$295$$ && "_bubble_" == $id$$295$$.substring(0, 8) && $parent$$87$$.$_node$) {
        return $parent$$87$$
      }
      if($grandParent_target$$126$$ = $parent$$87$$.getParent()) {
        if($id$$295$$ && "_bubble_" == $id$$295$$.substring(0, 8) && $grandParent_target$$126$$.$_node$) {
          return $grandParent_target$$126$$
        }
        if(($id$$295$$ = $grandParent_target$$126$$.getId()) && "_bubble_" == $id$$295$$.substring(0, 8) && $grandParent_target$$126$$.getParent()) {
          return $grandParent_target$$126$$.getParent()
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimeline$$.prototype.$getAutomation$ = function $$DvtTimeline$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTimelineAutomation$$(this));
  return this.$Automation$
};
D.$DvtTimeline$$.prototype.getAutomation = D.$DvtTimeline$$.prototype.$getAutomation$;
D.$DvtTimeline$$.prototype.$isVertical$ = (0,D.$JSCompiler_get$$)("$_isVertical$");
D.$DvtTimeline$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtTimelineAutomation$$ = (0,D.$JSCompiler_set$$)("$_timeline$");
(0,D.$goog$exportPath_$$)("DvtTimelineAutomation", D.$DvtTimelineAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineAutomation$$, D.$DvtAutomation$$, "DvtTimelineAutomation");
D.$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$100_logicalObj$$19$$) {
  if(($displayable$$100_logicalObj$$19$$ = this.$_timeline$.$EventManager$.$GetLogicalObject$($displayable$$100_logicalObj$$19$$)) && $displayable$$100_logicalObj$$19$$ instanceof D.$DvtTimelineSeriesNode$$) {
    for(var $i$$849$$ = 0;$i$$849$$ < this.$_timeline$.$_series$.length;$i$$849$$++) {
      var $itemIndex$$11$$ = this.$_timeline$.$_series$[$i$$849$$].$_items$.indexOf($displayable$$100_logicalObj$$19$$);
      if(-1 != $itemIndex$$11$$) {
        return"timelineItem[" + $i$$849$$ + "][" + $itemIndex$$11$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$28_subId$$25$$) {
  if($series$$28_subId$$25$$) {
    var $parenIndex$$ = $series$$28_subId$$25$$.indexOf("[");
    if(0 < $parenIndex$$ && "timelineItem" === $series$$28_subId$$25$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$28_subId$$25$$.indexOf("]");
      if(0 < $endParenIndex$$) {
        var $itemIndex$$12_node$$300$$ = (0,window.parseInt)($series$$28_subId$$25$$.substring($endParenIndex$$ + 2, $series$$28_subId$$25$$.length - 1));
        if($series$$28_subId$$25$$ = this.$_timeline$.$_series$[(0,window.parseInt)($series$$28_subId$$25$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if($itemIndex$$12_node$$300$$ = $series$$28_subId$$25$$.$_items$[$itemIndex$$12_node$$300$$]) {
            return $itemIndex$$12_node$$300$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineAutomation$$.prototype.getDomElementForSubId = D.$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTimelineParser$$ = function $$DvtTimelineParser$$$($timeline$$3$$) {
  this.Init($timeline$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineParser$$, D.$DvtTimeComponentParser$$, "DvtTimelineParser");
D.$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$266_overview$$7$$) {
  this.$_itemSelection$ = $options$$266_overview$$7$$.selectionMode;
  $options$$266_overview$$7$$.viewportStart && (this.$_viewStartTime$ = new window.Date($options$$266_overview$$7$$.viewportStart));
  $options$$266_overview$$7$$.viewportEnd && (this.$_viewEndTime$ = new window.Date($options$$266_overview$$7$$.viewportEnd));
  var $ret$$103$$ = D.$DvtTimelineParser$$.$superclass$.parse.call(this, $options$$266_overview$$7$$), $majorAxis_minorAxis_referenceObjects$$3$$ = $options$$266_overview$$7$$.minorAxis;
  if($majorAxis_minorAxis_referenceObjects$$3$$) {
    var $referenceObjectsValueArray_scale$$75$$ = $majorAxis_minorAxis_referenceObjects$$3$$.scale;
    $ret$$103$$.scale = $referenceObjectsValueArray_scale$$75$$;
    var $i$$868_zoomOrder$$3$$ = $majorAxis_minorAxis_referenceObjects$$3$$.zoomOrder;
    $i$$868_zoomOrder$$3$$ == D.$JSCompiler_alias_NULL$$ ? $i$$868_zoomOrder$$3$$ = [$referenceObjectsValueArray_scale$$75$$] : $i$$868_zoomOrder$$3$$.reverse();
    $ret$$103$$.$zoomOrder$ = $i$$868_zoomOrder$$3$$;
    $ret$$103$$.$converter$ = $majorAxis_minorAxis_referenceObjects$$3$$.converter;
    $ret$$103$$.$axisStyle$ = $majorAxis_minorAxis_referenceObjects$$3$$.style
  }
  if($majorAxis_minorAxis_referenceObjects$$3$$ = $options$$266_overview$$7$$.majorAxis) {
    $ret$$103$$.$seriesScale$ = $majorAxis_minorAxis_referenceObjects$$3$$.scale, $ret$$103$$.$seriesConverter$ = $majorAxis_minorAxis_referenceObjects$$3$$.converter
  }
  $ret$$103$$.$shortDesc$ = $options$$266_overview$$7$$.shortDesc;
  $ret$$103$$.id = $options$$266_overview$$7$$.id;
  $ret$$103$$.orientation = $options$$266_overview$$7$$.orientation;
  if(($majorAxis_minorAxis_referenceObjects$$3$$ = $options$$266_overview$$7$$.referenceObjects) && 0 < $majorAxis_minorAxis_referenceObjects$$3$$.length) {
    $referenceObjectsValueArray_scale$$75$$ = [];
    for($i$$868_zoomOrder$$3$$ = 0;$i$$868_zoomOrder$$3$$ < $majorAxis_minorAxis_referenceObjects$$3$$.length;$i$$868_zoomOrder$$3$$++) {
      $referenceObjectsValueArray_scale$$75$$.push(new window.Date($majorAxis_minorAxis_referenceObjects$$3$$[$i$$868_zoomOrder$$3$$].value))
    }
    $ret$$103$$.$referenceObjects$ = $referenceObjectsValueArray_scale$$75$$
  }
  $options$$266_overview$$7$$ = $options$$266_overview$$7$$.overview;
  $ret$$103$$.$hasOverview$ = $options$$266_overview$$7$$ != D.$JSCompiler_alias_NULL$$ && "on" == $options$$266_overview$$7$$.rendered ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  return $ret$$103$$
};
D.$DvtTimelineParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineParser$$$$$ParseRootAttributes$$() {
  var $ret$$104$$ = D.$DvtTimelineParser$$.$superclass$.$ParseRootAttributes$.call(this);
  $ret$$104$$.start = this.$_startTime$.getTime();
  $ret$$104$$.end = this.$_endTime$.getTime();
  this.$_viewStartTime$ && ($ret$$104$$.$viewStart$ = this.$_viewStartTime$.getTime());
  this.$_viewEndTime$ && ($ret$$104$$.$viewEnd$ = this.$_viewEndTime$.getTime());
  $ret$$104$$.$selectionMode$ = "none";
  this.$_itemSelection$ != D.$JSCompiler_alias_NULL$$ && ($ret$$104$$.$selectionMode$ = this.$_itemSelection$);
  return $ret$$104$$
};
D.$DvtTimelineSeries$$ = function $$DvtTimelineSeries$$$($context$$615$$, $callback$$178$$, $callbackObj$$124$$) {
  this.Init($context$$615$$, $callback$$178$$, $callbackObj$$124$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeries$$, D.$DvtTimeComponent$$, "DvtTimelineSeries");
D.$DvtTimelineSeries$DEFAULT_COLORS_ARRAY$$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeries$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$616$$, $callback$$179$$, $callbackObj$$125$$) {
  D.$DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$616$$, $callback$$179$$, $callbackObj$$125$$);
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
  this.$_itemListeners$ = []
};
D.$JSCompiler_prototypeAlias$$.$startAnimations$ = function $$JSCompiler_prototypeAlias$$$$startAnimations$$() {
  this.$_animatorQueue$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_animatorQueue$.length ? (this.$_animatorQueue$.shift().play(), this.$_animationTimer$ == D.$JSCompiler_alias_NULL$$ && (this.$_animationTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 2500 / this.$_animatorQueue$.length / 2, this.$startAnimations$, this), this.$_animationTimer$.start())) : this.$_animationTimer$ != D.$JSCompiler_alias_NULL$$ && this.$_animationTimer$.stop()
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($desc$$28_width$$177$$, $height$$157_maxRefObjects$$inline_8958$$, $i$$inline_8959_options$$267_orientation$$5$$) {
  this.$_canvas$ = D.$JSCompiler_alias_NULL$$;
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$removeChildren$();
  D.$DvtTimelineSeries$$.$superclass$.$render$.call(this, $desc$$28_width$$177$$, $height$$157_maxRefObjects$$inline_8958$$, $i$$inline_8959_options$$267_orientation$$5$$);
  this.$_isVertical$ = ($i$$inline_8959_options$$267_orientation$$5$$ = this.$Options$.orientation) && "vertical" == $i$$inline_8959_options$$267_orientation$$5$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$157_maxRefObjects$$inline_8958$$, this.$_maxOverflowValue$ = $desc$$28_width$$177$$, this.$_length$ = $height$$157_maxRefObjects$$inline_8958$$, this.$_size$ = $desc$$28_width$$177$$) : (this.$_fetchEndPos$ = $desc$$28_width$$177$$, this.$_maxOverflowValue$ = $height$$157_maxRefObjects$$inline_8958$$, this.$_length$ = $desc$$28_width$$177$$, this.$_size$ = $height$$157_maxRefObjects$$inline_8958$$);
  this.$_isInverted$ = this.$Options$.inverted;
  this.$_maxDurationSize$ = this.$_colorCount$ = 0;
  this.$createBackground$($desc$$28_width$$177$$, $height$$157_maxRefObjects$$inline_8958$$);
  (0,D.$JSCompiler_StaticMethods_renderScrollableCanvas$$)(this);
  if(this.$_referenceObjects$) {
    $height$$157_maxRefObjects$$inline_8958$$ = window.Math.min(1, this.$_referenceObjects$.length);
    for($i$$inline_8959_options$$267_orientation$$5$$ = 0;$i$$inline_8959_options$$267_orientation$$5$$ < $height$$157_maxRefObjects$$inline_8958$$;$i$$inline_8959_options$$267_orientation$$5$$++) {
      var $refObject$$inline_8960$$ = this.$_referenceObjects$[$i$$inline_8959_options$$267_orientation$$5$$];
      if($refObject$$inline_8960$$) {
        var $pos$$inline_8961_ref$$inline_8962$$ = this.$isRTL$() ? this.$_length$ - D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $refObject$$inline_8960$$, this.$_length$) : D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $refObject$$inline_8960$$, this.$_length$), $pos$$inline_8961_ref$$inline_8962$$ = this.$_isVertical$ ? new D.$DvtLine$$(this.$getCtx$(), 0, $pos$$inline_8961_ref$$inline_8962$$, this.$_maxOverflowValue$, $pos$$inline_8961_ref$$inline_8962$$, 
        "zoomOrder[i]") : new D.$DvtLine$$(this.$getCtx$(), $pos$$inline_8961_ref$$inline_8962$$, 0, $pos$$inline_8961_ref$$inline_8962$$, this.$_maxOverflowValue$, "zoomOrder[i]"), $referenceObjectStroke$$inline_8963$$ = new D.$DvtSolidStroke$$(this.$_referenceObjectStyle$.$getStyle$("color"));
        $pos$$inline_8961_ref$$inline_8962$$.$setStroke$($referenceObjectStroke$$inline_8963$$);
        (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($pos$$inline_8961_ref$$inline_8962$$);
        $pos$$inline_8961_ref$$inline_8962$$.$date$ = $refObject$$inline_8960$$;
        this.$_canvas$.$addChild$($pos$$inline_8961_ref$$inline_8962$$);
        this.$_renderedReferenceObjects$[$i$$inline_8959_options$$267_orientation$$5$$] = $pos$$inline_8961_ref$$inline_8962$$
      }
    }
  }
  this.$_scale$ && this.$_timeAxis$ && this.$createSeriesTicks$($desc$$28_width$$177$$);
  this.$parseDataXML$();
  (0,D.$JSCompiler_StaticMethods_updateReferenceObjects$$)(this);
  (0,D.$JSCompiler_StaticMethods_updateSeriesTicks$$)(this);
  D.$DvtTimeUtils$$.$supportsTouch$() && 0 < this.$_items$.length && (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)(this, "flowto", "_bt_" + this.$_items$[0].getId());
  if($desc$$28_width$$177$$ = this.$GetComponentDescription$()) {
    D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$getElem$(), "role", "group"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$getElem$(), "aria-label", D.$DvtStringUtils$$.$processAriaLabel$($desc$$28_width$$177$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", $seriesDescArray$$)
};
D.$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new D.$DvtCSSStyle$$("background-color:#f9f9f9;");
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_itemStyleDefaults$ = this.$Options$.itemStyleDefaults;
  this.$_referenceObjectStyleDefaults$ = this.$Options$.referenceObjectStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = D.$DvtTimelineSeries$DEFAULT_COLORS_ARRAY$$;
  this.$_labelStyle$ = new D.$DvtCSSStyle$$("background-color:rgba(249,249,249,0.8);color:#252525;white-space:nowrap;font-size:13px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
  this.$_emptyTextStyle$ = new D.$DvtCSSStyle$$("color:#333333;white-space:nowrap;font-size:12px;font-weight:normal;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;");
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if(this.$_seriesStyleDefaults$) {
    var $style$$115$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$115$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "background-color:" + $style$$115$$ + ";");
    if($style$$115$$ = this.$_seriesStyleDefaults$.colors) {
      this.$_colors$ = $style$$115$$
    }
    ($style$$115$$ = this.$_seriesStyleDefaults$.labelStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_labelStyle$, $style$$115$$);
    ($style$$115$$ = this.$_seriesStyleDefaults$.emptyTextStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_emptyTextStyle$, $style$$115$$)
  }
  this.$_referenceObjectStyleDefaults$ && ($style$$115$$ = this.$_referenceObjectStyleDefaults$.color) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_referenceObjectStyle$, "color:" + $style$$115$$ + ";");
  D.$DvtTimeline$$.$superclass$.$applyStyleValues$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = (0,D.$JSCompiler_set$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$createSeriesTicks$ = function $$JSCompiler_prototypeAlias$$$$createSeriesTicks$$($width$$180$$) {
  var $separatorStroke$$1_separatorStyle$$1$$ = new D.$DvtCSSStyle$$("color:#bcc7d2");
  if(this.$_axisStyleDefaults$) {
    var $separatorColor$$1$$ = this.$_axisStyleDefaults$.separatorColor;
    $separatorColor$$1$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($separatorStroke$$1_separatorStyle$$1$$, "color:" + $separatorColor$$1$$ + ";")
  }
  $separatorStroke$$1_separatorStyle$$1$$ = new D.$DvtSolidStroke$$($separatorStroke$$1_separatorStyle$$1$$.$getStyle$("color"));
  $separatorStroke$$1_separatorStyle$$1$$.$setStyle$(1, 3);
  this.$_seriesTicks$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$renderSeriesTimeAxis$(this.$_fetchStartPos$, this.$_fetchEndPos$, this.$_seriesTicks$, "o_", $width$$180$$, $separatorStroke$$1_separatorStyle$$1$$);
  this.$_canvas$.$addChild$(this.$_seriesTicks$)
};
D.$JSCompiler_prototypeAlias$$.$renderSeriesTimeAxis$ = function $$JSCompiler_prototypeAlias$$$$renderSeriesTimeAxis$$($current$$11_startDate$$3_startPos$$6$$, $endPos$$9$$, $container$$193$$, $prefix$$7$$, $start$$54_width$$181$$, $stroke$$118$$) {
  $start$$54_width$$181$$ = this.$_start$;
  var $end$$38$$ = this.$_end$;
  $current$$11_startDate$$3_startPos$$6$$ = D.$DvtTimeUtils$$.$getPositionDate$($start$$54_width$$181$$, $end$$38$$, $current$$11_startDate$$3_startPos$$6$$, this.$_length$);
  var $adjustedStartDate$$2_next$$21$$ = this.$_timeAxis$.$adjustDate$($current$$11_startDate$$3_startPos$$6$$);
  $current$$11_startDate$$3_startPos$$6$$ = new window.Date($current$$11_startDate$$3_startPos$$6$$);
  for(var $currentPos$$3_tickElem$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$54_width$$181$$, $end$$38$$, $adjustedStartDate$$2_next$$21$$, this.$_length$);$currentPos$$3_tickElem$$1$$ < $endPos$$9$$;) {
    var $adjustedStartDate$$2_next$$21$$ = this.$_timeAxis$.$getNextDate$(this.$_timeAxis$.$adjustDate$($current$$11_startDate$$3_startPos$$6$$)), $next_time_pos$$3$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$54_width$$181$$, $end$$38$$, $adjustedStartDate$$2_next$$21$$, this.$_length$), $pos$$73_y2$$44$$ = !this.$_isVertical$ && this.$isRTL$() ? this.$_length$ - $currentPos$$3_tickElem$$1$$ : $currentPos$$3_tickElem$$1$$;
    if(this.$_isVertical$) {
      var $x1$$57$$ = 0, $y1$$47$$ = $pos$$73_y2$$44$$, $x2$$54$$ = this.$_maxOverflowValue$
    }else {
      $x1$$57$$ = $pos$$73_y2$$44$$, $y1$$47$$ = 0, $x2$$54$$ = $pos$$73_y2$$44$$, $pos$$73_y2$$44$$ = this.$_maxOverflowValue$
    }
    $currentPos$$3_tickElem$$1$$ = this.$addTick$($container$$193$$, $x1$$57$$, $x2$$54$$, $y1$$47$$, $pos$$73_y2$$44$$, $stroke$$118$$, $prefix$$7$$ + "tick" + $currentPos$$3_tickElem$$1$$);
    $currentPos$$3_tickElem$$1$$.time = $current$$11_startDate$$3_startPos$$6$$.getTime();
    this.$_seriesTicksArray$.push($currentPos$$3_tickElem$$1$$);
    $current$$11_startDate$$3_startPos$$6$$ = $adjustedStartDate$$2_next$$21$$;
    $currentPos$$3_tickElem$$1$$ = $next_time_pos$$3$$
  }
};
D.$JSCompiler_prototypeAlias$$.$createBackground$ = function $$JSCompiler_prototypeAlias$$$$createBackground$$($width$$182$$, $height$$159$$) {
  this.$_background$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$182$$, $height$$159$$, "bg");
  this.$_background$.$setCSSStyle$(this.$_style$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_background$);
  this.$_background$.setCursor("move");
  this.$addChild$(this.$_background$)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$269$$) {
  this.$_parser$ = new D.$DvtTimelineSeriesParser$$(this);
  return this.$_parser$.parse($options$$269$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$15$$) {
  this.$_isEmpty$ = (this.$_items$ = $props$$15$$.$items$) && 0 < this.$_items$.length ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_defaultStyles$ = $props$$15$$.$defaultStyles$;
  this.$_itemTitleStyle$ = $props$$15$$.$itemTitleStyle$;
  this.$_itemDescriptionStyle$ = $props$$15$$.$itemDescriptionStyle$;
  this.$_referenceObjectStyle$ = $props$$15$$.$referenceObjectStyle$;
  this.$_label$ = $props$$15$$.label;
  this.$_timeAxis$ = $props$$15$$.$timeAxis$;
  this.$_emptyText$ = $props$$15$$.$emptyText$;
  this.$_emptyText$ == D.$JSCompiler_alias_NULL$$ && (this.$_emptyText$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  D.$DvtTimelineSeries$$.$superclass$.$_applyParsedProperties$.call(this, $props$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$() {
  if(!(this.$_items$ == D.$JSCompiler_alias_NULL$$ || 0 == this.$_items$.length)) {
    if(this.$_animatorQueue$ != D.$JSCompiler_alias_NULL$$) {
      for(var $block$$inline_9001_i$$inline_8995$$ = 0;$block$$inline_9001_i$$inline_8995$$ < this.$_animatorQueue$.length;$block$$inline_9001_i$$inline_8995$$++) {
        this.$_animatorQueue$[$block$$inline_9001_i$$inline_8995$$].stop(D.$JSCompiler_alias_TRUE$$)
      }
    }
    this.$_animationTimer$ != D.$JSCompiler_alias_NULL$$ && this.$_animationTimer$.stop();
    delete this.$_animatorQueue$;
    delete this.$_animationTimer$;
    var $durationBlock$$inline_11653_startPos$$inline_8998$$ = this.$_fetchStartPos$, $context$$inline_11654_endPos$$inline_8999$$ = this.$_fetchEndPos$, $block$$inline_9001_i$$inline_8995$$ = new D.$DvtContainer$$(this.$getCtx$(), "itemBlock_" + $durationBlock$$inline_11653_startPos$$inline_8998$$ + "_" + $context$$inline_11654_endPos$$inline_8999$$);
    $block$$inline_9001_i$$inline_8995$$.$startPos$ = $durationBlock$$inline_11653_startPos$$inline_8998$$;
    $block$$inline_9001_i$$inline_8995$$.$endPos$ = $context$$inline_11654_endPos$$inline_8999$$;
    this.$prepareDurations$(this.$_items$);
    this.$_initialSpacing$ = this.$_isVertical$ ? 20 * (0 < this.$_maxDurationSize$ ? 1 : 0) + 15 + 10 * this.$_maxDurationSize$ : 35 + 10 * this.$_maxDurationSize$;
    this.$_layoutItems$ = [];
    for(var $i$$inline_9002_j$$inline_11657_k$$inline_9009$$ = 0;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$ < this.$_items$.length;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$++) {
      var $isRTL$$inline_11655_item$$inline_9003$$ = this.$_items$[$i$$inline_9002_j$$inline_11657_k$$inline_9009$$], $i$$inline_11656_loc$$inline_9004$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $isRTL$$inline_11655_item$$inline_9003$$.$_startTime$, this.$_length$), $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ = $isRTL$$inline_11655_item$$inline_9003$$.$_endTime$;
      $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ && $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ != $isRTL$$inline_11655_item$$inline_9003$$.$_startTime$ && ($add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$, this.$_length$) - $i$$inline_11656_loc$$inline_9004$$, 
      $i$$inline_11656_loc$$inline_9004$$ += window.Math.min(10, $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ / 2));
      $isRTL$$inline_11655_item$$inline_9003$$.$_loc$ = $i$$inline_11656_loc$$inline_9004$$;
      for(var $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ = D.$JSCompiler_alias_TRUE$$, $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ = 0;$durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ < this.$_layoutItems$.length;$durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$++) {
        if($i$$inline_11656_loc$$inline_9004$$ < this.$_layoutItems$[$durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$].$_loc$) {
          this.$_layoutItems$.splice($durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$, 0, $isRTL$$inline_11655_item$$inline_9003$$);
          $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ = D.$JSCompiler_alias_FALSE$$;
          break
        }
      }
      $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ && this.$_layoutItems$.push($isRTL$$inline_11655_item$$inline_9003$$)
    }
    for($i$$inline_9002_j$$inline_11657_k$$inline_9009$$ = 0;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$ < this.$_layoutItems$.length;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$++) {
      $isRTL$$inline_11655_item$$inline_9003$$ = this.$_layoutItems$[$i$$inline_9002_j$$inline_11657_k$$inline_9009$$], $i$$inline_11656_loc$$inline_9004$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $isRTL$$inline_11655_item$$inline_9003$$.$_startTime$, this.$_length$), $i$$inline_11656_loc$$inline_9004$$ < $durationBlock$$inline_11653_startPos$$inline_8998$$ || $i$$inline_11656_loc$$inline_9004$$ > $context$$inline_11654_endPos$$inline_8999$$ || this.$addItem$($block$$inline_9001_i$$inline_8995$$, 
      $block$$inline_9001_i$$inline_8995$$.$feelers$, $block$$inline_9001_i$$inline_8995$$.$durations$, $isRTL$$inline_11655_item$$inline_9003$$, D.$JSCompiler_alias_VOID$$)
    }
    if(D.$DvtTimeUtils$$.$supportsTouch$()) {
      for($i$$inline_9002_j$$inline_11657_k$$inline_9009$$ = 0;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$ < this.$_layoutItems$.length - 1;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$++) {
        $isRTL$$inline_11655_item$$inline_9003$$ = this.$_layoutItems$[$i$$inline_9002_j$$inline_11657_k$$inline_9009$$], (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)($isRTL$$inline_11655_item$$inline_9003$$.$_displayable$, "flowto", "_bt_" + this.$_layoutItems$[$i$$inline_9002_j$$inline_11657_k$$inline_9009$$ + 1].getId())
      }
    }
    $durationBlock$$inline_11653_startPos$$inline_8998$$ = $block$$inline_9001_i$$inline_8995$$.$durations$;
    $context$$inline_11654_endPos$$inline_8999$$ = this.$getCtx$();
    $isRTL$$inline_11655_item$$inline_9003$$ = this.$isRTL$();
    for($i$$inline_11656_loc$$inline_9004$$ = this.$_maxDurationSize$;0 < $i$$inline_11656_loc$$inline_9004$$;$i$$inline_11656_loc$$inline_9004$$--) {
      for($i$$inline_9002_j$$inline_11657_k$$inline_9009$$ = 0;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$ < this.$_items$.length;$i$$inline_9002_j$$inline_11657_k$$inline_9009$$++) {
        var $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$ = this.$_items$[$i$$inline_9002_j$$inline_11657_k$$inline_9009$$], $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ = $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_startTime$, $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ = $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_endTime$;
        if($endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ && $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ != $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ && $i$$inline_11656_loc$$inline_9004$$ == $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_durationLevel$) {
          var $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$, this.$_length$), $duration$$inline_11665_durationId$$inline_11662$$ = "_duration_" + $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.getId(), $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ = 22 + 10 * $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_durationLevel$, 
          $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$, this.$_length$);
          this.$_isVertical$ ? ($duration$$inline_11665_durationId$$inline_11662$$ = !$isRTL$$inline_11655_item$$inline_9003$$ && !this.$_isInverted$ || $isRTL$$inline_11655_item$$inline_9003$$ && this.$_isInverted$ ? new D.$DvtRect$$($context$$inline_11654_endPos$$inline_8999$$, this.$_size$ - $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ + 5, $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$, 
          $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ - $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, $duration$$inline_11665_durationId$$inline_11662$$) : new D.$DvtRect$$($context$$inline_11654_endPos$$inline_8999$$, -5, $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$, $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ - 
          $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, $duration$$inline_11665_durationId$$inline_11662$$), $duration$$inline_11665_durationId$$inline_11662$$.$setY$($feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$), $duration$$inline_11665_durationId$$inline_11662$$.$setWidth$($durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$), $duration$$inline_11665_durationId$$inline_11662$$.$setHeight$($endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ - 
          $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$)) : ($endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ -= $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$ = $isRTL$$inline_11655_item$$inline_9003$$ ? this.$_length$ - $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$ - 
          $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ : $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, $duration$$inline_11665_durationId$$inline_11662$$ = this.$_isInverted$ ? new D.$DvtRect$$($context$$inline_11654_endPos$$inline_8999$$, $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, -5, $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$, 
          $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$, $duration$$inline_11665_durationId$$inline_11662$$) : new D.$DvtRect$$($context$$inline_11654_endPos$$inline_8999$$, $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$, this.$_size$ - $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ + 5, $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$, $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$, 
          $duration$$inline_11665_durationId$$inline_11662$$));
          (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($duration$$inline_11665_durationId$$inline_11662$$, 5);
          $duration$$inline_11665_durationId$$inline_11662$$.$setSolidFill$($add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_durationFillColor$);
          $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$ = this.$getStyle$("enfw");
          $endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$ = this.$getStyle$("enfc");
          $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$ = new D.$DvtSolidStroke$$($endLoc$$inline_11664_endTime$$inline_11660_feelerColor$$inline_11669_width$$inline_11666$$, 1, $feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$);
          $duration$$inline_11665_durationId$$inline_11662$$.$setStroke$($feelerStroke$$inline_11670_feelerWidth$$inline_11668_loc$$inline_11661_transX$$inline_11667$$);
          $duration$$inline_11665_durationId$$inline_11662$$.$_node$ = $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$;
          this.$_callbackObj$.$EventManager$.$associate$($duration$$inline_11665_durationId$$inline_11662$$, $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$);
          $durationBlock$$inline_11653_startPos$$inline_8998$$.$addChild$($duration$$inline_11665_durationId$$inline_11662$$);
          $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_durationBar$ = $duration$$inline_11665_durationId$$inline_11662$$;
          $add$$inline_9007_endTime$$inline_9005_node$$inline_11658_span$$inline_9006$$.$_durationSize$ = $durationSize$$inline_11663_j$$inline_9008_startTime$$inline_11659$$ - 5
        }
      }
    }
    this.$_canvas$.$addChild$($block$$inline_9001_i$$inline_8995$$);
    this.$_blocks$.push($block$$inline_9001_i$$inline_8995$$);
    this.$_isVertical$ || (0,D.$JSCompiler_StaticMethods_adjustFeelers$$)(this);
    this.$_isInverted$ || ((0,D.$JSCompiler_StaticMethods_adjustDurations$$)(this), (0,D.$JSCompiler_StaticMethods_adjustItems$$)(this));
    (0,D.$JSCompiler_StaticMethods_adjustBackground$$)(this);
    this.$startAnimations$()
  }
};
D.$JSCompiler_StaticMethods_adjustBackground$$ = function $$JSCompiler_StaticMethods_adjustBackground$$$($JSCompiler_StaticMethods_adjustBackground$self$$) {
  if($JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustBackground$self$$.$_size$) {
    $JSCompiler_StaticMethods_adjustBackground$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setWidth$($JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$) : $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setHeight$($JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$);
    var $sizeDiff$$ = $JSCompiler_StaticMethods_adjustBackground$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustBackground$self$$.$_size$
  }else {
    $sizeDiff$$ = 0
  }
  $JSCompiler_StaticMethods_adjustBackground$self$$.$_isVertical$ ? (!$JSCompiler_StaticMethods_adjustBackground$self$$.$_isInverted$ && !$JSCompiler_StaticMethods_adjustBackground$self$$.$isRTL$() || $JSCompiler_StaticMethods_adjustBackground$self$$.$_isInverted$ && $JSCompiler_StaticMethods_adjustBackground$self$$.$isRTL$()) && $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setTranslateX$(-$sizeDiff$$) : $JSCompiler_StaticMethods_adjustBackground$self$$.$_isInverted$ || $JSCompiler_StaticMethods_adjustBackground$self$$.$_background$.$setTranslateY$(-$sizeDiff$$)
};
D.$JSCompiler_StaticMethods_calculateSpacing$$ = function $$JSCompiler_StaticMethods_calculateSpacing$$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$56$$, $index$$244$$) {
  if(!($JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$ == D.$JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$.length)) {
    var $x$$294$$ = $item$$56$$.$_loc$, $y$$263$$ = $item$$56$$.$_spacing$;
    $y$$263$$ == D.$JSCompiler_alias_NULL$$ && ($y$$263$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    var $maxOverflowValue$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$;
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for($i$$873$$ = 0;$i$$873$$ < $index$$244$$;$i$$873$$++) {
        $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$873$$], $currWidth$$ = $currItem$$1_curry$$1$$.getWidth() + 10, $maxOverflowValue$$ < $y$$263$$ + $currWidth$$ && ($maxOverflowValue$$ = $y$$263$$ + $currWidth$$)
      }
    }else {
      for(var $i$$873$$ = 0;$i$$873$$ < $index$$244$$;$i$$873$$++) {
        var $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$873$$], $currWidth$$ = $currItem$$1_curry$$1$$.getWidth() + 10, $currHeight$$ = $currItem$$1_curry$$1$$.getHeight();
        if($currItem$$1_curry$$1$$.$_loc$ != D.$JSCompiler_alias_NULL$$ && $currItem$$1_curry$$1$$ != $item$$56$$) {
          var $currx$$ = $currItem$$1_curry$$1$$.$_loc$;
          $currx$$ == D.$JSCompiler_alias_NULL$$ && ($currx$$ = 0);
          $currItem$$1_curry$$1$$ = $currItem$$1_curry$$1$$.$_spacing$;
          $currItem$$1_curry$$1$$ == D.$JSCompiler_alias_NULL$$ && ($currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
          $x$$294$$ >= $currx$$ && ($x$$294$$ <= $currx$$ + $currWidth$$ && $y$$263$$ >= $currItem$$1_curry$$1$$ && $y$$263$$ <= $currItem$$1_curry$$1$$ + $currHeight$$) && ($y$$263$$ = $currItem$$1_curry$$1$$ + $currHeight$$ + 15, $item$$56$$.$_spacing$ = $y$$263$$, $y$$263$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$56$$, $index$$244$$))
        }
        $maxOverflowValue$$ < $y$$263$$ + $currHeight$$ && ($maxOverflowValue$$ = $y$$263$$ + $currHeight$$)
      }
    }
    $maxOverflowValue$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue$$ + 15);
    return $y$$263$$
  }
};
D.$JSCompiler_StaticMethods_calculateDurationSize$$ = function $$JSCompiler_StaticMethods_calculateDurationSize$$$($JSCompiler_StaticMethods_calculateDurationSize$self$$, $item$$57$$, $index$$245$$) {
  if(!($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$ == D.$JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$.length)) {
    var $startTime$$9$$ = $item$$57$$.$_startTime$, $endTime$$10_y$$264$$ = $item$$57$$.$_endTime$;
    if($endTime$$10_y$$264$$ && $endTime$$10_y$$264$$ != $startTime$$9$$) {
      $endTime$$10_y$$264$$ = $item$$57$$.$_durationLevel$;
      $endTime$$10_y$$264$$ == D.$JSCompiler_alias_NULL$$ && ($endTime$$10_y$$264$$ = 1);
      for(var $i$$874$$ = 0;$i$$874$$ < $index$$245$$;$i$$874$$++) {
        var $currItem$$2_curry$$2$$ = $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$[$i$$874$$];
        if($currItem$$2_curry$$2$$ != $item$$57$$) {
          var $currStartTime$$1$$ = $currItem$$2_curry$$2$$.$_startTime$, $currEndTime$$1$$ = $currItem$$2_curry$$2$$.$_endTime$;
          $currEndTime$$1$$ && $currEndTime$$1$$ != $currStartTime$$1$$ && ($currItem$$2_curry$$2$$ = $currItem$$2_curry$$2$$.$_durationLevel$, $currItem$$2_curry$$2$$ == D.$JSCompiler_alias_NULL$$ && ($currItem$$2_curry$$2$$ = 1), $startTime$$9$$ >= $currStartTime$$1$$ && ($startTime$$9$$ <= $currEndTime$$1$$ && $endTime$$10_y$$264$$ == $currItem$$2_curry$$2$$) && ($endTime$$10_y$$264$$ = $currItem$$2_curry$$2$$ + 1, $item$$57$$.$_durationLevel$ = $endTime$$10_y$$264$$, $endTime$$10_y$$264$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationSize$$)($JSCompiler_StaticMethods_calculateDurationSize$self$$, 
          $item$$57$$, $index$$245$$)))
        }
      }
      $endTime$$10_y$$264$$ > $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ && ($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ = $endTime$$10_y$$264$$);
      return $endTime$$10_y$$264$$
    }
  }
};
D.$DvtTimelineSeries$$.prototype.$prepareDurations$ = function $$DvtTimelineSeries$$$$$prepareDurations$$() {
  for(var $i$$875$$ = 0;$i$$875$$ < this.$_items$.length;$i$$875$$++) {
    var $node$$308$$ = this.$_items$[$i$$875$$], $durationLevel$$inline_9018_startTime$$10$$ = $node$$308$$.$_startTime$, $endTime$$11$$ = $node$$308$$.$_endTime$;
    $endTime$$11$$ && $endTime$$11$$ != $durationLevel$$inline_9018_startTime$$10$$ && ($durationLevel$$inline_9018_startTime$$10$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationSize$$)(this, $node$$308$$, this.$_items$.length), $node$$308$$.$_durationLevel$ = $durationLevel$$inline_9018_startTime$$10$$, $node$$308$$.$_durationFillColor$ == D.$JSCompiler_alias_NULL$$ && ($node$$308$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_colors$.length && 
    (this.$_colorCount$ = 0)))
  }
};
D.$JSCompiler_StaticMethods_updateReferenceObjects$$ = function $$JSCompiler_StaticMethods_updateReferenceObjects$$$($JSCompiler_StaticMethods_updateReferenceObjects$self$$) {
  for(var $i$$877$$ = 0;$i$$877$$ < $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_renderedReferenceObjects$.length;$i$$877$$++) {
    var $ref$$3$$ = $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_renderedReferenceObjects$[$i$$877$$], $pos$$75$$ = $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$isRTL$() ? $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_length$ - D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_start$, $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_end$, $ref$$3$$.$date$, $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_length$) : 
    D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_start$, $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_end$, $ref$$3$$.$date$, $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_length$);
    $JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_isVertical$ ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$75$$), $ref$$3$$.$setX2$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$75$$)) : ($ref$$3$$.$setX1$($pos$$75$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$75$$), $ref$$3$$.$setY2$($JSCompiler_StaticMethods_updateReferenceObjects$self$$.$_maxOverflowValue$))
  }
};
D.$JSCompiler_StaticMethods_updateSeriesTicks$$ = function $$JSCompiler_StaticMethods_updateSeriesTicks$$$($JSCompiler_StaticMethods_updateSeriesTicks$self$$) {
  for(var $i$$878$$ = 0;$i$$878$$ < $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_seriesTicksArray$.length;$i$$878$$++) {
    var $tick$$ = $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_seriesTicksArray$[$i$$878$$], $pos$$76$$ = !$JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_isVertical$ && $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$isRTL$() ? $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_length$ - D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_start$, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_end$, $tick$$.time, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_length$) : 
    D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_start$, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_end$, $tick$$.time, $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_length$);
    $JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_isVertical$ ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$76$$), $tick$$.$setX2$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$76$$)) : ($tick$$.$setX1$($pos$$76$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$76$$), $tick$$.$setY2$($JSCompiler_StaticMethods_updateSeriesTicks$self$$.$_maxOverflowValue$))
  }
};
D.$DvtTimelineSeries$$.prototype.$addItem$ = function $$DvtTimelineSeries$$$$$addItem$$($animator$$134_block$$3$$, $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$, $durationBlock$$1_loc$$4$$, $node$$309$$, $animate$$2$$) {
  var $context$$618$$ = this.$getCtx$(), $bubbleContainer_nodeId$$144$$ = $node$$309$$.getId(), $isRTL$$41_transX$$9$$ = this.$isRTL$();
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ == D.$JSCompiler_alias_NULL$$ && ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = new D.$DvtContainer$$($context$$618$$, "feelers"), $animator$$134_block$$3$$.$addChild$($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$), $animator$$134_block$$3$$.$feelers$ = $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$);
  $durationBlock$$1_loc$$4$$ == D.$JSCompiler_alias_NULL$$ && ($durationBlock$$1_loc$$4$$ = new D.$DvtContainer$$($context$$618$$, "durations"), $animator$$134_block$$3$$.$addChild$($durationBlock$$1_loc$$4$$), $animator$$134_block$$3$$.$durations$ = $durationBlock$$1_loc$$4$$);
  $durationBlock$$1_loc$$4$$ = $node$$309$$.$_loc$;
  var $spacing$$3_transY$$1$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)(this, $node$$309$$, this.$_items$.length);
  $node$$309$$.$_spacing$ = $spacing$$3_transY$$1$$;
  $node$$309$$.$getStyle$();
  var $context$$inline_9028_nodeHeight$$9$$ = this.$getCtx$(), $isRTL$$inline_9029$$ = this.$isRTL$(), $startOffset$$3_title$$inline_9030_width$$inline_9036$$ = $node$$309$$.$getTitle$(), $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ = $node$$309$$.$_desc$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ = $node$$309$$.$_thumbnail$, $container$$inline_9033$$ = new D.$DvtContainer$$($context$$inline_9028_nodeHeight$$9$$), $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = 
  0, $offsetY$$inline_9035$$ = 0;
  if($isRTL$$inline_9029$$) {
    $startOffset$$3_title$$inline_9030_width$$inline_9036$$ != D.$JSCompiler_alias_NULL$$ && ($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ = new D.$DvtOutputText$$(this.$getCtx$(), $startOffset$$3_title$$inline_9030_width$$inline_9036$$, 0, $offsetY$$inline_9035$$), $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$setCSSStyle$(this.$_itemTitleStyle$), $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$measureDimensions$().$w$ + 
    2, $offsetY$$inline_9035$$ = 15, $container$$inline_9033$$.$addChild$($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$)), $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ != D.$JSCompiler_alias_NULL$$ && ($desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ = new D.$DvtOutputText$$(this.$getCtx$(), $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, 0, $offsetY$$inline_9035$$), $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$.$setCSSStyle$(this.$_itemDescriptionStyle$), 
    $startOffset$$3_title$$inline_9030_width$$inline_9036$$ = $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$.$measureDimensions$().$w$ + 2, 0 != $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ && $startOffset$$3_title$$inline_9030_width$$inline_9036$$ != $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ && ($startOffset$$3_title$$inline_9030_width$$inline_9036$$ > $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ ? ($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$setX$($startOffset$$3_title$$inline_9030_width$$inline_9036$$ - 
    $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$), $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = $startOffset$$3_title$$inline_9030_width$$inline_9036$$) : $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$.$setX$($feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ - $startOffset$$3_title$$inline_9030_width$$inline_9036$$)), $container$$inline_9033$$.$addChild$($desc$$inline_9031_descText$$inline_9039_endOffset$$4$$)), $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ != 
    D.$JSCompiler_alias_NULL$$ && ($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ = new D.$DvtImage$$($context$$inline_9028_nodeHeight$$9$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, 0, 32, 32, "_tn"), $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $container$$inline_9033$$.$addChild$($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$))
  }else {
    if($bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ != D.$JSCompiler_alias_NULL$$) {
      var $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ = new D.$DvtImage$$($context$$inline_9028_nodeHeight$$9$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$, 0, 0, 32, 32, "_tn");
      $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      $container$$inline_9033$$.$addChild$($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$);
      $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = 34
    }
    $startOffset$$3_title$$inline_9030_width$$inline_9036$$ != D.$JSCompiler_alias_NULL$$ && ($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ = new D.$DvtOutputText$$(this.$getCtx$(), $startOffset$$3_title$$inline_9030_width$$inline_9036$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $offsetY$$inline_9035$$), $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$setCSSStyle$(this.$_itemTitleStyle$), $offsetY$$inline_9035$$ = 15, $container$$inline_9033$$.$addChild$($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$));
    $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ != D.$JSCompiler_alias_NULL$$ && ($desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ = new D.$DvtOutputText$$(this.$getCtx$(), $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $offsetY$$inline_9035$$), $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$.$setCSSStyle$(this.$_itemDescriptionStyle$), $container$$inline_9033$$.$addChild$($desc$$inline_9031_descText$$inline_9039_endOffset$$4$$))
  }
  this.$addChild$($container$$inline_9033$$);
  $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ = $container$$inline_9033$$.$getDimensions$();
  this.removeChild($container$$inline_9033$$);
  $node$$309$$.$setWidth$($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$w$ + 10);
  $node$$309$$.$setHeight$($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$.$h$ + 10);
  $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ = $node$$309$$.getWidth();
  $context$$inline_9028_nodeHeight$$9$$ = $node$$309$$.getHeight();
  $animate$$2$$ == D.$JSCompiler_alias_VOID$$ && ($animate$$2$$ = D.$JSCompiler_alias_FALSE$$);
  if(!this.$_isVertical$) {
    if(this.$_isInverted$) {
      $feeler$$2_feelerY$$1$$ = 0, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ = $spacing$$3_transY$$1$$
    }else {
      var $feeler$$2_feelerY$$1$$ = this.$Height$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ = this.$Height$ - $spacing$$3_transY$$1$$
    }
    $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = $isRTL$$41_transX$$9$$ ? this.$_length$ - $durationBlock$$1_loc$$4$$ : $durationBlock$$1_loc$$4$$;
    $feeler$$2_feelerY$$1$$ = new D.$DvtLine$$($context$$618$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $feeler$$2_feelerY$$1$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$, "_feeler_" + $bubbleContainer_nodeId$$144$$);
    $animate$$2$$ && $feeler$$2_feelerY$$1$$.$setAlpha$(0);
    $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$.$addChild$($feeler$$2_feelerY$$1$$);
    $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = this.$getStyle$("enfw");
    $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ = this.$getStyle$("enfc");
    $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = new D.$DvtSolidStroke$$($bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$, 1, $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$);
    $feeler$$2_feelerY$$1$$.$setStroke$($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$);
    $feeler$$2_feelerY$$1$$.$_node$ = $node$$309$$
  }
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ = "_bubble_" + $bubbleContainer_nodeId$$144$$;
  this.$_isVertical$ ? ($feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = $context$$inline_9028_nodeHeight$$9$$ / 2, $startOffset$$3_title$$inline_9030_width$$inline_9036$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ - 6, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ + 6, !$isRTL$$41_transX$$9$$ && this.$_isInverted$ || $isRTL$$41_transX$$9$$ && !this.$_isInverted$ ? ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = 
  [0, 0, 0, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, -6, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, 0, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, 0, $context$$inline_9028_nodeHeight$$9$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, $context$$inline_9028_nodeHeight$$9$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, 0, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = [2, 
  2, 2, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, -4, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, 2, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, 2, $context$$inline_9028_nodeHeight$$9$$ - 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, $context$$inline_9028_nodeHeight$$9$$ - 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, 2, 2, 2]) : ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = 
  [0, 0, 0, $context$$inline_9028_nodeHeight$$9$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, $context$$inline_9028_nodeHeight$$9$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ + 6, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, 
  $startOffset$$3_title$$inline_9030_width$$inline_9036$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, 0, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = [2, 2, 2, $context$$inline_9028_nodeHeight$$9$$ - 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, $context$$inline_9028_nodeHeight$$9$$ - 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, 
  $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ + 4, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, 2, 2, 2])) : ($feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = $isRTL$$41_transX$$9$$ ? $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 
  20 : 20, $startOffset$$3_title$$inline_9030_width$$inline_9036$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ - 6, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$ = $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ + 6, this.$_isInverted$ ? ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = [0, 0, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, 0, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, -6, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, 
  0, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, 0, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, $context$$inline_9028_nodeHeight$$9$$, 0, $context$$inline_9028_nodeHeight$$9$$, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = [2, 2, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, 2, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, -4, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 
  2, 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, $context$$inline_9028_nodeHeight$$9$$ - 2, 2, $context$$inline_9028_nodeHeight$$9$$ - 2, 2, 2]) : ($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = [0, 0, 0, $context$$inline_9028_nodeHeight$$9$$, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, $context$$inline_9028_nodeHeight$$9$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $context$$inline_9028_nodeHeight$$9$$ + 6, 
  $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, $context$$inline_9028_nodeHeight$$9$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, $context$$inline_9028_nodeHeight$$9$$, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$, 0, 0, 0], $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$ = [2, 2, 2, $context$$inline_9028_nodeHeight$$9$$ - 2, $startOffset$$3_title$$inline_9030_width$$inline_9036$$, $context$$inline_9028_nodeHeight$$9$$ - 
  2, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $context$$inline_9028_nodeHeight$$9$$ + 4, $desc$$inline_9031_descText$$inline_9039_endOffset$$4$$, $context$$inline_9028_nodeHeight$$9$$ - 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, $context$$inline_9028_nodeHeight$$9$$ - 2, $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ - 2, 2, 2, 2]));
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$ = new D.$DvtPolygon$$($context$$618$$, $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$);
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ = new D.$DvtPolygon$$($context$$618$$, $feelerX$$1_innerBubbleArray_offset$$36_offsetX$$inline_9034$$, $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$ + "_i");
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$.$setSolidFill$(this.$getStyle$("enbc"));
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$.$setStroke$(new D.$DvtSolidStroke$$(this.$getStyle$("enbsc")));
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$.$setSolidFill$("rgba(249,249,249,0)");
  $bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$.$setStroke$(new D.$DvtSolidStroke$$("rgba(249,249,249,0)", 1, 2));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($container$$inline_9033$$, 5, 5);
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$.$addChild$($bubbleId_feelerColor$$1_feelerHeight$$1_innerBubble_thumbnail$$inline_9032$$);
  $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$.$addChild$($container$$inline_9033$$);
  $bubbleContainer_nodeId$$144$$ = new D.$DvtTimelineSeriesItem$$($context$$618$$, this.$_defaultStyles$, "_bt_" + $bubbleContainer_nodeId$$144$$);
  $animate$$2$$ && $bubbleContainer_nodeId$$144$$.$setAlpha$(0);
  $bubbleContainer_nodeId$$144$$.$addChild$($bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$);
  D.$DvtTimeUtils$$.$supportsTouch$() && D.$DvtToolkitUtils$$.$setAttrNullNS$($bubbleContainer_nodeId$$144$$.$_elem$, "id", $bubbleContainer_nodeId$$144$$.$_id$);
  $bubbleContainer_nodeId$$144$$.$_node$ = $node$$309$$;
  this.$_isVertical$ ? ($spacing$$3_transY$$1$$ = $durationBlock$$1_loc$$4$$ - $context$$inline_9028_nodeHeight$$9$$ / 2, $isRTL$$41_transX$$9$$ = $isRTL$$41_transX$$9$$ && this.$_isInverted$ || !$isRTL$$41_transX$$9$$ && !this.$_isInverted$ ? this.$_size$ - ($dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ + this.$_initialSpacing$) : this.$_initialSpacing$) : ($isRTL$$41_transX$$9$$ = $isRTL$$41_transX$$9$$ ? this.$_length$ - $durationBlock$$1_loc$$4$$ - $dim$$88_nodeWidth$$7_thumbImage$$inline_9037_titleText$$inline_9038$$ + 
  20 : $durationBlock$$1_loc$$4$$ - 20, $spacing$$3_transY$$1$$ = this.$_isInverted$ ? $spacing$$3_transY$$1$$ : this.$Height$ - $spacing$$3_transY$$1$$ - $context$$inline_9028_nodeHeight$$9$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bubbleContainer_nodeId$$144$$, $isRTL$$41_transX$$9$$, $spacing$$3_transY$$1$$);
  0 <= $durationBlock$$1_loc$$4$$ && $animator$$134_block$$3$$.$addChild$($bubbleContainer_nodeId$$144$$);
  $node$$309$$.$_displayable$ = $bubbleContainer_nodeId$$144$$;
  $bubbleContainer_nodeId$$144$$.$setAriaRole$("group");
  $node$$309$$.$_updateAriaLabel$();
  this.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_nodeId$$144$$, $node$$309$$);
  this.$_isVertical$ || ($node$$309$$.$_feeler$ = $feeler$$2_feelerY$$1$$);
  $animate$$2$$ && ($animator$$134_block$$3$$ = new D.$DvtAnimator$$($context$$618$$, 1, 0, D.$DvtEasing$linear$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$134_block$$3$$, "typeNumber", $bubbleContainer_nodeId$$144$$, $bubbleContainer_nodeId$$144$$.$getAlpha$, $bubbleContainer_nodeId$$144$$.$setAlpha$, 1), this.$_isVertical$ || (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$134_block$$3$$, "typeNumber", $feeler$$2_feelerY$$1$$, $feeler$$2_feelerY$$1$$.$getAlpha$, $feeler$$2_feelerY$$1$$.$setAlpha$, 
  1), this.$_animatorQueue$ == D.$JSCompiler_alias_NULL$$ && (this.$_animatorQueue$ = []), this.$_animatorQueue$.push($animator$$134_block$$3$$));
  return $bubble$$1_bubbleArray_feelerBlock_feelerWidth$$1_stroke$$119$$
};
D.$DvtTimelineSeries$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$DvtTimelineSeries$$.prototype.$getLabelStyle$ = (0,D.$JSCompiler_get$$)("$_labelStyle$");
D.$DvtTimelineSeries$$.prototype.$getEmptyText$ = (0,D.$JSCompiler_get$$)("$_emptyText$");
D.$JSCompiler_StaticMethods_adjustFeelers$$ = function $$JSCompiler_StaticMethods_adjustFeelers$$$($JSCompiler_StaticMethods_adjustFeelers$self$$) {
  if($JSCompiler_StaticMethods_adjustFeelers$self$$.$_isInverted$) {
    var $durationSign$$ = 1
  }else {
    if($durationSign$$ = -1, $JSCompiler_StaticMethods_adjustFeelers$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustFeelers$self$$.$Height$) {
      for(var $durationSize$$2_heightDiff$$ = $JSCompiler_StaticMethods_adjustFeelers$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustFeelers$self$$.$Height$, $i$$879$$ = 0;$i$$879$$ < $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$.length;$i$$879$$++) {
        var $block$$4_feelers$$ = $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$[$i$$879$$];
        if($block$$4_feelers$$ = $block$$4_feelers$$.$feelers$) {
          for(var $count$$24$$ = $block$$4_feelers$$.$getNumChildren$(), $j$$127$$ = 0;$j$$127$$ < $count$$24$$;$j$$127$$++) {
            var $feeler$$3$$ = $block$$4_feelers$$.$getChildAt$($j$$127$$);
            $feeler$$3$$.$setTranslateY$($feeler$$3$$.$getTranslateY$() + $durationSize$$2_heightDiff$$)
          }
        }
      }
    }
  }
  for($i$$879$$ = 0;$i$$879$$ < $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$.length;$i$$879$$++) {
    $block$$4_feelers$$ = $JSCompiler_StaticMethods_adjustFeelers$self$$.$_blocks$[$i$$879$$];
    $block$$4_feelers$$ = $block$$4_feelers$$.$feelers$;
    $count$$24$$ = $block$$4_feelers$$.$getNumChildren$();
    for($j$$127$$ = 0;$j$$127$$ < $count$$24$$;$j$$127$$++) {
      $feeler$$3$$ = $block$$4_feelers$$.$getChildAt$($j$$127$$), ($durationSize$$2_heightDiff$$ = $feeler$$3$$.$_node$.$_durationSize$) && $feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $durationSize$$2_heightDiff$$ * $durationSign$$)
    }
  }
};
D.$JSCompiler_StaticMethods_adjustDurations$$ = function $$JSCompiler_StaticMethods_adjustDurations$$$($JSCompiler_StaticMethods_adjustDurations$self$$) {
  for(var $sizeDiff$$1$$ = $JSCompiler_StaticMethods_adjustDurations$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustDurations$self$$.$_size$ ? $JSCompiler_StaticMethods_adjustDurations$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustDurations$self$$.$_size$ : 0, $i$$880$$ = 0;$i$$880$$ < $JSCompiler_StaticMethods_adjustDurations$self$$.$_blocks$.length;$i$$880$$++) {
    for(var $durations$$ = $JSCompiler_StaticMethods_adjustDurations$self$$.$_blocks$[$i$$880$$].$durations$, $count$$25$$ = $durations$$.$getNumChildren$(), $j$$128$$ = 0;$j$$128$$ < $count$$25$$;$j$$128$$++) {
      var $duration$$109$$ = $durations$$.$getChildAt$($j$$128$$);
      $JSCompiler_StaticMethods_adjustDurations$self$$.$_isVertical$ ? $duration$$109$$.$setTranslateX$($sizeDiff$$1$$) : $duration$$109$$.$setTranslateY$($sizeDiff$$1$$)
    }
  }
};
D.$JSCompiler_StaticMethods_adjustItems$$ = function $$JSCompiler_StaticMethods_adjustItems$$$($JSCompiler_StaticMethods_adjustItems$self$$) {
  if($JSCompiler_StaticMethods_adjustItems$self$$.$_maxOverflowValue$ > $JSCompiler_StaticMethods_adjustItems$self$$.$_size$) {
    for(var $sizeDiff$$2$$ = $JSCompiler_StaticMethods_adjustItems$self$$.$_maxOverflowValue$ - $JSCompiler_StaticMethods_adjustItems$self$$.$_size$, $i$$881$$ = 0;$i$$881$$ < $JSCompiler_StaticMethods_adjustItems$self$$.$_blocks$.length;$i$$881$$++) {
      for(var $block$$6$$ = $JSCompiler_StaticMethods_adjustItems$self$$.$_blocks$[$i$$881$$], $count$$26$$ = $block$$6$$.$getNumChildren$(), $j$$129$$ = 2;$j$$129$$ < $count$$26$$;$j$$129$$++) {
        var $elem$$69$$ = $block$$6$$.$getChildAt$($j$$129$$);
        $JSCompiler_StaticMethods_adjustItems$self$$.$_isVertical$ ? $elem$$69$$.$setTranslateX$($elem$$69$$.$getTranslateX$() + $sizeDiff$$2$$) : $elem$$69$$.$setTranslateY$($elem$$69$$.$getTranslateY$() + $sizeDiff$$2$$)
      }
    }
    $JSCompiler_StaticMethods_adjustItems$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$.$setTranslateX$(0 - $sizeDiff$$2$$) : $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_adjustItems$self$$.$_canvas$.$setTranslateY$(0 - $sizeDiff$$2$$)
  }
};
D.$DvtTimelineSeries$$.prototype.$getStyle$ = function $$DvtTimelineSeries$$$$$getStyle$$($key$$128_style$$116$$) {
  $key$$128_style$$116$$ = this.$_defaultStyles$[$key$$128_style$$116$$];
  return $key$$128_style$$116$$ instanceof D.$DvtCSSStyle$$ ? $key$$128_style$$116$$.$clone$() : $key$$128_style$$116$$
};
D.$DvtTimelineSeriesActionEvent$$ = function $$DvtTimelineSeriesActionEvent$$$($action$$30$$, $itemId$$14$$) {
  D.$DvtTimelineSeriesActionEvent$$.$superclass$.constructor.call(this, "action", $action$$30$$, $itemId$$14$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineSeriesActionEvent", D.$DvtTimelineSeriesActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesActionEvent$$, D.$DvtActionEvent$$, "DvtTimelineSeriesActionEvent");
D.$DvtTimelineSeries$$.prototype.$isVertical$ = (0,D.$JSCompiler_get$$)("$_isVertical$");
D.$DvtTimelineSeriesItem$$ = function $$DvtTimelineSeriesItem$$$($context$$620$$, $styles$$17$$, $id$$301$$) {
  this.Init($context$$620$$, $styles$$17$$, $id$$301$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesItem$$, D.$DvtContainer$$, "DvtTimelineSeriesItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$621$$, $styles$$18$$, $id$$302$$) {
  D.$DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$621$$, "g", $id$$302$$);
  this.$_styles$ = $styles$$18$$
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$3$$) {
  this.$_isSelected$ != $isSelected$$3$$ && ((this.$_isSelected$ = $isSelected$$3$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$2$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$3$$) {
  this.$_isSelected$ && $isFocused$$3$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($feelerColor$$2_feelerStroke$$2_state$$102$$) {
  var $feeler$$4_item$$60$$ = this.$_node$, $duration$$110_itemElem$$ = $feeler$$4_item$$60$$.$_displayable$;
  if($duration$$110_itemElem$$ != D.$JSCompiler_alias_NULL$$) {
    var $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$ = $duration$$110_itemElem$$.$getChildAt$(0), $bubbleInner_feelerWidth$$2$$ = $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$.$getChildAt$(0), $duration$$110_itemElem$$ = $feeler$$4_item$$60$$.$_durationBar$;
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$.$setSolidFill$(this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "bc"));
    var $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "bsc"), $bubbleStrokeWidth$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "bsw"), $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$ = new D.$DvtSolidStroke$$($bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$);
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$.$setStroke$($bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$);
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "bisc");
    $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "bisw");
    $bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$ = new D.$DvtSolidStroke$$($bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth_bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner_feelerWidth$$2$$.$setStroke$($bubble$$2_bubbleInnerStroke_bubbleInnerStrokeColor$$);
    $bubbleInner_feelerWidth$$2$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "fw");
    $feelerColor$$2_feelerStroke$$2_state$$102$$ = this.$getStyle$($feelerColor$$2_feelerStroke$$2_state$$102$$ + "fc");
    $feelerColor$$2_feelerStroke$$2_state$$102$$ = new D.$DvtSolidStroke$$($feelerColor$$2_feelerStroke$$2_state$$102$$, 1, $bubbleInner_feelerWidth$$2$$);
    ($feeler$$4_item$$60$$ = $feeler$$4_item$$60$$.$_feeler$) && $feeler$$4_item$$60$$.$setStroke$($feelerColor$$2_feelerStroke$$2_state$$102$$);
    $duration$$110_itemElem$$ && $duration$$110_itemElem$$.$setStroke$($feelerColor$$2_feelerStroke$$2_state$$102$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($key$$129_style$$117$$) {
  $key$$129_style$$117$$ = this.$_styles$[$key$$129_style$$117$$];
  return $key$$129_style$$117$$ instanceof D.$DvtCSSStyle$$ ? $key$$129_style$$117$$.$clone$() : $key$$129_style$$117$$
};
D.$DvtTimelineSeriesNode$$ = function $$DvtTimelineSeriesNode$$$($timeline$$4$$, $series$$30$$, $props$$16$$) {
  this.Init($timeline$$4$$, $series$$30$$, $props$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesNode$$, D.$DvtKeyboardNavigable$$, "DvtTimelineSeriesNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$5$$, $seriesIndex$$118$$, $props$$17$$) {
  this.$_timeline$ = $timeline$$5$$;
  this.$_seriesIndex$ = $seriesIndex$$118$$;
  this.$_series$ = $timeline$$5$$.$_series$[$seriesIndex$$118$$];
  this.$_id$ = $props$$17$$.id;
  this.$_rowKey$ = $props$$17$$.$rowKey$;
  this.$_startTime$ = (0,window.parseInt)($props$$17$$.startTime);
  $props$$17$$.$endTime$ && (this.$_endTime$ = (0,window.parseInt)($props$$17$$.$endTime$));
  this.$_title$ = $props$$17$$.title;
  this.$_desc$ = $props$$17$$.$desc$;
  this.$_thumbnail$ = $props$$17$$.$thumbnail$;
  this.$_style$ = $props$$17$$.style;
  this.$_data$ = $props$$17$$.data;
  this.$_action$ = $props$$17$$.action;
  this.$_durationFillColor$ = $props$$17$$.$durationFillColor$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.$getStyle$ = (0,D.$JSCompiler_get$$)("$_style$");
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_endTime$ != D.$JSCompiler_alias_NULL$$ ? "Start Time: " + (new window.Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new window.Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new window.Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_w$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_w$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_h$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_h$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$813$$) {
  var $keyboardHandler$$9_navigableItems$$8$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if($event$$813$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$9_navigableItems$$8$$.$isMultiSelectEvent$($event$$813$$)) {
    return this
  }
  if($keyboardHandler$$9_navigableItems$$8$$.$isNavigationEvent$($event$$813$$)) {
    for(var $keyboardHandler$$9_navigableItems$$8$$ = [], $i$$883$$ = 0;$i$$883$$ < this.$_timeline$.$_series$.length;$i$$883$$++) {
      $keyboardHandler$$9_navigableItems$$8$$.push(this.$_timeline$.$_series$[$i$$883$$].$_items$)
    }
    return(0,D.$DvtTimelineKeyboardHandler$getNextNavigable$$)(this, $event$$813$$, $keyboardHandler$$9_navigableItems$$8$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$61$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$61$$)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  (0,D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$)(this.$_timeline$, this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$18$$ = [];
  this.$isSelectable$() && $states$$18$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getLabel$(), $states$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_isSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_isSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$);
  this.$_updateAriaLabel$();
  if(this.$_timeline$.$_hasOverview$) {
    if($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ = this.getId(), $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$, $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$);
      if($drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ != D.$JSCompiler_alias_NULL$$) {
        $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$ = []);
        var $index$$inline_11681_lastSelectedMarker$$inline_11677$$ = D.$JSCompiler_alias_NULL$$;
        0 < $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$.length && ($index$$inline_11681_lastSelectedMarker$$inline_11677$$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$[$JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$.length - 
        1]);
        $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$.push($drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$);
        $index$$inline_11681_lastSelectedMarker$$inline_11677$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$applyState$($index$$inline_11681_lastSelectedMarker$$inline_11677$$, "_s");
        $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$applyState$($drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$, "_as")
      }
    }else {
      if($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$ = this.$_timeline$.$_overview$, $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ = this.getId(), $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$, 
      $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$), $drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
        for(var $index$$inline_11681_lastSelectedMarker$$inline_11677$$ = -1, $i$$inline_11682$$ = 0;$i$$inline_11682$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$.length;$i$$inline_11682$$++) {
          if($drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$[$i$$inline_11682$$]) {
            $index$$inline_11681_lastSelectedMarker$$inline_11677$$ = $i$$inline_11682$$;
            break
          }
        }
        -1 != $index$$inline_11681_lastSelectedMarker$$inline_11677$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$applyState$($drawable$$inline_9058_drawable$$inline_9062_itemId$$inline_9057_itemId$$inline_9061$$, "_"), $JSCompiler_StaticMethods_selSelectItem$self$$inline_9056_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9060_isSelected$$4$$.$_selectedMarkers$.splice($index$$inline_11681_lastSelectedMarker$$inline_11677$$, 
        1))
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_9064_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_highlightItem$self$$inline_9064_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_9064_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_9066_itemId$$inline_9065$$ = this.getId(), $drawable$$inline_9066_itemId$$inline_9065$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_highlightItem$self$$inline_9064_ignoreOverview$$, $drawable$$inline_9066_itemId$$inline_9065$$);
    $drawable$$inline_9066_itemId$$inline_9065$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightMarker$$)($JSCompiler_StaticMethods_highlightItem$self$$inline_9064_ignoreOverview$$, $drawable$$inline_9066_itemId$$inline_9065$$)
  }
  this.$_timeline$.$_isVertical$ && (this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9068_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_9068_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_9068_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_9070_itemId$$inline_9069$$ = this.getId(), $drawable$$inline_9070_itemId$$inline_9069$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9068_ignoreOverview$$1$$, $drawable$$inline_9070_itemId$$inline_9069$$);
    $drawable$$inline_9070_itemId$$inline_9069$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9068_ignoreOverview$$1$$, $drawable$$inline_9070_itemId$$inline_9069$$)
  }
  this.$_timeline$.$_isVertical$ && (this.$_index$ && !this.$_isSelected$) && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtTimelineSeriesParser$$ = function $$DvtTimelineSeriesParser$$$($timelineSeries$$) {
  this.Init($timelineSeries$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesParser$$, D.$DvtTimeComponentParser$$, "DvtTimelineSeriesParser");
D.$DvtTimelineSeriesParser$$.prototype.parse = function $$DvtTimelineSeriesParser$$$$parse$($itemStyleDefaults_options$$270$$) {
  var $defaultStyles$$2_itemArray$$inline_9074$$ = [], $ret$$105_seriesItems$$inline_9075$$ = $itemStyleDefaults_options$$270$$.items;
  if($ret$$105_seriesItems$$inline_9075$$) {
    for(var $itemEnabledFillColor_j$$inline_9076$$ = 0;$itemEnabledFillColor_j$$inline_9076$$ < $ret$$105_seriesItems$$inline_9075$$.length;$itemEnabledFillColor_j$$inline_9076$$++) {
      $defaultStyles$$2_itemArray$$inline_9074$$.push($ret$$105_seriesItems$$inline_9075$$[$itemEnabledFillColor_j$$inline_9076$$])
    }
  }
  $ret$$105_seriesItems$$inline_9075$$ = D.$DvtTimelineSeriesParser$$.$superclass$.parse.call(this, $itemStyleDefaults_options$$270$$);
  $ret$$105_seriesItems$$inline_9075$$.scale = $itemStyleDefaults_options$$270$$.scale;
  $ret$$105_seriesItems$$inline_9075$$.$timeAxis$ = $itemStyleDefaults_options$$270$$.timeAxis;
  $ret$$105_seriesItems$$inline_9075$$.label = $itemStyleDefaults_options$$270$$.label;
  $ret$$105_seriesItems$$inline_9075$$.$emptyText$ = $itemStyleDefaults_options$$270$$.emptyText;
  $ret$$105_seriesItems$$inline_9075$$.$items$ = this.$_parseDataNode$($itemStyleDefaults_options$$270$$.timeline, $itemStyleDefaults_options$$270$$.index, $defaultStyles$$2_itemArray$$inline_9074$$);
  $ret$$105_seriesItems$$inline_9075$$.$rtl$ = "false";
  var $defaultStyles$$2_itemArray$$inline_9074$$ = {}, $itemSelectedFillColor$$ = $itemEnabledFillColor_j$$inline_9076$$ = "#ffffff", $itemActiveSelectedFillColor$$ = "#ffffff", $itemHighlightedFillColor$$ = "#ffffff", $itemEnabledStrokeColor$$ = "#648baf", $itemSelectedStrokeColor$$ = "#000000", $itemActiveSelectedStrokeColor$$ = "#000000", $itemHighlightedStrokeColor$$ = "#85bbe7", $feelerEnabledStrokeColor$$ = "#648baf", $feelerSelectedStrokeColor$$ = "#000000", $feelerActiveSelectedStrokeColor$$ = 
  "#000000", $feelerHighlightedStrokeColor$$ = "#85bbe7", $itemTitleStyle$$ = new D.$DvtCSSStyle$$("color:#000000;white-space:nowrap;font-size:12px;font-weight:bold;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;"), $itemDescriptionStyle$$ = new D.$DvtCSSStyle$$("color:#084B8A;white-space:nowrap;font-size:12px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;"), $referenceObjectStyle$$ = new D.$DvtCSSStyle$$("color:#ff591f");
  if($itemStyleDefaults_options$$270$$ = $itemStyleDefaults_options$$270$$.itemStyleDefaults) {
    var $style$$118$$ = $itemStyleDefaults_options$$270$$.backgroundColor;
    $style$$118$$ && ($itemEnabledFillColor_j$$inline_9076$$ = $style$$118$$);
    ($style$$118$$ = $itemStyleDefaults_options$$270$$.hoverBackgroundColor) && ($itemHighlightedFillColor$$ = $style$$118$$);
    if($style$$118$$ = $itemStyleDefaults_options$$270$$.selectedBackgroundColor) {
      $itemActiveSelectedFillColor$$ = $itemSelectedFillColor$$ = $style$$118$$
    }
    if($style$$118$$ = $itemStyleDefaults_options$$270$$.borderColor) {
      $feelerEnabledStrokeColor$$ = $itemEnabledStrokeColor$$ = $style$$118$$
    }
    if($style$$118$$ = $itemStyleDefaults_options$$270$$.hoverBorderColor) {
      $feelerHighlightedStrokeColor$$ = $itemHighlightedStrokeColor$$ = $style$$118$$
    }
    if($style$$118$$ = $itemStyleDefaults_options$$270$$.selectedBorderColor) {
      $feelerActiveSelectedStrokeColor$$ = $feelerSelectedStrokeColor$$ = $itemActiveSelectedStrokeColor$$ = $itemSelectedStrokeColor$$ = $style$$118$$
    }
    ($style$$118$$ = $itemStyleDefaults_options$$270$$.titleStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($itemTitleStyle$$, $style$$118$$);
    ($style$$118$$ = $itemStyleDefaults_options$$270$$.descriptionStyle) && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($itemDescriptionStyle$$, $style$$118$$)
  }
  $defaultStyles$$2_itemArray$$inline_9074$$.enfw = 1;
  $defaultStyles$$2_itemArray$$inline_9074$$.selfw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.aselfw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.hlfw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.enfc = $feelerEnabledStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.selfc = $feelerSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.aselfc = $feelerActiveSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.hlfc = $feelerHighlightedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.enbc = $itemEnabledFillColor_j$$inline_9076$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.selbc = $itemSelectedFillColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.aselbc = $itemActiveSelectedFillColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.hlbc = $itemHighlightedFillColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.enbsc = $itemEnabledStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.selbsc = $itemSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.aselbsc = $itemActiveSelectedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.hlbsc = $itemHighlightedStrokeColor$$;
  $defaultStyles$$2_itemArray$$inline_9074$$.enbsw = 1;
  $defaultStyles$$2_itemArray$$inline_9074$$.selbsw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.aselbsw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.hlbsw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.enbisc = "rgba(249,249,249,0)";
  $defaultStyles$$2_itemArray$$inline_9074$$.selbisc = "rgba(249,249,249,0)";
  $defaultStyles$$2_itemArray$$inline_9074$$.aselbisc = "#e4f0fa";
  $defaultStyles$$2_itemArray$$inline_9074$$.hlbisc = "#e4f0fa";
  $defaultStyles$$2_itemArray$$inline_9074$$.enbisw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.selbisw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.aselbisw = 2;
  $defaultStyles$$2_itemArray$$inline_9074$$.hlbisw = 2;
  $ret$$105_seriesItems$$inline_9075$$.$itemTitleStyle$ = $itemTitleStyle$$;
  $ret$$105_seriesItems$$inline_9075$$.$itemDescriptionStyle$ = $itemDescriptionStyle$$;
  $ret$$105_seriesItems$$inline_9075$$.$referenceObjectStyle$ = $referenceObjectStyle$$;
  $ret$$105_seriesItems$$inline_9075$$.$defaultStyles$ = $defaultStyles$$2_itemArray$$inline_9074$$;
  return $ret$$105_seriesItems$$inline_9075$$
};
D.$DvtTimelineSeriesParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseRootAttributes$$() {
  var $ret$$106$$ = D.$DvtTimelineSeriesParser$$.$superclass$.$ParseRootAttributes$.call(this);
  $ret$$106$$.start = this.$_startTime$.getTime();
  $ret$$106$$.end = this.$_endTime$.getTime();
  return $ret$$106$$
};
D.$DvtTimelineSeriesParser$$.prototype.$_parseDataNode$ = function $$DvtTimelineSeriesParser$$$$$_parseDataNode$$($timeline$$6$$, $seriesIndex$$119$$, $data$$118$$) {
  var $treeNodes$$1$$ = [];
  if($data$$118$$) {
    for(var $i$$884$$ = 0;$i$$884$$ < $data$$118$$.length;$i$$884$$++) {
      var $props$$18_treeNode$$2$$ = this.$ParseNodeAttributes$($data$$118$$[$i$$884$$]);
      if($props$$18_treeNode$$2$$) {
        $props$$18_treeNode$$2$$ = new D.$DvtTimelineSeriesNode$$($timeline$$6$$, $seriesIndex$$119$$, $props$$18_treeNode$$2$$);
        $props$$18_treeNode$$2$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
        for(var $startTime$$11$$ = $props$$18_treeNode$$2$$.$_startTime$, $add$$1$$ = D.$JSCompiler_alias_TRUE$$, $j$$131$$ = 0;$j$$131$$ < $treeNodes$$1$$.length;$j$$131$$++) {
          if($startTime$$11$$ < $treeNodes$$1$$[$j$$131$$].$_startTime$) {
            $treeNodes$$1$$.splice($j$$131$$, 0, $props$$18_treeNode$$2$$);
            $add$$1$$ = D.$JSCompiler_alias_FALSE$$;
            break
          }
        }
        $add$$1$$ && $treeNodes$$1$$.push($props$$18_treeNode$$2$$)
      }
    }
  }
  return $treeNodes$$1$$
};
D.$DvtTimelineSeriesParser$$.prototype.$ParseNodeAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseNodeAttributes$$($data$$119$$) {
  var $ret$$107$$ = {};
  $ret$$107$$.id = $data$$119$$.id;
  $ret$$107$$.$rowKey$ = $ret$$107$$.id;
  $ret$$107$$.startTime = this.getDate($data$$119$$.start);
  $ret$$107$$.$endTime$ = this.getDate($data$$119$$.end);
  if(($ret$$107$$.$endTime$ ? $ret$$107$$.$endTime$ : $ret$$107$$.startTime) < this.$_startTime$.getTime() || $ret$$107$$.startTime > this.$_endTime$.getTime()) {
    return D.$JSCompiler_alias_NULL$$
  }
  $ret$$107$$.title = $data$$119$$.title;
  $ret$$107$$.$desc$ = $data$$119$$.description;
  $ret$$107$$.$thumbnail$ = $data$$119$$.thumbnail;
  $ret$$107$$.data = $data$$119$$;
  $ret$$107$$.style = $data$$119$$.style;
  $ret$$107$$.action = $data$$119$$.action;
  $ret$$107$$.$durationFillColor$ = $data$$119$$.durationFillColor;
  return $ret$$107$$
};
D.$DvtTimelineViewportChangeEvent$$ = function $$DvtTimelineViewportChangeEvent$$$($type$$256$$, $viewportStart$$1$$, $viewportEnd$$1$$, $minorAxisScale$$) {
  D.$DvtTimelineViewportChangeEvent$$.$superclass$.Init.call(this, $type$$256$$);
  this.$_viewportStart$ = $viewportStart$$1$$;
  this.$_viewportEnd$ = $viewportEnd$$1$$;
  this.$_minorAxisScale$ = $minorAxisScale$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineViewportChangeEvent", D.$DvtTimelineViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtTimelineViewportChangeEvent");
D.$DvtTimelineViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportStart$ = (0,D.$JSCompiler_get$$)("$_viewportStart$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getViewportStart = D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportStart$;
D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportEnd$ = (0,D.$JSCompiler_get$$)("$_viewportEnd$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getViewportEnd = D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportEnd$;
D.$DvtTimelineViewportChangeEvent$$.prototype.$getMinorAxisScale$ = (0,D.$JSCompiler_get$$)("$_minorAxisScale$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getMinorAxisScale = D.$DvtTimelineViewportChangeEvent$$.prototype.$getMinorAxisScale$;
  return D;
});