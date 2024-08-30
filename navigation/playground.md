---
layout: page
title: Playground
permalink: /playground/
---

[Link to page about site](https://nighthawkcoders.github.io/portfolio_2025/javascript/project/play)
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg" alt="Two Chocolate Chip Cookies" id="cookie"/>
    <p id="counter">cookies: 0</p>
    <button id="multiplier">1.1x cookies, 10 cookies</button>
    <button id="passive">passive cookie collection, 100 cookies</button>
    <button id="sacrifice">SACRIFICE THE COOKIES!, 3000 cookies</button>
</div>
<script>
    var count = 1000;
    var bigMult = 1;
    var mult = 1;
    var passiveCount = 0;
    document.getElementById("cookie").addEventListener("click",function(){
        count += 1 * mult * bigMult;
        document.getElementById("counter").innerText = "cookies: "+count.toFixed(0).toString();
    })
    var cost = 10;
    var multButton = document.getElementById("multiplier");
     multButton.addEventListener("click",function(){
        if (count >= cost){
            count = Math.floor(count - cost);
            cost = cost * 1.5;
            mult = mult * 1.1;
            multButton.innerText = "1.1x cookies, " + Math.ceil(cost).toString() + " cookies";
            document.getElementById("counter").innerText = "cookies: "+Math.ceil(count).toString();
        }
    })
    var cost1 = 100;
    var passiveButton = document.getElementById("passive");
     passiveButton.addEventListener("click",function(){
        if (count >= cost1){
            count = Math.floor(count - cost1);
            passiveCount += 1;
            cost1 = cost1 * 1.5;
            multButton.innerText = "passive cookie collection, " + Math.ceil(cost).toString() + " cookies";
            document.getElementById("counter").innerText = "cookies: "+Math.ceil(count).toString();
        }
    })
    var cost2 = 3000;
    var sacrificeButton = document.getElementById("sacrifice");
    sacrificeButton.addEventListener("click",function(){
        if (count >= cost2){
            count = 0;
            cost1 = 100;
            passiveButton.innerText = "passive cookie collection, " + Math.ceil(cost1).toString() + " cookies";
            cost = 10;
            passiveButton.innerText = "passive cookie collection, " + Math.ceil(cost1).toString() + " cookies";
            passiveCount = 0;
            mult = 1;
            bigMult = bigMult * 1.8;
            cost2 = cost2 * 2;
            sacrificeButton.innerText = "SACRIFICE THE COOKIES!, " + Math.ceil(cost2).toString() + " cookies";
            document.getElementById("counter").innerText = "cookies: "+Math.ceil(count).toString();
        }
    })
    setInterval(function(){
            count += passiveCount * bigMult;
            document.getElementById("counter").innerText = "cookies: "+Math.ceil(count).toString();
    },1000);
</script>
