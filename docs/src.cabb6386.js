parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=L,exports.hydrate=M,exports.h=exports.createElement=a,exports.Fragment=v,exports.createRef=h,exports.Component=y,exports.cloneElement=F,exports.createContext=R,exports.toChildArray=C,exports._unmount=W,exports.options=exports.isValidElement=void 0;var e,t,n,o,l,r,_,i,u={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var o,l=arguments,r={};for(o in t)"key"!==o&&"ref"!==o&&(r[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return d(e,r,t&&t.key,t&&t.ref)}function d(t,n,o,l){var r={type:t,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return e.vnode&&e.vnode(r),r}function h(){return{}}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function k(t){(!t.__d&&(t.__d=!0)&&n.push(t)&&!o++||r!==e.debounceRendering)&&((r=e.debounceRendering)||l)(x)}function x(){for(var e;o=n.length;)e=n.sort(function(e,t){return e.__v.__b-t.__v.__b}),n=[],e.some(function(e){var t,n,o,l,r,_;e.__d&&(r=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],o=N(_,l,p({},l),t.__n,void 0!==_.ownerSVGElement,null,n,null==r?m(l):r),U(n,l),o!=r&&g(l)))})}function b(e,t,n,o,l,r,_,i,c){var p,a,d,h,v,y,g,k=n&&n.__k||s,x=k.length;if(i==u&&(i=null!=r?r[0]:x?m(n,0):null),p=0,t.__k=C(t.__k,function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=k[p])||d&&n.key==d.key&&n.type===d.type)k[p]=void 0;else for(a=0;a<x;a++){if((d=k[a])&&n.key==d.key&&n.type===d.type){k[a]=void 0;break}d=null}if(h=N(e,n,d=d||u,o,l,r,_,i,c),(a=n.ref)&&d.ref!=a&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(a,n.__c||h,n)),null!=h){var s;if(null==y&&(y=h),void 0!==n.__d)s=n.__d,n.__d=void 0;else if(r==d||h!=i||null==h.parentNode){e:if(null==i||i.parentNode!==e)e.appendChild(h),s=null;else{for(v=i,a=0;(v=v.nextSibling)&&a<x;a+=2)if(v==h)break e;e.insertBefore(h,i),s=i}"option"==t.type&&(e.value="")}i=void 0!==s?s:h.nextSibling,"function"==typeof t.type&&(t.__d=i)}else i&&d.__e==i&&i.parentNode!=e&&(i=m(d))}return p++,n}),t.__e=y,null!=r&&"function"!=typeof t.type)for(p=r.length;p--;)null!=r[p]&&f(r[p]);for(p=x;p--;)null!=k[p]&&W(k[p],k[p]);if(g)for(p=0;p<g.length;p++)T(g[p],g[++p],g[++p])}function C(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)C(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return n}function w(e,t,n,o,l){var r;for(r in n)r in t||P(e,r,null,n[r],o);for(r in t)l&&"function"!=typeof t[r]||"value"===r||"checked"===r||n[r]===t[r]||P(e,r,t[r],n[r],o)}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===c.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,l){var r,_,i,u,s;if(l?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(_ in o)n&&_ in n||S(r,_,"");if(n)for(i in n)o&&n[i]===o[i]||S(r,i,n[i])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(o||e.addEventListener(t,E,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,E,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!l&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function E(t){this.l[t.type](e.event?e.event(t):t)}function N(t,n,o,l,r,_,i,u,s){var c,f,a,d,h,m,g,k,x,C,w=n.type;if(void 0!==n.constructor)return null;(c=e.__b)&&c(n);try{e:if("function"==typeof w){if(k=n.props,x=(c=w.contextType)&&l[c.__c],C=c?x?x.props.value:c.__:l,o.__c?g=(f=n.__c=o.__c).__=f.__E:("prototype"in w&&w.prototype.render?n.__c=f=new w(k,C):(n.__c=f=new y(k,C),f.constructor=w,f.render=A),x&&x.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=w.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,w.getDerivedStateFromProps(k,f.__s))),d=f.props,h=f.state,a)null==w.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==w.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)){for(f.props=k,f.state=f.__s,f.__d=!1,f.__v=n,n.__e=o.__e,n.__k=o.__k,f.__h.length&&i.push(f),c=0;c<n.__k.length;c++)n.__k[c]&&(n.__k[c].__=n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,h,m)})}f.context=C,f.props=k,f.state=f.__s,(c=e.__r)&&c(n),f.__d=!1,f.__v=n,f.__P=t,c=f.render(f.props,f.state,f.context),n.__k=null!=c&&c.type==v&&null==c.key?c.props.children:Array.isArray(c)?c:[c],null!=f.getChildContext&&(l=p(p({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),b(t,n,o,l,r,_,i,u,s),f.base=n.__e,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else n.__e=D(o.__e,n,o,l,r,_,i,s);(c=e.diffed)&&c(n)}catch(t){e.__e(t,n,o)}return n.__e}function U(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function D(e,t,n,o,l,r,_,i){var c,p,f,a,d,h=n.props,v=t.props;if(l="svg"===t.type||l,null!=r)for(c=0;c<r.length;c++)if(null!=(p=r[c])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,r[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),r=null}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else if(t!==n){if(null!=r&&(r=s.slice.call(e.childNodes)),f=(h=n.props||u).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!i){if(h===u)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}w(e,v,h,l,i),t.__k=t.props.children,a||b(e,t,n,o,"foreignObject"!==t.type&&l,r,_,u,i),i||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function T(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function W(t,n,o){var l,r,_;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||T(l,null,n)),o||"function"==typeof t.type||(o=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(_=0;_<l.length;_++)l[_]&&W(l[_],n,o);null!=r&&f(r)}function A(e,t,n){return this.constructor(e,n)}function L(t,n,o){var l,r,i;e.__&&e.__(t,n),r=(l=o===_)?null:o&&o.__k||n.__k,t=a(v,null,[t]),i=[],N(n,(l?n:o||n).__k=t,r||u,u,void 0!==n.ownerSVGElement,o&&!l?[o]:r?null:s.slice.call(n.childNodes),i,o||u,l),U(i,t)}function M(e,t){L(e,t,_)}function F(e,t){return t=p(p({},e.props),t),arguments.length>2&&(t.children=s.slice.call(arguments,2)),d(e.type,t,t.key||e.key,t.ref||e.ref)}function R(e){var t={},n={__c:"__cC"+i++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,l=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&o.some(function(e){e.context=t.value,k(e)})},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}exports.isValidElement=t,exports.options=e,exports.options=e={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return k(n.__E=n)}catch(t){e=t}throw e}},exports.isValidElement=t=function(e){return null!=e&&void 0===e.constructor},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=v,n=[],o=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=u,i=0;
},{}],"MwGB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useState=s,exports.useReducer=a,exports.useEffect=p,exports.useLayoutEffect=h,exports.useRef=v,exports.useImperativeHandle=m,exports.useMemo=H,exports.useCallback=l,exports.useContext=d,exports.useDebugValue=x,exports.useErrorBoundary=y;var _,n,t,o=require("preact"),e=[],u=o.options.__r,r=o.options.diffed,i=o.options.__c,c=o.options.unmount;function f(_){o.options.__h&&o.options.__h(n);var t=n.__H||(n.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function s(_){return a(q,_)}function a(t,o,e){var u=f(_++);return u.__c||(u.__c=n,u.__=[e?e(o):q(void 0,o),function(_){var n=t(u.__[0],_);u.__[0]!==n&&(u.__[0]=n,u.__c.setState({}))}]),u.__}function p(t,o){var e=f(_++);D(e.__H,o)&&(e.__=t,e.__H=o,n.__H.__h.push(e))}function h(t,o){var e=f(_++);D(e.__H,o)&&(e.__=t,e.__H=o,n.__h.push(e))}function v(_){return H(function(){return{current:_}},[])}function m(_,n,t){h(function(){"function"==typeof _?_(n()):_&&(_.current=n())},null==t?t:t.concat(_))}function H(n,t){var o=f(_++);return D(o.__H,t)?(o.__H=t,o.__h=n,o.__=n()):o.__}function l(_,n){return H(function(){return _},n)}function d(t){var o=n.context[t.__c];if(!o)return t.__;var e=f(_++);return null==e.__&&(e.__=!0,o.sub(n)),o.props.value}function x(_,n){o.options.useDebugValue&&o.options.useDebugValue(n?n(_):_)}function y(t){var o=f(_++),e=s();return o.__=t,n.componentDidCatch||(n.componentDidCatch=function(_){o.__&&o.__(_),e[1](_)}),[e[0],function(){e[1](void 0)}]}function E(){e.some(function(_){if(_.__P)try{_.__H.__h.forEach(b),_.__H.__h.forEach(g),_.__H.__h=[]}catch(n){return o.options.__e(n,_.__v),!0}}),e=[]}function b(_){_.t&&_.t()}function g(_){var n=_.__();"function"==typeof n&&(_.t=n)}function D(_,n){return!_||n.some(function(n,t){return n!==_[t]})}function q(_,n){return"function"==typeof n?n(_):n}o.options.__r=function(t){u&&u(t),_=0,(n=t.__c).__H&&(n.__H.__h.forEach(b),n.__H.__h.forEach(g),n.__H.__h=[])},o.options.diffed=function(_){r&&r(_);var n=_.__c;if(n){var u=n.__H;u&&u.__h.length&&(1!==e.push(n)&&t===o.options.requestAnimationFrame||((t=o.options.requestAnimationFrame)||function(_){var n,t=function(){clearTimeout(o),cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(E))}},o.options.__c=function(_,n){n.some(function(_){try{_.__h.forEach(b),_.__h=_.__h.filter(function(_){return!_.__||g(_)})}catch(t){n.some(function(_){_.__h&&(_.__h=[])}),n=[],o.options.__e(t,_.__v)}}),i&&i(_,n)},o.options.unmount=function(_){c&&c(_);var n=_.__c;if(n){var t=n.__H;if(t)try{t.__.forEach(function(_){return _.t&&_.t()})}catch(_){o.options.__e(_,n.__v)}}};
},{"preact":"aSor"}],"SMyf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=(0,e.createContext)({konashi:null,setKonashi:function(e){}}),r=t;exports.default=r;
},{"preact":"aSor"}],"N9AU":[function(require,module,exports) {
class t{static get HIGH(){return 1}static get LOW(){return 0}static get OUTPUT(){return 1}static get INPUT(){return 0}static get PULLUP(){return 1}static get NO_PULLS(){return 0}static get PIO0(){return 0}static get PIO1(){return 1}static get PIO2(){return 2}static get PIO3(){return 3}static get PIO4(){return 4}static get PIO5(){return 5}static get PIO6(){return 6}static get PIO7(){return 7}static get AIO0(){return 0}static get AIO1(){return 1}static get AIO2(){return 2}static get I2C_SDA(){return 6}static get I2C_SCL(){return 7}static get PWM_DISABLE(){return 0}static get PWM_ENABLE(){return 1}static get PWM_ENABLE_LED_MODE(){return 2}static get PWM_LED_PERIOD(){return 1e4}static get ANALOG_REFERENCE(){return 1300}static get I2C_DATA_MAX_LENGTH(){return 16}static get I2C_DISABLE(){return 0}static get I2C_ENABLE(){return 1}static get I2C_ENABLE_100K(){return 1}static get I2C_ENABLE_400K(){return 2}static get I2C_STOP_CONDITION(){return 0}static get I2C_START_CONDITION(){return 1}static get I2C_RESTART_CONDITION(){return 2}static get UART_RATE_2K4(){return 10}static get UART_RATE_9K6(){return 40}static get UART_DATA_MAX_LENGTH(){return 19}static get UART_DISABLE(){return 0}static get UART_ENABLE(){return 1}static _createUUID(t){return"229b"+t+"-03fb-40da-98a7-b0def65c2d4b"}static get _serviceUUID(){return t._createUUID("ff00")}static get defaultFilter(){return{filters:[{namePrefix:"konashi"}],optionalServices:[t._serviceUUID]}}static async find(r=!0,a=t.defaultFilter){const i=await navigator.bluetooth.requestDevice(a),e=new t(i);return r&&await e.connect().catch(async t=>{/retrieve services/.test(t)&&await e.connect()}),e}constructor(t){this._device=t,this._gatt=null,this._service=null,this._c12c={},this._pioOutputs=0}get _c12cUUIDs(){return{pioSetting:t._createUUID("3000"),pioPullUp:t._createUUID("3001"),pioOutput:t._createUUID("3002"),pioInputNotification:t._createUUID("3003"),pwmConfig:t._createUUID("3004"),pwmParameter:t._createUUID("3005"),pwmDuty:t._createUUID("3006"),analogDrive:t._createUUID("3007"),analogInput:t._createUUID("3008"),analogRead0:t._createUUID("3008"),analogRead1:t._createUUID("3009"),analogRead2:t._createUUID("300a"),i2cConfig:t._createUUID("300b"),i2cStartStop:t._createUUID("300c"),i2cWrite:t._createUUID("300d"),i2cReadParameter:t._createUUID("300e"),i2cRead:t._createUUID("300f"),uartConfig:t._createUUID("3010"),uartBaudRate:t._createUUID("3011"),uartTx:t._createUUID("3012"),uartRxNotification:t._createUUID("3013"),hardwareReset:t._createUUID("3014"),hardwareLowBatteryNotification:t._createUUID("3015")}}async connect(){this._gatt=await this._device.gatt.connect().catch(t=>this._throwError(t)),this._service=await this._gatt.getPrimaryService(t._serviceUUID).catch(t=>this._throwError(t));for(const t in this._c12cUUIDs){const r=await this._service.getCharacteristic(this._c12cUUIDs[t]).catch(t=>this._throwError(t));this._c12c[t]=r}}disconnect(){this._gatt.disconnect()}get isConnected(){let t=!1;return this._gatt&&(t=this._gatt.connected),t}get deviceName(){return this._device.name}async pinMode(r,a){let i=(await this._c12c.pioSetting.readValue().catch(t=>this._throwError(t))).getUint8(0);a===t.OUTPUT?i|=1<<r:i&=255&~(1<<r),await this._c12c.pioSetting.writeValue(new Uint8Array([i])).catch(t=>this._throwError(t))}async pinModeAll(t){t>=0&&t<=255&&await this._c12c.pioSetting.writeValue(new Uint8Array([t])).catch(t=>this._throwError(t))}async pinPullUp(r,a){let i=(await this._c12c.pioPullUp.readValue().catch(t=>this._throwError(t))).getUint8(0);a===t.PULLUP?i|=1<<r:i&=255&~(1<<r),await this._c12c.pioPullUp.writeValue(new Uint8Array([i])).catch(t=>this._throwError(t))}async digitalWrite(r,a){a===t.HIGH?this._pioOutputs|=1<<r:this._pioOutputs&=255&~(1<<r),await this._c12c.pioOutput.writeValue(new Uint8Array([this._pioOutputs])).catch(t=>this._throwError(t))}async digitalWriteAll(t){t>=0&&t<=255&&await this._c12c.pioOutput.writeValue(new Uint8Array([t])).catch(t=>this._throwError(t))}async digitalRead(t){return(await this._c12c.pioInputNotification.readValue().catch(t=>this._throwError(t))).getUint8(0)>>t&1}async startDigitalInputNotification(t){this.onReceived=(r=>{const a=r.target.value;t(a.getUint8(0))}),await this._c12c.pioInputNotification.startNotifications().catch(t=>this._throwError(t)),this._c12c.pioInputNotification.addEventListener("characteristicvaluechanged",this.onReceived)}async stopDigitalInputNotification(){await this._c12c.pioInputNotification.stopNotifications().catch(t=>this._throwError(t)),this._c12c.pioInputNotification.removeEventListener("characteristicvaluechanged",this.onReceived)}async analogRead(r){let a;switch(r){case t.AIO0:a=this._c12c.analogRead0;break;case t.AIO1:a=this._c12c.analogRead1;break;case t.AIO2:a=this._c12c.analogRead2;break;default:return 0}const i=await a.readValue().catch(t=>this._throwError(t));return i.getUint8(0)<<8|i.getUint8(1)}async pwmMode(r,a){let i=(await this._c12c.pwmConfig.readValue().catch(t=>this._throwError(t))).getUint8(0);a===t.PWM_ENABLE||a===t.PWM_ENABLE_LED_MODE?i|=1<<r:i&=255&~(1<<r),a===t.PWM_ENABLE_LED_MODE?(await this._c12c.pwmConfig.writeValue(new Uint8Array([i])).catch(t=>this._throwError(t)),await this.pwmPeriod(r,t.PWM_LED_PERIOD).catch(t=>this._throwError(t)),await this.pwmDuty(r,0).catch(t=>this._throwError(t))):await this._c12c.pwmConfig.writeValue(new Uint8Array([i])).catch(t=>this._throwError(t))}async pwmPeriod(t,r){const a=new Uint8Array([t,r>>24&255,r>>16&255,r>>8&255,r>>0&255]);await this._c12c.pwmPeriod.writeValue(a).catch(t=>this._throwError(t))}async pwmDuty(t,r){const a=parseInt(r),i=new Uint8Array([t,a>>24&255,a>>16&255,a>>8&255,a>>0&255]);await this._c12c.pwmDuty.writeValue(i).catch(t=>this._throwError(t))}async pwmWrite(r,a){const i=Math.min(100,Math.max(0,a)),e=t.PWM_LED_PERIOD*i/100;await this.pwmDuty(r,e).catch(t=>this._throwError(t))}async uartMode(r){if(r!=t.UART_DISABLE&&r!=t.UART_ENABLE)throw new Error("Invalid UART modes.");await this._c12c.uartConfig.writeValue(new Uint8Array([r])).catch(t=>this._throwError(t))}async uartBaudRate(r){if(r!=t.UART_RATE_2K4&&r!=t.UART_RATE_9K6)throw new Error("Invalid UART baud rate.");const a=new Uint8Array([r>>8&255,255&r]);await this._c12c.uartBaudRate.writeValue(a).catch(t=>this._throwError(t))}async uartWrite(r){const a=t.UART_DATA_MAX_LENGTH;r.length<=a&&await this._uartWrite(r).catch(t=>this._throwError(t));const i=[];for(let t=0;t<r.length;t+=a)i.push(r.slice(t,t+a));await this._uartWriteChunks(i,0).catch(t=>this._throwError(t))}async _uartWriteChunks(t,r){t.length<=r||(await this._uartWrite(t[r]).catch(t=>this._throwError(t)),await this._uartWriteChunks(t,r+1).catch(t=>this._throwError(t)))}async _uartWrite(r){if(t.UART_DATA_MAX_LENGTH<r.length)throw new Error("The data size has to be less then "+t.UART_DATA_MAX_LENGTH+".");const a=new Uint8Array(r.length+1);a[0]=r.length,r.forEach((t,r)=>{a[r+1]=t}),await this._c12c.uartTx.writeValue(a).catch(t=>this._throwError(t))}async i2cMode(r){if(r!=t.I2C_DISABLE&&r!=t.I2C_ENABLE&&r!=t.I2C_ENABLE_100K&&r!=t.I2C_ENABLE_400K)throw new Error("Invalid I2C mode");await this._c12c.i2cConfig.writeValue(new Uint8Array([r]))}async i2cStopCondition(){await this._i2cSendCondition(t.I2C_STOP_CONDITION)}async i2cStartCondition(){await this._i2cSendCondition(t.I2C_START_CONDITION)}async i2cRestartCondition(){await this._i2cSendCondition(t.I2C_RESTART_CONDITION)}async _i2cSendCondition(r){if(r!=t.I2C_STOP_CONDITION&&r!=t.I2C_START_CONDITION&&r!=t.I2C_RESTART_CONDITION)throw new Error("Invalid I2C condition.");await this._c12c.i2cStartStop.writeValue(new Uint8Array([r]))}async i2cWrite(r,a){const i=t.I2C_DATA_MAX_LENGTH;a.length<=i&&await this._i2cWrite(r,a);const e=[];for(let t=0;t<a.length;t+=i)e.push(a.slice(t,t+i));await this._i2cWriteChunks(r,e,0)}async _i2cWriteChunks(t,r,a){r.length<=a||(await this._i2cWrite(t,r[a]).catch(t=>this._throwError(t)),await this._i2cWriteChunks(t,r,a+1).catch(t=>this._throwError(t)))}async _i2cWrite(r,a){if(t.I2C_DATA_MAX_LENGTH<a.length)throw new Error("The data size has to be less than "+t.I2C_DATA_MAX_LENGTH+".");const i=new Uint8Array(t.I2C_DATA_MAX_LENGTH+2);i[0]=a.length+1,i[1]=r<<1&254,a.forEach((t,r)=>{i[r+2]=t}),await this._c12c.i2cWrite.writeValue(i).catch(t=>this._throwError(t))}async i2cRead(t,r){return await this._i2cReadRequest(t,r).catch(t=>this._throwError(t)),await this._i2cRead()}async _i2cReadRequest(r,a){if(t.I2C_DATA_MAX_LENGTH<a)throw new Error("The data size has to be less than "+t.I2C_DATA_MAX_LENGTH+".");const i=new Uint8Array(2);i[0]=a,i[1]=r<<1|1,await this._c12c.i2cReadParameter.writeValue(i).catch(t=>this._throwError(t))}async _i2cRead(t){t(await this._c12c.i2cRead.readValue().catch(t=>this._throwError(t)))}async reset(){await this._c12c.hardwareReset.writeValue(new Uint8Array([1])).catch(t=>this._throwError(t))}async readBatteryLevel(){const t=await this._gatt.getPrimaryService("battery_service").catch(t=>this._throwError(t)),r=await t.getCharacteristic("battery_level").catch(t=>this._throwError(t));return(await r.readValue().catch(t=>this._throwError(t))).getUint8(0)}async readSignalStrength(){return 0}_throwError(t){throw console.log(t),t}}module.exports=t,module.exports.default=t;
},{}],"PN9d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=require("preact/hooks"),n=o(require("./KonashiContext")),r=o(require("@ux-xu/konashi-web-bluetooth"));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(t){u(t)}}function l(e){try{c(r.throw(e))}catch(t){u(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,l)}c((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function l(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(l){u=[6,l],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}},l=function(){var o=(0,t.useState)("connect"),l=o[0],c=o[1],i=(0,t.useState)(""),s=i[0],f=i[1],d=(0,t.useContext)(n.default),p=d.konashi,h=d.setKonashi;return(0,e.h)("button",{className:"el_connectBtn "+s,onClick:function(e){return u(void 0,void 0,void 0,function(){var t;return a(this,function(n){switch(n.label){case 0:return e.preventDefault(),null!==p?[3,2]:(t=h,[4,r.default.find(!0,r.default.defaultFilter)]);case 1:return t.apply(void 0,[n.sent()]),[3,3];case 2:p.disconnect(),h(null),n.label=3;case 3:return c(null!==p?"connect":"connected"),f(null!==p?"":"isConnected"),[2]}})})}},l)},c=l;exports.default=c;
},{"preact":"aSor","preact/hooks":"MwGB","./KonashiContext":"SMyf","@ux-xu/konashi-web-bluetooth":"N9AU"}],"oBXH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),r=a(require("./ConnectBtn"));function a(e){return e&&e.__esModule?e:{default:e}}var t=function(){return(0,e.h)("div",{className:"ly_header_wrapper"},(0,e.h)("header",{className:"ly_header"},(0,e.h)("div",{className:"ly_header_inner"},(0,e.h)("h1",{className:"bl_header_title"},"konashi 3.0 inspector"),(0,e.h)("div",{className:"bl_header_button"},(0,e.h)(r.default,null)))))},l=t;exports.default=l;
},{"preact":"aSor","./ConnectBtn":"PN9d"}],"ZeUo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),r=u(require("./KonashiContext")),t=require("preact/hooks");function u(e){return e&&e.__esModule?e:{default:e}}var a=function(u){var a=(0,t.useContext)(r.default).konashi;return(0,e.h)("div",{className:"ly_main"},a,(0,e.h)("div",null,u.current))},o=a;exports.default=o;
},{"preact":"aSor","./KonashiContext":"SMyf","preact/hooks":"MwGB"}],"vlcX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.NavbarItem=void 0;var e=require("preact"),a=function(a){return(0,e.h)("button",{className:"bl_navbarItem "+(a.current===a.id?"selected":""),role:"tab",name:a.id,onClick:a.onClick},(0,e.h)("div",{className:"bl_navbarItem_icon"},(0,e.h)("i",{className:"fas fa-2x "+a.icon})),(0,e.h)("div",{className:"bl_navbarItem_text"},(0,e.h)("p",null,a.text)))};exports.NavbarItem=a;var t=a;exports.default=t;
},{"preact":"aSor"}],"pREm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.NavbarContents=void 0;var e=require("preact"),t=require("./NavbarItem"),r=[{id:"info",text:"info",icon:"fa-info"},{id:"pio",text:"PIO",icon:"fa-adjust"},{id:"pwm",text:"PWM",icon:"fa-wave-square"},{id:"aio",text:"AIO",icon:"fa-tachometer-alt"},{id:"more",text:"more",icon:"fa-bars"}];exports.NavbarContents=r;var a=function(a){var n=function(e){var t=e.currentTarget.getAttribute("name");a.setCurrent(null!==t?t:"info")},i=r.map(function(r){return(0,e.h)(t.NavbarItem,{key:r.id,id:r.id,icon:r.icon,text:r.text,current:a.current,onClick:n})});return(0,e.h)("div",{className:"ly_navbar"},(0,e.h)("div",{className:"ly_navbar_inner"},i))},n=a;exports.default=n;
},{"preact":"aSor","./NavbarItem":"vlcX"}],"ONNq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),r=require("preact/hooks"),t=l(require("./KonashiContext")),u=l(require("./Header")),a=l(require("./Main")),i=l(require("./Navbar"));function l(e){return e&&e.__esModule?e:{default:e}}var n=function(){var l=(0,r.useState)(null),n={konashi:l[0],setKonashi:l[1]},o=(0,r.useState)("info"),s=o[0],d=o[1];return(0,e.h)("div",{className:"app"},(0,e.h)(t.default.Provider,{value:n},(0,e.h)(u.default,null)),(0,e.h)(t.default.Provider,{value:n},(0,e.h)(a.default,{current:s})),(0,e.h)(i.default,{current:s,setCurrent:d}))},o=n;exports.default=o;
},{"preact":"aSor","preact/hooks":"MwGB","./KonashiContext":"SMyf","./Header":"oBXH","./Main":"ZeUo","./Navbar":"pREm"}],"Mhc4":[function(require,module,exports) {

},{}],"zo2T":[function(require,module,exports) {
"use strict";var e=require("preact"),r=s(require("./tsx/App"));function s(e){return e&&e.__esModule?e:{default:e}}require("ress"),require("./scss/style.scss");var t=document.getElementById("root");(0,e.render)((0,e.h)(r.default,null),t);
},{"preact":"aSor","./tsx/App":"ONNq","ress":"Mhc4","./scss/style.scss":"Mhc4"}]},{},["zo2T"], null)
//# sourceMappingURL=/konashi-inspector/src.cabb6386.js.map