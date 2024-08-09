// ==UserScript==
// @name         Figma: 沒登入時，隱藏登入蓋版框
// @namespace    http://tampermonkey.net/
// @version      20240808001
// @description  imga: 沒登入時，隱藏登入蓋版框
// @author       PeterYang
// @match        https://www.figma.com/design/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=figma.com
// @grant        none
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


