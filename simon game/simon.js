let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let HS=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
   if(started==false){
    console.log("started")
    started=true;
    levelup();
   }
})




function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}




function levelup(){
    userSeq=[];
    level++;
    HS++;
    h2.innerText=`level ${level}`
let randomIdx=Math.floor(Math.random()*3);
let randomColor=btns[randomIdx];
let randBtn=document.querySelector(`.${randomColor}`)
gameSeq.push(randomColor);
console.log(gameSeq)
    btnFlash(randBtn);
}




function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
       setTimeout(levelup,1000)
      }
    } else{

        h2.innerText=`Game over {(:-!)] Your score was ${level} press any key to start`
        resetTo()
    }
}




function btnPress(){
let btn=this;
btnFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);

checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}


function resetTo(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}






























