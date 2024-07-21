
let hitValue; 
var timer = 60;
var score = 0;
function bubbleMaker(){
    var clutter = "";

for(var i =0 ;i<264;i++){
    var randomNumber = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;

}
function hitMaker(){
    hitValue = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitValue;
}
function runTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}
function increaseScore(){
    score+=10;
}
document.querySelector("#pbottom").addEventListener('click',function(event){
    var clickedValue = event.target.textContent;
    if(clickedValue==hitValue){
        increaseScore();
        document.querySelector("#score").textContent = score;
        hitMaker();
        bubbleMaker();
    }
})
bubbleMaker();
hitMaker();
runTimer();
