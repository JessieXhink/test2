/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtBaseTreeView", D.$DvtBaseTreeView$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$DvtBaseTreeView$$.prototype.Init = function $$DvtBaseTreeView$$$$Init$($context$$624$$, $callback$$181$$, $callbackObj$$127$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$624$$, $callback$$181$$, $callbackObj$$127$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$624$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$624$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$SetOptions$ = function $$DvtBaseTreeView$$$$$SetOptions$$($options$$273$$) {
  $options$$273$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$273$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtBaseTreeView$$.prototype.$render$ = function $$DvtBaseTreeView$$$$$render$$($ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$, $container$$198_width$$185$$, $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$) {
  var $bNewOptions$$ = $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ || !this.$Options$;
  this.$SetOptions$($ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$);
  var $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$ = this.$getOptions$();
  if($newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$.nodes == D.$JSCompiler_alias_NULL$$) {
    $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ = D.$JSCompiler_alias_NULL$$
  }else {
    $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ = [];
    for(var $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$ = D.$DvtArrayUtils$$.$createBooleanMap$($newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$.hiddenCategories), $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ = 0;$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ < $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$.nodes.length;$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$++) {
      var $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$ = $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$.nodes[$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$];
      $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$._index = $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$;
      ($newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$ = (0,D.$JSCompiler_StaticMethods__processNode$$)(this, $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$, $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$)) && $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.push($newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$)
    }
    if(1 == $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.length) {
      $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ = $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$[0]
    }else {
      for(var $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ = $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$ = 0;$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ < $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.length;$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$++) {
        $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$ += $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$[$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$].$getSize$()
      }
      $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ = this.$CreateNode$({value:$newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$});
      (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$, $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$);
      $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ = $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$
    }
  }
  this.$ApplyParsedProperties$({root:$ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$});
  !(0,window.isNaN)($container$$198_width$$185$$) && !(0,window.isNaN)($availSpace$$124_bBlackBoxUpdate$$3_height$$160$$) && (this.$Width$ = $container$$198_width$$185$$, this.$Height$ = $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$);
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$124_bBlackBoxUpdate$$3_height$$160$$);
  $container$$198_width$$185$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$($container$$198_width$$185$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$getCtx$(), this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$198_width$$185$$, $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ = this.$getOptions$().animationOnDataChange;
  $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ && $bNewOptions$$ && (D.$DvtBlackBoxAnimationHandler$$.isSupported($ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$) ? (this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$, this.$_container$, $container$$198_width$$185$$, $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$, 
  this.$AnimationDuration$), $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$ = D.$JSCompiler_alias_TRUE$$) : this.$_oldRoot$ && "auto" == $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ && (this.$_deleteContainer$ = this.$GetDeleteContainer$(), this.$addChild$(this.$_deleteContainer$), $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$ = 
  this.$_oldRoot$, $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$ = this.$_root$, $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$ = this.$_oldAncestors$, $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$ = this.$_ancestors$, $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$, $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.$_oldRoot$ = 
  $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$, $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.$_oldAncestors$ = $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$, (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$, $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$, 
  $newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$) ? ($ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$), $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$ = 
  (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$), $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$.push($artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$), $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$.push($newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$, 
  $hiddenCategories$$inline_9116_oldAncestors$$inline_9129_oldList$$inline_9131$$, $newAncestors$$inline_9130_newList$$inline_9132_nodeOptions$$inline_9117_rootNode$$inline_9118$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$, [$artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$], [$newRoot$$inline_9128_options$$inline_9114_size$$inline_9119$$]), this.$Animation$ = $ah$$5_animationOnDataChange$$3_options$$274_root$$31_rootNodes$$inline_9115$$.$getAnimation$(D.$JSCompiler_alias_TRUE$$))) : 
  this.$Animation$ = this.$GetDisplayAnimation$($container$$198_width$$185$$, $artificialRoot$$inline_9121_bounds$$157_i$$inline_9120_oldRoot$$inline_9127$$);
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$124_bBlackBoxUpdate$$3_height$$160$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$198_width$$185$$;
  $bNewOptions$$ ? this.$_processInitialSelections$() : this.$ReselectNodes$();
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$);
  this.$Animation$ || (0,D.$JSCompiler_StaticMethods__processInitialHighlighting$$)(this);
  this.$UpdateAriaAttributes$()
};
D.$DvtBaseTreeView$$.prototype.render = D.$DvtBaseTreeView$$.prototype.$render$;
D.$DvtBaseTreeView$$.prototype.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeView$$.prototype.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeView$$.prototype.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_RenderBackground$$ = function $$JSCompiler_StaticMethods_RenderBackground$$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$200$$) {
  var $background$$14$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_RenderBackground$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$14$$);
  $container$$200$$.$addChild$($background$$14$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$126$$) {
  if(0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$126$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$203$$) {
  var $options$$275$$ = $JSCompiler_StaticMethods_RenderEmptyText$self$$.$getOptions$(), $emptyText$$4$$ = $options$$275$$.emptyText;
  $emptyText$$4$$ || ($emptyText$$4$$ = (0,D.$DvtBundle$getTranslation$$)($options$$275$$, "labelNoData", "DvtUtilBundle", "NO_DATA"));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$203$$, $emptyText$$4$$, new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$), $JSCompiler_StaticMethods_RenderEmptyText$self$$.$__getEventManager$())
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$204$$, $bounds$$159$$) {
  var $animationOnDisplay$$5$$ = this.$getOptions$().animationOnDisplay;
  return D.$DvtBlackBoxAnimationHandler$$.isSupported($animationOnDisplay$$5$$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$5$$, $container$$204$$, $bounds$$159$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$AnimationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$Animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__processInitialHighlighting$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$getCtx$())
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$33$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$33$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$70$$, $context$$625$$, $callback$$182$$, $callbackObj$$128$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$70$$, $context$$625$$, $callback$$182$$, $callbackObj$$128$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($categories$$31$$) {
  this.$getOptions$().highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$31$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$31$$, D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$), "any" == this.$getOptions$().highlightMatch)
};
D.$DvtBaseTreeView$$.prototype.highlight = D.$DvtBaseTreeView$$.prototype.$highlight$;
D.$DvtBaseTreeView$$.prototype.select = function $$DvtBaseTreeView$$$$select$($selection$$42_targets$$8$$) {
  var $options$$276$$ = this.$getOptions$();
  $options$$276$$.selection = D.$DvtJSONUtils$$.$clone$($selection$$42_targets$$8$$);
  this.$_selectionHandler$ && ($selection$$42_targets$$8$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$), (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, $options$$276$$.selection, $selection$$42_targets$$8$$))
};
D.$DvtBaseTreeView$$.prototype.select = D.$DvtBaseTreeView$$.prototype.select;
D.$DvtBaseTreeView$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($afComponent$$3_menus$$1_nodes$$21_props$$20$$) {
  var $options$$277_templates$$2$$ = this.$getOptions$();
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_root$ = $afComponent$$3_menus$$1_nodes$$21_props$$20$$.root;
  this.$_ancestors$ = $options$$277_templates$$2$$._ancestors ? $options$$277_templates$$2$$._ancestors : [];
  this.$_nodeCount$ = this.$_root$ ? D.$DvtBaseTreeUtils$$.$calcNodeCount$(this.$_root$) : 0;
  this.$_maxDepth$ = this.$_root$ ? D.$DvtBaseTreeUtils$$.$calcMaxDepth$(this.$_root$, 0) : 0;
  this.$AnimationDuration$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$277_templates$$2$$.animationDuration) / 1E3;
  this.$_styles$ = $afComponent$$3_menus$$1_nodes$$21_props$$20$$.$styles$ ? $afComponent$$3_menus$$1_nodes$$21_props$$20$$.$styles$ : {};
  (this.$_nodeSelection$ = "none" == $options$$277_templates$$2$$.selectionMode ? D.$JSCompiler_alias_NULL$$ : "single" == $options$$277_templates$$2$$.selectionMode ? "s" : "m") ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_nodeSelection$), this.$_initialSelection$ = $options$$277_templates$$2$$.selection) : this.$_selectionHandler$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$));
  this.$_legendSource$ = D.$JSCompiler_alias_NULL$$;
  this.$_attrGroups$ = [];
  if($options$$277_templates$$2$$.attributeGroups) {
    $afComponent$$3_menus$$1_nodes$$21_props$$20$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$);
    for(var $i$$898$$ = 0;$i$$898$$ < $options$$277_templates$$2$$.attributeGroups.length;$i$$898$$++) {
      var $attrGroup$$ = $options$$277_templates$$2$$.attributeGroups[$i$$898$$], $agObj$$ = D.$JSCompiler_alias_NULL$$;
      if("continuous" == $attrGroup$$.attributeType) {
        D.$DvtBaseTreeUtils$$.$calcContinuousAttrGroupsExtents$($attrGroup$$, $afComponent$$3_menus$$1_nodes$$21_props$$20$$), $agObj$$ = new D.$DvtContinuousAttrGroups$$($attrGroup$$.min, $attrGroup$$.max, $attrGroup$$.minLabel, $attrGroup$$.maxLabel, $attrGroup$$.colors)
      }else {
        for(var $agObj$$ = new D.$DvtDiscreteAttrGroups$$, $groupIndex$$73$$ = 0;$groupIndex$$73$$ < $attrGroup$$.groups.length;$groupIndex$$73$$++) {
          var $group$$37$$ = $attrGroup$$.groups[$groupIndex$$73$$];
          $agObj$$.add($group$$37$$.id, $group$$37$$.label, {color:$group$$37$$.color, pattern:$group$$37$$.pattern})
        }
      }
      this.$_attrGroups$.push({$attrGroups$:$agObj$$, $stampId$:$attrGroup$$.S, id:$attrGroup$$.id});
      !$options$$277_templates$$2$$._adf && !$options$$277_templates$$2$$._legendSource && 0 == $i$$898$$ ? this.$_legendSource$ = $agObj$$ : $options$$277_templates$$2$$._legendSource && $options$$277_templates$$2$$._legendSource == $attrGroup$$.id && (this.$_legendSource$ = $agObj$$)
    }
    D.$DvtBaseTreeUtils$$.$processContinuousAttrGroups$(this.$_attrGroups$, $afComponent$$3_menus$$1_nodes$$21_props$$20$$)
  }
  if(($afComponent$$3_menus$$1_nodes$$21_props$$20$$ = $options$$277_templates$$2$$._contextMenus) && 0 < $afComponent$$3_menus$$1_nodes$$21_props$$20$$.length) {
    this.$_eventHandler$.$ContextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$getCtx$(), $afComponent$$3_menus$$1_nodes$$21_props$$20$$)
  }
  if($options$$277_templates$$2$$ = $options$$277_templates$$2$$._templates) {
    this.$_templates$ = {};
    for(var $templateKey$$ in $options$$277_templates$$2$$) {
      $afComponent$$3_menus$$1_nodes$$21_props$$20$$ = D.$DvtAfComponentFactory$$.$parseJsonElement$($options$$277_templates$$2$$[$templateKey$$]), this.$_templates$[$templateKey$$] = $afComponent$$3_menus$$1_nodes$$21_props$$20$$
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$899$$ = 0;$i$$899$$ < $selectedNodes$$1$$.length;$i$$899$$++) {
    $selectedNodes$$1$$[$i$$899$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$9$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$9$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialHighlighting$$ = function $$JSCompiler_StaticMethods__processInitialHighlighting$$$($JSCompiler_StaticMethods__processInitialHighlighting$self$$) {
  var $highlightedCategories$$1$$ = $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$getOptions$().highlightedCategories;
  $highlightedCategories$$1$$ && 0 < $highlightedCategories$$1$$.length && $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$highlight$($highlightedCategories$$1$$)
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$305$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$305$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$305$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setFocused$ = function $$JSCompiler_prototypeAlias$$$$setFocused$$($isFocused$$6$$) {
  this.$_hasFocus$ = $isFocused$$6$$;
  this.$_eventHandler$.$setFocused$($isFocused$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_prototypeAlias$$.$__isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$__isDragAvailable$$($clientIds$$22$$) {
  return this.$_selectionHandler$ ? $clientIds$$22$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($node$$327_rowKeys$$3$$) {
  $node$$327_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$327_rowKeys$$3$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$327_rowKeys$$3$$ = [];
  for(var $selection$$43$$ = this.$_selectionHandler$.getSelection(), $i$$900$$ = 0;$i$$900$$ < $selection$$43$$.length;$i$$900$$++) {
    $node$$327_rowKeys$$3$$.push($selection$$43$$[$i$$900$$].getId())
  }
  return $node$$327_rowKeys$$3$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$29$$ = [], $selection$$44$$ = this.$_selectionHandler$.getSelection(), $i$$901$$ = 0;$i$$901$$ < $selection$$44$$.length;$i$$901$$++) {
    $displayables$$29$$.push($selection$$44$$[$i$$901$$].$getDisplayable$())
  }
  return $displayables$$29$$
};
D.$JSCompiler_prototypeAlias$$.$__processBreadcrumbsEvent$ = function $$JSCompiler_prototypeAlias$$$$__processBreadcrumbsEvent$$($event$$825$$) {
  $event$$825$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$825$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$306$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$306$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$306$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$306$$));
  $JSCompiler_StaticMethods___drill$self$$.$getCtx$().$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$127$$) {
  return this.$_eventHandler$.$GetLogicalObject$($target$$127$$)
};
D.$DvtBaseTreeView$$.prototype.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeView$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = function $$DvtBaseTreeView$$$$$getAutomation$$() {
  return new D.$DvtTreeAutomation$$(this)
};
D.$DvtBaseTreeView$$.prototype.getAutomation = D.$DvtBaseTreeView$$.prototype.$getAutomation$;
D.$DvtBaseTreeView$$.prototype.$getBreadcrumbs$ = (0,D.$JSCompiler_get$$)("$_breadcrumbs$");
D.$JSCompiler_StaticMethods__processNode$$ = function $$JSCompiler_StaticMethods__processNode$$$($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$14$$, $childOptions_nodeOptions$$5$$) {
  if(D.$DvtBaseTreeUtils$$.$isHiddenNode$($hiddenCategories$$14$$, $childOptions_nodeOptions$$5$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $node$$329$$ = $JSCompiler_StaticMethods__processNode$self$$.$CreateNode$($childOptions_nodeOptions$$5$$);
  if($node$$329$$.$isDisclosed$()) {
    var $childNodes$$28$$ = [];
    $childOptions_nodeOptions$$5$$ = $childOptions_nodeOptions$$5$$.nodes ? $childOptions_nodeOptions$$5$$.nodes : [];
    for(var $childIndex$$12$$ = 0;$childIndex$$12$$ < $childOptions_nodeOptions$$5$$.length;$childIndex$$12$$++) {
      var $childNode$$14_childNodeOptions$$ = $childOptions_nodeOptions$$5$$[$childIndex$$12$$];
      $childNode$$14_childNodeOptions$$._index = $childIndex$$12$$;
      ($childNode$$14_childNodeOptions$$ = (0,D.$JSCompiler_StaticMethods__processNode$$)($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$14$$, $childNode$$14_childNodeOptions$$)) && $childNodes$$28$$.push($childNode$$14_childNodeOptions$$)
    }
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($node$$329$$, $childNodes$$28$$)
  }
  return $node$$329$$
};
D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$ = function $$JSCompiler_StaticMethods_UpdateAriaNavigation$$$($JSCompiler_StaticMethods_UpdateAriaNavigation$self$$, $root$$33$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$DvtAgent$isEnvironmentTest$$)()) {
    for(var $nodes$$22$$ = D.$DvtBaseTreeUtils$$.$getAllVisibleNodes$($root$$33$$), $i$$903$$ = 0;$i$$903$$ < $nodes$$22$$.length - 1;$i$$903$$++) {
      var $id$$308$$ = $JSCompiler_StaticMethods_UpdateAriaNavigation$self$$.getId() + ($nodes$$22$$[$i$$903$$ + 1].getId() ? $nodes$$22$$[$i$$903$$ + 1].getId() : $nodes$$22$$[$i$$903$$ + 1].$getLabel$()), $id$$308$$ = $id$$308$$.replace(/\s+/g, "");
      $nodes$$22$$[$i$$903$$ + 1].$getDisplayable$().setId($id$$308$$, D.$JSCompiler_alias_TRUE$$);
      $nodes$$22$$[$i$$903$$].$getDisplayable$().$setAriaProperty$("flowto", $id$$308$$)
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$isDragAvailable$ = function $$DvtBaseTreeView$$$$$isDragAvailable$$($mouseX$$55$$, $mouseY$$55$$, $clientIds$$23$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$23$$)
};
D.$DvtBaseTreeView$$.prototype.$getDragTransferable$ = function $$DvtBaseTreeView$$$$$getDragTransferable$$($mouseX$$56$$, $mouseY$$56$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$56$$, $mouseY$$56$$)
};

D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$622$$, $deleteContainer$$13$$) {
  this.Init($context$$622$$, $deleteContainer$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$7$$, $node$$312$$) {
  if(!$node$$312$$ || !$ancestors$$7$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$885$$ = 0;$i$$885$$ < $ancestors$$7$$.length;$i$$885$$++) {
    if($ancestors$$7$$[$i$$885$$].id == $node$$312$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$69$$, $context$$623$$, $callback$$180$$, $callbackObj$$126$$) {
  this.Init($context$$623$$, $callback$$180$$, $callbackObj$$126$$);
  this.$_view$ = $view$$69$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$814_shiftKey$$inline_9096$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$814_shiftKey$$inline_9096$$);
  var $obj$$368$$ = this.$GetLogicalObject$($event$$814_shiftKey$$inline_9096$$.target);
  $obj$$368$$ && ($event$$814_shiftKey$$inline_9096$$ = $event$$814_shiftKey$$inline_9096$$.shiftKey, $obj$$368$$.$isDrillReplaceEnabled$ && $obj$$368$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $obj$$368$$.getId(), $event$$814_shiftKey$$inline_9096$$))
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$815_obj$$369$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$815_obj$$369$$);
  $event$$815_obj$$369$$ = this.$GetLogicalObject$($event$$815_obj$$369$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$815_obj$$369$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$816_obj$$370$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$816_obj$$370$$);
  ($event$$816_obj$$370$$ = this.$GetLogicalObject$($event$$816_obj$$370$$.target)) && $event$$816_obj$$370$$.$handleMouseOver$ && $event$$816_obj$$370$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$817_relatedId_relatedObj$$1$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$817_relatedId_relatedObj$$1$$);
  var $obj$$371$$ = this.$GetLogicalObject$($event$$817_relatedId_relatedObj$$1$$.target);
  $obj$$371$$ && $obj$$371$$.$handleMouseOut$ && ($event$$817_relatedId_relatedObj$$1$$ = ($event$$817_relatedId_relatedObj$$1$$ = this.$GetLogicalObject$($event$$817_relatedId_relatedObj$$1$$.relatedTarget)) && $event$$817_relatedId_relatedObj$$1$$.getId ? $event$$817_relatedId_relatedObj$$1$$.getId() : D.$JSCompiler_alias_NULL$$, ($obj$$371$$.getId() == D.$JSCompiler_alias_NULL$$ || $event$$817_relatedId_relatedObj$$1$$ != $obj$$371$$.getId()) && $obj$$371$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$818$$) {
  var $eventConsumed$$8_obj$$372$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed$$8_obj$$372$$ = this.$getFocus$();
  13 == $event$$818$$.keyCode && !$event$$818$$.ctrlKey ? ($eventConsumed$$8_obj$$372$$ = this.$getFocus$(), $eventConsumed$$8_obj$$372$$.$isDrillReplaceEnabled$ && $eventConsumed$$8_obj$$372$$.$isDrillReplaceEnabled$() && ($event$$818$$.shiftKey && ($eventConsumed$$8_obj$$372$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$8_obj$$372$$.getId(), $event$$818$$.shiftKey)), (0,D.$DvtEventManager$consumeEvent$$)($event$$818$$), $eventConsumed$$8_obj$$372$$ = 
  D.$JSCompiler_alias_TRUE$$) : $eventConsumed$$8_obj$$372$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$818$$);
  return $eventConsumed$$8_obj$$372$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$819_obj$$373$$) {
  $event$$819_obj$$373$$ = this.$GetLogicalObject$($event$$819_obj$$373$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$819_obj$$373$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $event$$819_obj$$373$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $event$$819_obj$$373$$ && $event$$819_obj$$373$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $event$$819_obj$$373$$ && (this.$_currentHoverItem$ = $event$$819_obj$$373$$, $event$$819_obj$$373$$.$handleMouseOver$())
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($event$$820_obj$$374$$) {
  ($event$$820_obj$$374$$ = this.$GetLogicalObject$($event$$820_obj$$374$$.target)) && $event$$820_obj$$374$$.$isDrillReplaceEnabled$ && $event$$820_obj$$374$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $event$$820_obj$$374$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$375$$) {
  $obj$$375$$ && ($obj$$375$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$375$$.$isDrillable$()) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$375$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$DvtBaseTreeEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtBaseTreeEventManager$$$$$ProcessRolloverEvent$$($event$$821$$, $categories$$29_nodes$$18_obj$$377$$, $bOver$$14_rolloverEvent$$9$$) {
  var $options$$272$$ = this.$_view$.$getOptions$();
  if("dim" == $options$$272$$.hoverBehavior) {
    $categories$$29_nodes$$18_obj$$377$$ = $categories$$29_nodes$$18_obj$$377$$.$getCategories$ ? $categories$$29_nodes$$18_obj$$377$$.$getCategories$() : [];
    $options$$272$$.highlightedCategories = $bOver$$14_rolloverEvent$$9$$ ? $categories$$29_nodes$$18_obj$$377$$.slice() : D.$JSCompiler_alias_NULL$$;
    $bOver$$14_rolloverEvent$$9$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$14_rolloverEvent$$9$$ ? "categoryRollOver" : "categoryRollOut", $options$$272$$.highlightedCategories);
    $categories$$29_nodes$$18_obj$$377$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_view$.$_root$);
    var $hoverBehaviorDelay$$7$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$272$$.hoverBehaviorDelay);
    this.$RolloverHandler$.$processEvent$($bOver$$14_rolloverEvent$$9$$, $categories$$29_nodes$$18_obj$$377$$, $hoverBehaviorDelay$$7$$, "any" == $options$$272$$.highlightMatch);
    $event$$821$$.stopPropagation()
  }
};
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$, $props$$19$$) {
  this.$_view$ = $treeView$$;
  this.$_options$ = $props$$19$$;
  var $nodeDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_id$ = $props$$19$$.id;
  this.$_color$ = $props$$19$$.color ? $props$$19$$.color : "#000000";
  this.$_textStr$ = $props$$19$$.label;
  this.$_labelStyle$ = "string" == typeof $props$$19$$.labelStyle ? new D.$DvtCSSStyle$$($props$$19$$.labelStyle) : $props$$19$$.labelStyle;
  this.$_pattern$ = $props$$19$$.pattern;
  this.$_selectable$ = $props$$19$$.selectable;
  this.$_shortDesc$ = $props$$19$$.shortDesc ? $props$$19$$.shortDesc : $props$$19$$.tooltip;
  this.$_size$ = $props$$19$$.value;
  this.$_drilling$ = $props$$19$$.drilling ? $props$$19$$.drilling : $nodeDefaults$$2$$.drilling;
  this.$_stampId$ = $props$$19$$.S;
  this.$_bArtificialRoot$ = $props$$19$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$IsHover$ = this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$19$$) {
  if($children$$19$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$886$$ = 0;$i$$886$$ < $children$$19$$.length;$i$$886$$++) {
      $children$$19$$[$i$$886$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$19$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = function $$DvtBaseTreeNode$$$$$getChildNodes$$() {
  return this.$_children$ ? this.$_children$ : []
};
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$3$$ = [], $childDescendants$$, $child$$75$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$3$$
  }
  for(var $i$$887$$ = 0;$i$$887$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$887$$++) {
    $child$$75$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$887$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$75$$), $descendants$$3$$.push($child$$75$$), $descendants$$3$$ = $descendants$$3$$.concat($childDescendants$$)
  }
  return $descendants$$3$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$88$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$88$$ && ($parent$$88$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$315$$) {
  return!$node$$315$$ || !this.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$315$$ ? D.$JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$315$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$20$$, $child$$76_root$$29$$, $depth$$21$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$21$$) {
    return $returnArray$$
  }
  if(0 == $depth$$21$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$20$$]
  }
  if($child$$76_root$$29$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$20$$ = $child$$76_root$$29$$.$getChildNodes$();
    for(var $i$$888$$ = 0;$i$$888$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$20$$.length;$i$$888$$++) {
      $child$$76_root$$29$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$20$$[$i$$888$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$76_root$$29$$, $child$$76_root$$29$$, $depth$$21$$ - 1))
    }
  }
  return $returnArray$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$30$$, $id$$303$$) {
  if($root$$30$$.getId() == $id$$303$$) {
    return $root$$30$$
  }
  for(var $child$$77_node$$316$$ = D.$JSCompiler_alias_NULL$$, $children$$21$$ = $root$$30$$.$getChildNodes$(), $length$$30$$ = $children$$21$$.length, $child$$77_node$$316$$ = D.$JSCompiler_alias_NULL$$, $i$$889$$ = 0;$i$$889$$ < $length$$30$$;$i$$889$$++) {
    if($child$$77_node$$316$$ = $children$$21$$[$i$$889$$], $child$$77_node$$316$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$77_node$$316$$, $id$$303$$)) {
      return $child$$77_node$$316$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  var $categories$$30_parent$$89_parentCategories$$1$$ = this.$getOptions$().categories;
  $categories$$30_parent$$89_parentCategories$$1$$ || ($categories$$30_parent$$89_parentCategories$$1$$ = ($categories$$30_parent$$89_parentCategories$$1$$ = ($categories$$30_parent$$89_parentCategories$$1$$ = this.$_parent$) ? $categories$$30_parent$$89_parentCategories$$1$$.$getCategories$() : D.$JSCompiler_alias_NULL$$) ? $categories$$30_parent$$89_parentCategories$$1$$.slice() : [], $categories$$30_parent$$89_parentCategories$$1$$.push(this.getId()));
  return $categories$$30_parent$$89_parentCategories$$1$$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$10$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$10$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$10$$, this.$getDataContext$()) : this.$_shortDesc$
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = (0,D.$JSCompiler_get$$)("$_shortDesc$");
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), value:this.$getSize$(), color:this.$getColor$()}
};
D.$JSCompiler_prototypeAlias$$.$getIndex$ = function $$JSCompiler_prototypeAlias$$$$getIndex$$() {
  return this.$getOptions$()._index
};
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$53$$) {
  this.$_alpha$ = $alpha$$53$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($disclosed$$6$$) {
  this.$getOptions$()._expanded = $disclosed$$6$$
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = function $$JSCompiler_prototypeAlias$$$$isDisclosed$$() {
  return this.$getOptions$()._expanded !== D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"replace" == this.$_drilling$ || "insertAndReplace" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  var $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$ = this.$_view$.$getOptions$()._spb;
  if(!$JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$ || !$JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$[this.$_stampId$]) {
    $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$ = D.$JSCompiler_alias_NULL$$
  }else {
    for(var $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$ = $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$[this.$_stampId$], $ret$$inline_9106$$ = [], $i$$inline_9107$$ = 0;$i$$inline_9107$$ < $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$.length;$i$$inline_9107$$++) {
      $ret$$inline_9106$$.push(new D.$DvtShowPopupBehavior$$($JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$[$i$$inline_9107$$].popupId, $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$[$i$$inline_9107$$].triggerType, $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$[$i$$inline_9107$$].alignId, $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$[$i$$inline_9107$$].align))
    }
    $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$ = $ret$$inline_9106$$
  }
  return $JSCompiler_temp$$453_behaviors$$15_optionsArray$$inline_9105$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$196$$) {
  var $children$$22$$ = this.$getChildNodes$();
  if($children$$22$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$890$$ = 0;$i$$890$$ < $children$$22$$.length;$i$$890$$++) {
      $children$$22$$[$i$$890$$].$render$($container$$196$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$());
  this.$handleMouseOut$ && this.$handleMouseOut$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"off" != this.$_selectable$ && this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$46$$) {
  this.$_selected$ = $selected$$46$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$3$$, $alpha$$54$$) {
  this.$setAlpha$($alpha$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$21$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$60$$, $oldNode$$19$$) {
  $handler$$60$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$60$$, $oldNode$$19$$.$getChildNodes$(), this.$getChildNodes$());
  var $bSizeChanged_endState$$17$$ = this.$GetAnimationParams$(), $animationUpdateColor_startState$$7$$ = $oldNode$$19$$.$GetAnimationParams$($bSizeChanged_endState$$17$$), $bColorChanged_nodePlayable$$29$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$7$$, $bSizeChanged_endState$$17$$) && ($bColorChanged_nodePlayable$$29$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$29$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$17$$), $handler$$60$$.add($bColorChanged_nodePlayable$$29$$, 1), $bSizeChanged_endState$$17$$ = 
  this.$_size$ != $oldNode$$19$$.$_size$, $bColorChanged_nodePlayable$$29$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$19$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$7$$), ($animationUpdateColor_startState$$7$$ = this.$_view$.$getOptions$().animationUpdateColor) && ($bSizeChanged_endState$$17$$ || $bColorChanged_nodePlayable$$29$$))) {
    this.$_color$ = $animationUpdateColor_startState$$7$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$61$$) {
  if(!$handler$$61$$.$_bDrill$ || !$handler$$61$$.$_bDrill$ || !($handler$$61$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$61$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$44_i$$891$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
    $handler$$61$$.add($anim$$44_i$$891$$, 2);
    if(this.$hasChildren$()) {
      for($anim$$44_i$$891$$ = 0;$anim$$44_i$$891$$ < this.$_children$.length;$anim$$44_i$$891$$++) {
        this.$_children$[$anim$$44_i$$891$$].$animateInsert$($handler$$61$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$62$$, $container$$197$$) {
  $container$$197$$.$addChild$(this.$_shape$);
  var $anim$$45_i$$892$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
  $handler$$62$$.add($anim$$45_i$$892$$, 0);
  if(!$handler$$62$$.$_bDrill$ && this.$hasChildren$()) {
    for($anim$$45_i$$892$$ = 0;$anim$$45_i$$892$$ < this.$_children$.length;$anim$$45_i$$892$$++) {
      this.$_children$[$anim$$45_i$$892$$].$animateDelete$($handler$$62$$, $container$$197$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$90$$) {
  var $depth$$22$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$90$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$90$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$90$$;) {
    $depth$$22$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$90$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$90$$.$_parent$
  }
  return $depth$$22$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$111$$) {
  var $defaultFillColor$$ = $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_color$);
  $text$$111$$.$setSolidFill$($defaultFillColor$$);
  var $textStyle$$8$$ = [];
  $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.labelStyle);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$111$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$8$$));
  D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $text$$111$$.$setSolidFill$($defaultFillColor$$)
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$17$$) {
  var $size$$48$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$17$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$17$$.$_view$.$getOptions$().nodeDefaults.labelStyle.$getFontSize$()) && ($size$$48$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$17$$));
  return $size$$48$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$JSCompiler_StaticMethods_GetTemplate$$ = function $$JSCompiler_StaticMethods_GetTemplate$$$($JSCompiler_StaticMethods_GetTemplate$self$$) {
  return $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$ ? $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$[$JSCompiler_StaticMethods_GetTemplate$self$$.$_stampId$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreeNode$$.prototype.$UpdateAriaLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$318$$, $id$$304$$, $tooltip$$59$$, $datatip$$20$$, $datatipColor$$3$$) {
  this.Init($tooltip$$59$$, $datatip$$20$$, $datatipColor$$3$$);
  this.$_node$ = $node$$318$$;
  this.$_id$ = $id$$304$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$DvtBaseTreePeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBaseTreePeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$handleMouseOut$ = function $$DvtBaseTreePeer$$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$2$$, $availSpace$$128$$, $ancestors$$8_dataItems$$3$$, $dims$$70_height$$161_rootLabel$$1$$) {
  var $breadcrumbs$$7_context$$626$$ = $treeView$$2$$.$getCtx$(), $disabledStyle_styleDefaults$$4$$ = $treeView$$2$$.$getOptions$().styleDefaults, $enabledStyle$$1_enabledStyleArray$$ = [];
  $enabledStyle$$1_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle$$1_enabledStyleArray$$.push($disabledStyle_styleDefaults$$4$$._drillTextStyle);
  var $enabledStyle$$1_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle$$1_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle$$1_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyleArray$$ = [];
  $disabledStyleArray$$.push($disabledStyle_styleDefaults$$4$$._currentTextStyle);
  $disabledStyle_styleDefaults$$4$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyleArray$$).toString();
  $breadcrumbs$$7_context$$626$$ = new D.$DvtBreadcrumbs$$($breadcrumbs$$7_context$$626$$, $treeView$$2$$.$__processBreadcrumbsEvent$, $treeView$$2$$, {$labelStyle$:$enabledStyle$$1_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_styleDefaults$$4$$});
  $treeView$$2$$.$addChild$($breadcrumbs$$7_context$$626$$);
  $ancestors$$8_dataItems$$3$$ = $ancestors$$8_dataItems$$3$$.slice(0).reverse();
  $ancestors$$8_dataItems$$3$$.push({label:$dims$$70_height$$161_rootLabel$$1$$});
  $breadcrumbs$$7_context$$626$$.$render$({items:$ancestors$$8_dataItems$$3$$}, $availSpace$$128$$.$w$);
  $dims$$70_height$$161_rootLabel$$1$$ = $breadcrumbs$$7_context$$626$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs$$7_context$$626$$, $availSpace$$128$$.x, $availSpace$$128$$.y);
  $dims$$70_height$$161_rootLabel$$1$$ = $dims$$70_height$$161_rootLabel$$1$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$128$$.y += $dims$$70_height$$161_rootLabel$$1$$;
  $availSpace$$128$$.$h$ -= $dims$$70_height$$161_rootLabel$$1$$;
  $treeView$$2$$.removeChild($breadcrumbs$$7_context$$626$$);
  return $breadcrumbs$$7_context$$626$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$3$$, $availSpace$$129$$, $attrGroups$$7_legendDims$$) {
  var $colorContainer$$2_options$$280$$ = $treeView$$3$$.$getOptions$(), $colorSpace_sizeValueStr$$ = $colorContainer$$2_options$$280$$.sizeLabel, $colorValueStr$$ = $colorContainer$$2_options$$280$$.colorLabel;
  if(!($colorSpace_sizeValueStr$$ == D.$JSCompiler_alias_NULL$$ && $colorValueStr$$ == D.$JSCompiler_alias_NULL$$ && $attrGroups$$7_legendDims$$ == D.$JSCompiler_alias_NULL$$)) {
    var $context$$627$$ = $treeView$$3$$.$getCtx$(), $eventManager$$48_labelSpace$$1$$ = $treeView$$3$$.$__getEventManager$(), $legend$$31$$ = new D.$DvtContainer$$($context$$627$$);
    $treeView$$3$$.$addChild$($legend$$31$$);
    var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$627$$, $treeView$$3$$, $legend$$31$$, $availSpace$$129$$.$w$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$), $borderColor$$62_legendStyles$$ = (0,D.$DvtCSSStyle$afterSkinAlta$$)($treeView$$3$$.$getOptions$().skin) ? D.$JSCompiler_alias_NULL$$ : "#000000", $labelDims$$11_legendStyleArray$$ = [];
    $labelDims$$11_legendStyleArray$$.push($colorContainer$$2_options$$280$$.styleDefaults._labelStyle);
    var $borderColor$$62_legendStyles$$ = {borderColor:$borderColor$$62_legendStyles$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($labelDims$$11_legendStyleArray$$)}, $colorContainer$$2_options$$280$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$627$$, $eventManager$$48_labelSpace$$1$$, $legend$$31$$, $availSpace$$129$$.$w$, $availSpace$$129$$.$h$, $attrGroups$$7_legendDims$$, $borderColor$$62_legendStyles$$), $labelDims$$11_legendStyleArray$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
    D.$JSCompiler_alias_NULL$$, $colorDims$$ = $colorContainer$$2_options$$280$$ ? $colorContainer$$2_options$$280$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
    if($labelContainer$$ && !$colorContainer$$2_options$$280$$) {
      $labelContainer$$.$setTranslateX$($availSpace$$129$$.y + ($availSpace$$129$$.$w$ - $labelDims$$11_legendStyleArray$$.$w$) / 2)
    }else {
      if($colorContainer$$2_options$$280$$ && !$labelContainer$$) {
        $colorContainer$$2_options$$280$$.$setTranslateX$($availSpace$$129$$.y + ($availSpace$$129$$.$w$ - $colorDims$$.$w$) / 2)
      }else {
        if($colorContainer$$2_options$$280$$ && $labelContainer$$) {
          var $availWidth$$18$$ = $availSpace$$129$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
          $labelDims$$11_legendStyleArray$$.$w$ + $colorDims$$.$w$ > $availWidth$$18$$ && ($labelDims$$11_legendStyleArray$$.$w$ > $availWidth$$18$$ / 2 && $colorDims$$.$w$ > $availWidth$$18$$ / 2 ? ($legend$$31$$.removeChild($labelContainer$$), $legend$$31$$.removeChild($colorContainer$$2_options$$280$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$627$$, $treeView$$3$$, $legend$$31$$, $availWidth$$18$$ / 2, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$), 
          $colorContainer$$2_options$$280$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$627$$, $eventManager$$48_labelSpace$$1$$, $legend$$31$$, $availWidth$$18$$ / 2, $availSpace$$129$$.$h$, $attrGroups$$7_legendDims$$, $borderColor$$62_legendStyles$$)) : $labelDims$$11_legendStyleArray$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$48_labelSpace$$1$$ = $availWidth$$18$$ - $colorDims$$.$w$, $legend$$31$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$627$$, 
          $treeView$$3$$, $legend$$31$$, $eventManager$$48_labelSpace$$1$$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$)) : ($colorSpace_sizeValueStr$$ = $availWidth$$18$$ - $labelDims$$11_legendStyleArray$$.$w$, $legend$$31$$.removeChild($colorContainer$$2_options$$280$$), $colorContainer$$2_options$$280$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$627$$, $eventManager$$48_labelSpace$$1$$, $legend$$31$$, $colorSpace_sizeValueStr$$, $availSpace$$129$$.$h$, 
          $attrGroups$$7_legendDims$$, $borderColor$$62_legendStyles$$)), $labelDims$$11_legendStyleArray$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $colorContainer$$2_options$$280$$.$getDimensions$());
          (0,D.$DvtAgent$isRightToLeft$$)($context$$627$$) ? ($colorContainer$$2_options$$280$$.$setTranslateX$($availSpace$$129$$.x), $labelContainer$$.$setTranslateX$($availSpace$$129$$.x + $availSpace$$129$$.$w$ - $labelDims$$11_legendStyleArray$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$129$$.x), $colorContainer$$2_options$$280$$.$setTranslateX$($availSpace$$129$$.x + $availSpace$$129$$.$w$ - $colorDims$$.$w$))
        }
      }
    }
    $attrGroups$$7_legendDims$$ = $legend$$31$$.$getDimensions$();
    $legend$$31$$.$setTranslateY$($availSpace$$129$$.y + $availSpace$$129$$.$h$ - $attrGroups$$7_legendDims$$.$h$);
    $availSpace$$129$$.$h$ -= $attrGroups$$7_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
    $treeView$$3$$.removeChild($legend$$31$$);
    return $legend$$31$$
  }
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$628_widthPerSection$$, $treeView$$4$$, $attrTypeStyle_legend$$32$$, $availWidth$$19_x$$298$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$43$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$628_widthPerSection$$), $eventManager$$49$$ = $treeView$$4$$.$__getEventManager$(), $attrValueStyle_styleDefaults$$5$$ = $treeView$$4$$.$getOptions$().styleDefaults, $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$628_widthPerSection$$);
    $attrTypeStyle_legend$$32$$.$addChild$($labelContainer$$1$$);
    var $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$5$$._attributeTypeTextStyle);
    $attrTypeStyle_legend$$32$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($sizeWidth_textStyle$$10$$);
    $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$5$$._attributeValueTextStyle);
    var $attrValueStyle_styleDefaults$$5$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($sizeWidth_textStyle$$10$$), $sizeLabel_sizeStr$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$, $sizeWidth_textStyle$$10$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel_sizeStr$$ = (0,D.$DvtBundle$getTranslation$$)($treeView$$4$$.$getOptions$(), "labelSize", $treeView$$4$$.$getBundlePrefix$(), "SIZE"), $sizeLabel_sizeStr$$ = new D.$DvtOutputText$$($context$$628_widthPerSection$$, $sizeLabel_sizeStr$$, 0, 0), $sizeLabel_sizeStr$$.$setCSSStyle$($attrTypeStyle_legend$$32$$), $labelContainer$$1$$.$addChild$($sizeLabel_sizeStr$$), $sizeLabelWidth$$ = $sizeLabel_sizeStr$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$628_widthPerSection$$, 
    $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$5$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_textStyle$$10$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel_colorStr$$1$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$, $colorWidth$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel_colorStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($treeView$$4$$.$getOptions$(), "labelColor", $treeView$$4$$.$getBundlePrefix$(), "COLOR"), $colorLabel_colorStr$$1$$ = new D.$DvtOutputText$$($context$$628_widthPerSection$$, $colorLabel_colorStr$$1$$, 0, 0), $colorLabel_colorStr$$1$$.$setCSSStyle$($attrTypeStyle_legend$$32$$), $labelContainer$$1$$.$addChild$($colorLabel_colorStr$$1$$), $colorLabelWidth$$ = $colorLabel_colorStr$$1$$.$measureDimensions$().$w$, 
    $colorValueLabel$$ = new D.$DvtOutputText$$($context$$628_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$5$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$19_x$$298$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_textStyle$$10$$ + $colorWidth$$ > $availWidth$$19_x$$298$$ && ($context$$628_widthPerSection$$ = $availWidth$$19_x$$298$$ / 2, $sizeWidth_textStyle$$10$$ > $context$$628_widthPerSection$$ && $colorWidth$$ > $context$$628_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$628_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$49$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$628_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$49$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_textStyle$$10$$ > $colorWidth$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$19_x$$298$$ - $colorWidth$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$49$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, 
    $availWidth$$19_x$$298$$ - $sizeWidth_textStyle$$10$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$49$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, 
    $colorValueLabelWidth$$ = 0));
    $availWidth$$19_x$$298$$ = 0;
    $isRTL$$43$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$19_x$$298$$), $availWidth$$19_x$$298$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel_colorStr$$1$$.$setX$($availWidth$$19_x$$298$$), $availWidth$$19_x$$298$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$19_x$$298$$), $availWidth$$19_x$$298$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel_sizeStr$$.$setX$($availWidth$$19_x$$298$$))) : ($sizeValueLabel$$ && ($sizeLabel_sizeStr$$.$setX$($availWidth$$19_x$$298$$), $availWidth$$19_x$$298$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$19_x$$298$$), $availWidth$$19_x$$298$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel_colorStr$$1$$.$setX$($availWidth$$19_x$$298$$), $availWidth$$19_x$$298$$ += 
    $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorValueLabel$$.$setX$($availWidth$$19_x$$298$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$32$$) {
  this.Init($manager$$32$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$822$$) {
  return this.$isNavigationEvent$($event$$822$$) && !$event$$822$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$823$$) {
  return 32 == $event$$823$$.keyCode && $event$$823$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"alta", animationDuration:500, animationOnDataChange:"none", animationOnDisplay:"none", highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, selectionMode:"multiple", sorting:"off", styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), 
_attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _currentTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _drillTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap$$2_ret$$108$$) {
  $defaultsMap$$2_ret$$108$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$108$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$108$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$2_ret$$108$$)
};
D.$DvtBaseTreeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeUtils$$, D.$DvtObj$$, "DvtBaseTreeUtils");
D.$DvtBaseTreeUtils$$.$calcMaxDepth$ = function $$DvtBaseTreeUtils$$$$calcMaxDepth$$($node$$319$$, $depth$$23$$) {
  var $maxDepth$$2$$ = $depth$$23$$, $children$$23$$ = $node$$319$$.$getChildNodes$();
  if($children$$23$$) {
    for(var $i$$893$$ = 0;$i$$893$$ < $children$$23$$.length;$i$$893$$++) {
      var $childDepth$$ = D.$DvtBaseTreeUtils$$.$calcMaxDepth$($children$$23$$[$i$$893$$], $depth$$23$$ + 1), $maxDepth$$2$$ = window.Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
D.$DvtBaseTreeUtils$$.$calcNodeCount$ = function $$DvtBaseTreeUtils$$$$calcNodeCount$$($children$$24_node$$320$$) {
  var $count$$27$$ = 1;
  if($children$$24_node$$320$$ = $children$$24_node$$320$$.$getChildNodes$()) {
    for(var $i$$894$$ = 0;$i$$894$$ < $children$$24_node$$320$$.length;$i$$894$$++) {
      $count$$27$$ += D.$DvtBaseTreeUtils$$.$calcNodeCount$($children$$24_node$$320$$[$i$$894$$])
    }
  }
  return $count$$27$$
};
D.$DvtBaseTreeUtils$$.$getAllNodes$ = function $$DvtBaseTreeUtils$$$$getAllNodes$$($node$$321$$) {
  var $ret$$109$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$321$$, $ret$$109$$);
  return $ret$$109$$
};
D.$DvtBaseTreeUtils$$.$getAllVisibleNodes$ = function $$DvtBaseTreeUtils$$$$getAllVisibleNodes$$($node$$322$$) {
  var $ret$$110$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$322$$, $ret$$110$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$);
  return $ret$$110$$
};
D.$DvtBaseTreeUtils$$.$getLeafNodes$ = function $$DvtBaseTreeUtils$$$$getLeafNodes$$($node$$323$$) {
  var $ret$$111$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$323$$, $ret$$111$$, D.$JSCompiler_alias_TRUE$$);
  return $ret$$111$$
};
D.$DvtBaseTreeUtils$$.$isHiddenNode$ = function $$DvtBaseTreeUtils$$$$isHiddenNode$$($categoryMap$$2$$, $nodeOptions$$2$$) {
  return D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$2$$, $nodeOptions$$2$$.categories)
};
D.$DvtBaseTreeUtils$$.$calcContinuousAttrGroupsExtents$ = function $$DvtBaseTreeUtils$$$$calcContinuousAttrGroupsExtents$$($attrGroupOptions$$, $nodes$$19$$) {
  var $stampId$$15$$ = $attrGroupOptions$$.S;
  if(!($stampId$$15$$ == D.$JSCompiler_alias_NULL$$ || $attrGroupOptions$$.min != D.$JSCompiler_alias_NULL$$ && $attrGroupOptions$$.max != D.$JSCompiler_alias_NULL$$)) {
    for(var $min$$20$$ = window.Infinity, $max$$21$$ = -window.Infinity, $i$$895$$ = 0;$i$$895$$ < $nodes$$19$$.length;$i$$895$$++) {
      var $node$$324_value$$184$$ = $nodes$$19$$[$i$$895$$];
      $stampId$$15$$ == $node$$324_value$$184$$.$_stampId$ && ($node$$324_value$$184$$ = $node$$324_value$$184$$.$getOptions$()._cv, $node$$324_value$$184$$ != D.$JSCompiler_alias_NULL$$ && ($max$$21$$ = window.Math.max($max$$21$$, $node$$324_value$$184$$), $min$$20$$ = window.Math.min($min$$20$$, $node$$324_value$$184$$)))
    }
    $attrGroupOptions$$.min == D.$JSCompiler_alias_NULL$$ && ($attrGroupOptions$$.min = $min$$20$$);
    $attrGroupOptions$$.max == D.$JSCompiler_alias_NULL$$ && ($attrGroupOptions$$.max = $max$$21$$)
  }
};
D.$DvtBaseTreeUtils$$.$processContinuousAttrGroups$ = function $$DvtBaseTreeUtils$$$$processContinuousAttrGroups$$($attrGroupsList$$, $nodes$$20$$) {
  for(var $i$$896$$ = 0;$i$$896$$ < $attrGroupsList$$.length;$i$$896$$++) {
    var $attrGroupsMap_stampId$$16$$ = $attrGroupsList$$[$i$$896$$], $attrGroups$$6$$ = $attrGroupsMap_stampId$$16$$.$attrGroups$, $attrGroupsMap_stampId$$16$$ = $attrGroupsMap_stampId$$16$$.$stampId$;
    if($attrGroups$$6$$ instanceof D.$DvtContinuousAttrGroups$$ && $attrGroupsMap_stampId$$16$$ != D.$JSCompiler_alias_NULL$$) {
      for(var $j$$132$$ = 0;$j$$132$$ < $nodes$$20$$.length;$j$$132$$++) {
        var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_9109_node$$325$$ = $nodes$$20$$[$j$$132$$];
        if($attrGroupsMap_stampId$$16$$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_9109_node$$325$$.$_stampId$) {
          var $color$$inline_9111$$ = $attrGroups$$6$$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_9109_node$$325$$.$getOptions$()._cv);
          $color$$inline_9111$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_9109_node$$325$$.$_color$ = $color$$inline_9111$$)
        }
      }
    }
  }
};
D.$DvtBaseTreeUtils$$.$_addNodesToArray$ = function $$DvtBaseTreeUtils$$$$_addNodesToArray$$($i$$897_node$$326$$, $ret$$112$$, $bLeafOnly$$, $bRendered$$1$$) {
  if($i$$897_node$$326$$) {
    var $children$$25$$ = $i$$897_node$$326$$.$getChildNodes$(), $childCount$$9$$ = $children$$25$$ ? $children$$25$$.length : 0;
    (!$bLeafOnly$$ || 0 == $childCount$$9$$) && (!$bRendered$$1$$ || $i$$897_node$$326$$.$getDisplayable$()) && $ret$$112$$.push($i$$897_node$$326$$);
    for($i$$897_node$$326$$ = 0;$i$$897_node$$326$$ < $childCount$$9$$;$i$$897_node$$326$$++) {
      D.$DvtBaseTreeUtils$$.$_addNodesToArray$($children$$25$$[$i$$897_node$$326$$], $ret$$112$$, $bLeafOnly$$, $bRendered$$1$$)
    }
  }
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$1$$) {
  this.$_treeView$ = $treeView$$1$$;
  this.$_root$ = $treeView$$1$$.$_root$
};
(0,D.$goog$exportPath_$$)("DvtTreeAutomation", D.$DvtTreeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtAutomation$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$107_indices$$12$$) {
  var $childIndices_logicalObj$$20_parent$$91$$ = this.$_treeView$.$getLogicalObject$($displayable$$107_indices$$12$$);
  if(!$childIndices_logicalObj$$20_parent$$91$$) {
    return $displayable$$107_indices$$12$$.getParent() instanceof D.$DvtButton$$ && ($displayable$$107_indices$$12$$ = $displayable$$107_indices$$12$$.getParent()), $childIndices_logicalObj$$20_parent$$91$$ = $displayable$$107_indices$$12$$.getParent(), $childIndices_logicalObj$$20_parent$$91$$ instanceof D.$DvtBreadcrumbs$$ ? "breadcrumbs[" + (0,D.$JSCompiler_StaticMethods_getCrumbIndex$$)($childIndices_logicalObj$$20_parent$$91$$, $displayable$$107_indices$$12$$) + "]" : D.$JSCompiler_alias_NULL$$
  }
  if($childIndices_logicalObj$$20_parent$$91$$ instanceof D.$DvtBaseTreeNode$$) {
    $displayable$$107_indices$$12$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$20_parent$$91$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$107_indices$$12$$ += "[0]"
    }
    $displayable$$107_indices$$12$$ = ($childIndices_logicalObj$$20_parent$$91$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$20_parent$$91$$, this.$_root$.$getChildNodes$())) ? $displayable$$107_indices$$12$$ + $childIndices_logicalObj$$20_parent$$91$$ : $displayable$$107_indices$$12$$;
    if(0 < $displayable$$107_indices$$12$$.length) {
      return"node" + $displayable$$107_indices$$12$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$330$$, $children$$26$$) {
  if($children$$26$$ && 0 < $children$$26$$.length) {
    for(var $n$$41$$ = 0;$n$$41$$ < $children$$26$$.length;$n$$41$$++) {
      if($children$$26$$[$n$$41$$] == $node$$330$$) {
        return"[" + $n$$41$$ + "]"
      }
      var $nodeIndex$$11$$ = this.$_getIndicesFromNode$($node$$330$$, $children$$26$$[$n$$41$$].$getChildNodes$());
      if($nodeIndex$$11$$) {
        return"[" + $n$$41$$ + "]" + $nodeIndex$$11$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($crumb$$2_foundNode_subId$$30$$) {
  return!$crumb$$2_foundNode_subId$$30$$ ? D.$JSCompiler_alias_NULL$$ : 0 == $crumb$$2_foundNode_subId$$30$$.indexOf("breadcrumbs") ? ($crumb$$2_foundNode_subId$$30$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_root$.$_view$.$getBreadcrumbs$(), $crumb$$2_foundNode_subId$$30$$.substring($crumb$$2_foundNode_subId$$30$$.indexOf("[") + 1, $crumb$$2_foundNode_subId$$30$$.indexOf("]")))) ? $crumb$$2_foundNode_subId$$30$$.$getElem$() : D.$JSCompiler_alias_NULL$$ : !this.$_root$.$_bArtificialRoot$ && 
  ($crumb$$2_foundNode_subId$$30$$ = $crumb$$2_foundNode_subId$$30$$.substring(0, $crumb$$2_foundNode_subId$$30$$.indexOf("[")) + $crumb$$2_foundNode_subId$$30$$.substring($crumb$$2_foundNode_subId$$30$$.indexOf("]") + 1), "node" == $crumb$$2_foundNode_subId$$30$$) ? this.$_root$.$getDisplayable$().$getElem$() : ($crumb$$2_foundNode_subId$$30$$ = (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)(this, this.$_root$, $crumb$$2_foundNode_subId$$30$$)) ? $crumb$$2_foundNode_subId$$30$$.$getDisplayable$().$getElem$() : 
  D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.getDomElementForSubId = D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
D.$JSCompiler_StaticMethods__getNodeFromSubId$$ = function $$JSCompiler_StaticMethods__getNodeFromSubId$$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$15_node$$331$$, $subId$$31$$) {
  var $index$$247_openParen$$3$$ = $subId$$31$$.indexOf("["), $closeParen$$3_nextOpenParen$$1$$ = $subId$$31$$.indexOf("]");
  if(0 <= $index$$247_openParen$$3$$ && 0 <= $closeParen$$3_nextOpenParen$$1$$) {
    $index$$247_openParen$$3$$ = $subId$$31$$.substring($index$$247_openParen$$3$$ + 1, $closeParen$$3_nextOpenParen$$1$$);
    $subId$$31$$ = $subId$$31$$.substring($closeParen$$3_nextOpenParen$$1$$ + 1);
    var $closeParen$$3_nextOpenParen$$1$$ = $subId$$31$$.indexOf("["), $nextCloseParen$$1$$ = $subId$$31$$.indexOf("]");
    $childNode$$15_node$$331$$ = (0,D.$DvtTreeAutomation$_getNodeByIndex$$)($childNode$$15_node$$331$$.$getChildNodes$(), $index$$247_openParen$$3$$);
    return 0 <= $closeParen$$3_nextOpenParen$$1$$ && 0 <= $nextCloseParen$$1$$ ? (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$15_node$$331$$, $subId$$31$$) : $childNode$$15_node$$331$$
  }
};
D.$JSCompiler_StaticMethods__getNodeFromPath$$ = function $$JSCompiler_StaticMethods__getNodeFromPath$$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$16_node$$332$$, $path$$41$$) {
  var $index$$248$$ = $path$$41$$.shift();
  $childNode$$16_node$$332$$ = (0,D.$DvtTreeAutomation$_getNodeByIndex$$)($childNode$$16_node$$332$$.$getChildNodes$(), $index$$248$$);
  return 0 == $path$$41$$.length ? $childNode$$16_node$$332$$ : 0 < $path$$41$$.length ? (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$16_node$$332$$, $path$$41$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$333_subIdPath$$2$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$333_subIdPath$$2$$[0] && $node$$333_subIdPath$$2$$.shift();
  $node$$333_subIdPath$$2$$ = 0 == $node$$333_subIdPath$$2$$.length ? this.$_root$ : (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)(this, this.$_root$, $node$$333_subIdPath$$2$$);
  return{color:$node$$333_subIdPath$$2$$.$getColor$(), label:$node$$333_subIdPath$$2$$.$getLabel$(), selected:$node$$333_subIdPath$$2$$.$isSelected$() == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_FALSE$$ : $node$$333_subIdPath$$2$$.$isSelected$(), size:$node$$333_subIdPath$$2$$.$getSize$(), tooltip:$node$$333_subIdPath$$2$$.$getShortDesc$()}
};
D.$DvtTreeAutomation$$.prototype.getNode = D.$DvtTreeAutomation$$.prototype.$getNode$;
D.$DvtTreeAutomation$_getNodeByIndex$$ = function $$DvtTreeAutomation$_getNodeByIndex$$$($nodes$$23$$, $index$$249$$) {
  for(var $i$$904$$ = 0;$i$$904$$ < $nodes$$23$$.length;$i$$904$$++) {
    if($index$$249$$ == $nodes$$23$$[$i$$904$$].$getIndex$()) {
      return $nodes$$23$$[$i$$904$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
  return D;
});