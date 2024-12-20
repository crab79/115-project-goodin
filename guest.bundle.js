(()=>{"use strict";var n={545:(n,A,e)=>{e.d(A,{A:()=>a});var t=e(354),o=e.n(t),r=e(314),i=e.n(r)()(o());i.push([n.id,'*{margin:0;padding:0}html{height:100%}body{font-size:12px;display:flex;flex-direction:column;min-height:100%;margin:0;padding:0}.header{display:flex;justify-content:space-between;align-items:center;width:100%;height:10vh;background-color:#fff;box-shadow:rgba(0,0,0,.25) 1px 5px 5px;position:fixed;top:0}.header #title{background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);font-size:2.5rem;font-weight:800;width:30%;min-height:10%;text-align:center;text-wrap:nowrap}.header #title a{text-decoration:none;background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0)}.header .nav{display:flex;margin-left:40%;gap:1rem;align-self:center}.header .nav a{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;font-size:1.5rem;appearance:none;background-color:rgba(0,0,0,0);border:none;color:#3b3b3b;cursor:pointer;outline:none;padding:16px 24px;text-align:center;text-decoration:none;user-select:none;-webkit-user-select:none;width:fit-content;align-self:center}.header .nav a:disabled{pointer-events:none}.header .nav a:hover{color:#fff;background-color:#1a1a1a;box-shadow:rgba(0,0,0,.25) 0 8px 15px;border-radius:15px}.header .nav a:active{box-shadow:none}.content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;margin-top:15vh;margin-bottom:10vh;height:80vh;overflow:hidden}.content .intro,.content .simulator{display:flex;flex-direction:column;justify-content:center;align-items:center}.content .buttons{margin-top:2rem;display:flex;gap:2rem}.content h2{-webkit-background-clip:text;background-clip:text;color:#000;font-size:2.5rem;font-weight:800;height:fit-content;text-align:center;padding:16px}.content p{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000;font-size:1.5rem;font-weight:1rem;height:fit-content;text-align:center;padding:16px}.content .title{display:flex;align-items:center}.content .title i{font-size:5rem}.content hr{width:70%}.content button{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000;font-size:1.3rem;font-weight:1rem;height:fit-content;text-align:center;padding:16px;text-decoration:none;border:none}.content button:disabled{pointer-events:none}.content button:hover{color:#fff;background-color:#1a1a1a;box-shadow:rgba(0,0,0,.25) 0 8px 15px;border-radius:15px;cursor:pointer}.content button:active{box-shadow:none}.footer{display:flex;justify-content:left;align-items:center;height:10vh;box-shadow:rgba(0,0,0,.25) 0px -5px 5px;overflow:hidden}.footer #title{background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);font-size:2.5rem;font-weight:800;width:30%;height:8vh;text-align:center;text-wrap:nowrap}.footer .info{font-size:1.2rem;font-weight:500;width:30%;height:fit-content;text-align:left;text-wrap:nowrap;font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000}.footer a#footer-link{margin-left:20%;font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;font-size:1.2rem;appearance:none;background-color:rgba(0,0,0,0);border:none;color:#3b3b3b;cursor:pointer;outline:none;padding:16px 24px;text-align:center;text-decoration:none;user-select:none;-webkit-user-select:none;width:fit-content;align-self:center}.footer a:disabled#footer-link{pointer-events:none}.footer a:hover#footer-link{color:#fff;background-color:#1a1a1a;box-shadow:rgba(0,0,0,.25) 0 8px 15px;border-radius:15px}.footer a:active#footer-link{box-shadow:none}',"",{version:3,sources:["webpack://./src/scss/guest.scss"],names:[],mappings:"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",sourcesContent:['$main-theme-color: #2f78ff;\n\n@mixin h2{\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: black;\n\n    font-size: 2.5rem;\n    font-weight: 800;\n    height: fit-content;\n    text-align: center;\n    padding: 16px;\n}\n\n@mixin text($size:1rem){\n    @include noto-sans-tc();\n    color: #000000;\n    font-size: $size;\n    font-weight: 1rem;\n    height: fit-content;\n    text-align: center;\n    padding: 16px;\n}\n\n@mixin input{\n    @include noto-sans-tc();\n    color: #000000;\n    font-size: $size;\n    font-weight: 1rem;\n    width: calc(30%);\n    height: fit-content;\n    text-align: center;\n    padding: 16px;\n}\n\n@mixin noto-sans-tc($weight: 500) {\n    font-family: "Noto Sans TC", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: $weight;\n    font-style: normal;\n}\n@mixin textGradient($color: $main-theme-color) {\n    background: linear-gradient(to right, $color, #3b3b3b);\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml{\n    height: 100%;\n}\n\nbody {\n    font-size: 12px;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 10vh;\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.25) 1px 5px 5px;\n    position: fixed;\n    top: 0;\n\n    #title {\n        @include textGradient();\n        font-size: 2.5rem;\n        font-weight: 800;\n        width: 30%;\n        min-height: 10%;\n        text-align: center;\n        text-wrap: nowrap;\n        a{\n            text-decoration: none;\n            @include textGradient();\n        }\n    }\n\n    .nav {\n        display: flex;\n        margin-left: 40%;\n        gap: 1rem;\n        align-self: center;\n        a {\n            @include noto-sans-tc();\n            font-size: 1.5rem;\n            appearance: none;\n            background-color: transparent;\n            border: none;\n            color: #3b3b3b;\n            cursor: pointer;\n            outline: none;\n            padding: 16px 24px;\n            text-align: center;\n            text-decoration: none;\n            user-select: none;\n            -webkit-user-select: none;\n            width: fit-content;\n            align-self: center;\n        }\n\n        a:disabled {\n            pointer-events: none;\n        }\n\n        a:hover {\n            color: #fff;\n            background-color: #1a1a1a;\n            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n            border-radius: 15px;\n        }\n\n        a:active {\n            box-shadow: none;\n        }\n    }\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 15vh;\n    margin-bottom: 10vh;\n    height: 80vh;\n    overflow: hidden;\n    .intro, .simulator{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .buttons{\n        margin-top: 2rem;\n        display: flex;\n        gap: 2rem;\n    }\n\n    h2{\n        @include h2();\n    }\n\n    p{\n        @include text(1.5rem);\n    }\n\n    .title{\n        display: flex;\n        align-items: center;\n        i{\n            font-size:5rem;\n        }\n    }\n\n    hr{\n        width: 70%;\n    }\n\n    button{\n        @include text(1.3rem);\n        text-decoration: none;\n        border: none;\n    }  \n    button:disabled {\n        pointer-events: none;\n    }\n    button:hover {\n        color: #fff;\n        background-color: #1a1a1a;\n        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n        border-radius: 15px;\n        cursor: pointer;\n    }\n\n    button:active {\n        box-shadow: none;\n    }\n}\n\n.footer{\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    height: 10vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px -5px 5px;\n    overflow: hidden;\n    #title{\n        @include textGradient($main-theme-color);\n        font-size: 2.5rem;\n        font-weight: 800;\n        width: 30%;\n        height: 8vh;\n        text-align: center;\n        text-wrap: nowrap;\n    }\n    .info{\n        font-size: 1.2rem;\n        font-weight: 500;\n        width: 30%;\n        height: fit-content;\n        text-align: left;\n        text-wrap: nowrap;\n\n        @include noto-sans-tc();\n        color: #000000;\n    }\n     a#footer-link {\n        margin-left: 20%;\n        @include noto-sans-tc();\n        font-size: 1.2rem;\n        appearance: none;\n        background-color: transparent;\n        border: none;\n        color: #3b3b3b;\n        cursor: pointer;\n        outline: none;\n        padding: 16px 24px;\n        text-align: center;\n        text-decoration: none;\n        user-select: none;\n        -webkit-user-select: none;\n        width: fit-content;\n        align-self: center;\n    }\n\n   a:disabled#footer-link {\n        pointer-events: none;\n    }\n\n    a:hover#footer-link {\n        color: #fff;\n        background-color: #1a1a1a;\n        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n        border-radius: 15px;\n    }\n\n    a:active#footer-link {\n        box-shadow: none;\n    }\n}'],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var A=[];return A.toString=function(){return this.map((function(A){var e="",t=void 0!==A[5];return A[4]&&(e+="@supports (".concat(A[4],") {")),A[2]&&(e+="@media ".concat(A[2]," {")),t&&(e+="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {")),e+=n(A),t&&(e+="}"),A[2]&&(e+="}"),A[4]&&(e+="}"),e})).join("")},A.i=function(n,e,t,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var C=0;C<n.length;C++){var s=[].concat(n[C]);t&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),A.push(s))}},A}},354:n=>{n.exports=function(n){var A=n[1],e=n[3];if(!e)return A;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),r="/*# ".concat(o," */");return[A].concat([r]).join("\n")}return[A].join("\n")}},72:n=>{var A=[];function e(n){for(var e=-1,t=0;t<A.length;t++)if(A[t].identifier===n){e=t;break}return e}function t(n,t){for(var r={},i=[],a=0;a<n.length;a++){var c=n[a],C=t.base?c[0]+t.base:c[0],s=r[C]||0,l="".concat(C," ").concat(s);r[C]=s+1;var d=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)A[d].references++,A[d].updater(f);else{var p=o(f,t);t.byIndex=a,A.splice(a,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function o(n,A){var e=A.domAPI(A);return e.update(n),function(A){if(A){if(A.css===n.css&&A.media===n.media&&A.sourceMap===n.sourceMap&&A.supports===n.supports&&A.layer===n.layer)return;e.update(n=A)}else e.remove()}}n.exports=function(n,o){var r=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var a=e(r[i]);A[a].references--}for(var c=t(n,o),C=0;C<r.length;C++){var s=e(r[C]);0===A[s].references&&(A[s].updater(),A.splice(s,1))}r=c}}},659:n=>{var A={};n.exports=function(n,e){var t=function(n){if(void 0===A[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}A[n]=e}return A[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var A=document.createElement("style");return n.setAttributes(A,n.attributes),n.insert(A,n.options),A}},56:(n,A,e)=>{n.exports=function(n){var A=e.nc;A&&n.setAttribute("nonce",A)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var A=n.insertStyleElement(n);return{update:function(e){!function(n,A,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),A.styleTagTransform(t,n,A.options)}(A,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(A)}}}},113:n=>{n.exports=function(n,A){if(A.styleSheet)A.styleSheet.cssText=n;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(n))}}}},A={};function e(t){var o=A[t];if(void 0!==o)return o.exports;var r=A[t]={id:t,exports:{}};return n[t](r,r.exports,e),r.exports}e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var t in A)e.o(A,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),e.nc=void 0;var t=e(72),o=e.n(t),r=e(825),i=e.n(r),a=e(659),c=e.n(a),C=e(56),s=e.n(C),l=e(540),d=e.n(l),f=e(113),p=e.n(f),g=e(545),u={};u.styleTagTransform=p(),u.setAttributes=s(),u.insert=c().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),o()(g.A,u),g.A&&g.A.locals&&g.A.locals})();
//# sourceMappingURL=guest.bundle.js.map