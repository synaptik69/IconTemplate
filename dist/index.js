"use strict";var _react=require("react");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var style={display:"inline-block",stroke:"currentColor",fill:"currentColor"},IcoMoon=function(a){var b=a.iconSet,c=a.icon,d=a.size,e=a.disableFill,f=a.removeInlineStyle,g=_objectWithoutProperties(a,["iconSet","icon","size","disableFill","removeInlineStyle"]);if(!b||!c)return console.warn("The \"iconSet\" and \"icon\" props are required."),null;var h=b.icons.find(function(a){return a.properties.name===c});if(!h)return console.warn("\"".concat(c,"\" icon not found.")),null;d&&(style.width=d,style.height=d),g.style=_objectSpread({},f?{}:style,g.style||{});var i=h.icon.width,j=void 0===i?"1024":i;g.viewBox="0 0 ".concat(j," ").concat(j);var k=h.icon.paths.map(function(a,b){return(0,_react.createElement)("path",_objectSpread({d:a,key:c+b},e?{}:h.icon.attrs[b]))});return(0,_react.createElement)("svg",g,k)},_default=IcoMoon;exports.default=_default;