!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,document):"function"==typeof define&&define.amd?define(null,function(){t(e,document)}):e.plyr=t(e,document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(){var e,n,a,r=navigator.userAgent,s=navigator.appName,o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",o="11;"):-1!==(n=r.indexOf("MSIE"))?(s="IE",o=r.substring(n+5)):-1!==(n=r.indexOf("Chrome"))?(s="Chrome",o=r.substring(n+7)):-1!==(n=r.indexOf("Safari"))?(s="Safari",o=r.substring(n+7),-1!==(n=r.indexOf("Version"))&&(o=r.substring(n+8))):-1!==(n=r.indexOf("Firefox"))?(s="Firefox",o=r.substring(n+8)):(e=r.lastIndexOf(" ")+1)<(n=r.lastindexof(" "))&&(s="r.substring(e,n),o=r.substring(n+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(a=o.indexOf(";"))&&(o=o.substring(0,a)),-1!==(a=o.indexOf("" "))&&(o="o.substring(0,a)),i=parseInt(""+o,10),isNaN(i)&&(o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10)),{name:s,version:i,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform),touch:"ontouchstart"in" t.documentelement}}function="" a(e,t){var="" n="e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm;" codecs="vp8, vorbis" ').replace(="" no="" ,""));case"video="" mp4":return!(!n.canplaytype||!n.canplaytype('video="" mp4;="" ogg":return!(!n.canplaytype||!n.canplaytype('video="" ogg;="" ,""))}else="" if("audio"="=e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg;" ,""));case"audio="" wav":return!(!n.canplaytype||!n.canplaytype('audio="" wav;="" ,""))}return!1}function="" r(e){if(!t.queryselectorall('script[src="'+e+'" ]').length){var="" a="t.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}}function" s(e,t){return="" array.prototype.indexof&&-1!="e.indexOf(t)}function" o(e,t,n){return="" e.replace(new="" regexp(t.replace(="" ([.*+?\^="!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function" i(e,t){e.length||(e="[e]);for(var">=0;n--){var a=n>0?t.cloneNode(!0):t,r=e[n],s=r.parentNode,o=r.nextSibling;return a.appendChild(r),o?s.insertBefore(a,o):s.appendChild(a),a}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function u(e){e&&e.parentNode.removeChild(e)}function c(e,t){e.insertBefore(t,e.firstChild)}function p(e,t){for(var n in t)e.setAttribute(n,"boolean"==typeof t[n]&&t[n]?"":t[n])}function d(e,n,a){var r=t.createElement(e);p(r,a),c(n,r)}function A(e){return e.replace(".","")}function m(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var a=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=a+(n?" "+t:"")}}function f(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className):!1}function y(e,n){var a=Element.prototype,r=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||function(e){return-1!==[].indexOf.call(t.querySelectorAll(e),this)};return r.call(e,n)}function b(e,t,n,a){e&&h(e,t,n,!0,a)}function v(e,t,n,a){e&&h(e,t,n,!1,a)}function g(e,t,n,a,r){b(e,t,function(t){n&&n.apply(e,[t]),a.apply(e,[t])},r)}function h(e,t,n,a,r){var s=t.split(" ");if("boolean"!=typeof r&&(r=!1),e instanceof NodeList)for(var o=0;o<e.length;o++)e[o]instanceof 0="==e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function" node&&h(e[o],arguments[1],arguments[2],arguments[3]);else="" for(var="" i="0;i<s.length;i++)e[a?"addEventListener":"removeEventListener"](s[i],n,r)}function" k(e,t,n,a){if(e&&t){"boolean"!="typeof" n&&(n="!1);var" r="new" customevent(t,{bubbles:n,detail:a});e.dispatchevent(r)}}function="" w(e,t){return="" e?(t="boolean" =="typeof" t?t:!e.getattribute("aria-pressed"),e.setattribute("aria-pressed",t),t):void="" 0}function="" x(e,t){return="" t(){var="" e="arguments;if(e.length){if(1==e.lenth)return" e[0];for(var="" t="Array.prototype.shift.call(e),n=e.length,a=0;n">a;a++){var r=e[a];for(var s in r)r[s]&&r[s].constructor&&r[s].constructor===Object?(t[s]=t[s]||{},T(t[s],r[s])):t[s]=r[s]}return t}}function E(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},n="webkit moz o ms khtml".split(" ");if("undefined"!=typeof t.cancelFullScreen)e.supportsFullScreen=!0;else for(var a=0,r=n.length;r>a;a++){if(e.prefix=n[a],"undefined"!=typeof t[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof t.msExitFullscreen&&t.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=t.body),this.prefix){case"":return t.fullscreenElement==e;case"moz":return t.mozFullScreenElement==e;default:return t[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=t.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?t.cancelFullScreen():t[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?t.fullscreenElement:t[this.prefix+"FullscreenElement"]}),e}function _(){var t={supported:function(){if(!("localStorage"in e))return!1;try{e.localStorage.setItem("___test","OK");var t=e.localStorage.getItem("___test");return e.localStorage.removeItem("___test"),"OK"===t}catch(n){return!1}return!1}()};return t}function C(y,h){function T(t,n){h.debug&&e.console&&console[n?"warn":"log"](t)}function C(){return{url:h.iconUrl,external:0===h.iconUrl.indexOf("http")}}function M(){var e=[],t=C(),n=(t.external?"":t.url)+"#"+h.iconPrefix;return s(h.controls,"play-large")&&e.push('<button type="button" data-plyr="play" class="plyr__play-large">','<svg><use xlink:href="'+n+'-play"/></svg>','<span class="plyr__sr-only">'+h.i18n.play+"</span>","</button>"),e.push('<div class="plyr__controls">'),s(h.controls,"restart")&&e.push('<button type="button" data-plyr="restart">','<svg><use xlink:href="'+n+'-restart"/></svg>','<span class="plyr__sr-only">'+h.i18n.restart+"</span>","</button>"),s(h.controls,"rewind")&&e.push('<button type="button" data-plyr="rewind">','<svg><use xlink:href="'+n+'-rewind"/></svg>','<span class="plyr__sr-only">'+h.i18n.rewind+"</span>","</button>"),s(h.controls,"play")&&e.push('<button type="button" data-plyr="play">','<svg><use xlink:href="'+n+'-play"/></svg>','<span class="plyr__sr-only">'+h.i18n.play+"</span>","</button>",'<button type="button" data-plyr="pause">','<svg><use xlink:href="'+n+'-pause"/></svg>','<span class="plyr__sr-only">'+h.i18n.pause+"</span>","</button>"),s(h.controls,"fast-forward")&&e.push('<button type="button" data-plyr="fast-forward">','<svg><use xlink:href="'+n+'-fast-forward"/></svg>','<span class="plyr__sr-only">'+h.i18n.forward+"</span>","</button>"),s(h.controls,"progress")&&(e.push('<span class="plyr__progress">','<label for="seek{id}" class="plyr__sr-only">Seek</label>','<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">','<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>','<progress class="plyr__progress--buffer" max="100" value="0">',"<span>0</span>% "+h.i18n.buffered,"</progress>"),h.tooltips.seek&&e.push('<span class="plyr__tooltip">00:00</span>'),e.push("</span>")),s(h.controls,"current-time")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+h.i18n.currentTime+"</span>",'<span class="plyr__time--current">00:00</span>',"</span>"),s(h.controls,"duration")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+h.i18n.duration+"</span>",'<span class="plyr__time--duration">00:00</span>',"</span>"),s(h.controls,"mute")&&e.push('<button type="button" data-plyr="mute">','<svg class="icon--muted"><use xlink:href="'+n+'-muted"/></svg>','<svg><use xlink:href="'+n+'-volume"/></svg>','<span class="plyr__sr-only">'+h.i18n.toggleMute+"</span>","</button>"),s(h.controls,"volume")&&e.push('<span class="plyr__volume">','<label for="volume{id}" class="plyr__sr-only">'+h.i18n.volume+"</label>",'<input id="volume{id}" class="plyr__volume--input" type="range" min="'+h.volumeMin+'" max="'+h.volumeMax+'" value="'+h.volume+'" data-plyr="volume">','<progress class="plyr__volume--display" max="'+h.volumeMax+'" value="'+h.volumeMin+'" role="presentation"></progress>',"</span>"),s(h.controls,"captions")&&e.push('<button type="button" data-plyr="captions">','<svg class="icon--captions-on"><use xlink:href="'+n+'-captions-on"/></svg>','<svg><use xlink:href="'+n+'-captions-off"/></svg>','<span class="plyr__sr-only">'+h.i18n.toggleCaptions+"</span>","</button>"),s(h.controls,"fullscreen")&&e.push('<button type="button" data-plyr="fullscreen">','<svg class="icon--exit-fullscreen"><use xlink:href="'+n+'-exit-fullscreen"/></svg>','<svg><use xlink:href="'+n+'-enter-fullscreen"/></svg>','<span class="plyr__sr-only">'+h.i18n.toggleFullscreen+"</span>","</button>"),e.push("</div>"),e.join("")}function P(){if(Be.supported.full&&("audio"!=Be.type||h.fullscreen.allowAudio)&&h.fullscreen.enabled){var e=I.supportsFullScreen;e||h.fullscreen.fallback&&!G()?(T((e?"Native":"Fallback")+" fullscreen enabled"),m(Be.container,h.classes.fullscreen.enabled,!0)):T("Fullscreen not supported and fallback disabled"),w(Be.buttons.fullscreen,!1),W()}}function R(){if("video"===Be.type){V(h.selectors.captions)||Be.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+A(h.selectors.captions)+'"></div>'),Be.usingTextTracks=!1,Be.media.textTracks&&(Be.usingTextTracks=!0);for(var e,t="",n=Be.media.childNodes,a=0;a<n.length;a++)"track"===n[a].nodename.tolowercase()&&(e=n[a].kind,"captions"!==e&&"subtitles"!==e||(t=n[a].getattribute("src")));if(be.captionexists=!0,""===t?(be.captionexists=!1,t("no caption="" track="" found")):t("caption="" found;="" uri:="" "+t),be.captionexists){for(var="" r="Be.media.textTracks,s=0;s<r.length;s++)r[s].mode="hidden";if(O(Be),("IE"===Be.browser.name&&Be.browser.version">=10||"Firefox"===Be.browser.name&&Be.browser.version>=31)&&(T("Detected browser with known TextTrack issues - using manual fallback"),Be.usingTextTracks=!1),Be.usingTextTracks){T("TextTracks supported");for(var o=0;o<r.length;o++){var i="r[o];"captions"!==i.kind&&"subtitles"!==i.kind||b(i,"cuechange",function(){this.activeCues[0]&&"text"in" this.activecues[0]?l(this.activecues[0].getcueashtml()):l()})}}else="" if(t("texttracks="" not="" supported="" so="" rendering="" captions="" manually"),be.currentcaption="" ,be.captions="[],""!==t){var" l="new" xmlhttprequest;l.onreadystatechange="function(){if(4===l.readyState)if(200===l.status){var" e,t="[],n=l.responseText;t=n.split("\n\n");for(var" a="0;a<t.length;a++){e=t[a],Be.captions[a]=[];var" r="e.split("\n"),s=0;-1===r[s].indexOf(":")&&(s=1),Be.captions[a]=[r[s],r[s+1]]}Be.captions.shift(),T("Successfully" loaded="" the="" caption="" file="" via="" ajax")}else="" t("there="" was="" problem="" loading="" ajax",!0)},l.open("get",t,!0),l.send()}}else="" m(be.container,h.classes.captions.enabled)}}function="" l(e){var="" n="V(h.selectors.captions),a=t.createElement("span");n.innerHTML="","undefined"==typeof" e&&(e="" ),"string"="=typeof" e?a.innerhtml="e.trim():a.appendChild(e),n.appendChild(a);n.offsetHeight}function" b(e){function="" t(e,t){var="" --=""> ");for(var a=0;a<n.length;a++)n[a]=n[a].replace( 0="==e)return" (\d+:\d+:\d+\.\d+).*="" ,"$1");return="" r(n[t])}function="" n(e){return="" t(e,0)}function="" a(e){return="" t(e,1)}function="" r(e){if(null="==e||void" 0;var="" t,n="[],a=[];return" n="e.split(","),a=n[0].split(":"),t=Math.floor(60*a[0]*60)+Math.floor(60*a[1])+Math.floor(a[2])}if(!Be.usingTextTracks&&"video"===Be.type&&Be.supported.full&&(Be.subcount=0,e="number"==typeof" e?e:be.media.currenttime,be.captions[be.subcount])){for(;a(be.captions[be.subcount][0])<e.tofixed(1);)if(be.subcount++,be.subcount="">Be.captions.length-1){Be.subcount=Be.captions.length-1;break}Be.media.currentTime.toFixed(1)>=n(Be.captions[Be.subcount][0])&&Be.media.currentTime.toFixed(1)<=a(be.captions[be.subcount][0])?(be.currentcaption=be.captions[be.subcount][1],l(be.currentcaption)):l()}}function o(){be.buttons.captions&&(m(be.container,h.classes.captions.enabled,!0),h.captions.defaultactive&&(m(be.container,h.classes.captions.active,!0),w(be.buttons.captions,!0)))}function="" h(e){return="" be.container.queryselectorall(e)}function="" v(e){return="" h(e)[0]}function="" g(){try{return="" e.self!="=e.top}catch(t){return!0}}function" w(){function="" e(e){9="==e.which&&Be.isFullscreen&&(e.target!==a||e.shiftKey?e.target===n&&e.shiftKey&&(e.preventDefault(),a.focus()):(e.preventDefault(),n.focus()))}var" t="H("input:not([disabled])," button:not([disabled])"),n="t[0],a=t[t.length-1];b(Be.container,"keydown",e)}function" y(e,t){if("string"="=typeof" t)d(e,be.media,{src:t});else="" if(t.constructor="==Array)for(var" n="t.length-1;n">=0;n--)d(e,Be.media,t[n])}function q(){if(h.loadSprite){var e=C();e.external?(T("Loading external SVG sprite"),S(e.url,"sprite-plyr")):T("Sprite will be used inline")}var n=h.html;T("Injecting custom controls"),n||(n=M()),n=o(n,"{seektime}",h.seekTime),n=o(n,"{id}",Math.floor(1e4*Math.random()));var a;if(null!==h.selectors.controls.container&&(a=h.selectors.controls.container,"string"==typeof selector&&(a=t.querySelector(a))),a instanceof HTMLElement||(a=Be.container),a.insertAdjacentHTML("beforeend",n),h.tooltips.controls)for(var r=H([h.selectors.controls.wrapper," ",h.selectors.labels," .",h.classes.hidden].join("")),s=r.length-1;s>=0;s--){var i=r[s];m(i,h.classes.hidden,!1),m(i,h.classes.tooltip,!0)}}function j(){try{return Be.controls=V(h.selectors.controls.wrapper),Be.buttons={},Be.buttons.seek=V(h.selectors.buttons.seek),Be.buttons.play=H(h.selectors.buttons.play),Be.buttons.pause=V(h.selectors.buttons.pause),Be.buttons.restart=V(h.selectors.buttons.restart),Be.buttons.rewind=V(h.selectors.buttons.rewind),Be.buttons.forward=V(h.selectors.buttons.forward),Be.buttons.fullscreen=V(h.selectors.buttons.fullscreen),Be.buttons.mute=V(h.selectors.buttons.mute),Be.buttons.captions=V(h.selectors.buttons.captions),Be.progress={},Be.progress.container=V(h.selectors.progress.container),Be.progress.buffer={},Be.progress.buffer.bar=V(h.selectors.progress.buffer),Be.progress.buffer.text=Be.progress.buffer.bar&&Be.progress.buffer.bar.getElementsByTagName("span")[0],Be.progress.played=V(h.selectors.progress.played),Be.progress.tooltip=Be.progress.container&&Be.progress.container.querySelector("."+h.classes.tooltip),Be.volume={},Be.volume.input=V(h.selectors.volume.input),Be.volume.display=V(h.selectors.volume.display),Be.duration=V(h.selectors.duration),Be.currentTime=V(h.selectors.currentTime),Be.seekTime=H(h.selectors.seekTime),!0}catch(e){return T("It looks like there is a problem with your controls html",!0),D(!0),!1}}function z(){m(Be.container,h.selectors.container.replace(".",""),Be.supported.full)}function D(e){e?Be.media.setAttribute("controls",""):Be.media.removeAttribute("controls")}function Q(e){var t=h.i18n.play;if("undefined"!=typeof h.title&&h.title.length&&(t+=", "+h.title),Be.supported.full&&Be.buttons.play)for(var n=Be.buttons.play.length-1;n>=0;n--)Be.buttons.play[n].setAttribute("aria-label",t);e instanceof HTMLElement&&e.setAttribute("title",h.i18n.frameTitle.replace("{title}",h.title))}function X(){if(!Be.media)return T("No audio or video element found",!0),!1;if(Be.supported.full&&(m(Be.container,h.classes.type.replace("{0}",Be.type),!0),s(h.types.embed,Be.type)&&m(Be.container,h.classes.type.replace("{0}","video"),!0),m(Be.container,h.classes.stopped,h.autoplay),m(Be.container,h.classes.isIos,Be.browser.ios),m(Be.container,h.classes.isTouch,Be.browser.touch),"video"===Be.type)){var e=t.createElement("div");e.setAttribute("class",h.classes.videoWrapper),i(Be.media,e),Be.videoContainer=e}s(h.types.embed,Be.type)&&(U(),Be.embedId=null)}function U(){for(var n=t.createElement("div"),a=Be.embedId,s=Be.type+"-"+Math.floor(1e4*Math.random()),o=H('[id^="'+Be.type+'-"]'),i=o.length-1;i>=0;i--)u(o[i]);if(m(Be.media,h.classes.videoWrapper,!0),m(Be.media,h.classes.embedWrapper,!0),"youtube"===Be.type)Be.media.appendChild(n),n.setAttribute("id",s),"object"==typeof YT?$(a,n):(r(h.urls.youtube.api),e.onYouTubeReadyCallbacks=e.onYouTubeReadyCallbacks||[],e.onYouTubeReadyCallbacks.push(function(){$(a,n)}),e.onYouTubeIframeAPIReady=function(){e.onYouTubeReadyCallbacks.forEach(function(e){e()})});else if("vimeo"===Be.type){var l=t.createElement("iframe");l.loaded=!1,b(l,"load",function(){l.loaded=!0}),p(l,{src:"https://player.vimeo.com/video/"+a+"?player_id="+s+"&api=1&badge=0&byline=0&portrait=0&title=0",id:s,allowfullscreen:"",frameborder:0}),Be.supported.full?(n.appendChild(l),Be.media.appendChild(n)):Be.media.appendChild(l),"$f"in e||r(h.urls.vimeo.api);var c=e.setInterval(function(){"$f"in e&&l.loaded&&(e.clearInterval(c),J.call(l))},50)}else if("soundcloud"===Be.type){var d=t.createElement("iframe");d.loaded=!1,b(d,"load",function(){d.loaded=!0}),p(d,{src:"https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/"+a,id:s}),n.appendChild(d),Be.media.appendChild(n),e.SC||r(h.urls.soundcloud.api);var A=e.setInterval(function(){e.SC&&d.loaded&&(e.clearInterval(A),K.call(d))},50)}}function Z(){Be.container.plyr.embed=Be.embed,Le(),Q(V("iframe"))}function $(t,n){"timer"in Be||(Be.timer={}),Be.embed=new YT.Player(n.id,{videoId:t,playerVars:{autoplay:h.autoplay?1:0,controls:Be.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:h.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1,origin:"*"},events:{onError:function(e){k(Be.container,"error",!0,{code:e.data,embed:e.target})},onReady:function(t){var n=t.target;Be.media.play=function(){n.playVideo(),Be.media.paused=!1},Be.media.pause=function(){n.pauseVideo(),Be.media.paused=!0},Be.media.stop=function(){n.stopVideo(),Be.media.paused=!0},Be.media.duration=n.getDuration(),Be.media.paused=!0,Be.media.currentTime=n.getCurrentTime(),Be.media.muted=n.isMuted(),h.title=n.getVideoData().title,k(Be.media,"timeupdate"),e.clearInterval(Be.timer.buffering),Be.timer.buffering=e.setInterval(function(){Be.media.buffered=n.getVideoLoadedFraction(),k(Be.media,"progress"),1===Be.media.buffered&&(e.clearInterval(Be.timer.buffering),k(Be.media,"canplaythrough"))},200),Z(),we()},onStateChange:function(t){var n=t.target;switch(e.clearInterval(Be.timer.playing),t.data){case 0:Be.media.paused=!0,k(Be.media,"ended");break;case 1:Be.media.paused=!1,Be.media.seeking=!1,k(Be.media,"play"),k(Be.media,"playing"),Be.timer.playing=e.setInterval(function(){Be.media.currentTime=n.getCurrentTime(),k(Be.media,"timeupdate")},100);break;case 2:Be.media.paused=!0,k(Be.media,"pause")}k(Be.container,"statechange",!1,{code:t.data})}}})}function J(){Be.embed=$f(this),Be.embed.addEvent("ready",function(){Be.media.play=function(){Be.embed.api("play"),Be.media.paused=!1},Be.media.pause=function(){Be.embed.api("pause"),Be.media.paused=!0},Be.media.stop=function(){Be.embed.api("stop"),Be.media.paused=!0},Be.media.paused=!0,Be.media.currentTime=0,Z(),Be.embed.api("getCurrentTime",function(e){Be.media.currentTime=e,k(Be.media,"timeupdate")}),Be.embed.api("getDuration",function(e){Be.media.duration=e,we()}),Be.embed.addEvent("play",function(){Be.media.paused=!1,k(Be.media,"play"),k(Be.media,"playing")}),Be.embed.addEvent("pause",function(){Be.media.paused=!0,k(Be.media,"pause")}),Be.embed.addEvent("playProgress",function(e){Be.media.seeking=!1,Be.media.currentTime=e.seconds,k(Be.media,"timeupdate")}),Be.embed.addEvent("loadProgress",function(e){Be.media.buffered=e.percent,k(Be.media,"progress"),1===parseInt(e.percent)&&k(Be.media,"canplaythrough")}),Be.embed.addEvent("finish",function(){Be.media.paused=!0,k(Be.media,"ended")}),h.autoplay&&Be.embed.api("play")})}function K(){Be.embed=e.SC.Widget(this),Be.embed.bind(e.SC.Widget.Events.READY,function(){Be.media.play=function(){Be.embed.play(),Be.media.paused=!1},Be.media.pause=function(){Be.embed.pause(),Be.media.paused=!0},Be.media.stop=function(){Be.embed.seekTo(0),Be.embed.pause(),Be.media.paused=!0},Be.media.paused=!0,Be.media.currentTime=0,Z(),Be.embed.getPosition(function(e){Be.media.currentTime=e,k(Be.media,"timeupdate")}),Be.embed.getDuration(function(e){Be.media.duration=e/1e3,we()}),Be.embed.bind(e.SC.Widget.Events.PLAY,function(){Be.media.paused=!1,k(Be.media,"play"),k(Be.media,"playing")}),Be.embed.bind(e.SC.Widget.Events.PAUSE,function(){Be.media.paused=!0,k(Be.media,"pause")}),Be.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS,function(e){Be.media.seeking=!1,Be.media.currentTime=e.currentPosition/1e3,k(Be.media,"timeupdate")}),Be.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS,function(e){Be.media.buffered=e.loadProgress,k(Be.media,"progress"),1===parseInt(e.loadProgress)&&k(Be.media,"canplaythrough")}),Be.embed.bind(e.SC.Widget.Events.FINISH,function(){Be.media.paused=!0,k(Be.media,"ended")}),h.autoplay&&Be.embed.play()})}function ee(){"play"in Be.media&&Be.media.play()}function te(){"pause"in Be.media&&Be.media.pause()}function ne(e){e===!0?ee():e===!1?te():Be.media[Be.media.paused?"play":"pause"]()}function ae(e){"number"!=typeof e&&(e=h.seekTime),se(Be.media.currentTime-e)}function re(e){"number"!=typeof e&&(e=h.seekTime),se(Be.media.currentTime+e)}function se(e){var t=0,n=Be.media.paused,a=oe();"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*a),0>t?t=0:t>a&&(t=a),Te(t);try{Be.media.currentTime=t.toFixed(4)}catch(r){}if(s(h.types.embed,Be.type)){switch(Be.type){case"youtube":Be.embed.seekTo(t);break;case"vimeo":Be.embed.api("seekTo",t.toFixed(0));break;case"soundcloud":Be.embed.seekTo(1e3*t)}n&&te(),k(Be.media,"timeupdate"),Be.media.seeking=!0}T("Seeking to "+Be.media.currentTime+" seconds"),B(t)}function oe(){var e=parseInt(h.duration),t=0;return null===Be.media.duration||isNaN(Be.media.duration)||(t=Be.media.duration),isNaN(e)?t:e}function ie(){m(Be.container,h.classes.playing,!Be.media.paused),m(Be.container,h.classes.stopped,Be.media.paused),_e(Be.media.paused)}function le(){N={x:e.pageXOffset||0,y:e.pageYOffset||0}}function ue(){e.scrollTo(N.x,N.y)}function ce(e){var n=I.supportsFullScreen;e&&e.type===I.fullScreenEventName?Be.isFullscreen=I.isFullScreen(Be.container):n?(I.isFullScreen(Be.container)?I.cancelFullScreen():(le(),I.requestFullScreen(Be.container)),Be.isFullscreen=I.isFullScreen(Be.container)):(Be.isFullscreen=!Be.isFullscreen,Be.isFullscreen?(b(t,"keyup",pe),t.body.style.overflow="hidden"):(v(t,"keyup",pe),t.body.style.overflow="")),m(Be.container,h.classes.fullscreen.active,Be.isFullscreen),Be.isFullscreen?Be.container.setAttribute("tabindex","-1"):Be.container.removeAttribute("tabindex"),W(Be.isFullscreen),w(Be.buttons.fullscreen,Be.isFullscreen),k(Be.container,Be.isFullscreen?"enterfullscreen":"exitfullscreen"),!Be.isFullscreen&&n&&ue()}function pe(e){27===(e.which||e.charCode||e.keyCode)&&Be.isFullscreen&&ce()}function de(e){if("boolean"!=typeof e&&(e=!Be.media.muted),w(Be.buttons.mute,e),Be.media.muted=e,0===Be.media.volume&&Ae(h.volume),s(h.types.embed,Be.type)){switch(Be.type){case"youtube":Be.embed[Be.media.muted?"mute":"unMute"]();break;case"vimeo":Be.embed.api("setVolume",Be.media.muted?0:parseFloat(h.volume/h.volumeMax));break;case"soundcloud":Be.embed.setVolume(Be.media.muted?0:parseFloat(h.volume/h.volumeMax))}k(Be.media,"volumechange")}}function Ae(t){var n=h.volumeMax,a=h.volumeMin;if("undefined"==typeof t&&(t=h.volume,h.storage.enabled&&_().supported&&(t=e.localStorage.getItem(h.storage.key),e.localStorage.removeItem("plyr-volume"))),(null===t||isNaN(t))&&(t=h.volume),t>n&&(t=n),a>t&&(t=a),Be.media.volume=parseFloat(t/n),Be.volume.display&&(Be.volume.display.value=t),s(h.types.embed,Be.type)){switch(Be.type){case"youtube":Be.embed.setVolume(100*Be.media.volume);break;case"vimeo":Be.embed.api("setVolume",Be.media.volume);break;case"soundcloud":Be.embed.setVolume(Be.media.volume)}k(Be.media,"volumechange")}Be.media.muted&&t>0&&de()}function me(){var e=Be.media.muted?0:Be.media.volume*h.volumeMax;Ae(e+h.volumeStep/5)}function fe(){var e=Be.media.muted?0:Be.media.volume*h.volumeMax;Ae(e-h.volumeStep/5)}function ye(){var t=Be.media.muted?0:Be.media.volume*h.volumeMax;Be.supported.full&&(Be.volume.input&&(Be.volume.input.value=t),Be.volume.display&&(Be.volume.display.value=t)),h.storage.enabled&&_().supported&&!isNaN(t)&&e.localStorage.setItem(h.storage.key,t),m(Be.container,h.classes.muted,0===t),Be.supported.full&&Be.buttons.mute&&w(Be.buttons.mute,0===t)}function be(e){Be.supported.full&&Be.buttons.captions&&("boolean"!=typeof e&&(e=-1===Be.container.className.indexOf(h.classes.captions.active)),Be.captionsEnabled=e,w(Be.buttons.captions,Be.captionsEnabled),m(Be.container,h.classes.captions.active,Be.captionsEnabled),k(Be.container,Be.captionsEnabled?"captionsenabled":"captionsdisabled"))}function ve(e){var t="waiting"===e.type;clearTimeout(Be.timers.loading),Be.timers.loading=setTimeout(function(){m(Be.container,h.classes.loading,t)},t?250:0)}function ge(e){if(Be.supported.full){var t=Be.progress.played,n=0,a=oe();if(e)switch(e.type){case"timeupdate":case"seeking":n=x(Be.media.currentTime,a),"timeupdate"==e.type&&Be.buttons.seek&&(Be.buttons.seek.value=n);break;case"playing":case"progress":t=Be.progress.buffer,n=function(){var e=Be.media.buffered;return e&&e.length?x(e.end(0),a):"number"==typeof e?100*e:0}()}he(t,n)}}function he(e,t){if(Be.supported.full){if("undefined"==typeof t&&(t=0),"undefined"==typeof e){if(!Be.progress||!Be.progress.buffer)return;e=Be.progress.buffer}e instanceof HTMLElement?e.value=t:e&&(e.bar&&(e.bar.value=t),e.text&&(e.text.innerHTML=t))}}function ke(e,t){if(t){isNaN(e)&&(e=0),Be.secs=parseInt(e%60),Be.mins=parseInt(e/60%60),Be.hours=parseInt(e/60/60%60);var n=parseInt(oe()/60/60%60)>0;Be.secs=("0"+Be.secs).slice(-2),Be.mins=("0"+Be.mins).slice(-2),t.innerHTML=(n?Be.hours+":":"")+Be.mins+":"+Be.secs}}function we(){if(Be.supported.full){var e=oe()||0;!Be.duration&&h.displayDuration&&Be.media.paused&&ke(e,Be.currentTime),Be.duration&&ke(e,Be.duration),Ee()}}function xe(e){ke(Be.media.currentTime,Be.currentTime),e&&"timeupdate"==e.type&&Be.media.seeking||ge(e)}function Te(e){"number"!=typeof e&&(e=0);var t=oe(),n=x(e,t);Be.progress&&Be.progress.played&&(Be.progress.played.value=n),Be.buttons&&Be.buttons.seek&&(Be.buttons.seek.value=n)}function Ee(e){var t=oe();if(h.tooltips.seek&&Be.progress.container&&0!==t){var n=Be.progress.container.getBoundingClientRect(),a=0,r=h.classes.tooltip+"--visible";if(e)a=100/n.width*(e.pageX-n.left);else{if(!f(Be.progress.tooltip,r))return;a=Be.progress.tooltip.style.left.replace("%","")}0>a?a=0:a>100&&(a=100),ke(t/100*a,Be.progress.tooltip),Be.progress.tooltip.style.left=a+"%",e&&s(["mouseenter","mouseleave"],e.type)&&m(Be.progress.tooltip,r,"mouseenter"===e.type)}}function _e(t){if(h.hideControls&&"audio"!==Be.type){var n=0,a=!1,r=t;if("boolean"!=typeof t&&(t&&t.type?(a="enterfullscreen"===t.type,r=s(["mousemove","mouseenter","focus"],t.type),"mousemove"===t.type&&(n=2e3),"focus"===t.type&&(n=3e3)):r=!f(Be.container,h.classes.hideControls)),e.clearTimeout(Be.timers.hover),r||Be.media.paused){if(m(Be.container,h.classes.hideControls,!1),Be.media.paused)return;Be.browser.touch&&(n=3e3)}r&&Be.media.paused||(Be.timers.hover=e.setTimeout(function(){Be.controls.active&&!a||m(Be.container,h.classes.hideControls,!0)},n))}}function Ce(e){if("undefined"!=typeof e)return void Se(e);var t;switch(Be.type){case"youtube":t=Be.embed.getVideoUrl();break;case"vimeo":Be.embed.api("getVideoUrl",function(e){t=e});break;case"soundcloud":Be.embed.getCurrentSound(function(e){t=e.permalink_url});break;default:t=Be.media.currentSrc}return t||""}function Se(n){if(!("undefined"!=typeof n&&"sources"in n&&n.sources.length))return void T("Invalid source format",!0);if(te(),Te(),he(),Ne(),"youtube"===Be.type?(Be.embed.destroy(),e.clearInterval(Be.timer.buffering),e.clearInterval(Be.timer.playing)):"video"===Be.type&&Be.videoContainer&&u(Be.videoContainer),Be.embed=null,u(Be.media),"type"in n&&(Be.type=n.type,"video"===Be.type)){var a=n.sources[0];"type"in a&&s(h.types.embed,a.type)&&(Be.type=a.type)}switch(Be.supported=F(Be.type),Be.type){case"video":Be.media=t.createElement("video");break;case"audio":Be.media=t.createElement("audio");break;case"youtube":case"vimeo":case"soundcloud":Be.media=t.createElement("div"),Be.embedId=n.sources[0].src}c(Be.container,Be.media),"undefined"!=typeof n.autoplay&&(h.autoplay=n.autoplay),s(h.types.html5,Be.type)&&(h.crossorigin&&Be.media.setAttribute("crossorigin",""),h.autoplay&&Be.media.setAttribute("autoplay",""),"poster"in n&&Be.media.setAttribute("poster",n.poster),h.loop&&Be.media.setAttribute("loop","")),Be.container.className=Be.originalClassName,m(Be.container,h.classes.fullscreen.active,Be.isFullscreen),m(Be.container,h.classes.captions.active,Be.captionsEnabled),z(),s(h.types.html5,Be.type)&&Y("source",n.sources),X(),s(h.types.html5,Be.type)&&("tracks"in n&&Y("track",n.tracks),Be.media.load(),Le(),we()),h.title=n.title,Q(),Be.container.plyr.media=Be.media}function Fe(e){"video"===Be.type&&Be.media.setAttribute("poster",e)}function Me(){function n(){var e=Be.media.paused;e?ee():te();var t=Be.buttons[e?"play":"pause"],n=Be.buttons[e?"pause":"play"];if(n=n&&n.length>1?n[n.length-1]:n[0]){var a=f(t,h.classes.tabFocus);setTimeout(function(){n.focus(),a&&(m(t,h.classes.tabFocus,!1),m(n,h.classes.tabFocus,!0))},100)}}function a(){var e=t.activeElement;e&&e!=t.body?t.querySelector&&(e=t.querySelector(":focus")):e=null;for(var n in Be.buttons){var a=Be.buttons[n];if(a instanceof NodeList)for(var r=0;r<a.length;r++)m(a[r],h.classes.tabfocus,a[r]===e);else m(a,h.classes.tabfocus,a="==e)}}var" r="IE" =="Be.browser.name?"change":"input";b(e,"keyup",function(e){var" t="e.keyCode?e.keyCode:e.which;9==t&&a()}),b(t.body,"click",function(){m(V("."+h.classes.tabFocus),h.classes.tabFocus,!1)});for(var" s="" in="" be.buttons){var="" o="Be.buttons[s];b(o,"blur",function(){m(o,"tab-focus",!1)})}g(Be.buttons.play,"click",h.listeners.play,n),g(Be.buttons.pause,"click",h.listeners.pause,n),g(Be.buttons.restart,"click",h.listeners.restart,se),g(Be.buttons.rewind,"click",h.listeners.rewind,ae),g(Be.buttons.forward,"click",h.listeners.forward,re),g(Be.buttons.seek,r,h.listeners.seek,se),g(Be.volume.input,r,h.listeners.volume,function(){Ae(Be.volume.input.value)}),g(Be.buttons.mute,"click",h.listeners.mute,de),g(Be.buttons.fullscreen,"click",h.listeners.fullscreen,ce),I.supportsFullScreen&&b(t,I.fullScreenEventName,ce),b(Be.buttons.captions,"click",be),b(Be.progress.container,"mouseenter" mouseleave="" mousemove",ee),h.hidecontrols&&(b(be.container,"mouseenter="" mousemove="" enterfullscreen",_e),b(be.controls,"mouseenter="" mouseleave",function(e){be.controls.active="mouseenter" blur",_e,!0)),b(be.volume.input,"wheel",function(e){e.preventdefault();var="">0)&&(t?fe():me()),(e.deltaY>0||e.deltaX</a.length;r++)m(a[r],h.classes.tabfocus,a[r]===e);else></=a(be.captions[be.subcount][0])?(be.currentcaption=be.captions[be.subcount][1],l(be.currentcaption)):l()}}function></n.length;a++)n[a]=n[a].replace(></r.length;o++){var></n.length;a++)"track"===n[a].nodename.tolowercase()&&(e=n[a].kind,"captions"!==e&&"subtitles"!==e||(t=n[a].getattribute("src")));if(be.captionexists=!0,""===t?(be.captionexists=!1,t("no></e.length;o++)e[o]instanceof></(n=r.lastindexof(">