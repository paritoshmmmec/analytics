!function(){"use strict";var s=window.location,w=window.document,d=w.currentScript,g=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var n=d&&d.getAttribute("data-include"),r=d&&d.getAttribute("data-exclude");if("pageview"===e){var i=!n||n&&n.split(",").some(p),a=r&&r.split(",").some(p);if(!i||a)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=d.getAttribute("data-domain"),o.r=w.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),l=o.p||{};u.forEach(function(e){var t=e.replace("event-",""),n=d.getAttribute(e);l[t]=l[t]||n}),o.p=l;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function p(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<t.length;n++)e.apply(this,t[n])}();