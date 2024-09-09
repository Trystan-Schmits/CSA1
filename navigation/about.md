---
layout: page
title: About
permalink: /about/
---
<style>
    img{
        position: relative;
        width: 30%;
        height: auto;
        left: 0%;
        top: auto;
    }
    .imgOffset {
        left: -100%;
        top: auto;
    }
    .extraMove{
        transition: 1s;
    }
    .extraMove:hover{
        left: 100%;
    }
</style>

## Who Am I?
### Trystan Schmits
I am currently in CSA, I have had prior experience in CSSE before ju,ping past csp to csa.
I was born in St. Louis, Missouri, and moved to California just before 5th grade.
<p class="extraMove">
<img id="myImage2" class="imgOffset" src="https://i.natgeofe.com/n/34265a2f-6c80-4b56-bd5d-f7202c908ffc/balboa-park-san-diego-california01_square.jpg" /> <img id="myImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/St_Louis_night_expblend_cropped.jpg/1200px-St_Louis_night_expblend_cropped.jpg" /> 
</p>
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
    var myImage2 = document.getElementById("myImage2");
    var listOfEffects = ["blur(5px)","grayscale(100%)","invert(100%)","saturate(8)","sepia(100%)","hue-rotate(-90deg)"];
    var effectIndex = 0;
    function onEnter(){
        myImage.style.filter = listOfEffects[effectIndex];
        myImage2.style.filter = listOfEffects[effectIndex];
        effectIndex = (1 + effectIndex) % listOfEffects.length;
    }
    myImage.addEventListener("mouseenter",onEnter);
    myImage2.addEventListener("mouseenter",onEnter);
</script>

## some things I enjoy doing
1. messing around
2. fixing bugs, when I'm working on a project I prefer to not leave any possible bugs
3. messing around *The balllllllll (this is the voice of the aliens from toy story)*

<style>
        .container {
            display: block;
            background: rgb(131,58,180);
            background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            position: fixed;
            top: 50%;
            left: 50%;
            filter: none;
            height: 4%;
            width: auto;
            transition: .25s linear;
            border-radius: 50%;
            z-index: 2;
        }
        .gradient {
            background: rgb(131,58,180);
            background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradientB {
            background: rgb(252,176,69);
            background: linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(131,58,180,1) 100%);
        }
</style>

<canvas id="display" class="container" height="500px" width="500px"></canvas>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script>
    var gravity = 6;

    var positionX = 50; //50 == 50%
    var positionY = 50;

    var velocityX = 0;
    var velocityY = 0;

    var rotation = 0;
    var rotationVelocity = 0;

    var canvas = document.getElementById("display");
    
    function updatePositionToVelocity(){
        velocityY = Math.min(velocityY,10);
        velocityY = Math.max(velocityY,-10);
        velocityX = Math.min(velocityX,5);
        velocityX = Math.max(velocityX,-5);
        // 0,0 is at top left corner and I want it to be bottom left
        positionX = positionX + velocityX;
        positionY = positionY + velocityY; //y is opposite;

        positionX = Math.max(positionX, -40);
        positionY = Math.max(positionY, -40);
    }
    function updateStyle(){
        var deltaX = 50-positionX;
        var deltaY = 50-positionY;

        deltaX = Math.max(deltaX, -40);
        deltaX = Math.min(deltaX, 40) * 25;
        deltaY = Math.max(deltaY, -40);
        deltaY = Math.min(deltaY, 40) * 25;

        if(deltaY == -1000){
            velocityY = Math.min(velocityY,0);
        }
        if(deltaX == -1000){
            velocityX = Math.min(velocityX,0);
        }
        
        // 0,0 is at top left corner and I want it to be bottom left
        var left = deltaX.toString() + "%";
        var top = deltaY.toString() + "%";
        var rot = rotation.toString() + "deg"; // sting
        canvas.style.transform= "translate(" + left + "," + top + ") rotate("+rot+")";
    }

    var fps = 24;
    var active = true;
    var animId;
    var currentFrame = 0;
    function frame() {
            currentFrame = (currentFrame + 1) % fps;
            
            velocityY -= gravity/fps;
            rotationVelocity *= 1-.9/fps;
            if (Math.abs(rotationVelocity) < 3) {
                rotationVelocity = 0;
                velocityX = 0;
            }
            rotation += rotationVelocity;
            updatePositionToVelocity();
            updateStyle();

            // Continue the animation loop
            setTimeout(function () {
                if (active == true) {
                    animId = requestAnimationFrame(frame);
                }
            }, 1000 / fps);
    }
    var directionMult = .5;
    canvas.addEventListener("click",()=>{
        rotationVelocity = Math.random() * 120 * directionMult;
        if(directionMult>=0){directionMult=-.5}else{directionMult =.5};
        velocityX =  -rotationVelocity/12;
        velocityY = 10;
        updatePositionToVelocity();
        updateStyle();

        var selectors = $("p,li,h1,h2,h3,h4").not('.gradient');
        if(selectors.length > 0){
            selectors.eq(Math.floor(Math.random() * selectors.length)).addClass("gradient");
        }
        else {
            selectors = $("*:visible").not('.gradientB').not('.gradient');
            selectors.eq(Math.floor(Math.random() * selectors.length)).addClass("gradientB");
        }
        
    })

    // Start the animation loop
    frame();
    

</script>
