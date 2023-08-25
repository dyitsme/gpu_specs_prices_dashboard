"use strict";function wooco_init(o,t=null){var e,c=wooco_container(o.attr("data-id")),c=o.closest(c);wooco_check_ready(c),wooco_calc_price(c),wooco_save_ids(c),null!==t&&"on_select"!==t&&t!==wooco_vars.show_alert||wooco_show_alert(c)}function wooco_check_ready(o){var t=o.find(".wooco-components"),e=o.find(".single_add_to_cart_button"),c=o.find(".wooco-alert"),r=!1,s="",a=!1,n=!1,l=!1,i=new Array,d=t.attr("data-same"),p=0,_=parseFloat(t.attr("data-min")),o=parseFloat(t.attr("data-max"));t.find(".wooco_component_product").each(function(){var o=jQuery(this),t=o.find(".wooco-checkbox"),e=parseInt(o.attr("data-id")),c=parseFloat(o.attr("data-qty")),a=o.attr("data-required");t.length&&!t.prop("checked")||(0<e&&(p+=c),"no"===d&&(i.includes(e)?l=!0:0<e&&i.push(e)),(0===e&&0<c||"yes"===a&&e<=0)&&(r=!0,""===s&&(s=o.attr("data-name"))))}),p<_&&(a=!0),o<p&&(n=!0),r||a||n||l?(e.addClass("wooco-disabled"),c.addClass("alert-active"),r?c.addClass("alert-selection").html(wooco_vars.alert_selection.replace("[name]","<strong>"+s+"</strong>")):a?c.addClass("alert-min").html(wooco_vars.alert_min.replace("[min]",_)):n?c.addClass("alert-max").html(wooco_vars.alert_max.replace("[max]",o)):l&&c.addClass("alert-same").html(wooco_vars.alert_same)):(c.removeClass("alert-active alert-selection alert-min alert-max").html(""),e.removeClass("wooco-disabled"))}function wooco_show_alert(o){var o=o.find(".wooco-alert");o.hasClass("alert-active")?o.slideDown():o.slideUp()}function wooco_init_selector(){"ddslick"===wooco_vars.selector?jQuery(".wooco_component_product_select").each(function(){var o=jQuery(this),c=o.closest(".wooco_component_product_selection"),a=o.closest(".wooco_component_product"),r=o.closest(".wooco-wrap");c.data("select",0),o.ddslick({width:"100%",onSelected:function(o){var t=c.data("select"),e;wooco_selected(jQuery(o.original[0].children[o.selectedIndex]),c,a),wooco_init(r,0<t?"on_select":"selected"),c.data("select",t+1)}})}):"select2"===wooco_vars.selector?(jQuery(".wooco_component_product_select").each(function(){var o=jQuery(this),t=o.closest(".wooco_component_product_selection"),e=o.closest(".wooco_component_product"),c=o.closest(".wooco-wrap"),a;""!==o.val()&&(wooco_selected(jQuery("option:selected",this),t,e),wooco_init(c,"selected")),o.select2({templateResult:wooco_select2_state,width:"100%",containerCssClass:"wpc-select2-container",dropdownCssClass:"wpc-select2-dropdown"})}),jQuery(".wooco_component_product_select").on("select2:select",function(o){var t=jQuery(this),e=t.closest(".wooco_component_product_selection"),c=t.closest(".wooco_component_product"),t=t.closest(".wooco-wrap"),a;wooco_selected(jQuery(o.params.data.element),e,c),wooco_init(t,"on_select")})):(jQuery(".wooco_component_product_select").each(function(){var o=jQuery(this),t=o.closest(".wooco_component_product_selection"),e=o.closest(".wooco_component_product"),o=o.closest(".wooco-wrap"),c;wooco_selected(jQuery("option:selected",this),t,e),wooco_init(o,"selected")}),jQuery("body").on("change",".wooco_component_product_select",function(){var o=jQuery(this),t=o.closest(".wooco_component_product_selection"),e=o.closest(".wooco_component_product"),o=o.closest(".wooco-wrap"),c;wooco_selected(jQuery("option:selected",this),t,e),wooco_init(o,"on_select")}))}function wooco_selected(o,t,e){var c=o.attr("value"),a=o.attr("data-pid"),r=o.attr("data-price"),s=o.attr("data-link"),n=o.attr("data-imagesrc"),l=o.attr("data-price-html");e.attr("data-id",c),e.attr("data-price",r),e.attr("data-price-html",l),"0"===a&&(a=c),"no"!==wooco_vars.product_link&&(t.find(".wooco_component_product_link").remove(),""!==s&&("yes_popup"===wooco_vars.product_link?t.append('<a class="wooco_component_product_link woosq-btn" data-id="'+a+'" href="'+s+'" target="_blank"> &nbsp; </a>'):t.append('<a class="wooco_component_product_link" href="'+s+'" target="_blank"> &nbsp; </a>'))),e.find(".wooco_component_product_image").html('<img src="'+n+'"/>'),e.find(".wooco_component_product_price").html(l),jQuery(document).trigger("wooco_selected",[o,t,e])}function wooco_select2_state(o){if(!o.id)return o.text;var t=new Object,t;return t=""!==jQuery(o.element).attr("data-imagesrc")?jQuery('<span class="image"><img src="'+jQuery(o.element).attr("data-imagesrc")+'"/></span><span class="info"><span>'+o.text+"</span> <span>"+jQuery(o.element).attr("data-description")+"</span></span>"):jQuery('<span class="info"><span>'+o.text+"</span> <span>"+jQuery(o.element).attr("data-description")+"</span></span>")}function wooco_calc_price(o){var t=o.find(".wooco-components"),e=o.find(".wooco-total"),c=0;"only"===t.attr("data-pricing")&&""!==t.attr("data-price")?c=Number(t.attr("data-price")):(t.find(".wooco_component_product").each(function(){var o=jQuery(this),t=o.find(".wooco-checkbox");t.length&&!t.prop("checked")||0<o.attr("data-price")&&0<o.attr("data-qty")&&(c+=Number(o.attr("data-price"))*Number(o.attr("data-qty")))}),0<t.attr("data-percent")&&t.attr("data-percent")<100&&(c=c*(100-Number(t.attr("data-percent")))/100),"include"===t.attr("data-pricing")&&(c+=Number(t.attr("data-price"))));var a='<span class="woocommerce-Price-amount amount">',r=wooco_format_money(c,wooco_vars.price_decimals,"",wooco_vars.price_thousand_separator,wooco_vars.price_decimal_separator),t;switch(wooco_vars.price_format){case"%1$s%2$s":a+='<span class="woocommerce-Price-currencySymbol">'+wooco_vars.currency_symbol+"</span>"+r;break;case"%1$s %2$s":a+='<span class="woocommerce-Price-currencySymbol">'+wooco_vars.currency_symbol+"</span> "+r;break;case"%2$s%1$s":a+=r+'<span class="woocommerce-Price-currencySymbol">'+wooco_vars.currency_symbol+"</span>";break;case"%2$s %1$s":a+=r+' <span class="woocommerce-Price-currencySymbol">'+wooco_vars.currency_symbol+"</span>";break;default:a+='<span class="woocommerce-Price-currencySymbol">'+wooco_vars.currency_symbol+"</span> "+r}a+="</span>","only"!==t.attr("data-pricing")&&0<parseFloat(t.attr("data-percent"))&&parseFloat(t.attr("data-percent"))<100&&(a+=' <small class="woocommerce-price-suffix">'+wooco_vars.saved_text.replace("[d]",wooco_round(parseFloat(t.attr("data-percent")))+"%")+"</small>"),e.html(wooco_vars.total_text+" "+a).slideDown(),"no"!==wooco_vars.change_price&&"only"!==t.attr("data-pricing")&&(t=".summary > .price",null!==wooco_vars.price_selector&&""!==wooco_vars.price_selector&&(t=wooco_vars.price_selector),o.find(t).html(a)),jQuery(document).trigger("wooco_calc_price",[c,r,a])}function wooco_save_ids(o){var t=o.find(".wooco-components"),o=o.find(".wooco-ids"),e=Array();t.find(".wooco_component_product").each(function(){var o=jQuery(this),t=o.find(".wooco-checkbox");t.length&&!t.prop("checked")||0<o.attr("data-id")&&0<o.attr("data-qty")&&e.push(o.attr("data-id")+"/"+o.attr("data-qty")+"/"+o.attr("data-new-price"))}),o.val(e.join(","))}function wooco_round(o){return+(Math.round(o+"e+2")+"e-2")}function wooco_decimal_places(o){var o=(""+o).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return o?Math.max(0,(o[1]?o[1].length:0)-(o[2]?+o[2]:0)):0}function wooco_format_money(o,t,e,c,a){o=o||0,t=isNaN(t=Math.abs(t))?2:t,e=void 0!==e?e:"$",c=c||",",a=a||".";var r=o<0?"-":"",s=parseInt(o=Math.abs(+o||0).toFixed(t),10)+"",n=0;return e+r+((n=3<s.length?s.length%3:n)?s.substr(0,n)+c:"")+s.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+c)+(t?a+Math.abs(o-s).toFixed(t).slice(2):"")}function wooco_container(o){return""!=wooco_vars.container_selector&&jQuery(wooco_vars.container_selector).length?wooco_vars.container_selector:jQuery(".wooco-wrap-"+o).closest(".elementor-product-composite").length?".elementor-product-composite":jQuery(".wooco-wrap-"+o).closest("#product-"+o).length?"#product-"+o:jQuery(".wooco-wrap-"+o).closest(".product.post-"+o).length?".product.post-"+o:jQuery(".wooco-wrap-"+o).closest("div.product-type-composite").length?"div.product-type-composite":"body.single-product"}!function(r){r(document).ready(function(){r(".wooco-wrap").length&&r(".wooco-wrap").each(function(){wooco_init_selector(),wooco_init(r(this),"load")})}),r(document).on("woosq_loaded",function(){wooco_init_selector(),wooco_init(r("#woosq-popup .wooco-wrap"))}),r(document).on("click touch",".single_add_to_cart_button",function(o){r(this).hasClass("wooco-disabled")&&("change"===wooco_vars.show_alert&&wooco_show_alert(r(this).closest(".wooco-wrap")),o.preventDefault())}),r(document).on("click touch",".wooco-plus, .wooco-minus",function(){var o=r(this).closest(".wooco-qty").find(".qty"),t=parseFloat(o.val()),e=parseFloat(o.attr("max")),c=parseFloat(o.attr("min")),a=o.attr("step");t&&""!==t&&"NaN"!==t||(t=0),""!==e&&"NaN"!==e||(e=""),""!==c&&"NaN"!==c||(c=0),a="any"===a||""===a||void 0===a||"NaN"===parseFloat(a)?1:parseFloat(a),r(this).is(".wooco-plus")?e&&(e==t||e<t)?o.val(e):o.val((t+a).toFixed(wooco_decimal_places(a))):c&&(c==t||t<c)?o.val(c):0<t&&o.val((t-a).toFixed(wooco_decimal_places(a))),o.trigger("change")}),r(document).on("keyup change",".wooco_component_product_qty_input",function(){var o=r(this),t=o.closest(".wooco-wrap"),e=parseFloat(o.val()),c=parseFloat(o.attr("min")),a=parseFloat(o.attr("max"));(e<c||isNaN(e))&&o.val(e=c),a<e&&o.val(e=a),o.closest(".wooco_component_product").attr("data-qty",e),wooco_init(t)}),r(document).on("change",".wooco-checkbox",function(){var o;wooco_init(r(this).closest(".wooco-wrap"))})}(jQuery);