var timer=60;
var score=0;
var hitrn=0;
//jispe click krenge wo element par event raise hoga ,aur
// event listner naa milne par event element ke parent par 
//listner dhundhega , wha v naa milne par event
// parent ke parent ke parent par listner dhundega 
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
  hitrn=  Math.floor(Math.random()*10);
  document.querySelector("#Hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter = "";
for(var i=1; i<=176; i++){
  var rn=  Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runTImer(){
  var timerInterval =  setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timerInterval);
        document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
    }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum=Number(details.target.textContent);
    if(clickedNum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
makeBubble();
runTImer();
getNewHit();
increaseScore();