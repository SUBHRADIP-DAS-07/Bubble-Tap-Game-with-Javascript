var timer =10;
var score=0;
var hit;

function makeBubble(){
    var bubble = "";

    for(var i=1;i<=133;i++){
        var num= Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${num}</div>`;
    }
    document.querySelector(".lowerbox").innerHTML = bubble;
}

function setTimer(){
    var timerint= setInterval(function(){
        if(timer>0){
            timer--;   
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".lowerbox").innerHTML= `<h1>Game Over!<h1>`;
        }
    },1000)
    
}

function newHit(){
    hit= Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML= hit;
}

function showScore(){
    score +=10;
    document.querySelector("#score").textContent=score;
}

function gameLogic(){
    document.querySelector(".lowerbox").addEventListener("click", function(getDetail){
    var clickedNum= Number(getDetail.target.textContent);
    if (clickedNum===hit){
        showScore();
        newHit();
        makeBubble();
    }
    })

}


makeBubble();
setTimer();
newHit();
gameLogic();

