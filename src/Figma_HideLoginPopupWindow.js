// ==UserScript==
// @name         Figma: 沒登入時，隱藏登入蓋版框
// @namespace    https://raw.githubusercontent.com/PeterYHH/TampermonkeyScript/main/src/Figma_HideLoginPopupWindow.js
// @version      20240809001
// @description  fimga: 沒登入時，隱藏登入蓋版框
// @author       PeterYang
// @match        https://www.figma.com/design/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=figma.com
// @grant        none
// @source       https://raw.githubusercontent.com/PeterYHH/TampermonkeyScript/main/src/Figma_HideLoginPopupWindow.js

// ==/UserScript==

(function() {
    'use strict';

    var css = `
    .footer_banner--bannerContainer--uRlsy { display: none !important; }
`;

    var style = document.createElement("style");
    style.innerHTML = css
    document.head.appendChild(style);
    
})();


