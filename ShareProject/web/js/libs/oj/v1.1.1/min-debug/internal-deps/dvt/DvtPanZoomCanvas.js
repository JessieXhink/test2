/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$470$$, $id$$240$$, $styleMap$$53$$) {
  this.Init($context$$470$$, $id$$240$$, $styleMap$$53$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$471$$, $id$$241$$, $styleMap$$54$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$471$$, D.$JSCompiler_alias_NULL$$, $id$$241$$);
  this.$_styleMap$ = $styleMap$$54$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_itemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$471$$.$getTooltipManager$();
  this.$_isTouchDevice$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$241$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$471$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$471$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$471$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_7740_selectedIndex$$5$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_7740_selectedIndex$$5$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_7740_selectedIndex$$5$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_7740_selectedIndex$$5$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_7740_selectedIndex$$5$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$242$$) {
  var $JSCompiler_temp_const$$115_button$$67$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $context$$inline_7744_s$$inline_7750$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $s$$inline_7745$$ = new D.$DvtRect$$($context$$inline_7744_s$$inline_7750$$, 0, 0, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$w$, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$h$, $id$$242$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($s$$inline_7745$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($s$$inline_7745$$);
  $s$$inline_7745$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7744_s$$inline_7750$$, $s$$inline_7745$$.getWidth(), $s$$inline_7745$$.getHeight()));
  var $context$$inline_7749_context$$inline_7754$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $context$$inline_7744_s$$inline_7750$$ = new D.$DvtRect$$($context$$inline_7749_context$$inline_7754$$, 0, 0, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$w$, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$h$, $id$$242$$ + "_up");
  $context$$inline_7744_s$$inline_7750$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_7744_s$$inline_7750$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_7744_s$$inline_7750$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_7744_s$$inline_7750$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7749_context$$inline_7754$$, $context$$inline_7744_s$$inline_7750$$.getWidth(), $context$$inline_7744_s$$inline_7750$$.getHeight()));
  var $context$$inline_7749_context$$inline_7754$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $s$$inline_7755$$ = new D.$DvtRect$$($context$$inline_7749_context$$inline_7754$$, 0, 0, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$w$, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$h$, $id$$242$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($s$$inline_7755$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $s$$inline_7755$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $s$$inline_7755$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $s$$inline_7755$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7749_context$$inline_7754$$, $s$$inline_7755$$.getWidth(), $s$$inline_7755$$.getHeight()));
  $JSCompiler_temp_const$$115_button$$67$$ = new D.$DvtButton$$($JSCompiler_temp_const$$115_button$$67$$, $s$$inline_7745$$, $context$$inline_7744_s$$inline_7750$$, $s$$inline_7755$$, D.$JSCompiler_alias_NULL$$, $id$$242$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$115_button$$67$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$115_button$$67$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$115_button$$67$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$115_button$$67$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$317$$, $buttonStates_itdim_tooltip$$48$$, $enaState$$1$$, $ovrState$$4$$, $dwnState$$4$$) {
  $obj$$317$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$317$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$48$$);
  $buttonStates_itdim_tooltip$$48$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$getCtx$(), $enaState$$1$$ ? $enaState$$1$$ : $obj$$317$$);
  var $maxItemDim$$ = this.$_maxItemDim$;
  $buttonStates_itdim_tooltip$$48$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$48$$.$w$, this.$_itemDim$.$w$ = $buttonStates_itdim_tooltip$$48$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$48$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$48$$.$h$, this.$_itemDim$.$h$ = $buttonStates_itdim_tooltip$$48$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$48$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$4$$ && $dwnState$$4$$) && ($buttonStates_itdim_tooltip$$48$$ = [], $buttonStates_itdim_tooltip$$48$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$48$$[1] = $ovrState$$4$$, $buttonStates_itdim_tooltip$$48$$[2] = $dwnState$$4$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$48$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$317$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$752$$) {
  return this.$_items$[$i$$752$$]
};
D.$JSCompiler_prototypeAlias$$.$getItemCount$ = function $$JSCompiler_prototypeAlias$$$$getItemCount$$() {
  return this.$_items$.length
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$1$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$1$$ || $selIndex$$1$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$1$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$476_event$$655_stage$$18$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$476_event$$655_stage$$18$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$476_event$$655_stage$$18$$ = this.$getCtx$();
  for(var $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_7775_leftPadding$$inline_7761$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$, "paddingLeft", 0), $bottomPadding$$inline_7762$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$, "paddingBottom", 0), $rightPadding$$inline_7763$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$, 
  "paddingRight", 0), $interItemPadding$$inline_7764$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$, "paddingInner", 0), $currY$$inline_7765$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$, "paddingTop", 0), $context$$inline_7766$$ = this.$getCtx$(), $dim$$inline_7767_proxy$$inline_7772$$, $itemSprite$$inline_7768$$, $item$$inline_7769$$, $bgColor$$inline_7774_content$$inline_7770_dim$$64$$ = new D.$DvtContainer$$($context$$inline_7766$$, 
  "__dd"), $i$$inline_7771$$ = 0;$i$$inline_7771$$ < this.$_items$.length;$i$$inline_7771$$++) {
    $item$$inline_7769$$ = this.$_items$[$i$$inline_7771$$], $dim$$inline_7767_proxy$$inline_7772$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_7766$$, $item$$inline_7769$$), $itemSprite$$inline_7768$$ = new D.$DvtContainer$$($context$$inline_7766$$, "__it" + $i$$inline_7771$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_7768$$, $bgAlpha$$inline_7775_leftPadding$$inline_7761$$, $currY$$inline_7765$$), $itemSprite$$inline_7768$$.$addChild$($item$$inline_7769$$), 
    $item$$inline_7769$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $item$$inline_7769$$.setCursor("pointer"), $currY$$inline_7765$$ += $dim$$inline_7767_proxy$$inline_7772$$.$h$ + $interItemPadding$$inline_7764$$, this.$_eventManager$ && ($dim$$inline_7767_proxy$$inline_7772$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_7771$$]), 
    this.$_eventManager$.$associate$($item$$inline_7769$$, $dim$$inline_7767_proxy$$inline_7772$$)), $bgColor$$inline_7774_content$$inline_7770_dim$$64$$.$addChild$($itemSprite$$inline_7768$$)
  }
  $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_7766$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_7775_leftPadding$$inline_7761$$ + $rightPadding$$inline_7763$$, $currY$$inline_7765$$ + $bottomPadding$$inline_7762$$ - $interItemPadding$$inline_7764$$, $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$);
  $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$.$addChild$($bgColor$$inline_7774_content$$inline_7770_dim$$64$$);
  $bgColor$$inline_7774_content$$inline_7770_dim$$64$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_7775_leftPadding$$inline_7761$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_7774_content$$inline_7770_dim$$64$$ && $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$.$setSolidFill$($bgColor$$inline_7774_content$$inline_7770_dim$$64$$, $bgAlpha$$inline_7775_leftPadding$$inline_7761$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$;
  $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$476_event$$655_stage$$18$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_7774_content$$inline_7770_dim$$64$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$476_event$$655_stage$$18$$) ? -$comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$.$w$ + 1 * $bgColor$$inline_7774_content$$inline_7770_dim$$64$$.$w$ / 4 : 3 * $bgColor$$inline_7774_content$$inline_7770_dim$$64$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_7760_dd$$inline_7773_dddim_transX$$5$$, 3 * $bgColor$$inline_7774_content$$inline_7770_dim$$64$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$476_event$$655_stage$$18$$ = $context$$476_event$$655_stage$$18$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$476_event$$655_stage$$18$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$476_event$$655_stage$$18$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$HandleHideDropdownTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleHideDropdownTimer$$() {
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleStageMouseFocusChange$ = function $$JSCompiler_prototypeAlias$$$$HandleStageMouseFocusChange$$() {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outOfFocusCheckTimer$.reset();
  this.$_outOfFocusCheckTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleOutOfFocusCheckTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleOutOfFocusCheckTimer$$() {
  this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$HandleButtonDown$ = function $$JSCompiler_prototypeAlias$$$$HandleButtonDown$$() {
  (0,D.$DvtEventManager$consumeEvent$$)()
};
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$660$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$660$$);
  var $displayObject$$inline_7777_eventTarget$$;
  $displayObject$$inline_7777_eventTarget$$ = $event$$660$$.target;
  for(var $content$$6_n$$inline_7778$$, $id$$inline_7779$$;$displayObject$$inline_7777_eventTarget$$;) {
    if(($id$$inline_7779$$ = $displayObject$$inline_7777_eventTarget$$.getId()) && $displayObject$$inline_7777_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_7779$$.substr(0, 4)) {
      $content$$6_n$$inline_7778$$ = $displayObject$$inline_7777_eventTarget$$;
      break
    }
    $displayObject$$inline_7777_eventTarget$$ = $displayObject$$inline_7777_eventTarget$$.getParent()
  }
  $displayObject$$inline_7777_eventTarget$$ = $content$$6_n$$inline_7778$$;
  var $index$$221$$;
  this.$_dropdown$ && $displayObject$$inline_7777_eventTarget$$ && ($content$$6_n$$inline_7778$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$221$$ = $content$$6_n$$inline_7778$$.$getChildIndex$($displayObject$$inline_7777_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$660$$;
  this.$setSelectedIndex$($index$$221$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$19$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$getCtx$().$_stage$;
  $stage$$19$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$19$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$19$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtComboBox$$.prototype.$getDimensions$ = function $$DvtComboBox$$$$$getDimensions$$() {
  return this.$_button$ != D.$JSCompiler_alias_NULL$$ ? this.$_button$.$getDimensions$() : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$DvtComboBox$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$JSCompiler_StaticMethods_UpdateContentArea$$ = function $$JSCompiler_StaticMethods_UpdateContentArea$$$($JSCompiler_StaticMethods_UpdateContentArea$self$$) {
  var $bUseItem$$ = D.$JSCompiler_alias_TRUE$$, $buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_selectedIndex$;
  if($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$ && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$.length > $buttonStates$$1_selIndex$$2$$ && ($buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$[$buttonStates$$1_selIndex$$2$$]) && 2 < $buttonStates$$1_selIndex$$2$$.length) {
    (0,D.$JSCompiler_StaticMethods_setUpState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[0]), (0,D.$JSCompiler_StaticMethods_setOverState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[1]), (0,D.$JSCompiler_StaticMethods_setDownState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[2]), $bUseItem$$ = D.$JSCompiler_alias_FALSE$$
  }
  $bUseItem$$ && (0 < $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$getNumChildren$() && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$removeChildAt$(0), $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$addChild$($JSCompiler_StaticMethods_UpdateContentArea$self$$.$getSelectedItem$()))
};
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$478_shape$$74$$, $ww$$100$$, $hh$$83$$) {
  var $aPoints$$1$$ = [];
  $aPoints$$1$$.push($ww$$100$$ - 12, $hh$$83$$ / 2 - 2);
  $aPoints$$1$$.push($ww$$100$$ - 4, $hh$$83$$ / 2 - 2);
  $aPoints$$1$$.push($ww$$100$$ - 8, $hh$$83$$ / 2 + 2);
  $aPoints$$1$$.push($ww$$100$$ - 12, $hh$$83$$ / 2 - 2);
  $context$$478_shape$$74$$ = new D.$DvtPolygon$$($context$$478_shape$$74$$, $aPoints$$1$$, D.$JSCompiler_alias_NULL$$);
  $context$$478_shape$$74$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$478_shape$$74$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$478_shape$$74$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$478_shape$$74$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$479$$, $x$$243$$, $y$$219$$, $w$$58$$, $h$$53$$, $id$$247$$) {
  this.Init($context$$479$$, $x$$243$$, $y$$219$$, $w$$58$$, $h$$53$$, $id$$247$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$480$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$480$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$10$$, $index$$222$$, $evt$$68$$) {
  this.Init($subtype$$10$$, $index$$222$$, $evt$$68$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$11$$, $index$$223$$, $evt$$69$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$223$$ === D.$JSCompiler_alias_VOID$$ && ($index$$223$$ = -1);
  this.$subtype$ = $subtype$$11$$;
  this.$_index$ = $index$$223$$;
  this.$_evt$ = $evt$$69$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBaseControl$$ = function $$DvtBaseControl$$$($context$$468$$) {
  this.Init($context$$468$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseControl$$, D.$DvtContainer$$, "DvtBaseControl");
D.$DvtBaseControl$$.prototype.Init = function $$DvtBaseControl$$$$Init$($context$$469$$) {
  D.$DvtBaseControl$$.$superclass$.Init.call(this, $context$$469$$);
  this.$_tooltipManager$ = $context$$469$$.$getTooltipManager$()
};
D.$DvtBaseControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$504$$, $button$$68$$, $panZoomCanvas$$8$$, $eventManager$$20$$) {
  this.Init($context$$504$$, $button$$68$$, $panZoomCanvas$$8$$, $eventManager$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBaseControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$505_proxy$$10$$, $button$$69$$, $panZoomCanvas$$9$$, $eventManager$$21$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $context$$505_proxy$$10$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$9$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($context$$505_proxy$$10$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$505_proxy$$10$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $button$$69$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$21$$;
  $context$$505_proxy$$10$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomInMouseDown$, this.$HandleZoomInMouseUp$, this.$HandleZoomInMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMIN"));
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $context$$505_proxy$$10$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom$$9_newZoom$$5$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$9_newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$9_newZoom$$5$$), $animator$$122$$ = new D.$DvtAnimator$$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$9_newZoom$$5$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$122$$);
    $animator$$122$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseDown$$() {
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomInTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseUp$$() {
  this.$_bZoomInMouseDown$ && (this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomInTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomInTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInTimer$$() {
  var $currZoom$$10_newZoom$$6$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$10_newZoom$$6$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$6$$);
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$19$$) {
  this.$_zoomInButton$.$setEnabled$($enabled$$19$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$506$$, $button$$70$$, $panZoomCanvas$$10$$, $eventManager$$22$$) {
  this.Init($context$$506$$, $button$$70$$, $panZoomCanvas$$10$$, $eventManager$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBaseControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$507_proxy$$11$$, $button$$71$$, $panZoomCanvas$$11$$, $eventManager$$23$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $context$$507_proxy$$11$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$11$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($context$$507_proxy$$11$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$507_proxy$$11$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $button$$71$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$23$$;
  $context$$507_proxy$$11$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomOutMouseDown$, this.$HandleZoomOutMouseUp$, this.$HandleZoomOutMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMOUT"));
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $context$$507_proxy$$11$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$11_newZoom$$7$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$11_newZoom$$7$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$11_newZoom$$7$$), $animator$$123$$ = new D.$DvtAnimator$$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$11_newZoom$$7$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$123$$);
    $animator$$123$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseDown$$() {
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomOutTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseUp$$() {
  this.$_bZoomOutMouseDown$ && (this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomOutTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutTimer$$() {
  var $currZoom$$12_newZoom$$8$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$12_newZoom$$8$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$12_newZoom$$8$$);
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$12_newZoom$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$20$$) {
  this.$_zoomOutButton$.$setEnabled$($enabled$$20$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$509$$, $button$$72$$, $panZoomCanvas$$12$$, $eventManager$$24$$) {
  this.Init($context$$509$$, $button$$72$$, $panZoomCanvas$$12$$, $eventManager$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBaseControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($context$$510_proxy$$12$$, $button$$73$$, $panZoomCanvas$$13$$, $eventManager$$25$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $context$$510_proxy$$12$$);
  this.$_zoomToFitButton$ = $button$$73$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$13$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_eventManager$ = $eventManager$$25$$;
  $context$$510_proxy$$12$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMTOFIT"));
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $context$$510_proxy$$12$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$124$$ = new D.$DvtAnimator$$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$124$$);
  $animator$$124$$.play()
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$502$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$6$$, $control$$, $styleMap$$60$$) {
  this.Init($context$$502$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$6$$, $control$$, $styleMap$$60$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBaseControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$503$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$7$$, $control$$1$$, $styleMap$$61$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$503$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$503$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$7$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$1$$.$addChild$($recenterButton$$1$$);
  $recenterButton$$1$$ && (this.$_panCenterSprite$ = $recenterButton$$1$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$1$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$503$$, $styleMap$$61$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$680$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$680$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$681_localPoint$$4_stagePoint$$8$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$681_localPoint$$4_stagePoint$$8$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$681_localPoint$$4_stagePoint$$8$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$681_localPoint$$4_stagePoint$$8$$);
  $event$$681_localPoint$$4_stagePoint$$8$$ = this.$_panButton$.$stageToLocal$($event$$681_localPoint$$4_stagePoint$$8$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$681_localPoint$$4_stagePoint$$8$$.x, $event$$681_localPoint$$4_stagePoint$$8$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$681_localPoint$$4_stagePoint$$8$$.x, $event$$681_localPoint$$4_stagePoint$$8$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$682$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$682$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$682$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$683$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_7897$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_PAN");
  this.$getTooltipManager$().$showTooltip$($event$$683$$.pageX, $event$$683$$.pageY, $tooltip$$inline_7897$$, $event$$683$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$684$$) {
  this.$HandlePanMouseUp$($event$$684$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$685_localPoint$$5_stagePoint$$9$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$685_localPoint$$5_stagePoint$$9$$);
  $event$$685_localPoint$$5_stagePoint$$9$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$685_localPoint$$5_stagePoint$$9$$);
  $event$$685_localPoint$$5_stagePoint$$9$$ = this.$_panButton$.$stageToLocal$($event$$685_localPoint$$5_stagePoint$$9$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$685_localPoint$$5_stagePoint$$9$$.x, $event$$685_localPoint$$5_stagePoint$$9$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$685_localPoint$$5_stagePoint$$9$$.x, $event$$685_localPoint$$5_stagePoint$$9$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$685_localPoint$$5_stagePoint$$9$$.x, $event$$685_localPoint$$5_stagePoint$$9$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads$$12_deltaY$$26$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$23$$ = window.Math.cos($angleRads$$12_deltaY$$26$$), $angleRads$$12_deltaY$$26$$ = window.Math.sin($angleRads$$12_deltaY$$26$$), $factor$$6$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$6$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$6$$ * $deltaX$$23$$, $factor$$6$$ * $angleRads$$12_deltaY$$26$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$686$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$686$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$687$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$687$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$688$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$688$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$689$$) {
  var $tooltip$$inline_7903$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMANDCENTER");
  this.$getTooltipManager$().$showTooltip$($event$$689$$.pageX, $event$$689$$.pageY, $tooltip$$inline_7903$$, $event$$689$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$689$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$690$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$690$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$691$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$691$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$4$$) {
  $displayObj$$4$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$($subtype$$12$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$12$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtControlPanelEvent");
D.$DvtControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtControlPanel$$ = function $$DvtControlPanel$$$($context$$481$$, $view$$59$$, $state$$75$$) {
  this.Init($context$$481$$, $view$$59$$, $state$$75$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanel$$, D.$DvtContainer$$, "DvtControlPanel");
D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtControlPanel$$.prototype.Init = function $$DvtControlPanel$$$$Init$($context$$482$$, $view$$60$$, $state$$76$$) {
  D.$DvtControlPanel$$.$superclass$.Init.call(this, $context$$482$$);
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $view$$60$$.$_panZoomCanvas$;
  this.$_controls$ = $view$$60$$.$_displayedControls$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$60$$);
  this.$_tooltipManager$ = $context$$482$$.$getTooltipManager$();
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$60$$) {
    this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtControlPanelEventManager$$($context$$482$$, D.$JSCompiler_alias_NULL$$, $view$$60$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  this.$_state$ = $state$$76$$;
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtControlPanel$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$ = function $$JSCompiler_StaticMethods_mouseDragPanningStarted$$$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.backgroundDragAlpha);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.borderDragAlpha)
};
D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$ = function $$JSCompiler_StaticMethods_mouseDragPanningEnded$$$($JSCompiler_StaticMethods_mouseDragPanningEnded$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseOver$ ? $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOver$(D.$JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$DvtControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$55$$ = 0, $h$$55$$ = this.$isSingleHorzRow$() ? D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$55$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $context$$483_proxy$$8$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getCtx$(), $contentBar$$ = new D.$DvtContainer$$($context$$483_proxy$$8$$), $hh$$84$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$483_proxy$$8$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$($context$$483_proxy$$8$$, $hh$$84$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($context$$483_proxy$$8$$, $hh$$84$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$483_proxy$$8$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$ ? D.$DvtButtonLAFUtils$$.$DIR_RIGHT$ : D.$DvtButtonLAFUtils$$.$DIR_LEFT$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $context$$483_proxy$$8$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $context$$483_proxy$$8$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$JSCompiler_StaticMethods_RenderExpanded$$ = function $$JSCompiler_StaticMethods_RenderExpanded$$$($JSCompiler_StaticMethods_RenderExpanded$self$$) {
  var $context$$490$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $s$$154$$ = new D.$DvtContainer$$($context$$490$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$ = new D.$DvtContainer$$($context$$490$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$ = new D.$DvtContainer$$($context$$490$$);
  $s$$154$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$);
  $s$$154$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$);
  var $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$490$$), $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = 0, $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$ = new D.$DvtContainer$$($context$$490$$), $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$;
  $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ = 0;
  var $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$();
  0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), 
  $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$), $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$)), $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$++);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$()) ? D.$DvtButtonLAFUtils$$.$DIR_RIGHT$ : 
  D.$DvtButtonLAFUtils$$.$DIR_LEFT$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$HandleCollapseClick$, $JSCompiler_StaticMethods_RenderExpanded$self$$);
  $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderExpanded$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$);
  $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$());
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$PopulateHorzContentBar$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$);
  0 < $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$++) : $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $backgroundHeight$$inline_7839_buttonWidth$$inline_7807$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  "buttonWidth", 0), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
  $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingInner", 0);
  $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ ? ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$(0), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$, 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, ($buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ - $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$.$h$) / 2), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += 
  window.Math.max($dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$.$w$, $backgroundHeight$$inline_7839_buttonWidth$$inline_7807$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$), $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$.$w$), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$) : 
  ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$, 
  $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$, $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$), $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ + 
  $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$.$w$, $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += 1), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), 0 == $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ && ($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, 
  $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, ($buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ - $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$.$h$) / 2), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$.$w$, 
  $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = window.Math.max($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ + $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$, $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$)), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ += $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$);
  $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$;
  $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16 || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ ? 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingTop", 0) : 0;
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$() && 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ += D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$() - $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$());
  if(0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) || 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097)) {
    $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = new D.$DvtContainer$$($context$$490$$), $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$.$setTranslateY$($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateY$() + $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = 
    $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) && ($buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$, $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$), $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ = 
    D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ += 
    $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$.$h$, $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ += $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = 
    $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, 
    "paddingInner", 0), $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$, $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$), 
    $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), 
    $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ += $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$.$h$ + $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ = 
    D.$DvtButtonLAFUtils$$.$createZoomOutButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$, $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$), $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), 
    $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ += $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$.$h$, 
    $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$.$getZoom$(), $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, 
    $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$), $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$), 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$setEnabled$($bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ != $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ && 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ != $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$)
  }
  var $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ = $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ = $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$, 
  $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $buttonWidth$$inline_7835_viewFrame$$inline_7842$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = ($dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? 
  $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ : $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ - $buttonWidth$$inline_7835_viewFrame$$inline_7842$$, $backgroundHeight$$inline_7839_buttonWidth$$inline_7807$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_7840$$ = 0, $backgroundShapeOffsetX$$inline_7841$$ = 0;
  $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ ? $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ && 0 == $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ && ($backgroundShapeOffsetX$$inline_7841$$ = $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ ? -$buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ : 
  $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$) : ($backgroundFrameOffsetX$$inline_7840$$ = $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ ? $buttonWidth$$inline_7835_viewFrame$$inline_7842$$ : 0, $backgroundShapeOffsetX$$inline_7841$$ = $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ ? $buttonWidth$$inline_7835_viewFrame$$inline_7842$$ : 
  0);
  if(0 < $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ || $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$) {
    var $r$$inline_7844_viewShape$$inline_7843$$ = $buttonWidth$$inline_7835_viewFrame$$inline_7842$$ = D.$JSCompiler_alias_NULL$$, $r$$inline_7844_viewShape$$inline_7843$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-radius", 0));
    $dim$$inline_7805_panelDrawerStyle$$inline_7837_yy$$inline_7812$$ ? ($bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ = 0 < $buttonPaddingInner$$inline_7811_nHorzContentBarChildren$$inline_7831_paddingSide$$inline_7826$$ && $buttonPaddingSide$$inline_7810_dim$$inline_7819_paddingInner$$inline_7825_paddingSide$$inline_7818_prevZoom$$inline_11300_vertContentBar$$inline_7830$$ != D.$JSCompiler_alias_NULL$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$, 
    $buttonWidth$$inline_7835_viewFrame$$inline_7842$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$, $r$$inline_7844_viewShape$$inline_7843$$, $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, 
    $backgroundHeight$$inline_7839_buttonWidth$$inline_7807$$, $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$, $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$), $r$$inline_7844_viewShape$$inline_7843$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$, 
    $r$$inline_7844_viewShape$$inline_7843$$, $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $backgroundHeight$$inline_7839_buttonWidth$$inline_7807$$, $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$, $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$)) : 
    ($buttonWidth$$inline_7835_viewFrame$$inline_7842$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$, $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
    !$bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $r$$inline_7844_viewShape$$inline_7843$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$, $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), !$bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$));
    $buttonWidth$$inline_7835_viewFrame$$inline_7842$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$));
    $buttonWidth$$inline_7835_viewFrame$$inline_7842$$.$setFill$(D.$JSCompiler_alias_NULL$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buttonWidth$$inline_7835_viewFrame$$inline_7842$$, $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_7840$$, $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateY$());
    $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$addChildAt$($buttonWidth$$inline_7835_viewFrame$$inline_7842$$, 0);
    $r$$inline_7844_viewShape$$inline_7843$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($r$$inline_7844_viewShape$$inline_7843$$, $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_7841$$, $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateY$());
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($r$$inline_7844_viewShape$$inline_7843$$)
  }
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$);
  $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ = $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$;
  $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$();
  $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = (0,D.$DvtAgent$isRightToLeft$$)($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$);
  $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
  !$JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && 0 == ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) ? $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ ? ($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$setTranslateX$(0 - $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateX$()), 
  $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$setTranslateY$(0), $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$), 
  $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$setTranslateX$($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateX$() - $buttonWidth$$inline_7852_dim$$inline_7824_nextZoom$$inline_11299_paddingInner$$inline_7817_panelHeight$$inline_7809_panelWidth$$inline_7836$$), $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$.$setTranslateY$(0))) : $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ ? 
  ($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$, 
  $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateX$() + $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$, $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$getTranslateX$(), 0) : $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ && 
  $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ && ($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, 
  $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$setTranslateX$(0), $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$.$setTranslateX$($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$.$w$ + 
  $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$.x - $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$));
  $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ = $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$;
  $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ = $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$;
  $context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$();
  $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$ && ($backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$.$getNumChildren$(), $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ = 
  1 < $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ || 0 < $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ && 
  1 == $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 
  ($bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$ = 0 < $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, 
  $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$), $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ += 4, $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ = $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$ ? 
  $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$ : window.Math.max($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$.$h$, $bBiDi$$inline_7851_barWidth$$inline_7855_context$$inline_7834_currY$$inline_7861_currZoom$$inline_11298_panelWidth$$inline_7808_vertContentBar$$inline_7815_vertContentBar$$inline_7822$$), $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ += 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$($context$$inline_7790_context$$inline_7862_currX$$inline_7803_proxy$$inline_7795_vertContentBar$$5$$, 
  $cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$, $backgroundWidth$$inline_7838_context$$inline_7804_context$$inline_7850_cpWidth$$inline_7853_currX$$17_dimHorizontal$$inline_7854_nVertContentBarChildren$$inline_7863_roundedCorner$$inline_7864$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, $bSingleRow$$inline_7791_collapseButtonWidth$$inline_7806_currY$$20_currY$$inline_7816_currY$$inline_7823_openside$$inline_7865$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$, $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$.$getTranslateX$(), $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$.$getTranslateY$()), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($dim$$inline_7866_horzContentBar$$6_zoomShape$$inline_7868$$), 
  $bBiDi$$5_openSide$$inline_7845_vertContentBar$$inline_7849_vertContentBar$$inline_7859$$.$addChildAt$($cpHeight$$inline_7867_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7789_nHorzContentBarChildren$$inline_7799_zoomFrame$$inline_7869$$, 0));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$490$$, $s$$154$$);
  return $s$$154$$
};
D.$DvtControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtControlPanel$$$$$HandleExpandClick$$($event$$661$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$661$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtControlPanel$$.prototype.$_doExpand$ = function $$DvtControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $event$$inline_7881_s$$155$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$addChild$($event$$inline_7881_s$$155$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_7872$$ = this.$getChildAt$(0), $odim$$inline_7874$$ = $oldContent$$inline_7872$$.$getDimensions$(), $openCloseButtonWidth$$inline_7875$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  if($odim$$inline_7874$$ && 0 != $odim$$inline_7874$$.$w$) {
    var $ndim$$inline_7876$$ = $event$$inline_7881_s$$155$$.$getDimensions$(), $animator$$inline_7877$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25);
    $oldContent$$inline_7872$$.$setAlpha$(1);
    $event$$inline_7881_s$$155$$.$setAlpha$(0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7877$$, "typeNumber", $oldContent$$inline_7872$$, $oldContent$$inline_7872$$.$getAlpha$, $oldContent$$inline_7872$$.$setAlpha$, 0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7877$$, "typeNumber", $event$$inline_7881_s$$155$$, $event$$inline_7881_s$$155$$.$getAlpha$, $event$$inline_7881_s$$155$$.$setAlpha$, 1);
    $event$$inline_7881_s$$155$$.$setScaleX$($odim$$inline_7874$$.$w$ / $ndim$$inline_7876$$.$w$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7877$$, "typeNumber", $event$$inline_7881_s$$155$$, $event$$inline_7881_s$$155$$.$getScaleX$, $event$$inline_7881_s$$155$$.$setScaleX$, 1);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$())) {
      $event$$inline_7881_s$$155$$.$setTranslateX$($oldContent$$inline_7872$$.$getTranslateX$());
      var $dimWidth$$inline_7878$$ = $ndim$$inline_7876$$.$w$ + $ndim$$inline_7876$$.x;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7877$$, "typeNumber", $event$$inline_7881_s$$155$$, $event$$inline_7881_s$$155$$.$getTranslateX$, $event$$inline_7881_s$$155$$.$setTranslateX$, $oldContent$$inline_7872$$.$getTranslateX$() + $openCloseButtonWidth$$inline_7875$$ - $dimWidth$$inline_7878$$)
    }
    $event$$inline_7881_s$$155$$.$setScaleY$($odim$$inline_7874$$.$h$ / $ndim$$inline_7876$$.$h$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7877$$, "typeNumber", $event$$inline_7881_s$$155$$, $event$$inline_7881_s$$155$$.$getScaleY$, $event$$inline_7881_s$$155$$.$setScaleY$, 1);
    $animator$$inline_7877$$.$setOnEnd$(function() {
      $oldContent$$inline_7872$$.getParent().removeChild($oldContent$$inline_7872$$);
      this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
      this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
    }, this);
    $animator$$inline_7877$$.play()
  }else {
    $oldContent$$inline_7872$$.getParent().removeChild($oldContent$$inline_7872$$), (0,D.$JSCompiler_StaticMethods_PositionExpanded$$)(this, $event$$inline_7881_s$$155$$)
  }
  this.$_state$ = 2;
  $event$$inline_7881_s$$155$$ = new D.$DvtControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_7881_s$$155$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$3$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$getCtx$().$_stage$ && ($bMouseOver$$3$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$3$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtControlPanel$$$$$HandleCollapseClick$$($event$$662$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$662$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtControlPanel$$.prototype.$_doCollapse$ = function $$DvtControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_7891_s$$156$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_7891_s$$156$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_7884$$ = this.$getChildAt$(0), $animator$$inline_7886$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25);
  $oldContent$$inline_7884$$.$setAlpha$(1);
  $event$$inline_7891_s$$156$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7886$$, "typeNumber", $oldContent$$inline_7884$$, $oldContent$$inline_7884$$.$getAlpha$, $oldContent$$inline_7884$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7886$$, "typeNumber", $event$$inline_7891_s$$156$$, $event$$inline_7891_s$$156$$.$getAlpha$, $event$$inline_7891_s$$156$$.$setAlpha$, 1);
  var $ndim$$inline_7887$$ = this.$_collapsedDim$, $odim$$inline_7888$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7886$$, "typeNumber", $oldContent$$inline_7884$$, $oldContent$$inline_7884$$.$getScaleX$, $oldContent$$inline_7884$$.$setScaleX$, $ndim$$inline_7887$$.$w$ / $odim$$inline_7888$$.$w$);
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7886$$, "typeNumber", $oldContent$$inline_7884$$, $oldContent$$inline_7884$$.$getTranslateX$, $oldContent$$inline_7884$$.$setTranslateX$, $event$$inline_7891_s$$156$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7886$$, "typeNumber", $oldContent$$inline_7884$$, $oldContent$$inline_7884$$.$getScaleY$, $oldContent$$inline_7884$$.$setScaleY$, $ndim$$inline_7887$$.$h$ / $odim$$inline_7888$$.$h$);
  $animator$$inline_7886$$.$setOnEnd$(function() {
    $oldContent$$inline_7884$$.getParent().removeChild($oldContent$$inline_7884$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_7886$$.play();
  this.$_state$ = 1;
  $event$$inline_7891_s$$156$$ = new D.$DvtControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_7891_s$$156$$)
};
D.$JSCompiler_StaticMethods_PositionExpanded$$ = function $$JSCompiler_StaticMethods_PositionExpanded$$$($JSCompiler_StaticMethods_PositionExpanded$self$$, $content$$7$$) {
  var $openCloseButtonWidth$$2_transX$$6$$;
  if((0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionExpanded$self$$.$getCtx$())) {
    $openCloseButtonWidth$$2_transX$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_PositionExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
    var $ndim$$1$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods_PositionExpanded$self$$.$getCtx$(), $content$$7$$);
    $openCloseButtonWidth$$2_transX$$6$$ -= window.Math.floor($ndim$$1$$.$w$ + $ndim$$1$$.x)
  }else {
    $openCloseButtonWidth$$2_transX$$6$$ = 0
  }
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($content$$7$$, $openCloseButtonWidth$$2_transX$$6$$, 0)
};
D.$DvtControlPanel$$.prototype.$HandleRollOver$ = function $$DvtControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtControlPanel$$.prototype.$HandleRollOut$ = function $$DvtControlPanel$$$$$HandleRollOut$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this)
};
D.$JSCompiler_StaticMethods__applyAlphasRollover$$ = function $$JSCompiler_StaticMethods__applyAlphasRollover$$$($JSCompiler_StaticMethods__applyAlphasRollover$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.borderHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha)
};
D.$JSCompiler_StaticMethods__applyAlphasRollout$$ = function $$JSCompiler_StaticMethods__applyAlphasRollout$$$($JSCompiler_StaticMethods__applyAlphasRollout$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_styleMap$.borderAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$)
};
D.$DvtControlPanel$$.prototype.$getDimensions$ = function $$DvtControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtControlPanel$$.prototype.$renderComponent$ = function $$DvtControlPanel$$$$$renderComponent$$() {
  var $s$$157$$;
  1 == this.$_state$ ? $s$$157$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this) : ($s$$157$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this), (0,D.$JSCompiler_StaticMethods_PositionExpanded$$)(this, $s$$157$$));
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($s$$157$$)
};
D.$DvtControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$17$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$17$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$18$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$18$$)
};
D.$DvtControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelDefaults$$, D.$DvtObj$$, "DvtControlPanelDefaults");
D.$DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($userOptions$$3$$) {
  var $defaults$$6$$ = D.$DvtControlPanelDefaults$$.$_getDefaults$($userOptions$$3$$);
  return $userOptions$$3$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$3$$, $defaults$$6$$) : $defaults$$6$$
};
D.$DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($userOptions$$4$$) {
  var $defaults$$7$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$7$$ = $userOptions$$4$$ && "skyros" === $userOptions$$4$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : $userOptions$$4$$ && "alta" === $userOptions$$4$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.$clone$(D.$DvtControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtControlPanelEventManager$$ = function $$DvtControlPanelEventManager$$$($context$$491$$, $callback$$140$$, $callbackObj$$90$$) {
  this.Init($context$$491$$, $callback$$140$$, $callbackObj$$90$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventManager$$, D.$DvtEventManager$$, "DvtControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$672$$) {
  var $obj$$318$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$672$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$672$$);
  $obj$$318$$ && ($obj$$318$$.$HandleMouseDown$ && $obj$$318$$.$HandleMouseDown$($event$$672$$), $event$$672$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$673$$) {
  var $obj$$319$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$673$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$673$$);
  $obj$$319$$ && ($obj$$319$$.$HandleMouseUp$ && $obj$$319$$.$HandleMouseUp$($event$$673$$), $event$$673$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$674$$) {
  var $obj$$320$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$674$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$674$$);
  $obj$$320$$ && ($obj$$320$$.$HandleMouseOut$ && $obj$$320$$.$HandleMouseOut$($event$$674$$), $event$$674$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$675$$) {
  var $obj$$321$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$675$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$675$$);
  $obj$$321$$ && ($obj$$321$$.$HandleClick$ && $obj$$321$$.$HandleClick$($event$$675$$), $event$$675$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$676$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$676$$);
  var $obj$$322$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$676$$));
  $obj$$322$$ && $obj$$322$$.$HandleRollOver$ && $obj$$322$$.$HandleRollOver$($event$$676$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$677$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$677$$);
  var $obj$$323$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$677$$));
  $obj$$323$$ && $obj$$323$$.$HandleRollOut$ && $obj$$323$$.$HandleRollOut$($event$$677$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$678$$) {
  var $obj$$324$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$678$$));
  $obj$$324$$ && ($obj$$324$$.$HandleClick$ && $obj$$324$$.$HandleClick$($event$$678$$), $event$$678$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$679$$) {
  $event$$679$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$679$$)
};
D.$DvtControlPanelEventHandlerProxy$$ = function $$DvtControlPanelEventHandlerProxy$$$($callback$$139$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$49$$) {
  this.Init($callback$$139$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$89$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$50$$) {
  this.$_callbackObj$ = $callbackObj$$89$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$50$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$667$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$667$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$668$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$668$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$669$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$669$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$670$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$670$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$671$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$671$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelLAFUtils$$, D.$DvtObj$$, "DvtControlPanelLAFUtils");
D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$492$$, $nw$$1$$, $nh$$, $bL2R$$, $r$$66_styleMap$$55$$) {
  $nw$$1$$ || ($nw$$1$$ = 86);
  $nh$$ || ($nh$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  $r$$66_styleMap$$55$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($r$$66_styleMap$$55$$, "border-radius", 0));
  return D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$492$$, $r$$66_styleMap$$55$$, $nw$$1$$ - 2 * $r$$66_styleMap$$55$$, $nh$$ - 2 * $r$$66_styleMap$$55$$, $bL2R$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$493$$, $r$$67$$, $ww$$102$$, $hh$$86$$, $bL2R$$1$$) {
  var $x$$245$$ = $ww$$102$$ + $r$$67$$, $y$$221$$ = $hh$$86$$ + $r$$67$$, $cmds$$21$$ = D.$DvtPathUtils$$.moveTo($x$$245$$ + $r$$67$$, $y$$221$$ + $r$$67$$), $cmds$$21$$ = $cmds$$21$$ + D.$DvtPathUtils$$.lineTo($x$$245$$ - $ww$$102$$, $y$$221$$ + $r$$67$$), $x$$245$$ = $x$$245$$ - $ww$$102$$, $cmds$$21$$ = $cmds$$21$$ + D.$DvtPathUtils$$.lineTo($x$$245$$ - $r$$67$$, $y$$221$$ + $r$$67$$), $cmds$$21$$ = $cmds$$21$$ + D.$DvtPathUtils$$.lineTo($x$$245$$ - $r$$67$$, $y$$221$$ - $hh$$86$$), $y$$221$$ = 
  $y$$221$$ - $hh$$86$$;
  $bL2R$$1$$ ? ($cmds$$21$$ += D.$DvtPathUtils$$.$quadTo$(-$r$$67$$ + $x$$245$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $y$$221$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $x$$245$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $y$$221$$) + D.$DvtPathUtils$$.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $x$$245$$, -$r$$67$$ + $y$$221$$, $x$$245$$, -$r$$67$$ + $y$$221$$) + D.$DvtPathUtils$$.lineTo($x$$245$$, -$r$$67$$ + $y$$221$$), $cmds$$21$$ += 
  D.$DvtPathUtils$$.lineTo($x$$245$$ + $ww$$102$$ + $r$$67$$, -$r$$67$$ + $y$$221$$), $cmds$$21$$ += D.$DvtPathUtils$$.lineTo($x$$245$$ + $ww$$102$$ + $r$$67$$, $y$$221$$ + $hh$$86$$)) : ($cmds$$21$$ += D.$DvtPathUtils$$.lineTo($x$$245$$ - $r$$67$$, -$r$$67$$ + $y$$221$$), $cmds$$21$$ += D.$DvtPathUtils$$.lineTo($x$$245$$ + $ww$$102$$, -$r$$67$$ + $y$$221$$), $x$$245$$ += $ww$$102$$, $cmds$$21$$ += D.$DvtPathUtils$$.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $x$$245$$, -$r$$67$$ + 
  $y$$221$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $x$$245$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$67$$ + $y$$221$$) + D.$DvtPathUtils$$.$quadTo$($r$$67$$ + $x$$245$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$67$$ + $y$$221$$, $r$$67$$ + $x$$245$$, $y$$221$$) + D.$DvtPathUtils$$.lineTo($x$$245$$ + $r$$67$$, $y$$221$$ + $hh$$86$$));
  $cmds$$21$$ += D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$493$$, $cmds$$21$$)
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$494_mc$$1$$, $buttonHeight$$1_nh$$1$$, $styleMap$$56$$, $arPoints$$17_bR2L$$5_color$$82$$) {
  $buttonHeight$$1_nh$$1$$ || ($buttonHeight$$1_nh$$1$$ = 47);
  var $r$$68$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$56$$, "border-radius", 0)), $buttonWidth$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$56$$, "openCloseButtonWidth", 0);
  $buttonHeight$$1_nh$$1$$ = window.Math.max($buttonHeight$$1_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$56$$, "buttonHeight", $buttonHeight$$1_nh$$1$$));
  $arPoints$$17_bR2L$$5_color$$82$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$6$$, $buttonHeight$$1_nh$$1$$, $r$$68$$, $arPoints$$17_bR2L$$5_color$$82$$);
  $arPoints$$17_bR2L$$5_color$$82$$ = $arPoints$$17_bR2L$$5_color$$82$$.concat("Z");
  $context$$494_mc$$1$$ = new D.$DvtPath$$($context$$494_mc$$1$$, $arPoints$$17_bR2L$$5_color$$82$$, "cls_shape");
  ($arPoints$$17_bR2L$$5_color$$82$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$56$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints$$17_bR2L$$5_color$$82$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$56$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$494_mc$$1$$.$setSolidFill$($arPoints$$17_bR2L$$5_color$$82$$);
  return $context$$494_mc$$1$$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$495_mc$$2$$, $buttonHeight$$2_nh$$2$$, $styleMap$$57$$, $arPoints$$18_bR2L$$6$$) {
  $buttonHeight$$2_nh$$2$$ || ($buttonHeight$$2_nh$$2$$ = 47);
  var $r$$69$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "border-radius", 0)), $buttonWidth$$7$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "openCloseButtonWidth", 0);
  $buttonHeight$$2_nh$$2$$ = window.Math.max($buttonHeight$$2_nh$$2$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "buttonHeight", $buttonHeight$$2_nh$$2$$));
  $arPoints$$18_bR2L$$6$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$7$$, $buttonHeight$$2_nh$$2$$, $r$$69$$, $arPoints$$18_bR2L$$6$$);
  $arPoints$$18_bR2L$$6$$ = $arPoints$$18_bR2L$$6$$.concat("Z");
  $context$$495_mc$$2$$ = new D.$DvtPath$$($context$$495_mc$$2$$, $arPoints$$18_bR2L$$6$$, "cls_shape");
  $context$$495_mc$$2$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$495_mc$$2$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$495_mc$$2$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$496_mc$$3$$, $nh$$3$$, $styleMap$$58$$, $openSide$$1$$, $openSideSize$$) {
  $nh$$3$$ || ($nh$$3$$ = 137);
  var $r$$70$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "tabSize", 0), $ww$$103$$ = $cpWidth$$1$$ - 2 * $r$$70$$, $hh$$87$$ = $nh$$3$$ + 7 - 2 * $r$$70$$;
  $context$$496_mc$$3$$ = $openSide$$1$$ && $openSideSize$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$496_mc$$3$$, $r$$70$$, $cpWidth$$1$$, $nh$$3$$, $openSide$$1$$, $openSideSize$$) : D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$496_mc$$3$$, $r$$70$$, $ww$$103$$, $hh$$87$$);
  $context$$496_mc$$3$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$496_mc$$3$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$497$$, $nh$$4$$, $roundBottomRight$$, $styleMap$$59$$, $openSide$$2$$, $openSideSize$$1$$) {
  $nh$$4$$ || ($nh$$4$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$71$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "border-radius", 0)), $cpWidth$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "tabSize", 0), $ww$$104$$ = $cpWidth$$2$$ - 2 * $r$$71$$, $hh$$88$$ = $nh$$4$$ + 7 - 2 * $r$$71$$, $mc$$4$$ = D.$JSCompiler_alias_NULL$$, $mc$$4$$ = $openSide$$2$$ && $openSideSize$$1$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$497$$, $r$$71$$, $cpWidth$$2$$, $nh$$4$$, $openSide$$2$$, $openSideSize$$1$$) : 
  D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$497$$, $r$$71$$, $ww$$104$$, $hh$$88$$, $roundBottomRight$$);
  $mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$4$$
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$498$$, $r$$72$$, $ww$$105$$, $hh$$89$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$246$$ = $ww$$105$$ + $r$$72$$, $y$$222$$ = $hh$$89$$, $cmds$$22$$ = D.$DvtPathUtils$$.moveTo($x$$246$$ + $r$$72$$, $y$$222$$), $cmds$$22$$ = $roundBottomRight$$1$$ ? $cmds$$22$$ + (D.$DvtPathUtils$$.$quadTo$($r$$72$$ + $x$$246$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$72$$ + $y$$222$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $x$$246$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $y$$222$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$72$$ + $x$$246$$, $r$$72$$ + $y$$222$$, $x$$246$$, $r$$72$$ + $y$$222$$) + D.$DvtPathUtils$$.lineTo($x$$246$$, $r$$72$$ + $y$$222$$)) : $cmds$$22$$ + D.$DvtPathUtils$$.lineTo($x$$246$$ + $r$$72$$, $y$$222$$ + $r$$72$$), $cmds$$22$$ = $cmds$$22$$ + D.$DvtPathUtils$$.lineTo($x$$246$$ - $ww$$105$$, $r$$72$$ + $y$$222$$), $x$$246$$ = $x$$246$$ - $ww$$105$$, $cmds$$22$$ = $cmds$$22$$ + (D.$DvtPathUtils$$.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$72$$ + $x$$246$$, $r$$72$$ + $y$$222$$, 
  -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $x$$246$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$72$$ + $y$$222$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$72$$ + $x$$246$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$72$$ + $y$$222$$, -$r$$72$$ + $x$$246$$, $y$$222$$) + D.$DvtPathUtils$$.lineTo(-$r$$72$$ + $x$$246$$, $y$$222$$) + D.$DvtPathUtils$$.lineTo(-$r$$72$$ + $x$$246$$, $y$$222$$ - $hh$$89$$)), $y$$222$$ = $y$$222$$ - $hh$$89$$, $cmds$$22$$ = $cmds$$22$$ + (D.$DvtPathUtils$$.lineTo($x$$246$$ + 
  $ww$$105$$ + $r$$72$$, $y$$222$$) + D.$DvtPathUtils$$.lineTo($x$$246$$ + $ww$$105$$ + $r$$72$$, $y$$222$$ + $hh$$89$$) + D.$DvtPathUtils$$.closePath());
  return new D.$DvtPath$$($context$$498$$, $cmds$$22$$)
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$499$$, $arPoints$$19_r$$73$$, $width$$145$$, $height$$132$$, $openSide$$3$$, $openSideSize$$2$$) {
  $arPoints$$19_r$$73$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($context$$499$$, $width$$145$$, $height$$132$$, $arPoints$$19_r$$73$$, $openSide$$3$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$499$$, $arPoints$$19_r$$73$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$500$$, $arPoints$$20_r$$74$$, $width$$146$$, $height$$133$$, $openSide$$4$$, $openSideSize$$3$$) {
  $arPoints$$20_r$$74$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($context$$500$$, $width$$146$$, $height$$133$$, $arPoints$$20_r$$74$$, $openSide$$4$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$500$$, $arPoints$$20_r$$74$$)
};
D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtControlPanelLAFUtils$$$$GetShapePathCommands$$($bidi$$3_context$$501$$, $width$$147$$, $height$$134$$, $r$$75$$, $openSide$$5$$, $openSideSize$$4$$) {
  var $arPoints$$21$$;
  $bidi$$3_context$$501$$ = (0,D.$DvtAgent$isRightToLeft$$)($bidi$$3_context$$501$$);
  $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$3_context$$501$$ && ($arPoints$$21$$ = ["M", $width$$147$$, 0, "L", $width$$147$$, $height$$134$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$147$$ - $r$$75$$, $height$$134$$, "L", 0, $height$$134$$, "L", 0, 0]);
  $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$3_context$$501$$ ? $arPoints$$21$$ = ["M", $width$$147$$, 0, "L", $width$$147$$, $height$$134$$, "L", $r$$75$$, $height$$134$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, 0, $height$$134$$ - $r$$75$$, "L", 0, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$3_context$$501$$ ? $arPoints$$21$$ = ["M", $width$$147$$, $openSideSize$$4$$, "L", $width$$147$$, $height$$134$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 
  1, $width$$147$$ - $r$$75$$, $height$$134$$, "L", 0, $height$$134$$, "L", 0, 0, "L", $width$$147$$, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$3_context$$501$$ ? $arPoints$$21$$ = ["M", 0, 0, "L", $width$$147$$, 0, "L", $width$$147$$, $height$$134$$, "L", $r$$75$$, $height$$134$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, 0, $height$$134$$ - $r$$75$$, "L", 0, $openSideSize$$4$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$3_context$$501$$ ? $arPoints$$21$$ = 
  ["M", 0, 0, "L", $width$$147$$ - $r$$75$$, 0, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$147$$, $r$$75$$, "L", $width$$147$$, $height$$134$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$147$$ - $r$$75$$, $height$$134$$, "L", 0, $height$$134$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$3_context$$501$$ ? $arPoints$$21$$ = ["M", $width$$147$$, $height$$134$$, "L", $r$$75$$, $height$$134$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, 0, $height$$134$$ - $r$$75$$, "L", 0, 
  $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $r$$75$$, 0, "L", $width$$147$$, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$3_context$$501$$ ? $arPoints$$21$$ = ["M", 0, $height$$134$$, "L", 0, 0, "L", $width$$147$$ - $r$$75$$, 0, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$147$$, $r$$75$$, "L", $width$$147$$, $height$$134$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 1, $width$$147$$ - $r$$75$$, $height$$134$$, "L", $openSideSize$$4$$, $height$$134$$] : $openSide$$5$$ == 
  D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$3_context$$501$$ && ($arPoints$$21$$ = ["M", $width$$147$$, $height$$134$$, "L", $width$$147$$, 0, "L", $r$$75$$, 0, "A", $r$$75$$, $r$$75$$, 0, 0, 0, 0, $r$$75$$, "L", 0, $height$$134$$ - $r$$75$$, "A", $r$$75$$, $r$$75$$, 0, 0, 0, $r$$75$$, $height$$134$$, "L", $width$$147$$ - $openSideSize$$4$$, $height$$134$$]);
  return $arPoints$$21$$
};
D.$DvtPanZoomComponent$$ = function $$DvtPanZoomComponent$$$($context$$464$$, $callback$$137$$, $callbackObj$$87$$) {
  this.Init($context$$464$$, $callback$$137$$, $callbackObj$$87$$)
};
(0,D.$goog$exportPath_$$)("DvtPanZoomComponent", D.$DvtPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomComponent$$, D.$DvtBaseComponent$$, "DvtPanZoomComponent");
D.$DvtPanZoomComponent$$.LEGEND_DISCLOSED_EVENT_KEY = "isLegendDisclosed";
D.$DvtPanZoomComponent$$.prototype.Init = function $$DvtPanZoomComponent$$$$Init$($context$$465$$, $callback$$138$$, $callbackObj$$88$$) {
  D.$DvtPanZoomComponent$$.$superclass$.Init.call(this, $context$$465$$, $callback$$138$$, $callbackObj$$88$$);
  this.$_controlPanelBehavior$ = "initCollapsed";
  this.$_displayedControls$ = 16777215;
  this.$_bSupportsVectorEffects$ = !(0,D.$DvtAgent$isEnvironmentBatik$$)() && !(0,D.$DvtAgent$isPlatformIE$$)() && !((0,D.$DvtAgent$isPlatformGecko$$)() && 17 >= (0,D.$DvtAgent$getVersion$$)());
  this.$_subcomponentStyles$ = this.$_resourcesMap$ = D.$JSCompiler_alias_NULL$$;
  this.$_skinName$ = ""
};
D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$ = (0,D.$JSCompiler_get$$)("$_panZoomCanvas$");
D.$DvtPanZoomComponent$$.prototype.getPanZoomCanvas = D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$;
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$ ? $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$._resources : {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtPanZoomComponent$$.prototype.$getSubcomponentStyles$ = (0,D.$JSCompiler_get$$)("$_subcomponentStyles$");
D.$JSCompiler_StaticMethods_parseComponentJson$$ = function $$JSCompiler_StaticMethods_parseComponentJson$$$($JSCompiler_StaticMethods_parseComponentJson$self$$, $jsonObj$$68$$) {
  var $cpStyleMap_endGradientColor_styleMap$$inline_7712$$ = (new D.$DvtCSSStyle$$($jsonObj$$68$$.inlineStyle)).$getStyle$("background-color");
  $cpStyleMap_endGradientColor_styleMap$$inline_7712$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_endGradientColor$ = $cpStyleMap_endGradientColor_styleMap$$inline_7712$$);
  var $cpStyleMap_endGradientColor_styleMap$$inline_7712$$ = {}, $skinName$$7$$ = $jsonObj$$68$$.skin;
  $skinName$$7$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_skinName$ = $skinName$$7$$, $cpStyleMap_endGradientColor_styleMap$$inline_7712$$.skin = $skinName$$7$$);
  "undefined" != typeof D.$DvtPanelDrawer$$ && ((0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7712$$, "background-color", $jsonObj$$68$$.cpBackgroundColor), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7712$$, "border-color", $jsonObj$$68$$.cpBorderColor), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7712$$, "border-radius", $jsonObj$$68$$.cpBorderRadius), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7712$$, 
  "box-shadow", $jsonObj$$68$$.cpBoxShadow), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7712$$, "tab-color-inactive", $jsonObj$$68$$.tabBgColorInactive), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7712$$, "tab-border-color-inactive", $jsonObj$$68$$.tabBorderColorInactive));
  $cpStyleMap_endGradientColor_styleMap$$inline_7712$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap_endGradientColor_styleMap$$inline_7712$$);
  $JSCompiler_StaticMethods_parseComponentJson$self$$.$_subcomponentStyles$ = $cpStyleMap_endGradientColor_styleMap$$inline_7712$$
};
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$66$$) {
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$ = (new D.$DvtCSSStyle$$($xmlNode$$66$$.$getAttr$("inlineStyle"))).$getStyle$("background-color");
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_endGradientColor$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$);
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$ = {}, $skinName$$8$$ = $xmlNode$$66$$.$getAttr$("skin");
  $skinName$$8$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_skinName$ = $skinName$$8$$, $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$.skin = $skinName$$8$$);
  "undefined" != typeof D.$DvtPanelDrawer$$ && ((0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$, "background-color", $xmlNode$$66$$.$getAttr$("cpBackgroundColor")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$, "border-color", $xmlNode$$66$$.$getAttr$("cpBorderColor")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$, "border-radius", $xmlNode$$66$$.$getAttr$("cpBorderRadius")), 
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$, "box-shadow", $xmlNode$$66$$.$getAttr$("cpBoxShadow")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$, "tab-color-inactive", $xmlNode$$66$$.$getAttr$("tabBgColorInactive")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$, "tab-border-color-inactive", $xmlNode$$66$$.$getAttr$("tabBorderColorInactive")));
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_subcomponentStyles$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7721$$
};
D.$DvtPanZoomComponent$$.prototype.$render$ = function $$DvtPanZoomComponent$$$$$render$$($options$$231$$, $width$$142$$, $height$$129$$) {
  this.$Width$ = $width$$142$$;
  this.$Height$ = $height$$129$$;
  this.$_isResize$ = !$options$$231$$;
  if(!this.$_isResize$ || this.$_panZoomCanvas$) {
    this.$PreRender$();
    if(!this.$_isResize$) {
      if("object" == typeof $options$$231$$) {
        this.$SetOptions$($options$$231$$)
      }else {
        if(!($options$$231$$ == D.$JSCompiler_alias_NULL$$ || 0 == $options$$231$$.length)) {
          var $parser$$inline_7725_rootXmlNode$$inline_7726$$ = new D.$DvtXmlParser$$;
          if($parser$$inline_7725_rootXmlNode$$inline_7726$$ && ($parser$$inline_7725_rootXmlNode$$inline_7726$$ = $parser$$inline_7725_rootXmlNode$$inline_7726$$.parse($options$$231$$))) {
            "r" === $parser$$inline_7725_rootXmlNode$$inline_7726$$.getName() && ($parser$$inline_7725_rootXmlNode$$inline_7726$$ = $parser$$inline_7725_rootXmlNode$$inline_7726$$.getFirstChild()), $parser$$inline_7725_rootXmlNode$$inline_7726$$ && this.$GetXmlDomParser$().$loadXmlInitial$($parser$$inline_7725_rootXmlNode$$inline_7726$$)
          }
        }
      }
    }
    this.$Render$($options$$231$$, $width$$142$$, $height$$129$$);
    this.$UpdateAriaAttributes$()
  }
};
D.$DvtPanZoomComponent$$.prototype.render = D.$DvtPanZoomComponent$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetControlPanel$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanel$$() {
  var $cpBehavior$$2$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$2$$ ? new D.$DvtControlPanel$$(this.$getCtx$(), this, "initCollapsed" == $cpBehavior$$2$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$GetControlPanelBehavior$ = (0,D.$JSCompiler_get$$)("$_controlPanelBehavior$");
D.$JSCompiler_prototypeAlias$$.$GetXmlDomParser$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PreRender$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  if(this.$_endGradientColor$ || !this.$_skinName$) {
    this.$_backgroundPane$ || (this.$_backgroundPane$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.getWidth()), this.$_backgroundPane$.$setHeight$(this.getHeight()), this.$_backgroundPane$.$setFill$((0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_endGradientColor$))
  }
  if(this.$_isResize$) {
    this.$_panZoomCanvas$.$setSize$(this.getWidth(), this.getHeight())
  }else {
    this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = D.$JSCompiler_alias_NULL$$);
    this.$_panZoomCanvas$ = new D.$DvtPanZoomCanvas$$(this.$getCtx$(), this.getWidth(), this.getHeight(), this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$addChild$(this.$_panZoomCanvas$);
    var $clipPath$$13_controlPanel$$5$$ = this.$GetControlPanel$();
    $clipPath$$13_controlPanel$$5$$ && ($clipPath$$13_controlPanel$$5$$.$addEvtListener$("dvtPZCPExpand", this.$_handleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$_controlPanel$ = $clipPath$$13_controlPanel$$5$$);
    this.$_panZoomCanvas$.$renderComponent$()
  }
  $clipPath$$13_controlPanel$$5$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$13_controlPanel$$5$$, this.$getTranslateX$(), this.$getTranslateY$(), this.getWidth(), this.getHeight());
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$13_controlPanel$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$232$$) {
  this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($options$$232$$) : $options$$232$$
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$81$$) {
  var $arColors$$33_newColor$$1_rrRatio$$3$$, $arAlphas$$31_bgAlpha$$ = 1;
  if($color$$81$$ && "#7396C8" != $color$$81$$) {
    $arAlphas$$31_bgAlpha$$ = D.$DvtColorUtils$$.$getAlpha$($color$$81$$);
    $arColors$$33_newColor$$1_rrRatio$$3$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$26_bgRgb_ggRatio$$3$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$3_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$4$$ = D.$DvtColorUtils$$.$getRed$($color$$81$$), $gg$$4_gx_ww$$99$$ = D.$DvtColorUtils$$.$getGreen$($color$$81$$), $bb$$6_cx$$54$$ = D.$DvtColorUtils$$.$getBlue$($color$$81$$);
    $arColors$$33_newColor$$1_rrRatio$$3$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$4$$ + $arColors$$33_newColor$$1_rrRatio$$3$$ * (255 - $gh_rr$$4$$)), window.Math.round($gg$$4_gx_ww$$99$$ + $arStops$$26_bgRgb_ggRatio$$3$$ * (255 - $gg$$4_gx_ww$$99$$)), window.Math.round($bb$$6_cx$$54$$ + $bbRatio$$3_gw$$ * (255 - $bb$$6_cx$$54$$)));
    $arStops$$26_bgRgb_ggRatio$$3$$ = D.$DvtColorUtils$$.$getRGB$($color$$81$$);
    $arColors$$33_newColor$$1_rrRatio$$3$$ = ["#FFFFFF", "#FFFFFF", $arColors$$33_newColor$$1_rrRatio$$3$$, $arStops$$26_bgRgb_ggRatio$$3$$]
  }else {
    $arColors$$33_newColor$$1_rrRatio$$3$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$31_bgAlpha$$ = [$arAlphas$$31_bgAlpha$$, $arAlphas$$31_bgAlpha$$, $arAlphas$$31_bgAlpha$$, $arAlphas$$31_bgAlpha$$], $arStops$$26_bgRgb_ggRatio$$3$$ = [0, 45 / 255, 190 / 255, 1], $gg$$4_gx_ww$$99$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$Width$, $bbRatio$$3_gw$$ = 1.7 * 1.7 * $gg$$4_gx_ww$$99$$, $gh_rr$$4$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$Height$, $gg$$4_gx_ww$$99$$ = 0 + ($gg$$4_gx_ww$$99$$ - $bbRatio$$3_gw$$) / 2, $bb$$6_cx$$54$$ = 
  $gg$$4_gx_ww$$99$$ + $bbRatio$$3_gw$$ / 2, $cy$$55$$ = -35 + $gh_rr$$4$$ / 2, $r$$63$$ = 1.5 * window.Math.min($bbRatio$$3_gw$$ / 2, $gh_rr$$4$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$33_newColor$$1_rrRatio$$3$$, $arAlphas$$31_bgAlpha$$, $arStops$$26_bgRgb_ggRatio$$3$$, $bb$$6_cx$$54$$, $cy$$55$$, $r$$63$$, [$gg$$4_gx_ww$$99$$, -35, $bbRatio$$3_gw$$, $gh_rr$$4$$])
};
D.$DvtPanZoomComponent$$.prototype.$_handleControlPanelEvent$ = function $$DvtPanZoomComponent$$$$$_handleControlPanelEvent$$($event$$650$$) {
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$650$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$460$$, $ww$$95$$, $hh$$78$$, $view$$57$$) {
  this.Init($context$$460$$, $ww$$95$$, $hh$$78$$, $view$$57$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$461$$, $ww$$96$$, $hh$$79$$, $view$$58$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$461$$);
  this.$_view$ = $view$$58$$;
  this.$_ww$ = $ww$$96$$;
  this.$_hh$ = $hh$$79$$;
  this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
  this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = D.$JSCompiler_alias_NULL$$;
  this.$_minZoom$ = 0.1;
  this.$_maxZoom$ = 1;
  this.$_panIncrement$ = 15;
  this.$_zoomIncrement$ = 0.05;
  this.$_bTiltPanningEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomToFitPadding$ = 20;
  this.$_controlPanel$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_backgroundPane$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, this.$_ww$, this.$_hh$);
  this.$addChild$(this.$_backgroundPane$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$);
  this.$_contentPane$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_contentPane$);
  this.$_contentPane$.$setMatrix$(new D.$DvtMatrix$$);
  this.$_animationDuration$ = 0.5;
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$461$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$96$$, $hh$$79$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$97$$, $hh$$80$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$97$$;
  this.$_hh$ = $hh$$80$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$97$$), this.$_backgroundPane$.$setHeight$($hh$$80$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$97$$, $hh$$80$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_SetClipRect$$ = function $$JSCompiler_StaticMethods_SetClipRect$$$($JSCompiler_StaticMethods_SetClipRect$self$$, $ww$$98$$, $hh$$81$$) {
  var $clipPath$$12$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$12$$, $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateX$(), $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateY$(), $ww$$98$$, $hh$$81$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_SetClipRect$self$$, $clipPath$$12$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$107$$) {
  if($animator$$107$$) {
    var $mat$$46$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$107$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$46$$) {
      return $mat$$46$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$DvtPanZoomCanvas$$.prototype.$getZoom$ = function $$DvtPanZoomCanvas$$$$$getZoom$$($animator$$108$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$108$$).$_a$
};
(0,D.$goog$exportPath_$$)("DvtPanZoomCanvas.prototype.getZoom", D.$DvtPanZoomCanvas$$.prototype.$getZoom$);
D.$DvtPanZoomCanvas$$.prototype.$panBy$ = function $$DvtPanZoomCanvas$$$$$panBy$$($dx$$26_mat$$47$$, $deltaX$$22_dy$$29_fireStartEventFunc$$, $animator$$111$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$5$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$111$$).$_tx$, $oldY$$5$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$111$$).$_ty$, $newX$$9$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$5$$ + $dx$$26_mat$$47$$), $newY$$10$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$5$$ + $deltaX$$22_dy$$29_fireStartEventFunc$$);
    $deltaX$$22_dy$$29_fireStartEventFunc$$ = $newX$$9$$ - $oldX$$5$$;
    var $deltaY$$25_fireEndEventFunc$$ = $newY$$10$$ - $oldY$$5$$;
    $dx$$26_mat$$47$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$111$$ && ($dx$$26_mat$$47$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$111$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$26_mat$$47$$ = $dx$$26_mat$$47$$.$clone$());
    $dx$$26_mat$$47$$ || ($dx$$26_mat$$47$$ = this.$_contentPane$.$getMatrix$().$clone$());
    $dx$$26_mat$$47$$.translate($deltaX$$22_dy$$29_fireStartEventFunc$$, $deltaY$$25_fireEndEventFunc$$);
    var $thisRef$$35$$ = this;
    $deltaX$$22_dy$$29_fireStartEventFunc$$ = function $$deltaX$$22_dy$$29_fireStartEventFunc$$$() {
      var $dx$$26_mat$$47$$ = new D.$DvtPanEvent$$("panning", $newX$$9$$, $newY$$10$$, $oldX$$5$$, $oldY$$5$$, $animator$$111$$);
      $thisRef$$35$$.$FireListener$($dx$$26_mat$$47$$)
    };
    $deltaY$$25_fireEndEventFunc$$ = function $$deltaY$$25_fireEndEventFunc$$$() {
      var $dx$$26_mat$$47$$ = new D.$DvtPanEvent$$("panned", $newX$$9$$, $newY$$10$$, $oldX$$5$$, $oldY$$5$$, $animator$$111$$);
      $thisRef$$35$$.$FireListener$($dx$$26_mat$$47$$)
    };
    $animator$$111$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$111$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$26_mat$$47$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$111$$, $deltaX$$22_dy$$29_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$111$$, $deltaY$$25_fireEndEventFunc$$)) : ($deltaX$$22_dy$$29_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$26_mat$$47$$), $deltaY$$25_fireEndEventFunc$$())
  }
};
D.$JSCompiler_StaticMethods_panTo$$ = function $$JSCompiler_StaticMethods_panTo$$$($JSCompiler_StaticMethods_panTo$self$$, $dx$$27_xx$$40$$, $dy$$30_yy$$40$$, $animator$$112$$) {
  $JSCompiler_StaticMethods_panTo$self$$.$_bPanningEnabled$ && ($dx$$27_xx$$40$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$112$$).$_tx$, $dy$$30_yy$$40$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$112$$).$_ty$, $JSCompiler_StaticMethods_panTo$self$$.$panBy$($dx$$27_xx$$40$$, $dy$$30_yy$$40$$, $animator$$112$$))
};
D.$DvtPanZoomCanvas$$.prototype.$zoomBy$ = function $$DvtPanZoomCanvas$$$$$zoomBy$$($currZoom$$inline_7636_dz$$6_mat$$48$$, $xx$$41$$, $yy$$41$$, $animator$$113$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$41$$ && 0 !== $xx$$41$$ && ($xx$$41$$ = this.$_ww$ / 2);
    !$yy$$41$$ && 0 !== $yy$$41$$ && ($yy$$41$$ = this.$_hh$ / 2);
    var $oldZoom$$4$$ = this.$getZoom$($animator$$113$$), $newZoom$$3$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$4$$ * $currZoom$$inline_7636_dz$$6_mat$$48$$);
    this.$_controlPanel$ && ($currZoom$$inline_7636_dz$$6_mat$$48$$ = this.$getZoom$(), $newZoom$$3$$ == this.$getMinZoom$() && $newZoom$$3$$ == this.$getMaxZoom$() ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_7636_dz$$6_mat$$48$$ <= $newZoom$$3$$ && $newZoom$$3$$ == this.$getMaxZoom$() ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_7636_dz$$6_mat$$48$$ >= $newZoom$$3$$ && $newZoom$$3$$ == this.$getMinZoom$() ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$4$$) != window.Math.round(1E5 * $newZoom$$3$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$3$$ / $oldZoom$$4$$;
      $currZoom$$inline_7636_dz$$6_mat$$48$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$113$$ && ($currZoom$$inline_7636_dz$$6_mat$$48$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$113$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_7636_dz$$6_mat$$48$$ = $currZoom$$inline_7636_dz$$6_mat$$48$$.$clone$());
      $currZoom$$inline_7636_dz$$6_mat$$48$$ || ($currZoom$$inline_7636_dz$$6_mat$$48$$ = this.$_contentPane$.$getMatrix$().$clone$());
      $currZoom$$inline_7636_dz$$6_mat$$48$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$41$$, $yy$$41$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_7636_dz$$6_mat$$48$$.$_tx$) - $currZoom$$inline_7636_dz$$6_mat$$48$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_7636_dz$$6_mat$$48$$.$_ty$) - $currZoom$$inline_7636_dz$$6_mat$$48$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$3$$, $oldZoom$$4$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$41$$, $yy$$41$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_7636_dz$$6_mat$$48$$.$_tx$) - $currZoom$$inline_7636_dz$$6_mat$$48$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_7636_dz$$6_mat$$48$$.$_ty$) - $currZoom$$inline_7636_dz$$6_mat$$48$$.$_ty$;
      $currZoom$$inline_7636_dz$$6_mat$$48$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$36$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$36$$, "zooming", $newZoom$$3$$, $oldZoom$$4$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$41$$, $yy$$41$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$36$$, "zoomed", $thisRef$$36$$.$getZoom$(), $oldZoom$$4$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$41$$, $yy$$41$$, $xDiff$$, $yDiff$$)
      };
      $animator$$113$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$113$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_7636_dz$$6_mat$$48$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$113$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$113$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_7636_dz$$6_mat$$48$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_StaticMethods_zoomTo$$ = function $$JSCompiler_StaticMethods_zoomTo$$$($JSCompiler_StaticMethods_zoomTo$self$$, $dz$$7_zz$$, $xx$$42$$, $yy$$42$$, $animator$$114$$) {
  $JSCompiler_StaticMethods_zoomTo$self$$.$_bZoomingEnabled$ && ($dz$$7_zz$$ /= $JSCompiler_StaticMethods_zoomTo$self$$.$getZoom$($animator$$114$$), $JSCompiler_StaticMethods_zoomTo$self$$.$zoomBy$($dz$$7_zz$$, $xx$$42$$, $yy$$42$$, $animator$$114$$))
};
D.$DvtPanZoomCanvas$$.prototype.$center$ = function $$DvtPanZoomCanvas$$$$$center$$($animator$$115$$, $fitBounds$$7$$) {
  var $panningEnabled$$4$$ = this.$_bPanningEnabled$;
  this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  var $bounds$$138_cyBounds$$ = $fitBounds$$7$$;
  $bounds$$138_cyBounds$$ || ($bounds$$138_cyBounds$$ = this.$_contentPane$.$getDimensions$());
  var $cxBounds$$ = ($bounds$$138_cyBounds$$.x + $bounds$$138_cyBounds$$.$w$ / 2) * this.$getZoom$(), $bounds$$138_cyBounds$$ = ($bounds$$138_cyBounds$$.y + $bounds$$138_cyBounds$$.$h$ / 2) * this.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this, this.$_ww$ / 2 - $cxBounds$$, this.$_hh$ / 2 - $bounds$$138_cyBounds$$, $animator$$115$$);
  this.$_bPanningEnabled$ = $panningEnabled$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomToFit$ = function $$DvtPanZoomCanvas$$$$$zoomToFit$$($animator$$116$$, $fitBounds$$8$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$5$$ = this.$_bPanningEnabled$, $zoomingEnabled$$3$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$139$$ = $fitBounds$$8$$ ? $fitBounds$$8$$ : this.$_contentPane$.$getDimensions$();
      if($bounds$$139$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$139$$).$_zoomToFitBounds$) {
        var $dz$$8$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$139$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$139$$.$h$), $dz$$8$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$8$$), $dx$$29$$ = this.$_ww$ / 2 - ($bounds$$139$$.x + $bounds$$139$$.$w$ / 2) * $dz$$8$$, $dy$$32$$ = this.$_hh$ / 2 - ($bounds$$139$$.y + $bounds$$139$$.$h$ / 2) * $dz$$8$$, $thisRef$$37$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$37$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$139$$)
        }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$37$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$139$$)
        };
        $animator$$116$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$116$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
        (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this, $dz$$8$$, 0, 0, $animator$$116$$);
        (0,D.$JSCompiler_StaticMethods_panTo$$)(this, $dx$$29$$, $dy$$32$$, $animator$$116$$);
        $animator$$116$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$116$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
      }
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$5$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$3$$
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$getViewport$ = function $$DvtPanZoomCanvas$$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$3$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$3$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX$$13_panEvent$$inline_7663$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$13$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$3$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$13_panEvent$$inline_7663$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$13_panEvent$$inline_7663$$) || $currY$$13$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$13$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$3$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$3$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getCtx$(), 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$13_panEvent$$inline_7663$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$13_panEvent$$inline_7663$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_7672$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_7672$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$43$$) {
  var $dx$$30_offsetX$$9$$ = $xx$$43$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$30_offsetX$$9$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$30_offsetX$$9$$, $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$30_offsetX$$9$$)) : $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$30_offsetX$$9$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$30_offsetX$$9$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$30_offsetX$$9$$)) : $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$30_offsetX$$9$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$43$$) {
  var $dy$$33_offsetY$$6$$ = $yy$$43$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$33_offsetY$$6$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$33_offsetY$$6$$, $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$33_offsetY$$6$$)) : $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$33_offsetY$$6$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$33_offsetY$$6$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$33_offsetY$$6$$)) : $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$33_offsetY$$6$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$1$$) {
  var $dz$$10_newZ$$1$$ = window.Math.max(0, $zz$$1$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$10_newZ$$1$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$10_newZ$$1$$, $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$10_newZ$$1$$)) : $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$10_newZ$$1$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$10_newZ$$1$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$10_newZ$$1$$)) : $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$10_newZ$$1$$
};
D.$DvtPanZoomCanvas$$.prototype.$renderComponent$ = function $$DvtPanZoomCanvas$$$$$renderComponent$$() {
  var $controlPanel$$2$$ = this.$_controlPanel$;
  $controlPanel$$2$$ && (this.$addChild$($controlPanel$$2$$), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), $controlPanel$$2$$.$renderComponent$())
};
D.$JSCompiler_StaticMethods_PositionControlPanel$$ = function $$JSCompiler_StaticMethods_PositionControlPanel$$$($JSCompiler_StaticMethods_PositionControlPanel$self$$) {
  var $openCloseButtonWidth_styleMap$$49$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getSubcomponentStyles$(), $posX$$4_transX$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$49$$, "paddingSide", 0), $posY$$3$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$49$$, "paddingTop", 0), $openCloseButtonWidth_styleMap$$49$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$49$$, "openCloseButtonWidth", 0), $posX$$4_transX$$4$$ = 
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth_styleMap$$49$$ - $posX$$4_transX$$4$$ : $posX$$4_transX$$4$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX$$4_transX$$4$$, $posY$$3$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$631$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$getCtx$(), $event$$631$$.pageX, $event$$631$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$8_zoomEvent$$, $newZoom$$4$$, $oldZoom$$5$$, $animator$$118$$, $zoomToFitBounds$$1$$, $xx$$44$$, $yy$$44$$, $tx$$26$$, $ty$$27$$) {
  $subType$$8_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$8_zoomEvent$$, $newZoom$$4$$, $oldZoom$$5$$, $animator$$118$$, $zoomToFitBounds$$1$$, new D.$DvtPoint$$($xx$$44$$, $yy$$44$$), $tx$$26$$, $ty$$27$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$8_zoomEvent$$);
  return $subType$$8_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$4$$) {
  var $zoomLevel$$4$$;
  $zoomLevel$$4$$ = $currZoom$$4$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$4$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$getMaxZoom$() && ($zoomLevel$$4$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$getMaxZoom$());
  return $zoomLevel$$4$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$5$$) {
  var $zoomLevel$$5$$;
  $zoomLevel$$5$$ = $currZoom$$5$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$5$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$getMinZoom$() && ($zoomLevel$$5$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$getMinZoom$());
  return $zoomLevel$$5$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvas$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$JSCompiler_prototypeAlias$$.$getMinZoom$ = (0,D.$JSCompiler_get$$)("$_minZoom$");
D.$JSCompiler_prototypeAlias$$.$setMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$setMaxZoom$$($n$$32$$) {
  0 > $n$$32$$ && ($n$$32$$ = 1);
  this.$_maxZoom$ = $n$$32$$
};
D.$JSCompiler_prototypeAlias$$.$getMaxZoom$ = (0,D.$JSCompiler_get$$)("$_maxZoom$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setInteractionEnabled$ = function $$JSCompiler_prototypeAlias$$$$setInteractionEnabled$$($bEnabled$$5$$) {
  $bEnabled$$5$$ ? this.$_eventManager$.$addListeners$(this) : this.$_eventManager$.$removeListeners$(this)
};
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$462$$, $callback$$135$$, $callbackObj$$85$$) {
  this.Init($context$$462$$, $callback$$135$$, $callbackObj$$85$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$463$$, $callback$$136$$, $callbackObj$$86$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$463$$, $callback$$136$$, $callbackObj$$86$$);
  this.$_pzc$ = $callbackObj$$86$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bDragging$ = this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$75$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$75$$);
  (0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$75$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$75$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$632_pos$$64$$) {
  this.$_bDragging$ = D.$JSCompiler_alias_FALSE$$;
  2 != $event$$632_pos$$64$$.button && ($event$$632_pos$$64$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$632_pos$$64$$), this.$_mx$ = $event$$632_pos$$64$$.x, this.$_my$ = $event$$632_pos$$64$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$633_zz$$2$$) {
  if(this.$_bDown$) {
    this.$_bDragging$ = D.$JSCompiler_alias_TRUE$$;
    var $pos$$65_yy$$45$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$633_zz$$2$$), $xx$$45$$ = $pos$$65_yy$$45$$.x, $pos$$65_yy$$45$$ = $pos$$65_yy$$45$$.y;
    $event$$633_zz$$2$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$633_zz$$2$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$65_yy$$45$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$65_yy$$45$$)), this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$633_zz$$2$$, this.$_px$, this.$_py$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$633_zz$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$45$$, $pos$$65_yy$$45$$);
    this.$_mx$ = $xx$$45$$;
    this.$_my$ = $pos$$65_yy$$45$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDragging$ = this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$635$$) {
  this.$_bDragging$ && (this.$_bDragging$ = D.$JSCompiler_alias_FALSE$$, (0,D.$DvtEventManager$consumeEvent$$)($event$$635$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$636$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$636$$.relatedTarget || $event$$636$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$636$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$636$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$637$$) {
  if($event$$637$$.wheelDelta && 0 !== $event$$637$$.wheelDelta && this.$_callbackObj$.$_bZoomingEnabled$) {
    var $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$();
    this.$_zoomAnimator$ && ($currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$($currZoom$$7_oldZoomAnim_zz$$3$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
    this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
    var $delta$$23_pos$$66$$ = $event$$637$$.wheelDelta;
    (0,D.$DvtAgent$isPlatformGecko$$)() && ($delta$$23_pos$$66$$ = -$delta$$23_pos$$66$$);
    $currZoom$$7_oldZoomAnim_zz$$3$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$23_pos$$66$$ / window.Math.abs($delta$$23_pos$$66$$);
    $delta$$23_pos$$66$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$637$$);
    this.$getCtx$().$getDocumentUtils$().$cancelDomEvent$($event$$637$$);
    this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, $delta$$23_pos$$66$$.x, $delta$$23_pos$$66$$.y, this.$_zoomAnimator$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
    this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
  }
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$34_ratio$$16$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$34_ratio$$16$$ = $dy$$34_ratio$$16$$ * $dy$$34_ratio$$16$$, $interval$$3_newX$$11$$ = this.$_momentumTimer$.$_interval$, $dx$$31$$ = $dy$$34_ratio$$16$$ * this.$_momentumXperMS$ * $interval$$3_newX$$11$$, $dy$$34_ratio$$16$$ = $dy$$34_ratio$$16$$ * this.$_momentumYperMS$ * $interval$$3_newX$$11$$;
  this.$_momentumDx$ += $dx$$31$$;
  this.$_momentumDy$ += $dy$$34_ratio$$16$$;
  var $interval$$3_newX$$11$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$12$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_callbackObj$, $interval$$3_newX$$11$$, $newY$$12$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$14$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$14$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$14$$ - $interval$$3_newX$$11$$) > window.Math.abs($dx$$31$$) || window.Math.abs($currY$$14$$ - $newY$$12$$) > window.Math.abs($dy$$34_ratio$$16$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$638$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$638$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$638$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$639$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$639$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$639$$, "panTouch");
  (this.$_callbackObj$.$_bZoomingEnabled$ || this.$_callbackObj$.$_bPanningEnabled$) && $event$$639$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$640$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$640$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$640$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$641$$, $touch$$41$$) {
  var $targets$$inline_7675_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_7675_touchIds$$10$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$41$$.identifier, "zoomTouch", "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$41$$.pageX, this.$_my$ = $touch$$41$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = 
  (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_7675_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_7675_touchIds$$10$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_7675_touchIds$$10$$), this.$_callbackObj$.$_currTargets$ = 
  $targets$$inline_7675_touchIds$$10$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_7690_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_7690_touchIds$$11$$.length) {
    var $data$$98_touch1Data$$inline_7679$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$ = this.$TouchManager$;
    if(2 == $targets$$inline_7690_touchIds$$11$$.length) {
      if($data$$98_touch1Data$$inline_7679$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.$_touchMap$[$targets$$inline_7690_touchIds$$11$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.$_touchMap$[$targets$$inline_7690_touchIds$$11$$[1]], $data$$98_touch1Data$$inline_7679$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$98_touch1Data$$inline_7679$$.dx && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.dy) {
        $data$$98_touch1Data$$inline_7679$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$8_dist$$inline_7683_dx$$inline_7681$$ = $data$$98_touch1Data$$inline_7679$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.pageX, $dy$$inline_7682_prevdx$$inline_7684$$ = $data$$98_touch1Data$$inline_7679$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.pageY, $cp$$8_dist$$inline_7683_dx$$inline_7681$$ = window.Math.sqrt($cp$$8_dist$$inline_7683_dx$$inline_7681$$ * $cp$$8_dist$$inline_7683_dx$$inline_7681$$ + 
        $dy$$inline_7682_prevdx$$inline_7684$$ * $dy$$inline_7682_prevdx$$inline_7684$$), $dy$$inline_7682_prevdx$$inline_7684$$ = $data$$98_touch1Data$$inline_7679$$.prevPageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.prevPageX, $prevdy$$inline_7685$$ = $data$$98_touch1Data$$inline_7679$$.prevPageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.prevPageY, $cx$$inline_7686$$ = ($data$$98_touch1Data$$inline_7679$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.pageX) / 2, $cy$$inline_7687$$ = ($data$$98_touch1Data$$inline_7679$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.pageY) / 2;
        $data$$98_touch1Data$$inline_7679$$ = {$dz$:$cp$$8_dist$$inline_7683_dx$$inline_7681$$ - window.Math.sqrt($dy$$inline_7682_prevdx$$inline_7684$$ * $dy$$inline_7682_prevdx$$inline_7684$$ + $prevdy$$inline_7685$$ * $prevdy$$inline_7685$$), $cx$:$cx$$inline_7686$$, $cy$:$cy$$inline_7687$$, $dcx$:$cx$$inline_7686$$ - ($data$$98_touch1Data$$inline_7679$$.prevPageX + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.prevPageX) / 2, $dcy$:$cy$$inline_7687$$ - 
        ($data$$98_touch1Data$$inline_7679$$.prevPageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$.prevPageY) / 2, $dist$:$cp$$8_dist$$inline_7683_dx$$inline_7681$$}
      }
    }else {
      $data$$98_touch1Data$$inline_7679$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$98_touch1Data$$inline_7679$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$98_touch1Data$$inline_7679$$.$dist$ - $data$$98_touch1Data$$inline_7679$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$ = this.$_origZoom$ * ($data$$98_touch1Data$$inline_7679$$.$dist$ / this.$_origDist$), $cp$$8_dist$$inline_7683_dx$$inline_7681$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$getCtx$(), $data$$98_touch1Data$$inline_7679$$.$cx$, $data$$98_touch1Data$$inline_7679$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_7690_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_7690_touchIds$$11$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_7690_touchIds$$11$$, (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7677_touch2Data$$inline_7680_zz$$4$$, $cp$$8_dist$$inline_7683_dx$$inline_7681$$.x, $cp$$8_dist$$inline_7683_dx$$inline_7681$$.y), this.$_callbackObj$.$panBy$($data$$98_touch1Data$$inline_7679$$.$dcx$, 
    $data$$98_touch1Data$$inline_7679$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$12$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_7695$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$12$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_7695$$;
  0 == $touchIds$$12$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$644$$, $touch$$44$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$44$$.identifier, "panTouch", "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$44$$.pageX, this.$_my$ = $touch$$44$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$645$$, $touch$$45$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$46$$ = $touch$$45$$.pageX, $yy$$46$$ = $touch$$45$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$46$$, $yy$$46$$);
    this.$_mx$ = $xx$$46$$;
    this.$_my$ = $yy$$46$$
  }
};
D.$JSCompiler_prototypeAlias$$.$PanEndTouch$ = function $$JSCompiler_prototypeAlias$$$$PanEndTouch$$() {
  !this.$_bZooming$ && this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this)
};
D.$JSCompiler_StaticMethods__handleZoomEnd$$ = function $$JSCompiler_StaticMethods__handleZoomEnd$$$($JSCompiler_StaticMethods__handleZoomEnd$self$$) {
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomEnd"));
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_bZooming$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$);
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$47$$, $yy$$47$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  (0,D.$JSCompiler_StaticMethods_panTo$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$1$$ = 0, $dx$$32$$ = 0, $dy$$35$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$1$$ = $dt$$1$$ + $objMove$$.$dt$, $dx$$32$$ = $dx$$32$$ + $objMove$$.$dx$, $dy$$35$$ = $dy$$35$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$32$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$35$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$1$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_bPanningEnabled$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$25$$, $manager$$22$$) {
  this.Init($component$$25$$, $manager$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$26$$, $manager$$23$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init.call(this, $manager$$23$$);
  this.$_component$ = $component$$26$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$4_event$$647$$) {
  var $keyCode$$40$$ = $controlPanel$$4_event$$647$$.keyCode, $canvas$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$40$$) {
    $controlPanel$$4_event$$647$$.ctrlKey || $controlPanel$$4_event$$647$$.shiftKey ? $canvas$$.$panBy$($canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, $canvas$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$40$$) {
      $controlPanel$$4_event$$647$$.ctrlKey || $controlPanel$$4_event$$647$$.shiftKey ? $canvas$$.$panBy$(-$canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, -$canvas$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$40$$) {
        ($controlPanel$$4_event$$647$$ = $canvas$$.$_controlPanel$) && $controlPanel$$4_event$$647$$.$toggleExpandCollapse$()
      }else {
        if((0,D.$DvtKeyboardEvent$isEquals$$)($controlPanel$$4_event$$647$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$4_event$$647$$)) {
          (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() + $canvas$$.$_zoomIncrement$)
        }else {
          if((0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$4_event$$647$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($controlPanel$$4_event$$647$$)) {
            (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() - $canvas$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$40$$ || 96 == $keyCode$$40$$) && !$controlPanel$$4_event$$647$$.ctrlKey && !$controlPanel$$4_event$$647$$.shiftKey) {
              $canvas$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$4_event$$647$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$466$$, $maxWidth$$23$$, $maxHeight$$12$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$51$$, $disclosed$$1$$, $isFixed$$) {
  this.Init($context$$466$$, $maxWidth$$23$$, $maxHeight$$12$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$51$$, $disclosed$$1$$, $isFixed$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$467$$, $maxWidth$$24$$, $maxHeight$$13$$, $collapseDir$$1$$, $buttonImages$$5$$, $styleMap$$52$$, $disclosed$$2$$, $isFixed$$1$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$467$$);
  this.$_maxWidth$ = $maxWidth$$24$$;
  this.$_maxHeight$ = $maxHeight$$13$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$5$$;
  this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : (0,D.$DvtAgent$isEnvironmentBatik$$)();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$52$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$2$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$2$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_contentContainer$ = new D.$DvtContainer$$($context$$467$$);
  this.$addChild$(this.$_contentContainer$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_contentContainer$, 5, 5);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$DvtCollapsiblePanel$$.prototype.$HandleResize$ = function $$DvtCollapsiblePanel$$$$$HandleResize$$($event$$651_resizeHeight$$) {
  var $resizeWidth$$ = $event$$651_resizeHeight$$.getWidth() + 10;
  $event$$651_resizeHeight$$ = $event$$651_resizeHeight$$.getHeight() + 10;
  this.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)(this, $resizeWidth$$, $event$$651_resizeHeight$$));
  var $west$$2$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_buttonFrame$ && $west$$2$$ && this.$_buttonFrame$.$setTranslateX$($resizeWidth$$);
  this.$FireListener$(new D.$DvtResizeEvent$$($resizeWidth$$, $event$$651_resizeHeight$$, 0, 0))
};
D.$DvtCollapsiblePanel$$.prototype.isCollapsed = (0,D.$JSCompiler_get$$)("$_collapse$");
D.$JSCompiler_StaticMethods_setCollapsed$$ = function $$JSCompiler_StaticMethods_setCollapsed$$$($JSCompiler_StaticMethods_setCollapsed$self$$, $collapse$$1$$) {
  $JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ != $collapse$$1$$ && ($JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ = $collapse$$1$$, (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_setCollapsed$self$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setCollapsed$self$$.$FireListener$(new D.$DvtCollapsiblePanelEvent$$($collapse$$1$$ ? "hide" : "show")))
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 10
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 10
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$55$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$55$$.x, 1 / $point$$55$$.y) : new D.$DvtPoint$$(-$point$$55$$.x, -$point$$55$$.y) : $point$$55$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$2$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$2$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$2$$, $translateY$$2$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$2$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$2$$), $animate$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $scaleAnim_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$2$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$().$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_contentContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$144$$, $height$$131$$) {
  var $r$$64$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$20$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$131$$ && ($height$$131$$ = 25);
  $cmds$$20$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? D.$DvtPathUtils$$.moveTo($r$$64$$, 0) : D.$DvtPathUtils$$.moveTo(0, 0);
  $cmds$$20$$ += D.$DvtPathUtils$$.lineTo($width$$144$$ - $r$$64$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$20$$ += D.$DvtPathUtils$$.lineTo($width$$144$$, 0), $cmds$$20$$ += D.$DvtPathUtils$$.lineTo($width$$144$$, $r$$64$$)) : $cmds$$20$$ += D.$DvtPathUtils$$.$quadTo$($width$$144$$, 0, $width$$144$$, $r$$64$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$131$$ && $west$$4$$ ? $cmds$$20$$ += D.$DvtPathUtils$$.lineTo($width$$144$$, $height$$131$$) : ($cmds$$20$$ += D.$DvtPathUtils$$.lineTo($width$$144$$, $height$$131$$ - $r$$64$$), $cmds$$20$$ += D.$DvtPathUtils$$.$quadTo$($width$$144$$, $height$$131$$, $width$$144$$ - $r$$64$$, $height$$131$$));
  $cmds$$20$$ += D.$DvtPathUtils$$.lineTo($r$$64$$, $height$$131$$);
  $cmds$$20$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$131$$ && !$west$$4$$ ? $cmds$$20$$ + D.$DvtPathUtils$$.lineTo(0, $height$$131$$) : $cmds$$20$$ + D.$DvtPathUtils$$.$quadTo$(0, $height$$131$$, 0, $height$$131$$ - $r$$64$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$20$$ += D.$DvtPathUtils$$.lineTo(0, $r$$64$$), $cmds$$20$$ += D.$DvtPathUtils$$.$quadTo$(0, 0, $r$$64$$, 0)
  }
  return $cmds$$20$$ += D.$DvtPathUtils$$.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$49_stroke$$98_west$$5$$ = this.$_background$.$getStroke$().$clone$();
  $alpha$$49_stroke$$98_west$$5$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$49_stroke$$98_west$$5$$);
  var $alpha$$49_stroke$$98_west$$5$$ = this.$_styleMap$[D.$DvtControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$67$$ = this.$_background$.$getFill$().$clone$();
  $fill$$67$$.$setAlpha$($alpha$$49_stroke$$98_west$$5$$);
  this.$_background$.$setFill$($fill$$67$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.isCollapsed() || this.$_contentContainer$.$setAlpha$(1);
  $alpha$$49_stroke$$98_west$$5$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_collapseExpandButton$ && (this.$_collapseExpandButton$ = this.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, 25, this.$_styleMap$, $alpha$$49_stroke$$98_west$$5$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, 25, this.$_styleMap$, $alpha$$49_stroke$$98_west$$5$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$), 
  this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$OnButtonHoverOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnButtonClick$ = function $$JSCompiler_prototypeAlias$$$$OnButtonClick$$() {
  this.$getCtx$().$getTooltipManager$().$hideTooltip$();
  (0,D.$JSCompiler_StaticMethods_setCollapsed$$)(this, !this.isCollapsed())
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$66$$) {
  var $tooltip$$46$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$46$$ != D.$JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showTooltip$($evt$$66$$.pageX, $evt$$66$$.pageY, $tooltip$$46$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$getCtx$().$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$50_stroke$$99$$ = this.$_background$.$getStroke$().$clone$();
  $alpha$$50_stroke$$99$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$50_stroke$$99$$);
  var $alpha$$50_stroke$$99$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$68$$ = this.$_background$.$getFill$().$clone$();
  $fill$$68$$.$setAlpha$($alpha$$50_stroke$$99$$);
  this.$_background$.$setFill$($fill$$68$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$69_stroke$$100$$ = this.$_background$.$getStroke$().$clone$();
  $fill$$69_stroke$$100$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$69_stroke$$100$$);
  $fill$$69_stroke$$100$$ = this.$_background$.$getFill$().$clone$();
  $fill$$69_stroke$$100$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$69_stroke$$100$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$9$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$9$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$542$$, $uri$$20$$) {
  var $image$$20$$ = new D.$DvtImage$$($context$$542$$, $uri$$20$$);
  $image$$20$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$542$$, $uri$$20$$, function($context$$542$$) {
    $context$$542$$ != D.$JSCompiler_alias_NULL$$ && ($context$$542$$.width && $context$$542$$.height) && ($image$$20$$.$setWidth$($context$$542$$.width), $image$$20$$.$setHeight$($context$$542$$.height))
  });
  return $image$$20$$
};
D.$DvtButtonLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtButtonLAFUtils$$, D.$DvtObj$$, "DvtButtonLAFUtils");
D.$DvtButtonLAFUtils$$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_WIDTH$ = 23;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_HEIGHT$ = 21;
D.$DvtButtonLAFUtils$$.$ZOOM_BUTTON_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtButtonLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtButtonLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtButtonLAFUtils$$.$BORDER_COLOR$ = "#7C8191";
D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$ = "#E0E1E1";
D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$ = "#F0F1F2";
D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$ = 8;
D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$ = "solid";
D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ = "#3474D3";
D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$ = "#BFD8FB";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$ = "zoominUp";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$ = "zoominOver";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$ = "zoominDown";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$ = "zoomoutUp";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$ = "zoomoutOver";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$ = "zoomoutDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
D.$DvtButtonLAFUtils$$.$_PAN_ENA$ = "pandialUp";
D.$DvtButtonLAFUtils$$.$_PAN_OVR$ = "pandialOver";
D.$DvtButtonLAFUtils$$.$_PAN_DWN$ = "pandialDown";
D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$ = "recenterUp";
D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$ = "recenterOver";
D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$ = "recenterDown";
D.$DvtButtonLAFUtils$$.$_RESET_ENA$ = "resetUp";
D.$DvtButtonLAFUtils$$.$_RESET_OVR$ = "resetOver";
D.$DvtButtonLAFUtils$$.$_RESET_DWN$ = "resetDown";
D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$ = "drillupUp";
D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$ = "drillupOver";
D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$ = "drillupDown";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$ = "drilldownUp";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$ = "drilldownOver";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$ = "drilldownDown";
D.$DvtButtonLAFUtils$$.$_MAX_ENA$ = "maxUp";
D.$DvtButtonLAFUtils$$.$_MAX_OVR$ = "maxOver";
D.$DvtButtonLAFUtils$$.$_MAX_DWN$ = "maxDown";
D.$DvtButtonLAFUtils$$.$_RESTORE_ENA$ = "restoreUp";
D.$DvtButtonLAFUtils$$.$_RESTORE_OVR$ = "restoreOver";
D.$DvtButtonLAFUtils$$.$_RESTORE_DWN$ = "restoreDown";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$ = "collapseEna";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$ = "collapseOvr";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$ = "collapseDwn";
D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$ = "expandEna";
D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$ = "expandOvr";
D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$ = "expandDwn";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$ = "quickQueryEna";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$DIR_RIGHT$ = "right";
D.$DvtButtonLAFUtils$$.$DIR_LEFT$ = "left";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$511$$, $panZoomCanvas$$14$$, $controls$$3$$, $imageURIs$$3$$, $styleMap$$62$$) {
  var $panButton$$2_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$511$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$62$$), $panDownState$$ = new D.$DvtContainer$$($context$$511$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$511$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$62$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$511$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$511$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$62$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton$$2_panUpState$$ = new D.$DvtButton$$($context$$511$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$3$$ & 16)) {
    var $recenterButton$$2$$ = new D.$DvtButton$$($context$$511$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$511$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$62$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$511$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$62$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$511$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$62$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$2$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$511$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $panZoomCanvas$$14$$, $controls$$3$$, $styleMap$$62$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$512$$, $mapCallback$$, $panZoomCanvas$$15$$, $dis$$3_imageURIs$$4$$, $eventManager$$26$$, $styleMap$$63$$) {
  var $ena$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$512$$, 0, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$63$$), $ovr$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$512$$, 1, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$63$$), $dwn$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$512$$, 2, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$63$$);
  $dis$$3_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$512$$, 0, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$63$$);
  return new D.$DvtMapControlButton$$($context$$512$$, new D.$DvtButton$$($context$$512$$, $ena$$9$$, $ovr$$5$$, $dwn$$5$$, $dis$$3_imageURIs$$4$$), $mapCallback$$, $panZoomCanvas$$15$$, 0, $eventManager$$26$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$513$$, $mapCallback$$1$$, $panZoomCanvas$$16$$, $dis$$4_imageURIs$$5$$, $eventManager$$27$$, $styleMap$$64$$) {
  var $ena$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$513$$, 0, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$64$$), $ovr$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$513$$, 1, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$64$$), $dwn$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$513$$, 2, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$64$$);
  $dis$$4_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$513$$, 0, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$64$$);
  return new D.$DvtMapControlButton$$($context$$513$$, new D.$DvtButton$$($context$$513$$, $ena$$10$$, $ovr$$6$$, $dwn$$6$$, $dis$$4_imageURIs$$5$$), $mapCallback$$1$$, $panZoomCanvas$$16$$, 1, $eventManager$$27$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$514$$, $mapCallback$$2$$, $panZoomCanvas$$17$$, $dis$$5_imageURIs$$6$$, $eventManager$$28$$, $styleMap$$65$$) {
  var $ena$$11$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$514$$, 0, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$65$$), $ovr$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$514$$, 1, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$65$$), $dwn$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$514$$, 2, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$65$$);
  $dis$$5_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$514$$, 0, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$65$$);
  return new D.$DvtMapControlButton$$($context$$514$$, new D.$DvtButton$$($context$$514$$, $ena$$11$$, $ovr$$7$$, $dwn$$7$$, $dis$$5_imageURIs$$6$$), $mapCallback$$2$$, $panZoomCanvas$$17$$, 2, $eventManager$$28$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$515$$, $panZoomCanvas$$18$$, $eventManager$$29$$, $dwn$$8_imageURIs$$7$$, $styleMap$$66$$) {
  var $ena$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$515$$, 0, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$66$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$515$$, 1, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$66$$);
  $dwn$$8_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$515$$, 2, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$66$$);
  return new D.$DvtZoomToFitButton$$($context$$515$$, new D.$DvtButton$$($context$$515$$, $ena$$12$$, $ovr$$8$$, $dwn$$8_imageURIs$$7$$), $panZoomCanvas$$18$$, $eventManager$$29$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$516$$, $panZoomCanvas$$19$$, $eventManager$$30$$, $dis$$6_imageURIs$$8$$, $styleMap$$67$$) {
  var $ena$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$516$$, 0, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$67$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$516$$, 1, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$67$$), $dwn$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$516$$, 2, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$67$$);
  $dis$$6_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$516$$, 3, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$67$$);
  return new D.$DvtZoomInButton$$($context$$516$$, new D.$DvtButton$$($context$$516$$, $ena$$13$$, $ovr$$9$$, $dwn$$9$$, $dis$$6_imageURIs$$8$$), $panZoomCanvas$$19$$, $eventManager$$30$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$517$$, $panZoomCanvas$$20$$, $eventManager$$31$$, $dis$$7_imageURIs$$9$$, $styleMap$$68$$) {
  var $ena$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$517$$, 0, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$68$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$517$$, 1, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$68$$), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$517$$, 2, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$68$$);
  $dis$$7_imageURIs$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$517$$, 3, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$68$$);
  return new D.$DvtZoomOutButton$$($context$$517$$, new D.$DvtButton$$($context$$517$$, $ena$$14$$, $ovr$$10$$, $dwn$$10$$, $dis$$7_imageURIs$$9$$), $panZoomCanvas$$20$$, $eventManager$$31$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$518_image$$15$$, $attrb_bname$$4$$, $state$$77$$, $images$$12$$, $styleMap$$69$$) {
  var $r$$76$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$69$$, "buttonRadius", 0), $w$$60$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$69$$, "buttonWidth", 0), $h$$56$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$69$$, "buttonWidth", 0), $shape$$75$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$518_image$$15$$, $r$$76$$, $w$$60$$, $h$$56$$, $styleMap$$69$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$77$$, $shape$$75$$, $w$$60$$, $h$$56$$ + 2 * $r$$76$$, $styleMap$$69$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$4$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$518_image$$15$$, $state$$77$$, $attrb_bname$$4$$);
  ($context$$518_image$$15$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$518_image$$15$$, $images$$12$$[$attrb_bname$$4$$], $w$$60$$, $h$$56$$)) && $shape$$75$$.$addChild$($context$$518_image$$15$$);
  return $shape$$75$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$519$$, $state$$78$$, $attrb$$1_bname$$5$$, $bSel$$) {
  var $r2l$$ = "";
  0 == $state$$78$$ ? $state$$78$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$78$$ ? $state$$78$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$78$$ && ($state$$78$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$ && ($attrb$$1_bname$$5$$ += D.$DvtButtonLAFUtils$$.$_SEL$, (0,D.$DvtAgent$isRightToLeft$$)($context$$519$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$5$$ + ($state$$78$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$520$$, $state$$79$$, $styleMap$$70$$, $images$$13$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$520$$, $state$$79$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$520$$, $state$$79$$, $images$$13$$[$attrb$$2$$], $styleMap$$70$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$3_context$$521$$, $state$$80$$, $ww$$106$$, $hh$$90$$, $styleMap$$71$$) {
  var $r$$77$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonRadius", 0);
  $base$$3_context$$521$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$3_context$$521$$, $r$$77$$, $ww$$106$$, $hh$$90$$, $styleMap$$71$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$80$$, $base$$3_context$$521$$, $ww$$106$$, $hh$$90$$ + 2 * $r$$77$$, $styleMap$$71$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$3_context$$521$$
};
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$522$$, $attrb$$3_bname$$6$$, $state$$81$$, $images$$15$$, $styleMap$$72$$) {
  $attrb$$3_bname$$6$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$522$$, $state$$81$$, $attrb$$3_bname$$6$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$522$$, $state$$81$$, $images$$15$$[$attrb$$3_bname$$6$$], $styleMap$$72$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$523$$, $dwn$$11_imageURIs$$10$$, $h$$57$$, $styleMap$$73$$, $dir$$31_ena$$15$$) {
  var $right$$16$$ = $dir$$31_ena$$15$$ == D.$DvtButtonLAFUtils$$.$DIR_RIGHT$;
  $dir$$31_ena$$15$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$523$$, 0, $h$$57$$, $right$$16$$ ? $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$] : $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$73$$, $right$$16$$);
  var $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$523$$, 1, $h$$57$$, $right$$16$$ ? $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$] : $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$73$$, $right$$16$$);
  $dwn$$11_imageURIs$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$523$$, 2, $h$$57$$, $right$$16$$ ? $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$] : $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], $styleMap$$73$$, $right$$16$$);
  return new D.$DvtButton$$($context$$523$$, $dir$$31_ena$$15$$, $ovr$$11$$, $dwn$$11_imageURIs$$10$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$524$$, $dwn$$12_imageURIs$$11$$, $h$$58$$, $styleMap$$74$$, $dir$$32_ena$$16$$) {
  var $right$$17$$ = $dir$$32_ena$$16$$ == D.$DvtButtonLAFUtils$$.$DIR_RIGHT$;
  $dir$$32_ena$$16$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$524$$, 0, $h$$58$$, $right$$17$$ ? $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$] : $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$74$$, $right$$17$$);
  var $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$524$$, 1, $h$$58$$, $right$$17$$ ? $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$] : $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$74$$, $right$$17$$);
  $dwn$$12_imageURIs$$11$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$524$$, 2, $h$$58$$, $right$$17$$ ? $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$] : $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$74$$, $right$$17$$);
  return new D.$DvtButton$$($context$$524$$, $dir$$32_ena$$16$$, $ovr$$12$$, $dwn$$12_imageURIs$$11$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$525$$, $imageURIs$$12$$) {
  var $ena$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$525$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$13$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$525$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$13$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$525$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$]);
  return new D.$DvtButton$$($context$$525$$, $ena$$17$$, $ovr$$13$$, $dwn$$13$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$526$$, $imageURIs$$13$$) {
  var $ena$$18$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$526$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$14$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$526$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$14$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$526$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$]);
  return new D.$DvtButton$$($context$$526$$, $ena$$18$$, $ovr$$14$$, $dwn$$14$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$527_image$$16$$, $base$$4_state$$82$$, $uri$$14$$, $styleMap$$75$$) {
  var $w$$61$$, $h$$59$$, $r$$78$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$75$$, "buttonRadius", 0);
  if("undefined" === $w$$61$$ || $w$$61$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$61$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$75$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$59$$ || $h$$59$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$59$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$75$$, "buttonWidth", 0)
  }
  $base$$4_state$$82$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$527_image$$16$$, $base$$4_state$$82$$, $r$$78$$, $w$$61$$, $h$$59$$, $styleMap$$75$$);
  ($context$$527_image$$16$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$527_image$$16$$, $uri$$14$$, $w$$61$$, $h$$59$$)) && $base$$4_state$$82$$.$addChild$($context$$527_image$$16$$);
  return $base$$4_state$$82$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$528$$, $uri$$15$$, $buttonWidth$$8$$, $buttonHeight$$3$$) {
  var $image$$17$$ = new D.$DvtImage$$($context$$528$$, $uri$$15$$);
  $image$$17$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$528$$, $uri$$15$$, function($context$$528$$) {
    $context$$528$$ != D.$JSCompiler_alias_NULL$$ && ($context$$528$$.width && $context$$528$$.height) && ($image$$17$$.$setWidth$($context$$528$$.width), $image$$17$$.$setHeight$($context$$528$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$17$$, $buttonWidth$$8$$ / 2 - $context$$528$$.width / 2, $buttonHeight$$3$$ / 2 - $context$$528$$.height / 2))
  });
  return $image$$17$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$529_image$$18$$, $uri$$16$$, $styleMap$$76$$) {
  var $mc$$5$$ = new D.$DvtContainer$$($context$$529_image$$18$$), $hitZone$$ = new D.$DvtCircle$$($context$$529_image$$18$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$5$$.$addChild$($hitZone$$);
  ($context$$529_image$$18$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$529_image$$18$$, $uri$$16$$)) && $mc$$5$$.$addChild$($context$$529_image$$18$$);
  return $mc$$5$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$530_image$$19$$, $uri$$17$$, $styleMap$$77$$) {
  var $shape$$78$$ = new D.$DvtContainer$$($context$$530_image$$19$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$530_image$$19$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$78$$.$addChild$($hitZone$$1$$);
  ($context$$530_image$$19$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$530_image$$19$$, $uri$$17$$)) && $shape$$78$$.$addChild$($context$$530_image$$19$$);
  return $shape$$78$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$531_iconLoader$$, $sprite_state$$83$$, $nh$$5$$, $imageW_uri$$18$$, $styleMap$$78$$, $imageH_right$$18$$) {
  $nh$$5$$ || ($nh$$5$$ = 47);
  $sprite_state$$83$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$531_iconLoader$$, $sprite_state$$83$$, $nh$$5$$, $styleMap$$78$$, $imageH_right$$18$$);
  if($context$$531_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$531_iconLoader$$, $imageW_uri$$18$$)) {
    $imageW_uri$$18$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "imageWidth", 0), $imageH_right$$18$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "imageHeight", 0), $sprite_state$$83$$.$addChild$($context$$531_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$531_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "openCloseButtonWidth", 0) - $imageW_uri$$18$$) / 2, ($nh$$5$$ - $imageH_right$$18$$) / 2)
  }
  return $sprite_state$$83$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$532$$, $uri$$19$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$532$$, $uri$$19$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$533$$, $styleMap$$79$$) {
  var $shape$$79$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$533$$), $bgColor$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$54$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$79$$.$setSolidStroke$($borderColor$$54$$), $shape$$79$$.$setSolidFill$($bgColor$$11$$)) : ($shape$$79$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$54$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$79$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$11$$, $bgColor$$11$$, "#5A83BE", $bgColor$$11$$], [0.9, 0.1, 0, 0.7], 
  [0, 105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$79$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$534$$, $styleMap$$80$$) {
  var $shape$$80$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$534$$), $color$$85$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$80$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$80$$.$setSolidStroke$($color$$85$$);
  $shape$$80$$.$setSolidFill$($color$$85$$);
  return $shape$$80$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$535$$) {
  var $cmds$$23$$ = D.$DvtPathUtils$$.moveTo(40, 20) + D.$DvtPathUtils$$.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + D.$DvtPathUtils$$.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + D.$DvtPathUtils$$.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + D.$DvtPathUtils$$.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$535$$, $cmds$$23$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$81$$, $ww$$108$$, $hh$$92$$, $xx$$56$$, $yy$$56$$) {
  $shape$$81$$.$setSolidStroke$("#FFFFFF");
  $shape$$81$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$xx$$56$$, $yy$$56$$, $ww$$108$$, $hh$$92$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$85$$, $shape$$82$$, $ww$$109$$, $hh$$93$$, $styleMap$$81$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$85$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$82$$) : (1 == $state$$85$$ || 2 == $state$$85$$) && $shape$$82$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$81$$.skin) {
      switch($state$$85$$) {
        case 1:
          $shape$$82$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$82$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$82$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$82$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$82$$)
      }
    }else {
      var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
      switch($state$$85$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$10$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$82$$, $ww$$109$$, $hh$$93$$, 0, 0);
          $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$10$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$82$$, $ww$$109$$, $hh$$93$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [0.1, 0.3, 0.6], $fill_ratios$$10$$ = [0, 130 / 255, 1]
      }
      $shape$$82$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $ww$$109$$, $hh$$93$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$70_state$$86$$, $shape$$83$$, $bgColor$$12_ww$$110$$, $hh$$94$$, $styleMap$$82$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$83$$)
  }else {
    var $borderColor$$55_stroke$$101$$;
    $borderColor$$55_stroke$$101$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$12_ww$$110$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "background-color", D.$JSCompiler_alias_NULL$$);
      var $bgAlpha$$2$$, $strokeAlpha$$2$$;
      switch($fill$$70_state$$86$$) {
        case 0:
          $bgAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "backgroundAlpha", 1);
          $strokeAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          $bgAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "backgroundHoverAlpha", 1), $strokeAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "borderHoverAlpha", 1)
      }
      $fill$$70_state$$86$$ = new D.$DvtSolidFill$$($bgColor$$12_ww$$110$$, $bgAlpha$$2$$);
      $borderColor$$55_stroke$$101$$ = new D.$DvtSolidStroke$$($borderColor$$55_stroke$$101$$, $strokeAlpha$$2$$)
    }else {
      var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
      switch($fill$$70_state$$86$$) {
        case 0:
          $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
          $fill_alphas$$11$$ = [0, 0.2, 0.3];
          $fill_ratios$$11$$ = [0, 130 / 255, 1];
          break;
        case 1:
          $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
          $fill_alphas$$11$$ = [0.1, 0.2, 0.1, 0.6];
          $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [0.5, 0.2, 0.4], $fill_ratios$$11$$ = [0, 130 / 255, 1]
      }
      $fill$$70_state$$86$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $bgColor$$12_ww$$110$$, $hh$$94$$]);
      $borderColor$$55_stroke$$101$$ = new D.$DvtSolidStroke$$($borderColor$$55_stroke$$101$$, 1, 0.8)
    }
    $shape$$83$$.$setStroke$($borderColor$$55_stroke$$101$$);
    $shape$$83$$.$setFill$($fill$$70_state$$86$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$87$$, $shape$$84$$, $ww$$111$$, $hh$$95$$, $xx$$59$$, $yy$$59$$) {
  var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
  switch($state$$87$$) {
    case 0:
      $shape$$84$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$84$$, $ww$$111$$, $hh$$95$$, $xx$$59$$, $yy$$59$$);
      $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$84$$, $ww$$111$$, $hh$$95$$, $xx$$59$$, $yy$$59$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [0.6, 0.5, 0.8], $fill_ratios$$12$$ = [0, 130 / 255, 1]
  }
  $shape$$84$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$xx$$59$$, $yy$$59$$, $ww$$111$$, $hh$$95$$]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$10$$, $buttonHeight$$4$$, $r$$81$$, $right$$19$$) {
  return $right$$19$$ ? ["M", $buttonWidth$$10$$, 0, "L", $r$$81$$, 0, "A", $r$$81$$, $r$$81$$, 0, 0, 0, 0, $r$$81$$, "L", 0, $buttonHeight$$4$$ - $r$$81$$, "A", $r$$81$$, $r$$81$$, 0, 0, 0, $r$$81$$, $buttonHeight$$4$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$] : ["M", 0, 0, "L", $buttonWidth$$10$$ - $r$$81$$, 0, "A", $r$$81$$, $r$$81$$, 0, 0, 1, $buttonWidth$$10$$, $r$$81$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$ - $r$$81$$, "A", $r$$81$$, $r$$81$$, 0, 0, 1, $buttonWidth$$10$$ - $r$$81$$, 
  $buttonHeight$$4$$, "L", 0, $buttonHeight$$4$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$537_shape$$85$$, $state$$88$$, $buttonHeight$$5_nh$$6$$, $styleMap$$83$$, $right$$20$$) {
  $buttonHeight$$5_nh$$6$$ || ($buttonHeight$$5_nh$$6$$ = 47);
  var $r$$82$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "border-radius", 0)), $buttonWidth$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "openCloseButtonWidth", 0);
  $buttonHeight$$5_nh$$6$$ = window.Math.max($buttonHeight$$5_nh$$6$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "buttonHeight", $buttonHeight$$5_nh$$6$$));
  $context$$537_shape$$85$$ = new D.$DvtPath$$($context$$537_shape$$85$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $r$$82$$, $right$$20$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$88$$, $context$$537_shape$$85$$, $buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $styleMap$$83$$);
  return $context$$537_shape$$85$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$538_shape$$86$$, $state$$89$$, $r$$83$$, $ww$$112$$, $hh$$96$$, $styleMap$$84$$) {
  $context$$538_shape$$86$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$538_shape$$86$$, $r$$83$$, $ww$$112$$, $hh$$96$$, $styleMap$$84$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$89$$, $context$$538_shape$$86$$, $ww$$112$$, $hh$$96$$ + 2 * $r$$83$$, $styleMap$$84$$);
  return $context$$538_shape$$86$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$539$$, $r$$84$$, $ww$$113$$, $hh$$97$$, $styleMap$$85_x$$248$$) {
  if("skyros" == $styleMap$$85_x$$248$$.skin) {
    return new D.$DvtRect$$($context$$539$$, 0, 0, $ww$$113$$, $hh$$97$$)
  }
  $ww$$113$$ -= 2 * $r$$84$$;
  $hh$$97$$ -= 2 * $r$$84$$;
  $styleMap$$85_x$$248$$ = $ww$$113$$ + $r$$84$$;
  var $y$$224$$ = $hh$$97$$ + $r$$84$$, $cmds$$24$$ = D.$DvtPathUtils$$.moveTo($styleMap$$85_x$$248$$ + $r$$84$$, $y$$224$$) + D.$DvtPathUtils$$.$quadTo$($r$$84$$ + $styleMap$$85_x$$248$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $y$$224$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $styleMap$$85_x$$248$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $y$$224$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $styleMap$$85_x$$248$$, $r$$84$$ + $y$$224$$, $styleMap$$85_x$$248$$, 
  $r$$84$$ + $y$$224$$) + D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$, $y$$224$$ + $r$$84$$) + D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$ - $ww$$113$$, $r$$84$$ + $y$$224$$);
  $styleMap$$85_x$$248$$ -= $ww$$113$$;
  $cmds$$24$$ += D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $styleMap$$85_x$$248$$, $r$$84$$ + $y$$224$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $styleMap$$85_x$$248$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $y$$224$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$84$$ + $styleMap$$85_x$$248$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $y$$224$$, -$r$$84$$ + $styleMap$$85_x$$248$$, $y$$224$$) + D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$ - $r$$84$$, $y$$224$$) + 
  D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$ - $r$$84$$, $y$$224$$ - $hh$$97$$);
  $y$$224$$ -= $hh$$97$$;
  $cmds$$24$$ += D.$DvtPathUtils$$.$quadTo$(-$r$$84$$ + $styleMap$$85_x$$248$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $y$$224$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $styleMap$$85_x$$248$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $y$$224$$) + D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $styleMap$$85_x$$248$$, -$r$$84$$ + $y$$224$$, $styleMap$$85_x$$248$$, -$r$$84$$ + $y$$224$$) + D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$, -$r$$84$$ + 
  $y$$224$$) + D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$ + $ww$$113$$, -$r$$84$$ + $y$$224$$);
  $styleMap$$85_x$$248$$ += $ww$$113$$;
  $cmds$$24$$ += D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $styleMap$$85_x$$248$$, -$r$$84$$ + $y$$224$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $styleMap$$85_x$$248$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$84$$ + $y$$224$$) + D.$DvtPathUtils$$.$quadTo$($r$$84$$ + $styleMap$$85_x$$248$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$84$$ + $y$$224$$, $r$$84$$ + $styleMap$$85_x$$248$$, $y$$224$$) + D.$DvtPathUtils$$.lineTo($styleMap$$85_x$$248$$ + $r$$84$$, $y$$224$$ + 
  $hh$$97$$) + D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$539$$, $cmds$$24$$)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$540$$, $ww$$114$$, $hh$$98$$, $r$$85_styleMap$$86$$) {
  $r$$85_styleMap$$86$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$85_styleMap$$86$$, "radius", 0);
  $ww$$114$$ -= 2 * $r$$85_styleMap$$86$$;
  $hh$$98$$ -= $r$$85_styleMap$$86$$;
  var $x$$249$$ = $ww$$114$$ + $r$$85_styleMap$$86$$, $y$$225$$ = $hh$$98$$, $cmds$$25$$ = D.$DvtPathUtils$$.moveTo($x$$249$$ + $r$$85_styleMap$$86$$, $y$$225$$) + D.$DvtPathUtils$$.$quadTo$($r$$85_styleMap$$86$$ + $x$$249$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85_styleMap$$86$$ + $y$$225$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85_styleMap$$86$$ + $x$$249$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85_styleMap$$86$$ + $y$$225$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * 
  $r$$85_styleMap$$86$$ + $x$$249$$, $r$$85_styleMap$$86$$ + $y$$225$$, $x$$249$$, $r$$85_styleMap$$86$$ + $y$$225$$) + D.$DvtPathUtils$$.lineTo($x$$249$$, $r$$85_styleMap$$86$$ + $y$$225$$) + D.$DvtPathUtils$$.lineTo($x$$249$$ - $ww$$114$$, $r$$85_styleMap$$86$$ + $y$$225$$), $x$$249$$ = $x$$249$$ - $ww$$114$$, $cmds$$25$$ = $cmds$$25$$ + (D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85_styleMap$$86$$ + $x$$249$$, $r$$85_styleMap$$86$$ + $y$$225$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * 
  $r$$85_styleMap$$86$$ + $x$$249$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85_styleMap$$86$$ + $y$$225$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$85_styleMap$$86$$ + $x$$249$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85_styleMap$$86$$ + $y$$225$$, -$r$$85_styleMap$$86$$ + $x$$249$$, $y$$225$$) + D.$DvtPathUtils$$.lineTo(-$r$$85_styleMap$$86$$ + $x$$249$$, $y$$225$$) + D.$DvtPathUtils$$.lineTo(-$r$$85_styleMap$$86$$ + $x$$249$$, $y$$225$$ - $hh$$98$$)), $y$$225$$ = $y$$225$$ - $hh$$98$$, $cmds$$25$$ = 
  $cmds$$25$$ + (D.$DvtPathUtils$$.lineTo($x$$249$$ + $ww$$114$$ + $r$$85_styleMap$$86$$, $y$$225$$) + D.$DvtPathUtils$$.lineTo($x$$249$$ + $ww$$114$$ + $r$$85_styleMap$$86$$, $y$$225$$ + $hh$$98$$) + D.$DvtPathUtils$$.closePath());
  return new D.$DvtPath$$($context$$540$$, $cmds$$25$$)
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$541$$, $obj$$325$$) {
  $obj$$325$$ instanceof D.$DvtButton$$ && ($obj$$325$$ = $obj$$325$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$541$$, $obj$$325$$)
};
D.$DvtButtonLAFUtils$$.$parseStyle$ = function $$DvtButtonLAFUtils$$$$parseStyle$$($dispObj$$33$$, $buttonStyle$$29$$) {
  var $fillType$$12_linearGradient$$4$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$, $borderColor$$56_stroke$$102$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$, $backgroundColor$$24$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, $background$$13$$;
  $buttonStyle$$29$$ && ($buttonStyle$$29$$.$getStyle$("fill-type") && ($fillType$$12_linearGradient$$4$$ = $buttonStyle$$29$$.$getStyle$("fill-type")), $buttonStyle$$29$$.$getStyle$("border-color") && ($borderColor$$56_stroke$$102$$ = $buttonStyle$$29$$.$getStyle$("border-color")), $buttonStyle$$29$$.$getStyle$("background-color") && ($backgroundColor$$24$$ = $buttonStyle$$29$$.$getStyle$("background-color")), $buttonStyle$$29$$.$getStyle$("background") && ($background$$13$$ = $buttonStyle$$29$$.$getStyle$("background")));
  var $borderColor$$56_stroke$$102$$ = new D.$DvtSolidStroke$$($borderColor$$56_stroke$$102$$), $fill$$71_fill_colors$$13_midColor$$11$$;
  if("solid" == $fillType$$12_linearGradient$$4$$) {
    $fill$$71_fill_colors$$13_midColor$$11$$ = new D.$DvtSolidFill$$($backgroundColor$$24$$)
  }else {
    var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
    if($background$$13$$ && 0 <= $background$$13$$.indexOf("linear-gradient")) {
      if($fillType$$12_linearGradient$$4$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($background$$13$$)) {
        $degree$$3$$ = $fillType$$12_linearGradient$$4$$.$getAngle$(), $fill$$71_fill_colors$$13_midColor$$11$$ = $fillType$$12_linearGradient$$4$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $fillType$$12_linearGradient$$4$$.$_arAlphas$, $fill_ratios$$13$$ = $fillType$$12_linearGradient$$4$$.$_arRatios$
      }
    }else {
      $fill$$71_fill_colors$$13_midColor$$11$$ = $backgroundColor$$24$$, $endColor$$16_fill_alphas$$13$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$71_fill_colors$$13_midColor$$11$$ != D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = D.$DvtColorUtils$$.$inferColor$(D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$71_fill_colors$$13_midColor$$11$$)), $fill$$71_fill_colors$$13_midColor$$11$$ = [$fill$$71_fill_colors$$13_midColor$$11$$, 
      $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [0.6, 0.8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270
    }
    $fill$$71_fill_colors$$13_midColor$$11$$ = new D.$DvtLinearGradientFill$$($degree$$3$$, $fill$$71_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$)
  }
  $dispObj$$33$$.$setFill$($fill$$71_fill_colors$$13_midColor$$11$$);
  $dispObj$$33$$.$setStroke$($borderColor$$56_stroke$$102$$)
};
  return D;
});