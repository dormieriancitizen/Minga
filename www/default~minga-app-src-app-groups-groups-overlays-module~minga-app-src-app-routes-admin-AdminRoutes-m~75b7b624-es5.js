!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(L){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(o||[]);return r(a,"_invoke",{value:O(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var f={};function p(){}function g(){}function h(){}var m={};s(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==n&&o.call(y,a)&&(m=y);var x=h.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;r(this,"_invoke",{value:function(r,i){function a(){return new e((function(n,a){!function n(r,i,a,c){var l=d(t[r],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(r,i,n,a)}))}return n=n?n.then(a,a):a()}})}function O(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return _()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=d(t,e,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}function k(t,e){var n=e.method,o=t.iterator[n];if(void 0===o)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=d(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return g.prototype=h,r(x,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:g,configurable:!0}),g.displayName=s(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new b(u(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,l,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=E,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"))?i:String(i)),o)}var r,i}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0hYQ":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r("NGeL");var i,a=r("8Y7J"),c=((i=n((function t(){o(this,t)}))).\u0275fac=function(t){return new(t||i)},i.\u0275mod=a["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=a["\u0275\u0275defineInjector"]({}),i)},NGeL:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var i=r("8Y7J"),a=function(){var t=n((function t(){o(this,t),this.strong=!1,this.value=""}));return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["mg-toggle-strong"]],inputs:{strong:"strong",value:"value"},decls:4,vars:6,template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"strong"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"span"),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275classProp"]("toggle-strong-hide",!e.strong),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.value),i["\u0275\u0275advance"](1),i["\u0275\u0275classProp"]("toggle-strong-hide",e.strong),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.value))},styles:["[_nghost-%COMP%] {\n        position: relative;\n      }\n\n      span[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        font-weight: normal;\n        display: inline-block;\n        text-align: center;\n      }\n\n      .toggle-strong-hide[_ngcontent-%COMP%] {\n        opacity: 0;\n        user-select: none;\n      }"],changeDetection:0}),t}()},g1Mv:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return v}));var i,a,c=r("8Y7J"),l=r("iELJ"),s=r("VDRc"),u=r("Fudl"),d=r("4avL"),f=((i=function(){function t(e){o(this,t),this.dialogRef=e}return n(t,[{key:"close",value:function(){this.dialogRef.close()}}]),t}()).\u0275fac=function(t){return new(t||i)(c["\u0275\u0275directiveInject"](l.g))},i.\u0275cmp=c["\u0275\u0275defineComponent"]({type:i,selectors:[["mg-admin-user-limit-dialog"]],decls:13,vars:0,consts:[["fxLayout","column",1,"dialog-content","user-content-page"],[1,"mg-centered","dialog-icon-container"],[1,"mg-centered"],["fxFlex","auto"],["type","outline",3,"click"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"mat-dialog-content",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"mg-icon"),c["\u0275\u0275text"](3,"warning-o"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"h1",2),c["\u0275\u0275text"](5,"It looks like your Minga is full"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"p",2),c["\u0275\u0275text"](7,"(at its admin member limit)"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"h2",2),c["\u0275\u0275text"](9," Please connect with your Minga administrator to get this resolved. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](10,"div",3),c["\u0275\u0275elementStart"](11,"mg-button",4),c["\u0275\u0275listener"]("click",(function(){return e.close()})),c["\u0275\u0275text"](12,"Understood"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())},directives:[l.e,s.e,u.a,s.b,d.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:auto;position:relative}@media (max-width:599px){.ios-browser[_nghost-%COMP%]{top:32px;margin-bottom:64px}}.close-btn[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:auto;padding:0;max-height:100vh}@media (min-width:600px){.dialog-content[_ngcontent-%COMP%]{min-width:414px;max-width:414px}}@media (min-width:600px) and (min-height:599px){.dialog-content[_ngcontent-%COMP%]{min-height:599px}}mat-dialog-content.dialog-content.user-content-page[_ngcontent-%COMP%]{padding:32px}mat-dialog-content.dialog-content.user-content-page[_ngcontent-%COMP%]   .dialog-icon-container[_ngcontent-%COMP%]{--mg-icon-size:64px}"],changeDetection:0}),i),p=r("SVse"),g=r("u9T3"),h=r("CO6v"),m=r("ls3q"),v=((a=n((function t(){o(this,t)}))).\u0275fac=function(t){return new(t||a)},a.\u0275mod=c["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[h.a,m.a,p.c,l.f,g.a]]}),a)},p3fa:function(e,r,i){"use strict";i.d(r,"a",(function(){return _}));var a,c=i("mrSG"),l=i("8Y7J"),s=i("IzEk"),u=i("g1Mv"),d=i("iELJ"),f=i("VDRc"),p=i("Fudl"),g=i("4avL"),h=((a=function(){function t(e){o(this,t),this.dialogRef=e}return n(t,[{key:"close",value:function(){this.dialogRef.close()}}]),t}()).\u0275fac=function(t){return new(t||a)(l["\u0275\u0275directiveInject"](d.g))},a.\u0275cmp=l["\u0275\u0275defineComponent"]({type:a,selectors:[["mg-group-limit-dialog"]],decls:11,vars:0,consts:[["fxLayout","column",1,"dialog-content","user-content-page"],[1,"mg-centered","dialog-icon-container"],[1,"mg-centered"],["fxFlex","auto"],["type","outline",3,"click"]],template:function(t,e){1&t&&(l["\u0275\u0275elementStart"](0,"mat-dialog-content",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"mg-icon"),l["\u0275\u0275text"](3,"warning-o"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"h1",2),l["\u0275\u0275text"](5,"Your Minga groups have maxed out!"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"h2",2),l["\u0275\u0275text"](7," Please connect with your Minga administrator to get this resolved. "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](8,"div",3),l["\u0275\u0275elementStart"](9,"mg-button",4),l["\u0275\u0275listener"]("click",(function(){return e.close()})),l["\u0275\u0275text"](10,"Understood"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},directives:[d.e,f.e,p.a,f.b,g.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:auto;position:relative}@media (max-width:599px){.ios-browser[_nghost-%COMP%]{top:32px;margin-bottom:64px}}.close-btn[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:auto;padding:0;max-height:100vh}@media (min-width:600px){.dialog-content[_ngcontent-%COMP%]{min-width:414px;max-width:414px}}@media (min-width:600px) and (min-height:599px){.dialog-content[_ngcontent-%COMP%]{min-height:599px}}mat-dialog-content.dialog-content.user-content-page[_ngcontent-%COMP%]{padding:32px}mat-dialog-content.dialog-content.user-content-page[_ngcontent-%COMP%]   .dialog-icon-container[_ngcontent-%COMP%]{--mg-icon-size:64px}"],changeDetection:0}),a);i("SVse"),i("u9T3"),i("CO6v"),i("ls3q");var m,v,y,x=((m=function(){function t(e){o(this,t),this.dialogRef=e}return n(t,[{key:"close",value:function(){this.dialogRef.close()}}]),t}()).\u0275fac=function(t){return new(t||m)(l["\u0275\u0275directiveInject"](d.g))},m.\u0275cmp=l["\u0275\u0275defineComponent"]({type:m,selectors:[["mg-user-limit-dialog"]],decls:13,vars:0,consts:[["fxLayout","column",1,"dialog-content","user-content-page"],[1,"mg-centered","dialog-icon-container"],[1,"mg-centered"],["fxFlex","auto"],["type","outline",3,"click"]],template:function(t,e){1&t&&(l["\u0275\u0275elementStart"](0,"mat-dialog-content",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"mg-icon"),l["\u0275\u0275text"](3,"warning-o"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"h1",2),l["\u0275\u0275text"](5,"It looks like your Minga is full"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"p",2),l["\u0275\u0275text"](7,"(at its member limit)"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"h2",2),l["\u0275\u0275text"](9," Please connect with your Minga administrator to get this resolved. "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](10,"div",3),l["\u0275\u0275elementStart"](11,"mg-button",4),l["\u0275\u0275listener"]("click",(function(){return e.close()})),l["\u0275\u0275text"](12,"Understood"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},directives:[d.e,f.e,p.a,f.b,g.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:auto;position:relative}@media (max-width:599px){.ios-browser[_nghost-%COMP%]{top:32px;margin-bottom:64px}}.close-btn[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:auto;padding:0;max-height:100vh}@media (min-width:600px){.dialog-content[_ngcontent-%COMP%]{min-width:414px;max-width:414px}}@media (min-width:600px) and (min-height:599px){.dialog-content[_ngcontent-%COMP%]{min-height:599px}}mat-dialog-content.dialog-content.user-content-page[_ngcontent-%COMP%]{padding:32px}mat-dialog-content.dialog-content.user-content-page[_ngcontent-%COMP%]   .dialog-icon-container[_ngcontent-%COMP%]{--mg-icon-size:64px}"],changeDetection:0}),m),w=i("1O3W"),b=i("3qIc"),O=i("HSxi"),k=i("GBt7"),C=i("lOMi"),S=((v=function(){function e(t){o(this,e),this.peopleCollectionService=t}return n(e,[{key:"getSummary",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){var n,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new k.PeopleCollectionSummaryRequest,t.next=3,this.peopleCollectionService.summary(n);case 3:return o=t.sent,t.abrupt("return",{totalCount:o.getTotalCount(),adminUsersCount:o.getAdminCount()});case 5:case"end":return t.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(t){return new(t||v)(l["\u0275\u0275inject"](C.PeopleCollection))},v.\u0275prov=l["\u0275\u0275defineInjectable"]({token:v,factory:v.\u0275fac,providedIn:"root"}),v),P=i("k/kw"),E=i("iInd"),_=((y=function(){function e(t,n,r,i,a,c,l){o(this,e),this.dialog=t,this.overlay=n,this.mingaStoreFacade=r,this.groupsFacade=i,this.peopleCollectionSummary=a,this.mingaManager=c,this.router=l}return n(e,[{key:"checkUserLimits",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!1);case 1:case"end":return t.stop()}}),e)})))}},{key:"checkAdminUserLimits",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!1);case 1:case"end":return t.stop()}}),e)})))}},{key:"checkBillableUserLimits",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!1);case 1:case"end":return t.stop()}}),e)})))}},{key:"checkGroupLimits",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mingaStoreFacade.activeMingaSubscription$.pipe(Object(s.a)(1)).toPromise();case 2:if(n=t.sent,t.t1=null!==n.groupSize,!t.t1){t.next=10;break}return t.next=7,this.groupsFacade.totalGroups$.pipe(Object(s.a)(1)).toPromise();case 7:t.t2=t.sent,t.t3=n.groupSize,t.t1=t.t2>=t.t3;case 10:if(t.t0=t.t1,!t.t0){t.next=15;break}return t.next=14,this._showGroupLimitDialog();case 14:t.t0=!0;case 15:return t.abrupt("return",t.t0);case 16:case"end":return t.stop()}}),e,this)})))}},{key:"_showUserLimitDialog",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.dialog.open(x,{panelClass:"mg-dialog-large",scrollStrategy:this.overlay.scrollStrategies.block(),disableClose:!0});case 1:case"end":return t.stop()}}),e,this)})))}},{key:"_showAdminUserRoleLimitDialog",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.dialog.open(u.a,{panelClass:"mg-dialog-large",scrollStrategy:this.overlay.scrollStrategies.block(),disableClose:!0});case 1:case"end":return t.stop()}}),e,this)})))}},{key:"_showGroupLimitDialog",value:function(){return Object(c.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.dialog.open(h,{panelClass:"mg-dialog-large",scrollStrategy:this.overlay.scrollStrategies.block(),disableClose:!0});case 1:case"end":return t.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(t){return new(t||y)(l["\u0275\u0275inject"](d.b),l["\u0275\u0275inject"](w.c),l["\u0275\u0275inject"](b.b),l["\u0275\u0275inject"](O.b),l["\u0275\u0275inject"](S),l["\u0275\u0275inject"](P.a),l["\u0275\u0275inject"](E.g))},y.\u0275prov=l["\u0275\u0275defineInjectable"]({token:y,factory:y.\u0275fac,providedIn:"root"}),y)}}])}();
//# sourceMappingURL=default~minga-app-src-app-groups-groups-overlays-module~minga-app-src-app-routes-admin-AdminRoutes-m~75b7b624-es5.js.map