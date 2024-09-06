---
layout: page
title: About
permalink: /about/
---
<style>
    img{
        width: 30%;
        height: auto;
    }
</style>

## Who Am I?
### Trystan Schmits
I am currently in CSA, I have had prior experience in CSSE before ju,ping past csp to csa.
I was born in St. Louis, Missouri, and moved to California just before 5th grade.

<img id="myImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/St_Louis_night_expblend_cropped.jpg/1200px-St_Louis_night_expblend_cropped.jpg" />

## Prior accomplishments:
### CSSE
<ol id="listToPasteInto">
</ol>
<script>
    var acomplishments = [
        "During Tri1, my group and I created a game with simple lighting and interaction",
        "During Tri2, my main acommplishment was working on multiplayer for the class game",
        "Some other fun items...",
    ];
    var pasteInto = document.getElementById("listToPasteInto"); 
    acomplishments.forEach(string => {
        var li = document.createElement("li");
        li.innerText = string;
        pasteInto.append(li);
    })
    var myImage = document.getElementById("myImage");
    var listOfEffects = ["blur(5px)","grayscale(100%)","invert(100%)","saturate(8)","sepia(100%)","hue-rotate(-90deg)"];
    var effectIndex = 0;
    myImage.addEventListener("mouseenter",()=>{
        myImage.style.filter = listOfEffects[effectIndex];
    })
     myImage.addEventListener("mouseleave",()=>{
        effectIndex = (1 + effectIndex) % listOfEffects.length;
    })
</script>

