---
layout: page
title: Playground
permalink: /playground/
---

[Link to page about site](https://nighthawkcoders.github.io/portfolio_2025/javascript/project/play)

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg" alt="Two Chocolate Chip Cookies" id="cookie"/>
<p id="counter">cookies: 0</p>

<script>
    var count = 0;
    documenget.getElementById("cookie").addEventListener("click",()=>{
        count += 1;
        document.getElementById("counter").innerText = "cookies: "+count.toString();
    })
</script>