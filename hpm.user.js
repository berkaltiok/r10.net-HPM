// ==UserScript==
// @name         HPM
// @namespace    https://www.r10.net/members/52078-entriko.html
// @version      0.1
// @description  Hocam Detayli PM alabilir miyim klisesi :)
// @author       entriko
// @match        https://*.r10.net/*
// @grant        none
// ==/UserScript==
var url = window.location.href;
console.log(url);
var n = url.includes("private.php");
var konumu = url.includes(".html");


if (n) {
    var hpm = url.includes("hpm=true");
    console.log('mevcut url = ' + url);
    console.log("hocam pm lutfen aktif mi:" + hpm);
    if (hpm) {

        var params = url.split("$");


        var hocam = "Merhaba hocam, \n [url=" + params[2] + "][B][COLOR=#41A85F]" + decodeURI(params[1]) + "[/COLOR][/B][/url] konunuz içim yazıyorum. Detayları alabilir miyim?";
        document.querySelector("#message_form > div.head > div:nth-child(3) > div:nth-child(2) > input").value = decodeURI(params[1]) + " konusu hakkinda";
        document.querySelector("#vB_Editor_001 > div > div.fr-wrapper > div").click();
        document.querySelector("#r10BBCode-1").click();
        document.querySelector("#vB_Editor_001 > div > div.fr-wrapper > div").innerText = hocam;

        setTimeout(gonderebas, 1500); // Gonder Butonuna basar 1.5 sn icinde

        function gonderebas() {
            document.querySelector("#vB_Editor_001_save").click();
        }
    }

}

if (konumu) {
    var baslik = document.querySelector("body > main > div > div.breadCrumb > div.top > div.left > div:nth-child(2) > span > h2").innerText;
    var birinci = document.querySelector("div.postList li.post[data-order='1'] .rank");
    var hizliPM = document.createElement("span");
    var pmLink = document.querySelector("div.postUser > div.userLeft > div.smallInfo > div.name > ul > li:nth-child(2) > a").href;



    var hpmLink = pmLink + "?hpm=true$" + baslik + "$" + url;


    hizliPM.innerHTML = "<a style='float: right; height: 38px; display: flex; align-items: center; margin-left: 4px;' class='btn btn-success text-white' " +
        "href='" + encodeURI(hpmLink) + "'><i class='fa fa-bolt' style='margin-right: 4px;'></i> <b>HPM</b></a>";
    if (birinci) birinci.appendChild(hizliPM);
}
