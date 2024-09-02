(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ml(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Le={},Lr=[],jt=()=>{},bg=()=>!1,Ao=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fl=t=>t.startsWith("onUpdate:"),it=Object.assign,Ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pg=Object.prototype.hasOwnProperty,we=(t,e)=>Pg.call(t,e),ae=Array.isArray,$r=t=>Ro(t)==="[object Map]",Qf=t=>Ro(t)==="[object Set]",ue=t=>typeof t=="function",He=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Yf=t=>(Ne(t)||ue(t))&&ue(t.then)&&ue(t.catch),Xf=Object.prototype.toString,Ro=t=>Xf.call(t),Sg=t=>Ro(t).slice(8,-1),Jf=t=>Ro(t)==="[object Object]",$l=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cg=/-(\w)/g,Xt=bo(t=>t.replace(Cg,(e,n)=>n?n.toUpperCase():"")),Vg=/\B([A-Z])/g,wr=bo(t=>t.replace(Vg,"-$1").toLowerCase()),Po=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=bo(t=>t?`on${Po(t)}`:""),jn=(t,e)=>!Object.is(t,e),fa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xg=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Dg=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Dc;const ed=()=>Dc||(Dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?Mg(r):Bl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Ne(t))return t}const Ng=/;(?![^(]*\))/g,Og=/:([^]+)/,kg=/\/\*[^]*?\*\//g;function Mg(t){const e={};return t.replace(kg,"").split(Ng).forEach(n=>{if(n){const r=n.split(Og);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ut(t){let e="";if(He(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Ut(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lg=Ml(Fg);function td(t){return!!t||t===""}const nd=t=>!!(t&&t.__v_isRef===!0),et=t=>He(t)?t:t==null?"":ae(t)||Ne(t)&&(t.toString===Xf||!ue(t.toString))?nd(t)?et(t.value):JSON.stringify(t,rd,2):String(t),rd=(t,e)=>nd(e)?rd(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[da(r,i)+" =>"]=s,n),{})}:Qf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>da(n))}:Gn(e)?da(e):Ne(e)&&!ae(e)&&!Jf(e)?String(e):e,da=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class $g{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bg(t,e=Wt){e&&e.active&&e.effects.push(t)}function Ug(){return Wt}let hr;class Ul{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Wn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(jg(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Mn,n=hr;try{return Mn=!0,hr=this,this._runnings++,Nc(this),this.fn()}finally{Oc(this),this._runnings--,hr=n,Mn=e}}stop(){this.active&&(Nc(this),Oc(this),this.onStop&&this.onStop(),this.active=!1)}}function jg(t){return t.value}function Nc(t){t._trackId++,t._depsLength=0}function Oc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)sd(t.deps[e],t);t.deps.length=t._depsLength}}function sd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Mn=!0,La=0;const id=[];function Wn(){id.push(Mn),Mn=!1}function Qn(){const t=id.pop();Mn=t===void 0?!0:t}function jl(){La++}function ql(){for(La--;!La&&$a.length;)$a.shift()()}function od(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&sd(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const $a=[];function ad(t,e,n){jl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&$a.push(r.scheduler)))}ql()}const ld=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ba=new WeakMap,fr=Symbol(""),Ua=Symbol("");function Ct(t,e,n){if(Mn&&hr){let r=Ba.get(t);r||Ba.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ld(()=>r.delete(n))),od(hr,s)}}function pn(t,e,n,r,s,i){const a=Ba.get(t);if(!a)return;let l=[];if(e==="clear")l=[...a.values()];else if(n==="length"&&ae(t)){const u=Number(r);a.forEach((h,d)=>{(d==="length"||!Gn(d)&&d>=u)&&l.push(h)})}else switch(n!==void 0&&l.push(a.get(n)),e){case"add":ae(t)?$l(n)&&l.push(a.get("length")):(l.push(a.get(fr)),$r(t)&&l.push(a.get(Ua)));break;case"delete":ae(t)||(l.push(a.get(fr)),$r(t)&&l.push(a.get(Ua)));break;case"set":$r(t)&&l.push(a.get(fr));break}jl();for(const u of l)u&&ad(u,4);ql()}const qg=Ml("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn)),kc=Hg();function Hg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,a=this.length;i<a;i++)Ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wn(),jl();const r=be(this)[e].apply(this,n);return ql(),Qn(),r}}),t}function zg(t){Gn(t)||(t=String(t));const e=be(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class cd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?s_:pd:i?dd:fd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ae(e);if(!s){if(a&&we(kc,n))return Reflect.get(kc,n,r);if(n==="hasOwnProperty")return zg}const l=Reflect.get(e,n,r);return(Gn(n)?ud.has(n):qg(n))||(s||Ct(e,"get",n),i)?l:Vt(l)?a&&$l(n)?l:l.value:Ne(l)?s?gd(l):Co(l):l}}class hd extends cd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const u=mr(i);if(!Kr(r)&&!mr(r)&&(i=be(i),r=be(r)),!ae(e)&&Vt(i)&&!Vt(r))return u?!1:(i.value=r,!0)}const a=ae(e)&&$l(n)?Number(n)<e.length:we(e,n),l=Reflect.set(e,n,r,s);return e===be(s)&&(a?jn(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),l}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!ud.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",ae(e)?"length":fr),Reflect.ownKeys(e)}}class Kg extends cd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gg=new hd,Wg=new Kg,Qg=new hd(!0);const Hl=t=>t,So=t=>Reflect.getPrototypeOf(t);function Di(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(jn(e,i)&&Ct(s,"get",e),Ct(s,"get",i));const{has:a}=So(s),l=r?Hl:n?Gl:zs;if(a.call(s,e))return l(t.get(e));if(a.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(jn(t,s)&&Ct(r,"has",t),Ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oi(t,e=!1){return t=t.__v_raw,!e&&Ct(be(t),"iterate",fr),Reflect.get(t,"size",t)}function Mc(t,e=!1){!e&&!Kr(t)&&!mr(t)&&(t=be(t));const n=be(this);return So(n).has.call(n,t)||(n.add(t),pn(n,"add",t,t)),this}function Fc(t,e,n=!1){!n&&!Kr(e)&&!mr(e)&&(e=be(e));const r=be(this),{has:s,get:i}=So(r);let a=s.call(r,t);a||(t=be(t),a=s.call(r,t));const l=i.call(r,t);return r.set(t,e),a?jn(e,l)&&pn(r,"set",t,e):pn(r,"add",t,e),this}function Lc(t){const e=be(this),{has:n,get:r}=So(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function $c(){const t=be(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function ki(t,e){return function(r,s){const i=this,a=i.__v_raw,l=be(a),u=e?Hl:t?Gl:zs;return!t&&Ct(l,"iterate",fr),a.forEach((h,d)=>r.call(s,u(h),u(d),i))}}function Mi(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=$r(i),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,h=s[t](...r),d=n?Hl:e?Gl:zs;return!e&&Ct(i,"iterate",u?Ua:fr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yg(){const t={get(i){return Di(this,i)},get size(){return Oi(this)},has:Ni,add:Mc,set:Fc,delete:Lc,clear:$c,forEach:ki(!1,!1)},e={get(i){return Di(this,i,!1,!0)},get size(){return Oi(this)},has:Ni,add(i){return Mc.call(this,i,!0)},set(i,a){return Fc.call(this,i,a,!0)},delete:Lc,clear:$c,forEach:ki(!1,!0)},n={get(i){return Di(this,i,!0)},get size(){return Oi(this,!0)},has(i){return Ni.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:ki(!0,!1)},r={get(i){return Di(this,i,!0,!0)},get size(){return Oi(this,!0)},has(i){return Ni.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mi(i,!1,!1),n[i]=Mi(i,!0,!1),e[i]=Mi(i,!1,!0),r[i]=Mi(i,!0,!0)}),[t,n,e,r]}const[Xg,Jg,Zg,e_]=Yg();function zl(t,e){const n=e?t?e_:Zg:t?Jg:Xg;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const t_={get:zl(!1,!1)},n_={get:zl(!1,!0)},r_={get:zl(!0,!1)};const fd=new WeakMap,dd=new WeakMap,pd=new WeakMap,s_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o_(t){return t.__v_skip||!Object.isExtensible(t)?0:i_(Sg(t))}function Co(t){return mr(t)?t:Kl(t,!1,Gg,t_,fd)}function md(t){return Kl(t,!1,Qg,n_,dd)}function gd(t){return Kl(t,!0,Wg,r_,pd)}function Kl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=o_(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Ns(t){return mr(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function Kr(t){return!!(t&&t.__v_isShallow)}function _d(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function a_(t){return Object.isExtensible(t)&&Zf(t,"__v_skip",!0),t}const zs=t=>Ne(t)?Co(t):t,Gl=t=>Ne(t)?gd(t):t;class yd{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ul(()=>e(this._value),()=>Wi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return(!e._cacheable||e.effect.dirty)&&jn(e._value,e._value=e.effect.run())&&Wi(e,4),vd(e),e.effect._dirtyLevel>=2&&Wi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function l_(t,e,n=!1){let r,s;const i=ue(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new yd(r,s,i||!s,n)}function vd(t){var e;Mn&&hr&&(t=be(t),od(hr,(e=t.dep)!=null?e:t.dep=ld(()=>t.dep=void 0,t instanceof yd?t:void 0)))}function Wi(t,e=4,n,r){t=be(t);const s=t.dep;s&&ad(s,e)}function Vt(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return Ed(t,!1)}function u_(t){return Ed(t,!0)}function Ed(t,e){return Vt(t)?t:new c_(t,e)}class c_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:zs(e)}get value(){return vd(this),this._value}set value(e){const n=this.__v_isShallow||Kr(e)||mr(e);e=n?e:be(e),jn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:zs(e),Wi(this,4))}}function Ge(t){return Vt(t)?t.value:t}const h_={get:(t,e,n)=>Ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Vt(s)&&!Vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Td(t){return Ns(t)?t:new Proxy(t,h_)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(t,e,n,r){try{return r?t(...r):t()}catch(s){Vo(s,e,n)}}function Ht(t,e,n,r){if(ue(t)){const s=Fn(t,e,n,r);return s&&Yf(s)&&s.catch(i=>{Vo(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}}function Vo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,a,l)===!1)return}i=i.parent}const u=e.appContext.config.errorHandler;if(u){Wn(),Fn(u,null,10,[t,a,l]),Qn();return}}f_(t,n,s,r)}function f_(t,e,n,r=!0){console.error(t)}let Ks=!1,ja=!1;const yt=[];let nn=0;const Br=[];let Vn=null,ar=0;const wd=Promise.resolve();let Wl=null;function mn(t){const e=Wl||wd;return t?e.then(this?t.bind(this):t):e}function d_(t){let e=nn+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=Gs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ql(t){(!yt.length||!yt.includes(t,Ks&&t.allowRecurse?nn+1:nn))&&(t.id==null?yt.push(t):yt.splice(d_(t.id),0,t),Id())}function Id(){!Ks&&!ja&&(ja=!0,Wl=wd.then(Rd))}function p_(t){const e=yt.indexOf(t);e>nn&&yt.splice(e,1)}function m_(t){ae(t)?Br.push(...t):(!Vn||!Vn.includes(t,t.allowRecurse?ar+1:ar))&&Br.push(t),Id()}function Bc(t,e,n=Ks?nn+1:0){for(;n<yt.length;n++){const r=yt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r()}}}function Ad(t){if(Br.length){const e=[...new Set(Br)].sort((n,r)=>Gs(n)-Gs(r));if(Br.length=0,Vn){Vn.push(...e);return}for(Vn=e,ar=0;ar<Vn.length;ar++){const n=Vn[ar];n.active!==!1&&n()}Vn=null,ar=0}}const Gs=t=>t.id==null?1/0:t.id,g_=(t,e)=>{const n=Gs(t)-Gs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rd(t){ja=!1,Ks=!0,yt.sort(g_);try{for(nn=0;nn<yt.length;nn++){const e=yt[nn];e&&e.active!==!1&&Fn(e,e.i,e.i?15:14)}}finally{nn=0,yt.length=0,Ad(),Ks=!1,Wl=null,(yt.length||Br.length)&&Rd()}}let qt=null,bd=null;function lo(t){const e=qt;return qt=t,bd=t&&t.type.__scopeId||null,e}function gt(t,e=qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xc(-1);const i=lo(e);let a;try{a=t(...s)}finally{lo(i),r._d&&Xc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(Wn(),Ht(u,n,8,[t.el,l,t,e]),Qn())}}const xn=Symbol("_leaveCb"),Fi=Symbol("_enterCb");function __(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hi(()=>{t.isMounted=!0}),Dd(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],Pd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},Sd=t=>{const e=t.subTree;return e.component?Sd(e.component):e},y_={name:"BaseTransition",props:Pd,setup(t,{slots:e}){const n=my(),r=__();return()=>{const s=e.default&&Vd(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==Yt){i=m;break}}const a=be(t),{mode:l}=a;if(r.isLeaving)return pa(i);const u=Uc(i);if(!u)return pa(i);let h=qa(u,a,r,n,m=>h=m);uo(u,h);const d=n.subTree,p=d&&Uc(d);if(p&&p.type!==Yt&&!ur(u,p)&&Sd(n).type!==Yt){const m=qa(p,a,r,n);if(uo(p,m),l==="out-in"&&u.type!==Yt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},pa(i);l==="in-out"&&u.type!==Yt&&(m.delayLeave=(y,P,V)=>{const D=Cd(r,p);D[String(p.key)]=p,y[xn]=()=>{P(),y[xn]=void 0,delete h.delayedLeave},h.delayedLeave=V})}return i}}},v_=y_;function Cd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function qa(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:y,onAfterLeave:P,onLeaveCancelled:V,onBeforeAppear:D,onAppear:$,onAfterAppear:j,onAppearCancelled:U}=e,re=String(t.key),fe=Cd(n,t),Y=(v,A)=>{v&&Ht(v,r,9,A)},b=(v,A)=>{const R=A[1];Y(v,A),ae(v)?v.every(I=>I.length<=1)&&R():v.length<=1&&R()},E={mode:a,persisted:l,beforeEnter(v){let A=u;if(!n.isMounted)if(i)A=D||u;else return;v[xn]&&v[xn](!0);const R=fe[re];R&&ur(t,R)&&R.el[xn]&&R.el[xn](),Y(A,[v])},enter(v){let A=h,R=d,I=p;if(!n.isMounted)if(i)A=$||h,R=j||d,I=U||p;else return;let T=!1;const Ce=v[Fi]=ot=>{T||(T=!0,ot?Y(I,[v]):Y(R,[v]),E.delayedLeave&&E.delayedLeave(),v[Fi]=void 0)};A?b(A,[v,Ce]):Ce()},leave(v,A){const R=String(t.key);if(v[Fi]&&v[Fi](!0),n.isUnmounting)return A();Y(m,[v]);let I=!1;const T=v[xn]=Ce=>{I||(I=!0,A(),Ce?Y(V,[v]):Y(P,[v]),v[xn]=void 0,fe[R]===t&&delete fe[R])};fe[R]=t,y?b(y,[v,T]):T()},clone(v){const A=qa(v,e,n,r,s);return s&&s(A),A}};return E}function pa(t){if(xo(t))return t=_n(t),t.children=null,t}function Uc(t){if(!xo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function uo(t,e){t.shapeFlag&6&&t.component?uo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===rt?(a.patchFlag&128&&s++,r=r.concat(Vd(a.children,e,l))):(e||a.type!==Yt)&&r.push(l!=null?_n(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ss(t,e){return ue(t)?it({name:t.name},e,{setup:t}):t}const Qi=t=>!!t.type.__asyncLoader,xo=t=>t.type.__isKeepAlive;function E_(t,e){xd(t,"a",e)}function T_(t,e){xd(t,"da",e)}function xd(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Do(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xo(s.parent.vnode)&&w_(r,e,n,s),s=s.parent}}function w_(t,e,n,r){const s=Do(e,t,r,!0);Yl(()=>{Ll(r[e],s)},n)}function Do(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Wn();const l=di(n),u=Ht(e,n,t,a);return l(),Qn(),u});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=ct)=>{(!ko||t==="sp")&&Do(t,(...r)=>e(...r),n)},I_=En("bm"),hi=En("m"),A_=En("bu"),R_=En("u"),Dd=En("bum"),Yl=En("um"),b_=En("sp"),P_=En("rtg"),S_=En("rtc");function C_(t,e=ct){Do("ec",t,e)}const Nd="components";function Li(t,e){return kd(Nd,t,!0,e)||t}const Od=Symbol.for("v-ndc");function jc(t){return He(t)?kd(Nd,t,!1)||t:t||Od}function kd(t,e,n=!0,r=!1){const s=qt||ct;if(s){const i=s.type;{const l=Ey(i,!1);if(l&&(l===e||l===Xt(e)||l===Po(Xt(e))))return i}const a=qc(s[t]||i[t],e)||qc(s.appContext[t],e);return!a&&r?i:a}}function qc(t,e){return t&&(t[e]||t[Xt(e)]||t[Po(Xt(e))])}function Fr(t,e,n,r){let s;const i=n;if(ae(t)||He(t)){s=new Array(t.length);for(let a=0,l=t.length;a<l;a++)s[a]=e(t[a],a,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Ha=t=>t?Zd(t)?tu(t):Ha(t.parent):null,Os=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$emit:t=>t.emit,$options:t=>Xl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ql(t.update)}),$nextTick:t=>t.n||(t.n=mn.bind(t.proxy)),$watch:t=>J_.bind(t)}),ma=(t,e)=>t!==Le&&!t.__isScriptSetup&&we(t,e),V_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=t;let h;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ma(r,e))return a[e]=1,r[e];if(s!==Le&&we(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&we(h,e))return a[e]=3,i[e];if(n!==Le&&we(n,e))return a[e]=4,n[e];za&&(a[e]=0)}}const d=Os[e];let p,m;if(d)return e==="$attrs"&&Ct(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Le&&we(n,e))return a[e]=4,n[e];if(m=u.config.globalProperties,we(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ma(s,e)?(s[e]=n,!0):r!==Le&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Le&&we(t,a)||ma(e,a)||(l=i[0])&&we(l,a)||we(r,a)||we(Os,a)||we(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hc(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let za=!0;function x_(t){const e=Xl(t),n=t.proxy,r=t.ctx;za=!1,e.beforeCreate&&zc(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:P,activated:V,deactivated:D,beforeDestroy:$,beforeUnmount:j,destroyed:U,unmounted:re,render:fe,renderTracked:Y,renderTriggered:b,errorCaptured:E,serverPrefetch:v,expose:A,inheritAttrs:R,components:I,directives:T,filters:Ce}=e;if(h&&D_(h,r,null),a)for(const me in a){const de=a[me];ue(de)&&(r[me]=de.bind(n))}if(s){const me=s.call(n,n);Ne(me)&&(t.data=Co(me))}if(za=!0,i)for(const me in i){const de=i[me],xt=ue(de)?de.bind(n,n):ue(de.get)?de.get.bind(n,n):jt,Kt=!ue(de)&&ue(de.set)?de.set.bind(n):jt,Mt=Qe({get:xt,set:Kt});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Me=>Mt.value=Me})}if(l)for(const me in l)Md(l[me],r,n,me);if(u){const me=ue(u)?u.call(n):u;Reflect.ownKeys(me).forEach(de=>{jr(de,me[de])})}d&&zc(d,t,"c");function ke(me,de){ae(de)?de.forEach(xt=>me(xt.bind(n))):de&&me(de.bind(n))}if(ke(I_,p),ke(hi,m),ke(A_,y),ke(R_,P),ke(E_,V),ke(T_,D),ke(C_,E),ke(S_,Y),ke(P_,b),ke(Dd,j),ke(Yl,re),ke(b_,v),ae(A))if(A.length){const me=t.exposed||(t.exposed={});A.forEach(de=>{Object.defineProperty(me,de,{get:()=>n[de],set:xt=>n[de]=xt})})}else t.exposed||(t.exposed={});fe&&t.render===jt&&(t.render=fe),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),T&&(t.directives=T)}function D_(t,e,n=jt){ae(t)&&(t=Ka(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),Vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function zc(t,e,n){Ht(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Md(t,e,n,r){const s=r.includes(".")?Qd(n,r):()=>n[r];if(He(t)){const i=e[t];ue(i)&&Yi(s,i)}else if(ue(t))Yi(s,t.bind(n));else if(Ne(t))if(ae(t))t.forEach(i=>Md(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Yi(s,i,t)}}function Xl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let u;return l?u=l:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(h=>co(u,h,a,!0)),co(u,e,a)),Ne(e)&&i.set(e,u),u}function co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&co(t,i,n,!0),s&&s.forEach(a=>co(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=N_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const N_={data:Kc,props:Gc,emits:Gc,methods:bs,computed:bs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:bs,directives:bs,watch:k_,provide:Kc,inject:O_};function Kc(t,e){return e?t?function(){return it(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function O_(t,e){return bs(Ka(t),Ka(e))}function Ka(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function bs(t,e){return t?it(Object.create(null),t,e):e}function Gc(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:it(Object.create(null),Hc(t),Hc(e??{})):e}function k_(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Fd(){return{app:null,config:{isNativeTag:bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let M_=0;function F_(t,e){return function(r,s=null){ue(r)||(r=it({},r)),s!=null&&!Ne(s)&&(s=null);const i=Fd(),a=new WeakSet;let l=!1;const u=i.app={_uid:M_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wy,get config(){return i.config},set config(h){},use(h,...d){return a.has(h)||(h&&ue(h.install)?(a.add(h),h.install(u,...d)):ue(h)&&(a.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const m=ve(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),l=!0,u._container=h,h.__vue_app__=u,tu(m.component)}},unmount(){l&&(t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Ur;Ur=u;try{return h()}finally{Ur=d}}};return u}}let Ur=null;function jr(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=ct||qt;if(r||Ur){const s=Ur?Ur._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Ld={},$d=()=>Object.create(Ld),Bd=t=>Object.getPrototypeOf(t)===Ld;function L_(t,e,n,r=!1){const s={},i=$d();t.propsDefaults=Object.create(null),Ud(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:md(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=be(s),[u]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(No(t.emitsOptions,m))continue;const y=e[m];if(u)if(we(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const P=Xt(m);s[P]=Ga(u,l,P,y,t,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{Ud(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!we(e,p)&&((d=wr(p))===p||!we(e,d)))&&(u?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ga(u,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!we(e,p))&&(delete i[p],h=!0)}h&&pn(t.attrs,"set","")}function Ud(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if(Ds(u))continue;const h=e[u];let d;s&&we(s,d=Xt(u))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:No(t.emitsOptions,u)||(!(u in r)||h!==r[u])&&(r[u]=h,a=!0)}if(i){const u=be(n),h=l||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ga(s,u,p,h[p],t,!we(h,p))}}return a}function Ga(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=we(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ue(u)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=di(s);r=h[n]=u.call(null,e),d()}}else r=u}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===wr(n))&&(r=!0))}return r}const B_=new WeakMap;function jd(t,e,n=!1){const r=n?B_:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let u=!1;if(!ue(t)){const d=p=>{u=!0;const[m,y]=jd(p,e,!0);it(a,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!u)return Ne(t)&&r.set(t,Lr),Lr;if(ae(i))for(let d=0;d<i.length;d++){const p=Xt(i[d]);Wc(p)&&(a[p]=Le)}else if(i)for(const d in i){const p=Xt(d);if(Wc(p)){const m=i[d],y=a[p]=ae(m)||ue(m)?{type:m}:it({},m),P=y.type;let V=!1,D=!0;if(ae(P))for(let $=0;$<P.length;++$){const j=P[$],U=ue(j)&&j.name;if(U==="Boolean"){V=!0;break}else U==="String"&&(D=!1)}else V=ue(P)&&P.name==="Boolean";y[0]=V,y[1]=D,(V||we(y,"default"))&&l.push(p)}}const h=[a,l];return Ne(t)&&r.set(t,h),h}function Wc(t){return t[0]!=="$"&&!Ds(t)}const qd=t=>t[0]==="_"||t==="$stable",Jl=t=>ae(t)?t.map(tn):[tn(t)],U_=(t,e,n)=>{if(e._n)return e;const r=gt((...s)=>Jl(e(...s)),n);return r._c=!1,r},Hd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qd(s))continue;const i=t[s];if(ue(i))e[s]=U_(s,i,r);else if(i!=null){const a=Jl(i);e[s]=()=>a}}},zd=(t,e)=>{const n=Jl(e);t.slots.default=()=>n},Kd=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},j_=(t,e,n)=>{const r=t.slots=$d();if(t.vnode.shapeFlag&32){const s=e._;s?(Kd(r,e,n),n&&Zf(r,"_",s,!0)):Hd(e,r)}else e&&zd(t,e)},q_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Kd(s,e,n):(i=!e.$stable,Hd(e,s)),a=e}else e&&(zd(t,e),a={default:1});if(i)for(const l in s)!qd(l)&&a[l]==null&&delete s[l]};function Wa(t,e,n,r,s=!1){if(ae(t)){t.forEach((m,y)=>Wa(m,e&&(ae(e)?e[y]:e),n,r,s));return}if(Qi(r)&&!s)return;const i=r.shapeFlag&4?tu(r.component):r.el,a=s?null:i,{i:l,r:u}=t,h=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,p=l.setupState;if(h!=null&&h!==u&&(He(h)?(d[h]=null,we(p,h)&&(p[h]=null)):Vt(h)&&(h.value=null)),ue(u))Fn(u,l,12,[a,d]);else{const m=He(u),y=Vt(u);if(m||y){const P=()=>{if(t.f){const V=m?we(p,u)?p[u]:d[u]:u.value;s?ae(V)&&Ll(V,i):ae(V)?V.includes(i)||V.push(i):m?(d[u]=[i],we(p,u)&&(p[u]=d[u])):(u.value=[i],t.k&&(d[t.k]=u.value))}else m?(d[u]=a,we(p,u)&&(p[u]=a)):y&&(u.value=a,t.k&&(d[t.k]=a))};a?(P.id=-1,Rt(P,n)):P()}}}const H_=Symbol("_vte"),z_=t=>t.__isTeleport,Rt=oy;function K_(t){return G_(t)}function G_(t,e){const n=ed();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=jt,insertStaticContent:P}=t,V=(_,w,C,k=null,N=null,B=null,K=void 0,q=null,z=!!w.dynamicChildren)=>{if(_===w)return;_&&!ur(_,w)&&(k=O(_),Me(_,N,B,!0),_=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:ne}=w;switch(L){case Oo:D(_,w,C,k);break;case Yt:$(_,w,C,k);break;case Xi:_==null&&j(w,C,k,K);break;case rt:I(_,w,C,k,N,B,K,q,z);break;default:ne&1?fe(_,w,C,k,N,B,K,q,z):ne&6?T(_,w,C,k,N,B,K,q,z):(ne&64||ne&128)&&L.process(_,w,C,k,N,B,K,q,z,J)}Q!=null&&N&&Wa(Q,_&&_.ref,B,w||_,!w)},D=(_,w,C,k)=>{if(_==null)r(w.el=l(w.children),C,k);else{const N=w.el=_.el;w.children!==_.children&&h(N,w.children)}},$=(_,w,C,k)=>{_==null?r(w.el=u(w.children||""),C,k):w.el=_.el},j=(_,w,C,k)=>{[_.el,_.anchor]=P(_.children,w,C,k,_.el,_.anchor)},U=({el:_,anchor:w},C,k)=>{let N;for(;_&&_!==w;)N=m(_),r(_,C,k),_=N;r(w,C,k)},re=({el:_,anchor:w})=>{let C;for(;_&&_!==w;)C=m(_),s(_),_=C;s(w)},fe=(_,w,C,k,N,B,K,q,z)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),_==null?Y(w,C,k,N,B,K,q,z):v(_,w,N,B,K,q,z)},Y=(_,w,C,k,N,B,K,q)=>{let z,L;const{props:Q,shapeFlag:ne,transition:te,dirs:ee}=_;if(z=_.el=a(_.type,B,Q&&Q.is,Q),ne&8?d(z,_.children):ne&16&&E(_.children,z,null,k,N,ga(_,B),K,q),ee&&tr(_,null,k,"created"),b(z,_,_.scopeId,K,k),Q){for(const Pe in Q)Pe!=="value"&&!Ds(Pe)&&i(z,Pe,null,Q[Pe],B,k);"value"in Q&&i(z,"value",null,Q.value,B),(L=Q.onVnodeBeforeMount)&&en(L,k,_)}ee&&tr(_,null,k,"beforeMount");const se=W_(N,te);se&&te.beforeEnter(z),r(z,w,C),((L=Q&&Q.onVnodeMounted)||se||ee)&&Rt(()=>{L&&en(L,k,_),se&&te.enter(z),ee&&tr(_,null,k,"mounted")},N)},b=(_,w,C,k,N)=>{if(C&&y(_,C),k)for(let B=0;B<k.length;B++)y(_,k[B]);if(N){let B=N.subTree;if(w===B){const K=N.vnode;b(_,K,K.scopeId,K.slotScopeIds,N.parent)}}},E=(_,w,C,k,N,B,K,q,z=0)=>{for(let L=z;L<_.length;L++){const Q=_[L]=q?Dn(_[L]):tn(_[L]);V(null,Q,w,C,k,N,B,K,q)}},v=(_,w,C,k,N,B,K)=>{const q=w.el=_.el;let{patchFlag:z,dynamicChildren:L,dirs:Q}=w;z|=_.patchFlag&16;const ne=_.props||Le,te=w.props||Le;let ee;if(C&&nr(C,!1),(ee=te.onVnodeBeforeUpdate)&&en(ee,C,w,_),Q&&tr(w,_,C,"beforeUpdate"),C&&nr(C,!0),(ne.innerHTML&&te.innerHTML==null||ne.textContent&&te.textContent==null)&&d(q,""),L?A(_.dynamicChildren,L,q,C,k,ga(w,N),B):K||de(_,w,q,null,C,k,ga(w,N),B,!1),z>0){if(z&16)R(q,ne,te,C,N);else if(z&2&&ne.class!==te.class&&i(q,"class",null,te.class,N),z&4&&i(q,"style",ne.style,te.style,N),z&8){const se=w.dynamicProps;for(let Pe=0;Pe<se.length;Pe++){const Te=se[Pe],Ue=ne[Te],Dt=te[Te];(Dt!==Ue||Te==="value")&&i(q,Te,Ue,Dt,N,C)}}z&1&&_.children!==w.children&&d(q,w.children)}else!K&&L==null&&R(q,ne,te,C,N);((ee=te.onVnodeUpdated)||Q)&&Rt(()=>{ee&&en(ee,C,w,_),Q&&tr(w,_,C,"updated")},k)},A=(_,w,C,k,N,B,K)=>{for(let q=0;q<w.length;q++){const z=_[q],L=w[q],Q=z.el&&(z.type===rt||!ur(z,L)||z.shapeFlag&70)?p(z.el):C;V(z,L,Q,null,k,N,B,K,!0)}},R=(_,w,C,k,N)=>{if(w!==C){if(w!==Le)for(const B in w)!Ds(B)&&!(B in C)&&i(_,B,w[B],null,N,k);for(const B in C){if(Ds(B))continue;const K=C[B],q=w[B];K!==q&&B!=="value"&&i(_,B,q,K,N,k)}"value"in C&&i(_,"value",w.value,C.value,N)}},I=(_,w,C,k,N,B,K,q,z)=>{const L=w.el=_?_.el:l(""),Q=w.anchor=_?_.anchor:l("");let{patchFlag:ne,dynamicChildren:te,slotScopeIds:ee}=w;ee&&(q=q?q.concat(ee):ee),_==null?(r(L,C,k),r(Q,C,k),E(w.children||[],C,Q,N,B,K,q,z)):ne>0&&ne&64&&te&&_.dynamicChildren?(A(_.dynamicChildren,te,C,N,B,K,q),(w.key!=null||N&&w===N.subTree)&&Gd(_,w,!0)):de(_,w,C,Q,N,B,K,q,z)},T=(_,w,C,k,N,B,K,q,z)=>{w.slotScopeIds=q,_==null?w.shapeFlag&512?N.ctx.activate(w,C,k,K,z):Ce(w,C,k,N,B,K,z):ot(_,w,z)},Ce=(_,w,C,k,N,B,K)=>{const q=_.component=py(_,k,N);if(xo(_)&&(q.ctx.renderer=J),gy(q,!1,K),q.asyncDep){if(N&&N.registerDep(q,ke,K),!_.el){const z=q.subTree=ve(Yt);$(null,z,w,C)}}else ke(q,_,w,C,N,B,K)},ot=(_,w,C)=>{const k=w.component=_.component;if(ry(_,w,C))if(k.asyncDep&&!k.asyncResolved){me(k,w,C);return}else k.next=w,p_(k.update),k.effect.dirty=!0,k.update();else w.el=_.el,k.vnode=w},ke=(_,w,C,k,N,B,K)=>{const q=()=>{if(_.isMounted){let{next:Q,bu:ne,u:te,parent:ee,vnode:se}=_;{const Ft=Wd(_);if(Ft){Q&&(Q.el=se.el,me(_,Q,K)),Ft.asyncDep.then(()=>{_.isUnmounted||q()});return}}let Pe=Q,Te;nr(_,!1),Q?(Q.el=se.el,me(_,Q,K)):Q=se,ne&&fa(ne),(Te=Q.props&&Q.props.onVnodeBeforeUpdate)&&en(Te,ee,Q,se),nr(_,!0);const Ue=_a(_),Dt=_.subTree;_.subTree=Ue,V(Dt,Ue,p(Dt.el),O(Dt),_,N,B),Q.el=Ue.el,Pe===null&&sy(_,Ue.el),te&&Rt(te,N),(Te=Q.props&&Q.props.onVnodeUpdated)&&Rt(()=>en(Te,ee,Q,se),N)}else{let Q;const{el:ne,props:te}=w,{bm:ee,m:se,parent:Pe}=_,Te=Qi(w);if(nr(_,!1),ee&&fa(ee),!Te&&(Q=te&&te.onVnodeBeforeMount)&&en(Q,Pe,w),nr(_,!0),ne&&Ve){const Ue=()=>{_.subTree=_a(_),Ve(ne,_.subTree,_,N,null)};Te?w.type.__asyncLoader().then(()=>!_.isUnmounted&&Ue()):Ue()}else{const Ue=_.subTree=_a(_);V(null,Ue,C,k,_,N,B),w.el=Ue.el}if(se&&Rt(se,N),!Te&&(Q=te&&te.onVnodeMounted)){const Ue=w;Rt(()=>en(Q,Pe,Ue),N)}(w.shapeFlag&256||Pe&&Qi(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&_.a&&Rt(_.a,N),_.isMounted=!0,w=C=k=null}},z=_.effect=new Ul(q,jt,()=>Ql(L),_.scope),L=_.update=()=>{z.dirty&&z.run()};L.i=_,L.id=_.uid,nr(_,!0),L()},me=(_,w,C)=>{w.component=_;const k=_.vnode.props;_.vnode=w,_.next=null,$_(_,w.props,k,C),q_(_,w.children,C),Wn(),Bc(_),Qn()},de=(_,w,C,k,N,B,K,q,z=!1)=>{const L=_&&_.children,Q=_?_.shapeFlag:0,ne=w.children,{patchFlag:te,shapeFlag:ee}=w;if(te>0){if(te&128){Kt(L,ne,C,k,N,B,K,q,z);return}else if(te&256){xt(L,ne,C,k,N,B,K,q,z);return}}ee&8?(Q&16&&At(L,N,B),ne!==L&&d(C,ne)):Q&16?ee&16?Kt(L,ne,C,k,N,B,K,q,z):At(L,N,B,!0):(Q&8&&d(C,""),ee&16&&E(ne,C,k,N,B,K,q,z))},xt=(_,w,C,k,N,B,K,q,z)=>{_=_||Lr,w=w||Lr;const L=_.length,Q=w.length,ne=Math.min(L,Q);let te;for(te=0;te<ne;te++){const ee=w[te]=z?Dn(w[te]):tn(w[te]);V(_[te],ee,C,null,N,B,K,q,z)}L>Q?At(_,N,B,!0,!1,ne):E(w,C,k,N,B,K,q,z,ne)},Kt=(_,w,C,k,N,B,K,q,z)=>{let L=0;const Q=w.length;let ne=_.length-1,te=Q-1;for(;L<=ne&&L<=te;){const ee=_[L],se=w[L]=z?Dn(w[L]):tn(w[L]);if(ur(ee,se))V(ee,se,C,null,N,B,K,q,z);else break;L++}for(;L<=ne&&L<=te;){const ee=_[ne],se=w[te]=z?Dn(w[te]):tn(w[te]);if(ur(ee,se))V(ee,se,C,null,N,B,K,q,z);else break;ne--,te--}if(L>ne){if(L<=te){const ee=te+1,se=ee<Q?w[ee].el:k;for(;L<=te;)V(null,w[L]=z?Dn(w[L]):tn(w[L]),C,se,N,B,K,q,z),L++}}else if(L>te)for(;L<=ne;)Me(_[L],N,B,!0),L++;else{const ee=L,se=L,Pe=new Map;for(L=se;L<=te;L++){const Et=w[L]=z?Dn(w[L]):tn(w[L]);Et.key!=null&&Pe.set(Et.key,L)}let Te,Ue=0;const Dt=te-se+1;let Ft=!1,us=0;const wn=new Array(Dt);for(L=0;L<Dt;L++)wn[L]=0;for(L=ee;L<=ne;L++){const Et=_[L];if(Ue>=Dt){Me(Et,N,B,!0);continue}let Lt;if(Et.key!=null)Lt=Pe.get(Et.key);else for(Te=se;Te<=te;Te++)if(wn[Te-se]===0&&ur(Et,w[Te])){Lt=Te;break}Lt===void 0?Me(Et,N,B,!0):(wn[Lt-se]=L+1,Lt>=us?us=Lt:Ft=!0,V(Et,w[Lt],C,null,N,B,K,q,z),Ue++)}const Ar=Ft?Q_(wn):Lr;for(Te=Ar.length-1,L=Dt-1;L>=0;L--){const Et=se+L,Lt=w[Et],Rr=Et+1<Q?w[Et+1].el:k;wn[L]===0?V(null,Lt,C,Rr,N,B,K,q,z):Ft&&(Te<0||L!==Ar[Te]?Mt(Lt,C,Rr,2):Te--)}}},Mt=(_,w,C,k,N=null)=>{const{el:B,type:K,transition:q,children:z,shapeFlag:L}=_;if(L&6){Mt(_.component.subTree,w,C,k);return}if(L&128){_.suspense.move(w,C,k);return}if(L&64){K.move(_,w,C,J);return}if(K===rt){r(B,w,C);for(let ne=0;ne<z.length;ne++)Mt(z[ne],w,C,k);r(_.anchor,w,C);return}if(K===Xi){U(_,w,C);return}if(k!==2&&L&1&&q)if(k===0)q.beforeEnter(B),r(B,w,C),Rt(()=>q.enter(B),N);else{const{leave:ne,delayLeave:te,afterLeave:ee}=q,se=()=>r(B,w,C),Pe=()=>{ne(B,()=>{se(),ee&&ee()})};te?te(B,se,Pe):Pe()}else r(B,w,C)},Me=(_,w,C,k=!1,N=!1)=>{const{type:B,props:K,ref:q,children:z,dynamicChildren:L,shapeFlag:Q,patchFlag:ne,dirs:te,cacheIndex:ee}=_;if(ne===-2&&(N=!1),q!=null&&Wa(q,null,C,_,!0),ee!=null&&(w.renderCache[ee]=void 0),Q&256){w.ctx.deactivate(_);return}const se=Q&1&&te,Pe=!Qi(_);let Te;if(Pe&&(Te=K&&K.onVnodeBeforeUnmount)&&en(Te,w,_),Q&6)Zt(_.component,C,k);else{if(Q&128){_.suspense.unmount(C,k);return}se&&tr(_,null,w,"beforeUnmount"),Q&64?_.type.remove(_,w,C,J,k):L&&!L.hasOnce&&(B!==rt||ne>0&&ne&64)?At(L,w,C,!1,!0):(B===rt&&ne&384||!N&&Q&16)&&At(z,w,C),k&&Fe(_)}(Pe&&(Te=K&&K.onVnodeUnmounted)||se)&&Rt(()=>{Te&&en(Te,w,_),se&&tr(_,null,w,"unmounted")},C)},Fe=_=>{const{type:w,el:C,anchor:k,transition:N}=_;if(w===rt){Tn(C,k);return}if(w===Xi){re(_);return}const B=()=>{s(C),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:K,delayLeave:q}=N,z=()=>K(C,B);q?q(_.el,B,z):z()}else B()},Tn=(_,w)=>{let C;for(;_!==w;)C=m(_),s(_),_=C;s(w)},Zt=(_,w,C)=>{const{bum:k,scope:N,update:B,subTree:K,um:q,m:z,a:L}=_;Qc(z),Qc(L),k&&fa(k),N.stop(),B&&(B.active=!1,Me(K,_,w,C)),q&&Rt(q,w),Rt(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},At=(_,w,C,k=!1,N=!1,B=0)=>{for(let K=B;K<_.length;K++)Me(_[K],w,C,k,N)},O=_=>{if(_.shapeFlag&6)return O(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=m(_.anchor||_.el),C=w&&w[H_];return C?m(C):w};let X=!1;const W=(_,w,C)=>{_==null?w._vnode&&Me(w._vnode,null,null,!0):V(w._vnode||null,_,w,null,null,null,C),w._vnode=_,X||(X=!0,Bc(),Ad(),X=!1)},J={p:V,um:Me,m:Mt,r:Fe,mt:Ce,mc:E,pc:de,pbc:A,n:O,o:t};let ge,Ve;return{render:W,hydrate:ge,createApp:F_(W,ge)}}function ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function W_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gd(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Dn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Gd(a,l)),l.type===Oo&&(l.el=a.el)}}function Q_(t){const e=t.slice(),n=[0];let r,s,i,a,l;const u=t.length;for(r=0;r<u;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Wd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wd(e)}function Qc(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Y_=Symbol.for("v-scx"),X_=()=>zt(Y_);function fi(t,e){return Zl(t,null,e)}const $i={};function Yi(t,e,n){return Zl(t,e,n)}function Zl(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:a,onTrigger:l}=Le){if(e&&i){const Y=e;e=(...b)=>{Y(...b),fe()}}const u=ct,h=Y=>r===!0?Y:lr(Y,r===!1?1:void 0);let d,p=!1,m=!1;if(Vt(t)?(d=()=>t.value,p=Kr(t)):Ns(t)?(d=()=>h(t),p=!0):ae(t)?(m=!0,p=t.some(Y=>Ns(Y)||Kr(Y)),d=()=>t.map(Y=>{if(Vt(Y))return Y.value;if(Ns(Y))return h(Y);if(ue(Y))return Fn(Y,u,2)})):ue(t)?e?d=()=>Fn(t,u,2):d=()=>(y&&y(),Ht(t,u,3,[P])):d=jt,e&&r){const Y=d;d=()=>lr(Y())}let y,P=Y=>{y=U.onStop=()=>{Fn(Y,u,4),y=U.onStop=void 0}},V;if(ko)if(P=jt,e?n&&Ht(e,u,3,[d(),m?[]:void 0,P]):d(),s==="sync"){const Y=X_();V=Y.__watcherHandles||(Y.__watcherHandles=[])}else return jt;let D=m?new Array(t.length).fill($i):$i;const $=()=>{if(!(!U.active||!U.dirty))if(e){const Y=U.run();(r||p||(m?Y.some((b,E)=>jn(b,D[E])):jn(Y,D)))&&(y&&y(),Ht(e,u,3,[Y,D===$i?void 0:m&&D[0]===$i?[]:D,P]),D=Y)}else U.run()};$.allowRecurse=!!e;let j;s==="sync"?j=$:s==="post"?j=()=>Rt($,u&&u.suspense):($.pre=!0,u&&($.id=u.uid),j=()=>Ql($));const U=new Ul(d,jt,j),re=Ug(),fe=()=>{U.stop(),re&&Ll(re.effects,U)};return e?n?$():D=U.run():s==="post"?Rt(U.run.bind(U),u&&u.suspense):U.run(),V&&V.push(fe),fe}function J_(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Qd(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=di(this),l=Zl(s,i.bind(r),n);return a(),l}function Qd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lr(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Vt(t))lr(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)lr(t[r],e,n);else if(Qf(t)||$r(t))t.forEach(r=>{lr(r,e,n)});else if(Jf(t)){for(const r in t)lr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&lr(t[r],e,n)}return t}const Z_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${wr(e)}Modifiers`];function ey(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),a=i&&Z_(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>He(d)?d.trim():d)),a.number&&(s=n.map(xg)));let l,u=r[l=ha(e)]||r[l=ha(Xt(e))];!u&&i&&(u=r[l=ha(wr(e))]),u&&Ht(u,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ht(h,t,6,s)}}function Yd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const u=h=>{const d=Yd(h,e,!0);d&&(l=!0,it(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!l?(Ne(t)&&r.set(t,null),null):(ae(i)?i.forEach(u=>a[u]=null):it(a,i),Ne(t)&&r.set(t,a),a)}function No(t,e){return!t||!Ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,wr(e))||we(t,e))}function _a(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:h,renderCache:d,props:p,data:m,setupState:y,ctx:P,inheritAttrs:V}=t,D=lo(t);let $,j;try{if(n.shapeFlag&4){const re=s||r,fe=re;$=tn(h.call(fe,re,d,p,y,m,P)),j=l}else{const re=e;$=tn(re.length>1?re(p,{attrs:l,slots:a,emit:u}):re(p,null)),j=e.props?l:ty(l)}}catch(re){ks.length=0,Vo(re,t,1),$=ve(Yt)}let U=$;if(j&&V!==!1){const re=Object.keys(j),{shapeFlag:fe}=U;re.length&&fe&7&&(i&&re.some(Fl)&&(j=ny(j,i)),U=_n(U,j,!1,!0))}return n.dirs&&(U=_n(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),$=U,lo(D),$}const ty=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ao(n))&&((e||(e={}))[n]=t[n]);return e},ny=(t,e)=>{const n={};for(const r in t)(!Fl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ry(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:u}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?Yc(r,a,h):!!a;if(u&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!No(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Yc(r,a,h):!0:!!a;return!1}function Yc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!No(n,i))return!0}return!1}function sy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const iy=t=>t.__isSuspense;function oy(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):m_(t)}const rt=Symbol.for("v-fgt"),Oo=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),ks=[];let Ot=null;function Je(t=!1){ks.push(Ot=t?null:[])}function ay(){ks.pop(),Ot=ks[ks.length-1]||null}let Ws=1;function Xc(t){Ws+=t,t<0&&Ot&&(Ot.hasOnce=!0)}function Xd(t){return t.dynamicChildren=Ws>0?Ot||Lr:null,ay(),Ws>0&&Ot&&Ot.push(t),t}function vt(t,e,n,r,s,i){return Xd(M(t,e,n,r,s,i,!0))}function Qa(t,e,n,r,s){return Xd(ve(t,e,n,r,s,!0))}function Ya(t){return t?t.__v_isVNode===!0:!1}function ur(t,e){return t.type===e.type&&t.key===e.key}const Jd=({key:t})=>t??null,Ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Vt(t)||ue(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,r=0,s=null,i=t===rt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jd(e),ref:e&&Ji(e),scopeId:bd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return l?(eu(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=He(n)?8:16),Ws>0&&!a&&Ot&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ot.push(u),u}const ve=ly;function ly(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Od)&&(t=Yt),Ya(t)){const l=_n(t,e,!0);return n&&eu(l,n),Ws>0&&!i&&Ot&&(l.shapeFlag&6?Ot[Ot.indexOf(t)]=l:Ot.push(l)),l.patchFlag=-2,l}if(Ty(t)&&(t=t.__vccOpts),e){e=uy(e);let{class:l,style:u}=e;l&&!He(l)&&(e.class=Ut(l)),Ne(u)&&(_d(u)&&!ae(u)&&(u=it({},u)),e.style=Bl(u))}const a=He(t)?1:iy(t)?128:z_(t)?64:Ne(t)?4:ue(t)?2:0;return M(t,e,n,r,s,a,i,!0)}function uy(t){return t?_d(t)||Bd(t)?it({},t):t:null}function _n(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=t,h=e?hy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Jd(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(Ji(e)):[i,Ji(e)]:Ji(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&uo(d,u.clone(d)),d}function dn(t=" ",e=0){return ve(Oo,null,t,e)}function cy(t,e){const n=ve(Xi,null,t);return n.staticCount=e,n}function tn(t){return t==null||typeof t=="boolean"?ve(Yt):ae(t)?ve(rt,null,t.slice()):typeof t=="object"?Dn(t):ve(Oo,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_n(t)}function eu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),eu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Bd(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[dn(e)]):n=8);t.children=e,t.shapeFlag|=n}function hy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ut([e.class,r.class]));else if(s==="style")e.style=Bl([e.style,r.style]);else if(Ao(s)){const i=e[s],a=r[s];a&&i!==a&&!(ae(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){Ht(t,e,7,[n,r])}const fy=Fd();let dy=0;function py(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fy,i={uid:dy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jd(r,s),emitsOptions:Yd(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ey.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const my=()=>ct||qt;let ho,Xa;{const t=ed(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ho=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Xa=e("__VUE_SSR_SETTERS__",n=>ko=n)}const di=t=>{const e=ct;return ho(t),t.scope.on(),()=>{t.scope.off(),ho(e)}},Jc=()=>{ct&&ct.scope.off(),ho(null)};function Zd(t){return t.vnode.shapeFlag&4}let ko=!1;function gy(t,e=!1,n=!1){e&&Xa(e);const{props:r,children:s}=t.vnode,i=Zd(t);L_(t,r,i,e),j_(t,s,n);const a=i?_y(t,e):void 0;return e&&Xa(!1),a}function _y(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,V_);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?vy(t):null,i=di(t);Wn();const a=Fn(r,t,0,[t.props,s]);if(Qn(),i(),Yf(a)){if(a.then(Jc,Jc),e)return a.then(l=>{Zc(t,l,e)}).catch(l=>{Vo(l,t,0)});t.asyncDep=a}else Zc(t,a,e)}else ep(t,e)}function Zc(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Td(e)),ep(t,n)}let eh;function ep(t,e,n){const r=t.type;if(!t.render){if(!e&&eh&&!r.render){const s=r.template||Xl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:u}=r,h=it(it({isCustomElement:i,delimiters:l},a),u);r.render=eh(s,h)}}t.render=r.render||jt}{const s=di(t);Wn();try{x_(t)}finally{Qn(),s()}}}const yy={get(t,e){return Ct(t,"get",""),t[e]}};function vy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yy),slots:t.slots,emit:t.emit,expose:e}}function tu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Td(a_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Os)return Os[n](t)},has(e,n){return n in e||n in Os}})):t.proxy}function Ey(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Ty(t){return ue(t)&&"__vccOpts"in t}const Qe=(t,e)=>l_(t,e,ko);function Mo(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!ae(e)?Ya(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ya(n)&&(n=[n]),ve(t,e,n))}const wy="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Iy="http://www.w3.org/2000/svg",Ay="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,th=fn&&fn.createElement("template"),Ry={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(Iy,t):e==="mathml"?fn.createElementNS(Ay,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{th.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=th.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pn="transition",Is="animation",Qs=Symbol("_vtc"),nu=(t,{slots:e})=>Mo(v_,by(t),e);nu.displayName="Transition";const tp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};nu.props=it({},Pd,tp);const rr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},nh=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function by(t){const e={};for(const I in t)I in tp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,P=Py(s),V=P&&P[0],D=P&&P[1],{onBeforeEnter:$,onEnter:j,onEnterCancelled:U,onLeave:re,onLeaveCancelled:fe,onBeforeAppear:Y=$,onAppear:b=j,onAppearCancelled:E=U}=e,v=(I,T,Ce)=>{sr(I,T?d:l),sr(I,T?h:a),Ce&&Ce()},A=(I,T)=>{I._isLeaving=!1,sr(I,p),sr(I,y),sr(I,m),T&&T()},R=I=>(T,Ce)=>{const ot=I?b:j,ke=()=>v(T,I,Ce);rr(ot,[T,ke]),rh(()=>{sr(T,I?u:i),Sn(T,I?d:l),nh(ot)||sh(T,r,V,ke)})};return it(e,{onBeforeEnter(I){rr($,[I]),Sn(I,i),Sn(I,a)},onBeforeAppear(I){rr(Y,[I]),Sn(I,u),Sn(I,h)},onEnter:R(!1),onAppear:R(!0),onLeave(I,T){I._isLeaving=!0;const Ce=()=>A(I,T);Sn(I,p),Sn(I,m),Vy(),rh(()=>{I._isLeaving&&(sr(I,p),Sn(I,y),nh(re)||sh(I,r,D,Ce))}),rr(re,[I,Ce])},onEnterCancelled(I){v(I,!1),rr(U,[I])},onAppearCancelled(I){v(I,!0),rr(E,[I])},onLeaveCancelled(I){A(I),rr(fe,[I])}})}function Py(t){if(t==null)return null;if(Ne(t))return[ya(t.enter),ya(t.leave)];{const e=ya(t);return[e,e]}}function ya(t){return Dg(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Qs]||(t[Qs]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Qs];n&&(n.delete(e),n.size||(t[Qs]=void 0))}function rh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Sy=0;function sh(t,e,n,r){const s=t._endId=++Sy,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:a,timeout:l,propCount:u}=Cy(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,m),i()},m=y=>{y.target===t&&++d>=u&&p()};setTimeout(()=>{d<u&&p()},l+1),t.addEventListener(h,m)}function Cy(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Pn}Delay`),i=r(`${Pn}Duration`),a=ih(s,i),l=r(`${Is}Delay`),u=r(`${Is}Duration`),h=ih(l,u);let d=null,p=0,m=0;e===Pn?a>0&&(d=Pn,p=a,m=i.length):e===Is?h>0&&(d=Is,p=h,m=u.length):(p=Math.max(a,h),d=p>0?a>h?Pn:Is:null,m=d?d===Pn?i.length:u.length:0);const y=d===Pn&&/\b(transform|all)(,|$)/.test(r(`${Pn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:y}}function ih(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>oh(n)+oh(t[r])))}function oh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vy(){return document.body.offsetHeight}function xy(t,e,n){const r=t[Qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ah=Symbol("_vod"),Dy=Symbol("_vsh"),Ny=Symbol(""),Oy=/(^|;)\s*display\s*:/;function ky(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Zi(r,l,"")}else for(const a in e)n[a]==null&&Zi(r,a,"");for(const a in n)a==="display"&&(i=!0),Zi(r,a,n[a])}else if(s){if(e!==n){const a=r[Ny];a&&(n+=";"+a),r.cssText=n,i=Oy.test(n)}}else e&&t.removeAttribute("style");ah in t&&(t[ah]=i?r.display:"",t[Dy]&&(r.display="none"))}const lh=/\s*!important$/;function Zi(t,e,n){if(ae(n))n.forEach(r=>Zi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=My(t,e);lh.test(n)?t.setProperty(wr(r),n.replace(lh,""),"important"):t[r]=n}}const uh=["Webkit","Moz","ms"],va={};function My(t,e){const n=va[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return va[e]=r;r=Po(r);for(let s=0;s<uh.length;s++){const i=uh[s]+r;if(i in t)return va[e]=i}return e}const ch="http://www.w3.org/1999/xlink";function hh(t,e,n,r,s,i=Lg(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ch,e.slice(6,e.length)):t.setAttributeNS(ch,e,n):n==null||i&&!td(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gn(n)?String(n):n)}function Fy(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=td(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Ly(t,e,n,r){t.addEventListener(e,n,r)}function $y(t,e,n,r){t.removeEventListener(e,n,r)}const fh=Symbol("_vei");function By(t,e,n,r,s=null){const i=t[fh]||(t[fh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,u]=Uy(e);if(r){const h=i[e]=Hy(r,s);Ly(t,l,h,u)}else a&&($y(t,l,a,u),i[e]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function Uy(t){let e;if(dh.test(t)){e={};let r;for(;r=t.match(dh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let Ea=0;const jy=Promise.resolve(),qy=()=>Ea||(jy.then(()=>Ea=0),Ea=Date.now());function Hy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(zy(r,n.value),e,5,[r])};return n.value=t,n.attached=qy(),n}function zy(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ph=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ky=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?xy(t,r,a):e==="style"?ky(t,n,r):Ao(e)?Fl(e)||By(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gy(t,e,r,a))?(Fy(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hh(t,e,r,a,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hh(t,e,r,a))};function Gy(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ph(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ph(e)&&He(n)?!1:e in t}const Wy=it({patchProp:Ky},Ry);let mh;function Qy(){return mh||(mh=K_(Wy))}const Yy=(...t)=>{const e=Qy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Jy(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,Xy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Xy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Jy(t){return He(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function Zy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Ta(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const Ms=()=>{},Jt=Array.isArray,np=/#/g,ev=/&/g,tv=/\//g,nv=/=/g,rv=/\?/g,rp=/\+/g,sv=/%5B/g,iv=/%5D/g,sp=/%5E/g,ov=/%60/g,ip=/%7B/g,av=/%7C/g,op=/%7D/g,lv=/%20/g;function ru(t){return encodeURI(""+t).replace(av,"|").replace(sv,"[").replace(iv,"]")}function uv(t){return ru(t).replace(ip,"{").replace(op,"}").replace(sp,"^")}function Ja(t){return ru(t).replace(rp,"%2B").replace(lv,"+").replace(np,"%23").replace(ev,"%26").replace(ov,"`").replace(ip,"{").replace(op,"}").replace(sp,"^")}function cv(t){return Ja(t).replace(nv,"%3D")}function hv(t){return ru(t).replace(np,"%23").replace(rv,"%3F")}function fv(t){return t==null?"":hv(t).replace(tv,"%2F")}function Ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dv=/\/$/,pv=t=>t.replace(dv,"");function wa(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=e.slice(0,u),i=e.slice(u+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=yv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ys(a)}}function mv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gr(e.matched[r],n.matched[s])&&ap(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ap(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_v(t[n],e[n]))return!1;return!0}function _v(t,e){return Jt(t)?gh(t,e):Jt(e)?gh(e,t):t===e}function gh(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));const Ia="";function vv(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pv(t)}const Ev=/^[^#]+#/;function Tv(t,e){return t.replace(Ev,"#")+e}function wv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Iv=()=>({left:window.scrollX,top:window.scrollY});function Av(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _h(t,e){return(history.state?history.state.position-e:-1)+t}const Za=new Map;function Rv(t,e){Za.set(t,e)}function bv(t){const e=Za.get(t);return Za.delete(t),e}function Pv(t=""){let e=[],n=[Ia],r=0;t=vv(t);function s(l){r++,r!==n.length&&n.splice(r),n.push(l)}function i(l,u,{direction:h,delta:d}){const p={direction:h,delta:d,type:Xs.pop};for(const m of e)m(l,u,p)}const a={location:Ia,state:{},base:t,createHref:Tv.bind(null,t),replace(l){n.splice(r--,1),s(l)},push(l,u){s(l)},listen(l){return e.push(l),()=>{const u=e.indexOf(l);u>-1&&e.splice(u,1)}},destroy(){e=[],n=[Ia],r=0},go(l,u=!0){const h=this.location,d=l<0?fo.back:fo.forward;r=Math.max(0,Math.min(r+l,n.length-1)),u&&i(this.location,h,{direction:d,delta:l})}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a}function Sv(t){return typeof t=="string"||t&&typeof t=="object"}function lp(t){return typeof t=="string"||typeof t=="symbol"}const up=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function Wr(t,e){return Oe(new Error,{type:t,[up]:!0},e)}function cn(t,e){return t instanceof Error&&up in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",Cv={sensitive:!1,strict:!1,start:!0,end:!0},Vv=/[.+*?^${}()[\]/\\]/g;function xv(t,e){const n=Oe({},Cv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Vv,"\\$&"),y+=40;else if(m.type===1){const{value:P,repeatable:V,optional:D,regexp:$}=m;i.push({name:P,repeatable:V,optional:D});const j=$||vh;if(j!==vh){y+=10;try{new RegExp(`(${j})`)}catch(re){throw new Error(`Invalid custom RegExp for param "${P}" (${j}): `+re.message)}}let U=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(U=D&&h.length<2?`(?:/${U})`:"/"+U),D&&(U+="?"),s+=U,y+=20,D&&(y+=-8),V&&(y+=-20),j===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",P=i[m-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function u(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:P,repeatable:V,optional:D}=y,$=P in h?h[P]:"";if(Jt($)&&!V)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const j=Jt($)?$.join("/"):$;if(!j)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:u}}function Dv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Eh(r))return 1;if(Eh(s))return-1}return s.length-r.length}function Eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Nv={type:0,value:""},Ov=/[a-zA-Z0-9_]/;function kv(t){if(!t)return[[]];if(t==="/")return[[Nv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,u,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(h&&p(),a()):u===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:u==="("?n=2:Ov.test(u)?m():(p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function Mv(t,e,n){const r=xv(kv(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Fv(t,e){const n=[],r=new Map;e=Ih({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const P=!y,V=Lv(p);V.aliasOf=y&&y.record;const D=Ih(e,p),$=[V];if("alias"in p){const re=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of re)$.push(Oe({},V,{components:y?y.record.components:V.components,path:fe,aliasOf:y?y.record:V}))}let j,U;for(const re of $){const{path:fe}=re;if(m&&fe[0]!=="/"){const Y=m.record.path,b=Y[Y.length-1]==="/"?"":"/";re.path=m.record.path+(fe&&b+fe)}if(j=Mv(re,m,D),y?y.alias.push(j):(U=U||j,U!==j&&U.alias.push(j),P&&p.name&&!wh(j)&&a(p.name)),hp(j)&&u(j),V.children){const Y=V.children;for(let b=0;b<Y.length;b++)i(Y[b],j,y&&y.children[b])}y=y||j}return U?()=>{a(U)}:Ms}function a(p){if(lp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function u(p){const m=Uv(p,n);n.splice(m,0,p),p.record.name&&!wh(p)&&r.set(p.record.name,p)}function h(p,m){let y,P={},V,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Wr(1,{location:p});D=y.record.name,P=Oe(Th(m.params,y.keys.filter(U=>!U.optional).concat(y.parent?y.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&Th(p.params,y.keys.map(U=>U.name))),V=y.stringify(P)}else if(p.path!=null)V=p.path,y=n.find(U=>U.re.test(V)),y&&(P=y.parse(V),D=y.record.name);else{if(y=m.name?r.get(m.name):n.find(U=>U.re.test(m.path)),!y)throw Wr(1,{location:p,currentLocation:m});D=y.record.name,P=Oe({},m.params,p.params),V=y.stringify(P)}const $=[];let j=y;for(;j;)$.unshift(j.record),j=j.parent;return{name:D,path:V,params:P,matched:$,meta:Bv($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Th(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$v(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $v(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bv(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Ih(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Uv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;cp(t,e[i])<0?r=i:n=i+1}const s=jv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jv(t){let e=t;for(;e=e.parent;)if(hp(e)&&cp(t,e)===0)return e}function hp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(rp," "),a=i.indexOf("="),l=Ys(a<0?i:i.slice(0,a)),u=a<0?null:Ys(i.slice(a+1));if(l in e){let h=e[l];Jt(h)||(h=e[l]=[h]),h.push(u)}else e[l]=u}return e}function Ah(t){let e="";for(let n in t){const r=t[n];if(n=cv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(i=>i&&Ja(i)):[r&&Ja(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Hv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zv=Symbol(""),Rh=Symbol(""),su=Symbol(""),fp=Symbol(""),el=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,u)=>{const h=m=>{m===!1?u(Wr(4,{from:n,to:e})):m instanceof Error?u(m):Sv(m)?u(Wr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>u(m))})}function Aa(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let u=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Kv(u)){const d=(u.__vccOpts||u)[e];d&&i.push(Nn(d,n,r,a,l,s))}else{let h=u();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const p=Zy(d)?d.default:d;a.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&Nn(y,n,r,a,l,s)()}))}}return i}function Kv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bh(t){const e=zt(su),n=zt(fp),r=Qe(()=>{const u=Ge(t.to);return e.resolve(u)}),s=Qe(()=>{const{matched:u}=r.value,{length:h}=u,d=u[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Gr.bind(null,d));if(m>-1)return m;const y=Ph(u[h-2]);return h>1&&Ph(d)===y&&p[p.length-1].path!==y?p.findIndex(Gr.bind(null,u[h-2])):m}),i=Qe(()=>s.value>-1&&Qv(n.params,r.value.params)),a=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&ap(n.params,r.value.params));function l(u={}){return Wv(u)?e[Ge(t.replace)?"replace":"push"](Ge(t.to)).catch(Ms):Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const Gv=ss({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bh,setup(t,{slots:e}){const n=Co(bh(t)),{options:r}=zt(su),s=Qe(()=>({[Sh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Mo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tl=Gv;function Wv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Ph(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sh=(t,e,n)=>t??e??n,Yv=ss({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(el),s=Qe(()=>t.route||r.value),i=zt(Rh,0),a=Qe(()=>{let h=Ge(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Qe(()=>s.value.matched[a.value]);jr(Rh,Qe(()=>a.value+1)),jr(zv,l),jr(el,s);const u=nt();return Yi(()=>[u.value,l.value,t.name],([h,d,p],[m,y,P])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!Gr(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Ch(n.default,{Component:m,route:h});const y=p.props[d],P=y?y===!0?h.params:typeof y=="function"?y(h):y:null,D=Mo(m,Oe({},P,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:u}));return Ch(n.default,{Component:D,route:h})||D}}});function Ch(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dp=Yv;function Xv(t){const e=Fv(t.routes,t),n=t.parseQuery||qv,r=t.stringifyQuery||Ah,s=t.history,i=As(),a=As(),l=As(),u=u_(Cn);let h=Cn;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ta.bind(null,O=>""+O),p=Ta.bind(null,fv),m=Ta.bind(null,Ys);function y(O,X){let W,J;return lp(O)?(W=e.getRecordMatcher(O),J=X):J=O,e.addRoute(J,W)}function P(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function $(O,X){if(X=Oe({},X||u.value),typeof O=="string"){const w=wa(n,O,X.path),C=e.resolve({path:w.path},X),k=s.createHref(w.fullPath);return Oe(w,C,{params:m(C.params),hash:Ys(w.hash),redirectedFrom:void 0,href:k})}let W;if(O.path!=null)W=Oe({},O,{path:wa(n,O.path,X.path).path});else{const w=Oe({},O.params);for(const C in w)w[C]==null&&delete w[C];W=Oe({},O,{params:p(w)}),X.params=p(X.params)}const J=e.resolve(W,X),ge=O.hash||"";J.params=d(m(J.params));const Ve=mv(r,Oe({},O,{hash:uv(ge),path:J.path})),_=s.createHref(Ve);return Oe({fullPath:Ve,hash:ge,query:r===Ah?Hv(O.query):O.query||{}},J,{redirectedFrom:void 0,href:_})}function j(O){return typeof O=="string"?wa(n,O,u.value.path):Oe({},O)}function U(O,X){if(h!==O)return Wr(8,{from:X,to:O})}function re(O){return b(O)}function fe(O){return re(Oe(j(O),{replace:!0}))}function Y(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:W}=X;let J=typeof W=="function"?W(O):W;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=j(J):{path:J},J.params={}),Oe({query:O.query,hash:O.hash,params:J.path!=null?{}:O.params},J)}}function b(O,X){const W=h=$(O),J=u.value,ge=O.state,Ve=O.force,_=O.replace===!0,w=Y(W);if(w)return b(Oe(j(w),{state:typeof w=="object"?Oe({},ge,w.state):ge,force:Ve,replace:_}),X||W);const C=W;C.redirectedFrom=X;let k;return!Ve&&gv(r,J,W)&&(k=Wr(16,{to:C,from:J}),Mt(J,J,!0,!1)),(k?Promise.resolve(k):A(C,J)).catch(N=>cn(N)?cn(N,2)?N:Kt(N):de(N,C,J)).then(N=>{if(N){if(cn(N,2))return b(Oe({replace:_},j(N.to),{state:typeof N.to=="object"?Oe({},ge,N.to.state):ge,force:Ve}),X||C)}else N=I(C,J,!0,_,ge);return R(C,J,N),N})}function E(O,X){const W=U(O,X);return W?Promise.reject(W):Promise.resolve()}function v(O){const X=Tn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function A(O,X){let W;const[J,ge,Ve]=Jv(O,X);W=Aa(J.reverse(),"beforeRouteLeave",O,X);for(const w of J)w.leaveGuards.forEach(C=>{W.push(Nn(C,O,X))});const _=E.bind(null,O,X);return W.push(_),At(W).then(()=>{W=[];for(const w of i.list())W.push(Nn(w,O,X));return W.push(_),At(W)}).then(()=>{W=Aa(ge,"beforeRouteUpdate",O,X);for(const w of ge)w.updateGuards.forEach(C=>{W.push(Nn(C,O,X))});return W.push(_),At(W)}).then(()=>{W=[];for(const w of Ve)if(w.beforeEnter)if(Jt(w.beforeEnter))for(const C of w.beforeEnter)W.push(Nn(C,O,X));else W.push(Nn(w.beforeEnter,O,X));return W.push(_),At(W)}).then(()=>(O.matched.forEach(w=>w.enterCallbacks={}),W=Aa(Ve,"beforeRouteEnter",O,X,v),W.push(_),At(W))).then(()=>{W=[];for(const w of a.list())W.push(Nn(w,O,X));return W.push(_),At(W)}).catch(w=>cn(w,8)?w:Promise.reject(w))}function R(O,X,W){l.list().forEach(J=>v(()=>J(O,X,W)))}function I(O,X,W,J,ge){const Ve=U(O,X);if(Ve)return Ve;const _=X===Cn,w=Vr?history.state:{};W&&(J||_?s.replace(O.fullPath,Oe({scroll:_&&w&&w.scroll},ge)):s.push(O.fullPath,ge)),u.value=O,Mt(O,X,W,_),Kt()}let T;function Ce(){T||(T=s.listen((O,X,W)=>{if(!Zt.listening)return;const J=$(O),ge=Y(J);if(ge){b(Oe(ge,{replace:!0}),J).catch(Ms);return}h=J;const Ve=u.value;Vr&&Rv(_h(Ve.fullPath,W.delta),Iv()),A(J,Ve).catch(_=>cn(_,12)?_:cn(_,2)?(b(_.to,J).then(w=>{cn(w,20)&&!W.delta&&W.type===Xs.pop&&s.go(-1,!1)}).catch(Ms),Promise.reject()):(W.delta&&s.go(-W.delta,!1),de(_,J,Ve))).then(_=>{_=_||I(J,Ve,!1),_&&(W.delta&&!cn(_,8)?s.go(-W.delta,!1):W.type===Xs.pop&&cn(_,20)&&s.go(-1,!1)),R(J,Ve,_)}).catch(Ms)}))}let ot=As(),ke=As(),me;function de(O,X,W){Kt(O);const J=ke.list();return J.length?J.forEach(ge=>ge(O,X,W)):console.error(O),Promise.reject(O)}function xt(){return me&&u.value!==Cn?Promise.resolve():new Promise((O,X)=>{ot.add([O,X])})}function Kt(O){return me||(me=!O,Ce(),ot.list().forEach(([X,W])=>O?W(O):X()),ot.reset()),O}function Mt(O,X,W,J){const{scrollBehavior:ge}=t;if(!Vr||!ge)return Promise.resolve();const Ve=!W&&bv(_h(O.fullPath,0))||(J||!W)&&history.state&&history.state.scroll||null;return mn().then(()=>ge(O,X,Ve)).then(_=>_&&Av(_)).catch(_=>de(_,O,X))}const Me=O=>s.go(O);let Fe;const Tn=new Set,Zt={currentRoute:u,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:$,options:t,push:re,replace:fe,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:ke.add,isReady:xt,install(O){const X=this;O.component("RouterLink",tl),O.component("RouterView",dp),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(u)}),Vr&&!Fe&&u.value===Cn&&(Fe=!0,re(s.location).catch(ge=>{}));const W={};for(const ge in Cn)Object.defineProperty(W,ge,{get:()=>u.value[ge],enumerable:!0});O.provide(su,X),O.provide(fp,md(W)),O.provide(el,u);const J=O.unmount;Tn.add(O),O.unmount=function(){Tn.delete(O),Tn.size<1&&(h=Cn,T&&T(),T=null,u.value=Cn,Fe=!1,me=!1),J()}}};function At(O){return O.reduce((X,W)=>X.then(()=>v(W)),Promise.resolve())}return Zt}function Jv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Gr(h,l))?r.push(l):n.push(l));const u=t.matched[a];u&&(e.matched.find(h=>Gr(h,u))||s.push(u))}return[n,r,s]}function Zv(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"})])}function e0(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"})])}function t0(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}function n0(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"fill-rule":"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function r0(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}function s0(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"fill-rule":"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z","clip-rule":"evenodd"})])}function i0(t,e){return Je(),vt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z","clip-rule":"evenodd"})])}const o0=M("div",{class:"fixed inset-0 bg-gray-900/80"},null,-1),a0={class:"fixed inset-0 flex"},l0={class:"absolute left-full top-0 flex w-16 justify-center pt-5"},u0=M("span",{class:"sr-only"},"Close sidebar",-1),c0={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10"},h0=M("div",{class:"flex h-16 shrink-0 items-center"},[M("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),f0={class:"flex flex-1 flex-col"},d0={role:"list",class:"flex flex-1 flex-col gap-y-7"},p0={role:"list",class:"-mx-2 space-y-1"},m0=M("div",{class:"text-xs font-semibold leading-6 text-gray-400"},"Your teams",-1),g0={role:"list",class:"-mx-2 mt-2 space-y-1"},_0=["href"],y0={class:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"},v0={class:"truncate"},E0=M("li",{class:"-mx-6 mt-auto"},[M("a",{href:"#",class:"flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"},[M("img",{class:"h-8 w-8 rounded-full bg-gray-800",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}),M("span",{class:"sr-only"},"Your profile"),M("span",{"aria-hidden":"true"},"Tom Cook")])],-1),T0={class:"hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col"},w0={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5"},I0=M("div",{class:"flex h-16 shrink-0 items-center"},[M("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),A0={class:"flex flex-1 flex-col"},R0={role:"list",class:"flex flex-1 flex-col gap-y-7"},b0={role:"list",class:"-mx-2 space-y-1"},P0=M("div",{class:"text-xs font-semibold leading-6 text-gray-400"},"Your teams",-1),S0={role:"list",class:"-mx-2 mt-2 space-y-1"},C0=["href"],V0={class:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"},x0={class:"truncate"},D0=cy('<li class="-mx-6 mt-auto"><a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"><img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""><span class="sr-only">Your profile</span><span aria-hidden="true">Tom Cook</span></a></li>',1),N0={class:"xl:pl-72"},O0={__name:"HomeScreen",setup(t){const e=[{name:"Home",href:"/",icon:Zv,current:!0},{name:"Timing",href:"/timing",icon:e0,current:!0}],n=[{id:1,name:"Planetaria",href:"#",initial:"P",current:!1},{id:2,name:"Protocol",href:"#",initial:"P",current:!1},{id:3,name:"Tailwind Labs",href:"#",initial:"T",current:!1}],r=nt(!1);return(s,i)=>{const a=Li("TransitionChild"),l=Li("DialogPanel"),u=Li("Dialog"),h=Li("TransitionRoot");return Je(),vt("div",null,[ve(h,{as:"template",show:r.value},{default:gt(()=>[ve(u,{class:"relative z-50 xl:hidden",onClose:i[1]||(i[1]=d=>r.value=!1)},{default:gt(()=>[ve(a,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:gt(()=>[o0]),_:1}),M("div",a0,[ve(a,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:gt(()=>[ve(l,{class:"relative mr-16 flex w-full max-w-xs flex-1"},{default:gt(()=>[ve(a,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:gt(()=>[M("div",l0,[M("button",{type:"button",class:"-m-2.5 p-2.5",onClick:i[0]||(i[0]=d=>r.value=!1)},[u0,ve(Ge(t0),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),M("div",c0,[h0,M("nav",f0,[M("ul",d0,[M("li",null,[M("ul",p0,[(Je(),vt(rt,null,Fr(e,d=>M("li",{key:d.name},[ve(Ge(tl),{to:d.href},{default:gt(()=>[M("div",{class:Ut([d.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"])},[(Je(),Qa(jc(d.icon),{class:"h-6 w-6 shrink-0","aria-hidden":"true"})),dn(" "+et(d.name),1)],2)]),_:2},1032,["to"])])),64))])]),M("li",null,[m0,M("ul",g0,[(Je(),vt(rt,null,Fr(n,d=>M("li",{key:d.name},[M("a",{href:d.href,class:Ut([d.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"])},[M("span",y0,et(d.initial),1),M("span",v0,et(d.name),1)],10,_0)])),64))])]),E0])])])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]),M("div",T0,[M("div",w0,[I0,M("nav",A0,[M("ul",R0,[M("li",null,[M("ul",b0,[(Je(),vt(rt,null,Fr(e,d=>M("li",{key:d.name},[ve(Ge(tl),{to:d.href},{default:gt(()=>[M("div",{class:Ut([d.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"])},[(Je(),Qa(jc(d.icon),{class:"h-6 w-6 shrink-0","aria-hidden":"true"})),dn(" "+et(d.name),1)],2)]),_:2},1032,["to"])])),64))])]),M("li",null,[P0,M("ul",S0,[(Je(),vt(rt,null,Fr(n,d=>M("li",{key:d.name},[M("a",{href:d.href,class:Ut([d.current?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white","group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"])},[M("span",V0,et(d.initial),1),M("span",x0,et(d.name),1)],10,C0)])),64))])]),D0])])])]),M("div",N0,[ve(Ge(dp))])])}}},k0={__name:"App",setup(t){return(e,n)=>(Je(),Qa(O0))}};var Vh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},M0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,y=h&63;u||(y=64,a||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):M0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new F0;const m=i<<2|l>>4;if(r.push(m),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L0=function(t){const e=pp(t);return mp.encodeByteArray(e,!0)},po=function(t){return L0(t).replace(/\./g,"")},$0=function(t){try{return mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=()=>B0().__FIREBASE_DEFAULTS__,j0=()=>{if(typeof process>"u"||typeof Vh>"u")return;const t=Vh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},q0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$0(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return U0()||j0()||q0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H0=t=>{var e,n;return(n=(e=iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z0=t=>{const e=H0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gp=()=>{var t;return(t=iu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[po(JSON.stringify(n)),po(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q0(){var t;const e=(t=iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Y0(){return!Q0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function X0(){try{return typeof indexedDB=="object"}catch{return!1}}function J0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="FirebaseError";class Ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Z0,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_p.prototype.create)}}class _p{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?eE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ir(s,l,r)}}function eE(t,e){return t.replace(tE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tE=/\{\$([^}]+)}/g;function nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(xh(i)&&xh(a)){if(!nl(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new K0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(t){return t===ir?void 0:t}function sE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const oE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},aE=pe.INFO,lE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},uE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=uE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const cE=(t,e)=>e.some(n=>t instanceof n);let Dh,Nh;function hE(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return Nh||(Nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yp=new WeakMap,rl=new WeakMap,vp=new WeakMap,Ra=new WeakMap,lu=new WeakMap;function dE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Ln(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&yp.set(n,t)}).catch(()=>{}),lu.set(e,t),e}function pE(t){if(rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});rl.set(t,e)}let sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mE(t){sl=t(sl)}function gE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ba(this),e,...n);return vp.set(r,e.sort?e.sort():[e]),Ln(r)}:fE().includes(t)?function(...e){return t.apply(ba(this),e),Ln(yp.get(this))}:function(...e){return Ln(t.apply(ba(this),e))}}function _E(t){return typeof t=="function"?gE(t):(t instanceof IDBTransaction&&pE(t),cE(t,hE())?new Proxy(t,sl):t)}function Ln(t){if(t instanceof IDBRequest)return dE(t);if(Ra.has(t))return Ra.get(t);const e=_E(t);return e!==t&&(Ra.set(t,e),lu.set(e,t)),e}const ba=t=>lu.get(t);function yE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Ln(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ln(a.result),u.oldVersion,u.newVersion,Ln(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const vE=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],Pa=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=EE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vE.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Pa.set(e,i),i}mE(t=>({...t,get:(e,n,r)=>Oh(e,n)||t.get(e,n,r),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const il="@firebase/app",kh="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new au("@firebase/app"),IE="@firebase/app-compat",AE="@firebase/analytics-compat",RE="@firebase/analytics",bE="@firebase/app-check-compat",PE="@firebase/app-check",SE="@firebase/auth",CE="@firebase/auth-compat",VE="@firebase/database",xE="@firebase/database-compat",DE="@firebase/functions",NE="@firebase/functions-compat",OE="@firebase/installations",kE="@firebase/installations-compat",ME="@firebase/messaging",FE="@firebase/messaging-compat",LE="@firebase/performance",$E="@firebase/performance-compat",BE="@firebase/remote-config",UE="@firebase/remote-config-compat",jE="@firebase/storage",qE="@firebase/storage-compat",HE="@firebase/firestore",zE="@firebase/vertexai-preview",KE="@firebase/firestore-compat",GE="firebase",WE="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="[DEFAULT]",QE={[il]:"fire-core",[IE]:"fire-core-compat",[RE]:"fire-analytics",[AE]:"fire-analytics-compat",[PE]:"fire-app-check",[bE]:"fire-app-check-compat",[SE]:"fire-auth",[CE]:"fire-auth-compat",[VE]:"fire-rtdb",[xE]:"fire-rtdb-compat",[DE]:"fire-fn",[NE]:"fire-fn-compat",[OE]:"fire-iid",[kE]:"fire-iid-compat",[ME]:"fire-fcm",[FE]:"fire-fcm-compat",[LE]:"fire-perf",[$E]:"fire-perf-compat",[BE]:"fire-rc",[UE]:"fire-rc-compat",[jE]:"fire-gcs",[qE]:"fire-gcs-compat",[HE]:"fire-fst",[KE]:"fire-fst-compat",[zE]:"fire-vertex","fire-js":"fire-js",[GE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,YE=new Map,al=new Map;function Mh(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(al.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of mo.values())Mh(n,t);for(const n of YE.values())Mh(n,t);return!0}function XE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new _p("app","Firebase",JE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=WE;function Tp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ol,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=gp()),!n)throw $n.create("no-options");const i=mo.get(s);if(i){if(nl(n,i.options)&&nl(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const a=new iE(s);for(const u of al.values())a.addComponent(u);const l=new ZE(n,r,a);return mo.set(s,l),l}function eT(t=ol){const e=mo.get(t);if(!e&&t===ol&&gp())return Tp();if(!e)throw $n.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=QE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(l.join(" "));return}Js(new Qr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="firebase-heartbeat-database",nT=1,Zs="firebase-heartbeat-store";let Sa=null;function wp(){return Sa||(Sa=yE(tT,nT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function rT(t){try{const n=(await wp()).transaction(Zs),r=await n.objectStore(Zs).get(Ip(t));return await n.done,r}catch(e){if(e instanceof Ir)yn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Fh(t,e){try{const r=(await wp()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,Ip(t)),await r.done}catch(n){if(n instanceof Ir)yn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function Ip(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1024,iT=30*24*60*60*1e3;class oT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=iT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lh(),{heartbeatsToSend:r,unsentEntries:s}=aT(this._heartbeatsCache.heartbeats),i=po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yn.warn(n),""}}}function Lh(){return new Date().toISOString().substring(0,10)}function aT(t,e=sT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$h(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$h(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X0()?J0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $h(t){return po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){Js(new Qr("platform-logger",e=>new TE(e),"PRIVATE")),Js(new Qr("heartbeat",e=>new oT(e),"PRIVATE")),Bn(il,kh,t),Bn(il,kh,"esm2017"),Bn("fire-js","")}uT("");var cT="firebase",hT="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(cT,hT,"app");const fT={apiKey:"AIzaSyC4F-s6Rq5Hmtt5hga18uKBMrCEWTg-DO0",authDomain:"hosanna-926ec.firebaseapp.com",databaseURL:"https://hosanna-926ec.firebaseio.com",projectId:"hosanna-926ec",storageBucket:"hosanna-926ec.appspot.com",messagingSenderId:"302024785420",appId:"1:302024785420:web:467c7f2e8173a6d5567829"},dT=Tp(fT);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new au("@firebase/firestore");function go(t,...e){if(Yr.logLevel<=pe.DEBUG){const n=e.map(cu);Yr.debug(`Firestore (${is}): ${t}`,...n)}}function uu(t,...e){if(Yr.logLevel<=pe.ERROR){const n=e.map(cu);Yr.error(`Firestore (${is}): ${t}`,...n)}}function Ap(t,...e){if(Yr.logLevel<=pe.WARN){const n=e.map(cu);Yr.warn(`Firestore (${is}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw uu(e),new Error(e)}function qn(t,e){t||st()}function hu(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="ok",pT="cancelled",Fs="unknown",Se="invalid-argument",mT="deadline-exceeded",gT="not-found",_T="permission-denied",ll="unauthenticated",yT="resource-exhausted",Xr="failed-precondition",vT="aborted",ET="out-of-range",Rp="unimplemented",TT="internal",wT="unavailable";let he=class extends Ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bp=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},IT=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}};class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RT{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(qn(typeof e.accessToken=="string"),new bp(e.accessToken,new bt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}let bT=class{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}},PT=class{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new bT(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},ST=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class CT{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(qn(typeof e.token=="string"),new ST(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VT=class{constructor(e,n,r,s,i,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}},Pp=class ul{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}},Sp=class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&st(),r===void 0?r=e.length-n:r>e.length-n&&st(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},Qt=class eo extends Sp{construct(e,n,r){return new eo(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(Se,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new eo(n)}static emptyPath(){return new eo([])}};const xT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Ls=class xr extends Sp{construct(e,n,r){return new xr(e,n,r)}static isValidIdentifier(e){return xT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xr(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new he(Se,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new he(Se,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new he(Se,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new he(Se,"Unterminated ` in path: "+e);return new xr(n)}static emptyPath(){return new xr([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr=class Ps{constructor(e){this.path=e}static fromPath(e){return new Ps(Qt.fromString(e))}static fromName(e){return new Ps(Qt.fromString(e).popFirst(5))}static empty(){return new Ps(Qt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ps(new Qt(e.slice()))}};function Uh(t){if(gr.isDocumentKey(t))throw new he(Se,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function DT(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":st()}function Cp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(Se,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=DT(t);throw new he(Se,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=null;function NT(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){return t==null}function jh(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qh,_e;function Hh(t){if(t===void 0)return uu("RPC_ERROR","HTTP error has no status"),Fs;switch(t){case 200:return Bh;case 400:return Xr;case 401:return ll;case 403:return _T;case 404:return gT;case 409:return vT;case 416:return ET;case 429:return yT;case 499:return pT;case 500:return Fs;case 501:return Rp;case 503:return wT;case 504:return mT;default:return t>=200&&t<300?Bh:t>=400&&t<500?Xr:t>=500&&t<600?TT:Fs}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(_e=qh||(qh={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";class MT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get R(){return!1}P(n,r,s,i,a){const l=NT(),u=this.V(n,r.toUriEncodedString());go("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(h,i,a),this.p(n,u,h,s).then(d=>(go("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ap("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",s),d})}g(n,r,s,i,a,l){return this.P(n,r,s,i,a)}I(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}V(n,r){const s=kT[n];return`${this.m}/v1/${r}:${s}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,s){var i;const a=JSON.stringify(s);let l;try{l=await this.F(n,{method:"POST",headers:r,body:a})}catch(u){const h=u;throw new he(Hh(h.status),"Request failed with error: "+h.statusText)}if(!l.ok){let u=await l.json();Array.isArray(u)&&(u=u[0]);const h=(i=u==null?void 0:u.error)===null||i===void 0?void 0:i.message;throw new he(Hh(l.status),`Request failed with error: ${h??l.statusText}`)}return l.json()}}function Xe(t,e){return t<e?-1:t>e?1:0}function FT(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LT=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr=class hl{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new LT("Invalid base64 string: "+i):i}}(e);return new hl(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new hl(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Jr.EMPTY_BYTE_STRING=new Jr("");const $T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(qn(!!t),typeof t=="string"){let e=0;const n=$T.exec(t);if(qn(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ei(t){return typeof t=="string"?Jr.fromBase64String(t):Jr.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti=class to{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(Se,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(Se,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new he(Se,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Se,"Timestamp seconds out of range: "+e)}static now(){return to.fromMillis(Date.now())}static fromDate(e){return to.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new to(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xe(this.nanoseconds,e.nanoseconds):Xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dp(t){const e=t.mapValue.fields.__previous_value__;return xp(e)?Dp(e):e}function ni(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new ti(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={fields:{__type__:{stringValue:"__max__"}}};function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xp(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:function(n){var r,s;return((s=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="__vector__"}(t)?10:11:st()}function _o(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ni(t).isEqual(ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=_r(s.timestampValue),l=_r(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ei(s.bytesValue).isEqual(ei(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=We(s.doubleValue),l=We(i.doubleValue);return a===l?jh(a)===jh(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return FT(t.arrayValue.values||[],e.arrayValue.values||[],_o);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zh(a)!==zh(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!_o(a[u],l[u])))return!1;return!0}(t,e);default:return st()}}function ri(t,e){return(t.values||[]).find(n=>_o(n,e))!==void 0}function yo(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return Xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xe(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=We(i.integerValue||i.doubleValue),u=We(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Kh(t.timestampValue,e.timestampValue);case 4:return Kh(ni(t),ni(e));case 5:return Xe(t.stringValue,e.stringValue);case 6:return function(i,a){const l=ei(i),u=ei(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=Xe(l[h],u[h]);if(d!==0)return d}return Xe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Xe(We(i.latitude),We(a.latitude));return l!==0?l:Xe(We(i.longitude),We(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Gh(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,h,d;const p=i.fields||{},m=a.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,V=Xe(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:Gh(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ui&&a===Ui)return 0;if(i===Ui)return 1;if(a===Ui)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Xe(u[p],d[p]);if(m!==0)return m;const y=yo(l[u[p]],h[d[p]]);if(y!==0)return y}return Xe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw st()}}function Kh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Xe(t,e);const n=_r(t),r=_r(e),s=Xe(n.seconds,r.seconds);return s!==0?s:Xe(n.nanos,r.nanos)}function Gh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=yo(n[s],r[s]);if(i)return i}return Xe(n.length,r.length)}function Np(t){return!!t&&"arrayValue"in t}function Wh(t){return!!t&&"nullValue"in t}function Qh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fu(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}let Yh=class{constructor(e,n){this.position=e,this.inclusive=n}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op=class{},Yn=class kp extends Op{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BT(e,n,r):n==="array-contains"?new qT(e,r):n==="in"?new HT(e,r):n==="not-in"?new zT(e,r):n==="array-contains-any"?new KT(e,r):new kp(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UT(e,r):new jT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yo(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return st()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Mp=class Fp extends Op{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Fp(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}},BT=class extends Yn{constructor(e,n,r){super(e,n,r),this.key=gr.fromName(r.referenceValue)}matches(e){const n=gr.comparator(e.key,this.key);return this.matchesComparison(n)}},UT=class extends Yn{constructor(e,n){super(e,"in",n),this.keys=Lp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}},jT=class extends Yn{constructor(e,n){super(e,"not-in",n),this.keys=Lp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function Lp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>gr.fromName(r.referenceValue))}let qT=class extends Yn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Np(n)&&ri(n.arrayValue,this.value)}},HT=class extends Yn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ri(this.value.arrayValue,n)}},zT=class extends Yn{constructor(e,n){super(e,"not-in",n)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ri(this.value.arrayValue,n)}},KT=class extends Yn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ri(this.value.arrayValue,r))}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl=class{constructor(e,n="asc"){this.field=e,this.dir=n}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt=class no{constructor(e){this.timestamp=e}static fromTimestamp(e){return new no(e)}static min(){return new no(new ti(0,0))}static max(){return new no(new ti(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GT=class dl{constructor(e,n){this.comparator=e,this.root=n||Un.EMPTY}insert(e,n){return new dl(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Un.BLACK,null,null))}remove(e){return new dl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Un.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}},ji=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Un=class hn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??hn.RED,this.left=s??hn.EMPTY,this.right=i??hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new hn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return hn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw st();const e=this.left.check();if(e!==this.right.check())throw st();return e+(this.isRed()?0:1)}};Un.EMPTY=null,Un.RED=!0,Un.BLACK=!1;Un.EMPTY=new class{constructor(){this.size=0}get key(){throw st()}get value(){throw st()}get color(){throw st()}get left(){throw st()}get right(){throw st()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Un(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WT=class pl{constructor(e){this.comparator=e,this.data=new GT(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xh(this.data.getIterator())}getIteratorFrom(e){return new Xh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pl)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pl(this.comparator);return n.data=e,n}},Xh=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr=class ml{constructor(e){this.value=e}static empty(){return new ml({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Ls.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=$s(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _o(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ca(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fu(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ml($s(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QT=class or{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new or(e,0,Bt.min(),Bt.min(),Bt.min(),Dr.empty(),0)}static newFoundDocument(e,n,r,s){return new or(e,1,n,Bt.min(),r,s,0)}static newNoDocument(e,n){return new or(e,2,n,Bt.min(),Bt.min(),Dr.empty(),0)}static newUnknownDocument(e,n){return new or(e,3,n,Bt.min(),Bt.min(),Dr.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Bt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Bt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof or&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new or(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YT=class{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.C=null}};function Jh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new YT(t,e,n,r,s,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XT=class{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}};function JT(t){const e=hu(t);if(e.S===null){e.S=[];const n=new Set;for(const i of e.explicitOrderBy)e.S.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new WT(Ls.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.S.push(new fl(i,r))}),n.has(Ls.keyField().canonicalString())||e.S.push(new fl(Ls.keyField(),r))}return e.S}function ZT(t){const e=hu(t);return e.N||(e.N=ew(e,JT(t))),e.N}function ew(t,e){if(t.limitType==="F")return Jh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fl(s.field,i)});const n=t.endAt?new Yh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yh(t.startAt.position,t.startAt.inclusive):null;return Jh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={asc:"ASCENDING",desc:"DESCENDING"},nw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rw={and:"AND",or:"OR"};let sw=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function Zh(t){return qn(!!t),Bt.fromTimestamp(function(n){const r=_r(n);return new ti(r.seconds,r.nanos)}(t))}function iw(t,e){return gl(t,e).canonicalString()}function gl(t,e){const n=function(s){return new Qt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ow(t,e){const n=function(s){const i=Qt.fromString(s);return qn(Bp(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new he(Se,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new he(Se,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new gr(function(s){return qn(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function aw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(h,d){return iw(h.databaseId,d)}(t,s);const i=function(h){if(h.length!==0)return $p(Mp.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Nr(m.field),direction:lw(m.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=function(h,d){return h.useProto3Json||OT(d)?d:{value:d}}(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{B:n,parent:s}}function lw(t){return tw[t]}function uw(t){return nw[t]}function cw(t){return rw[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function $p(t){return t instanceof Yn?function(n){if(n.op==="=="){if(Qh(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NAN"}};if(Wh(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qh(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NAN"}};if(Wh(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(n.field),op:uw(n.op),value:n.value}}}(t):t instanceof Mp?function(n){const r=n.getFilters().map(s=>$p(s));return r.length===1?r[0]:{compositeFilter:{op:cw(n.op),filters:r}}}(t):st()}function Bp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){return new sw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fw=class extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.Y=!1}Z(){if(this.Y)throw new he(Xr,"The client has already been terminated.")}P(e,n,r,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.P(e,gl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ll&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new he(Fs,i.toString())})}g(e,n,r,s,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.g(e,gl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ll&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new he(Fs,a.toString())})}terminate(){this.Y=!0,this.connection.terminate()}};async function dw(t,e){const n=hu(t),{B:r,parent:s}=aw(n.serializer,ZT(e));return(await n.g("RunQuery",n.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(l,u,h){const d=ow(l,u.name),p=Zh(u.updateTime),m=u.createTime?Zh(u.createTime):Bt.min(),y=new Dr({mapValue:{fields:u.fields}}),P=QT.newFoundDocument(d,p,m,y);return h&&P.setHasCommittedMutations(),h?P.setHasCommittedMutations():P}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map;function pw(t){if(t._terminated)throw new he(Xr,"The client has already been terminated.");if(!Bs.has(t)){go("ComponentProvider","Initializing Datastore");const e=function(i){return new MT(i,fetch.bind(null))}(function(i,a,l,u){return new VT(i,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vp(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=hw(t._databaseId),r=function(i,a,l,u){return new fw(i,a,l,u)}(t._authCredentials,t._appCheckCredentials,e,n);Bs.set(t,r)}return Bs.get(t)}let ef=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Se,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(Se,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,a,l,u){if(a===!0&&u===!0)throw new he(Se,`${i} and ${l} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new he(Se,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new he(Se,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new he(Se,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},du=class{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ef({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new he(Xr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new he(Xr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ef(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IT;switch(r.type){case"firstParty":return new PT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(Se,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bs.get(n);r&&(go("ComponentProvider","Removing Datastore"),Bs.delete(n),r.terminate())}(this),Promise.resolve()}};function mw(t,e){const n=typeof t=="object"?t:eT(),r=typeof t=="string"?t:"(default)",s=XE(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=z0("firestore");i&&gw(s,...i)}return s}function gw(t,e,n,r={}){var s;const i=(t=Cp(t,du))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ap("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=bt.MOCK_USER;else{l=G0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new he(Se,"mockUserToken must contain 'sub' or 'user_id' field!");u=new bt(h)}t._authCredentials=new AT(new bp(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up=class jp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jp(this.firestore,e,this._query)}},Fo=class qp{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ro(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qp(this.firestore,e,this._key)}},ro=class Hp extends Up{constructor(e,n,r){super(e,n,function(i){return new XT(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fo(this.firestore,null,new gr(e))}withConverter(e){return new Hp(this.firestore,e,this._path)}};function _w(t,e,...n){if(t=ou(t),t instanceof du){const r=Qt.fromString(e,...n);return Uh(r),new ro(t,null,r)}{if(!(t instanceof Fo||t instanceof ro))throw new he(Se,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qt.fromString(e,...n));return Uh(r),new ro(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yw=class _l{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _l(Jr.fromBase64String(e))}catch(n){throw new he(Se,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _l(Jr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(Se,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ls(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vw=class{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(Se,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(Se,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xe(this._lat,e._lat)||Xe(this._long,e._long)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew=class{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}};const Tw=new RegExp("[~\\*/\\[\\]]");function ww(t,e,n){if(e.search(Tw)>=0)throw tf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new zp(...e.split("."))._internalPath}catch{throw tf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function tf(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new he(Se,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iw=class{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fo(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}},Kp=class extends Iw{data(){return super.data()}},Aw=class{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}};function Rw(t,e){return typeof e=="string"?ww(t,e):e instanceof zp?e._internalPath:e._delegate._internalPath}class bw extends class{convertValue(n,r="none"){switch(yr(n)){case 0:return null;case 1:return n.booleanValue;case 2:return We(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(ei(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 11:return this.convertObject(n.mapValue,r);case 10:return this.convertVectorValue(n.mapValue);default:throw st()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const s={};return fu(n,(i,a)=>{s[i]=this.convertValue(a,r)}),s}convertVectorValue(n){var r,s,i;const a=(i=(s=(r=n.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(l=>We(l.doubleValue));return new Ew(a)}convertGeoPoint(n){return new vw(We(n.latitude),We(n.longitude))}convertArray(n,r){return(n.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(n,r){switch(r){case"previous":const s=Dp(n);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(ni(n));default:return null}}convertTimestamp(n){const r=_r(n);return new ti(r.seconds,r.nanos)}convertDocumentKey(n,r){const s=Qt.fromString(n);qn(Bp(s));const i=new Pp(s.get(1),s.get(3)),a=new gr(s.popFirst(5));return i.isEqual(r)||uu(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new yw(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fo(this.firestore,null,n)}}function Pw(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new he(Rp,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Cp(t,Up))._query);const e=pw(t.firestore),n=new bw(t.firestore);return dw(e,t._query).then(r=>{const s=r.map(i=>new Kp(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Aw(t,s)})}(function(){(function(n){is=n})(`${Ep}_lite`),Js(new Qr("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new du(new RT(e.getProvider("auth-internal")),new CT(e.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new he(Se,'"projectId" not provided in firebase.initializeApp.');return new Pp(l.options.projectId,u)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Bn("firestore-lite","4.7.1",""),Bn("firestore-lite","4.7.1","esm2017")})();var nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,Gp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function v(){}v.prototype=E.prototype,b.D=E.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(A,R,I){for(var T=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)T[Ce-2]=arguments[Ce];return E.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,v){v||(v=0);var A=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)A[R]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(R=0;16>R;++R)A[R]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=b.g[0],v=b.g[1],R=b.g[2];var I=b.g[3],T=E+(I^v&(R^I))+A[0]+3614090360&4294967295;E=v+(T<<7&4294967295|T>>>25),T=I+(R^E&(v^R))+A[1]+3905402710&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(v^I&(E^v))+A[2]+606105819&4294967295,R=I+(T<<17&4294967295|T>>>15),T=v+(E^R&(I^E))+A[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=E+(I^v&(R^I))+A[4]+4118548399&4294967295,E=v+(T<<7&4294967295|T>>>25),T=I+(R^E&(v^R))+A[5]+1200080426&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(v^I&(E^v))+A[6]+2821735955&4294967295,R=I+(T<<17&4294967295|T>>>15),T=v+(E^R&(I^E))+A[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=E+(I^v&(R^I))+A[8]+1770035416&4294967295,E=v+(T<<7&4294967295|T>>>25),T=I+(R^E&(v^R))+A[9]+2336552879&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(v^I&(E^v))+A[10]+4294925233&4294967295,R=I+(T<<17&4294967295|T>>>15),T=v+(E^R&(I^E))+A[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=E+(I^v&(R^I))+A[12]+1804603682&4294967295,E=v+(T<<7&4294967295|T>>>25),T=I+(R^E&(v^R))+A[13]+4254626195&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(v^I&(E^v))+A[14]+2792965006&4294967295,R=I+(T<<17&4294967295|T>>>15),T=v+(E^R&(I^E))+A[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=E+(R^I&(v^R))+A[1]+4129170786&4294967295,E=v+(T<<5&4294967295|T>>>27),T=I+(v^R&(E^v))+A[6]+3225465664&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^v&(I^E))+A[11]+643717713&4294967295,R=I+(T<<14&4294967295|T>>>18),T=v+(I^E&(R^I))+A[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=E+(R^I&(v^R))+A[5]+3593408605&4294967295,E=v+(T<<5&4294967295|T>>>27),T=I+(v^R&(E^v))+A[10]+38016083&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^v&(I^E))+A[15]+3634488961&4294967295,R=I+(T<<14&4294967295|T>>>18),T=v+(I^E&(R^I))+A[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=E+(R^I&(v^R))+A[9]+568446438&4294967295,E=v+(T<<5&4294967295|T>>>27),T=I+(v^R&(E^v))+A[14]+3275163606&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^v&(I^E))+A[3]+4107603335&4294967295,R=I+(T<<14&4294967295|T>>>18),T=v+(I^E&(R^I))+A[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=E+(R^I&(v^R))+A[13]+2850285829&4294967295,E=v+(T<<5&4294967295|T>>>27),T=I+(v^R&(E^v))+A[2]+4243563512&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^v&(I^E))+A[7]+1735328473&4294967295,R=I+(T<<14&4294967295|T>>>18),T=v+(I^E&(R^I))+A[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=E+(v^R^I)+A[5]+4294588738&4294967295,E=v+(T<<4&4294967295|T>>>28),T=I+(E^v^R)+A[8]+2272392833&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^v)+A[11]+1839030562&4294967295,R=I+(T<<16&4294967295|T>>>16),T=v+(R^I^E)+A[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=E+(v^R^I)+A[1]+2763975236&4294967295,E=v+(T<<4&4294967295|T>>>28),T=I+(E^v^R)+A[4]+1272893353&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^v)+A[7]+4139469664&4294967295,R=I+(T<<16&4294967295|T>>>16),T=v+(R^I^E)+A[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=E+(v^R^I)+A[13]+681279174&4294967295,E=v+(T<<4&4294967295|T>>>28),T=I+(E^v^R)+A[0]+3936430074&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^v)+A[3]+3572445317&4294967295,R=I+(T<<16&4294967295|T>>>16),T=v+(R^I^E)+A[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=E+(v^R^I)+A[9]+3654602809&4294967295,E=v+(T<<4&4294967295|T>>>28),T=I+(E^v^R)+A[12]+3873151461&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^v)+A[15]+530742520&4294967295,R=I+(T<<16&4294967295|T>>>16),T=v+(R^I^E)+A[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=E+(R^(v|~I))+A[0]+4096336452&4294967295,E=v+(T<<6&4294967295|T>>>26),T=I+(v^(E|~R))+A[7]+1126891415&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~v))+A[14]+2878612391&4294967295,R=I+(T<<15&4294967295|T>>>17),T=v+(I^(R|~E))+A[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=E+(R^(v|~I))+A[12]+1700485571&4294967295,E=v+(T<<6&4294967295|T>>>26),T=I+(v^(E|~R))+A[3]+2399980690&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~v))+A[10]+4293915773&4294967295,R=I+(T<<15&4294967295|T>>>17),T=v+(I^(R|~E))+A[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=E+(R^(v|~I))+A[8]+1873313359&4294967295,E=v+(T<<6&4294967295|T>>>26),T=I+(v^(E|~R))+A[15]+4264355552&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~v))+A[6]+2734768916&4294967295,R=I+(T<<15&4294967295|T>>>17),T=v+(I^(R|~E))+A[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=E+(R^(v|~I))+A[4]+4149444226&4294967295,E=v+(T<<6&4294967295|T>>>26),T=I+(v^(E|~R))+A[11]+3174756917&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~v))+A[2]+718787259&4294967295,R=I+(T<<15&4294967295|T>>>17),T=v+(I^(R|~E))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var v=E-this.blockSize,A=this.B,R=this.h,I=0;I<E;){if(R==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<E;)if(A[R++]=b.charCodeAt(I++),R==this.blockSize){s(this,A),R=0;break}}else for(;I<E;)if(A[R++]=b[I++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var v=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.u(b),b=Array(16),E=v=0;4>E;++E)for(var A=0;32>A;A+=8)b[v++]=this.g[E]>>>A&255;return b};function i(b,E){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=E(b)}function a(b,E){this.h=E;for(var v=[],A=!0,R=b.length-1;0<=R;R--){var I=b[R]|0;A&&I==E||(v[R]=I,A=!1)}this.g=v}var l={};function u(b){return-128<=b&&128>b?i(b,function(E){return new a([E|0],0>E?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(h(-b));for(var E=[],v=1,A=0;b>=v;A++)E[A]=b/v|0,v*=4294967296;return new a(E,0)}function d(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return D(d(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(E,8)),A=p,R=0;R<b.length;R+=8){var I=Math.min(8,b.length-R),T=parseInt(b.substring(R,R+I),E);8>I?(I=h(Math.pow(E,I)),A=A.j(I).add(h(T))):(A=A.j(v),A=A.add(h(T)))}return A}var p=u(0),m=u(1),y=u(16777216);t=a.prototype,t.m=function(){if(V(this))return-D(this).m();for(var b=0,E=1,v=0;v<this.g.length;v++){var A=this.i(v);b+=(0<=A?A:4294967296+A)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(V(this))return"-"+D(this).toString(b);for(var E=h(Math.pow(b,6)),v=this,A="";;){var R=re(v,E).g;v=$(v,R.j(E));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=R,P(v))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function V(b){return b.h==-1}t.l=function(b){return b=$(this,b),V(b)?-1:P(b)?0:1};function D(b){for(var E=b.g.length,v=[],A=0;A<E;A++)v[A]=~b.g[A];return new a(v,~b.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],A=0,R=0;R<=E;R++){var I=A+(this.i(R)&65535)+(b.i(R)&65535),T=(I>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);A=T>>>16,I&=65535,T&=65535,v[R]=T<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function $(b,E){return b.add(D(E))}t.j=function(b){if(P(this)||P(b))return p;if(V(this))return V(b)?D(this).j(D(b)):D(D(this).j(b));if(V(b))return D(this.j(D(b)));if(0>this.l(y)&&0>b.l(y))return h(this.m()*b.m());for(var E=this.g.length+b.g.length,v=[],A=0;A<2*E;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<b.g.length;R++){var I=this.i(A)>>>16,T=this.i(A)&65535,Ce=b.i(R)>>>16,ot=b.i(R)&65535;v[2*A+2*R]+=T*ot,j(v,2*A+2*R),v[2*A+2*R+1]+=I*ot,j(v,2*A+2*R+1),v[2*A+2*R+1]+=T*Ce,j(v,2*A+2*R+1),v[2*A+2*R+2]+=I*Ce,j(v,2*A+2*R+2)}for(A=0;A<E;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=E;A<2*E;A++)v[A]=0;return new a(v,0)};function j(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function U(b,E){this.g=b,this.h=E}function re(b,E){if(P(E))throw Error("division by zero");if(P(b))return new U(p,p);if(V(b))return E=re(D(b),E),new U(D(E.g),D(E.h));if(V(E))return E=re(b,D(E)),new U(D(E.g),E.h);if(30<b.g.length){if(V(b)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=E;0>=A.l(b);)v=fe(v),A=fe(A);var R=Y(v,1),I=Y(A,1);for(A=Y(A,2),v=Y(v,2);!P(A);){var T=I.add(A);0>=T.l(b)&&(R=R.add(v),I=T),A=Y(A,1),v=Y(v,1)}return E=$(b,R.j(E)),new U(R,E)}for(R=p;0<=b.l(E);){for(v=Math.max(1,Math.floor(b.m()/E.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=h(v),T=I.j(E);V(T)||0<T.l(b);)v-=A,I=h(v),T=I.j(E);P(I)&&(I=m),R=R.add(I),b=$(b,T)}return new U(R,b)}t.A=function(b){return re(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],A=0;A<E;A++)v[A]=this.i(A)&b.i(A);return new a(v,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],A=0;A<E;A++)v[A]=this.i(A)|b.i(A);return new a(v,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],A=0;A<E;A++)v[A]=this.i(A)^b.i(A);return new a(v,this.h^b.h)};function fe(b){for(var E=b.g.length+1,v=[],A=0;A<E;A++)v[A]=b.i(A)<<1|b.i(A-1)>>>31;return new a(v,b.h)}function Y(b,E){var v=E>>5;E%=32;for(var A=b.g.length-v,R=[],I=0;I<A;I++)R[I]=0<E?b.i(I+v)>>>E|b.i(I+v+1)<<32-E:b.i(I+v);return new a(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,dr=a}).apply(typeof nf<"u"?nf:typeof self<"u"?self:typeof window<"u"?window:{});var qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wp,Qp,Ss,Yp,so,yl,Xp,Jp,Zp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,f){return o==Array.prototype||o==Object.prototype||(o[c]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qi=="object"&&qi];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in f))break e;f=f[S]}o=o[o.length-1],g=f[o],c=c(g),c!=g&&c!=null&&e(f,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var f=0,g=!1,S={next:function(){if(!g&&f<o.length){var x=f++;return{value:c(x,o[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,f){return o.call.apply(o.bind,arguments)}function p(o,c,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function m(o,c,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function P(o,c){function f(){}f.prototype=c.prototype,o.aa=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,S,x){for(var H=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)H[xe-2]=arguments[xe];return c.prototype[S].apply(g,H)}}function V(o){const c=o.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=o[g];return f}return[]}function D(o,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const S=o.length||0,x=g.length||0;o.length=S+x;for(let H=0;H<x;H++)o[S+H]=g[H]}else o.push(g)}}class ${constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function re(o){return re[" "](o),o}re[" "]=function(){};var fe=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Y(o,c,f){for(const g in o)c.call(f,o[g],g,o)}function b(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function E(o){const c={};for(const f in o)c[f]=o[f];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,c){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)o[f]=g[f];for(let x=0;x<v.length;x++)f=v[x],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function R(o){var c=1;o=o.split(":");const f=[];for(;0<c&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function I(o){l.setTimeout(()=>{throw o},0)}function T(){var o=xt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ce{constructor(){this.h=this.g=null}add(c,f){const g=ot.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var ot=new $(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let me,de=!1,xt=new Ce,Kt=()=>{const o=l.Promise.resolve(void 0);me=()=>{o.then(Mt)}};var Mt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){I(f)}var c=ot;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}de=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return o}();function Zt(o,c){if(Fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(fe){e:{try{re(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:At[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zt.aa.h.call(this)}}P(Zt,Fe);var At={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function W(o,c,f,g,S){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=S,this.key=++X,this.da=this.fa=!1}function J(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ge(o){this.src=o,this.g={},this.h=0}ge.prototype.add=function(o,c,f,g,S){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var H=_(o,c,g,S);return-1<H?(c=o[H],f||(c.fa=!1)):(c=new W(c,this.src,x,!!g,S),c.fa=f,o.push(c)),c};function Ve(o,c){var f=c.type;if(f in o.g){var g=o.g[f],S=Array.prototype.indexOf.call(g,c,void 0),x;(x=0<=S)&&Array.prototype.splice.call(g,S,1),x&&(J(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function _(o,c,f,g){for(var S=0;S<o.length;++S){var x=o[S];if(!x.da&&x.listener==c&&x.capture==!!f&&x.ha==g)return S}return-1}var w="closure_lm_"+(1e6*Math.random()|0),C={};function k(o,c,f,g,S){if(Array.isArray(c)){for(var x=0;x<c.length;x++)k(o,c[x],f,g,S);return null}return f=te(f),o&&o[O]?o.K(c,f,h(g)?!!g.capture:!!g,S):N(o,c,f,!1,g,S)}function N(o,c,f,g,S,x){if(!c)throw Error("Invalid event type");var H=h(S)?!!S.capture:!!S,xe=Q(o);if(xe||(o[w]=xe=new ge(o)),f=xe.add(c,f,g,H,x),f.proxy)return f;if(g=B(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Tn||(S=H),S===void 0&&(S=!1),o.addEventListener(c.toString(),g,S);else if(o.attachEvent)o.attachEvent(z(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function B(){function o(f){return c.call(o.src,o.listener,f)}const c=L;return o}function K(o,c,f,g,S){if(Array.isArray(c))for(var x=0;x<c.length;x++)K(o,c[x],f,g,S);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[O]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],f=_(x,f,g,S),-1<f&&(J(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=Q(o))&&(c=o.g[c.toString()],o=-1,c&&(o=_(c,f,g,S)),(f=-1<o?c[o]:null)&&q(f))}function q(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[O])Ve(c.i,o);else{var f=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(f,g,o.capture):c.detachEvent?c.detachEvent(z(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=Q(c))?(Ve(f,o),f.h==0&&(f.src=null,c[w]=null)):J(o)}}}function z(o){return o in C?C[o]:C[o]="on"+o}function L(o,c){if(o.da)o=!0;else{c=new Zt(c,this);var f=o.listener,g=o.ha||o.src;o.fa&&q(o),o=f.call(g,c)}return o}function Q(o){return o=o[w],o instanceof ge?o:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[ne]||(o[ne]=function(c){return o.handleEvent(c)}),o[ne])}function ee(){Me.call(this),this.i=new ge(this),this.M=this,this.F=null}P(ee,Me),ee.prototype[O]=!0,ee.prototype.removeEventListener=function(o,c,f,g){K(this,o,c,f,g)};function se(o,c){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new Fe(c,o);else if(c instanceof Fe)c.target=c.target||o;else{var S=c;c=new Fe(g,o),A(c,S)}if(S=!0,f)for(var x=f.length-1;0<=x;x--){var H=c.g=f[x];S=Pe(H,g,!0,c)&&S}if(H=c.g=o,S=Pe(H,g,!0,c)&&S,S=Pe(H,g,!1,c)&&S,f)for(x=0;x<f.length;x++)H=c.g=f[x],S=Pe(H,g,!1,c)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var f=o.g[c],g=0;g<f.length;g++)J(f[g]);delete o.g[c],o.h--}}this.F=null},ee.prototype.K=function(o,c,f,g){return this.i.add(String(o),c,!1,f,g)},ee.prototype.L=function(o,c,f,g){return this.i.add(String(o),c,!0,f,g)};function Pe(o,c,f,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,x=0;x<c.length;++x){var H=c[x];if(H&&!H.da&&H.capture==f){var xe=H.listener,at=H.ha||H.src;H.fa&&Ve(o.i,H),S=xe.call(at,g)!==!1&&S}}return S&&!g.defaultPrevented}function Te(o,c,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Ue(o){o.g=Te(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Dt extends Me{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(o){Me.call(this),this.h=o,this.g={}}P(Ft,Me);var us=[];function wn(o){Y(o.g,function(c,f){this.g.hasOwnProperty(f)&&q(c)},o),o.g={}}Ft.prototype.N=function(){Ft.aa.N.call(this),wn(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ar=l.JSON.stringify,Et=l.JSON.parse,Lt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Rr(){}Rr.prototype.h=null;function Uu(o){return o.h||(o.h=o.i())}function ju(){}var cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xo(){Fe.call(this,"d")}P(Xo,Fe);function Jo(){Fe.call(this,"c")}P(Jo,Fe);var Xn={},qu=null;function yi(){return qu=qu||new ee}Xn.La="serverreachability";function Hu(o){Fe.call(this,Xn.La,o)}P(Hu,Fe);function hs(o){const c=yi();se(c,new Hu(c))}Xn.STAT_EVENT="statevent";function zu(o,c){Fe.call(this,Xn.STAT_EVENT,o),this.stat=c}P(zu,Fe);function Tt(o){const c=yi();se(c,new zu(c,o))}Xn.Ma="timingevent";function Ku(o,c){Fe.call(this,Xn.Ma,o),this.size=c}P(Ku,Fe);function fs(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function rg(o,c,f,g,S,x){o.info(function(){if(o.g)if(x)for(var H="",xe=x.split("&"),at=0;at<xe.length;at++){var Ae=xe[at].split("=");if(1<Ae.length){var dt=Ae[0];Ae=Ae[1];var pt=dt.split("_");H=2<=pt.length&&pt[1]=="type"?H+(dt+"="+Ae+"&"):H+(dt+"=redacted&")}}else H=null;else H=x;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+c+`
`+f+`
`+H})}function sg(o,c,f,g,S,x,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+c+`
`+f+`
`+x+" "+H})}function br(o,c,f,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+og(o,f)+(g?" "+g:"")})}function ig(o,c){o.info(function(){return"TIMEOUT: "+c})}ds.prototype.info=function(){};function og(o,c){if(!o.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var x=S[0];if(x!="noop"&&x!="stop"&&x!="close")for(var H=1;H<S.length;H++)S[H]=""}}}}return Ar(f)}catch{return c}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zo;function Ei(){}P(Ei,Rr),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},Zo=new Ei;function In(o,c,f,g){this.j=o,this.i=c,this.l=f,this.R=g||1,this.U=new Ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var Qu={},ea={};function ta(o,c,f){o.L=1,o.v=Ai(ln(c)),o.m=f,o.P=!0,Yu(o,null)}function Yu(o,c){o.F=Date.now(),Ti(o),o.A=ln(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),cc(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Wu,o.g=Sc(o.j,f?c:null,!o.m),0<o.O&&(o.M=new Dt(m(o.Y,o,o.g),o.O)),c=o.U,f=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(us[0]=S.toString()),S=us);for(var x=0;x<S.length;x++){var H=k(f,S[x],g||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=o.H?E(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),hs(),rg(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const c=this.M;c&&un(o)==3?c.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const pt=un(this.g);var c=this.g.Ba();const Cr=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||pt!=4||c==7||(c==8||0>=Cr?hs(3):hs(2)),na(this);var f=this.g.Z();this.X=f;t:if(Xu(this)){var g=_c(this.g);o="";var S=g.length,x=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ps(this);var H="";break t}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(g[c],{stream:!(x&&c==S-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,sg(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,at=this.g;if((xe=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(xe)){var Ae=xe;break t}}Ae=null}if(f=Ae)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,f);else{this.o=!1,this.s=3,Tt(12),Jn(this),ps(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<H.length;)if(Gt=ag(this,H),Gt==ea){pt==4&&(this.s=4,Tt(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Qu){this.s=4,Tt(15),br(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,Gt,null),ra(this,Gt);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||H.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,H,"[Invalid Chunked Response]"),Jn(this),ps(this);else if(0<H.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),ua(dt),dt.M=!0,Tt(11))}}else br(this.i,this.l,H,null),ra(this,H);pt==4&&Jn(this),this.o&&!this.J&&(pt==4?Ac(this.j,this):(this.o=!1,Ti(this)))}else Ag(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Jn(this),ps(this)}}}catch{}finally{}};function Xu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ag(o,c){var f=o.C,g=c.indexOf(`
`,f);return g==-1?ea:(f=Number(c.substring(f,g)),isNaN(f)?Qu:(g+=1,g+f>c.length?ea:(c=c.slice(g,g+f),o.C=g+f,c)))}In.prototype.cancel=function(){this.J=!0,Jn(this)};function Ti(o){o.S=Date.now()+o.I,Ju(o,o.I)}function Ju(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fs(m(o.ba,o),c)}function na(o){o.B&&(l.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ig(this.i,this.A),this.L!=2&&(hs(),Tt(17)),Jn(this),this.s=2,ps(this)):Ju(this,this.S-o)};function ps(o){o.j.G==0||o.J||Ac(o.j,o)}function Jn(o){na(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,wn(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ra(o,c){try{var f=o.j;if(f.G!=0&&(f.g==o||sa(f.h,o))){if(!o.K&&sa(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ci(f),Pi(f);else break e;la(f),Tt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=fs(m(f.Za,f),6e3));if(1>=tc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else er(f,11)}else if((o.K||f.g==o)&&Ci(f),!j(c))for(S=f.Da.g.parse(c),c=0;c<S.length;c++){let Ae=S[c];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const dt=Ae[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const pt=Ae[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const Cr=Ae[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(g=1.5*Cr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gt=o.g;if(Gt){const xi=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var x=g.h;x.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ia(x,x.h),x.h=null))}if(g.D){const ca=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;ca&&(g.ya=ca,De(g.I,g.D,ca))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var H=o;if(g.qa=Pc(g,g.J?g.ia:null,g.W),H.K){nc(g.h,H);var xe=H,at=g.L;at&&(xe.I=at),xe.B&&(na(xe),Ti(xe)),g.g=H}else wc(g);0<f.i.length&&Si(f)}else Ae[0]!="stop"&&Ae[0]!="close"||er(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?er(f,7):aa(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}hs(4)}catch{}}var lg=class{constructor(o,c){this.g=o,this.map=c}};function Zu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ec(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function tc(o){return o.h?1:o.g?o.g.size:0}function sa(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ia(o,c){o.g?o.g.add(c):o.h=c}function nc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Zu.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function rc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.D);return c}return V(o.i)}function ug(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],f=o.length,g=0;g<f;g++)c.push(o[g]);return c}c=[],f=0;for(g in o)c[f++]=o[g];return c}function cg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var f=0;f<o;f++)c.push(f);return c}c=[],f=0;for(const g in o)c[f++]=g;return c}}}function sc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var f=cg(o),g=ug(o),S=g.length,x=0;x<S;x++)c.call(void 0,g[x],f&&f[x],o)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hg(o,c){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),S=null;if(0<=g){var x=o[f].substring(0,g);S=o[f].substring(g+1)}else x=o[f];c(x,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Zn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Zn){this.h=o.h,wi(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var c=o.i,f=new _s;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),oc(this,f),this.m=o.m}else o&&(c=String(o).match(ic))?(this.h=!1,wi(this,c[1]||"",!0),this.o=ms(c[2]||""),this.g=ms(c[3]||"",!0),Ii(this,c[4]),this.l=ms(c[5]||"",!0),oc(this,c[6]||"",!0),this.m=ms(c[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}Zn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(gs(c,ac,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(gs(c,ac,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(gs(f,f.charAt(0)=="/"?pg:dg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",gs(f,gg)),o.join("")};function ln(o){return new Zn(o)}function wi(o,c,f){o.j=f?ms(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function oc(o,c,f){c instanceof _s?(o.i=c,_g(o.i,o.h)):(f||(c=gs(c,mg)),o.i=new _s(c,o.h))}function De(o,c,f){o.i.set(c,f)}function Ai(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ms(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,fg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function fg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ac=/[#\/\?@]/g,dg=/[#\?:]/g,pg=/[#\?]/g,mg=/[#\?@]/g,gg=/#/g;function _s(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&hg(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=_s.prototype,t.add=function(o,c){An(this),this.i=null,o=Pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function lc(o,c){An(o),c=Pr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function uc(o,c){return An(o),c=Pr(o,c),o.g.has(c)}t.forEach=function(o,c){An(this),this.g.forEach(function(f,g){f.forEach(function(S){o.call(c,S,g,this)},this)},this)},t.na=function(){An(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const S=o[g];for(let x=0;x<S.length;x++)f.push(c[g])}return f},t.V=function(o){An(this);let c=[];if(typeof o=="string")uc(this,o)&&(c=c.concat(this.g.get(Pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)c=c.concat(o[f])}return c},t.set=function(o,c){return An(this),this.i=null,o=Pr(this,o),uc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function cc(o,c,f){lc(o,c),0<f.length&&(o.i=null,o.g.set(Pr(o,c),V(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const x=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var S=x;H[g]!==""&&(S+="="+encodeURIComponent(String(H[g]))),o.push(S)}}return this.i=o.join("&")};function Pr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function _g(o,c){c&&!o.j&&(An(o),o.i=null,o.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(lc(this,g),cc(this,S,f))},o)),o.j=c}function yg(o,c){const f=new ds;if(l.Image){const g=new Image;g.onload=y(Rn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=y(Rn,f,"TestLoadImage: error",!1,c,g),g.onabort=y(Rn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=y(Rn,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function vg(o,c){const f=new ds,g=new AbortController,S=setTimeout(()=>{g.abort(),Rn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(x=>{clearTimeout(S),x.ok?Rn(f,"TestPingServer: ok",!0,c):Rn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),Rn(f,"TestPingServer: error",!1,c)})}function Rn(o,c,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Eg(){this.g=new Lt}function Tg(o,c,f){const g=f||"";try{sc(o,function(S,x){let H=S;h(S)&&(H=Ar(S)),c.push(g+x+"="+encodeURIComponent(H))})}catch(S){throw c.push(g+"type="+encodeURIComponent("_badmap")),S}}function ys(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ys,Rr),ys.prototype.g=function(){return new Ri(this.l,this.j)},ys.prototype.i=function(o){return function(){return o}}({});function Ri(o,c){ee.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ri,ee),t=Ri.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Es(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function hc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?vs(this):Es(this),this.readyState==3&&hc(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,vs(this))},t.Qa=function(o){this.g&&(this.response=o,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Es(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fc(o){let c="";return Y(o,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function oa(o,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=fc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):De(o,c,f))}function $e(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,ee);var wg=/^https?$/i,Ig=["POST","PUT"];t=$e.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zo.g(),this.v=this.o?Uu(this.o):Uu(Zo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){dc(this,x);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ig,c,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,H]of f)this.g.setRequestHeader(x,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gc(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){dc(this,x)}};function dc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,pc(o),bi(o)}function pc(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),bi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mc(this):this.bb())},t.bb=function(){mc(this)};function mc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||un(o)!=4||o.Z()!=2)){if(o.u&&un(o)==4)Te(o.Ea,0,o);else if(se(o,"readystatechange"),un(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=H===0){var S=String(o.D).match(ic)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!wg.test(S?S.toLowerCase():"")}f=g}if(f)se(o,"complete"),se(o,"success");else{o.m=6;try{var x=2<un(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",pc(o)}}finally{bi(o)}}}}function bi(o,c){if(o.g){gc(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||se(o,"ready");try{f.onreadystatechange=g}catch{}}}function gc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function un(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Et(c)}};function _c(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ag(o){const c={};o=(o.g&&2<=un(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var f=R(o[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=c[S]||[];c[S]=x,x.push(f)}b(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function yc(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,o),this.cb=Ts("retryDelaySeedMs",1e4,o),this.Wa=Ts("forwardChannelMaxRetries",2,o),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Zu(o&&o.concurrentRequestLimit),this.Da=new Eg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yc.prototype,t.la=8,t.G=1,t.connect=function(o,c,f,g){Tt(0),this.W=o,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Pc(this,null,this.W),Si(this)};function aa(o){if(vc(o),o.G==3){var c=o.U++,f=ln(o.I);if(De(f,"SID",o.K),De(f,"RID",c),De(f,"TYPE","terminate"),ws(o,f),c=new In(o,o.j,c),c.L=2,c.v=Ai(ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Sc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ti(c)}bc(o)}function Pi(o){o.g&&(ua(o),o.g.cancel(),o.g=null)}function vc(o){Pi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Si(o){if(!ec(o.h)&&!o.s){o.s=!0;var c=o.Ga;me||Kt(),de||(me(),de=!0),xt.add(c,o),o.B=0}}function Rg(o,c){return tc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fs(m(o.Ga,o,c),Rc(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new In(this,this.j,o);let x=this.o;if(this.S&&(x?(x=E(x),A(x,this.S)):x=this.S),this.m!==null||this.O||(S.H=x,x=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Tc(this,S,c),f=ln(this.I),De(f,"RID",o),De(f,"CVER",22),this.D&&De(f,"X-HTTP-Session-Id",this.D),ws(this,f),x&&(this.O?c="headers="+encodeURIComponent(String(fc(x)))+"&"+c:this.m&&oa(f,this.m,x)),ia(this.h,S),this.Ua&&De(f,"TYPE","init"),this.P?(De(f,"$req",c),De(f,"SID","null"),S.T=!0,ta(S,f,null)):ta(S,f,c),this.G=2}}else this.G==3&&(o?Ec(this,o):this.i.length==0||ec(this.h)||Ec(this))};function Ec(o,c){var f;c?f=c.l:f=o.U++;const g=ln(o.I);De(g,"SID",o.K),De(g,"RID",f),De(g,"AID",o.T),ws(o,g),o.m&&o.o&&oa(g,o.m,o.o),f=new In(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Tc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ia(o.h,f),ta(f,g,c)}function ws(o,c){o.H&&Y(o.H,function(f,g){De(c,g,f)}),o.l&&sc({},function(f,g){De(c,g,f)})}function Tc(o,c,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let x=-1;for(;;){const H=["count="+f];x==-1?0<f?(x=S[0].g,H.push("ofs="+x)):x=0:H.push("ofs="+x);let xe=!0;for(let at=0;at<f;at++){let Ae=S[at].g;const dt=S[at].map;if(Ae-=x,0>Ae)x=Math.max(0,S[at].g-100),xe=!1;else try{Tg(dt,H,"req"+Ae+"_")}catch{g&&g(dt)}}if(xe){g=H.join("&");break e}}}return o=o.i.splice(0,f),c.D=o,g}function wc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;me||Kt(),de||(me(),de=!0),xt.add(c,o),o.v=0}}function la(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fs(m(o.Fa,o),Rc(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Ic(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Pi(this),Ic(this))};function ua(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ic(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ln(o.qa);De(c,"RID","rpc"),De(c,"SID",o.K),De(c,"AID",o.T),De(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(c,"TO",o.ja),De(c,"TYPE","xmlhttp"),ws(o,c),o.m&&o.o&&oa(c,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ai(ln(c)),f.m=null,f.P=!0,Yu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Pi(this),la(this),Tt(19))};function Ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ac(o,c){var f=null;if(o.g==c){Ci(o),ua(o),o.g=null;var g=2}else if(sa(o.h,c))f=c.D,nc(o.h,c),g=1;else return;if(o.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;g=yi(),se(g,new Ku(g,f)),Si(o)}else wc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(g==1&&Rg(o,c)||g==2&&la(o)))switch(f&&0<f.length&&(c=o.h,c.i=c.i.concat(f)),S){case 1:er(o,5);break;case 4:er(o,10);break;case 3:er(o,6);break;default:er(o,2)}}}function Rc(o,c){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*c}function er(o,c){if(o.j.info("Error code "+c),c==2){var f=m(o.fb,o),g=o.Xa;const S=!g;g=new Zn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wi(g,"https"),Ai(g),S?yg(g.toString(),f):vg(g.toString(),f)}else Tt(2);o.G=0,o.l&&o.l.sa(c),bc(o),vc(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function bc(o){if(o.G=0,o.ka=[],o.l){const c=rc(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Pc(o,c,f){var g=f instanceof Zn?ln(f):new Zn(f);if(g.g!="")c&&(g.g=c+"."+g.g),Ii(g,g.s);else{var S=l.location;g=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var x=new Zn(null);g&&wi(x,g),c&&(x.g=c),S&&Ii(x,S),f&&(x.l=f),g=x}return f=o.D,c=o.ya,f&&c&&De(g,f,c),De(g,"VER",o.la),ws(o,g),g}function Sc(o,c,f){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new $e(new ys({eb:f})):new $e(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}t=Cc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vi(){}Vi.prototype.g=function(o,c){return new Nt(o,c)};function Nt(o,c){ee.call(this),this.g=new yc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Sr(this)}P(Nt,ee),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){aa(this.g)},Nt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ar(o),o=f);c.i.push(new lg(c.Ya++,o)),c.G==3&&Si(c)},Nt.prototype.N=function(){this.g.l=null,delete this.j,aa(this.g),delete this.g,Nt.aa.N.call(this)};function Vc(o){Xo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const f in c){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Vc,Xo);function xc(){Jo.call(this),this.status=1}P(xc,Jo);function Sr(o){this.g=o}P(Sr,Cc),Sr.prototype.ua=function(){se(this.g,"a")},Sr.prototype.ta=function(o){se(this.g,new Vc(o))},Sr.prototype.sa=function(o){se(this.g,new xc)},Sr.prototype.ra=function(){se(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Zp=function(){return new Vi},Jp=function(){return yi()},Xp=Xn,yl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,so=vi,Gu.COMPLETE="complete",Yp=Gu,ju.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ss=ju,Qp=ys,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Wp=$e}).apply(typeof qi<"u"?qi:typeof self<"u"?self:typeof window<"u"?window:{});const rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new au("@firebase/firestore");function Rs(){return vr.logLevel}function Z(t,...e){if(vr.logLevel<=pe.DEBUG){const n=e.map(pu);vr.debug(`Firestore (${os}): ${t}`,...n)}}function vn(t,...e){if(vr.logLevel<=pe.ERROR){const n=e.map(pu);vr.error(`Firestore (${os}): ${t}`,...n)}}function si(t,...e){if(vr.logLevel<=pe.WARN){const n=e.map(pu);vr.warn(`Firestore (${os}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Ye(t,e){t||ce()}function Ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class Vw{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string"),new Sw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new Pt(e)}}class xw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Dw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ow{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string"),this.R=n.token,new Nw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=kw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new St(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new St(0,0))}static max(){return new le(new St(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends ii{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const Mw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends ii{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return Mw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new oe(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new oe(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new oe(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Be.fromString(e))}static fromName(e){return new ie(Be.fromString(e).popFirst(5))}static empty(){return new ie(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Be(e.slice()))}}function Fw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new Hn(s,ie.empty(),e)}function Lw(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(le.min(),ie.empty(),-1)}static max(){return new Hn(le.max(),ie.empty(),-1)}}function $w(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==Bw)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function jw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gu.oe=-1;function Lo(t){return t==null}function vl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $o(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new of(this.data.getIterator())}getIteratorFrom(e){return new of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new On([])}unionWith(e){let n=new ht(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tm("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Hw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Ye(!!t),typeof t=="string"){let e=0;const n=Hw.exec(t);if(Ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yu(t){const e=t.mapValue.fields.__previous_value__;return _u(e)?yu(e):e}function oi(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new St(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,s,i,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:Gw(t)?9007199254740991:Kw(t)?10:11:ce()}function on(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=zn(s.timestampValue),l=zn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=je(s.doubleValue),l=je(i.doubleValue);return a===l?vl(a)===vl(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(sf(a)!==sf(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!on(a[u],l[u])))return!1;return!0}(t,e);default:return ce()}}function li(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=je(i.integerValue||i.doubleValue),u=je(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(oi(t),oi(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Er(i),u=Er(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=Re(l[h],u[h]);if(d!==0)return d}return Re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Re(je(i.latitude),je(a.latitude));return l!==0?l:Re(je(i.longitude),je(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,h,d;const p=i.fields||{},m=a.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,V=Re(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:lf(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===zi.mapValue&&a===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Re(u[p],d[p]);if(m!==0)return m;const y=es(l[u[p]],h[d[p]]);if(y!==0)return y}return Re(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ce()}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=zn(t),r=zn(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function lf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=es(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function ts(t){return El(t)}function El(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=El(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${El(n.fields[a])}`;return s+"}"}(t.mapValue):ce()}function Tl(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function uf(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function Kw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $o(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=It.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Us(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){$o(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rn(Us(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,le.min(),le.min(),le.min(),rn.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,le.min(),le.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,le.min(),le.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.position=e,this.inclusive=n}}function hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(a.referenceValue),n.key):r=es(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ff(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ww(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{}class Ze extends nm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Yw(e,n,r):n==="array-contains"?new Zw(e,r):n==="in"?new eI(e,r):n==="not-in"?new tI(e,r):n==="array-contains-any"?new nI(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Xw(e,r):new Jw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends nm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return rm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rm(t){return t.op==="and"}function sm(t){return Qw(t)&&rm(t)}function Qw(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function wl(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(sm(t))return t.filters.map(e=>wl(e)).join(",");{const e=t.filters.map(n=>wl(n)).join(",");return`${t.op}(${e})`}}function im(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&im(a,s.filters[l]),!0):!1}(t,e):void ce()}function om(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(om).join(" ,")+"}"}(t):"Filter"}class Yw extends Ze{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xw extends Ze{constructor(e,n){super(e,"in",n),this.keys=am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jw extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Zw extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&li(n.arrayValue,this.value)}}class eI extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class tI extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!li(this.value.arrayValue,n)}}class nI extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function df(t,e=null,n=[],r=[],s=null,i=null,a=null){return new rI(t,e,n,r,s,i,a)}function Eu(t){const e=Ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ue=n}return e.ue}function Tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ww(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!im(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ff(t.startAt,e.startAt)&&ff(t.endAt,e.endAt)}function Il(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sI(t,e,n,r,s,i,a,l){return new Bo(t,e,n,r,s,i,a,l)}function wu(t){return new Bo(t)}function pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iI(t){return t.collectionGroup!==null}function js(t){const e=Ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ht(It.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,r))}),n.has(It.keyField().canonicalString())||e.ce.push(new Eo(It.keyField(),r))}return e.ce}function sn(t){const e=Ee(t);return e.le||(e.le=oI(e,js(t))),e.le}function oI(t,e){if(t.limitType==="F")return df(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const n=t.endAt?new vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vo(t.startAt.position,t.startAt.inclusive):null;return df(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Al(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uo(t,e){return Tu(sn(t),sn(e))&&t.limitType===e.limitType}function lm(t){return`${Eu(sn(t))}|lt:${t.limitType}`}function Or(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>om(s)).join(", ")}]`),Lo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ts(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ts(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function jo(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=hf(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,js(r),s)||r.endAt&&!function(a,l,u){const h=hf(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,js(r),s))}(t,e)}function aI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function um(t){return(e,n)=>{let r=!1;for(const s of js(t)){const i=lI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lI(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?es(u,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$o(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new ze(ie.comparator);function Kn(){return uI}const cm=new ze(ie.comparator);function Cs(...t){let e=cm;for(const n of t)e=e.insert(n.key,n);return e}function cI(t){let e=cm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return qs()}function hm(){return qs()}function qs(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const hI=new ht(ie.comparator);function Ie(...t){let e=hI;for(const n of t)e=e.add(n);return e}const fI=new ht(Re);function dI(){return fI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function mI(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this._=void 0}}function gI(t,e,n){return t instanceof Rl?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_u(i)&&(i=yu(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof To?fm(t,e):t instanceof wo?dm(t,e):function(s,i){const a=yI(s,i),l=mf(a)+mf(s.Pe);return Tl(a)&&Tl(s.Pe)?mI(l):pI(s.serializer,l)}(t,e)}function _I(t,e,n){return t instanceof To?fm(t,e):t instanceof wo?dm(t,e):n}function yI(t,e){return t instanceof bl?function(r){return Tl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rl extends qo{}class To extends qo{constructor(e){super(),this.elements=e}}function fm(t,e){const n=pm(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class wo extends qo{constructor(e){super(),this.elements=e}}function dm(t,e){let n=pm(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class bl extends qo{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function mf(t){return je(t.integerValue||t.doubleValue)}function pm(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof To&&s instanceof To||r instanceof wo&&s instanceof wo?Zr(r.elements,s.elements,on):r instanceof bl&&s instanceof bl?on(r.Pe,s.Pe):r instanceof Rl&&s instanceof Rl}(t.transform,e.transform)}class pr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pr}static exists(e){return new pr(void 0,e)}static updateTime(e){return new pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Iu{}function mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new TI(t.key,pr.none()):new Au(t.key,t.data,pr.none());{const n=t.data,r=rn.empty();let s=new ht(It.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ho(t.key,r,new On(s.toArray()),pr.none())}}function EI(t,e,n){t instanceof Au?function(s,i,a){const l=s.value.clone(),u=_f(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ho?function(s,i,a){if(!io(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=_f(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(gm(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Au?function(i,a,l,u){if(!io(i.precondition,a))return l;const h=i.value.clone(),d=yf(i.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ho?function(i,a,l,u){if(!io(i.precondition,a))return l;const h=yf(i.fieldTransforms,u,a),d=a.data;return d.setAll(gm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return io(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,a)=>vI(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Au extends Iu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ho extends Iu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _f(t,e,n){const r=new Map;Ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,_I(a,l,n[s]))}return r}function yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,gI(i,a,e))}return r}class TI extends Iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=mm(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(n,r)=>gf(n,r))&&Zr(this.baseMutations,e.baseMutations,(n,r)=>gf(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ye;function _m(t){if(t===void 0)return vn("GRPC error has no .code"),G.UNKNOWN;switch(t){case Ke.OK:return G.OK;case Ke.CANCELLED:return G.CANCELLED;case Ke.UNKNOWN:return G.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return G.INTERNAL;case Ke.UNAVAILABLE:return G.UNAVAILABLE;case Ke.UNAUTHENTICATED:return G.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case Ke.NOT_FOUND:return G.NOT_FOUND;case Ke.ALREADY_EXISTS:return G.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return G.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case Ke.ABORTED:return G.ABORTED;case Ke.OUT_OF_RANGE:return G.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return G.UNIMPLEMENTED;case Ke.DATA_LOSS:return G.DATA_LOSS;default:return ce()}}(ye=Ke||(Ke={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new dr([4294967295,4294967295],0);function vf(t){const e=RI().encode(t),n=new Gp;return n.update(e),new Uint8Array(n.digest())}function Ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class Ru{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(bI)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ru(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=vf(e),[r,s]=Ef(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,mi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zo(le.min(),s,new ze(Re),Kn(),Ie())}}class mi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mi(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ym{constructor(e,n){this.targetId=e,this.me=n}}class vm{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Tf{constructor(){this.fe=0,this.ge=If(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new mi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=If()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=wf(),this.Qe=new ze(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Il(i))if(r===0){const a=new ie(i.path);this.Ue(n,a,_t.newNoDocument(a,le.min()))}else Ye(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Er(r).toUint8Array()}catch(u){if(u instanceof tm)return si("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ru(a,s,i)}catch(u){return si(u instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Il(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,_t.newNoDocument(u,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=Ie();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new zo(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=wf(),this.Qe=new ze(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Tf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Tf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wf(){return new ze(ie.comparator)}function If(){return new ze(ie.comparator)}const SI={asc:"ASCENDING",desc:"DESCENDING"},CI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VI={and:"AND",or:"OR"};class xI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pl(t,e){return t.useProto3Json||Lo(e)?e:{value:e}}function DI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Hr(t){return Ye(!!t),le.fromTimestamp(function(n){const r=zn(n);return new St(r.seconds,r.nanos)}(t))}function OI(t,e){return Sl(t,e).canonicalString()}function Sl(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Em(t){const e=Be.fromString(t);return Ye(Rm(e)),e}function xa(t,e){const n=Em(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(wm(n))}function Tm(t,e){return OI(t.databaseId,e)}function kI(t){const e=Em(t);return e.length===4?Be.emptyPath():wm(e)}function Af(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wm(t){return Ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function MI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ye(d===void 0||typeof d=="string"),ft.fromBase64String(d||"")):(Ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ft.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?G.UNKNOWN:_m(h.code);return new oe(d,h.message||"")}(a);n=new vm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xa(t,r.document.name),i=Hr(r.document.updateTime),a=r.document.createTime?Hr(r.document.createTime):le.min(),l=new rn({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new oo(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xa(t,r.document),i=r.readTime?Hr(r.readTime):le.min(),a=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new oo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xa(t,r.document),i=r.removedTargetIds||[];n=new oo([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new AI(s,i),l=r.targetId;n=new ym(l,a)}}return n}function FI(t,e){return{documents:[Tm(t,e.path)]}}function LI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tm(t,s);const i=function(h){if(h.length!==0)return Am(an.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:kr(m.field),direction:UI(m.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Pl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function $I(t){let e=kI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ye(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Im(p);return m instanceof an&&sm(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(P){return new Eo(Mr(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Lo(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,y=p.values||[];return new vo(y,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,y=p.values||[];return new vo(y,m)}(n.endAt)),sI(e,s,a,i,l,"F",u,h)}function BI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Im(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mr(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mr(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mr(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mr(n.unaryFilter.field);return Ze.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>Im(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function UI(t){return SI[t]}function jI(t){return CI[t]}function qI(t){return VI[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Mr(t){return It.fromServerFormat(t.fieldPath)}function Am(t){return t instanceof Ze?function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(uf(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(uf(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:jI(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>Am(s));return r.length===1?r[0]:{compositeFilter:{op:qI(n.op),filters:r}}}(t):ce()}function Rm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=le.min(),a=le.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.ct=e}}function zI(t){const e=$I({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Al(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.un=new GI}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Hn.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class GI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ns(0)}static kn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hs(r.mutation,s,On.empty(),St.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Cs();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Kn();const a=qs(),l=function(){return qs()}();return n.forEach((u,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Ho)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Hs(d.mutation,h,d.mutation.getFieldMask(),St.now())):a.set(h.key,On.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new QI(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qs();let s=new ze((a,l)=>a-l),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||On.empty();d=l.applyToLocalView(h,d),r.set(u,d);const p=(s.get(l.batchId)||Ie()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,p=hm();d.forEach(m=>{if(!i.has(m)){const y=mm(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ie.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(cr());let l=-1,u=i;return a.next(h=>F.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,Ie())).next(d=>({batchId:l,changes:cI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Cs();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const h=function(p,m){return new Bo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,_t.newInvalidDocument(d)))});let l=Cs();return a.forEach((u,h)=>{const d=i.get(u);d!==void 0&&Hs(d.mutation,h,On.empty(),St.now()),jo(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Hr(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:zI(s.bundledQuery),readTime:Hr(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.overlays=new ze(ie.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,a=new ie(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=cr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=cr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return F.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new II(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ie(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.Tr=new ht(tt.Er),this.dr=new ht(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new Be([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new Be([])),r=new tt(n,e),s=new tt(n,e+1);let i=Ie();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ht(tt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(Re);return n.forEach(s=>{const i=new tt(s,0),a=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const a=new tt(new ie(i),0);let l=new ht(Re);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},a),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.Mr=e,this.docs=function(){return new ze(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const a=n.path,l=new ie(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||$w(Lw(d),r)<=0||(s.has(d.key)||jo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nA(this)}getSize(e){return F.resolve(this.size)}}class nA extends WI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.persistence=e,this.Nr=new as(n=>Eu(n),Tu),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bu,this.targetCount=0,this.kr=ns.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gu(0),this.Kr=!1,this.Kr=!0,this.$r=new ZI,this.referenceDelegate=e(this),this.Ur=new rA(this),this.indexManager=new KI,this.remoteDocumentCache=function(s){return new tA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new HI(n),this.Gr=new XI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new eA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new iA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class iA extends Uw{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Jr=new bu,this.Yr=null}static Zr(e){return new Pu(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Su(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Y0()?8:jw(W0())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new oA;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Rs()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Or(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Rs()<=pe.DEBUG&&Z("QueryEngine","Query:",Or(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Rs()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Or(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):F.resolve())}Yi(e,n){if(pf(n))return F.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Al(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ie(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,a,u.readTime)?this.Yi(e,Al(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return pf(n)||s.isEqual(le.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?F.resolve(null):(Rs()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(n)),this.rs(e,a,n,Fw(s,-1)).next(l=>l))})}ts(e,n){let r=new ht(um(e));return n.forEach((s,i)=>{jo(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Rs()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Or(n)),this.Ji.getDocumentsMatchingQuery(e,n,Hn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new ze(Re),this._s=new as(i=>Eu(i),Tu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function uA(t,e,n,r){return new lA(t,e,n,r)}async function bm(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=Ie();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Pm(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function cA(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ft.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(m,y,d)&&l.push(n.Ur.updateTargetData(i,y))});let u=Kn(),h=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(hA(i,a,e.documentUpdates).next(d=>{u=d.Ps,h=d.Is})),!r.isEqual(le.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function hA(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Kn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function fA(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Cl(t,e,n){const r=Ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!pi(a))throw a;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Rf(t,e,n){const r=Ee(t);let s=le.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const p=Ee(u),m=p._s.get(d);return m!==void 0?F.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,a,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:le.min(),n?i:Ie())).next(l=>(dA(r,aI(e),l),{documents:l,Ts:i})))}function dA(t,e,n){let r=t.us.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class bf{constructor(){this.activeTargetIds=dI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pA{constructor(){this.so=new bf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki=null;function Da(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class yA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=Da(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,u,h,s).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw si("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",s),d})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=gA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Da();return new Promise((a,l)=>{const u=new Wp;u.setWithCredentials(!0),u.listenOnce(Yp.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case so.NO_ERROR:const d=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case so.TIMEOUT:Z(mt,`RPC '${e}' ${i} timed out`),l(new oe(G.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const p=u.getStatus();if(Z(mt,`RPC '${e}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const P=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf($)>=0?$:G.UNKNOWN}(y.status);l(new oe(P,y.message))}else l(new oe(G.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new oe(G.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{Z(mt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(mt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Da(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Zp(),l=Jp(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new Qp({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const p=a.createWebChannel(d,u);let m=!1,y=!1;const P=new _A({Io:D=>{y?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),V=(D,$,j)=>{D.listen($,U=>{try{j(U)}catch(re){setTimeout(()=>{throw re},0)}})};return V(p,Ss.EventType.OPEN,()=>{y||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),V(p,Ss.EventType.CLOSE,()=>{y||(y=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),P.So())}),V(p,Ss.EventType.ERROR,D=>{y||(y=!0,si(mt,`RPC '${e}' stream ${s} transport errored:`,D),P.So(new oe(G.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ss.EventType.MESSAGE,D=>{var $;if(!y){const j=D.data[0];Ye(!!j);const U=j,re=U.error||(($=U[0])===null||$===void 0?void 0:$.error);if(re){Z(mt,`RPC '${e}' stream ${s} received error:`,re);const fe=re.status;let Y=function(v){const A=Ke[v];if(A!==void 0)return _m(A)}(fe),b=re.message;Y===void 0&&(Y=G.INTERNAL,b="Unknown error status: "+fe+" with message "+re.message),y=!0,P.So(new oe(Y,b)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,j),P.bo(j)}}),V(l,Xp.STAT_EVENT,D=>{D.stat===yl.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===yl.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Na(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){return new xI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,r,s,i,a,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Cm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new oe(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EA extends vA{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=MI(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Hr(a.readTime):le.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Af(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=Il(u)?{documents:FI(i,u)}:{query:LI(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=NI(i,a.resumeToken);const h=Pl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=DI(i,a.snapshotVersion.toTimestamp());const h=Pl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=BI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Af(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Sl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(G.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Sl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(G.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{_i(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Ee(u);h.L_.add(4),await gi(h),h.q_.set("Unknown"),h.L_.delete(4),await Ko(h)}(this))})}),this.q_=new wA(r,s)}}async function Ko(t){if(_i(t))for(const e of t.B_)await e(!0)}async function gi(t){for(const e of t.B_)await e(!1)}function Vm(t,e){const n=Ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Du(n)?xu(n):ls(n).r_()&&Vu(n,e))}function Cu(t,e){const n=Ee(t),r=ls(n);n.N_.delete(e),r.r_()&&xm(n,e),n.N_.size===0&&(r.r_()?r.o_():_i(n)&&n.q_.set("Unknown"))}function Vu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ls(t).A_(e)}function xm(t,e){t.Q_.xe(e),ls(t).R_(e)}function xu(t){t.Q_=new PI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.q_.v_()}function Du(t){return _i(t)&&!ls(t).n_()&&t.N_.size>0}function _i(t){return Ee(t).L_.size===0}function Dm(t){t.Q_=void 0}async function AA(t){t.q_.set("Online")}async function RA(t){t.N_.forEach((e,n)=>{Vu(t,e)})}async function bA(t,e){Dm(t),Du(t)?(t.q_.M_(e),xu(t)):t.q_.set("Unknown")}async function PA(t,e,n){if(t.q_.set("Online"),e instanceof vm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sf(t,r)}else if(e instanceof oo?t.Q_.Ke(e):e instanceof ym?t.Q_.He(e):t.Q_.We(e),!n.isEqual(le.min()))try{const r=await Pm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const d=i.N_.get(u);if(!d)return;i.N_.set(u,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),xm(i,u);const p=new kn(d.target,u,h,d.sequenceNumber);Vu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Sf(t,r)}}async function Sf(t,e,n){if(!pi(e))throw e;t.L_.add(1),await gi(t),t.q_.set("Offline"),n||(n=()=>Pm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ko(t)})}async function Cf(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.L_.add(3),await gi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ko(n)}async function SA(t,e){const n=Ee(t);e?(n.L_.delete(2),await Ko(n)):e||(n.L_.add(2),await gi(n),n.q_.set("Unknown"))}function ls(t){return t.K_||(t.K_=function(n,r,s){const i=Ee(n);return i.w_(),new EA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:AA.bind(null,t),Ro:RA.bind(null,t),mo:bA.bind(null,t),d_:PA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Du(t)?xu(t):t.q_.set("Unknown")):(await t.K_.stop(),Dm(t))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Nu(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nm(t,e){if(vn("AsyncQueue",`${e}: ${t}`),pi(t))return new oe(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.W_=new ze(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,s,i,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new rs(e,n,zr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class VA{constructor(){this.queries=xf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Ee(n),i=s.queries;s.queries=xf(),i.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new oe(G.ABORTED,"Firestore shutting down"))}}function xf(){return new as(t=>lm(t),Uo)}async function xA(t,e){const n=Ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new CA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Nm(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Ou(n)}async function DA(t,e){const n=Ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NA(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Ou(n)}function OA(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Ou(t){t.Y_.forEach(e=>{e.next()})}var Vl,Df;(Df=Vl||(Vl={})).ea="default",Df.Cache="cache";class kA{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Vl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class MA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ie(),this.mutatedKeys=Ie(),this.Aa=um(e),this.Ra=new zr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=jo(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?P!==V&&(r.track({type:3,doc:y}),D=!0):this.ga(m,y)||(r.track({type:2,doc:y}),D=!0,(u&&this.Aa(y,u)>0||h&&this.Aa(y,h)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(u||h)&&(l=!0)),D&&(y?(a=a.add(y),i=V?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((d,p)=>function(y,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return V(y)-V(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new rs(this.query,e.Ra,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new km(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Om(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class FA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LA{constructor(e){this.key=e,this.va=!1}}class $A{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new as(l=>lm(l),Uo),this.Ma=new Map,this.xa=new Set,this.Oa=new ze(ie.comparator),this.Na=new Map,this.La=new bu,this.Ba={},this.ka=new Map,this.qa=ns.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function BA(t,e,n=!0){const r=Bm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Mm(r,e,n,!0),s}async function UA(t,e){const n=Bm(t);await Mm(n,e,!0,!1)}async function Mm(t,e,n,r){const s=await fA(t.localStore,sn(e)),i=s.targetId,a=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await jA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Vm(t.remoteStore,s),l}async function jA(t,e,n,r,s){t.Ka=(p,m,y)=>async function(V,D,$,j){let U=D.view.ma($);U.ns&&(U=await Rf(V.localStore,D.query,!1).then(({documents:b})=>D.view.ma(b,U)));const re=j&&j.targetChanges.get(D.targetId),fe=j&&j.targetMismatches.get(D.targetId)!=null,Y=D.view.applyChanges(U,V.isPrimaryClient,re,fe);return Of(V,D.targetId,Y.wa),Y.snapshot}(t,p,m,y);const i=await Rf(t.localStore,e,!0),a=new MA(e,i.Ts),l=a.ma(i.documents),u=mi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,u);Of(t,n,h.wa);const d=new FA(e,n,a);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function qA(t,e,n){const r=Ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Uo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Cu(r.remoteStore,s.targetId),xl(r,s.targetId)}).catch(mu)):(xl(r,s.targetId),await Cl(r.localStore,s.targetId,!0))}async function HA(t,e){const n=Ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Cu(n.remoteStore,r.targetId))}async function Fm(t,e){const n=Ee(t);try{const r=await cA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(Ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Ye(a.va):s.removedDocuments.size>0&&(Ye(a.va),a.va=!1))}),await $m(n,r,e)}catch(r){await mu(r)}}function Nf(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Ee(a);u.onlineState=l;let h=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&Ou(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zA(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ze(ie.comparator);a=a.insert(i,_t.newNoDocument(i,le.min()));const l=Ie().add(i),u=new zo(le.min(),new Map,new ze(Re),a,l);await Fm(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),ku(r)}else await Cl(r.localStore,e,!1).then(()=>xl(r,e,n)).catch(mu)}function xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Lm(t,r)})}function Lm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Cu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ku(t))}function Of(t,e,n){for(const r of n)r instanceof Om?(t.La.addReference(r.key,e),KA(t,r)):r instanceof km?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Lm(t,r.key)):ce()}function KA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),ku(t))}function ku(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(Be.fromString(e)),r=t.qa.next();t.Na.set(r,new LA(n)),t.Oa=t.Oa.insert(n,r),Vm(t.remoteStore,new kn(sn(wu(n.path)),r,"TargetPurposeLimboResolution",gu.oe))}}async function $m(t,e,n){const r=Ee(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Su.Wi(u.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,h){const d=Ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,m=>F.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>F.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!pi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=d.os.get(m),P=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(m,V)}}}(r.localStore,i))}async function GA(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await bm(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new oe(G.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $m(n,r.hs)}}function WA(t,e){const n=Ee(t),r=n.Na.get(e);if(r&&r.va)return Ie().add(r.key);{let s=Ie();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Bm(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zA.bind(null,e),e.Ca.d_=NA.bind(null,e.eventManager),e.Ca.$a=OA.bind(null,e.eventManager),e}class kf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uA(this.persistence,new aA,e.initialUser,this.serializer)}createPersistence(e){return new sA(Pu.Zr,this.serializer)}createSharedClientState(e){return new pA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GA.bind(null,this.syncEngine),await SA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VA}()}createDatastore(e){const n=Sm(e.databaseInfo.databaseId),r=function(i){return new yA(i)}(e.databaseInfo);return function(i,a,l,u){return new TA(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new IA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Nf(this.syncEngine,n,0),function(){return Pf.D()?new Pf:new mA}())}createSyncEngine(e,n){return function(s,i,a,l,u,h,d){const p=new $A(s,i,a,l,u,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ee(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await gi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=em.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oa(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZA(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Cf(e.remoteStore,s)),t._onlineComponents=e}function JA(t){return t.name==="FirebaseError"?t.code===G.FAILED_PRECONDITION||t.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JA(n))throw n;si("Error using user provided cache. Falling back to memory cache: "+n),await Oa(t,new kf)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Oa(t,new kf);return t._offlineComponents}async function e1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Mf(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Mf(t,new QA))),t._onlineComponents}async function Ff(t){const e=await e1(t),n=e.eventManager;return n.onListen=BA.bind(null,e.syncEngine),n.onUnlisten=qA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HA.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e,n){if(!n)throw new oe(G.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n1(t,e,n,r){if(e===!0&&r===!0)throw new oe(G.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $f(t){if(!ie.isDocumentKey(t))throw new oe(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r1(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function ka(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=r1(t);throw new oe(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Um((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jm{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cw;switch(r.type){case"firstParty":return new Dw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Lf.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}}class ui extends Go{constructor(e,n,r){super(e,n,wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new ie(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function s1(t,e,...n){if(t=ou(t),arguments.length===1&&(e=em.newId()),t1("doc","path",e),t instanceof jm){const r=Be.fromString(e,...n);return $f(r),new gn(t,null,new ie(r))}{if(!(t instanceof gn||t instanceof ui))throw new oe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return $f(r),new gn(t.firestore,t instanceof ui?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Cm(this,"async_queue_retry"),this.Eu=()=>{const n=Na();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new qr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!pi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Nu.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ce()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function Uf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Dl extends jm{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new i1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qm(this),this._firestoreClient.terminate()}}function o1(t){return t._firestoreClient||qm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qm(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,d){return new zw(l,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Um(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(ft.fromBase64String(e))}catch(n){throw new oe(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Io(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const u1=new RegExp("[~\\*/\\[\\]]");function c1(t,e,n){if(e.search(u1)>=0)throw jf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Hm(...e.split("."))._internalPath}catch{throw jf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function jf(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new oe(G.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Km("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class h1 extends zm{data(){return super.data()}}function Km(t,e){return typeof e=="string"?c1(t,e):e instanceof Hm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class d1{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $o(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>je(a.doubleValue));return new l1(i)}convertGeoPoint(e){return new a1(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=zn(e);return new St(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ye(Rm(r));const s=new ai(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gm extends zm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Km("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ao extends Gm{data(e={}){return super.data(e)}}class p1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ao(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ao(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ao(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:m1(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function m1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class Wm extends d1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function g1(t,...e){var n,r,s;t=ou(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Uf(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Uf(e[a])){const p=e[a];e[a]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let u,h,d;if(t instanceof gn)h=ka(t.firestore,Dl),d=wu(t._key.path),u={next:p=>{e[a]&&e[a](_1(h,t,p))},error:e[a+1],complete:e[a+2]};else{const p=ka(t,Go);h=ka(p.firestore,Dl),d=p._query;const m=new Wm(h);u={next:y=>{e[a]&&e[a](new p1(h,m,p,y))},error:e[a+1],complete:e[a+2]},f1(t._query)}return function(m,y,P,V){const D=new YA(V),$=new kA(y,D,P);return m.asyncQueue.enqueueAndForget(async()=>xA(await Ff(m),$)),()=>{D.za(),m.asyncQueue.enqueueAndForget(async()=>DA(await Ff(m),$))}}(o1(h),d,l,u)}function _1(t,e,n){const r=n.docs.get(e._key),s=new Wm(t);return new Gm(t,s,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){os=s})(Ep),Js(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Dl(new Vw(r.getProvider("auth-internal")),new Ow(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new oe(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Bn(rf,"4.7.1",e),Bn(rf,"4.7.1","esm2017")})();const Qm=mw(dT);async function y1(){const t=_w(Qm,"people");return(await Pw(t)).docs.map(r=>r.data())}let v1=Symbol("headlessui.useid"),E1=0;function Mu(){return zt(v1,()=>`${++E1}`)()}function qe(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}function Wo(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Wo),r}var T1=Object.defineProperty,w1=(t,e,n)=>e in t?T1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qf=(t,e,n)=>(w1(t,typeof e!="symbol"?e+"":e,n),n);let I1=class{constructor(){qf(this,"current",this.detect()),qf(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Fu=new I1;function Lu(t){if(Fu.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=qe(t);if(e)return e.ownerDocument}return document}let Nl=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Ol=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Ol||{}),A1=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(A1||{}),R1=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(R1||{});function Ym(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Nl)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var $u=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))($u||{});function Bu(t,e=0){var n;return t===((n=Lu(t))==null?void 0:n.body)?!1:Wo(e,{0(){return t.matches(Nl)},1(){let r=t;for(;r!==null;){if(r.matches(Nl))return!0;r=r.parentElement}return!1}})}function Xm(t){let e=Lu(t);mn(()=>{e&&!Bu(e.activeElement,0)&&P1(t)})}var b1=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(b1||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function P1(t){t==null||t.focus({preventScroll:!0})}let S1=["textarea","input"].join(",");function C1(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,S1))!=null?n:!1}function Jm(t,e=n=>n){return t.slice().sort((n,r)=>{let s=e(n),i=e(r);if(s===null||i===null)return 0;let a=s.compareDocumentPosition(i);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function V1(t,e){return x1(Ym(),e,{relativeTo:t})}function x1(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:s=[]}={}){var i;let a=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,l=Array.isArray(t)?n?Jm(t):t:Ym(t);s.length>0&&l.length>1&&(l=l.filter(P=>!s.includes(P))),r=r??a.activeElement;let u=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,l.indexOf(r))-1;if(e&4)return Math.max(0,l.indexOf(r))+1;if(e&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=e&32?{preventScroll:!0}:{},p=0,m=l.length,y;do{if(p>=m||p+m<=0)return 0;let P=h+p;if(e&16)P=(P+m)%m;else{if(P<0)return 3;if(P>=m)return 1}y=l[P],y==null||y.focus(d),p+=u}while(y!==a.activeElement);return e&6&&C1(y)&&y.select(),2}function D1(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function N1(){return/Android/gi.test(window.navigator.userAgent)}function O1(){return D1()||N1()}function Gi(t,e,n){Fu.isServer||fi(r=>{document.addEventListener(t,e,n),r(()=>document.removeEventListener(t,e,n))})}function k1(t,e,n){Fu.isServer||fi(r=>{window.addEventListener(t,e,n),r(()=>window.removeEventListener(t,e,n))})}function M1(t,e,n=Qe(()=>!0)){function r(i,a){if(!n.value||i.defaultPrevented)return;let l=a(i);if(l===null||!l.getRootNode().contains(l))return;let u=function h(d){return typeof d=="function"?h(d()):Array.isArray(d)||d instanceof Set?d:[d]}(t);for(let h of u){if(h===null)continue;let d=h instanceof HTMLElement?h:qe(h);if(d!=null&&d.contains(l)||i.composed&&i.composedPath().includes(d))return}return!Bu(l,$u.Loose)&&l.tabIndex!==-1&&i.preventDefault(),e(i,l)}let s=nt(null);Gi("pointerdown",i=>{var a,l;n.value&&(s.value=((l=(a=i.composedPath)==null?void 0:a.call(i))==null?void 0:l[0])||i.target)},!0),Gi("mousedown",i=>{var a,l;n.value&&(s.value=((l=(a=i.composedPath)==null?void 0:a.call(i))==null?void 0:l[0])||i.target)},!0),Gi("click",i=>{O1()||s.value&&(r(i,()=>s.value),s.value=null)},!0),Gi("touchend",i=>r(i,()=>i.target instanceof HTMLElement?i.target:null),!0),k1("blur",i=>r(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Hf(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function F1(t,e){let n=nt(Hf(t.value.type,t.value.as));return hi(()=>{n.value=Hf(t.value.type,t.value.as)}),fi(()=>{var r;n.value||qe(e)&&qe(e)instanceof HTMLButtonElement&&!((r=qe(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function zf(t){return[t.screenX,t.screenY]}function L1(){let t=nt([-1,-1]);return{wasMoved(e){let n=zf(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=zf(e)}}}function $1({container:t,accept:e,walk:n,enabled:r}){fi(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Lu(t);if(!i)return;let a=Object.assign(u=>e(u),{acceptNode:e}),l=i.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,a,!1);for(;l.nextNode();)n(l.currentNode)})}var kl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(kl||{}),B1=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(B1||{});function Qo({visible:t=!0,features:e=0,ourProps:n,theirProps:r,...s}){var i;let a=eg(r,n),l=Object.assign(s,{props:a});if(t||e&2&&a.static)return Ma(l);if(e&1){let u=(i=a.unmount)==null||i?0:1;return Wo(u,{0(){return null},1(){return Ma({...s,props:{...a,hidden:!0,style:{display:"none"}}})}})}return Ma(l)}function Ma({props:t,attrs:e,slots:n,slot:r,name:s}){var i,a;let{as:l,...u}=U1(t,["unmount","static"]),h=(i=n.default)==null?void 0:i.call(n,r),d={};if(r){let p=!1,m=[];for(let[y,P]of Object.entries(r))typeof P=="boolean"&&(p=!0),P===!0&&m.push(y);p&&(d["data-headlessui-state"]=m.join(" "))}if(l==="template"){if(h=Zm(h??[]),Object.keys(u).length>0||Object.keys(e).length>0){let[p,...m]=h??[];if(!j1(p)||m.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(e)).map(V=>V.trim()).filter((V,D,$)=>$.indexOf(V)===D).sort((V,D)=>V.localeCompare(D)).map(V=>`  - ${V}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(V=>`  - ${V}`).join(`
`)].join(`
`));let y=eg((a=p.props)!=null?a:{},u,d),P=_n(p,y,!0);for(let V in y)V.startsWith("on")&&(P.props||(P.props={}),P.props[V]=y[V]);return P}return Array.isArray(h)&&h.length===1?h[0]:h}return Mo(l,Object.assign({},u,d),{default:()=>h})}function Zm(t){return t.flatMap(e=>e.type===rt?Zm(e.children):[e])}function eg(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):e[s]=r[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](s,...i){let a=n[r];for(let l of a){if(s instanceof Event&&s.defaultPrevented)return;l(s,...i)}}});return e}function U1(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function j1(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let tg=Symbol("Context");var ci=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ci||{});function q1(){return zt(tg,null)}function H1(t){jr(tg,t)}var lt=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(lt||{});function z1(t){throw new Error("Unexpected object: "+t)}var kt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(kt||{});function K1(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r??-1;switch(t.focus){case 0:{for(let i=0;i<n.length;++i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 1:{s===-1&&(s=n.length);for(let i=s-1;i>=0;--i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 2:{for(let i=s+1;i<n.length;++i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 3:{for(let i=n.length-1;i>=0;--i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 4:{for(let i=0;i<n.length;++i)if(e.resolveId(n[i],i,n)===t.id)return i;return r}case 5:return null;default:z1(t)}}let Kf=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Gf(t){var e,n;let r=(e=t.innerText)!=null?e:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return r;let i=!1;for(let l of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),i=!0;let a=i?(n=s.innerText)!=null?n:"":r;return Kf.test(a)&&(a=a.replace(Kf,"")),a}function G1(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(s=>{let i=document.getElementById(s);if(i){let a=i.getAttribute("aria-label");return typeof a=="string"?a.trim():Gf(i).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return Gf(t).trim()}function W1(t){let e=nt(""),n=nt("");return()=>{let r=qe(t);if(!r)return"";let s=r.innerText;if(e.value===s)return n.value;let i=G1(r).trim().toLowerCase();return e.value=s,n.value=i,i}}var Q1=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Q1||{}),Y1=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Y1||{});function X1(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ng=Symbol("MenuContext");function Yo(t){let e=zt(ng,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Yo),n}return e}let J1=ss({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=nt(1),s=nt(null),i=nt(null),a=nt([]),l=nt(""),u=nt(null),h=nt(1);function d(m=y=>y){let y=u.value!==null?a.value[u.value]:null,P=Jm(m(a.value.slice()),D=>qe(D.dataRef.domRef)),V=y?P.indexOf(y):null;return V===-1&&(V=null),{items:P,activeItemIndex:V}}let p={menuState:r,buttonRef:s,itemsRef:i,items:a,searchQuery:l,activeItemIndex:u,activationTrigger:h,closeMenu:()=>{r.value=1,u.value=null},openMenu:()=>r.value=0,goToItem(m,y,P){let V=d(),D=K1(m===kt.Specific?{focus:kt.Specific,id:y}:{focus:m},{resolveItems:()=>V.items,resolveActiveIndex:()=>V.activeItemIndex,resolveId:$=>$.id,resolveDisabled:$=>$.dataRef.disabled});l.value="",u.value=D,h.value=P??1,a.value=V.items},search(m){let y=l.value!==""?0:1;l.value+=m.toLowerCase();let P=(u.value!==null?a.value.slice(u.value+y).concat(a.value.slice(0,u.value+y)):a.value).find(D=>D.dataRef.textValue.startsWith(l.value)&&!D.dataRef.disabled),V=P?a.value.indexOf(P):-1;V===-1||V===u.value||(u.value=V,h.value=1)},clearSearch(){l.value=""},registerItem(m,y){let P=d(V=>[...V,{id:m,dataRef:y}]);a.value=P.items,u.value=P.activeItemIndex,h.value=1},unregisterItem(m){let y=d(P=>{let V=P.findIndex(D=>D.id===m);return V!==-1&&P.splice(V,1),P});a.value=y.items,u.value=y.activeItemIndex,h.value=1}};return M1([s,i],(m,y)=>{var P;p.closeMenu(),Bu(y,$u.Loose)||(m.preventDefault(),(P=qe(s))==null||P.focus())},Qe(()=>r.value===0)),jr(ng,p),H1(Qe(()=>Wo(r.value,{0:ci.Open,1:ci.Closed}))),()=>{let m={open:r.value===0,close:p.closeMenu};return Qo({ourProps:{},theirProps:t,slot:m,slots:e,attrs:n,name:"Menu"})}}}),Z1=ss({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-menu-button-${Mu()}`,a=Yo("MenuButton");r({el:a.buttonRef,$el:a.buttonRef});function l(p){switch(p.key){case lt.Space:case lt.Enter:case lt.ArrowDown:p.preventDefault(),p.stopPropagation(),a.openMenu(),mn(()=>{var m;(m=qe(a.itemsRef))==null||m.focus({preventScroll:!0}),a.goToItem(kt.First)});break;case lt.ArrowUp:p.preventDefault(),p.stopPropagation(),a.openMenu(),mn(()=>{var m;(m=qe(a.itemsRef))==null||m.focus({preventScroll:!0}),a.goToItem(kt.Last)});break}}function u(p){switch(p.key){case lt.Space:p.preventDefault();break}}function h(p){t.disabled||(a.menuState.value===0?(a.closeMenu(),mn(()=>{var m;return(m=qe(a.buttonRef))==null?void 0:m.focus({preventScroll:!0})})):(p.preventDefault(),a.openMenu(),X1(()=>{var m;return(m=qe(a.itemsRef))==null?void 0:m.focus({preventScroll:!0})})))}let d=F1(Qe(()=>({as:t.as,type:e.type})),a.buttonRef);return()=>{var p;let m={open:a.menuState.value===0},{...y}=t,P={ref:a.buttonRef,id:i,type:d.value,"aria-haspopup":"menu","aria-controls":(p=qe(a.itemsRef))==null?void 0:p.id,"aria-expanded":a.menuState.value===0,onKeydown:l,onKeyup:u,onClick:h};return Qo({ourProps:P,theirProps:y,slot:m,attrs:e,slots:n,name:"MenuButton"})}}}),eR=ss({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-menu-items-${Mu()}`,a=Yo("MenuItems"),l=nt(null);r({el:a.itemsRef,$el:a.itemsRef}),$1({container:Qe(()=>qe(a.itemsRef)),enabled:Qe(()=>a.menuState.value===0),accept(m){return m.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:m.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(m){m.setAttribute("role","none")}});function u(m){var y;switch(l.value&&clearTimeout(l.value),m.key){case lt.Space:if(a.searchQuery.value!=="")return m.preventDefault(),m.stopPropagation(),a.search(m.key);case lt.Enter:if(m.preventDefault(),m.stopPropagation(),a.activeItemIndex.value!==null){let P=a.items.value[a.activeItemIndex.value];(y=qe(P.dataRef.domRef))==null||y.click()}a.closeMenu(),Xm(qe(a.buttonRef));break;case lt.ArrowDown:return m.preventDefault(),m.stopPropagation(),a.goToItem(kt.Next);case lt.ArrowUp:return m.preventDefault(),m.stopPropagation(),a.goToItem(kt.Previous);case lt.Home:case lt.PageUp:return m.preventDefault(),m.stopPropagation(),a.goToItem(kt.First);case lt.End:case lt.PageDown:return m.preventDefault(),m.stopPropagation(),a.goToItem(kt.Last);case lt.Escape:m.preventDefault(),m.stopPropagation(),a.closeMenu(),mn(()=>{var P;return(P=qe(a.buttonRef))==null?void 0:P.focus({preventScroll:!0})});break;case lt.Tab:m.preventDefault(),m.stopPropagation(),a.closeMenu(),mn(()=>V1(qe(a.buttonRef),m.shiftKey?Ol.Previous:Ol.Next));break;default:m.key.length===1&&(a.search(m.key),l.value=setTimeout(()=>a.clearSearch(),350));break}}function h(m){switch(m.key){case lt.Space:m.preventDefault();break}}let d=q1(),p=Qe(()=>d!==null?(d.value&ci.Open)===ci.Open:a.menuState.value===0);return()=>{var m,y;let P={open:a.menuState.value===0},{...V}=t,D={"aria-activedescendant":a.activeItemIndex.value===null||(m=a.items.value[a.activeItemIndex.value])==null?void 0:m.id,"aria-labelledby":(y=qe(a.buttonRef))==null?void 0:y.id,id:i,onKeydown:u,onKeyup:h,role:"menu",tabIndex:0,ref:a.itemsRef};return Qo({ourProps:D,theirProps:V,slot:P,attrs:e,slots:n,features:kl.RenderStrategy|kl.Static,visible:p.value,name:"MenuItems"})}}}),Fa=ss({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:e,attrs:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-menu-item-${Mu()}`,a=Yo("MenuItem"),l=nt(null);r({el:l,$el:l});let u=Qe(()=>a.activeItemIndex.value!==null?a.items.value[a.activeItemIndex.value].id===i:!1),h=W1(l),d=Qe(()=>({disabled:t.disabled,get textValue(){return h()},domRef:l}));hi(()=>a.registerItem(i,d)),Yl(()=>a.unregisterItem(i)),fi(()=>{a.menuState.value===0&&u.value&&a.activationTrigger.value!==0&&mn(()=>{var $,j;return(j=($=qe(l))==null?void 0:$.scrollIntoView)==null?void 0:j.call($,{block:"nearest"})})});function p($){if(t.disabled)return $.preventDefault();a.closeMenu(),Xm(qe(a.buttonRef))}function m(){if(t.disabled)return a.goToItem(kt.Nothing);a.goToItem(kt.Specific,i)}let y=L1();function P($){y.update($)}function V($){y.wasMoved($)&&(t.disabled||u.value||a.goToItem(kt.Specific,i,0))}function D($){y.wasMoved($)&&(t.disabled||u.value&&a.goToItem(kt.Nothing))}return()=>{let{disabled:$,...j}=t,U={active:u.value,disabled:$,close:a.closeMenu};return Qo({ourProps:{id:i,ref:l,role:"menuitem",tabIndex:$===!0?void 0:-1,"aria-disabled":$===!0?!0:void 0,onClick:p,onFocus:m,onPointerenter:P,onMouseenter:P,onPointermove:V,onMousemove:V,onPointerleave:D,onMouseleave:D},theirProps:{...n,...j},slot:U,attrs:n,slots:e,name:"MenuItem"})}}});const tR={class:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8"},nR=M("span",{class:"sr-only"},"Open sidebar",-1),rR={class:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6"},sR={class:"flex flex-1",action:"#",method:"GET"},iR=M("label",{for:"search-field",class:"sr-only"},"Search",-1),oR={class:"relative w-full"},aR=M("input",{id:"search-field",class:"block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm",placeholder:"Search...",type:"search",name:"search"},null,-1),lR={class:"lg:pr-96"},uR={class:"flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"},cR=M("h1",{class:"text-base font-semibold leading-7 text-white"},"TIMING LIST",-1),hR=M("div",null,[dn(" jonas "),M("input",{type:"file",id:"camera",name:"camera",accept:"image/*",capture:"user"}),M("input",{type:"file",id:"picture",name:"picture",accept:"image/*",capture:"environment"})],-1),fR={role:"list",class:"divide-y divide-white/5"},dR={class:"min-w-0 flex-auto"},pR={class:"flex items-center gap-x-3"},mR=M("div",{class:"h-2 w-2 rounded-full bg-current"},null,-1),gR=[mR],_R={class:"min-w-0 text-sm font-semibold leading-6 text-white"},yR=["href"],vR={class:"truncate"},ER=M("span",{class:"text-gray-400"},"/",-1),TR={class:"whitespace-nowrap"},wR=M("span",{class:"absolute inset-0"},null,-1),IR={class:"mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400"},AR={class:"truncate"},RR=M("svg",{viewBox:"0 0 2 2",class:"h-0.5 w-0.5 flex-none fill-gray-300"},[M("circle",{cx:"1",cy:"1",r:"1"})],-1),bR={class:"whitespace-nowrap"},PR={class:"bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5"},SR=M("header",{class:"flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"},[M("h2",{class:"text-base font-semibold leading-7 text-white"},"Activity feed"),M("a",{href:"#",class:"text-sm font-semibold leading-6 text-indigo-400"},"View all")],-1),CR={role:"list",class:"divide-y divide-white/5"},VR={class:"flex items-center gap-x-3"},xR=["src"],DR={class:"flex-auto truncate text-sm font-semibold leading-6 text-white"},NR=["datetime"],OR={class:"mt-3 truncate text-sm text-gray-500"},kR={class:"text-gray-400"},MR={class:"font-mono text-gray-400"},FR={class:"text-gray-400"},Wf={__name:"TimingPage",setup(t){const e={offline:"text-gray-500 bg-gray-100/10",online:"text-green-400 bg-green-400/10",error:"text-rose-400 bg-rose-400/10"},n={Preview:"text-gray-400 bg-gray-400/10 ring-gray-400/20",Production:"text-indigo-400 bg-indigo-400/10 ring-indigo-400/30"},r=nt([]),s=[{user:{name:"Michael Foster",imageUrl:"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},projectName:"Number Participant",commit:"2d89f0c8",branch:"main",date:"1h",dateTime:"2023-01-23T11:00"}],i=nt(!1);return hi(async()=>{const a=await y1();r.value=a.map(l=>({id:l.id,projectName:l.number,teamName:l.name,status:l.status,statusText:"Initiated 8:00",description:l.personalData,environment:"Preview",timing:l.timing})),g1(s1(Qm,"people","SF"),l=>{console.log("Current data: ",l.data())})}),(a,l)=>(Je(),vt(rt,null,[M("div",tR,[M("button",{type:"button",class:"-m-2.5 p-2.5 text-white xl:hidden",onClick:l[0]||(l[0]=u=>i.value=!0)},[nR,ve(Ge(n0),{class:"h-5 w-5","aria-hidden":"true"})]),M("div",rR,[M("form",sR,[iR,M("div",oR,[ve(Ge(i0),{class:"pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500","aria-hidden":"true"}),aR])])])]),M("main",lR,[M("header",uR,[cR,ve(Ge(J1),{as:"div",class:"relative"},{default:gt(()=>[ve(Ge(Z1),{class:"flex items-center gap-x-1 text-sm font-medium leading-6 text-white"},{default:gt(()=>[dn(" Sort by "),ve(Ge(s0),{class:"h-5 w-5 text-gray-500","aria-hidden":"true"})]),_:1}),ve(nu,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:gt(()=>[ve(Ge(eR),{class:"absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"},{default:gt(()=>[ve(Ge(Fa),null,{default:gt(({active:u})=>[M("a",{href:"#",class:Ut([u?"bg-gray-50":"","block px-3 py-1 text-sm leading-6 text-gray-900"])},"Name",2)]),_:1}),ve(Ge(Fa),null,{default:gt(({active:u})=>[M("a",{href:"#",class:Ut([u?"bg-gray-50":"","block px-3 py-1 text-sm leading-6 text-gray-900"])},"Date updated",2)]),_:1}),ve(Ge(Fa),null,{default:gt(({active:u})=>[M("a",{href:"#",class:Ut([u?"bg-gray-50":"","block px-3 py-1 text-sm leading-6 text-gray-900"])},"Environment",2)]),_:1})]),_:1})]),_:1})]),_:1})]),hR,M("ul",fR,[(Je(!0),vt(rt,null,Fr(r.value,u=>(Je(),vt("li",{key:u.id,class:"relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"},[M("div",dR,[M("div",pR,[M("div",{class:Ut([e[u.status],"flex-none rounded-full p-1"])},gR,2),M("h2",_R,[M("a",{href:u.href,class:"flex gap-x-2"},[M("span",vR,et(u.teamName),1),ER,M("span",TR,et(u.projectName),1),wR],8,yR)])]),M("div",IR,[M("p",AR,et(u.description),1),RR,M("p",bR,et(u.statusText),1)])]),M("div",{class:Ut([n[u.environment],"flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"])},et(u.environment)+" "+et(u.timing),3),ve(Ge(r0),{class:"h-5 w-5 flex-none text-gray-400","aria-hidden":"true"})]))),128))])]),M("aside",PR,[SR,M("ul",CR,[(Je(),vt(rt,null,Fr(s,u=>M("li",{key:u.commit,class:"px-4 py-4 sm:px-6 lg:px-8"},[M("div",VR,[M("img",{src:u.user.imageUrl,alt:"",class:"h-6 w-6 flex-none rounded-full bg-gray-800"},null,8,xR),M("h3",DR,et(u.user.name),1),M("time",{datetime:u.dateTime,class:"flex-none text-xs text-gray-600"},et(u.date),9,NR)]),M("p",OR,[dn(" Pushed to "),M("span",kR,et(u.projectName),1),dn(" ("),M("span",MR,et(u.commit),1),dn(" on "),M("span",FR,et(u.branch),1),dn(") ")])])),64))])])],64))}},LR=[{path:"/",component:Wf},{path:"/timing",component:Wf}],$R=Xv({history:Pv(),routes:LR});Yy(k0).use($R).mount("#app");
