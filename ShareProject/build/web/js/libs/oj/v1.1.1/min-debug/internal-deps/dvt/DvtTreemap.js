/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTreemap$$ = function $$DvtTreemap$$$($context$$629$$, $callback$$183$$, $callbackObj$$129$$) {
  this.Init($context$$629$$, $callback$$183$$, $callbackObj$$129$$)
};
(0,D.$goog$exportPath_$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreeView$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$630$$, $callback$$184$$, $callbackObj$$130$$) {
  return new D.$DvtTreemap$$($context$$630$$, $callback$$184$$, $callbackObj$$130$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$631$$, $callback$$185$$, $callbackObj$$131$$) {
  D.$DvtTreemap$$.$superclass$.Init.call(this, $context$$631$$, $callback$$185$$, $callbackObj$$131$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$;
  this.setId("treemap1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$282_props$$22$$) {
  D.$DvtTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $options$$282_props$$22$$);
  $options$$282_props$$22$$ = this.$getOptions$();
  this.$_layout$ = "sliceAndDiceHorizontal" == $options$$282_props$$22$$.layout ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "sliceAndDiceVertical" == $options$$282_props$$22$$.layout ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  this.$_isolatedNodes$ = [];
  var $isolateRowKey$$inline_9191$$ = $options$$282_props$$22$$.isolatedNode;
  if($isolateRowKey$$inline_9191$$ && this.$_root$) {
    var $allNodes$$inline_9192$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_9192$$.push(this.$_root$);
    for(var $i$$inline_9193$$ = 0;$i$$inline_9193$$ < $allNodes$$inline_9192$$.length;$i$$inline_9193$$++) {
      if($allNodes$$inline_9192$$[$i$$inline_9193$$].getId() == $isolateRowKey$$inline_9191$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_9192$$[$i$$inline_9193$$]);
        break
      }
    }
  }
  "auto" == $options$$282_props$$22$$.animationOnDisplay && ($options$$282_props$$22$$.animationOnDisplay = "alphaFade")
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$130$$) {
  var $bufferSpace$$1_gap$$29_numIsolated$$ = window.Math.max(window.Math.ceil(7 * window.Math.min($availSpace$$130$$.$w$, $availSpace$$130$$.$h$) / 400), 2);
  $availSpace$$130$$.x += $bufferSpace$$1_gap$$29_numIsolated$$;
  $availSpace$$130$$.y += $bufferSpace$$1_gap$$29_numIsolated$$;
  $availSpace$$130$$.$w$ -= 2 * $bufferSpace$$1_gap$$29_numIsolated$$;
  $availSpace$$130$$.$h$ -= 2 * $bufferSpace$$1_gap$$29_numIsolated$$;
  $bufferSpace$$1_gap$$29_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$130$$.x += $bufferSpace$$1_gap$$29_numIsolated$$;
  $availSpace$$130$$.$w$ -= 2 * $bufferSpace$$1_gap$$29_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$130$$);
  this.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$(this, $availSpace$$130$$, this.$_legendSource$);
  $availSpace$$130$$.x -= $bufferSpace$$1_gap$$29_numIsolated$$;
  $availSpace$$130$$.$w$ += 2 * $bufferSpace$$1_gap$$29_numIsolated$$;
  $bufferSpace$$1_gap$$29_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace$$1_gap$$29_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace$$1_gap$$29_numIsolated$$ - 1], $availSpace$$130$$.x, $availSpace$$130$$.y, $availSpace$$130$$.$w$, $availSpace$$130$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$130$$.x, $availSpace$$130$$.y, $availSpace$$130$$.$w$, $availSpace$$130$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$909$$ = 0;$i$$909$$ < $bufferSpace$$1_gap$$29_numIsolated$$;$i$$909$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$909$$], $availSpace$$130$$.x, $availSpace$$130$$.y, $availSpace$$130$$.$w$, $availSpace$$130$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$205_i$$910$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$205_i$$910$$);
  this.$_breadcrumbs$ && $container$$205_i$$910$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$205_i$$910$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$205_i$$910$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$205_i$$910$$) : this.$_root$.$hasChildren$() ? (this.$_root$.$renderChildren$($container$$205_i$$910$$), (0,D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$)(this, this.$_root$)) : this.$_root$.$render$($container$$205_i$$910$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$205_i$$910$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$205_i$$910$$.$addChild$(this.$_selectedLayer$);
    $container$$205_i$$910$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$getCtx$(), []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$205_i$$910$$.$addChild$(this.$_hoverEffect$);
    for($container$$205_i$$910$$ = 0;$container$$205_i$$910$$ < this.$_isolatedNodes$.length;$container$$205_i$$910$$++) {
      var $displayable$$108$$ = this.$_isolatedNodes$[$container$$205_i$$910$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$108$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$205_i$$910$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$911$$ = 0;$i$$911$$ < $selectedNodes$$2$$.length;$i$$911$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$2$$[$i$$911$$] == $lastIsolated$$1$$ || $selectedNodes$$2$$[$i$$911$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$2$$[$i$$911$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$2$$[$i$$911$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$34$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$76$$, $context$$632$$, $callback$$186$$, $callbackObj$$132$$) {
  return new D.$DvtTreemapEventManager$$($view$$76$$, $context$$632$$, $callback$$186$$, $callbackObj$$132$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$37$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, D.$DvtBaseTreeUtils$$.$getLeafNodes$($isolatedRootNode$$)) : $root$$37$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, D.$DvtBaseTreeUtils$$.$getLeafNodes$($root$$37$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$53$$) {
  for(var $newIndex$$9$$ = 0, $numChildren$$17$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$912$$ = 0;$i$$912$$ < $numChildren$$17$$;$i$$912$$++) {
    var $child$$80$$ = this.$_selectedLayer$.$getChildAt$($i$$912$$);
    $rect$$53$$.zIndex > $child$$80$$.zIndex && ($newIndex$$9$$ = $i$$912$$ + 1)
  }
  $newIndex$$9$$ < $numChildren$$17$$ ? this.$_selectedLayer$.$addChildAt$($rect$$53$$, $newIndex$$9$$) : this.$_selectedLayer$.$addChild$($rect$$53$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$339$$) {
  if("none" != $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getOptions$().animationOnDataChange) {
    for(var $playables$$inline_9208_selectedNodes$$3$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_9209_i$$913$$ = 0;$descendants$$inline_9209_i$$913$$ < $playables$$inline_9208_selectedNodes$$3$$.length;$descendants$$inline_9209_i$$913$$++) {
      $playables$$inline_9208_selectedNodes$$3$$[$descendants$$inline_9209_i$$913$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_9208_selectedNodes$$3$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$339$$)], $descendants$$inline_9209_i$$913$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$339$$), $i$$inline_9210$$ = 0;$i$$inline_9210$$ < $descendants$$inline_9209_i$$913$$.length;$i$$inline_9210$$++) {
      $playables$$inline_9208_selectedNodes$$3$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_9209_i$$913$$[$i$$inline_9210$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getCtx$(), $playables$$inline_9208_selectedNodes$$3$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$9$$) {
  var $keyboardHandler$$10$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$10$$ ? $keyboardHandler$$10$$.$getDefaultNavigable$($navigableItems$$9$$) : $navigableItems$$9$$ && 0 < $navigableItems$$9$$.length ? $navigableItems$$9$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$.prototype.$GetComponentDescription$ = function $$DvtTreemap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TREEMAP")
};
D.$DvtTreemap$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemap$$.prototype.$CreateNode$ = function $$DvtTreemap$$$$$CreateNode$$($nodeOptions$$6$$) {
  return new D.$DvtTreemapNode$$(this, $nodeOptions$$6$$)
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$, $props$$23$$) {
  this.Init($treemap$$, $props$$23$$);
  var $options$$283$$ = this.$_view$.$getOptions$(), $nodeDefaults$$3$$ = $options$$283$$.nodeDefaults, $headerDefaults$$ = $nodeDefaults$$3$$.header, $headerOptions$$ = $props$$23$$.header ? $props$$23$$.header : {};
  this.$_groupLabelDisplay$ = $props$$23$$.groupLabelDisplay ? $props$$23$$.groupLabelDisplay : $nodeDefaults$$3$$.groupLabelDisplay;
  this.$_labelDisplay$ = $props$$23$$.labelDisplay ? $props$$23$$.labelDisplay : $nodeDefaults$$3$$.labelDisplay;
  this.$_labelHalign$ = $props$$23$$.labelHalign ? $props$$23$$.labelHalign : $nodeDefaults$$3$$.labelHalign;
  this.$_labelValign$ = $props$$23$$.labelValign ? $props$$23$$.labelValign : $nodeDefaults$$3$$.labelValign;
  this.$_headerHalign$ = $headerOptions$$.labelHalign ? $headerOptions$$.labelHalign : $headerDefaults$$.labelHalign;
  this.$_headerLabelStyle$ = $headerOptions$$.labelStyle ? new D.$DvtCSSStyle$$($headerOptions$$.labelStyle) : D.$JSCompiler_alias_NULL$$;
  this.$_bHeaderUseNodeColor$ = "on" == ($headerOptions$$.useNodeColor ? $headerOptions$$.useNodeColor : $headerDefaults$$.useNodeColor);
  this.$_isolate$ = $headerOptions$$.isolate ? $headerOptions$$.isolate : $headerDefaults$$.isolate;
  "auto" == this.$_isolate$ && (this.$_isolate$ = (0,D.$DvtAgent$isTouchDevice$$)() ? "off" : "on");
  this.$_bIsolated$ = $options$$283$$.isolatedNode != D.$JSCompiler_alias_NULL$$ && $options$$283$$.isolatedNode == this.getId()
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.$addChild$(this.$_shape$);
    var $afRoot$$11_template$$25$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$getCtx$()), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$11_template$$25$$ = (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this);
    if($afRoot$$11_template$$25$$) {
      var $aw$$4_elAttrs$$2$$ = this.$getOptions$()._cf, $afContext$$63$$ = this.$_view$.$_afContext$;
      $afContext$$63$$.$_elContext$ = $aw$$4_elAttrs$$2$$;
      var $aw$$4_elAttrs$$2$$ = this.$_width$ - 8 - 2, $ah$$6$$ = this.$_height$ - 4 - 2;
      0 < $aw$$4_elAttrs$$2$$ && 0 < $ah$$6$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$63$$, $aw$$4_elAttrs$$2$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$63$$, $ah$$6$$), $afContext$$63$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$11_template$$25$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$63$$, $afRoot$$11_template$$25$$, this.$_shape$), (0,D.$DvtAgent$isRightToLeft$$)($container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.$getCtx$()) ? 
      ($container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$ = $afRoot$$11_template$$25$$.$getDimensions$(), $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.$w$) : $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$11_template$$25$$, $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$, 
      this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "header" != this.$_textStyle$) && ($container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.x, $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.y, $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.$w$, 
      $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$ = this.$_text$, "node" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$) : this.$_shape$.$addChild$($container$$206_dim$$89_dims$$71_text$$inline_9224_transX$$10$$))
    }
    this.$hasChildren$() ? this.$_shape$.$setAriaRole$("group") : this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($nodeDefaults$$4_parentNode$$17_selected$$47$$) {
  D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $nodeDefaults$$4_parentNode$$17_selected$$47$$);
  if(this.$_shape$) {
    $nodeDefaults$$4_parentNode$$17_selected$$47$$ = this.$_view$.$getOptions$().nodeDefaults;
    var $nodeHeaderDefaults$$ = $nodeDefaults$$4_parentNode$$17_selected$$47$$.header;
    if(this.$isSelected$()) {
      var $x$$307$$ = this.$_x$, $y$$276$$ = this.$_y$ + 1, $w$$72$$ = this.$_width$ - 1, $h$$66$$ = this.$_height$ - 1;
      (0,D.$DvtAgent$isPlatformWebkit$$)() && ($y$$276$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $x$$307$$, $y$$276$$, $w$$72$$, $h$$66$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $x$$307$$ + 1, $y$$276$$ + 1, $w$$72$$ - 2, $h$$66$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.selectedBackgroundColor), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_selectedLabelStyle")), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeHeaderDefaults$$.selectedInnerColor), 
      (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$))) : (this.$_selectionOuter$.$setSolidStroke$($nodeDefaults$$4_parentNode$$17_selected$$47$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeDefaults$$4_parentNode$$17_selected$$47$$.selectedInnerColor), !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, 
      D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtAgent$isTouchDevice$$)() && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$), 
      this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "labelStyle"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.hoverOuterColor) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = 
      D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($nodeDefaults$$4_parentNode$$17_selected$$47$$ = this.$_parent$) && $nodeDefaults$$4_parentNode$$17_selected$$47$$.$_childNodeGroup$ && $nodeDefaults$$4_parentNode$$17_selected$$47$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$ = this.$_view$.$getOptions$().nodeDefaults, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$ = $nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$.header, $isolatedNode_points$$84$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$84$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$84$$ != this && !this.$isDescendantOf$($isolatedNode_points$$84$$))) {
      var $isolatedNode_points$$84$$ = [], $x1$$58_y$$277$$, $w$$73_y1$$48$$, $h$$67_x2$$55$$, $y2$$45$$;
      "header" == this.$_textStyle$ ? (this.$_innerShape$.$setSolidFill$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.hoverBackgroundColor), this.$_selectionOuter$ || ($nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$ = this.$_x$, $x1$$58_y$$277$$ = this.$_y$ + 1, $w$$73_y1$$48$$ = this.$_width$ - 1, $h$$67_x2$$55$$ = this.$_height$ - 1, (0,D.$DvtAgent$isPlatformWebkit$$)() && ($x1$$58_y$$277$$ -= 1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), 
      $nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$, $x1$$58_y$$277$$, $w$$73_y1$$48$$, $h$$67_x2$$55$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$_selectionOuter$.$setSolidStroke$(this.$isSelected$() ? $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.selectedOuterColor : 
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.hoverOuterColor), $x1$$58_y$$277$$ = this.$_x$ + 1.5 + 1, $h$$67_x2$$55$$ = this.$_x$ + this.$_width$ - 1.5 - 1, $w$$73_y1$$48$$ = this.$_y$ + this.$_titleBarHeight$, $y2$$45$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$84$$.push($h$$67_x2$$55$$, $w$$73_y1$$48$$, $h$$67_x2$$55$$, $y2$$45$$, $x1$$58_y$$277$$, $y2$$45$$, $x1$$58_y$$277$$, $w$$73_y1$$48$$), $nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$ = 
      new D.$DvtSolidStroke$$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.hoverInnerColor, 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableHoverLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_hoverLabelStyle"))) : ($x1$$58_y$$277$$ = this.$_x$ + 1, $h$$67_x2$$55$$ = this.$_x$ + this.$_width$ - 1, $w$$73_y1$$48$$ = this.$_y$ + 
      1, $y2$$45$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$84$$.push(this.$_x$, $w$$73_y1$$48$$, $h$$67_x2$$55$$, $w$$73_y1$$48$$, $h$$67_x2$$55$$, $y2$$45$$, $x1$$58_y$$277$$, $y2$$45$$, $x1$$58_y$$277$$, $w$$73_y1$$48$$), $nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$ = new D.$DvtSolidStroke$$($nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$.hoverColor, 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$84$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setStroke$($nodeDefaults$$5_stroke$$121_stroke$$inline_9228_x$$308$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9226_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeHeaderDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults.header;
    "header" == this.$_textStyle$ && (this.$isSelected$() ? (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$2$$.selectedBackgroundColor), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$2$$.selectedOuterColor), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableSelectedLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_selectedLabelStyle"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, 
    this.$_shape$, this.$_innerShape$), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "labelStyle"))));
    this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$4$$, $alpha$$55$$) {
  this.$hasChildren$() ? (this.$_text$ && this.$_text$.$setAlpha$($alpha$$55$$), "header" == this.$_textStyle$ && (this.$_bHeaderUseNodeColor$ && this.$_innerShape$) && this.$_innerShape$.$setAlpha$($alpha$$55$$)) : D.$DvtTreemapNode$$.$superclass$.$highlight$.call(this, $bDimmed$$4$$, $alpha$$55$$)
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"off" != this.$_isolate$ && "header" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$17$$) {
  return!$behavior$$17$$ || !$behavior$$17$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$17$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$828_lastChild$$2_next$$23$$) {
  var $keyCode$$54_navigables$$13_parent$$93$$;
  if($event$$828_lastChild$$2_next$$23$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$828_lastChild$$2_next$$23$$)
  }
  $keyCode$$54_navigables$$13_parent$$93$$ = $event$$828_lastChild$$2_next$$23$$.keyCode;
  if(32 == $keyCode$$54_navigables$$13_parent$$93$$ && $event$$828_lastChild$$2_next$$23$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$54_navigables$$13_parent$$93$$ && $event$$828_lastChild$$2_next$$23$$.altKey || 221 == $keyCode$$54_navigables$$13_parent$$93$$) {
    ($keyCode$$54_navigables$$13_parent$$93$$ = this.$_parent$) && $keyCode$$54_navigables$$13_parent$$93$$.getId() != this.$_view$.$_root$.getId() ? ($event$$828_lastChild$$2_next$$23$$ = $keyCode$$54_navigables$$13_parent$$93$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$54_navigables$$13_parent$$93$$)) : $event$$828_lastChild$$2_next$$23$$ = this
  }else {
    if(40 == $keyCode$$54_navigables$$13_parent$$93$$ && $event$$828_lastChild$$2_next$$23$$.altKey || 219 == $keyCode$$54_navigables$$13_parent$$93$$) {
      $event$$828_lastChild$$2_next$$23$$ = ($event$$828_lastChild$$2_next$$23$$ = this.$_lastVisitedChild$) ? $event$$828_lastChild$$2_next$$23$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$38$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$25$$ = 0;
      if($root$$38$$) {
        if(this == $root$$38$$) {
          $depth$$25$$ = 0
        }else {
          $keyCode$$54_navigables$$13_parent$$93$$ = this.$_parent$;
          for($depth$$25$$ = 1;$root$$38$$ != $keyCode$$54_navigables$$13_parent$$93$$;) {
            $depth$$25$$++, $keyCode$$54_navigables$$13_parent$$93$$ = $keyCode$$54_navigables$$13_parent$$93$$.$_parent$
          }
        }
      }else {
        for($root$$38$$ = this;$root$$38$$.$_parent$;) {
          $root$$38$$ = $root$$38$$.$_parent$
        }
        $depth$$25$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$54_navigables$$13_parent$$93$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$38$$, $depth$$25$$);
      $event$$828_lastChild$$2_next$$23$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$828_lastChild$$2_next$$23$$, $keyCode$$54_navigables$$13_parent$$93$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$828_lastChild$$2_next$$23$$);
  return $event$$828_lastChild$$2_next$$23$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$112_x$$309_xx$$65$$, $y$$278_yy$$65$$, $width$$193_ww$$122$$, $height$$169_hh$$106$$) {
  if(!(0 >= $width$$193_ww$$122$$ || 0 >= $height$$169_hh$$106$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$112_x$$309_xx$$65$$;
    this.$_y$ = $y$$278_yy$$65$$;
    this.$_width$ = $width$$193_ww$$122$$ ? $width$$193_ww$$122$$ : 0;
    this.$_height$ = $height$$169_hh$$106$$ ? $height$$169_hh$$106$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "off");
    if("header" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$112_x$$309_xx$$65$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$);
      $headerLabelHeight_text$$112_x$$309_xx$$65$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$112_x$$309_xx$$65$$, "labelStyle");
      $headerLabelHeight_text$$112_x$$309_xx$$65$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$112_x$$309_xx$$65$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$112_x$$309_xx$$65$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$112_x$$309_xx$$65$$ = this.$_x$;
      $y$$278_yy$$65$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$193_ww$$122$$ = this.$_width$;
      $height$$169_hh$$106$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$193_ww$$122$$ && 0 <= $height$$169_hh$$106$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$112_x$$309_xx$$65$$, $y$$278_yy$$65$$, $width$$193_ww$$122$$, $height$$169_hh$$106$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$311$$, $y$$280$$) {
  return $x$$311$$ >= this.$_x$ && $x$$311$$ <= this.$_x$ + this.$_width$ && $y$$280$$ >= this.$_y$ && $y$$280$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$93$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$30$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$68$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$93$$, $g$$30$$, $b$$68$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$66$$) {
  this.$setLayoutParams$($params$$66$$[0], $params$$66$$[1], $params$$66$$[2], $params$$66$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$66$$[4]), window.Math.round($params$$66$$[5]), window.Math.round($params$$66$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("header" != this.$_textStyle$ || this.$_bHeaderUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this) ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), 
  this.$_textBackground$ = D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$48$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$getCtx$(), $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$48$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$48$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$63$$, $oldNode$$20$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$20$$.$_hasLayout$ && 0 < $oldNode$$20$$.$_width$ && 0 < $oldNode$$20$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$63$$, $oldNode$$20$$) : this.$animateInsert$($handler$$63$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$634$$ = this.$_view$.$getCtx$(), $shape$$96$$;
  if("header" == this.$_textStyle$) {
    $shape$$96$$ = new D.$DvtRect$$($context$$634$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$634$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$96$$, this.$_innerShape$), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$96$$.$addChild$(this.$_innerShape$), this.$_bIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, 
    $shape$$96$$))
  }else {
    var $fill$$78$$ = this.$GetFill$();
    $shape$$96$$ = new D.$DvtRect$$($context$$634$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !(0,D.$DvtAgent$isTouchDevice$$)()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$("#FFFFFF");
      new D.$DvtSolidStroke$$("#000000", 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $bottomRightColor_fillColor$$11$$ = this.$getColor$(), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$("#FFFFFF", $bottomRightColor_fillColor$$11$$, 0.7), $bottomRightColor_fillColor$$11$$ = D.$DvtColorUtils$$.$interpolateColor$("#000000", $bottomRightColor_fillColor$$11$$, 0.7), $minDim$$1$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $minDim$$1$$ ? ($shape$$96$$.$setSolidFill$($bottomRightColor_fillColor$$11$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$634$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$96$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$634$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), 
      this.$_fillShape$.$setFill$($fill$$78$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$96$$.$addChild$(this.$_fillShape$)) : 2 <= $minDim$$1$$ ? ($shape$$96$$.$setSolidFill$($bottomRightColor_fillColor$$11$$), this.$_fillShape$ = new D.$DvtRect$$($context$$634$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$78$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$96$$.$addChild$(this.$_fillShape$)) : 
      $shape$$96$$.$setFill$($fill$$78$$)
    }else {
      $shape$$96$$.$setFill$($fill$$78$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$96$$, this);
  this.$isSelectable$() ? $shape$$96$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$96$$.setCursor("default");
  $shape$$96$$.zIndex = this.$_zIndex$;
  return $shape$$96$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$207$$) {
  if("header" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$ = D.$JSCompiler_alias_NULL$$, $transX$$11_x1$$59$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$56$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$54_tooltip$$60_y1$$49$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, 
  $y2$$46$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$56$$ - $transX$$11_x1$$59$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$) {
      var $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_9237_resources$$inline_9248$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$ = $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ && $resources$$inline_9237_resources$$inline_9248$$.restoreDownRtl ? $resources$$inline_9237_resources$$inline_9248$$.restoreDownRtl : $resources$$inline_9237_resources$$inline_9248$$.restoreDown, $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$ = $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ && 
      $resources$$inline_9237_resources$$inline_9248$$.restoreOverRtl ? $resources$$inline_9237_resources$$inline_9248$$.restoreOverRtl : $resources$$inline_9237_resources$$inline_9248$$.restoreOver, $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ = new D.$DvtImage$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ && 
      $resources$$inline_9237_resources$$inline_9248$$.restoreRtl ? $resources$$inline_9237_resources$$inline_9248$$.restoreRtl : $resources$$inline_9237_resources$$inline_9248$$.restore, 0, 0, 12, 12), $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$ = new D.$DvtImage$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$, 
      0, 0, 12, 12), $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$ = new D.$DvtImage$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$);
      $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$ = new D.$DvtButton$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$, $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$, $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$);
      $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_9237_resources$$inline_9248$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$ = $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ && $resources$$inline_9237_resources$$inline_9248$$.isolateDownRtl ? $resources$$inline_9237_resources$$inline_9248$$.isolateDownRtl : $resources$$inline_9237_resources$$inline_9248$$.isolateDown, $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$ = $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ && 
      $resources$$inline_9237_resources$$inline_9248$$.isolateOverRtl ? $resources$$inline_9237_resources$$inline_9248$$.isolateOverRtl : $resources$$inline_9237_resources$$inline_9248$$.isolateOver, $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ = new D.$DvtImage$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$ && 
      $resources$$inline_9237_resources$$inline_9248$$.isolateRtl ? $resources$$inline_9237_resources$$inline_9248$$.isolateRtl : $resources$$inline_9237_resources$$inline_9248$$.isolate, 0, 0, 12, 12), $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$ = new D.$DvtImage$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$, 
      0, 0, 12, 12), $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$ = new D.$DvtImage$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$), 
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$), $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$ = new D.$DvtButton$$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $bRtl$$inline_9236_bRtl$$inline_9247_upState$$inline_9240_upState$$inline_9251$$, $overImage$$inline_9238_overImage$$inline_9249_overState$$inline_9241_overState$$inline_9252$$, 
      $downImage$$inline_9239_downImage$$inline_9250_downState$$inline_9242_downState$$inline_9253$$), $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$11_x1$$59$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$207$$.$getCtx$()) ? $transX$$11_x1$$59$$ + 1 : $x2$$56$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $transX$$11_x1$$59$$, ($y2$$46$$ + $rect$$54_tooltip$$60_y1$$49$$ - 12) / 2);
    $container$$207$$.$addChild$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$);
    (0,D.$DvtAgent$isTouchDevice$$)() && ($rect$$54_tooltip$$60_y1$$49$$ = new D.$DvtRect$$($container$$207$$.$getCtx$(), -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$54_tooltip$$60_y1$$49$$), $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$.$addChild$($rect$$54_tooltip$$60_y1$$49$$));
    (0,D.$DvtCSSStyle$afterSkinAlta$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$().skin) ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$54_tooltip$$60_y1$$49$$ = (0,D.$DvtBundle$getTranslation$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$(), 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", "DvtTreemapBundle", $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "RESTORE" : "ISOLATE"), $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$54_tooltip$$60_y1$$49$$)))
  }
  return $JSCompiler_temp$$165_button$$84_button$$inline_9243_button$$inline_9254_context$$inline_9235_context$$inline_9246$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$208$$) {
  var $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$208$$.$getCtx$());
  if(!this.$_textStr$ || !$container$$208$$ || !this.$_textStyle$ || "off" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$13$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$13$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$6$$ = "node" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ && ("start" == $hAlign$$6$$ ? $hAlign$$6$$ = "end" : "end" == $hAlign$$6$$ && ($hAlign$$6$$ = "start"));
  var $availWidth$$20$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$20$$ = "center" == $hAlign$$6$$ ? $availWidth$$20$$ - 2 * $isolateWidth$$ : $availWidth$$20$$ - $isolateWidth$$);
  if(0 >= $availWidth$$20$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$113$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$);
  $text$$113$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "start" == $hAlign$$6$$ ? ($chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ ? $text$$113$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$113$$.$setX$(this.$_x$ + 4), $text$$113$$.$alignLeft$()) : "center" == $hAlign$$6$$ ? ($text$$113$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$113$$.$alignCenter$()) : "end" == $hAlign$$6$$ && ($chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ ? $text$$113$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$113$$.$setX$(this.$_x$ + this.$_width$ - 4 - 
  $isolateWidth$$), $text$$113$$.$alignRight$());
  "node" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$113$$), $availHeight$$13$$ = this.$_height$ - 4, $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ = D.$DvtTextUtils$$.$getTextHeight$($text$$113$$), "top" == this.$_labelValign$ ? $text$$113$$.$setY$(this.$_y$ + 2) : "center" == this.$_labelValign$ ? $text$$113$$.$setY$(this.$_y$ + this.$_height$ / 2 - $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ / 2) : "bottom" == this.$_labelValign$ && 
  $text$$113$$.$setY$(this.$_y$ + this.$_height$ - 2 - $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$)) : "header" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ = (0,D.$DvtAgent$isPlatformWebkit$$)() ? 1 : 0, $text$$113$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$), $text$$113$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$113$$, "labelStyle"));
  if($text$$113$$ != D.$JSCompiler_alias_NULL$$) {
    return"header" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$113$$, "_drillableLabelStyle"), $text$$113$$.setCursor("pointer"), $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$113$$, 
    $chromeAdjustment_isRTL$$44_peer$$32_textHeight$$1$$)) : $text$$113$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$113$$, $availWidth$$20$$, $availHeight$$13$$, $container$$208$$) ? $text$$113$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$, $shape$$97$$, $borderColor$$63_innerShape$$) {
  var $nodeHeaderDefaults$$3$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$.$_view$.$getOptions$().nodeDefaults.header;
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$.$_bHeaderUseNodeColor$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$.$getColor$(), $borderColor$$63_innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$), $borderColor$$63_innerShape$$ = D.$DvtColorUtils$$.$interpolateColor$($nodeHeaderDefaults$$3$$.borderColor, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$12$$, 
  0.5), $shape$$97$$.$setSolidFill$($borderColor$$63_innerShape$$)) : ($shape$$97$$.$setSolidFill$($nodeHeaderDefaults$$3$$.borderColor), $borderColor$$63_innerShape$$.$setSolidFill$($nodeHeaderDefaults$$3$$.backgroundColor))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$114$$, $styleType$$) {
  var $textStyle$$11$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $textStyle$$11$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.header[$styleType$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_bHeaderUseNodeColor$ && ("labelStyle" == $styleType$$ || "_drillableLabelStyle" == $styleType$$) && $textStyle$$11$$.push(new D.$DvtCSSStyle$$("color: " + ($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_color$))));
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$114$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$11$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  !this.$_isolateButton$ && !(0,D.$DvtAgent$isTouchDevice$$)() && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  this.$_bIsolated$ !== D.$JSCompiler_alias_TRUE$$ && !(0,D.$DvtAgent$isTouchDevice$$)() && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$($event$$829$$) {
  this.$_bIsolated$ = D.$JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_9256$$ = this.$_view$, $currentNavigable$$inline_9258_displayable$$inline_9259$$ = $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_9258_displayable$$inline_9259$$ && $currentNavigable$$inline_9258_displayable$$inline_9259$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$getOptions$().isolatedNode = this.getId();
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_9258_displayable$$inline_9259$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_9256$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_9258_displayable$$inline_9259$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_9256$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$();
  $event$$829$$ && $event$$829$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$($event$$830$$) {
  this.$_bIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_9261$$ = this.$_view$, $restoreNode$$inline_9262$$ = $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_isolatedNodes$.pop();
  $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$getOptions$().isolatedNode = 0 < $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_isolatedNodes$[$JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_isolatedNodes$.length - 1].getId() : D.$JSCompiler_alias_NULL$$;
  var $currentNavigable$$inline_9263_id$$inline_11700$$ = $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_9263_id$$inline_11700$$ && $currentNavigable$$inline_9263_id$$inline_11700$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_9263_id$$inline_11700$$ = $restoreNode$$inline_9262$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_navigableIdToFocus$ = $currentNavigable$$inline_9263_id$$inline_11700$$;
  $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_9261$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_9261$$, $restoreNode$$inline_9262$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$();
  $event$$830$$ && $event$$830$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$128$$, $x$$312$$, $y$$281$$) {
  return $target$$128$$ && $target$$128$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$128$$, $x$$312$$, $y$$281$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$129$$) {
  return $target$$129$$ && $target$$129$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$129$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$130$$) {
  return $target$$130$$ && $target$$130$$ instanceof D.$DvtButton$$ ? (0,D.$DvtBundle$getTranslation$$)(this.$_view$.$getOptions$(), this.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", "DvtTreemapBundle", this.$_bIsolated$ ? "RESTORE" : "ISOLATE") : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $options$$284$$ = this.$_view$.$getOptions$(), $states$$19$$ = [];
  this.$isSelectable$() && $states$$19$$.push((0,D.$DvtBundle$getTranslation$$)($options$$284$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_bIsolated$ && $states$$19$$.push((0,D.$DvtBundle$getTranslation$$)($options$$284$$, "stateIsolated", "DvtUtilBundle", "STATE_ISOLATED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$, $availBounds_node$$334$$, $x$$300$$, $y$$269$$, $width$$187$$, $height$$163$$, $isRoot$$2_xx$$64$$) {
  $availBounds_node$$334$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$64$$ || !$availBounds_node$$334$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$.$getGapSize$($availBounds_node$$334$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds_node$$334$$));
    $isRoot$$2_xx$$64$$ = window.Math.round($x$$300$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$);
    var $yy$$64$$ = window.Math.round($y$$269$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$);
    if($availBounds_node$$334$$ = $availBounds_node$$334$$.$setLayoutParams$($isRoot$$2_xx$$64$$, $yy$$64$$, window.Math.round($x$$300$$ + $width$$187$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$) - $isRoot$$2_xx$$64$$, window.Math.round($y$$269$$ + $height$$163$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$28$$) - $yy$$64$$)) {
      return $availBounds_node$$334$$
    }
  }
  return new D.$DvtRectangle$$($x$$300$$, $y$$269$$, $width$$187$$, $height$$163$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$72$$, $depth$$24$$) {
  var $groupGaps$$ = $view$$72$$.$getOptions$().groupGaps;
  return"outer" == $groupGaps$$ ? 1 == $depth$$24$$ && 2 <= $view$$72$$.$_maxDepth$ ? 3 : 0 : "all" == $groupGaps$$ ? $depth$$24$$ < $view$$72$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$75$$, $root$$36$$, $x$$303$$, $y$$272$$, $width$$190$$, $height$$166$$, $bShowRoot$$2$$) {
  this.$_layout$($root$$36$$, $x$$303$$, $y$$272$$, $width$$190$$, $height$$166$$, $bShowRoot$$2$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$28_node$$336$$, $availBounds$$2_x$$304$$, $children$$inline_9170_w$$68_y$$273$$, $i$$inline_9173_width$$191$$, $area$$inline_9171_factor$$inline_9174_height$$167$$, $child$$inline_9175_isRoot$$6_total$$inline_9172$$) {
  $availBounds$$2_x$$304$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$28_node$$336$$, $availBounds$$2_x$$304$$, $children$$inline_9170_w$$68_y$$273$$, $i$$inline_9173_width$$191$$, $area$$inline_9171_factor$$inline_9174_height$$167$$, $child$$inline_9175_isRoot$$6_total$$inline_9172$$);
  $children$$28_node$$336$$ = $children$$28_node$$336$$.$getChildNodes$();
  if($children$$28_node$$336$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$28_node$$336$$.length) {
    $children$$inline_9170_w$$68_y$$273$$ = $children$$28_node$$336$$;
    $area$$inline_9171_factor$$inline_9174_height$$167$$ = $availBounds$$2_x$$304$$.$w$ * $availBounds$$2_x$$304$$.$h$;
    for($i$$inline_9173_width$$191$$ = $i$$inline_9173_width$$191$$ = $child$$inline_9175_isRoot$$6_total$$inline_9172$$ = 0;$i$$inline_9173_width$$191$$ < $children$$inline_9170_w$$68_y$$273$$.length;$i$$inline_9173_width$$191$$++) {
      $child$$inline_9175_isRoot$$6_total$$inline_9172$$ += 0 < $children$$inline_9170_w$$68_y$$273$$[$i$$inline_9173_width$$191$$].$getSize$() ? $children$$inline_9170_w$$68_y$$273$$[$i$$inline_9173_width$$191$$].$getSize$() : 0
    }
    $area$$inline_9171_factor$$inline_9174_height$$167$$ = 0 == $area$$inline_9171_factor$$inline_9174_height$$167$$ ? 0 : $area$$inline_9171_factor$$inline_9174_height$$167$$ / $child$$inline_9175_isRoot$$6_total$$inline_9172$$;
    for($i$$inline_9173_width$$191$$ = 0;$i$$inline_9173_width$$191$$ < $children$$inline_9170_w$$68_y$$273$$.length;$i$$inline_9173_width$$191$$++) {
      $child$$inline_9175_isRoot$$6_total$$inline_9172$$ = $children$$inline_9170_w$$68_y$$273$$[$i$$inline_9173_width$$191$$], $child$$inline_9175_isRoot$$6_total$$inline_9172$$.$__pxSize$ = $child$$inline_9175_isRoot$$6_total$$inline_9172$$.$getSize$() * $area$$inline_9171_factor$$inline_9174_height$$167$$
    }
    $children$$28_node$$336$$ = $children$$28_node$$336$$.slice(0).sort(function($children$$28_node$$336$$, $availBounds$$2_x$$304$$) {
      return $children$$28_node$$336$$.$getSize$() - $availBounds$$2_x$$304$$.$getSize$()
    });
    $children$$inline_9170_w$$68_y$$273$$ = window.Math.min($availBounds$$2_x$$304$$.$w$, $availBounds$$2_x$$304$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$28_node$$336$$, $children$$inline_9170_w$$68_y$$273$$, new D.$DvtRectangle$$($availBounds$$2_x$$304$$.x, $availBounds$$2_x$$304$$.y, $availBounds$$2_x$$304$$.$w$, $availBounds$$2_x$$304$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$30$$, $w$$69$$, $r$$91$$) {
  var $row$$53$$ = [], $worst$$ = window.Infinity;
  if($children$$30$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$30$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$53$$, $w$$69$$, $r$$91$$)
  }else {
    for(;0 < $children$$30$$.length;) {
      var $c$$48$$ = $children$$30$$.pop();
      if(0 > $c$$48$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$53$$, $w$$69$$, $r$$91$$);
        break
      }
      $row$$53$$.push($c$$48$$);
      var $min$$inline_9180_newWorst$$, $areas$$inline_9177_s2$$inline_9183$$ = $row$$53$$, $w$$inline_9178_w2$$inline_9184$$ = $w$$69$$, $total$$inline_9179$$ = 0;
      $min$$inline_9180_newWorst$$ = window.Infinity;
      for(var $max$$inline_9181$$ = -window.Infinity, $i$$inline_9182$$ = 0;$i$$inline_9182$$ < $areas$$inline_9177_s2$$inline_9183$$.length;$i$$inline_9182$$++) {
        $total$$inline_9179$$ += $areas$$inline_9177_s2$$inline_9183$$[$i$$inline_9182$$].$__pxSize$, $min$$inline_9180_newWorst$$ = window.Math.min($min$$inline_9180_newWorst$$, $areas$$inline_9177_s2$$inline_9183$$[$i$$inline_9182$$].$__pxSize$), $max$$inline_9181$$ = window.Math.max($max$$inline_9181$$, $areas$$inline_9177_s2$$inline_9183$$[$i$$inline_9182$$].$__pxSize$)
      }
      $areas$$inline_9177_s2$$inline_9183$$ = $total$$inline_9179$$ * $total$$inline_9179$$;
      $w$$inline_9178_w2$$inline_9184$$ *= $w$$inline_9178_w2$$inline_9184$$;
      $min$$inline_9180_newWorst$$ = window.Math.max($w$$inline_9178_w2$$inline_9184$$ * $max$$inline_9181$$ / $areas$$inline_9177_s2$$inline_9183$$, $areas$$inline_9177_s2$$inline_9183$$ / ($w$$inline_9178_w2$$inline_9184$$ * $min$$inline_9180_newWorst$$));
      if($min$$inline_9180_newWorst$$ > $worst$$) {
        $children$$30$$.push($c$$48$$);
        $row$$53$$.pop();
        $r$$91$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$53$$, $w$$69$$, $r$$91$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$30$$, window.Math.min($r$$91$$.$w$, $r$$91$$.$h$), $r$$91$$);
        break
      }else {
        if(0 == $children$$30$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$53$$, $w$$69$$, $r$$91$$);
          break
        }else {
          $worst$$ = $min$$inline_9180_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$54$$, $w$$71_width$$192$$, $r$$92$$) {
  var $height$$168_total$$11$$ = 0, $i$$908$$;
  for($i$$908$$ = 0;$i$$908$$ < $row$$54$$.length;$i$$908$$++) {
    $height$$168_total$$11$$ += $row$$54$$[$i$$908$$].$__pxSize$
  }
  var $x$$305$$ = $r$$92$$.x, $y$$274$$ = $r$$92$$.y;
  if($w$$71_width$$192$$ == $r$$92$$.$w$) {
    $height$$168_total$$11$$ = 0 == $w$$71_width$$192$$ ? 0 : $height$$168_total$$11$$ / $w$$71_width$$192$$;
    for($i$$908$$ = 0;$i$$908$$ < $row$$54$$.length;$i$$908$$++) {
      $w$$71_width$$192$$ = $row$$54$$[$i$$908$$].$__pxSize$ / $height$$168_total$$11$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$54$$[$i$$908$$], $x$$305$$, $y$$274$$, $w$$71_width$$192$$, $height$$168_total$$11$$, D.$JSCompiler_alias_FALSE$$), $x$$305$$ += $w$$71_width$$192$$
    }
    return new D.$DvtRectangle$$($r$$92$$.x, $r$$92$$.y + $height$$168_total$$11$$, $r$$92$$.$w$, $r$$92$$.$h$ - $height$$168_total$$11$$)
  }
  $w$$71_width$$192$$ = 0 == $w$$71_width$$192$$ ? 0 : $height$$168_total$$11$$ / $w$$71_width$$192$$;
  for($i$$908$$ = 0;$i$$908$$ < $row$$54$$.length;$i$$908$$++) {
    $height$$168_total$$11$$ = $row$$54$$[$i$$908$$].$__pxSize$ / $w$$71_width$$192$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$54$$[$i$$908$$], $x$$305$$, $y$$274$$, $w$$71_width$$192$$, $height$$168_total$$11$$, D.$JSCompiler_alias_FALSE$$), $y$$274$$ += $height$$168_total$$11$$
  }
  return new D.$DvtRectangle$$($r$$92$$.x + $w$$71_width$$192$$, $r$$92$$.y, $r$$92$$.$w$ - $w$$71_width$$192$$, $r$$92$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$17$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$17$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$73$$, $root$$35$$, $x$$301$$, $y$$270$$, $width$$188$$, $height$$164$$, $bShowRoot$$1$$) {
  this.$_layout$(this.$_isHoriz$, $view$$73$$, $root$$35$$, $x$$301$$, $y$$270$$, $width$$188$$, $height$$164$$, $bShowRoot$$1$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$18$$, $view$$74$$, $children$$27_node$$335$$, $availBounds$$1_x$$302$$, $childX$$1_y$$271$$, $childY$$1_width$$189$$, $childWidth_height$$165$$, $childHeight_isRoot$$4$$) {
  var $child$$78_options$$281$$ = $view$$74$$.$getOptions$();
  $availBounds$$1_x$$302$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$27_node$$335$$, $availBounds$$1_x$$302$$, $childX$$1_y$$271$$, $childY$$1_width$$189$$, $childWidth_height$$165$$, $childHeight_isRoot$$4$$);
  $children$$27_node$$335$$ = $children$$27_node$$335$$.$getChildNodes$();
  if($children$$27_node$$335$$ != D.$JSCompiler_alias_NULL$$) {
    $childX$$1_y$$271$$ = $availBounds$$1_x$$302$$.x;
    $childY$$1_width$$189$$ = $availBounds$$1_x$$302$$.y;
    $childWidth_height$$165$$ = $availBounds$$1_x$$302$$.$w$;
    $childHeight_isRoot$$4$$ = $availBounds$$1_x$$302$$.$h$;
    var $total$$8$$ = 0, $i$$905$$;
    for($i$$905$$ = 0;$i$$905$$ < $children$$27_node$$335$$.length;$i$$905$$++) {
      $total$$8$$ += 0 < $children$$27_node$$335$$[$i$$905$$].$getSize$() ? $children$$27_node$$335$$[$i$$905$$].$getSize$() : 0
    }
    "on" == $child$$78_options$$281$$.sorting && ($children$$27_node$$335$$ = $children$$27_node$$335$$.slice(0), $children$$27_node$$335$$.sort(function($isHoriz$$18$$, $view$$74$$) {
      return $view$$74$$.$getSize$() - $isHoriz$$18$$.$getSize$()
    }));
    $isHoriz$$18$$ && (0,D.$DvtAgent$isRightToLeft$$)($view$$74$$.$getCtx$()) && ($children$$27_node$$335$$ = $children$$27_node$$335$$.slice(0).reverse());
    for($i$$905$$ = 0;$i$$905$$ < $children$$27_node$$335$$.length;$i$$905$$++) {
      if($child$$78_options$$281$$ = $children$$27_node$$335$$[$i$$905$$], !(0 >= $child$$78_options$$281$$.$getSize$())) {
        var $sizeRatio$$1$$ = $child$$78_options$$281$$.$getSize$() / $total$$8$$;
        $isHoriz$$18$$ ? $childWidth_height$$165$$ = $availBounds$$1_x$$302$$.$w$ * $sizeRatio$$1$$ : $childHeight_isRoot$$4$$ = $availBounds$$1_x$$302$$.$h$ * $sizeRatio$$1$$;
        this.$_layout$(!$isHoriz$$18$$, $view$$74$$, $child$$78_options$$281$$, $childX$$1_y$$271$$, $childY$$1_width$$189$$, $childWidth_height$$165$$, $childHeight_isRoot$$4$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$18$$ ? $childX$$1_y$$271$$ += $childWidth_height$$165$$ : $childY$$1_width$$189$$ += $childHeight_isRoot$$4$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$310$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$310$$ ? $id$$310$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$35$$) {
  this.Init($manager$$35$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$827_keyCode$$53$$) {
  var $isNavigable$$1$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$827_keyCode$$53$$);
  if(!$isNavigable$$1$$ && ($event$$827_keyCode$$53$$ = $event$$827_keyCode$$53$$.keyCode, 219 == $event$$827_keyCode$$53$$ || 221 == $event$$827_keyCode$$53$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$77$$, $context$$633$$, $callback$$187$$, $callbackObj$$133$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$77$$, $context$$633$$, $callback$$187$$, $callbackObj$$133$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$826$$) {
  var $eventConsumed$$9$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$826$$.keyCode && $event$$826$$.ctrlKey) {
    var $node$$341$$ = this.$getFocus$();
    $node$$341$$.$isIsolateEnabled$() && ($node$$341$$.$_bIsolated$ ? $node$$341$$.$__restoreNode$() : $node$$341$$.$__isolateNode$());
    (0,D.$DvtEventManager$consumeEvent$$)($event$$826$$)
  }else {
    $eventConsumed$$9$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$826$$)
  }
  return $eventConsumed$$9$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
(0,D.$DvtBundle$addDefaultStrings$$)("DvtTreemapBundle", {COLOR:"Color", ISOLATE:"Isolate", OTHER:"Other", RESTORE:"Restore", SIZE:"Size"});
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {groupGaps:"outer", nodeDefaults:{header:{backgroundColor:"#FFFFFF", borderColor:"#d6dfe6", hoverBackgroundColor:"#ebeced", hoverOuterColor:"#ebeced", hoverInnerColor:"#d6d7d8", isolate:"auto", labelHalign:"start", labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), selectedBackgroundColor:"#dae9f5", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000", useNodeColor:"off", _hoverLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), 
_selectedLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), _drillableLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableHoverLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableSelectedLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;")}, 
hoverColor:"#ebeced", groupLabelDisplay:"header", labelDisplay:"node", labelHalign:"center", labelValign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}};
  return D;
});