let userScore=0;
let compScore=0;

const images=document.querySelectorAll(".img");
let yourmove=document.querySelector("#your-move");
let yourScorepara=document.querySelector("#your-score");
let comScorepara=document.querySelector("#com-score");
let restartBtn=document.querySelector("#restartbtn");



const Restart=()=>{
   

}

restartBtn.addEventListener("click",(showWinner)=>{
    yourScorepara.innerText=`${0}`;
    comScorepara.innerText=`${0}`;
});

 const gameDraw=()=>{
    console.log("the Game is Draw");
    yourmove.innerText="The game was Draw.Play again."
    yourmove.style.backgroundColor="rgb(50, 50, 117)";
 }

 const showwinner=(userWin,userimgId,comChoice)=>{
    if(userWin){
        userScore++;
        yourScorepara.innerText=userScore;
        console.log("You Win");
        yourmove.innerText=`You Win! Your ${userimgId} beats ${comChoice}.`;
        yourmove.style.backgroundColor="green"
    } else {
        compScore++;
        comScorepara.innerText=compScore;
        console.log("You Lose");
        yourmove.innerText=`You Lose.${comChoice} beats Your ${userimgId}.`;
        yourmove.style.backgroundColor="red"
    }
 }

const comgenChoice=()=>{
    const options=["Paper","Rock","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playgame=(userimgId)=>{
    console.log("userChoice=",userimgId);
    const comChoice=comgenChoice();
    console.log("comChoice=",comChoice);
    
   
    if(userimgId===comChoice){
        gameDraw();
    } else{
        let userWin=true;
        if(userimgId==="Paper"){
            //rock , scissors
            if(comChoice==="Scissors"){
                userWin=false;
            } else{
                userWin=true;
            }
        }
        else if(userimgId==="Rock"){
            //paper , scissors
            if(comChoice==="Paper"){
                userWin=false;
            } else {
                userWin=true;
            }
        } else{
             //paper , rock
             if(comChoice==="Paper"){
                userWin=true;
             } else{
                userWin=false;
             }
        }
        showwinner(userWin,userimgId,comChoice);

    }
}

images.forEach((image)=>{
    console.log(image);
    image.addEventListener("click",()=>{
        const userimgId=image.getAttribute("id");
        playgame(userimgId);
    });
});