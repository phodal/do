function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8/JR":function(e,t,n){"use strict";var r=n("8T9/"),o=n("Ibf7");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach((function(r){n.async?o(r,i,c):r.apply(c,i),r._once&&e.off(t,r)})),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},Gjsa:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,t,n){"use strict";var r=n("Gjsa");e.exports=function(e,t,n){e&&r((function(){e.apply(n||null,t||[])}))}},KRns:function(e,t){var n=global.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},PzH3:function(e,t,n){"use strict";var r=n("KRns"),o=n("Ys8N"),i=global.document,a=function(e,t,n,r){return e.addEventListener(t,n,r)},c=function(e,t,n,r){return e.removeEventListener(t,n,r)},l=[];function u(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<l.length;r++)if((o=l[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=l[r].wrapper;return l.splice(r,1),o}}global.addEventListener||(a=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=u(e,t,n)||function(e,t,n){return function(t){var r=t||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return l.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},c=function(e,t,n){var r=u(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:a,remove:c,fabricate:function(e,t,n){var a=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},YS7c:function(e,t,n){"use strict";var r=n("8/JR"),o=n("PzH3"),i=n("n6yW"),a=document,c=a.documentElement;function l(e,t,n,r){global.navigator.pointerEnabled?o[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],r):global.navigator.msPointerEnabled?o[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],r):(o[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],r),o[t](e,n,r))}function u(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function s(e){var t=e.getBoundingClientRect();return{left:t.left+d("scrollLeft","pageXOffset"),top:t.top+d("scrollTop","pageYOffset")}}function d(e,t){return void 0!==global[t]?global[t]:c.clientHeight?c[e]:a.body[e]}function f(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=a.elementFromPoint(t,n),o.className=i,r}function g(){return!1}function h(){return!0}function p(e){return e.width||e.right-e.left}function v(e){return e.height||e.bottom-e.top}function m(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(m(t)))}(e)}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function C(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,d,k,M,O,x,_,w,S,P,E,T=arguments.length;1===T&&!1===Array.isArray(e)&&(t=e,e=[]);var D,A=null,I=t||{};void 0===I.moves&&(I.moves=h),void 0===I.accepts&&(I.accepts=h),void 0===I.invalid&&(I.invalid=K),void 0===I.containers&&(I.containers=e||[]),void 0===I.isContainer&&(I.isContainer=g),void 0===I.copy&&(I.copy=!1),void 0===I.copySortSource&&(I.copySortSource=!1),void 0===I.revertOnSpill&&(I.revertOnSpill=!1),void 0===I.removeOnSpill&&(I.removeOnSpill=!1),void 0===I.direction&&(I.direction="vertical"),void 0===I.ignoreInputTextSelection&&(I.ignoreInputTextSelection=!0),void 0===I.mirrorContainer&&(I.mirrorContainer=a.body);var L=r({containers:I.containers,start:G,end:J,cancel:Z,remove:Q,destroy:Y,canMove:X,dragging:!1});return!0===I.removeOnSpill&&L.on("over",oe).on("out",ie),j(),L;function N(e){return-1!==L.containers.indexOf(e)||I.isContainer(e)}function j(e){var t=e?"remove":"add";l(c,t,"mousedown",W),l(c,t,"mouseup",z)}function H(e){l(c,e?"remove":"add","mousemove",$)}function R(e){var t=e?"remove":"add";o[t](c,"selectstart",B),o[t](c,"click",B)}function Y(){j(!0),z({})}function B(e){D&&e.preventDefault()}function W(e){if(x=e.clientX,_=e.clientY,1===u(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=F(t);n&&(D=n,H(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function $(e){if(D)if(0!==u(e)){if(void 0===e.clientX||e.clientX!==x||void 0===e.clientY||e.clientY!==_){if(I.ignoreInputTextSelection){var t=C("clientX",e),n=C("clientY",e);if(b(a.elementFromPoint(t,n)))return}var r=D;H(!0),R(),J(),V(r);var o=s(k);M=C("pageX",e)-o.left,O=C("pageY",e)-o.top,i.add(P||k,"gu-transit"),ae(),re(e)}}else z({})}function F(e){if(!(L.dragging&&n||N(e))){for(var t=e;m(e)&&!1===N(m(e));){if(I.invalid(e,t))return;if(!(e=m(e)))return}var r=m(e);if(r&&!I.invalid(e,t)&&I.moves(e,r,t,y(e)))return{item:e,source:r}}}function X(e){return!!F(e)}function G(e){var t=F(e);t&&V(t)}function V(e){se(e.item,e.source)&&(P=e.item.cloneNode(!0),L.emit("cloned",P,e.item,"copy")),d=e.source,k=e.item,w=S=y(e.item),L.dragging=!0,L.emit("drag",k,d)}function K(){return!1}function J(){if(L.dragging){var e=P||k;q(e,m(e))}}function U(){D=!1,H(!0),R(!0)}function z(e){if(U(),L.dragging){var t=P||k,r=C("clientX",e),o=C("clientY",e),i=ne(f(n,r,o),r,o);i&&(P&&I.copySortSource||!P||i!==d)?q(t,i):I.removeOnSpill?Q():Z()}}function q(e,t){var n=m(e);P&&I.copySortSource&&t===d&&n.removeChild(k),te(t)?L.emit("cancel",e,d,d):L.emit("drop",e,t,d,S),ee()}function Q(){if(L.dragging){var e=P||k,t=m(e);t&&t.removeChild(e),L.emit(P?"cancel":"remove",e,t,d),ee()}}function Z(e){if(L.dragging){var t=arguments.length>0?e:I.revertOnSpill,n=P||k,r=m(n),o=te(r);!1===o&&t&&(P?r&&r.removeChild(P):d.insertBefore(n,w)),o||t?L.emit("cancel",n,d,d):L.emit("drop",n,r,d,S),ee()}}function ee(){var e=P||k;U(),ce(),e&&i.rm(e,"gu-transit"),E&&clearTimeout(E),L.dragging=!1,A&&L.emit("out",e,A,d),L.emit("dragend",e),d=k=P=w=S=E=A=null}function te(e,t){var r;return r=void 0!==t?t:n?S:y(P||k),e===d&&r===w}function ne(e,t,n){for(var r=e;r&&!o();)r=m(r);return r;function o(){if(!1===N(r))return!1;var o=le(r,e),i=ue(r,o,t,n);return!!te(r,i)||I.accepts(k,r,d,i)}}function re(e){if(n){e.preventDefault();var t=C("clientX",e),r=C("clientY",e),o=r-O;n.style.left=t-M+"px",n.style.top=o+"px";var i=P||k,a=f(n,t,r),c=ne(a,t,r),l=null!==c&&c!==A;(l||null===c)&&(A&&h("out"),A=c,l&&h("over"));var u=m(i);if(c!==d||!P||I.copySortSource){var s,g=le(c,a);if(null!==g)s=ue(c,g,t,r);else{if(!0!==I.revertOnSpill||P)return void(P&&u&&u.removeChild(i));s=w,c=d}(null===s&&l||s!==i&&s!==y(i))&&(S=s,c.insertBefore(i,s),L.emit("shadow",i,c,d))}else u&&u.removeChild(i)}function h(e){L.emit(e,i,A,d)}}function oe(e){i.rm(e,"gu-hide")}function ie(e){L.dragging&&i.add(e,"gu-hide")}function ae(){if(!n){var e=k.getBoundingClientRect();(n=k.cloneNode(!0)).style.width=p(e)+"px",n.style.height=v(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),I.mirrorContainer.appendChild(n),l(c,"add","mousemove",re),i.add(I.mirrorContainer,"gu-unselectable"),L.emit("cloned",n,k,"mirror")}}function ce(){n&&(i.rm(I.mirrorContainer,"gu-unselectable"),l(c,"remove","mousemove",re),m(n).removeChild(n),n=null)}function le(e,t){for(var n=t;n!==e&&m(n)!==e;)n=m(n);return n===c?null:n}function ue(e,t,n,r){var o,i="horizontal"===I.direction;return t!==e?(o=t.getBoundingClientRect(),(i?n>o.left+p(o)/2:r>o.top+v(o)/2)?y(t):t):function(){var t,o,a,c=e.children.length;for(t=0;t<c;t++){if(a=(o=e.children[t]).getBoundingClientRect(),i&&a.left+a.width/2>n)return o;if(!i&&a.top+a.height/2>r)return o}return null}()}function se(e,t){return"boolean"==typeof I.copy?I.copy:I.copy(e,t)}}},Ys8N:function(e,t,n){"use strict";var r=[],o="",i=/^on/;for(o in global)i.test(o)&&r.push(o.slice(2));e.exports=r},a1rO:function(e,t,n){"use strict";n.r(t);var r,o,i,a=n("ofXK"),c=n("tyNb"),l=n("YS7c"),u=n.n(l),s=n("fXoL"),d=n("XNiG"),f=n("quSY"),g=n("pLZG"),h=n("lJxs"),p=function e(t,n,r){_classCallCheck(this,e),this.name=t,this.drake=n,this.options=r,this.initEvents=!1},v={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},m=Object.keys(v).map((function(e){return v[e]})),b=u.a||l,y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;_classCallCheck(this,e),this.build=t},C=function(e,t,n){return function(r){return r.pipe(Object(g.a)((function(n){var r=n.event,o=n.name;return r===e&&(void 0===t||o===t)})),Object(h.a)((function(e){var t=e.name,r=e.args;return n(t,r)})))}},k=function(e,t){var n=_slicedToArray(t,3);return{name:e,el:n[0],container:n[1],source:n[2]}},M=((i=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_classCallCheck(this,e),this.drakeFactory=n,this.dispatch$=new d.a,this.drag=function(e){return t.dispatch$.pipe(C(v.Drag,e,(function(e,t){var n=_slicedToArray(t,2);return{name:e,el:n[0],source:n[1]}})))},this.dragend=function(e){return t.dispatch$.pipe(C(v.DragEnd,e,(function(e,t){return{name:e,el:_slicedToArray(t,1)[0]}})))},this.drop=function(e){return t.dispatch$.pipe(C(v.Drop,e,(function(e,t){var n=_slicedToArray(t,4);return{name:e,el:n[0],target:n[1],source:n[2],sibling:n[3]}})))},this.elContainerSource=function(e){return function(n){return t.dispatch$.pipe(C(e,n,k))}},this.cancel=this.elContainerSource(v.Cancel),this.remove=this.elContainerSource(v.Remove),this.shadow=this.elContainerSource(v.Shadow),this.over=this.elContainerSource(v.Over),this.out=this.elContainerSource(v.Out),this.cloned=function(e){return t.dispatch$.pipe(C(v.Cloned,e,(function(e,t){var n=_slicedToArray(t,3);return{name:e,clone:n[0],original:n[1],cloneType:n[2]}})))},this.dropModel=function(e){return t.dispatch$.pipe(C(v.DropModel,e,(function(e,t){var n=_slicedToArray(t,9);return{name:e,el:n[0],target:n[1],source:n[2],sibling:n[3],item:n[4],sourceModel:n[5],targetModel:n[6],sourceIndex:n[7],targetIndex:n[8]}})))},this.removeModel=function(e){return t.dispatch$.pipe(C(v.RemoveModel,e,(function(e,t){var n=_slicedToArray(t,6);return{name:e,el:n[0],container:n[1],source:n[2],item:n[3],sourceModel:n[4],sourceIndex:n[5]}})))},this.groups={},null===this.drakeFactory&&(this.drakeFactory=new y)}return _createClass(e,[{key:"add",value:function(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}},{key:"find",value:function(e){return this.groups[e]}},{key:"destroy",value:function(e){var t=this.find(e);t&&(t.drake&&t.drake.destroy(),delete this.groups[e])}},{key:"createGroup",value:function(e,t){return this.add(new p(e,this.drakeFactory.build([],t),t))}},{key:"handleModels",value:function(e){var t,n,r,o=this,i=e.name,a=e.drake,c=e.options;a.on("remove",(function(e,t,r){if(a.models){var c=a.models[a.containers.indexOf(r)],l=(c=c.slice(0)).splice(n,1)[0];o.dispatch$.next({event:v.RemoveModel,name:i,args:[e,t,r,l,c,n]})}})),a.on("drag",(function(e,r){a.models&&(t=e,n=o.domIndexOf(e,r))})),a.on("drop",(function(e,l,u,s){if(a.models&&l){r=o.domIndexOf(e,l);var d,f=a.models[a.containers.indexOf(u)],g=a.models[a.containers.indexOf(l)];if(l===u)d=(f=f.slice(0)).splice(n,1)[0],f.splice(r,0,d),g=f;else{var h=t!==e;if(d=f[n],h){if(!c.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");d=c.copyItem(d)}if(h||(f=f.slice(0)).splice(n,1),(g=g.slice(0)).splice(r,0,d),h)try{l.removeChild(e)}catch(p){}}o.dispatch$.next({event:v.DropModel,name:i,args:[e,l,u,s,d,f,g,n,r]})}}))}},{key:"setupEvents",value:function(e){var t=this;if(!e.initEvents){e.initEvents=!0;var n=e.name;m.forEach((function(r){e.drake.on(r,(function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];t.dispatch$.next({event:r,name:n,args:o})}))}))}}},{key:"domIndexOf",value:function(e,t){return Array.prototype.indexOf.call(t.children,e)}}]),e}()).\u0275fac=function(e){return new(e||i)(s.Xb(y,8))},i.\u0275prov=s.Jb({token:i,factory:i.\u0275fac}),i),O=((o=function(){function e(t,n){_classCallCheck(this,e),this.el=t,this.dragulaService=n,this.dragulaModelChange=new s.n}return _createClass(e,[{key:"ngOnChanges",value:function(e){if(e&&e.dragula){var t=e.dragula,n=t.previousValue,r=!!t.currentValue;!!n&&this.teardown(n),r&&this.setup()}else if(e&&e.dragulaModel){var o=e.dragulaModel,i=o.previousValue,a=o.currentValue,c=this.group.drake;if(this.dragula&&c){c.models=c.models||[];var l=c.models.indexOf(i);-1!==l?(c.models.splice(l,1),a&&c.models.splice(l,0,a)):a&&c.models.push(a)}}}},{key:"setup",value:function(){var e=this,t=this.dragulaService.find(this.dragula);t||(t=this.dragulaService.createGroup(this.dragula,{})),function(t){e.dragulaModel&&(t.drake.models?t.drake.models.push(e.dragulaModel):t.drake.models=[e.dragulaModel])}(t),t.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=t}},{key:"subscribe",value:function(e){var t=this;this.subs=new f.a,this.subs.add(this.dragulaService.dropModel(e).subscribe((function(e){var n=e.source,r=e.target,o=e.sourceModel,i=e.targetModel;n===t.el.nativeElement?t.dragulaModelChange.emit(o):r===t.el.nativeElement&&t.dragulaModelChange.emit(i)}))),this.subs.add(this.dragulaService.removeModel(e).subscribe((function(e){var n=e.source,r=e.sourceModel;n===t.el.nativeElement&&t.dragulaModelChange.emit(r)})))}},{key:"teardown",value:function(e){this.subs&&this.subs.unsubscribe();var t=this.dragulaService.find(e);if(t){var n=t.drake.containers.indexOf(this.el.nativeElement);if(-1!==n&&t.drake.containers.splice(n,1),this.dragulaModel&&t.drake&&t.drake.models){var r=t.drake.models.indexOf(this.dragulaModel);-1!==r&&t.drake.models.splice(r,1)}}}},{key:"ngOnDestroy",value:function(){this.teardown(this.dragula)}},{key:"container",get:function(){return this.el&&this.el.nativeElement}}]),e}()).\u0275fac=function(e){return new(e||o)(s.Nb(s.l),s.Nb(M))},o.\u0275dir=s.Ib({type:o,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[s.zb()]}),o),x=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[M]}}}]),e}()).\u0275mod=s.Lb({type:r}),r.\u0275inj=s.Kb({factory:function(e){return new(e||r)}}),r),_=n("PCNd"),w=n("jhN1"),S=n("8YY3"),P=n("/t3+"),E=n("bTqV"),T=["itemElement"];function D(e,t){if(1&e&&(s.Tb(0,"div",12),s.Tb(1,"h2"),s.Ac(2),s.Sb(),s.Sb()),2&e){var n=t.$implicit,r=t.index,o=s.ec();s.lc("id","",r,"_header"),s.jc("ngStyle",o.getHeaderHeight()),s.Bb(2),s.Bc(n.title)}}function A(e,t){if(1&e){var n=s.Ub();s.Tb(0,"div",15,16),s.bc("dblclick",(function(){s.rc(n);var e=t.index,r=s.ec().index;return s.ec().enableEdit(r,e)}))("keydown.enter",(function(e){s.rc(n);var r=t.index,o=s.ec().index;return s.ec().updateItem(o,r,e)})),s.Ac(2),s.Sb()}if(2&e){var r=t.$implicit,o=t.index,i=s.ec().index,a=s.ec();s.mc("id","pipe",i,"_child",o,""),s.jc("ngStyle",a.getEditableStyle()),s.Bb(2),s.Cc(" ",r," ")}}function I(e,t){if(1&e){var n=s.Ub();s.Tb(0,"div",13),s.bc("dragulaModelChange",(function(e){return s.rc(n),t.$implicit.items=e})),s.yc(1,A,3,4,"div",14),s.Sb()}if(2&e){var r=t.$implicit,o=t.index,i=s.ec();s.lc("id","",o,"_pipe"),s.jc("dragulaModel",r.items)("ngStyle",i.getContainerStyle(r)),s.Bb(1),s.jc("ngForOf",r.items)}}var L,N,j=[{id:1,title:"Process",items:["Commit Code","PUSH Hooks","RUN CI","Deploy Dev","E2E Test","Manual Test","Deploy UAT","Manual Test","Go-Live Apply","Go-Live"],backgroundColor:"#00a300",textColor:"#ffffff"},{id:2,title:"People",items:[""],backgroundColor:"#ff0097",textColor:"#ffffff"},{id:3,title:"Tooling",items:["Git & GitHub","Git","Jenkins","","","","",""],backgroundColor:"#99b433",textColor:"#ffffff"},{id:4,title:"Artifacts",items:["Code","","Build Log","","","","","","",""],backgroundColor:"#1e7145",textColor:"#ffffff"},{id:5,title:"Pain",items:[""],backgroundColor:"#00aba9",textColor:"#ffffff"},{id:6,title:"Duration",items:[""],backgroundColor:"#ffc40d",textColor:"#ffffff"}],H=((N=function(){function e(t,n){_classCallCheck(this,e),this.storage=t,this.renderer=n,this.pipeData=j}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.maxLength=this.getMaxLength(this.pipeData),this.storage.get("ledge.path").subscribe((function(t){t?(e.pipeData=t,e.fillDefaultValue()):e.fillDefaultValue()}))}},{key:"fillDefaultValue",value:function(){this.pipeData=this.fillArrayWithEmpty(this.pipeData)}},{key:"fillArrayWithEmpty",value:function(e){for(var t=0;t<e.length;t++)for(var n=e[t].items.length,r=0;r<=this.maxLength;r++)r>n&&(e[t].items[r-1]="");return e}},{key:"addColumn",value:function(){this.maxLength++,this.pipeData=this.fillArrayWithEmpty(this.pipeData)}},{key:"removeColumn",value:function(){if(!(this.pipeData.length<=0)){var e=this;this.maxLength--,this.pipeData=function(t){for(var n=0;n<t.length;n++)for(var r=0;r<=e.maxLength;r++)r>e.maxLength-1&&t[n].items.splice(-1,1);return t}(this.pipeData)}}},{key:"getContainerStyle",value:function(e){var t=this.getContainerHeightWidth(),n=t.itemWidth,r=t.containerHeight;return{minWidth:this.maxLength*(n+21)+"px",height:r,background:e.backgroundColor,color:e.textColor}}},{key:"getContainerHeightWidth",value:function(){var e=(window.innerWidth-200)/this.maxLength-20;return e<100&&(e=100),{itemWidth:e,containerHeight:e+20+2+"px",itemHeightPx:e+"px"}}},{key:"getEditableStyle",value:function(){var e=this.getContainerHeightWidth().itemHeightPx;return{height:e,width:e}}},{key:"getHeaderHeight",value:function(){return{height:this.getContainerHeightWidth().itemWidth+20+12+"px"}}},{key:"getMaxLength",value:function(e){for(var t=e[0].items.length,n=0;n<e.length;n++){var r=e[n].items.length;r>t&&(t=r)}return t}},{key:"updateItem",value:function(e,t,n){this.pipeData[e].items[t]=n.target.innerText,this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}},{key:"enableEdit",value:function(e,t){var n="pipe".concat(e,"_child").concat(t),r=this.itemElements.filter((function(e){return e.nativeElement.id===n}));r.length>0&&this.renderer.setProperty(r[0].nativeElement,"contentEditable",!0)}},{key:"resetAll",value:function(){this.pipeData=j,this.maxLength=this.getMaxLength(j),this.fillDefaultValue(),this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}}]),e}()).\u0275fac=function(e){return new(e||N)(s.Nb(S.a),s.Nb(s.E))},N.\u0275cmp=s.Hb({type:N,selectors:[["component-path"]],viewQuery:function(e,t){var n;1&e&&s.Ec(T,!0),2&e&&s.oc(n=s.cc())&&(t.itemElements=n)},decls:25,vars:3,consts:[[1,"path"],[1,"header","markdown"],[1,"spacer"],[1,"right"],["color","warn","mat-raised-button","",3,"click"],["color","accent","mat-raised-button","",3,"disabled","click"],["color","primary","mat-raised-button","",3,"click"],[1,"page"],["id","pipe-header"],["class","pipe-header",3,"id","ngStyle",4,"ngFor","ngForOf"],["id","pipe",1,"wrapper"],["class","container","dragula","ITEMS",3,"id","dragulaModel","ngStyle","dragulaModelChange",4,"ngFor","ngForOf"],[1,"pipe-header",3,"id","ngStyle"],["dragula","ITEMS",1,"container",3,"id","dragulaModel","ngStyle","dragulaModelChange"],["class","editable","ngDefaultControl","",3,"id","ngStyle","dblclick","keydown.enter",4,"ngFor","ngForOf"],["ngDefaultControl","",1,"editable",3,"id","ngStyle","dblclick","keydown.enter"],["itemElement",""]],template:function(e,t){1&e&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"h3"),s.Ac(3,"Path to Production"),s.Sb(),s.Sb(),s.Tb(4,"mat-toolbar"),s.Tb(5,"mat-toolbar-row"),s.Ob(6,"span"),s.Ob(7,"span",2),s.Tb(8,"div",3),s.Tb(9,"button",4),s.bc("click",(function(){return t.resetAll()})),s.Ac(10,"Reset"),s.Sb(),s.Tb(11,"span",2),s.Ac(12,"\xa0"),s.Sb(),s.Tb(13,"button",5),s.bc("click",(function(){return t.removeColumn()})),s.Ac(14,"Remove"),s.Sb(),s.Tb(15,"span",2),s.Ac(16,"\xa0"),s.Sb(),s.Tb(17,"button",6),s.bc("click",(function(){return t.addColumn()})),s.Ac(18,"Add"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(19,"div",7),s.Tb(20,"div",0),s.Tb(21,"div",8),s.yc(22,D,3,3,"div",9),s.Sb(),s.Tb(23,"div",10),s.yc(24,I,2,4,"div",11),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&e&&(s.Bb(13),s.jc("disabled",0===t.maxLength),s.Bb(9),s.jc("ngForOf",t.pipeData),s.Bb(2),s.jc("ngForOf",t.pipeData))},directives:[P.a,P.c,E.a,a.j,a.l,O],styles:["#pipe[_ngcontent-%COMP%]{position:relative;float:right;display:inline-block;width:calc(100% - 138px);max-width:100%;height:180px;padding-right:32px}.header[_ngcontent-%COMP%]{margin-top:1em}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{padding:0;margin-right:6px;margin-top:12px;background-color:hsla(0,0%,100%,.2);max-width:100%;width:100%;color:#fff;line-height:1.3em;border:1px dashed #fff;border-radius:6px;font-weight:400}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:150px;max-height:150px;width:10%;max-width:10%}.container[_ngcontent-%COMP%]:nth-child(odd), .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .gu-mirror[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.2)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .gu-mirror[_ngcontent-%COMP%]{margin:10px;padding:5px;transition:opacity .4s ease-in-out}.container[_ngcontent-%COMP%] > div.empty[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;overflow-y:auto;cursor:move;cursor:grab;cursor:-webkit-grab}.gu-mirror[_ngcontent-%COMP%]{cursor:grabbing;cursor:-webkit-grabbing}#header[_ngcontent-%COMP%]{height:80px;text-align:center}#header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:80px}#pipe-header[_ngcontent-%COMP%]{position:absolute;left:20px}.pipe-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;top:calc(50% - 1.6rem)}.add-item[_ngcontent-%COMP%]{right:4rem}.add-item[_ngcontent-%COMP%], .download[_ngcontent-%COMP%]{top:3rem;position:absolute}.download[_ngcontent-%COMP%]{right:35rem}.remove-column[_ngcontent-%COMP%]{top:3rem;position:absolute;right:18rem}#color-green[_ngcontent-%COMP%]{background-color:#00a300}#color-greendark[_ngcontent-%COMP%]{background-color:#1e7145}#color-greenlight[_ngcontent-%COMP%]{background-color:#99b433}#color-magenta[_ngcontent-%COMP%]{background-color:#ff0097}#color-purplelight[_ngcontent-%COMP%]{background-color:#9f00a7}#color-purple[_ngcontent-%COMP%]{background-color:#7e3878}#color-purpledark[_ngcontent-%COMP%]{background-color:#603cba}#color-darken[_ngcontent-%COMP%]{background-color:#1d1d1d}#color-teal[_ngcontent-%COMP%]{background-color:#00aba9}#color-bluelight[_ngcontent-%COMP%]{background-color:#eff4ff}#color-blue[_ngcontent-%COMP%]{background-color:#2d89ef}#color-bluedark[_ngcontent-%COMP%]{background-color:#2b5797}#color-yellow[_ngcontent-%COMP%]{background-color:#ffc40d}#color-orange[_ngcontent-%COMP%]{background-color:#e3a21a}#color-orangedark[_ngcontent-%COMP%]{background-color:#da532c}#color-red[_ngcontent-%COMP%]{background-color:#b91d47}#color-redlight[_ngcontent-%COMP%]{background-color:#e11}#color-white[_ngcontent-%COMP%]{background-color:#fff}"]}),N),R=((L=function(){function e(t){_classCallCheck(this,e),t.setTitle("Ledge DevOps \u77e5\u8bc6\u5e73\u53f0 - \u8bbe\u8ba1 Devops")}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||L)(s.Nb(w.d))},L.\u0275cmp=s.Hb({type:L,selectors:[["app-design"]],decls:1,vars:0,template:function(e,t){1&e&&s.Ob(0,"component-path")},directives:[H],styles:[""]}),L),Y=n("KYhu");n.d(t,"DesignModule",(function(){return W}));var B,W=((B=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:B}),B.\u0275inj=s.Kb({factory:function(e){return new(e||B)},imports:[[a.c,_.a,Y.a,x.forRoot(),c.e.forChild([{path:"",component:R}])]]}),B)},n6yW:function(e,t,n){"use strict";var r={};function o(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}}}]);