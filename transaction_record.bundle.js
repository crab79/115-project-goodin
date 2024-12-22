(()=>{"use strict";var n={595:(n,r,e)=>{e.d(r,{A:()=>i});var t=e(354),o=e.n(t),a=e(314),A=e.n(a)()(o());A.push([n.id,'*{margin:0;padding:0;box-sizing:border-box}.header{display:flex;justify-content:space-between;align-items:center;background-color:#e9ecef;padding:10px 20px}.header h2{font-size:2rem;font-weight:700;font-family:"Noto Sans TC",sans-serif;font-weight:700;font-style:normal}.header h2 a{text-decoration:none;color:#000}.header h2 a span{background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);font-weight:800}.header .nav-links{display:flex;gap:20px}.header .nav-links a{text-decoration:none;color:#000;font-size:1.2rem;font-family:"Noto Sans TC",sans-serif;font-weight:400;font-style:normal}.header .nav-links a:hover{color:#2f78ff}.header .nav-links a.active{color:#2f78ff;font-weight:700}.container{margin:3rem 5%;text-align:center}.container .title{font-family:"Noto Sans TC",sans-serif;font-weight:700;font-style:normal;font-size:2rem;margin-bottom:2rem}.container .table-container{overflow-x:auto;margin-top:10px}.container .table-container table{width:100%;border-collapse:collapse;box-shadow:rgba(0,0,0,.15) 0px 4px 12px}.container .table-container table thead{background-color:#f5f5f5}.container .table-container table thead th{padding:20px;font-size:1.2rem;text-align:left;font-family:"Noto Sans TC",sans-serif;font-weight:600;font-style:normal}.container .table-container table tbody tr{background-color:#fff;transition:background-color .3s}.container .table-container table tbody tr:hover{background-color:#f0f8ff}.container .table-container table tbody tr td{padding:15px;font-size:1rem;font-family:"Noto Sans TC",sans-serif;font-weight:400;font-style:normal;border-bottom:1px solid #ddd}',"",{version:3,sources:["webpack://./src/scss/transaction_record.scss"],names:[],mappings:"AAuBA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAIJ,QACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,WACI,cAAA,CACA,eAAA,CA9BJ,qCAAA,CACA,eA8B0B,CA7B1B,iBAAA,CA+BI,aACI,oBAAA,CACA,UAAA,CAEA,kBA9BR,sDAAA,CACA,4BAAA,CACA,oBAAA,CACA,mBAAA,CA6BY,eAAA,CAKZ,mBACI,YAAA,CACA,QAAA,CAEA,qBACI,oBAAA,CACA,UAAA,CACA,gBAAA,CAnDR,qCAAA,CACA,eAFyB,CAGzB,iBAAA,CAoDQ,2BACI,aA/DG,CAkEP,4BACI,aAnEG,CAoEH,eAAA,CAOhB,WACI,cAAA,CACA,iBAAA,CAEA,kBAvEA,qCAAA,CACA,eAuE0B,CAtE1B,iBAAA,CAuEI,cAAA,CACA,kBAAA,CAIJ,4BACI,eAAA,CACA,eAAA,CAEA,kCACI,UAAA,CACA,wBAAA,CACA,uCAAA,CAEA,wCACI,wBA9FE,CAgGF,2CACI,YAAA,CACA,gBAAA,CACA,eAAA,CA7FhB,qCAAA,CACA,eA6FsC,CA5FtC,iBAAA,CAiGY,2CACI,qBAzGL,CA0GK,+BAAA,CAEA,iDACI,wBA5GN,CA+GE,8CACI,YAAA,CACA,cAAA,CA7GpB,qCAAA,CACA,eAFyB,CAGzB,iBAAA,CA6GoB,4BAAA",sourcesContent:['// 變數設定\r\n$main-theme-color: #2f78ff;\r\n$hover-color: #3b3b3b;\r\n$table-header-bg: #f5f5f5;\r\n$table-row-bg: #ffffff;\r\n$table-row-hover: #f0f8ff;\r\n\r\n// 字體 Mixin\r\n@mixin noto-sans-tc($weight: 400) {\r\n    font-family: "Noto Sans TC", sans-serif;\r\n    font-weight: $weight;\r\n    font-style: normal;\r\n}\r\n\r\n// 漸層文字 Mixin\r\n@mixin textGradient($color: $main-theme-color) {\r\n    background: linear-gradient(to right, $color, $hover-color);\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n}\r\n\r\n// Reset\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n// Header 樣式\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #e9ecef;\r\n    padding: 10px 20px;\r\n\r\n    h2 {\r\n        font-size: 2rem;\r\n        font-weight: 700;\r\n        @include noto-sans-tc(700);\r\n\r\n        a {\r\n            text-decoration: none;\r\n            color: black;\r\n\r\n            span {\r\n                @include textGradient();\r\n                font-weight: 800;\r\n            }\r\n        }\r\n    }\r\n\r\n    .nav-links {\r\n        display: flex;\r\n        gap: 20px;\r\n\r\n        a {\r\n            text-decoration: none;\r\n            color: black;\r\n            font-size: 1.2rem;\r\n            @include noto-sans-tc();\r\n\r\n            &:hover {\r\n                color: $main-theme-color;\r\n            }\r\n\r\n            &.active {\r\n                color: $main-theme-color;\r\n                font-weight: 700;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// 主內容樣式\r\n.container {\r\n    margin: 3rem 5%;\r\n    text-align: center;\r\n\r\n    .title {\r\n        @include noto-sans-tc(700);\r\n        font-size: 2rem;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    // 表格區塊\r\n    .table-container {\r\n        overflow-x: auto;\r\n        margin-top: 10px;\r\n\r\n        table {\r\n            width: 100%;\r\n            border-collapse: collapse;\r\n            box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;\r\n\r\n            thead {\r\n                background-color: $table-header-bg;\r\n\r\n                th {\r\n                    padding: 20px;\r\n                    font-size: 1.2rem;\r\n                    text-align: left;\r\n                    @include noto-sans-tc(600);\r\n                }\r\n            }\r\n\r\n            tbody {\r\n                tr {\r\n                    background-color: $table-row-bg;\r\n                    transition: background-color 0.3s;\r\n\r\n                    &:hover {\r\n                        background-color: $table-row-hover;\r\n                    }\r\n\r\n                    td {\r\n                        padding: 15px;\r\n                        font-size: 1rem;\r\n                        @include noto-sans-tc();\r\n                        border-bottom: 1px solid #ddd;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n'],sourceRoot:""}]);const i=A},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&A[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},A=[],i=0;i<n.length;i++){var c=n[i],s=t.base?c[0]+t.base:c[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var d=e(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(p);else{var C=o(p,t);t.byIndex=i,r.splice(i,0,{identifier:f,updater:C,references:1})}A.push(f)}return A}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var i=e(a[A]);r[i].references--}for(var c=t(n,o),s=0;s<a.length;s++){var l=e(a[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var t=e(72),o=e.n(t),a=e(825),A=e.n(a),i=e(659),c=e.n(i),s=e(56),l=e.n(s),f=e(540),d=e.n(f),p=e(113),C=e.n(p),u=e(595),b={};b.styleTagTransform=C(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=d(),o()(u.A,b),u.A&&u.A.locals&&u.A.locals})();
//# sourceMappingURL=transaction_record.bundle.js.map