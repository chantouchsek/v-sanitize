"use strict";var _sanitizeHtml=_interopRequireDefault(require("sanitize-html"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.FILTER_STRIP=exports.FILTER_NOTHING=exports.FILTER_INLINE=exports.FILTER_BASIC=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var FILTER_BASIC=_sanitizeHtml["default"].defaults;exports.FILTER_BASIC=FILTER_BASIC;var FILTER_INLINE={allowedTags:["a","b","br","code","em","i","span","strike","strong","u"],allowedAttributes:{a:["href","target"],span:["style"]},selfClosing:["br"],allowedSchemes:["ftp","http","https","mailto"],parser:{decodeEntities:!0}};exports.FILTER_INLINE=FILTER_INLINE;var FILTER_NOTHING={allowedTags:!1,allowedAttributes:!1};exports.FILTER_NOTHING=FILTER_NOTHING;var FILTER_STRIP={allowedTags:[],allowedAttributes:[]};exports.FILTER_STRIP=FILTER_STRIP;var VSanitize={install:function install(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=b,d=c.name,e=void 0===d?"sanitize":d;a.prototype.$sanitize=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;return(0,_sanitizeHtml["default"])(a,b||c)},a.directive(e,function(a,b){b.value!==b.oldValue&&(Array.isArray(b.value)?a.innerHTML=(0,_sanitizeHtml["default"])(b.value[1],b.value[0]):b.modifiers.strip?a.innerHTML=(0,_sanitizeHtml["default"])(b.value,FILTER_STRIP):b.modifiers.basic?a.innerHTML=(0,_sanitizeHtml["default"])(b.value,c):b.modifiers.inline?a.innerHTML=(0,_sanitizeHtml["default"])(b.value,FILTER_INLINE):b.modifiers.nothing?a.innerHTML=(0,_sanitizeHtml["default"])(b.value,FILTER_NOTHING):a.innerHTML=(0,_sanitizeHtml["default"])(b.value,c))})},defaults:FILTER_BASIC},_default=VSanitize;exports["default"]=_default;
