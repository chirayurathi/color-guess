var squares = document.querySelectorAll(".square");
var question=document.getElementById("rgbc");
var reset=document.getElementById("reset");
var head = document.getElementById("blu");
var outcome = document.getElementById("outcome")
var pick="";
var easy= document.querySelector("#easy");
var hard= document.querySelector("#hard");
var num=6; 
function ree(){  
    //pannelset();
    
    outcome.textContent="";
    this.textContent="new colours";
    assignColor();
}
easy.addEventListener("click",function(){
    num=3;
    easy.classList.add("active");
    hard.classList.remove("active");
    ree();
})
hard.addEventListener("click",function(){
    for(var i=num;i<6;i++){
        squares[i].style.display="block";
    }
    num=6;
    hard.classList.add("active");
    easy.classList.remove("active");
    ree();
})
function correct(){
    for(var i=0;i<num;i++){
        squares[i].style.background=pick;
    }
    blu.style.background=pick;
    reset.textContent="play again?";
}
reset.addEventListener("click",ree);
function randomColor(){
    return("rgb("+Math.floor(Math.random()*256)+" ,"+Math.floor(Math.random()*256)+" ,"+Math.floor(Math.random()*256)+")")
}
function assignColor(){
    head.style.background="rgb(70,130,180)";
    for(var i=0;i<num;i++){
        squares[i].style.background=randomColor();
    }
    for(var i=num;i<6;i++){
        squares[i].style.display="none";
    }
    pick=squares[Math.floor(Math.random()*(num))].style.background;
    question.textContent = pick;

}
for(var i=0;i<num;i++){
squares[i].addEventListener("click",function(){
    var g=this.style.background;
    if (this.style.background === pick){
        outcome.textContent="Correct!";
        correct()
    }
    else{
        this.style.background ="#232323";
        outcome.textContent="Try again";
    }
})}
hard.classList.add("active");
assignColor()