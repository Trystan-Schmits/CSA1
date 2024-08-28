---
layout: base
title: Student Home 
description: Home Page
hide: true
---
# Trystan
My journey starts here.

<table>
<tbody><tr id="linkTablePlaceInto">
    <th>
        <a href="/CSA1/pair/showcase">pair showcase</a>
    </th>
</tr>
</tbody></table>
<div>
    <input type="text" placeholder="type name here" id="linkTableInputField">
    <input type="text" placeholder="type link here" id="linkTableInputField2">
    <button id="linkTableSubmitButton">submit</button>
    <button id="clearStorage">clear storage</button>
</div>
<script>
var linkTablePlaceInto = document.getElementById("linkTablePlaceInto");
var linkTableInputField = document.getElementById("linkTableInputField");
var linkTableInputField2 = document.getElementById("linkTableInputField2");
var linkTableSubmitButton = document.getElementById("linkTableSubmitButton");
var clearStorageButton = document.getElementById("clearStorage");
var links = localStorage.getItem("links");
var links1 = localStorage.getItem("links");
if(!links){links=[""]; localStorage.setItem("links","")};
if(typeof links != "object"){
    links = links.split(",");
    for(let i = 0; i< links.length; i++){
        console.log(links[i].toString())
        links[i] = links[i].split("~");
        if(links[i][0] == ""){continue;}
        var newLink = document.createElement("a");
        newLink.href = links[i][1];
        newLink.innerText = links[i][0];
        var tableHeader = document.createElement("th");
        tableHeader.append(newLink);
        linkTablePlaceInto.append(tableHeader);
    };
}
linkTableSubmitButton.addEventListener("click",()=>{
    var name = linkTableInputField.value;
    var link = linkTableInputField2.value;
    var newLink = document.createElement("a");
    if (!(name.includes(",")||name.includes("~"))){
    newLink.href = link;
    newLink.innerText = name;
    var tableHeader = document.createElement("th");
    tableHeader.append(newLink);
    linkTablePlaceInto.append(tableHeader);
    links1 = links1 + ","+name+"~"+link;
    localStorage.setItem("links",links1);
    }
});
clearStorage.addEventListener("click",()=>{
    localStorage.removeItem("links");
    window.location.reload();
});
</script>

## What to do when starting each day
1. open terminal
2. cd into vscode/portfolio_2025
3. run scripts/venv.sh
4. run source venv/bin/activate
5. open vscode

## Version checks
*copied from [tools setup](https://nighthawkcoders.github.io/portfolio_2025/devops/tools/setup)*

```
# Show the active Ruby version, it needs to be 3 or higher
    ruby -v
# Bundler version, it is part of Ruby install
    bundle -v

# Show active Python version, it needs to be 3.10 or better (mine should currently be 3.10.12)
    python --version

# Show Jupyter packages, nbconvert needs to be in the list of installed
    jupyter --version
```

## important shell commands
* **sudo** It is supposed to be used to help manage packages, kasm cannot use this command
* **ls**  Lists current directory, I think you can also do *dir* for a similar result
* **cd** Changes the directory, use . for current, .. for parent and / for seperating movements/children
* **git**  Github commands, such as git pull, git clone, and git config
* **cat**  displays a specific file’s content
