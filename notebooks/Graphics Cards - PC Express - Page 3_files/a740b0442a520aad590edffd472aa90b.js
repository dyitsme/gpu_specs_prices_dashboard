"undefined"==typeof console&&(window.console={log:function(){}}),jQuery(function(e){var t=gtm4wp_scrollerscript_debugmode,o=gtm4wp_scrollerscript_callbacktime,n=gtm4wp_scrollerscript_readerlocation,r=0,l=!1,i=!1,a=!1,c,m=(new Date).getTime(),d=0;function s(){bottom=e(window).height()+e(window).scrollTop(),height=e(document).height(),bottom>n&&!l&&(currentTime=new Date,scrollStart=currentTime.getTime(),timeToScroll=Math.round((scrollStart-m)/1e3),t?console.log("Started reading "+timeToScroll):window[gtm4wp_datalayer_name].push({event:"gtm4wp.reading.startReading",timeToScroll:timeToScroll}),l=!0),bottom>=e("#"+gtm4wp_scrollerscript_contentelementid).scrollTop()+e("#"+gtm4wp_scrollerscript_contentelementid).innerHeight()&&!i&&(currentTime=new Date,contentScrollEnd=currentTime.getTime(),timeToContentEnd=Math.round((contentScrollEnd-scrollStart)/1e3),t?console.log("End content section "+timeToContentEnd):window[gtm4wp_datalayer_name].push({event:"gtm4wp.reading.contentBottom",timeToScroll:timeToContentEnd}),i=!0),bottom>=height&&!a&&(currentTime=new Date,end=currentTime.getTime(),d=Math.round((end-scrollStart)/1e3),t?(d<gtm4wp_scrollerscript_scannertime?console.log('The visitor seems to be a "scanner"'):console.log('The visitor seems to be a "reader"'),console.log("Bottom of page "+d)):(d<gtm4wp_scrollerscript_scannertime?window[gtm4wp_datalayer_name].push({event:"gtm4wp.reading.readerType",readerType:"scanner"}):window[gtm4wp_datalayer_name].push({event:"gtm4wp.reading.readerType",readerType:"reader"}),window[gtm4wp_datalayer_name].push({event:"gtm4wp.reading.pagebottom",timeToScroll:d})),a=!0)}t?console.log("Article loaded"):window[gtm4wp_datalayer_name].push({event:"gtm4wp.reading.articleLoaded"}),e(window).scroll(function(){r&&clearTimeout(r),r=setTimeout(s,o)})});