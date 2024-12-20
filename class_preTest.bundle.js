(()=>{"use strict";var n={195:(n,r,e)=>{e.d(r,{A:()=>a});var t=e(354),o=e.n(t),A=e(314),i=e.n(A)()(o());i.push([n.id,'*{margin:0;padding:0;box-sizing:border-box}.header{display:flex;justify-content:space-between;align-items:center;background-color:#e9ecef;padding:10px 20px}.header h2{font-size:1.8rem;font-weight:700;font-family:"Noto Sans TC",sans-serif;font-weight:700;font-style:normal}.header h2 a{text-decoration:none;color:#000}.header h2 a span{background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);font-weight:800}.header .nav-links{display:flex;gap:20px}.header .nav-links a{text-decoration:none;color:#000;font-size:1.2rem;transition:color .3s}.header .nav-links a:hover{color:#2f78ff}.wrapper{display:flex;align-items:flex-start;gap:160px;margin:60px 5%}.wrapper .left-section{margin-left:50px;display:flex;flex-direction:column;align-items:center;text-align:center}.wrapper .left-section .circle{width:100px;height:100px;background-color:#9fb6cd;border-radius:50%;margin-bottom:10px}.wrapper .left-section h3{font-family:"Noto Sans TC",sans-serif;font-weight:700;font-style:normal;font-size:1.5rem;color:#333}.wrapper .question-section{flex:1;display:flex;flex-direction:column;gap:20px}.wrapper .question-section .question-box{background-color:#d3d3d3;border-radius:10px;padding:20px}.wrapper .question-section .question-box p{margin-bottom:10px;font-size:1.2rem;font-family:"Noto Sans TC",sans-serif;font-weight:600;font-style:normal}.wrapper .question-section .question-box label{margin-right:20px;font-size:1rem;font-family:"Noto Sans TC",sans-serif;font-weight:400;font-style:normal}.next-button{text-align:right;margin:20px 5%}.next-button button{background-color:#2f78ff;color:#fff;border:none;padding:10px 20px;font-size:1rem;border-radius:5px;cursor:pointer}.next-button button:hover{background-color:#0058fb}',"",{version:3,sources:["webpack://./src/scss/class_preTest.scss"],names:[],mappings:"AAoBA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAIJ,QACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,WACI,gBAAA,CACA,eAAA,CA9BJ,qCAAA,CACA,eA8B0B,CA7B1B,iBAAA,CA+BI,aACI,oBAAA,CACA,UAAA,CAGA,kBA/BR,sDAAA,CACA,4BAAA,CACA,oBAAA,CACA,mBAAA,CA8BY,eAAA,CAMZ,mBACI,YAAA,CACA,QAAA,CAEA,qBACI,oBAAA,CACA,UAAA,CACA,gBAAA,CACA,oBAAA,CAEA,2BACI,aA/DG,CAsEnB,SACI,YAAA,CACA,sBAAA,CACA,SAAA,CACA,cAAA,CAEA,uBACI,gBAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,iBAAA,CAEA,+BACI,WAAA,CACA,YAAA,CACA,wBApFM,CAqFN,iBAAA,CACA,kBAAA,CAGJ,0BArFJ,qCAAA,CACA,eAqF8B,CApF9B,iBAAA,CAqFQ,gBAAA,CACA,UAAA,CAIR,2BACI,MAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CAEA,yCACI,wBAAA,CACA,kBAAA,CACA,YAAA,CAEA,2CACI,kBAAA,CACA,gBAAA,CAzGZ,qCAAA,CACA,eAyGkC,CAxGlC,iBAAA,CA2GQ,+CACI,iBAAA,CACA,cAAA,CA/GZ,qCAAA,CACA,eAFyB,CAGzB,iBAAA,CAqHJ,aACI,gBAAA,CACA,cAAA,CAEA,oBACI,wBAlIW,CAmIX,UAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,cAAA,CAEA,0BACI,wBAAA",sourcesContent:['$main-theme-color: #2f78ff; // 主色調\r\n$hover-color: #3b3b3b;     // 漸層結束顏色\r\n$circle-bg-color: #9fb6cd; // 藍色圓背景\r\n\r\n// Mixin: 字體設定\r\n@mixin noto-sans-tc($weight: 400) {\r\n    font-family: "Noto Sans TC", sans-serif;\r\n    font-weight: $weight;\r\n    font-style: normal;\r\n}\r\n\r\n// Mixin: 漸層文字\r\n@mixin textGradient($color: $main-theme-color) {\r\n    background: linear-gradient(to right, $color, $hover-color);\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n}\r\n\r\n// Reset\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n// Header \r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #e9ecef;\r\n    padding: 10px 20px;\r\n\r\n    h2 {\r\n        font-size: 1.8rem;       // 字體大小\r\n        font-weight: 700;      // 粗體設定\r\n        @include noto-sans-tc(700); // 字型設定\r\n\r\n        a {\r\n            text-decoration: none;\r\n            color: black;\r\n\r\n            // 漸層字樣 "Goodin"\r\n            span {\r\n                @include textGradient();\r\n                font-weight: 800; // 特別加粗\r\n            }\r\n        }\r\n    }\r\n\r\n    // 導覽連結\r\n    .nav-links {\r\n        display: flex;\r\n        gap: 20px;\r\n\r\n        a {\r\n            text-decoration: none;\r\n            color: black;\r\n            font-size: 1.2rem;\r\n            transition: color 0.3s;\r\n\r\n            &:hover {\r\n                color: $main-theme-color;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// 主內容\r\n.wrapper {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 160px;\r\n    margin: 60px 5%;\r\n\r\n    .left-section {\r\n        margin-left: 50px; \r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        text-align: center;\r\n\r\n        .circle {\r\n            width: 100px;\r\n            height: 100px;\r\n            background-color: $circle-bg-color;\r\n            border-radius: 50%;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        h3 {\r\n            @include noto-sans-tc(700);\r\n            font-size: 1.5rem;\r\n            color: #333;\r\n        }\r\n    }\r\n\r\n    .question-section {\r\n        flex: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 20px;\r\n\r\n        .question-box {\r\n            background-color: #d3d3d3;\r\n            border-radius: 10px;\r\n            padding: 20px;\r\n\r\n            p {\r\n                margin-bottom: 10px;\r\n                font-size: 1.2rem;\r\n                @include noto-sans-tc(600);\r\n            }\r\n\r\n            label {\r\n                margin-right: 20px;\r\n                font-size: 1rem;\r\n                @include noto-sans-tc();\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// 下一頁按鈕\r\n.next-button {\r\n    text-align: right;\r\n    margin: 20px 5%;\r\n\r\n    button {\r\n        background-color: $main-theme-color;\r\n        color: #fff;\r\n        border: none;\r\n        padding: 10px 20px;\r\n        font-size: 1rem;\r\n        border-radius: 5px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n            background-color: darken($main-theme-color, 10%);\r\n        }\r\n    }\r\n}\r\n'],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(o," */");return[r].concat([A]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var A={},i=[],a=0;a<n.length;a++){var c=n[a],s=t.base?c[0]+t.base:c[0],l=A[s]||0,p="".concat(s," ").concat(l);A[s]=l+1;var d=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var C=o(f,t);t.byIndex=a,r.splice(a,0,{identifier:p,updater:C,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var A=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=e(A[i]);r[a].references--}for(var c=t(n,o),s=0;s<A.length;s++){var l=e(A[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}A=c}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var A=r[t]={id:t,exports:{}};return n[t](A,A.exports,e),A.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var t=e(72),o=e.n(t),A=e(825),i=e.n(A),a=e(659),c=e.n(a),s=e(56),l=e.n(s),p=e(540),d=e.n(p),f=e(113),C=e.n(f),u=e(195),g={};g.styleTagTransform=C(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),o()(u.A,g),u.A&&u.A.locals&&u.A.locals})();
//# sourceMappingURL=class_preTest.bundle.js.map