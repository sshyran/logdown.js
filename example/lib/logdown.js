/**
 * logdown - Debug utility with markdown support that runs on browser and server
 *
 * @version v1.4.4
 * @link https://github.com/caiogondim/logdown
 * @author Caio Gondim <me@caiogondim.com> (http://caiogondim.com)
 * @license MIT
 */
!function(){"use strict";function e(o){if(!(this instanceof e))return new e(o);o=o||{};var n=void 0===o.prefix?"":o.prefix;return n=a(n),n&&c(n,g)?p(n,g):(this.alignOuput=Boolean(o.alignOuput),this.markdown=void 0===o.markdown||o.markdown,this.prefix=n,g.push(this),r(g),d()?(this.prefixColor=m[h%m.length],h+=1):f()&&(this.prefixColor=E()),this)}function r(e){var r=e.sort(function(e,r){return r.prefix.length-e.prefix.length})[0];e.forEach(function(e){if(e.alignOuput){var o=new Array(Math.max(r.prefix.length-e.prefix.length+1,0)).join(" ");e.prefix=e.prefix+o}})}function o(e){for(var r=[],o=n(e);o;)e=e.replace(o.rule.regexp,o.rule.replacer),d()&&(r.push(o.rule.style),r.push("")),o=n(e);return{text:e,styles:r}}function n(e){var r=[],o=[];return d()?o=[{regexp:/\*([^\*]+)\*/,replacer:function(e,r){return"%c"+r+"%c"},style:"font-weight:bold;"},{regexp:/_([^_]+)_/,replacer:function(e,r){return"%c"+r+"%c"},style:"font-style:italic;"},{regexp:/`([^`]+)`/,replacer:function(e,r){return"%c"+r+"%c"},style:"background:#FDF6E3; color:#586E75; padding:1px 5px; border-radius:4px;"}]:f()&&(o=[{regexp:/\*([^\*]+)\*/,replacer:function(e,r){return"["+b.modifiers.bold[0]+"m"+r+"["+b.modifiers.bold[1]+"m"}},{regexp:/_([^_]+)_/,replacer:function(e,r){return"["+b.modifiers.italic[0]+"m"+r+"["+b.modifiers.italic[1]+"m"}},{regexp:/`([^`]+)`/,replacer:function(e,r){return"["+b.bgColors.bgYellow[0]+"m["+b.colors.black[0]+"m "+r+" ["+b.colors.black[1]+"m["+b.bgColors.bgYellow[1]+"m"}}]),o.forEach(function(o){var n=e.match(o.regexp);n&&r.push({rule:o,match:n})}),0===r.length?null:(r.sort(function(e,r){return e.match.index-r.match.index}),r[0])}function t(e,r){var n,t=[];return r.prefix?u()?(t.push("%c"+r.prefix+"%c "),t.push("color:"+r.prefixColor+"; font-weight:bold;","")):t.push("["+r.prefix+"] "):t.push(""),"string"==typeof e[0]?r.markdown&&u()?(n=o(e[0]),t[0]=t[0]+n.text,t=t.concat(n.styles)):t[0]=t[0]+e[0]:t[0]=e[0],e.length>1&&(t=t.concat(e.splice(1))),t}function i(e,r){var n,t="";return r.prefix&&(t=u()?"["+r.prefixColor[0]+"m["+b.modifiers.bold[0]+"m"+r.prefix+"["+b.modifiers.bold[1]+"m["+r.prefixColor[1]+"m ":"["+r.prefix+"] "),"string"==typeof e?t+=r.markdown?o(e).text:e:n=e,{parsedText:t,styles:[],notText:n}}function l(r){var o=null;"undefined"!=typeof process&&void 0!==process.env&&0===y.length&&(void 0!==process.env.NODE_DEBUG&&""!==process.env.NODE_DEBUG?o="NODE_DEBUG":void 0!==process.env.DEBUG&&""!==process.env.DEBUG&&(o="DEBUG"),o&&(e.disable("*"),process.env[o].split(",").forEach(function(r){e.enable(r)})));var n=!1;return y.forEach(function(e){"enable"===e.type&&e.regExp.test(r.prefix)?n=!1:"disable"===e.type&&e.regExp.test(r.prefix)&&(n=!0)}),n}function s(e){return new RegExp("^"+e.replace(/\*/g,".*?")+"$")}function c(e,r){var o=!1;return r.forEach(function(r){if(r.prefix===e)return void(o=!0)}),o}function p(e,r){var o;return r.forEach(function(r){if(r.prefix===e)return void(o=r)}),o}function a(e){return"string"==typeof e?e.replace(/%c/g,""):e}function u(){if(d()){var e="WebkitAppearance"in document.documentElement.style,r=window.console&&(console.firebug||console.exception&&console.table),o=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31;return e||r||o}if(f())return!(process.stdout&&!process.stdout.isTTY)&&("win32"===process.platform||("COLORTERM"in process.env||"dumb"!==process.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)))}function f(){return"undefined"!=typeof module&&"undefined"!=typeof module.exports}function d(){return"undefined"!=typeof window}function x(e){return e}var g=[],h=0,m=["#B58900","#CB4B16","#DC322F","#D33682","#6C71C4","#268BD2","#2AA198","#859900"],b={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}},y=[];e.enable=function(){Array.prototype.forEach.call(arguments,function(r){"-"===r[0]&&e.disable(r.substr(1));var o=s(r);"*"===r?y=[]:y.push({type:"enable",regExp:o})})},e.disable=function(){Array.prototype.forEach.call(arguments,function(r){"-"===r[0]&&e.enable(r.substr(1));var o=s(r);"*"===r?y=[{type:"disable",regExp:o}]:y.push({type:"disable",regExp:o})})};var v=["debug","log","info","warn","error"];v.forEach(function(r){e.prototype[r]=function(){if(!l(this)){var e,o=[],n=Array.prototype.slice.call(arguments,0);if(d())e=t(n,this),Function.prototype.apply.call(console[r]||console.log,console,e);else if(f()){var s=Array.prototype.slice.call(arguments,0).join(" ");s=x(s),e=i(s,this),"warn"===r?e.parsedText="["+b.colors.yellow[0]+"m⚠["+b.colors.yellow[1]+"m "+e.parsedText:"error"===r?e.parsedText="["+b.colors.red[0]+"m✖["+b.colors.red[1]+"m "+e.parsedText:"info"===r?e.parsedText="["+b.colors.blue[0]+"mℹ["+b.colors.blue[1]+"m "+e.parsedText:"debug"===r&&(e.parsedText="["+b.colors.gray[0]+"m🐛["+b.colors.gray[1]+"m "+e.parsedText),o.push(e.parsedText),e.notText&&o.push(e.notText),(console[r]||console.log).apply(console,o)}}}});var E=function(){var e=0,r=[[31,39],[32,39],[33,39],[34,39],[35,39],[36,39]];return function(){return r[(e+=1)%r.length]}}();f()?module.exports=e:d()&&(window.Logdown=e)}();