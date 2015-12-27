/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery"],function(a,f){a.X=function(a,b,c){this.Init(a,b,c)};o_("Message",a.X,a);a.X.kj={CONFIRMATION:"confirmation",INFO:"info",WARNING:"warning",ERROR:"error",FATAL:"fatal"};o_("Message.SEVERITY_TYPE",a.X.kj,a);a.X.Ob={FATAL:5,ERROR:4,WARNING:3,INFO:2,CONFIRMATION:1};o_("Message.SEVERITY_LEVEL",a.X.Ob,a);a.b.ga(a.X,a.b,"oj.Message");a.X.prototype.Init=function(d,b,c){a.X.q.Init.call(this);this.summary=d;this.detail=b;this.severity=c||a.X.kj.ERROR};a.b.i("Message.prototype.Init",
{Init:a.X.prototype.Init});a.X.prototype.uX=function(){return!0};a.X.prototype.en=function(d){return d&&a.X.ps(this.severity)===a.X.ps(d.severity)&&this.summary===d.summary&&this.detail===d.detail?!0:!1};a.b.i("Message.prototype.equals",{en:a.X.prototype.en});a.X.prototype.clone=function(){return new a.X(this.summary,this.detail,this.severity)};a.b.i("Message.prototype.clone",{clone:a.X.prototype.clone});a.X.ps=function(d){d&&("string"===typeof d?(d=a.X.fD.indexOf(d,1),d=-1===d?a.X.Ob.ERROR:d):"number"===
typeof d&&d<a.X.Ob.CONFIRMATION&&d>a.X.Ob.FATAL&&(d=a.X.Ob.ERROR));return d?d:a.X.Ob.ERROR};o_("Message.getSeverityLevel",a.X.ps,a);a.X.Zfa=function(d){var b;d&&("string"===typeof d?(b=a.X.fD.indexOf(d,1),-1===b&&(d=a.X.kj.ERROR)):"number"===typeof d&&(d=d<a.X.Ob.CONFIRMATION&&d>a.X.Ob.FATAL?a.X.kj.ERROR:a.X.fD[d]));return d||a.X.kj.ERROR};o_("Message.getSeverityType",a.X.Zfa,a);a.X.ls=function(d){var b=-1,c;d&&0<d.length&&f.each(d,function(d,g){g&&(c=a.X.ps(g.severity));b=b<c?c:b});return b};o_("Message.getMaxSeverity",
a.X.ls,a);a.X.isValid=function(d){return a.X.ls(d)>=a.X.Ob.ERROR?!1:!0};o_("Message.isValid",a.X.isValid,a);a.X.fD=["none",a.X.kj.CONFIRMATION,a.X.kj.INFO,a.X.kj.WARNING,a.X.kj.ERROR,a.X.kj.FATAL];a.Bc=function(a,b,c,e){this.Init(a,b,c,e)};a.b.ga(a.Bc,a.X,"oj.ComponentMessage");a.Bc.Mp={IC:"shown",vC:"hidden"};a.Bc.l1={display:a.Bc.Mp.IC,context:""};a.Bc.prototype.Init=function(d,b,c,e){a.Bc.q.Init.call(this,d,b,c);this.hb=f.extend({},a.Bc.l1,e)};a.Bc.prototype.en=function(d){return a.Bc.q.en.call(this,
d)&&this.hb.display===d.hb.display};a.Bc.prototype.clone=function(){return new a.Bc(this.summary,this.detail,this.severity,this.hb)};a.Bc.prototype.uX=function(){return!(this.hb&&this.hb.display&&this.hb.display===a.Bc.Mp.vC)};a.Bc.prototype.h7=function(){this.hb&&a.Bc.Mp.vC===this.hb.display&&(this.hb.display=a.Bc.Mp.IC)};a.Bc.prototype.mT=function(){return this.hb&&this.hb.context?!0:!1}});