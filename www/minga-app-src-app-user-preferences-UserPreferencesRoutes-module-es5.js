!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(V){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),c=new S(r||[]);return a(o,"_invoke",{value:P(e,n,c)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(V){return{type:"throw",arg:V}}}t.wrap=l;var p={};function d(){}function h(){}function v(){}var m={};u(m,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(I([])));y&&y!==n&&r.call(y,o)&&(m=y);var w=v.prototype=d.prototype=Object.create(m);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;a(this,"_invoke",{value:function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,c){var s=f(e[a],e,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(l).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}})}function P(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return O()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=k(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=f(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function I(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},x(b.prototype),u(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new b(l(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=I,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,c=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(l){u=!0,a=l}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?i:String(i)),r)}var a,i}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"Gk8+":function(r,a,o){"use strict";o.r(a),o.d(a,"UserPreferencesRoutesModule",(function(){return be}));var s,u=o("8Y7J"),l=o("iInd"),f=o("5m4e"),p=o("mrSG"),d=o("5km/"),h=o("lJxs"),v=o("5I2t"),m=o("KUBD"),g=o("2Vo4"),y=o("itXk"),w=o("pLZG"),x=o("tqRt"),b=o("6BHC"),P=((s=function(){function r(e,a){i(this,r),this.store=e,this.userPreferencesProto=a,this._userPreferencesMetadata$=new g.a([]),this._userPreferencesValues$=new g.a({});var o=Object(y.b)(this._userPreferencesMetadata$,this._userPreferencesValues$);this.userPreferences$=o.pipe(Object(w.a)((function(e){return n(e,1)[0].length>0})),Object(h.a)((function(e){var r,a=n(e,2),i=a[0],o=a[1],c=[],s=t(i);try{for(s.s();!(r=s.n()).done;){var u=r.value,l=u.getId();void 0!==o[l]&&c.push({id:l,name:u.getName(),description:u.getDescription(),value:o[l],category:u.getCategory()})}}catch(f){s.e(f)}finally{s.f()}return c})))}return c(r,[{key:"fetch",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.fetchMetadata(),this.fetchPreferencesIfNeeded()]);case 2:case"end":return e.stop()}}),t,this)})))}},{key:"fetchIfNeeded",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.fetchMetadataIfNeeded(),this.fetchPreferencesIfNeeded()]);case 2:case"end":return e.stop()}}),t,this)})))}},{key:"updatePreference",value:function(t,n){return Object(p.a)(this,void 0,void 0,e().mark((function r(){var a,i,o,c,s=this;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new m.UserPreferencesUpdateRequest).setId(t),i=new m.UserPreferenceValue,"string"==typeof n?i.setStringValue(n):"boolean"==typeof n&&i.setBoolValue(n),a.setValue(i),o=this.getPreferencesValue(t),this.setUserPreferencesValue(t,n),e.next=8,this.userPreferencesProto.update(a).catch((function(e){throw s.setUserPreferencesValue(t,o),e}));case 8:c=e.sent.getUpdatedUserPreferences(),this.triggerLocalUpdates(t,c.getIdValuesMap().get(t)||null),this.setUserPreferenceValuesFromMessage(c);case 10:case"end":return e.stop()}}),r,this)})))}},{key:"resetPreferences",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){var n,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new m.UserPreferencesResetRequest,e.next=3,this.userPreferencesProto.reset(n);case 3:r=e.sent.getResettedUserPreferences(),this.setUserPreferenceValuesFromMessage(r);case 5:case"end":return e.stop()}}),t,this)})))}},{key:"getPreferencesValue",value:function(e){return this._userPreferencesValues$.getValue()[e]}},{key:"setUserPreferencesValue",value:function(e,t){var n=this._userPreferencesValues$.getValue();n[e]=t,this._userPreferencesValues$.next(n)}},{key:"setUserPreferenceValuesFromMessage",value:function(e){var t=this._userPreferencesValues$.getValue();e.getIdValuesMap().forEach((function(e,n){e.hasBoolValue()?t[n]=e.getBoolValue():e.hasStringValue()&&(t[n]=e.getStringValue())})),this._userPreferencesValues$.next(t)}},{key:"fetchPreferencesIfNeeded",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=0===Object.keys(this._userPreferencesValues$.getValue()).length,!e.t0){e.next=4;break}return e.next=4,this.fetchPreferences();case 4:case"end":return e.stop()}}),t,this)})))}},{key:"fetchPreferences",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){var n,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new m.UserPreferencesGetRequest,e.next=3,this.userPreferencesProto.get(n);case 3:r=e.sent.getUserPreferences(),this.setUserPreferenceValuesFromMessage(r);case 5:case"end":return e.stop()}}),t,this)})))}},{key:"fetchMetadataIfNeeded",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=0===this._userPreferencesMetadata$.getValue().length,!e.t0){e.next=4;break}return e.next=4,this.fetchMetadata();case 4:case"end":return e.stop()}}),t,this)})))}},{key:"fetchMetadata",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){var n,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new m.UserPreferencesMetadataRequest,e.next=3,this.userPreferencesProto.metadata(n);case 3:r=e.sent,this._userPreferencesMetadata$.next(r.getMetadataList());case 5:case"end":return e.stop()}}),t,this)})))}},{key:"triggerLocalUpdates",value:function(e,t){t?"directMessaging"===e&&t.hasBoolValue()&&this.store.dispatch(Object(v.q)({dmPersonalPreference:t.getBoolValue()})):console.warn("Invalid triggerLocalUpdates value for key",e)}}]),r}()).\u0275fac=function(e){return new(e||s)(u["\u0275\u0275inject"](x.i),u["\u0275\u0275inject"](b.UserPreferences))},s.\u0275prov=u["\u0275\u0275defineInjectable"]({token:s,factory:s.\u0275fac,providedIn:"root"}),s),k=o("GFah"),j=o("JF7H"),E=o("zc8W"),S=o("3qIc"),I=o("iELJ"),O=o("UWMR"),V=o("Fudl"),C=o("SVse"),M=o("o4Yh"),L=o("MAbt"),_=o("SFBQ"),F=o("VDRc"),U=o("jMqV"),$=o("Q2Ze"),B=o("i1AJ"),N=o("e6WT"),T=o("s7LF"),A=["*"];function G(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",2),u["\u0275\u0275elementStart"](1,"div",3),u["\u0275\u0275projection"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"mat-slide-toggle",4),u["\u0275\u0275listener"]("change",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().valueChange.emit(e.checked)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("checked",r.value)}}var D=function(){return{standalone:!0}};function R(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"mat-form-field",5),u["\u0275\u0275elementStart"](1,"mat-label"),u["\u0275\u0275projection"](2,1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"input",6),u["\u0275\u0275listener"]("ngModelChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().valueChange.emit(e)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngModelOptions",u["\u0275\u0275pureFunction0"](2,D))("ngModel",r.value)}}var q,J,W=[[["mg-user-preference-input-label"]],[["mg-user-preference-input-label"]]],Y=["mg-user-preference-input-label","mg-user-preference-input-label"],H=((J=c((function e(){i(this,e)}))).\u0275fac=function(e){return new(e||J)},J.\u0275cmp=u["\u0275\u0275defineComponent"]({type:J,selectors:[["mg-user-preference-input-label"]],ngContentSelectors:A,decls:1,vars:0,template:function(e,t){1&e&&(u["\u0275\u0275projectionDef"](),u["\u0275\u0275projection"](0))},encapsulation:2,changeDetection:0}),J),K=((q=function(){function e(){i(this,e),this.value=null,this.valueChange=new u.EventEmitter}return c(e,[{key:"isBool",value:function(){return"boolean"==typeof this.value}},{key:"isString",value:function(){return"string"==typeof this.value}}]),e}()).\u0275fac=function(e){return new(e||q)},q.\u0275cmp=u["\u0275\u0275defineComponent"]({type:q,selectors:[["mg-user-preference-input"]],inputs:{value:"value"},outputs:{valueChange:"valueChange"},ngContentSelectors:Y,decls:2,vars:2,consts:[["fxLayout","row","fxLayoutGap","8px","class","pref-input-wrap",4,"ngIf"],["mgFormField","",4,"ngIf"],["fxLayout","row","fxLayoutGap","8px",1,"pref-input-wrap"],["fxFlex","auto",1,"checkbox-label"],[1,"no-mg",3,"checked","change"],["mgFormField",""],["matInput","","type","text",3,"ngModelOptions","ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275projectionDef"](W),u["\u0275\u0275template"](0,G,4,1,"div",0),u["\u0275\u0275template"](1,R,4,3,"mat-form-field",1)),2&e&&(u["\u0275\u0275property"]("ngIf",t.isBool()),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.isString()))},directives:[C.o,F.e,F.f,F.b,U.a,$.d,B.a,$.h,N.b,T.d,T.t,T.w],styles:[".pref-input-wrap[_ngcontent-%COMP%]{align-items:center}"],changeDetection:0}),q),Q=o("FlXp"),X=o("UO+7");function Z(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",11),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.ngIf;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",n," ")}}function z(e,t){if(1&e&&u["\u0275\u0275element"](0,"mg-tooltip",15),2&e){var n=u["\u0275\u0275nextContext"]().$implicit;u["\u0275\u0275property"]("label",n.description)}}function ee(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"mg-user-preference-input",13),u["\u0275\u0275listener"]("valueChange",(function(e){u["\u0275\u0275restoreView"](n);var r=t.$implicit;return u["\u0275\u0275nextContext"](2).preferenceValueChange(r,e)})),u["\u0275\u0275elementStart"](1,"mg-user-preference-input-label"),u["\u0275\u0275text"](2),u["\u0275\u0275template"](3,z,1,1,"mg-tooltip",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;u["\u0275\u0275property"]("value",r.value),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",r.name," "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",r.description)}}function te(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",5),u["\u0275\u0275elementStart"](1,"mat-expansion-panel",6),u["\u0275\u0275elementStart"](2,"mat-expansion-panel-header"),u["\u0275\u0275elementStart"](3,"mat-panel-title",7),u["\u0275\u0275elementStart"](4,"strong"),u["\u0275\u0275text"](5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](6,ee,4,3,"mg-user-preference-input",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](n.category),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",n.preferences)("ngForTrackBy",r.preferenceTrackBy)}}function ne(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"a",16),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().unlinkAccounts()})),u["\u0275\u0275text"](1,"Unlink all your accounts"),u["\u0275\u0275elementEnd"]()}}function re(e,t){1&e&&u["\u0275\u0275element"](0,"mg-default-parent-group-picker")}var ae,ie,oe,ce,se,ue=((ae=function(){function n(e,r,a,o,c,s,u){i(this,n),this.userPreferences=e,this.rootService=r,this.authService=a,this.authInfo=o,this.dialog=s,this.snackBar=u,this.person$=this.authInfo.authPerson$,this.ssoInfo$=this.authInfo.linkedSsoProviderInfo$,this.groupTrackBy=function(e,t){return t.category},this.preferenceTrackBy=function(e,t){return t.id},this.districtFeatureEnabled$=c.observeDistrictFeatureEnabled(),this.groupedUserPreferences$=e.userPreferences$.pipe(Object(h.a)((function(e){var n,r=[],a=new Map,i=t(e);try{for(i.s();!(n=i.n()).done;){var o=n.value,c=a.get(o.category);c?(c.push(o),a.set(o.category,c)):a.set(o.category,[o])}}catch(s){i.e(s)}finally{i.f()}return a.forEach((function(e,t){r.push({category:t,preferences:e})})),r})))}return c(n,[{key:"ngOnInit",value:function(){this.rootService.addLoadingPromise(this.userPreferences.fetchIfNeeded())}},{key:"_updatePreference",value:function(t,n){return Object(p.a)(this,void 0,void 0,e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.userPreferences.updatePreference(t.id,n);case 2:case"end":return e.stop()}}),r,this)})))}},{key:"preferenceValueChange",value:function(e,t){this._updatePreference(e,t)}},{key:"unlinkAccounts",value:function(){return Object(p.a)(this,void 0,void 0,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.unlinkAllAccounts();case 2:if(!e.sent){e.next=6;break}this.dialog.open(d.k,{data:{text:"Successfully unlinked your accounts"}}),e.next=7;break;case 6:this.snackBar.open("Oops! We had an issue unlinking your account. Please try again later.");case 7:case"end":return e.stop()}}),t,this)})))}}]),n}()).\u0275fac=function(e){return new(e||ae)(u["\u0275\u0275directiveInject"](P),u["\u0275\u0275directiveInject"](k.a),u["\u0275\u0275directiveInject"](j.a),u["\u0275\u0275directiveInject"](E.a),u["\u0275\u0275directiveInject"](S.b),u["\u0275\u0275directiveInject"](I.b),u["\u0275\u0275directiveInject"](O.b))},ae.\u0275cmp=u["\u0275\u0275defineComponent"]({type:ae,selectors:[["ng-component"]],decls:26,vars:13,consts:[[1,"mg-headline","page-header"],[1,"default-icon"],[1,"card-container"],["class","mg-headline person-name",4,"ngIf"],["class","user-preference-input-wrap mg-minicopy",4,"ngFor","ngForOf","ngForTrackBy"],[1,"user-preference-input-wrap","mg-minicopy"],["mgExpansionPanel",""],[1,"mg-headline3"],[1,"small-user-content-page"],["href","javascript:;",3,"click",4,"ngIf"],[4,"ngIf"],[1,"mg-headline","person-name"],[3,"value","valueChange",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","valueChange"],[3,"label",4,"ngIf"],[3,"label"],["href","javascript:;",3,"click"]],template:function(e,t){var n;(1&e&&(u["\u0275\u0275elementStart"](0,"h1",0),u["\u0275\u0275elementStart"](1,"mg-icon",1),u["\u0275\u0275text"](2,"settings-o"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](3," Preferences\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"div",2),u["\u0275\u0275template"](5,Z,2,1,"div",3),u["\u0275\u0275pipe"](6,"async"),u["\u0275\u0275template"](7,te,7,3,"div",4),u["\u0275\u0275pipe"](8,"async"),u["\u0275\u0275elementStart"](9,"div",5),u["\u0275\u0275elementStart"](10,"mat-expansion-panel",6),u["\u0275\u0275elementStart"](11,"mat-expansion-panel-header"),u["\u0275\u0275elementStart"](12,"mat-panel-title",7),u["\u0275\u0275elementStart"](13,"strong"),u["\u0275\u0275text"](14,"Connect"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"div",8),u["\u0275\u0275elementStart"](16,"p"),u["\u0275\u0275elementStart"](17,"strong"),u["\u0275\u0275text"](18,"Connecting your Minga Account"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"p"),u["\u0275\u0275text"](20," Keep it simple and secure. Login using one of these services so you don\u2019t have to use your password every time. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](21,"mg-sso-ui"),u["\u0275\u0275template"](22,ne,2,0,"a",9),u["\u0275\u0275pipe"](23,"async"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](24,re,1,0,"mg-default-parent-group-picker",10),u["\u0275\u0275pipe"](25,"async")),2&e)&&(u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngIf",null==(n=u["\u0275\u0275pipeBind1"](6,5,t.person$))?null:n.displayName),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",u["\u0275\u0275pipeBind1"](8,7,t.groupedUserPreferences$))("ngForTrackBy",t.groupTrackBy),u["\u0275\u0275advance"](15),u["\u0275\u0275property"]("ngIf",u["\u0275\u0275pipeBind1"](23,9,t.ssoInfo$)),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",u["\u0275\u0275pipeBind1"](25,11,t.districtFeatureEnabled$)))},directives:[V.a,C.o,C.n,M.c,L.a,M.f,M.g,_.a,K,H,Q.a,X.a],pipes:[C.b],styles:["[_nghost-%COMP%]{display:block;--feed-item-margin-side:16px}@media (min-width:600px){[_nghost-%COMP%]{--feed-item-margin-side:0}}h1[_ngcontent-%COMP%]{margin-left:var(--feed-item-margin-side);margin-right:var(--feed-item-margin-side)}.user-preference-input-wrap[_ngcontent-%COMP%]{margin:4px 12px;color:#737373}.card-container[_ngcontent-%COMP%]{display:block;overflow:hidden;border-radius:8px;background-color:#fff;box-shadow:0 0 6px rgba(0,0,0,.15);margin:12px var(--feed-item-margin-side,16px) var(--feed-item-margin-top,4px) var(--feed-item-margin-side,16px);text-align:left;max-width:510px;position:relative;padding:0;min-width:289px}.card-container[_ngcontent-%COMP%]   .person-name[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:16px 20px}"],changeDetection:0}),ae),le=o("fy1K"),fe=o("6Bu3"),pe=o("0dDr"),de=o("ls3q"),he=o("37Vl"),ve=o("u9T3"),me=o("HxU+"),ge=((ce=c((function e(){i(this,e)}))).\u0275fac=function(e){return new(e||ce)},ce.\u0275mod=u["\u0275\u0275defineNgModule"]({type:ce}),ce.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[me.a,C.c,T.m,N.c,$.f,U.b,ve.a]]}),ce),ye=((oe=c((function e(){i(this,e)}))).\u0275fac=function(e){return new(e||oe)},oe.\u0275mod=u["\u0275\u0275defineNgModule"]({type:oe}),oe.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[C.c]]}),oe),we=((ie=c((function e(){i(this,e)}))).\u0275fac=function(e){return new(e||ie)},ie.\u0275mod=u["\u0275\u0275defineNgModule"]({type:ie}),ie.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[ye,ge,de.a,le.a,pe.a,fe.a,he.a,C.c,M.b]]}),ie),xe=[{path:"",component:ue,canActivate:[f.a]}],be=((se=c((function e(){i(this,e)}))).\u0275fac=function(e){return new(e||se)},se.\u0275mod=u["\u0275\u0275defineNgModule"]({type:se}),se.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[we,l.k.forChild(xe)]]}),se)}}])}();
//# sourceMappingURL=minga-app-src-app-user-preferences-UserPreferencesRoutes-module-es5.js.map