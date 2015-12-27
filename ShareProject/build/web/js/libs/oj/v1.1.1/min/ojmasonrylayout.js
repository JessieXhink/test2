/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){function d(a,c,e,f,h,k){null==d.LD&&(d.LD=d.l7());this.oc=a;this.Ki=c;this.j4=e;f&&f.G_&&(this.bea=f.G_);h&&(h.K_&&(this.DI=h.K_),h.J_&&(this.CI=h.J_),h.O_&&(this.II=h.O_),h.N_&&(this.HI=h.N_),h.L_&&(this.FI=h.L_),h.M_&&(this.OA=h.M_),h.Q_&&(this.KI=h.Q_),h.R_&&(this.MI=h.R_),h.P_&&(this.JI=h.P_));k&&(k.hX&&(this.fm=k.hX),k.a_&&(this.zg=k.a_),k.FY&&(this.WR=k.FY),k.MY&&(this.hG=k.MY),k.r_&&(this.Tm=k.r_),k.XY&&(this.dr=k.XY),k.qZ&&
(this.or=k.qZ),k.pZ&&(this.Hj=k.pZ),k.oZ&&(this.Gm=k.oZ),k.v_&&(this.Cv=k.v_),k.vf&&(this.wW=k.vf),k.ag&&(this.xW=k.ag));c=document.createElement("div");e=c.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";c.appendChild(f);a.insertBefore(c,a.firstChild);this.lW=c;this.ap=f;var l=this;this.Ej=function(a){l.Eo(a)};this.GS=function(){l.o$()};this.Co=function(a){l.yG(a)};this.Do=function(a){l.DG(a)}}(function(){function b(a){for(;a;){a=
a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==q&&c.display!==p||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function c(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===q||d.display===p))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.xc<a.xc?1:a.xc<b.xc?-1:0}function g(a){a&&a.sort(e);return a}function h(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,
rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":
a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}
function l(a,b){f(a).removeClass(b)}function m(a,b){f(a).addClass(b)}a.Da("oj.ojMasonryLayout",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&a.u.warn(v);this.Dp=this.eventNamespace+"ReorderHandle";this.ka=
{};this.ka.qd=!1;this.ka.ve=!1;this.ka.oL=!1;this.ka.Kl=!1;this.ka.Fn=!1;this.zm();this.gm();this.za(!0)},refresh:function(){this._super();var a="rtl"===this.hc()!==this.cf;a&&this.$P();this.za(a)},tk:function(){this._super();this.Nc&&this.za(this.Nc[0])},Zl:function(){this._super();this.Nc&&this.za(this.Nc[0])},Xe:function(a,b,c){this.yba(b);this.Ye(b,c,{launcher:f(b.target).closest(":tabbable")})},za:function(b){if(this.Mt()){this.Nc=null;this.cf="rtl"===this.hc();this.im=a.C.sf();var c=this.element,
e=this.options;if(b){var f=this;this.Tm=function(a){f.Lda(a)};this.dr=function(a){f.n$(a)};this.or=function(){f.yaa()};this.Hj=function(){f.xaa()};this.Gm=function(){f.waa()};if(!this.gf){var p={};p.G_=t;var r={K_:"oj-masonrylayout-transition-resize-to",J_:"oj-masonrylayout-transition-resize-to-fast",O_:"oj-masonrylayout-tile-transition-move-to",N_:"oj-masonrylayout-tile-transition-move-to-fast",L_:"oj-masonrylayout-tile-transition-hide-from",M_:"oj-masonrylayout-tile-transition-hide-to"};r.Q_=s;
r.R_="oj-masonrylayout-tile-transition-show-to";r.P_="oj-masonrylayout-tile-transition-resize-to";var n={};n.hX=m;n.a_=l;n.FY=k;n.MY=h;n.r_=this.Tm;n.XY=this.dr;n.qZ=this.or;n.pZ=this.Hj;n.oZ=this.Gm;n.v_=g;n.vf=a.Components.vf;n.ag=a.Components.ag;this.Sca();this.gf=new d(c[0],this.cf,"enabled"===a.ba.DJ(),p,r,n)}this.pS=function(a){f.n9(a)};this.mS=function(a){f.j9(a)};this.oS=function(a){f.m9(a)};this.nS=function(a){f.k9(a)};this.kS=function(a){f.i9(a)};this.qS=function(a){f.o9(a)};e.reorderHandle&&
this.$V()}this.gf.Hl(b);b&&(this.vg=function(){f.Mf()},a.C.fh(c[0],this.vg))}else c=!1,this.Nc&&(c=this.Nc[0]),this.Nc=[b||c]},_destroy:function(){this.io();var b=this.element;a.C.cj(b[0],this.vg);this.vg=null;this.Pca();for(var c=this.Ok(),d=c.length,e=0;e<d;e++)delete c[e].xc;this.$P();b.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.HW();this.yq=this.Gm=this.Hj=this.or=this.dr=this.Tm=this.qS=this.kS=this.nS=this.oS=this.mS=this.pS=null;this._super()},_setOption:function(b,
c,d){var e=!1;switch(b){case "reorderHandle":this.HW();e=!0;break;case "disabled":a.u.warn(v);break;case "contextMenu":a.C.sf()||(this.io(),c&&this.zm(c))}this._super(b,c,d);e&&c&&this.$V()},resizeTile:function(a,b){var c=this.gf;c.zB()&&c.mB();var d=f(a),e=d[0],g=k(e);if(b==g)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,previousSizeStyleClass:g,sizeStyleClass:b})&&(this.Ft||(this.Ft=
[]),this.Ft.push(e,g,b),c.resizeTile(a,b))},insertTile:function(b,c){var d=this.gf;d.zB()&&d.mB();isNaN(c)&&(c=-1);var e=f(b),g=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(g.BT=c,d.Xf()&&e.addClass(s),e=g.style,e.top="-1px",this.cf?e.right="-1px":e.left="-1px",this.Io(g,c),d.uga(g,c),a.Components.vf(g),this.yq||(this.yq=[]),this.yq.push(b))},removeTile:function(b){var c=this.gf;c.zB()&&c.mB();var d=f(b),e=d[0];if(a.bd.gB(e)){var g=this.Ok(!0),e=g.indexOf(e);0<e&&(this.UE=g[e-1])}!1!==
this._trigger("beforeRemove",null,{tile:d})&&c.nga(b)},Mf:function(){this.Kt||this.NS||this.gf.eha()},Lda:function(a){var b=a.BT;delete a.BT;a={tile:f(a),index:b};this._trigger("insert",null,a)},n$:function(b){a.Components.ag(b);b.parentNode.removeChild(b);this.qA(b);b={tile:f(b)};this._trigger("remove",null,b)},yaa:function(){if(this.yq){for(var a=this.gf,b=this.yq,c=0;c<b.length;c++)a.qha(b[c]);this.yq=null}if(this.Ft){a=this.Ft;for(c=0;c<a.length;c+=3){var b=a[c+1],d=a[c+2],b={tile:f(a[c]),previousSizeStyleClass:b,
sizeStyleClass:d};this._trigger("resize",null,b)}this.Ft=null}this.Kt&&(this.dy?this.l9():this.TD&&this.lS())},xaa:function(){this.NS=!0;this.Qz=null;var b=document.activeElement;b&&a.C.Yj(this.element[0],b)&&(this.Qz=b)},waa:function(){this.NS=!1;var b=this.element[0];if(this.Qz){var c=this.Qz;this.Qz=null;if(this.UE){if(c=this.UE,this.UE=null,c&&a.C.Yj(b,c)){var b=this.Ok(b,!0),d=b.indexOf(c);0<=d&&d<b.length-1?a.bd.BJ(b[d+1]):a.bd.BJ(c)}}else a.C.Yj(b,c)?a.bd.ew(c):a.bd.BJ(b)}},$P:function(){var a=
this.gf;a&&a.destroy();this.gf=null},Mt:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},Ok:function(a){for(var b=this.element.children(t),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||a&&f!==this.ld){var g=f.style;g.visibility!==q&&g.display!==p&&d.push(f)}}return d},Sca:function(){var a=this.Ok();if(a)for(var b=0;b<a.length;b++){var c=a[b];
c.xc||(c.xc=b+1)}},Pca:function(){var b=this.Ok(),c=this.Ok();g(c);for(var d=0;d<b.length;d++){var e=b[d],f=c[d];e!=f&&(a.Components.ag(f),e.parentNode.insertBefore(f,e),a.Components.vf(f),e=b.indexOf(f),e>d&&(b.splice(e,1),b.splice(d,0,f)))}},Io:function(a,b){var c=this.Ok();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.xc&&e.xc>=b+1&&e.xc++}a.xc=b+1},qA:function(a){if(a.xc){var b=this.Ok();if(b)for(var c=0;c<b.length;c++){var d=b[c];d.xc&&d.xc>a.xc&&d.xc--}delete a.xc}},zm:function(a){var b=
null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=a||this.options.contextMenu;c=f.type(b);if("function"==c){try{b=b()}catch(d){b=null}c=f.type(b)}if("string"===c){if(b=f(b)){b.css("display",p);c=this.ka;if(!c)return;c.ve=b;c.qd=!0}this.ka.qd&&a&&this.gm()}}},gm:function(){if(this.ka&&this.ka.qd&&this.options.reorderHandle){var a=this.ka.ve,b=this;a.on("ojselect",f.proxy(this.Ei,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===
f(this).children("a").length){var a=f(this).attr("data-oj-command").slice(17);f(this).replaceWith(b.yi(a));f(this).addClass("oj-menu-item");c=!0}});c&&a.ojMenu("refresh");this.ka.oL=a.find("#"+x);this.ka.Kl=a.find("#"+u);this.ka.Fn=a.find("#"+w)}},io:function(){var a=this.ka;a&&a.qd&&(a.qd=!1,a.ve.off("ojselect"),a.ve=null)},yba:function(a){a=c(a.originalEvent.target,this.element[0]);this.ka.tile=a;if(this.ka.qd){var d=this.ka.kB,e=!1,f=this.ka.oL;if(f){var g=f.hasClass(r),h=!1;d&&a===d&&(h=!0);h&&
!g?(f.addClass(r),e=!0):!h&&g&&(f.removeClass(r),e=!0)}if(f=this.ka.Kl)g=f.hasClass(r),h=!1,d&&a!==d&&a!==b(d)||(h=!0),h&&!g?(f.addClass(r),e=!0):!h&&g&&(f.removeClass(r),e=!0);if(f=this.ka.Fn)g=f.hasClass(r),h=!1,d&&d!==a&&d!==b(a)||(h=!0),h&&!g?(f.addClass(r),e=!0):!h&&g&&(f.removeClass(r),e=!0);e&&this.ka.ve.ojMenu("refresh")}},yi:function(a){var b=z[a];a=D[a];var c=f('\x3ca href\x3d"#"\x3e\x3c/a\x3e');c.text(this.D(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},Naa:function(a){a&&
(this.ka.kB=a)},ST:function(a,b){if(a&&this.ka.kB){var c=this.ka.kB;this.ka.kB=!1;this.w6(c,a,b)}},w6:function(a,c,d){var e=a.xc-1,g=f(a);if(!1!==this._trigger("beforeReorder",null,{tile:g,fromIndex:e})){this.qA(a);var h=c.xc-1;d||h++;var p=this.element[0];d||(c=b(c));this.Io(a,h);p.insertBefore(a,c);this.gf.Hl(!0);this._trigger("reorder",null,{tile:g,fromIndex:e,toIndex:h})}},Ei:function(a,b){var c=b?b.item.attr("id"):void 0;c===x?this.Naa(this.ka.tile):c===u?this.ST(this.ka.tile,!0):c===w&&this.ST(this.ka.tile,
!1)},dS:function(a){var b=this.Ok(!0);g(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},$V:function(){var a=this.element;a.find(this.options.reorderHandle).attr("draggable","true").addClass("oj-draggable");a.on("dragstart"+this.Dp,this.pS).on("dragenter"+this.Dp,this.mS).on("dragover"+this.Dp,this.oS).on("dragleave"+this.Dp,this.nS).on("dragend"+this.Dp,this.kS).on("drop"+this.Dp,this.qS)},HW:function(){var a=this.element;a.find(this.options.reorderHandle).removeAttr("draggable").removeClass("oj-draggable");
a.off(this.Dp)},n9:function(a){if(this.options.reorderHandle&&!this.Kt){var b=c(a.target,this.element[0]);if(b){var d=this.dS(b);b.aH=d;d={tile:f(b),fromIndex:d};!1!==this._trigger("beforeReorder",null,d)&&(a=a.originalEvent,this.z6(b,a.pageX,a.pageY,a.dataTransfer))}}},j9:function(b){b=b.originalEvent;var c=b.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!a.C.Yj(d,c):this.oQ&&(e=(c=document.elementFromPoint(b.clientX,b.clientY))&&(c==d||a.C.Yj(d,c)));e&&((this.oQ=!1,this.qm)?this.ld&&(f(this.ld).css("display",
""),this.gf.Hl(!1,!0)):b.dataTransfer.dropEffect="none")},m9:function(a){var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.y6(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},k9:function(b){var c=b.originalEvent,d=c.relatedTarget;b=this.element[0];var e=!1;e=d?b!=d&&!a.C.Yj(b,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=b&&!a.C.Yj(b,c);e&&(this.oQ=!0,this.ld&&(f(this.ld).css("display",p),this.gf.Hl(!1,!0)))},i9:function(){if(!this.UD){if(this.qm&&this.ld){var b=this.qm,
c=this.ld;a.C.Yj(this.element[0],b)&&(f(c).css("display",""),this.qA(c),c.parentNode.removeChild(c),f(b).css("display",""),this.Io(b,b.xc-1),this.gf.Hl(!1,!0));delete b.aH}this.ld=this.qm=null;this.fy=this.dy=!1;this.aF=null;this.Kt=this.TD=!1}},o9:function(a){var b=this.gf;b.zB()&&b.mB();b=a.originalEvent;this.H6(this.qm,b.pageX,b.pageY);a.stopPropagation();return!1},z6:function(b,c,d,e){this.Kt=!0;this.fy=this.UD=!1;this.qm=b;var g=this.element[0],h=k(b),l=this.ld=document.createElement("div");
l.xc=b.xc;l.className=h+" oj-drop";var h=l.style,r=b.style;h.top=r.top;this.cf?h.right=r.right:h.left=r.left;h=f(b).offset();g.insertBefore(l,b);this.aF=c={left:c-h.left,top:d-h.top};f(b).addClass("oj-drag");e.effectAllowed="move";e.setData("text/html",b.outerHTML);e.setDragImage(b,c.left,c.top);var m=this;this.A6=setTimeout(function(){r.display=p;f(b).removeClass("oj-drag");m.A6=null;a.Components.Cn(b)},0)},y6:function(a,d,e){this.fy=!0;if(!this.dy){var g=this.element[0];d=document.elementFromPoint(d,
e);if((d=c(d,g))&&d!==this.ld&&d!==this.qm){var h=f(g).offset();e=b(this.ld);a=a-h.left>=d.offsetLeft+.5*d.offsetWidth;this.qA(this.ld);a&&!this.cf||!a&&this.cf?(a=b(d))?(this.Io(this.ld,a.xc-1),g.insertBefore(this.ld,a)):(this.Io(this.ld,d.xc),g.appendChild(this.ld)):(this.Io(this.ld,d.xc-1),g.insertBefore(this.ld,d));e!==b(this.ld)&&(this.dy=this.gf.Hl(!1,!0))}}},l9:function(){this.dy=!1},H6:function(b,c,d){this.UD=!0;var e=this.element[0],g=this.ld;this.ld=null;a.Components.ag(b);e.replaceChild(b,
g);a.Components.vf(b);b.xc=g.xc;g=b.style;g.display="";a.Components.Il(b);var h=f(e).offset(),p=this.aF;g.top=d-p.top-h.top+n;c=c-p.left-h.left;this.cf?(g.right=e.offsetWidth-(c+f(b).outerWidth(!0))+n,g.left=""):g.left=c+n;this.aF=null;this.fy?this.TD=this.gf.Hl(!1,!0):this.lS()},lS:function(){this.fy=this.UD=this.Kt=this.TD=!1;var a=this.qm;this.qm=null;var b=a.aH;delete a.aH;var c=this.dS(a),a={tile:f(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)}});
var n="px",q="hidden",p="none",r="oj-disabled",t=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",s="oj-masonrylayout-tile-transition-show-from",v="JET MasonryLayout: 'disabled' option not supported",x="ojmasonrylayoutcut",u="ojmasonrylayoutpastebefore",w="ojmasonrylayoutpasteafter",z={cut:x,"paste-before":u,"paste-after":w},
D={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})();d.prototype.Hl=function(a,c){var d=!1;a?(d=this.xg()?!0:!1,this.gV()):(this.Hj&&this.Hj(),this.NI(c),d=this.GI());return d};d.prototype.destroy=function(){for(var a=this.oc,c=this.Ao(),d=0;d<c.length;d++){var f=c[d].style;this.Ki?f.right="":f.left="";f.top=""}a.removeChild(this.lW);this.xW=this.wW=this.Cv=this.Gm=this.Hj=this.or=this.dr=this.Tm=this.hG=this.WR=this.zg=this.fm=this.oc=this.xk=this.uj=this.Ih=this.vj=
this.wi=this.Do=this.Co=this.GS=this.Ej=this.ap=this.lW=null};d.prototype.resizeTile=function(a,c){var d=this.oc.querySelector(a);if(d){this.vj||(this.vj=[]);var f=this.vj;f.push(d);f.push(c);this.nV=!0;this.lv()}};d.prototype.uga=function(a,c){var d=this.Ao();this.Cv&&this.Cv(d);var f=null;0<=c&&c<d.length&&(f=d[c]);this.oc.insertBefore(a,f);this.lv()};d.prototype.qha=function(a){if(a=this.oc.querySelector(a))this.Ih||(this.Ih=[]),this.Ih.push(a),this.oI=!0,this.Gi!==d.GN&&this.Gi!==d.Hx?this.lv():
this.oI=!1};d.prototype.nga=function(a){if(a=this.oc.querySelector(a))this.uj||(this.uj=[]),this.uj.push(a),this.HS=!0,this.lv()};d.prototype.eha=function(){this.nV||this.HS||this.oI||(this.Hj&&this.Hj(),this.NI(!1),this.GI())};d.prototype.Xf=function(){if(this.JW)return!1;this.D4||(this.c4=this.j4?!1:d.eaa(d.LD[0],d.LD[1]),this.D4=!0);return this.c4};d.prototype.zB=function(){return null!=this.Gi||null!=this.wi&&0<this.wi.length};d.prototype.mB=function(){this.JW=!0;this.$k(this.II);this.$k(this.HI);
this.$k(this.FI);this.$k(this.OA);this.$k(this.KI);this.$k(this.MI);this.$k(this.JI);this.zg(this.ap,this.DI);this.zg(this.ap,this.CI);d.Pd(this.oc,"transitionend",this.Ej);d.Pd(this.oc,"webkitTransitionEnd",this.Ej);for(var a=this.Ao(),c=0;c<a.length;c++){var e=a[c];e.ay&&delete e.ay;d.Pd(e,"transitionend",this.Co);d.Pd(e,"webkitTransitionEnd",this.Co);d.Pd(e,"transitionend",this.Do);d.Pd(e,"webkitTransitionEnd",this.Do)}this.er?(clearTimeout(this.er),this.er=null,this.yG(null)):this.Hr?(clearTimeout(this.Hr),
this.Hr=null,this.nI()):this.Gi===d.Hx||null!=this.wi&&0<this.wi.length?this.Eo(null):this.Gi===d.HN&&this.DG(null);this.JW=!1};d.N7=function(a){var c=d.fu(a);return{Gc:a.offsetWidth+(d.Kf(c.marginLeft)+d.Kf(c.marginRight)),Fg:a.offsetHeight+(d.Kf(c.marginTop)+d.Kf(c.marginBottom))}};d.M7=function(a){a=d.fu(a);return{paddingLeft:d.Kf(a.paddingLeft),paddingRight:d.Kf(a.paddingRight),paddingTop:d.Kf(a.paddingTop),paddingBottom:d.Kf(a.paddingBottom),borderLeftWidth:d.Kf(a.borderLeftWidth),borderRightWidth:d.Kf(a.borderRightWidth),
borderTopWidth:d.Kf(a.borderTopWidth),borderBottomWidth:d.Kf(a.borderBottomWidth)}};d.fu=function(a){var c=a.ownerDocument.defaultView,d=null;return d=c?c.getComputedStyle(a,null):a.currentStyle};d.Kf=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};d.$e=function(a,c,d){a.addEventListener?a.addEventListener(c,d,!1):a.attachEvent&&a.attachEvent("on"+c,d)};d.Pd=function(a,c,d){a.removeEventListener?a.removeEventListener(c,d,!1):a.detachEvent&&a.detachEvent("on"+c,d)};
d.xO=function(a,c){if(a)for(var d=0;d<a.length;d++)if(a[d]==c)return d;return-1};d.eaa=function(a,c){var d=["gecko",16,"trident",6,"webkit",533.1],f=d.length;if(0==f%2)for(var h=0;h<=f-2;h+=2)if(a==d[h]){if(c>=d[1+h])return!0;break}return!1};d.l7=function(){var a=d.Oh,c=null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(c="trident",e=a(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=a(f,/msie (\d+\.\d+);/),-1==e&&(e=a(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&
(e=Math.min(e,document.documentMode-4))):-1!=f.indexOf("applewebkit")?(c="webkit",e=a(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(c="gecko",e=a(f,/rv:(\d+[.]\d+)/));return[c,e]};d.Oh=function(a,c){var d=a.match(c);return d&&(d=d[1])?parseFloat(d):-1};d.h5=function(a,c){return a.WB>c.WB?1:a.WB<c.WB?-1:a.VB>c.VB?1:a.VB<c.VB?-1:0};d.prototype.lv=function(){this.Ez||(this.Gi?this.FH||(this.FH=!0):this.Ez=setTimeout(this.GS,0))};d.prototype.Ao=function(){for(var a=this.oc.querySelectorAll(this.bea),
c=[],d=0;d<a.length;d++){var f=a[d],h=f.style;0<f.offsetWidth&&0<f.offsetHeight&&"hidden"!=h.visibility&&c.push(f)}return c};d.prototype.GI=function(){var a=this.wi,c=this.xg();if(this.vj){var e=this.vj;c||(c=[]);for(var f=0;f<e.length;f+=2){var h=e[f];0>d.xO(c,h)&&c.push(h)}}e=!1;if(!c||1>c.length){if(!a||1>a.length)this.wi=null,this.Eo(null),e=!0}else this.wi=c;a=null!=c&&0<c.length;this.Xf()||e||this.Eo(null);return a};d.prototype.xg=function(){var a=this.oc,c=this.Ao();this.Cv&&this.Cv(c);var e=
this.pE=null;this.km=0;this.ca=1;this.ur=null;var f=[],h=[],k=[],l=this.Ki,m=d.M7(a),n=0,q=[];this.wO=q;for(var p=0;p<c.length;p++){var r=c[p],t=this.hG(r);(e=r.ay)&&delete r.ay;if(!this.pE){var s=t;e&&(s=document.createElement("div"),s.className=e,s=this.hG(s));this.pE=this.E4(r,s)}e=this.pE;this.ur||(this.km=Math.max(Math.floor((a.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.Gc),1),this.E$(this.km,this.ca),n=this.km);t.colSpan>n&&(n=t.colSpan);t.colSpan>this.km&&
(t.colSpan=this.km);for(var v=!1,s=0;s<this.ca;s++){for(var x=0;x<this.km;x++)if(this.f7(x,s,t)){var v=r.style,u={top:v.top};l?u.right=v.right:u.left=v.left;h.push(u);this.AH(r,x,s,t,e,m);l&&k.push(x);v=!0;q.push({VB:x,WB:s,tile:r});break}if(v)break;s===this.ca-1&&this.iO()}}e&&(a=this.ap.style,a.width=n*e.Gc+"px",a.height=this.ca*e.Fg+"px");for(p=0;p<c.length;p++)r=c[p],v=r.style,u=h[p],(l&&parseInt(v.right,10)!==parseInt(u.right,10)||!l&&parseInt(v.left,10)!==parseInt(u.left,10)||parseInt(v.top,
10)!==parseInt(u.top,10))&&f.push(r);1>f.length&&(f=null);return f};d.prototype.gV=function(){var a=this.wO;this.wO=null;for(var a=a.sort(d.h5),c=this.Ao(),e=0;e<c.length;e++){var f=c[e],h=a[e].tile;f!=h&&(this.xW(h),f.parentNode.insertBefore(h,f),this.wW(h),f=d.xO(c,h),f>e&&(c.splice(f,1),c.splice(e,0,h)))}};d.prototype.E$=function(a,c){for(var d=this.ur=[],f=0;f<c;f++){var h=[];d.push(h);for(var k=0;k<a;k++)h[k]=!1}};d.prototype.iO=function(){this.ca++;var a=[];this.ur.push(a);for(var c=0;c<this.km;c++)a[c]=
!1};d.prototype.f7=function(a,c,d){var f=d.colSpan;d=d.rowSpan;for(var h=c;h<c+d;h++){h>=this.ca&&this.iO();for(var k=a;k<a+f;k++)if(k>=this.km||this.ur[h][k])return!1}return!0};d.prototype.AH=function(a,c,d,f,h,k){var l=f.colSpan;f=f.rowSpan;for(var m=this.ur,n=d;n<d+f;n++)for(var q=c;q<c+l;q++)m[n][q]=!0;a=a.style;a.top=k.paddingTop+d*h.Fg+"px";this.Ki?a.right=k.paddingRight+c*h.Gc+"px":a.left=k.paddingLeft+c*h.Gc+"px"};d.prototype.P3=function(a){for(var c=this.Ao(),d=0;d<c.length;d++)this.fm(c[d],
a)};d.prototype.$k=function(a){for(var c=this.Ao(),d=0;d<c.length;d++)this.zg(c[d],a)};d.prototype.NI=function(a){this.ET||(this.hV=a,this.Xf()&&(this.P3(a?this.HI:this.II),this.fm(this.ap,a?this.CI:this.DI),d.$e(this.oc,"transitionend",this.Ej),d.$e(this.oc,"webkitTransitionEnd",this.Ej)),this.ET=!0)};d.prototype.Eo=function(a){var c=!0;if(this.wi){var e=this.wi;if(a){var f=a.target;for(a=0;a<e.length;a++)if(f===e[a]){e.splice(a,1);break}}else this.Xf()||(e=this.wi=[]);0<e.length&&(c=!1)}if(c){if(this.vj&&
(c=this.vj,this.vj=null,this.Xf()))for(a=0;a<c.length;a+=2)this.zg(c[a],this.JI);this.hV?(this.Xf()&&(this.$k(this.HI),this.zg(this.ap,this.CI)),this.hV=!1):this.Xf()&&(this.$k(this.II),this.zg(this.ap,this.DI));this.Xf()&&(d.Pd(this.oc,"transitionend",this.Ej),d.Pd(this.oc,"webkitTransitionEnd",this.Ej));this.oI=this.HS=this.nV=this.ET=!1;this.gV();this.or&&this.or();if(this.Gi===d.Hx)if(this.Xf()){var h=this;this.Hr=setTimeout(function(){h.nI()},0)}else this.nI();else this.Gi||this.Gm&&this.Gm()}};
d.prototype.E4=function(a,c){var e=d.N7(a);return{Gc:e.Gc/c.colSpan,Fg:e.Fg/c.rowSpan}};d.prototype.o$=function(){this.Ez&&(clearTimeout(this.Ez),this.Ez=null);this.Hj&&this.Hj();this.Gi=d.GN;if(this.uj&&this.Xf()){for(var a=this.uj,c=0;c<a.length;c++){var e=a[c];d.$e(e,"transitionend",this.Co);d.$e(e,"webkitTransitionEnd",this.Co);this.fm(e,this.FI)}var f=this;this.er=setTimeout(function(){for(var c=0;c<a.length;c++){var d=a[c];f.zg(d,f.FI);f.fm(d,f.OA)}},0)}else this.yG(null)};d.prototype.yG=function(a){this.er&&
(clearTimeout(this.er),this.er=null);if(a){a.preventDefault();a.stopPropagation();a=a.target;this.zg(a,this.OA);d.Pd(a,"transitionend",this.Co);d.Pd(a,"webkitTransitionEnd",this.Co);var c=this.uj;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===a){c.splice(e,1);this.xk||(this.xk=[]);var h=this.xk;h.push(a);break}}1>c.length&&(this.uj=null)}}else if(!this.Xf()&&(c=this.uj)){for(e=0;e<c.length;e++)f=c[e],this.xk||(this.xk=[]),h=this.xk,h.push(f);this.uj=null}if(!this.uj){if(this.xk){h=this.xk;for(e=
0;e<h.length;e++)a=h[e],this.Xf()&&this.zg(a,this.OA),c=a.style,this.Ki?c.right="":c.left="",c.top="",this.dr&&this.dr(a);this.xk=null}this.Gi=d.Hx;this.NI(!1);if(this.vj)for(h=this.vj,e=0;e<h.length;e+=2)a=h[e],c=h[e+1],f=this.WR(a),this.zg(a,f),this.fm(a,c),this.Xf()&&(this.fm(a,this.JI),a.ay=f);this.GI()}};d.prototype.nI=function(){this.Hr&&(clearTimeout(this.Hr),this.Hr=null);this.Gi=d.HN;if(this.Ih&&this.Xf())for(var a=this.Ih,c=0;c<a.length;c++){var e=a[c];d.$e(e,"transitionend",this.Do);d.$e(e,
"webkitTransitionEnd",this.Do);this.fm(e,this.MI);this.zg(e,this.KI)}else{if(this.Ih)for(a=this.Ih,c=0;c<a.length;c++)e=a[c],this.zg(e,this.KI);this.DG(null)}};d.prototype.DG=function(a){if(a){a.preventDefault();a.stopPropagation();a=a.target;this.zg(a,this.MI);d.Pd(a,"transitionend",this.Do);d.Pd(a,"webkitTransitionEnd",this.Do);var c=this.Ih;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===a){c.splice(e,1);this.Tm&&this.Tm(a);break}}1>c.length&&(this.Ih=null)}}else if(!this.Xf()&&(c=this.Ih)){for(e=
0;e<c.length;e++)f=c[e],this.Tm&&this.Tm(f);this.Ih=null}this.Ih||(this.Gi=null,this.Gm&&this.Gm(),this.FH&&(this.FH=!1,this.lv()))};d.GN=1;d.Hx=2;d.HN=3});