(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){

; jQuery = global.jQuery = require("/Users/stan/prog/balancetonrib/node_modules/jquery/dist/jquery.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/*!
 * Bootstrap v3.0.1 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
}).call(global, module, undefined, undefined);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/stan/prog/balancetonrib/node_modules/jquery/dist/jquery.min.js":4}],2:[function(require,module,exports){
(function (global){

; jQuery = global.jQuery = require("/Users/stan/prog/balancetonrib/node_modules/jquery/dist/jquery.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(data[fields[0]], token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(data[fields[i]], token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field  = function(name, result) {
			if (name === '$score') return result.score;
			return self.items[result.id][name];
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = String(a || '').toLowerCase();
		b = String(b || '').toLowerCase();
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || ($ && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aÀÁÂÃÄÅàáâãäå]',
		'c': '[cÇçćĆčČ]',
		'd': '[dđĐďĎ]',
		'e': '[eÈÉÊËèéêëěĚ]',
		'i': '[iÌÍÎÏìíîï]',
		'n': '[nÑñňŇ]',
		'o': '[oÒÓÔÕÕÖØòóôõöø]',
		'r': '[rřŘ]',
		's': '[sŠš]',
		't': '[tťŤ]',
		'u': '[uÙÚÛÜùúûüůŮ]',
		'y': '[yŸÿýÝ]',
		'z': '[zŽž]'
	};

	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.9.0)
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(__browserify_shim_require__('jquery'), __browserify_shim_require__('sifter'), __browserify_shim_require__('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
	
		var highlight = function(node) {
			var skip = 0;
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};
	
		return $element.each(function() {
			highlight(this);
		});
	};
	
	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];
	
			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	
	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};
	
	var IS_MAC        = /Mac/.test(navigator.userAgent);
	
	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;
	
	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;
	
	
	var isset = function(object) {
		return typeof object !== 'undefined';
	};
	
	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return '';
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};
	
	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};
	
	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};
	
	var hook = {};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};
	
	/**
	 * Builds a hash table out of an array of
	 * objects, using the specified `key` within
	 * each object.
	 *
	 * @param {string} key
	 * @param {mixed} objects
	 */
	var build_hash_table = function(key, objects) {
		if (!$.isArray(objects)) return objects;
		var i, n, table = {};
		for (i = 0, n = objects.length; i < n; i++) {
			if (objects[i].hasOwnProperty(key)) {
				table[objects[i][key]] = objects[i];
			}
		}
		return table;
	};
	
	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};
	
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};
	
		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};
	
		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;
	
		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};
	
	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};
	
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};
	
	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};
	
	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}
		
		var $test = $('<test>').css({
			position: 'absolute',
			top: -99999,
			left: -99999,
			width: 'auto',
			padding: 0,
			whiteSpace: 'pre'
		}).text(str).appendTo('body');
	
		transferStyles($parent, $test, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);
	
		var width = $test.width();
		$test.remove();
	
		return width;
	};
	
	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;
		
		var update = function(e) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
	
			if (e.metaKey || e.altKey) return;
			if ($input.data('grow') === false) return;
	
			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 97 && keyCode <= 122) || // a-z
					(keyCode >= 65 && keyCode <= 90)  || // A-Z
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					keyCode === 32 // space
				);
	
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}
	
			placeholder = $input.attr('placeholder') || '';
			if (!value.length && placeholder.length) {
				value = placeholder;
			}
	
			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};
	
		$input.on('keydown keyup update blur', update);
		update();
	};
	
	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;
	
		// detect rtl environment
		dir = window.getComputedStyle ? window.getComputedStyle(input, null).getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
		// setup default state
		$.extend(self, {
			settings         : settings,
			$input           : $input,
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),
	
			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},
	
			$activeOption    : null,
			$activeItems     : [],
	
			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : debounce(self.onSearchChange, settings.loadThrottle)
		});
	
		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
	
		// build options table
		$.extend(self.options, build_hash_table(settings.valueField, settings.options));
		delete self.settings.options;
	
		// build optgroup table
		$.extend(self.optgroups, build_hash_table(settings.optgroupValueField, settings.optgroups));
		delete self.settings.optgroups;
	
		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}
	
		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};
	
	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	MicroEvent.mixin(Selectize);
	MicroPlugin.mixin(Selectize);
	
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	$.extend(Selectize.prototype, {
	
		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
	
			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var tab_index;
			var classes;
			var classes_plugins;
	
			inputMode         = self.settings.mode;
			tab_index         = self.$input.attr('tabindex') || '';
			classes           = self.$input.attr('class') || '';
	
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', tab_index);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(classes).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
			$wrapper.css({
				width: self.$input[0].style.width
			});
	
			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}
	
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				self.$input.attr('multiple', 'multiple');
			}
	
			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}
	
			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;
	
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);
	
			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});
	
			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { return self.onFocus.apply(self, arguments); }
			});
	
			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});
	
			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});
	
			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur();
					}
				}
			});
	
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});
	
			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : self.$input.children().detach(),
				tabindex  : self.$input.attr('tabindex')
			};
	
			self.$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}
	
			// feature detect for the validation API
			if (self.$input[0].validity) {
				self.$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}
	
			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;
	
			if (self.$input.is(':disabled')) {
				self.disable();
			}
	
			self.on('change', this.onChange);
			self.trigger('initialize');
	
			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}
		},
	
		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;
	
			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};
	
			self.settings.render = $.extend({}, templates, self.settings.render);
		},
	
		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'     : 'onInitialize',
				'change'         : 'onChange',
				'item_add'       : 'onItemAdd',
				'item_remove'    : 'onItemRemove',
				'clear'          : 'onClear',
				'option_add'     : 'onOptionAdd',
				'option_remove'  : 'onOptionRemove',
				'option_clear'   : 'onOptionClear',
				'dropdown_open'  : 'onDropdownOpen',
				'dropdown_close' : 'onDropdownClose',
				'type'           : 'onType'
			};
	
			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;
	
			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
			if (!self.isFocused) {
				self.focus();
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);
	
			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},
	
		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},
	
		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;
	
			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}
	
			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					self.close();
					return;
				case KEY_N:
					if (!e.ctrlKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
					}
					e.preventDefault();
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}
			if (self.isFull() || self.isInputHidden) {
				e.preventDefault();
				return;
			}
		},
	
		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;
	
			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},
	
		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadDelay` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},
	
		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
	
			self.isFocused = true;
			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}
	
			if (self.ignoreFocus) return;
			if (self.settings.preload === 'focus') self.onSearchChange('');
	
			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}
	
			self.refreshState();
		},
	
		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onBlur: function(e) {
			var self = this;
			self.isFocused = false;
			if (self.ignoreFocus) return;
	
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(false);
			}
	
			self.close();
			self.setTextboxValue('');
			self.setActiveItem(null);
			self.setActiveOption(null);
			self.setCaret(self.items.length);
			self.refreshState();
		},
	
		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},
	
		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;
	
			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}
	
			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem();
			} else {
				value = $target.attr('data-value');
				if (value) {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},
	
		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;
	
			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},
	
		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass('loading');
	
			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass('loading');
				}
				self.trigger('load', results);
			}]);
		},
	
		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			this.$control_input.val(value).triggerHandler('update');
			this.lastValue = value;
		},
	
		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},
	
		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value) {
			debounce_events(this, ['change'], function() {
				this.clear();
				this.addItems(value);
			});
		},
	
		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;
	
			if (self.settings.mode === 'single') return;
			$item = $($item);
	
			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}
	
			// modify selection
			eventName = e && e.type.toLowerCase();
	
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}
	
			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},
	
		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;
	
			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;
	
			$option = $($option);
			if (!$option.length) return;
	
			self.$activeOption = $option.addClass('active');
	
			if (scroll || !isset(scroll)) {
	
				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;
	
				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}
	
			}
		},
	
		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;
	
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},
	
		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;
	
			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},
	
		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},
	
		/**
		 * Gives the control focus. If "trigger" is falsy,
		 * focus handlers won't be fired--causing the focus
		 * to happen silently in the background.
		 *
		 * @param {boolean} trigger
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;
	
			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},
	
		/**
		 * Forces the control out of focus.
		 */
		blur: function() {
			this.$control_input.trigger('blur');
		},
	
		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},
	
		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = {field: sort};
			}
	
			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort
			};
		},
	
		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();
	
			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}
	
			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}
	
			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}
	
			return result;
		},
	
		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var self              = this;
			var query             = self.$control_input.val();
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}
	
			// render and group available options individually
			groups = {};
	
			if (self.settings.optgroupOrder) {
				groups_order = self.settings.optgroupOrder;
				for (i = 0; i < groups_order.length; i++) {
					groups[groups_order[i]] = [];
				}
			} else {
				groups_order = [];
			}
	
			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
	
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = [];
						groups_order.push(optgroup);
					}
					groups[optgroup].push(option_html);
				}
			}
	
			// render optgroup headers & join groups
			html = [];
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = self.render('optgroup_header', self.optgroups[optgroup]) || '';
					html_children += groups[optgroup].join('');
					html.push(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: html_children
					})));
				} else {
					html.push(groups[optgroup].join(''));
				}
			}
	
			$dropdown_content.html(html.join(''));
	
			// highlight matching terms inline
			if (self.settings.highlight && results.query.length && results.tokens.length) {
				for (i = 0, n = results.tokens.length; i < n; i++) {
					highlight($dropdown_content, results.tokens[i].regex);
				}
			}
	
			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}
	
			// add create option
			has_create_option = self.settings.create && results.query.length;
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}
	
			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},
	
		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object} data
		 */
		addOption: function(data) {
			var i, n, optgroup, value, self = this;
	
			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}
	
			value = hash_key(data[self.settings.valueField]);
			if (!value || self.options.hasOwnProperty(value)) return;
	
			self.userOptions[value] = true;
			self.options[value] = data;
			self.lastQuery = null;
			self.trigger('option_add', value, data);
		},
	
		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			this.optgroups[id] = data;
			this.trigger('optgroup_add', id, data);
		},
	
		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options;
	
			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);
	
			// sanity checks
			if (!self.options.hasOwnProperty(value)) return;
			if (!value_new) throw new Error('Value must be set in option data');
	
			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			self.options[value_new] = data;
	
			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];
	
			if (isset(cache_items)) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (isset(cache_options)) {
				delete cache_options[value];
				delete cache_options[value_new];
			}
	
			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}
	
			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},
	
		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 */
		removeOption: function(value) {
			var self = this;
	
			value = hash_key(value);
			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value);
		},
	
		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;
	
			self.loadedSearches = {};
			self.userOptions = {};
			self.options = self.sifter.items = {};
			self.lastQuery = null;
			self.trigger('option_clear');
			self.clear();
		},
	
		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},
	
		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},
	
		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);
	
			if (value) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}
	
			return $();
		},
	
		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},
	
		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 */
		addItems: function(values) {
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i]);
			}
		},
	
		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 */
		addItem: function(value) {
			debounce_events(this, ['change'], function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next;
				value = hash_key(value);
	
				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}
	
				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear();
				if (inputMode === 'multi' && self.isFull()) return;
	
				$item = $(self.render('item', self.options[value]));
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				self.refreshState();
	
				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');
	
					// update menu / remove the option (if this is not one item being added as part of series)
					if (!this.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}
	
					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || (self.settings.maxItems !== null && self.items.length >= self.settings.maxItems)) {
						self.close();
					} else {
						self.positionDropdown();
					}
	
					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
					self.updateOriginalInput();
				}
			});
		},
	
		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value) {
			var self = this;
			var $item, i, idx;
	
			$item = (typeof value === 'object') ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);
	
			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}
	
				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value);
				}
	
				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}
	
				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput();
				self.positionDropdown();
				self.trigger('item_remove', value);
			}
		},
	
		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @return {boolean}
		 */
		createItem: function(triggerDropdown) {
			var self  = this;
			var input = $.trim(self.$control_input.val() || '');
			var caret = self.caretPos;
			if (!input.length) return false;
			self.lock();
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};
	
			var create = once(function(data) {
				self.unlock();
	
				if (!data || typeof data !== 'object') return;
				var value = hash_key(data[self.settings.valueField]);
				if (!value) return;
	
				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
			});
	
			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}
	
			return true;
		},
	
		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;
	
			if (this.isSetup) {
				for (var i = 0; i < this.items.length; i++) {
					this.addItem(this.items);
				}
			}
	
			this.refreshState();
			this.updateOriginalInput();
		},
	
		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			var self = this;
			var invalid = self.isRequired && !self.items.length;
			if (!invalid) self.isInvalid = false;
			self.$control_input.prop('required', invalid);
			self.refreshClasses();
		},
	
		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;
	
			self.$wrapper
				.toggleClass('rtl', self.rtl);
	
			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);
	
			self.$control_input.data('grow', !isFull && !isLocked);
		},
	
		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},
	
		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function() {
			var i, n, options, self = this;
	
			if (self.$input[0].tagName.toLowerCase() === 'select') {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected"></option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
			}
	
			if (self.isSetup) {
				self.trigger('change', self.$input.val());
			}
		},
	
		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;
	
			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update');
		},
	
		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;
	
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},
	
		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;
	
			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
			}
	
			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();
	
			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},
	
		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);
	
			this.$dropdown.css({
				width : $control.outerWidth(),
				top   : offset.top,
				left  : offset.left
			});
		},
	
		/**
		 * Resets / clears all selected items
		 * from the control.
		 */
		clear: function() {
			var self = this;
	
			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.setCaret(0);
			self.updatePlaceholder();
			self.updateOriginalInput();
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},
	
		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			if (caret === 0) {
				this.$control.prepend($el);
			} else {
				$(this.$control[0].childNodes[caret]).before($el);
			}
			this.setCaret(caret + 1);
		},
	
		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;
	
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);
	
			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}
	
			// determine items that will be removed
			values = [];
	
			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }
	
				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}
	
			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}
	
			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}
	
			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);
	
			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}
	
			return true;
		},
	
		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;
	
			if (direction === 0) return;
			if (self.rtl) direction *= -1;
	
			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);
	
			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;
	
				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},
	
		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;
	
			if (direction === 0) return;
	
			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},
	
		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;
	
			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}
	
			// the input must be moved by leaving it in place and moving the
			// siblings, due to the fact that focus cannot be restored once lost
			// on mobile webkit devices
			var j, n, fn, $children, $child;
			$children = self.$control.children(':not(input)');
			for (j = 0, n = $children.length; j < n; j++) {
				$child = $($children[j]).detach();
				if (j <  i) {
					self.$control_input.before($child);
				} else {
					self.$control.append($child);
				}
			}
	
			self.caretPos = i;
		},
	
		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},
	
		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},
	
		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.isDisabled = true;
			self.lock();
		},
	
		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.isDisabled = false;
			self.unlock();
		},
	
		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;
	
			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();
	
			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.attr({tabindex: revertSettings.tabindex})
				.show();
	
			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);
	
			delete self.$input[0].selectize;
		},
	
		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}
	
			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}
	
			// render markup
			html = self.settings.render[templateName].apply(this, [data, escape_html]);
	
			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				html = html.replace(regex_tag, '<$1 data-selectable');
			}
			if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html = html.replace(regex_tag, '<$1 data-group="' + escape_replace(escape_html(id)) + '"');
			}
			if (templateName === 'option' || templateName === 'item') {
				html = html.replace(regex_tag, '<$1 data-value="' + escape_replace(escape_html(value || '')) + '"');
			}
	
			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html;
			}
	
			return html;
		}
	
	});
	
	
	Selectize.count = 0;
	Selectize.defaults = {
		plugins: [],
		delimiter: ',',
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		preload: false,
	
		scrollDuration: 60,
		loadThrottle: 300,
	
		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		optgroupOrder: null,
	
		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',
	
		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',
	
		dropdownParent: null,
	
		/*
		load            : null, // function(query, callback) { ... }
		score           : null, // function(search) { ... }
		onInitialize    : null, // function() { ... }
		onChange        : null, // function(value) { ... }
		onItemAdd       : null, // function(value, $item) { ... }
		onItemRemove    : null, // function(value) { ... }
		onClear         : null, // function() { ... }
		onOptionAdd     : null, // function(value, data) { ... }
		onOptionRemove  : null, // function(value) { ... }
		onOptionClear   : null, // function() { ... }
		onDropdownOpen  : null, // function($dropdown) { ... }
		onDropdownClose : null, // function($dropdown) { ... }
		onType          : null, // function(str) { ... }
		onDelete        : null, // function(values) { ... }
		*/
	
		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};
	
	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;
	
		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option, value = $.trim($input.val() || '');
			if (!value.length) return;
	
			values = value.split(settings.delimiter);
			for (i = 0, n = values.length; i < n; i++) {
				option = {};
				option[field_label] = values[i];
				option[field_value] = values[i];
	
				settings_element.options[values[i]] = option;
			}
	
			settings_element.items = values;
		};
	
		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
	
			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};
	
			var addOption = function($option, group) {
				var value, option;
	
				$option = $($option);
	
				value = $option.attr('value') || '';
				if (!value.length) return;
	
				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (options.hasOwnProperty(value)) {
					if (group) {
						if (!options[value].optgroup) {
							options[value].optgroup = group;
						} else if (!$.isArray(options[value].optgroup)) {
							options[value].optgroup = [options[value].optgroup, group];
						} else {
							options[value].optgroup.push(group);
						}
					}
					return;
				}
	
				option                 = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_optgroup] = option[field_optgroup] || group;
	
				option.$order = ++order;
				options[value] = option;
	
				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};
	
			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;
	
				$optgroup = $($optgroup);
				id = $optgroup.attr('label');
	
				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					settings_element.optgroups[id] = optgroup;
				}
	
				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};
	
			settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};
	
		return this.each(function() {
			if (this.selectize) return;
	
			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var settings_element = {
				'placeholder' : $input.children('option[value=""]').text() || $input.attr('placeholder'),
				'options'     : {},
				'optgroups'   : {},
				'items'       : []
			};
	
			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}
	
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
			$input.data('selectize', instance);
			$input.addClass('selectized');
		});
	};
	
	$.fn.selectize.defaults = Selectize.defaults;
	
	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;
	
		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();
	
		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);
	
				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();
	
	});
	
	Selectize.define('dropdown_header', function(options) {
		var self = this;
	
		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',
	
			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
						'<div class="' + data.titleRowClass + '">' +
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
						'</div>' +
					'</div>'
				);
			}
		}, options);
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();
	
	});
	
	Selectize.define('optgroup_columns', function(options) {
		var self = this;
	
		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);
	
		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;
	
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}
	
					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}
	
				return original.apply(this, arguments);
			};
		})();
	
		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;
	
			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;
	
			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}
	
			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};
	
		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}
	
	
	});
	
	Selectize.define('remove_button', function(options) {
		if (this.settings.mode === 'single') return;
	
		options = $.extend({
			label     : '&times;',
			title     : 'Remove',
			className : 'remove',
			append    : true
		}, options);
	
		var self = this;
		var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
		/**
		 * Appends an element as a child (with raw HTML).
		 *
		 * @param {string} html_container
		 * @param {string} html_element
		 * @return {string}
		 */
		var append = function(html_container, html_element) {
			var pos = html_container.search(/(<\/[^>]+>\s*)$/);
			return html_container.substring(0, pos) + html_element + html_container.substring(pos);
		};
	
		this.setup = (function() {
			var original = self.setup;
			return function() {
				// override the item rendering method to add the button to each
				if (options.append) {
					var render_item = self.settings.render.item;
					self.settings.render.item = function(data) {
						return append(render_item.apply(this, arguments), html);
					};
				}
	
				original.apply(this, arguments);
	
				// add event listener
				this.$control.on('click', '.' + options.className, function(e) {
					e.preventDefault();
					if (self.isLocked) return;
	
					var $item = $(e.currentTarget).parent();
					self.setActiveItem($item);
					if (self.deleteSelection()) {
						self.setCaret(self.items.length);
					}
				});
	
			};
		})();
	
	});
	
	Selectize.define('restore_on_backspace', function(options) {
		var self = this;
	
		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};
	
		this.onKeyDown = (function(e) {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});

	return Selectize;
}));
; browserify_shim__define__module__export__(typeof Selectize != "undefined" ? Selectize : window.Selectize);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/stan/prog/balancetonrib/node_modules/jquery/dist/jquery.min.js":4}],3:[function(require,module,exports){
var jquery = require('jquery')
require('selectize')
require('bootstrap')

$('#friends').selectize({
  create: false,
  placeholder: 'Chercher le RIB d\'un(e) ami(e)...',
  render: {
    option: function (item, escape) {
      return '<div><img class="selectize-dropdown-img" src="' + escape(item.pic) + '"><span style="margin-left: 5px;">' + escape(item.text) + '</div>'
    }
  },
  onChange: function (value) {
    window.location.href = '/u/' + value
  }
})

},{"bootstrap":1,"jquery":4,"selectize":2}],4:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
//# sourceMappingURL=jquery.min.map
; browserify_shim__define__module__export__(typeof jQuery != "undefined" ? jQuery : window.jQuery);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc3Rhbi8ubnZtL3YwLjEwLjI2L2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9zdGFuL3Byb2cvYmFsYW5jZXRvbnJpYi9ib3dlcl9jb21wb25lbnRzL2Jvb3RmbGF0L2pzL2Jvb3RzdHJhcC5taW4uanMiLCIvVXNlcnMvc3Rhbi9wcm9nL2JhbGFuY2V0b25yaWIvYm93ZXJfY29tcG9uZW50cy9zZWxlY3RpemUvZGlzdC9qcy9zdGFuZGFsb25lL3NlbGVjdGl6ZS5qcyIsIi9Vc2Vycy9zdGFuL3Byb2cvYmFsYW5jZXRvbnJpYi9jbGllbnQvbWFpbi5qcyIsIi9Vc2Vycy9zdGFuL3Byb2cvYmFsYW5jZXRvbnJpYi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2x6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG5cbjsgalF1ZXJ5ID0gZ2xvYmFsLmpRdWVyeSA9IHJlcXVpcmUoXCIvVXNlcnMvc3Rhbi9wcm9nL2JhbGFuY2V0b25yaWIvbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanNcIik7XG47X19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZGVmaW5lLCByZXF1aXJlKSB7XG4vKiFcbiAqIEJvb3RzdHJhcCB2My4wLjEgYnkgQGZhdCBhbmQgQG1kb1xuICogQ29weXJpZ2h0IDIwMTMgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogRGVzaWduZWQgYW5kIGJ1aWx0IHdpdGggYWxsIHRoZSBsb3ZlIGluIHRoZSB3b3JsZCBieSBAbWRvIGFuZCBAZmF0LlxuICovXG5cbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwIHJlcXVpcmVzIGpRdWVyeVwiKTsrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib290c3RyYXBcIiksYj17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmRcIix0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwifTtmb3IodmFyIGMgaW4gYilpZih2b2lkIDAhPT1hLnN0eWxlW2NdKXJldHVybntlbmQ6YltjXX19YS5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihiKXt2YXIgYz0hMSxkPXRoaXM7YSh0aGlzKS5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGZ1bmN0aW9uKCl7Yz0hMH0pO3ZhciBlPWZ1bmN0aW9uKCl7Y3x8YShkKS50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCl9O3JldHVybiBzZXRUaW1lb3V0KGUsYiksdGhpc30sYShmdW5jdGlvbigpe2Euc3VwcG9ydC50cmFuc2l0aW9uPWIoKX0pfSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9J1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXScsYz1mdW5jdGlvbihjKXthKGMpLm9uKFwiY2xpY2tcIixiLHRoaXMuY2xvc2UpfTtjLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKCl7Zi50cmlnZ2VyKFwiY2xvc2VkLmJzLmFsZXJ0XCIpLnJlbW92ZSgpfXZhciBkPWEodGhpcyksZT1kLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtlfHwoZT1kLmF0dHIoXCJocmVmXCIpLGU9ZSYmZS5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKTt2YXIgZj1hKGUpO2ImJmIucHJldmVudERlZmF1bHQoKSxmLmxlbmd0aHx8KGY9ZC5oYXNDbGFzcyhcImFsZXJ0XCIpP2Q6ZC5wYXJlbnQoKSksZi50cmlnZ2VyKGI9YS5FdmVudChcImNsb3NlLmJzLmFsZXJ0XCIpKSxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoZi5yZW1vdmVDbGFzcyhcImluXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZmLmhhc0NsYXNzKFwiZmFkZVwiKT9mLm9uZShhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsYykuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKTpjKCkpfTt2YXIgZD1hLmZuLmFsZXJ0O2EuZm4uYWxlcnQ9ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5hbGVydFwiKTtlfHxkLmRhdGEoXCJicy5hbGVydFwiLGU9bmV3IGModGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdLmNhbGwoZCl9KX0sYS5mbi5hbGVydC5Db25zdHJ1Y3Rvcj1jLGEuZm4uYWxlcnQubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmFsZXJ0PWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5hbGVydC5kYXRhLWFwaVwiLGIsYy5wcm90b3R5cGUuY2xvc2UpfSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9ZnVuY3Rpb24oYyxkKXt0aGlzLiRlbGVtZW50PWEoYyksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGIuREVGQVVMVFMsZCl9O2IuREVGQVVMVFM9e2xvYWRpbmdUZXh0OlwibG9hZGluZy4uLlwifSxiLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhKXt2YXIgYj1cImRpc2FibGVkXCIsYz10aGlzLiRlbGVtZW50LGQ9Yy5pcyhcImlucHV0XCIpP1widmFsXCI6XCJodG1sXCIsZT1jLmRhdGEoKTthKz1cIlRleHRcIixlLnJlc2V0VGV4dHx8Yy5kYXRhKFwicmVzZXRUZXh0XCIsY1tkXSgpKSxjW2RdKGVbYV18fHRoaXMub3B0aW9uc1thXSksc2V0VGltZW91dChmdW5jdGlvbigpe1wibG9hZGluZ1RleHRcIj09YT9jLmFkZENsYXNzKGIpLmF0dHIoYixiKTpjLnJlbW92ZUNsYXNzKGIpLnJlbW92ZUF0dHIoYil9LDApfSxiLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKTtpZihhLmxlbmd0aCl7dmFyIGI9dGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIikucHJvcChcImNoZWNrZWRcIiwhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcInJhZGlvXCI9PT1iLnByb3AoXCJ0eXBlXCIpJiZhLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfXRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBjPWEuZm4uYnV0dG9uO2EuZm4uYnV0dG9uPWZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuYnV0dG9uXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7ZXx8ZC5kYXRhKFwiYnMuYnV0dG9uXCIsZT1uZXcgYih0aGlzLGYpKSxcInRvZ2dsZVwiPT1jP2UudG9nZ2xlKCk6YyYmZS5zZXRTdGF0ZShjKX0pfSxhLmZuLmJ1dHRvbi5Db25zdHJ1Y3Rvcj1iLGEuZm4uYnV0dG9uLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5idXR0b249Yyx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLFwiW2RhdGEtdG9nZ2xlXj1idXR0b25dXCIsZnVuY3Rpb24oYil7dmFyIGM9YShiLnRhcmdldCk7Yy5oYXNDbGFzcyhcImJ0blwiKXx8KGM9Yy5jbG9zZXN0KFwiLmJ0blwiKSksYy5idXR0b24oXCJ0b2dnbGVcIiksYi5wcmV2ZW50RGVmYXVsdCgpfSl9KHdpbmRvdy5qUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRpbmRpY2F0b3JzPXRoaXMuJGVsZW1lbnQuZmluZChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpLHRoaXMub3B0aW9ucz1jLHRoaXMucGF1c2VkPXRoaXMuc2xpZGluZz10aGlzLmludGVydmFsPXRoaXMuJGFjdGl2ZT10aGlzLiRpdGVtcz1udWxsLFwiaG92ZXJcIj09dGhpcy5vcHRpb25zLnBhdXNlJiZ0aGlzLiRlbGVtZW50Lm9uKFwibW91c2VlbnRlclwiLGEucHJveHkodGhpcy5wYXVzZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlXCIsYS5wcm94eSh0aGlzLmN5Y2xlLHRoaXMpKX07Yi5ERUZBVUxUUz17aW50ZXJ2YWw6NWUzLHBhdXNlOlwiaG92ZXJcIix3cmFwOiEwfSxiLnByb3RvdHlwZS5jeWNsZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSExKSx0aGlzLmludGVydmFsJiZjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCYmIXRoaXMucGF1c2VkJiYodGhpcy5pbnRlcnZhbD1zZXRJbnRlcnZhbChhLnByb3h5KHRoaXMubmV4dCx0aGlzKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKSx0aGlzfSxiLnByb3RvdHlwZS5nZXRBY3RpdmVJbmRleD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhY3RpdmU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpLHRoaXMuJGl0ZW1zPXRoaXMuJGFjdGl2ZS5wYXJlbnQoKS5jaGlsZHJlbigpLHRoaXMuJGl0ZW1zLmluZGV4KHRoaXMuJGFjdGl2ZSl9LGIucHJvdG90eXBlLnRvPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD10aGlzLmdldEFjdGl2ZUluZGV4KCk7cmV0dXJuIGI+dGhpcy4kaXRlbXMubGVuZ3RoLTF8fDA+Yj92b2lkIDA6dGhpcy5zbGlkaW5nP3RoaXMuJGVsZW1lbnQub25lKFwic2xpZFwiLGZ1bmN0aW9uKCl7Yy50byhiKX0pOmQ9PWI/dGhpcy5wYXVzZSgpLmN5Y2xlKCk6dGhpcy5zbGlkZShiPmQ/XCJuZXh0XCI6XCJwcmV2XCIsYSh0aGlzLiRpdGVtc1tiXSkpfSxiLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSEwKSx0aGlzLiRlbGVtZW50LmZpbmQoXCIubmV4dCwgLnByZXZcIikubGVuZ3RoJiZhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQmJih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKSx0aGlzLmN5Y2xlKCEwKSksdGhpcy5pbnRlcnZhbD1jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpLHRoaXN9LGIucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkaW5nP3ZvaWQgMDp0aGlzLnNsaWRlKFwibmV4dFwiKX0sYi5wcm90b3R5cGUucHJldj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNsaWRpbmc/dm9pZCAwOnRoaXMuc2xpZGUoXCJwcmV2XCIpfSxiLnByb3RvdHlwZS5zbGlkZT1mdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSxlPWN8fGRbYl0oKSxmPXRoaXMuaW50ZXJ2YWwsZz1cIm5leHRcIj09Yj9cImxlZnRcIjpcInJpZ2h0XCIsaD1cIm5leHRcIj09Yj9cImZpcnN0XCI6XCJsYXN0XCIsaT10aGlzO2lmKCFlLmxlbmd0aCl7aWYoIXRoaXMub3B0aW9ucy53cmFwKXJldHVybjtlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtXCIpW2hdKCl9dGhpcy5zbGlkaW5nPSEwLGYmJnRoaXMucGF1c2UoKTt2YXIgaj1hLkV2ZW50KFwic2xpZGUuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDplWzBdLGRpcmVjdGlvbjpnfSk7aWYoIWUuaGFzQ2xhc3MoXCJhY3RpdmVcIikpe2lmKHRoaXMuJGluZGljYXRvcnMubGVuZ3RoJiYodGhpcy4kaW5kaWNhdG9ycy5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLiRlbGVtZW50Lm9uZShcInNsaWRcIixmdW5jdGlvbigpe3ZhciBiPWEoaS4kaW5kaWNhdG9ycy5jaGlsZHJlbigpW2kuZ2V0QWN0aXZlSW5kZXgoKV0pO2ImJmIuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJzbGlkZVwiKSl7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGopLGouaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO2UuYWRkQ2xhc3MoYiksZVswXS5vZmZzZXRXaWR0aCxkLmFkZENsYXNzKGcpLGUuYWRkQ2xhc3MoZyksZC5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGZ1bmN0aW9uKCl7ZS5yZW1vdmVDbGFzcyhbYixnXS5qb2luKFwiIFwiKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIiksZC5yZW1vdmVDbGFzcyhbXCJhY3RpdmVcIixnXS5qb2luKFwiIFwiKSksaS5zbGlkaW5nPSExLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLiRlbGVtZW50LnRyaWdnZXIoXCJzbGlkXCIpfSwwKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDYwMCl9ZWxzZXtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoaiksai5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47ZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxlLmFkZENsYXNzKFwiYWN0aXZlXCIpLHRoaXMuc2xpZGluZz0hMSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJzbGlkXCIpfXJldHVybiBmJiZ0aGlzLmN5Y2xlKCksdGhpc319O3ZhciBjPWEuZm4uY2Fyb3VzZWw7YS5mbi5jYXJvdXNlbD1mdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmNhcm91c2VsXCIpLGY9YS5leHRlbmQoe30sYi5ERUZBVUxUUyxkLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYyYmYyksZz1cInN0cmluZ1wiPT10eXBlb2YgYz9jOmYuc2xpZGU7ZXx8ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIixlPW5ldyBiKHRoaXMsZikpLFwibnVtYmVyXCI9PXR5cGVvZiBjP2UudG8oYyk6Zz9lW2ddKCk6Zi5pbnRlcnZhbCYmZS5wYXVzZSgpLmN5Y2xlKCl9KX0sYS5mbi5jYXJvdXNlbC5Db25zdHJ1Y3Rvcj1iLGEuZm4uY2Fyb3VzZWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNhcm91c2VsPWMsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLFwiW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b11cIixmdW5jdGlvbihiKXt2YXIgYyxkPWEodGhpcyksZT1hKGQuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoYz1kLmF0dHIoXCJocmVmXCIpKSYmYy5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKSxmPWEuZXh0ZW5kKHt9LGUuZGF0YSgpLGQuZGF0YSgpKSxnPWQuYXR0cihcImRhdGEtc2xpZGUtdG9cIik7ZyYmKGYuaW50ZXJ2YWw9ITEpLGUuY2Fyb3VzZWwoZiksKGc9ZC5hdHRyKFwiZGF0YS1zbGlkZS10b1wiKSkmJmUuZGF0YShcImJzLmNhcm91c2VsXCIpLnRvKGcpLGIucHJldmVudERlZmF1bHQoKX0pLGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2IuY2Fyb3VzZWwoYi5kYXRhKCkpfSl9KX0od2luZG93LmpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPWZ1bmN0aW9uKGMsZCl7dGhpcy4kZWxlbWVudD1hKGMpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxiLkRFRkFVTFRTLGQpLHRoaXMudHJhbnNpdGlvbmluZz1udWxsLHRoaXMub3B0aW9ucy5wYXJlbnQmJih0aGlzLiRwYXJlbnQ9YSh0aGlzLm9wdGlvbnMucGFyZW50KSksdGhpcy5vcHRpb25zLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX07Yi5ERUZBVUxUUz17dG9nZ2xlOiEwfSxiLnByb3RvdHlwZS5kaW1lbnNpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwid2lkdGhcIik7cmV0dXJuIGE/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9LGIucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiYhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYj1hLkV2ZW50KFwic2hvdy5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksIWIuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBjPXRoaXMuJHBhcmVudCYmdGhpcy4kcGFyZW50LmZpbmQoXCI+IC5wYW5lbCA+IC5pblwiKTtpZihjJiZjLmxlbmd0aCl7dmFyIGQ9Yy5kYXRhKFwiYnMuY29sbGFwc2VcIik7aWYoZCYmZC50cmFuc2l0aW9uaW5nKXJldHVybjtjLmNvbGxhcHNlKFwiaGlkZVwiKSxkfHxjLmRhdGEoXCJicy5jb2xsYXBzZVwiLG51bGwpfXZhciBlPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVtlXSgwKSx0aGlzLnRyYW5zaXRpb25pbmc9MTt2YXIgZj1mdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiaW5cIilbZV0oXCJhdXRvXCIpLHRoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLmNvbGxhcHNlXCIpfTtpZighYS5zdXBwb3J0LnRyYW5zaXRpb24pcmV0dXJuIGYuY2FsbCh0aGlzKTt2YXIgZz1hLmNhbWVsQ2FzZShbXCJzY3JvbGxcIixlXS5qb2luKFwiLVwiKSk7dGhpcy4kZWxlbWVudC5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGEucHJveHkoZix0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKVtlXSh0aGlzLiRlbGVtZW50WzBdW2ddKX19fSxiLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYj1hLkV2ZW50KFwiaGlkZS5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksIWIuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBjPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudFtjXSh0aGlzLiRlbGVtZW50W2NdKCkpWzBdLm9mZnNldEhlaWdodCx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLnJlbW92ZUNsYXNzKFwiaW5cIiksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGQ9ZnVuY3Rpb24oKXt0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIikucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiY29sbGFwc2VcIil9O3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbj8odGhpcy4kZWxlbWVudFtjXSgwKS5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGEucHJveHkoZCx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKSx2b2lkIDApOmQuY2FsbCh0aGlzKX19fSxiLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKT9cImhpZGVcIjpcInNob3dcIl0oKX07dmFyIGM9YS5mbi5jb2xsYXBzZTthLmZuLmNvbGxhcHNlPWZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuY29sbGFwc2VcIiksZj1hLmV4dGVuZCh7fSxiLkRFRkFVTFRTLGQuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBjJiZjKTtlfHxkLmRhdGEoXCJicy5jb2xsYXBzZVwiLGU9bmV3IGIodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGMmJmVbY10oKX0pfSxhLmZuLmNvbGxhcHNlLkNvbnN0cnVjdG9yPWIsYS5mbi5jb2xsYXBzZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY29sbGFwc2U9Yyx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpXCIsXCJbZGF0YS10b2dnbGU9Y29sbGFwc2VdXCIsZnVuY3Rpb24oYil7dmFyIGMsZD1hKHRoaXMpLGU9ZC5hdHRyKFwiZGF0YS10YXJnZXRcIil8fGIucHJldmVudERlZmF1bHQoKXx8KGM9ZC5hdHRyKFwiaHJlZlwiKSkmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSxmPWEoZSksZz1mLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxoPWc/XCJ0b2dnbGVcIjpkLmRhdGEoKSxpPWQuYXR0cihcImRhdGEtcGFyZW50XCIpLGo9aSYmYShpKTtnJiZnLnRyYW5zaXRpb25pbmd8fChqJiZqLmZpbmQoJ1tkYXRhLXRvZ2dsZT1jb2xsYXBzZV1bZGF0YS1wYXJlbnQ9XCInK2krJ1wiXScpLm5vdChkKS5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKSxkW2YuaGFzQ2xhc3MoXCJpblwiKT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShcImNvbGxhcHNlZFwiKSksZi5jb2xsYXBzZShoKX0pfSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYigpe2EoZCkucmVtb3ZlKCksYShlKS5lYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPWMoYSh0aGlzKSk7ZC5oYXNDbGFzcyhcIm9wZW5cIikmJihkLnRyaWdnZXIoYj1hLkV2ZW50KFwiaGlkZS5icy5kcm9wZG93blwiKSksYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8ZC5yZW1vdmVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihcImhpZGRlbi5icy5kcm9wZG93blwiKSl9KX1mdW5jdGlvbiBjKGIpe3ZhciBjPWIuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2N8fChjPWIuYXR0cihcImhyZWZcIiksYz1jJiYvIy8udGVzdChjKSYmYy5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKTt2YXIgZD1jJiZhKGMpO3JldHVybiBkJiZkLmxlbmd0aD9kOmIucGFyZW50KCl9dmFyIGQ9XCIuZHJvcGRvd24tYmFja2Ryb3BcIixlPVwiW2RhdGEtdG9nZ2xlPWRyb3Bkb3duXVwiLGY9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsdGhpcy50b2dnbGUpfTtmLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtpZighZS5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZj1jKGUpLGc9Zi5oYXNDbGFzcyhcIm9wZW5cIik7aWYoYigpLCFnKXtpZihcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhZi5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZhKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSkub24oXCJjbGlja1wiLGIpLGYudHJpZ2dlcihkPWEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIpKSxkLmlzRGVmYXVsdFByZXZlbnRlZCgpKXJldHVybjtmLnRvZ2dsZUNsYXNzKFwib3BlblwiKS50cmlnZ2VyKFwic2hvd24uYnMuZHJvcGRvd25cIiksZS5mb2N1cygpfXJldHVybiExfX0sZi5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihiKXtpZigvKDM4fDQwfDI3KS8udGVzdChiLmtleUNvZGUpKXt2YXIgZD1hKHRoaXMpO2lmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpLCFkLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpe3ZhciBmPWMoZCksZz1mLmhhc0NsYXNzKFwib3BlblwiKTtpZighZ3x8ZyYmMjc9PWIua2V5Q29kZSlyZXR1cm4gMjc9PWIud2hpY2gmJmYuZmluZChlKS5mb2N1cygpLGQuY2xpY2soKTt2YXIgaD1hKFwiW3JvbGU9bWVudV0gbGk6bm90KC5kaXZpZGVyKTp2aXNpYmxlIGFcIixmKTtpZihoLmxlbmd0aCl7dmFyIGk9aC5pbmRleChoLmZpbHRlcihcIjpmb2N1c1wiKSk7Mzg9PWIua2V5Q29kZSYmaT4wJiZpLS0sNDA9PWIua2V5Q29kZSYmaTxoLmxlbmd0aC0xJiZpKyssfml8fChpPTApLGguZXEoaSkuZm9jdXMoKX19fX07dmFyIGc9YS5mbi5kcm9wZG93bjthLmZuLmRyb3Bkb3duPWZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5kYXRhKFwiZHJvcGRvd25cIik7ZHx8Yy5kYXRhKFwiZHJvcGRvd25cIixkPW5ldyBmKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZFtiXS5jYWxsKGMpfSl9LGEuZm4uZHJvcGRvd24uQ29uc3RydWN0b3I9ZixhLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kcm9wZG93bj1nLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixiKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24gZm9ybVwiLGZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZSxmLnByb3RvdHlwZS50b2dnbGUpLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGUrXCIsIFtyb2xlPW1lbnVdXCIsZi5wcm90b3R5cGUua2V5ZG93bil9KHdpbmRvdy5qUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1mdW5jdGlvbihiLGMpe3RoaXMub3B0aW9ucz1jLHRoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRiYWNrZHJvcD10aGlzLmlzU2hvd249bnVsbCx0aGlzLm9wdGlvbnMucmVtb3RlJiZ0aGlzLiRlbGVtZW50LmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSl9O2IuREVGQVVMVFM9e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwLHNob3c6ITB9LGIucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpc1t0aGlzLmlzU2hvd24/XCJoaWRlXCI6XCJzaG93XCJdKGEpfSxiLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD1hLkV2ZW50KFwic2hvdy5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0OmJ9KTt0aGlzLiRlbGVtZW50LnRyaWdnZXIoZCksdGhpcy5pc1Nob3dufHxkLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwodGhpcy5pc1Nob3duPSEwLHRoaXMuZXNjYXBlKCksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MubW9kYWxcIiwnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxhLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe3ZhciBkPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZjLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKTtjLiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aHx8Yy4kZWxlbWVudC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSxjLiRlbGVtZW50LnNob3coKSxkJiZjLiRlbGVtZW50WzBdLm9mZnNldFdpZHRoLGMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJpblwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwhMSksYy5lbmZvcmNlRm9jdXMoKTt2YXIgZT1hLkV2ZW50KFwic2hvd24uYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDpifSk7ZD9jLiRlbGVtZW50LmZpbmQoXCIubW9kYWwtZGlhbG9nXCIpLm9uZShhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsZnVuY3Rpb24oKXtjLiRlbGVtZW50LmZvY3VzKCkudHJpZ2dlcihlKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDMwMCk6Yy4kZWxlbWVudC5mb2N1cygpLnRyaWdnZXIoZSl9KSl9LGIucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYil7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGI9YS5FdmVudChcImhpZGUuYnMubW9kYWxcIiksdGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpLHRoaXMuaXNTaG93biYmIWIuaXNEZWZhdWx0UHJldmVudGVkKCkmJih0aGlzLmlzU2hvd249ITEsdGhpcy5lc2NhcGUoKSxhKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJpblwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwhMCkub2ZmKFwiY2xpY2suZGlzbWlzcy5tb2RhbFwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kZWxlbWVudC5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGEucHJveHkodGhpcy5oaWRlTW9kYWwsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDMwMCk6dGhpcy5oaWRlTW9kYWwoKSl9LGIucHJvdG90eXBlLmVuZm9yY2VGb2N1cz1mdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIikub24oXCJmb2N1c2luLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXt0aGlzLiRlbGVtZW50WzBdPT09YS50YXJnZXR8fHRoaXMuJGVsZW1lbnQuaGFzKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuJGVsZW1lbnQuZm9jdXMoKX0sdGhpcykpfSxiLnByb3RvdHlwZS5lc2NhcGU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5rZXlib2FyZD90aGlzLiRlbGVtZW50Lm9uKFwia2V5dXAuZGlzbWlzcy5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7Mjc9PWEud2hpY2gmJnRoaXMuaGlkZSgpfSx0aGlzKSk6dGhpcy5pc1Nob3dufHx0aGlzLiRlbGVtZW50Lm9mZihcImtleXVwLmRpc21pc3MuYnMubW9kYWxcIil9LGIucHJvdG90eXBlLmhpZGVNb2RhbD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy4kZWxlbWVudC5oaWRlKCksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe2EucmVtb3ZlQmFja2Ryb3AoKSxhLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMubW9kYWxcIil9KX0sYi5wcm90b3R5cGUucmVtb3ZlQmFja2Ryb3A9ZnVuY3Rpb24oKXt0aGlzLiRiYWNrZHJvcCYmdGhpcy4kYmFja2Ryb3AucmVtb3ZlKCksdGhpcy4kYmFja2Ryb3A9bnVsbH0sYi5wcm90b3R5cGUuYmFja2Ryb3A9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/XCJmYWRlXCI6XCJcIjtpZih0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5iYWNrZHJvcCl7dmFyIGQ9YS5zdXBwb3J0LnRyYW5zaXRpb24mJmM7aWYodGhpcy4kYmFja2Ryb3A9YSgnPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wICcrYysnXCIgLz4nKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7YS50YXJnZXQ9PT1hLmN1cnJlbnRUYXJnZXQmJihcInN0YXRpY1wiPT10aGlzLm9wdGlvbnMuYmFja2Ryb3A/dGhpcy4kZWxlbWVudFswXS5mb2N1cy5jYWxsKHRoaXMuJGVsZW1lbnRbMF0pOnRoaXMuaGlkZS5jYWxsKHRoaXMpKX0sdGhpcykpLGQmJnRoaXMuJGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoLHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKFwiaW5cIiksIWIpcmV0dXJuO2Q/dGhpcy4kYmFja2Ryb3Aub25lKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxiKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApOmIoKX1lbHNlIXRoaXMuaXNTaG93biYmdGhpcy4kYmFja2Ryb3A/KHRoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP3RoaXMuJGJhY2tkcm9wLm9uZShhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsYikuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKTpiKCkpOmImJmIoKX07dmFyIGM9YS5mbi5tb2RhbDthLmZuLm1vZGFsPWZ1bmN0aW9uKGMsZCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1lLmRhdGEoXCJicy5tb2RhbFwiKSxnPWEuZXh0ZW5kKHt9LGIuREVGQVVMVFMsZS5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGMmJmMpO2Z8fGUuZGF0YShcImJzLm1vZGFsXCIsZj1uZXcgYih0aGlzLGcpKSxcInN0cmluZ1wiPT10eXBlb2YgYz9mW2NdKGQpOmcuc2hvdyYmZi5zaG93KGQpfSl9LGEuZm4ubW9kYWwuQ29uc3RydWN0b3I9YixhLmZuLm1vZGFsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5tb2RhbD1jLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMubW9kYWwuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcyksZD1jLmF0dHIoXCJocmVmXCIpLGU9YShjLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZCYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKSxmPWUuZGF0YShcIm1vZGFsXCIpP1widG9nZ2xlXCI6YS5leHRlbmQoe3JlbW90ZTohLyMvLnRlc3QoZCkmJmR9LGUuZGF0YSgpLGMuZGF0YSgpKTtiLnByZXZlbnREZWZhdWx0KCksZS5tb2RhbChmLHRoaXMpLm9uZShcImhpZGVcIixmdW5jdGlvbigpe2MuaXMoXCI6dmlzaWJsZVwiKSYmYy5mb2N1cygpfSl9KSxhKGRvY3VtZW50KS5vbihcInNob3cuYnMubW9kYWxcIixcIi5tb2RhbFwiLGZ1bmN0aW9uKCl7YShkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhcIm1vZGFsLW9wZW5cIil9KS5vbihcImhpZGRlbi5icy5tb2RhbFwiLFwiLm1vZGFsXCIsZnVuY3Rpb24oKXthKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKFwibW9kYWwtb3BlblwiKX0pfSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9ZnVuY3Rpb24oYSxiKXt0aGlzLnR5cGU9dGhpcy5vcHRpb25zPXRoaXMuZW5hYmxlZD10aGlzLnRpbWVvdXQ9dGhpcy5ob3ZlclN0YXRlPXRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLmluaXQoXCJ0b29sdGlwXCIsYSxiKX07Yi5ERUZBVUxUUz17YW5pbWF0aW9uOiEwLHBsYWNlbWVudDpcInRvcFwiLHNlbGVjdG9yOiExLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wiLHRpdGxlOlwiXCIsZGVsYXk6MCxodG1sOiExLGNvbnRhaW5lcjohMX0sYi5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihiLGMsZCl7dGhpcy5lbmFibGVkPSEwLHRoaXMudHlwZT1iLHRoaXMuJGVsZW1lbnQ9YShjKSx0aGlzLm9wdGlvbnM9dGhpcy5nZXRPcHRpb25zKGQpO2Zvcih2YXIgZT10aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdChcIiBcIiksZj1lLmxlbmd0aDtmLS07KXt2YXIgZz1lW2ZdO2lmKFwiY2xpY2tcIj09Zyl0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMudG9nZ2xlLHRoaXMpKTtlbHNlIGlmKFwibWFudWFsXCIhPWcpe3ZhciBoPVwiaG92ZXJcIj09Zz9cIm1vdXNlZW50ZXJcIjpcImZvY3VzXCIsaT1cImhvdmVyXCI9PWc/XCJtb3VzZWxlYXZlXCI6XCJibHVyXCI7dGhpcy4kZWxlbWVudC5vbihoK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLmVudGVyLHRoaXMpKSx0aGlzLiRlbGVtZW50Lm9uKGkrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMubGVhdmUsdGhpcykpfX10aGlzLm9wdGlvbnMuc2VsZWN0b3I/dGhpcy5fb3B0aW9ucz1hLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMse3RyaWdnZXI6XCJtYW51YWxcIixzZWxlY3RvcjpcIlwifSk6dGhpcy5maXhUaXRsZSgpfSxiLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBiLkRFRkFVTFRTfSxiLnByb3RvdHlwZS5nZXRPcHRpb25zPWZ1bmN0aW9uKGIpe3JldHVybiBiPWEuZXh0ZW5kKHt9LHRoaXMuZ2V0RGVmYXVsdHMoKSx0aGlzLiRlbGVtZW50LmRhdGEoKSxiKSxiLmRlbGF5JiZcIm51bWJlclwiPT10eXBlb2YgYi5kZWxheSYmKGIuZGVsYXk9e3Nob3c6Yi5kZWxheSxoaWRlOmIuZGVsYXl9KSxifSxiLnByb3RvdHlwZS5nZXREZWxlZ2F0ZU9wdGlvbnM9ZnVuY3Rpb24oKXt2YXIgYj17fSxjPXRoaXMuZ2V0RGVmYXVsdHMoKTtyZXR1cm4gdGhpcy5fb3B0aW9ucyYmYS5lYWNoKHRoaXMuX29wdGlvbnMsZnVuY3Rpb24oYSxkKXtjW2FdIT1kJiYoYlthXT1kKX0pLGJ9LGIucHJvdG90eXBlLmVudGVyPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGNsZWFyVGltZW91dChjLnRpbWVvdXQpLGMuaG92ZXJTdGF0ZT1cImluXCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuc2hvdz8oYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluXCI9PWMuaG92ZXJTdGF0ZSYmYy5zaG93KCl9LGMub3B0aW9ucy5kZWxheS5zaG93KSx2b2lkIDApOmMuc2hvdygpfSxiLnByb3RvdHlwZS5sZWF2ZT1mdW5jdGlvbihiKXt2YXIgYz1iIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcj9iOmEoYi5jdXJyZW50VGFyZ2V0KVt0aGlzLnR5cGVdKHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO3JldHVybiBjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJvdXRcIixjLm9wdGlvbnMuZGVsYXkmJmMub3B0aW9ucy5kZWxheS5oaWRlPyhjLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wib3V0XCI9PWMuaG92ZXJTdGF0ZSYmYy5oaWRlKCl9LGMub3B0aW9ucy5kZWxheS5oaWRlKSx2b2lkIDApOmMuaGlkZSgpfSxiLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9YS5FdmVudChcInNob3cuYnMuXCIrdGhpcy50eXBlKTtpZih0aGlzLmhhc0NvbnRlbnQoKSYmdGhpcy5lbmFibGVkKXtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47dmFyIGM9dGhpcy50aXAoKTt0aGlzLnNldENvbnRlbnQoKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uJiZjLmFkZENsYXNzKFwiZmFkZVwiKTt2YXIgZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50P3RoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLGNbMF0sdGhpcy4kZWxlbWVudFswXSk6dGhpcy5vcHRpb25zLnBsYWNlbWVudCxlPS9cXHM/YXV0bz9cXHM/L2ksZj1lLnRlc3QoZCk7ZiYmKGQ9ZC5yZXBsYWNlKGUsXCJcIil8fFwidG9wXCIpLGMuZGV0YWNoKCkuY3NzKHt0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImJsb2NrXCJ9KS5hZGRDbGFzcyhkKSx0aGlzLm9wdGlvbnMuY29udGFpbmVyP2MuYXBwZW5kVG8odGhpcy5vcHRpb25zLmNvbnRhaW5lcik6Yy5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTt2YXIgZz10aGlzLmdldFBvc2l0aW9uKCksaD1jWzBdLm9mZnNldFdpZHRoLGk9Y1swXS5vZmZzZXRIZWlnaHQ7aWYoZil7dmFyIGo9dGhpcy4kZWxlbWVudC5wYXJlbnQoKSxrPWQsbD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxtPVwiYm9keVwiPT10aGlzLm9wdGlvbnMuY29udGFpbmVyP3dpbmRvdy5pbm5lcldpZHRoOmoub3V0ZXJXaWR0aCgpLG49XCJib2R5XCI9PXRoaXMub3B0aW9ucy5jb250YWluZXI/d2luZG93LmlubmVySGVpZ2h0Omoub3V0ZXJIZWlnaHQoKSxvPVwiYm9keVwiPT10aGlzLm9wdGlvbnMuY29udGFpbmVyPzA6ai5vZmZzZXQoKS5sZWZ0O2Q9XCJib3R0b21cIj09ZCYmZy50b3ArZy5oZWlnaHQraS1sPm4/XCJ0b3BcIjpcInRvcFwiPT1kJiZnLnRvcC1sLWk8MD9cImJvdHRvbVwiOlwicmlnaHRcIj09ZCYmZy5yaWdodCtoPm0/XCJsZWZ0XCI6XCJsZWZ0XCI9PWQmJmcubGVmdC1oPG8/XCJyaWdodFwiOmQsYy5yZW1vdmVDbGFzcyhrKS5hZGRDbGFzcyhkKX12YXIgcD10aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQoZCxnLGgsaSk7dGhpcy5hcHBseVBsYWNlbWVudChwLGQpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLlwiK3RoaXMudHlwZSl9fSxiLnByb3RvdHlwZS5hcHBseVBsYWNlbWVudD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9dGhpcy50aXAoKSxlPWRbMF0ub2Zmc2V0V2lkdGgsZj1kWzBdLm9mZnNldEhlaWdodCxnPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLXRvcFwiKSwxMCksaD1wYXJzZUludChkLmNzcyhcIm1hcmdpbi1sZWZ0XCIpLDEwKTtpc05hTihnKSYmKGc9MCksaXNOYU4oaCkmJihoPTApLGEudG9wPWEudG9wK2csYS5sZWZ0PWEubGVmdCtoLGQub2Zmc2V0KGEpLmFkZENsYXNzKFwiaW5cIik7dmFyIGk9ZFswXS5vZmZzZXRXaWR0aCxqPWRbMF0ub2Zmc2V0SGVpZ2h0O2lmKFwidG9wXCI9PWImJmohPWYmJihjPSEwLGEudG9wPWEudG9wK2YtaiksL2JvdHRvbXx0b3AvLnRlc3QoYikpe3ZhciBrPTA7YS5sZWZ0PDAmJihrPS0yKmEubGVmdCxhLmxlZnQ9MCxkLm9mZnNldChhKSxpPWRbMF0ub2Zmc2V0V2lkdGgsaj1kWzBdLm9mZnNldEhlaWdodCksdGhpcy5yZXBsYWNlQXJyb3coay1lK2ksaSxcImxlZnRcIil9ZWxzZSB0aGlzLnJlcGxhY2VBcnJvdyhqLWYsaixcInRvcFwiKTtjJiZkLm9mZnNldChhKX0sYi5wcm90b3R5cGUucmVwbGFjZUFycm93PWZ1bmN0aW9uKGEsYixjKXt0aGlzLmFycm93KCkuY3NzKGMsYT81MCooMS1hL2IpK1wiJVwiOlwiXCIpfSxiLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50aXAoKSxiPXRoaXMuZ2V0VGl0bGUoKTthLmZpbmQoXCIudG9vbHRpcC1pbm5lclwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5yZW1vdmVDbGFzcyhcImZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0XCIpfSxiLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe1wiaW5cIiE9Yy5ob3ZlclN0YXRlJiZkLmRldGFjaCgpfXZhciBjPXRoaXMsZD10aGlzLnRpcCgpLGU9YS5FdmVudChcImhpZGUuYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpLGUuaXNEZWZhdWx0UHJldmVudGVkKCk/dm9pZCAwOihkLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/ZC5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGIpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCk6YigpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImhpZGRlbi5icy5cIit0aGlzLnR5cGUpLHRoaXMpfSxiLnByb3RvdHlwZS5maXhUaXRsZT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQ7KGEuYXR0cihcInRpdGxlXCIpfHxcInN0cmluZ1wiIT10eXBlb2YgYS5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKSkmJmEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIixhLmF0dHIoXCJ0aXRsZVwiKXx8XCJcIikuYXR0cihcInRpdGxlXCIsXCJcIil9LGIucHJvdG90eXBlLmhhc0NvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRUaXRsZSgpfSxiLnByb3RvdHlwZS5nZXRQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciBiPXRoaXMuJGVsZW1lbnRbMF07cmV0dXJuIGEuZXh0ZW5kKHt9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0P2IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6e3dpZHRoOmIub2Zmc2V0V2lkdGgsaGVpZ2h0OmIub2Zmc2V0SGVpZ2h0fSx0aGlzLiRlbGVtZW50Lm9mZnNldCgpKX0sYi5wcm90b3R5cGUuZ2V0Q2FsY3VsYXRlZE9mZnNldD1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm5cImJvdHRvbVwiPT1hP3t0b3A6Yi50b3ArYi5oZWlnaHQsbGVmdDpiLmxlZnQrYi53aWR0aC8yLWMvMn06XCJ0b3BcIj09YT97dG9wOmIudG9wLWQsbGVmdDpiLmxlZnQrYi53aWR0aC8yLWMvMn06XCJsZWZ0XCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodC8yLWQvMixsZWZ0OmIubGVmdC1jfTp7dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0K2Iud2lkdGh9fSxiLnByb3RvdHlwZS5nZXRUaXRsZT1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy4kZWxlbWVudCxjPXRoaXMub3B0aW9ucztyZXR1cm4gYT1iLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYy50aXRsZT9jLnRpdGxlLmNhbGwoYlswXSk6Yy50aXRsZSl9LGIucHJvdG90eXBlLnRpcD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiR0aXA9dGhpcy4kdGlwfHxhKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSl9LGIucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIudG9vbHRpcC1hcnJvd1wiKX0sYi5wcm90b3R5cGUudmFsaWRhdGU9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50WzBdLnBhcmVudE5vZGV8fCh0aGlzLmhpZGUoKSx0aGlzLiRlbGVtZW50PW51bGwsdGhpcy5vcHRpb25zPW51bGwpfSxiLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITB9LGIucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITF9LGIucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQ9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9IXRoaXMuZW5hYmxlZH0sYi5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGIpe3ZhciBjPWI/YShiLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk6dGhpcztjLnRpcCgpLmhhc0NsYXNzKFwiaW5cIik/Yy5sZWF2ZShjKTpjLmVudGVyKGMpfSxiLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5oaWRlKCkuJGVsZW1lbnQub2ZmKFwiLlwiK3RoaXMudHlwZSkucmVtb3ZlRGF0YShcImJzLlwiK3RoaXMudHlwZSl9O3ZhciBjPWEuZm4udG9vbHRpcDthLmZuLnRvb2x0aXA9ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50b29sdGlwXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7ZXx8ZC5kYXRhKFwiYnMudG9vbHRpcFwiLGU9bmV3IGIodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGMmJmVbY10oKX0pfSxhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3I9YixhLmZuLnRvb2x0aXAubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnRvb2x0aXA9Yyx0aGlzfX0od2luZG93LmpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPWZ1bmN0aW9uKGEsYil7dGhpcy5pbml0KFwicG9wb3ZlclwiLGEsYil9O2lmKCFhLmZuLnRvb2x0aXApdGhyb3cgbmV3IEVycm9yKFwiUG9wb3ZlciByZXF1aXJlcyB0b29sdGlwLmpzXCIpO2IuREVGQVVMVFM9YS5leHRlbmQoe30sYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yLkRFRkFVTFRTLHtwbGFjZW1lbnQ6XCJyaWdodFwiLHRyaWdnZXI6XCJjbGlja1wiLGNvbnRlbnQ6XCJcIix0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInBvcG92ZXJcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J30pLGIucHJvdG90eXBlPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpLGIucHJvdG90eXBlLmNvbnN0cnVjdG9yPWIsYi5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYi5ERUZBVUxUU30sYi5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCksYz10aGlzLmdldENvbnRlbnQoKTthLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5maW5kKFwiLnBvcG92ZXItY29udGVudFwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYyksYS5yZW1vdmVDbGFzcyhcImZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluXCIpLGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmh0bWwoKXx8YS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaGlkZSgpfSxiLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKXx8dGhpcy5nZXRDb250ZW50KCl9LGIucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50LGI9dGhpcy5vcHRpb25zO3JldHVybiBhLmF0dHIoXCJkYXRhLWNvbnRlbnRcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmNvbnRlbnQ/Yi5jb250ZW50LmNhbGwoYVswXSk6Yi5jb250ZW50KX0sYi5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi5hcnJvd1wiKX0sYi5wcm90b3R5cGUudGlwPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHRpcHx8KHRoaXMuJHRpcD1hKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSkpLHRoaXMuJHRpcH07dmFyIGM9YS5mbi5wb3BvdmVyO2EuZm4ucG9wb3Zlcj1mdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnBvcG92ZXJcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYyYmYztlfHxkLmRhdGEoXCJicy5wb3BvdmVyXCIsZT1uZXcgYih0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYyYmZVtjXSgpfSl9LGEuZm4ucG9wb3Zlci5Db25zdHJ1Y3Rvcj1iLGEuZm4ucG9wb3Zlci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4ucG9wb3Zlcj1jLHRoaXN9fSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihjLGQpe3ZhciBlLGY9YS5wcm94eSh0aGlzLnByb2Nlc3MsdGhpcyk7dGhpcy4kZWxlbWVudD1hKGMpLmlzKFwiYm9keVwiKT9hKHdpbmRvdyk6YShjKSx0aGlzLiRib2R5PWEoXCJib2R5XCIpLHRoaXMuJHNjcm9sbEVsZW1lbnQ9dGhpcy4kZWxlbWVudC5vbihcInNjcm9sbC5icy5zY3JvbGwtc3B5LmRhdGEtYXBpXCIsZiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGIuREVGQVVMVFMsZCksdGhpcy5zZWxlY3Rvcj0odGhpcy5vcHRpb25zLnRhcmdldHx8KGU9YShjKS5hdHRyKFwiaHJlZlwiKSkmJmUucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKXx8XCJcIikrXCIgLm5hdiBsaSA+IGFcIix0aGlzLm9mZnNldHM9YShbXSksdGhpcy50YXJnZXRzPWEoW10pLHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5yZWZyZXNoKCksdGhpcy5wcm9jZXNzKCl9Yi5ERUZBVUxUUz17b2Zmc2V0OjEwfSxiLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy4kZWxlbWVudFswXT09d2luZG93P1wib2Zmc2V0XCI6XCJwb3NpdGlvblwiO3RoaXMub2Zmc2V0cz1hKFtdKSx0aGlzLnRhcmdldHM9YShbXSk7dmFyIGM9dGhpczt0aGlzLiRib2R5LmZpbmQodGhpcy5zZWxlY3RvcikubWFwKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcInRhcmdldFwiKXx8ZC5hdHRyKFwiaHJlZlwiKSxmPS9eI1xcdy8udGVzdChlKSYmYShlKTtyZXR1cm4gZiYmZi5sZW5ndGgmJltbZltiXSgpLnRvcCsoIWEuaXNXaW5kb3coYy4kc2Nyb2xsRWxlbWVudC5nZXQoMCkpJiZjLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpKSxlXV18fG51bGx9KS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGFbMF0tYlswXX0pLmVhY2goZnVuY3Rpb24oKXtjLm9mZnNldHMucHVzaCh0aGlzWzBdKSxjLnRhcmdldHMucHVzaCh0aGlzWzFdKX0pfSxiLnByb3RvdHlwZS5wcm9jZXNzPWZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpK3RoaXMub3B0aW9ucy5vZmZzZXQsYz10aGlzLiRzY3JvbGxFbGVtZW50WzBdLnNjcm9sbEhlaWdodHx8dGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHQsZD1jLXRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KCksZT10aGlzLm9mZnNldHMsZj10aGlzLnRhcmdldHMsZz10aGlzLmFjdGl2ZVRhcmdldDtpZihiPj1kKXJldHVybiBnIT0oYT1mLmxhc3QoKVswXSkmJnRoaXMuYWN0aXZhdGUoYSk7Zm9yKGE9ZS5sZW5ndGg7YS0tOylnIT1mW2FdJiZiPj1lW2FdJiYoIWVbYSsxXXx8Yjw9ZVthKzFdKSYmdGhpcy5hY3RpdmF0ZShmW2FdKX0sYi5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYil7dGhpcy5hY3RpdmVUYXJnZXQ9YixhKHRoaXMuc2VsZWN0b3IpLnBhcmVudHMoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO3ZhciBjPXRoaXMuc2VsZWN0b3IrJ1tkYXRhLXRhcmdldD1cIicrYisnXCJdLCcrdGhpcy5zZWxlY3RvcisnW2hyZWY9XCInK2IrJ1wiXScsZD1hKGMpLnBhcmVudHMoXCJsaVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtkLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmKGQ9ZC5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGQudHJpZ2dlcihcImFjdGl2YXRlXCIpfTt2YXIgYz1hLmZuLnNjcm9sbHNweTthLmZuLnNjcm9sbHNweT1mdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnNjcm9sbHNweVwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2V8fGQuZGF0YShcImJzLnNjcm9sbHNweVwiLGU9bmV3IGIodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGMmJmVbY10oKX0pfSxhLmZuLnNjcm9sbHNweS5Db25zdHJ1Y3Rvcj1iLGEuZm4uc2Nyb2xsc3B5Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5zY3JvbGxzcHk9Yyx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtiLnNjcm9sbHNweShiLmRhdGEoKSl9KX0pfSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9ZnVuY3Rpb24oYil7dGhpcy5lbGVtZW50PWEoYil9O2IucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmVsZW1lbnQsYz1iLmNsb3Nlc3QoXCJ1bDpub3QoLmRyb3Bkb3duLW1lbnUpXCIpLGQ9Yi5kYXRhKFwidGFyZ2V0XCIpO2lmKGR8fChkPWIuYXR0cihcImhyZWZcIiksZD1kJiZkLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpLCFiLnBhcmVudChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXt2YXIgZT1jLmZpbmQoXCIuYWN0aXZlOmxhc3QgYVwiKVswXSxmPWEuRXZlbnQoXCJzaG93LmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmV9KTtpZihiLnRyaWdnZXIoZiksIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBnPWEoZCk7dGhpcy5hY3RpdmF0ZShiLnBhcmVudChcImxpXCIpLGMpLHRoaXMuYWN0aXZhdGUoZyxnLnBhcmVudCgpLGZ1bmN0aW9uKCl7Yi50cmlnZ2VyKHt0eXBlOlwic2hvd24uYnMudGFiXCIscmVsYXRlZFRhcmdldDplfSl9KX19fSxiLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe2YucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcIj4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIuYWRkQ2xhc3MoXCJhY3RpdmVcIiksZz8oYlswXS5vZmZzZXRXaWR0aCxiLmFkZENsYXNzKFwiaW5cIikpOmIucmVtb3ZlQ2xhc3MoXCJmYWRlXCIpLGIucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikmJmIuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGQmJmQoKX12YXIgZj1jLmZpbmQoXCI+IC5hY3RpdmVcIiksZz1kJiZhLnN1cHBvcnQudHJhbnNpdGlvbiYmZi5oYXNDbGFzcyhcImZhZGVcIik7Zz9mLm9uZShhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKTplKCksZi5yZW1vdmVDbGFzcyhcImluXCIpfTt2YXIgYz1hLmZuLnRhYjthLmZuLnRhYj1mdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnRhYlwiKTtlfHxkLmRhdGEoXCJicy50YWJcIixlPW5ldyBiKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYyYmZVtjXSgpfSl9LGEuZm4udGFiLkNvbnN0cnVjdG9yPWIsYS5mbi50YWIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnRhYj1jLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpLGEodGhpcykudGFiKFwic2hvd1wiKX0pfSh3aW5kb3cualF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9ZnVuY3Rpb24oYyxkKXt0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYi5ERUZBVUxUUyxkKSx0aGlzLiR3aW5kb3c9YSh3aW5kb3cpLm9uKFwic2Nyb2xsLmJzLmFmZml4LmRhdGEtYXBpXCIsYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcykpLm9uKFwiY2xpY2suYnMuYWZmaXguZGF0YS1hcGlcIixhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AsdGhpcykpLHRoaXMuJGVsZW1lbnQ9YShjKSx0aGlzLmFmZml4ZWQ9dGhpcy51bnBpbj1udWxsLHRoaXMuY2hlY2tQb3NpdGlvbigpfTtiLlJFU0VUPVwiYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbVwiLGIuREVGQVVMVFM9e29mZnNldDowfSxiLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcD1mdW5jdGlvbigpe3NldFRpbWVvdXQoYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcyksMSl9LGIucHJvdG90eXBlLmNoZWNrUG9zaXRpb249ZnVuY3Rpb24oKXtpZih0aGlzLiRlbGVtZW50LmlzKFwiOnZpc2libGVcIikpe3ZhciBjPWEoZG9jdW1lbnQpLmhlaWdodCgpLGQ9dGhpcy4kd2luZG93LnNjcm9sbFRvcCgpLGU9dGhpcy4kZWxlbWVudC5vZmZzZXQoKSxmPXRoaXMub3B0aW9ucy5vZmZzZXQsZz1mLnRvcCxoPWYuYm90dG9tO1wib2JqZWN0XCIhPXR5cGVvZiBmJiYoaD1nPWYpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGcmJihnPWYudG9wKCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGgmJihoPWYuYm90dG9tKCkpO3ZhciBpPW51bGwhPXRoaXMudW5waW4mJmQrdGhpcy51bnBpbjw9ZS50b3A/ITE6bnVsbCE9aCYmZS50b3ArdGhpcy4kZWxlbWVudC5oZWlnaHQoKT49Yy1oP1wiYm90dG9tXCI6bnVsbCE9ZyYmZz49ZD9cInRvcFwiOiExO3RoaXMuYWZmaXhlZCE9PWkmJih0aGlzLnVucGluJiZ0aGlzLiRlbGVtZW50LmNzcyhcInRvcFwiLFwiXCIpLHRoaXMuYWZmaXhlZD1pLHRoaXMudW5waW49XCJib3R0b21cIj09aT9lLnRvcC1kOm51bGwsdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhiLlJFU0VUKS5hZGRDbGFzcyhcImFmZml4XCIrKGk/XCItXCIraTpcIlwiKSksXCJib3R0b21cIj09aSYmdGhpcy4kZWxlbWVudC5vZmZzZXQoe3RvcDpkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodC1oLXRoaXMuJGVsZW1lbnQuaGVpZ2h0KCl9KSl9fTt2YXIgYz1hLmZuLmFmZml4O2EuZm4uYWZmaXg9ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5hZmZpeFwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2V8fGQuZGF0YShcImJzLmFmZml4XCIsZT1uZXcgYih0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYyYmZVtjXSgpfSl9LGEuZm4uYWZmaXguQ29uc3RydWN0b3I9YixhLmZuLmFmZml4Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hZmZpeD1jLHRoaXN9LGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmRhdGEoKTtjLm9mZnNldD1jLm9mZnNldHx8e30sYy5vZmZzZXRCb3R0b20mJihjLm9mZnNldC5ib3R0b209Yy5vZmZzZXRCb3R0b20pLGMub2Zmc2V0VG9wJiYoYy5vZmZzZXQudG9wPWMub2Zmc2V0VG9wKSxiLmFmZml4KGMpfSl9KX0od2luZG93LmpRdWVyeSk7XG59KS5jYWxsKGdsb2JhbCwgbW9kdWxlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuXG47IGpRdWVyeSA9IGdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKFwiL1VzZXJzL3N0YW4vcHJvZy9iYWxhbmNldG9ucmliL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzXCIpO1xuO19fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbi8qKlxuICogc2lmdGVyLmpzXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgQnJpYW4gUmVhdmlzICYgY29udHJpYnV0b3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcbiAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIEBhdXRob3IgQnJpYW4gUmVhdmlzIDxicmlhbkB0aGlyZHJvdXRlLmNvbT5cbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKCdzaWZ0ZXInLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290LlNpZnRlciA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuXHQvKipcblx0ICogVGV4dHVhbGx5IHNlYXJjaGVzIGFycmF5cyBhbmQgaGFzaGVzIG9mIG9iamVjdHNcblx0ICogYnkgcHJvcGVydHkgKG9yIG11bHRpcGxlIHByb3BlcnRpZXMpLiBEZXNpZ25lZFxuXHQgKiBzcGVjaWZpY2FsbHkgZm9yIGF1dG9jb21wbGV0ZS5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7YXJyYXl8b2JqZWN0fSBpdGVtc1xuXHQgKiBAcGFyYW0ge29iamVjdH0gaXRlbXNcblx0ICovXG5cdHZhciBTaWZ0ZXIgPSBmdW5jdGlvbihpdGVtcywgc2V0dGluZ3MpIHtcblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzIHx8IHtkaWFjcml0aWNzOiB0cnVlfTtcblx0fTtcblxuXHQvKipcblx0ICogU3BsaXRzIGEgc2VhcmNoIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIGluZGl2aWR1YWxcblx0ICogcmVnZXhwcyB0byBiZSB1c2VkIHRvIG1hdGNoIHJlc3VsdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHQgKiBAcmV0dXJucyB7YXJyYXl9XG5cdCAqL1xuXHRTaWZ0ZXIucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24ocXVlcnkpIHtcblx0XHRxdWVyeSA9IHRyaW0oU3RyaW5nKHF1ZXJ5IHx8ICcnKS50b0xvd2VyQ2FzZSgpKTtcblx0XHRpZiAoIXF1ZXJ5IHx8ICFxdWVyeS5sZW5ndGgpIHJldHVybiBbXTtcblxuXHRcdHZhciBpLCBuLCByZWdleCwgbGV0dGVyO1xuXHRcdHZhciB0b2tlbnMgPSBbXTtcblx0XHR2YXIgd29yZHMgPSBxdWVyeS5zcGxpdCgvICsvKTtcblxuXHRcdGZvciAoaSA9IDAsIG4gPSB3b3Jkcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdHJlZ2V4ID0gZXNjYXBlX3JlZ2V4KHdvcmRzW2ldKTtcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmRpYWNyaXRpY3MpIHtcblx0XHRcdFx0Zm9yIChsZXR0ZXIgaW4gRElBQ1JJVElDUykge1xuXHRcdFx0XHRcdGlmIChESUFDUklUSUNTLmhhc093blByb3BlcnR5KGxldHRlcikpIHtcblx0XHRcdFx0XHRcdHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuZXcgUmVnRXhwKGxldHRlciwgJ2cnKSwgRElBQ1JJVElDU1tsZXR0ZXJdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0c3RyaW5nIDogd29yZHNbaV0sXG5cdFx0XHRcdHJlZ2V4ICA6IG5ldyBSZWdFeHAocmVnZXgsICdpJylcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbnM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEl0ZXJhdGVzIG92ZXIgYXJyYXlzIGFuZCBoYXNoZXMuXG5cdCAqXG5cdCAqIGBgYFxuXHQgKiB0aGlzLml0ZXJhdG9yKHRoaXMuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGlkKSB7XG5cdCAqICAgIC8vIGludm9rZWQgZm9yIGVhY2ggaXRlbVxuXHQgKiB9KTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIEBwYXJhbSB7YXJyYXl8b2JqZWN0fSBvYmplY3Rcblx0ICovXG5cdFNpZnRlci5wcm90b3R5cGUuaXRlcmF0b3IgPSBmdW5jdGlvbihvYmplY3QsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGl0ZXJhdG9yO1xuXHRcdGlmIChpc19hcnJheShvYmplY3QpKSB7XG5cdFx0XHRpdGVyYXRvciA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gdGhpcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRjYWxsYmFjayh0aGlzW2ldLCBpLCB0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXRlcmF0b3IgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuXHRcdFx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKHRoaXNba2V5XSwga2V5LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aXRlcmF0b3IuYXBwbHkob2JqZWN0LCBbY2FsbGJhY2tdKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgdG8gc2NvcmUgaW5kaXZpZHVhbCByZXN1bHRzLlxuXHQgKlxuXHQgKiBHb29kIG1hdGNoZXMgd2lsbCBoYXZlIGEgaGlnaGVyIHNjb3JlIHRoYW4gcG9vciBtYXRjaGVzLlxuXHQgKiBJZiBhbiBpdGVtIGlzIG5vdCBhIG1hdGNoLCAwIHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd9IHNlYXJjaFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpXG5cdCAqIEByZXR1cm5zIHtmdW5jdGlvbn1cblx0ICovXG5cdFNpZnRlci5wcm90b3R5cGUuZ2V0U2NvcmVGdW5jdGlvbiA9IGZ1bmN0aW9uKHNlYXJjaCwgb3B0aW9ucykge1xuXHRcdHZhciBzZWxmLCBmaWVsZHMsIHRva2VucywgdG9rZW5fY291bnQ7XG5cblx0XHRzZWxmICAgICAgICA9IHRoaXM7XG5cdFx0c2VhcmNoICAgICAgPSBzZWxmLnByZXBhcmVTZWFyY2goc2VhcmNoLCBvcHRpb25zKTtcblx0XHR0b2tlbnMgICAgICA9IHNlYXJjaC50b2tlbnM7XG5cdFx0ZmllbGRzICAgICAgPSBzZWFyY2gub3B0aW9ucy5maWVsZHM7XG5cdFx0dG9rZW5fY291bnQgPSB0b2tlbnMubGVuZ3RoO1xuXG5cdFx0LyoqXG5cdFx0ICogQ2FsY3VsYXRlcyBob3cgY2xvc2Ugb2YgYSBtYXRjaCB0aGVcblx0XHQgKiBnaXZlbiB2YWx1ZSBpcyBhZ2FpbnN0IGEgc2VhcmNoIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gdG9rZW5cblx0XHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dmFyIHNjb3JlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgdG9rZW4pIHtcblx0XHRcdHZhciBzY29yZSwgcG9zO1xuXG5cdFx0XHRpZiAoIXZhbHVlKSByZXR1cm4gMDtcblx0XHRcdHZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKTtcblx0XHRcdHBvcyA9IHZhbHVlLnNlYXJjaCh0b2tlbi5yZWdleCk7XG5cdFx0XHRpZiAocG9zID09PSAtMSkgcmV0dXJuIDA7XG5cdFx0XHRzY29yZSA9IHRva2VuLnN0cmluZy5sZW5ndGggLyB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRpZiAocG9zID09PSAwKSBzY29yZSArPSAwLjU7XG5cdFx0XHRyZXR1cm4gc2NvcmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIENhbGN1bGF0ZXMgdGhlIHNjb3JlIG9mIGFuIG9iamVjdFxuXHRcdCAqIGFnYWluc3QgdGhlIHNlYXJjaCBxdWVyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSB0b2tlblxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdFx0ICogQHJldHVybiB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHZhciBzY29yZU9iamVjdCA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBmaWVsZF9jb3VudCA9IGZpZWxkcy5sZW5ndGg7XG5cdFx0XHRpZiAoIWZpZWxkX2NvdW50KSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmllbGRfY291bnQgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHRva2VuLCBkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNjb3JlVmFsdWUoZGF0YVtmaWVsZHNbMF1dLCB0b2tlbik7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24odG9rZW4sIGRhdGEpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHN1bSA9IDA7IGkgPCBmaWVsZF9jb3VudDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtICs9IHNjb3JlVmFsdWUoZGF0YVtmaWVsZHNbaV1dLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN1bSAvIGZpZWxkX2NvdW50O1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXG5cdFx0aWYgKCF0b2tlbl9jb3VudCkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblx0XHR9XG5cdFx0aWYgKHRva2VuX2NvdW50ID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRyZXR1cm4gc2NvcmVPYmplY3QodG9rZW5zWzBdLCBkYXRhKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHNlYXJjaC5vcHRpb25zLmNvbmp1bmN0aW9uID09PSAnYW5kJykge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0dmFyIHNjb3JlO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgc3VtID0gMDsgaSA8IHRva2VuX2NvdW50OyBpKyspIHtcblx0XHRcdFx0XHRzY29yZSA9IHNjb3JlT2JqZWN0KHRva2Vuc1tpXSwgZGF0YSk7XG5cdFx0XHRcdFx0aWYgKHNjb3JlIDw9IDApIHJldHVybiAwO1xuXHRcdFx0XHRcdHN1bSArPSBzY29yZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc3VtIC8gdG9rZW5fY291bnQ7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgc3VtID0gMDsgaSA8IHRva2VuX2NvdW50OyBpKyspIHtcblx0XHRcdFx0XHRzdW0gKz0gc2NvcmVPYmplY3QodG9rZW5zW2ldLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc3VtIC8gdG9rZW5fY291bnQ7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB0d29cblx0ICogcmVzdWx0cywgZm9yIHNvcnRpbmcgcHVycG9zZXMuIElmIG5vIHNvcnRpbmcgc2hvdWxkXG5cdCAqIGJlIHBlcmZvcm1lZCwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gc2VhcmNoXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqIEByZXR1cm4gZnVuY3Rpb24oYSxiKVxuXHQgKi9cblx0U2lmdGVyLnByb3RvdHlwZS5nZXRTb3J0RnVuY3Rpb24gPSBmdW5jdGlvbihzZWFyY2gsIG9wdGlvbnMpIHtcblx0XHR2YXIgaSwgbiwgc2VsZiwgZmllbGQsIGZpZWxkcywgZmllbGRzX2NvdW50LCBtdWx0aXBsaWVyLCBtdWx0aXBsaWVycywgZ2V0X2ZpZWxkLCBpbXBsaWNpdF9zY29yZSwgc29ydDtcblxuXHRcdHNlbGYgICA9IHRoaXM7XG5cdFx0c2VhcmNoID0gc2VsZi5wcmVwYXJlU2VhcmNoKHNlYXJjaCwgb3B0aW9ucyk7XG5cdFx0c29ydCAgID0gKCFzZWFyY2gucXVlcnkgJiYgb3B0aW9ucy5zb3J0X2VtcHR5KSB8fCBvcHRpb25zLnNvcnQ7XG5cblx0XHQvKipcblx0XHQgKiBGZXRjaGVzIHRoZSBzcGVjaWZpZWQgc29ydCBmaWVsZCB2YWx1ZVxuXHRcdCAqIGZyb20gYSBzZWFyY2ggcmVzdWx0IGl0ZW0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3VsdFxuXHRcdCAqIEByZXR1cm4ge21peGVkfVxuXHRcdCAqL1xuXHRcdGdldF9maWVsZCAgPSBmdW5jdGlvbihuYW1lLCByZXN1bHQpIHtcblx0XHRcdGlmIChuYW1lID09PSAnJHNjb3JlJykgcmV0dXJuIHJlc3VsdC5zY29yZTtcblx0XHRcdHJldHVybiBzZWxmLml0ZW1zW3Jlc3VsdC5pZF1bbmFtZV07XG5cdFx0fTtcblxuXHRcdC8vIHBhcnNlIG9wdGlvbnNcblx0XHRmaWVsZHMgPSBbXTtcblx0XHRpZiAoc29ydCkge1xuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHNvcnQubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGlmIChzZWFyY2gucXVlcnkgfHwgc29ydFtpXS5maWVsZCAhPT0gJyRzY29yZScpIHtcblx0XHRcdFx0XHRmaWVsZHMucHVzaChzb3J0W2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHRoZSBcIiRzY29yZVwiIGZpZWxkIGlzIGltcGxpZWQgdG8gYmUgdGhlIHByaW1hcnlcblx0XHQvLyBzb3J0IGZpZWxkLCB1bmxlc3MgaXQncyBtYW51YWxseSBzcGVjaWZpZWRcblx0XHRpZiAoc2VhcmNoLnF1ZXJ5KSB7XG5cdFx0XHRpbXBsaWNpdF9zY29yZSA9IHRydWU7XG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gZmllbGRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRpZiAoZmllbGRzW2ldLmZpZWxkID09PSAnJHNjb3JlJykge1xuXHRcdFx0XHRcdGltcGxpY2l0X3Njb3JlID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChpbXBsaWNpdF9zY29yZSkge1xuXHRcdFx0XHRmaWVsZHMudW5zaGlmdCh7ZmllbGQ6ICckc2NvcmUnLCBkaXJlY3Rpb246ICdkZXNjJ30pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gZmllbGRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRpZiAoZmllbGRzW2ldLmZpZWxkID09PSAnJHNjb3JlJykge1xuXHRcdFx0XHRcdGZpZWxkcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRtdWx0aXBsaWVycyA9IFtdO1xuXHRcdGZvciAoaSA9IDAsIG4gPSBmaWVsZHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRtdWx0aXBsaWVycy5wdXNoKGZpZWxkc1tpXS5kaXJlY3Rpb24gPT09ICdkZXNjJyA/IC0xIDogMSk7XG5cdFx0fVxuXG5cdFx0Ly8gYnVpbGQgZnVuY3Rpb25cblx0XHRmaWVsZHNfY291bnQgPSBmaWVsZHMubGVuZ3RoO1xuXHRcdGlmICghZmllbGRzX2NvdW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9IGVsc2UgaWYgKGZpZWxkc19jb3VudCA9PT0gMSkge1xuXHRcdFx0ZmllbGQgPSBmaWVsZHNbMF0uZmllbGQ7XG5cdFx0XHRtdWx0aXBsaWVyID0gbXVsdGlwbGllcnNbMF07XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0XHRyZXR1cm4gbXVsdGlwbGllciAqIGNtcChcblx0XHRcdFx0XHRnZXRfZmllbGQoZmllbGQsIGEpLFxuXHRcdFx0XHRcdGdldF9maWVsZChmaWVsZCwgYilcblx0XHRcdFx0KTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdHZhciBpLCByZXN1bHQsIGFfdmFsdWUsIGJfdmFsdWUsIGZpZWxkO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZmllbGRzX2NvdW50OyBpKyspIHtcblx0XHRcdFx0XHRmaWVsZCA9IGZpZWxkc1tpXS5maWVsZDtcblx0XHRcdFx0XHRyZXN1bHQgPSBtdWx0aXBsaWVyc1tpXSAqIGNtcChcblx0XHRcdFx0XHRcdGdldF9maWVsZChmaWVsZCwgYSksXG5cdFx0XHRcdFx0XHRnZXRfZmllbGQoZmllbGQsIGIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFBhcnNlcyBhIHNlYXJjaCBxdWVyeSBhbmQgcmV0dXJucyBhbiBvYmplY3Rcblx0ICogd2l0aCB0b2tlbnMgYW5kIGZpZWxkcyByZWFkeSB0byBiZSBwb3B1bGF0ZWRcblx0ICogd2l0aCByZXN1bHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH1cblx0ICovXG5cdFNpZnRlci5wcm90b3R5cGUucHJlcGFyZVNlYXJjaCA9IGZ1bmN0aW9uKHF1ZXJ5LCBvcHRpb25zKSB7XG5cdFx0aWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHJldHVybiBxdWVyeTtcblxuXHRcdG9wdGlvbnMgPSBleHRlbmQoe30sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIG9wdGlvbl9maWVsZHMgICAgID0gb3B0aW9ucy5maWVsZHM7XG5cdFx0dmFyIG9wdGlvbl9zb3J0ICAgICAgID0gb3B0aW9ucy5zb3J0O1xuXHRcdHZhciBvcHRpb25fc29ydF9lbXB0eSA9IG9wdGlvbnMuc29ydF9lbXB0eTtcblxuXHRcdGlmIChvcHRpb25fZmllbGRzICYmICFpc19hcnJheShvcHRpb25fZmllbGRzKSkgb3B0aW9ucy5maWVsZHMgPSBbb3B0aW9uX2ZpZWxkc107XG5cdFx0aWYgKG9wdGlvbl9zb3J0ICYmICFpc19hcnJheShvcHRpb25fc29ydCkpIG9wdGlvbnMuc29ydCA9IFtvcHRpb25fc29ydF07XG5cdFx0aWYgKG9wdGlvbl9zb3J0X2VtcHR5ICYmICFpc19hcnJheShvcHRpb25fc29ydF9lbXB0eSkpIG9wdGlvbnMuc29ydF9lbXB0eSA9IFtvcHRpb25fc29ydF9lbXB0eV07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0b3B0aW9ucyA6IG9wdGlvbnMsXG5cdFx0XHRxdWVyeSAgIDogU3RyaW5nKHF1ZXJ5IHx8ICcnKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0dG9rZW5zICA6IHRoaXMudG9rZW5pemUocXVlcnkpLFxuXHRcdFx0dG90YWwgICA6IDAsXG5cdFx0XHRpdGVtcyAgIDogW11cblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aHJvdWdoIGFsbCBpdGVtcyBhbmQgcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiBtYXRjaGVzLlxuXHQgKlxuXHQgKiBUaGUgYG9wdGlvbnNgIHBhcmFtZXRlciBjYW4gY29udGFpbjpcblx0ICpcblx0ICogICAtIGZpZWxkcyB7c3RyaW5nfGFycmF5fVxuXHQgKiAgIC0gc29ydCB7YXJyYXl9XG5cdCAqICAgLSBzY29yZSB7ZnVuY3Rpb259XG5cdCAqICAgLSBmaWx0ZXIge2Jvb2x9XG5cdCAqICAgLSBsaW1pdCB7aW50ZWdlcn1cblx0ICpcblx0ICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZzpcblx0ICpcblx0ICogICAtIG9wdGlvbnMge29iamVjdH1cblx0ICogICAtIHF1ZXJ5IHtzdHJpbmd9XG5cdCAqICAgLSB0b2tlbnMge2FycmF5fVxuXHQgKiAgIC0gdG90YWwge2ludH1cblx0ICogICAtIGl0ZW1zIHthcnJheX1cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdCAqL1xuXHRTaWZ0ZXIucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uKHF1ZXJ5LCBvcHRpb25zKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLCB2YWx1ZSwgc2NvcmUsIHNlYXJjaCwgY2FsY3VsYXRlU2NvcmU7XG5cdFx0dmFyIGZuX3NvcnQ7XG5cdFx0dmFyIGZuX3Njb3JlO1xuXG5cdFx0c2VhcmNoICA9IHRoaXMucHJlcGFyZVNlYXJjaChxdWVyeSwgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IHNlYXJjaC5vcHRpb25zO1xuXHRcdHF1ZXJ5ICAgPSBzZWFyY2gucXVlcnk7XG5cblx0XHQvLyBnZW5lcmF0ZSByZXN1bHQgc2NvcmluZyBmdW5jdGlvblxuXHRcdGZuX3Njb3JlID0gb3B0aW9ucy5zY29yZSB8fCBzZWxmLmdldFNjb3JlRnVuY3Rpb24oc2VhcmNoKTtcblxuXHRcdC8vIHBlcmZvcm0gc2VhcmNoIGFuZCBzb3J0XG5cdFx0aWYgKHF1ZXJ5Lmxlbmd0aCkge1xuXHRcdFx0c2VsZi5pdGVyYXRvcihzZWxmLml0ZW1zLCBmdW5jdGlvbihpdGVtLCBpZCkge1xuXHRcdFx0XHRzY29yZSA9IGZuX3Njb3JlKGl0ZW0pO1xuXHRcdFx0XHRpZiAob3B0aW9ucy5maWx0ZXIgPT09IGZhbHNlIHx8IHNjb3JlID4gMCkge1xuXHRcdFx0XHRcdHNlYXJjaC5pdGVtcy5wdXNoKHsnc2NvcmUnOiBzY29yZSwgJ2lkJzogaWR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuaXRlcmF0b3Ioc2VsZi5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaWQpIHtcblx0XHRcdFx0c2VhcmNoLml0ZW1zLnB1c2goeydzY29yZSc6IDEsICdpZCc6IGlkfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmbl9zb3J0ID0gc2VsZi5nZXRTb3J0RnVuY3Rpb24oc2VhcmNoLCBvcHRpb25zKTtcblx0XHRpZiAoZm5fc29ydCkgc2VhcmNoLml0ZW1zLnNvcnQoZm5fc29ydCk7XG5cblx0XHQvLyBhcHBseSBsaW1pdHNcblx0XHRzZWFyY2gudG90YWwgPSBzZWFyY2guaXRlbXMubGVuZ3RoO1xuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5saW1pdCA9PT0gJ251bWJlcicpIHtcblx0XHRcdHNlYXJjaC5pdGVtcyA9IHNlYXJjaC5pdGVtcy5zbGljZSgwLCBvcHRpb25zLmxpbWl0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VhcmNoO1xuXHR9O1xuXG5cdC8vIHV0aWxpdGllc1xuXHQvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXG5cblx0dmFyIGNtcCA9IGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRpZiAodHlwZW9mIGEgPT09ICdudW1iZXInICYmIHR5cGVvZiBiID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuIGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCk7XG5cdFx0fVxuXHRcdGEgPSBTdHJpbmcoYSB8fCAnJykudG9Mb3dlckNhc2UoKTtcblx0XHRiID0gU3RyaW5nKGIgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKGEgPiBiKSByZXR1cm4gMTtcblx0XHRpZiAoYiA+IGEpIHJldHVybiAtMTtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24oYSwgYikge1xuXHRcdHZhciBpLCBuLCBrLCBvYmplY3Q7XG5cdFx0Zm9yIChpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdG9iamVjdCA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghb2JqZWN0KSBjb250aW51ZTtcblx0XHRcdGZvciAoayBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuXHRcdFx0XHRcdGFba10gPSBvYmplY3Rba107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH07XG5cblx0dmFyIHRyaW0gPSBmdW5jdGlvbihzdHIpIHtcblx0XHRyZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKC9eXFxzK3xcXHMrJHwvZywgJycpO1xuXHR9O1xuXG5cdHZhciBlc2NhcGVfcmVnZXggPSBmdW5jdGlvbihzdHIpIHtcblx0XHRyZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuXHR9O1xuXG5cdHZhciBpc19hcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgKCQgJiYgJC5pc0FycmF5KSB8fCBmdW5jdGlvbihvYmplY3QpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH07XG5cblx0dmFyIERJQUNSSVRJQ1MgPSB7XG5cdFx0J2EnOiAnW2HDgMOBw4LDg8OEw4XDoMOhw6LDo8Okw6VdJyxcblx0XHQnYyc6ICdbY8OHw6fEh8SGxI3EjF0nLFxuXHRcdCdkJzogJ1tkxJHEkMSPxI5dJyxcblx0XHQnZSc6ICdbZcOIw4nDisOLw6jDqcOqw6vEm8SaXScsXG5cdFx0J2knOiAnW2nDjMONw47Dj8Osw63DrsOvXScsXG5cdFx0J24nOiAnW27DkcOxxYjFh10nLFxuXHRcdCdvJzogJ1tvw5LDk8OUw5XDlcOWw5jDssOzw7TDtcO2w7hdJyxcblx0XHQncic6ICdbcsWZxZhdJyxcblx0XHQncyc6ICdbc8WgxaFdJyxcblx0XHQndCc6ICdbdMWlxaRdJyxcblx0XHQndSc6ICdbdcOZw5rDm8Ocw7nDusO7w7zFr8WuXScsXG5cdFx0J3knOiAnW3nFuMO/w73DnV0nLFxuXHRcdCd6JzogJ1t6xb3Fvl0nXG5cdH07XG5cblx0Ly8gZXhwb3J0XG5cdC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cblxuXHRyZXR1cm4gU2lmdGVyO1xufSkpO1xuXG5cblxuLyoqXG4gKiBtaWNyb3BsdWdpbi5qc1xuICogQ29weXJpZ2h0IChjKSAyMDEzIEJyaWFuIFJlYXZpcyAmIGNvbnRyaWJ1dG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4gKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0ZcbiAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBAYXV0aG9yIEJyaWFuIFJlYXZpcyA8YnJpYW5AdGhpcmRyb3V0ZS5jb20+XG4gKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZSgnbWljcm9wbHVnaW4nLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290Lk1pY3JvUGx1Z2luID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXHR2YXIgTWljcm9QbHVnaW4gPSB7fTtcblxuXHRNaWNyb1BsdWdpbi5taXhpbiA9IGZ1bmN0aW9uKEludGVyZmFjZSkge1xuXHRcdEludGVyZmFjZS5wbHVnaW5zID0ge307XG5cblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplcyB0aGUgbGlzdGVkIHBsdWdpbnMgKHdpdGggb3B0aW9ucykuXG5cdFx0ICogQWNjZXB0YWJsZSBmb3JtYXRzOlxuXHRcdCAqXG5cdFx0ICogTGlzdCAod2l0aG91dCBvcHRpb25zKTpcblx0XHQgKiAgIFsnYScsICdiJywgJ2MnXVxuXHRcdCAqXG5cdFx0ICogTGlzdCAod2l0aCBvcHRpb25zKTpcblx0XHQgKiAgIFt7J25hbWUnOiAnYScsIG9wdGlvbnM6IHt9fSwgeyduYW1lJzogJ2InLCBvcHRpb25zOiB7fX1dXG5cdFx0ICpcblx0XHQgKiBIYXNoICh3aXRoIG9wdGlvbnMpOlxuXHRcdCAqICAgeydhJzogeyAuLi4gfSwgJ2InOiB7IC4uLiB9LCAnYyc6IHsgLi4uIH19XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge21peGVkfSBwbHVnaW5zXG5cdFx0ICovXG5cdFx0SW50ZXJmYWNlLnByb3RvdHlwZS5pbml0aWFsaXplUGx1Z2lucyA9IGZ1bmN0aW9uKHBsdWdpbnMpIHtcblx0XHRcdHZhciBpLCBuLCBrZXk7XG5cdFx0XHR2YXIgc2VsZiAgPSB0aGlzO1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cblx0XHRcdHNlbGYucGx1Z2lucyA9IHtcblx0XHRcdFx0bmFtZXMgICAgIDogW10sXG5cdFx0XHRcdHNldHRpbmdzICA6IHt9LFxuXHRcdFx0XHRyZXF1ZXN0ZWQgOiB7fSxcblx0XHRcdFx0bG9hZGVkICAgIDoge31cblx0XHRcdH07XG5cblx0XHRcdGlmICh1dGlscy5pc0FycmF5KHBsdWdpbnMpKSB7XG5cdFx0XHRcdGZvciAoaSA9IDAsIG4gPSBwbHVnaW5zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcGx1Z2luc1tpXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHF1ZXVlLnB1c2gocGx1Z2luc1tpXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYucGx1Z2lucy5zZXR0aW5nc1twbHVnaW5zW2ldLm5hbWVdID0gcGx1Z2luc1tpXS5vcHRpb25zO1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaChwbHVnaW5zW2ldLm5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChwbHVnaW5zKSB7XG5cdFx0XHRcdGZvciAoa2V5IGluIHBsdWdpbnMpIHtcblx0XHRcdFx0XHRpZiAocGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnBsdWdpbnMuc2V0dGluZ3Nba2V5XSA9IHBsdWdpbnNba2V5XTtcblx0XHRcdFx0XHRcdHF1ZXVlLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0XHRzZWxmLnJlcXVpcmUocXVldWUuc2hpZnQoKSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdEludGVyZmFjZS5wcm90b3R5cGUubG9hZFBsdWdpbiA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRcdHZhciBzZWxmICAgID0gdGhpcztcblx0XHRcdHZhciBwbHVnaW5zID0gc2VsZi5wbHVnaW5zO1xuXHRcdFx0dmFyIHBsdWdpbiAgPSBJbnRlcmZhY2UucGx1Z2luc1tuYW1lXTtcblxuXHRcdFx0aWYgKCFJbnRlcmZhY2UucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIFwiJyArICBuYW1lICsgJ1wiIHBsdWdpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbHVnaW5zLnJlcXVlc3RlZFtuYW1lXSA9IHRydWU7XG5cdFx0XHRwbHVnaW5zLmxvYWRlZFtuYW1lXSA9IHBsdWdpbi5mbi5hcHBseShzZWxmLCBbc2VsZi5wbHVnaW5zLnNldHRpbmdzW25hbWVdIHx8IHt9XSk7XG5cdFx0XHRwbHVnaW5zLm5hbWVzLnB1c2gobmFtZSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemVzIGEgcGx1Z2luLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKi9cblx0XHRJbnRlcmZhY2UucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgcGx1Z2lucyA9IHNlbGYucGx1Z2lucztcblxuXHRcdFx0aWYgKCFzZWxmLnBsdWdpbnMubG9hZGVkLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0XHRcdGlmIChwbHVnaW5zLnJlcXVlc3RlZFtuYW1lXSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignUGx1Z2luIGhhcyBjaXJjdWxhciBkZXBlbmRlbmN5IChcIicgKyBuYW1lICsgJ1wiKScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYubG9hZFBsdWdpbihuYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHBsdWdpbnMubG9hZGVkW25hbWVdO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZWdpc3RlcnMgYSBwbHVnaW4uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdFx0ICovXG5cdFx0SW50ZXJmYWNlLmRlZmluZSA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG5cdFx0XHRJbnRlcmZhY2UucGx1Z2luc1tuYW1lXSA9IHtcblx0XHRcdFx0J25hbWUnIDogbmFtZSxcblx0XHRcdFx0J2ZuJyAgIDogZm5cblx0XHRcdH07XG5cdFx0fTtcblx0fTtcblxuXHR2YXIgdXRpbHMgPSB7XG5cdFx0aXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2QXJnKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZBcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gTWljcm9QbHVnaW47XG59KSk7XG5cbi8qKlxuICogc2VsZWN0aXplLmpzICh2MC45LjApXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgQnJpYW4gUmVhdmlzICYgY29udHJpYnV0b3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcbiAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIEBhdXRob3IgQnJpYW4gUmVhdmlzIDxicmlhbkB0aGlyZHJvdXRlLmNvbT5cbiAqL1xuXG4vKmpzaGludCBjdXJseTpmYWxzZSAqL1xuLypqc2hpbnQgYnJvd3Nlcjp0cnVlICovXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoJ3NlbGVjdGl6ZScsIFsnanF1ZXJ5Jywnc2lmdGVyJywnbWljcm9wbHVnaW4nXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KF9fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXygnanF1ZXJ5JyksIF9fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXygnc2lmdGVyJyksIF9fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXygnbWljcm9wbHVnaW4nKSk7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC5TZWxlY3RpemUgPSBmYWN0b3J5KHJvb3QualF1ZXJ5LCByb290LlNpZnRlciwgcm9vdC5NaWNyb1BsdWdpbik7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24oJCwgU2lmdGVyLCBNaWNyb1BsdWdpbikge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhpZ2hsaWdodCA9IGZ1bmN0aW9uKCRlbGVtZW50LCBwYXR0ZXJuKSB7XG5cdFx0aWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyAmJiAhcGF0dGVybi5sZW5ndGgpIHJldHVybjtcblx0XHR2YXIgcmVnZXggPSAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSA/IG5ldyBSZWdFeHAocGF0dGVybiwgJ2knKSA6IHBhdHRlcm47XG5cdFxuXHRcdHZhciBoaWdobGlnaHQgPSBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHR2YXIgc2tpcCA9IDA7XG5cdFx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuXHRcdFx0XHR2YXIgcG9zID0gbm9kZS5kYXRhLnNlYXJjaChyZWdleCk7XG5cdFx0XHRcdGlmIChwb3MgPj0gMCAmJiBub2RlLmRhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBtYXRjaCA9IG5vZGUuZGF0YS5tYXRjaChyZWdleCk7XG5cdFx0XHRcdFx0dmFyIHNwYW5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW5ub2RlLmNsYXNzTmFtZSA9ICdoaWdobGlnaHQnO1xuXHRcdFx0XHRcdHZhciBtaWRkbGViaXQgPSBub2RlLnNwbGl0VGV4dChwb3MpO1xuXHRcdFx0XHRcdHZhciBlbmRiaXQgPSBtaWRkbGViaXQuc3BsaXRUZXh0KG1hdGNoWzBdLmxlbmd0aCk7XG5cdFx0XHRcdFx0dmFyIG1pZGRsZWNsb25lID0gbWlkZGxlYml0LmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdFx0XHRzcGFubm9kZS5hcHBlbmRDaGlsZChtaWRkbGVjbG9uZSk7XG5cdFx0XHRcdFx0bWlkZGxlYml0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNwYW5ub2RlLCBtaWRkbGViaXQpO1xuXHRcdFx0XHRcdHNraXAgPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5jaGlsZE5vZGVzICYmICEvKHNjcmlwdHxzdHlsZSkvaS50ZXN0KG5vZGUudGFnTmFtZSkpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRpICs9IGhpZ2hsaWdodChub2RlLmNoaWxkTm9kZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2tpcDtcblx0XHR9O1xuXHRcblx0XHRyZXR1cm4gJGVsZW1lbnQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGhpZ2hsaWdodCh0aGlzKTtcblx0XHR9KTtcblx0fTtcblx0XG5cdHZhciBNaWNyb0V2ZW50ID0gZnVuY3Rpb24oKSB7fTtcblx0TWljcm9FdmVudC5wcm90b3R5cGUgPSB7XG5cdFx0b246IGZ1bmN0aW9uKGV2ZW50LCBmY3Qpe1xuXHRcdFx0dGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuXHRcdFx0dGhpcy5fZXZlbnRzW2V2ZW50XSA9IHRoaXMuX2V2ZW50c1tldmVudF0gfHwgW107XG5cdFx0XHR0aGlzLl9ldmVudHNbZXZlbnRdLnB1c2goZmN0KTtcblx0XHR9LFxuXHRcdG9mZjogZnVuY3Rpb24oZXZlbnQsIGZjdCl7XG5cdFx0XHR2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHRpZiAobiA9PT0gMCkgcmV0dXJuIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG5cdFx0XHRpZiAobiA9PT0gMSkgcmV0dXJuIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuXHRcblx0XHRcdHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcblx0XHRcdGlmIChldmVudCBpbiB0aGlzLl9ldmVudHMgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR0aGlzLl9ldmVudHNbZXZlbnRdLnNwbGljZSh0aGlzLl9ldmVudHNbZXZlbnRdLmluZGV4T2YoZmN0KSwgMSk7XG5cdFx0fSxcblx0XHR0cmlnZ2VyOiBmdW5jdGlvbihldmVudCAvKiAsIGFyZ3MuLi4gKi8pe1xuXHRcdFx0dGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuXHRcdFx0aWYgKGV2ZW50IGluIHRoaXMuX2V2ZW50cyA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzW2V2ZW50XS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdHRoaXMuX2V2ZW50c1tldmVudF1baV0uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIE1peGluIHdpbGwgZGVsZWdhdGUgYWxsIE1pY3JvRXZlbnQuanMgZnVuY3Rpb24gaW4gdGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cblx0ICpcblx0ICogLSBNaWNyb0V2ZW50Lm1peGluKEZvb2Jhcikgd2lsbCBtYWtlIEZvb2JhciBhYmxlIHRvIHVzZSBNaWNyb0V2ZW50XG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB0aGUgb2JqZWN0IHdoaWNoIHdpbGwgc3VwcG9ydCBNaWNyb0V2ZW50XG5cdCAqL1xuXHRNaWNyb0V2ZW50Lm1peGluID0gZnVuY3Rpb24oZGVzdE9iamVjdCl7XG5cdFx0dmFyIHByb3BzID0gWydvbicsICdvZmYnLCAndHJpZ2dlciddO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0ZGVzdE9iamVjdC5wcm90b3R5cGVbcHJvcHNbaV1dID0gTWljcm9FdmVudC5wcm90b3R5cGVbcHJvcHNbaV1dO1xuXHRcdH1cblx0fTtcblx0XG5cdHZhciBJU19NQUMgICAgICAgID0gL01hYy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblx0XG5cdHZhciBLRVlfQSAgICAgICAgID0gNjU7XG5cdHZhciBLRVlfQ09NTUEgICAgID0gMTg4O1xuXHR2YXIgS0VZX1JFVFVSTiAgICA9IDEzO1xuXHR2YXIgS0VZX0VTQyAgICAgICA9IDI3O1xuXHR2YXIgS0VZX0xFRlQgICAgICA9IDM3O1xuXHR2YXIgS0VZX1VQICAgICAgICA9IDM4O1xuXHR2YXIgS0VZX1AgICAgICAgICA9IDgwO1xuXHR2YXIgS0VZX1JJR0hUICAgICA9IDM5O1xuXHR2YXIgS0VZX0RPV04gICAgICA9IDQwO1xuXHR2YXIgS0VZX04gICAgICAgICA9IDc4O1xuXHR2YXIgS0VZX0JBQ0tTUEFDRSA9IDg7XG5cdHZhciBLRVlfREVMRVRFICAgID0gNDY7XG5cdHZhciBLRVlfU0hJRlQgICAgID0gMTY7XG5cdHZhciBLRVlfQ01EICAgICAgID0gSVNfTUFDID8gOTEgOiAxNztcblx0dmFyIEtFWV9DVFJMICAgICAgPSBJU19NQUMgPyAxOCA6IDE3O1xuXHR2YXIgS0VZX1RBQiAgICAgICA9IDk7XG5cdFxuXHR2YXIgVEFHX1NFTEVDVCAgICA9IDE7XG5cdHZhciBUQUdfSU5QVVQgICAgID0gMjtcblx0XG5cdFxuXHR2YXIgaXNzZXQgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0XHRyZXR1cm4gdHlwZW9mIG9iamVjdCAhPT0gJ3VuZGVmaW5lZCc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogQ29udmVydHMgYSBzY2FsYXIgdG8gaXRzIGJlc3Qgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG5cdCAqIGZvciBoYXNoIGtleXMgYW5kIEhUTUwgYXR0cmlidXRlIHZhbHVlcy5cblx0ICpcblx0ICogVHJhbnNmb3JtYXRpb25zOlxuXHQgKiAgICdzdHInICAgICAtPiAnc3RyJ1xuXHQgKiAgIG51bGwgICAgICAtPiAnJ1xuXHQgKiAgIHVuZGVmaW5lZCAtPiAnJ1xuXHQgKiAgIHRydWUgICAgICAtPiAnMSdcblx0ICogICBmYWxzZSAgICAgLT4gJzAnXG5cdCAqICAgMCAgICAgICAgIC0+ICcwJ1xuXHQgKiAgIDEgICAgICAgICAtPiAnMSdcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgaGFzaF9rZXkgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWUgPyAnMScgOiAnMCc7XG5cdFx0cmV0dXJuIHZhbHVlICsgJyc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogRXNjYXBlcyBhIHN0cmluZyBmb3IgdXNlIHdpdGhpbiBIVE1MLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgZXNjYXBlX2h0bWwgPSBmdW5jdGlvbihzdHIpIHtcblx0XHRyZXR1cm4gKHN0ciArICcnKVxuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdH07XG5cdFxuXHQvKipcblx0ICogRXNjYXBlcyBcIiRcIiBjaGFyYWN0ZXJzIGluIHJlcGxhY2VtZW50IHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHZhciBlc2NhcGVfcmVwbGFjZSA9IGZ1bmN0aW9uKHN0cikge1xuXHRcdHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpO1xuXHR9O1xuXHRcblx0dmFyIGhvb2sgPSB7fTtcblx0XG5cdC8qKlxuXHQgKiBXcmFwcyBgbWV0aG9kYCBvbiBgc2VsZmAgc28gdGhhdCBgZm5gXG5cdCAqIGlzIGludm9rZWQgYmVmb3JlIHRoZSBvcmlnaW5hbCBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzZWxmXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2Rcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cblx0ICovXG5cdGhvb2suYmVmb3JlID0gZnVuY3Rpb24oc2VsZiwgbWV0aG9kLCBmbikge1xuXHRcdHZhciBvcmlnaW5hbCA9IHNlbGZbbWV0aG9kXTtcblx0XHRzZWxmW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gb3JpZ2luYWwuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFdyYXBzIGBtZXRob2RgIG9uIGBzZWxmYCBzbyB0aGF0IGBmbmBcblx0ICogaXMgaW52b2tlZCBhZnRlciB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gc2VsZlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdCAqL1xuXHRob29rLmFmdGVyID0gZnVuY3Rpb24oc2VsZiwgbWV0aG9kLCBmbikge1xuXHRcdHZhciBvcmlnaW5hbCA9IHNlbGZbbWV0aG9kXTtcblx0XHRzZWxmW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHRcdFx0Zm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBCdWlsZHMgYSBoYXNoIHRhYmxlIG91dCBvZiBhbiBhcnJheSBvZlxuXHQgKiBvYmplY3RzLCB1c2luZyB0aGUgc3BlY2lmaWVkIGBrZXlgIHdpdGhpblxuXHQgKiBlYWNoIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQgKiBAcGFyYW0ge21peGVkfSBvYmplY3RzXG5cdCAqL1xuXHR2YXIgYnVpbGRfaGFzaF90YWJsZSA9IGZ1bmN0aW9uKGtleSwgb2JqZWN0cykge1xuXHRcdGlmICghJC5pc0FycmF5KG9iamVjdHMpKSByZXR1cm4gb2JqZWN0cztcblx0XHR2YXIgaSwgbiwgdGFibGUgPSB7fTtcblx0XHRmb3IgKGkgPSAwLCBuID0gb2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdGlmIChvYmplY3RzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0dGFibGVbb2JqZWN0c1tpXVtrZXldXSA9IG9iamVjdHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0YWJsZTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBXcmFwcyBgZm5gIHNvIHRoYXQgaXQgY2FuIG9ubHkgYmUgaW52b2tlZCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHQgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG5cdCAqL1xuXHR2YXIgb25jZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIGNhbGxlZCA9IGZhbHNlO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChjYWxsZWQpIHJldHVybjtcblx0XHRcdGNhbGxlZCA9IHRydWU7XG5cdFx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH07XG5cdFxuXHQvKipcblx0ICogV3JhcHMgYGZuYCBzbyB0aGF0IGl0IGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlXG5cdCAqIGV2ZXJ5IGBkZWxheWAgbWlsbGlzZWNvbmRzIChpbnZva2VkIG9uIHRoZSBmYWxsaW5nIGVkZ2UpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHQgKiBAcGFyYW0ge2ludH0gZGVsYXlcblx0ICogQHJldHVybnMge2Z1bmN0aW9ufVxuXHQgKi9cblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG5cdFx0dmFyIHRpbWVvdXQ7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0dGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHR9O1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIERlYm91bmNlIGFsbCBmaXJlZCBldmVudHMgdHlwZXMgbGlzdGVkIGluIGB0eXBlc2Bcblx0ICogd2hpbGUgZXhlY3V0aW5nIHRoZSBwcm92aWRlZCBgZm5gLlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gc2VsZlxuXHQgKiBAcGFyYW0ge2FycmF5fSB0eXBlc1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHQgKi9cblx0dmFyIGRlYm91bmNlX2V2ZW50cyA9IGZ1bmN0aW9uKHNlbGYsIHR5cGVzLCBmbikge1xuXHRcdHZhciB0eXBlO1xuXHRcdHZhciB0cmlnZ2VyID0gc2VsZi50cmlnZ2VyO1xuXHRcdHZhciBldmVudF9hcmdzID0ge307XG5cdFxuXHRcdC8vIG92ZXJyaWRlIHRyaWdnZXIgbWV0aG9kXG5cdFx0c2VsZi50cmlnZ2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IGFyZ3VtZW50c1swXTtcblx0XHRcdGlmICh0eXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuXHRcdFx0XHRldmVudF9hcmdzW3R5cGVdID0gYXJndW1lbnRzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRyaWdnZXIuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcblx0XHQvLyBpbnZva2UgcHJvdmlkZWQgZnVuY3Rpb25cblx0XHRmbi5hcHBseShzZWxmLCBbXSk7XG5cdFx0c2VsZi50cmlnZ2VyID0gdHJpZ2dlcjtcblx0XG5cdFx0Ly8gdHJpZ2dlciBxdWV1ZWQgZXZlbnRzXG5cdFx0Zm9yICh0eXBlIGluIGV2ZW50X2FyZ3MpIHtcblx0XHRcdGlmIChldmVudF9hcmdzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG5cdFx0XHRcdHRyaWdnZXIuYXBwbHkoc2VsZiwgZXZlbnRfYXJnc1t0eXBlXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIEEgd29ya2Fyb3VuZCBmb3IgaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvNjY5NlxuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gJHBhcmVudCAtIFBhcmVudCBlbGVtZW50IHRvIGxpc3RlbiBvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRGVzY2VuZGFudCBzZWxlY3RvciB0byBmaWx0ZXIgYnkuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRXZlbnQgaGFuZGxlci5cblx0ICovXG5cdHZhciB3YXRjaENoaWxkRXZlbnQgPSBmdW5jdGlvbigkcGFyZW50LCBldmVudCwgc2VsZWN0b3IsIGZuKSB7XG5cdFx0JHBhcmVudC5vbihldmVudCwgc2VsZWN0b3IsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBjaGlsZCA9IGUudGFyZ2V0O1xuXHRcdFx0d2hpbGUgKGNoaWxkICYmIGNoaWxkLnBhcmVudE5vZGUgIT09ICRwYXJlbnRbMF0pIHtcblx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0ZS5jdXJyZW50VGFyZ2V0ID0gY2hpbGQ7XG5cdFx0XHRyZXR1cm4gZm4uYXBwbHkodGhpcywgW2VdKTtcblx0XHR9KTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB3aXRoaW4gYSB0ZXh0IGlucHV0IGNvbnRyb2wuXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmc6XG5cdCAqICAgLSBzdGFydFxuXHQgKiAgIC0gbGVuZ3RoXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fVxuXHQgKi9cblx0dmFyIGdldFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIGlucHV0KSB7XG5cdFx0XHRyZXN1bHQuc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcblx0XHRcdHJlc3VsdC5sZW5ndGggPSBpbnB1dC5zZWxlY3Rpb25FbmQgLSByZXN1bHQuc3RhcnQ7XG5cdFx0fSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcblx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHR2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHR2YXIgc2VsTGVuID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dC5sZW5ndGg7XG5cdFx0XHRzZWwubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcblx0XHRcdHJlc3VsdC5zdGFydCA9IHNlbC50ZXh0Lmxlbmd0aCAtIHNlbExlbjtcblx0XHRcdHJlc3VsdC5sZW5ndGggPSBzZWxMZW47XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdFxuXHQvKipcblx0ICogQ29waWVzIENTUyBwcm9wZXJ0aWVzIGZyb20gb25lIGVsZW1lbnQgdG8gYW5vdGhlci5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9ICRmcm9tXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSAkdG9cblx0ICogQHBhcmFtIHthcnJheX0gcHJvcGVydGllc1xuXHQgKi9cblx0dmFyIHRyYW5zZmVyU3R5bGVzID0gZnVuY3Rpb24oJGZyb20sICR0bywgcHJvcGVydGllcykge1xuXHRcdHZhciBpLCBuLCBzdHlsZXMgPSB7fTtcblx0XHRpZiAocHJvcGVydGllcykge1xuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdHN0eWxlc1twcm9wZXJ0aWVzW2ldXSA9ICRmcm9tLmNzcyhwcm9wZXJ0aWVzW2ldKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVzID0gJGZyb20uY3NzKCk7XG5cdFx0fVxuXHRcdCR0by5jc3Moc3R5bGVzKTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBNZWFzdXJlcyB0aGUgd2lkdGggb2YgYSBzdHJpbmcgd2l0aGluIGFcblx0ICogcGFyZW50IGVsZW1lbnQgKGluIHBpeGVscykuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICogQHBhcmFtIHtvYmplY3R9ICRwYXJlbnRcblx0ICogQHJldHVybnMge2ludH1cblx0ICovXG5cdHZhciBtZWFzdXJlU3RyaW5nID0gZnVuY3Rpb24oc3RyLCAkcGFyZW50KSB7XG5cdFx0aWYgKCFzdHIpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRcblx0XHR2YXIgJHRlc3QgPSAkKCc8dGVzdD4nKS5jc3Moe1xuXHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHR0b3A6IC05OTk5OSxcblx0XHRcdGxlZnQ6IC05OTk5OSxcblx0XHRcdHdpZHRoOiAnYXV0bycsXG5cdFx0XHRwYWRkaW5nOiAwLFxuXHRcdFx0d2hpdGVTcGFjZTogJ3ByZSdcblx0XHR9KS50ZXh0KHN0cikuYXBwZW5kVG8oJ2JvZHknKTtcblx0XG5cdFx0dHJhbnNmZXJTdHlsZXMoJHBhcmVudCwgJHRlc3QsIFtcblx0XHRcdCdsZXR0ZXJTcGFjaW5nJyxcblx0XHRcdCdmb250U2l6ZScsXG5cdFx0XHQnZm9udEZhbWlseScsXG5cdFx0XHQnZm9udFdlaWdodCcsXG5cdFx0XHQndGV4dFRyYW5zZm9ybSdcblx0XHRdKTtcblx0XG5cdFx0dmFyIHdpZHRoID0gJHRlc3Qud2lkdGgoKTtcblx0XHQkdGVzdC5yZW1vdmUoKTtcblx0XG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFNldHMgdXAgYW4gaW5wdXQgdG8gZ3JvdyBob3Jpem9udGFsbHkgYXMgdGhlIHVzZXJcblx0ICogdHlwZXMuIElmIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkIG1hbnVhbGx5LCB5b3UgY2FuXG5cdCAqIHRyaWdnZXIgdGhlIFwidXBkYXRlXCIgaGFuZGxlciB0byByZXNpemU6XG5cdCAqXG5cdCAqICRpbnB1dC50cmlnZ2VyKCd1cGRhdGUnKTtcblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9ICRpbnB1dFxuXHQgKi9cblx0dmFyIGF1dG9Hcm93ID0gZnVuY3Rpb24oJGlucHV0KSB7XG5cdFx0dmFyIGN1cnJlbnRXaWR0aCA9IG51bGw7XG5cdFx0XG5cdFx0dmFyIHVwZGF0ZSA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciB2YWx1ZSwga2V5Q29kZSwgcHJpbnRhYmxlLCBwbGFjZWhvbGRlciwgd2lkdGg7XG5cdFx0XHR2YXIgc2hpZnQsIGNoYXJhY3Rlciwgc2VsZWN0aW9uO1xuXHRcdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50IHx8IHt9O1xuXHRcblx0XHRcdGlmIChlLm1ldGFLZXkgfHwgZS5hbHRLZXkpIHJldHVybjtcblx0XHRcdGlmICgkaW5wdXQuZGF0YSgnZ3JvdycpID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcblx0XHRcdHZhbHVlID0gJGlucHV0LnZhbCgpO1xuXHRcdFx0aWYgKGUudHlwZSAmJiBlLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRcdGtleUNvZGUgPSBlLmtleUNvZGU7XG5cdFx0XHRcdHByaW50YWJsZSA9IChcblx0XHRcdFx0XHQoa2V5Q29kZSA+PSA5NyAmJiBrZXlDb2RlIDw9IDEyMikgfHwgLy8gYS16XG5cdFx0XHRcdFx0KGtleUNvZGUgPj0gNjUgJiYga2V5Q29kZSA8PSA5MCkgIHx8IC8vIEEtWlxuXHRcdFx0XHRcdChrZXlDb2RlID49IDQ4ICYmIGtleUNvZGUgPD0gNTcpICB8fCAvLyAwLTlcblx0XHRcdFx0XHRrZXlDb2RlID09PSAzMiAvLyBzcGFjZVxuXHRcdFx0XHQpO1xuXHRcblx0XHRcdFx0aWYgKGtleUNvZGUgPT09IEtFWV9ERUxFVEUgfHwga2V5Q29kZSA9PT0gS0VZX0JBQ0tTUEFDRSkge1xuXHRcdFx0XHRcdHNlbGVjdGlvbiA9IGdldFNlbGVjdGlvbigkaW5wdXRbMF0pO1xuXHRcdFx0XHRcdGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uc3RhcnQpICsgdmFsdWUuc3Vic3RyaW5nKHNlbGVjdGlvbi5zdGFydCArIHNlbGVjdGlvbi5sZW5ndGgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS0VZX0JBQ0tTUEFDRSAmJiBzZWxlY3Rpb24uc3RhcnQpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5zdGFydCAtIDEpICsgdmFsdWUuc3Vic3RyaW5nKHNlbGVjdGlvbi5zdGFydCArIDEpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS0VZX0RFTEVURSAmJiB0eXBlb2Ygc2VsZWN0aW9uLnN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLnN0YXJ0KSArIHZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb24uc3RhcnQgKyAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAocHJpbnRhYmxlKSB7XG5cdFx0XHRcdFx0c2hpZnQgPSBlLnNoaWZ0S2V5O1xuXHRcdFx0XHRcdGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKTtcblx0XHRcdFx0XHRpZiAoc2hpZnQpIGNoYXJhY3RlciA9IGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdGVsc2UgY2hhcmFjdGVyID0gY2hhcmFjdGVyLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0dmFsdWUgKz0gY2hhcmFjdGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0cGxhY2Vob2xkZXIgPSAkaW5wdXQuYXR0cigncGxhY2Vob2xkZXInKSB8fCAnJztcblx0XHRcdGlmICghdmFsdWUubGVuZ3RoICYmIHBsYWNlaG9sZGVyLmxlbmd0aCkge1xuXHRcdFx0XHR2YWx1ZSA9IHBsYWNlaG9sZGVyO1xuXHRcdFx0fVxuXHRcblx0XHRcdHdpZHRoID0gbWVhc3VyZVN0cmluZyh2YWx1ZSwgJGlucHV0KSArIDQ7XG5cdFx0XHRpZiAod2lkdGggIT09IGN1cnJlbnRXaWR0aCkge1xuXHRcdFx0XHRjdXJyZW50V2lkdGggPSB3aWR0aDtcblx0XHRcdFx0JGlucHV0LndpZHRoKHdpZHRoKTtcblx0XHRcdFx0JGlucHV0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemUnKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcblx0XHQkaW5wdXQub24oJ2tleWRvd24ga2V5dXAgdXBkYXRlIGJsdXInLCB1cGRhdGUpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9O1xuXHRcblx0dmFyIFNlbGVjdGl6ZSA9IGZ1bmN0aW9uKCRpbnB1dCwgc2V0dGluZ3MpIHtcblx0XHR2YXIga2V5LCBpLCBuLCBkaXIsIGlucHV0LCBzZWxmID0gdGhpcztcblx0XHRpbnB1dCA9ICRpbnB1dFswXTtcblx0XHRpbnB1dC5zZWxlY3RpemUgPSBzZWxmO1xuXHRcblx0XHQvLyBkZXRlY3QgcnRsIGVudmlyb25tZW50XG5cdFx0ZGlyID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgOiBpbnB1dC5jdXJyZW50U3R5bGUgJiYgaW5wdXQuY3VycmVudFN0eWxlLmRpcmVjdGlvbjtcblx0XHRkaXIgPSBkaXIgfHwgJGlucHV0LnBhcmVudHMoJ1tkaXJdOmZpcnN0JykuYXR0cignZGlyJykgfHwgJyc7XG5cdFxuXHRcdC8vIHNldHVwIGRlZmF1bHQgc3RhdGVcblx0XHQkLmV4dGVuZChzZWxmLCB7XG5cdFx0XHRzZXR0aW5ncyAgICAgICAgIDogc2V0dGluZ3MsXG5cdFx0XHQkaW5wdXQgICAgICAgICAgIDogJGlucHV0LFxuXHRcdFx0dGFnVHlwZSAgICAgICAgICA6IGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcgPyBUQUdfU0VMRUNUIDogVEFHX0lOUFVULFxuXHRcdFx0cnRsICAgICAgICAgICAgICA6IC9ydGwvaS50ZXN0KGRpciksXG5cdFxuXHRcdFx0ZXZlbnROUyAgICAgICAgICA6ICcuc2VsZWN0aXplJyArICgrK1NlbGVjdGl6ZS5jb3VudCksXG5cdFx0XHRoaWdobGlnaHRlZFZhbHVlIDogbnVsbCxcblx0XHRcdGlzT3BlbiAgICAgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzRGlzYWJsZWQgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzUmVxdWlyZWQgICAgICAgOiAkaW5wdXQuaXMoJ1tyZXF1aXJlZF0nKSxcblx0XHRcdGlzSW52YWxpZCAgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzTG9ja2VkICAgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzRm9jdXNlZCAgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzSW5wdXRIaWRkZW4gICAgOiBmYWxzZSxcblx0XHRcdGlzU2V0dXAgICAgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzU2hpZnREb3duICAgICAgOiBmYWxzZSxcblx0XHRcdGlzQ21kRG93biAgICAgICAgOiBmYWxzZSxcblx0XHRcdGlzQ3RybERvd24gICAgICAgOiBmYWxzZSxcblx0XHRcdGlnbm9yZUZvY3VzICAgICAgOiBmYWxzZSxcblx0XHRcdGlnbm9yZUhvdmVyICAgICAgOiBmYWxzZSxcblx0XHRcdGhhc09wdGlvbnMgICAgICAgOiBmYWxzZSxcblx0XHRcdGN1cnJlbnRSZXN1bHRzICAgOiBudWxsLFxuXHRcdFx0bGFzdFZhbHVlICAgICAgICA6ICcnLFxuXHRcdFx0Y2FyZXRQb3MgICAgICAgICA6IDAsXG5cdFx0XHRsb2FkaW5nICAgICAgICAgIDogMCxcblx0XHRcdGxvYWRlZFNlYXJjaGVzICAgOiB7fSxcblx0XG5cdFx0XHQkYWN0aXZlT3B0aW9uICAgIDogbnVsbCxcblx0XHRcdCRhY3RpdmVJdGVtcyAgICAgOiBbXSxcblx0XG5cdFx0XHRvcHRncm91cHMgICAgICAgIDoge30sXG5cdFx0XHRvcHRpb25zICAgICAgICAgIDoge30sXG5cdFx0XHR1c2VyT3B0aW9ucyAgICAgIDoge30sXG5cdFx0XHRpdGVtcyAgICAgICAgICAgIDogW10sXG5cdFx0XHRyZW5kZXJDYWNoZSAgICAgIDoge30sXG5cdFx0XHRvblNlYXJjaENoYW5nZSAgIDogZGVib3VuY2Uoc2VsZi5vblNlYXJjaENoYW5nZSwgc2V0dGluZ3MubG9hZFRocm90dGxlKVxuXHRcdH0pO1xuXHRcblx0XHQvLyBzZWFyY2ggc3lzdGVtXG5cdFx0c2VsZi5zaWZ0ZXIgPSBuZXcgU2lmdGVyKHRoaXMub3B0aW9ucywge2RpYWNyaXRpY3M6IHNldHRpbmdzLmRpYWNyaXRpY3N9KTtcblx0XG5cdFx0Ly8gYnVpbGQgb3B0aW9ucyB0YWJsZVxuXHRcdCQuZXh0ZW5kKHNlbGYub3B0aW9ucywgYnVpbGRfaGFzaF90YWJsZShzZXR0aW5ncy52YWx1ZUZpZWxkLCBzZXR0aW5ncy5vcHRpb25zKSk7XG5cdFx0ZGVsZXRlIHNlbGYuc2V0dGluZ3Mub3B0aW9ucztcblx0XG5cdFx0Ly8gYnVpbGQgb3B0Z3JvdXAgdGFibGVcblx0XHQkLmV4dGVuZChzZWxmLm9wdGdyb3VwcywgYnVpbGRfaGFzaF90YWJsZShzZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGQsIHNldHRpbmdzLm9wdGdyb3VwcykpO1xuXHRcdGRlbGV0ZSBzZWxmLnNldHRpbmdzLm9wdGdyb3Vwcztcblx0XG5cdFx0Ly8gb3B0aW9uLWRlcGVuZGVudCBkZWZhdWx0c1xuXHRcdHNlbGYuc2V0dGluZ3MubW9kZSA9IHNlbGYuc2V0dGluZ3MubW9kZSB8fCAoc2VsZi5zZXR0aW5ncy5tYXhJdGVtcyA9PT0gMSA/ICdzaW5nbGUnIDogJ211bHRpJyk7XG5cdFx0aWYgKHR5cGVvZiBzZWxmLnNldHRpbmdzLmhpZGVTZWxlY3RlZCAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRzZWxmLnNldHRpbmdzLmhpZGVTZWxlY3RlZCA9IHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ211bHRpJztcblx0XHR9XG5cdFxuXHRcdHNlbGYuaW5pdGlhbGl6ZVBsdWdpbnMoc2VsZi5zZXR0aW5ncy5wbHVnaW5zKTtcblx0XHRzZWxmLnNldHVwQ2FsbGJhY2tzKCk7XG5cdFx0c2VsZi5zZXR1cFRlbXBsYXRlcygpO1xuXHRcdHNlbGYuc2V0dXAoKTtcblx0fTtcblx0XG5cdC8vIG1peGluc1xuXHQvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxuXHRcblx0TWljcm9FdmVudC5taXhpbihTZWxlY3RpemUpO1xuXHRNaWNyb1BsdWdpbi5taXhpbihTZWxlY3RpemUpO1xuXHRcblx0Ly8gbWV0aG9kc1xuXHQvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxuXHRcblx0JC5leHRlbmQoU2VsZWN0aXplLnByb3RvdHlwZSwge1xuXHRcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGFsbCBlbGVtZW50cyBhbmQgc2V0cyB1cCBldmVudCBiaW5kaW5ncy5cblx0XHQgKi9cblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiAgICAgID0gdGhpcztcblx0XHRcdHZhciBzZXR0aW5ncyAgPSBzZWxmLnNldHRpbmdzO1xuXHRcdFx0dmFyIGV2ZW50TlMgICA9IHNlbGYuZXZlbnROUztcblx0XHRcdHZhciAkd2luZG93ICAgPSAkKHdpbmRvdyk7XG5cdFx0XHR2YXIgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cdFxuXHRcdFx0dmFyICR3cmFwcGVyO1xuXHRcdFx0dmFyICRjb250cm9sO1xuXHRcdFx0dmFyICRjb250cm9sX2lucHV0O1xuXHRcdFx0dmFyICRkcm9wZG93bjtcblx0XHRcdHZhciAkZHJvcGRvd25fY29udGVudDtcblx0XHRcdHZhciAkZHJvcGRvd25fcGFyZW50O1xuXHRcdFx0dmFyIGlucHV0TW9kZTtcblx0XHRcdHZhciB0aW1lb3V0X2JsdXI7XG5cdFx0XHR2YXIgdGltZW91dF9mb2N1cztcblx0XHRcdHZhciB0YWJfaW5kZXg7XG5cdFx0XHR2YXIgY2xhc3Nlcztcblx0XHRcdHZhciBjbGFzc2VzX3BsdWdpbnM7XG5cdFxuXHRcdFx0aW5wdXRNb2RlICAgICAgICAgPSBzZWxmLnNldHRpbmdzLm1vZGU7XG5cdFx0XHR0YWJfaW5kZXggICAgICAgICA9IHNlbGYuJGlucHV0LmF0dHIoJ3RhYmluZGV4JykgfHwgJyc7XG5cdFx0XHRjbGFzc2VzICAgICAgICAgICA9IHNlbGYuJGlucHV0LmF0dHIoJ2NsYXNzJykgfHwgJyc7XG5cdFxuXHRcdFx0JHdyYXBwZXIgICAgICAgICAgPSAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLndyYXBwZXJDbGFzcykuYWRkQ2xhc3MoY2xhc3NlcykuYWRkQ2xhc3MoaW5wdXRNb2RlKTtcblx0XHRcdCRjb250cm9sICAgICAgICAgID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5pbnB1dENsYXNzKS5hZGRDbGFzcygnaXRlbXMnKS5hcHBlbmRUbygkd3JhcHBlcik7XG5cdFx0XHQkY29udHJvbF9pbnB1dCAgICA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+JykuYXBwZW5kVG8oJGNvbnRyb2wpLmF0dHIoJ3RhYmluZGV4JywgdGFiX2luZGV4KTtcblx0XHRcdCRkcm9wZG93bl9wYXJlbnQgID0gJChzZXR0aW5ncy5kcm9wZG93blBhcmVudCB8fCAkd3JhcHBlcik7XG5cdFx0XHQkZHJvcGRvd24gICAgICAgICA9ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MuZHJvcGRvd25DbGFzcykuYWRkQ2xhc3MoY2xhc3NlcykuYWRkQ2xhc3MoaW5wdXRNb2RlKS5oaWRlKCkuYXBwZW5kVG8oJGRyb3Bkb3duX3BhcmVudCk7XG5cdFx0XHQkZHJvcGRvd25fY29udGVudCA9ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MuZHJvcGRvd25Db250ZW50Q2xhc3MpLmFwcGVuZFRvKCRkcm9wZG93bik7XG5cdFxuXHRcdFx0JHdyYXBwZXIuY3NzKHtcblx0XHRcdFx0d2lkdGg6IHNlbGYuJGlucHV0WzBdLnN0eWxlLndpZHRoXG5cdFx0XHR9KTtcblx0XG5cdFx0XHRpZiAoc2VsZi5wbHVnaW5zLm5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRjbGFzc2VzX3BsdWdpbnMgPSAncGx1Z2luLScgKyBzZWxmLnBsdWdpbnMubmFtZXMuam9pbignIHBsdWdpbi0nKTtcblx0XHRcdFx0JHdyYXBwZXIuYWRkQ2xhc3MoY2xhc3Nlc19wbHVnaW5zKTtcblx0XHRcdFx0JGRyb3Bkb3duLmFkZENsYXNzKGNsYXNzZXNfcGx1Z2lucyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKChzZXR0aW5ncy5tYXhJdGVtcyA9PT0gbnVsbCB8fCBzZXR0aW5ncy5tYXhJdGVtcyA+IDEpICYmIHNlbGYudGFnVHlwZSA9PT0gVEFHX1NFTEVDVCkge1xuXHRcdFx0XHRzZWxmLiRpbnB1dC5hdHRyKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChzZWxmLnNldHRpbmdzLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdCRjb250cm9sX2lucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJywgc2V0dGluZ3MucGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHNlbGYuJHdyYXBwZXIgICAgICAgICAgPSAkd3JhcHBlcjtcblx0XHRcdHNlbGYuJGNvbnRyb2wgICAgICAgICAgPSAkY29udHJvbDtcblx0XHRcdHNlbGYuJGNvbnRyb2xfaW5wdXQgICAgPSAkY29udHJvbF9pbnB1dDtcblx0XHRcdHNlbGYuJGRyb3Bkb3duICAgICAgICAgPSAkZHJvcGRvd247XG5cdFx0XHRzZWxmLiRkcm9wZG93bl9jb250ZW50ID0gJGRyb3Bkb3duX2NvbnRlbnQ7XG5cdFxuXHRcdFx0JGRyb3Bkb3duLm9uKCdtb3VzZWVudGVyJywgJ1tkYXRhLXNlbGVjdGFibGVdJywgZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLm9uT3B0aW9uSG92ZXIuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTsgfSk7XG5cdFx0XHQkZHJvcGRvd24ub24oJ21vdXNlZG93bicsICdbZGF0YS1zZWxlY3RhYmxlXScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbk9wdGlvblNlbGVjdC5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9KTtcblx0XHRcdHdhdGNoQ2hpbGRFdmVudCgkY29udHJvbCwgJ21vdXNlZG93bicsICcqOm5vdChpbnB1dCknLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25JdGVtU2VsZWN0LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0pO1xuXHRcdFx0YXV0b0dyb3coJGNvbnRyb2xfaW5wdXQpO1xuXHRcblx0XHRcdCRjb250cm9sLm9uKHtcblx0XHRcdFx0bW91c2Vkb3duIDogZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLm9uTW91c2VEb3duLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0sXG5cdFx0XHRcdGNsaWNrICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbkNsaWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH1cblx0XHRcdH0pO1xuXHRcblx0XHRcdCRjb250cm9sX2lucHV0Lm9uKHtcblx0XHRcdFx0bW91c2Vkb3duIDogZnVuY3Rpb24oZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LFxuXHRcdFx0XHRrZXlkb3duICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25LZXlEb3duLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0sXG5cdFx0XHRcdGtleXVwICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbktleVVwLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0sXG5cdFx0XHRcdGtleXByZXNzICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbktleVByZXNzLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0sXG5cdFx0XHRcdHJlc2l6ZSAgICA6IGZ1bmN0aW9uKCkgeyBzZWxmLnBvc2l0aW9uRHJvcGRvd24uYXBwbHkoc2VsZiwgW10pOyB9LFxuXHRcdFx0XHRibHVyICAgICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYub25CbHVyLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH0sXG5cdFx0XHRcdGZvY3VzICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5vbkZvY3VzLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH1cblx0XHRcdH0pO1xuXHRcblx0XHRcdCRkb2N1bWVudC5vbigna2V5ZG93bicgKyBldmVudE5TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHNlbGYuaXNDbWREb3duID0gZVtJU19NQUMgPyAnbWV0YUtleScgOiAnY3RybEtleSddO1xuXHRcdFx0XHRzZWxmLmlzQ3RybERvd24gPSBlW0lTX01BQyA/ICdhbHRLZXknIDogJ2N0cmxLZXknXTtcblx0XHRcdFx0c2VsZi5pc1NoaWZ0RG93biA9IGUuc2hpZnRLZXk7XG5cdFx0XHR9KTtcblx0XG5cdFx0XHQkZG9jdW1lbnQub24oJ2tleXVwJyArIGV2ZW50TlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gS0VZX0NUUkwpIHNlbGYuaXNDdHJsRG93biA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSBLRVlfU0hJRlQpIHNlbGYuaXNTaGlmdERvd24gPSBmYWxzZTtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gS0VZX0NNRCkgc2VsZi5pc0NtZERvd24gPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcblx0XHRcdCRkb2N1bWVudC5vbignbW91c2Vkb3duJyArIGV2ZW50TlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKHNlbGYuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdFx0Ly8gcHJldmVudCBldmVudHMgb24gdGhlIGRyb3Bkb3duIHNjcm9sbGJhciBmcm9tIGNhdXNpbmcgdGhlIGNvbnRyb2wgdG8gYmx1clxuXHRcdFx0XHRcdGlmIChlLnRhcmdldCA9PT0gc2VsZi4kZHJvcGRvd25bMF0gfHwgZS50YXJnZXQucGFyZW50Tm9kZSA9PT0gc2VsZi4kZHJvcGRvd25bMF0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYmx1ciBvbiBjbGljayBvdXRzaWRlXG5cdFx0XHRcdFx0aWYgKCFzZWxmLiRjb250cm9sLmhhcyhlLnRhcmdldCkubGVuZ3RoICYmIGUudGFyZ2V0ICE9PSBzZWxmLiRjb250cm9sWzBdKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmJsdXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcblx0XHRcdCR3aW5kb3cub24oWydzY3JvbGwnICsgZXZlbnROUywgJ3Jlc2l6ZScgKyBldmVudE5TXS5qb2luKCcgJyksIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoc2VsZi5pc09wZW4pIHtcblx0XHRcdFx0XHRzZWxmLnBvc2l0aW9uRHJvcGRvd24uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQkd2luZG93Lm9uKCdtb3VzZW1vdmUnICsgZXZlbnROUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuaWdub3JlSG92ZXIgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcblx0XHRcdC8vIHN0b3JlIG9yaWdpbmFsIGNoaWxkcmVuIGFuZCB0YWIgaW5kZXggc28gdGhhdCB0aGV5IGNhbiBiZVxuXHRcdFx0Ly8gcmVzdG9yZWQgd2hlbiB0aGUgZGVzdHJveSgpIG1ldGhvZCBpcyBjYWxsZWQuXG5cdFx0XHR0aGlzLnJldmVydFNldHRpbmdzID0ge1xuXHRcdFx0XHQkY2hpbGRyZW4gOiBzZWxmLiRpbnB1dC5jaGlsZHJlbigpLmRldGFjaCgpLFxuXHRcdFx0XHR0YWJpbmRleCAgOiBzZWxmLiRpbnB1dC5hdHRyKCd0YWJpbmRleCcpXG5cdFx0XHR9O1xuXHRcblx0XHRcdHNlbGYuJGlucHV0LmF0dHIoJ3RhYmluZGV4JywgLTEpLmhpZGUoKS5hZnRlcihzZWxmLiR3cmFwcGVyKTtcblx0XG5cdFx0XHRpZiAoJC5pc0FycmF5KHNldHRpbmdzLml0ZW1zKSkge1xuXHRcdFx0XHRzZWxmLnNldFZhbHVlKHNldHRpbmdzLml0ZW1zKTtcblx0XHRcdFx0ZGVsZXRlIHNldHRpbmdzLml0ZW1zO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGZlYXR1cmUgZGV0ZWN0IGZvciB0aGUgdmFsaWRhdGlvbiBBUElcblx0XHRcdGlmIChzZWxmLiRpbnB1dFswXS52YWxpZGl0eSkge1xuXHRcdFx0XHRzZWxmLiRpbnB1dC5vbignaW52YWxpZCcgKyBldmVudE5TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNlbGYuaXNJbnZhbGlkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLnVwZGF0ZU9yaWdpbmFsSW5wdXQoKTtcblx0XHRcdHNlbGYucmVmcmVzaEl0ZW1zKCk7XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdFx0c2VsZi51cGRhdGVQbGFjZWhvbGRlcigpO1xuXHRcdFx0c2VsZi5pc1NldHVwID0gdHJ1ZTtcblx0XG5cdFx0XHRpZiAoc2VsZi4kaW5wdXQuaXMoJzpkaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHNlbGYuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHNlbGYub24oJ2NoYW5nZScsIHRoaXMub25DaGFuZ2UpO1xuXHRcdFx0c2VsZi50cmlnZ2VyKCdpbml0aWFsaXplJyk7XG5cdFxuXHRcdFx0Ly8gcHJlbG9hZCBvcHRpb25zXG5cdFx0XHRpZiAoc2V0dGluZ3MucHJlbG9hZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRzZWxmLm9uU2VhcmNoQ2hhbmdlKCcnKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTZXRzIHVwIGRlZmF1bHQgcmVuZGVyaW5nIGZ1bmN0aW9ucy5cblx0XHQgKi9cblx0XHRzZXR1cFRlbXBsYXRlczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgZmllbGRfbGFiZWwgPSBzZWxmLnNldHRpbmdzLmxhYmVsRmllbGQ7XG5cdFx0XHR2YXIgZmllbGRfb3B0Z3JvdXAgPSBzZWxmLnNldHRpbmdzLm9wdGdyb3VwTGFiZWxGaWVsZDtcblx0XG5cdFx0XHR2YXIgdGVtcGxhdGVzID0ge1xuXHRcdFx0XHQnb3B0Z3JvdXAnOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwib3B0Z3JvdXBcIj4nICsgZGF0YS5odG1sICsgJzwvZGl2Pic7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdvcHRncm91cF9oZWFkZXInOiBmdW5jdGlvbihkYXRhLCBlc2NhcGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJvcHRncm91cC1oZWFkZXJcIj4nICsgZXNjYXBlKGRhdGFbZmllbGRfb3B0Z3JvdXBdKSArICc8L2Rpdj4nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnb3B0aW9uJzogZnVuY3Rpb24oZGF0YSwgZXNjYXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwib3B0aW9uXCI+JyArIGVzY2FwZShkYXRhW2ZpZWxkX2xhYmVsXSkgKyAnPC9kaXY+Jztcblx0XHRcdFx0fSxcblx0XHRcdFx0J2l0ZW0nOiBmdW5jdGlvbihkYXRhLCBlc2NhcGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJpdGVtXCI+JyArIGVzY2FwZShkYXRhW2ZpZWxkX2xhYmVsXSkgKyAnPC9kaXY+Jztcblx0XHRcdFx0fSxcblx0XHRcdFx0J29wdGlvbl9jcmVhdGUnOiBmdW5jdGlvbihkYXRhLCBlc2NhcGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJjcmVhdGVcIj5BZGQgPHN0cm9uZz4nICsgZXNjYXBlKGRhdGEuaW5wdXQpICsgJzwvc3Ryb25nPiZoZWxsaXA7PC9kaXY+Jztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XG5cdFx0XHRzZWxmLnNldHRpbmdzLnJlbmRlciA9ICQuZXh0ZW5kKHt9LCB0ZW1wbGF0ZXMsIHNlbGYuc2V0dGluZ3MucmVuZGVyKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBNYXBzIGZpcmVkIGV2ZW50cyB0byBjYWxsYmFja3MgcHJvdmlkZWRcblx0XHQgKiBpbiB0aGUgc2V0dGluZ3MgdXNlZCB3aGVuIGNyZWF0aW5nIHRoZSBjb250cm9sLlxuXHRcdCAqL1xuXHRcdHNldHVwQ2FsbGJhY2tzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBrZXksIGZuLCBjYWxsYmFja3MgPSB7XG5cdFx0XHRcdCdpbml0aWFsaXplJyAgICAgOiAnb25Jbml0aWFsaXplJyxcblx0XHRcdFx0J2NoYW5nZScgICAgICAgICA6ICdvbkNoYW5nZScsXG5cdFx0XHRcdCdpdGVtX2FkZCcgICAgICAgOiAnb25JdGVtQWRkJyxcblx0XHRcdFx0J2l0ZW1fcmVtb3ZlJyAgICA6ICdvbkl0ZW1SZW1vdmUnLFxuXHRcdFx0XHQnY2xlYXInICAgICAgICAgIDogJ29uQ2xlYXInLFxuXHRcdFx0XHQnb3B0aW9uX2FkZCcgICAgIDogJ29uT3B0aW9uQWRkJyxcblx0XHRcdFx0J29wdGlvbl9yZW1vdmUnICA6ICdvbk9wdGlvblJlbW92ZScsXG5cdFx0XHRcdCdvcHRpb25fY2xlYXInICAgOiAnb25PcHRpb25DbGVhcicsXG5cdFx0XHRcdCdkcm9wZG93bl9vcGVuJyAgOiAnb25Ecm9wZG93bk9wZW4nLFxuXHRcdFx0XHQnZHJvcGRvd25fY2xvc2UnIDogJ29uRHJvcGRvd25DbG9zZScsXG5cdFx0XHRcdCd0eXBlJyAgICAgICAgICAgOiAnb25UeXBlJ1xuXHRcdFx0fTtcblx0XG5cdFx0XHRmb3IgKGtleSBpbiBjYWxsYmFja3MpIHtcblx0XHRcdFx0aWYgKGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0Zm4gPSB0aGlzLnNldHRpbmdzW2NhbGxiYWNrc1trZXldXTtcblx0XHRcdFx0XHRpZiAoZm4pIHRoaXMub24oa2V5LCBmbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgbWFpbiBjb250cm9sIGVsZW1lbnRcblx0XHQgKiBoYXMgYSBjbGljayBldmVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRvbkNsaWNrOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0Ly8gbmVjZXNzYXJ5IGZvciBtb2JpbGUgd2Via2l0IGRldmljZXMgKG1hbnVhbCBmb2N1cyB0cmlnZ2VyaW5nXG5cdFx0XHQvLyBpcyBpZ25vcmVkIHVubGVzcyBpbnZva2VkIHdpdGhpbiBhIGNsaWNrIGV2ZW50KVxuXHRcdFx0aWYgKCFzZWxmLmlzRm9jdXNlZCkge1xuXHRcdFx0XHRzZWxmLmZvY3VzKCk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgbWFpbiBjb250cm9sIGVsZW1lbnRcblx0XHQgKiBoYXMgYSBtb3VzZSBkb3duIGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGVcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uTW91c2VEb3duOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgZGVmYXVsdFByZXZlbnRlZCA9IGUuaXNEZWZhdWx0UHJldmVudGVkKCk7XG5cdFx0XHR2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXHRcblx0XHRcdGlmIChzZWxmLmlzRm9jdXNlZCkge1xuXHRcdFx0XHQvLyByZXRhaW4gZm9jdXMgYnkgcHJldmVudGluZyBuYXRpdmUgaGFuZGxpbmcuIGlmIHRoZVxuXHRcdFx0XHQvLyBldmVudCB0YXJnZXQgaXMgdGhlIGlucHV0IGl0IHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG5cdFx0XHRcdC8vIG90aGVyd2lzZSwgdGV4dCBzZWxlY3Rpb24gd2l0aGluIHRoZSBpbnB1dCB3b24ndCB3b3JrLlxuXHRcdFx0XHRpZiAoZS50YXJnZXQgIT09IHNlbGYuJGNvbnRyb2xfaW5wdXRbMF0pIHtcblx0XHRcdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJykge1xuXHRcdFx0XHRcdFx0Ly8gdG9nZ2xlIGRyb3Bkb3duXG5cdFx0XHRcdFx0XHRzZWxmLmlzT3BlbiA/IHNlbGYuY2xvc2UoKSA6IHNlbGYub3BlbigpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0QWN0aXZlSXRlbShudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBnaXZlIGNvbnRyb2wgZm9jdXNcblx0XHRcdFx0aWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmZvY3VzKCk7XG5cdFx0XHRcdFx0fSwgMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgaGFzIGJlZW4gY2hhbmdlZC5cblx0XHQgKiBUaGlzIHNob3VsZCBwcm9wYWdhdGUgdGhlIGV2ZW50IHRvIHRoZSBvcmlnaW5hbCBET01cblx0XHQgKiBpbnB1dCAvIHNlbGVjdCBlbGVtZW50LlxuXHRcdCAqL1xuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGtleXByZXNzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGVcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRvbktleVByZXNzOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0xvY2tlZCkgcmV0dXJuIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlIHx8IGUud2hpY2gpO1xuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuY3JlYXRlICYmIGNoYXJhY3RlciA9PT0gdGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXIpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVJdGVtKCk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGtleWRvd24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uS2V5RG93bjogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGlzSW5wdXQgPSBlLnRhcmdldCA9PT0gdGhpcy4kY29udHJvbF9pbnB1dFswXTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoc2VsZi5pc0xvY2tlZCkge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlICE9PSBLRVlfVEFCKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XG5cdFx0XHRzd2l0Y2ggKGUua2V5Q29kZSkge1xuXHRcdFx0XHRjYXNlIEtFWV9BOlxuXHRcdFx0XHRcdGlmIChzZWxmLmlzQ21kRG93bikge1xuXHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgS0VZX0VTQzpcblx0XHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRjYXNlIEtFWV9OOlxuXHRcdFx0XHRcdGlmICghZS5jdHJsS2V5KSBicmVhaztcblx0XHRcdFx0Y2FzZSBLRVlfRE9XTjpcblx0XHRcdFx0XHRpZiAoIXNlbGYuaXNPcGVuICYmIHNlbGYuaGFzT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0c2VsZi5vcGVuKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLiRhY3RpdmVPcHRpb24pIHtcblx0XHRcdFx0XHRcdHNlbGYuaWdub3JlSG92ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dmFyICRuZXh0ID0gc2VsZi5nZXRBZGphY2VudE9wdGlvbihzZWxmLiRhY3RpdmVPcHRpb24sIDEpO1xuXHRcdFx0XHRcdFx0aWYgKCRuZXh0Lmxlbmd0aCkgc2VsZi5zZXRBY3RpdmVPcHRpb24oJG5leHQsIHRydWUsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRjYXNlIEtFWV9QOlxuXHRcdFx0XHRcdGlmICghZS5jdHJsS2V5KSBicmVhaztcblx0XHRcdFx0Y2FzZSBLRVlfVVA6XG5cdFx0XHRcdFx0aWYgKHNlbGYuJGFjdGl2ZU9wdGlvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5pZ25vcmVIb3ZlciA9IHRydWU7XG5cdFx0XHRcdFx0XHR2YXIgJHByZXYgPSBzZWxmLmdldEFkamFjZW50T3B0aW9uKHNlbGYuJGFjdGl2ZU9wdGlvbiwgLTEpO1xuXHRcdFx0XHRcdFx0aWYgKCRwcmV2Lmxlbmd0aCkgc2VsZi5zZXRBY3RpdmVPcHRpb24oJHByZXYsIHRydWUsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRjYXNlIEtFWV9SRVRVUk46XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXNPcGVuICYmIHNlbGYuJGFjdGl2ZU9wdGlvbikge1xuXHRcdFx0XHRcdFx0c2VsZi5vbk9wdGlvblNlbGVjdCh7Y3VycmVudFRhcmdldDogc2VsZi4kYWN0aXZlT3B0aW9ufSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdGNhc2UgS0VZX0xFRlQ6XG5cdFx0XHRcdFx0c2VsZi5hZHZhbmNlU2VsZWN0aW9uKC0xLCBlKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdGNhc2UgS0VZX1JJR0hUOlxuXHRcdFx0XHRcdHNlbGYuYWR2YW5jZVNlbGVjdGlvbigxLCBlKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdGNhc2UgS0VZX1RBQjpcblx0XHRcdFx0XHRpZiAoc2VsZi5pc09wZW4gJiYgc2VsZi4kYWN0aXZlT3B0aW9uKSB7XG5cdFx0XHRcdFx0XHRzZWxmLm9uT3B0aW9uU2VsZWN0KHtjdXJyZW50VGFyZ2V0OiBzZWxmLiRhY3RpdmVPcHRpb259KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MuY3JlYXRlICYmIHNlbGYuY3JlYXRlSXRlbSgpKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0Y2FzZSBLRVlfQkFDS1NQQUNFOlxuXHRcdFx0XHRjYXNlIEtFWV9ERUxFVEU6XG5cdFx0XHRcdFx0c2VsZi5kZWxldGVTZWxlY3Rpb24oZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGYuaXNGdWxsKCkgfHwgc2VsZi5pc0lucHV0SGlkZGVuKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGtleXVwLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGVcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRvbktleVVwOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKHNlbGYuaXNMb2NrZWQpIHJldHVybiBlICYmIGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZhciB2YWx1ZSA9IHNlbGYuJGNvbnRyb2xfaW5wdXQudmFsKCkgfHwgJyc7XG5cdFx0XHRpZiAoc2VsZi5sYXN0VmFsdWUgIT09IHZhbHVlKSB7XG5cdFx0XHRcdHNlbGYubGFzdFZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdHNlbGYub25TZWFyY2hDaGFuZ2UodmFsdWUpO1xuXHRcdFx0XHRzZWxmLnJlZnJlc2hPcHRpb25zKCk7XG5cdFx0XHRcdHNlbGYudHJpZ2dlcigndHlwZScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBJbnZva2VzIHRoZSB1c2VyLXByb3ZpZGUgb3B0aW9uIHByb3ZpZGVyIC8gbG9hZGVyLlxuXHRcdCAqXG5cdFx0ICogTm90ZTogdGhpcyBmdW5jdGlvbiBpcyBkZWJvdW5jZWQgaW4gdGhlIFNlbGVjdGl6ZVxuXHRcdCAqIGNvbnN0cnVjdG9yIChieSBgc2V0dGluZ3MubG9hZERlbGF5YCBtaWxsaXNlY29uZHMpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKi9cblx0XHRvblNlYXJjaENoYW5nZTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBmbiA9IHNlbGYuc2V0dGluZ3MubG9hZDtcblx0XHRcdGlmICghZm4pIHJldHVybjtcblx0XHRcdGlmIChzZWxmLmxvYWRlZFNlYXJjaGVzLmhhc093blByb3BlcnR5KHZhbHVlKSkgcmV0dXJuO1xuXHRcdFx0c2VsZi5sb2FkZWRTZWFyY2hlc1t2YWx1ZV0gPSB0cnVlO1xuXHRcdFx0c2VsZi5sb2FkKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGZuLmFwcGx5KHNlbGYsIFt2YWx1ZSwgY2FsbGJhY2tdKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGZvY3VzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGUgKG9wdGlvbmFsKVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uRm9jdXM6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRzZWxmLmlzRm9jdXNlZCA9IHRydWU7XG5cdFx0XHRpZiAoc2VsZi5pc0Rpc2FibGVkKSB7XG5cdFx0XHRcdHNlbGYuYmx1cigpO1xuXHRcdFx0XHRlICYmIGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChzZWxmLmlnbm9yZUZvY3VzKSByZXR1cm47XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5wcmVsb2FkID09PSAnZm9jdXMnKSBzZWxmLm9uU2VhcmNoQ2hhbmdlKCcnKTtcblx0XG5cdFx0XHRpZiAoIXNlbGYuJGFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRzZWxmLnNob3dJbnB1dCgpO1xuXHRcdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG5cdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnMoISFzZWxmLnNldHRpbmdzLm9wZW5PbkZvY3VzKTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGJsdXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uQmx1cjogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5pc0ZvY3VzZWQgPSBmYWxzZTtcblx0XHRcdGlmIChzZWxmLmlnbm9yZUZvY3VzKSByZXR1cm47XG5cdFxuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MuY3JlYXRlICYmIHNlbGYuc2V0dGluZ3MuY3JlYXRlT25CbHVyKSB7XG5cdFx0XHRcdHNlbGYuY3JlYXRlSXRlbShmYWxzZSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0c2VsZi5zZXRUZXh0Ym94VmFsdWUoJycpO1xuXHRcdFx0c2VsZi5zZXRBY3RpdmVJdGVtKG51bGwpO1xuXHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG5cdFx0XHRzZWxmLnNldENhcmV0KHNlbGYuaXRlbXMubGVuZ3RoKTtcblx0XHRcdHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgcm9sbHMgb3ZlclxuXHRcdCAqIGFuIG9wdGlvbiBpbiB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIG1lbnUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uT3B0aW9uSG92ZXI6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmICh0aGlzLmlnbm9yZUhvdmVyKSByZXR1cm47XG5cdFx0XHR0aGlzLnNldEFjdGl2ZU9wdGlvbihlLmN1cnJlbnRUYXJnZXQsIGZhbHNlKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW4gb3B0aW9uXG5cdFx0ICogaW4gdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93biBtZW51LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGVcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRvbk9wdGlvblNlbGVjdDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHZhbHVlLCAkdGFyZ2V0LCAkb3B0aW9uLCBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0JHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdjcmVhdGUnKSkge1xuXHRcdFx0XHRzZWxmLmNyZWF0ZUl0ZW0oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gJHRhcmdldC5hdHRyKCdkYXRhLXZhbHVlJyk7XG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XHRcdFx0XHRzZWxmLnNldFRleHRib3hWYWx1ZSgnJyk7XG5cdFx0XHRcdFx0c2VsZi5hZGRJdGVtKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoIXNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkICYmIGUudHlwZSAmJiAvbW91c2UvLnRlc3QoZS50eXBlKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24oc2VsZi5nZXRPcHRpb24odmFsdWUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW4gaXRlbVxuXHRcdCAqIHRoYXQgaGFzIGJlZW4gc2VsZWN0ZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdG9uSXRlbVNlbGVjdDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGlmIChzZWxmLmlzTG9ja2VkKSByZXR1cm47XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnbXVsdGknKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0c2VsZi5zZXRBY3RpdmVJdGVtKGUuY3VycmVudFRhcmdldCwgZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogSW52b2tlcyB0aGUgcHJvdmlkZWQgbWV0aG9kIHRoYXQgcHJvdmlkZXNcblx0XHQgKiByZXN1bHRzIHRvIGEgY2FsbGJhY2stLS13aGljaCBhcmUgdGhlbiBhZGRlZFxuXHRcdCAqIGFzIG9wdGlvbnMgdG8gdGhlIGNvbnRyb2wuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuXHRcdCAqL1xuXHRcdGxvYWQ6IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgJHdyYXBwZXIgPSBzZWxmLiR3cmFwcGVyLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cdFxuXHRcdFx0c2VsZi5sb2FkaW5nKys7XG5cdFx0XHRmbi5hcHBseShzZWxmLCBbZnVuY3Rpb24ocmVzdWx0cykge1xuXHRcdFx0XHRzZWxmLmxvYWRpbmcgPSBNYXRoLm1heChzZWxmLmxvYWRpbmcgLSAxLCAwKTtcblx0XHRcdFx0aWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRzZWxmLmFkZE9wdGlvbihyZXN1bHRzKTtcblx0XHRcdFx0XHRzZWxmLnJlZnJlc2hPcHRpb25zKHNlbGYuaXNGb2N1c2VkICYmICFzZWxmLmlzSW5wdXRIaWRkZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc2VsZi5sb2FkaW5nKSB7XG5cdFx0XHRcdFx0JHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnRyaWdnZXIoJ2xvYWQnLCByZXN1bHRzKTtcblx0XHRcdH1dKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBpbnB1dCBmaWVsZCBvZiB0aGUgY29udHJvbCB0byB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdFx0ICovXG5cdFx0c2V0VGV4dGJveFZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dGhpcy4kY29udHJvbF9pbnB1dC52YWwodmFsdWUpLnRyaWdnZXJIYW5kbGVyKCd1cGRhdGUnKTtcblx0XHRcdHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIElmIG11bHRpcGxlIGl0ZW1zXG5cdFx0ICogY2FuIGJlIHNlbGVjdGVkIChlLmcuIDxzZWxlY3QgbXVsdGlwbGU+KSwgdGhpcyByZXR1cm5zXG5cdFx0ICogYW4gYXJyYXkuIElmIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCB0aGlzXG5cdFx0ICogcmV0dXJucyBhIHN0cmluZy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHttaXhlZH1cblx0XHQgKi9cblx0XHRnZXRWYWx1ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAodGhpcy50YWdUeXBlID09PSBUQUdfU0VMRUNUICYmIHRoaXMuJGlucHV0LmF0dHIoJ211bHRpcGxlJykpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXRlbXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pdGVtcy5qb2luKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVyKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZXNldHMgdGhlIHNlbGVjdGVkIGl0ZW1zIHRvIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IHZhbHVlXG5cdFx0ICovXG5cdFx0c2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRkZWJvdW5jZV9ldmVudHModGhpcywgWydjaGFuZ2UnXSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuY2xlYXIoKTtcblx0XHRcdFx0dGhpcy5hZGRJdGVtcyh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzZWxlY3RlZCBpdGVtLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9ICRpdGVtXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGUgKG9wdGlvbmFsKVxuXHRcdCAqL1xuXHRcdHNldEFjdGl2ZUl0ZW06IGZ1bmN0aW9uKCRpdGVtLCBlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgZXZlbnROYW1lO1xuXHRcdFx0dmFyIGksIGlkeCwgYmVnaW4sIGVuZCwgaXRlbSwgc3dhcDtcblx0XHRcdHZhciAkbGFzdDtcblx0XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJykgcmV0dXJuO1xuXHRcdFx0JGl0ZW0gPSAkKCRpdGVtKTtcblx0XG5cdFx0XHQvLyBjbGVhciB0aGUgYWN0aXZlIHNlbGVjdGlvblxuXHRcdFx0aWYgKCEkaXRlbS5sZW5ndGgpIHtcblx0XHRcdFx0JChzZWxmLiRhY3RpdmVJdGVtcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRzZWxmLiRhY3RpdmVJdGVtcyA9IFtdO1xuXHRcdFx0XHRpZiAoc2VsZi5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0XHRzZWxmLnNob3dJbnB1dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBtb2RpZnkgc2VsZWN0aW9uXG5cdFx0XHRldmVudE5hbWUgPSBlICYmIGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuXHRcblx0XHRcdGlmIChldmVudE5hbWUgPT09ICdtb3VzZWRvd24nICYmIHNlbGYuaXNTaGlmdERvd24gJiYgc2VsZi4kYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdCRsYXN0ID0gc2VsZi4kY29udHJvbC5jaGlsZHJlbignLmFjdGl2ZTpsYXN0Jyk7XG5cdFx0XHRcdGJlZ2luID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuYXBwbHkoc2VsZi4kY29udHJvbFswXS5jaGlsZE5vZGVzLCBbJGxhc3RbMF1dKTtcblx0XHRcdFx0ZW5kICAgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5hcHBseShzZWxmLiRjb250cm9sWzBdLmNoaWxkTm9kZXMsIFskaXRlbVswXV0pO1xuXHRcdFx0XHRpZiAoYmVnaW4gPiBlbmQpIHtcblx0XHRcdFx0XHRzd2FwICA9IGJlZ2luO1xuXHRcdFx0XHRcdGJlZ2luID0gZW5kO1xuXHRcdFx0XHRcdGVuZCAgID0gc3dhcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSBiZWdpbjsgaSA8PSBlbmQ7IGkrKykge1xuXHRcdFx0XHRcdGl0ZW0gPSBzZWxmLiRjb250cm9sWzBdLmNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdFx0aWYgKHNlbGYuJGFjdGl2ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHQkKGl0ZW0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdHNlbGYuJGFjdGl2ZUl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0gZWxzZSBpZiAoKGV2ZW50TmFtZSA9PT0gJ21vdXNlZG93bicgJiYgc2VsZi5pc0N0cmxEb3duKSB8fCAoZXZlbnROYW1lID09PSAna2V5ZG93bicgJiYgdGhpcy5pc1NoaWZ0RG93bikpIHtcblx0XHRcdFx0aWYgKCRpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuXHRcdFx0XHRcdGlkeCA9IHNlbGYuJGFjdGl2ZUl0ZW1zLmluZGV4T2YoJGl0ZW1bMF0pO1xuXHRcdFx0XHRcdHNlbGYuJGFjdGl2ZUl0ZW1zLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdCRpdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLiRhY3RpdmVJdGVtcy5wdXNoKCRpdGVtLmFkZENsYXNzKCdhY3RpdmUnKVswXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoc2VsZi4kYWN0aXZlSXRlbXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0c2VsZi4kYWN0aXZlSXRlbXMgPSBbJGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpWzBdXTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBlbnN1cmUgY29udHJvbCBoYXMgZm9jdXNcblx0XHRcdHNlbGYuaGlkZUlucHV0KCk7XG5cdFx0XHRpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHNlbGYuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIHRoZSBkcm9wZG93biBtZW51XG5cdFx0ICogb2YgYXZhaWxhYmxlIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJG9iamVjdFxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc2Nyb2xsXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBhbmltYXRlXG5cdFx0ICovXG5cdFx0c2V0QWN0aXZlT3B0aW9uOiBmdW5jdGlvbigkb3B0aW9uLCBzY3JvbGwsIGFuaW1hdGUpIHtcblx0XHRcdHZhciBoZWlnaHRfbWVudSwgaGVpZ2h0X2l0ZW0sIHk7XG5cdFx0XHR2YXIgc2Nyb2xsX3RvcCwgc2Nyb2xsX2JvdHRvbTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoc2VsZi4kYWN0aXZlT3B0aW9uKSBzZWxmLiRhY3RpdmVPcHRpb24ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0c2VsZi4kYWN0aXZlT3B0aW9uID0gbnVsbDtcblx0XG5cdFx0XHQkb3B0aW9uID0gJCgkb3B0aW9uKTtcblx0XHRcdGlmICghJG9wdGlvbi5sZW5ndGgpIHJldHVybjtcblx0XG5cdFx0XHRzZWxmLiRhY3RpdmVPcHRpb24gPSAkb3B0aW9uLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XG5cdFx0XHRpZiAoc2Nyb2xsIHx8ICFpc3NldChzY3JvbGwpKSB7XG5cdFxuXHRcdFx0XHRoZWlnaHRfbWVudSAgID0gc2VsZi4kZHJvcGRvd25fY29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0aGVpZ2h0X2l0ZW0gICA9IHNlbGYuJGFjdGl2ZU9wdGlvbi5vdXRlckhlaWdodCh0cnVlKTtcblx0XHRcdFx0c2Nyb2xsICAgICAgICA9IHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuc2Nyb2xsVG9wKCkgfHwgMDtcblx0XHRcdFx0eSAgICAgICAgICAgICA9IHNlbGYuJGFjdGl2ZU9wdGlvbi5vZmZzZXQoKS50b3AgLSBzZWxmLiRkcm9wZG93bl9jb250ZW50Lm9mZnNldCgpLnRvcCArIHNjcm9sbDtcblx0XHRcdFx0c2Nyb2xsX3RvcCAgICA9IHk7XG5cdFx0XHRcdHNjcm9sbF9ib3R0b20gPSB5IC0gaGVpZ2h0X21lbnUgKyBoZWlnaHRfaXRlbTtcblx0XG5cdFx0XHRcdGlmICh5ICsgaGVpZ2h0X2l0ZW0gPiBoZWlnaHRfbWVudSArIHNjcm9sbCkge1xuXHRcdFx0XHRcdHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsX2JvdHRvbX0sIGFuaW1hdGUgPyBzZWxmLnNldHRpbmdzLnNjcm9sbER1cmF0aW9uIDogMCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoeSA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsX3RvcH0sIGFuaW1hdGUgPyBzZWxmLnNldHRpbmdzLnNjcm9sbER1cmF0aW9uIDogMCk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2VsZWN0cyBhbGwgaXRlbXMgKENUUkwgKyBBKS5cblx0XHQgKi9cblx0XHRzZWxlY3RBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScpIHJldHVybjtcblx0XG5cdFx0XHRzZWxmLiRhY3RpdmVJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLiRjb250cm9sLmNoaWxkcmVuKCc6bm90KGlucHV0KScpLmFkZENsYXNzKCdhY3RpdmUnKSk7XG5cdFx0XHRpZiAoc2VsZi4kYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdHNlbGYuaGlkZUlucHV0KCk7XG5cdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHRcdHNlbGYuZm9jdXMoKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBIaWRlcyB0aGUgaW5wdXQgZWxlbWVudCBvdXQgb2Ygdmlldywgd2hpbGVcblx0XHQgKiByZXRhaW5pbmcgaXRzIGZvY3VzLlxuXHRcdCAqL1xuXHRcdGhpZGVJbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0c2VsZi5zZXRUZXh0Ym94VmFsdWUoJycpO1xuXHRcdFx0c2VsZi4kY29udHJvbF9pbnB1dC5jc3Moe29wYWNpdHk6IDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiBzZWxmLnJ0bCA/IDEwMDAwIDogLTEwMDAwfSk7XG5cdFx0XHRzZWxmLmlzSW5wdXRIaWRkZW4gPSB0cnVlO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlc3RvcmVzIGlucHV0IHZpc2liaWxpdHkuXG5cdFx0ICovXG5cdFx0c2hvd0lucHV0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJGNvbnRyb2xfaW5wdXQuY3NzKHtvcGFjaXR5OiAxLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogMH0pO1xuXHRcdFx0dGhpcy5pc0lucHV0SGlkZGVuID0gZmFsc2U7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgdGhlIGNvbnRyb2wgZm9jdXMuIElmIFwidHJpZ2dlclwiIGlzIGZhbHN5LFxuXHRcdCAqIGZvY3VzIGhhbmRsZXJzIHdvbid0IGJlIGZpcmVkLS1jYXVzaW5nIHRoZSBmb2N1c1xuXHRcdCAqIHRvIGhhcHBlbiBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdHJpZ2dlclxuXHRcdCAqL1xuXHRcdGZvY3VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdGlmIChzZWxmLmlzRGlzYWJsZWQpIHJldHVybjtcblx0XG5cdFx0XHRzZWxmLmlnbm9yZUZvY3VzID0gdHJ1ZTtcblx0XHRcdHNlbGYuJGNvbnRyb2xfaW5wdXRbMF0uZm9jdXMoKTtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmlnbm9yZUZvY3VzID0gZmFsc2U7XG5cdFx0XHRcdHNlbGYub25Gb2N1cygpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogRm9yY2VzIHRoZSBjb250cm9sIG91dCBvZiBmb2N1cy5cblx0XHQgKi9cblx0XHRibHVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJGNvbnRyb2xfaW5wdXQudHJpZ2dlcignYmx1cicpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHNjb3JlcyBhbiBvYmplY3Rcblx0XHQgKiB0byBzaG93IGhvdyBnb29kIG9mIGEgbWF0Y2ggaXQgaXMgdG8gdGhlXG5cdFx0ICogcHJvdmlkZWQgcXVlcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHRcdCAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuXHRcdCAqL1xuXHRcdGdldFNjb3JlRnVuY3Rpb246IGZ1bmN0aW9uKHF1ZXJ5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaWZ0ZXIuZ2V0U2NvcmVGdW5jdGlvbihxdWVyeSwgdGhpcy5nZXRTZWFyY2hPcHRpb25zKCkpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgc2VhcmNoIG9wdGlvbnMgZm9yIHNpZnRlciAodGhlIHN5c3RlbVxuXHRcdCAqIGZvciBzY29yaW5nIGFuZCBzb3J0aW5nIHJlc3VsdHMpLlxuXHRcdCAqXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJpYW5yZWF2aXMvc2lmdGVyLmpzXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fVxuXHRcdCAqL1xuXHRcdGdldFNlYXJjaE9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncztcblx0XHRcdHZhciBzb3J0ID0gc2V0dGluZ3Muc29ydEZpZWxkO1xuXHRcdFx0aWYgKHR5cGVvZiBzb3J0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRzb3J0ID0ge2ZpZWxkOiBzb3J0fTtcblx0XHRcdH1cblx0XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWVsZHMgICAgICA6IHNldHRpbmdzLnNlYXJjaEZpZWxkLFxuXHRcdFx0XHRjb25qdW5jdGlvbiA6IHNldHRpbmdzLnNlYXJjaENvbmp1bmN0aW9uLFxuXHRcdFx0XHRzb3J0ICAgICAgICA6IHNvcnRcblx0XHRcdH07XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2VhcmNoZXMgdGhyb3VnaCBhdmFpbGFibGUgb3B0aW9ucyBhbmQgcmV0dXJuc1xuXHRcdCAqIGEgc29ydGVkIGFycmF5IG9mIG1hdGNoZXMuXG5cdFx0ICpcblx0XHQgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nOlxuXHRcdCAqXG5cdFx0ICogICAtIHF1ZXJ5IHtzdHJpbmd9XG5cdFx0ICogICAtIHRva2VucyB7YXJyYXl9XG5cdFx0ICogICAtIHRvdGFsIHtpbnR9XG5cdFx0ICogICAtIGl0ZW1zIHthcnJheX1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0c2VhcmNoOiBmdW5jdGlvbihxdWVyeSkge1xuXHRcdFx0dmFyIGksIHZhbHVlLCBzY29yZSwgcmVzdWx0LCBjYWxjdWxhdGVTY29yZTtcblx0XHRcdHZhciBzZWxmICAgICA9IHRoaXM7XG5cdFx0XHR2YXIgc2V0dGluZ3MgPSBzZWxmLnNldHRpbmdzO1xuXHRcdFx0dmFyIG9wdGlvbnMgID0gdGhpcy5nZXRTZWFyY2hPcHRpb25zKCk7XG5cdFxuXHRcdFx0Ly8gdmFsaWRhdGUgdXNlci1wcm92aWRlZCByZXN1bHQgc2NvcmluZyBmdW5jdGlvblxuXHRcdFx0aWYgKHNldHRpbmdzLnNjb3JlKSB7XG5cdFx0XHRcdGNhbGN1bGF0ZVNjb3JlID0gc2VsZi5zZXR0aW5ncy5zY29yZS5hcHBseSh0aGlzLCBbcXVlcnldKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYWxjdWxhdGVTY29yZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignU2VsZWN0aXplIFwic2NvcmVcIiBzZXR0aW5nIG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gcGVyZm9ybSBzZWFyY2hcblx0XHRcdGlmIChxdWVyeSAhPT0gc2VsZi5sYXN0UXVlcnkpIHtcblx0XHRcdFx0c2VsZi5sYXN0UXVlcnkgPSBxdWVyeTtcblx0XHRcdFx0cmVzdWx0ID0gc2VsZi5zaWZ0ZXIuc2VhcmNoKHF1ZXJ5LCAkLmV4dGVuZChvcHRpb25zLCB7c2NvcmU6IGNhbGN1bGF0ZVNjb3JlfSkpO1xuXHRcdFx0XHRzZWxmLmN1cnJlbnRSZXN1bHRzID0gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHNlbGYuY3VycmVudFJlc3VsdHMpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGZpbHRlciBvdXQgc2VsZWN0ZWQgaXRlbXNcblx0XHRcdGlmIChzZXR0aW5ncy5oaWRlU2VsZWN0ZWQpIHtcblx0XHRcdFx0Zm9yIChpID0gcmVzdWx0Lml0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXRlbXMuaW5kZXhPZihoYXNoX2tleShyZXN1bHQuaXRlbXNbaV0uaWQpKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5pdGVtcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZWZyZXNoZXMgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbnMgc2hvd25cblx0XHQgKiBpbiB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIG1lbnUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaWdnZXJEcm9wZG93blxuXHRcdCAqL1xuXHRcdHJlZnJlc2hPcHRpb25zOiBmdW5jdGlvbih0cmlnZ2VyRHJvcGRvd24pIHtcblx0XHRcdHZhciBpLCBqLCBrLCBuLCBncm91cHMsIGdyb3Vwc19vcmRlciwgb3B0aW9uLCBvcHRpb25faHRtbCwgb3B0Z3JvdXAsIG9wdGdyb3VwcywgaHRtbCwgaHRtbF9jaGlsZHJlbiwgaGFzX2NyZWF0ZV9vcHRpb247XG5cdFx0XHR2YXIgJGFjdGl2ZSwgJGFjdGl2ZV9iZWZvcmUsICRjcmVhdGU7XG5cdFxuXHRcdFx0aWYgKHR5cGVvZiB0cmlnZ2VyRHJvcGRvd24gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRyaWdnZXJEcm9wZG93biA9IHRydWU7XG5cdFx0XHR9XG5cdFxuXHRcdFx0dmFyIHNlbGYgICAgICAgICAgICAgID0gdGhpcztcblx0XHRcdHZhciBxdWVyeSAgICAgICAgICAgICA9IHNlbGYuJGNvbnRyb2xfaW5wdXQudmFsKCk7XG5cdFx0XHR2YXIgcmVzdWx0cyAgICAgICAgICAgPSBzZWxmLnNlYXJjaChxdWVyeSk7XG5cdFx0XHR2YXIgJGRyb3Bkb3duX2NvbnRlbnQgPSBzZWxmLiRkcm9wZG93bl9jb250ZW50O1xuXHRcdFx0dmFyIGFjdGl2ZV9iZWZvcmUgICAgID0gc2VsZi4kYWN0aXZlT3B0aW9uICYmIGhhc2hfa2V5KHNlbGYuJGFjdGl2ZU9wdGlvbi5hdHRyKCdkYXRhLXZhbHVlJykpO1xuXHRcblx0XHRcdC8vIGJ1aWxkIG1hcmt1cFxuXHRcdFx0biA9IHJlc3VsdHMuaXRlbXMubGVuZ3RoO1xuXHRcdFx0aWYgKHR5cGVvZiBzZWxmLnNldHRpbmdzLm1heE9wdGlvbnMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdG4gPSBNYXRoLm1pbihuLCBzZWxmLnNldHRpbmdzLm1heE9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIHJlbmRlciBhbmQgZ3JvdXAgYXZhaWxhYmxlIG9wdGlvbnMgaW5kaXZpZHVhbGx5XG5cdFx0XHRncm91cHMgPSB7fTtcblx0XG5cdFx0XHRpZiAoc2VsZi5zZXR0aW5ncy5vcHRncm91cE9yZGVyKSB7XG5cdFx0XHRcdGdyb3Vwc19vcmRlciA9IHNlbGYuc2V0dGluZ3Mub3B0Z3JvdXBPcmRlcjtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGdyb3Vwc19vcmRlci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGdyb3Vwc1tncm91cHNfb3JkZXJbaV1dID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdyb3Vwc19vcmRlciA9IFtdO1xuXHRcdFx0fVxuXHRcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0b3B0aW9uICAgICAgPSBzZWxmLm9wdGlvbnNbcmVzdWx0cy5pdGVtc1tpXS5pZF07XG5cdFx0XHRcdG9wdGlvbl9odG1sID0gc2VsZi5yZW5kZXIoJ29wdGlvbicsIG9wdGlvbik7XG5cdFx0XHRcdG9wdGdyb3VwICAgID0gb3B0aW9uW3NlbGYuc2V0dGluZ3Mub3B0Z3JvdXBGaWVsZF0gfHwgJyc7XG5cdFx0XHRcdG9wdGdyb3VwcyAgID0gJC5pc0FycmF5KG9wdGdyb3VwKSA/IG9wdGdyb3VwIDogW29wdGdyb3VwXTtcblx0XG5cdFx0XHRcdGZvciAoaiA9IDAsIGsgPSBvcHRncm91cHMgJiYgb3B0Z3JvdXBzLmxlbmd0aDsgaiA8IGs7IGorKykge1xuXHRcdFx0XHRcdG9wdGdyb3VwID0gb3B0Z3JvdXBzW2pdO1xuXHRcdFx0XHRcdGlmICghc2VsZi5vcHRncm91cHMuaGFzT3duUHJvcGVydHkob3B0Z3JvdXApKSB7XG5cdFx0XHRcdFx0XHRvcHRncm91cCA9ICcnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShvcHRncm91cCkpIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1tvcHRncm91cF0gPSBbXTtcblx0XHRcdFx0XHRcdGdyb3Vwc19vcmRlci5wdXNoKG9wdGdyb3VwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Z3JvdXBzW29wdGdyb3VwXS5wdXNoKG9wdGlvbl9odG1sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdC8vIHJlbmRlciBvcHRncm91cCBoZWFkZXJzICYgam9pbiBncm91cHNcblx0XHRcdGh0bWwgPSBbXTtcblx0XHRcdGZvciAoaSA9IDAsIG4gPSBncm91cHNfb3JkZXIubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdG9wdGdyb3VwID0gZ3JvdXBzX29yZGVyW2ldO1xuXHRcdFx0XHRpZiAoc2VsZi5vcHRncm91cHMuaGFzT3duUHJvcGVydHkob3B0Z3JvdXApICYmIGdyb3Vwc1tvcHRncm91cF0ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Ly8gcmVuZGVyIHRoZSBvcHRncm91cCBoZWFkZXIgYW5kIG9wdGlvbnMgd2l0aGluIGl0LFxuXHRcdFx0XHRcdC8vIHRoZW4gcGFzcyBpdCB0byB0aGUgd3JhcHBlciB0ZW1wbGF0ZVxuXHRcdFx0XHRcdGh0bWxfY2hpbGRyZW4gPSBzZWxmLnJlbmRlcignb3B0Z3JvdXBfaGVhZGVyJywgc2VsZi5vcHRncm91cHNbb3B0Z3JvdXBdKSB8fCAnJztcblx0XHRcdFx0XHRodG1sX2NoaWxkcmVuICs9IGdyb3Vwc1tvcHRncm91cF0uam9pbignJyk7XG5cdFx0XHRcdFx0aHRtbC5wdXNoKHNlbGYucmVuZGVyKCdvcHRncm91cCcsICQuZXh0ZW5kKHt9LCBzZWxmLm9wdGdyb3Vwc1tvcHRncm91cF0sIHtcblx0XHRcdFx0XHRcdGh0bWw6IGh0bWxfY2hpbGRyZW5cblx0XHRcdFx0XHR9KSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGh0bWwucHVzaChncm91cHNbb3B0Z3JvdXBdLmpvaW4oJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdCRkcm9wZG93bl9jb250ZW50Lmh0bWwoaHRtbC5qb2luKCcnKSk7XG5cdFxuXHRcdFx0Ly8gaGlnaGxpZ2h0IG1hdGNoaW5nIHRlcm1zIGlubGluZVxuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MuaGlnaGxpZ2h0ICYmIHJlc3VsdHMucXVlcnkubGVuZ3RoICYmIHJlc3VsdHMudG9rZW5zLmxlbmd0aCkge1xuXHRcdFx0XHRmb3IgKGkgPSAwLCBuID0gcmVzdWx0cy50b2tlbnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0aGlnaGxpZ2h0KCRkcm9wZG93bl9jb250ZW50LCByZXN1bHRzLnRva2Vuc1tpXS5yZWdleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQvLyBhZGQgXCJzZWxlY3RlZFwiIGNsYXNzIHRvIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdGlmICghc2VsZi5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQpIHtcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9IHNlbGYuaXRlbXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5nZXRPcHRpb24oc2VsZi5pdGVtc1tpXSkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQvLyBhZGQgY3JlYXRlIG9wdGlvblxuXHRcdFx0aGFzX2NyZWF0ZV9vcHRpb24gPSBzZWxmLnNldHRpbmdzLmNyZWF0ZSAmJiByZXN1bHRzLnF1ZXJ5Lmxlbmd0aDtcblx0XHRcdGlmIChoYXNfY3JlYXRlX29wdGlvbikge1xuXHRcdFx0XHQkZHJvcGRvd25fY29udGVudC5wcmVwZW5kKHNlbGYucmVuZGVyKCdvcHRpb25fY3JlYXRlJywge2lucHV0OiBxdWVyeX0pKTtcblx0XHRcdFx0JGNyZWF0ZSA9ICQoJGRyb3Bkb3duX2NvbnRlbnRbMF0uY2hpbGROb2Rlc1swXSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gYWN0aXZhdGVcblx0XHRcdHNlbGYuaGFzT3B0aW9ucyA9IHJlc3VsdHMuaXRlbXMubGVuZ3RoID4gMCB8fCBoYXNfY3JlYXRlX29wdGlvbjtcblx0XHRcdGlmIChzZWxmLmhhc09wdGlvbnMpIHtcblx0XHRcdFx0aWYgKHJlc3VsdHMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdCRhY3RpdmVfYmVmb3JlID0gYWN0aXZlX2JlZm9yZSAmJiBzZWxmLmdldE9wdGlvbihhY3RpdmVfYmVmb3JlKTtcblx0XHRcdFx0XHRpZiAoJGFjdGl2ZV9iZWZvcmUgJiYgJGFjdGl2ZV9iZWZvcmUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQkYWN0aXZlID0gJGFjdGl2ZV9iZWZvcmU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnICYmIHNlbGYuaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQkYWN0aXZlID0gc2VsZi5nZXRPcHRpb24oc2VsZi5pdGVtc1swXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghJGFjdGl2ZSB8fCAhJGFjdGl2ZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmICgkY3JlYXRlICYmICFzZWxmLnNldHRpbmdzLmFkZFByZWNlZGVuY2UpIHtcblx0XHRcdFx0XHRcdFx0JGFjdGl2ZSA9IHNlbGYuZ2V0QWRqYWNlbnRPcHRpb24oJGNyZWF0ZSwgMSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkYWN0aXZlID0gJGRyb3Bkb3duX2NvbnRlbnQuZmluZCgnW2RhdGEtc2VsZWN0YWJsZV06Zmlyc3QnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGFjdGl2ZSA9ICRjcmVhdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24oJGFjdGl2ZSk7XG5cdFx0XHRcdGlmICh0cmlnZ2VyRHJvcGRvd24gJiYgIXNlbGYuaXNPcGVuKSB7IHNlbGYub3BlbigpOyB9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLnNldEFjdGl2ZU9wdGlvbihudWxsKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJEcm9wZG93biAmJiBzZWxmLmlzT3BlbikgeyBzZWxmLmNsb3NlKCk7IH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBBZGRzIGFuIGF2YWlsYWJsZSBvcHRpb24uIElmIGl0IGFscmVhZHkgZXhpc3RzLFxuXHRcdCAqIG5vdGhpbmcgd2lsbCBoYXBwZW4uIE5vdGU6IHRoaXMgZG9lcyBub3QgcmVmcmVzaFxuXHRcdCAqIHRoZSBvcHRpb25zIGxpc3QgZHJvcGRvd24gKHVzZSBgcmVmcmVzaE9wdGlvbnNgXG5cdFx0ICogZm9yIHRoYXQpLlxuXHRcdCAqXG5cdFx0ICogVXNhZ2U6XG5cdFx0ICpcblx0XHQgKiAgIHRoaXMuYWRkT3B0aW9uKGRhdGEpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHRcdCAqL1xuXHRcdGFkZE9wdGlvbjogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dmFyIGksIG4sIG9wdGdyb3VwLCB2YWx1ZSwgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRmb3IgKGkgPSAwLCBuID0gZGF0YS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRzZWxmLmFkZE9wdGlvbihkYXRhW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFxuXHRcdFx0dmFsdWUgPSBoYXNoX2tleShkYXRhW3NlbGYuc2V0dGluZ3MudmFsdWVGaWVsZF0pO1xuXHRcdFx0aWYgKCF2YWx1ZSB8fCBzZWxmLm9wdGlvbnMuaGFzT3duUHJvcGVydHkodmFsdWUpKSByZXR1cm47XG5cdFxuXHRcdFx0c2VsZi51c2VyT3B0aW9uc1t2YWx1ZV0gPSB0cnVlO1xuXHRcdFx0c2VsZi5vcHRpb25zW3ZhbHVlXSA9IGRhdGE7XG5cdFx0XHRzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdFx0XHRzZWxmLnRyaWdnZXIoJ29wdGlvbl9hZGQnLCB2YWx1ZSwgZGF0YSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXJzIGEgbmV3IG9wdGdyb3VwIGZvciBvcHRpb25zXG5cdFx0ICogdG8gYmUgYnVja2V0ZWQgaW50by5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdFx0ICovXG5cdFx0YWRkT3B0aW9uR3JvdXA6IGZ1bmN0aW9uKGlkLCBkYXRhKSB7XG5cdFx0XHR0aGlzLm9wdGdyb3Vwc1tpZF0gPSBkYXRhO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdvcHRncm91cF9hZGQnLCBpZCwgZGF0YSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyBhbiBvcHRpb24gYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uIElmXG5cdFx0ICogaXQgaXMgdmlzaWJsZSBpbiB0aGUgc2VsZWN0ZWQgaXRlbXMgb3Igb3B0aW9uc1xuXHRcdCAqIGRyb3Bkb3duLCBpdCB3aWxsIGJlIHJlLXJlbmRlcmVkIGF1dG9tYXRpY2FsbHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHRcdCAqL1xuXHRcdHVwZGF0ZU9wdGlvbjogZnVuY3Rpb24odmFsdWUsIGRhdGEpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciAkaXRlbSwgJGl0ZW1fbmV3O1xuXHRcdFx0dmFyIHZhbHVlX25ldywgaW5kZXhfaXRlbSwgY2FjaGVfaXRlbXMsIGNhY2hlX29wdGlvbnM7XG5cdFxuXHRcdFx0dmFsdWUgICAgID0gaGFzaF9rZXkodmFsdWUpO1xuXHRcdFx0dmFsdWVfbmV3ID0gaGFzaF9rZXkoZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblx0XG5cdFx0XHQvLyBzYW5pdHkgY2hlY2tzXG5cdFx0XHRpZiAoIXNlbGYub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHJldHVybjtcblx0XHRcdGlmICghdmFsdWVfbmV3KSB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIG11c3QgYmUgc2V0IGluIG9wdGlvbiBkYXRhJyk7XG5cdFxuXHRcdFx0Ly8gdXBkYXRlIHJlZmVyZW5jZXNcblx0XHRcdGlmICh2YWx1ZV9uZXcgIT09IHZhbHVlKSB7XG5cdFx0XHRcdGRlbGV0ZSBzZWxmLm9wdGlvbnNbdmFsdWVdO1xuXHRcdFx0XHRpbmRleF9pdGVtID0gc2VsZi5pdGVtcy5pbmRleE9mKHZhbHVlKTtcblx0XHRcdFx0aWYgKGluZGV4X2l0ZW0gIT09IC0xKSB7XG5cdFx0XHRcdFx0c2VsZi5pdGVtcy5zcGxpY2UoaW5kZXhfaXRlbSwgMSwgdmFsdWVfbmV3KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VsZi5vcHRpb25zW3ZhbHVlX25ld10gPSBkYXRhO1xuXHRcblx0XHRcdC8vIGludmFsaWRhdGUgcmVuZGVyIGNhY2hlXG5cdFx0XHRjYWNoZV9pdGVtcyA9IHNlbGYucmVuZGVyQ2FjaGVbJ2l0ZW0nXTtcblx0XHRcdGNhY2hlX29wdGlvbnMgPSBzZWxmLnJlbmRlckNhY2hlWydvcHRpb24nXTtcblx0XG5cdFx0XHRpZiAoaXNzZXQoY2FjaGVfaXRlbXMpKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZV9pdGVtc1t2YWx1ZV07XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZV9pdGVtc1t2YWx1ZV9uZXddO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzc2V0KGNhY2hlX29wdGlvbnMpKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZV9vcHRpb25zW3ZhbHVlXTtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlX29wdGlvbnNbdmFsdWVfbmV3XTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyB1cGRhdGUgdGhlIGl0ZW0gaWYgaXQncyBzZWxlY3RlZFxuXHRcdFx0aWYgKHNlbGYuaXRlbXMuaW5kZXhPZih2YWx1ZV9uZXcpICE9PSAtMSkge1xuXHRcdFx0XHQkaXRlbSA9IHNlbGYuZ2V0SXRlbSh2YWx1ZSk7XG5cdFx0XHRcdCRpdGVtX25ldyA9ICQoc2VsZi5yZW5kZXIoJ2l0ZW0nLCBkYXRhKSk7XG5cdFx0XHRcdGlmICgkaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpICRpdGVtX25ldy5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdCRpdGVtLnJlcGxhY2VXaXRoKCRpdGVtX25ldyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gdXBkYXRlIGRyb3Bkb3duIGNvbnRlbnRzXG5cdFx0XHRpZiAoc2VsZi5pc09wZW4pIHtcblx0XHRcdFx0c2VsZi5yZWZyZXNoT3B0aW9ucyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBhIHNpbmdsZSBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKi9cblx0XHRyZW1vdmVPcHRpb246IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0dmFsdWUgPSBoYXNoX2tleSh2YWx1ZSk7XG5cdFx0XHRkZWxldGUgc2VsZi51c2VyT3B0aW9uc1t2YWx1ZV07XG5cdFx0XHRkZWxldGUgc2VsZi5vcHRpb25zW3ZhbHVlXTtcblx0XHRcdHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XHRcdHNlbGYudHJpZ2dlcignb3B0aW9uX3JlbW92ZScsIHZhbHVlKTtcblx0XHRcdHNlbGYucmVtb3ZlSXRlbSh2YWx1ZSk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogQ2xlYXJzIGFsbCBvcHRpb25zLlxuXHRcdCAqL1xuXHRcdGNsZWFyT3B0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0c2VsZi5sb2FkZWRTZWFyY2hlcyA9IHt9O1xuXHRcdFx0c2VsZi51c2VyT3B0aW9ucyA9IHt9O1xuXHRcdFx0c2VsZi5vcHRpb25zID0gc2VsZi5zaWZ0ZXIuaXRlbXMgPSB7fTtcblx0XHRcdHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XHRcdHNlbGYudHJpZ2dlcignb3B0aW9uX2NsZWFyJyk7XG5cdFx0XHRzZWxmLmNsZWFyKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgalF1ZXJ5IGVsZW1lbnQgb2YgdGhlIG9wdGlvblxuXHRcdCAqIG1hdGNoaW5nIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0Z2V0T3B0aW9uOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0RWxlbWVudFdpdGhWYWx1ZSh2YWx1ZSwgdGhpcy4kZHJvcGRvd25fY29udGVudC5maW5kKCdbZGF0YS1zZWxlY3RhYmxlXScpKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBqUXVlcnkgZWxlbWVudCBvZiB0aGUgbmV4dCBvclxuXHRcdCAqIHByZXZpb3VzIHNlbGVjdGFibGUgb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9ICRvcHRpb25cblx0XHQgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uICBjYW4gYmUgMSBmb3IgbmV4dCBvciAtMSBmb3IgcHJldmlvdXNcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0Z2V0QWRqYWNlbnRPcHRpb246IGZ1bmN0aW9uKCRvcHRpb24sIGRpcmVjdGlvbikge1xuXHRcdFx0dmFyICRvcHRpb25zID0gdGhpcy4kZHJvcGRvd24uZmluZCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0XHRcdHZhciBpbmRleCAgICA9ICRvcHRpb25zLmluZGV4KCRvcHRpb24pICsgZGlyZWN0aW9uO1xuXHRcblx0XHRcdHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgJG9wdGlvbnMubGVuZ3RoID8gJG9wdGlvbnMuZXEoaW5kZXgpIDogJCgpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIEZpbmRzIHRoZSBmaXJzdCBlbGVtZW50IHdpdGggYSBcImRhdGEtdmFsdWVcIiBhdHRyaWJ1dGVcblx0XHQgKiB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gdmFsdWVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGVsc1xuXHRcdCAqIEByZXR1cm4ge29iamVjdH1cblx0XHQgKi9cblx0XHRnZXRFbGVtZW50V2l0aFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgJGVscykge1xuXHRcdFx0dmFsdWUgPSBoYXNoX2tleSh2YWx1ZSk7XG5cdFxuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gJGVscy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoJGVsc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiAkKCRlbHNbaV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiAkKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgalF1ZXJ5IGVsZW1lbnQgb2YgdGhlIGl0ZW1cblx0XHQgKiBtYXRjaGluZyB0aGUgZ2l2ZW4gdmFsdWUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0XHQgKiBAcmV0dXJucyB7b2JqZWN0fVxuXHRcdCAqL1xuXHRcdGdldEl0ZW06IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRFbGVtZW50V2l0aFZhbHVlKHZhbHVlLCB0aGlzLiRjb250cm9sLmNoaWxkcmVuKCkpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFwiU2VsZWN0c1wiIG11bHRpcGxlIGl0ZW1zIGF0IG9uY2UuIEFkZHMgdGhlbSB0byB0aGUgbGlzdFxuXHRcdCAqIGF0IHRoZSBjdXJyZW50IGNhcmV0IHBvc2l0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdFx0ICovXG5cdFx0YWRkSXRlbXM6IGZ1bmN0aW9uKHZhbHVlcykge1xuXHRcdFx0dmFyIGl0ZW1zID0gJC5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbdmFsdWVzXTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gaXRlbXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuaXNQZW5kaW5nID0gKGkgPCBuIC0gMSk7XG5cdFx0XHRcdHRoaXMuYWRkSXRlbShpdGVtc1tpXSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogXCJTZWxlY3RzXCIgYW4gaXRlbS4gQWRkcyBpdCB0byB0aGUgbGlzdFxuXHRcdCAqIGF0IHRoZSBjdXJyZW50IGNhcmV0IHBvc2l0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdFx0ICovXG5cdFx0YWRkSXRlbTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGRlYm91bmNlX2V2ZW50cyh0aGlzLCBbJ2NoYW5nZSddLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyICRpdGVtLCAkb3B0aW9uLCAkb3B0aW9ucztcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XHR2YXIgaW5wdXRNb2RlID0gc2VsZi5zZXR0aW5ncy5tb2RlO1xuXHRcdFx0XHR2YXIgaSwgYWN0aXZlLCB2YWx1ZV9uZXh0O1xuXHRcdFx0XHR2YWx1ZSA9IGhhc2hfa2V5KHZhbHVlKTtcblx0XG5cdFx0XHRcdGlmIChzZWxmLml0ZW1zLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdGlmIChpbnB1dE1vZGUgPT09ICdzaW5nbGUnKSBzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRpZiAoIXNlbGYub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHJldHVybjtcblx0XHRcdFx0aWYgKGlucHV0TW9kZSA9PT0gJ3NpbmdsZScpIHNlbGYuY2xlYXIoKTtcblx0XHRcdFx0aWYgKGlucHV0TW9kZSA9PT0gJ211bHRpJyAmJiBzZWxmLmlzRnVsbCgpKSByZXR1cm47XG5cdFxuXHRcdFx0XHQkaXRlbSA9ICQoc2VsZi5yZW5kZXIoJ2l0ZW0nLCBzZWxmLm9wdGlvbnNbdmFsdWVdKSk7XG5cdFx0XHRcdHNlbGYuaXRlbXMuc3BsaWNlKHNlbGYuY2FyZXRQb3MsIDAsIHZhbHVlKTtcblx0XHRcdFx0c2VsZi5pbnNlcnRBdENhcmV0KCRpdGVtKTtcblx0XHRcdFx0c2VsZi5yZWZyZXNoU3RhdGUoKTtcblx0XG5cdFx0XHRcdGlmIChzZWxmLmlzU2V0dXApIHtcblx0XHRcdFx0XHQkb3B0aW9ucyA9IHNlbGYuJGRyb3Bkb3duX2NvbnRlbnQuZmluZCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0XG5cdFx0XHRcdFx0Ly8gdXBkYXRlIG1lbnUgLyByZW1vdmUgdGhlIG9wdGlvbiAoaWYgdGhpcyBpcyBub3Qgb25lIGl0ZW0gYmVpbmcgYWRkZWQgYXMgcGFydCBvZiBzZXJpZXMpXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmlzUGVuZGluZykge1xuXHRcdFx0XHRcdFx0JG9wdGlvbiA9IHNlbGYuZ2V0T3B0aW9uKHZhbHVlKTtcblx0XHRcdFx0XHRcdHZhbHVlX25leHQgPSBzZWxmLmdldEFkamFjZW50T3B0aW9uKCRvcHRpb24sIDEpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcblx0XHRcdFx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnMoc2VsZi5pc0ZvY3VzZWQgJiYgaW5wdXRNb2RlICE9PSAnc2luZ2xlJyk7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWVfbmV4dCkge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnNldEFjdGl2ZU9wdGlvbihzZWxmLmdldE9wdGlvbih2YWx1ZV9uZXh0KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQvLyBoaWRlIHRoZSBtZW51IGlmIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBoYXZlIGJlZW4gc2VsZWN0ZWQgb3Igbm8gb3B0aW9ucyBhcmUgbGVmdFxuXHRcdFx0XHRcdGlmICghJG9wdGlvbnMubGVuZ3RoIHx8IChzZWxmLnNldHRpbmdzLm1heEl0ZW1zICE9PSBudWxsICYmIHNlbGYuaXRlbXMubGVuZ3RoID49IHNlbGYuc2V0dGluZ3MubWF4SXRlbXMpKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0c2VsZi51cGRhdGVQbGFjZWhvbGRlcigpO1xuXHRcdFx0XHRcdHNlbGYudHJpZ2dlcignaXRlbV9hZGQnLCB2YWx1ZSwgJGl0ZW0pO1xuXHRcdFx0XHRcdHNlbGYudXBkYXRlT3JpZ2luYWxJbnB1dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIHRoZSBzZWxlY3RlZCBpdGVtIG1hdGNoaW5nXG5cdFx0ICogdGhlIHByb3ZpZGVkIHZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG5cdFx0ICovXG5cdFx0cmVtb3ZlSXRlbTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciAkaXRlbSwgaSwgaWR4O1xuXHRcblx0XHRcdCRpdGVtID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdmFsdWUgOiBzZWxmLmdldEl0ZW0odmFsdWUpO1xuXHRcdFx0dmFsdWUgPSBoYXNoX2tleSgkaXRlbS5hdHRyKCdkYXRhLXZhbHVlJykpO1xuXHRcdFx0aSA9IHNlbGYuaXRlbXMuaW5kZXhPZih2YWx1ZSk7XG5cdFxuXHRcdFx0aWYgKGkgIT09IC0xKSB7XG5cdFx0XHRcdCRpdGVtLnJlbW92ZSgpO1xuXHRcdFx0XHRpZiAoJGl0ZW0uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0aWR4ID0gc2VsZi4kYWN0aXZlSXRlbXMuaW5kZXhPZigkaXRlbVswXSk7XG5cdFx0XHRcdFx0c2VsZi4kYWN0aXZlSXRlbXMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdHNlbGYuaXRlbXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdFx0XHRcdGlmICghc2VsZi5zZXR0aW5ncy5wZXJzaXN0ICYmIHNlbGYudXNlck9wdGlvbnMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0c2VsZi5yZW1vdmVPcHRpb24odmFsdWUpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRpZiAoaSA8IHNlbGYuY2FyZXRQb3MpIHtcblx0XHRcdFx0XHRzZWxmLnNldENhcmV0KHNlbGYuY2FyZXRQb3MgLSAxKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0c2VsZi5yZWZyZXNoU3RhdGUoKTtcblx0XHRcdFx0c2VsZi51cGRhdGVQbGFjZWhvbGRlcigpO1xuXHRcdFx0XHRzZWxmLnVwZGF0ZU9yaWdpbmFsSW5wdXQoKTtcblx0XHRcdFx0c2VsZi5wb3NpdGlvbkRyb3Bkb3duKCk7XG5cdFx0XHRcdHNlbGYudHJpZ2dlcignaXRlbV9yZW1vdmUnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogSW52b2tlcyB0aGUgYGNyZWF0ZWAgbWV0aG9kIHByb3ZpZGVkIGluIHRoZVxuXHRcdCAqIHNlbGVjdGl6ZSBvcHRpb25zIHRoYXQgc2hvdWxkIHByb3ZpZGUgdGhlIGRhdGFcblx0XHQgKiBmb3IgdGhlIG5ldyBpdGVtLCBnaXZlbiB0aGUgdXNlciBpbnB1dC5cblx0XHQgKlxuXHRcdCAqIE9uY2UgdGhpcyBjb21wbGV0ZXMsIGl0IHdpbGwgYmUgYWRkZWRcblx0XHQgKiB0byB0aGUgaXRlbSBsaXN0LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjcmVhdGVJdGVtOiBmdW5jdGlvbih0cmlnZ2VyRHJvcGRvd24pIHtcblx0XHRcdHZhciBzZWxmICA9IHRoaXM7XG5cdFx0XHR2YXIgaW5wdXQgPSAkLnRyaW0oc2VsZi4kY29udHJvbF9pbnB1dC52YWwoKSB8fCAnJyk7XG5cdFx0XHR2YXIgY2FyZXQgPSBzZWxmLmNhcmV0UG9zO1xuXHRcdFx0aWYgKCFpbnB1dC5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0XHRcdHNlbGYubG9jaygpO1xuXHRcblx0XHRcdGlmICh0eXBlb2YgdHJpZ2dlckRyb3Bkb3duID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0cmlnZ2VyRHJvcGRvd24gPSB0cnVlO1xuXHRcdFx0fVxuXHRcblx0XHRcdHZhciBzZXR1cCA9ICh0eXBlb2Ygc2VsZi5zZXR0aW5ncy5jcmVhdGUgPT09ICdmdW5jdGlvbicpID8gdGhpcy5zZXR0aW5ncy5jcmVhdGUgOiBmdW5jdGlvbihpbnB1dCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0XHRkYXRhW3NlbGYuc2V0dGluZ3MubGFiZWxGaWVsZF0gPSBpbnB1dDtcblx0XHRcdFx0ZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdID0gaW5wdXQ7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fTtcblx0XG5cdFx0XHR2YXIgY3JlYXRlID0gb25jZShmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdHNlbGYudW5sb2NrKCk7XG5cdFxuXHRcdFx0XHRpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm47XG5cdFx0XHRcdHZhciB2YWx1ZSA9IGhhc2hfa2V5KGRhdGFbc2VsZi5zZXR0aW5ncy52YWx1ZUZpZWxkXSk7XG5cdFx0XHRcdGlmICghdmFsdWUpIHJldHVybjtcblx0XG5cdFx0XHRcdHNlbGYuc2V0VGV4dGJveFZhbHVlKCcnKTtcblx0XHRcdFx0c2VsZi5hZGRPcHRpb24oZGF0YSk7XG5cdFx0XHRcdHNlbGYuc2V0Q2FyZXQoY2FyZXQpO1xuXHRcdFx0XHRzZWxmLmFkZEl0ZW0odmFsdWUpO1xuXHRcdFx0XHRzZWxmLnJlZnJlc2hPcHRpb25zKHRyaWdnZXJEcm9wZG93biAmJiBzZWxmLnNldHRpbmdzLm1vZGUgIT09ICdzaW5nbGUnKTtcblx0XHRcdH0pO1xuXHRcblx0XHRcdHZhciBvdXRwdXQgPSBzZXR1cC5hcHBseSh0aGlzLCBbaW5wdXQsIGNyZWF0ZV0pO1xuXHRcdFx0aWYgKHR5cGVvZiBvdXRwdXQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNyZWF0ZShvdXRwdXQpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlLXJlbmRlcnMgdGhlIHNlbGVjdGVkIGl0ZW0gbGlzdHMuXG5cdFx0ICovXG5cdFx0cmVmcmVzaEl0ZW1zOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gbnVsbDtcblx0XG5cdFx0XHRpZiAodGhpcy5pc1NldHVwKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHRoaXMuYWRkSXRlbSh0aGlzLml0ZW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdHRoaXMucmVmcmVzaFN0YXRlKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZU9yaWdpbmFsSW5wdXQoKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIGFsbCBzdGF0ZS1kZXBlbmRlbnQgYXR0cmlidXRlc1xuXHRcdCAqIGFuZCBDU1MgY2xhc3Nlcy5cblx0XHQgKi9cblx0XHRyZWZyZXNoU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIGludmFsaWQgPSBzZWxmLmlzUmVxdWlyZWQgJiYgIXNlbGYuaXRlbXMubGVuZ3RoO1xuXHRcdFx0aWYgKCFpbnZhbGlkKSBzZWxmLmlzSW52YWxpZCA9IGZhbHNlO1xuXHRcdFx0c2VsZi4kY29udHJvbF9pbnB1dC5wcm9wKCdyZXF1aXJlZCcsIGludmFsaWQpO1xuXHRcdFx0c2VsZi5yZWZyZXNoQ2xhc3NlcygpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgYWxsIHN0YXRlLWRlcGVuZGVudCBDU1MgY2xhc3Nlcy5cblx0XHQgKi9cblx0XHRyZWZyZXNoQ2xhc3NlczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiAgICAgPSB0aGlzO1xuXHRcdFx0dmFyIGlzRnVsbCAgID0gc2VsZi5pc0Z1bGwoKTtcblx0XHRcdHZhciBpc0xvY2tlZCA9IHNlbGYuaXNMb2NrZWQ7XG5cdFxuXHRcdFx0c2VsZi4kd3JhcHBlclxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ3J0bCcsIHNlbGYucnRsKTtcblx0XG5cdFx0XHRzZWxmLiRjb250cm9sXG5cdFx0XHRcdC50b2dnbGVDbGFzcygnZm9jdXMnLCBzZWxmLmlzRm9jdXNlZClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHNlbGYuaXNEaXNhYmxlZClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHNlbGYuaXNSZXF1aXJlZClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdpbnZhbGlkJywgc2VsZi5pc0ludmFsaWQpXG5cdFx0XHRcdC50b2dnbGVDbGFzcygnbG9ja2VkJywgaXNMb2NrZWQpXG5cdFx0XHRcdC50b2dnbGVDbGFzcygnZnVsbCcsIGlzRnVsbCkudG9nZ2xlQ2xhc3MoJ25vdC1mdWxsJywgIWlzRnVsbClcblx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdpbnB1dC1hY3RpdmUnLCBzZWxmLmlzRm9jdXNlZCAmJiAhc2VsZi5pc0lucHV0SGlkZGVuKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2Ryb3Bkb3duLWFjdGl2ZScsIHNlbGYuaXNPcGVuKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2hhcy1vcHRpb25zJywgISQuaXNFbXB0eU9iamVjdChzZWxmLm9wdGlvbnMpKVxuXHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2hhcy1pdGVtcycsIHNlbGYuaXRlbXMubGVuZ3RoID4gMCk7XG5cdFxuXHRcdFx0c2VsZi4kY29udHJvbF9pbnB1dC5kYXRhKCdncm93JywgIWlzRnVsbCAmJiAhaXNMb2NrZWQpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgbW9yZSBpdGVtcyBjYW4gYmUgYWRkZWRcblx0XHQgKiB0byB0aGUgY29udHJvbCB3aXRob3V0IGV4Y2VlZGluZyB0aGUgdXNlci1kZWZpbmVkIG1heGltdW0uXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0Z1bGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0dGluZ3MubWF4SXRlbXMgIT09IG51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGggPj0gdGhpcy5zZXR0aW5ncy5tYXhJdGVtcztcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZWZyZXNoZXMgdGhlIG9yaWdpbmFsIDxzZWxlY3Q+IG9yIDxpbnB1dD5cblx0XHQgKiBlbGVtZW50IHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUuXG5cdFx0ICovXG5cdFx0dXBkYXRlT3JpZ2luYWxJbnB1dDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaSwgbiwgb3B0aW9ucywgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKHNlbGYuJGlucHV0WzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdFx0b3B0aW9ucyA9IFtdO1xuXHRcdFx0XHRmb3IgKGkgPSAwLCBuID0gc2VsZi5pdGVtcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRvcHRpb25zLnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgZXNjYXBlX2h0bWwoc2VsZi5pdGVtc1tpXSkgKyAnXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPjwvb3B0aW9uPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghb3B0aW9ucy5sZW5ndGggJiYgIXRoaXMuJGlucHV0LmF0dHIoJ211bHRpcGxlJykpIHtcblx0XHRcdFx0XHRvcHRpb25zLnB1c2goJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+PC9vcHRpb24+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi4kaW5wdXQuaHRtbChvcHRpb25zLmpvaW4oJycpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuJGlucHV0LnZhbChzZWxmLmdldFZhbHVlKCkpO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChzZWxmLmlzU2V0dXApIHtcblx0XHRcdFx0c2VsZi50cmlnZ2VyKCdjaGFuZ2UnLCBzZWxmLiRpbnB1dC52YWwoKSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MvaGlkZSB0aGUgaW5wdXQgcGxhY2Vob2xkZXIgZGVwZW5kaW5nXG5cdFx0ICogb24gaWYgdGhlcmUgaXRlbXMgaW4gdGhlIGxpc3QgYWxyZWFkeS5cblx0XHQgKi9cblx0XHR1cGRhdGVQbGFjZWhvbGRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MucGxhY2Vob2xkZXIpIHJldHVybjtcblx0XHRcdHZhciAkaW5wdXQgPSB0aGlzLiRjb250cm9sX2lucHV0O1xuXHRcblx0XHRcdGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHQkaW5wdXQucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRpbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicsIHRoaXMuc2V0dGluZ3MucGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdFx0JGlucHV0LnRyaWdnZXJIYW5kbGVyKCd1cGRhdGUnKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIGNvbnRhaW5pbmdcblx0XHQgKiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG5cdFx0ICovXG5cdFx0b3BlbjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdFx0aWYgKHNlbGYuaXNMb2NrZWQgfHwgc2VsZi5pc09wZW4gfHwgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ211bHRpJyAmJiBzZWxmLmlzRnVsbCgpKSkgcmV0dXJuO1xuXHRcdFx0c2VsZi5mb2N1cygpO1xuXHRcdFx0c2VsZi5pc09wZW4gPSB0cnVlO1xuXHRcdFx0c2VsZi5yZWZyZXNoU3RhdGUoKTtcblx0XHRcdHNlbGYuJGRyb3Bkb3duLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbicsIGRpc3BsYXk6ICdibG9jayd9KTtcblx0XHRcdHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHRcdFx0c2VsZi4kZHJvcGRvd24uY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcblx0XHRcdHNlbGYudHJpZ2dlcignZHJvcGRvd25fb3BlbicsIHNlbGYuJGRyb3Bkb3duKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93biBtZW51LlxuXHRcdCAqL1xuXHRcdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciB0cmlnZ2VyID0gc2VsZi5pc09wZW47XG5cdFxuXHRcdFx0aWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScgJiYgc2VsZi5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0c2VsZi5oaWRlSW5wdXQoKTtcblx0XHRcdH1cblx0XG5cdFx0XHRzZWxmLmlzT3BlbiA9IGZhbHNlO1xuXHRcdFx0c2VsZi4kZHJvcGRvd24uaGlkZSgpO1xuXHRcdFx0c2VsZi5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG5cdFx0XHRzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHRcblx0XHRcdGlmICh0cmlnZ2VyKSBzZWxmLnRyaWdnZXIoJ2Ryb3Bkb3duX2Nsb3NlJywgc2VsZi4kZHJvcGRvd24pO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIENhbGN1bGF0ZXMgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlXG5cdFx0ICogcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duLlxuXHRcdCAqL1xuXHRcdHBvc2l0aW9uRHJvcGRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICRjb250cm9sID0gdGhpcy4kY29udHJvbDtcblx0XHRcdHZhciBvZmZzZXQgPSB0aGlzLnNldHRpbmdzLmRyb3Bkb3duUGFyZW50ID09PSAnYm9keScgPyAkY29udHJvbC5vZmZzZXQoKSA6ICRjb250cm9sLnBvc2l0aW9uKCk7XG5cdFx0XHRvZmZzZXQudG9wICs9ICRjb250cm9sLm91dGVySGVpZ2h0KHRydWUpO1xuXHRcblx0XHRcdHRoaXMuJGRyb3Bkb3duLmNzcyh7XG5cdFx0XHRcdHdpZHRoIDogJGNvbnRyb2wub3V0ZXJXaWR0aCgpLFxuXHRcdFx0XHR0b3AgICA6IG9mZnNldC50b3AsXG5cdFx0XHRcdGxlZnQgIDogb2Zmc2V0LmxlZnRcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlc2V0cyAvIGNsZWFycyBhbGwgc2VsZWN0ZWQgaXRlbXNcblx0XHQgKiBmcm9tIHRoZSBjb250cm9sLlxuXHRcdCAqL1xuXHRcdGNsZWFyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoIXNlbGYuaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRzZWxmLiRjb250cm9sLmNoaWxkcmVuKCc6bm90KGlucHV0KScpLnJlbW92ZSgpO1xuXHRcdFx0c2VsZi5pdGVtcyA9IFtdO1xuXHRcdFx0c2VsZi5zZXRDYXJldCgwKTtcblx0XHRcdHNlbGYudXBkYXRlUGxhY2Vob2xkZXIoKTtcblx0XHRcdHNlbGYudXBkYXRlT3JpZ2luYWxJbnB1dCgpO1xuXHRcdFx0c2VsZi5yZWZyZXNoU3RhdGUoKTtcblx0XHRcdHNlbGYuc2hvd0lucHV0KCk7XG5cdFx0XHRzZWxmLnRyaWdnZXIoJ2NsZWFyJyk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogQSBoZWxwZXIgbWV0aG9kIGZvciBpbnNlcnRpbmcgYW4gZWxlbWVudFxuXHRcdCAqIGF0IHRoZSBjdXJyZW50IGNhcmV0IHBvc2l0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9ICRlbFxuXHRcdCAqL1xuXHRcdGluc2VydEF0Q2FyZXQ6IGZ1bmN0aW9uKCRlbCkge1xuXHRcdFx0dmFyIGNhcmV0ID0gTWF0aC5taW4odGhpcy5jYXJldFBvcywgdGhpcy5pdGVtcy5sZW5ndGgpO1xuXHRcdFx0aWYgKGNhcmV0ID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuJGNvbnRyb2wucHJlcGVuZCgkZWwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLiRjb250cm9sWzBdLmNoaWxkTm9kZXNbY2FyZXRdKS5iZWZvcmUoJGVsKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0Q2FyZXQoY2FyZXQgKyAxKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIHRoZSBjdXJyZW50IHNlbGVjdGVkIGl0ZW0ocykuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZSAob3B0aW9uYWwpXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0ZGVsZXRlU2VsZWN0aW9uOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgaSwgbiwgZGlyZWN0aW9uLCBzZWxlY3Rpb24sIHZhbHVlcywgY2FyZXQsIG9wdGlvbl9zZWxlY3QsICRvcHRpb25fc2VsZWN0LCAkdGFpbDtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRkaXJlY3Rpb24gPSAoZSAmJiBlLmtleUNvZGUgPT09IEtFWV9CQUNLU1BBQ0UpID8gLTEgOiAxO1xuXHRcdFx0c2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKHNlbGYuJGNvbnRyb2xfaW5wdXRbMF0pO1xuXHRcblx0XHRcdGlmIChzZWxmLiRhY3RpdmVPcHRpb24gJiYgIXNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkKSB7XG5cdFx0XHRcdG9wdGlvbl9zZWxlY3QgPSBzZWxmLmdldEFkamFjZW50T3B0aW9uKHNlbGYuJGFjdGl2ZU9wdGlvbiwgLTEpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBkZXRlcm1pbmUgaXRlbXMgdGhhdCB3aWxsIGJlIHJlbW92ZWRcblx0XHRcdHZhbHVlcyA9IFtdO1xuXHRcblx0XHRcdGlmIChzZWxmLiRhY3RpdmVJdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0JHRhaWwgPSBzZWxmLiRjb250cm9sLmNoaWxkcmVuKCcuYWN0aXZlOicgKyAoZGlyZWN0aW9uID4gMCA/ICdsYXN0JyA6ICdmaXJzdCcpKTtcblx0XHRcdFx0Y2FyZXQgPSBzZWxmLiRjb250cm9sLmNoaWxkcmVuKCc6bm90KGlucHV0KScpLmluZGV4KCR0YWlsKTtcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA+IDApIHsgY2FyZXQrKzsgfVxuXHRcblx0XHRcdFx0Zm9yIChpID0gMCwgbiA9IHNlbGYuJGFjdGl2ZUl0ZW1zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKCQoc2VsZi4kYWN0aXZlSXRlbXNbaV0pLmF0dHIoJ2RhdGEtdmFsdWUnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgoc2VsZi5pc0ZvY3VzZWQgfHwgc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJykgJiYgc2VsZi5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA8IDAgJiYgc2VsZWN0aW9uLnN0YXJ0ID09PSAwICYmIHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChzZWxmLml0ZW1zW3NlbGYuY2FyZXRQb3MgLSAxXSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID4gMCAmJiBzZWxlY3Rpb24uc3RhcnQgPT09IHNlbGYuJGNvbnRyb2xfaW5wdXQudmFsKCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFsdWVzLnB1c2goc2VsZi5pdGVtc1tzZWxmLmNhcmV0UG9zXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQvLyBhbGxvdyB0aGUgY2FsbGJhY2sgdG8gYWJvcnRcblx0XHRcdGlmICghdmFsdWVzLmxlbmd0aCB8fCAodHlwZW9mIHNlbGYuc2V0dGluZ3Mub25EZWxldGUgPT09ICdmdW5jdGlvbicgJiYgc2VsZi5zZXR0aW5ncy5vbkRlbGV0ZS5hcHBseShzZWxmLCBbdmFsdWVzXSkgPT09IGZhbHNlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gcGVyZm9ybSByZW1vdmFsXG5cdFx0XHRpZiAodHlwZW9mIGNhcmV0ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRzZWxmLnNldENhcmV0KGNhcmV0KTtcblx0XHRcdH1cblx0XHRcdHdoaWxlICh2YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHNlbGYucmVtb3ZlSXRlbSh2YWx1ZXMucG9wKCkpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHNlbGYuc2hvd0lucHV0KCk7XG5cdFx0XHRzZWxmLnBvc2l0aW9uRHJvcGRvd24oKTtcblx0XHRcdHNlbGYucmVmcmVzaE9wdGlvbnModHJ1ZSk7XG5cdFxuXHRcdFx0Ly8gc2VsZWN0IHByZXZpb3VzIG9wdGlvblxuXHRcdFx0aWYgKG9wdGlvbl9zZWxlY3QpIHtcblx0XHRcdFx0JG9wdGlvbl9zZWxlY3QgPSBzZWxmLmdldE9wdGlvbihvcHRpb25fc2VsZWN0KTtcblx0XHRcdFx0aWYgKCRvcHRpb25fc2VsZWN0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbGYuc2V0QWN0aXZlT3B0aW9uKCRvcHRpb25fc2VsZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFNlbGVjdHMgdGhlIHByZXZpb3VzIC8gbmV4dCBpdGVtIChkZXBlbmRpbmdcblx0XHQgKiBvbiB0aGUgYGRpcmVjdGlvbmAgYXJndW1lbnQpLlxuXHRcdCAqXG5cdFx0ICogPiAwIC0gcmlnaHRcblx0XHQgKiA8IDAgLSBsZWZ0XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGUgKG9wdGlvbmFsKVxuXHRcdCAqL1xuXHRcdGFkdmFuY2VTZWxlY3Rpb246IGZ1bmN0aW9uKGRpcmVjdGlvbiwgZSkge1xuXHRcdFx0dmFyIHRhaWwsIHNlbGVjdGlvbiwgaWR4LCB2YWx1ZUxlbmd0aCwgY3Vyc29yQXRFZGdlLCAkdGFpbDtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoc2VsZi5ydGwpIGRpcmVjdGlvbiAqPSAtMTtcblx0XG5cdFx0XHR0YWlsID0gZGlyZWN0aW9uID4gMCA/ICdsYXN0JyA6ICdmaXJzdCc7XG5cdFx0XHRzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oc2VsZi4kY29udHJvbF9pbnB1dFswXSk7XG5cdFxuXHRcdFx0aWYgKHNlbGYuaXNGb2N1c2VkICYmICFzZWxmLmlzSW5wdXRIaWRkZW4pIHtcblx0XHRcdFx0dmFsdWVMZW5ndGggPSBzZWxmLiRjb250cm9sX2lucHV0LnZhbCgpLmxlbmd0aDtcblx0XHRcdFx0Y3Vyc29yQXRFZGdlID0gZGlyZWN0aW9uIDwgMFxuXHRcdFx0XHRcdD8gc2VsZWN0aW9uLnN0YXJ0ID09PSAwICYmIHNlbGVjdGlvbi5sZW5ndGggPT09IDBcblx0XHRcdFx0XHQ6IHNlbGVjdGlvbi5zdGFydCA9PT0gdmFsdWVMZW5ndGg7XG5cdFxuXHRcdFx0XHRpZiAoY3Vyc29yQXRFZGdlICYmICF2YWx1ZUxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbGYuYWR2YW5jZUNhcmV0KGRpcmVjdGlvbiwgZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0YWlsID0gc2VsZi4kY29udHJvbC5jaGlsZHJlbignLmFjdGl2ZTonICsgdGFpbCk7XG5cdFx0XHRcdGlmICgkdGFpbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRpZHggPSBzZWxmLiRjb250cm9sLmNoaWxkcmVuKCc6bm90KGlucHV0KScpLmluZGV4KCR0YWlsKTtcblx0XHRcdFx0XHRzZWxmLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG5cdFx0XHRcdFx0c2VsZi5zZXRDYXJldChkaXJlY3Rpb24gPiAwID8gaWR4ICsgMSA6IGlkeCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBNb3ZlcyB0aGUgY2FyZXQgbGVmdCAvIHJpZ2h0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnR9IGRpcmVjdGlvblxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlIChvcHRpb25hbClcblx0XHQgKi9cblx0XHRhZHZhbmNlQ2FyZXQ6IGZ1bmN0aW9uKGRpcmVjdGlvbiwgZSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLCBmbiwgJGFkajtcblx0XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSAwKSByZXR1cm47XG5cdFxuXHRcdFx0Zm4gPSBkaXJlY3Rpb24gPiAwID8gJ25leHQnIDogJ3ByZXYnO1xuXHRcdFx0aWYgKHNlbGYuaXNTaGlmdERvd24pIHtcblx0XHRcdFx0JGFkaiA9IHNlbGYuJGNvbnRyb2xfaW5wdXRbZm5dKCk7XG5cdFx0XHRcdGlmICgkYWRqLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbGYuaGlkZUlucHV0KCk7XG5cdFx0XHRcdFx0c2VsZi5zZXRBY3RpdmVJdGVtKCRhZGopO1xuXHRcdFx0XHRcdGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLnNldENhcmV0KHNlbGYuY2FyZXRQb3MgKyBkaXJlY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIE1vdmVzIHRoZSBjYXJldCB0byB0aGUgc3BlY2lmaWVkIGluZGV4LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnR9IGlcblx0XHQgKi9cblx0XHRzZXRDYXJldDogZnVuY3Rpb24oaSkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcblx0XHRcdGlmIChzZWxmLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnKSB7XG5cdFx0XHRcdGkgPSBzZWxmLml0ZW1zLmxlbmd0aDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzZWxmLml0ZW1zLmxlbmd0aCwgaSkpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIHRoZSBpbnB1dCBtdXN0IGJlIG1vdmVkIGJ5IGxlYXZpbmcgaXQgaW4gcGxhY2UgYW5kIG1vdmluZyB0aGVcblx0XHRcdC8vIHNpYmxpbmdzLCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBmb2N1cyBjYW5ub3QgYmUgcmVzdG9yZWQgb25jZSBsb3N0XG5cdFx0XHQvLyBvbiBtb2JpbGUgd2Via2l0IGRldmljZXNcblx0XHRcdHZhciBqLCBuLCBmbiwgJGNoaWxkcmVuLCAkY2hpbGQ7XG5cdFx0XHQkY2hpbGRyZW4gPSBzZWxmLiRjb250cm9sLmNoaWxkcmVuKCc6bm90KGlucHV0KScpO1xuXHRcdFx0Zm9yIChqID0gMCwgbiA9ICRjaGlsZHJlbi5sZW5ndGg7IGogPCBuOyBqKyspIHtcblx0XHRcdFx0JGNoaWxkID0gJCgkY2hpbGRyZW5bal0pLmRldGFjaCgpO1xuXHRcdFx0XHRpZiAoaiA8ICBpKSB7XG5cdFx0XHRcdFx0c2VsZi4kY29udHJvbF9pbnB1dC5iZWZvcmUoJGNoaWxkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLiRjb250cm9sLmFwcGVuZCgkY2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0c2VsZi5jYXJldFBvcyA9IGk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogRGlzYWJsZXMgdXNlciBpbnB1dCBvbiB0aGUgY29udHJvbC4gVXNlZCB3aGlsZVxuXHRcdCAqIGl0ZW1zIGFyZSBiZWluZyBhc3luY2hyb25vdXNseSBjcmVhdGVkLlxuXHRcdCAqL1xuXHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0dGhpcy5pc0xvY2tlZCA9IHRydWU7XG5cdFx0XHR0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuXHRcdH0sXG5cdFxuXHRcdC8qKlxuXHRcdCAqIFJlLWVuYWJsZXMgdXNlciBpbnB1dCBvbiB0aGUgY29udHJvbC5cblx0XHQgKi9cblx0XHR1bmxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5yZWZyZXNoU3RhdGUoKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBEaXNhYmxlcyB1c2VyIGlucHV0IG9uIHRoZSBjb250cm9sIGNvbXBsZXRlbHkuXG5cdFx0ICogV2hpbGUgZGlzYWJsZWQsIGl0IGNhbm5vdCByZWNlaXZlIGZvY3VzLlxuXHRcdCAqL1xuXHRcdGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi4kaW5wdXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdHNlbGYuaXNEaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxmLmxvY2soKTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBFbmFibGVzIHRoZSBjb250cm9sIHNvIHRoYXQgaXQgY2FuIHJlc3BvbmRcblx0XHQgKiB0byBmb2N1cyBhbmQgdXNlciBpbnB1dC5cblx0XHQgKi9cblx0XHRlbmFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi4kaW5wdXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHRzZWxmLmlzRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHNlbGYudW5sb2NrKCk7XG5cdFx0fSxcblx0XG5cdFx0LyoqXG5cdFx0ICogQ29tcGxldGVseSBkZXN0cm95cyB0aGUgY29udHJvbCBhbmRcblx0XHQgKiB1bmJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMgc28gdGhhdCBpdCBjYW5cblx0XHQgKiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cblx0XHQgKi9cblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciBldmVudE5TID0gc2VsZi5ldmVudE5TO1xuXHRcdFx0dmFyIHJldmVydFNldHRpbmdzID0gc2VsZi5yZXZlcnRTZXR0aW5ncztcblx0XG5cdFx0XHRzZWxmLnRyaWdnZXIoJ2Rlc3Ryb3knKTtcblx0XHRcdHNlbGYub2ZmKCk7XG5cdFx0XHRzZWxmLiR3cmFwcGVyLnJlbW92ZSgpO1xuXHRcdFx0c2VsZi4kZHJvcGRvd24ucmVtb3ZlKCk7XG5cdFxuXHRcdFx0c2VsZi4kaW5wdXRcblx0XHRcdFx0Lmh0bWwoJycpXG5cdFx0XHRcdC5hcHBlbmQocmV2ZXJ0U2V0dGluZ3MuJGNoaWxkcmVuKVxuXHRcdFx0XHQucmVtb3ZlQXR0cigndGFiaW5kZXgnKVxuXHRcdFx0XHQuYXR0cih7dGFiaW5kZXg6IHJldmVydFNldHRpbmdzLnRhYmluZGV4fSlcblx0XHRcdFx0LnNob3coKTtcblx0XG5cdFx0XHQkKHdpbmRvdykub2ZmKGV2ZW50TlMpO1xuXHRcdFx0JChkb2N1bWVudCkub2ZmKGV2ZW50TlMpO1xuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5vZmYoZXZlbnROUyk7XG5cdFxuXHRcdFx0ZGVsZXRlIHNlbGYuJGlucHV0WzBdLnNlbGVjdGl6ZTtcblx0XHR9LFxuXHRcblx0XHQvKipcblx0XHQgKiBBIGhlbHBlciBtZXRob2QgZm9yIHJlbmRlcmluZyBcIml0ZW1cIiBhbmRcblx0XHQgKiBcIm9wdGlvblwiIHRlbXBsYXRlcywgZ2l2ZW4gdGhlIGRhdGEuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVOYW1lXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHJlbmRlcjogZnVuY3Rpb24odGVtcGxhdGVOYW1lLCBkYXRhKSB7XG5cdFx0XHR2YXIgdmFsdWUsIGlkLCBsYWJlbDtcblx0XHRcdHZhciBodG1sID0gJyc7XG5cdFx0XHR2YXIgY2FjaGUgPSBmYWxzZTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHZhciByZWdleF90YWcgPSAvXltcXHQgXSo8KFthLXpdW2EtejAtOVxcLV9dKig/OlxcOlthLXpdW2EtejAtOVxcLV9dKik/KS9pO1xuXHRcblx0XHRcdGlmICh0ZW1wbGF0ZU5hbWUgPT09ICdvcHRpb24nIHx8IHRlbXBsYXRlTmFtZSA9PT0gJ2l0ZW0nKSB7XG5cdFx0XHRcdHZhbHVlID0gaGFzaF9rZXkoZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblx0XHRcdFx0Y2FjaGUgPSAhIXZhbHVlO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIHB1bGwgbWFya3VwIGZyb20gY2FjaGUgaWYgaXQgZXhpc3RzXG5cdFx0XHRpZiAoY2FjaGUpIHtcblx0XHRcdFx0aWYgKCFpc3NldChzZWxmLnJlbmRlckNhY2hlW3RlbXBsYXRlTmFtZV0pKSB7XG5cdFx0XHRcdFx0c2VsZi5yZW5kZXJDYWNoZVt0ZW1wbGF0ZU5hbWVdID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNlbGYucmVuZGVyQ2FjaGVbdGVtcGxhdGVOYW1lXS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5yZW5kZXJDYWNoZVt0ZW1wbGF0ZU5hbWVdW3ZhbHVlXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdC8vIHJlbmRlciBtYXJrdXBcblx0XHRcdGh0bWwgPSBzZWxmLnNldHRpbmdzLnJlbmRlclt0ZW1wbGF0ZU5hbWVdLmFwcGx5KHRoaXMsIFtkYXRhLCBlc2NhcGVfaHRtbF0pO1xuXHRcblx0XHRcdC8vIGFkZCBtYW5kYXRvcnkgYXR0cmlidXRlc1xuXHRcdFx0aWYgKHRlbXBsYXRlTmFtZSA9PT0gJ29wdGlvbicgfHwgdGVtcGxhdGVOYW1lID09PSAnb3B0aW9uX2NyZWF0ZScpIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleF90YWcsICc8JDEgZGF0YS1zZWxlY3RhYmxlJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGVtcGxhdGVOYW1lID09PSAnb3B0Z3JvdXAnKSB7XG5cdFx0XHRcdGlkID0gZGF0YVtzZWxmLnNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZF0gfHwgJyc7XG5cdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhfdGFnLCAnPCQxIGRhdGEtZ3JvdXA9XCInICsgZXNjYXBlX3JlcGxhY2UoZXNjYXBlX2h0bWwoaWQpKSArICdcIicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRlbXBsYXRlTmFtZSA9PT0gJ29wdGlvbicgfHwgdGVtcGxhdGVOYW1lID09PSAnaXRlbScpIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleF90YWcsICc8JDEgZGF0YS12YWx1ZT1cIicgKyBlc2NhcGVfcmVwbGFjZShlc2NhcGVfaHRtbCh2YWx1ZSB8fCAnJykpICsgJ1wiJyk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gdXBkYXRlIGNhY2hlXG5cdFx0XHRpZiAoY2FjaGUpIHtcblx0XHRcdFx0c2VsZi5yZW5kZXJDYWNoZVt0ZW1wbGF0ZU5hbWVdW3ZhbHVlXSA9IGh0bWw7XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fVxuXHRcblx0fSk7XG5cdFxuXHRcblx0U2VsZWN0aXplLmNvdW50ID0gMDtcblx0U2VsZWN0aXplLmRlZmF1bHRzID0ge1xuXHRcdHBsdWdpbnM6IFtdLFxuXHRcdGRlbGltaXRlcjogJywnLFxuXHRcdHBlcnNpc3Q6IHRydWUsXG5cdFx0ZGlhY3JpdGljczogdHJ1ZSxcblx0XHRjcmVhdGU6IGZhbHNlLFxuXHRcdGNyZWF0ZU9uQmx1cjogZmFsc2UsXG5cdFx0aGlnaGxpZ2h0OiB0cnVlLFxuXHRcdG9wZW5PbkZvY3VzOiB0cnVlLFxuXHRcdG1heE9wdGlvbnM6IDEwMDAsXG5cdFx0bWF4SXRlbXM6IG51bGwsXG5cdFx0aGlkZVNlbGVjdGVkOiBudWxsLFxuXHRcdGFkZFByZWNlZGVuY2U6IGZhbHNlLFxuXHRcdHByZWxvYWQ6IGZhbHNlLFxuXHRcblx0XHRzY3JvbGxEdXJhdGlvbjogNjAsXG5cdFx0bG9hZFRocm90dGxlOiAzMDAsXG5cdFxuXHRcdGRhdGFBdHRyOiAnZGF0YS1kYXRhJyxcblx0XHRvcHRncm91cEZpZWxkOiAnb3B0Z3JvdXAnLFxuXHRcdHZhbHVlRmllbGQ6ICd2YWx1ZScsXG5cdFx0bGFiZWxGaWVsZDogJ3RleHQnLFxuXHRcdG9wdGdyb3VwTGFiZWxGaWVsZDogJ2xhYmVsJyxcblx0XHRvcHRncm91cFZhbHVlRmllbGQ6ICd2YWx1ZScsXG5cdFx0b3B0Z3JvdXBPcmRlcjogbnVsbCxcblx0XG5cdFx0c29ydEZpZWxkOiAnJG9yZGVyJyxcblx0XHRzZWFyY2hGaWVsZDogWyd0ZXh0J10sXG5cdFx0c2VhcmNoQ29uanVuY3Rpb246ICdhbmQnLFxuXHRcblx0XHRtb2RlOiBudWxsLFxuXHRcdHdyYXBwZXJDbGFzczogJ3NlbGVjdGl6ZS1jb250cm9sJyxcblx0XHRpbnB1dENsYXNzOiAnc2VsZWN0aXplLWlucHV0Jyxcblx0XHRkcm9wZG93bkNsYXNzOiAnc2VsZWN0aXplLWRyb3Bkb3duJyxcblx0XHRkcm9wZG93bkNvbnRlbnRDbGFzczogJ3NlbGVjdGl6ZS1kcm9wZG93bi1jb250ZW50Jyxcblx0XG5cdFx0ZHJvcGRvd25QYXJlbnQ6IG51bGwsXG5cdFxuXHRcdC8qXG5cdFx0bG9hZCAgICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24ocXVlcnksIGNhbGxiYWNrKSB7IC4uLiB9XG5cdFx0c2NvcmUgICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24oc2VhcmNoKSB7IC4uLiB9XG5cdFx0b25Jbml0aWFsaXplICAgIDogbnVsbCwgLy8gZnVuY3Rpb24oKSB7IC4uLiB9XG5cdFx0b25DaGFuZ2UgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24odmFsdWUpIHsgLi4uIH1cblx0XHRvbkl0ZW1BZGQgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbih2YWx1ZSwgJGl0ZW0pIHsgLi4uIH1cblx0XHRvbkl0ZW1SZW1vdmUgICAgOiBudWxsLCAvLyBmdW5jdGlvbih2YWx1ZSkgeyAuLi4gfVxuXHRcdG9uQ2xlYXIgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKCkgeyAuLi4gfVxuXHRcdG9uT3B0aW9uQWRkICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlLCBkYXRhKSB7IC4uLiB9XG5cdFx0b25PcHRpb25SZW1vdmUgIDogbnVsbCwgLy8gZnVuY3Rpb24odmFsdWUpIHsgLi4uIH1cblx0XHRvbk9wdGlvbkNsZWFyICAgOiBudWxsLCAvLyBmdW5jdGlvbigpIHsgLi4uIH1cblx0XHRvbkRyb3Bkb3duT3BlbiAgOiBudWxsLCAvLyBmdW5jdGlvbigkZHJvcGRvd24pIHsgLi4uIH1cblx0XHRvbkRyb3Bkb3duQ2xvc2UgOiBudWxsLCAvLyBmdW5jdGlvbigkZHJvcGRvd24pIHsgLi4uIH1cblx0XHRvblR5cGUgICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbihzdHIpIHsgLi4uIH1cblx0XHRvbkRlbGV0ZSAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbih2YWx1ZXMpIHsgLi4uIH1cblx0XHQqL1xuXHRcblx0XHRyZW5kZXI6IHtcblx0XHRcdC8qXG5cdFx0XHRpdGVtOiBudWxsLFxuXHRcdFx0b3B0Z3JvdXA6IG51bGwsXG5cdFx0XHRvcHRncm91cF9oZWFkZXI6IG51bGwsXG5cdFx0XHRvcHRpb246IG51bGwsXG5cdFx0XHRvcHRpb25fY3JlYXRlOiBudWxsXG5cdFx0XHQqL1xuXHRcdH1cblx0fTtcblx0XG5cdCQuZm4uc2VsZWN0aXplID0gZnVuY3Rpb24oc2V0dGluZ3NfdXNlcikge1xuXHRcdHZhciBkZWZhdWx0cyAgICAgICAgICAgICA9ICQuZm4uc2VsZWN0aXplLmRlZmF1bHRzO1xuXHRcdHZhciBzZXR0aW5ncyAgICAgICAgICAgICA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgc2V0dGluZ3NfdXNlcik7XG5cdFx0dmFyIGF0dHJfZGF0YSAgICAgICAgICAgID0gc2V0dGluZ3MuZGF0YUF0dHI7XG5cdFx0dmFyIGZpZWxkX2xhYmVsICAgICAgICAgID0gc2V0dGluZ3MubGFiZWxGaWVsZDtcblx0XHR2YXIgZmllbGRfdmFsdWUgICAgICAgICAgPSBzZXR0aW5ncy52YWx1ZUZpZWxkO1xuXHRcdHZhciBmaWVsZF9vcHRncm91cCAgICAgICA9IHNldHRpbmdzLm9wdGdyb3VwRmllbGQ7XG5cdFx0dmFyIGZpZWxkX29wdGdyb3VwX2xhYmVsID0gc2V0dGluZ3Mub3B0Z3JvdXBMYWJlbEZpZWxkO1xuXHRcdHZhciBmaWVsZF9vcHRncm91cF92YWx1ZSA9IHNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZDtcblx0XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZXMgc2VsZWN0aXplIGZyb20gYSA8aW5wdXQgdHlwZT1cInRleHRcIj4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSAkaW5wdXRcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3NfZWxlbWVudFxuXHRcdCAqL1xuXHRcdHZhciBpbml0X3RleHRib3ggPSBmdW5jdGlvbigkaW5wdXQsIHNldHRpbmdzX2VsZW1lbnQpIHtcblx0XHRcdHZhciBpLCBuLCB2YWx1ZXMsIG9wdGlvbiwgdmFsdWUgPSAkLnRyaW0oJGlucHV0LnZhbCgpIHx8ICcnKTtcblx0XHRcdGlmICghdmFsdWUubGVuZ3RoKSByZXR1cm47XG5cdFxuXHRcdFx0dmFsdWVzID0gdmFsdWUuc3BsaXQoc2V0dGluZ3MuZGVsaW1pdGVyKTtcblx0XHRcdGZvciAoaSA9IDAsIG4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdG9wdGlvbiA9IHt9O1xuXHRcdFx0XHRvcHRpb25bZmllbGRfbGFiZWxdID0gdmFsdWVzW2ldO1xuXHRcdFx0XHRvcHRpb25bZmllbGRfdmFsdWVdID0gdmFsdWVzW2ldO1xuXHRcblx0XHRcdFx0c2V0dGluZ3NfZWxlbWVudC5vcHRpb25zW3ZhbHVlc1tpXV0gPSBvcHRpb247XG5cdFx0XHR9XG5cdFxuXHRcdFx0c2V0dGluZ3NfZWxlbWVudC5pdGVtcyA9IHZhbHVlcztcblx0XHR9O1xuXHRcblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplcyBzZWxlY3RpemUgZnJvbSBhIDxzZWxlY3Q+IGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gJGlucHV0XG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzX2VsZW1lbnRcblx0XHQgKi9cblx0XHR2YXIgaW5pdF9zZWxlY3QgPSBmdW5jdGlvbigkaW5wdXQsIHNldHRpbmdzX2VsZW1lbnQpIHtcblx0XHRcdHZhciBpLCBuLCB0YWdOYW1lLCAkY2hpbGRyZW4sIG9yZGVyID0gMDtcblx0XHRcdHZhciBvcHRpb25zID0gc2V0dGluZ3NfZWxlbWVudC5vcHRpb25zO1xuXHRcblx0XHRcdHZhciByZWFkRGF0YSA9IGZ1bmN0aW9uKCRlbCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IGF0dHJfZGF0YSAmJiAkZWwuYXR0cihhdHRyX2RhdGEpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIGRhdGEubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9O1xuXHRcblx0XHRcdHZhciBhZGRPcHRpb24gPSBmdW5jdGlvbigkb3B0aW9uLCBncm91cCkge1xuXHRcdFx0XHR2YXIgdmFsdWUsIG9wdGlvbjtcblx0XG5cdFx0XHRcdCRvcHRpb24gPSAkKCRvcHRpb24pO1xuXHRcblx0XHRcdFx0dmFsdWUgPSAkb3B0aW9uLmF0dHIoJ3ZhbHVlJykgfHwgJyc7XG5cdFx0XHRcdGlmICghdmFsdWUubGVuZ3RoKSByZXR1cm47XG5cdFxuXHRcdFx0XHQvLyBpZiB0aGUgb3B0aW9uIGFscmVhZHkgZXhpc3RzLCBpdCdzIHByb2JhYmx5IGJlZW5cblx0XHRcdFx0Ly8gZHVwbGljYXRlZCBpbiBhbm90aGVyIG9wdGdyb3VwLiBpbiB0aGlzIGNhc2UsIHB1c2hcblx0XHRcdFx0Ly8gdGhlIGN1cnJlbnQgZ3JvdXAgdG8gdGhlIFwib3B0Z3JvdXBcIiBwcm9wZXJ0eSBvbiB0aGVcblx0XHRcdFx0Ly8gZXhpc3Rpbmcgb3B0aW9uIHNvIHRoYXQgaXQncyByZW5kZXJlZCBpbiBib3RoIHBsYWNlcy5cblx0XHRcdFx0aWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0aWYgKGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnNbdmFsdWVdLm9wdGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnNbdmFsdWVdLm9wdGdyb3VwID0gZ3JvdXA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCEkLmlzQXJyYXkob3B0aW9uc1t2YWx1ZV0ub3B0Z3JvdXApKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnNbdmFsdWVdLm9wdGdyb3VwID0gW29wdGlvbnNbdmFsdWVdLm9wdGdyb3VwLCBncm91cF07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zW3ZhbHVlXS5vcHRncm91cC5wdXNoKGdyb3VwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRvcHRpb24gICAgICAgICAgICAgICAgID0gcmVhZERhdGEoJG9wdGlvbikgfHwge307XG5cdFx0XHRcdG9wdGlvbltmaWVsZF9sYWJlbF0gICAgPSBvcHRpb25bZmllbGRfbGFiZWxdIHx8ICRvcHRpb24udGV4dCgpO1xuXHRcdFx0XHRvcHRpb25bZmllbGRfdmFsdWVdICAgID0gb3B0aW9uW2ZpZWxkX3ZhbHVlXSB8fCB2YWx1ZTtcblx0XHRcdFx0b3B0aW9uW2ZpZWxkX29wdGdyb3VwXSA9IG9wdGlvbltmaWVsZF9vcHRncm91cF0gfHwgZ3JvdXA7XG5cdFxuXHRcdFx0XHRvcHRpb24uJG9yZGVyID0gKytvcmRlcjtcblx0XHRcdFx0b3B0aW9uc1t2YWx1ZV0gPSBvcHRpb247XG5cdFxuXHRcdFx0XHRpZiAoJG9wdGlvbi5pcygnOnNlbGVjdGVkJykpIHtcblx0XHRcdFx0XHRzZXR0aW5nc19lbGVtZW50Lml0ZW1zLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcblx0XHRcdHZhciBhZGRHcm91cCA9IGZ1bmN0aW9uKCRvcHRncm91cCkge1xuXHRcdFx0XHR2YXIgaSwgbiwgaWQsIG9wdGdyb3VwLCAkb3B0aW9ucztcblx0XG5cdFx0XHRcdCRvcHRncm91cCA9ICQoJG9wdGdyb3VwKTtcblx0XHRcdFx0aWQgPSAkb3B0Z3JvdXAuYXR0cignbGFiZWwnKTtcblx0XG5cdFx0XHRcdGlmIChpZCkge1xuXHRcdFx0XHRcdG9wdGdyb3VwID0gcmVhZERhdGEoJG9wdGdyb3VwKSB8fCB7fTtcblx0XHRcdFx0XHRvcHRncm91cFtmaWVsZF9vcHRncm91cF9sYWJlbF0gPSBpZDtcblx0XHRcdFx0XHRvcHRncm91cFtmaWVsZF9vcHRncm91cF92YWx1ZV0gPSBpZDtcblx0XHRcdFx0XHRzZXR0aW5nc19lbGVtZW50Lm9wdGdyb3Vwc1tpZF0gPSBvcHRncm91cDtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0JG9wdGlvbnMgPSAkKCdvcHRpb24nLCAkb3B0Z3JvdXApO1xuXHRcdFx0XHRmb3IgKGkgPSAwLCBuID0gJG9wdGlvbnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0YWRkT3B0aW9uKCRvcHRpb25zW2ldLCBpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFxuXHRcdFx0c2V0dGluZ3NfZWxlbWVudC5tYXhJdGVtcyA9ICRpbnB1dC5hdHRyKCdtdWx0aXBsZScpID8gbnVsbCA6IDE7XG5cdFxuXHRcdFx0JGNoaWxkcmVuID0gJGlucHV0LmNoaWxkcmVuKCk7XG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gJGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHR0YWdOYW1lID0gJGNoaWxkcmVuW2ldLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKHRhZ05hbWUgPT09ICdvcHRncm91cCcpIHtcblx0XHRcdFx0XHRhZGRHcm91cCgkY2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdvcHRpb24nKSB7XG5cdFx0XHRcdFx0YWRkT3B0aW9uKCRjaGlsZHJlbltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0aXplKSByZXR1cm47XG5cdFxuXHRcdFx0dmFyIGluc3RhbmNlO1xuXHRcdFx0dmFyICRpbnB1dCA9ICQodGhpcyk7XG5cdFx0XHR2YXIgdGFnX25hbWUgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHZhciBzZXR0aW5nc19lbGVtZW50ID0ge1xuXHRcdFx0XHQncGxhY2Vob2xkZXInIDogJGlucHV0LmNoaWxkcmVuKCdvcHRpb25bdmFsdWU9XCJcIl0nKS50ZXh0KCkgfHwgJGlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJyksXG5cdFx0XHRcdCdvcHRpb25zJyAgICAgOiB7fSxcblx0XHRcdFx0J29wdGdyb3VwcycgICA6IHt9LFxuXHRcdFx0XHQnaXRlbXMnICAgICAgIDogW11cblx0XHRcdH07XG5cdFxuXHRcdFx0aWYgKHRhZ19uYW1lID09PSAnc2VsZWN0Jykge1xuXHRcdFx0XHRpbml0X3NlbGVjdCgkaW5wdXQsIHNldHRpbmdzX2VsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5pdF90ZXh0Ym94KCRpbnB1dCwgc2V0dGluZ3NfZWxlbWVudCk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UgPSBuZXcgU2VsZWN0aXplKCRpbnB1dCwgJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRzLCBzZXR0aW5nc19lbGVtZW50LCBzZXR0aW5nc191c2VyKSk7XG5cdFx0XHQkaW5wdXQuZGF0YSgnc2VsZWN0aXplJywgaW5zdGFuY2UpO1xuXHRcdFx0JGlucHV0LmFkZENsYXNzKCdzZWxlY3RpemVkJyk7XG5cdFx0fSk7XG5cdH07XG5cdFxuXHQkLmZuLnNlbGVjdGl6ZS5kZWZhdWx0cyA9IFNlbGVjdGl6ZS5kZWZhdWx0cztcblx0XG5cdFNlbGVjdGl6ZS5kZWZpbmUoJ2RyYWdfZHJvcCcsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRpZiAoISQuZm4uc29ydGFibGUpIHRocm93IG5ldyBFcnJvcignVGhlIFwiZHJhZ19kcm9wXCIgcGx1Z2luIHJlcXVpcmVzIGpRdWVyeSBVSSBcInNvcnRhYmxlXCIuJyk7XG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubW9kZSAhPT0gJ211bHRpJykgcmV0dXJuO1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0c2VsZi5sb2NrID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gc2VsZi5sb2NrO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgc29ydGFibGUgPSBzZWxmLiRjb250cm9sLmRhdGEoJ3NvcnRhYmxlJyk7XG5cdFx0XHRcdGlmIChzb3J0YWJsZSkgc29ydGFibGUuZGlzYWJsZSgpO1xuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWwuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cdFx0fSkoKTtcblx0XG5cdFx0c2VsZi51bmxvY2sgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBzZWxmLnVubG9jaztcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHNvcnRhYmxlID0gc2VsZi4kY29udHJvbC5kYXRhKCdzb3J0YWJsZScpO1xuXHRcdFx0XHRpZiAoc29ydGFibGUpIHNvcnRhYmxlLmVuYWJsZSgpO1xuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWwuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cdFx0fSkoKTtcblx0XG5cdFx0c2VsZi5zZXR1cCA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IHNlbGYuc2V0dXA7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFxuXHRcdFx0XHR2YXIgJGNvbnRyb2wgPSBzZWxmLiRjb250cm9sLnNvcnRhYmxlKHtcblx0XHRcdFx0XHRpdGVtczogJ1tkYXRhLXZhbHVlXScsXG5cdFx0XHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IHNlbGYuaXNMb2NrZWQsXG5cdFx0XHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKGUsIHVpKSB7XG5cdFx0XHRcdFx0XHR1aS5wbGFjZWhvbGRlci5jc3MoJ3dpZHRoJywgdWkuaGVscGVyLmNzcygnd2lkdGgnKSk7XG5cdFx0XHRcdFx0XHQkY29udHJvbC5jc3Moe292ZXJmbG93OiAndmlzaWJsZSd9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHN0b3A6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JGNvbnRyb2wuY3NzKHtvdmVyZmxvdzogJ2hpZGRlbid9KTtcblx0XHRcdFx0XHRcdHZhciBhY3RpdmUgPSBzZWxmLiRhY3RpdmVJdGVtcyA/IHNlbGYuJGFjdGl2ZUl0ZW1zLnNsaWNlKCkgOiBudWxsO1xuXHRcdFx0XHRcdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdFx0XHRcdFx0JGNvbnRyb2wuY2hpbGRyZW4oJ1tkYXRhLXZhbHVlXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCQodGhpcykuYXR0cignZGF0YS12YWx1ZScpKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRWYWx1ZSh2YWx1ZXMpO1xuXHRcdFx0XHRcdFx0c2VsZi5zZXRBY3RpdmVJdGVtKGFjdGl2ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0fSkoKTtcblx0XG5cdH0pO1xuXHRcblx0U2VsZWN0aXplLmRlZmluZSgnZHJvcGRvd25faGVhZGVyJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdHRpdGxlICAgICAgICAgOiAnVW50aXRsZWQnLFxuXHRcdFx0aGVhZGVyQ2xhc3MgICA6ICdzZWxlY3RpemUtZHJvcGRvd24taGVhZGVyJyxcblx0XHRcdHRpdGxlUm93Q2xhc3MgOiAnc2VsZWN0aXplLWRyb3Bkb3duLWhlYWRlci10aXRsZScsXG5cdFx0XHRsYWJlbENsYXNzICAgIDogJ3NlbGVjdGl6ZS1kcm9wZG93bi1oZWFkZXItbGFiZWwnLFxuXHRcdFx0Y2xvc2VDbGFzcyAgICA6ICdzZWxlY3RpemUtZHJvcGRvd24taGVhZGVyLWNsb3NlJyxcblx0XG5cdFx0XHRodG1sOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgZGF0YS5oZWFkZXJDbGFzcyArICdcIj4nICtcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiJyArIGRhdGEudGl0bGVSb3dDbGFzcyArICdcIj4nICtcblx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiJyArIGRhdGEubGFiZWxDbGFzcyArICdcIj4nICsgZGF0YS50aXRsZSArICc8L3NwYW4+JyArXG5cdFx0XHRcdFx0XHRcdCc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCInICsgZGF0YS5jbG9zZUNsYXNzICsgJ1wiPiZ0aW1lczs8L2E+JyArXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyArXG5cdFx0XHRcdFx0JzwvZGl2Pidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LCBvcHRpb25zKTtcblx0XG5cdFx0c2VsZi5zZXR1cCA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IHNlbGYuc2V0dXA7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG9yaWdpbmFsLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdHNlbGYuJGRyb3Bkb3duX2hlYWRlciA9ICQob3B0aW9ucy5odG1sKG9wdGlvbnMpKTtcblx0XHRcdFx0c2VsZi4kZHJvcGRvd24ucHJlcGVuZChzZWxmLiRkcm9wZG93bl9oZWFkZXIpO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0fSk7XG5cdFxuXHRTZWxlY3RpemUuZGVmaW5lKCdvcHRncm91cF9jb2x1bW5zJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdGVxdWFsaXplV2lkdGggIDogdHJ1ZSxcblx0XHRcdGVxdWFsaXplSGVpZ2h0IDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcblx0XHR0aGlzLmdldEFkamFjZW50T3B0aW9uID0gZnVuY3Rpb24oJG9wdGlvbiwgZGlyZWN0aW9uKSB7XG5cdFx0XHR2YXIgJG9wdGlvbnMgPSAkb3B0aW9uLmNsb3Nlc3QoJ1tkYXRhLWdyb3VwXScpLmZpbmQoJ1tkYXRhLXNlbGVjdGFibGVdJyk7XG5cdFx0XHR2YXIgaW5kZXggICAgPSAkb3B0aW9ucy5pbmRleCgkb3B0aW9uKSArIGRpcmVjdGlvbjtcblx0XG5cdFx0XHRyZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8ICRvcHRpb25zLmxlbmd0aCA/ICRvcHRpb25zLmVxKGluZGV4KSA6ICQoKTtcblx0XHR9O1xuXHRcblx0XHR0aGlzLm9uS2V5RG93biA9IChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IHNlbGYub25LZXlEb3duO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmFyIGluZGV4LCAkb3B0aW9uLCAkb3B0aW9ucywgJG9wdGdyb3VwO1xuXHRcblx0XHRcdFx0aWYgKHRoaXMuaXNPcGVuICYmIChlLmtleUNvZGUgPT09IEtFWV9MRUZUIHx8IGUua2V5Q29kZSA9PT0gS0VZX1JJR0hUKSkge1xuXHRcdFx0XHRcdHNlbGYuaWdub3JlSG92ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdCRvcHRncm91cCA9IHRoaXMuJGFjdGl2ZU9wdGlvbi5jbG9zZXN0KCdbZGF0YS1ncm91cF0nKTtcblx0XHRcdFx0XHRpbmRleCA9ICRvcHRncm91cC5maW5kKCdbZGF0YS1zZWxlY3RhYmxlXScpLmluZGV4KHRoaXMuJGFjdGl2ZU9wdGlvbik7XG5cdFxuXHRcdFx0XHRcdGlmKGUua2V5Q29kZSA9PT0gS0VZX0xFRlQpIHtcblx0XHRcdFx0XHRcdCRvcHRncm91cCA9ICRvcHRncm91cC5wcmV2KCdbZGF0YS1ncm91cF0nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JG9wdGdyb3VwID0gJG9wdGdyb3VwLm5leHQoJ1tkYXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0JG9wdGlvbnMgPSAkb3B0Z3JvdXAuZmluZCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0XHRcdFx0XHQkb3B0aW9uICA9ICRvcHRpb25zLmVxKE1hdGgubWluKCRvcHRpb25zLmxlbmd0aCAtIDEsIGluZGV4KSk7XG5cdFx0XHRcdFx0aWYgKCRvcHRpb24ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEFjdGl2ZU9wdGlvbigkb3B0aW9uKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cdFx0fSkoKTtcblx0XG5cdFx0dmFyIGVxdWFsaXplU2l6ZXMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpLCBuLCBoZWlnaHRfbWF4LCB3aWR0aCwgd2lkdGhfbGFzdCwgd2lkdGhfcGFyZW50LCAkb3B0Z3JvdXBzO1xuXHRcblx0XHRcdCRvcHRncm91cHMgPSAkKCdbZGF0YS1ncm91cF0nLCBzZWxmLiRkcm9wZG93bl9jb250ZW50KTtcblx0XHRcdG4gPSAkb3B0Z3JvdXBzLmxlbmd0aDtcblx0XHRcdGlmICghbiB8fCAhc2VsZi4kZHJvcGRvd25fY29udGVudC53aWR0aCgpKSByZXR1cm47XG5cdFxuXHRcdFx0aWYgKG9wdGlvbnMuZXF1YWxpemVIZWlnaHQpIHtcblx0XHRcdFx0aGVpZ2h0X21heCA9IDA7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHRoZWlnaHRfbWF4ID0gTWF0aC5tYXgoaGVpZ2h0X21heCwgJG9wdGdyb3Vwcy5lcShpKS5oZWlnaHQoKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JG9wdGdyb3Vwcy5jc3Moe2hlaWdodDogaGVpZ2h0X21heH0pO1xuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChvcHRpb25zLmVxdWFsaXplV2lkdGgpIHtcblx0XHRcdFx0d2lkdGhfcGFyZW50ID0gc2VsZi4kZHJvcGRvd25fY29udGVudC5pbm5lcldpZHRoKCk7XG5cdFx0XHRcdHdpZHRoID0gTWF0aC5yb3VuZCh3aWR0aF9wYXJlbnQgLyBuKTtcblx0XHRcdFx0JG9wdGdyb3Vwcy5jc3Moe3dpZHRoOiB3aWR0aH0pO1xuXHRcdFx0XHRpZiAobiA+IDEpIHtcblx0XHRcdFx0XHR3aWR0aF9sYXN0ID0gd2lkdGhfcGFyZW50IC0gd2lkdGggKiAobiAtIDEpO1xuXHRcdFx0XHRcdCRvcHRncm91cHMuZXEobiAtIDEpLmNzcyh7d2lkdGg6IHdpZHRoX2xhc3R9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFxuXHRcdGlmIChvcHRpb25zLmVxdWFsaXplSGVpZ2h0IHx8IG9wdGlvbnMuZXF1YWxpemVXaWR0aCkge1xuXHRcdFx0aG9vay5hZnRlcih0aGlzLCAncG9zaXRpb25Ecm9wZG93bicsIGVxdWFsaXplU2l6ZXMpO1xuXHRcdFx0aG9vay5hZnRlcih0aGlzLCAncmVmcmVzaE9wdGlvbnMnLCBlcXVhbGl6ZVNpemVzKTtcblx0XHR9XG5cdFxuXHRcblx0fSk7XG5cdFxuXHRTZWxlY3RpemUuZGVmaW5lKCdyZW1vdmVfYnV0dG9uJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnKSByZXR1cm47XG5cdFxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XG5cdFx0XHRsYWJlbCAgICAgOiAnJnRpbWVzOycsXG5cdFx0XHR0aXRsZSAgICAgOiAnUmVtb3ZlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdyZW1vdmUnLFxuXHRcdFx0YXBwZW5kICAgIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGh0bWwgPSAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiJyArIG9wdGlvbnMuY2xhc3NOYW1lICsgJ1wiIHRhYmluZGV4PVwiLTFcIiB0aXRsZT1cIicgKyBlc2NhcGVfaHRtbChvcHRpb25zLnRpdGxlKSArICdcIj4nICsgb3B0aW9ucy5sYWJlbCArICc8L2E+Jztcblx0XG5cdFx0LyoqXG5cdFx0ICogQXBwZW5kcyBhbiBlbGVtZW50IGFzIGEgY2hpbGQgKHdpdGggcmF3IEhUTUwpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxfY29udGFpbmVyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxfZWxlbWVudFxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHQgKi9cblx0XHR2YXIgYXBwZW5kID0gZnVuY3Rpb24oaHRtbF9jb250YWluZXIsIGh0bWxfZWxlbWVudCkge1xuXHRcdFx0dmFyIHBvcyA9IGh0bWxfY29udGFpbmVyLnNlYXJjaCgvKDxcXC9bXj5dKz5cXHMqKSQvKTtcblx0XHRcdHJldHVybiBodG1sX2NvbnRhaW5lci5zdWJzdHJpbmcoMCwgcG9zKSArIGh0bWxfZWxlbWVudCArIGh0bWxfY29udGFpbmVyLnN1YnN0cmluZyhwb3MpO1xuXHRcdH07XG5cdFxuXHRcdHRoaXMuc2V0dXAgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBzZWxmLnNldHVwO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBvdmVycmlkZSB0aGUgaXRlbSByZW5kZXJpbmcgbWV0aG9kIHRvIGFkZCB0aGUgYnV0dG9uIHRvIGVhY2hcblx0XHRcdFx0aWYgKG9wdGlvbnMuYXBwZW5kKSB7XG5cdFx0XHRcdFx0dmFyIHJlbmRlcl9pdGVtID0gc2VsZi5zZXR0aW5ncy5yZW5kZXIuaXRlbTtcblx0XHRcdFx0XHRzZWxmLnNldHRpbmdzLnJlbmRlci5pdGVtID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFwcGVuZChyZW5kZXJfaXRlbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBodG1sKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcblx0XHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyXG5cdFx0XHRcdHRoaXMuJGNvbnRyb2wub24oJ2NsaWNrJywgJy4nICsgb3B0aW9ucy5jbGFzc05hbWUsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXNMb2NrZWQpIHJldHVybjtcblx0XG5cdFx0XHRcdFx0dmFyICRpdGVtID0gJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xuXHRcdFx0XHRcdHNlbGYuc2V0QWN0aXZlSXRlbSgkaXRlbSk7XG5cdFx0XHRcdFx0aWYgKHNlbGYuZGVsZXRlU2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2V0Q2FyZXQoc2VsZi5pdGVtcy5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFxuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHRcblx0fSk7XG5cdFxuXHRTZWxlY3RpemUuZGVmaW5lKCdyZXN0b3JlX29uX2JhY2tzcGFjZScsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFxuXHRcdG9wdGlvbnMudGV4dCA9IG9wdGlvbnMudGV4dCB8fCBmdW5jdGlvbihvcHRpb24pIHtcblx0XHRcdHJldHVybiBvcHRpb25bdGhpcy5zZXR0aW5ncy5sYWJlbEZpZWxkXTtcblx0XHR9O1xuXHRcblx0XHR0aGlzLm9uS2V5RG93biA9IChmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBzZWxmLm9uS2V5RG93bjtcblx0XHRcdHJldHVybiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZhciBpbmRleCwgb3B0aW9uO1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSBLRVlfQkFDS1NQQUNFICYmIHRoaXMuJGNvbnRyb2xfaW5wdXQudmFsKCkgPT09ICcnICYmICF0aGlzLiRhY3RpdmVJdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRpbmRleCA9IHRoaXMuY2FyZXRQb3MgLSAxO1xuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdG9wdGlvbiA9IHRoaXMub3B0aW9uc1t0aGlzLml0ZW1zW2luZGV4XV07XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5kZWxldGVTZWxlY3Rpb24oZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRUZXh0Ym94VmFsdWUob3B0aW9ucy50ZXh0LmFwcGx5KHRoaXMsIFtvcHRpb25dKSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmVmcmVzaE9wdGlvbnModHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXHR9KTtcblxuXHRyZXR1cm4gU2VsZWN0aXplO1xufSkpO1xuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgU2VsZWN0aXplICE9IFwidW5kZWZpbmVkXCIgPyBTZWxlY3RpemUgOiB3aW5kb3cuU2VsZWN0aXplKTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsInZhciBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxucmVxdWlyZSgnc2VsZWN0aXplJylcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5cbiQoJyNmcmllbmRzJykuc2VsZWN0aXplKHtcbiAgY3JlYXRlOiBmYWxzZSxcbiAgcGxhY2Vob2xkZXI6ICdDaGVyY2hlciBsZSBSSUIgZFxcJ3VuKGUpIGFtaShlKS4uLicsXG4gIHJlbmRlcjoge1xuICAgIG9wdGlvbjogZnVuY3Rpb24gKGl0ZW0sIGVzY2FwZSkge1xuICAgICAgcmV0dXJuICc8ZGl2PjxpbWcgY2xhc3M9XCJzZWxlY3RpemUtZHJvcGRvd24taW1nXCIgc3JjPVwiJyArIGVzY2FwZShpdGVtLnBpYykgKyAnXCI+PHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4O1wiPicgKyBlc2NhcGUoaXRlbS50ZXh0KSArICc8L2Rpdj4nXG4gICAgfVxuICB9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3UvJyArIHZhbHVlXG4gIH1cbn0pXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG47X19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLyohIGpRdWVyeSB2Mi4xLjAgfCAoYykgMjAwNSwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9XCJcIi50cmltLGw9e30sbT1hLmRvY3VtZW50LG49XCIyLjEuMFwiLG89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG8uZm4uaW5pdChhLGIpfSxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O28uZm49by5wcm90b3R5cGU9e2pxdWVyeTpuLGNvbnN0cnVjdG9yOm8sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9by5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBvLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG8uZXh0ZW5kPW8uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8by5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG8uaXNQbGFpbk9iamVjdChkKXx8KGU9by5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZvLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZvLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW8uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxvLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhuK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW8udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4gYS1wYXJzZUZsb2F0KGEpPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe2lmKFwib2JqZWN0XCIhPT1vLnR5cGUoYSl8fGEubm9kZVR5cGV8fG8uaXNXaW5kb3coYSkpcmV0dXJuITE7dHJ5e2lmKGEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGIpe3JldHVybiExfXJldHVybiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1vLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPW0uY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxtLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmsuY2FsbChhKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/by5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG8uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxvLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omx9KSxvLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1hLmxlbmd0aCxjPW8udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxvLmlzV2luZG93KGEpPyExOjE9PT1hLm5vZGVUeXBlJiZiPyEwOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHM9XCJzaXp6bGVcIistbmV3IERhdGUsdD1hLmRvY3VtZW50LHU9MCx2PTAsdz1lYigpLHg9ZWIoKSx5PWViKCksej1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGo9ITApLDB9LEE9XCJ1bmRlZmluZWRcIixCPTE8PDMxLEM9e30uaGFzT3duUHJvcGVydHksRD1bXSxFPUQucG9wLEY9RC5wdXNoLEc9RC5wdXNoLEg9RC5zbGljZSxJPUQuaW5kZXhPZnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmxlbmd0aDtjPmI7YisrKWlmKHRoaXNbYl09PT1hKXJldHVybiBiO3JldHVybi0xfSxKPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixLPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixMPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTT1MLnJlcGxhY2UoXCJ3XCIsXCJ3I1wiKSxOPVwiXFxcXFtcIitLK1wiKihcIitMK1wiKVwiK0srXCIqKD86KFsqXiR8IX5dPz0pXCIrSytcIiooPzooWydcXFwiXSkoKD86XFxcXFxcXFwufFteXFxcXFxcXFxdKSo/KVxcXFwzfChcIitNK1wiKXwpfClcIitLK1wiKlxcXFxdXCIsTz1cIjooXCIrTCtcIikoPzpcXFxcKCgoWydcXFwiXSkoKD86XFxcXFxcXFwufFteXFxcXFxcXFxdKSo/KVxcXFwzfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOLnJlcGxhY2UoMyw4KStcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKFwiXlwiK0srXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0srXCIrJFwiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrSytcIiosXCIrSytcIipcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0srXCIqKFs+K35dfFwiK0srXCIpXCIrSytcIipcIiksUz1uZXcgUmVnRXhwKFwiPVwiK0srXCIqKFteXFxcXF0nXFxcIl0qPylcIitLK1wiKlxcXFxdXCIsXCJnXCIpLFQ9bmV3IFJlZ0V4cChPKSxVPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0wrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTCtcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0wucmVwbGFjZShcIndcIixcIncqXCIpK1wiKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrSytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0srXCIqKD86KFsrLV18KVwiK0srXCIqKFxcXFxkKyl8KSlcIitLK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0orXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitLK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitLK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitLK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxXPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWD0vXmhcXGQkL2ksWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sJD0vWyt+XS8sXz0vJ3xcXFxcL2csYWI9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0srXCI/fChcIitLK1wiKXwuKVwiLFwiaWdcIiksYmI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX07dHJ5e0cuYXBwbHkoRD1ILmNhbGwodC5jaGlsZE5vZGVzKSx0LmNoaWxkTm9kZXMpLERbdC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goY2Ipe0c9e2FwcGx5OkQubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ri5hcHBseShhLEguY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGRiKGEsYixkLGUpe3ZhciBmLGcsaCxpLGosbSxwLHEsdSx2O2lmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp0KSE9PWwmJmsoYiksYj1ifHxsLGQ9ZHx8W10sIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBkO2lmKDEhPT0oaT1iLm5vZGVUeXBlKSYmOSE9PWkpcmV0dXJuW107aWYobiYmIWUpe2lmKGY9Wi5leGVjKGEpKWlmKGg9ZlsxXSl7aWYoOT09PWkpe2lmKGc9Yi5nZXRFbGVtZW50QnlJZChoKSwhZ3x8IWcucGFyZW50Tm9kZSlyZXR1cm4gZDtpZihnLmlkPT09aClyZXR1cm4gZC5wdXNoKGcpLGR9ZWxzZSBpZihiLm93bmVyRG9jdW1lbnQmJihnPWIub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChoKSkmJnIoYixnKSYmZy5pZD09PWgpcmV0dXJuIGQucHVzaChnKSxkfWVsc2V7aWYoZlsyXSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGg9ZlszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGgpKSxkfWlmKGMucXNhJiYoIW98fCFvLnRlc3QoYSkpKXtpZihxPXA9cyx1PWIsdj05PT09aSYmYSwxPT09aSYmXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bT1vYihhKSwocD1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9xPXAucmVwbGFjZShfLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixxKSxxPVwiW2lkPSdcIitxK1wiJ10gXCIsaj1tLmxlbmd0aDt3aGlsZShqLS0pbVtqXT1xK3BiKG1bal0pO3U9JC50ZXN0KGEpJiZtYihiLnBhcmVudE5vZGUpfHxiLHY9bS5qb2luKFwiLFwiKX1pZih2KXRyeXtyZXR1cm4gRy5hcHBseShkLHUucXVlcnlTZWxlY3RvckFsbCh2KSksZH1jYXRjaCh3KXt9ZmluYWxseXtwfHxiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIHhiKGEucmVwbGFjZShQLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGViKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gZmIoYSl7cmV0dXJuIGFbc109ITAsYX1mdW5jdGlvbiBnYihhKXt2YXIgYj1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gaGIoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWEubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBpYihhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QiktKH5hLnNvdXJjZUluZGV4fHxCKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gamIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBrYihhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIGxiKGEpe3JldHVybiBmYihmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixmYihmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG1iKGEpe3JldHVybiBhJiZ0eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PUEmJmF9Yz1kYi5zdXBwb3J0PXt9LGY9ZGIuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0saz1kYi5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlPWE/YS5vd25lckRvY3VtZW50fHxhOnQsZz1lLmRlZmF1bHRWaWV3O3JldHVybiBlIT09bCYmOT09PWUubm9kZVR5cGUmJmUuZG9jdW1lbnRFbGVtZW50PyhsPWUsbT1lLmRvY3VtZW50RWxlbWVudCxuPSFmKGUpLGcmJmchPT1nLnRvcCYmKGcuYWRkRXZlbnRMaXN0ZW5lcj9nLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixmdW5jdGlvbigpe2soKX0sITEpOmcuYXR0YWNoRXZlbnQmJmcuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGZ1bmN0aW9uKCl7aygpfSkpLGMuYXR0cmlidXRlcz1nYihmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1nYihmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9WS50ZXN0KGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkmJmdiKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxkaXYgY2xhc3M9J2EnPjwvZGl2PjxkaXYgY2xhc3M9J2EgaSc+PC9kaXY+XCIsYS5maXJzdENoaWxkLmNsYXNzTmFtZT1cImlcIiwyPT09YS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaVwiKS5sZW5ndGh9KSxjLmdldEJ5SWQ9Z2IoZnVuY3Rpb24oYSl7cmV0dXJuIG0uYXBwZW5kQ2hpbGQoYSkuaWQ9cywhZS5nZXRFbGVtZW50c0J5TmFtZXx8IWUuZ2V0RWxlbWVudHNCeU5hbWUocykubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZih0eXBlb2YgYi5nZXRFbGVtZW50QnlJZCE9PUEmJm4pe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGMmJmMucGFyZW50Tm9kZT9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYWIsYmIpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGFiLGJiKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSE9PUEmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1BP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuIHR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUhPT1BJiZuP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHA9W10sbz1bXSwoYy5xc2E9WS50ZXN0KGUucXVlcnlTZWxlY3RvckFsbCkpJiYoZ2IoZnVuY3Rpb24oYSl7YS5pbm5lckhUTUw9XCI8c2VsZWN0IHQ9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbdF49JyddXCIpLmxlbmd0aCYmby5wdXNoKFwiWypeJF09XCIrSytcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fG8ucHVzaChcIlxcXFxbXCIrSytcIiooPzp2YWx1ZXxcIitKK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fG8ucHVzaChcIjpjaGVja2VkXCIpfSksZ2IoZnVuY3Rpb24oYSl7dmFyIGI9ZS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmby5wdXNoKFwibmFtZVwiK0srXCIqWypeJHwhfl0/PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fG8ucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxvLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1ZLnRlc3QocT1tLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8bS5tb3pNYXRjaGVzU2VsZWN0b3J8fG0ub01hdGNoZXNTZWxlY3Rvcnx8bS5tc01hdGNoZXNTZWxlY3RvcikpJiZnYihmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXEuY2FsbChhLFwiZGl2XCIpLHEuY2FsbChhLFwiW3MhPScnXTp4XCIpLHAucHVzaChcIiE9XCIsTyl9KSxvPW8ubGVuZ3RoJiZuZXcgUmVnRXhwKG8uam9pbihcInxcIikpLHA9cC5sZW5ndGgmJm5ldyBSZWdFeHAocC5qb2luKFwifFwiKSksYj1ZLnRlc3QobS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikscj1ifHxZLnRlc3QobS5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSx6PWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gaj0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1lfHxhLm93bmVyRG9jdW1lbnQ9PT10JiZyKHQsYSk/LTE6Yj09PWV8fGIub3duZXJEb2N1bWVudD09PXQmJnIodCxiKT8xOmk/SS5jYWxsKGksYSktSS5jYWxsKGksYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGo9ITAsMDt2YXIgYyxkPTAsZj1hLnBhcmVudE5vZGUsZz1iLnBhcmVudE5vZGUsaD1bYV0saz1bYl07aWYoIWZ8fCFnKXJldHVybiBhPT09ZT8tMTpiPT09ZT8xOmY/LTE6Zz8xOmk/SS5jYWxsKGksYSktSS5jYWxsKGksYik6MDtpZihmPT09ZylyZXR1cm4gaWIoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSlrLnVuc2hpZnQoYyk7d2hpbGUoaFtkXT09PWtbZF0pZCsrO3JldHVybiBkP2liKGhbZF0sa1tkXSk6aFtkXT09PXQ/LTE6a1tkXT09PXQ/MTowfSxlKTpsfSxkYi5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGRiKGEsbnVsbCxudWxsLGIpfSxkYi5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PWwmJmsoYSksYj1iLnJlcGxhY2UoUyxcIj0nJDEnXVwiKSwhKCFjLm1hdGNoZXNTZWxlY3Rvcnx8IW58fHAmJnAudGVzdChiKXx8byYmby50ZXN0KGIpKSl0cnl7dmFyIGQ9cS5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZGIoYixsLG51bGwsW2FdKS5sZW5ndGg+MH0sZGIuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PWwmJmsoYSkscihhLGIpfSxkYi5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1sJiZrKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmQy5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFuKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFuP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZGIuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGRiLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGo9IWMuZGV0ZWN0RHVwbGljYXRlcyxpPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KHopLGope3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBpPW51bGwsYX0sZT1kYi5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWRiLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmZiLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYWIsYmIpLGFbM109KGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYWIsYmIpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGRiLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmRiLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzVdJiZhWzJdO3JldHVybiBWLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXSYmdm9pZCAwIT09YVs0XT9hWzJdPWFbNF06YyYmVC50ZXN0KGMpJiYoYj1vYihjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShhYixiYikudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj13W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrSytcIilcIithK1wiKFwiK0srXCJ8JClcIikpJiZ3KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHx0eXBlb2YgYS5nZXRBdHRyaWJ1dGUhPT1BJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZGIuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSx0PSFpJiYhaDtpZihxKXtpZihmKXt3aGlsZShwKXtsPWI7d2hpbGUobD1sW3BdKWlmKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZ0KXtrPXFbc118fChxW3NdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXUmJmpbMV0sbT1qWzBdPT09dSYmalsyXSxsPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigxPT09bC5ub2RlVHlwZSYmKyttJiZsPT09Yil7a1thXT1bdSxuLG1dO2JyZWFrfX1lbHNlIGlmKHQmJihqPShiW3NdfHwoYltzXT17fSkpW2FdKSYmalswXT09PXUpbT1qWzFdO2Vsc2Ugd2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSkmJisrbSYmKHQmJigobFtzXXx8KGxbc109e30pKVthXT1bdSxtXSksbD09PWIpKWJyZWFrO3JldHVybiBtLT1lLG09PT1kfHxtJWQ9PT0wJiZtL2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxkYi5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbc10/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9mYihmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SS5jYWxsKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmZiKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1nKGEucmVwbGFjZShQLFwiJDFcIikpO3JldHVybiBkW3NdP2ZiKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLCFjLnBvcCgpfX0pLGhhczpmYihmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGRiKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6ZmIoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmZiKGZ1bmN0aW9uKGEpe3JldHVybiBVLnRlc3QoYXx8XCJcIil8fGRiLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoYWIsYmIpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1uP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW19LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bC5hY3RpdmVFbGVtZW50JiYoIWwuaGFzRm9jdXN8fGwuaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0OmxiKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpsYihmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6bGIoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpsYihmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpsYihmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0OmxiKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6bGIoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPWpiKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPWtiKGIpO2Z1bmN0aW9uIG5iKCl7fW5iLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgbmI7ZnVuY3Rpb24gb2IoYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXhbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVEuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1SLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFAsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVZbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9kYi5lcnJvcihhKTp4KGEsaSkuc2xpY2UoMCl9ZnVuY3Rpb24gcGIoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHFiKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXYrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaj1bdSxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGk9YltzXXx8KGJbc109e30pLChoPWlbZF0pJiZoWzBdPT09dSYmaFsxXT09PWYpcmV0dXJuIGpbMl09aFsyXTtpZihpW2RdPWosalsyXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHJiKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHNiKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJighY3x8YyhmLGQsZSkpJiYoZy5wdXNoKGYpLGomJmIucHVzaChoKSk7cmV0dXJuIGd9ZnVuY3Rpb24gdGIoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFtzXSYmKGQ9dGIoZCkpLGUmJiFlW3NdJiYoZT10YihlLGYpKSxmYihmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx3YihifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnNiKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj1zYihyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SS5jYWxsKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj1zYihyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6Ry5hcHBseShnLHIpfSl9ZnVuY3Rpb24gdWIoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGk9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saj1nPzE6MCxrPXFiKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saSwhMCksbD1xYihmdW5jdGlvbihhKXtyZXR1cm4gSS5jYWxsKGIsYSk+LTF9LGksITApLG09W2Z1bmN0aW9uKGEsYyxkKXtyZXR1cm4hZyYmKGR8fGMhPT1oKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKX1dO2Y+ajtqKyspaWYoYz1kLnJlbGF0aXZlW2Fbal0udHlwZV0pbT1bcWIocmIobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2pdLnR5cGVdLmFwcGx5KG51bGwsYVtqXS5tYXRjaGVzKSxjW3NdKXtmb3IoZT0rK2o7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHRiKGo+MSYmcmIobSksaj4xJiZwYihhLnNsaWNlKDAsai0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtqLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFAsXCIkMVwiKSxjLGU+aiYmdWIoYS5zbGljZShqLGUpKSxmPmUmJnViKGE9YS5zbGljZShlKSksZj5lJiZwYihhKSl9bS5wdXNoKGMpfXJldHVybiByYihtKX1mdW5jdGlvbiB2YihhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGksaixrKXt2YXIgbSxuLG8scD0wLHE9XCIwXCIscj1mJiZbXSxzPVtdLHQ9aCx2PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsayksdz11Kz1udWxsPT10PzE6TWF0aC5yYW5kb20oKXx8LjEseD12Lmxlbmd0aDtmb3IoayYmKGg9ZyE9PWwmJmcpO3EhPT14JiZudWxsIT0obT12W3FdKTtxKyspe2lmKGUmJm0pe249MDt3aGlsZShvPWFbbisrXSlpZihvKG0sZyxpKSl7ai5wdXNoKG0pO2JyZWFrfWsmJih1PXcpfWMmJigobT0hbyYmbSkmJnAtLSxmJiZyLnB1c2gobSkpfWlmKHArPXEsYyYmcSE9PXApe249MDt3aGlsZShvPWJbbisrXSlvKHIscyxnLGkpO2lmKGYpe2lmKHA+MCl3aGlsZShxLS0pcltxXXx8c1txXXx8KHNbcV09RS5jYWxsKGopKTtzPXNiKHMpfUcuYXBwbHkoaixzKSxrJiYhZiYmcy5sZW5ndGg+MCYmcCtiLmxlbmd0aD4xJiZkYi51bmlxdWVTb3J0KGopfXJldHVybiBrJiYodT13LGg9dCkscn07cmV0dXJuIGM/ZmIoZik6Zn1nPWRiLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj15W2ErXCIgXCJdO2lmKCFmKXtifHwoYj1vYihhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj11YihiW2NdKSxmW3NdP2QucHVzaChmKTplLnB1c2goZik7Zj15KGEsdmIoZSxkKSl9cmV0dXJuIGZ9O2Z1bmN0aW9uIHdiKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZGIoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHhiKGEsYixlLGYpe3ZhciBoLGksaixrLGwsbT1vYihhKTtpZighZiYmMT09PW0ubGVuZ3RoKXtpZihpPW1bMF09bVswXS5zbGljZSgwKSxpLmxlbmd0aD4yJiZcIklEXCI9PT0oaj1pWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZuJiZkLnJlbGF0aXZlW2lbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChqLm1hdGNoZXNbMF0ucmVwbGFjZShhYixiYiksYil8fFtdKVswXSwhYilyZXR1cm4gZTthPWEuc2xpY2UoaS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aD1WLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6aS5sZW5ndGg7d2hpbGUoaC0tKXtpZihqPWlbaF0sZC5yZWxhdGl2ZVtrPWoudHlwZV0pYnJlYWs7aWYoKGw9ZC5maW5kW2tdKSYmKGY9bChqLm1hdGNoZXNbMF0ucmVwbGFjZShhYixiYiksJC50ZXN0KGlbMF0udHlwZSkmJm1iKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoaS5zcGxpY2UoaCwxKSxhPWYubGVuZ3RoJiZwYihpKSwhYSlyZXR1cm4gRy5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4gZyhhLG0pKGYsYiwhbixlLCQudGVzdChhKSYmbWIoYi5wYXJlbnROb2RlKXx8YiksZX1yZXR1cm4gYy5zb3J0U3RhYmxlPXMuc3BsaXQoXCJcIikuc29ydCh6KS5qb2luKFwiXCIpPT09cyxjLmRldGVjdER1cGxpY2F0ZXM9ISFqLGsoKSxjLnNvcnREZXRhY2hlZD1nYihmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGwuY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxnYihmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxoYihcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmZ2IoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGhiKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxnYihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxoYihKLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxkYn0oYSk7by5maW5kPXQsby5leHByPXQuc2VsZWN0b3JzLG8uZXhwcltcIjpcIl09by5leHByLnBzZXVkb3Msby51bmlxdWU9dC51bmlxdWVTb3J0LG8udGV4dD10LmdldFRleHQsby5pc1hNTERvYz10LmlzWE1MLG8uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1vLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHY9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHc9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHgoYSxiLGMpe2lmKG8uaXNGdW5jdGlvbihiKSlyZXR1cm4gby5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gby5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih3LnRlc3QoYikpcmV0dXJuIG8uZmlsdGVyKGIsYSxjKTtiPW8uZmlsdGVyKGIsYSl9cmV0dXJuIG8uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBnLmNhbGwoYixhKT49MCE9PWN9KX1vLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/by5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpvLmZpbmQubWF0Y2hlcyhhLG8uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sby5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobyhhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYoby5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKylvLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9vLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF4KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJnUudGVzdChhKT9vKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIHksej0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxBPW8uZm4uaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGM9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06ei5leGVjKGEpLCFjfHwhY1sxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fHkpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGNbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG8/YlswXTpiLG8ubWVyZ2UodGhpcyxvLnBhcnNlSFRNTChjWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOm0sITApKSx2LnRlc3QoY1sxXSkmJm8uaXNQbGFpbk9iamVjdChiKSlmb3IoYyBpbiBiKW8uaXNGdW5jdGlvbih0aGlzW2NdKT90aGlzW2NdKGJbY10pOnRoaXMuYXR0cihjLGJbY10pO3JldHVybiB0aGlzfXJldHVybiBkPW0uZ2V0RWxlbWVudEJ5SWQoY1syXSksZCYmZC5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWQpLHRoaXMuY29udGV4dD1tLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6by5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiB5LnJlYWR5P3kucmVhZHkoYSk6YShvKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxvLm1ha2VBcnJheShhLHRoaXMpKX07QS5wcm90b3R5cGU9by5mbix5PW8obSk7dmFyIEI9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sQz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtvLmV4dGVuZCh7ZGlyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZvKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sc2libGluZzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY319KSxvLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW8oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYoby5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXUudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/byhhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmby5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP28udW5pcXVlKGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9nLmNhbGwobyhhKSx0aGlzWzBdKTpnLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8udW5pcXVlKG8ubWVyZ2UodGhpcy5nZXQoKSxvKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEQoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW8uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gby5kaXIoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG8uZGlyKGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG8uZGlyKGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gby5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gby5kaXIoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG8uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIG8uc2libGluZygoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIG8uc2libGluZyhhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG8ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7by5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW8ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW8uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihDW2FdfHxvLnVuaXF1ZShlKSxCLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRT0vXFxTKy9nLEY9e307ZnVuY3Rpb24gRyhhKXt2YXIgYj1GW2FdPXt9O3JldHVybiBvLmVhY2goYS5tYXRjaChFKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1vLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0ZbYV18fEcoYSk6by5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZixnLGg9W10saT0hYS5vbmNlJiZbXSxqPWZ1bmN0aW9uKGwpe2ZvcihiPWEubWVtb3J5JiZsLGM9ITAsZz1lfHwwLGU9MCxmPWgubGVuZ3RoLGQ9ITA7aCYmZj5nO2crKylpZihoW2ddLmFwcGx5KGxbMF0sbFsxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSl7Yj0hMTticmVha31kPSExLGgmJihpP2kubGVuZ3RoJiZqKGkuc2hpZnQoKSk6Yj9oPVtdOmsuZGlzYWJsZSgpKX0saz17YWRkOmZ1bmN0aW9uKCl7aWYoaCl7dmFyIGM9aC5sZW5ndGg7IWZ1bmN0aW9uIGcoYil7by5lYWNoKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1vLnR5cGUoYyk7XCJmdW5jdGlvblwiPT09ZD9hLnVuaXF1ZSYmay5oYXMoYyl8fGgucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PWQmJmcoYyl9KX0oYXJndW1lbnRzKSxkP2Y9aC5sZW5ndGg6YiYmKGU9YyxqKGIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGgmJm8uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1vLmluQXJyYXkoYixoLGMpKT4tMSloLnNwbGljZShjLDEpLGQmJihmPj1jJiZmLS0sZz49YyYmZy0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9vLmluQXJyYXkoYSxoKT4tMTohKCFofHwhaC5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBoPVtdLGY9MCx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGg9aT1iPXZvaWQgMCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFofSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9dm9pZCAwLGJ8fGsuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFpfSxmaXJlV2l0aDpmdW5jdGlvbihhLGIpe3JldHVybiFofHxjJiYhaXx8KGI9Ynx8W10sYj1bYSxiLnNsaWNlP2Iuc2xpY2UoKTpiXSxkP2kucHVzaChiKTpqKGIpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFjfX07cmV0dXJuIGt9LG8uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG8uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixvLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG8uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG8uRGVmZXJyZWQoZnVuY3Rpb24oYyl7by5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1vLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm8uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KS5wcm9ncmVzcyhjLm5vdGlmeSk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9vLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG8uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWQuY2FsbChhcmd1bWVudHMpLGU9Yy5sZW5ndGgsZj0xIT09ZXx8YSYmby5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZTowLGc9MT09PWY/YTpvLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9kLmNhbGwoYXJndW1lbnRzKTplLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZT4xKWZvcihpPW5ldyBBcnJheShlKSxqPW5ldyBBcnJheShlKSxrPW5ldyBBcnJheShlKTtlPmI7YisrKWNbYl0mJm8uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpLnByb2dyZXNzKGgoYixqLGkpKTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSDtvLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBvLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG8uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP28ucmVhZHlXYWl0Kys6by5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1vLnJlYWR5V2FpdDpvLmlzUmVhZHkpfHwoby5pc1JlYWR5PSEwLGEhPT0hMCYmLS1vLnJlYWR5V2FpdD4wfHwoSC5yZXNvbHZlV2l0aChtLFtvXSksby5mbi50cmlnZ2VyJiZvKG0pLnRyaWdnZXIoXCJyZWFkeVwiKS5vZmYoXCJyZWFkeVwiKSkpfX0pO2Z1bmN0aW9uIEkoKXttLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpLG8ucmVhZHkoKX1vLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEh8fChIPW8uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1tLnJlYWR5U3RhdGU/c2V0VGltZW91dChvLnJlYWR5KToobS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEksITEpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixJLCExKSkpLEgucHJvbWlzZShiKX0sby5yZWFkeS5wcm9taXNlKCk7dmFyIEo9by5hY2Nlc3M9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09by50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpby5hY2Nlc3MoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsby5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG8oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn07by5hY2NlcHREYXRhPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gSygpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNhY2hlPXt9LDAse2dldDpmdW5jdGlvbigpe3JldHVybnt9fX0pLHRoaXMuZXhwYW5kbz1vLmV4cGFuZG8rTWF0aC5yYW5kb20oKX1LLnVpZD0xLEsuYWNjZXB0cz1vLmFjY2VwdERhdGEsSy5wcm90b3R5cGU9e2tleTpmdW5jdGlvbihhKXtpZighSy5hY2NlcHRzKGEpKXJldHVybiAwO3ZhciBiPXt9LGM9YVt0aGlzLmV4cGFuZG9dO2lmKCFjKXtjPUsudWlkKys7dHJ5e2JbdGhpcy5leHBhbmRvXT17dmFsdWU6Y30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSxiKX1jYXRjaChkKXtiW3RoaXMuZXhwYW5kb109YyxvLmV4dGVuZChhLGIpfX1yZXR1cm4gdGhpcy5jYWNoZVtjXXx8KHRoaXMuY2FjaGVbY109e30pLGN9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmtleShhKSxmPXRoaXMuY2FjaGVbZV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZltiXT1jO2Vsc2UgaWYoby5pc0VtcHR5T2JqZWN0KGYpKW8uZXh0ZW5kKHRoaXMuY2FjaGVbZV0sYik7ZWxzZSBmb3IoZCBpbiBiKWZbZF09YltkXTtyZXR1cm4gZn0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jYWNoZVt0aGlzLmtleShhKV07cmV0dXJuIHZvaWQgMD09PWI/YzpjW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG8uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXMua2V5KGEpLGc9dGhpcy5jYWNoZVtmXTtpZih2b2lkIDA9PT1iKXRoaXMuY2FjaGVbZl09e307ZWxzZXtvLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChvLmNhbWVsQ2FzZSkpOihlPW8uY2FtZWxDYXNlKGIpLGIgaW4gZz9kPVtiLGVdOihkPWUsZD1kIGluIGc/W2RdOmQubWF0Y2goRSl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGdbZFtjXV19fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiFvLmlzRW1wdHlPYmplY3QodGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfHx7fSl9LGRpc2NhcmQ6ZnVuY3Rpb24oYSl7YVt0aGlzLmV4cGFuZG9dJiZkZWxldGUgdGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfX07dmFyIEw9bmV3IEssTT1uZXcgSyxOPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxPPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKE8sXCItJDFcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpOLnRlc3QoYyk/by5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9TS5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9by5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE0uaGFzRGF0YShhKXx8TC5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTS5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TS5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBMLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TC5yZW1vdmUoYSxiKX19KSxvLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU0uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTC5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7XG53aGlsZShjLS0pZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1vLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxQKGYsZCxlW2RdKSk7TC5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtNLnNldCh0aGlzLGEpfSk6Sih0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ9by5jYW1lbENhc2UoYSk7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1NLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1NLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1QKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1NLmdldCh0aGlzLGQpO00uc2V0KHRoaXMsZCxiKSwtMSE9PWEuaW5kZXhPZihcIi1cIikmJnZvaWQgMCE9PWMmJk0uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtNLnJlbW92ZSh0aGlzLGEpfSl9fSksby5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1MLmdldChhLGIpLGMmJighZHx8by5pc0FycmF5KGMpP2Q9TC5hY2Nlc3MoYSxiLG8ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1vLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW8uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7by5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTC5nZXQoYSxjKXx8TC5hY2Nlc3MoYSxjLHtlbXB0eTpvLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe0wucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksby5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9vLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW8ucXVldWUodGhpcyxhLGIpO28uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm8uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe28uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW8uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPUwuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFI9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09by5jc3MoYSxcImRpc3BsYXlcIil8fCFvLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX0sVD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT1tLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQobS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtiLmlubmVySFRNTD1cIjxpbnB1dCB0eXBlPSdyYWRpbycgY2hlY2tlZD0nY2hlY2tlZCcgbmFtZT0ndCcvPlwiLGwuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixsLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIFU9XCJ1bmRlZmluZWRcIjtsLmZvY3VzaW5CdWJibGVzPVwib25mb2N1c2luXCJpbiBhO3ZhciBWPS9ea2V5LyxXPS9eKD86bW91c2V8Y29udGV4dG1lbnUpfGNsaWNrLyxYPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxZPS9eKFteLl0qKSg/OlxcLiguKyl8KSQvO2Z1bmN0aW9uIFooKXtyZXR1cm4hMH1mdW5jdGlvbiAkKCl7cmV0dXJuITF9ZnVuY3Rpb24gXygpe3RyeXtyZXR1cm4gbS5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319by5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixwLHEscj1MLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9by5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuIHR5cGVvZiBvIT09VSYmby5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/by5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPVkuZXhlYyhiW2pdKXx8W10sbj1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuJiYobD1vLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbD1vLmV2ZW50LnNwZWNpYWxbbl18fHt9LGs9by5leHRlbmQoe3R5cGU6bixvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmby5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW25dKXx8KG09aVtuXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobixnLCExKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG8uZXZlbnQuZ2xvYmFsW25dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixwLHEscj1MLmhhc0RhdGEoYSkmJkwuZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPVkuZXhlYyhiW2pdKXx8W10sbj1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuKXtsPW8uZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixtPWlbbl18fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG8ucmVtb3ZlRXZlbnQoYSxuLHIuaGFuZGxlKSxkZWxldGUgaVtuXSl9ZWxzZSBmb3IobiBpbiBpKW8uZXZlbnQucmVtb3ZlKGEsbitiW2pdLGMsZCwhMCk7by5pc0VtcHR5T2JqZWN0KGkpJiYoZGVsZXRlIHIuaGFuZGxlLEwucmVtb3ZlKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnLGgsaSxrLGwsbixwPVtkfHxtXSxxPWouY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWouY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihnPWg9ZD1kfHxtLDMhPT1kLm5vZGVUeXBlJiY4IT09ZC5ub2RlVHlwZSYmIVgudGVzdChxK28uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+PTAmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxrPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW28uZXhwYW5kb10/YjpuZXcgby5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1lPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIubmFtZXNwYWNlX3JlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWQpLGM9bnVsbD09Yz9bYl06by5tYWtlQXJyYXkoYyxbYl0pLG49by5ldmVudC5zcGVjaWFsW3FdfHx7fSxlfHwhbi50cmlnZ2VyfHxuLnRyaWdnZXIuYXBwbHkoZCxjKSE9PSExKSl7aWYoIWUmJiFuLm5vQnViYmxlJiYhby5pc1dpbmRvdyhkKSl7Zm9yKGk9bi5kZWxlZ2F0ZVR5cGV8fHEsWC50ZXN0KGkrcSl8fChnPWcucGFyZW50Tm9kZSk7ZztnPWcucGFyZW50Tm9kZSlwLnB1c2goZyksaD1nO2g9PT0oZC5vd25lckRvY3VtZW50fHxtKSYmcC5wdXNoKGguZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93fHxhKX1mPTA7d2hpbGUoKGc9cFtmKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zj4xP2k6bi5iaW5kVHlwZXx8cSxsPShMLmdldChnLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTC5nZXQoZyxcImhhbmRsZVwiKSxsJiZsLmFwcGx5KGcsYyksbD1rJiZnW2tdLGwmJmwuYXBwbHkmJm8uYWNjZXB0RGF0YShnKSYmKGIucmVzdWx0PWwuYXBwbHkoZyxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxlfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxuLl9kZWZhdWx0JiZuLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IW8uYWNjZXB0RGF0YShkKXx8ayYmby5pc0Z1bmN0aW9uKGRbcV0pJiYhby5pc1dpbmRvdyhkKSYmKGg9ZFtrXSxoJiYoZFtrXT1udWxsKSxvLmV2ZW50LnRyaWdnZXJlZD1xLGRbcV0oKSxvLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaCYmKGRba109aCkpLGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1vLmV2ZW50LmZpeChhKTt2YXIgYixjLGUsZixnLGg9W10saT1kLmNhbGwoYXJndW1lbnRzKSxqPShMLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1vLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1vLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5uYW1lc3BhY2VfcmV8fGEubmFtZXNwYWNlX3JlLnRlc3QoZy5uYW1lc3BhY2UpKSYmKGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxlPSgoby5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYS5yZXN1bHQ9ZSk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoIWEuYnV0dG9ufHxcImNsaWNrXCIhPT1hLnR5cGUpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/byhlLHRoaXMpLmluZGV4KGkpPj0wOm8uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8bSxkPWMuZG9jdW1lbnRFbGVtZW50LGU9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhkJiZkLnNjcm9sbExlZnR8fGUmJmUuc2Nyb2xsTGVmdHx8MCktKGQmJmQuY2xpZW50TGVmdHx8ZSYmZS5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZCYmZC5zY3JvbGxUb3B8fGUmJmUuc2Nyb2xsVG9wfHwwKS0oZCYmZC5jbGllbnRUb3B8fGUmJmUuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Znx8KGEud2hpY2g9MSZmPzE6MiZmPzM6NCZmPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW28uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxkLGU9YS50eXBlLGY9YSxnPXRoaXMuZml4SG9va3NbZV07Z3x8KHRoaXMuZml4SG9va3NbZV09Zz1XLnRlc3QoZSk/dGhpcy5tb3VzZUhvb2tzOlYudGVzdChlKT90aGlzLmtleUhvb2tzOnt9KSxkPWcucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoZy5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBvLkV2ZW50KGYpLGI9ZC5sZW5ndGg7d2hpbGUoYi0tKWM9ZFtiXSxhW2NdPWZbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9bSksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksZy5maWx0ZXI/Zy5maWx0ZXIoYSxmKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PV8oKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09XygpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZvLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBvLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1vLmV4dGVuZChuZXcgby5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/by5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpvLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxvLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxvLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEuZ2V0UHJldmVudERlZmF1bHQmJmEuZ2V0UHJldmVudERlZmF1bHQoKT9aOiQpOnRoaXMudHlwZT1hLGImJm8uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG8ubm93KCksdm9pZCh0aGlzW28uZXhwYW5kb109ITApKTpuZXcgby5FdmVudChhLGIpfSxvLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOiQsaXNQcm9wYWdhdGlvblN0b3BwZWQ6JCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDokLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPVosYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPVosdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG8uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxmdW5jdGlvbihhLGIpe28uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuKCFlfHxlIT09ZCYmIW8uY29udGFpbnMoZCxlKSkmJihhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLGwuZm9jdXNpbkJ1YmJsZXN8fG8uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7by5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG8uZXZlbnQuZml4KGEpLCEwKX07by5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPUwuYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksTC5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1MLmFjY2VzcyhkLGIpLTE7ZT9MLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLEwucmVtb3ZlKGQsYikpfX19KSxvLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9Y3x8YixiPXZvaWQgMCk7Zm9yKGcgaW4gYSl0aGlzLm9uKGcsYixjLGFbZ10sZSk7cmV0dXJuIHRoaXN9aWYobnVsbD09YyYmbnVsbD09ZD8oZD1iLGM9Yj12b2lkIDApOm51bGw9PWQmJihcInN0cmluZ1wiPT10eXBlb2YgYj8oZD1jLGM9dm9pZCAwKTooZD1jLGM9YixiPXZvaWQgMCkpLGQ9PT0hMSlkPSQ7ZWxzZSBpZighZClyZXR1cm4gdGhpcztyZXR1cm4gMT09PWUmJihmPWQsZD1mdW5jdGlvbihhKXtyZXR1cm4gbygpLm9mZihhKSxmLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZC5ndWlkPWYuZ3VpZHx8KGYuZ3VpZD1vLmd1aWQrKykpLHRoaXMuZWFjaChmdW5jdGlvbigpe28uZXZlbnQuYWRkKHRoaXMsYSxkLGMsYil9KX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixvKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybihiPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpJiYoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPSQpLHRoaXMuZWFjaChmdW5jdGlvbigpe28uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7by5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/by5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSk7dmFyIGFiPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxiYj0vPChbXFx3Ol0rKS8sY2I9Lzx8JiM/XFx3KzsvLGRiPS88KD86c2NyaXB0fHN0eWxlfGxpbmspL2ksZWI9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxmYj0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGdiPS9edHJ1ZVxcLyguKikvLGhiPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxpYj17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2liLm9wdGdyb3VwPWliLm9wdGlvbixpYi50Ym9keT1pYi50Zm9vdD1pYi5jb2xncm91cD1pYi5jYXB0aW9uPWliLnRoZWFkLGliLnRoPWliLnRkO2Z1bmN0aW9uIGpiKGEsYil7cmV0dXJuIG8ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZvLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIGtiKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIGxiKGEpe3ZhciBiPWdiLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBtYihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylMLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxMLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9ZnVuY3Rpb24gbmIoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihMLmhhc0RhdGEoYSkmJihmPUwuYWNjZXNzKGEpLGc9TC5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspby5ldmVudC5hZGQoYixlLGpbZV1bY10pfU0uaGFzRGF0YShhKSYmKGg9TS5hY2Nlc3MoYSksaT1vLmV4dGVuZCh7fSxoKSxNLnNldChiLGkpKX19ZnVuY3Rpb24gb2IoYSxiKXt2YXIgYz1hLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOmEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZvLm5vZGVOYW1lKGEsYik/by5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBwYihhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZULnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1vLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9by5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShsLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxvLmlzWE1MRG9jKGEpKSlmb3IoZz1vYihoKSxmPW9iKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspcGIoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8b2IoYSksZz1nfHxvYihoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKW5iKGZbZF0sZ1tkXSk7ZWxzZSBuYihhLGgpO3JldHVybiBnPW9iKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmbWIoZywhaSYmb2IoYSxcInNjcmlwdFwiKSksaH0sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGUsZixnLGgsaSxqLGs9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbD1bXSxtPTAsbj1hLmxlbmd0aDtuPm07bSsrKWlmKGU9YVttXSxlfHwwPT09ZSlpZihcIm9iamVjdFwiPT09by50eXBlKGUpKW8ubWVyZ2UobCxlLm5vZGVUeXBlP1tlXTplKTtlbHNlIGlmKGNiLnRlc3QoZSkpe2Y9Znx8ay5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGc9KGJiLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGg9aWJbZ118fGliLl9kZWZhdWx0LGYuaW5uZXJIVE1MPWhbMV0rZS5yZXBsYWNlKGFiLFwiPCQxPjwvJDI+XCIpK2hbMl0saj1oWzBdO3doaWxlKGotLSlmPWYubGFzdENoaWxkO28ubWVyZ2UobCxmLmNoaWxkTm9kZXMpLGY9ay5maXJzdENoaWxkLGYudGV4dENvbnRlbnQ9XCJcIn1lbHNlIGwucHVzaChiLmNyZWF0ZVRleHROb2RlKGUpKTtrLnRleHRDb250ZW50PVwiXCIsbT0wO3doaWxlKGU9bFttKytdKWlmKCghZHx8LTE9PT1vLmluQXJyYXkoZSxkKSkmJihpPW8uY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpLGY9b2Ioay5hcHBlbmRDaGlsZChlKSxcInNjcmlwdFwiKSxpJiZtYihmKSxjKSl7aj0wO3doaWxlKGU9ZltqKytdKWZiLnRlc3QoZS50eXBlfHxcIlwiKSYmYy5wdXNoKGUpfXJldHVybiBrfSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlLGYsZyxoPW8uZXZlbnQuc3BlY2lhbCxpPTA7dm9pZCAwIT09KGM9YVtpXSk7aSsrKXtpZihvLmFjY2VwdERhdGEoYykmJihmPWNbTC5leHBhbmRvXSxmJiYoYj1MLmNhY2hlW2ZdKSkpe2lmKGQ9T2JqZWN0LmtleXMoYi5ldmVudHN8fHt9KSxkLmxlbmd0aClmb3IoZz0wO3ZvaWQgMCE9PShlPWRbZ10pO2crKyloW2VdP28uZXZlbnQucmVtb3ZlKGMsZSk6by5yZW1vdmVFdmVudChjLGUsYi5oYW5kbGUpO0wuY2FjaGVbZl0mJmRlbGV0ZSBMLmNhY2hlW2ZdfWRlbGV0ZSBNLmNhY2hlW2NbTS5leHBhbmRvXV19fX0pLG8uZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/by50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWpiKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amIodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP28uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxvLmNsZWFuRGF0YShvYihjKSksYy5wYXJlbnROb2RlJiYoYiYmby5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJm1iKG9iKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihvLmNsZWFuRGF0YShvYihhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBvLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhZGIudGVzdChhKSYmIWliWyhiYi5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9YS5yZXBsYWNlKGFiLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG8uY2xlYW5EYXRhKG9iKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxvLmNsZWFuRGF0YShvYih0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGs9dGhpcy5sZW5ndGgsbT10aGlzLG49ay0xLHA9YVswXSxxPW8uaXNGdW5jdGlvbihwKTtpZihxfHxrPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhbC5jaGVja0Nsb25lJiZlYi50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bS5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYoayYmKGM9by5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGQ9Yy5maXJzdENoaWxkLDE9PT1jLmNoaWxkTm9kZXMubGVuZ3RoJiYoYz1kKSxkKSl7Zm9yKGY9by5tYXAob2IoYyxcInNjcmlwdFwiKSxrYiksZz1mLmxlbmd0aDtrPmo7aisrKWg9YyxqIT09biYmKGg9by5jbG9uZShoLCEwLCEwKSxnJiZvLm1lcmdlKGYsb2IoaCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGgsaik7aWYoZylmb3IoaT1mW2YubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsby5tYXAoZixsYiksaj0wO2c+ajtqKyspaD1mW2pdLGZiLnRlc3QoaC50eXBlfHxcIlwiKSYmIUwuYWNjZXNzKGgsXCJnbG9iYWxFdmFsXCIpJiZvLmNvbnRhaW5zKGksaCkmJihoLnNyYz9vLl9ldmFsVXJsJiZvLl9ldmFsVXJsKGguc3JjKTpvLmdsb2JhbEV2YWwoaC50ZXh0Q29udGVudC5yZXBsYWNlKGhiLFwiXCIpKSl9cmV0dXJuIHRoaXN9fSksby5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7by5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW8oYSksZz1lLmxlbmd0aC0xLGg9MDtnPj1oO2grKyljPWg9PT1nP3RoaXM6dGhpcy5jbG9uZSghMCksbyhlW2hdKVtiXShjKSxmLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBxYixyYj17fTtmdW5jdGlvbiBzYihiLGMpe3ZhciBkPW8oYy5jcmVhdGVFbGVtZW50KGIpKS5hcHBlbmRUbyhjLmJvZHkpLGU9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZT9hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlKGRbMF0pLmRpc3BsYXk6by5jc3MoZFswXSxcImRpc3BsYXlcIik7cmV0dXJuIGQuZGV0YWNoKCksZX1mdW5jdGlvbiB0YihhKXt2YXIgYj1tLGM9cmJbYV07cmV0dXJuIGN8fChjPXNiKGEsYiksXCJub25lXCIhPT1jJiZjfHwocWI9KHFifHxvKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9cWJbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz1zYihhLGIpLHFiLmRldGFjaCgpKSxyYlthXT1jKSxjfXZhciB1Yj0vXm1hcmdpbi8sdmI9bmV3IFJlZ0V4cChcIl4oXCIrUStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSx3Yj1mdW5jdGlvbihhKXtyZXR1cm4gYS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYSxudWxsKX07ZnVuY3Rpb24geGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHx3YihhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0pLGMmJihcIlwiIT09Z3x8by5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW8uc3R5bGUoYSxiKSksdmIudGVzdChnKSYmdWIudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiB5YihhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0hZnVuY3Rpb24oKXt2YXIgYixjLGQ9XCJwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7ZGlzcGxheTpibG9jazstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3hcIixlPW0uZG9jdW1lbnRFbGVtZW50LGY9bS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGc9bS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2cuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGcuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGwuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWcuc3R5bGUuYmFja2dyb3VuZENsaXAsZi5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0Oi05OTk5cHg7bWFyZ2luLXRvcDoxcHhcIixmLmFwcGVuZENoaWxkKGcpO2Z1bmN0aW9uIGgoKXtnLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxcHg7Ym9yZGVyOjFweDtkaXNwbGF5OmJsb2NrO3dpZHRoOjRweDttYXJnaW4tdG9wOjElO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxJVwiLGUuYXBwZW5kQ2hpbGQoZik7dmFyIGQ9YS5nZXRDb21wdXRlZFN0eWxlKGcsbnVsbCk7Yj1cIjElXCIhPT1kLnRvcCxjPVwiNHB4XCI9PT1kLndpZHRoLGUucmVtb3ZlQ2hpbGQoZil9YS5nZXRDb21wdXRlZFN0eWxlJiZvLmV4dGVuZChsLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGgoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZoKCksY30scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9Zy5hcHBlbmRDaGlsZChtLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9Zy5zdHlsZS5jc3NUZXh0PWQsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGcuc3R5bGUud2lkdGg9XCIxcHhcIixlLmFwcGVuZENoaWxkKGYpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMsbnVsbCkubWFyZ2luUmlnaHQpLGUucmVtb3ZlQ2hpbGQoZiksZy5pbm5lckhUTUw9XCJcIixifX0pfSgpLG8uc3dhcD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07dmFyIHpiPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxBYj1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSguKikkXCIsXCJpXCIpLEJiPW5ldyBSZWdFeHAoXCJeKFsrLV0pPShcIitRK1wiKVwiLFwiaVwiKSxDYj17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sRGI9e2xldHRlclNwYWNpbmc6MCxmb250V2VpZ2h0OjQwMH0sRWI9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdO2Z1bmN0aW9uIEZiKGEsYil7aWYoYiBpbiBhKXJldHVybiBiO3ZhciBjPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGQ9YixlPUViLmxlbmd0aDt3aGlsZShlLS0paWYoYj1FYltlXStjLGIgaW4gYSlyZXR1cm4gYjtyZXR1cm4gZH1mdW5jdGlvbiBHYihhLGIsYyl7dmFyIGQ9QWIuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMV0tKGN8fDApKSsoZFsyXXx8XCJweFwiKTpifWZ1bmN0aW9uIEhiKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW8uY3NzKGEsYytSW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1vLmNzcyhhLFwicGFkZGluZ1wiK1JbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09by5jc3MoYSxcImJvcmRlclwiK1JbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW8uY3NzKGEsXCJwYWRkaW5nXCIrUltmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1vLmNzcyhhLFwiYm9yZGVyXCIrUltmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBJYihhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj13YihhKSxnPVwiYm9yZGVyLWJveFwiPT09by5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9eGIoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSx2Yi50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGwuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStIYihhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9ZnVuY3Rpb24gSmIoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109TC5nZXQoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlMoZCkmJihmW2ddPUwuYWNjZXNzKGQsXCJvbGRkaXNwbGF5XCIsdGIoZC5ub2RlTmFtZSkpKSk6ZltnXXx8KGU9UyhkKSwoYyYmXCJub25lXCIhPT1jfHwhZSkmJkwuc2V0KGQsXCJvbGRkaXNwbGF5XCIsZT9jOm8uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfW8uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9eGIoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOntjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9by5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW8uY3NzUHJvcHNbaF18fChvLmNzc1Byb3BzW2hdPUZiKGksaCkpLGc9by5jc3NIb29rc1tiXXx8by5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPUJiLmV4ZWMoYykpJiYoYz0oZVsxXSsxKSplWzJdK3BhcnNlRmxvYXQoby5jc3MoYSxiKSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCIhPT1mfHxvLmNzc051bWJlcltoXXx8KGMrPVwicHhcIiksbC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1cIlwiLGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9by5jYW1lbENhc2UoYik7cmV0dXJuIGI9by5jc3NQcm9wc1toXXx8KG8uY3NzUHJvcHNbaF09RmIoYS5zdHlsZSxoKSksZz1vLmNzc0hvb2tzW2JdfHxvLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT14YihhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIERiJiYoZT1EYltiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fG8uaXNOdW1lcmljKGYpP2Z8fDA6ZSk6ZX19KSxvLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe28uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/MD09PWEub2Zmc2V0V2lkdGgmJnpiLnRlc3Qoby5jc3MoYSxcImRpc3BsYXlcIikpP28uc3dhcChhLENiLGZ1bmN0aW9uKCl7cmV0dXJuIEliKGEsYixkKX0pOkliKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGU9ZCYmd2IoYSk7cmV0dXJuIEdiKGEsYyxkP0hiKGEsYixkLFwiYm9yZGVyLWJveFwiPT09by5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxvLmNzc0hvb2tzLm1hcmdpblJpZ2h0PXliKGwucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP28uc3dhcChhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LHhiLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG8uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7by5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStSW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LHViLnRlc3QoYSl8fChvLmNzc0hvb2tzW2ErYl0uc2V0PUdiKX0pLG8uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG8uaXNBcnJheShiKSl7Zm9yKGQ9d2IoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09by5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP28uc3R5bGUoYSxiLGMpOm8uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIEpiKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIEpiKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKT9vKHRoaXMpLnNob3coKTpvKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIEtiKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBLYi5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW8uVHdlZW49S2IsS2IucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpLYixpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChvLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPUtiLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpLYi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1LYi5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5wb3M9Yj10aGlzLm9wdGlvbnMuZHVyYXRpb24/by5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpLYi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxLYi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9S2IucHJvdG90eXBlLEtiLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbnVsbD09YS5lbGVtW2EucHJvcF18fGEuZWxlbS5zdHlsZSYmbnVsbCE9YS5lbGVtLnN0eWxlW2EucHJvcF0/KGI9by5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKTphLmVsZW1bYS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGEpe28uZnguc3RlcFthLnByb3BdP28uZnguc3RlcFthLnByb3BdKGEpOmEuZWxlbS5zdHlsZSYmKG51bGwhPWEuZWxlbS5zdHlsZVtvLmNzc1Byb3BzW2EucHJvcF1dfHxvLmNzc0hvb2tzW2EucHJvcF0pP28uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpOmEuZWxlbVthLnByb3BdPWEubm93fX19LEtiLnByb3BIb29rcy5zY3JvbGxUb3A9S2IucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sby5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfX0sby5meD1LYi5wcm90b3R5cGUuaW5pdCxvLmZ4LnN0ZXA9e307dmFyIExiLE1iLE5iPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxPYj1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitRK1wiKShbYS16JV0qKSRcIixcImlcIiksUGI9L3F1ZXVlSG9va3MkLyxRYj1bVmJdLFJiPXtcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYiksZD1jLmN1cigpLGU9T2IuZXhlYyhiKSxmPWUmJmVbM118fChvLmNzc051bWJlclthXT9cIlwiOlwicHhcIiksZz0oby5jc3NOdW1iZXJbYV18fFwicHhcIiE9PWYmJitkKSYmT2IuZXhlYyhvLmNzcyhjLmVsZW0sYSkpLGg9MSxpPTIwO2lmKGcmJmdbM10hPT1mKXtmPWZ8fGdbM10sZT1lfHxbXSxnPStkfHwxO2RvIGg9aHx8XCIuNVwiLGcvPWgsby5zdHlsZShjLmVsZW0sYSxnK2YpO3doaWxlKGghPT0oaD1jLmN1cigpL2QpJiYxIT09aCYmLS1pKX1yZXR1cm4gZSYmKGc9Yy5zdGFydD0rZ3x8K2R8fDAsYy51bml0PWYsYy5lbmQ9ZVsxXT9nKyhlWzFdKzEpKmVbMl06K2VbMl0pLGN9XX07ZnVuY3Rpb24gU2IoKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe0xiPXZvaWQgMH0pLExiPW8ubm93KCl9ZnVuY3Rpb24gVGIoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1SW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFViKGEsYixjKXtmb3IodmFyIGQsZT0oUmJbYl18fFtdKS5jb25jYXQoUmJbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBWYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz10aGlzLGw9e30sbT1hLnN0eWxlLG49YS5ub2RlVHlwZSYmUyhhKSxwPUwuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9by5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssay5hbHdheXMoZnVuY3Rpb24oKXtrLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxvLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVttLm92ZXJmbG93LG0ub3ZlcmZsb3dYLG0ub3ZlcmZsb3dZXSxqPW8uY3NzKGEsXCJkaXNwbGF5XCIpLFwibm9uZVwiPT09aiYmKGo9dGIoYS5ub2RlTmFtZSkpLFwiaW5saW5lXCI9PT1qJiZcIm5vbmVcIj09PW8uY3NzKGEsXCJmbG9hdFwiKSYmKG0uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG0ub3ZlcmZsb3c9XCJoaWRkZW5cIixrLmFsd2F5cyhmdW5jdGlvbigpe20ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxtLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG0ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sTmIuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KG4/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFwfHx2b2lkIDA9PT1wW2RdKWNvbnRpbnVlO249ITB9bFtkXT1wJiZwW2RdfHxvLnN0eWxlKGEsZCl9aWYoIW8uaXNFbXB0eU9iamVjdChsKSl7cD9cImhpZGRlblwiaW4gcCYmKG49cC5oaWRkZW4pOnA9TC5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocC5oaWRkZW49IW4pLG4/byhhKS5zaG93KCk6ay5kb25lKGZ1bmN0aW9uKCl7byhhKS5oaWRlKCl9KSxrLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtMLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIGwpby5zdHlsZShhLGIsbFtiXSl9KTtmb3IoZCBpbiBsKWc9VWIobj9wW2RdOjAsZCxrKSxkIGluIHB8fChwW2RdPWcuc3RhcnQsbiYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gV2IoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1vLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG8uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9by5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIFhiKGEsYixjKXt2YXIgZCxlLGY9MCxnPVFiLmxlbmd0aCxoPW8uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPUxifHxTYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpvLmV4dGVuZCh7fSxiKSxvcHRzOm8uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6TGJ8fFNiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1vLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiP2gucmVzb2x2ZVdpdGgoYSxbaixiXSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihXYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9UWJbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBkO3JldHVybiBvLm1hcChrLFViLGopLG8uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG8uZngudGltZXIoby5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9by5BbmltYXRpb249by5leHRlbmQoWGIse3R3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtvLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5zcGxpdChcIiBcIik7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLFJiW2NdPVJiW2NdfHxbXSxSYltjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP1FiLnVuc2hpZnQoYSk6UWIucHVzaChhKX19KSxvLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9vLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG8uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhby5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1vLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBvLmZ4LnNwZWVkcz9vLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpvLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtvLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm8uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxvLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihTKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW8uaXNFbXB0eU9iamVjdChhKSxmPW8uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1YYih0aGlzLG8uZXh0ZW5kKHt9LGEpLGYpOyhlfHxMLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9by50aW1lcnMsZz1MLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZQYi50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyhifHwhYykmJm8uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9TC5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1vLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsby5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxvLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9by5mbltiXTtvLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShUYihiLCEwKSxhLGQsZSl9fSksby5lYWNoKHtzbGlkZURvd246VGIoXCJzaG93XCIpLHNsaWRlVXA6VGIoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlRiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtvLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG8udGltZXJzPVtdLG8uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW8udGltZXJzO2ZvcihMYj1vLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG8uZnguc3RvcCgpLExiPXZvaWQgMH0sby5meC50aW1lcj1mdW5jdGlvbihhKXtvLnRpbWVycy5wdXNoKGEpLGEoKT9vLmZ4LnN0YXJ0KCk6by50aW1lcnMucG9wKCl9LG8uZnguaW50ZXJ2YWw9MTMsby5meC5zdGFydD1mdW5jdGlvbigpe01ifHwoTWI9c2V0SW50ZXJ2YWwoby5meC50aWNrLG8uZnguaW50ZXJ2YWwpKX0sby5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChNYiksTWI9bnVsbH0sby5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sby5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW8uZng/by5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhPW0uY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9bS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChtLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsbC5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGwub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGwub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1tLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsbC5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgWWIsWmIsJGI9by5leHByLmF0dHJIYW5kbGU7by5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLG8uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7by5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxvLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoYSYmMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gdHlwZW9mIGEuZ2V0QXR0cmlidXRlPT09VT9vLnByb3AoYSxiLGMpOigxPT09ZiYmby5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGQ9by5hdHRySG9va3NbYl18fChvLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP1piOlliKSksdm9pZCAwPT09Yz9kJiZcImdldFwiaW4gZCYmbnVsbCE9PShlPWQuZ2V0KGEsYikpP2U6KGU9by5maW5kLmF0dHIoYSxiKSxudWxsPT1lP3ZvaWQgMDplKTpudWxsIT09Yz9kJiZcInNldFwiaW4gZCYmdm9pZCAwIT09KGU9ZC5zZXQoYSxjLGIpKT9lOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6dm9pZCBvLnJlbW92ZUF0dHIoYSxiKSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRSk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1vLnByb3BGaXhbY118fGMsby5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFsLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm8ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fX0pLFpiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/by5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sby5lYWNoKG8uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPSRiW2JdfHxvLmZpbmQuYXR0cjskYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtcbnJldHVybiBkfHwoZj0kYltiXSwkYltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsJGJbYl09ZiksZX19KTt2YXIgX2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtvLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsby5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tvLnByb3BGaXhbYV18fGFdfSl9fSksby5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW8uaXNYTUxEb2MoYSksZiYmKGI9by5wcm9wRml4W2JdfHxiLGU9by5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8X2IudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxsLm9wdFNlbGVjdGVkfHwoby5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxvLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7by5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBhYz0vW1xcdFxcclxcblxcZl0vZztvLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYoby5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7byh0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYyxcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW8udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG8uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe28odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWMsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9vLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChvLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7byh0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1vKHRoaXMpLGY9YS5tYXRjaChFKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09VXx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZMLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6TC5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYyxcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYmM9L1xcci9nO28uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1vLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbyh0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm8uaXNBcnJheShlKSYmKGU9by5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW8udmFsSG9va3NbdGhpcy50eXBlXXx8by52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1vLnZhbEhvb2tzW2UudHlwZV18fG8udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGJjLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksby5leHRlbmQoe3ZhbEhvb2tzOntzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLCEoIWMuc2VsZWN0ZWQmJmkhPT1lfHwobC5vcHREaXNhYmxlZD9jLmRpc2FibGVkOm51bGwhPT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8Yy5wYXJlbnROb2RlLmRpc2FibGVkJiZvLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1vKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9by5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW8uaW5BcnJheShvKGQpLnZhbCgpLGYpPj0wKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksby5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe28udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBvLmlzQXJyYXkoYik/YS5jaGVja2VkPW8uaW5BcnJheShvKGEpLnZhbCgpLGIpPj0wOnZvaWQgMH19LGwuY2hlY2tPbnx8KG8udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSksby5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe28uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG8uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX0sYmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pO3ZhciBjYz1vLm5vdygpLGRjPS9cXD8vO28ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG8ucGFyc2VYTUw9ZnVuY3Rpb24oYSl7dmFyIGIsYztpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e2M9bmV3IERPTVBhcnNlcixiPWMucGFyc2VGcm9tU3RyaW5nKGEsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtiPXZvaWQgMH1yZXR1cm4oIWJ8fGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZvLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2EpLGJ9O3ZhciBlYyxmYyxnYz0vIy4qJC8saGM9LyhbPyZdKV89W14mXSovLGljPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20samM9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sa2M9L14oPzpHRVR8SEVBRCkkLyxsYz0vXlxcL1xcLy8sbWM9L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sbmM9e30sb2M9e30scGM9XCIqL1wiLmNvbmNhdChcIipcIik7dHJ5e2ZjPWxvY2F0aW9uLmhyZWZ9Y2F0Y2gocWMpe2ZjPW0uY3JlYXRlRWxlbWVudChcImFcIiksZmMuaHJlZj1cIlwiLGZjPWZjLmhyZWZ9ZWM9bWMuZXhlYyhmYy50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gcmMoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXTtpZihvLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gc2MoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09b2M7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxvLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiB0YyhhLGIpe3ZhciBjLGQsZT1vLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZvLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gdWMoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gdmMoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1vLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6ZmMsdHlwZTpcIkdFVFwiLGlzTG9jYWw6amMudGVzdChlY1sxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6cGMsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm8ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpvLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj90Yyh0YyhhLG8uYWpheFNldHRpbmdzKSxiKTp0YyhvLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpyYyhuYyksYWpheFRyYW5zcG9ydDpyYyhvYyksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1vLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9vKGwpOm8uZXZlbnQsbj1vLkRlZmVycmVkKCkscD1vLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1pYy5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihuLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxmYykrXCJcIikucmVwbGFjZShnYyxcIlwiKS5yZXBsYWNlKGxjLGVjWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9by50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9bWMuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT1lY1sxXSYmaFsyXT09PWVjWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PShlY1szXXx8KFwiaHR0cDpcIj09PWVjWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9by5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLHNjKG5jLGssYix2KSwyPT09dClyZXR1cm4gdjtpPWsuZ2xvYmFsLGkmJjA9PT1vLmFjdGl2ZSsrJiZvLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0ha2MudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KGRjLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1oYy50ZXN0KGQpP2QucmVwbGFjZShoYyxcIiQxXz1cIitjYysrKTpkKyhkYy50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIrY2MrKykpLGsuaWZNb2RpZmllZCYmKG8ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG8ubGFzdE1vZGlmaWVkW2RdKSxvLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixvLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK3BjK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPXNjKG9jLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT11YyhrLHYsZikpLHU9dmMoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYoby5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYoby5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/bi5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm4ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tby5hY3RpdmV8fG8uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBvLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBvLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG8uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtvW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBvLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxvLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxvLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe28uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxvLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBvLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG8uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBvLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe28odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9byhhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goby5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGIpe28odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX06ZnVuY3Rpb24oKXt2YXIgYj1vKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW8uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe28odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtvLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxvKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxvLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wfSxvLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFvLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciB3Yz0vJTIwL2cseGM9L1xcW1xcXSQvLHljPS9cXHI/XFxuL2csemM9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLEFjPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBCYyhhLGIsYyxkKXt2YXIgZTtpZihvLmlzQXJyYXkoYikpby5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx4Yy50ZXN0KGEpP2QoYSxlKTpCYyhhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW8udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUJjKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9by5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9by5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1vLmFqYXhTZXR0aW5ncyYmby5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG8uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFvLmlzUGxhaW5PYmplY3QoYSkpby5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlCYyhjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKHdjLFwiK1wiKX0sby5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBvLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9by5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9vLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFvKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZBYy50ZXN0KHRoaXMubm9kZU5hbWUpJiYhemMudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVQudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1vKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6by5pc0FycmF5KGMpP28ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh5YyxcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHljLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG8uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBDYz0wLERjPXt9LEVjPXswOjIwMCwxMjIzOjIwNH0sRmM9by5hamF4U2V0dGluZ3MueGhyKCk7YS5BY3RpdmVYT2JqZWN0JiZvKGEpLm9uKFwidW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gRGMpRGNbYV0oKX0pLGwuY29ycz0hIUZjJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gRmMsbC5hamF4PUZjPSEhRmMsby5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBsLmNvcnN8fEZjJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrQ2M7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgRGNbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKEVjW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9RGNbZ109YihcImFib3J0XCIpLGYuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksby5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG8uZ2xvYmFsRXZhbChhKSxhfX19KSxvLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG8uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW8oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLG0uaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgR2M9W10sSGM9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztvLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1HYy5wb3AoKXx8by5leHBhbmRvK1wiX1wiK2NjKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxvLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEhjLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZIYy50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW8uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEhjLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGRjLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG8uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxHYy5wdXNoKGUpKSxnJiZvLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG8ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bTt2YXIgZD12LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9by5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZvKGUpLnJlbW92ZSgpLG8ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBJYz1vLmZuLmxvYWQ7by5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmSWMpcmV0dXJuIEljLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9YS5zbGljZShoKSxhPWEuc2xpY2UoMCxoKSksby5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmby5hamF4KHt1cmw6YSx0eXBlOmUsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9vKFwiPGRpdj5cIikuYXBwZW5kKG8ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuY29tcGxldGUoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goYyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KSx0aGlzfSxvLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gby5ncmVwKG8udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTt2YXIgSmM9YS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZnVuY3Rpb24gS2MoYSl7cmV0dXJuIG8uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31vLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW8uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW8oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1vLmNzcyhhLFwidG9wXCIpLGk9by5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxvLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsaCkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG8uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtvLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXRoaXNbMF0sZT17dG9wOjAsbGVmdDowfSxmPWQmJmQub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG8uY29udGFpbnMoYixkKT8odHlwZW9mIGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IT09VSYmKGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksYz1LYyhmKSx7dG9wOmUudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTplfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09by5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxvLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkLnRvcCs9by5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGQubGVmdCs9by5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1kLnRvcC1vLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1vLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudHx8SmM7d2hpbGUoYSYmIW8ubm9kZU5hbWUoYSxcImh0bWxcIikmJlwic3RhdGljXCI9PT1vLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8SmN9KX19KSxvLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGIsYyl7dmFyIGQ9XCJwYWdlWU9mZnNldFwiPT09YztvLmZuW2JdPWZ1bmN0aW9uKGUpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYixlLGYpe3ZhciBnPUtjKGIpO3JldHVybiB2b2lkIDA9PT1mP2c/Z1tjXTpiW2VdOnZvaWQoZz9nLnNjcm9sbFRvKGQ/YS5wYWdlWE9mZnNldDpmLGQ/ZjphLnBhZ2VZT2Zmc2V0KTpiW2VdPWYpfSxiLGUsYXJndW1lbnRzLmxlbmd0aCxudWxsKX19KSxvLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7by5jc3NIb29rc1tiXT15YihsLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz14YihhLGIpLHZiLnRlc3QoYyk/byhhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG8uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe28uZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtvLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gby5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9vLmNzcyhiLGMsZyk6by5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxvLmZuLnNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LG8uZm4uYW5kU2VsZj1vLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBvfSk7dmFyIExjPWEualF1ZXJ5LE1jPWEuJDtyZXR1cm4gby5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1vJiYoYS4kPU1jKSxiJiZhLmpRdWVyeT09PW8mJihhLmpRdWVyeT1MYyksb30sdHlwZW9mIGI9PT1VJiYoYS5qUXVlcnk9YS4kPW8pLG99KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpxdWVyeS5taW4ubWFwXG47IGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKHR5cGVvZiBqUXVlcnkgIT0gXCJ1bmRlZmluZWRcIiA/IGpRdWVyeSA6IHdpbmRvdy5qUXVlcnkpO1xuXG59KS5jYWxsKGdsb2JhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIl19
