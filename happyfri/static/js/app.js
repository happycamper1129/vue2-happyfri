webpackJsonp([5,3],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(63),a=i(o),r=n(141),c=i(r),u=n(71),s=i(u),d=n(73),l=i(d),p=n(10),f=i(p),h=n(69),m=i(h),v=n(11);n(122),n(70),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){m.default.attach(document.body)},!1),a.default.use(c.default);var g=new c.default({routes:s.default}),E=new Image;E.src=v.basePath+"static/img/1-1.jpg";var w=window.location.href;/users_id=/gi.test(w)||(window.location.href="http://wxinterface.putaoevent.com?wx_account_id="+v.weixinOrder+"&callback_url="+v.basePath+"?"+v.activeTopicId);var y=w.split("#")[0];(0,f.default)("GET","http://wxinterface.putaoevent.com/jssdk?wx_account_id="+v.weixinOrder+"&callback_url="+v.basePath+"&url="+y).then(function(t){wx.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]})}),wx.ready(function(){wx.onMenuShareTimeline({title:"第一个题目，进来才知道",link:v.basePath+"?"+v.activeTopicId,imgUrl:"http://test.fe.ptdev.cn/happyfri/pthome.jpeg"}),wx.onMenuShareAppMessage({title:"第一个题目，进来才知道",desc:"这些知识我打赌你一个都不知道",link:v.basePath+"?"+v.activeTopicId,imgUrl:"http://test.fe.ptdev.cn/happyfri/pthome.jpeg",type:"link",dataUrl:""})}),new a.default({router:g,store:l.default}).$mount("#app")},10:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(48),a=i(o),r=n(77),c=i(r);e.default=function(t,e){return new c.default(function(n,i){var o=void 0;o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,o.open(t,e,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){var t=o.response;"object"!==("undefined"==typeof t?"undefined":(0,a.default)(t))&&(t=JSON.parse(t)),n(t)}},o.send()})}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="http://test.fe.ptdev.cn/happyfri/",o="http://test.fe.ptdev.cn/happyfri/",a=["static/img/2-1.png","static/img/4-1.jpg","static/img/4-2.png","static/img/4-3.png","static/img/4-4.png","static/img/5-2.png"],r=3,c=window.location.href,u=c.match(/active_topic_id=\d+/gi)&&c.match(/active_topic_id=\d+/gi)[0]||"";e.targetUrl=i,e.basePath=o,e.urlArr=a,e.weixinOrder=r,e.activeTopicId=u},65:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},69:function(t,e,n){function i(t){return t&&t.__esModule?t:{default:t}}var o,a=n(48),r=i(a);!function(){"use strict";/**
	  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	  *
	  * @codingstandard ftlabs-jsv2
	  * @copyright The Financial Times Limited [All Rights Reserved]
	  * @license MIT License (see LICENSE.txt)
	  */
function i(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var o;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!i.notNeeded(t)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,u=0,s=a.length;u<s;u++)r[a[u]]=n(r[a[u]],r);c&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(o=t.onclick,t.addEventListener("click",function(t){o(t)},!1),t.onclick=null)}}var a=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!a,u=/iP(ad|hone|od)/.test(navigator.userAgent)&&!a,s=u&&/OS 4_\d(_\d)?/.test(navigator.userAgent),d=u&&/OS [6-7]_\d/.test(navigator.userAgent),l=navigator.userAgent.indexOf("BB10")>0;i.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(u&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},i.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},i.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},i.prototype.determineEventType=function(t){return c&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},i.prototype.focus=function(t){var e;u&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},i.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},i.prototype.onTouchStart=function(t){var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],u){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!s){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},i.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},i.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},i.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(t){var e,n,i,o,a,r=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,d&&(a=t.changedTouches[0],r=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)||r,r.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=r.tagName.toLowerCase(),"label"===i){if(e=this.findControl(r)){if(this.focus(r),c)return!1;r=e}}else if(this.needsFocus(r))return t.timeStamp-n>100||u&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(r),this.sendClick(r,t),u&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return!(!u||s||(o=r.fastClickScrollParent,!o||o.fastClickLastScrollTop===o.scrollTop))||(this.needsClick(r)||(t.preventDefault(),this.sendClick(r,t)),!1)},i.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},i.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},i.prototype.destroy=function(){var t=this.layer;c&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(t){var e,n,i,o;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(l&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(o=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(o>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},i.attach=function(t,e){return new i(t,e)},"object"===(0,r.default)(n(64))&&n(64)?(o=function(){return i}.call(e,n,e,t),!(void 0!==o&&(t.exports=o))):"undefined"!=typeof t&&t.exports?(t.exports=i.attach,t.exports.FastClick=i):window.FastClick=i}()},70:function(t,e){"use strict";!function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=n.clientWidth;t&&(n.style.fontSize=20*(t/320)+"px")};t.addEventListener&&(e.addEventListener(i,o,!1),t.addEventListener("DOMContentLoaded",o,!1))}(document,window)},71:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(133),a=i(o);e.default=[{path:"/",component:a.default,children:[{path:"",component:function(t){return n.e(1,function(){return t(n(134))})}},{path:"/item",component:function(t){return n.e(0,function(){return t(n(135))})}},{path:"/score",component:function(t){return n.e(2,function(){return t(n(136))})}}]}]},72:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),a=i(o);e.default={addNum:function(t,e){var n=t.commit,i=t.state;n("REMBER_ANSWER",{id:e}),i.itemNum<i.itemDetail.length&&n("ADD_ITEMNUM",{num:1})},getData:function(t){var e=t.commit,n=t.state;(0,a.default)("GET","http://operating-activities.putao.com/happyfriday?active_topic_id="+n.nowActive_id).then(function(t){e("GET_DATA",{res:t})})},initializeData:function(t){var e=t.commit;e("INITIALIZE_DATA")},getUserInform:function(t){var e=t.commit,n=void 0,i=window.location.href;/users_id=/gi.test(i)&&(n=i.match(/users_id=\d+/gi)[0].match(/\d+/gi)[0]),(0,a.default)("GET","http://wxinterface.putaoevent.com/getuser?users_id="+n).then(function(t){var n=t.user_info;null!==n&&(0,a.default)("GET","http://operating-activities.putao.com/service/user/add?openid="+n.openid+"&nickname="+n.nickname+"&sex="+n.sex+"&province="+n.province+"&city=1&country="+n.country+"&headimgurl="+n.headimgurl+"&unionid="+n.unionid).then(function(t){e("GET_USER_INFORM",{res:t})})})}}},73:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(63),a=i(o),r=n(47),c=i(r),u=n(74),s=i(u),d=n(72),l=i(d),p=n(10),f=(i(p),n(11));a.default.use(c.default);var h="";""!==f.activeTopicId&&(h=f.activeTopicId.match(/\d+/gi)[0]);var m={level:"",itemNum:1,allTime:0,activeCodeState:0,nowActive_id:h,user_id:"",active_id:"",active_topic_id:"",timer:"",TransformNum:["一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十"],itemDetail:[],answerid:{}};e.default=new c.default.Store({state:m,actions:l.default,mutations:s.default})},74:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(80),r=i(a),c="GET_DATA",u="ADD_ITEMNUM",s="REMBER_ANSWER",d="REMBER_TIME",l="INITIALIZE_DATA",p="GET_USER_INFORM";e.default=(o={},(0,r.default)(o,c,function(t,e){200==e.res.httpStatusCode?(t.activeCodeState=200,t.itemDetail=e.res.topiclist,e.res.topiclist.length>0&&(t.level=e.res.topiclist[0].active_topic_phase,t.active_id=e.res.topiclist[0].active_id,t.active_topic_id=e.res.topiclist[0].active_topic_id)):500==e.res.httpStatusCode?(t.activeCodeState=500,alert("活动不存在")):300==e.res.httpStatusCode?(t.activeCodeState=300,alert("活动尚未开始")):301==e.res.httpStatusCode&&(t.activeCodeState=301,alert("活动已经结束"))}),(0,r.default)(o,p,function(t,e){t.user_id=e.res.users_id}),(0,r.default)(o,u,function(t,e){t.itemNum+=e.num}),(0,r.default)(o,s,function(t,e){t.answerid[t.itemNum]=e.id}),(0,r.default)(o,d,function(t){t.timer=setInterval(function(){t.allTime++},1e3)}),(0,r.default)(o,l,function(t){t.itemNum=1,t.allTime=0}),o)},122:function(t,e){},124:function(t,e){},133:function(t,e,n){var i,o;n(124),i=n(65);var a=n(138);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-964fd242",t.exports=i},138:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("router-view")])},staticRenderFns:[]}}});