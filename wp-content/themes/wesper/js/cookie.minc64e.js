/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
;!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return c.raw?e:encodeURIComponent(e)}function i(e){return c.raw?e:decodeURIComponent(e)}function o(e){return n(c.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(u," ")),c.json?JSON.parse(e):e}catch(n){}}function t(n,i){var o=c.raw?n:r(n);return e.isFunction(i)?i(o):o}var u=/\+/g,c=e.cookie=function(r,u,f){if(u!==undefined&&!e.isFunction(u)){if("number"==typeof(f=e.extend({},c.defaults,f)).expires){var d=f.expires,a=f.expires=new Date;a.setTime(+a+864e5*d)}return document.cookie=[n(r),"=",o(u),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?undefined:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;m<x;m++){var k=s[m].split("="),l=i(k.shift()),j=k.join("=");if(r&&r===l){p=t(j,u);break}r||(j=t(j))===undefined||(p[l]=j)}return p};c.defaults={},e.removeCookie=function(n,i){return e.cookie(n)!==undefined&&(e.cookie(n,"",e.extend({},i,{expires:-1})),!e.cookie(n))}});
