!function(b,d,r,n){var t=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout(function(){t.trigger("check_variations"),t.trigger("wc_variation_form"),a.loading=!1},100)};t.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").change(),t.data.variationForm.$form.trigger("reset_data")},t.prototype.onReload=function(t){var a=t.data.variationForm;a.variationData=a.$form.data("product_variations"),a.useAjax=!1===a.variationData,a.$form.trigger("check_variations")},t.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},t.prototype.onShow=function(t,a,i){t.preventDefault(),i?(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled"))},t.prototype.onAddToCart=function(t){b(this).is(".disabled")&&(t.preventDefault(),b(this).is(".wc-variation-is-unavailable")?d.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):b(this).is(".wc-variation-selection-needed")&&d.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},t.prototype.onResetDisplayedVariation=function(t){var a=t.data.variationForm;a.$product.find(".product_meta").find(".sku").wc_reset_content(),a.$product.find(".product_weight").wc_reset_content(),a.$product.find(".product_dimensions").wc_reset_content(),a.$form.trigger("reset_image"),a.$singleVariation.slideUp(200).trigger("hide_variation")},t.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},t.prototype.onFindVariation=function(t){var a=t.data.variationForm,i=a.getChosenAttributes(),r=i.data;if(i.count===i.chosenCount)if(a.useAjax)a.xhr&&a.xhr.abort(),a.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),r.product_id=parseInt(a.$form.data("product_id"),10),r.custom_data=a.$form.data("custom_data"),a.xhr=b.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:r,success:function(t){t?a.$form.trigger("found_variation",[t]):(a.$form.trigger("reset_data"),i.chosenCount=0,a.loading||(a.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),a.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){a.$form.unblock()}});else{a.$form.trigger("update_variation_values");var e=a.findMatchingVariations(a.variationData,r).shift();e?a.$form.trigger("found_variation",[e]):(a.$form.trigger("reset_data"),i.chosenCount=0,a.loading||(a.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),a.$form.find(".wc-no-matching-variations").slideDown(200)))}else a.$form.trigger("update_variation_values"),a.$form.trigger("reset_data");a.toggleResetLink(0<i.chosenCount)},t.prototype.onFoundVariation=function(t,a){var i=t.data.variationForm,r=i.$product.find(".product_meta").find(".sku"),e=i.$product.find(".product_weight"),o=i.$product.find(".product_dimensions"),n=i.$singleVariationWrap.find(".quantity"),s=!0,_=!1,c="";a.sku?r.wc_set_content(a.sku):r.wc_reset_content(),a.weight?e.wc_set_content(a.weight_html):e.wc_reset_content(),a.dimensions?o.wc_set_content(b.parseHTML(a.dimensions_html)[0].data):o.wc_reset_content(),i.$form.wc_variations_image_update(a),a.variation_is_visible?(_=m("variation-template"),a.variation_id):_=m("unavailable-variation-template"),c=(c=(c=_({variation:a})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),i.$singleVariation.html(c),i.$form.find('input[name="variation_id"], input.variation_id').val(a.variation_id).change(),"yes"===a.is_sold_individually?(n.find("input.qty").val("1").attr("min","1").attr("max",""),n.hide()):(n.find("input.qty").attr("min",a.min_qty).attr("max",a.max_qty),n.show()),a.is_purchasable&&a.is_in_stock&&a.variation_is_visible||(s=!1),b.trim(i.$singleVariation.text())?i.$singleVariation.slideDown(200).trigger("show_variation",[a,s]):i.$singleVariation.show().trigger("show_variation",[a,s])},t.prototype.onChange=function(t){var a=t.data.variationForm;a.$form.find('input[name="variation_id"], input.variation_id').val("").change(),a.$form.find(".wc-no-matching-variations").remove(),a.useAjax?a.$form.trigger("check_variations"):(a.$form.trigger("woocommerce_variation_select_change"),a.$form.trigger("check_variations"),b(this).blur()),a.$form.trigger("woocommerce_variation_has_changed")},t.prototype.addSlashes=function(t){return t=(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},t.prototype.onUpdateAttributes=function(t){var p=t.data.variationForm,w=p.getChosenAttributes().data;p.useAjax||(p.$attributeFields.each(function(t,a){var i,r=b(a),e=r.data("attribute_name")||r.attr("name"),o=b(a).data("show_option_none"),n=":gt(0)",s=b("<select/>"),_=r.val()||"",c=!0;if(!r.data("attribute_html")){var d=r.clone();d.find("option").removeAttr("disabled attached").removeAttr("selected"),r.data("attribute_options",d.find("option"+n).get()),r.data("attribute_html",d.html())}s.html(r.data("attribute_html"));var m=b.extend(!0,{},w);m[e]="";var v=p.findMatchingVariations(p.variationData,m);for(var l in v)if("undefined"!=typeof v[l]){var g=v[l].attributes;for(var f in g)if(g.hasOwnProperty(f)){var u=g[f],h="";f===e&&(v[l].variation_is_active&&(h="enabled"),u?(u=b("<div/>").html(u).text(),s.find('option[value="'+p.addSlashes(u)+'"]').addClass("attached "+h)):s.find("option:gt(0)").addClass("attached "+h))}}i=s.find("option.attached").length,!_||0!==i&&0!==s.find('option.attached.enabled[value="'+p.addSlashes(_)+'"]').length||(c=!1),0<i&&_&&c&&"no"===o&&(s.find("option:first").remove(),n=""),s.find("option"+n+":not(.attached)").remove(),r.html(s.html()),r.find("option"+n+":not(.enabled)").prop("disabled",!0),_?c?r.val(_):r.val("").change():r.val("")}),p.$form.trigger("woocommerce_update_variation_values"))},t.prototype.getChosenAttributes=function(){var i={},r=0,e=0;return this.$attributeFields.each(function(){var t=b(this).data("attribute_name")||b(this).attr("name"),a=b(this).val()||"";0<a.length&&e++,r++,i[t]=a}),{count:r,chosenCount:e,data:i}},t.prototype.findMatchingVariations=function(t,a){for(var i=[],r=0;r<t.length;r++){var e=t[r];this.isMatch(e.attributes,a)&&i.push(e)}return i},t.prototype.isMatch=function(t,a){var i=!0;for(var r in t)if(t.hasOwnProperty(r)){var e=t[r],o=a[r];e!==n&&o!==n&&0!==e.length&&0!==o.length&&e!==o&&(i=!1)}return i},t.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},b.fn.wc_variation_form=function(){return new t(this),this},b.fn.wc_set_content=function(t){n===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},b.fn.wc_reset_content=function(){n!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},b.fn.wc_set_variation_attr=function(t,a){n===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},b.fn.wc_reset_variation_attr=function(t){n!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},b.fn.wc_maybe_trigger_slide_position_reset=function(t){var a=b(this),i=a.closest(".product").find(".images"),r=!1,e=t&&t.image_id?t.image_id:"";a.attr("current-image")!==e&&(r=!0),a.attr("current-image",e),r&&i.trigger("woocommerce_gallery_reset_slide_position")},b.fn.wc_variations_image_update=function(t){var a=this,i=a.closest(".product"),r=i.find(".images"),e=i.find(".flex-control-nav"),o=e.find("li:eq(0) img"),n=r.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),s=n.find(".wp-post-image"),_=n.find("a").eq(0);if(t&&t.image&&t.image.src&&1<t.image.src.length){0<e.find('li img[data-o_src="'+t.image.gallery_thumbnail_src+'"]').length&&a.wc_variations_image_reset();var c=e.find('li img[src="'+t.image.gallery_thumbnail_src+'"]');if(0<c.length)return c.trigger("click"),a.attr("current-image",t.image_id),void d.setTimeout(function(){b(d).trigger("resize"),r.trigger("woocommerce_gallery_init_zoom")},20);s.wc_set_variation_attr("src",t.image.src),s.wc_set_variation_attr("height",t.image.src_h),s.wc_set_variation_attr("width",t.image.src_w),s.wc_set_variation_attr("srcset",t.image.srcset),s.wc_set_variation_attr("sizes",t.image.sizes),s.wc_set_variation_attr("title",t.image.title),s.wc_set_variation_attr("data-caption",t.image.caption),s.wc_set_variation_attr("alt",t.image.alt),s.wc_set_variation_attr("data-src",t.image.full_src),s.wc_set_variation_attr("data-large_image",t.image.full_src),s.wc_set_variation_attr("data-large_image_width",t.image.full_src_w),s.wc_set_variation_attr("data-large_image_height",t.image.full_src_h),n.wc_set_variation_attr("data-thumb",t.image.src),o.wc_set_variation_attr("src",t.image.gallery_thumbnail_src),_.wc_set_variation_attr("href",t.image.full_src)}else a.wc_variations_image_reset();d.setTimeout(function(){b(d).trigger("resize"),a.wc_maybe_trigger_slide_position_reset(t),r.trigger("woocommerce_gallery_init_zoom")},20)},b.fn.wc_variations_image_reset=function(){var t=this.closest(".product"),a=t.find(".images"),i=t.find(".flex-control-nav").find("li:eq(0) img"),r=a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),e=r.find(".wp-post-image"),o=r.find("a").eq(0);e.wc_reset_variation_attr("src"),e.wc_reset_variation_attr("width"),e.wc_reset_variation_attr("height"),e.wc_reset_variation_attr("srcset"),e.wc_reset_variation_attr("sizes"),e.wc_reset_variation_attr("title"),e.wc_reset_variation_attr("data-caption"),e.wc_reset_variation_attr("alt"),e.wc_reset_variation_attr("data-src"),e.wc_reset_variation_attr("data-large_image"),e.wc_reset_variation_attr("data-large_image_width"),e.wc_reset_variation_attr("data-large_image_height"),r.wc_reset_variation_attr("data-thumb"),i.wc_reset_variation_attr("src"),o.wc_reset_variation_attr("href")},b(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&b(".variations_form").each(function(){b(this).wc_variation_form()})});var m=function(t){var a=r.getElementById("tmpl-"+t).textContent,i=!1;return(i=(i=(i=i||/<#\s?data\./.test(a))||/{{{?\s?data\.(?!variation\.).+}}}?/.test(a))||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(a))?wp.template(t):function(t){var o=t.variation||{};return a.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,function(t,a,i,r){if(a.length!==r.length)return"";var e=o[i]||"";return 2===a.length?d.escape(e):e})}}}(jQuery,window,document);function ivory_search_analytics(s,e,i){try{var t="function"==typeof __gaTracker?__gaTracker:"function"==typeof ga&&ga,a="function"==typeof gtag&&gtag;if(!1!==a)return void a("event","Ivory Search - "+s,{event_label:e,event_category:i});!1!==t&&t("send",{hitType:"event",eventCategory:i,eventAction:"Ivory Search - "+s,eventLabel:e})}catch(s){}}!function(s){"use strict";s(window).on("load",function(){(s(".is-menu a, .is-menu a svg").on("click",function(e){if(e.stopPropagation(),e.preventDefault(),"static"===s(this).closest("ul").css("position")&&s(this).closest("ul").css("position","relative"),s(this).closest(".is-menu-wrapper").length&&(s(this).closest(".is-menu").hasClass("sliding")||s(this).closest(".is-menu").hasClass("full-width-menu"))&&s(this).closest(".is-menu-wrapper").addClass("is-expanded"),s(this).closest(".is-menu").hasClass("sliding")||s(this).closest(".is-menu").hasClass("full-width-menu")){s(this).closest(".is-menu").find("button.is-search-submit").hide();var i=s(this).closest("li.is-menu").outerHeight();i/=2,s(this).closest(".is-menu").find("form").css({top:i-18+"px"}),s(this).closest(".is-menu").find(".search-close").css({top:i-10+"px"})}if(s(this).closest(".is-menu").hasClass("is-dropdown"))s(this).closest(".is-menu").find("form").fadeIn();else if(s(this).closest(".is-menu").hasClass("sliding"))s(this).closest(".is-menu").find("form").animate({width:"310"},function(){s(this).closest(".is-menu").addClass("open"),s(this).closest(".is-menu").find("button.is-search-submit").show()});else if(s(this).closest(".is-menu").hasClass("full-width-menu")){var t=s(this).closest("ul").outerWidth();if(s(this).closest(".is-menu-wrapper").hasClass("is-expanded"))t=s(window).width(),s(this).closest(".is-menu").find("form").css("right","-5px"),s(this).closest(".is-menu").find(".search-close").hide();else{var a=s(this).offset();if(!s(this).closest(".is-menu").hasClass("is-first")&&a.left<t){t=a.left;var n=s(this).closest("li").outerWidth();n>t&&(t=n)}}s(this).closest(".is-menu").find("form").animate({width:t+"px"},function(){s(this).closest(".is-menu").addClass("active-search"),s(this).closest(".is-menu").addClass("open"),s(this).closest(".is-menu").find("button.is-search-submit").show()})}else s(this).closest(".is-menu").hasClass("popup")&&(s("#is-popup-wrapper").fadeIn(),s('#is-popup-wrapper form input[type="text"], #is-popup-wrapper form input[type="search"]').focus());(s(this).closest(".is-menu").hasClass("sliding")||s(this).closest(".is-menu").hasClass("full-width-menu"))&&s(this).closest(".is-menu").find('form input[type="search"], form input[type="text"]').focus(),s(this).closest(".is-menu").find('form input[type="search"], form input[type="text"]').focus()}),s("#is-popup-wrapper").on("click",function(e){s(e.target).closest("form").length||s("#is-popup-wrapper, .is-ajax-search-result, .is-ajax-search-details").fadeOut()}),"undefined"!=typeof IvorySearchVars&&void 0!==IvorySearchVars.is_analytics_enabled)&&(void 0!==IvorySearchVars.is_search&&(IvorySearchVars.is_search,1)&&ivory_search_analytics(void 0!==IvorySearchVars.is_id?IvorySearchVars.is_id:"Default",void 0!==IvorySearchVars.is_label?IvorySearchVars.is_label:"",void 0!==IvorySearchVars.is_cat?IvorySearchVars.is_cat:""));window.matchMedia("(max-width: 1024px)").matches&&s(".is-menu a").attr("href",""),s(window).resize(function(){window.matchMedia("(max-width: 1024px)").matches&&s(".is-menu a").attr("href","")})}),s(document).keyup(function(e){27===e.keyCode&&s("#is-popup-wrapper, .is-ajax-search-result, .is-ajax-search-details").hide()}),s('.is-menu form input[type="search"], .is-menu form input[type="text"]').on("click",function(s){return s.stopPropagation(),!1}),s("form.is-search-form, form.search-form").on("mouseover",function(e){s(this).next(".is-link-container").length&&s(this).append(s(this).next(".is-link-container").remove())}),s(window).click(function(e){0===e.button&&0===s(e.target).closest(".is-search-input").length&&0===s(e.target).closest(".is-search-submit").length&&0===s(e.target).closest(".is-ajax-search-result").length&&0===s(e.target).closest(".is-ajax-search-details").length&&(s(".is-menu").hasClass("open")?(s(".is-menu button.is-search-submit").hide(),s(".is-menu form").animate({width:"0"},400,function(){s(".is-menu").removeClass("active-search"),s(".is-menu").removeClass("open"),s(".is-menu-wrapper").removeClass("is-expanded")}),s(".is-ajax-search-result, .is-ajax-search-details").hide()):s(".is-menu").hasClass("is-dropdown")&&(s(".is-menu form").fadeOut(),s(".is-ajax-search-result, .is-ajax-search-details").hide()))})}(jQuery);