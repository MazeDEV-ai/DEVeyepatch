var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
function moveleft(){
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0) {
    character.style.left = left - 2 + "px";
    }
}

function moveRight(){
    var right = 
    parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    if(left<380) {
    character,style.right = left + 2 + "px";
    }
}

document.addEventListener("keydown", Event => {
    if(both==0){
        both++;
    }
    if(Event.key==="ArrowLeft"){
         interval = setInterval(moveleft, 1);
    }
    if(Event.key==="ArrowRight"){
         interval = setInterval(moveRight, 1)
    }

});

document.addEventListener("keyup", Event =>{
    clearInterval(interval);
    both=0;
});

setInterval(function(){
    var blockLast = document.getElementById("block"+(counter-1));
    var holelast = document.getElementById("hole"+(counter-1));
    if(counter>0){
    var blockLastTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var holeLastTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    }
var block = document.createElement("div")
var hole = document.createElement("div")
block.setAttribute("class", "block");
hole.setAttribute("class", "hole");
block.setAttribute("id", "block"+counter);
hole.setAttribute("id", "hole"+counter);
block.style.top = blockLastTop + 100 + "px";
hole.style.top = holeLastTop + 100 +"px";
var random = Math.floor(Math.random() * 360);
hole.style.left = random + "px";
game.appendChild(block);
game.appendChild(hole);
counter++;
},1);
