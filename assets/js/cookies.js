

var gameData = {
    cookies: 0, //cookie Counter
    tableOfObjects: [], //global objects
    tableOfClickObjects: [], //click objects
    tableOfPassiveObjects: [], //passive objects
    tableOfCostMultipliers: {}, //table filled with price Multiplers of objects
}

function onCookieClick(){
    var cookiesToGain = 1;
    var globalMultiplier = 1;
    var clickMuliplier = 1;
    var globalCookies = 0;
    var clickCookies = 0;

    Object.values(gameData.tableOfObjects).forEach((object)=>{
        globalMultiplier *= object.multiplier;
        globalCookies += object.cookies;
    });
    Object.values(gameData.tableOfClickObjects).forEach((object)=>{
        clickMuliplier *= object.multiplier;
        clickCookies += object.cookies
    });
    cookiesToGain += globalCookies + clickCookies;
    cookiesToGain *= globalMultiplier * clickMuliplier;
    gameData.cookies += cookiesToGain;

    document.getElementById("counter").innerText = "cookies: "+gameData.cookies.toFixed(0).toString();
}

function onPassiveUpdate(){
    var cookiesToGain = 0;
    var globalMultiplier = 1;
    var passiveMuliplier = 1;
    var globalCookies = 0;
    var passiveCookies = 0;

    Object.values(gameData.tableOfObjects).forEach((object)=>{
        globalMultiplier *= object.multiplier;
        globalCookies += object.cookies;
    });
    Object.values(gameData.tableOfPassiveObjects).forEach((object)=>{
        passiveMuliplier *= object.multiplier;
        passiveCookies += object.cookies
    });
    cookiesToGain += globalCookies + passiveCookies;
    cookiesToGain *= globalMultiplier * passiveMuliplier;
    gameData.cookies += cookiesToGain;

    document.getElementById("counter").innerText = "cookies: "+gameData.cookies.toFixed(0).toString();
}

function createObject(element,improvementClass){
    if(!gameData.tableOfCostMultipliers[improvementClass.name]) {gameData.tableOfCostMultipliers[improvementClass.name] = 1};
    if (gameData.cookies >= improvementClass.price * gameData.tableOfCostMultipliers[improvementClass.name]){
        gameData.cookies -= improvementClass.price * gameData.tableOfCostMultipliers[improvementClass.name];
        var newObject = new improvementClass();
        switch(newObject.type){
            case classTypes.global:
                gameData.tableOfObjects.push(newObject);
                break;
            case classTypes.click:
                gameData.tableOfClickObjects.push(newObject);
                break;
            case classTypes.passive:
                gameData.tableOfPassiveObjects.push(newObject);
                break;
            default:
                console.log("type doesn't match expected types");
        }
    }
    element.innerText = improvementClass.buttonString + Math.ceil(improvementClass.price * gameData.tableOfCostMultipliers[improvementClass.name]);

    document.getElementById("counter").innerText = "cookies: "+gameData.cookies.toFixed(0).toString();
}

var classTypes = Object.freeze({
    global: 0,
    click: 1,
    passive: 2,
});

class basicCookie {
    static price = 10; //static variables, used for information before object construction
    static name = "basicCookie";
    static buttonString = "basic cookie, ";
    
    constructor(){
        if(!gameData.tableOfCostMultipliers["basicCookie"]){
            gameData.tableOfCostMultipliers["basicCookie"] = 1.5;
        }
        else {
            gameData.tableOfCostMultipliers["basicCookie"] *= 1.5;
        }
    }

    type = classTypes.click; //non-static variables, used for information after object construction
    cookies = 0;
    multiplier = 1.2;
}

class basicOven {
    static price = 100; //static variables, used for information before object construction
    static name = "basicOven";
    static buttonString = "basic cookie oven, ";
    
    constructor(){
        if(!gameData.tableOfCostMultipliers["basicOven"]){
            gameData.tableOfCostMultipliers["basicOven"] = 1.5;
        }
        else {
            gameData.tableOfCostMultipliers["basicOven"] *= 1.5;
        }
    }

    type = classTypes.passive; //non-static variables, used for information after object construction
    cookies = 1;
    multiplier = 1;
}

class cookieSacrifice {
    static price = 1000; //static variables, used for information before object construction
    static name = "cookieSacrifice";
    static buttonString = "cookie SACRIFICE, ";
    
    constructor(){
        if(!gameData.tableOfCostMultipliers["cookieSacrifice"]){
            gameData.tableOfCostMultipliers["cookieSacrifice"] = 100;
        }
        else {
            gameData.tableOfCostMultipliers["cookieSacrifice"] *= 100;
        }
        Object.keys(gameData.tableOfCostMultipliers).forEach(name =>{
            if(name != "cookieSacrifice") {gameData.tableOfCostMultipliers[name] = 1 }
        })
        gameData.tableOfClickObjects.length = 0; //clear table
        gameData.tableOfPassiveObjects.length = 0; //clear table
        gameData.cookies = 0;
    }

    type = classTypes.global; //non-static variables, used for information after object construction
    cookies = 10;
    multiplier = 3;
}

//button updates

document.getElementById("cookie").addEventListener("click",function(){
    onCookieClick();
});

var basicCookieButton = document.getElementById("multiplier");
basicCookieButton.addEventListener("click",function(){
        createObject(basicCookieButton,basicCookie);
});

var basicOvenButton = document.getElementById("passive");
basicOvenButton.addEventListener("click",function(){
        createObject(basicOvenButton,basicOven);
});

var sacrificeButton = document.getElementById("sacrifice");
sacrificeButton.addEventListener("click",function(){
    createObject(sacrificeButton,cookieSacrifice);
})

setInterval(function(){
    onPassiveUpdate();
},1000);
/*
var count = 3000;
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

    */