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


        var hocam = "Hocam selamlar, \n [url=" + params[2] + "][B][COLOR=#D14841]" + decodeURI(params[1]) + "[/COLOR][/B][/url] konunuz icin yaziyorum. Detaylari alabilir miyim ?";
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

if (konumu)

{

    var baslik = document.querySelector("body > main > div > div.breadCrumb > div.top > div.left > div:nth-child(2) > span > h2").innerText;
    var birinci = document.getElementsByClassName("rank");
    var hizliPM = document.createElement("span");
    var pmLink = document.querySelector("div.postUser > div.userLeft > div.smallInfo > div.name > ul > li:nth-child(2) > a").href;



    var hpmLink = pmLink + "?hpm=true$" + baslik + "$" + url;


    hizliPM.innerHTML = "<div style='float:right;height:32px;margin-left: 4px;color:white !important;text-decoration:none;' class='btn btn-success text-white'> <a class='text-white'" +
        "href='" + encodeURI(hpmLink) + "'><b style='color:#ffffff'><i class='fa fa-bolt'></i> HPM </b></a></div>";
    birinci[0].appendChild(hizliPM);
}


console.log(n);
console.log(konumu);