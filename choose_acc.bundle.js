(()=>{"use strict";var n={217:(n,r,e)=>{e.d(r,{A:()=>A});var o=e(354),t=e.n(o),a=e(314),c=e.n(a)()(t());c.push([n.id,"/* 基本設置 */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, sans-serif;\n}\n\nbody {\n    background-color: #0d1b2a;\n    color: #e0e1dd;\n    text-align: center;\n    padding: 20px;\n}\n\n/* 頁面標題 */\nheader h1 {\n    background-color: #111;\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n    display: inline-block;\n}\n\nheader h1 .real-time {\n    background-color: #ff7f00;\n    color: #000;\n    padding: 4px 10px;\n    border-radius: 5px;\n    margin-left: 5px;\n}\n\n/* 按鈕樣式 */\nbutton {\n    padding: 10px 15px;\n    margin: 5px;\n    background-color: #ff7f00;\n    color: #000;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #e76f00;\n}\n\n.small-button {\n    background-color: #00b4d8;\n    color: #000;\n    font-size: 0.9em;\n    padding: 5px 10px;\n}\n\n.back-button {\n    background-color: #555;\n    color: #fff;\n}\n\n/* 卡片樣式 */\n#stocks-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 20px;\n}\n\n.stock {\n    background-color: #1b263b;\n    border: 1px solid #415a77;\n    border-radius: 10px;\n    padding: 15px;\n    width: 250px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n    transition: transform 0.3s ease;\n}\n\n.stock:hover {\n    transform: translateY(-5px);\n}\n\n.stock h2 {\n    color: #ff7f00;\n}\n\n.positive {\n    color: #4caf50;\n}\n\n.negative {\n    color: #e63946;\n}\n","",{version:3,sources:["webpack://./src/scss/choose_acc.css"],names:[],mappings:"AAAA,SAAS;AACT;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,aAAa;AACjB;;AAEA,SAAS;AACT;IACI,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,wCAAwC;IACxC,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA,SAAS;AACT;IACI,kBAAkB;IAClB,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;AAEA,SAAS;AACT;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,wCAAwC;IACxC,+BAA+B;AACnC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB",sourcesContent:["/* 基本設置 */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #0d1b2a;\r\n    color: #e0e1dd;\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n/* 頁面標題 */\r\nheader h1 {\r\n    background-color: #111;\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\r\n    display: inline-block;\r\n}\r\n\r\nheader h1 .real-time {\r\n    background-color: #ff7f00;\r\n    color: #000;\r\n    padding: 4px 10px;\r\n    border-radius: 5px;\r\n    margin-left: 5px;\r\n}\r\n\r\n/* 按鈕樣式 */\r\nbutton {\r\n    padding: 10px 15px;\r\n    margin: 5px;\r\n    background-color: #ff7f00;\r\n    color: #000;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #e76f00;\r\n}\r\n\r\n.small-button {\r\n    background-color: #00b4d8;\r\n    color: #000;\r\n    font-size: 0.9em;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.back-button {\r\n    background-color: #555;\r\n    color: #fff;\r\n}\r\n\r\n/* 卡片樣式 */\r\n#stocks-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.stock {\r\n    background-color: #1b263b;\r\n    border: 1px solid #415a77;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    width: 250px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.stock:hover {\r\n    transform: translateY(-5px);\r\n}\r\n\r\n.stock h2 {\r\n    color: #ff7f00;\r\n}\r\n\r\n.positive {\r\n    color: #4caf50;\r\n}\r\n\r\n.negative {\r\n    color: #e63946;\r\n}\r\n"],sourceRoot:""}]);const A=c},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(c[s]=!0)}for(var i=0;i<n.length;i++){var d=[].concat(n[i]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),r.push(d))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},c=[],A=0;A<n.length;A++){var s=n[A],i=o.base?s[0]+o.base:s[0],d=a[i]||0,l="".concat(i," ").concat(d);a[i]=d+1;var p=e(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=t(u,o);o.byIndex=A,r.splice(A,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var A=e(a[c]);r[A].references--}for(var s=o(n,t),i=0;i<a.length;i++){var d=e(a[i]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=e(72),t=e.n(o),a=e(825),c=e.n(a),A=e(659),s=e.n(A),i=e(56),d=e.n(i),l=e(540),p=e.n(l),u=e(113),f=e.n(u),g=e(217),B={};function b(){document.getElementById("account-selection").style.display="block",document.getElementById("account-functions").style.display="none",document.getElementById("stock-search").style.display="none"}B.styleTagTransform=f(),B.setAttributes=d(),B.insert=s().bind(null,"head"),B.domAPI=c(),B.insertStyleElement=p(),t()(g.A,B),g.A&&g.A.locals&&g.A.locals,window.showAccountSelection=b,window.showAccountFunctions=function(){document.getElementById("account-selection").style.display="none",document.getElementById("account-functions").style.display="block",document.getElementById("stock-search").style.display="none"},window.showStockSearch=function(){document.getElementById("account-functions").style.display="none",document.getElementById("stock-search").style.display="block"},document.getElementById("search-btn").addEventListener("click",(()=>{!function(n="",r="all"){fetch(`https://stock-api-vgoy.onrender.com/get_stock_data?query=${n}&type=${r}`).then((n=>{if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return n.json()})).then((n=>{const r=document.getElementById("stocks-container");r.innerHTML="",0!==n.length?n.forEach((n=>{const e=document.createElement("div");e.classList.add("stock"),e.innerHTML=`\n                    <h2>${n.name} (${n.code})</h2>\n                    <p>類股: ${n.sector}</p>\n                    <p>標籤: ${n.tag}</p>\n                    <p>最新價格: ${n.price}</p>\n                    <p class="${n.change>=0?"positive":"negative"}">\n                        漲跌幅: ${n.change}\n                    </p>\n                `,r.appendChild(e)})):r.innerHTML='<p style="color: red;">沒有符合條件的股票資料！</p>'})).catch((n=>{console.error("Error fetching stock data:",n),document.getElementById("stocks-container").innerHTML='<p style="color: red;">無法取得股票資料，請稍後再試。</p>'}))}(document.getElementById("search-input").value.trim(),document.getElementById("search-type").value)})),b()})();
//# sourceMappingURL=choose_acc.bundle.js.map