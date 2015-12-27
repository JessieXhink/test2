/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "promise", "ojs/ojeditablevalue", "ojs/ojmenu", "ojs/ojdatacollection-common"], function($oj$$14$$, $$$$14$$) {
  (function() {
    $oj$$14$$.$__registerWidget$("oj.ojTable", $$$$14$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, currentRow:null, data:null, emptyText:null, horizontalGridVisible:"enabled", rowRenderer:null, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:null, verticalGridVisible:"enabled", columns:[{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, 
    footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, id:null, sortable:"auto", sortProperty:null, style:null}], columnsDefault:{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, sortable:"auto", sortProperty:null, style:null}, beforeCurrentRow:null, ready:null, sort:null, optionChange:null, translations:{}}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", 
    $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", $_LABEL_SELECT_ROW$:"labelSelectRow"}, $_LOGGER_MSG$:{$_ERR_PRECURRENTROW_ERROR_SUMMARY$:"Did not change current row due to error.", $_ERR_PRECURRENTROW_ERROR_DETAIL$:"Error detail: {error}.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$:"Did not change current row due to unavailable row index.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$:"Unavailable row index: {rowIdx}.", $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"Invalid row index value.", 
    $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"Row index: {rowIdx}.", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"Invalid data type.", $_ERR_DATA_INVALID_TYPE_DETAIL$:"Please specify the appropriate data type.", $_ERR_ELEMENT_INVALID_TYPE_SUMMARY$:"Invalid element type.", $_ERR_ELEMENT_INVALID_TYPE_DETAIL$:"Only a \x3ctable\x3e element can be specified for ojTable.", $_ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY$:"Exceeded maximum rows for table scrolling.", $_ERR_DOM_SCROLLER_MAX_COUNT_DETAIL$:"Please reload with smaller data set."}, 
    $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_OPTION_AUTO$:"auto", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_NONE$:"none", $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", $_MULTIPLE$:"multiple"}, $_OPTION_SCROLL_POLICY$:{$_AUTO$:"auto", $_LOADMORE_ON_SCROLL$:"loadMoreOnScroll"}, $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", 
    $_DESCENDING$:"descending"}, $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_SPACEBAR$:32, $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, getNodeBySubId:function($columnIdx_locator$$17_tableHeaderColumn$$) {
      if (null == $columnIdx_locator$$17_tableHeaderColumn$$) {
        return this.element ? this.element[0] : null;
      }
      var $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$17_tableHeaderColumn$$.subId;
      if ("oj-table-cell" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        return $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$17_tableHeaderColumn$$.rowIndex, $columnIdx_locator$$17_tableHeaderColumn$$ = $columnIdx_locator$$17_tableHeaderColumn$$.columnIndex, this.$_getTableDomUtils$().$getTableBodyCell$($rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$, $columnIdx_locator$$17_tableHeaderColumn$$)[0];
      }
      if ("oj-table-header" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-ascending" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-descending" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        if ($columnIdx_locator$$17_tableHeaderColumn$$ = $columnIdx_locator$$17_tableHeaderColumn$$.index, $columnIdx_locator$$17_tableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx_locator$$17_tableHeaderColumn$$), null != $columnIdx_locator$$17_tableHeaderColumn$$) {
          if ("oj-table-header" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
            return $columnIdx_locator$$17_tableHeaderColumn$$[0];
          }
          $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = "oj-table-sort-ascending" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ ? $columnIdx_locator$$17_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $columnIdx_locator$$17_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
          if (0 < $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.length) {
            return $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
          }
        }
      } else {
        if ("oj-table-footer" === $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ && ($columnIdx_locator$$17_tableHeaderColumn$$ = $columnIdx_locator$$17_tableHeaderColumn$$.index, $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = this.$_getTableDomUtils$().$getTableFooterCell$($columnIdx_locator$$17_tableHeaderColumn$$), null != $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$)) {
          return $rowIdx$$2_subId$$14_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
        }
      }
      return null;
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, refreshRow:function($rowIdx$$3$$) {
      var $data$$112_errSummary$$7$$ = this.$_getData$();
      if (!$data$$112_errSummary$$7$$) {
        return!1;
      }
      var $errDetail$$7_rowKey$$5_tableBodyRows$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (isNaN($rowIdx$$3$$) || 0 > $rowIdx$$3$$ || null != $errDetail$$7_rowKey$$5_tableBodyRows$$ && $rowIdx$$3$$ >= $errDetail$$7_rowKey$$5_tableBodyRows$$.length) {
        throw $data$$112_errSummary$$7$$ = this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$, $errDetail$$7_rowKey$$5_tableBodyRows$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, {rowIdx:$rowIdx$$3$$.toString()}), new RangeError($data$$112_errSummary$$7$$ + "\n" + $errDetail$$7_rowKey$$5_tableBodyRows$$);
      }
      var $errDetail$$7_rowKey$$5_tableBodyRows$$ = this.$_getRowKeyForRowIdx$($rowIdx$$3$$), $row$$20$$ = $data$$112_errSummary$$7$$.get($errDetail$$7_rowKey$$5_tableBodyRows$$);
      if (null == $row$$20$$) {
        return!1;
      }
      var $self$$91$$ = this;
      return this.$_queueTask$(function() {
        return $row$$20$$.then(function($row$$21$$) {
          $self$$91$$.$_refreshTableBodyRow$($rowIdx$$3$$, $row$$21$$);
        }).then(function() {
          return!0;
        });
      });
    }, widget:function() {
      var $tableContainer$$ = this.$_getTableDomUtils$().$getTableContainer$();
      return null != $tableContainer$$ ? $tableContainer$$ : this.element;
    }, _ComponentCreate:function() {
      this._super();
      this.$_draw$();
      this.$_registerCustomEvents$();
      this._on(this.$_events$);
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$();
      this.$_cachedOptions$ = $$$$14$$.extend(!0, {}, this.options);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuSelect$.bind(this));
      this.$_initFetch$();
    }, $_NotifyContextMenuGesture$:function($contextMenu$$2$$, $event$$160$$, $eventType$$35$$) {
      var $openOptions$$3$$ = {};
      this.$_contextMenuEvent$ = $event$$160$$.originalEvent;
      if (!this.$_isNodeEditableOrClickable$($$$$14$$(this.$_contextMenuEvent$.target))) {
        var $columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $columnIdx$$1_headerColumn$$ = null == $columnIdx$$1_headerColumn$$ ? this.$_getTableDomUtils$().$getTableHeaderColumn$(this.$_activeColumnIndex$) : $columnIdx$$1_headerColumn$$, $focusedRowIdx_table_tableBodyCell_tableBodyRow$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
        null != $focusedRowIdx_table_tableBodyCell_tableBodyRow$$ && ($columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($focusedRowIdx_table_tableBodyCell_tableBodyRow$$), $columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$1_headerColumn$$));
        "keydown" === this.$_contextMenuEvent$.type && ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$ = this.$_tableDomUtils$.$getTable$(), this.$_contextMenuEvent$.target == $focusedRowIdx_table_tableBodyCell_tableBodyRow$$[0] ? null != $columnIdx$$1_headerColumn$$ && null != $columnIdx$$1_headerColumn$$[0] ? $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:$columnIdx$$1_headerColumn$$[0]} : ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$ = this.$_getFocusedRowIdx$(), 0 <= 
        $focusedRowIdx_table_tableBodyCell_tableBodyRow$$ ? ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx_table_tableBodyCell_tableBodyRow$$), $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:$focusedRowIdx_table_tableBodyCell_tableBodyRow$$[0]}) : $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:this.$_contextMenuEvent$.target}) : $openOptions$$3$$.position = {my:"start top", at:"start bottom", 
        of:this.$_contextMenuEvent$.target});
        $columnIdx$$1_headerColumn$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$ ? ($$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), $$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled")) : ($$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), $$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"));
        this.$_OpenContextMenu$($event$$160$$, $eventType$$35$$, $openOptions$$3$$);
      }
    }, _destroy:function() {
      this.$_getData$();
      this.$_unregisterDataSourceEventListeners$();
      this.$_getTableDomUtils$().$getTableBody$().removeAttr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
      $oj$$14$$.$DomUtils$.unwrap(this.element, this.$_getTableDomUtils$().$getTableContainer$());
      this.element.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    }, $_draw$:function() {
      this.$_setFinalTask$(function() {
        this.$_getTableDomUtils$().$refreshTableDimensions$();
        this.$_setSelection$(this.options.selection);
        this.$_isLoadMoreOnScroll$() && !this.$_dataFetching$ && this.$_domScroller$.checkViewport().then(this.$_domScrollerMaxCountFunc$, null);
      });
      if (!this.element.is("table")) {
        throw new RangeError(this.$_LOGGER_MSG$.$_ERR_ELEMENT_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_ELEMENT_INVALID_TYPE_DETAIL$);
      }
      this.element.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_ELEMENT_CLASS$);
      this.$_getTableDomUtils$().$createInitialTable$(this.$_isTableHeaderless$(), this.$_isTableFooterless$());
      this.$_getTableDomUtils$().$styleInitialTable$();
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      if (this.$_isLoadMoreOnScroll$()) {
        var $self$$92$$ = this;
        this.$_domScrollerMaxCountFunc$ = function $this$$_domScrollerMaxCountFunc$$($result$$43$$) {
          null != $result$$43$$ && $result$$43$$.maxCountLimit && $self$$92$$.$_handleScrollerMaxRowCount$();
        };
        this.$_domScroller$ = new $oj$$14$$.$DomScroller$(this.$_getTableDomUtils$().$getScroller$(), this.$_data$, {fetchSize:this.options.scrollPolicyOptions.fetchSize, maxCount:this.options.scrollPolicyOptions.maxCount, success:this.$_domScrollerMaxCountFunc$});
      }
      this.options.disabled && this.disable();
      this.$_registerResizeListener$(this.$_getTableDomUtils$().$getTableContainer$());
    }, $_events$:{blur:function($event$$161$$) {
      var $table$$1$$ = this.$_getTableDomUtils$().$getTable$();
      0 < $table$$1$$.has($event$$161$$.relatedTarget).length || null != $event$$161$$.originalEvent && $event$$161$$.originalEvent.explicitOriginalTarget == $table$$1$$[0] || (this.$_clearKeyboardKeys$(), this.$_clearFocusedHeaderColumn$(), this.$_clearFocusedRow$(!1), this.$_setTableNavigationMode$(!1));
    }, focus:function($event$$162$$) {
      this.$_checkRowOrHeaderColumnFocus$($event$$162$$);
    }, "focus .oj-table-column-header-acc-asc-link":function($event$$163$$) {
      this.$_checkRowOrHeaderColumnFocus$($event$$163$$);
    }, "click .oj-table-checkbox-acc-select-column":function($event$$164$$) {
      var $columnIdx$$2$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$164$$.currentTarget)), $selected$$14$$ = $$$$14$$($event$$164$$.currentTarget).is(":checked");
      $selected$$14$$ && this.$_setHeaderColumnFocus$($columnIdx$$2$$, !0, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$2$$, $selected$$14$$, $event$$164$$.currentTarget, $event$$164$$, !0);
      $event$$164$$.stopPropagation();
    }, "click .oj-table-checkbox-acc-select-row":function($event$$165$$) {
      var $rowIdx$$4$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$165$$.currentTarget)), $selected$$15$$ = $$$$14$$($event$$165$$.currentTarget).is(":checked"), $focused$$ = !1;
      $selected$$15$$ && ($focused$$ = this.$_setRowFocus$($rowIdx$$4$$, !0, !0, null, $event$$165$$, !0));
      $focused$$ && this.$_setRowSelection$($rowIdx$$4$$, $selected$$15$$, $event$$165$$.currentTarget, $event$$165$$, !0);
      $event$$165$$.stopPropagation();
    }, keydown:function($event$$166$$) {
      if (!(this.$_isNodeEditableOrClickable$($$$$14$$($event$$166$$.target)) || null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$166$$.target).length) && (this.$_addKeyboardKey$($event$$166$$.keyCode), 1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length && $event$$166$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$])) {
        if (this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
          $event$$166$$.preventDefault(), $event$$166$$.stopPropagation();
        }
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$166$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$166$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$166$$);
      }
    }, keyup:function($event$$167$$) {
      if (!(this.$_isNodeEditableOrClickable$($$$$14$$($event$$167$$.target)) || null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$167$$.target).length)) {
        if (1 == this.$_getKeyboardKeys$().length) {
          var $keyboardCode1$$ = this.$_getKeyboardKeys$()[0];
          $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$167$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$167$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$167$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$167$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && 
          this.$_handleKeyupEsc$($event$$167$$);
          this.$_removeKeyboardKey$($keyboardCode1$$);
        }
        this.$_removeKeyboardKey$($event$$167$$.keyCode);
      }
    }, "mouseenter .oj-table-body-row":function($event$$168$$) {
      $$$$14$$($event$$168$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mouseleave .oj-table-body-row":function($event$$169$$) {
      $$$$14$$($event$$169$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mouseenter .oj-table-column-header-cell":function($columnIdx$$3_event$$170$$) {
      $$$$14$$($columnIdx$$3_event$$170$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      $columnIdx$$3_event$$170$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$3_event$$170$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$3_event$$170$$);
    }, "mouseleave .oj-table-column-header-cell":function($columnIdx$$4_event$$171$$) {
      $$$$14$$($columnIdx$$4_event$$171$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      $columnIdx$$4_event$$171$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$4_event$$171$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$4_event$$171$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$4_event$$171$$, !1);
    }, "mouseenter .oj-table-data-cell":function($event$$172$$) {
      $$$$14$$($event$$172$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mouseleave .oj-table-data-cell":function($event$$173$$) {
      $$$$14$$($event$$173$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "click .oj-table-column-header-asc-link":function($event$$174$$) {
      var $columnIdx$$5$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$174$$.target)), $tableHeaderColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$5$$);
      $tableHeaderColumn$$1$$ && ($tableHeaderColumn$$1$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$5$$, !1, $event$$174$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$5$$, !0, $event$$174$$), $event$$174$$.preventDefault(), $event$$174$$.stopPropagation());
    }, "click .oj-table-column-header-acc-asc-link":function($event$$175$$) {
      var $columnIdx$$6$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$175$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !0, $event$$175$$);
      $event$$175$$.preventDefault();
      $event$$175$$.stopPropagation();
    }, "click .oj-table-column-header-dsc-link":function($event$$176$$) {
      var $columnIdx$$7$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$176$$.target)), $tableHeaderColumn$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$7$$);
      $tableHeaderColumn$$2$$ && ($tableHeaderColumn$$2$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !0, $event$$176$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !1, $event$$176$$), $event$$176$$.preventDefault(), $event$$176$$.stopPropagation());
    }, "click .oj-table-column-header-acc-dsc-link":function($event$$177$$) {
      var $columnIdx$$8$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$177$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$8$$, !1, $event$$177$$);
      $event$$177$$.preventDefault();
      $event$$177$$.stopPropagation();
    }, "click .oj-table-data-cell":function($event$$178$$) {
      var $rowIdx$$5$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$178$$.currentTarget)), $focused$$1_lastSelectedRowIdx$$ = !1;
      if ($focused$$1_lastSelectedRowIdx$$ = this.$_setRowFocus$($rowIdx$$5$$, !0, !0, $event$$178$$.currentTarget, $event$$178$$)) {
        if ($event$$178$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
          if ($focused$$1_lastSelectedRowIdx$$ = this.$_getLastRowSelection$(), null != $focused$$1_lastSelectedRowIdx$$) {
            if (window.getSelection().removeAllRanges(), $rowIdx$$5$$ < $focused$$1_lastSelectedRowIdx$$) {
              var $i$$201$$;
              for ($i$$201$$ = $rowIdx$$5$$;$i$$201$$ <= $focused$$1_lastSelectedRowIdx$$;$i$$201$$++) {
                this.$_setRowSelection$($i$$201$$, !0, $event$$178$$.currentTarget, $event$$178$$, !0);
              }
            } else {
              for ($i$$201$$ = $focused$$1_lastSelectedRowIdx$$;$i$$201$$ <= $rowIdx$$5$$;$i$$201$$++) {
                this.$_setRowSelection$($i$$201$$, !0, $event$$178$$.currentTarget, $event$$178$$, !0);
              }
            }
          }
        } else {
          $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$178$$) ? this.$_setRowSelection$($rowIdx$$5$$, !this.$_getRowSelection$($rowIdx$$5$$), $event$$178$$.currentTarget, $event$$178$$, !0) : 0 == this.$_getKeyboardKeys$().length && (this.$_clearSelectedRows$(), this.$_setRowSelection$($rowIdx$$5$$, !this.$_getRowSelection$($rowIdx$$5$$), $event$$178$$.currentTarget, $event$$178$$, !0));
        }
      }
    }, "contextmenu .oj-table-data-cell":function($event$$179$$) {
      var $rowIdx$$6_rowKey$$6$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$179$$.currentTarget)), $rowIdx$$6_rowKey$$6$$ = this.$_getRowKeyForRowIdx$($rowIdx$$6_rowKey$$6$$);
      this.$_setCurrentRow$({rowKey:$rowIdx$$6_rowKey$$6$$}, $event$$179$$);
    }, "click .oj-table-column-header-cell":function($event$$180$$) {
      var $columnIdx$$9$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$180$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$9$$, !0, !0, $event$$180$$);
      if ($event$$180$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
        if (null != $lastSelectedColumnIdx$$) {
          if ($columnIdx$$9$$ < $lastSelectedColumnIdx$$) {
            var $i$$202$$;
            for ($i$$202$$ = $columnIdx$$9$$;$i$$202$$ <= $lastSelectedColumnIdx$$;$i$$202$$++) {
              this.$_setHeaderColumnSelection$($i$$202$$, !0, $event$$180$$.currentTarget, $event$$180$$, !0);
            }
          } else {
            for ($i$$202$$ = $lastSelectedColumnIdx$$;$i$$202$$ <= $columnIdx$$9$$;$i$$202$$++) {
              this.$_setHeaderColumnSelection$($i$$202$$, !0, $event$$180$$.currentTarget, $event$$180$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$180$$) ? this.$_setHeaderColumnSelection$($columnIdx$$9$$, !this.$_getHeaderColumnSelection$($columnIdx$$9$$), $event$$180$$.currentTarget, $event$$180$$, !0) : 0 == this.$_getKeyboardKeys$().length && (this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnSelection$($columnIdx$$9$$, !this.$_getHeaderColumnSelection$($columnIdx$$9$$), $event$$180$$.currentTarget, $event$$180$$, !0));
      }
    }}, $_refresh$:function() {
      var $startIndex$$15$$ = null, $initFetch$$ = !1;
      this.$_data$ != this.options.data && (this.$_clearCachedDataMetadata$(), null == this.$_data$ ? $initFetch$$ = !0 : $startIndex$$15$$ = 0);
      this.$_contextMenuId$ != this.$_getTableDomUtils$().$getContextMenuId$() && this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuSelect$.bind(this));
      this.$_getTableDomUtils$().$clearCachedDom$();
      this.$_getTableDomUtils$().$refreshContextMenu$();
      this.$_refreshTableStatusMessage$();
      if ($initFetch$$) {
        return this.$_initFetch$();
      }
      var $self$$93$$ = this;
      this.$_queueTask$(function() {
        return $self$$93$$.$_invokeDataFetchRows$($startIndex$$15$$);
      });
    }, _setOption:function($key$$77$$, $value$$195$$) {
      this._superApply(arguments);
      this.$_isTableRefreshNeeded$($key$$77$$, $value$$195$$) ? this.$_refresh$() : "selection" == $key$$77$$ ? (this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$(), this.$_setSelection$($value$$195$$)) : "currentRow" == $key$$77$$ && this.$_setCurrentRow$($value$$195$$, null, !0);
    }, $_addKeyboardKey$:function($keyCode$$1$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$5_prop$$62$$;
      for ($found$$5_prop$$62$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$5_prop$$62$$) && this.$_KEYBOARD_CODES$[$found$$5_prop$$62$$] == $keyCode$$1$$ && ($foundCode_keyboardKeys$$ = !0);
      }
      if ($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$5_prop$$62$$ = !1;
        var $i$$203$$;
        for ($i$$203$$ = 0;$i$$203$$ < $foundCode_keyboardKeys$$.length;$i$$203$$++) {
          if ($foundCode_keyboardKeys$$[$i$$203$$] == $keyCode$$1$$) {
            $found$$5_prop$$62$$ = !0;
            break;
          }
        }
        $found$$5_prop$$62$$ || $foundCode_keyboardKeys$$.push($keyCode$$1$$);
      }
    }, $_addSingleTableBodyRow$:function($rowIdx$$7$$, $row$$22$$, $docFrag$$, $docFragStartIdx$$) {
      var $tableBodyRow$$1$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$7$$, $row$$22$$.key);
      this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$1$$, !0);
      this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$7$$, $tableBodyRow$$1$$, $row$$22$$, $docFrag$$);
      this.$_refreshTableBodyRow$($rowIdx$$7$$, $row$$22$$, $tableBodyRow$$1$$, $docFrag$$, $docFragStartIdx$$, !0);
    }, $_checkRowOrHeaderColumnFocus$:function($event$$181$$) {
      var $focusedRowIdx$$1$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null == $focusedRowIdx$$1$$ && null == $focusedHeaderColumnIdx$$ && (this.$_isTableHeaderless$() ? this.$_setRowFocus$(0, !0, !0, null, $event$$181$$) : this.$_setHeaderColumnFocus$(0, !0, !1, $event$$181$$));
    }, $_clearCachedMetadata$:function() {
      this.$_columnDefArray$ = null;
      this.$_setTableNavigationMode$(!1);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearDataWaitingState$:function() {
      this.$_hideInlineMessage$();
      this.$_hideStatusMessage$();
      this.$_dataFetching$ = !1;
    }, $_clearKeyboardKeys$:function() {
      this.$_keyboardKeys$ = [];
    }, $_clearFocusedHeaderColumn$:function() {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedHeaderColumnIdx$$1$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$1$$, !1, !1, null);
      this.$_activeColumnIndex$ = -1;
    }, $_clearFocusedRow$:function($updateCurrentRow$$) {
      null != this.$_getFocusedRowIdx$() && this.$_setRowFocus$(-1, !0, $updateCurrentRow$$, null, null);
    }, $_clearSelectedHeaderColumns$:function() {
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$204$$;
      for ($i$$204$$ = 0;$i$$204$$ < $selectedHeaderColumnIdxs$$.length;$i$$204$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$204$$], !1, null, null, !1);
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$ = this.$_getSelectedRowIdxs$(), $i$$205$$;
      for ($i$$205$$ = 0;$i$$205$$ < $selectedRowIdxs$$.length;$i$$205$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$[$i$$205$$], !1, null, null, !1);
      }
    }, $_clearSortedHeaderColumn$:function($columnIdx$$10$$) {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if (null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$2$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sortedTableHeaderColumnIdx$$ != $columnIdx$$10$$ ? $sorted$$2$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1) : ($sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_executeTableBodyRowsAdd$:function($rows$$2$$) {
      var $self$$94$$ = this;
      this.$_queueTask$(function() {
        var $batchAdd_tableBody$$ = !1;
        if (1 < $rows$$2$$.length) {
          var $i$$206_tableBodyRowBefore$$, $isContiguous_tableBodyDocFrag$$ = !0;
          for ($i$$206_tableBodyRowBefore$$ = 0;$i$$206_tableBodyRowBefore$$ < $rows$$2$$.length;$i$$206_tableBodyRowBefore$$++) {
            if (0 != $i$$206_tableBodyRowBefore$$ && $rows$$2$$[$i$$206_tableBodyRowBefore$$ - 1].$rowIdx$ != $rows$$2$$[$i$$206_tableBodyRowBefore$$].$rowIdx$ - 1) {
              $isContiguous_tableBodyDocFrag$$ = !1;
              break;
            }
          }
          if ($isContiguous_tableBodyDocFrag$$) {
            $batchAdd_tableBody$$ = $self$$94$$.$_getTableDomUtils$().$getTableBody$();
            $isContiguous_tableBodyDocFrag$$ = $$$$14$$(document.createDocumentFragment());
            for ($i$$206_tableBodyRowBefore$$ = 0;$i$$206_tableBodyRowBefore$$ < $rows$$2$$.length;$i$$206_tableBodyRowBefore$$++) {
              $self$$94$$.$_addSingleTableBodyRow$($rows$$2$$[$i$$206_tableBodyRowBefore$$].$rowIdx$, $rows$$2$$[$i$$206_tableBodyRowBefore$$].row, $isContiguous_tableBodyDocFrag$$, $rows$$2$$[0].$rowIdx$);
            }
            0 == $rows$$2$$[0].$rowIdx$ ? $batchAdd_tableBody$$.prepend($isContiguous_tableBodyDocFrag$$) : ($i$$206_tableBodyRowBefore$$ = $self$$94$$.$_getTableDomUtils$().$getTableBodyRow$($rows$$2$$[0].$rowIdx$), null != $i$$206_tableBodyRowBefore$$ ? $batchAdd_tableBody$$[0].insertBefore($isContiguous_tableBodyDocFrag$$[0], $i$$206_tableBodyRowBefore$$[0]) : $batchAdd_tableBody$$[0].insertBefore($isContiguous_tableBodyDocFrag$$[0], null));
            $self$$94$$.$_getTableDomUtils$().$clearCachedDomRowData$();
            $oj$$14$$.Components.$subtreeAttached$($batchAdd_tableBody$$[0]);
            $batchAdd_tableBody$$ = !0;
          }
        }
        if (!$batchAdd_tableBody$$) {
          for ($i$$206_tableBodyRowBefore$$ = 0;$i$$206_tableBodyRowBefore$$ < $rows$$2$$.length;$i$$206_tableBodyRowBefore$$++) {
            $self$$94$$.$_addSingleTableBodyRow$($rows$$2$$[$i$$206_tableBodyRowBefore$$].$rowIdx$, $rows$$2$$[$i$$206_tableBodyRowBefore$$].row);
          }
        }
        $self$$94$$.$_getTableDomUtils$().$clearCachedDomRowData$();
        $self$$94$$.$_refreshTableFooter$();
      });
    }, $_executeTableBodyRowsChange$:function($rows$$3$$) {
      var $self$$95$$ = this;
      this.$_queueTask$(function() {
        var $i$$207$$;
        for ($i$$207$$ = 0;$i$$207$$ < $rows$$3$$.length;$i$$207$$++) {
          $self$$95$$.$_refreshTableBodyRow$($rows$$3$$[$i$$207$$].$rowIdx$, $rows$$3$$[$i$$207$$].row);
        }
        $self$$95$$.$_refreshTableFooter$();
      });
    }, $_executeTableBodyRowsRemove$:function($rows$$4$$) {
      var $self$$96$$ = this, $currentRow$$ = this.$_getCurrentRow$(), $currentRowKey$$ = null != $currentRow$$ ? $currentRow$$.rowKey : null;
      this.$_queueTask$(function() {
        var $i$$208_tableBodyRows$$1$$, $rowKey$$7$$;
        for ($i$$208_tableBodyRows$$1$$ = 0;$i$$208_tableBodyRows$$1$$ < $rows$$4$$.length;$i$$208_tableBodyRows$$1$$++) {
          $self$$96$$.$_getTableDomUtils$().$removeTableBodyRow$($rows$$4$$[$i$$208_tableBodyRows$$1$$].$rowIdx$), null != $currentRowKey$$ && ($rowKey$$7$$ = $rows$$4$$[$i$$208_tableBodyRows$$1$$].row.id, $oj$$14$$.$Object$.$compareValues$($rowKey$$7$$, $currentRowKey$$) && ($self$$96$$.$_setCurrentRow$(null, null), $currentRowKey$$ = null));
        }
        $self$$96$$.$_refreshTableFooter$();
        $i$$208_tableBodyRows$$1$$ = $self$$96$$.$_getTableDomUtils$().$getTableBodyRows$();
        null != $i$$208_tableBodyRows$$1$$ && 0 != $i$$208_tableBodyRows$$1$$.length || this.$_showNoDataMessage$();
      });
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$;
    }, $_getColumnMetadata$:function() {
      var $columns$$2_columnsSortedArray$$ = this.options.columns, $columnsDefault_sortSupportedData$$ = this.options.columnsDefault;
      if ((0 == $columns$$2_columnsSortedArray$$.length || 1 == $columns$$2_columnsSortedArray$$.length && null == $columns$$2_columnsSortedArray$$[0].id && null == $columns$$2_columnsSortedArray$$[0].headerText && null == $columns$$2_columnsSortedArray$$[0].field) && null == $columnsDefault_sortSupportedData$$.headerText && null == $columnsDefault_sortSupportedData$$.field) {
        return[];
      }
      var $defaultedColumns$$ = [], $data$$114_i$$209$$;
      for ($data$$114_i$$209$$ = 0;$data$$114_i$$209$$ < $columns$$2_columnsSortedArray$$.length;$data$$114_i$$209$$++) {
        $defaultedColumns$$[$data$$114_i$$209$$] = $$$$14$$.extend({}, $columnsDefault_sortSupportedData$$, $columns$$2_columnsSortedArray$$[$data$$114_i$$209$$]);
      }
      $columns$$2_columnsSortedArray$$ = [];
      for ($data$$114_i$$209$$ = 0;$data$$114_i$$209$$ < $defaultedColumns$$.length;$data$$114_i$$209$$++) {
        $columns$$2_columnsSortedArray$$.push($defaultedColumns$$[$data$$114_i$$209$$]);
      }
      $data$$114_i$$209$$ = this.$_getData$();
      $columnsDefault_sortSupportedData$$ = !1;
      null != $data$$114_i$$209$$ && "full" == $data$$114_i$$209$$.getCapability("sort") && ($columnsDefault_sortSupportedData$$ = !0);
      for ($data$$114_i$$209$$ = 0;$data$$114_i$$209$$ < $defaultedColumns$$.length;$data$$114_i$$209$$++) {
        null == $columns$$2_columnsSortedArray$$[$data$$114_i$$209$$].id && ($columns$$2_columnsSortedArray$$[$data$$114_i$$209$$].id = this.$_COLUMN_HEADER_ID_PREFIX$ + $data$$114_i$$209$$), null != $columns$$2_columnsSortedArray$$[$data$$114_i$$209$$].sortable && $columns$$2_columnsSortedArray$$[$data$$114_i$$209$$].sortable != this.$_OPTION_AUTO$ || !$columnsDefault_sortSupportedData$$ || ($columns$$2_columnsSortedArray$$[$data$$114_i$$209$$].sortable = this.$_OPTION_ENABLED$);
      }
      return $columns$$2_columnsSortedArray$$;
    }, $_getColumnIdxForColumnKey$:function($columnKey$$4$$) {
      var $columns$$3$$ = this.$_getColumnDefs$();
      if (null != $columns$$3$$) {
        var $i$$210$$, $column$$9$$;
        for ($i$$210$$ = 0;$i$$210$$ < $columns$$3$$.length;$i$$210$$++) {
          if ($column$$9$$ = $columns$$3$$[$i$$210$$], $oj$$14$$.$Object$.$compareValues$($column$$9$$.id, $columnKey$$4$$)) {
            return $i$$210$$;
          }
        }
      }
      return null;
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$1_styleClass$$) {
      $elements$$1_styleClass$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$1_styleClass$$);
      var $columnIdxs$$ = [];
      if ($elements$$1_styleClass$$ && 0 < $elements$$1_styleClass$$.length) {
        var $i$$211$$, $j$$31$$, $alreadyAdded$$, $columnIdx$$11$$;
        for ($i$$211$$ = 0;$i$$211$$ < $elements$$1_styleClass$$.length;$i$$211$$++) {
          $columnIdx$$11$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($elements$$1_styleClass$$.get($i$$211$$)));
          $alreadyAdded$$ = !1;
          for ($j$$31$$ = 0;$j$$31$$ < $columnIdxs$$.length;$j$$31$$++) {
            $columnIdxs$$[$j$$31$$] == $columnIdx$$11$$ && ($alreadyAdded$$ = !0);
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$11$$);
        }
      }
      return $columnIdxs$$;
    }, $_getColumnKeyForColumnIdx$:function($columnIdx$$12$$) {
      var $columns$$4$$ = this.$_getColumnDefs$();
      return null != $columns$$4$$ && $columnIdx$$12$$ < $columns$$4$$.length ? $columns$$4$$[$columnIdx$$12$$].id : null;
    }, $_getColumnRenderer$:function($columnIdx$$13$$, $type$$78$$) {
      var $column$$10$$ = this.$_getColumnDefs$()[$columnIdx$$13$$];
      return "cell" == $type$$78$$ ? $column$$10$$.renderer : "footer" == $type$$78$$ ? $column$$10$$.footerRenderer : "header" == $type$$78$$ ? $column$$10$$.headerRenderer : null;
    }, $_getCurrentRow$:function() {
      return this.$_getData$() ? this.$_currentRow$ : null;
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$116$$ = this.options.data;
        if ($data$$116$$ instanceof $oj$$14$$.$TableDataSource$ || $data$$116$$ instanceof $oj$$14$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$116$$;
        } else {
          throw Error(this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
        }
        this.$_registerDataSourceEventListeners$();
      }
      return this.$_data$;
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getHeaderColumnFocus$:function($columnIdx$$14$$) {
      return this.$_getHeaderColumnState$($columnIdx$$14$$).$focused$;
    }, $_getHeaderColumnSelection$:function($columnIdx$$15$$) {
      return this.$_getHeaderColumnState$($columnIdx$$15$$).selected;
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.column;
    }, $_getHeaderColumnState$:function($columnIdx$$16_headerColumn$$1$$) {
      $columnIdx$$16_headerColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$16_headerColumn$$1$$);
      return{$focused$:$columnIdx$$16_headerColumn$$1$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$16_headerColumn$$1$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)};
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse();
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null;
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null;
    }, $_getRowIdxRowArray$:function($resultObject$$, $startIndex$$17$$) {
      var $rowIdxRowArray$$ = [];
      if (null != $resultObject$$) {
        var $i$$212$$;
        for ($i$$212$$ = 0;$i$$212$$ < $resultObject$$.indexes.length;$i$$212$$++) {
          $rowIdxRowArray$$.push({row:{data:$resultObject$$.data[$i$$212$$], key:$resultObject$$.keys[$i$$212$$], index:$resultObject$$.indexes[$i$$212$$]}, $rowIdx$:$startIndex$$17$$ + $i$$212$$});
        }
      }
      return $rowIdxRowArray$$;
    }, $_getRowIdxForRowKey$:function($rowKey$$8$$) {
      var $tableBodyRows$$2$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$2$$ && 0 < $tableBodyRows$$2$$.length) {
        var $i$$213$$;
        for ($i$$213$$ = 0;$i$$213$$ < $tableBodyRows$$2$$.length;$i$$213$$++) {
          if ($oj$$14$$.$Object$.$compareValues$($$$$14$$($tableBodyRows$$2$$[$i$$213$$]).data("rowKey"), $rowKey$$8$$)) {
            return $i$$213$$;
          }
        }
      }
      return null;
    }, $_getDataSourceRowIndexForRowKey$:function($data$$117_rowKey$$9$$) {
      var $startIndex$$18_tableBodyRows$$3$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $startIndex$$18_tableBodyRows$$3$$ && 0 < $startIndex$$18_tableBodyRows$$3$$.length) {
        var $i$$214$$;
        for ($i$$214$$ = 0;$i$$214$$ < $startIndex$$18_tableBodyRows$$3$$.length;$i$$214$$++) {
          if ($oj$$14$$.$Object$.$compareValues$($$$$14$$($startIndex$$18_tableBodyRows$$3$$[$i$$214$$]).data("rowKey"), $data$$117_rowKey$$9$$)) {
            return $data$$117_rowKey$$9$$ = this.$_getData$(), $startIndex$$18_tableBodyRows$$3$$ = 0, $data$$117_rowKey$$9$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($startIndex$$18_tableBodyRows$$3$$ = $data$$117_rowKey$$9$$.getStartItemIndex()), $i$$214$$ + $startIndex$$18_tableBodyRows$$3$$;
          }
        }
      }
      return null;
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$2_styleClass$$1$$) {
      $elements$$2_styleClass$$1$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$2_styleClass$$1$$);
      var $rowIdxs$$ = [];
      if ($elements$$2_styleClass$$1$$ && 0 < $elements$$2_styleClass$$1$$.length) {
        var $i$$215$$, $j$$32$$, $rowIdx$$8$$, $alreadyAdded$$1$$;
        for ($i$$215$$ = 0;$i$$215$$ < $elements$$2_styleClass$$1$$.length;$i$$215$$++) {
          $rowIdx$$8$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($elements$$2_styleClass$$1$$.get($i$$215$$)));
          $alreadyAdded$$1$$ = !1;
          for ($j$$32$$ = 0;$j$$32$$ < $rowIdxs$$.length;$j$$32$$++) {
            $rowIdxs$$[$j$$32$$] == $rowIdx$$8$$ && ($alreadyAdded$$1$$ = !0);
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$8$$);
        }
      }
      return $rowIdxs$$;
    }, $_getRowKeyForDataSourceRowIndex$:function($rowIndex$$7$$) {
      var $tableBodyRows$$4$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$4$$ && 0 < $tableBodyRows$$4$$.length) {
        var $data$$118_i$$216$$ = this.$_getData$(), $startIndex$$19$$ = 0;
        $data$$118_i$$216$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($startIndex$$19$$ = $data$$118_i$$216$$.getStartItemIndex());
        for ($data$$118_i$$216$$ = 0;$data$$118_i$$216$$ < $tableBodyRows$$4$$.length;$data$$118_i$$216$$++) {
          if ($startIndex$$19$$ + $data$$118_i$$216$$ == $rowIndex$$7$$) {
            return $$$$14$$($tableBodyRows$$4$$[$data$$118_i$$216$$]).data("rowKey");
          }
        }
      }
      return null;
    }, $_getRowKeyForRowIdx$:function($rowIdx$$9_tableBodyRow$$2$$) {
      $rowIdx$$9_tableBodyRow$$2$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$9_tableBodyRow$$2$$);
      return null != $rowIdx$$9_tableBodyRow$$2$$ ? $rowIdx$$9_tableBodyRow$$2$$.data("rowKey") : null;
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer;
    }, $_getRowSelection$:function($rowIdx$$10$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$10$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.row;
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelection$:function() {
      var $rangeArray_selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $rangeCount_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $selectionIdxs$$ = null, $rowSelection$$ = !0;
      if (null != $rangeArray_selectedRowIdxs$$1$$ && 0 < $rangeArray_selectedRowIdxs$$1$$.length) {
        $selectionIdxs$$ = $rangeArray_selectedRowIdxs$$1$$;
      } else {
        if (null != $rangeCount_selectedColumnIdxs$$ && 0 < $rangeCount_selectedColumnIdxs$$.length) {
          $selectionIdxs$$ = $rangeCount_selectedColumnIdxs$$, $rowSelection$$ = !1;
        } else {
          return null;
        }
      }
      var $rangeArray_selectedRowIdxs$$1$$ = [], $rangeCount_selectedColumnIdxs$$ = 0, $previousIdx$$ = null, $rangeObj$$, $selectionIndex$$, $selectionIdx$$, $selectionKey$$, $i$$217$$;
      for ($i$$217$$ = 0;$i$$217$$ < $selectionIdxs$$.length;$i$$217$$++) {
        $selectionIdx$$ = $selectionIdxs$$[$i$$217$$], 0 == $i$$217$$ ? ($rangeObj$$ = {startIndex:{}, endIndex:{}, startKey:{}, endKey:{}}, $rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.startKey.row = $selectionKey$$, $rangeObj$$.endKey.row = $selectionKey$$, $rangeObj$$.startIndex.row = $selectionIndex$$, $rangeObj$$.endIndex.row = $selectionIndex$$) : ($rangeObj$$.startIndex.column = 
        $selectionIdx$$, $rangeObj$$.endIndex.column = $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey.column = $selectionKey$$, $rangeObj$$.endKey.column = $selectionKey$$), $rangeArray_selectedRowIdxs$$1$$[0] = $rangeObj$$) : ($rangeObj$$ = $rangeArray_selectedRowIdxs$$1$$[$rangeCount_selectedColumnIdxs$$], $rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), 
        $rangeObj$$.endKey.row = $selectionKey$$, $rangeObj$$.endIndex.row = $selectionIndex$$) : ($rangeObj$$.endIndex.column = $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.endKey.column = $selectionKey$$), $selectionIdx$$ != $previousIdx$$ + 1 && ($rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($previousIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.endKey.row = $selectionKey$$, 
        $rangeObj$$.endIndex.row = $selectionIndex$$, $rangeObj$$ = {startIndex:{}, endIndex:{}, startKey:{}, endKey:{}}, $selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.startKey.row = $selectionKey$$, $rangeObj$$.endKey.row = $selectionKey$$, $rangeObj$$.startIndex.row = $selectionIndex$$, $rangeObj$$.endIndex.row = $selectionIndex$$) : ($rangeObj$$.endIndex.column = $previousIdx$$, $selectionKey$$ = 
        this.$_getColumnKeyForColumnIdx$($previousIdx$$), $rangeObj$$.endKey.column = $selectionKey$$, $rangeObj$$ = {startIndex:{}, endIndex:{}, startKey:{}, endKey:{}}, $rangeObj$$.startIndex.column = $selectionIdx$$, $rangeObj$$.endIndex.column = $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey.column = $selectionKey$$, $rangeObj$$.endKey.column = $selectionKey$$), $rangeCount_selectedColumnIdxs$$++, $rangeArray_selectedRowIdxs$$1$$[$rangeCount_selectedColumnIdxs$$] = 
        $rangeObj$$)), $previousIdx$$ = $selectionIdx$$;
      }
      return $rangeArray_selectedRowIdxs$$1$$;
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$(), $i$$218$$, $sorted$$3$$;
      for ($i$$218$$ = 0;$i$$218$$ < $tableHeaderColumns$$.length;$i$$218$$++) {
        if ($sorted$$3$$ = $$$$14$$($tableHeaderColumns$$[$i$$218$$]).data("sorted"), null != $sorted$$3$$) {
          return $i$$218$$;
        }
      }
      return null;
    }, $_getTabbableElements$:function($element$$84_tabbableElements$$) {
      $element$$84_tabbableElements$$ = $element$$84_tabbableElements$$.find(":tabbable");
      return null != $element$$84_tabbableElements$$ && 0 < $element$$84_tabbableElements$$.length ? $element$$84_tabbableElements$$ : null;
    }, $_getTableDomUtils$:function() {
      this.$_tableDomUtils$ || (this.$_tableDomUtils$ = new $oj$$14$$.$TableDomUtils$(this));
      return this.$_tableDomUtils$;
    }, $_handleContextMenuSelect$:function($event$$182$$, $ui$$4$$) {
      var $menuItemCommand$$ = $ui$$4$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $tableBodyCell$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$17$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$17$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$17$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$17$$, !0, $event$$182$$) : "oj-table-sortDsc" == $menuItemCommand$$ && this.$_handleSortTableHeaderColumn$($columnIdx$$17$$, !1, $event$$182$$);
    }, $_handleDataError$:function($error$$35$$) {
      this.$_clearDataWaitingState$();
      $oj$$14$$.$Logger$.error($error$$35$$);
    }, $_handleDataFetchStart$:function() {
      this.$_setDataWaitingState$();
    }, $_handleDataFetchEnd$:function($event$$184$$) {
      try {
        var $self$$97$$ = this;
        this.$_queueTask$(function() {
          var $offset$$22$$ = 0, $data$$119_indexArray$$3$$ = $self$$97$$.$_getData$();
          $data$$119_indexArray$$3$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$22$$ = $data$$119_indexArray$$3$$.getStartItemIndex());
          var $data$$119_indexArray$$3$$ = [], $i$$219$$;
          for ($i$$219$$ = 0;$i$$219$$ < $event$$184$$.data.length;$i$$219$$++) {
            $data$$119_indexArray$$3$$[$i$$219$$] = $i$$219$$ + $offset$$22$$ + $event$$184$$.startIndex;
          }
          $self$$97$$.$_refreshAll$({data:$event$$184$$.data, keys:$event$$184$$.keys, indexes:$data$$119_indexArray$$3$$}, $event$$184$$.startIndex);
        });
      } catch ($e$$84$$) {
        $oj$$14$$.$Logger$.error($e$$84$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRefresh$:function() {
      try {
        var $fetchPromise$$1$$ = this.$_invokeDataFetchRows$(), $self$$98$$ = this;
        this.$_queueTask$(function() {
          $self$$98$$.$_setCurrentRow$(null, null);
          return $fetchPromise$$1$$;
        });
      } catch ($e$$85$$) {
        $oj$$14$$.$Logger$.error($e$$85$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataReset$:function() {
      try {
        this.$_initFetch$();
        var $self$$99$$ = this;
        this.$_queueTask$(function() {
          $self$$99$$.$_setCurrentRow$(null, null);
        });
      } catch ($e$$86$$) {
        $oj$$14$$.$Logger$.error($e$$86$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowAdd$:function($event$$187_startIndex$$20$$) {
      try {
        var $data$$120_rowArray$$11$$ = this.$_getData$(), $eventData$$5$$ = $event$$187_startIndex$$20$$.data, $eventIndexes$$ = $event$$187_startIndex$$20$$.indexes, $eventKeys$$ = $event$$187_startIndex$$20$$.keys;
        $eventData$$5$$ instanceof Array || ($eventData$$5$$ = [$eventData$$5$$]);
        $event$$187_startIndex$$20$$ = 0;
        $data$$120_rowArray$$11$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$187_startIndex$$20$$ = $data$$120_rowArray$$11$$.getStartItemIndex());
        var $data$$120_rowArray$$11$$ = [], $i$$220$$;
        for ($i$$220$$ = 0;$i$$220$$ < $eventData$$5$$.length;$i$$220$$++) {
          var $rowIdx$$11$$ = $eventIndexes$$[$i$$220$$] - $event$$187_startIndex$$20$$;
          void 0 !== $rowIdx$$11$$ && $data$$120_rowArray$$11$$.push({row:{data:$eventData$$5$$[$i$$220$$], key:$eventKeys$$[$i$$220$$], index:$eventIndexes$$[$i$$220$$]}, $rowIdx$:$rowIdx$$11$$});
        }
        0 < $data$$120_rowArray$$11$$.length && this.$_executeTableBodyRowsAdd$($data$$120_rowArray$$11$$);
      } catch ($e$$87$$) {
        $oj$$14$$.$Logger$.error($e$$87$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowChange$:function($event$$188_startIndex$$21$$) {
      try {
        var $data$$121_rowArray$$12$$ = this.$_getData$(), $eventData$$6$$ = $event$$188_startIndex$$21$$.data, $eventIndexes$$1$$ = $event$$188_startIndex$$21$$.indexes, $eventKeys$$1$$ = $event$$188_startIndex$$21$$.keys;
        $eventData$$6$$ instanceof Array || ($eventData$$6$$ = [$eventData$$6$$]);
        $event$$188_startIndex$$21$$ = 0;
        $data$$121_rowArray$$12$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$188_startIndex$$21$$ = $data$$121_rowArray$$12$$.getStartItemIndex());
        var $data$$121_rowArray$$12$$ = [], $i$$221$$;
        for ($i$$221$$ = 0;$i$$221$$ < $eventData$$6$$.length;$i$$221$$++) {
          var $rowIdx$$12$$ = $eventIndexes$$1$$[$i$$221$$] - $event$$188_startIndex$$21$$;
          void 0 !== $rowIdx$$12$$ && $data$$121_rowArray$$12$$.push({row:{data:$eventData$$6$$[$i$$221$$], key:$eventKeys$$1$$[$i$$221$$], index:$eventIndexes$$1$$[$i$$221$$]}, $rowIdx$:$rowIdx$$12$$});
        }
        0 < $data$$121_rowArray$$12$$.length && this.$_executeTableBodyRowsChange$($data$$121_rowArray$$12$$);
      } catch ($e$$88$$) {
        $oj$$14$$.$Logger$.error($e$$88$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowRemove$:function($event$$189_startIndex$$22$$) {
      try {
        var $data$$122_rowArray$$13$$ = this.$_getData$(), $eventData$$7$$ = $event$$189_startIndex$$22$$.data, $eventIndexes$$2$$ = $event$$189_startIndex$$22$$.indexes, $eventKeys$$2$$ = $event$$189_startIndex$$22$$.keys;
        $eventData$$7$$ instanceof Array || ($eventData$$7$$ = [$eventData$$7$$]);
        $event$$189_startIndex$$22$$ = 0;
        $data$$122_rowArray$$13$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$189_startIndex$$22$$ = $data$$122_rowArray$$13$$.getStartItemIndex());
        var $data$$122_rowArray$$13$$ = [], $i$$222$$;
        for ($i$$222$$ = $eventData$$7$$.length - 1;0 <= $i$$222$$;$i$$222$$--) {
          var $rowIdx$$13$$ = $eventIndexes$$2$$[$i$$222$$] - $event$$189_startIndex$$22$$;
          void 0 !== $rowIdx$$13$$ && $data$$122_rowArray$$13$$.push({row:{data:$eventData$$7$$[$i$$222$$], key:$eventKeys$$2$$[$i$$222$$], index:$eventIndexes$$2$$[$i$$222$$]}, $rowIdx$:$rowIdx$$13$$});
        }
        0 < $data$$122_rowArray$$13$$.length && this.$_executeTableBodyRowsRemove$($data$$122_rowArray$$13$$);
      } catch ($e$$89$$) {
        $oj$$14$$.$Logger$.error($e$$89$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataSort$:function($clearSelection_event$$190$$) {
      try {
        var $columnIdx$$18$$;
        if (null != $clearSelection_event$$190$$) {
          var $i$$223$$, $column$$11$$, $sortField$$, $columns$$6$$ = this.$_getColumnDefs$();
          for ($i$$223$$ = 0;$i$$223$$ < $columns$$6$$.length;$i$$223$$++) {
            if ($column$$11$$ = $columns$$6$$[$i$$223$$], $sortField$$ = null == $column$$11$$.sortProperty ? $column$$11$$.field : $column$$11$$.sortProperty, $clearSelection_event$$190$$.header == $sortField$$) {
              $columnIdx$$18$$ = $i$$223$$;
              break;
            }
          }
          null != $columnIdx$$18$$ && this.$_refreshSortTableHeaderColumn$($columnIdx$$18$$, $clearSelection_event$$190$$.direction == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$);
        }
        var $existingSelection$$ = this.options.selection;
        if (null != $existingSelection$$) {
          $clearSelection_event$$190$$ = !1;
          if (1 < $existingSelection$$.length) {
            $clearSelection_event$$190$$ = !0;
          } else {
            if (null != $existingSelection$$[0]) {
              var $endIndex$$4$$ = $existingSelection$$[0].endIndex;
              $oj$$14$$.$Object$.$compareValues$($existingSelection$$[0].startIndex, $endIndex$$4$$) || null == $endIndex$$4$$ || ($clearSelection_event$$190$$ = !0);
            }
          }
          $clearSelection_event$$190$$ && (this.$_setSelection$(null), this.option("selection", null, {_context:{$writeback$:!0, $internalSet$:!0}}));
        }
        this.$_setCurrentRow$(this.options.currentRow, null);
        var $self$$100$$ = this;
        this.$_queueTask$(function() {
          return $self$$100$$.$_invokeDataFetchRows$(null);
        }).then(function() {
          null != $columnIdx$$18$$ && setTimeout(function() {
            $self$$100$$.$_scrollColumnIntoViewport$($columnIdx$$18$$);
          }, 0);
        });
      } catch ($e$$90$$) {
        $oj$$14$$.$Logger$.error($e$$90$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleKeydownLeftRight$:function($event$$191$$) {
      var $focusedHeaderColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$7_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if (null != $focusedHeaderColumnIdx$$2$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$2$$ ? $focusedHeaderColumnIdx$$2$$ - 1 : $focusedHeaderColumnIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$ < $columns$$7_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$2$$ + 1 : $focusedHeaderColumnIdx$$2$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$2$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, !1, null), $event$$191$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$7_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$7_newFocusedHeaderColumnSelection$$, null, $event$$191$$, !0), $columns$$7_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$, !1, null, $event$$191$$, !0)));
      }
    }, $_handleKeydownTab$:function($event$$192$$) {
      var $tabHandled_tabbableElementsInDocument$$ = !1, $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ = this.$_getFocusedRowIdx$();
      if (null != $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ && this.$_tableNavMode$) {
        var $currentFocusElement_tabbableElementsInBody_tableTabIndex$$ = document.activeElement, $tableBody$$1$$ = this.$_getTableDomUtils$().$getTableBody$();
        if ($$$$14$$.contains($tableBody$$1$$[0], $currentFocusElement_tabbableElementsInBody_tableTabIndex$$)) {
          return;
        }
        $currentFocusElement_tabbableElementsInBody_tableTabIndex$$ = this.$_getTabbableElements$($tableBody$$1$$);
        null != $currentFocusElement_tabbableElementsInBody_tableTabIndex$$ && ($tabHandled_tabbableElementsInDocument$$ = !0, $event$$192$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$), $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ = 
        this.$_getTabbableElements$($focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$), null != $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ ? $$$$14$$($focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$[0]).focus() : $$$$14$$($currentFocusElement_tabbableElementsInBody_tableTabIndex$$[0]).focus(), 
        $event$$192$$.preventDefault(), $event$$192$$.stopPropagation()));
      }
      if (!$tabHandled_tabbableElementsInDocument$$) {
        $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ = this.$_getTableDomUtils$().$getTable$();
        $tabHandled_tabbableElementsInDocument$$ = this.$_getTabbableElements$($$$$14$$(document));
        $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ = this.$_getTabbableElements$($focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$);
        $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ = null != $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ ? $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$.length : 0;
        $currentFocusElement_tabbableElementsInBody_tableTabIndex$$ = $tabHandled_tabbableElementsInDocument$$.index(this.$_getTableDomUtils$().$getTable$());
        if ($event$$192$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
          if (0 < $currentFocusElement_tabbableElementsInBody_tableTabIndex$$) {
            $$$$14$$($tabHandled_tabbableElementsInDocument$$[$currentFocusElement_tabbableElementsInBody_tableTabIndex$$ - 1]).focus();
          } else {
            return;
          }
        } else {
          $$$$14$$($tabHandled_tabbableElementsInDocument$$[$currentFocusElement_tabbableElementsInBody_tableTabIndex$$ + $focusedRowIdx$$3_tabbableElementsInRow_tabbableElementsInTable_tabbableElementsInTableCount_table$$2_tableBodyRow$$3$$ + 1]).focus();
        }
        $event$$192$$.preventDefault();
        $event$$192$$.stopPropagation();
      }
      this.$_removeKeyboardKey$($event$$192$$.keyCode);
    }, $_handleKeydownUpDown$:function($event$$193$$) {
      var $focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedRowIdx$$4$$) {
        var $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $newFocusedRowSelection_rowCount$$4$$ = null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$.length : 0, $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = $focusedRowIdx$$4$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = 0 < $focusedRowIdx$$4$$ ? $focusedRowIdx$$4$$ - 1 : $focusedRowIdx$$4$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = $focusedRowIdx$$4$$ < $newFocusedRowSelection_rowCount$$4$$ - 1 ? $focusedRowIdx$$4$$ + 1 : $focusedRowIdx$$4$$);
        $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ != $focusedRowIdx$$4$$ ? this.$_setRowFocus$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$, !0, !0, null, $event$$193$$) && $event$$193$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($newFocusedRowSelection_rowCount$$4$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$, !$newFocusedRowSelection_rowCount$$4$$, 
        null, $event$$193$$, !0), $newFocusedRowSelection_rowCount$$4$$ && this.$_getRowSelection$($focusedRowIdx$$4$$) && this.$_setRowSelection$($focusedRowIdx$$4$$, !1, null, $event$$193$$, !0)) : $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ == $focusedRowIdx$$4$$ && 0 == $focusedRowIdx$$4$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) && this.$_setHeaderColumnFocus$(0, !0, !1, null);
      } else {
        null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, !0, null, $event$$193$$);
      }
    }, $_handleKeyupEnd$:function($event$$194$$) {
      var $focusedColumnIdx_focusedRowIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx_focusedRowIdx$$5$$ && $focusedColumnIdx_focusedRowIdx$$5$$ != this.$_getColumnDefs$().length - 1) {
        this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, !1, null);
      } else {
        var $focusedColumnIdx_focusedRowIdx$$5$$ = this.$_getFocusedRowIdx$(), $rowCount$$5_tableBodyRows$$6$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $rowCount$$5_tableBodyRows$$6$$ = null != $rowCount$$5_tableBodyRows$$6$$ ? $rowCount$$5_tableBodyRows$$6$$.length : 0;
        null != $focusedColumnIdx_focusedRowIdx$$5$$ && $focusedColumnIdx_focusedRowIdx$$5$$ != $rowCount$$5_tableBodyRows$$6$$ - 1 && 0 < $rowCount$$5_tableBodyRows$$6$$ && this.$_setRowFocus$($rowCount$$5_tableBodyRows$$6$$ - 1, !0, !0, null, $event$$194$$);
      }
    }, $_handleKeyupEnter$:function($event$$195$$) {
      var $focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$4$$ || $sorted$$4$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !0, $event$$195$$) : this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !1, $event$$195$$);
      }
    }, $_handleKeyupEsc$:function($event$$196$$) {
      $event$$196$$.preventDefault();
      $event$$196$$.stopPropagation();
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1);
    }, $_handleKeyupHome$:function($event$$197$$) {
      var $focusedColumnIdx$$2_focusedRowIdx$$6$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && 0 != $focusedColumnIdx$$2_focusedRowIdx$$6$$ ? this.$_setHeaderColumnFocus$(0, !0, !1, null) : ($focusedColumnIdx$$2_focusedRowIdx$$6$$ = this.$_getFocusedRowIdx$(), null != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && 0 != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && this.$_setRowFocus$(0, !0, !0, null, $event$$197$$));
    }, $_handleKeyupSpacebar$:function($event$$198$$) {
      var $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$), null, $event$$198$$, !0) : ($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ && (this.$_clearSelectedRows$(), this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$), 
      null, $event$$198$$, !0)));
    }, $_handleScrollerMaxRowCount$:function() {
      this.$_showInlineMessage$(this.$_LOGGER_MSG$.$_ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY$, this.$_LOGGER_MSG$.$_ERR_DOM_SCROLLER_MAX_COUNT_DETAIL$, $oj$$14$$.$Message$.$SEVERITY_LEVEL$.WARNING);
    }, $_handleScrollerScrollLeft$:function($scrollLeft$$, $maxScrollLeft$$) {
      "rtl" === this.$_GetReadingDirection$() && ($scrollLeft$$ = Math.abs($scrollLeft$$), this.$_getTableDomUtils$().$_isWebkit$() && ($scrollLeft$$ = $maxScrollLeft$$ - $scrollLeft$$));
      var $tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeader$(), $tableFooter$$ = this.$_getTableDomUtils$().$getTableFooter$();
      this.$_getTableDomUtils$().$isDivScroller$() ? ($tableFooterRow_tableHeader_tableHeaderRow$$ && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), $tableFooter$$ && ("rtl" === this.$_GetReadingDirection$() ? 
      $tableFooter$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooter$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$))) : (($tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeaderRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, 
      "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), ($tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableFooterRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : 
      $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)));
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$19$$, $ascending$$, $event$$199$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$19$$);
      var $column$$12$$ = this.$_getColumnDefs$()[$columnIdx$$19$$];
      this.$_invokeDataSort$(null == $column$$12$$.sortProperty ? $column$$12$$.field : $column$$12$$.sortProperty, $ascending$$, $event$$199$$);
      this.$_sortColumn$ = $column$$12$$;
      this.$_refreshSortTableHeaderColumn$($columnIdx$$19$$, $ascending$$);
    }, $_hideInlineMessage$:function() {
      var $inlineMessage$$ = this.$_getTableDomUtils$().$getTableInlineMessage$();
      if ($inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$) != $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$) {
        var $inlineMessageHeight$$ = $inlineMessage$$.outerHeight(), $tableContainer$$1$$ = this.$_getTableDomUtils$().$getTableContainer$(), $tableContainerBorderBottom$$ = parseInt($tableContainer$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_BOTTOM_WIDTH$), 10), $tableContainerMarginBottom$$ = parseInt($tableContainer$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$), 10);
        $tableContainer$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$, $tableContainerMarginBottom$$ - $tableContainerBorderBottom$$ - $inlineMessageHeight$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $tableContainer$$1$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$);
        $inlineMessage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$);
        $inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, "");
        $inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
      }
    }, $_hideNoDataMessage$:function() {
      var $noDataRow$$ = this.$_getTableDomUtils$().$getTableNoDataRow$();
      null != $noDataRow$$ && $noDataRow$$.remove();
    }, $_hideStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$20$$, $ascending$$1$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$20$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$20$$), $sorted$$5$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), 
        $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_initFetch$:function() {
      var $self$$101$$ = this, $data$$123$$ = this.$_getData$();
      null != $data$$123$$ && $data$$123$$ instanceof $oj$$14$$.$TableDataSource$ && !($data$$123$$ instanceof $oj$$14$$.$PagingTableDataSource$) ? (this.$_getTableDomUtils$().$getScroller$()[0].scrollTop = 0, this.$_isLoadMoreOnScroll$() ? this.$_queueTask$(function() {
        return $self$$101$$.$_invokeDataFetchRows$(0, {fetchType:"init", pageSize:$self$$101$$.options.scrollPolicyOptions.fetchSize});
      }) : this.$_queueTask$(function() {
        return $self$$101$$.$_invokeDataFetchRows$(0, {fetchType:"init"});
      })) : null == $data$$123$$ && this.$_queueTask$(function() {
        return Promise.resolve();
      });
    }, $_invokeDataFetchRows$:function($startIndex$$24$$, $options$$275$$) {
      $options$$275$$ = $options$$275$$ || {};
      $options$$275$$.startIndex = $startIndex$$24$$;
      $options$$275$$.silent = !0;
      var $data$$124$$ = this.$_getData$(), $self$$102$$ = this;
      return new Promise(function($resolve$$43$$, $reject$$43$$) {
        null != $data$$124$$ ? ($self$$102$$.$_setDataWaitingState$(), $data$$124$$.fetch($options$$275$$).then(function($result$$44$$) {
          if (null != $result$$44$$ && null != $result$$44$$.data) {
            var $offset$$23$$ = 0;
            $data$$124$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$23$$ = $data$$124$$.getStartItemIndex());
            var $indexArray$$4$$ = [], $i$$224$$;
            for ($i$$224$$ = 0;$i$$224$$ < $result$$44$$.data.length;$i$$224$$++) {
              $indexArray$$4$$[$i$$224$$] = $i$$224$$ + $offset$$23$$ + $result$$44$$.startIndex;
            }
            $self$$102$$.$_refreshAll$({data:$result$$44$$.data, keys:$result$$44$$.keys, indexes:$indexArray$$4$$}, $result$$44$$.startIndex);
          }
          $self$$102$$.$_clearDataWaitingState$();
          $resolve$$43$$(null);
        }, function($error$$36$$) {
          $self$$102$$.$_clearDataWaitingState$();
          $reject$$43$$($error$$36$$);
        })) : $resolve$$43$$(null);
      });
    }, $_invokeDataSort$:function($sortField$$2$$, $ascending$$2$$, $event$$200$$) {
      var $data$$125$$ = this.$_getData$();
      if (!$data$$125$$) {
        return null;
      }
      this.$_showStatusMessage$();
      var $sortCriteria$$ = {};
      $sortCriteria$$.key = $sortField$$2$$;
      $sortCriteria$$.direction = $ascending$$2$$ ? this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ : this.$_COLUMN_SORT_ORDER$.$_DESCENDING$;
      this._trigger("sort", $event$$200$$, {header:$sortCriteria$$.key, direction:$sortCriteria$$.direction});
      $data$$125$$.sort($sortCriteria$$);
    }, $_isColumnMetadataUpdated$:function() {
      if (null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if (this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0;
        }
        var $i$$225$$, $prop$$63$$;
        for ($i$$225$$ = 0;$i$$225$$ < $columnsMetadata$$.length;$i$$225$$++) {
          for ($prop$$63$$ in $columnsMetadata$$[$i$$225$$]) {
            if ($columnsMetadata$$[$i$$225$$].hasOwnProperty($prop$$63$$) && $columnsMetadata$$[$i$$225$$][$prop$$63$$] != this.$_columnDefArray$[$i$$225$$][$prop$$63$$]) {
              return!0;
            }
          }
        }
        return!1;
      }
      return!0;
    }, $_isKeyboardKeyPressed$:function($keyCode$$2$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$226$$;
      for ($i$$226$$ = 0;$i$$226$$ < $keyboardKeys$$1$$.length;$i$$226$$++) {
        if ($keyboardKeys$$1$$[$i$$226$$] == $keyCode$$2$$) {
          return!0;
        }
      }
      return!1;
    }, $_isLoadMoreOnScroll$:function() {
      return this.options.scrollPolicy == this.$_OPTION_SCROLL_POLICY$.$_LOADMORE_ON_SCROLL$ ? !0 : !1;
    }, $_isNodeEditableOrClickable$:function($node$$40$$) {
      for (var $nodeName$$3$$, $table$$3$$ = this.$_getTableDomUtils$().$getTable$();null != $node$$40$$ && $node$$40$$[0] != $table$$3$$[0] && "TD" != ($nodeName$$3$$ = $node$$40$$.prop("nodeName")) && "TH" != $nodeName$$3$$;) {
        if (3 == $node$$40$$[0].nodeType) {
          $node$$40$$ = $node$$40$$[0].parentNode;
        } else {
          var $tabIndex$$ = $node$$40$$.attr("tabIndex");
          if (null != $tabIndex$$ && 0 <= $tabIndex$$ || $nodeName$$3$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && -1 != $tabIndex$$) {
            return!0;
          }
          $node$$40$$ = $node$$40$$.parentNode;
        }
      }
      return!1;
    }, $_isTableFooterless$:function() {
      var $columns$$8$$ = this.$_getColumnDefs$(), $i$$227$$, $footerRenderer$$;
      for ($i$$227$$ = 0;$i$$227$$ < $columns$$8$$.length;$i$$227$$++) {
        if ($footerRenderer$$ = this.$_getColumnRenderer$($i$$227$$, "footer"), null != $footerRenderer$$) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderless$:function() {
      var $columns$$9$$ = this.$_getColumnDefs$(), $i$$228$$;
      for ($i$$228$$ = 0;$i$$228$$ < $columns$$9$$.length;$i$$228$$++) {
        if (null != $columns$$9$$[$i$$228$$].headerText || null != $columns$$9$$[$i$$228$$].headerStyle || null != $columns$$9$$[$i$$228$$].sortable && $columns$$9$$[$i$$228$$].sortable != this.$_OPTION_NONE$ || null != $columns$$9$$[$i$$228$$].sortProperty || null != $columns$$9$$[$i$$228$$].headerRenderer) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderColumnsRendered$:function() {
      return!0 == this.$_renderedTableHeaderColumns$;
    }, $_isTableNavigationMode$:function() {
      return this.$_tableNavMode$;
    }, $_isTableRefreshNeeded$:function($key$$78$$, $value$$196$$) {
      var $currentOptions$$ = this.$_cachedOptions$, $refresh$$ = !1;
      "contextMenu" == $key$$78$$ && $value$$196$$ == "#" + this.$_getTableDomUtils$().$getTable$().attr("id") + "_contextmenu" ? $refresh$$ = !1 : "selection" == $key$$78$$ || "currentRow" == $key$$78$$ || $oj$$14$$.$Object$.$compareValues$($value$$196$$, $currentOptions$$[$key$$78$$]) || ($refresh$$ = !0);
      this.$_cachedOptions$ = $$$$14$$.extend(!0, {}, this.options);
      return $refresh$$;
    }, $_isTableSortable$:function() {
      var $columns$$10$$ = this.$_getColumnDefs$(), $i$$229$$;
      for ($i$$229$$ = 0;$i$$229$$ < $columns$$10$$.length;$i$$229$$++) {
        if (null != $columns$$10$$[$i$$229$$].sortable && $columns$$10$$[$i$$229$$].sortable != this.$_OPTION_NONE$) {
          return!0;
        }
      }
      return!1;
    }, $_refreshAll$:function($resultObject$$1$$, $startIndex$$25$$) {
      if (this.$_isColumnMetadataUpdated$() || !this.$_isTableHeaderColumnsRendered$() && !this.$_isTableHeaderless$()) {
        if (this.$_clearCachedMetadata$(), this.$_refreshTableHeader$(), null != this.$_sortColumn$) {
          var $i$$230$$, $column$$13$$, $foundColumn$$ = !1, $columns$$11$$ = this.$_getColumnDefs$();
          if (null != $columns$$11$$) {
            for ($i$$230$$ = 0;$i$$230$$ < $columns$$11$$.length;$i$$230$$++) {
              if ($column$$13$$ = $columns$$11$$[$i$$230$$], $oj$$14$$.$Object$.$compareValues$($column$$13$$, this.$_sortColumn$)) {
                $foundColumn$$ = !0;
                break;
              }
            }
            $foundColumn$$ || this.$_getData$().sort(null);
          }
        }
      }
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$($resultObject$$1$$, $startIndex$$25$$);
    }, $_refreshSortTableHeaderColumn$:function($columnIdx$$21$$, $ascending$$3$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$21$$);
      var $tableHeaderColumn$$5$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$21$$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.data("sorted");
      $ascending$$3$$ && $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? ($tableHeaderColumn$$5$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$21$$, !$ascending$$3$$)) : $ascending$$3$$ || $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ == 
      this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ || ($tableHeaderColumn$$5$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$));
    }, $_refreshTableBody$:function($resultObject$$2$$, $startIndex$$26$$) {
      var $tableBody$$2$$ = this.$_getTableDomUtils$().$getTableBody$();
      if (null != $tableBody$$2$$) {
        var $rows$$5$$ = this.$_getRowIdxRowArray$($resultObject$$2$$, $startIndex$$26$$), $i$$231_tableBodyRows$$7$$;
        if (0 == $startIndex$$26$$) {
          $oj$$14$$.Components.$subtreeDetached$($tableBody$$2$$[0]), $tableBody$$2$$.empty();
        } else {
          if ($i$$231_tableBodyRows$$7$$ = $tableBody$$2$$.children(), null != $i$$231_tableBodyRows$$7$$ && 0 < $i$$231_tableBodyRows$$7$$.length) {
            for ($i$$231_tableBodyRows$$7$$ = $i$$231_tableBodyRows$$7$$.length - 1;$i$$231_tableBodyRows$$7$$ >= $startIndex$$26$$;$i$$231_tableBodyRows$$7$$--) {
              this.$_getTableDomUtils$().$removeTableBodyRow$($i$$231_tableBodyRows$$7$$);
            }
          }
        }
        this.$_getTableDomUtils$().$clearCachedDomRowData$();
        this.$_hideNoDataMessage$();
        $i$$231_tableBodyRows$$7$$ = $tableBody$$2$$.children();
        if (0 != $rows$$5$$.length || null != $i$$231_tableBodyRows$$7$$ && 0 != $i$$231_tableBodyRows$$7$$.length) {
          var $tableBodyDocFrag$$1$$ = $$$$14$$(document.createDocumentFragment()), $row$$26$$, $rowIdx$$14$$, $tableBodyRow$$4$$;
          for ($i$$231_tableBodyRows$$7$$ = 0;$i$$231_tableBodyRows$$7$$ < $rows$$5$$.length;$i$$231_tableBodyRows$$7$$++) {
            $row$$26$$ = $rows$$5$$[$i$$231_tableBodyRows$$7$$].row, $rowIdx$$14$$ = $rows$$5$$[$i$$231_tableBodyRows$$7$$].$rowIdx$, null != $row$$26$$ && ($tableBodyRow$$4$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$14$$, $row$$26$$.key), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$4$$, !0), this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$14$$, $tableBodyRow$$4$$, $row$$26$$, $tableBodyDocFrag$$1$$), this.$_refreshTableBodyRow$($rowIdx$$14$$, $row$$26$$, 
            $tableBodyRow$$4$$, $tableBodyDocFrag$$1$$, $startIndex$$26$$, !0));
          }
          $tableBody$$2$$.append($tableBodyDocFrag$$1$$);
          this.$_getTableDomUtils$().$refreshTableDimensions$();
          $oj$$14$$.Components.$subtreeAttached$($tableBody$$2$$[0]);
        } else {
          this.$_showNoDataMessage$();
        }
      }
    }, $_refreshTableBodyRow$:function($rowIdx$$15$$, $row$$27$$, $tableBodyCells_tableBodyRow$$5$$, $docFrag$$1_i$$232_j$$34$$, $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$, $isNew$$2_rowContent_rowContext$$) {
      var $rowRenderer$$ = this.$_getRowRenderer$(), $columns$$12$$ = this.$_getColumnDefs$(), $tableBody$$3$$ = this.$_getTableDomUtils$().$getTableBody$();
      (isNaN($rowIdx$$15$$) || 0 > $rowIdx$$15$$) && $oj$$14$$.$Logger$.error("Error: Invalid rowIdx value: " + $rowIdx$$15$$);
      if (null == $tableBodyCells_tableBodyRow$$5$$) {
        if ($tableBodyCells_tableBodyRow$$5$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$15$$)) {
          $tableBodyCells_tableBodyRow$$5$$.empty(), $isNew$$2_rowContent_rowContext$$ = !0, this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($rowIdx$$15$$, $row$$27$$.key, $tableBodyCells_tableBodyRow$$5$$);
        } else {
          return;
        }
      }
      this.$_hideNoDataMessage$();
      if ($rowRenderer$$) {
        for ($isNew$$2_rowContent_rowContext$$ = this.$_getTableDomUtils$().$getRendererContextObject$($row$$27$$, $tableBodyCells_tableBodyRow$$5$$[0]), $isNew$$2_rowContent_rowContext$$ = $rowRenderer$$({rowContext:$isNew$$2_rowContent_rowContext$$, row:$$$$14$$.extend({}, $row$$27$$.data)}), null != $isNew$$2_rowContent_rowContext$$ ? $tableBodyCells_tableBodyRow$$5$$.append($isNew$$2_rowContent_rowContext$$) : (null == $docFrag$$1_i$$232_j$$34$$ ? $tableBodyCells_tableBodyRow$$5$$ = $$$$14$$($tableBody$$3$$.children()[$rowIdx$$15$$]) : 
        ($cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$ = null == $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$ ? 0 : $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$, $tableBodyCells_tableBodyRow$$5$$ = $$$$14$$($docFrag$$1_i$$232_j$$34$$.children()[$rowIdx$$15$$ - $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$])), this.$_getTableDomUtils$().$clearCachedDomRowData$(), this.$_getTableDomUtils$().$setTableBodyRowAttributes$($row$$27$$, $tableBodyCells_tableBodyRow$$5$$), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyCells_tableBodyRow$$5$$, 
        !1)), this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($rowIdx$$15$$, $row$$27$$.key, $tableBodyCells_tableBodyRow$$5$$), $tableBodyCells_tableBodyRow$$5$$ = $tableBodyCells_tableBodyRow$$5$$.children("td"), $docFrag$$1_i$$232_j$$34$$ = 1;$docFrag$$1_i$$232_j$$34$$ < $tableBodyCells_tableBodyRow$$5$$.length;$docFrag$$1_i$$232_j$$34$$++) {
          $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$ = $$$$14$$($tableBodyCells_tableBodyRow$$5$$[$docFrag$$1_i$$232_j$$34$$]), this.$_getTableDomUtils$().$setTableBodyCellAttributes$($rowIdx$$15$$, $row$$27$$.key, $docFrag$$1_i$$232_j$$34$$ - 1, $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$), this.$_getTableDomUtils$().$styleTableBodyCell$($docFrag$$1_i$$232_j$$34$$ - 1, $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$, !1);
        }
      } else {
        for (this.$_getTableDomUtils$().$setTableBodyRowAttributes$($row$$27$$, $tableBodyCells_tableBodyRow$$5$$), $docFrag$$1_i$$232_j$$34$$ = 0;$docFrag$$1_i$$232_j$$34$$ < $columns$$12$$.length;$docFrag$$1_i$$232_j$$34$$++) {
          $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$ = this.$_getColumnRenderer$($docFrag$$1_i$$232_j$$34$$, "cell"), this.$_getTableDomUtils$().$setTableBodyCell$($rowIdx$$15$$, $docFrag$$1_i$$232_j$$34$$, $tableBodyCells_tableBodyRow$$5$$, $row$$27$$, $cellRenderer_docFragStartIdx$$1_tableBodyCell$$2$$, $isNew$$2_rowContent_rowContext$$);
        }
      }
    }, $_refreshTableFooter$:function() {
      var $columns$$13$$ = this.$_getColumnDefs$(), $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$getTableFooter$();
      if (!$tableFooter$$1_tableFooterRow$$1$$) {
        if (this.$_isTableFooterless$()) {
          return;
        }
        $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$createTableFooter$();
        this.$_getTableDomUtils$().$styleTableFooter$($tableFooter$$1_tableFooterRow$$1$$);
      }
      $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$getTableFooterRow$();
      $tableFooter$$1_tableFooterRow$$1$$.empty();
      if ($columns$$13$$ && 0 < $columns$$13$$.length) {
        this.$_getTableDomUtils$().$createTableFooterAccSelect$($tableFooter$$1_tableFooterRow$$1$$);
        var $i$$233$$, $footerCellContent_footerRenderer$$1$$, $footerCell$$;
        for ($i$$233$$ = 0;$i$$233$$ < $columns$$13$$.length;$i$$233$$++) {
          $footerCellContent_footerRenderer$$1$$ = this.$_getColumnRenderer$($i$$233$$, "footer"), $footerCell$$ = this.$_getTableDomUtils$().$createTableFooterCell$(), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$233$$, $footerCell$$), this.$_getTableDomUtils$().$insertTableFooterCell$($i$$233$$, $footerCell$$), $footerCellContent_footerRenderer$$1$$ && ($footerCellContent_footerRenderer$$1$$ = $footerCellContent_footerRenderer$$1$$({footerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, 
          $footerCell$$[0]), columnIndex:$i$$233$$}), null != $footerCellContent_footerRenderer$$1$$ ? ($footerCell$$.empty(), $footerCell$$.append($footerCellContent_footerRenderer$$1$$)) : ($footerCell$$ = $$$$14$$($tableFooter$$1_tableFooterRow$$1$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$ + ")")[$i$$233$$]), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$233$$, $footerCell$$)));
        }
      }
    }, $_refreshTableHeader$:function() {
      var $columns$$14$$ = this.$_getColumnDefs$(), $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeader$();
      if (!$tableHeader$$1_tableHeaderRow$$1$$) {
        if (this.$_isTableHeaderless$()) {
          return;
        }
        $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$createTableHeader$();
        this.$_getTableDomUtils$().$styleTableHeader$($tableHeader$$1_tableHeaderRow$$1$$);
      }
      $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeaderRow$();
      $tableHeader$$1_tableHeaderRow$$1$$.empty();
      if ($columns$$14$$ && 0 < $columns$$14$$.length) {
        var $i$$234_tableHeaderAccSelectRowColumn$$ = this.$_getTableDomUtils$().$createTableHeaderAccSelectRowColumn$();
        $tableHeader$$1_tableHeaderRow$$1$$.append($i$$234_tableHeaderAccSelectRowColumn$$);
        for (var $column$$16_headerColumnContent$$, $headerRenderer$$, $headerColumn$$3$$, $context$$50_headerContext$$, $i$$234_tableHeaderAccSelectRowColumn$$ = 0;$i$$234_tableHeaderAccSelectRowColumn$$ < $columns$$14$$.length;$i$$234_tableHeaderAccSelectRowColumn$$++) {
          $column$$16_headerColumnContent$$ = $columns$$14$$[$i$$234_tableHeaderAccSelectRowColumn$$], $headerRenderer$$ = this.$_getColumnRenderer$($i$$234_tableHeaderAccSelectRowColumn$$, "header"), $headerColumn$$3$$ = this.$_getTableDomUtils$().$createTableHeaderColumn$($i$$234_tableHeaderAccSelectRowColumn$$), $headerRenderer$$ && ($context$$50_headerContext$$ = this.$_getTableDomUtils$().$getRendererContextObject$(null, $headerColumn$$3$$[0]), $context$$50_headerContext$$ = {headerContext:$context$$50_headerContext$$, 
          columnIndex:$i$$234_tableHeaderAccSelectRowColumn$$, data:$column$$16_headerColumnContent$$.headerText}, $column$$16_headerColumnContent$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ ? $context$$50_headerContext$$.columnHeaderSortableIconRenderer = function $$context$$50_headerContext$$$columnHeaderSortableIconRenderer$($options$$277$$, $delegateRenderer$$) {
            $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$(this, 0, $delegateRenderer$$);
          } : $context$$50_headerContext$$.columnHeaderDefaultRenderer = function $$context$$50_headerContext$$$columnHeaderDefaultRenderer$($options$$278$$, $delegateRenderer$$1$$) {
            $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$(this, 0, $delegateRenderer$$1$$);
          }, $column$$16_headerColumnContent$$ = $headerRenderer$$($context$$50_headerContext$$), null != $column$$16_headerColumnContent$$ ? ($headerColumn$$3$$.empty(), $headerColumn$$3$$.append($column$$16_headerColumnContent$$)) : ($headerColumn$$3$$ = $$$$14$$($tableHeader$$1_tableHeaderRow$$1$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$234_tableHeaderAccSelectRowColumn$$]), this.$_getTableDomUtils$().$setTableHeaderColumnAttributes$($i$$234_tableHeaderAccSelectRowColumn$$, 
          $headerColumn$$3$$), this.$_getTableDomUtils$().$styleTableHeaderColumn$($i$$234_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$, !1))), this.$_getTableDomUtils$().$createTableHeaderColumnAccSelect$($i$$234_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$());
        }
        this.$_renderedTableHeaderColumns$ = !0;
      }
    }, $_refreshTableStatusMessage$:function() {
      var $tableStatusMessage$$ = this.$_getTableDomUtils$().$getTableStatusMessage$();
      null != $tableStatusMessage$$ && $tableStatusMessage$$.remove();
      this.$_getTableDomUtils$().$createTableStatusMessage$();
    }, $_registerCustomEvents$:function() {
      var $jqEventSpecial$$ = $$$$14$$.event.special;
      $jqEventSpecial$$.ojtablebeforecurrentrow = {handle:function $$jqEventSpecial$$$ojtablebeforecurrentrow$handle$($event$$201$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$201$$.handleObj.handler.apply(this, [$event$$201$$, $JSCompiler_OptimizeArgumentsArray_p1$$]);
      }};
      $jqEventSpecial$$.ojtablesort = {handle:function $$jqEventSpecial$$$ojtablesort$handle$($event$$202$$, $JSCompiler_OptimizeArgumentsArray_p2$$) {
        return $event$$202$$.handleObj.handler.apply(this, [$event$$202$$, $JSCompiler_OptimizeArgumentsArray_p2$$]);
      }};
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$126$$ = this.$_getData$();
      if (null != $data$$126$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$235$$, $ev$$2$$;
        for ($i$$235$$ = 0;$i$$235$$ < this.$_dataSourceEventHandlers$.length;$i$$235$$++) {
          ($ev$$2$$ = $data$$126$$.on(this.$_dataSourceEventHandlers$[$i$$235$$].eventType, this.$_dataSourceEventHandlers$[$i$$235$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$235$$].eventHandler = $ev$$2$$);
        }
      }
    }, $_registerDomEventListeners$:function() {
      null != this.$_getTableDomUtils$().$getScroller$() && this.$_getTableDomUtils$().$getScroller$().scroll(function($event$$203_maxScrollLeft$$1$$) {
        var $scrollLeft$$1$$ = $$$$14$$($event$$203_maxScrollLeft$$1$$.target).scrollLeft();
        $event$$203_maxScrollLeft$$1$$ = $$$$14$$($event$$203_maxScrollLeft$$1$$.target)[0].scrollWidth - $$$$14$$($event$$203_maxScrollLeft$$1$$.target)[0].clientWidth;
        this.$_handleScrollerScrollLeft$($scrollLeft$$1$$, $event$$203_maxScrollLeft$$1$$);
      }.bind(this));
    }, $_registerResizeListener$:function($element$$85$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$103$$ = this;
        $oj$$14$$.$DomUtils$.$addResizeListener$($element$$85$$[0], function() {
          var $tableContainerHeight$$ = $self$$103$$.$_getTableDomUtils$().$getTableContainer$().outerHeight(), $tableContainerWidth$$ = $self$$103$$.$_getTableDomUtils$().$getTableContainer$().outerWidth();
          $self$$103$$.$_getTableDomUtils$().$refreshTableDimensions$($tableContainerWidth$$, $tableContainerHeight$$);
        }, 50);
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_removeKeyboardKey$:function($keyCode$$3$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$236$$;
      for ($i$$236$$ = 0;$i$$236$$ < $keyboardKeys$$2$$.length;$i$$236$$++) {
        $keyboardKeys$$2$$[$i$$236$$] == $keyCode$$3$$ && $keyboardKeys$$2$$.splice($i$$236$$, 1);
      }
    }, $_scrollColumnIntoViewport$:function($columnIdx$$22_scrollbarWidth$$) {
      var $isRTL$$3_scrollLeftDiff$$ = "rtl" === this.$_GetReadingDirection$(), $tableBody$$4$$ = this.$_getTableDomUtils$().$getTableBody$(), $headerColumnRect_tableHeaderColumn$$6$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$22_scrollbarWidth$$);
      if ($headerColumnRect_tableHeaderColumn$$6$$) {
        $columnIdx$$22_scrollbarWidth$$ = this.$_getTableDomUtils$().$getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$6$$ = $headerColumnRect_tableHeaderColumn$$6$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$4$$.get(0).getBoundingClientRect(), $scrolledLeft$$ = !1;
        $isRTL$$3_scrollLeftDiff$$ ? ($headerColumnRect_tableHeaderColumn$$6$$.left < $tableBodyRect$$.left + $columnIdx$$22_scrollbarWidth$$ && ($isRTL$$3_scrollLeftDiff$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$6$$.left + $columnIdx$$22_scrollbarWidth$$, this.$_getTableDomUtils$().$_isIE$() || ($isRTL$$3_scrollLeftDiff$$ *= -1), $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() + $isRTL$$3_scrollLeftDiff$$), $scrolledLeft$$ = !0), $headerColumnRect_tableHeaderColumn$$6$$.right > 
        $tableBodyRect$$.right && !$scrolledLeft$$ && ($isRTL$$3_scrollLeftDiff$$ = $headerColumnRect_tableHeaderColumn$$6$$.right - $tableBodyRect$$.right, this.$_getTableDomUtils$().$_isIE$() || ($isRTL$$3_scrollLeftDiff$$ *= -1), $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() - $isRTL$$3_scrollLeftDiff$$))) : ($headerColumnRect_tableHeaderColumn$$6$$.left < $tableBodyRect$$.left && ($isRTL$$3_scrollLeftDiff$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$6$$.left, $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() - 
        $isRTL$$3_scrollLeftDiff$$), $scrolledLeft$$ = !0), $headerColumnRect_tableHeaderColumn$$6$$.right > $tableBodyRect$$.right - $columnIdx$$22_scrollbarWidth$$ && !$scrolledLeft$$ && ($isRTL$$3_scrollLeftDiff$$ = $headerColumnRect_tableHeaderColumn$$6$$.right - $tableBodyRect$$.right + $columnIdx$$22_scrollbarWidth$$, $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() + $isRTL$$3_scrollLeftDiff$$)));
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$16_scrollTopDiff_scrollbarHeight$$) {
      var $rowRect_tableBodyRow$$6$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$16_scrollTopDiff_scrollbarHeight$$);
      $rowIdx$$16_scrollTopDiff_scrollbarHeight$$ = this.$_getTableDomUtils$().$getScrollbarHeight$();
      var $rowRect_tableBodyRow$$6$$ = $rowRect_tableBodyRow$$6$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getTableDomUtils$().$getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$6$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$16_scrollTopDiff_scrollbarHeight$$ && ($rowIdx$$16_scrollTopDiff_scrollbarHeight$$ = $rowRect_tableBodyRow$$6$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$16_scrollTopDiff_scrollbarHeight$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$16_scrollTopDiff_scrollbarHeight$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$6$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$16_scrollTopDiff_scrollbarHeight$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$6$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$16_scrollTopDiff_scrollbarHeight$$));
    }, $_setCurrentRow$:function($currentRow$$1_errSummary$$11$$, $event$$204$$, $currentFocusedRowIdx_optionChange$$) {
      var $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_currentRow$, $tableBodyRow$$7_updateCurrentRow$$1$$;
      $tableBodyRow$$7_updateCurrentRow$$1$$ = !0;
      if (null == $currentRow$$1_errSummary$$11$$) {
        if (null != $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$) {
          try {
            $tableBodyRow$$7_updateCurrentRow$$1$$ = this._trigger("beforecurrentrow", $event$$204$$, {currentRow:null, previousCurrentRow:this.$_currentRow$});
          } catch ($err$$11$$) {
            $currentRow$$1_errSummary$$11$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$;
            var $errDetail$$11_rowIdx$$17$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$11$$.toString()});
            $oj$$14$$.$Logger$.info($currentRow$$1_errSummary$$11$$ + "\n" + $errDetail$$11_rowIdx$$17$$);
            return!1;
          }
          if (!$tableBodyRow$$7_updateCurrentRow$$1$$) {
            return!1;
          }
          this.$_currentRow$ = null;
          this.option("currentRow", null, {_context:{$writeback$:!0, originalEvent:$event$$204$$, $internalSet$:!0}});
          null == $event$$204$$ && this.$_setRowFocus$(-1, !0, !1, null, $event$$204$$);
          $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$.rowIndex;
          $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowKeyForDataSourceRowIndex$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$);
          $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowIdxForRowKey$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$);
          $tableBodyRow$$7_updateCurrentRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$);
          null != $tableBodyRow$$7_updateCurrentRow$$1$$ && $tableBodyRow$$7_updateCurrentRow$$1$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$);
        }
        return!0;
      }
      var $currentRowChanged_data$$127$$ = this.$_getData$(), $rowIndex$$8$$ = $currentRow$$1_errSummary$$11$$.rowIndex, $rowKey$$10$$ = $currentRow$$1_errSummary$$11$$.rowKey;
      null == $rowKey$$10$$ && ($rowKey$$10$$ = this.$_getRowKeyForDataSourceRowIndex$($rowIndex$$8$$));
      null == $rowIndex$$8$$ && ($rowIndex$$8$$ = this.$_getDataSourceRowIndexForRowKey$($rowKey$$10$$));
      $errDetail$$11_rowIdx$$17$$ = this.$_getRowIdxForRowKey$($rowKey$$10$$);
      $currentRow$$1_errSummary$$11$$ = {rowIndex:$rowIndex$$8$$, rowKey:$rowKey$$10$$};
      if (-1 != $errDetail$$11_rowIdx$$17$$ && (!$currentRowChanged_data$$127$$ || 0 == $currentRowChanged_data$$127$$.totalSize() || -1 > $errDetail$$11_rowIdx$$17$$ || null === $errDetail$$11_rowIdx$$17$$ || null === $rowKey$$10$$)) {
        $currentRow$$1_errSummary$$11$$ = this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$;
        $errDetail$$11_rowIdx$$17$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$, {rowIdx:$errDetail$$11_rowIdx$$17$$});
        if ($currentFocusedRowIdx_optionChange$$) {
          throw Error($currentRow$$1_errSummary$$11$$ + "\n" + $errDetail$$11_rowIdx$$17$$);
        }
        $oj$$14$$.$Logger$.info($currentRow$$1_errSummary$$11$$ + "\n" + $errDetail$$11_rowIdx$$17$$);
        return!1;
      }
      $currentFocusedRowIdx_optionChange$$ = this.$_getFocusedRowIdx$();
      if ($currentRowChanged_data$$127$$ = !$oj$$14$$.$Object$.$compareValues$(this.$_currentRow$, $currentRow$$1_errSummary$$11$$)) {
        try {
          $tableBodyRow$$7_updateCurrentRow$$1$$ = this._trigger("beforecurrentrow", $event$$204$$, {currentRow:{rowIndex:$rowIndex$$8$$, rowKey:$rowKey$$10$$}, previousCurrentRow:this.$_currentRow$});
        } catch ($err$$12$$) {
          return $currentRow$$1_errSummary$$11$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$, $errDetail$$11_rowIdx$$17$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$12$$.toString()}), $oj$$14$$.$Logger$.info($currentRow$$1_errSummary$$11$$ + "\n" + $errDetail$$11_rowIdx$$17$$), !1;
        }
        if (!$tableBodyRow$$7_updateCurrentRow$$1$$) {
          return!1;
        }
        this.$_currentRow$ = {rowIndex:$rowIndex$$8$$, rowKey:$rowKey$$10$$};
        this.option("currentRow", this.$_currentRow$, {_context:{$writeback$:!0, originalEvent:$event$$204$$, $internalSet$:!0}});
        $tableBodyRow$$7_updateCurrentRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($errDetail$$11_rowIdx$$17$$);
        null != $tableBodyRow$$7_updateCurrentRow$$1$$ && $tableBodyRow$$7_updateCurrentRow$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$);
        null != $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ && ($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$.rowIndex, $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowKeyForDataSourceRowIndex$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$), 
        $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowIdxForRowKey$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$), $tableBodyRow$$7_updateCurrentRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$), null != $tableBodyRow$$7_updateCurrentRow$$1$$ && $tableBodyRow$$7_updateCurrentRow$$1$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$));
      }
      ($currentRowChanged_data$$127$$ || $currentFocusedRowIdx_optionChange$$ != $currentRow$$1_errSummary$$11$$.rowIndex) && null == $event$$204$$ && this.$_setRowFocus$($errDetail$$11_rowIdx$$17$$, !0, !1, null, $event$$204$$);
      return!0;
    }, $_setDataWaitingState$:function() {
      this.$_showStatusMessage$();
      this.$_hideNoDataMessage$();
      this.$_dataFetching$ = !0;
    }, $_setHeaderColumnFocus$:function($columnIdx$$23$$, $focused$$3$$, $clearSelectedRows$$, $event$$205$$) {
      var $element$$86$$ = null;
      null != $event$$205$$ && ($element$$86$$ = $event$$205$$.currentTarget);
      if ($focused$$3$$) {
        var $focusedHeaderColumnIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$5$$ && $focusedHeaderColumnIdx$$5$$ != $columnIdx$$23$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$5$$, !1, !1, $event$$205$$);
        this.$_clearFocusedRow$(!0);
        $clearSelectedRows$$ && this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$23$$);
        this.$_activeColumnIndex$ = $columnIdx$$23$$;
      }
      this.$_setHeaderColumnState$($columnIdx$$23$$, {$focused$:$focused$$3$$}, $element$$86$$);
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$24$$, $selected$$16_selection$$3$$, $element$$87$$, $event$$206$$, $updateSelection$$) {
      if (this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        (isNaN($accSelectionColumn_columnIdx$$24$$) || 0 > $accSelectionColumn_columnIdx$$24$$) && $oj$$14$$.$Logger$.error("Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$24$$), this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$16_selection$$3$$ && this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$24$$, {selected:$selected$$16_selection$$3$$}, $element$$87$$, $event$$206$$), this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$24$$, 
        $selected$$16_selection$$3$$), $accSelectionColumn_columnIdx$$24$$ = this.$_getTableDomUtils$().$getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$24$$), $$$$14$$($accSelectionColumn_columnIdx$$24$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$16_selection$$3$$), $updateSelection$$ && ($selected$$16_selection$$3$$ = this.$_getSelection$(), this.option("selection", $selected$$16_selection$$3$$, {_context:{$writeback$:!0, 
        $internalSet$:!0}}));
      }
    }, $_setHeaderColumnState$:function($columnIdx$$25$$, $state$$1$$) {
      var $headerColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$25$$);
      if ($headerColumn$$4$$) {
        var $focused$$4$$ = $state$$1$$.$focused$, $selected$$17$$ = $state$$1$$.selected;
        null != $selected$$17$$ && $headerColumn$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$17$$ && ($selected$$17$$ ? $headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
        null != $focused$$4$$ && ($focused$$4$$ ? ($headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$25$$)) : ($headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$25$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$25$$, !1)));
        this.$_updateHeaderColumnCellsClass$($columnIdx$$25$$);
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$26$$, $selected$$18$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$237$$;
      for ($i$$237$$ = 0;$i$$237$$ < this.$_lastSelectedColumnIdxArray$.length;$i$$237$$++) {
        if (this.$_lastSelectedColumnIdxArray$[$i$$237$$] == $columnIdx$$26$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$237$$, 1);
          break;
        }
      }
      $selected$$18$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$26$$);
    }, $_setLastRowSelection$:function($rowIdx$$18$$, $selected$$19$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      for (var $i$$238$$ = 0;$i$$238$$ < this.$_lastSelectedRowIdxArray$.length;$i$$238$$++) {
        if (this.$_lastSelectedRowIdxArray$[$i$$238$$] == $rowIdx$$18$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$238$$, 1);
          break;
        }
      }
      $selected$$19$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$18$$);
    }, $_setRowFocus$:function($rowIdx$$19$$, $focused$$5$$, $rowKey$$11_updateCurrentRow$$2$$, $element$$89$$, $event$$208_updateRowFocus$$) {
      if (-1 == $rowIdx$$19$$) {
        var $focusedRowIdx$$8$$ = this.$_getFocusedRowIdx$();
        null != $focusedRowIdx$$8$$ && this.$_setRowFocus$($focusedRowIdx$$8$$, !1, $rowKey$$11_updateCurrentRow$$2$$, null, null);
        return $rowKey$$11_updateCurrentRow$$2$$ && ($event$$208_updateRowFocus$$ = this.$_setCurrentRow$(null, $event$$208_updateRowFocus$$), !$event$$208_updateRowFocus$$) ? !1 : !0;
      }
      var $tableBodyRow$$8$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$19$$);
      if (!$tableBodyRow$$8$$) {
        return!1;
      }
      if ($focused$$5$$) {
        $focusedRowIdx$$8$$ = this.$_getFocusedRowIdx$();
        null != $focusedRowIdx$$8$$ && $focusedRowIdx$$8$$ != $rowIdx$$19$$ && this.$_setRowFocus$($focusedRowIdx$$8$$, !1, $rowKey$$11_updateCurrentRow$$2$$, $element$$89$$, null);
        if ($rowKey$$11_updateCurrentRow$$2$$ && ($rowKey$$11_updateCurrentRow$$2$$ = this.$_getRowKeyForRowIdx$($rowIdx$$19$$), $event$$208_updateRowFocus$$ = this.$_setCurrentRow$({rowKey:$rowKey$$11_updateCurrentRow$$2$$}, $event$$208_updateRowFocus$$), !$event$$208_updateRowFocus$$)) {
          return!1;
        }
        $tableBodyRow$$8$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
        this.$_scrollRowIntoViewport$($rowIdx$$19$$);
        this.$_updateRowCellsClass$($rowIdx$$19$$, {$focused$:!0, hover:!1});
        this.$_clearFocusedHeaderColumn$();
        this.$_clearSelectedHeaderColumns$();
        this.$_setTableNavigationMode$(!0);
      } else {
        $tableBodyRow$$8$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
      }
      this.$_updateRowCellsClass$($rowIdx$$19$$, {$focused$:$focused$$5$$});
      return!0;
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$20$$, $selected$$20_selection$$4$$, $element$$90_tableBodyRow$$9$$, $event$$209_selectionChanged$$, $updateSelection$$1$$) {
      if (this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        (isNaN($accSelectionCell_rowIdx$$20$$) || 0 > $accSelectionCell_rowIdx$$20$$) && $oj$$14$$.$Logger$.error("Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$20$$), this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$20_selection$$4$$ && this.$_clearSelectedRows$(), $element$$90_tableBodyRow$$9$$ = this.$_getTableDomUtils$().$getTableBodyRow$($accSelectionCell_rowIdx$$20$$), null != $element$$90_tableBodyRow$$9$$ && ($event$$209_selectionChanged$$ = 
        !1, $element$$90_tableBodyRow$$9$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$20_selection$$4$$ && ($selected$$20_selection$$4$$ ? $element$$90_tableBodyRow$$9$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$90_tableBodyRow$$9$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $event$$209_selectionChanged$$ = !0), $event$$209_selectionChanged$$ && ($selected$$20_selection$$4$$ ? this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$20$$, 
        {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$20$$, {selected:!1})), this.$_setLastRowSelection$($accSelectionCell_rowIdx$$20$$, $selected$$20_selection$$4$$), $accSelectionCell_rowIdx$$20$$ = this.$_getTableDomUtils$().$getTableBodyCellAccSelect$($element$$90_tableBodyRow$$9$$), $$$$14$$($accSelectionCell_rowIdx$$20$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$20_selection$$4$$), 
        $updateSelection$$1$$ && ($selected$$20_selection$$4$$ = this.$_getSelection$(), this.option("selection", $selected$$20_selection$$4$$, {_context:{$writeback$:!0, $internalSet$:!0}})));
      }
    }, $_setSelection$:function($selection$$5$$) {
      if (null == $selection$$5$$) {
        this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$();
      } else {
        var $i$$239$$, $endRowIndex_endRowKey_j$$36$$, $endRowIdx_rangeObj$$1$$, $endColumnIdx_startRowIdx_startRowKey$$, $startRowIndex$$, $startColumnIdx$$;
        for ($i$$239$$ = 0;$i$$239$$ < $selection$$5$$.length;$i$$239$$++) {
          $endRowIdx_rangeObj$$1$$ = $selection$$5$$[$i$$239$$];
          if (null == $endRowIdx_rangeObj$$1$$.startKey && null == $endRowIdx_rangeObj$$1$$.startIndex || null == $endRowIdx_rangeObj$$1$$.endKey && null == $endRowIdx_rangeObj$$1$$.endIndex) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection. Both start and end objects must be specified"), null;
          }
          $endColumnIdx_startRowIdx_startRowKey$$ = $startColumnIdx$$ = $endRowIndex_endRowKey_j$$36$$ = $startRowIndex$$ = null;
          null != $endRowIdx_rangeObj$$1$$.startKey && null != $endRowIdx_rangeObj$$1$$.startKey.row && ($startRowIndex$$ = this.$_getDataSourceRowIndexForRowKey$($endRowIdx_rangeObj$$1$$.startKey.row));
          null != $endRowIdx_rangeObj$$1$$.endKey && null != $endRowIdx_rangeObj$$1$$.endKey.row && ($endRowIndex_endRowKey_j$$36$$ = this.$_getDataSourceRowIndexForRowKey$($endRowIdx_rangeObj$$1$$.endKey.row));
          null != $endRowIdx_rangeObj$$1$$.startKey && null != $endRowIdx_rangeObj$$1$$.startKey.column && ($startColumnIdx$$ = this.$_getColumnIdxForColumnKey$($endRowIdx_rangeObj$$1$$.startKey.column));
          null != $endRowIdx_rangeObj$$1$$.endKey && null != $endRowIdx_rangeObj$$1$$.endKey.column && ($endColumnIdx_startRowIdx_startRowKey$$ = this.$_getColumnIdxForColumnKey$($endRowIdx_rangeObj$$1$$.endKey.column));
          null == $startRowIndex$$ && null != $endRowIdx_rangeObj$$1$$.startIndex && ($startRowIndex$$ = $endRowIdx_rangeObj$$1$$.startIndex.row);
          null == $endRowIndex_endRowKey_j$$36$$ && null != $endRowIdx_rangeObj$$1$$.endIndex && ($endRowIndex_endRowKey_j$$36$$ = $endRowIdx_rangeObj$$1$$.endIndex.row);
          null == $startColumnIdx$$ && null != $endRowIdx_rangeObj$$1$$.startIndex && ($startColumnIdx$$ = $endRowIdx_rangeObj$$1$$.startIndex.column);
          null == $endColumnIdx_startRowIdx_startRowKey$$ && null != $endRowIdx_rangeObj$$1$$.endIndex && ($endColumnIdx_startRowIdx_startRowKey$$ = $endRowIdx_rangeObj$$1$$.endIndex.column);
          if (null != $startRowIndex$$ && null != $endRowIndex_endRowKey_j$$36$$ && null != $startColumnIdx$$ && null != $endColumnIdx_startRowIdx_startRowKey$$) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null;
          }
          if (null != $startRowIndex$$ && 0 <= $startRowIndex$$ && null != $endRowIndex_endRowKey_j$$36$$ && 0 <= $endRowIndex_endRowKey_j$$36$$) {
            for ($endColumnIdx_startRowIdx_startRowKey$$ = this.$_getRowKeyForDataSourceRowIndex$($startRowIndex$$), $endRowIndex_endRowKey_j$$36$$ = this.$_getRowKeyForDataSourceRowIndex$($endRowIndex_endRowKey_j$$36$$), $endColumnIdx_startRowIdx_startRowKey$$ = this.$_getRowIdxForRowKey$($endColumnIdx_startRowIdx_startRowKey$$), $endRowIdx_rangeObj$$1$$ = this.$_getRowIdxForRowKey$($endRowIndex_endRowKey_j$$36$$), $endRowIndex_endRowKey_j$$36$$ = $endColumnIdx_startRowIdx_startRowKey$$;$endRowIndex_endRowKey_j$$36$$ <= 
            $endRowIdx_rangeObj$$1$$;$endRowIndex_endRowKey_j$$36$$++) {
              try {
                this.$_setRowSelection$($endRowIndex_endRowKey_j$$36$$, !0, null, null, !1);
              } catch ($e$$91$$) {
                $oj$$14$$.$Logger$.error("Error: " + $e$$91$$);
              }
            }
          } else {
            if (null != $startColumnIdx$$ && null != $endColumnIdx_startRowIdx_startRowKey$$) {
              for ($endRowIndex_endRowKey_j$$36$$ = $startColumnIdx$$;$endRowIndex_endRowKey_j$$36$$ <= $endColumnIdx_startRowIdx_startRowKey$$;$endRowIndex_endRowKey_j$$36$$++) {
                try {
                  this.$_setHeaderColumnSelection$($endRowIndex_endRowKey_j$$36$$, !0, null, null, !1);
                } catch ($e$$92$$) {
                  $oj$$14$$.$Logger$.error("Error: " + $e$$92$$);
                }
              }
            } else {
              return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - \n start row: " + $startRowIndex$$ + "\nend row: " + $endRowIndex_endRowKey_j$$36$$ + "\nstart column: " + $startColumnIdx$$ + "\nend column: " + $endColumnIdx_startRowIdx_startRowKey$$), null;
            }
          }
        }
      }
    }, $_setTableNavigationMode$:function($value$$197$$) {
      this.$_tableNavMode$ = $value$$197$$;
    }, $_showInlineMessage$:function($inlineMessage$$1_summary$$21$$, $detail$$24_tableContainer$$2$$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$) {
      this.$_getTableDomUtils$().$setTableInlineMessage$($inlineMessage$$1_summary$$21$$, $detail$$24_tableContainer$$2$$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$);
      $inlineMessage$$1_summary$$21$$ = this.$_getTableDomUtils$().$getTableInlineMessage$();
      if ($inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$) == $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$) {
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$);
        var $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ = parseInt($inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 10), $inlineMessagePaddingRight_tableContainerBorderLeft$$ = parseInt($inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 10);
        $detail$$24_tableContainer$$2$$ = this.$_getTableDomUtils$().$getTableContainer$();
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ == $oj$$14$$.$Message$.$SEVERITY_LEVEL$.WARNING && ($detail$$24_tableContainer$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$), $inlineMessage$$1_summary$$21$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$));
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ = $detail$$24_tableContainer$$2$$.width();
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ - $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ - $inlineMessagePaddingRight_tableContainerBorderLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ = $inlineMessage$$1_summary$$21$$.outerHeight();
        var $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ = parseInt($detail$$24_tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_BOTTOM_WIDTH$), 10), $inlineMessagePaddingRight_tableContainerBorderLeft$$ = parseInt($detail$$24_tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_LEFT_WIDTH$), 10), $tableContainerMarginBottom$$1$$ = parseInt($detail$$24_tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$), 10), $tableContainerMarginBottom$$1$$ = 
        $tableContainerMarginBottom$$1$$ + $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ + $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$;
        $detail$$24_tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$, $tableContainerMarginBottom$$1$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, -1 * ($tableContainerMarginBottom$$1$$ + $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$) + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, -1 * $inlineMessagePaddingRight_tableContainerBorderLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
      }
    }, $_showNoDataMessage$:function() {
      this.$_getTableDomUtils$().$createTableNoDataRow$(this.$_getColumnDefs$().length);
    }, $_showStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_INLINE$);
      this.$_getTableDomUtils$().$refreshTableStatusPosition$();
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$27_tableHeaderColumn$$7$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$27_tableHeaderColumn$$7$$].sortable == this.$_OPTION_ENABLED$ && ($columnIdx$$27_tableHeaderColumn$$7$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$27_tableHeaderColumn$$7$$)) && null == $columnIdx$$27_tableHeaderColumn$$7$$.data("sorted")) {
        var $headerColumnAscLink$$2$$ = $columnIdx$$27_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
        $headerColumnAscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$);
        $headerColumnAscLink$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$27_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$27_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      }
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$128$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$128$$) {
        var $i$$240$$;
        for ($i$$240$$ = 0;$i$$240$$ < this.$_dataSourceEventHandlers$.length;$i$$240$$++) {
          $data$$128$$.off(this.$_dataSourceEventHandlers$[$i$$240$$].eventType, this.$_dataSourceEventHandlers$[$i$$240$$].eventHandler);
        }
      }
    }, $_updateHeaderColumnCellsClass$:function($columnIdx$$28$$) {
      var $selected$$21$$ = this.$_getHeaderColumnState$($columnIdx$$28$$).selected, $selectedRowIdxs$$2$$ = this.$_getSelectedRowIdxs$(), $tableBodyRows$$8$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$8$$ && 0 < $tableBodyRows$$8$$.length) {
        var $i$$241$$, $j$$37$$, $tableBodyCell$$3$$, $rowSelected$$1$$;
        for ($i$$241$$ = 0;$i$$241$$ < $tableBodyRows$$8$$.length;$i$$241$$++) {
          if ($tableBodyCell$$3$$ = this.$_getTableDomUtils$().$getTableBodyCell$($i$$241$$, $columnIdx$$28$$), $selected$$21$$) {
            $$$$14$$($tableBodyCell$$3$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          } else {
            $rowSelected$$1$$ = !1;
            for ($j$$37$$ = 0;$j$$37$$ < $selectedRowIdxs$$2$$.length;$j$$37$$++) {
              if ($i$$241$$ == $selectedRowIdxs$$2$$[$j$$37$$]) {
                $rowSelected$$1$$ = !0;
                break;
              }
            }
            $rowSelected$$1$$ || $$$$14$$($tableBodyCell$$3$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }, $_updateRowCellsClass$:function($rowIdx$$21$$, $state$$3$$) {
      var $tableBodyCells$$1$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$21$$), $focused$$6$$ = $state$$3$$.$focused$, $selected$$22$$ = $state$$3$$.selected, $hover$$ = $state$$3$$.hover;
      if ($tableBodyCells$$1$$) {
        if (null != $hover$$) {
          var $i$$242$$;
          for ($i$$242$$ = 0;$i$$242$$ < $tableBodyCells$$1$$.length;$i$$242$$++) {
            $hover$$ ? $$$$14$$($tableBodyCells$$1$$[$i$$242$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$14$$($tableBodyCells$$1$$[$i$$242$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
          }
        }
        if (null != $focused$$6$$) {
          for ($i$$242$$ = 0;$i$$242$$ < $tableBodyCells$$1$$.length;$i$$242$$++) {
            $focused$$6$$ ? $$$$14$$($tableBodyCells$$1$$[$i$$242$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$14$$($tableBodyCells$$1$$[$i$$242$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
        }
        if (null != $selected$$22$$) {
          for ($i$$242$$ = 0;$i$$242$$ < $tableBodyCells$$1$$.length;$i$$242$$++) {
            $selected$$22$$ ? $$$$14$$($tableBodyCells$$1$$[$i$$242$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$14$$($tableBodyCells$$1$$[$i$$242$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }, $_setFinalTask$:function($task$$) {
      this.$_finalTask$ = $task$$ ? $task$$.bind(this) : void 0;
    }, $_queueTask$:function($task$$1$$) {
      var $self$$104$$ = this;
      this.$_pendingTasks$ || (this.$_taskCount$ = 0, this.$_pendingTasks$ = Promise.resolve());
      this.$_taskCount$++;
      return this.$_pendingTasks$ = this.$_pendingTasks$.then($task$$1$$.bind($self$$104$$)).then(function($value$$198$$) {
        $self$$104$$.$_taskCount$--;
        0 == $self$$104$$.$_taskCount$ && ($self$$104$$.$_pendingTasks$ = void 0, $self$$104$$.$_finalTask$ && $self$$104$$.$_finalTask$(), $self$$104$$._trigger("ready"));
        return $value$$198$$;
      }, function($error$$37$$) {
        $self$$104$$.$_taskCount$--;
        0 == $self$$104$$.$_taskCount$ && ($self$$104$$.$_pendingTasks$ = void 0, $oj$$14$$.$Logger$.error($error$$37$$));
        return Promise.reject($error$$37$$);
      });
    }});
  })();
  $oj$$14$$.$FlattenedTreeTableDataSource$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$($data$$129$$, $options$$279$$) {
    $options$$279$$ = $options$$279$$ || {};
    if (!($data$$129$$ instanceof $oj$$14$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$_data$ = $data$$129$$;
    this.$_eventHandlers$ = [];
    this.$_startIndex$ = 0;
    this.$_nodeSetList$ = [];
    null == this.$_data$.$getOption$("fetchSize") && (this.$_data$.$getFetchSize$ = function $this$$_data$$$getFetchSize$$() {
      return-1;
    });
    var $self$$105$$ = this;
    this.$_data$.$insertRows$ = function $this$$_data$$$insertRows$$($insertAtIndex$$1$$, $i$$243_insertAtKey$$, $nodeSet$$8$$) {
      var $row$$28$$, $rowIdx$$22$$, $rowKey$$12$$, $rowArray$$14$$ = [], $keyArray$$6$$ = [], $indexArray$$5$$ = [];
      for ($i$$243_insertAtKey$$ = 0;$i$$243_insertAtKey$$ < $nodeSet$$8$$.$getCount$();$i$$243_insertAtKey$$++) {
        $row$$28$$ = $nodeSet$$8$$.getData($i$$243_insertAtKey$$), $rowKey$$12$$ = $nodeSet$$8$$.getMetadata($i$$243_insertAtKey$$).key, $rowIdx$$22$$ = $insertAtIndex$$1$$ + $i$$243_insertAtKey$$, $self$$105$$.$_nodeSetList$[$rowIdx$$22$$] = {}, $self$$105$$.$_nodeSetList$[$rowIdx$$22$$].nodeSet = $nodeSet$$8$$, $self$$105$$.$_nodeSetList$[$rowIdx$$22$$].startIndex = $insertAtIndex$$1$$, $rowArray$$14$$.push($row$$28$$), $keyArray$$6$$.push($rowKey$$12$$), $indexArray$$5$$.push($rowIdx$$22$$), $self$$105$$.$_rows$.data.splice($rowIdx$$22$$, 
        0, $row$$28$$), $self$$105$$.$_rows$.keys.splice($rowIdx$$22$$, 0, $rowKey$$12$$), $self$$105$$.$_rows$.indexes.splice($rowIdx$$22$$, 0, $rowIdx$$22$$);
      }
      $self$$105$$.$_pageSize$ || $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$105$$, $oj$$14$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$14$$, keys:$keyArray$$6$$, indexes:$indexArray$$5$$});
      $self$$105$$.$_realignRowIndices$();
      $self$$105$$.$_pageSize$ && setTimeout(function() {
        $self$$105$$.fetch();
      }, 0);
    };
    this.$_data$.$removeRows$ = function $this$$_data$$$removeRows$$($rowKeys$$1$$) {
      var $i$$244$$, $rowIdx$$23$$, $rowArray$$15$$ = [], $keyArray$$7$$ = [], $indexArray$$6$$ = [];
      for ($i$$244$$ = 0;$i$$244$$ < $rowKeys$$1$$.length;$i$$244$$++) {
        $rowIdx$$23$$ = $rowKeys$$1$$[$i$$244$$].index - $i$$244$$, $rowArray$$15$$.push(""), $keyArray$$7$$.push(""), $indexArray$$6$$.push($rowIdx$$23$$), $self$$105$$.$_rows$.data.splice($rowIdx$$23$$, 1), $self$$105$$.$_rows$.keys.splice($rowIdx$$23$$, 1), $self$$105$$.$_rows$.indexes.splice($rowIdx$$23$$, 1);
      }
      $self$$105$$.$_pageSize$ || $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$105$$, $oj$$14$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$15$$, keys:$keyArray$$7$$, indexes:$indexArray$$6$$});
      $self$$105$$.$_realignRowIndices$();
      $self$$105$$.$_pageSize$ && setTimeout(function() {
        $self$$105$$.fetch();
      }, 0);
    };
    this.Init();
    if (null != $options$$279$$ && ("enabled" == $options$$279$$.startFetch || null == $options$$279$$.startFetch) || null == $options$$279$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$14$$.$FlattenedTreeTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$FlattenedTreeTableDataSource$, $oj$$14$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$_data$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$fetch$($options$$280$$) {
    $options$$280$$ = $options$$280$$ || {};
    return "init" != $options$$280$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$280$$) : Promise.resolve();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$at$($index$$138$$) {
    var $row$$30$$;
    $row$$30$$ = 0 > $index$$138$$ || $index$$138$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$138$$], index:$index$$138$$, key:this.$_rows$.keys[$index$$138$$]};
    return new Promise(function($resolve$$44$$) {
      $resolve$$44$$($row$$30$$);
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$13$$) {
    this.$_data$.collapse($rowKey$$13$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$14$$) {
    this.$_data$.expand($rowKey$$14$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$get$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$on$($eventType$$36$$, $eventHandler$$7$$) {
    if ("expand" == $eventType$$36$$ || "collapse" == $eventType$$36$$) {
      this.$_data$.on($eventType$$36$$, $eventHandler$$7$$);
    } else {
      $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$36$$, $eventHandler$$7$$);
    }
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$off$($eventType$$37$$, $eventHandler$$8$$) {
    "expand" == $eventType$$37$$ || "collapse" == $eventType$$37$$ ? this.$_data$.off($eventType$$37$$, $eventHandler$$8$$) : $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$37$$, $eventHandler$$8$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$12$$) {
    if (null == $criteria$$12$$) {
      return Promise.resolve();
    }
    var $self$$107$$ = this;
    $criteria$$12$$.axis = "column";
    return new Promise(function($resolve$$45$$, $reject$$45$$) {
      $self$$107$$.$_data$.getWrappedDataSource().sort($criteria$$12$$, {success:function() {
        setTimeout(function() {
          $self$$107$$.$_data$.refresh();
          $self$$107$$.$_rows$ = null;
          var $result$$45$$ = {header:$criteria$$12$$.key, direction:$criteria$$12$$.direction};
          $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$107$$, $oj$$14$$.$TableDataSource$.$EventType$.SORT, $result$$45$$);
          $resolve$$45$$($result$$45$$);
        }, 0);
      }.bind(this), error:function($status$$17$$) {
        $reject$$45$$($status$$17$$);
      }.bind(this)});
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return-1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_getMetadata$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_getMetadata$$($index$$139$$) {
    return this.$_nodeSetList$[$index$$139$$].nodeSet.getMetadata($index$$139$$ - this.$_nodeSetList$[$index$$139$$].startIndex);
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_fetchInternal$$($options$$283$$) {
    $options$$283$$ = $options$$283$$ || {};
    this.$_startFetch$($options$$283$$);
    this.$_startIndex$ = null == $options$$283$$.startIndex ? this.$_startIndex$ : $options$$283$$.startIndex;
    var $rangeCount$$1_rowArray$$16$$ = Number.MAX_VALUE;
    this.$_pageSize$ = null == $options$$283$$.pageSize ? this.$_pageSize$ : $options$$283$$.pageSize;
    null != this.$_pageSize$ && ($rangeCount$$1_rowArray$$16$$ = this.$_pageSize$);
    var $keyArray$$8_startIndex$$27$$ = this.$_startIndex$;
    if (null != this.$_rows$) {
      if (null != this.$_pageSize$) {
        var $endIndex$$5_result$$46$$ = this.$_rows$.data.length - 1;
        if (this.$_startIndex$ + this.$_pageSize$ - 1 <= $endIndex$$5_result$$46$$) {
          var $endIndex$$5_result$$46$$ = $oj$$14$$.$FlattenedTreeTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), $rangeCount$$1_rowArray$$16$$ = [], $keyArray$$8_startIndex$$27$$ = [], $i$$245$$;
          for ($i$$245$$ = this.$_startIndex$;$i$$245$$ <= $endIndex$$5_result$$46$$;$i$$245$$++) {
            $rangeCount$$1_rowArray$$16$$[$i$$245$$ - this.$_startIndex$] = this.$_rows$.data[$i$$245$$], $keyArray$$8_startIndex$$27$$[$i$$245$$ - this.$_startIndex$] = "";
          }
          $endIndex$$5_result$$46$$ = {data:$rangeCount$$1_rowArray$$16$$, keys:$keyArray$$8_startIndex$$27$$, startIndex:this.$_startIndex$};
          this.$_endFetch$($options$$283$$, $endIndex$$5_result$$46$$, null);
          return Promise.resolve($endIndex$$5_result$$46$$);
        }
        this.$_startIndex$ <= $endIndex$$5_result$$46$$ && ($keyArray$$8_startIndex$$27$$ = $endIndex$$5_result$$46$$ + 1);
      } else {
        this.$_data$.refresh(), this.$_rows$ = null;
      }
    }
    var $rangeOption$$ = {start:$keyArray$$8_startIndex$$27$$, count:$rangeCount$$1_rowArray$$16$$}, $self$$108$$ = this;
    return new Promise(function($resolve$$46$$, $reject$$46$$) {
      $self$$108$$.$_data$.$fetchRows$($rangeOption$$, {success:function($nodeSet$$10_result$$47$$) {
        $self$$108$$.$_handleFetchRowsSuccess$($nodeSet$$10_result$$47$$);
        $options$$283$$.refresh = !0;
        var $endIndex$$6$$ = $oj$$14$$.$FlattenedTreeTableDataSource$.$_getEndIndex$($self$$108$$.$_rows$, $self$$108$$.$_startIndex$, $self$$108$$.$_pageSize$), $rowArray$$17$$ = [], $keyArray$$9$$ = [], $i$$246$$;
        for ($i$$246$$ = $self$$108$$.$_startIndex$;$i$$246$$ <= $endIndex$$6$$;$i$$246$$++) {
          $rowArray$$17$$[$i$$246$$ - $self$$108$$.$_startIndex$] = $self$$108$$.$_rows$.data[$i$$246$$], $keyArray$$9$$[$i$$246$$ - $self$$108$$.$_startIndex$] = $nodeSet$$10_result$$47$$.getMetadata($i$$246$$).key;
        }
        $nodeSet$$10_result$$47$$ = {data:$rowArray$$17$$, keys:$keyArray$$9$$, startIndex:$self$$108$$.$_startIndex$};
        $self$$108$$.$_endFetch$($options$$283$$, $nodeSet$$10_result$$47$$, null);
        $resolve$$46$$($nodeSet$$10_result$$47$$);
      }.bind(this), error:function($error$$38$$) {
        $self$$108$$.$_endFetch$($options$$283$$, null, $error$$38$$);
        $reject$$46$$($error$$38$$);
      }.bind(this)});
    });
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_handleFetchRowsSuccess$$($nodeSet$$11$$) {
    var $i$$247$$, $rowIdx$$24$$;
    for ($i$$247$$ = 0;$i$$247$$ < $nodeSet$$11$$.$getCount$();$i$$247$$++) {
      $rowIdx$$24$$ = this.$_startIndex$ + $i$$247$$, this.$_nodeSetList$[$rowIdx$$24$$] = {}, this.$_nodeSetList$[$rowIdx$$24$$].nodeSet = $nodeSet$$11$$, this.$_nodeSetList$[$rowIdx$$24$$].startIndex = this.$_startIndex$;
    }
    this.$_rows$ || (this.$_rows$ = {}, this.$_rows$.data = [], this.$_rows$.keys = [], this.$_rows$.indexes = []);
    $oj$$14$$.$FlattenedTreeTableDataSource$.$_getRowArray$($nodeSet$$11$$, this, this.$_rows$);
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_startFetch$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_startFetch$$($options$$284$$) {
    $options$$284$$.silent || $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$14$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$284$$.startIndex});
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_endFetch$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_endFetch$$($options$$285$$, $result$$48$$, $error$$39$$) {
    null != $error$$39$$ ? $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$14$$.$TableDataSource$.$EventType$.ERROR, $error$$39$$) : $options$$285$$.silent || $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$14$$.$TableDataSource$.$EventType$.SYNC, $result$$48$$);
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.$_getEndIndex$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$_getEndIndex$$($rows$$6$$, $startIndex$$28$$, $pageSize$$8$$) {
    var $endIndex$$7$$ = $rows$$6$$.data.length - 1;
    0 < $pageSize$$8$$ && ($endIndex$$7$$ = $startIndex$$28$$ + $pageSize$$8$$ - 1, $endIndex$$7$$ = $endIndex$$7$$ > $rows$$6$$.data.length - 1 ? $rows$$6$$.data.length - 1 : $endIndex$$7$$);
    return $endIndex$$7$$;
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.$_getRowArray$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$_getRowArray$$($nodeSet$$12$$, $endIndex$$8_rowSet$$, $rows$$7$$) {
    $endIndex$$8_rowSet$$ = $nodeSet$$12$$.$getCount$() - 1;
    var $i$$248$$;
    for ($i$$248$$ = $nodeSet$$12$$.$getStart$();$i$$248$$ <= $endIndex$$8_rowSet$$;$i$$248$$++) {
      var $row$$31$$ = $nodeSet$$12$$.getData($i$$248$$);
      $rows$$7$$.data[$i$$248$$] = $row$$31$$;
      $rows$$7$$.keys[$i$$248$$] = "";
      $rows$$7$$.indexes[$i$$248$$] = $i$$248$$;
    }
  };
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$249$$ = 0;$i$$249$$ < this.$_rows$.data.length;$i$$249$$++) {
      this.$_rows$.indexes[$i$$249$$] = $i$$249$$;
    }
  };
  $oj$$14$$.$TableDomUtils$ = function $$oj$$14$$$$TableDomUtils$$($component$$15$$) {
    this.$component$ = $component$$15$$;
    this.options = $component$$15$$.options;
    this.element = $component$$15$$.element;
    this.Init();
  };
  $goog$exportPath_$$("TableDomUtils", $oj$$14$$.$TableDomUtils$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDomUtils$, $oj$$14$$.$Object$, "oj.TableDomUtils");
  $oj$$14$$.$TableDomUtils$.prototype.Init = function $$oj$$14$$$$TableDomUtils$$$Init$() {
    $oj$$14$$.$TableDomUtils$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDomUtils.prototype.Init", {Init:$oj$$14$$.$TableDomUtils$.prototype.Init});
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDom$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDom$$() {
    this.$clearCachedDomRowData$();
    this.$_tableDimensions$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDomRowData$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDomRowData$$() {
    this.$_cachedDomTableBodyRows$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenu$$($handleContextMenuSelect$$) {
    var $menuContainer$$1$$ = null, $self$$109$$ = this;
    if (null != this.options.contextMenu || null != this.$getTable$().attr("contextmenu")) {
      var $menuContainerId_sortMenu$$1$$ = this.$getContextMenuId$(), $menuContainer$$1$$ = $$$$14$$($menuContainerId_sortMenu$$1$$);
      if (null != $menuContainer$$1$$ && 0 < $menuContainer$$1$$.length) {
        var $listItems$$1$$ = $menuContainer$$1$$.find("[data-oj-command]");
        if (null != $listItems$$1$$ && 0 < $listItems$$1$$.length) {
          var $command$$7$$;
          $listItems$$1$$.each(function() {
            0 === $$$$14$$(this).children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$).length && ($command$$7$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $$$$14$$(this).replaceWith($self$$109$$.$createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])));
          });
          this.$_menuContainer$ = $menuContainer$$1$$;
          this.$component$.$_contextMenuId$ = $menuContainerId_sortMenu$$1$$;
          $menuContainer$$1$$.ojMenu("refresh");
          $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$);
        }
      }
    } else {
      this.$component$.$_isTableSortable$() && ($menuContainer$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_UL$)), $menuContainer$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$), $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + "_contextmenu"), this.$getTableContainer$().append($menuContainer$$1$$), $menuContainerId_sortMenu$$1$$ = 
      this.$createContextMenuItem$("sort"), $menuContainer$$1$$.append($menuContainerId_sortMenu$$1$$), $menuContainer$$1$$.ojMenu(), this.$_menuContainer$ = $menuContainer$$1$$, this.$component$.$_contextMenuId$ = "#" + $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$), $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$), this.$component$._setOption("contextMenu", "#" + $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$)));
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuItem$$($command$$8$$) {
    return "sort" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)).append($$$$14$$("\x3cul\x3e\x3c/ul\x3e").append($$$$14$$(this.$createContextMenuListItem$("sortAsc"))).append($$$$14$$(this.$createContextMenuListItem$("sortDsc")))) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuListItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuListItem$$($command$$9$$) {
    var $contextMenuListItem$$ = $$$$14$$(document.createElement("li"));
    $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
    $contextMenuListItem$$.append(this.$createContextMenuLabel$($command$$9$$));
    return $contextMenuListItem$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuLabel$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuLabel$$($command$$10$$) {
    var $contextMenuLabel$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$));
    $contextMenuLabel$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HREF$, "#");
    var $commandString$$ = null;
    "sort" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ && ($commandString$$ = this.$component$.$getTranslatedString$("labelSortDsc"));
    $contextMenuLabel$$.text($commandString$$);
    return $contextMenuLabel$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$createInitialTable$$($isTableHeaderless$$, $isTableFooterless$$) {
    this.$getTable$();
    this.$createTableContainer$();
    this.$isDivScroller$() && this.$createTableDivScroller$();
    $isTableHeaderless$$ || this.$createTableHeader$();
    $isTableFooterless$$ || this.$createTableFooter$();
    this.$createTableBody$();
    this.$createTableStatusMessage$();
    this.$createTableInlineMessage$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBody$$() {
    var $table$$5$$ = this.$getTable$(), $tableBody$$5$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TBODY$));
    $table$$5$$.append($tableBody$$5$$);
    this.$_cachedDomTableBody$ = $tableBody$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCell$$() {
    return $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCellAccSelect$$($rowIdx$$26_rowKeyStr_selectRowTitle$$, $rowKey$$15$$, $tableBodyRow$$10$$) {
    var $accSelectionCell$$1$$ = this.$getTableBodyCellAccSelect$($tableBodyRow$$10$$), $accSelectCheckbox$$2_isTableHeaderless$$1$$ = null == this.$getTableHeader$() ? !0 : !1;
    null == $accSelectionCell$$1$$ && ($rowIdx$$26_rowKeyStr_selectRowTitle$$ = null != $rowKey$$15$$ ? $rowKey$$15$$.toString() : $rowIdx$$26_rowKeyStr_selectRowTitle$$.toString(), $accSelectionCell$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $accSelectionCell$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), $accSelectionCell$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accSelectCheckbox$$2_isTableHeaderless$$1$$ || 
    $accSelectionCell$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$, this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + ":" + $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$), $accSelectCheckbox$$2_isTableHeaderless$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_INPUT$)), $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + 
    ":acc_sel_row_" + this.$hashCode$($rowIdx$$26_rowKeyStr_selectRowTitle$$)), $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TYPE$, "checkbox"), $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1"), $rowIdx$$26_rowKeyStr_selectRowTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$), $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, 
    $rowIdx$$26_rowKeyStr_selectRowTitle$$), $accSelectCheckbox$$2_isTableHeaderless$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$), $accSelectionCell$$1$$.append($accSelectCheckbox$$2_isTableHeaderless$$1$$), $tableBodyRow$$10$$.prepend($accSelectionCell$$1$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRow$$($rowIdx$$27$$, $rowKey$$16$$) {
    var $tableBodyRow$$11$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$createTableBodyCellAccSelect$($rowIdx$$27$$, $rowKey$$16$$, $tableBodyRow$$11$$);
    return $tableBodyRow$$11$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$createTableContainer$$() {
    var $tableContainer$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    this.element.parent()[0].replaceChild($tableContainer$$3$$[0], this.element[0]);
    $tableContainer$$3$$.prepend(this.element);
    this.$_cachedDomTableContainer$ = $tableContainer$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooter$$() {
    var $table$$6$$ = this.$getTable$(), $tableFooter$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TFOOT$)), $tableBody$$6_tableFooterRow$$2_tableHeader$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$createTableFooterAccSelect$($tableBody$$6_tableFooterRow$$2_tableHeader$$2$$);
    $tableFooter$$2$$.append($tableBody$$6_tableFooterRow$$2_tableHeader$$2$$);
    $tableBody$$6_tableFooterRow$$2_tableHeader$$2$$ = this.$getTableHeader$();
    null != $tableBody$$6_tableFooterRow$$2_tableHeader$$2$$ ? $tableBody$$6_tableFooterRow$$2_tableHeader$$2$$.after($tableFooter$$2$$) : ($tableBody$$6_tableFooterRow$$2_tableHeader$$2$$ = this.$getTableBody$(), null != $tableBody$$6_tableFooterRow$$2_tableHeader$$2$$ ? $tableBody$$6_tableFooterRow$$2_tableHeader$$2$$.before($tableFooter$$2$$) : $table$$6$$.append($tableFooter$$2$$));
    return $tableFooter$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterAccSelect$$($tableFooterRow$$3$$) {
    var $accFooterCell$$ = $tableFooterRow$$3$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    null != $accFooterCell$$ && 0 < $accFooterCell$$.length ? $$$$14$$($accFooterCell$$[0]) : ($accFooterCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $accFooterCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accFooterCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1"), $tableFooterRow$$3$$.prepend($accFooterCell$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterCell$$() {
    return $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeader$$() {
    var $table$$7$$ = this.$getTable$(), $tableHeader$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_THEAD$)), $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$_cachedDomTableHeaderRow$ = $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$;
    $tableHeader$$3$$.append($tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$);
    $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$ = this.$getTableFooter$();
    null != $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$ ? $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$.before($tableHeader$$3$$) : ($tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$ = this.$getTableBody$(), null != $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$ ? $tableBody$$7_tableFooter$$3_tableHeaderRow$$2$$.before($tableHeader$$3$$) : $table$$7$$.append($tableHeader$$3$$));
    return this.$_cachedDomTableHeader$ = $tableHeader$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderAccSelectRowColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderAccSelectRowColumn$$() {
    var $headerColumn$$5$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TH$));
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumn$$5$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + ":" + $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
    var $selectRowTitle$$1$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
    $headerColumn$$5$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $selectRowTitle$$1$$);
    $headerColumn$$5$$.text($selectRowTitle$$1$$);
    return $headerColumn$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumn$$($columnIdx$$31_headerContext$$1$$) {
    function $headerTextRenderer$$($headerContentDiv$$) {
      $headerContentDiv$$.text($column$$17$$.headerText);
    }
    var $column$$17$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$31_headerContext$$1$$], $headerColumnCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TH$));
    this.$styleTableHeaderColumn$($columnIdx$$31_headerContext$$1$$, $headerColumnCell$$, !0);
    $headerColumnCell$$.attr("abbr", $column$$17$$.headerText);
    $headerColumnCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $column$$17$$.headerText);
    this.$insertTableHeaderColumn$($columnIdx$$31_headerContext$$1$$, $headerColumnCell$$);
    $columnIdx$$31_headerContext$$1$$ = {columnIndex:$columnIdx$$31_headerContext$$1$$, headerContext:{component:this.$component$, parentElement:$headerColumnCell$$}};
    $column$$17$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ ? ($headerColumnCell$$.attr("data-oj-sortable", $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$), $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$($columnIdx$$31_headerContext$$1$$, 0, $headerTextRenderer$$)) : $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$($columnIdx$$31_headerContext$$1$$, 0, $headerTextRenderer$$);
    return $headerColumnCell$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnAccSelect$$($columnIdx$$32$$, $columnSelectionMode$$2$$) {
    if ($columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ || $columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
      var $headerColumn$$6$$ = this.$getTableHeaderColumn$($columnIdx$$32$$), $accSelectionHeaderColumn$$ = this.$getTableHeaderColumnAccSelect$($columnIdx$$32$$);
      if (null == $accSelectionHeaderColumn$$) {
        $accSelectionHeaderColumn$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
        var $accSelectCheckbox$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_INPUT$));
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + ":acc_sel_col" + $columnIdx$$32$$);
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TYPE$, "checkbox");
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1");
        var $selectColumnTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $selectColumnTitle$$);
        $accSelectCheckbox$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
        $headerColumn$$6$$.prepend($accSelectionHeaderColumn$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$createTableDivScroller$$() {
    var $table$$8$$ = this.$getTable$(), $tableContainer$$4$$ = this.$getTableContainer$(), $tableDivScroller$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $tableDivScroller$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
    $tableContainer$$4$$[0].replaceChild($tableDivScroller$$[0], $table$$8$$[0]);
    $tableDivScroller$$.append($table$$8$$);
    this.$_cachedDomTableDivScroller$ = $tableDivScroller$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataRow$$($columnCount$$2$$) {
    var $tableBody$$8$$ = this.$getTableBody$(), $tableNoDataRow$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    $tableNoDataRow$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_ROW_CLASS$);
    this.$createTableNoDataAccSelect$($tableNoDataRow$$);
    this.$createTableNoDataCell$($tableNoDataRow$$, $columnCount$$2$$);
    $tableBody$$8$$.append($tableNoDataRow$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataAccSelect$$($tableNoDataRow$$1$$) {
    var $accNoDataCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
    $accNoDataCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $accNoDataCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1");
    $tableNoDataRow$$1$$.prepend($accNoDataCell$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataCell$$($tableNoDataRow$$2$$, $columnCount$$3$$) {
    var $noDataCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
    $noDataCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$, $columnCount$$3$$ || 1);
    $noDataCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
    var $emptyTextMsg$$ = null, $emptyTextMsg$$ = null != this.options.emptyText ? this.options.emptyText : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_NO_DATA$);
    $noDataCell$$.text($emptyTextMsg$$);
    $tableNoDataRow$$2$$.append($noDataCell$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableInlineMessage$$() {
    var $tableContainer$$5$$ = this.$getTableContainer$(), $inlineMessage$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $inlineMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_INLINE_MESSAGE_CLASS$);
    $inlineMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    $tableContainer$$5$$.append($inlineMessage$$2$$);
    this.$_cachedDomTableInlineMessage$ = $inlineMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableStatusMessage$$() {
    var $tableContainer$$6$$ = this.$getTableContainer$(), $statusMessage$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $statusMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
    $statusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    var $statusMessageText$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $statusMessageText$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_TEXT_CLASS$);
    $statusMessageText$$.text(this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
    $statusMessage$$2$$.append($statusMessageText$$);
    $tableContainer$$6$$.append($statusMessage$$2$$);
    this.$_cachedDomTableStatusMessage$ = $statusMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getContextMenuId$ = function $$oj$$14$$$$TableDomUtils$$$$getContextMenuId$$() {
    return null == this.options.contextMenu ? "#" + this.$getTable$().attr("contextmenu") : this.options.contextMenu;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementColumnIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementColumnIdx$$($element$$91_tableFooterCell$$2$$) {
    var $tableBodyCell$$5_tableHeaderColumn$$8$$ = this.$getFirstAncestor$($element$$91_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    if (null != $tableBodyCell$$5_tableHeaderColumn$$8$$) {
      return $tableBodyCell$$5_tableHeaderColumn$$8$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$).index($tableBodyCell$$5_tableHeaderColumn$$8$$);
    }
    $tableBodyCell$$5_tableHeaderColumn$$8$$ = this.$getFirstAncestor$($element$$91_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    if (null != $tableBodyCell$$5_tableHeaderColumn$$8$$) {
      return $tableBodyCell$$5_tableHeaderColumn$$8$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$).index($tableBodyCell$$5_tableHeaderColumn$$8$$);
    }
    $element$$91_tableFooterCell$$2$$ = this.$getFirstAncestor$($element$$91_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $element$$91_tableFooterCell$$2$$ ? $element$$91_tableFooterCell$$2$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$).index($element$$91_tableFooterCell$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementRowIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementRowIdx$$($element$$92$$) {
    return this.$getFirstAncestor$($element$$92$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$).index();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getFirstAncestor$ = function $$oj$$14$$$$TableDomUtils$$$$getFirstAncestor$$($element$$93$$, $className$$8$$) {
    var $parents$$1$$;
    if (null == $element$$93$$) {
      return null;
    }
    $element$$93$$ = $$$$14$$($element$$93$$);
    if ($element$$93$$.hasClass($className$$8$$)) {
      return $element$$93$$;
    }
    $parents$$1$$ = $element$$93$$.parents("." + $className$$8$$);
    return 0 != $parents$$1$$.length ? $parents$$1$$.eq(0) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getRendererContextObject$ = function $$oj$$14$$$$TableDomUtils$$$$getRendererContextObject$$($row$$32$$, $parentElement$$1$$) {
    var $context$$51$$ = {};
    $context$$51$$.component = this.$component$;
    var $dataSource$$7_rowContext$$1$$ = this.$component$.$_getData$();
    $dataSource$$7_rowContext$$1$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($dataSource$$7_rowContext$$1$$ = $dataSource$$7_rowContext$$1$$.getWrappedDataSource());
    $context$$51$$.datasource = $dataSource$$7_rowContext$$1$$;
    $context$$51$$.parentElement = $parentElement$$1$$;
    if (null != $row$$32$$ && ($context$$51$$.status = this.$getRendererStatusObject$($row$$32$$), $dataSource$$7_rowContext$$1$$ instanceof $oj$$14$$.$FlattenedTreeTableDataSource$)) {
      var $dataSource$$7_rowContext$$1$$ = $dataSource$$7_rowContext$$1$$.$_getMetadata$($row$$32$$.index), $i$$250$$;
      for ($i$$250$$ in $dataSource$$7_rowContext$$1$$) {
        $dataSource$$7_rowContext$$1$$.hasOwnProperty($i$$250$$) && ($context$$51$$[$i$$250$$] = $dataSource$$7_rowContext$$1$$[$i$$250$$]);
      }
    }
    return $context$$51$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getRendererStatusObject$ = function $$oj$$14$$$$TableDomUtils$$$$getRendererStatusObject$$($row$$33$$) {
    return{rowIndex:$row$$33$$.index, rowKey:$row$$33$$.key, currentRow:$$$$14$$.extend({}, this.$component$.$_getCurrentRow$())};
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarHeight$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarHeight$$() {
    var $scroller$$ = this.$getScroller$();
    return 0 < $scroller$$.get(0).clientHeight ? $scroller$$.get(0).offsetHeight - $scroller$$.get(0).clientHeight : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarWidth$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarWidth$$() {
    var $scroller$$1$$ = this.$getScroller$();
    return 0 < $scroller$$1$$.get(0).clientWidth ? $scroller$$1$$.get(0).offsetWidth - $scroller$$1$$.get(0).clientWidth : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getScroller$$() {
    return this.$isDivScroller$() ? this.$getTableDivScroller$() : this.$getTableBody$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTable$ = function $$oj$$14$$$$TableDomUtils$$$$getTable$$() {
    return $$$$14$$(this.element);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBody$$() {
    if (!this.$_cachedDomTableBody$) {
      var $table$$9$$ = this.$getTable$(), $tableBody$$9$$ = null;
      $table$$9$$ && ($tableBody$$9$$ = $table$$9$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$9$$.length && (this.$_cachedDomTableBody$ = $$$$14$$($tableBody$$9$$.get(0)));
    }
    return this.$_cachedDomTableBody$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCell$$($rowIdx$$28_tableBodyCells$$2$$, $columnIdx$$33$$, $tableBodyRow$$13$$) {
    return($rowIdx$$28_tableBodyCells$$2$$ = this.$getTableBodyCells$($rowIdx$$28_tableBodyCells$$2$$, $tableBodyRow$$13$$)) ? $rowIdx$$28_tableBodyCells$$2$$.length > $columnIdx$$33$$ ? $$$$14$$($rowIdx$$28_tableBodyCells$$2$$[$columnIdx$$33$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCellAccSelect$$($accSelectionCell$$2_tableBodyRow$$14$$) {
    return null != $accSelectionCell$$2_tableBodyRow$$14$$ && ($accSelectionCell$$2_tableBodyRow$$14$$ = $accSelectionCell$$2_tableBodyRow$$14$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$14$$ && 0 < $accSelectionCell$$2_tableBodyRow$$14$$.length) ? $$$$14$$($accSelectionCell$$2_tableBodyRow$$14$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCells$$($rowIdx$$29$$, $tableBodyRow$$15$$) {
    $tableBodyRow$$15$$ || ($tableBodyRow$$15$$ = this.$getTableBodyRow$($rowIdx$$29$$));
    if (!$tableBodyRow$$15$$) {
      return null;
    }
    var $tableBodyCellElements$$ = $tableBodyRow$$15$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    return null != $tableBodyCellElements$$ && 0 < $tableBodyCellElements$$.length ? $tableBodyCellElements$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRow$$($rowIdx$$30$$) {
    var $tableBodyRows$$9$$ = this.$getTableBodyRows$();
    return $tableBodyRows$$9$$ && null != $rowIdx$$30$$ ? $tableBodyRows$$9$$.length > $rowIdx$$30$$ ? $$$$14$$($tableBodyRows$$9$$[$rowIdx$$30$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRows$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRows$$() {
    if (!this.$_cachedDomTableBodyRows$) {
      var $tableBodyRowElements$$ = this.$getTableBody$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$);
    }
    return this.$_cachedDomTableBodyRows$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainer$$() {
    this.$_cachedDomTableContainer$ || (this.$isDivScroller$() ? this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode.parentNode) : this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode));
    return this.$_cachedDomTableContainer$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooter$$() {
    var $table$$10$$ = this.$getTable$(), $tableFooter$$4$$ = null;
    return $table$$10$$ && ($tableFooter$$4$$ = $table$$10$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$4$$.length ? $$$$14$$($tableFooter$$4$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCell$$($columnIdx$$34$$) {
    var $tableFooterCells_tableFooterRow$$4$$ = this.$getTableFooterRow$(), $tableFooterCells_tableFooterRow$$4$$ = $$$$14$$($tableFooterCells_tableFooterRow$$4$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return $tableFooterCells_tableFooterRow$$4$$.length >= $columnIdx$$34$$ ? $$$$14$$($tableFooterCells_tableFooterRow$$4$$[$columnIdx$$34$$]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterRow$$() {
    if (!this.$_cachedDomTableFooterRow$) {
      var $tableFooter$$5$$ = this.$getTableFooter$();
      if (!$tableFooter$$5$$) {
        return null;
      }
      this.$_cachedDomTableFooterRow$ = $$$$14$$($tableFooter$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableFooterRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeader$$() {
    if (!this.$_cachedDomTableHeader$) {
      var $table$$11$$ = this.$getTable$(), $tableHeader$$4$$ = null;
      $table$$11$$ && ($tableHeader$$4$$ = $table$$11$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$4$$.length && (this.$_cachedDomTableHeader$ = $$$$14$$($tableHeader$$4$$.get(0)));
    }
    return this.$_cachedDomTableHeader$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumn$$($columnIdx$$35$$) {
    var $headerColumns$$ = this.$getTableHeaderColumns$();
    return $headerColumns$$ ? $headerColumns$$.length > $columnIdx$$35$$ ? $$$$14$$($headerColumns$$[$columnIdx$$35$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumnAccSelect$$($accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$) {
    $accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$ = this.$getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$);
    return null != $accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$ && ($accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$ = $accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$ && 0 < $accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$.length) ? $$$$14$$($accSelectionCell$$3_columnIdx$$36_headerColumn$$7$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumns$$() {
    var $headerColumnElements_tableHeaderRow$$3$$ = this.$getTableHeaderRow$();
    return null != $headerColumnElements_tableHeaderRow$$3$$ && ($headerColumnElements_tableHeaderRow$$3$$ = $headerColumnElements_tableHeaderRow$$3$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), null != $headerColumnElements_tableHeaderRow$$3$$ && 0 < $headerColumnElements_tableHeaderRow$$3$$.length) ? $headerColumnElements_tableHeaderRow$$3$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderRow$$() {
    if (!this.$_cachedDomTableHeaderRow$) {
      var $tableHeader$$5$$ = this.$getTableHeader$();
      if (!$tableHeader$$5$$) {
        return null;
      }
      this.$_cachedDomTableHeaderRow$ = $$$$14$$($tableHeader$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableHeaderRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getTableDivScroller$$() {
    if (!this.$_cachedDomTableDivScroller$) {
      var $tableContainer$$7_tableDivScroller$$1$$ = this.$getTableContainer$();
      $tableContainer$$7_tableDivScroller$$1$$ && ($tableContainer$$7_tableDivScroller$$1$$ = $tableContainer$$7_tableDivScroller$$1$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$7_tableDivScroller$$1$$.length && (this.$_cachedDomTableDivScroller$ = $$$$14$$($tableContainer$$7_tableDivScroller$$1$$.get(0)));
    }
    return this.$_cachedDomTableDivScroller$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableInlineMessage$$() {
    if (!this.$_cachedDomTableInlineMessage$) {
      var $inlineMessage$$3_tableContainer$$8$$ = this.$getTableContainer$();
      $inlineMessage$$3_tableContainer$$8$$ && ($inlineMessage$$3_tableContainer$$8$$ = $inlineMessage$$3_tableContainer$$8$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_INLINE_MESSAGE_CLASS$)) && 0 < $inlineMessage$$3_tableContainer$$8$$.length && (this.$_cachedDomTableInlineMessage$ = $$$$14$$($inlineMessage$$3_tableContainer$$8$$.get(0)));
    }
    return this.$_cachedDomTableInlineMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableNoDataRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableNoDataRow$$() {
    var $noDataRow$$1_tableBody$$11$$ = this.$getTableBody$();
    return $noDataRow$$1_tableBody$$11$$ && ($noDataRow$$1_tableBody$$11$$ = $noDataRow$$1_tableBody$$11$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_ROW_CLASS$)) && 0 < $noDataRow$$1_tableBody$$11$$.length ? $$$$14$$($noDataRow$$1_tableBody$$11$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableStatusMessage$$() {
    if (!this.$_cachedDomTableStatusMessage$) {
      var $statusMessage$$3_tableContainer$$9$$ = this.$getTableContainer$();
      $statusMessage$$3_tableContainer$$9$$ && ($statusMessage$$3_tableContainer$$9$$ = $statusMessage$$3_tableContainer$$9$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$9$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$14$$($statusMessage$$3_tableContainer$$9$$.get(0)));
    }
    return this.$_cachedDomTableStatusMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$hashCode$ = function $$oj$$14$$$$TableDomUtils$$$$hashCode$$($str$$19$$) {
    var $hash$$1$$ = 0;
    if (0 == $str$$19$$.length) {
      return $hash$$1$$;
    }
    var $charVal$$, $i$$251$$;
    for ($i$$251$$ = 0;$i$$251$$ < $str$$19$$.length;$i$$251$$++) {
      $charVal$$ = $str$$19$$.charCodeAt($i$$251$$), $hash$$1$$ = ($hash$$1$$ << 5) - $hash$$1$$ + $charVal$$, $hash$$1$$ &= $hash$$1$$;
    }
    return $hash$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyCell$$($rowIdx$$31_tableBodyCells$$3$$, $rowKey$$17$$, $accSelectionCell$$4_columnIdx$$37$$, $tableBodyCell$$6$$, $tableBodyRow$$16$$) {
    this.$setTableBodyCellAttributes$($rowIdx$$31_tableBodyCells$$3$$, $rowKey$$17$$, $accSelectionCell$$4_columnIdx$$37$$, $tableBodyCell$$6$$);
    $rowIdx$$31_tableBodyCells$$3$$ = $$$$14$$($tableBodyRow$$16$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    0 == $accSelectionCell$$4_columnIdx$$37$$ ? ($accSelectionCell$$4_columnIdx$$37$$ = $tableBodyRow$$16$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$4_columnIdx$$37$$ && 0 < $accSelectionCell$$4_columnIdx$$37$$.length ? $$$$14$$($accSelectionCell$$4_columnIdx$$37$$[0]).after($tableBodyCell$$6$$) : $tableBodyRow$$16$$.prepend($tableBodyCell$$6$$)) : $rowIdx$$31_tableBodyCells$$3$$.length >= $accSelectionCell$$4_columnIdx$$37$$ ? 
    $$$$14$$($rowIdx$$31_tableBodyCells$$3$$.get($accSelectionCell$$4_columnIdx$$37$$ - 1)).after($tableBodyCell$$6$$) : $$$$14$$($tableBodyRow$$16$$).append($tableBodyCell$$6$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyRow$$($rowIdx$$32$$, $tableBodyRow$$17$$, $row$$34_tableBody$$12$$, $docFrag$$2_tableBodyRows$$10$$) {
    this.$setTableBodyRowAttributes$($row$$34_tableBody$$12$$, $tableBodyRow$$17$$);
    null == $docFrag$$2_tableBodyRows$$10$$ ? ($row$$34_tableBody$$12$$ = this.$getTableBody$(), $docFrag$$2_tableBodyRows$$10$$ = $row$$34_tableBody$$12$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$), 0 == $rowIdx$$32$$ ? $row$$34_tableBody$$12$$.prepend($tableBodyRow$$17$$) : $docFrag$$2_tableBodyRows$$10$$.length >= $rowIdx$$32$$ ? $$$$14$$($docFrag$$2_tableBodyRows$$10$$.get($rowIdx$$32$$ - 1)).after($tableBodyRow$$17$$) : $row$$34_tableBody$$12$$.append($tableBodyRow$$17$$)) : 
    $docFrag$$2_tableBodyRows$$10$$.append($tableBodyRow$$17$$);
    this.$clearCachedDomRowData$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableFooterCell$$($columnIdx$$38$$, $tableFooterCell$$3$$) {
    var $tableFooterRow$$5$$ = this.$getTableFooterRow$(), $accFooterCell$$1_tableFooterCells$$1$$ = $$$$14$$($tableFooterRow$$5$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    0 == $columnIdx$$38$$ ? ($accFooterCell$$1_tableFooterCells$$1$$ = $tableFooterRow$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), null != $accFooterCell$$1_tableFooterCells$$1$$ && 0 < $accFooterCell$$1_tableFooterCells$$1$$.length ? $$$$14$$($accFooterCell$$1_tableFooterCells$$1$$[0]).after($tableFooterCell$$3$$) : $tableFooterRow$$5$$.prepend($tableFooterCell$$3$$)) : $tableFooterRow$$5$$.length >= $columnIdx$$38$$ ? $$$$14$$($accFooterCell$$1_tableFooterCells$$1$$.get($columnIdx$$38$$ - 
    1)).after($tableFooterCell$$3$$) : $tableFooterRow$$5$$.append($tableFooterCell$$3$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableHeaderColumn$$($columnIdx$$39$$, $tableHeaderColumn$$9$$) {
    var $tableHeaderRow$$4$$ = this.$getTableHeaderRow$(), $accSelectionColumn$$1_tableHeaderColumns$$1$$ = this.$getTableHeaderColumns$();
    this.$setTableHeaderColumnAttributes$($columnIdx$$39$$, $tableHeaderColumn$$9$$);
    var $oldTableHeaderColumn$$ = this.$getTableHeaderColumn$($columnIdx$$39$$);
    $oldTableHeaderColumn$$ ? $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$9$$) : 0 == $columnIdx$$39$$ ? ($accSelectionColumn$$1_tableHeaderColumns$$1$$ = $tableHeaderRow$$4$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$), null != $accSelectionColumn$$1_tableHeaderColumns$$1$$ && 0 < $accSelectionColumn$$1_tableHeaderColumns$$1$$.length ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$1$$[0]).after($tableHeaderColumn$$9$$) : $tableHeaderRow$$4$$.prepend($tableHeaderColumn$$9$$)) : 
    $accSelectionColumn$$1_tableHeaderColumns$$1$$.length >= $columnIdx$$39$$ ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$1$$.get($columnIdx$$39$$ - 1)).after($tableHeaderColumn$$9$$) : $tableHeaderRow$$4$$.append($tableHeaderColumn$$9$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$isDivScroller$$() {
    return this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isTableContainerScrollable$ = function $$oj$$14$$$$TableDomUtils$$$$isTableContainerScrollable$$() {
    var $tableContainer$$10$$ = this.$getTableContainer$(), $table$$12$$ = this.$getTable$(), $tableStatusMessage$$1$$ = this.$getTableStatusMessage$(), $tableStatusMessageDisplay$$ = $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$).toString();
    $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    var $result$$49$$ = [];
    $result$$49$$[0] = 0 < $tableContainer$$10$$[0].clientHeight ? $table$$12$$[0].clientHeight > $tableContainer$$10$$[0].clientHeight ? 1 : 1 < $tableContainer$$10$$[0].clientHeight - $table$$12$$[0].clientHeight ? -1 : 0 : 0;
    $result$$49$$[1] = 0 < $tableContainer$$10$$[0].clientWidth ? $table$$12$$[0].clientWidth > $tableContainer$$10$$[0].clientWidth ? 1 : 1 < $tableContainer$$10$$[0].clientWidth - $table$$12$$[0].clientWidth ? -1 : 0 : 0;
    $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $tableStatusMessageDisplay$$);
    return $result$$49$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$refreshContextMenu$$() {
    var $self$$110$$ = this, $menuContainer$$2$$ = this.$_menuContainer$;
    $menuContainer$$2$$ && 0 < $menuContainer$$2$$.length && $menuContainer$$2$$.find("[data-oj-command]").each(function() {
      var $contextMenuLabel$$1$$ = $$$$14$$(this).children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$);
      if (0 < $contextMenuLabel$$1$$.length) {
        var $command$$11$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $command$$11$$ = $command$$11$$[$command$$11$$.length - 1], $commandString$$1$$;
        "sort" == $command$$11$$ ? $commandString$$1$$ = $self$$110$$.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$11$$ ? $commandString$$1$$ = $self$$110$$.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$11$$ && ($commandString$$1$$ = $self$$110$$.$component$.$getTranslatedString$("labelSortDsc"));
        $contextMenuLabel$$1$$.contents().filter(function() {
          return 3 === this.nodeType;
        })[0].nodeValue = $commandString$$1$$;
      }
    });
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableDimensions$$($width$$19$$, $height$$15$$) {
    this.$_refreshTableDimensions$($width$$19$$, $height$$15$$);
    this.$component$.$_setCurrentRow$(this.options.currentRow, null);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableBodyRow$$($rowIdx$$33_tableBodyRow$$18$$) {
    $rowIdx$$33_tableBodyRow$$18$$ = this.$getTableBodyRow$($rowIdx$$33_tableBodyRow$$18$$);
    null != $rowIdx$$33_tableBodyRow$$18$$ && ($oj$$14$$.Components.$subtreeDetached$($rowIdx$$33_tableBodyRow$$18$$[0]), $rowIdx$$33_tableBodyRow$$18$$.remove(), this.$clearCachedDomRowData$());
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCell$$($rowIdx$$34$$, $columnIdx$$40$$, $tableBodyRow$$19$$, $row$$35$$, $cellColumnContent_cellRenderer$$1$$, $data$$130_isNew$$3$$) {
    var $cellContext_column$$18$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$40$$], $tableBodyCell$$7$$ = null;
    $data$$130_isNew$$3$$ || ($tableBodyCell$$7$$ = this.$getTableBodyCell$($rowIdx$$34$$, $columnIdx$$40$$, $tableBodyRow$$19$$));
    $tableBodyCell$$7$$ ? ($tableBodyCell$$7$$.empty(), this.$styleTableBodyCell$($columnIdx$$40$$, $tableBodyCell$$7$$, !1)) : ($tableBodyCell$$7$$ = this.$createTableBodyCell$(), this.$styleTableBodyCell$($columnIdx$$40$$, $tableBodyCell$$7$$, !0), this.$insertTableBodyCell$($rowIdx$$34$$, $row$$35$$.key, $columnIdx$$40$$, $tableBodyCell$$7$$, $tableBodyRow$$19$$));
    $data$$130_isNew$$3$$ = null;
    null != $cellContext_column$$18$$.field && ($data$$130_isNew$$3$$ = $row$$35$$.data[$cellContext_column$$18$$.field]);
    $cellColumnContent_cellRenderer$$1$$ ? ($cellContext_column$$18$$ = this.$getRendererContextObject$($row$$35$$, $tableBodyCell$$7$$[0]), $cellColumnContent_cellRenderer$$1$$ = $cellColumnContent_cellRenderer$$1$$({cellContext:$cellContext_column$$18$$, columnIndex:$columnIdx$$40$$, data:$data$$130_isNew$$3$$, row:$$$$14$$.extend({}, $row$$35$$.data)}), null != $cellColumnContent_cellRenderer$$1$$ ? $tableBodyCell$$7$$.append($cellColumnContent_cellRenderer$$1$$) : ($tableBodyCell$$7$$ = $$$$14$$($tableBodyRow$$19$$.children(":not(." + 
    $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + ")")[$columnIdx$$40$$]), this.$setTableBodyCellAttributes$($rowIdx$$34$$, $row$$35$$.key, $columnIdx$$40$$, $tableBodyCell$$7$$), this.$styleTableBodyCell$($columnIdx$$40$$, $tableBodyCell$$7$$, !1))) : $tableBodyCell$$7$$.text($data$$130_isNew$$3$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCellAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCellAttributes$$($cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$, $headers$$4_rowKey$$18$$, $column$$19_columnIdx$$41$$, $tableBodyCell$$8$$) {
    var $accessibility$$ = this.options.accessibility;
    $column$$19_columnIdx$$41$$ = this.$component$.$_getColumnDefs$()[$column$$19_columnIdx$$41$$];
    var $rowHeaderColumnId$$ = null, $isTableHeaderless$$2$$ = null == this.$getTableHeader$() ? !0 : !1, $rowHeaderColumnId$$ = null != $accessibility$$ && null != $accessibility$$.rowHeader ? $accessibility$$.rowHeader : this.$component$.$_getColumnDefs$()[0].id;
    $cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$ = null != $headers$$4_rowKey$$18$$ ? $headers$$4_rowKey$$18$$.toString() : $cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$.toString();
    $cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$ = this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + ":" + $rowHeaderColumnId$$ + "_" + this.$hashCode$($cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$);
    $headers$$4_rowKey$$18$$ = this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + ":" + $column$$19_columnIdx$$41$$.id;
    $rowHeaderColumnId$$ == $column$$19_columnIdx$$41$$.id ? ($tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, $cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$), $isTableHeaderless$$2$$ && ($headers$$4_rowKey$$18$$ = "")) : $headers$$4_rowKey$$18$$ = $isTableHeaderless$$2$$ ? $cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$ : $headers$$4_rowKey$$18$$ + " " + $cellRowHeaderId_rowIdx$$35_rowKeyStr$$1$$;
    $tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$) || $tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$, $headers$$4_rowKey$$18$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyRowAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyRowAttributes$$($row$$36$$, $tableBodyRow$$20$$) {
    $tableBodyRow$$20$$.data("rowKey", $row$$36$$.key);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableHeaderColumnAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableHeaderColumnAttributes$$($columnIdx$$42$$, $tableHeaderColumn$$10$$) {
    var $column$$20$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$42$$];
    $tableHeaderColumn$$10$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) || $tableHeaderColumn$$10$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) + ":" + $column$$20$$.id);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$setTableInlineMessage$$($summary$$22$$, $detail$$25$$, $severityLevel$$3$$) {
    var $inlineMessage$$4$$ = this.$getTableInlineMessage$();
    $inlineMessage$$4$$.empty();
    $inlineMessage$$4$$.append($oj$$14$$.$PopupMessagingStrategyUtils$.$buildMessageHtml$(document, $summary$$22$$, $detail$$25$$, $severityLevel$$3$$, null));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$styleInitialTable$$() {
    var $table$$13$$ = this.$getTable$(), $tableContainer$$11$$ = this.$getTableContainer$(), $tableHeader$$6$$ = $table$$13$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_THEAD$), $tableHeader$$6$$ = 0 < $tableHeader$$6$$.length ? $$$$14$$($tableHeader$$6$$[0]) : null, $tableFooter$$6$$ = $table$$13$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TFOOT$), $tableFooter$$6$$ = 0 < $tableFooter$$6$$.length ? $$$$14$$($tableFooter$$6$$[0]) : null, $tableBody$$13$$ = $table$$13$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TBODY$), 
    $tableBody$$13$$ = 0 < $tableBody$$13$$.length ? $$$$14$$($tableBody$$13$$[0]) : null;
    $table$$13$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "0");
    this.$component$._focusable($table$$13$$);
    this.$component$._focusable($tableContainer$$11$$);
    this.$styleTableHeader$($tableHeader$$6$$);
    this.$styleTableFooter$($tableFooter$$6$$);
    this.$styleTableBody$($tableBody$$13$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBody$$($tableBody$$14$$) {
    $tableBody$$14$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
    $tableBody$$14$$.attr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$, this.$component$.widgetName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyCell$$($column$$21_columnIdx$$43$$, $tableBodyCell$$9$$, $isNew$$4$$) {
    var $options$$287$$ = this.options;
    $column$$21_columnIdx$$43$$ = this.$component$.$_getColumnDefs$()[$column$$21_columnIdx$$43$$];
    if ($isNew$$4$$ || !$tableBodyCell$$9$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$)) {
      $tableBodyCell$$9$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$), null == $column$$21_columnIdx$$43$$.style || !$isNew$$4$$ && $tableBodyCell$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$) == $column$$21_columnIdx$$43$$.style || $tableBodyCell$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$21_columnIdx$$43$$.style), null == $column$$21_columnIdx$$43$$.className || !$isNew$$4$$ && $tableBodyCell$$9$$.hasClass($column$$21_columnIdx$$43$$.className) || 
      $tableBodyCell$$9$$.addClass($column$$21_columnIdx$$43$$.className);
    }
    $options$$287$$.verticalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && (!$isNew$$4$$ && $tableBodyCell$$9$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) || $tableBodyCell$$9$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyRow$$($tableBodyRow$$21$$, $isNew$$5$$) {
    !$isNew$$5$$ && $tableBodyRow$$21$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && (!$isNew$$5$$ && $tableBodyRow$$21$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $tableBodyRow$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableContainer$$($tableContainer$$12$$) {
    $tableContainer$$12$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    $tableContainer$$12$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
    $tableContainer$$12$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WIDGET$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooter$$($tableFooter$$7$$) {
    $tableFooter$$7$$ && ($tableFooter$$7$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$), $$$$14$$($tableFooter$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$)[0]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooterCell$$($columnIdx$$44$$, $tableFooterCell$$4$$) {
    var $options$$288$$ = this.options, $lastColumn$$ = $columnIdx$$44$$ == this.$component$.$_getColumnDefs$().length - 1 ? !0 : !1, $column$$22$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$44$$];
    $tableFooterCell$$4$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$22$$.footerStyle);
    $tableFooterCell$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$) || $tableFooterCell$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    $options$$288$$.verticalGridVisible != $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || $lastColumn$$ || $tableFooterCell$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$);
    $column$$22$$.footerClassName && $tableFooterCell$$4$$.addClass($column$$22$$.footerClassName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeader$$($tableHeader$$7_tableHeaderRow$$5$$) {
    $tableHeader$$7_tableHeaderRow$$5$$ && ($tableHeader$$7_tableHeaderRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$), $tableHeader$$7_tableHeaderRow$$5$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "table-header-group"), $tableHeader$$7_tableHeaderRow$$5$$ = $$$$14$$($tableHeader$$7_tableHeaderRow$$5$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$)[0]), $tableHeader$$7_tableHeaderRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$), 
    $tableHeader$$7_tableHeaderRow$$5$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeaderColumn$$($column$$23_columnIdx$$45$$, $tableHeaderColumn$$11$$, $isNew$$6$$) {
    $column$$23_columnIdx$$45$$ = this.$component$.$_getColumnDefs$()[$column$$23_columnIdx$$45$$];
    if ($isNew$$6$$ || !$tableHeaderColumn$$11$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$)) {
      $tableHeaderColumn$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), null == $column$$23_columnIdx$$45$$.headerStyle || !$isNew$$6$$ && $tableHeaderColumn$$11$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$) == $column$$23_columnIdx$$45$$.headerStyle || $tableHeaderColumn$$11$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$23_columnIdx$$45$$.headerStyle), null == $column$$23_columnIdx$$45$$.headerClassName || !$isNew$$6$$ && $tableHeaderColumn$$11$$.hasClass($column$$23_columnIdx$$45$$.headerClassName) || 
      $tableHeaderColumn$$11$$.addClass($column$$23_columnIdx$$45$$.headerClassName);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isIE$ = function $$oj$$14$$$$TableDomUtils$$$$_isIE$$() {
    if ("undefined" == typeof this.$_browserIsIE$) {
      var $resultArray_userAgent$$2$$ = navigator.userAgent;
      "Microsoft Internet Explorer" == navigator.appName ? ($resultArray_userAgent$$2$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec($resultArray_userAgent$$2$$), null != $resultArray_userAgent$$2$$ && (this.$_browserIsIE$ = parseFloat($resultArray_userAgent$$2$$[1]))) : 0 <= $resultArray_userAgent$$2$$.indexOf("Trident") ? this.$_browserIsIE$ = 11 : this.$_browserIsIE$ = null;
    }
    return this.$_browserIsIE$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isWebkit$ = function $$oj$$14$$$$TableDomUtils$$$$_isWebkit$$() {
    "undefined" == typeof this.$_browserIsWebkit$ && (this.$_browserIsWebkit$ = /webkit/.test(navigator.userAgent.toLowerCase()));
    return this.$_browserIsWebkit$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableDimensions$$($width$$20$$, $height$$16$$) {
    var $caption_table$$14_tableHeaderHeight$$ = this.$getTable$(), $tableDivScroller$$2_tableHeader$$8$$ = this.$getTableHeader$(), $tableFooter$$8$$ = this.$getTableFooter$(), $tableBodyHeight_tableFooterRow$$7$$ = this.$getTableFooterRow$(), $tableFooterHeight_tableHeaderRow$$6$$ = this.$getTableHeaderRow$(), $tableContainer$$13$$ = this.$getTableContainer$(), $tableBody$$15$$ = this.$getTableBody$();
    if (this.$_ignoreNextResize$) {
      this.$_ignoreNextResize$ = !1;
    } else {
      var $scrollTop$$2$$ = null, $scrollLeft$$2$$ = null;
      if (null != this.$getScroller$()) {
        var $maxScrollTop$$2_tableContainerScrollableState$$ = this.$getScroller$()[0].scrollHeight - this.$getScroller$()[0].clientHeight, $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ = this.$getScroller$()[0].scrollWidth - this.$getScroller$()[0].clientWidth;
        0 < $maxScrollTop$$2_tableContainerScrollableState$$ && ($scrollTop$$2$$ = this.$getScroller$()[0].scrollTop);
        0 < $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ && ($scrollLeft$$2$$ = this.$getScroller$()[0].scrollLeft);
      }
      this.$_removeTableDimensionsStyling$();
      this.$styleTableContainer$($tableContainer$$13$$);
      $maxScrollTop$$2_tableContainerScrollableState$$ = this.$isTableContainerScrollable$();
      this.$_tableHeightConstrained$ = 1 === $maxScrollTop$$2_tableContainerScrollableState$$[0] ? !0 : !1;
      this.$_tableWidthConstrained$ = 1 === $maxScrollTop$$2_tableContainerScrollableState$$[1] ? !0 : !1;
      if (null != $tableBody$$15$$) {
        if (this.$_tableHeightConstrained$ || this.$_tableWidthConstrained$) {
          this.$_tableDimensions$ || (this.$_tableDimensions$ = {});
          0 < $width$$20$$ || 0 < $height$$16$$ ? (0 < $width$$20$$ && this.$_tableWidthConstrained$ && (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] = $width$$20$$), 0 < $height$$16$$ && this.$_tableHeightConstrained$ && (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] = $height$$16$$)) : (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] = this.$_tableHeightConstrained$ ? $tableContainer$$13$$[0].offsetHeight : 0, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] = 
          this.$_tableWidthConstrained$ ? $tableContainer$$13$$[0].offsetWidth : 0);
          this.$_tableBorderWidth$ || (this.$_tableBorderWidth$ = $tableContainer$$13$$.outerWidth() - $tableContainer$$13$$.innerWidth());
          this.$_tableBorderHeight$ || (this.$_tableBorderHeight$ = $tableContainer$$13$$.outerHeight() - $tableContainer$$13$$.innerHeight());
          $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ = 0;
          this.$_tableHeightConstrained$ && !this.$_tableWidthConstrained$ && ($tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ = $tableContainer$$13$$.get(0).offsetWidth - $tableContainer$$13$$.get(0).clientWidth, 0 < this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] ? $caption_table$$14_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, 
          $tableContainer$$13$$.get(0).clientWidth + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : ($caption_table$$14_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$13$$.get(0).scrollWidth + $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $maxScrollTop$$2_tableContainerScrollableState$$ = this.$isTableContainerScrollable$(), 1 === $maxScrollTop$$2_tableContainerScrollableState$$[1] && $caption_table$$14_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, 
          $tableContainer$$13$$.get(0).clientWidth + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, ""), this.$_ignoreNextResize$ = !0);
          var $tableBodyRows$$11_tableHeaderWidth_tableWidth$$ = $caption_table$$14_tableHeaderHeight$$.width();
          this.$_setColumnWidths$();
          var $captionHeight$$ = 0, $caption_table$$14_tableHeaderHeight$$ = $caption_table$$14_tableHeaderHeight$$.children("caption");
          null != $caption_table$$14_tableHeaderHeight$$ && 0 < $caption_table$$14_tableHeaderHeight$$.length && ($captionHeight$$ = $$$$14$$($caption_table$$14_tableHeaderHeight$$[0]).outerHeight(), $caption_table$$14_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_INLINE$), null != $tableDivScroller$$2_tableHeader$$8$$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_TOP$, $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_TOP$).toString()));
          $caption_table$$14_tableHeaderHeight$$ = 0;
          null != $tableDivScroller$$2_tableHeader$$8$$ && ($tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), this.$isDivScroller$() ? ($tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, "0px")) : $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, 
          $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $tableFooterHeight_tableHeaderRow$$6$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableFooterHeight_tableHeaderRow$$6$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $caption_table$$14_tableHeaderHeight$$ = $tableDivScroller$$2_tableHeader$$8$$.outerHeight());
          this.$isDivScroller$() && $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_TOP$, $caption_table$$14_tableHeaderHeight$$ + $captionHeight$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
          $tableFooterHeight_tableHeaderRow$$6$$ = 0;
          null != $tableFooter$$8$$ && (this.$isDivScroller$() ? ($tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, "0px")) : $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), 
          $tableBodyHeight_tableFooterRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$));
          $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$);
          $tableBodyHeight_tableFooterRow$$7$$ = 0;
          this.$isDivScroller$() || ($tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), this.$_tableWidthConstrained$ ? $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] - this.$_tableBorderWidth$) : 0 < $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ && 
          $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableBodyRows$$11_tableHeaderWidth_tableWidth$$ - this.$_tableBorderWidth$ + $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$), $tableBody$$15$$.width(), null != $tableFooter$$8$$ && ($tableFooterHeight_tableHeaderRow$$6$$ = $tableFooter$$8$$.outerHeight(), $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, -1 * $tableFooterHeight_tableHeaderRow$$6$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), 
          this.$_tableHeightConstrained$ ? ($tableBodyHeight_tableFooterRow$$7$$ = this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] - $caption_table$$14_tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$6$$ - $captionHeight$$ - this.$_tableBorderHeight$, 0 < $tableBodyHeight_tableFooterRow$$7$$ && ($tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_HEIGHT$, 
          $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$))) : $tableBodyHeight_tableFooterRow$$7$$ = $tableBody$$15$$.outerHeight(), $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ = this.$getScrollbarWidth$(), this.$_tableWidthConstrained$ ? ($tableBodyRows$$11_tableHeaderWidth_tableWidth$$ = this.$getTableBodyRows$(), null != $tableBodyRows$$11_tableHeaderWidth_tableWidth$$ && 0 < $tableBodyRows$$11_tableHeaderWidth_tableWidth$$.length ? ($tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, 
          $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), null != $tableDivScroller$$2_tableHeader$$8$$ && ($tableBodyRows$$11_tableHeaderWidth_tableWidth$$ = this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] - this.$_tableBorderWidth$, 0 < $tableBodyRows$$11_tableHeaderWidth_tableWidth$$ && (0 < $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ ? 
          $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableBodyRows$$11_tableHeaderWidth_tableWidth$$ - $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableBodyRows$$11_tableHeaderWidth_tableWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)))) : ($tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, 
          $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$))) : $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$));
          this.$isDivScroller$() && ($tableDivScroller$$2_tableHeader$$8$$ = this.$getTableDivScroller$(), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), this.$_tableWidthConstrained$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$]), this.$_tableHeightConstrained$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, 
          this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] - $caption_table$$14_tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$6$$), $tableBody$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_FLOAT$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_LEFT$), $tableContainer$$13$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$));
          null != $tableFooter$$8$$ && (this.$isDivScroller$() || $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
        }
        this.$_setHeaderColumnOverflowWidths$();
        this.$_removeTableBodyRowBottomBorder$(0 > $maxScrollTop$$2_tableContainerScrollableState$$[0]);
        this.$refreshTableStatusPosition$();
        null != $scrollTop$$2$$ && ($maxScrollTop$$2_tableContainerScrollableState$$ = this.$getScroller$()[0].scrollHeight - this.$getScroller$()[0].clientHeight, $scrollTop$$2$$ = $scrollTop$$2$$ > $maxScrollTop$$2_tableContainerScrollableState$$ ? $maxScrollTop$$2_tableContainerScrollableState$$ : $scrollTop$$2$$, this.$component$.$_isLoadMoreOnScroll$() && $maxScrollTop$$2_tableContainerScrollableState$$ == $scrollTop$$2$$ && $scrollTop$$2$$--, this.$getScroller$()[0].scrollTop = $scrollTop$$2$$);
        null != $scrollLeft$$2$$ && ($maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ = this.$getScroller$()[0].scrollWidth - this.$getScroller$()[0].clientWidth, $scrollLeft$$2$$ = $scrollLeft$$2$$ > $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ ? $maxScrollLeft$$2_scrollbarWidth$$2_tableContainerScrollbarWidth$$ : $scrollLeft$$2$$, this.$getScroller$()[0].scrollLeft = $scrollLeft$$2$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableStatusPosition$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableStatusPosition$$() {
    var $isRTL$$4_tableContainer$$14$$ = this.$getTableContainer$(), $tableBody$$16_tableStatusMessageText$$ = this.$getTableBody$(), $msgTextOptions_tableStatusMessage$$2$$ = this.$getTableStatusMessage$(), $options$$290_overTableElement$$ = $isRTL$$4_tableContainer$$14$$;
    0 < $tableBody$$16_tableStatusMessageText$$.height() && ($options$$290_overTableElement$$ = $tableBody$$16_tableStatusMessageText$$);
    $msgTextOptions_tableStatusMessage$$2$$ && $msgTextOptions_tableStatusMessage$$2$$[0].offsetParent && ($msgTextOptions_tableStatusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, $tableBody$$16_tableStatusMessageText$$.height() + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $msgTextOptions_tableStatusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableBody$$16_tableStatusMessageText$$.width() + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $tableBody$$16_tableStatusMessageText$$ = 
    $$$$14$$($msgTextOptions_tableStatusMessage$$2$$[0].children[0]), $isRTL$$4_tableContainer$$14$$ = "rtl" === this.$component$.$_GetReadingDirection$(), $options$$290_overTableElement$$ = {my:"center", at:"center", collision:"none", of:$options$$290_overTableElement$$}, $options$$290_overTableElement$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($options$$290_overTableElement$$, $isRTL$$4_tableContainer$$14$$), $msgTextOptions_tableStatusMessage$$2$$.position($options$$290_overTableElement$$), 
    $msgTextOptions_tableStatusMessage$$2$$ = {my:"center", at:"center", collision:"none", of:$msgTextOptions_tableStatusMessage$$2$$}, $msgTextOptions_tableStatusMessage$$2$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($msgTextOptions_tableStatusMessage$$2$$, $isRTL$$4_tableContainer$$14$$), $tableBody$$16_tableStatusMessageText$$.position($msgTextOptions_tableStatusMessage$$2$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeHeaderColumnAndCellColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_removeHeaderColumnAndCellColumnWidths$$() {
    var $columns$$16$$ = this.$component$.$_getColumnDefs$(), $i$$252_tableBodyRows$$12$$, $headerColumn$$8_tableBodyCell$$10$$;
    for ($i$$252_tableBodyRows$$12$$ = 0;$i$$252_tableBodyRows$$12$$ < $columns$$16$$.length;$i$$252_tableBodyRows$$12$$++) {
      $headerColumn$$8_tableBodyCell$$10$$ = this.$getTableHeaderColumn$($i$$252_tableBodyRows$$12$$), null != $headerColumn$$8_tableBodyCell$$10$$ && $headerColumn$$8_tableBodyCell$$10$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, "");
    }
    $i$$252_tableBodyRows$$12$$ = this.$getTableBodyRows$();
    if (null != $i$$252_tableBodyRows$$12$$ && 0 < $i$$252_tableBodyRows$$12$$.length) {
      for ($i$$252_tableBodyRows$$12$$ = 0;$i$$252_tableBodyRows$$12$$ < $columns$$16$$.length;$i$$252_tableBodyRows$$12$$++) {
        $headerColumn$$8_tableBodyCell$$10$$ = this.$getTableBodyCell$(0, $i$$252_tableBodyRows$$12$$, null), null != $headerColumn$$8_tableBodyCell$$10$$ && $headerColumn$$8_tableBodyCell$$10$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, "");
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableBodyRowBottomBorder$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableBodyRowBottomBorder$$($underflow$$) {
    if (this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$) {
      var $lastTableBodyRow_tableBodyRows$$13$$ = this.$getTableBodyRows$();
      if (null != $lastTableBodyRow_tableBodyRows$$13$$ && 0 < $lastTableBodyRow_tableBodyRows$$13$$.length) {
        var $i$$253$$;
        for ($i$$253$$ = 0;$i$$253$$ < $lastTableBodyRow_tableBodyRows$$13$$.length;$i$$253$$++) {
          $$$$14$$($lastTableBodyRow_tableBodyRows$$13$$[$i$$253$$]).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $$$$14$$($lastTableBodyRow_tableBodyRows$$13$$[$i$$253$$]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
        }
        $lastTableBodyRow_tableBodyRows$$13$$ = $$$$14$$($lastTableBodyRow_tableBodyRows$$13$$[$lastTableBodyRow_tableBodyRows$$13$$.length - 1]);
        $underflow$$ || $lastTableBodyRow_tableBodyRows$$13$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableDimensionsStyling$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableDimensionsStyling$$() {
    var $table$$15$$ = this.$getTable$(), $headerColumnTextDivs_tableHeader$$9$$ = this.$getTableHeader$(), $i$$254_tableHeaderRow$$7$$ = this.$getTableHeaderRow$(), $tableFooter$$9$$ = this.$getTableFooter$(), $tableFooterRow$$8$$ = this.$getTableFooterRow$(), $tableBody$$17$$ = this.$getTableBody$();
    if (null != $headerColumnTextDivs_tableHeader$$9$$ && ($headerColumnTextDivs_tableHeader$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), $i$$254_tableHeaderRow$$7$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), ($headerColumnTextDivs_tableHeader$$9$$ = $i$$254_tableHeaderRow$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDivs_tableHeader$$9$$.length)) {
      for ($i$$254_tableHeaderRow$$7$$ = 0;$i$$254_tableHeaderRow$$7$$ < $headerColumnTextDivs_tableHeader$$9$$.length;$i$$254_tableHeaderRow$$7$$++) {
        $$$$14$$($headerColumnTextDivs_tableHeader$$9$$[$i$$254_tableHeaderRow$$7$$]).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, "");
      }
    }
    null != $tableFooter$$9$$ && ($tableFooter$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), $tableFooterRow$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""));
    $table$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "");
    $table$$15$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, "");
    null != $tableBody$$17$$ && $tableBody$$17$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, "");
    this.$_removeHeaderColumnAndCellColumnWidths$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setColumnWidths$$() {
    var $columns$$17$$ = this.$component$.$_getColumnDefs$(), $columnWidths$$ = [], $columnPaddingWidths$$ = [], $i$$255_tableBodyRows$$14$$, $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$, $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$, $headerColumnTextDiv$$;
    for ($i$$255_tableBodyRows$$14$$ = 0;$i$$255_tableBodyRows$$14$$ < $columns$$17$$.length;$i$$255_tableBodyRows$$14$$++) {
      $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ = this.$getTableHeaderColumn$($i$$255_tableBodyRows$$14$$), null != $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ && ($adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.width(), this.$_isWebkit$() ? ($columnWidths$$[$i$$255_tableBodyRows$$14$$] = parseInt(window.getComputedStyle($adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$[0])[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$], 
      10), 0 == $i$$255_tableBodyRows$$14$$ && ($columnWidths$$[$i$$255_tableBodyRows$$14$$] += 1)) : $columnWidths$$[$i$$255_tableBodyRows$$14$$] = $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.width(), $columnPaddingWidths$$[$i$$255_tableBodyRows$$14$$] = parseInt($adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 10) + parseInt($adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 
      10), $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ = null, ($headerColumnTextDiv$$ = $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$.length && ($footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ = $headerColumnTextDiv$$.get(0).clientHeight), null != $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ && ($adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ = 
      $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_HEIGHT$, $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)));
    }
    for ($i$$255_tableBodyRows$$14$$ = 0;$i$$255_tableBodyRows$$14$$ < $columns$$17$$.length;$i$$255_tableBodyRows$$14$$++) {
      $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ = this.$getTableHeaderColumn$($i$$255_tableBodyRows$$14$$), null != $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ && $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, $columnWidths$$[$i$$255_tableBodyRows$$14$$] + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ = 
      this.$getTableFooterCell$($i$$255_tableBodyRows$$14$$), null != $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ && (this.$_isWebkit$() && 0 == $i$$255_tableBodyRows$$14$$ ? $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, $columnWidths$$[$i$$255_tableBodyRows$$14$$] - 1 + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $columnWidths$$[$i$$255_tableBodyRows$$14$$] + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
    }
    $i$$255_tableBodyRows$$14$$ = this.$getTableBodyRows$();
    if (null != $i$$255_tableBodyRows$$14$$ && 0 < $i$$255_tableBodyRows$$14$$.length) {
      for ($i$$255_tableBodyRows$$14$$ = 0;$i$$255_tableBodyRows$$14$$ < $columns$$17$$.length;$i$$255_tableBodyRows$$14$$++) {
        $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ = this.$getTableBodyCell$(0, $i$$255_tableBodyRows$$14$$, null), null != $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$ && ($footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$.width(), $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ = parseInt($footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 10) + parseInt($footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 
        10), this.$_isWebkit$() && 0 == $i$$255_tableBodyRows$$14$$ && ($columnWidths$$[$i$$255_tableBodyRows$$14$$] -= 1), $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ = $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ > $columnPaddingWidths$$[$i$$255_tableBodyRows$$14$$] ? $columnWidths$$[$i$$255_tableBodyRows$$14$$] - $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ + $columnPaddingWidths$$[$i$$255_tableBodyRows$$14$$] : 
        $columnWidths$$[$i$$255_tableBodyRows$$14$$] + $columnPaddingWidths$$[$i$$255_tableBodyRows$$14$$] - $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$, $footerCell$$1_headerColumnTextDivHeight_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, $adjustedColumnWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCellPaddingWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setHeaderColumnOverflowWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setHeaderColumnOverflowWidths$$() {
    var $columns$$18$$ = this.$component$.$_getColumnDefs$(), $i$$256$$, $column$$24_headerColumnTextDivWidth$$, $headerColumnCell$$2_newHeaderColumnTextDivWidth$$, $headerColumnDiv$$1$$, $headerColumnTextDiv$$1$$, $sortPlaceHolderDivWidth$$;
    for ($i$$256$$ = 0;$i$$256$$ < $columns$$18$$.length;$i$$256$$++) {
      $column$$24_headerColumnTextDivWidth$$ = $columns$$18$$[$i$$256$$], $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ = this.$getTableHeaderColumn$($i$$256$$), null != $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ && ($headerColumnDiv$$1$$ = $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), 0 < $headerColumnDiv$$1$$.length && ($headerColumnDiv$$1$$ = $$$$14$$($headerColumnDiv$$1$$[0]), ($headerColumnTextDiv$$1$$ = 
      $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$1$$.length && ($sortPlaceHolderDivWidth$$ = 0, $column$$24_headerColumnTextDivWidth$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($sortPlaceHolderDivWidth$$ = $$$$14$$($headerColumnCell$$2_newHeaderColumnTextDivWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$).get(0)).width()), 
      0 < $headerColumnDiv$$1$$[0].clientWidth && $headerColumnTextDiv$$1$$.width() + $sortPlaceHolderDivWidth$$ > $headerColumnDiv$$1$$[0].clientWidth && ($headerColumnTextDiv$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, ""), $column$$24_headerColumnTextDivWidth$$ = $headerColumnTextDiv$$1$$.width(), $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ = $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.width() - $sortPlaceHolderDivWidth$$, $column$$24_headerColumnTextDivWidth$$ > $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ + 
      1 && $headerColumnTextDiv$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)))));
    }
  };
  $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$ = {$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_ELEMENT_CLASS$:"oj-table-element", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_FOOTER_ROW_CLASS$:"oj-table-footer-row", $_TABLE_HEADER_CLASS$:"oj-table-header", $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", 
  $_COLUMN_HEADER_CELL_CLASS$:"oj-table-column-header-cell", $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_CLASS$:"oj-table-column-header", $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$:"oj-table-column-header-sort-placeholder", 
  $_COLUMN_HEADER_ACC_ASC_LINK_CLASS$:"oj-table-column-header-acc-asc-link", $_COLUMN_HEADER_ACC_DSC_LINK_CLASS$:"oj-table-column-header-acc-dsc-link", $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", 
  $_TABLE_DATA_CURRENT_ROW_CLASS$:"oj-table-body-current-row", $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_VGRID_LINES_CLASS$:"oj-table-vgrid-lines", $_TABLE_HGRID_LINES_CLASS$:"oj-table-hgrid-lines", $_TABLE_FOOTER_CELL_CLASS$:"oj-table-footer-cell", $_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$:"oj-table-footer-cell-vgrid-lines", $_TABLE_INLINE_MESSAGE_CLASS$:"oj-table-inline-message", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", 
  $_TABLE_STATUS_MESSAGE_TEXT_CLASS$:"oj-table-status-message-text", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_TABLE_NO_DATA_ROW_CLASS$:"oj-table-no-data-row", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"};
  $oj$$14$$.$TableDomUtils$.$CSS_PROP$ = {$_DISPLAY$:"display", $_POSITION$:"position", $_HEIGHT$:"height", $_WIDTH$:"width", $_TOP$:"top", $_BOTTOM$:"bottom", $_LEFT$:"left", $_RIGHT$:"right", $_PADDING_TOP$:"padding-top", $_PADDING_LEFT$:"padding-left", $_PADDING_RIGHT$:"padding-right", $_OVERFLOW$:"overflow", $_OVERFLOW_X$:"overflow-x", $_OVERFLOW_Y$:"overflow-y", $_MIN_WIDTH$:"min-width", $_MIN_HEIGHT$:"min-height", $_FLOAT$:"float", $_BORDER_TOP$:"border-top", $_BORDER_BOTTOM_WIDTH$:"border-bottom-width", 
  $_BORDER_LEFT_WIDTH$:"border-left-width", $_MARGIN_BOTTOM$:"margin-bottom"};
  $oj$$14$$.$TableDomUtils$.$CSS_VAL$ = {$_NONE$:"none", $_BLOCK$:"block", $_RELATIVE$:"relative", $_ABSOLUTE$:"absolute", $_INLINE$:"inline", $_AUTO$:"auto", $_HIDDEN$:"hidden", $_LEFT$:"left", $_PX$:"px"};
  $oj$$14$$.$TableDomUtils$.$DOM_ATTR$ = {$_STYLE$:"style", $_TABINDEX$:"tabindex", $_TYPE$:"type", $_ID$:"id", $_TITLE$:"title", $_HREF$:"href", $_HEADERS$:"headers", $_COLSPAN$:"colspan"};
  $oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$ = {$_DIV$:"div", $_A$:"a", $_TR$:"tr", $_TD$:"td", $_TH$:"th", $_TBODY$:"tbody", $_THEAD$:"thead", $_TFOOT$:"tfoot", $_INPUT$:"input", $_UL$:"ul"};
  $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$ = {$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon-nocontext", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected", $_WARNING$:"oj-warning"};
  $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ = "_hdrColRowSel";
  $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ = "enabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISABLED$ = "disabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$ = {$_SINGLE$:"single", $_MULTIPLE$:"multiple"};
  $oj$$14$$.$TableRendererUtils$ = {};
  $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderDefaultRenderer$$($context$$52_headerColumnDiv$$2$$, $headerContentDiv$$1_options$$291_parentElement$$2$$, $delegateRenderer$$2$$) {
    $headerContentDiv$$1_options$$291_parentElement$$2$$ = $$$$14$$($context$$52_headerColumnDiv$$2$$.headerContext.parentElement);
    $context$$52_headerColumnDiv$$2$$ = $$$$14$$(document.createElement("div"));
    $context$$52_headerColumnDiv$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $headerContentDiv$$1_options$$291_parentElement$$2$$.empty();
    $headerContentDiv$$1_options$$291_parentElement$$2$$.append($context$$52_headerColumnDiv$$2$$);
    $headerContentDiv$$1_options$$291_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerContentDiv$$1_options$$291_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $context$$52_headerColumnDiv$$2$$.prepend($headerContentDiv$$1_options$$291_parentElement$$2$$);
    $delegateRenderer$$2$$($headerContentDiv$$1_options$$291_parentElement$$2$$);
  };
  $goog$exportPath_$$("TableRendererUtils.columnHeaderDefaultRenderer", $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$, $oj$$14$$);
  $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderSortableIconRenderer$$($context$$53_headerColumnDiv$$3$$, $component$$16_headerContentDiv$$2_options$$292$$, $delegateRenderer$$3$$) {
    $component$$16_headerContentDiv$$2_options$$292$$ = $context$$53_headerColumnDiv$$3$$.headerContext.component;
    var $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$ = $$$$14$$($context$$53_headerColumnDiv$$3$$.headerContext.parentElement);
    $context$$53_headerColumnDiv$$3$$ = $$$$14$$(document.createElement("div"));
    $context$$53_headerColumnDiv$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.empty();
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.append($context$$53_headerColumnDiv$$3$$);
    "rtl" === $component$$16_headerContentDiv$$2_options$$292$$.$_GetReadingDirection$() ? $context$$53_headerColumnDiv$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$, "0px") : $context$$53_headerColumnDiv$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$, "0px");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
    $context$$53_headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$);
    var $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
    $component$$16_headerContentDiv$$2_options$$292$$._hoverable($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    var $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.width(), $headerColumnAscHeight$$ = $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.height(), $headerColumnAccAscLink$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccAscLink$$.attr("tabindex", "0");
    $headerColumnAccAscLink$$.attr("href", "#");
    $headerColumnAccAscLink$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_ASC_LINK_CLASS$);
    $headerColumnAccAscLink$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumnAccAscLink$$.text($component$$16_headerContentDiv$$2_options$$292$$.$getTranslatedString$("labelSortAsc"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.append($headerColumnAccAscLink$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "inline-block");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.css("width", $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ + "px");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.css("height", $headerColumnAscHeight$$ + "px");
    $context$$53_headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $context$$53_headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
    $component$$16_headerContentDiv$$2_options$$292$$._hoverable($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.attr("tabindex", "0");
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.attr("href", "#");
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_DSC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.text($component$$16_headerContentDiv$$2_options$$292$$.$getTranslatedString$("labelSortDsc"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$3$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $component$$16_headerContentDiv$$2_options$$292$$ = $$$$14$$(document.createElement("div"));
    $component$$16_headerContentDiv$$2_options$$292$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $context$$53_headerColumnDiv$$3$$.prepend($component$$16_headerContentDiv$$2_options$$292$$);
    $delegateRenderer$$3$$($component$$16_headerContentDiv$$2_options$$292$$);
  };
  $goog$exportPath_$$("TableRendererUtils.columnHeaderSortableIconRenderer", $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$, $oj$$14$$);
});
