(()=>{"use strict";var n={167:(n,A,e)=>{e.d(A,{A:()=>a});var t=e(354),o=e.n(t),i=e(314),r=e.n(i)()(o());r.push([n.id,'*{margin:0;padding:0}html{height:100%}body{font-size:12px;display:flex;flex-direction:column;min-height:100%;margin:0;padding:0}.header{display:flex;justify-content:space-between;align-items:center;width:100%;height:10vh;background-color:#fff;box-shadow:rgba(0,0,0,.25) 1px 5px 5px;position:fixed;top:0}.header #title{background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);font-size:2.5rem;font-weight:800;width:30%;min-height:50%;text-align:center;text-wrap:nowrap}.header #title a{text-decoration:none;background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0)}.header .nav{display:flex;margin-right:1rem}.header .nav button{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:700;font-style:normal;font-size:1.5rem;appearance:none;background-color:rgba(0,0,0,0);border:none;color:#3b3b3b;cursor:pointer;outline:none;padding:16px 24px;text-align:center;text-decoration:none;user-select:none;-webkit-user-select:none;width:100%;height:90%;align-self:center}.header .nav button:disabled,.header .nav .menu:disabled{pointer-events:none}.header .nav button:hover,.header .nav .menu:hover,.header .nav .menu_contents a:hover{color:#fff;background-color:#1a1a1a;box-shadow:rgba(0,0,0,.25) 0 8px 15px;border-radius:15px}.header .nav button:active,.header .nav .menu:active{box-shadow:none}.header .nav .menu{width:10%;height:90%;align-self:center;position:absolute;right:1rem}.header .nav .menu_contents{display:none;border-radius:1rem;position:absolute;flex-direction:column;justify-content:center;align-content:center;background-color:#f1f1f1;width:100%;height:15rem;box-shadow:0px 8px 16px 0px rgba(0,0,0,.2)}.header .nav .menu_contents a{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:700;font-style:normal;font-size:1.5rem;appearance:none;background-color:rgba(0,0,0,0);border:none;color:#3b3b3b;cursor:pointer;outline:none;text-decoration:none;gap:1rem;display:flex;justify-content:center;align-items:center;height:3em;text-align:center}.header .nav .menu:hover .menu_contents{display:flex}.content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding-bottom:10vh;padding-top:15vh;height:max-content;overflow:scroll}.content .news,.content .stockRecommend,.content .stockFollow{display:flex;width:50vw;justify-content:center;align-items:center;gap:1rem}.content .userInfo{width:70vw;justify-content:center;align-items:center;gap:1rem;display:flex;text-wrap:nowrap;flex-direction:column}.content .userInfo img{height:5rem}.content .aNews,.content .aStock{background-color:#ececec;box-shadow:rgba(0,0,0,.25) 1px 5px 5px;padding:1rem;display:flex;width:40%;align-items:center;justify-content:center;height:fit-content;gap:1rem;text-wrap:nowrap}.content .aStock{display:flex;align-items:center;justify-content:center;flex-direction:column;text-wrap:nowrap}.content .aStock .bottom_line{display:flex;justify-content:space-between;gap:2rem}.content .aStock .price{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000;font-size:2rem;font-weight:1rem;height:fit-content;text-align:center;padding:16px;color:green;padding:0}.content .aStock p.details{color:green}.content .aStock .price_change{display:flex;font-size:2rem;gap:1rem;color:green}.content .stock_name{background-color:rgba(0,128,0,.247);border-radius:1rem;width:100%;color:#fff}.content .stock_name h2{-webkit-background-clip:text;background-clip:text;color:#000;font-size:1.5rem;font-weight:800;height:fit-content;text-align:center;padding:16px}.content .stockFollow .aStock{height:fit-content;width:50vw}.content .stockFollow .aStock img{width:40vw;height:max-content}.content .buttons{margin-top:2rem;display:flex;gap:2rem}.content hr{width:50%}.content h2{-webkit-background-clip:text;background-clip:text;color:#000;font-size:2.5rem;font-weight:800;height:fit-content;text-align:center;padding:16px;padding:0}.content p{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000;font-size:1.2rem;font-weight:1rem;height:fit-content;text-align:center;padding:16px;padding:1%}.content img{height:3rem}.content button{font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000;font-size:1.3rem;font-weight:1rem;height:fit-content;text-align:center;padding:16px;text-decoration:none;border:none}.content button:disabled{pointer-events:none}.content button:hover{color:#fff;background-color:#1a1a1a;box-shadow:rgba(0,0,0,.25) 0 8px 15px;border-radius:15px;cursor:pointer}.content button:active{box-shadow:none}.footer{display:flex;justify-content:left;align-items:center;height:10vh;box-shadow:rgba(0,0,0,.25) 0px -5px 5px;overflow:hidden}.footer #title{background:linear-gradient(to right, #2f78ff, #3b3b3b);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);font-size:2.5rem;font-weight:800;width:30%;height:8vh;text-align:center;text-wrap:nowrap}.footer .info{font-size:1.2rem;font-weight:500;width:30%;height:fit-content;text-align:left;text-wrap:nowrap;font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;color:#000}.footer a#footer-link{margin-left:20%;font-family:"Noto Sans TC",sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal;font-size:1.2rem;appearance:none;background-color:rgba(0,0,0,0);border:none;color:#3b3b3b;cursor:pointer;outline:none;padding:16px 24px;text-align:center;text-decoration:none;user-select:none;-webkit-user-select:none;width:fit-content;align-self:center}.footer a:disabled#footer-link{pointer-events:none}.footer a:hover#footer-link{color:#fff;background-color:#1a1a1a;box-shadow:rgba(0,0,0,.25) 0 8px 15px;border-radius:15px}.footer a:active#footer-link{box-shadow:none}',"",{version:3,sources:["webpack://./src/scss/user_index.scss"],names:[],mappings:"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",sourcesContent:['$main-theme-color: #2f78ff;\n\n@mixin h2($size:2.5rem){\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: black;\n\n    font-size:$size;\n    font-weight: 800;\n    height: fit-content;\n    text-align: center;\n    padding: 16px;\n}\n\n@mixin text($size:1rem){\n    @include noto-sans-tc();\n    color: #000000;\n    font-size: $size;\n    font-weight: 1rem;\n    height: fit-content;\n    text-align: center;\n    padding: 16px;\n}\n\n@mixin input{\n    @include noto-sans-tc();\n    color: #000000;\n    font-size: $size;\n    font-weight: 1rem;\n    width: calc(30%);\n    height: fit-content;\n    text-align: center;\n    padding: 16px;\n}\n\n@mixin noto-sans-tc($weight: 500) {\n    font-family: "Noto Sans TC", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: $weight;\n    font-style: normal;\n}\n@mixin textGradient($color: $main-theme-color) {\n    background: linear-gradient(to right, $color, #3b3b3b);\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml{\n    height: 100%;\n}\n\nbody {\n    font-size: 12px;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 10vh;\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.25) 1px 5px 5px;\n    position: fixed;\n    top: 0;\n\n    #title {\n        @include textGradient();\n        font-size: 2.5rem;\n        font-weight: 800;\n        width: 30%;\n        min-height: 50%;\n        text-align: center;\n        text-wrap: nowrap;\n        a{\n            text-decoration: none;\n            @include textGradient();\n        }\n    }\n    \n    .nav {\n        display: flex;\n        margin-right: 1rem;\n        \n        button{\n            @include noto-sans-tc($weight: 700);\n            font-size: 1.5rem;\n            appearance: none;\n            background-color: transparent;\n            border: none;\n            color: #3b3b3b;\n            cursor: pointer;\n            outline: none;\n            padding: 16px 24px;\n            text-align: center;\n            text-decoration: none;\n            user-select: none;\n            -webkit-user-select: none;\n            width: 100%;\n            height: 90%;\n            align-self: center;\n        }\n\n        button:disabled, .menu:disabled {\n            pointer-events: none;\n        }\n\n        button:hover, .menu:hover, .menu_contents a:hover{\n            color: #fff;\n            background-color: #1a1a1a;\n            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n            border-radius: 15px;\n        }\n\n        button:active, .menu:active {\n            box-shadow: none;\n        }\n\n        .menu{\n            width: 10%;\n            height: 90%;\n            align-self: center;\n            position: absolute;\n            right: 1rem;\n        }\n\n        .menu_contents{\n            display: none;\n            border-radius: 1rem;\n            position: absolute;\n            flex-direction: column;\n            justify-content: center;\n            align-content: center;\n            background-color: #f1f1f1;\n            width: 100%;\n            height: 15rem;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n        }\n\n        .menu_contents a{\n            @include noto-sans-tc($weight: 700);\n            font-size: 1.5rem;\n            appearance: none;\n            background-color: transparent;\n            border: none;\n            color: #3b3b3b;\n            cursor: pointer;\n            outline: none;\n            text-decoration: none;\n            gap: 1rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 3em;\n            text-align: center;\n        }\n        .menu:hover .menu_contents {\n            display: flex;\n        }\n    }\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    padding-bottom: 10vh;\n    padding-top: 15vh;\n    height: max-content;\n    overflow: scroll;\n    .news, .stockRecommend, .stockFollow{\n        display: flex;\n        width: 50vw;\n        justify-content: center;\n        align-items: center;\n        gap: 1rem;\n    }\n\n    .userInfo{\n        width: 70vw;\n        justify-content: center;\n        align-items: center;\n        gap: 1rem;\n        display: flex;\n        text-wrap: nowrap;\n        flex-direction: column;\n        img{\n            height: 5rem;\n        }\n    }\n\n    .aNews, .aStock{\n        background-color: rgb(236, 236, 236);\n        box-shadow: rgba(0, 0, 0, 0.25) 1px 5px 5px;\n        padding: 1rem;\n        display: flex;\n        width: 40%;\n        align-items: center;\n        justify-content: center;\n        height: fit-content;\n        gap: 1rem;\n        text-wrap: nowrap;\n\n    }\n\n    .aStock{\n        .bottom_line{\n            display: flex;\n            justify-content: space-between;\n            gap: 2rem;\n        }\n        .price{\n            @include text(2rem);\n            color: green;\n            padding: 0;\n        }\n        p.details{\n            color: green;\n        }\n        .price_change{\n            display: flex;\n            font-size: 2rem;\n            gap: 1rem;\n            color: green;\n        }\n        display: flex;\n        align-items:center;\n        justify-content: center;\n        flex-direction: column;\n        text-wrap: nowrap;\n    }\n\n    .stock_name{\n        background-color: rgba(0, 128, 0, 0.247);\n        border-radius: 1rem;\n        width: 100%;\n        color: #fff;\n        h2{\n            \n            @include h2(1.5rem);\n        }\n    }\n\n    .stockFollow .aStock{\n        height: fit-content;\n        width: 50vw;\n        img{\n            width: 40vw;\n            height: max-content;\n        }\n    }\n\n    .buttons{\n        margin-top: 2rem;\n        display: flex;\n        gap: 2rem;\n    }\n\n    hr{\n        width: 50%;\n    }\n\n    h2{\n        @include h2();\n        padding: 0;\n    }\n\n    p{\n        @include text(1.2rem);\n        padding: 1%;\n    }\n\n    img{\n        height: 3rem;\n    }\n\n    button{\n        @include text(1.3rem);\n        text-decoration: none;\n        border: none;\n    }  \n    button:disabled {\n        pointer-events: none;\n    }\n    button:hover {\n        color: #fff;\n        background-color: #1a1a1a;\n        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n        border-radius: 15px;\n        cursor: pointer;\n    }\n\n    button:active {\n        box-shadow: none;\n    }\n}\n\n.footer{\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    height: 10vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px -5px 5px;\n    overflow: hidden;\n    #title{\n        @include textGradient($main-theme-color);\n        font-size: 2.5rem;\n        font-weight: 800;\n        width: 30%;\n        height: 8vh;\n        text-align: center;\n        text-wrap: nowrap;\n    }\n    .info{\n        font-size: 1.2rem;\n        font-weight: 500;\n        width: 30%;\n        height: fit-content;\n        text-align: left;\n        text-wrap: nowrap;\n\n        @include noto-sans-tc();\n        color: #000000;\n    }\n     a#footer-link {\n        margin-left: 20%;\n        @include noto-sans-tc();\n        font-size: 1.2rem;\n        appearance: none;\n        background-color: transparent;\n        border: none;\n        color: #3b3b3b;\n        cursor: pointer;\n        outline: none;\n        padding: 16px 24px;\n        text-align: center;\n        text-decoration: none;\n        user-select: none;\n        -webkit-user-select: none;\n        width: fit-content;\n        align-self: center;\n    }\n\n   a:disabled#footer-link {\n        pointer-events: none;\n    }\n\n    a:hover#footer-link {\n        color: #fff;\n        background-color: #1a1a1a;\n        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n        border-radius: 15px;\n    }\n\n    a:active#footer-link {\n        box-shadow: none;\n    }\n}'],sourceRoot:""}]);const a=r},314:n=>{n.exports=function(n){var A=[];return A.toString=function(){return this.map((function(A){var e="",t=void 0!==A[5];return A[4]&&(e+="@supports (".concat(A[4],") {")),A[2]&&(e+="@media ".concat(A[2]," {")),t&&(e+="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {")),e+=n(A),t&&(e+="}"),A[2]&&(e+="}"),A[4]&&(e+="}"),e})).join("")},A.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var a=0;a<this.length;a++){var C=this[a][0];null!=C&&(r[C]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&r[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),A.push(s))}},A}},354:n=>{n.exports=function(n){var A=n[1],e=n[3];if(!e)return A;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[A].concat([i]).join("\n")}return[A].join("\n")}},72:n=>{var A=[];function e(n){for(var e=-1,t=0;t<A.length;t++)if(A[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},r=[],a=0;a<n.length;a++){var C=n[a],c=t.base?C[0]+t.base:C[0],s=i[c]||0,l="".concat(c," ").concat(s);i[c]=s+1;var d=e(l),p={css:C[1],media:C[2],sourceMap:C[3],supports:C[4],layer:C[5]};if(-1!==d)A[d].references++,A[d].updater(p);else{var f=o(p,t);t.byIndex=a,A.splice(a,0,{identifier:l,updater:f,references:1})}r.push(l)}return r}function o(n,A){var e=A.domAPI(A);return e.update(n),function(A){if(A){if(A.css===n.css&&A.media===n.media&&A.sourceMap===n.sourceMap&&A.supports===n.supports&&A.layer===n.layer)return;e.update(n=A)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var a=e(i[r]);A[a].references--}for(var C=t(n,o),c=0;c<i.length;c++){var s=e(i[c]);0===A[s].references&&(A[s].updater(),A.splice(s,1))}i=C}}},659:n=>{var A={};n.exports=function(n,e){var t=function(n){if(void 0===A[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}A[n]=e}return A[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var A=document.createElement("style");return n.setAttributes(A,n.attributes),n.insert(A,n.options),A}},56:(n,A,e)=>{n.exports=function(n){var A=e.nc;A&&n.setAttribute("nonce",A)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var A=n.insertStyleElement(n);return{update:function(e){!function(n,A,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),A.styleTagTransform(t,n,A.options)}(A,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(A)}}}},113:n=>{n.exports=function(n,A){if(A.styleSheet)A.styleSheet.cssText=n;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(n))}}}},A={};function e(t){var o=A[t];if(void 0!==o)return o.exports;var i=A[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var t in A)e.o(A,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),e.nc=void 0;var t=e(72),o=e.n(t),i=e(825),r=e.n(i),a=e(659),C=e.n(a),c=e(56),s=e.n(c),l=e(540),d=e.n(l),p=e(113),f=e.n(p),g=e(167),u={};u.styleTagTransform=f(),u.setAttributes=s(),u.insert=C().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),o()(g.A,u),g.A&&g.A.locals&&g.A.locals})();
//# sourceMappingURL=user_index.bundle.js.map