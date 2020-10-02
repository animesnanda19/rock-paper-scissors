//these are the socre variables 
let userScore=0;
let computerScore=0;

//these variables are in the span tag
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score")

//these variables are score and result variabels
const scoreBoard_div=document.querySelector("scoreboard");
const result_p=document.querySelector(".result > p");

//these variables are the buttons for rock,paper,scissors hovers
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");


function getComputerChoice(){

    const choices = ["Rock","Paper","Scissors"];
    const randomNumber = Math.floor(Math.random()*3 );
    return choices[randomNumber];
}

function game(userChoice){

    const computerChoice = getComputerChoice();
    console.log(userChoice,computerChoice);
    
    gameDecision(userChoice,computerChoice);
}


function main(){

    rock_div.addEventListener('click', function() {
    game("Rock");
    })

    paper_div.addEventListener('click',function(){
    game("Paper");
    })

    scissors_div.addEventListener('click',function(){
    game("Scissors");
    })
}
main();


function gameDecision(userChoice,computerChoice){

   var uC = userChoice;
   var cC = computerChoice;

   if(uC=="Rock" && cC=="Paper"){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML=uC + " " + "gets covered by " + " " + cC + " " + ",computer gets a point";
    
   }
   
   else if (uC=="Paper" && cC=="Scissors"){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML=uC + " " + "gets cut by the " + " " + cC + " " + "computer gets a point";
    
   }

   else if (uC=="Scissors" && cC=="Rock"){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML=uC + " " + "gets  broken by the " + " " + cC + " " + "computer gets a point";
    
   }

   else if (uC===cC){
       result_p.innerHTML="both are tie";
       
   }

   else {
       userScore++;
       userScore_span.innerHTML=userScore;
       result_p.innerHTML=cC + " " + "loses to " + " " + uC + " " + "user gets a point";
       
   }

}




