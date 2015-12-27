/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$32$$, $$$$31$$, $comp$$7$$, $base$$7$$, $dvt$$4$$) {
  $oj$$32$$.$__registerWidget$("oj.ojThematicMap", $$$$31$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
    this._super();
  }, $_CreateDvtComponent$:function($context$$94$$, $callback$$108$$, $callbackObj$$6$$) {
    return $dvt$$4$$.DvtThematicMap.newInstance($context$$94$$, $callback$$108$$, $callbackObj$$6$$);
  }, $_ConvertLocatorToSubId$:function($locator$$30$$) {
    var $subId$$29$$ = $locator$$30$$.subId;
    "oj-thematicmap-area" == $subId$$29$$ ? $subId$$29$$ = $locator$$30$$.dataLayer + ":area[" + $locator$$30$$.index + "]" : "oj-thematicmap-marker" == $subId$$29$$ && ($subId$$29$$ = $locator$$30$$.dataLayer + ":marker[" + $locator$$30$$.index + "]");
    return $subId$$29$$;
  }, $_ConvertSubIdToLocator$:function($subId$$30$$) {
    var $locator$$31$$ = {};
    0 < $subId$$30$$.indexOf(":area") ? ($locator$$31$$.subId = "oj-thematicmap-area", $locator$$31$$.dataLayer = $subId$$30$$.substring(0, $subId$$30$$.indexOf(":")), $locator$$31$$.index = this.$_GetFirstIndex$($subId$$30$$)) : 0 < $subId$$30$$.indexOf(":marker") && ($locator$$31$$.subId = "oj-thematicmap-marker", $locator$$31$$.dataLayer = $subId$$30$$.substring(0, $subId$$30$$.indexOf(":")), $locator$$31$$.index = this.$_GetFirstIndex$($subId$$30$$));
    return $locator$$31$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$.push("oj-thematicmap");
    return $styleClasses$$8$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$9$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$9$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$9$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$9$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$353$$, $flags$$34$$) {
    var $i$$371_numUpdates$$ = Object.keys($options$$353$$).length, $newAreaLayers$$ = $options$$353$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$353$$.pointDataLayers;
    if (1 == $i$$371_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$371_numUpdates$$ = 0;$i$$371_numUpdates$$ < $newAreaLayers$$.length;$i$$371_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$371_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$371_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$32$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$371_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$371_numUpdates$$ = 0;$i$$371_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$371_numUpdates$$++) {
          $oj$$32$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$371_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$371_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$371_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$371_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$353$$, $flags$$34$$);
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$372$$ = 0;$i$$372$$ < this.$_checkBasemaps$.length;$i$$372$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$372$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this.$_updateDataLayerSelection$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if ($areaLayers_pointDataLayers$$1$$) {
      for ($i$$372$$ = 0;$i$$372$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$372$$++) {
        var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$372$$].areaDataLayer;
        if ($areaDataLayer$$1_pointDataLayer$$) {
          var $dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$.renderer;
          if ($dl_renderer$$2$$) {
            var $data$$147$$ = $areaDataLayer$$1_pointDataLayer$$.markers;
            $areaDataLayer$$1_pointDataLayer$$._components = this.$_stampDataLayerChildren$($data$$147$$, $dl_renderer$$2$$);
          }
        }
      }
    }
    if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
      for ($i$$372$$ = 0;$i$$372$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$372$$++) {
        if ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$372$$]) {
          if ($dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$.renderer) {
            $data$$147$$ = $areaDataLayer$$1_pointDataLayer$$.markers, $areaDataLayer$$1_pointDataLayer$$._components = this.$_stampDataLayerChildren$($data$$147$$, $dl_renderer$$2$$);
          }
        }
      }
    }
    if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
      if (this.$_context$.isReadyToRender()) {
        for ($i$$372$$ = 0;$i$$372$$ < this.$_dataLayersToUpdate$.length;$i$$372$$++) {
          $dl_renderer$$2$$ = this.$_dataLayersToUpdate$[$i$$372$$], this.$_component$.updateLayer($dl_renderer$$2$$.options, $dl_renderer$$2$$.parentLayer, $dl_renderer$$2$$.isADL);
        }
        this.$_dataLayersToUpdate$ = [];
      } else {
        $oj$$32$$.$Logger$.error(this.$getResource$("messageNotReadyToRender").summary);
      }
    } else {
      this._super(), this.$_initiallyRendered$ = !0;
    }
    this._trigger("load", null, null);
  }, $_stampDataLayerChildren$:function($data$$148$$, $renderer$$3$$) {
    for (var $components$$ = [], $i$$373$$ = 0;$i$$373$$ < $data$$148$$.length;$i$$373$$++) {
      var $dummyDiv_dvtComponent$$ = document.createElement("div");
      $dummyDiv_dvtComponent$$.style.display = "none";
      $dummyDiv_dvtComponent$$.$_dvtcontext$ = this.$_context$;
      this.element.append($dummyDiv_dvtComponent$$);
      var $context$$95_elem$$146$$ = {component:$oj$$32$$.Components.$getWidgetConstructor$(this.element), parentElement:$dummyDiv_dvtComponent$$, data:$data$$148$$[$i$$373$$]};
      ($context$$95_elem$$146$$ = $renderer$$3$$.call(this, $context$$95_elem$$146$$)) || ($context$$95_elem$$146$$ = $dummyDiv_dvtComponent$$.children[0]);
      ($dummyDiv_dvtComponent$$ = this.$_GetDvtComponent$($context$$95_elem$$146$$)) && $components$$.push({id:$data$$148$$[$i$$373$$].id, location:$data$$148$$[$i$$373$$].location, x:$data$$148$$[$i$$373$$].x, y:$data$$148$$[$i$$373$$].y, displayable:$dummyDiv_dvtComponent$$});
    }
    return $components$$;
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$32$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$374$$ = 0;$i$$374$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$374$$++) {
          var $layer$$20$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$374$$].layer;
          $layer$$20$$ && ($layer$$20$$ = $layer$$20$$.charAt(0).toUpperCase() + $layer$$20$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$20$$, $locale$$22$$));
        }
      }
      ($areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers) && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$34$$) {
    if (!this.$_loadedBasemaps$[$url$$34$$]) {
      var $resolvedUrl$$ = $oj$$32$$.$Config$.$getResourceUrl$($url$$34$$), $thisRef$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$31$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$34$$] = !0;
        $thisRef$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$375_layer$$21$$, $locale$$23_localeList$$) {
    var $relativeUrl_splitLocale$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName_bundleUrl$$ + $i$$375_layer$$21$$ + ".js";
    -1 == this.$_checkBasemaps$.indexOf($relativeUrl_splitLocale$$) && (this.$_checkBasemaps$.push($relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($relativeUrl_splitLocale$$));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$relativeUrl_splitLocale$$[0]], 1 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1]), 2 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[2], $relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1] + 
      "-" + $relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$375_layer$$21$$ + "Bundle", $i$$375_layer$$21$$ = 0;$i$$375_layer$$21$$ < $locale$$23_localeList$$.length;$i$$375_layer$$21$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$375_layer$$21$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + "_" + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$375_layer$$21$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$422$$) {
    var $selection$$14$$, $id$$40$$;
    if (($event$$422$$ && $event$$422$$.getType ? $event$$422$$.getType() : null) === $dvt$$4$$.DvtSelectionEvent.TYPE) {
      $selection$$14$$ = {};
      $id$$40$$ = $event$$422$$.getParamValue("clientId");
      $selection$$14$$[$id$$40$$] = $event$$422$$.getSelection();
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$40$$ !== $dataLayerId$$ && ($selection$$14$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$14$$);
    } else {
      this._super($event$$422$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$13$$ = this.options.translations, $ret$$35$$ = this._super();
    $ret$$35$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$13$$.componentName;
    return $ret$$35$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$15$$ = this.options.selection;
    if ($selection$$15$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$376$$ = 0;$i$$376$$ < $als_pdls$$.length;$i$$376$$++) {
          $selection$$15$$[$als_pdls$$[$i$$376$$].id] && ($als_pdls$$[$i$$376$$].selection = $selection$$15$$[$als_pdls$$[$i$$376$$].id]);
        }
      }
      $als_pdls$$ = this.options.areaLayers;
      for ($i$$376$$ = 0;$i$$376$$ < $als_pdls$$.length;$i$$376$$++) {
        var $adl$$ = $als_pdls$$[$i$$376$$].areaDataLayer;
        $selection$$15$$[$adl$$.id] && ($adl$$.selection = $selection$$15$$[$adl$$.id]);
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$219$$) {
    var $ret$$36$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$219$$);
    this.$_AddAutomationGetters$($ret$$36$$);
    return $ret$$36$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$220$$) {
    var $ret$$37$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$220$$);
    this.$_AddAutomationGetters$($ret$$37$$);
    return $ret$$37$$;
  }});
});
