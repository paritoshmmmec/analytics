!function(){"use strict";var e,t,i,o=window.location,l=window.document,s=l.getElementById("plausible"),c=s.getAttribute("data-api")||(e=s.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function u(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return u("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag")}catch(e){}var i={};i.n=e,i.u=o.href,i.d=s.getAttribute("data-domain"),i.r=l.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props);var n=s.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),a=i.p||{};n.forEach(function(e){var t=e.replace("event-",""),i=s.getAttribute(e);a[t]=a[t]||i}),i.p=a,i.h=1;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}function a(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==o.host&&((i||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}l.addEventListener("click",a),l.addEventListener("auxclick",a);var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var p,d=0;d<r.length;d++)n.apply(this,r[d]);function f(){p=o.pathname,n("pageview")}window.addEventListener("hashchange",f),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){p||"visible"!==l.visibilityState||f()}):f()}();