/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(a,f){a.be=function(a){this._init(a)};a.be.prototype._init=function(a){this.oc=a;this.KA=this.Mv=!1;this.NA=f.proxy(this.hea,this);this.Kv=f.proxy(this.fea,this);this.xI=f.proxy(this.gea,this);this.oc.on({touchstart:this.NA,touchend:this.Kv,touchmove:this.xI,touchcancel:this.Kv})};a.be.prototype._destroy=function(){this.oc&&this.NA&&(this.oc.off({touchstart:this.NA,touchmove:this.xI,touchend:this.Kv,touchcancel:this.Kv}),this.xI=this.Kv=this.NA=void 0)};a.be.prototype.ep=
function(a,b){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var c=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);c.target.dispatchEvent(e)}};a.be.prototype.hea=function(a){this.Mv||(this.Mv=!0,this.KA=!1,this.ep(a,"mouseover"),this.ep(a,"mousemove"),this.ep(a,"mousedown"))};a.be.prototype.gea=function(a){this.Mv&&(this.KA=!0,this.ep(a,
"mousemove"))};a.be.prototype.fea=function(a){this.Mv&&(this.ep(a,"mouseup"),this.ep(a,"mouseout"),this.KA||"touchend"!=a.type||this.ep(a,"click"),this.Mv=!1)};a.be.Rx="_ojTouchProxy";a.be.iX=function(d){d=f(d);var b=d.data(a.be.Rx);b||(b=new a.be(d),d.data(a.be.Rx,b));return b};a.be.c_=function(d){d=f(d);var b=d.data(a.be.Rx);b&&(b._destroy(),d.removeData(a.be.Rx))}});