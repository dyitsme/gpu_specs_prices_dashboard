!function(r){"use strict";r.fn.pt_plus_animated_svg=function(){return this.each(function(){var t=r(this),e=t.data("id"),i=t.data("duration"),n=t.data("type"),o=t.data("stroke"),l=t.data("fill_color");new Vivus(e,{type:n,duration:i,forceRender:!0,start:"inViewport",onReady:function(t){var e=t.el.childNodes;if(""!=o)for(var i=0;i<e.length;i++){r(e[i]).attr("fill",l),r(e[i]).attr("stroke",o);var n,s=e[i].children;if(null!=s)for(var a=0;a<s.length;a++)r(s[a]).attr("fill",l),r(s[a]).attr("stroke",o)}}})})},r(window).load(function(){setTimeout(function(){r(".pt_plus_animated_svg").pt_plus_animated_svg()},100)})}(jQuery),function(i){"use strict";i(document).ready(function(){i(".pt_plus_countdown").each(function(){var t,e=i(this).attr("data-timer").split("-");i(this).downCount({date:e[1]+"/"+e[0]+"/"+e[2]+" 12:00:00",offset:1})})})}(jQuery),function(i){"use strict";i(document).ready(function(){var t=document.querySelectorAll(".pt-plus-piechart");Array.prototype.slice.apply(t).forEach(function(t){var e=jQuery(t);new Waypoint({element:t,handler:function(){e.hasClass("done-progress")||(setTimeout(function(){e.circleProgress({value:e.data("value"),emptyFill:e.data("emptyfill"),startAngle:-Math.PI/4*2})},800),e.addClass("done-progress"))},offset:"80%"})})}),i(window).on("load resize scroll",function(){i(".pt-plus-peicharts").each(function(){var t=i("canvas",this).outerHeight(),e=i("canvas",this).outerWidth();i(".pt-plus-circle",this).css("height",t+"px"),i(".pt-plus-circle",this).css("width",e+"px")})})}(jQuery),jQuery(document).ready(function(a){"use strict";var o=2500,l=3800,r=l-3e3,s=50,c=150,d=500,p=d+800,t=600,e=1500;function i(){n(a(".pt-plus-cd-headline.letters").find("b")),f(a(".pt-plus-cd-headline"))}function n(t){t.each(function(){var t,e=a(this),i=e.text().split(""),n=e.hasClass("is-visible");for(t in i)0<e.parents(".rotate-2").length&&(i[t]="<em>"+i[t]+"</em>"),i[t]=n?'<i class="in">'+i[t]+"</i>":"<i>"+i[t]+"</i>";var s=i.join("");e.html(s).css("opacity",1)})}function f(t){var s=o;t.each(function(){var t=a(this),e,i,i,n;t.hasClass("loading-bar")?(s=l,setTimeout(function(){t.find(".cd-words-wrapper").addClass("is-loading")},r)):t.hasClass("clip")?(i=(e=t.find(".cd-words-wrapper")).width()+10,e.css("width",i)):t.hasClass("type")||(i=t.find(".cd-words-wrapper b"),n=0,i.each(function(){var t=a(this).width();n<t&&(n=t)}),t.find(".cd-words-wrapper").css("width",n)),setTimeout(function(){u(t.find(".is-visible").eq(0))},s)})}function u(t){var e=v(t),i,n;t.parents(".pt-plus-cd-headline").hasClass("type")?((i=t.parent(".cd-words-wrapper")).addClass("selected").removeClass("waiting"),setTimeout(function(){i.removeClass("selected"),t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},d),setTimeout(function(){h(e,c)},p)):t.parents(".pt-plus-cd-headline").hasClass("letters")?(n=t.children("i").length>=e.children("i").length,m(t.find("i").eq(0),t,n,s),w(e.find("i").eq(0),e,n,s)):t.parents(".pt-plus-cd-headline").hasClass("loading-bar")?(t.parents(".cd-words-wrapper").removeClass("is-loading"),g(t,e),setTimeout(function(){u(e)},l),setTimeout(function(){t.parents(".cd-words-wrapper").addClass("is-loading")},r)):(g(t,e),setTimeout(function(){u(e)},o))}function h(t,e){t.parents(".pt-plus-cd-headline").hasClass("type")&&(w(t.find("i").eq(0),t,!1,e),t.addClass("is-visible").removeClass("is-hidden"))}function m(t,e,i,n){var s;t.removeClass("in").addClass("out"),t.is(":last-child")?i&&setTimeout(function(){u(v(e))},o):setTimeout(function(){m(t.next(),e,i,n)},n),t.is(":last-child")&&a("html").hasClass("no-csstransitions")&&(s=v(e),g(e,s))}function w(t,e,i,n){t.addClass("in").removeClass("out"),t.is(":last-child")?(e.parents(".pt-plus-cd-headline").hasClass("type")&&setTimeout(function(){e.parents(".cd-words-wrapper").addClass("waiting")},200),i||setTimeout(function(){u(e)},o)):setTimeout(function(){w(t.next(),e,i,n)},n)}function v(t){return t.is(":last-child")?t.parent().children().eq(0):t.next()}function y(t){return t.is(":first-child")?t.parent().children().last():t.prev()}function g(t,e){t.removeClass("is-visible").addClass("is-hidden"),e.removeClass("is-hidden").addClass("is-visible")}i()}),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e:t.fluidvids=e()}(this,function(){"use strict";function i(t){return new RegExp("^(https?:)?//(?:"+o.players.join("|")+").*$","i").test(t)}function n(t,e){return parseInt(t,10)/parseInt(e,10)*100+"%"}function s(t){var e;!i(t.src)&&!i(t.data)||t.getAttribute("data-fluidvids")||(e=document.createElement("div"),t.parentNode.insertBefore(e,t),t.className+=(t.className?" ":"")+"fluidvids-item",t.setAttribute("data-fluidvids","loaded"),e.className+="fluidvids",e.style.paddingTop=n(t.height,t.width),e.appendChild(t))}function a(){var t=document.createElement("div");t.innerHTML="<p>x</p><style>"+e+"</style>",l.appendChild(t.childNodes[1])}var o={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},e=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),l=document.head||document.getElementsByTagName("head")[0];return o.render=function(){for(var t=document.querySelectorAll(o.selector.join()),e=t.length;e--;)s(t[e])},o.init=function(t){for(var e in t)o[e]=t[e];o.render(),a()},o}),function(t){"use strict";var e=function(){fluidvids.init({selector:["iframe:not(.pt-plus-bg-video)"],players:["www.youtube.com","player.vimeo.com"]})};t(window).on("load",e),t("body").on("post-load",e)}(jQuery),function(n){"use strict";function i(t){var e=t.find("video"),i=t.find(".ts-video-lazyload"),t;t.is("[data-grow]")&&t.css("max-width","none"),t.find(".ts-video-title, .ts-video-description, .ts-video-play-btn, .ts-video-thumbnail").addClass("ts-video-hidden"),i.length&&(t=i.data(),n("<iframe></iframe>").attr(t).insertAfter(i)),e.length&&e.get(0).play()}function t(){n(".ts-video-wrapper[data-inview-lazyload]").one("inview",function(t,e){e&&i(n(this))})}n(document).on("click",'[data-mode="lazyload"] .ts-video-play-btn',function(t){t.preventDefault(),i(n(this).closest(".ts-video-wrapper"))}),t(),n(document).ajaxComplete(function(){t()}),n(document).on("lity:open",function(){}),n(document).on("lity:ready",function(t,e){var i=e.element(),e=i.find("video"),i=i.find(".ts-video-lazyload");n(".lity-wrap").attr("id","ts-video"),i.length&&n("<iframe></iframe>").attr(i.data()).insertAfter(i),e.length&&e.get(0).play()}),n(document).on("lity:close",function(t,e){e.element().find("video").length&&e.element().find("video").get(0).pause(),n(".ts-video-lity-container .pt-plus-video-frame").remove(),n("[data-hidden-fixed]").removeClass("ts-video-hidden")}),n(document).ready(function(){n(".ts-video-lightbox-link").off()})}(jQuery),function(o){"use strict";o(document).ready(function(){o(".pt_plus_cf7_styles").each(function(){o("body").addClass("pt_plus_cf7_form");var e=o(this).data("style"),i=o(this).data("style-radio-checkbox"),n="",s="";"style-3"==e&&(n='<svg class="graphic graphic--style-3" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" stroke-width="1"></path></svg>'),"style-11"==e&&(s='<svg class="graphic graphic--style-11" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none"><path d="m0,0l404,0l0,77l-404,0l0,-77z" stroke-width="1.5"></path></svg>');var a=1;o(".wpcf7-form-control.wpcf7-text, .wpcf7-form-control.wpcf7-number, .wpcf7-form-control.wpcf7-date, .wpcf7-form-control.wpcf7-textarea, .wpcf7-form-control.wpcf7-select",this).each(function(){var t=o(this).attr("placeholder");o(this).hasClass("wpcf7-select")&&(t=o("option:first-child",this).text()),o(this).parents(".wpcf7-form-control-wrap").append('<label class="input__label input__label--'+e+'" for="'+e+"-cf-input-"+a+'">'+s+'<span class="input__label-content input__label-content--'+e+'" data-content="'+t+'">'+t+"</span></label>"+n),o(this).attr("placeholder",""),o(this).attr("id",e+"-cf-input-"+a),o(this).addClass("input__field input__field--"+e),o(this).parents(".wpcf7-form-control-wrap").addClass("input--"+e),a++}),o(".wpcf7-form-control.wpcf7-select",this).each(function(){o(this).parents(".wpcf7-form-control-wrap").addClass("input--filled")}),o(".wpcf7-form-control.wpcf7-radio .wpcf7-list-item",this).each(function(){var t=o(this).find(".wpcf7-list-item-label").text();o(this).find(".wpcf7-list-item-label").remove();var e=o('input[type="radio"]',this);e.parent().is("label")&&e.unwrap();var e=o(this).find('input[type="radio"]').attr("name");o(this).append('<label class="input__radio_btn" for="'+e+a+'">'+t+'<div class="toggle-button__icon"></div></label>'),o(this).find('input[type="radio"]').attr("id",e+a),o(this).find('input[type="radio"]').addClass("input-radio-check"),o(this).parents(".wpcf7-form-control-wrap").addClass(i),a++}),o(".wpcf7-form-control.wpcf7-checkbox .wpcf7-list-item",this).each(function(){var t=o(this).find(".wpcf7-list-item-label").text();o(this).find(".wpcf7-list-item-label").remove();var e=o('input[type="checkbox"]',this);e.parent().is("label")&&e.unwrap(),o(this).append('<label class="input__checkbox_btn" for="'+i+a+'">'+t+'<div class="toggle-button__icon"></div></label>'),o(this).find('input[type="checkbox"]').attr("id",i+a),o(this).find('input[type="checkbox"]').addClass("input-checkbox-check"),o(this).parents(".wpcf7-form-control-wrap").addClass(i),a++}),o(".wpcf7-form-control-wrap input[type='file']",this).each(function(){var t=o(this).attr("name");o(this).attr("id",t+a),o(this).attr("data-multiple-caption","{count} files selected"),o(this).parents(".wpcf7-form-control-wrap").append('<label class="input__file_btn" for="'+t+a+'"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg><span>Choose a file…</span></label>'),o(this).parents(".wpcf7-form-control-wrap").addClass("cf7-style-file"),a++})}),o("input.wpcf7-form-control,textarea.wpcf7-form-control").focus(function(){o(this).parents(".wpcf7-form-control-wrap").addClass("input--filled")}),o("input.wpcf7-form-control,textarea.wpcf7-form-control").blur(function(){o(this).val()||o(this).parents(".wpcf7-form-control-wrap").removeClass("input--filled")}),o(".wpcf7-form-control-wrap select").on("change",function(){var t;""!=o(this).find(":selected").val()&&o(this).parents(".wpcf7-form-control-wrap").addClass("input--filled")}),o(".wpcf7-form-control.wpcf7-textarea.input__field--style-9").each(function(){var t=o(this).outerHeight();o("head").append("<style >.pt_plus_cf7_styles .wpcf7-textarea.input__field--style-9 + .input__label--style-9::before{height:"+t+"px;}</style>")}),o(".pt_plus_cf7_styles .wpcf7-form-control-wrap.input--style-12").each(function(){var t=o(this).outerHeight();o("head").append("<style >.pt_plus_cf7_form .pt_plus_cf7_styles .wpcf7-textarea.input__field--style-12{height:"+t+"px;}</style>")}),o(window).load(function(){o(".pt_plus_cf7_styles").find(".minimal-form-input").removeClass("minimal-form-input")})}),o(document).on("load resize",function(){o(".wpcf7-form-control.wpcf7-textarea.input__field--style-9").each(function(){var t=o(this).outerHeight();o("head").append("<style >.pt_plus_cf7_styles .wpcf7-textarea.input__field--style-9 + .input__label--style-9::before{height:"+t+"px;}</style>")}),o(".pt_plus_cf7_styles .wpcf7-form-control-wrap.input--style-12").each(function(){var t=o(this).outerHeight();o("head").append("<style >.pt_plus_cf7_form .pt_plus_cf7_styles .wpcf7-textarea.input__field--style-12{height:"+t+"px;}</style>")})})}(jQuery),function(t,e,i){var t=t.querySelectorAll(".wpcf7-form-control.wpcf7-file");Array.prototype.forEach.call(t,function(i){var n="",s="",a=0;i.addEventListener("change",function(t){n=i.nextElementSibling,0==a&&(s=n.innerHTML);var e="",e;(e=this.files&&1<this.files.length?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):t.target.value.split("\\").pop())?n.querySelector("span").innerHTML=e:n.innerHTML=s,a++}),i.addEventListener("focus",function(){i.classList.add("has-focus")}),i.addEventListener("blur",function(){i.classList.remove("has-focus")})})}(document,window,0),function(l){l.fn.pt_plus_VideoBgInit=function(){return this.each(function(){var t=l(this),e=1.778,i=t.parent().width(),n=t.parent().height(),s,a,o=function(){a=i/e<n?(s=Math.ceil(n*e),n):(s=i,Math.ceil(i/e)),t.css({width:s,height:a})};o(),l(window).on("resize",o)})},l(window).load(function(){var t,e,i;setTimeout(function(){l(".columns-video-bg video, .columns-video-bg .columns-bg-frame").pt_plus_VideoBgInit(),l(".self-hosted-videos").each(function(){var t;l(this)[0].play()})},100),0<l(".columns-youtube-bg").length&&((t=document.createElement("script")).src="//www.youtube.com/iframe_api",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e),i={},window.onYouTubeIframeAPIReady=function(){l(".columns-youtube-bg iframe").each(function(){var e=l(this),t=e.attr("id");i[t]=new YT.Player(t,{playerVars:{autoplay:1},events:{onReady:function(t){e.data("muted")&&"1"==e.data("muted")&&t.target.mute(),t.target.playVideo()}}})})}),0<l(".columns-vimeo-bg").length&&l(document).ready(function(){l(".columns-vimeo-bg iframe").each(function(){var i=l(this);function t(t){var e;"ready"===JSON.parse(t.data).event&&(i[0].contentWindow.postMessage('{"method":"play", "value":1}',"*"),i.data("muted")&&"1"==i.data("muted")&&i[0].contentWindow.postMessage('{"method":"setVolume", "value":0}',"*"))}window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent("onmessage",t,!1)})})})}(jQuery);