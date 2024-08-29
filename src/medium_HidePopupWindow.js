// ==UserScript==
// @name         medium: 隱藏蓋版框
// @namespace    https://raw.githubusercontent.com/PeterYHH/TampermonkeyScript/main/src/medium_HidePopupWindow.js
// @version      20240829002
// @description  medium: 隱藏蓋版框
// @author       PeterYang
// @match        https://medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @grant        none
// @source       https://raw.githubusercontent.com/PeterYHH/TampermonkeyScript/main/src/medium_HidePopupWindow.js
// @updateURL    https://raw.githubusercontent.com/PeterYHH/TampermonkeyScript/main/src/medium_HidePopupWindow.js
// @downloadURL  https://raw.githubusercontent.com/PeterYHH/TampermonkeyScript/main/src/medium_HidePopupWindow.js
// ==/UserScript==

(function() {
    'use strict';

    var css = `
    #root > div > div.l.c > div:nth-child(2) > div.m.rz.sa.sb > div { display: none !important; }
`;

    var style = document.createElement("style");
    style.innerHTML = css
    document.head.appendChild(style);
})();




