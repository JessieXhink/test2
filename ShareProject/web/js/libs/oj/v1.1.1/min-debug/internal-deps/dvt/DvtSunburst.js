/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$4$$, $bComplete$$) {
  this.Init($bComplete$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$4$$ % 360
};
(0,D.$goog$exportPath_$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtSunburst$$ = function $$DvtSunburst$$$($context$$568$$, $callback$$149$$, $callbackObj$$99$$) {
  this.Init($context$$568$$, $callback$$149$$, $callbackObj$$99$$)
};
(0,D.$goog$exportPath_$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseTreeView$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$569$$, $callback$$150$$, $callbackObj$$100$$) {
  return new D.$DvtSunburst$$($context$$569$$, $callback$$150$$, $callbackObj$$100$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$570$$, $callback$$151$$, $callbackObj$$101$$) {
  D.$DvtSunburst$$.$superclass$.Init.call(this, $context$$570$$, $callback$$151$$, $callbackObj$$101$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$247_props$$4$$) {
  D.$DvtSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $options$$247_props$$4$$);
  $options$$247_props$$4$$ = this.$getOptions$();
  this.$_rotateCursor$ = (0,D.$DvtAgent$isPlatformIE$$)() ? "url(" + $options$$247_props$$4$$._resources.rotateCursor + "), auto" : "url(" + $options$$247_props$$4$$._resources.rotateCursor + ") 8 8, auto";
  this.$_startAngle$ = (360 - $options$$247_props$$4$$.startAngle) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$);
  "auto" == $options$$247_props$$4$$.animationOnDisplay && ($options$$247_props$$4$$.animationOnDisplay = "fan")
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$116$$) {
  var $bufferSpace$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$116$$.$w$, $availSpace$$116$$.$h$) / 400), 2);
  $availSpace$$116$$.x += $bufferSpace$$;
  $availSpace$$116$$.y += $bufferSpace$$;
  $availSpace$$116$$.$w$ -= 2 * $bufferSpace$$;
  $availSpace$$116$$.$h$ -= 2 * $bufferSpace$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$116$$);
  this.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$(this, $availSpace$$116$$, this.$_legendSource$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$116$$.$w$, $availSpace$$116$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$getOptions$().sorting)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$174$$, $bounds$$145$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$174$$);
  this.$_breadcrumbs$ && $container$$174$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$174$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$145$$.x + $bounds$$145$$.$w$ / 2, $bounds$$145$$.y + $bounds$$145$$.$h$ / 2);
  if("off" != this.$getOptions$().rotation && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$11_nodeContainer$$12_rotationShape$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 60 : 15, $buffer$$11_nodeContainer$$12_rotationShape$$ = new D.$DvtCircle$$(this.$getCtx$(), $bounds$$145$$.x + $bounds$$145$$.$w$ / 2, $bounds$$145$$.y + $bounds$$145$$.$h$ / 2, this.$_totalRadius$ + $buffer$$11_nodeContainer$$12_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$11_nodeContainer$$12_rotationShape$$);
    $buffer$$11_nodeContainer$$12_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$174$$.$addChild$($buffer$$11_nodeContainer$$12_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$11_nodeContainer$$12_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$11_nodeContainer$$12_rotationShape$$ = new D.$DvtContainer$$(this.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$11_nodeContainer$$12_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$174$$.$addChild$($buffer$$11_nodeContainer$$12_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    (0,D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$)(this, this.$_root$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$174$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$61$$, $context$$571$$, $callback$$152$$, $callbackObj$$102$$) {
  return new D.$DvtSunburstEventManager$$($view$$61$$, $context$$571$$, $callback$$152$$, $callbackObj$$102$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$175$$, $bounds$$146$$) {
  if("fan" === this.$getOptions$().animationOnDisplay && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$37$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$37$$.$_animator$, "typeNumber", this, this.$__getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$37$$
  }
  return D.$DvtSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$175$$, $bounds$$146$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$95$$ = D.$DvtSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$95$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$95$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$95$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$117_selectedNodes$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$117_selectedNodes$$);
    this.$Render$(this.$_container$, $availSpace$$117_selectedNodes$$);
    for(var $availSpace$$117_selectedNodes$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$775$$ = 0;$i$$775$$ < $availSpace$$117_selectedNodes$$.length;$i$$775$$++) {
      $availSpace$$117_selectedNodes$$[$i$$775$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * window.Math.PI && this.$_animateAngleExtent$(2 * window.Math.PI);
  D.$DvtSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$78$$) {
  this.$_selectedLayer$.$addChild$($displayable$$78$$);
  !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$__getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$3$$) {
  this.$_angleExtent$ = $extent$$3$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$54$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$54$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new D.$DvtRect$$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$__getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
};
D.$JSCompiler_StaticMethods___rotate$$ = function $$JSCompiler_StaticMethods___rotate$$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$) {
  var $change$$1$$ = $newAngle$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -window.Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * window.Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > window.Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * window.Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)($JSCompiler_StaticMethods___rotate$self$$.$_root$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$(360 - window.Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / window.Math.PI), D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods___endRotation$$ = function $$JSCompiler_StaticMethods___endRotation$$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = D.$JSCompiler_alias_NULL$$;
  var $degrees$$8$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$255$$, $y$$229$$) {
  return window.Math.atan2($y$$229$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$255$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$DvtSunburst$$.prototype.$GetComponentDescription$ = function $$DvtSunburst$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "SUNBURST")
};
D.$DvtSunburst$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSunburstBundle");
D.$DvtSunburst$$.prototype.$CreateNode$ = function $$DvtSunburst$$$$$CreateNode$$($nodeOptions$$1$$) {
  return new D.$DvtSunburstNode$$(this, $nodeOptions$$1$$)
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$1$$, $props$$5$$) {
  this.Init($sunburst$$1$$, $props$$5$$);
  var $nodeDefaults$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_labelDisplay$ = $props$$5$$.labelDisplay ? $props$$5$$.labelDisplay : $nodeDefaults$$.labelDisplay;
  this.$_labelHalign$ = $props$$5$$.labelHalign ? $props$$5$$.labelHalign : $nodeDefaults$$.labelHalign;
  this.$_radius$ = $props$$5$$.radius
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$DvtSunburstNode$$.prototype.$render$ = function $$DvtSunburstNode$$$$$render$$($container$$176$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$176$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$176$$.$addChild$(this.$_shape$);
    var $afRoot$$10_template$$24$$ = (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this);
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot$$10_template$$24$$) {
      var $dims$$65_elAttrs$$1_sqrt2$$ = window.Math.sqrt(2), $aw$$3_matrix$$21$$ = this.$_outerRadius$ * $dims$$65_elAttrs$$1_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $dims$$65_elAttrs$$1_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $dims$$65_elAttrs$$1_sqrt2$$ + 2;
      var $dims$$65_elAttrs$$1_sqrt2$$ = this.$getOptions$()._cf, $afContext$$62$$ = this.$_view$.$_afContext$;
      $afContext$$62$$.$_elContext$ = $dims$$65_elAttrs$$1_sqrt2$$;
      0 < $aw$$3_matrix$$21$$ && 0 < $aw$$3_matrix$$21$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$62$$, $aw$$3_matrix$$21$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$62$$, $aw$$3_matrix$$21$$), $afContext$$62$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$10_template$$24$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$62$$, $afRoot$$10_template$$24$$, this.$_shape$), $dims$$65_elAttrs$$1_sqrt2$$ = 
      $afRoot$$10_template$$24$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$10_template$$24$$, this.$_x$ + ($aw$$3_matrix$$21$$ - $dims$$65_elAttrs$$1_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$3_matrix$$21$$ - $dims$$65_elAttrs$$1_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($dims$$65_elAttrs$$1_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $dims$$65_elAttrs$$1_sqrt2$$.x, $dims$$65_elAttrs$$1_sqrt2$$.y, $dims$$65_elAttrs$$1_sqrt2$$.$w$, $dims$$65_elAttrs$$1_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$3_matrix$$21$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw$$3_matrix$$21$$) || this.$_textBackground$.$setMatrix$($aw$$3_matrix$$21$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$();
    this.$renderChildren$($container$$176$$)
  }
};
D.$DvtSunburstNode$$.prototype.$setSelected$ = function $$DvtSunburstNode$$$$$setSelected$$($selected$$41$$) {
  D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$41$$);
  this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$showHoverEffect$ = function $$DvtSunburstNode$$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$hideHoverEffect$ = function $$DvtSunburstNode$$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$ = function $$JSCompiler_StaticMethods_isExpandCollapseEnabled$$$($JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$) {
  return"insert" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$ || "insertAndReplace" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$
};
D.$DvtSunburstNode$$.prototype.$getNextNavigable$ = function $$DvtSunburstNode$$$$$getNextNavigable$$($event$$734_next$$16$$) {
  var $keyCode$$45_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$8$$, $i$$inline_8074_idx$$34$$, $root$$28$$;
  if($event$$734_next$$16$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$734_next$$16$$)
  }
  $keyCode$$45_lastVisitedChild$$ = $event$$734_next$$16$$.keyCode;
  if(32 == $keyCode$$45_lastVisitedChild$$ && $event$$734_next$$16$$.ctrlKey) {
    return this
  }
  for($root$$28$$ = this;$root$$28$$.$_parent$;) {
    $root$$28$$ = $root$$28$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$8$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$28$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_8074_idx$$34$$ = 0;$i$$inline_8074_idx$$34$$ < $lastVisitedMidAngle_navigables$$8$$.length;$i$$inline_8074_idx$$34$$++) {
      if(this === $lastVisitedMidAngle_navigables$$8$$[$i$$inline_8074_idx$$34$$]) {
        break a
      }
    }
    $i$$inline_8074_idx$$34$$ = -1
  }
  var $midAngle$$1$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$1$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$1$$);
  switch($keyCode$$45_lastVisitedChild$$) {
    case 38:
      if(this === $root$$28$$ || 180 < $midAngle$$1$$) {
        if($keyCode$$45_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$8$$ = $keyCode$$45_lastVisitedChild$$.$_startAngle$ + $keyCode$$45_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$8$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$8$$), 180 < $lastVisitedMidAngle_navigables$$8$$) {
            return $keyCode$$45_lastVisitedChild$$
          }
        }
        $event$$734_next$$16$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$734_next$$16$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$734_next$$16$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$28$$ || 0 <= $midAngle$$1$$ && 180 >= $midAngle$$1$$) {
        if($keyCode$$45_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$8$$ = $keyCode$$45_lastVisitedChild$$.$_startAngle$ + $keyCode$$45_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$8$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$8$$), 0 <= $lastVisitedMidAngle_navigables$$8$$ && 180 >= $lastVisitedMidAngle_navigables$$8$$) {
            return $keyCode$$45_lastVisitedChild$$
          }
        }
        $event$$734_next$$16$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$734_next$$16$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$734_next$$16$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$734_next$$16$$ = 1 == $lastVisitedMidAngle_navigables$$8$$.length ? this : 0 == $i$$inline_8074_idx$$34$$ ? $lastVisitedMidAngle_navigables$$8$$[$lastVisitedMidAngle_navigables$$8$$.length - 1] : $lastVisitedMidAngle_navigables$$8$$[$i$$inline_8074_idx$$34$$ - 1];
      break;
    case 39:
      $event$$734_next$$16$$ = 1 == $lastVisitedMidAngle_navigables$$8$$.length ? this : $i$$inline_8074_idx$$34$$ == $lastVisitedMidAngle_navigables$$8$$.length - 1 ? $lastVisitedMidAngle_navigables$$8$$[0] : $lastVisitedMidAngle_navigables$$8$$[$i$$inline_8074_idx$$34$$ + 1];
      break;
    default:
      $event$$734_next$$16$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$734_next$$16$$);
  return $event$$734_next$$16$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$17$$) {
  var $parent$$81$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$17$$.$_parent$;
  $parent$$81$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$17$$ = $parent$$81$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$81$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$17$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$17$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg$$1_rad$$2$$) {
  $deg$$1_rad$$2$$ = D.$DvtMath$$.$radsToDegrees$($deg$$1_rad$$2$$);
  0 > $deg$$1_rad$$2$$ ? $deg$$1_rad$$2$$ += 360 : 360 < $deg$$1_rad$$2$$ && ($deg$$1_rad$$2$$ -= 360);
  return $deg$$1_rad$$2$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$149$$ = this.$_shape$.$getDimensions$(), $point$$57$$ = new D.$DvtPoint$$($bounds$$149$$.x, $bounds$$149$$.y), $point$$57$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$57$$);
    $bounds$$149$$.x = $point$$57$$.x;
    $bounds$$149$$.y = $point$$57$$.y;
    return $bounds$$149$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$10$$, $outerRadius$$8$$, $startAngle$$20$$, $angleExtent$$18$$) {
  this.$_innerRadius$ = $innerRadius$$10$$;
  this.$_outerRadius$ = $outerRadius$$8$$;
  this.$_startAngle$ = $startAngle$$20$$;
  this.$_angleExtent$ = $angleExtent$$18$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$($endStartAngle_endState$$16$$) {
  var $r$$86$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$26$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$60$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$), $startAngle$$21$$ = this.$_startAngle$;
  $endStartAngle_endState$$16$$ && !(0,window.isNaN)($endStartAngle_endState$$16$$[2]) && ($endStartAngle_endState$$16$$ = $endStartAngle_endState$$16$$[2], $endStartAngle_endState$$16$$ - this.$_startAngle$ > window.Math.PI ? $startAngle$$21$$ += D.$DvtSunburstNode$TWO_PI$$ : this.$_startAngle$ - $endStartAngle_endState$$16$$ > window.Math.PI && ($startAngle$$21$$ -= D.$DvtSunburstNode$TWO_PI$$));
  return[this.$_innerRadius$, this.$_outerRadius$, $startAngle$$21$$, this.$_angleExtent$, $r$$86$$, $g$$26$$, $b$$60$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$64$$) {
  this.$setLayoutParams$($params$$64$$[0], $params$$64$$[1], $params$$64$$[2], $params$$64$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$64$$[4]), window.Math.round($params$$64$$[5]), window.Math.round($params$$64$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$51$$, $oldNode$$18$$) {
  $oldNode$$18$$.$_hasLayout$ && 0 < $oldNode$$18$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$51$$, $oldNode$$18$$) : this.$animateInsert$($handler$$51$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$258$$, $y$$232$$) {
  var $angle$$55$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$258$$, $y$$232$$);
  return window.Math.sqrt($x$$258$$ * $x$$258$$ + $y$$232$$ * $y$$232$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$258$$ * $x$$258$$ + $y$$232$$ * $y$$232$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$55$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$56$$) {
  for(;$angle$$56$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$56$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$56$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$56$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$56$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$56$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$26$$, $angle$$57$$) {
  return{x:window.Math.cos($angle$$57$$) * $radius$$26$$, y:window.Math.sin($angle$$57$$) * $radius$$26$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$260$$, $y$$234$$) {
  var $angle$$58$$ = window.Math.atan2($y$$234$$, $x$$260$$);
  0 > $angle$$58$$ ? $angle$$58$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$58$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$58$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$58$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd$$16_shape$$91$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd$$16_shape$$91$$ = new D.$DvtPath$$(this.$_view$.$getCtx$(), $cmd$$16_shape$$91$$);
  this.$_view$.$__getEventManager$().$associate$($cmd$$16_shape$$91$$, this);
  $cmd$$16_shape$$91$$.$setAlpha$(this.$getAlpha$());
  $cmd$$16_shape$$91$$.$setFill$(this.$GetFill$());
  var $nodeDefaults$$1$$ = this.$_view$.$getOptions$().nodeDefaults;
  $cmd$$16_shape$$91$$.$setStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.borderColor, 0.3));
  $cmd$$16_shape$$91$$.$setHoverStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.hoverColor, 1, 3));
  $cmd$$16_shape$$91$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.selectedInnerColor, 1, 1.5), new D.$DvtSolidStroke$$($nodeDefaults$$1$$.selectedOuterColor, 1, 3.5));
  $cmd$$16_shape$$91$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($nodeDefaults$$1$$.hoverColor, 1, 3));
  $cmd$$16_shape$$91$$.$setSelectable$(this.$isSelectable$());
  this.$_bArtificialRoot$ && ($cmd$$16_shape$$91$$.$setAlpha$(0.001), $cmd$$16_shape$$91$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd$$16_shape$$91$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$17_p1$$9$$, $p2$$8$$, $p3$$3$$, $p4$$3$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$17_p1$$9$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$8$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$17_p1$$9$$ = D.$DvtPathUtils$$.moveTo($cmd$$17_p1$$9$$.x, $cmd$$17_p1$$9$$.y) + 
  D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$8$$.x, $p2$$8$$.y) + D.$DvtPathUtils$$.lineTo($p3$$3$$.x, $p3$$3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 
  0, $p4$$3$$.x, $p4$$3$$.y) + D.$DvtPathUtils$$.closePath()) : ($cmd$$17_p1$$9$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$8$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), 
  $p3$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$17_p1$$9$$ = D.$DvtPathUtils$$.moveTo($cmd$$17_p1$$9$$.x, $cmd$$17_p1$$9$$.y) + 
  D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$8$$.x, $p2$$8$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$17_p1$$9$$.x, $cmd$$17_p1$$9$$.y), 
  0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$17_p1$$9$$ += D.$DvtPathUtils$$.moveTo($p4$$3$$.x, $p4$$3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$3$$.x, $p3$$3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$3$$.x, $p4$$3$$.y)), $cmd$$17_p1$$9$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$17_p1$$9$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$) {
  if(!this.$_textStr$ || (!$JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) || this == this.$_view$.$_root$ && this.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = D.$JSCompiler_alias_FALSE$$;
  if("auto" == this.$_labelDisplay$) {
    if($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = !(0,D.$DvtAgent$isPlatformIE$$)()) {
      (0,D.$DvtAgent$_initialize$$)(), $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = "Windows" == D.$DvtAgent$_os$$
    }
    $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
  }else {
    "rotated" == this.$_labelDisplay$ && ($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = D.$JSCompiler_alias_TRUE$$)
  }
  if($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ && this.$_angleExtent$ < this.$_view$.$_angleExtent$) {
    var $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ = window.Math.max(this.$_innerRadius$, 10), $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$ = this.$_outerRadius$ - $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ - 6, $availHeight$$inline_8081_x1$$inline_8095$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ + 
    6);
    if(6 >= $availHeight$$inline_8081_x1$$inline_8095$$) {
      $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$, 0, 0), $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$), 
      D.$DvtTextUtils$$.$fitText$($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$, $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$, $availHeight$$inline_8081_x1$$inline_8095$$, $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$)) {
        $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$ = ($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ + this.$_outerRadius$) / 2;
        if("inner" == this.$_labelHalign$ || "outer" == this.$_labelHalign$) {
          $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$.$addChild$($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$), $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.$getDimensions$().$w$, "inner" == this.$_labelHalign$ ? $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$ = 
          $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ + 4.5 + $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ / 2 : "outer" == this.$_labelHalign$ && ($anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$ = this.$_outerRadius$ - 4.5 - $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ / 2)
        }
        $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.$alignCenter$();
        $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.$alignMiddle$();
        $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ = $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$;
        $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ = 0 > $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ ? $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$;
        $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ > 0.5 * window.Math.PI && $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ < 1.5 * window.Math.PI && ($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ += window.Math.PI);
        $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.$setRotation$($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$, $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$.x, $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$.y);
        $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$
      }else {
        $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = {x:0, y:0}
    }else {
      if($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$ = 
      (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.x + $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ / 2, $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.x - 
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ / 2, $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.y)) || !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$)) {
        $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$) {
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$, $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.x, $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$);
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$.$alignCenter$();
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$.$alignMiddle$();
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$), $x2$$inline_8096$$ = $availHeight$$inline_8081_x1$$inline_8095$$ = $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.x, $y1$$inline_8097$$ = $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.y - 
      $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$.$h$ / 2, $y2$$inline_8098$$ = $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.y + $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$.$h$ / 2;this.contains($availHeight$$inline_8081_x1$$inline_8095$$, $y1$$inline_8097$$) && this.contains($availHeight$$inline_8081_x1$$inline_8095$$, $y2$$inline_8098$$);) {
        $availHeight$$inline_8081_x1$$inline_8095$$--
      }
      for(;this.contains($x2$$inline_8096$$, $y1$$inline_8097$$) && this.contains($x2$$inline_8096$$, $y2$$inline_8098$$);) {
        $x2$$inline_8096$$++
      }
      $availHeight$$inline_8081_x1$$inline_8095$$ += 3;
      $x2$$inline_8096$$ -= 3;
      $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = 2 * window.Math.min($JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.x - $availHeight$$inline_8081_x1$$inline_8095$$, $x2$$inline_8096$$ - $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$.x);
      $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ < $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$.$w$ && ($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$.$setX$(($availHeight$$inline_8081_x1$$inline_8095$$ + $x2$$inline_8096$$) / 2), $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$ = $x2$$inline_8096$$ - 
      $availHeight$$inline_8081_x1$$inline_8095$$);
      $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$, $JSCompiler_temp$$27_bRotated_text$$inline_8082_textAnchor$$inline_8090_usableSpace$$inline_8099$$, $anchorRadius$$inline_8083_availWidth$$inline_8080_estimatedDims$$inline_8094_rightAngle$$inline_8092$$.$h$, $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$) ? 
      $angle$$inline_8086_approxWidth$$inline_8091_innerStartCoord$$inline_8079_text$$inline_8093$$ : D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$452_actualTextWidth$$inline_8084_container$$178_textAnchor$$inline_8085$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$;
    $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$ = this.$_shape$;
    var $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$ = this.$isDisclosed$();
    if(!$JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$ || !(0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) || !this.$hasChildren$() && $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$) {
      $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$) {
        var $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$ = this.$_view$.$getCtx$(), $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$ = this.$_view$.$getOptions$()._resources, $center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$ = new D.$DvtImage$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, 
        $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$.collapse, 0, 0, 16, 16), $overState$$inline_11326_overState$$inline_11334$$ = new D.$DvtImage$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$.collapseOver, 0, 0, 16, 16), $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$ = this.$_view$.$getCtx$(), $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$ = this.$_view$.$getOptions$()._resources, $center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$ = new D.$DvtImage$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, 
        $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$.expand, 0, 0, 16, 16), $overState$$inline_11326_overState$$inline_11334$$ = new D.$DvtImage$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$.expandOver, 0, 0, 16, 16), $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_11326_overState$$inline_11334$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$);
      $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$ = new D.$DvtButton$$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, $center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$, $overState$$inline_11326_overState$$inline_11334$$, $downState$$inline_11327_downState$$inline_11335_resources$$inline_11324_resources$$inline_11332$$);
      $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, $center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$.x - 8, $center$$inline_8105_upState$$inline_11325_upState$$inline_11333$$.y - 8);
      $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$.$addChild$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$);
      $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isDisclosed$() ? "COLLAPSE" : "EXPAND");
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$));
      $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$ = $JSCompiler_temp$$9308_bDisclosed$$inline_8103_button$$inline_11328_button$$inline_11336_button$$inline_8104_context$$inline_11323_context$$inline_11331$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$359_container$$inline_8102_tooltip$$inline_8106$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$16_cmd$$18$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$16_cmd$$18$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$16_cmd$$18$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$780$$ = 0;$i$$780$$ < $children$$16_cmd$$18$$.length;$i$$780$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$16_cmd$$18$$[$i$$780$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$($event$$735$$) {
  this.$setDisclosed$(!this.$isDisclosed$());
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$ = this.$_view$, $bDisclosed$$inline_8110_nodeOptions$$inline_8111$$ = this.$isDisclosed$(), $id$$inline_11339$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$_navigableIdToFocus$ = $id$$inline_11339$$;
  $bDisclosed$$inline_8110_nodeOptions$$inline_8111$$ ? ($bDisclosed$$inline_8110_nodeOptions$$inline_8111$$ = this.$getOptions$(), $bDisclosed$$inline_8110_nodeOptions$$inline_8111$$.nodes && 0 < $bDisclosed$$inline_8110_nodeOptions$$inline_8111$$.nodes.length && $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$render$($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$getOptions$()), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", 
  this.getId()))) : ($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$render$($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$getOptions$()), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_8108$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId())));
  this.$UpdateAriaLabel$();
  $event$$735$$.stopPropagation()
};
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : (0,D.$JSCompiler_StaticMethods_GetTemplate$$)($JSCompiler_StaticMethods___getRadius$self$$) ? 1 : 0.5
};
D.$DvtSunburstNode$$.prototype.$getAriaLabel$ = function $$DvtSunburstNode$$$$$getAriaLabel$$() {
  var $states$$15$$ = [];
  this.$isSelectable$() && $states$$15$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) && $states$$15$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$15$$)
};
D.$DvtSunburstNode$$.prototype.$UpdateAriaLabel$ = function $$DvtSunburstNode$$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtSunburstNode$$.prototype.$getDataContext$ = function $$DvtSunburstNode$$$$$getDataContext$$() {
  var $dataContext$$6$$ = D.$DvtSunburstNode$$.$superclass$.$getDataContext$.call(this);
  $dataContext$$6$$.radius = (0,D.$JSCompiler_StaticMethods___getRadius$$)(this);
  return $dataContext$$6$$
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$27$$, $startAngle$$18$$, $angleExtent$$16$$, $sorting$$1$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$27$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$27$$, $startAngle$$18$$, $angleExtent$$16$$, $sorting$$1$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$776_node$$292$$, $childStartAngle_startAngle$$19$$, $angleExtent$$17$$, $sorting$$2$$, $children$$14_innerRadius$$9$$) {
  var $outerRadius$$7$$ = $children$$14_innerRadius$$9$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$776_node$$292$$) * $radiusPerDepth$$1$$;
  $i$$776_node$$292$$.$setLayoutParams$($children$$14_innerRadius$$9$$, $outerRadius$$7$$, $childStartAngle_startAngle$$19$$, $angleExtent$$17$$);
  $children$$14_innerRadius$$9$$ = $i$$776_node$$292$$.$getChildNodes$();
  if($children$$14_innerRadius$$9$$ != D.$JSCompiler_alias_NULL$$ && $i$$776_node$$292$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$14_innerRadius$$9$$ = $children$$14_innerRadius$$9$$.slice(0), $children$$14_innerRadius$$9$$.sort(function($radiusPerDepth$$1$$, $i$$776_node$$292$$) {
      return $i$$776_node$$292$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    (0,D.$DvtAgent$isRightToLeft$$)($i$$776_node$$292$$.$_view$.$getCtx$()) && ($children$$14_innerRadius$$9$$ = $children$$14_innerRadius$$9$$.slice(0).reverse());
    var $total$$7$$ = 0;
    for($i$$776_node$$292$$ = 0;$i$$776_node$$292$$ < $children$$14_innerRadius$$9$$.length;$i$$776_node$$292$$++) {
      $total$$7$$ += 0 < $children$$14_innerRadius$$9$$[$i$$776_node$$292$$].$getSize$() ? $children$$14_innerRadius$$9$$[$i$$776_node$$292$$].$getSize$() : 0
    }
    for($i$$776_node$$292$$ = 0;$i$$776_node$$292$$ < $children$$14_innerRadius$$9$$.length;$i$$776_node$$292$$++) {
      var $child$$74$$ = $children$$14_innerRadius$$9$$[$i$$776_node$$292$$];
      if(!(0 >= $child$$74$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$74$$.$getSize$() / $total$$7$$ * $angleExtent$$17$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$74$$, $childStartAngle_startAngle$$19$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$7$$);
        $childStartAngle_startAngle$$19$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$293$$) {
  var $maxRadius$$2$$ = 0, $children$$15$$ = $node$$293$$.$getChildNodes$();
  if($children$$15$$ && 0 < $children$$15$$.length) {
    for(var $i$$777$$ = 0;$i$$777$$ < $children$$15$$.length;$i$$777$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$15$$[$i$$777$$]), $maxRadius$$2$$ = window.Math.max($maxRadius$$2$$, $childRadius$$)
    }
    return $maxRadius$$2$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$293$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$293$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$244$$, $id$$273$$) {
  this.Init($type$$244$$);
  this.$_id$ = $id$$273$$ ? $id$$273$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$62$$, $context$$572$$, $callback$$153$$, $callbackObj$$103$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$62$$, $context$$572$$, $callback$$153$$, $callbackObj$$103$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$724_relPos$$64$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$ = this.$GetLogicalObject$($event$$724_relPos$$64$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$724_relPos$$64$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$724_relPos$$64$$.pageX, $event$$724_relPos$$64$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8050_obj$$337$$, $event$$724_relPos$$64$$.x, $event$$724_relPos$$64$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$724_relPos$$64$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$725_relPos$$65$$) {
  if(this.$_bRotating$) {
    $event$$725_relPos$$65$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$725_relPos$$65$$.pageX, $event$$725_relPos$$65$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_8054$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8054$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8054$$, $event$$725_relPos$$65$$.x, $event$$725_relPos$$65$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$725_relPos$$65$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$726$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$726$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$727$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$44_newAngle$$1$$ = $event$$727$$.keyCode, $node$$291$$ = this.$getFocus$(), $sunburst$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)($node$$291$$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$727$$) && !$node$$291$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$727$$) && $node$$291$$.$isDisclosed$() || $event$$727$$.ctrlKey && 13 == $keyCode$$44_newAngle$$1$$) ? ($node$$291$$.$expandCollapseNode$(), (0,D.$DvtEventManager$consumeEvent$$)($event$$727$$)) : $sunburst$$ && "off" != $sunburst$$.$getOptions$().rotation && (37 == $keyCode$$44_newAngle$$1$$ || 
  39 == $keyCode$$44_newAngle$$1$$) && !$event$$727$$.ctrlKey && $event$$727$$.altKey && $event$$727$$.shiftKey ? ($keyCode$$44_newAngle$$1$$ = 37 == $keyCode$$44_newAngle$$1$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$, $keyCode$$44_newAngle$$1$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$727$$)) : 
  $eventConsumed$$5$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$727$$);
  return $eventConsumed$$5$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$728$$) {
  var $obj$$338$$ = this.$GetLogicalObject$($event$$728$$.target);
  $obj$$338$$ && ($obj$$338$$.getId && "_rotationShape" == $obj$$338$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$728$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$729$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$729$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$730$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$730$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$731$$, $touch$$47$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$47$$.identifier, "rotateKey", "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$47$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$68$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$47$$.pageX, $touch$$47$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_8058$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8058$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_8058$$, $pos$$68$$.x, $pos$$68$$.y));
    $event$$731$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$732$$, $touch$$48$$) {
  var $pos$$69$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$48$$.pageX, $touch$$48$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_8062$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8062$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_8062$$, $pos$$69$$.x, $pos$$69$$.y));
  $event$$732$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
(0,D.$DvtBundle$addDefaultStrings$$)("DvtSunburstBundle", {COLOR:"Color", OTHER:"Other", SIZE:"Size"});
D.$DvtSunburstDefaults$$ = function $$DvtSunburstDefaults$$$() {
  this.Init({skyros:D.$DvtSunburstDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtSunburstDefaults");
D.$DvtSunburstDefaults$VERSION_1$$ = {nodeDefaults:{borderColor:"#FFFFFF", hoverColor:"#FFFFFF", labelDisplay:"auto", labelHalign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, rotation:"on", startAngle:90};
  return D;
});