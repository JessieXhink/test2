/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","promise"],function(a,f){a.Yd=function(){this.Init()};a.b.ga(a.Yd,a.Ng,"oj.FilmStripPagingModel");a.Yd.prototype.Init=function(){a.Yd.q.Init.call(this);this.Jc=-1;this.Qd=0;this.Ra=-1};a.b.i("FilmStripPagingModel.prototype.Init",{Init:a.Yd.prototype.Init});a.Yd.prototype.nha=function(a){this.Qd=a};a.Yd.prototype.getPage=function(){return this.Jc};a.b.i("FilmStripPagingModel.prototype.getPage",{getPage:a.Yd.prototype.getPage});a.Yd.prototype.setPage=
function(a,b){a=parseInt(a,10);try{var c=this.getPageCount(),e=this.Jc,f=this.Ra,h=f;b&&b.pageSize&&(h=b.pageSize);var k=Math.ceil(this.Qd/h);if(0>a||a>k-1)throw Error("JET FilmStrip: Invalid 'page' set: "+a);var l=!1;if(a!=e||h!=f){if(!1===this.handleEvent("beforePage",{page:a,previousPage:e}))return Promise.reject(null);l=!0}this.Jc=a;this.Ra=h;var m=this.getPageCount(),n=this;return new Promise(function(b){c!=m&&n.handleEvent("pageCount",{pageCount:m,previousPageCount:c});l&&n.handleEvent("page",
{page:a,previousPage:e});b(null)})}catch(q){return Promise.reject(null)}};a.b.i("FilmStripPagingModel.prototype.setPage",{setPage:a.Yd.prototype.setPage});a.Yd.prototype.getStartItemIndex=function(){return this.Jc*this.Ra};a.b.i("FilmStripPagingModel.prototype.getStartItemIndex",{getStartItemIndex:a.Yd.prototype.getStartItemIndex});a.Yd.prototype.getEndItemIndex=function(){return Math.min(this.getStartItemIndex()+this.Ra,this.Qd)-1};a.b.i("FilmStripPagingModel.prototype.getEndItemIndex",{getEndItemIndex:a.Yd.prototype.getEndItemIndex});
a.Yd.prototype.getPageCount=function(){return Math.ceil(this.Qd/this.Ra)};a.b.i("FilmStripPagingModel.prototype.getPageCount",{getPageCount:a.Yd.prototype.getPageCount});a.Yd.prototype.totalSize=function(){return this.Qd};a.b.i("FilmStripPagingModel.prototype.totalSize",{totalSize:a.Yd.prototype.totalSize});(function(){function d(a){var b=f("\x3cdiv\x3e\x3c/div\x3e");b.text(a);return b[0].innerHTML}function b(a){a.css("-webkit-transform",q).css("-ms-transform",q).css("transform",q)}function c(a,b){a.css("-webkit-transform",
b).css("-ms-transform",b).css("transform",b)}a.Da("oj.ojFilmStrip",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{maxItemsPerPage:0,orientation:"horizontal",currentItem:0,arrowPlacement:"adjacent",arrowVisibility:"auto"},_ComponentCreate:function(){this._super();var b=this.element;b.addClass("oj-filmstrip oj-component").attr("tabindex",0).attr("role","region");b.uniqueId();b=this.options;b.disabled&&a.u.warn(ga);if(b.orientation!==w&&b.orientation!==Z)throw Error(r+
b.orientation);if(b.arrowPlacement!==e&&b.arrowPlacement!==ba)throw Error(t+b.arrowPlacement);if(b.arrowVisibility!==fa&&b.arrowVisibility!==x&&b.arrowVisibility!==z&&b.arrowVisibility!==h)throw Error(s+b.arrowVisibility);this.Uw=this.eventNamespace+"Touch";this.IB=this.eventNamespace+"Mouse";this.lZ=this.eventNamespace+"Key";this.EK=this.eventNamespace+"NavArrowHoverable";this.za(!0)},refresh:function(){this._super();this.za(!1)},getItemsPerPage:function(){return this.Ko},getPagingModel:function(){return this.Od},
tk:function(){this._super();this.Nc&&this.za(this.Nc[0])},Zl:function(){this._super();this.Nc&&this.za(this.Nc[0])},za:function(b){if(this.Mt()){this.Nc=null;this.cf="rtl"===this.hc();this.im=a.C.sf();var c=this.element,d=this;b?(this.Ko=0,this.AG=function(a){d.zG(a)},this.Od=new a.Yd,this.lm=0,this.Su=-1,this.Ej=function(){d.Eo()},this.vg=function(){d.Mf()},this.im&&(this.AS=function(a){d.IG(a)},this.zS=function(a){d.HG(a)},this.FG=function(a){d.EG(a)},this.R3()),this.tS=function(a){d.K9(a)},this.uS=
function(a){d.L9(a)},this.vS=function(a){d.O9(a)},this.N3(),this.sS=function(a){d.Du(a)},this.L3()):this.ZP();for(var e=c.children(),f=0;f<e.length;f++)a.Components.ag(e[f]);b&&(b=this.Od,b.nha(e.length),b.on("page",this.AG));this.Gea();this.oO();for(f=0;f<e.length;f++)a.Components.vf(e[f]);a.C.fh(c[0],this.vg)}else c=!1,this.Nc&&(c=this.Nc[0]),this.Nc=[b||c]},_destroy:function(){this.im&&(this.Aca(),this.FG=this.zS=this.AS=null);this.vca();this.vS=this.uS=this.tS=null;this.uca();this.sS=null;this.ZP();
this.Od.off("page",this.AG);this.Ej=this.vg=this.Od=this.AG=null;var a=this.element;a.removeClass("oj-filmstrip oj-component "+F).removeAttr("tabindex role");a.removeUniqueId();this._super()},ZP:function(){a.C.cj(this.element[0],this.vg);this.Su=-1;this.mv&&(clearTimeout(this.mv),this.mv=null);for(var b=this.hz(),c=0;c<b.length;c++)a.Components.ag(b[c]);this.bP();this.LF().unwrap();this.rea();for(c=0;c<b.length;c++)a.Components.vf(b[c])},_setOption:function(b,c,d){var f=this.options,g=!1,k=-1,l=this.Od,
m=l.getPage();switch(b){case "disabled":a.u.warn(ga);break;case "orientation":if(c!==w&&c!==Z)throw Error(r+c);g=f.orientation!=c;break;case "maxItemsPerPage":g=f.maxItemsPerPage!=c;break;case "arrowPlacement":if(c!==e&&c!==ba)throw Error(t+c);g=f.arrowPlacement!=c;break;case "arrowVisibility":if(c!==fa&&c!==x&&c!==z&&c!==h)throw Error(s+c);g=f.arrowVisibility!=c;break;case D:if(f.currentItem!=c&&(k=this.nF(c),0>k||k>=l.getPageCount()))throw Error(p+c);}this._super(b,c,d);switch(b){case D:-1<k&&k!=
m&&l.setPage(k)}g&&this.za(!1)},Mf:function(){if(!this.AO)this.AO=!0,this.oO(!0),this.AO=!1;else if(!this.mv){var a=this;this.mv=setTimeout(function(){a.mv=null;a.Mf()},0)}},Fb:function(){return this.options.orientation!==Z},iu:function(){return this.Fb()?this.cf?"right":"left":"top"},to:function(){return this.Fb()?"width":"height"},Mt:function(){var a=document.createElement("div"),b=a.style;b.position="absolute";b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&
0<a.offsetHeight}catch(d){}b.removeChild(a);return c},Gea:function(){var a=this.element,b=this.Fb();a.children().addClass(J).wrap("\x3cdiv class\x3d'"+G+" "+N+"'\x3e\x3c/div\x3e");var c=this.iu();this.Ii=c=a.children().wrapAll("\x3cdiv class\x3d'"+G+" "+O+"' style\x3d'"+c+": 0px;'\x3e\x3c/div\x3e").parent();var d=this.options;d.arrowVisibility!==x&&d.arrowPlacement===e&&(this.DE=c.wrap("\x3cdiv class\x3d'oj-filmstrip-content-container'\x3e\x3c/div\x3e").parent());a.addClass(G);b||a.addClass(L);d.arrowVisibility!==
x&&(this.Ij=this.S5(),this.Hi=this.D5(),this.lH()&&this.Bda())},rea:function(){var a=this.element,b=this.hz();this.Vda();this.Ij&&(this.tq(this.Ij),this.Ij=null);this.Hi&&(this.tq(this.Hi),this.Hi=null);var c=a.children(S+C);c&&c.remove();b.removeClass(J).unwrap().unwrap();this.Ii=null;this.DE&&(b.unwrap(),this.DE=null);a.removeClass(G+" "+L)},Bda:function(){this.element.on("mouseenter"+this.EK,function(a){f(a.currentTarget).hasClass("oj-disabled")||f(a.currentTarget).addClass(F)}).on("mouseleave"+
this.EK,function(a){f(a.currentTarget).removeClass(F)})},Vda:function(){this.element.off(this.EK)},lH:function(){var a=this.options,b=a.arrowVisibility;return b===z||b===h&&a.arrowPlacement===ba},j$:function(){return 0<this.Od.getPage()},i$:function(){var a=this.Od;return a.getPage()<a.getPageCount()-1},Dba:function(){if(this.j$()){var a=this.Od;a.setPage(a.getPage()-1)}},fba:function(){if(this.i$()){var a=this.Od;a.setPage(a.getPage()+1)}},hQ:function(a,b){this.options.arrowPlacement===e?b.css("visibility",
a?"":x):b.parent().css("display",a?"":y)},yea:function(){if(this.options.arrowVisibility!==x){var a=this.Od,b=a.getPage(),a=a.getPageCount();this.hQ(0!==b,this.Ij);this.hQ(b!==a-1,this.Hi)}},S5:function(){var a=this.element,b=this.Fb()?ea:X,c=this.yP(b);this.options.arrowPlacement===ba?a.append(c):a.prepend(c);var a=d(this.D("labelAccArrowPreviousPage")),e=d(this.D("tipArrowPreviousPage")),b=this.xP(c,b,a,e),f=this;b.on("click",function(){f.Dba()});return b},D5:function(){var a=this.element,b=this.Fb()?
B:E,c=this.yP(b);a.append(c);var a=d(this.D("labelAccArrowNextPage")),e=d(this.D("tipArrowNextPage")),b=this.xP(c,b,a,e),f=this;b.on("click",function(){f.fba()});return b},yP:function(a){var b=f(document.createElement("div"));b.addClass(C+" "+a);this.options.arrowPlacement===ba&&(b.addClass("oj-filmstrip-arrow-container-overlay"),this.lH()&&b.addClass(A));return b},xP:function(a,b,c,d){var f="\x3cdiv class\x3d'"+H+" oj-default oj-enabled "+b+"' role\x3d'button' tabindex\x3d'-1'";a.append(f+("\x3e\x3cspan class\x3d'oj-filmstrip-arrow-icon "+
b+" oj-component-icon'\x3e\x3c/span\x3e\x3c/div\x3e"));b=this.element.attr("id");a=a.children(S+H).eq(0);a.uniqueId();f=a.attr("id");c&&a.attr("aria-label",c);d&&a.attr("title",d);a.attr("aria-labelledby",f+" "+b);this._hoverable(a);this.Bt(a);this.options.arrowPlacement===e&&this.lH()&&a.addClass(A);return a},LF:function(){return this.Ii.find(S+N)},hz:function(){return this.Ii.find(S+J)},vm:function(){return this.Ii.children(S+T)},bP:function(){var a=this.Ii;this.vm().css(v,q).css(aa,q);this.LF().css(v,
q).css(aa,q);a.css(this.to(),q)},oO:function(b){this.bP();var c=this.options,d=this.Fb(),h=c.maxItemsPerPage,p=1>h,l=this.element,r=this.LF();if(0>this.Su){var m=this.tR(c.currentItem),m=f(r[m]),t=m.children(S+J);t.css(k,q);a.Components.Il(t[0]);this.Su=d?m.width():m.height()}m=d?l.width():l.height();c.arrowVisibility!==x&&c.arrowPlacement===e&&(l=l.children(S+C).eq(0),d=d?l.width():l.height(),m-=2*d);this.lm=m;p||(d=Math.max(Math.floor(m/this.Su),1),d<h&&(h=d));h=p?Math.max(Math.floor(m/this.Su),
1):h;p=m/h;r.css(v,p+Y).css(aa,p+Y);p=Math.ceil(r.length/h);t=this.vm();d=!1;l=this.Od;if(l.getPageCount()!=p||this.Ko!=h||!t||1>t.length){d=!0;if(b)for(var n=0;n<r.length;n++)a.Components.ag(r[n]);t&&0<t.length&&r.unwrap();for(n=0;n<r.length;n+=h)r.slice(n,n+h).wrapAll("\x3cdiv class\x3d'"+G+" "+T+"' style\x3d'"+k+": "+y+";' "+g+"\x3d'true'\x3e\x3c/div\x3e");if(b)for(n=0;n<r.length;n++)a.Components.vf(r[n])}t=this.vm();t.css(v,m+Y).css(aa,m+Y);b=this.DE;this.Ii.css(this.to(),m);b&&b.css(this.to(),
m);b=0;if(c.currentItem||0===c.currentItem)b=this.nF(c.currentItem,h);l.getPageCount()!=p||this.Ko!=h||l.getPage()!=b?l.setPage(b,{pageSize:h}):d&&(c=l.getPage(),this.zG({previousPage:c,page:c}))},zG:function(a){var b=a.page,c=a.previousPage;a=this.Ii;var d=this.vm(),e=this.Od.Ra,g=0>c||c==b||this.Ko!=e;this.Ko=e;e=null;g||(e=f(d[c]));var h=this.iu(),p=f(d[b]),k=p.is(u);k&&this.RI(p);var l=this.zq;-1<c&&!g&&(l=!0,a.css(this.to(),2*this.lm),b<c&&k&&a.css(h,-this.lm+Y),b>c?(e.addClass(R),p.addClass(M)):
(e.addClass(K),p.addClass(P)));if(l){var r=this,m=this.zq;m&&0>c&&d.filter(Q).addClass(I);setTimeout(function(){r.HQ(b,c,g,m)},25)}else this.HQ(b,c,g)},HQ:function(a,d,e,g){var h=this.Ii;e||(this.BO=!0,h.on("transitionend"+this.eventNamespace+" webkitTransitionEnd"+this.eventNamespace,this.Ej));e?this.Eo():(e=this.vm(),g&&b(e),-1<d?(g=a>d,d=f(e[d]),a=f(e[a]),d.addClass(I),a.addClass(I),g?(d.removeClass(R),a.removeClass(M),d.addClass(W),a.addClass(ca)):(d.removeClass(K),a.removeClass(P),d.addClass(V),
a.addClass(U))):g&&(a=e.filter(Q),c(a,"translate3d(0, 0, 0)")))},Eo:function(){this.BO=!1;var c=this.Ii,d=this.iu();c.off(this.eventNamespace).css(this.to(),this.lm).css(d,"0px");d=null;if(a.bd.gB(c[0])||this.Hi&&a.bd.gB(this.Hi)||this.Ij&&a.bd.gB(this.Ij))d=document.activeElement;for(var c=this.Od.getPage(),e=this.vm(),g=0;g<e.length;g++)g!=c&&this.ES(f(e[g]));e.removeClass(I+" "+W+" "+ca+" "+V+" "+U);b(e);this.yea();d&&f(d).is(u)&&(d=this.element,(e=a.bd.qY(e[c]))?a.bd.ew(e):a.bd.ew(d[0]));this.nF(this.options.currentItem)!=
c&&(c=this.jR(c),this.option(D,c,{_context:{rd:!0}}))},tR:function(b){var c=-1,d=this.hz();if("number"===typeof b)0<=b&&b<d.length&&(c=b);else if("string"===typeof b&&a.C.BB(b))for(var e=0;e<d.length;e++){var f=d[e].id;if(f&&0<f.length&&f===b){c=e;break}}return c},nF:function(a,b){var c=this.tR(a),d=-1;-1<c&&(void 0===b&&(b=this.Ko),d=Math.floor(c/b));return d},jR:function(a,b,c){var d=this.Od;void 0===b&&(b=d.getPageCount());return 0<=a&&a<b&&(b=this.hz(),void 0===c&&(c=this.Ko),a*=c,a<b.length)?
(c=b[a].id)&&0<c.length?c:a:-1},ES:function(b){a.Components.Cn(b[0]);b.css(k,y).attr(g,"true");b.find(S+J).css(k,y)},RI:function(b){b.css(k,q).removeAttr(g);b.find(S+J).css(k,q);a.Components.Il(b[0])},L3:function(){this.element.on("keydown"+this.lZ,this.sS)},uca:function(){this.element.off(this.lZ)},N3:function(){this.element.on("mousedown"+this.IB,this.tS).on("mousemove"+this.IB,this.uS).on("mouseup"+this.IB,this.vS)},vca:function(){this.element.off(this.IB)},R3:function(){this.element.on("touchstart"+
this.Uw,this.AS).on("touchmove"+this.Uw,this.zS).on("touchend"+this.Uw,this.FG).on("touchcancel"+this.Uw,this.FG)},Aca:function(){this.element.off(this.Uw)},Du:function(a){var b=this.Od,c=b.getPage(),d=-1;switch(a.keyCode){case f.ui.keyCode.RIGHT:d=this.cf?c-1:c+1;break;case f.ui.keyCode.LEFT:d=this.cf?c+1:c-1;break;case f.ui.keyCode.DOWN:d=c+1;break;case f.ui.keyCode.UP:d=c-1;break;case f.ui.keyCode.HOME:d=0;break;case f.ui.keyCode.END:d=b.getPageCount()-1;break;default:return}-1<d&&d<b.getPageCount()&&
b.setPage(d);a.preventDefault()},K9:function(a){this.rQ(a.originalEvent)},L9:function(a){this.qQ(a,a.originalEvent)},O9:function(){this.pQ()},IG:function(a){a=a.originalEvent.touches;1===a.length&&this.rQ(a[0])},HG:function(a){this.qQ(a,a.originalEvent.touches[0]);(this.xi||this.Dr)&&a.preventDefault()},EG:function(){this.pQ()},rQ:function(a){1<this.Od.getPageCount()&&!this.BO&&(this.xi=!0,this.zq=!1,this.LA=this.Fb()?a.pageX:a.pageY)},A$:function(a){this.LA=this.Fb()?a.pageX:a.pageY;a=this.iu();
var b=this.Ii,c=this.Od,d=this.vm(),e=1;0<c.getPage()&&(this.RI(f(d[c.getPage()-1])),b.css(a,-this.lm+Y),e++);c.getPage()<c.getPageCount()-1&&(this.RI(f(d[c.getPage()+1])),e++);1<e&&b.css(this.to(),e*this.lm);this.BI=parseInt(b.css(a),10)},qQ:function(a,b){if(this.xi){var d=this.Fb(),e=(d?b.pageX:b.pageY)-this.LA;if(this.zq){var g=d&&this.cf?0<e:0>e,h=this.Od,p=h.getPage();if(g&&p<h.getPageCount()-1||!g&&0<p){var k=this.element[0],r=Math.min(m*(d?k.offsetWidth:k.offsetHeight),n),t=this.iu(),s=this.Ii,
k=this.vm();Math.abs(e)>=r?(d=g?p+1:p-1,this.jR(d),e=g?p-1:p+1,-1<p&&p<h.getPageCount()&&this.ES(f(k[e])),g&&-1<e&&(k=parseInt(s.css(t),10),s.css(t,k+this.lm+Y)),s.css(this.to(),2*this.lm),this.xi=!1,h.setPage(d)):(h=d&&this.cf?-e:e,h=d?"translate3d("+h+"px, 0, 0)":"translate3d(0, "+h+"px, 0)",c(k.filter(Q),h));this.Dr=!0}this.Dr&&(a.preventDefault(),a.stopPropagation())}else Math.abs(e)>l&&(this.A$(b),this.zq=!0)}},pQ:function(){if(this.xi&&this.zq){var a=this.Od.getPage();this.zG({previousPage:a,
page:a})}this.Dr=this.zq=this.xi=!1},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-filmstrip-start-arrow"===a?this.widget().find(S+H+S+ea)[0]:"oj-filmstrip-end-arrow"===a?this.widget().find(S+H+S+B)[0]:"oj-filmstrip-top-arrow"===a?this.widget().find(S+H+S+X)[0]:"oj-filmstrip-bottom-arrow"===a?this.widget().find(S+H+S+E)[0]:null}});var e="adjacent",g="aria-hidden",h="auto",k="display",l=3,m=.33,n=100,q="",p="JET FilmStrip: Value of 'currentItem' option not found: ",
r="JET FilmStrip: Unsupported value set as 'orientation' option: ",t="Unsupported value set as 'arrowPlacement' option: ",s="Unsupported value set as 'arrowVisibility' option: ",v="flex-basis",x="hidden",u=":hidden",w="horizontal",z="hover",D="currentItem",y="none",E="oj-bottom",B="oj-end",H="oj-filmstrip-arrow",C="oj-filmstrip-arrow-container",A="oj-filmstrip-arrow-transition",G="oj-filmstrip-container",F="oj-filmstrip-hover",J="oj-filmstrip-item",N="oj-filmstrip-item-container",T="oj-filmstrip-page",
O="oj-filmstrip-pages-container",I="oj-filmstrip-transition",M="oj-filmstrip-transition-next-newpage-from",R="oj-filmstrip-transition-next-oldpage-from",P="oj-filmstrip-transition-prev-newpage-from",K="oj-filmstrip-transition-prev-oldpage-from",ca="oj-filmstrip-transition-next-newpage-to",W="oj-filmstrip-transition-next-oldpage-to",U="oj-filmstrip-transition-prev-newpage-to",V="oj-filmstrip-transition-prev-oldpage-to",L="oj-filmstrip-vertical",ea="oj-start",X="oj-top",ba="overlay",S=".",Y="px",Z=
"vertical",fa="visible",Q=":visible",aa="-webkit-flex-basis",ga="JET FilmStrip: 'disabled' option not supported"})()});