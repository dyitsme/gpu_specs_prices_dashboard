/*!
* jQuery UI Touch Punch 0.2.3
*
* Copyright 2011–2014, Dave Furfero
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Depends:
* jquery.ui.widget.js
* jquery.ui.mouse.js
*/!function(o){function t(o,t){if(!(o.originalEvent.touches.length>1)){o.preventDefault();var e=o.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents");u.initMouseEvent(t,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(u)}}if(o.support.touch="ontouchend"in document,o.support.touch){var e,u=o.ui.mouse.prototype,n=u._mouseInit,c=u._mouseDestroy;u._touchStart=function(o){var u=this;!e&&u._mouseCapture(o.originalEvent.changedTouches[0])&&(e=!0,u._touchMoved=!1,t(o,"mouseover"),t(o,"mousemove"),t(o,"mousedown"))},u._touchMove=function(o){e&&(this._touchMoved=!0,t(o,"mousemove"))},u._touchEnd=function(o){e&&(t(o,"mouseup"),t(o,"mouseout"),this._touchMoved||t(o,"click"),e=!1)},u._mouseInit=function(){var t=this;t.element.bind({touchstart:o.proxy(t,"_touchStart"),touchmove:o.proxy(t,"_touchMove"),touchend:o.proxy(t,"_touchEnd")}),n.call(t)},u._mouseDestroy=function(){var t=this;t.element.unbind({touchstart:o.proxy(t,"_touchStart"),touchmove:o.proxy(t,"_touchMove"),touchend:o.proxy(t,"_touchEnd")}),c.call(t)}}}(jQuery);/*!
* accounting.js v0.4.2
* Copyright 2014 Open Exchange Rates
*
* Freely distributable under the MIT license.
* Portions of accounting.js are inspired or borrowed from underscore.js
*
* Full details and documentation:
* http://openexchangerates.github.io/accounting.js/
*/!function(n,r){function e(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function t(n){return p?p(n):"[object Array]"===l.call(n)}function o(n){return n&&"[object Object]"===l.call(n)}function a(n,r){var e;n=n||{},r=r||{};for(e in r)r.hasOwnProperty(e)&&null==n[e]&&(n[e]=r[e]);return n}function i(n,r,e){var t,o,a=[];if(!n)return a;if(f&&n.map===f)return n.map(r,e);for(t=0,o=n.length;t<o;t++)a[t]=r.call(e,n[t],t,n);return a}function u(n,r){return n=Math.round(Math.abs(n)),isNaN(n)?r:n}function c(n){var r=s.settings.currency.format;return"function"==typeof n&&(n=n()),e(n)&&n.match("%v")?{pos:n,neg:n.replace("-","").replace("%v","-%v"),zero:n}:n&&n.pos&&n.pos.match("%v")?n:e(r)?s.settings.currency.format={pos:r,neg:r.replace("%v","-%v"),zero:r}:r}var s={};s.version="0.4.1",s.settings={currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}};var f=Array.prototype.map,p=Array.isArray,l=Object.prototype.toString,m=s.unformat=s.parse=function(n,r){if(t(n))return i(n,function(n){return m(n,r)});if("number"==typeof(n=n||0))return n;r=r||s.settings.number.decimal;var e=new RegExp("[^0-9-"+r+"]",["g"]),o=parseFloat((""+n).replace(/\((.*)\)/,"-$1").replace(e,"").replace(r,"."));return isNaN(o)?0:o},d=s.toFixed=function(n,r){r=u(r,s.settings.number.precision);var e=Math.pow(10,r);return(Math.round(s.unformat(n)*e)/e).toFixed(r)},g=s.formatNumber=s.format=function(n,r,e,c){if(t(n))return i(n,function(n){return g(n,r,e,c)});n=m(n);var f=a(o(r)?r:{precision:r,thousand:e,decimal:c},s.settings.number),p=u(f.precision),l=n<0?"-":"",h=parseInt(d(Math.abs(n||0),p),10)+"",y=h.length>3?h.length%3:0;return l+(y?h.substr(0,y)+f.thousand:"")+h.substr(y).replace(/(\d{3})(?=\d)/g,"$1"+f.thousand)+(p?f.decimal+d(Math.abs(n),p).split(".")[1]:"")},h=s.formatMoney=function(n,r,e,f,p,l){if(t(n))return i(n,function(n){return h(n,r,e,f,p,l)});n=m(n);var d=a(o(r)?r:{symbol:r,precision:e,thousand:f,decimal:p,format:l},s.settings.currency),y=c(d.format);return(n>0?y.pos:n<0?y.neg:y.zero).replace("%s",d.symbol).replace("%v",g(Math.abs(n),u(d.precision),d.thousand,d.decimal))};s.formatColumn=function(n,r,f,p,l,d){if(!n)return[];var h=a(o(r)?r:{symbol:r,precision:f,thousand:p,decimal:l,format:d},s.settings.currency),y=c(h.format),b=y.pos.indexOf("%s")<y.pos.indexOf("%v"),v=0;return i(i(n,function(n,r){if(t(n))return s.formatColumn(n,h);var e=((n=m(n))>0?y.pos:n<0?y.neg:y.zero).replace("%s",h.symbol).replace("%v",g(Math.abs(n),u(h.precision),h.thousand,h.decimal));return e.length>v&&(v=e.length),e}),function(n,r){return e(n)&&n.length<v?b?n.replace(h.symbol,h.symbol+new Array(v-n.length+1).join(" ")):new Array(v-n.length+1).join(" ")+n:n})},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports.accounting=s):"function"==typeof define&&define.amd?define([],function(){return s}):(s.noConflict=function(r){return function(){/*!
* accounting.js v0.4.2
* Copyright 2014 Open Exchange Rates
*
* Freely distributable under the MIT license.
* Portions of accounting.js are inspired or borrowed from underscore.js
*
* Full details and documentation:
* http://openexchangerates.github.io/accounting.js/
*/return n.accounting=r,s.noConflict=void 0,s}}(n.accounting),n.accounting=s)}(this);jQuery(function(o){if("undefined"==typeof woocommerce_price_slider_params)return!1;function e(){o("input#min_price, input#max_price").hide(),o(".price_slider, .price_label").show();var e=o(".price_slider_amount #min_price").data("min"),r=o(".price_slider_amount #max_price").data("max"),i=o(".price_slider_amount #min_price").val(),c=o(".price_slider_amount #max_price").val();o(".price_slider:not(.ui-slider)").slider({range:!0,animate:!0,min:e,max:r,values:[i,c],create:function(){o(".price_slider_amount #min_price").val(i),o(".price_slider_amount #max_price").val(c),o(document.body).trigger("price_slider_create",[i,c])},slide:function(e,r){o("input#min_price").val(r.values[0]),o("input#max_price").val(r.values[1]),o(document.body).trigger("price_slider_slide",[r.values[0],r.values[1]])},change:function(e,r){o(document.body).trigger("price_slider_change",[r.values[0],r.values[1]])}})}o(document.body).bind("price_slider_create price_slider_slide",function(e,r,i){o(".price_slider_amount span.from").html(accounting.formatMoney(r,{symbol:woocommerce_price_slider_params.currency_format_symbol,decimal:woocommerce_price_slider_params.currency_format_decimal_sep,thousand:woocommerce_price_slider_params.currency_format_thousand_sep,precision:woocommerce_price_slider_params.currency_format_num_decimals,format:woocommerce_price_slider_params.currency_format})),o(".price_slider_amount span.to").html(accounting.formatMoney(i,{symbol:woocommerce_price_slider_params.currency_format_symbol,decimal:woocommerce_price_slider_params.currency_format_decimal_sep,thousand:woocommerce_price_slider_params.currency_format_thousand_sep,precision:woocommerce_price_slider_params.currency_format_num_decimals,format:woocommerce_price_slider_params.currency_format})),o(document.body).trigger("price_slider_updated",[r,i])}),e(),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){e()})});