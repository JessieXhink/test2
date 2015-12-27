/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
var o_a=this;function o_(a,f,d){a=a.split(".");d=d||o_a;a[0]in d||!d.execScript||d.execScript("var "+a[0]);for(var b;a.length&&(b=a.shift());)a.length||void 0===f?d=d[b]?d[b]:d[b]={}:d[b]=f};/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["require","ojL10n!ojtranslations/nls/ojtranslations"],function(a,f){var d={};"undefined"!==typeof window?d=window:"undefined"!==typeof self&&(d=self);var b=d.oj,c=d.oj={version:"1.1.1",build:"2",revision:"18149",noConflict:function(){d.oj=b}};c.u={};o_("Logger",c.u,c);c.u.A0=0;o_("Logger.LEVEL_NONE",c.u.A0,c);c.u.DC=1;o_("Logger.LEVEL_ERROR",c.u.DC,c);c.u.Ql=2;o_("Logger.LEVEL_WARN",c.u.Ql,c);c.u.bx=3;o_("Logger.LEVEL_INFO",c.u.bx,c);c.u.ML=4;o_("Logger.LEVEL_LOG",
c.u.ML,c);c.u.h2="error";c.u.k2="warn";c.u.i2="info";c.u.j2="log";c.u.RP={level:c.u.DC,writer:null};c.u.hb=c.u.RP;c.u.error=function(a){c.u.Vv(c.u.DC,c.u.h2,arguments)};o_("Logger.error",c.u.error,c);c.u.info=function(a){c.u.Vv(c.u.bx,c.u.i2,arguments)};o_("Logger.info",c.u.info,c);c.u.warn=function(a){c.u.Vv(c.u.Ql,c.u.k2,arguments)};o_("Logger.warn",c.u.warn,c);c.u.log=function(a){c.u.Vv(c.u.ML,c.u.j2,arguments)};o_("Logger.log",c.u.log,c);c.u.option=function(a,d){var b={},e;if(0==arguments.length){for(e in c.u.hb)c.u.hb.hasOwnProperty(e)&&
(b[e]=c.u.hb[e]);return b}if("string"===typeof a&&void 0===d)return void 0===c.u.hb[a]?null:c.u.hb[a];if("string"===typeof a)c.u.hb[a]=d;else for(e in a)a.hasOwnProperty(e)&&c.u.option(e,a[e])};o_("Logger.option",c.u.option,c);c.u.Vv=function(a,d,b){if(!(c.u.option("level")<a)){var e=c.u.P8();null!=e&&(1==b.length&&b[0]instanceof Function&&(b=[b[0]()]),e[d]&&e[d].apply?e[d].apply(e,b):e[d]&&(e[d]=Function.prototype.bind.call(e[d],e),c.u.Vv(a,d,b)))}};c.u.P8=function(){var a=null;c.u.option("writer")?
a=c.u.option("writer"):void 0!==window&&void 0!==window.console&&(a=window.console);return a};c.u.yia=function(a){return void 0!==c.u.RP[a]};var e=d.__ojCheckpointManager;c.vh={};o_("CHECKPOINT_MANAGER",c.vh,c);c.vh.rha=function(a,d){e&&e.startCheckpoint(a,d)};o_("CHECKPOINT_MANAGER.startCheckpoint",c.vh.rha,c);c.vh.Efa=function(a){e&&e.endCheckpoint(a)};o_("CHECKPOINT_MANAGER.endCheckpoint",c.vh.Efa,c);c.vh.QJ=function(a){return e?e.getRecord(a):void 0};o_("CHECKPOINT_MANAGER.getRecord",c.vh.QJ,
c);c.vh.DZ=function(a){return e?e.matchRecords(a):[]};o_("CHECKPOINT_MANAGER.matchRecords",c.vh.DZ,c);c.vh.Cfa=function(a){c.u.info(function(){for(var d="Checkpoint Records:",b=c.vh.DZ(a),e=0;e<b.length;e++){var g=b[e],d=d+"\n"+g.name,f=g.description;null!=f&&(d=d+" ("+f+")");d+=":\n";d=d+"start: "+g.start+"\tduration: "+g.duration}return d})};o_("CHECKPOINT_MANAGER.dump",c.vh.Cfa,c);c.b=function(){this.Init()};o_("Object",c.b,c);c.b.q=null;c.b.QI="oj.Object";c.b.C1=/function\s+([\w\$][\w\$\d]*)\s*\(/;
c.b.prototype={};c.b.prototype.constructor=c.b;c.b.i=function(a,d){var b=null,e=null,g;for(g in d)if(d.hasOwnProperty(g)){b=g;e=d[g];break}var f=a.split(".");g=c[f[0]];f=f[2];if(b!=f&&null!=b){var p=g.GH;p||(p={},g.GH=p);p[b]=f;g.prototype[f]=e}};c.b.ga=function(a,d,b){c.j.hl(a);c.j.Xr(d);c.j.Yv(b);void 0===d&&(d=c.b);c.j.assert(a!==d,"Class can't extend itself");var e=c.b.Xda;e.prototype=d.prototype;a.prototype=new e;a.prototype.constructor=a;a.q=a.superclass=d.prototype;b&&(a.QI=b)};o_("Object.createSubclass",
c.b.ga,c);c.b.ifa=function(a,d){var b;c.j.hl(a);c.j.assert(null!=d,"source object cannot be null");for(b in d)d.hasOwnProperty(b)&&(a.prototype[b]=d[b])};o_("Object.copyPropertiesForClass",c.b.ifa,c);c.b.Xda=function(){};c.b.prototype.fY=function(a){if(void 0===a)a=this;else if(null===a)return null;return a.constructor};c.b.i("Object.prototype.getClass",{fY:c.b.prototype.fY});c.b.prototype.clone=function(){var a=new this.constructor;c.Ac.Pf(a,this);return a};c.b.i("Object.prototype.clone",{clone:c.b.prototype.clone});
c.b.prototype.toString=function(){return this.fL()};c.b.i("Object.prototype.toString",{toString:c.b.prototype.toString});c.b.prototype.fL=function(){return this.getTypeName()+" Object"};c.b.i("Object.prototype.toDebugString",{fL:c.b.prototype.fL});c.b.getTypeName=function(a){c.j.hl(a);var d=a.QI;null==d&&(d=a.toString(),d=(d=c.b.C1.exec(d))?d[1]:"anonymous",a.QI=d);return d};o_("Object.getTypeName",c.b.getTypeName,c);c.b.prototype.getTypeName=function(){return c.b.getTypeName(this.constructor)};c.b.i("Object.prototype.getTypeName",
{getTypeName:c.b.prototype.getTypeName});c.b.prototype.Init=function(){c.j.fK()&&c.j.assert(this.getTypeName,"Not an oj.Object");var a=this.constructor;a.Rk||c.b.TG(a)};c.b.i("Object.prototype.Init",{Init:c.b.prototype.Init});c.b.Ffa=function(a){c.j.hl(a);a.Rk||c.b.TG(a)};o_("Object.ensureClassInitialization",c.b.Ffa,c);c.b.prototype.en=function(a){return this===a};c.b.i("Object.prototype.equals",{en:c.b.prototype.en});c.b.iB=function(a,d){c.j.hl(d);return d.bind(a)};o_("Object.createCallback",c.b.iB,
c);c.b.TG=function(a){c.j.fK()&&(c.j.hl(a),c.j.assert(!a.Rk));a.Rk=!0;var d=a.q;d&&((d=d.constructor)&&!d.Rk&&c.b.TG(d),c.b.e4(a));(d=a.InitClass||null)||(d=a.InitClass);d&&d.call(a)};c.b.Cg=function(a,d){if(a===d)return!0;if(typeof a!==typeof d||null===a||null===d)return!1;if(a.constructor===d.constructor){if(Array.isArray(a))return c.b.g5(a,d);if(a.constructor===Object)return c.b.yt(a,d);if(a.valueOf&&"function"===typeof a.valueOf)return a.valueOf()===d.valueOf()}return!1};o_("Object.compareValues",
c.b.Cg,c);c.b.g5=function(a,d){if(a.length!==d.length)return!1;for(var b=0,e=a.length;b<e;b++)if(!c.b.Cg(a[b],d[b]))return!1;return!0};c.b.oP=function(a,d){if(!a)return!d||0==d.length;if(!d)return!a||0==a.length;if(a.length!=d.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!=d[b]&&(-1==a.indexOf(d[b])||-1==d.indexOf(a[b])))return!1;return!0};c.b.yt=function(a,d){var b,e=!1;if(a===d)return!0;if(!(a instanceof Object&&d instanceof Object)||a.constructor!==d.constructor)return!1;for(b in a)if(e||
(e=!0),a.hasOwnProperty(b)&&(!d.hasOwnProperty(b)||a[b]!==d[b]&&("object"!==typeof a[b]||!c.b.yt(a[b],d[b]))))return!1;for(b in d)if(e||(e=!0),d.hasOwnProperty(b)&&!a.hasOwnProperty(b))return!1;return e?!0:JSON.stringify(a)===JSON.stringify(d)};c.b.Gg=function(a){var d;if(void 0===a||null===a)return!0;for(d in a)if(a.hasOwnProperty(d))return!1;return!0};c.b.e4=function(a){c.b.GH&&c.b.sO(a,a.q)};c.b.sO=function(a,d){if(d){var b=d.constructor;c.b.sO(a,b.q);var b=b.GH,e;if(b)for(e in b)if(b.hasOwnProperty(e)){var g=
b[e];if(e!=g){var f=a.prototype;!f.hasOwnProperty(e)&&f.hasOwnProperty(g)?f[e]=f[g]:!f.hasOwnProperty(g)&&f.hasOwnProperty(e)&&(f[g]=f[e])}}}};c.wq=function(){return"function"===typeof define&&define.amd};c.j={};o_("Assert",c.j,c);c.j.Jfa=function(){c.j.DEBUG=!0};o_("Assert.forceDebug",c.j.Jfa,c);c.j.fK=function(){return!0==c.j.DEBUG};o_("Assert.isDebug",c.j.fK,c);c.j.assert=function(a,d){if(c.j.DEBUG&&!a){var b=d||"",e;if(2<arguments.length){b+="(";for(e=2;e<arguments.length;e+=1)b+=arguments[e];
b+=")"}c.j.Bd(b)}};o_("Assert.assert",c.j.assert,c);c.j.Xa=function(){c.j.DEBUG&&c.j.Bd("Abstract function called")};o_("Assert.failedInAbstractFunction",c.j.Xa,c);c.j.Va=function(a,d,b){var e;c.j.DEBUG&&(null!==a?(c.j.gh(d,"function",null,0,!1),e=d.prototype,e.isPrototypeOf(a)||c.j.Bd("object '"+a+"' doesn't match prototype "+e,0,b)):c.j.Bd("null object doesn't match prototype "+e,0,b))};o_("Assert.assertPrototype",c.j.Va,c);c.j.Zea=function(a,d,b){var e;c.j.DEBUG&&null!==a&&(null!==a?(c.j.gh(d,
"function",null,0,!1),e=d.prototype,e.isPrototypeOf(a)||c.j.Bd("object '"+a+"' doesn't match prototype "+e,0,b)):c.j.Bd("null object doesn't match prototype "+e,0,b))};o_("Assert.assertPrototypeOrNull",c.j.Zea,c);c.j.$ea=function(a,d,b,e){c.j.DEBUG&&(d=d.prototype,b=b.prototype,d.isPrototypeOf(a)||b.isPrototypeOf(a)||c.j.Bd("object '"+a+"' doesn't match prototype "+d+" or "+b,0,e))};o_("Assert.assertPrototypes",c.j.$ea,c);c.j.Tea=function(a){c.j.DEBUG&&a&&void 0===a.nodeType&&c.j.Bd(a+" is not a DOM Node")};
o_("Assert.assertDomNodeOrNull",c.j.Tea,c);c.j.eJ=function(a){c.j.DEBUG&&(a&&void 0!==a.nodeType||c.j.Bd(a+" is not a DOM Node"))};o_("Assert.assertDomNode",c.j.eJ,c);c.j.Ag=function(a,d){c.j.DEBUG&&(c.j.eJ(a),1!==a.nodeType?c.j.Bd(a+" is not a DOM Element"):d&&a.nodeName!==d&&c.j.Bd(a+" is not a "+d+" Element"))};o_("Assert.assertDomElement",c.j.Ag,c);c.j.Sea=function(a,d){c.j.DEBUG&&null!==a&&(c.j.eJ(a),1!==a.nodeType?c.j.Bd(a+" is not a DOM Element"):d&&a.nodeName!==d&&c.j.Bd(a+" is not a "+d+
" Element"))};o_("Assert.assertDomElementOrNull",c.j.Sea,c);c.j.gh=function(a,d,b,e,g){!c.j.DEBUG||null===a&&g||typeof a===d||(a=a+" is not of type "+d,b&&(a=b+a),c.j.Bd(a))};o_("Assert.assertType",c.j.gh,c);c.j.ie=function(a,d){c.j.DEBUG&&c.j.gh(a,"object",d,0,!1)};o_("Assert.assertObject",c.j.ie,c);c.j.fJ=function(a,d){c.j.DEBUG&&c.j.gh(a,"object",d,0,!0)};o_("Assert.assertObjectOrNull",c.j.fJ,c);c.j.Vea=function(a,d){c.j.DEBUG&&(c.j.gh(a,"string",d,0,!1),c.j.assert(0<a.length,"empty string"))};
o_("Assert.assertNonEmptyString",c.j.Vea,c);c.j.il=function(a,d){c.j.DEBUG&&c.j.gh(a,"string",d,0,!1)};o_("Assert.assertString",c.j.il,c);c.j.Yv=function(a,d){c.j.DEBUG&&c.j.gh(a,"string",d,0,!0)};o_("Assert.assertStringOrNull",c.j.Yv,c);c.j.hl=function(a,d){c.j.DEBUG&&c.j.gh(a,"function",d,0,!1)};o_("Assert.assertFunction",c.j.hl,c);c.j.Xr=function(a,d){c.j.DEBUG&&c.j.gh(a,"function",d,0,!0)};o_("Assert.assertFunctionOrNull",c.j.Xr,c);c.j.nX=function(a,d){c.j.DEBUG&&c.j.gh(a,"boolean",d,0,!1)};o_("Assert.assertBoolean",
c.j.nX,c);c.j.pc=function(a,d){c.j.DEBUG&&c.j.gh(a,"number",d,0,!1)};o_("Assert.assertNumber",c.j.pc,c);c.j.Xea=function(a,d){c.j.DEBUG&&c.j.gh(a,"number",d,0,!0)};o_("Assert.assertNumberOrNull",c.j.Xea,c);c.j.cB=function(a,d){c.j.DEBUG&&!Array.isArray(a)&&(void 0===d&&(d=a+" is not an array"),c.j.Bd(d))};o_("Assert.assertArray",c.j.cB,c);c.j.Xv=function(a,d){c.j.DEBUG&&null!==a&&!Array.isArray(a)&&(void 0===d&&(d=a+" is not an array"),c.j.Bd(d))};o_("Assert.assertArrayOrNull",c.j.Xv,c);c.j.Wea=function(a,
d){c.j.DEBUG&&!isNaN(a)&&(void 0===d&&(d=a+" is convertible to a number"),c.j.Bd(d))};o_("Assert.assertNonNumeric",c.j.Wea,c);c.j.Yea=function(a,d){c.j.DEBUG&&isNaN(a)&&(void 0===d&&(d=a+" is not convertible to a number"),c.j.Bd(d))};o_("Assert.assertNumeric",c.j.Yea,c);c.j.Uea=function(a,d,b){var e;if(null===a||void 0===d[a.toString()]){if(void 0===b){b=" is not in set: {";for(e in d)d.hasOwnProperty(e)&&(b+=e,b+=",");b=a+(b+"}")}c.j.Bd(b)}};o_("Assert.assertInSet",c.j.Uea,c);c.j.Bd=function(a,d,
b){d="Assertion";b&&(d+=" ("+b+")");d+=" failed: ";void 0!==a&&(d+=a);throw Error(d);};o_("Assert.assertionFailed",c.j.Bd,c);var g=d.__oj_Assert_DEBUG;void 0!==g&&(c.j.DEBUG=g);c.Ng=function(){this.Init()};o_("EventSource",c.Ng,c);c.b.ga(c.Ng,c.b,"oj.EventSource");c.Ng.prototype.Init=function(){this.nd=[];c.Ng.q.Init.call(this)};c.b.i("EventSource.prototype.Init",{Init:c.Ng.prototype.Init});c.Ng.prototype.on=function(a,d){var b=!1,c;for(c=0;c<this.nd.length;c++)if(this.nd[c].eventType==a&&this.nd[c].eventHandlerFunc==
d){b=!0;break}b||this.nd.push({eventType:a,eventHandlerFunc:d})};c.b.i("EventSource.prototype.on",{on:c.Ng.prototype.on});c.Ng.prototype.off=function(a,d){var b;for(b=this.nd.length-1;0<=b;b--)if(this.nd[b].eventType==a&&this.nd[b].eventHandlerFunc==d){this.nd.splice(b,1);break}};c.b.i("EventSource.prototype.off",{off:c.Ng.prototype.off});c.Ng.prototype.handleEvent=function(a,d){var b,c;for(b=0;b<this.nd.length;b++)if(c=this.nd[b],c.eventType==a&&(c=c.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)),
!1===c))return!1;return!0};c.b.i("EventSource.prototype.handleEvent",{handleEvent:c.Ng.prototype.handleEvent});c.Qa=function(){};c.Qa.Ll={BC:"ie",yL:"firefox",P0:"safari",e0:"chrome",Zs:"unknown"};c.Qa.Nl={hM:"trident",QC:"webkit",BL:"gecko",Zs:"unknown"};c.Qa.ki={Y0:"Windows",R0:"Solaris",NL:"Mac",Zs:"Unknown",pL:"Android",CC:"IOS",B0:"Linux"};c.Qa.fw=function(){var a;c.Ba.Wh(a)&&(a=navigator.userAgent);a=a.toLowerCase();var d=c.Ba.wB(a),b=c.Qa.h6;if(b&&b.hashCode===d)return{os:b.os,browser:b.browser,
browserVersion:b.browserVersion,engine:b.engine,engineVersion:b.engineVersion,hashCode:b.hashCode};var b=c.Qa.ki.Zs,e=c.Qa.Ll.Zs,g=0,f=c.Qa.Nl.Zs,p=0;-1<a.indexOf("iphone")||-1<a.indexOf("ipad")?b=c.Qa.ki.CC:-1<a.indexOf("mac")?b=c.Qa.ki.NL:-1<a.indexOf("sunos")?b=c.Qa.ki.R0:-1<a.indexOf("android")?b=c.Qa.ki.pL:-1<a.indexOf("linux")?b=c.Qa.ki.B0:-1<a.indexOf("win")&&(b=c.Qa.ki.Y0);-1<a.indexOf("msie")?(e=c.Qa.Ll.BC,g=c.Qa.Oh(a,/msie (\d+[.]\d+)/),a.indexOf("trident")&&(f=c.Qa.Nl.hM,p=c.Qa.Oh(a,/trident\/(\d+[.]\d+)/))):
-1<a.indexOf("trident")?(e=c.Qa.Ll.BC,g=c.Qa.Oh(a,/rv:(\d+[.]\d+)/),a.indexOf("trident")&&(f=c.Qa.Nl.hM,p=c.Qa.Oh(a,/trident\/(\d+[.]\d+)/))):-1<a.indexOf("chrome")?(e=c.Qa.Ll.e0,g=c.Qa.Oh(a,/chrome\/(\d+[.]\d+)/),f=c.Qa.Nl.QC,p=c.Qa.Oh(a,/applewebkit\/(\d+[.]\d+)/)):-1<a.indexOf("safari")?(e=c.Qa.Ll.P0,g=c.Qa.Oh(a,/version\/(\d+[.]\d+)/),f=c.Qa.Nl.QC,p=c.Qa.Oh(a,/applewebkit\/(\d+[.]\d+)/)):-1<a.indexOf("firefox")&&(e=c.Qa.Ll.yL,g=c.Qa.Oh(a,/rv:(\d+[.]\d+)/),f=c.Qa.Nl.BL,p=c.Qa.Oh(a,/gecko\/(\d+)/));
b=c.Qa.h6={hashCode:d,os:b,browser:e,browserVersion:g,engine:f,engineVersion:p};return{os:b.os,browser:b.browser,browserVersion:b.browserVersion,engine:b.engine,engineVersion:b.engineVersion,hashCode:b.hashCode}};c.Qa.Oh=function(a,d){var b=a.match(d);return b&&(b=b[1])?parseFloat(b):0};c.ba={};o_("Config",c.ba,c);c.ba.Vf=function(){var a;if(c.wq())return c.j.assert(void 0!==f,"ojtranslations module must be defined"),a=f._ojLocale_,"root"==a?"en":a;a=c.ba.pr;null==a&&((a=document.documentElement.lang)||
(a=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),c.ba.pr=a=a.toLowerCase());return a};o_("Config.getLocale",c.ba.Vf,c);c.ba.jha=function(d,b){if(c.wq()){var e=["ojL10n!ojtranslations/nls/"+d+"/ojtranslations"];c.La&&e.push("ojL10n!ojtranslations/nls/"+d+"/localeElements");a(e,function(a,d){f=a;d&&c.La.z3(d);b&&b()})}else c.ba.pr=d,b&&b()};o_("Config.setLocale",c.ba.jha,c);c.ba.kb=function(d){var b=/^\/|:/;return null==d||b.test(d)?d:(b=c.ba.Mca)?b+("/"==
b.charAt(b.length-1)?"":"/")+d:c.wq()?(b=a.toUrl("ojs/_foo_"),b.replace(/[^\/]*$/,"../"+d)):d};o_("Config.getResourceUrl",c.ba.kb,c);c.ba.kha=function(a){c.ba.Mca=a};o_("Config.setResourceBaseUrl",c.ba.kha,c);c.ba.iha=function(a){c.ba.k4=a};o_("Config.setAutomationMode",c.ba.iha,c);c.ba.DJ=function(){return c.ba.k4};o_("Config.getAutomationMode",c.ba.DJ,c);c.ba.PY=function(){var a="Oracle JET Version: "+c.version+"\n",a=a+("Oracle JET Revision: "+c.revision+"\n");window.navigator&&(a+="Browser: "+
window.navigator.userAgent+"\n",a+="Browser Platform: "+window.navigator.platform+"\n");$&&($.fn&&(a+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(a+="jQuery UI Version: "+$.ui.version+"\n"));c.ia&&(a+="Knockout Version: "+c.ia.y3()+"\n");window.dha&&(a+="Require Version: "+window.dha.version+"\n");return a};o_("Config.getVersionInfo",c.ba.PY,c);c.ba.Fga=function(){console.log(c.ba.PY())};o_("Config.logVersionInfo",c.ba.Fga,c);c.Ba={};o_("StringUtils",c.Ba,c);c.Ba.ED=/^\s*|\s*$/g;c.Ba.Gg=
function(a){return null===a?!0:0===c.Ba.trim(a).length};o_("StringUtils.isEmpty",c.Ba.Gg,c);c.Ba.Wh=function(a){return void 0===a||c.Ba.Gg(a)?!0:!1};o_("StringUtils.isEmptyOrUndefined",c.Ba.Wh,c);c.Ba.pd=function(a){return null!==a&&("string"===typeof a||a instanceof String)};o_("StringUtils.isString",c.Ba.pd,c);c.Ba.trim=function(a){return c.Ba.pd(a)?a.replace(c.Ba.ED,""):a};o_("StringUtils.trim",c.Ba.trim,c);c.Ba.wB=function(a){var d=0;if(0===a.length)return d;for(var b=0;b<a.length;b++)d=(d<<5)-
d+a.charCodeAt(b),d&=d;return d};c.Ac={};o_("CollectionUtils",c.Ac,c);c.Ac.Pf=function(a,d,b,e,g){return c.Ac.vP(a,d,b,e,g,0)};o_("CollectionUtils.copyInto",c.Ac.Pf,c);c.Ac.isPlainObject=function(a){if("object"===typeof a)try{if(a.constructor&&a.constructor.prototype.hasOwnProperty("isPrototypeOf"))return!0}catch(d){}return!1};o_("CollectionUtils.isPlainObject",c.Ac.isPlainObject,c);c.Ac.vP=function(a,d,b,e,g,f){var p,r,t;if(a&&d&&a!==d){t=Object.keys(d);for(var s=0;s<t.length;s++){p=t[s];r=b?b(p):
p;p=d[p];var v=!1;if(e&&f<g){var x=a[r];c.Ac.isPlainObject(x)&&c.Ac.isPlainObject(p)&&(v=!0,c.Ac.vP(x,p,b,!0,g,f+1))}v||(a[r]=p)}}return a};c.ResponsiveUtils={};c.ResponsiveUtils.SCREEN_RANGE={SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"};c.ResponsiveUtils.FRAMEWORK_QUERY_KEY={SM_UP:"sm-up",MD_UP:"md-up",LG_UP:"lg-up",XL_UP:"xl-up",XXL_UP:"xxl-up",SM_ONLY:"sm-only",MD_ONLY:"md-only",LG_ONLY:"lg-only",XL_ONLY:"xl-only",MD_DOWN:"md-down",LG_DOWN:"lg-down",XL_DOWN:"xl-down",HIGH_RESOLUTION:"high-resolution"};
c.ResponsiveUtils.Yn={};c.ResponsiveUtils.Yn[c.ResponsiveUtils.SCREEN_RANGE.SM]=0;c.ResponsiveUtils.Yn[c.ResponsiveUtils.SCREEN_RANGE.MD]=1;c.ResponsiveUtils.Yn[c.ResponsiveUtils.SCREEN_RANGE.LG]=2;c.ResponsiveUtils.Yn[c.ResponsiveUtils.SCREEN_RANGE.XL]=3;c.ResponsiveUtils.Yn[c.ResponsiveUtils.SCREEN_RANGE.XXL]=4;c.ResponsiveUtils.m8=function(a){var d=document.getElementsByClassName(a).item(0);null===d&&(d=document.createElement("meta"),d.className=a,document.head.appendChild(d));return window.getComputedStyle(d).getPropertyValue("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
"")};c.ResponsiveUtils.getFrameworkQuery=function(a){a=c.ResponsiveUtils.m8("oj-mq-"+a);return"null"==a?null:a};c.ResponsiveUtils.compare=function(a,d){var b=c.ResponsiveUtils.Yn[a],e=c.ResponsiveUtils.Yn[d];if(void 0==b)throw"size1 param "+a+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";if(void 0==e)throw"size2 param "+d+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";return b-e};c.ha={};o_("Translations",
c.ha,c);c.ha.UK=function(a){c.ha.$D=a};o_("Translations.setBundle",c.ha.UK,c);c.ha.RJ=function(a){return c.ha.RR(a)};o_("Translations.getResource",c.ha.RJ,c);c.ha.Jb=function(a,d){return null==a?null:c.ha.i7(a,d)};o_("Translations.applyParameters",c.ha.Jb,c);c.ha.D=function(a,d){var b=c.ha.RR(a);if(null==b)return a;var e={};2<arguments.length?e=Array.prototype.slice.call(arguments,1):2==arguments.length&&(e=arguments[1],"object"===typeof e||e instanceof Array||(e=[e]));return c.ha.Jb(b,e)};o_("Translations.getTranslatedString",
c.ha.D,c);c.ha.pB=function(a){a=c.ha.RQ()[a];var d,b;if(null==a)return{};d={};for(b in a)a.hasOwnProperty(b)&&(d[b]=a[b]);return d};o_("Translations.getComponentTranslations",c.ha.pB,c);c.ha.RR=function(a){a=a?a.split("."):[];var d=c.ha.RQ(),b=a.length,e=0,g=a[e];for(c.j.ie(d);0<--b&&d;)d=d[g],e++,g=a[e];return d?d[g]||null:null};c.ha.i7=function(a,d){var b=a.length,c=[],e=null,g=!1,p=!1,f=!1,t=!1,s,v;for(v=0;v<b;v++){var x=a.charAt(v),u=!1;if(g)u=!0,g=!1;else switch(x){case "$":g=!0;break;case "{":t||
(p||(s=!1,e=[]),p=!0);break;case "}":p&&0<e.length&&(p=d[e.join("")],c.push(void 0===p?"null":p));p=!1;break;case "[":p||(f?t=!0:f=!0);break;case "]":t?t=!1:f=!1;break;default:u=!0}u&&(p?","==x||" "==x?s=!0:s||e.push(x):t||c.push(x))}return c.join("")};c.ha.RQ=function(){var a=c.ha.$D;return a?a:c.wq()?(c.j.assert(void 0!==f,"ojtranslations module must be defined"),f):{}};return c});