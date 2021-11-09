const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
 userChoice = e.target.id;
 userChoiceDisplay.innerHTML = userChoice;
 generateComputerChoice();
 getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1; //+1 is for better readability, or can use this -> const randomNumber = Math.random() * possibleChoices.length
    
    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if (randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
        result = ' its a draw!';
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = ' you win!';
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = ' you lost!';
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = ' you win!';
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = ' you lose!';
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = ' you win!';
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = ' you lose!';
    }
    resultDisplay.innerHTML = result;
}




// let round= 0;
// while(round<=1){
//     const Rock= 0;
//     const Paper= 1;
//     const Scissors= 2;
//     let playerSelection= prompt("Choose Rock, Paper or Scissors");
//     let computerSelection = Math.floor(Math.random() * 2);
//     if(playerSelection==Rock & computerSelection==Paper){
//         alert("You lose! Paper beats Rock");
//     }
//     else{
//         alert("You Win! Paper beats Rock");
//     }
//     document.write(computerSelection);
//     round++;
// }




// for(game=0; game<=1; game++){
//     function playRound() {
//         const Rock="Rock";
//         const Paper="Paper";
//         const Scissors="Scissors";
//         const Array = ["Rock", "Paper", "Scissors"];
//        let playerSelection= prompt("Choose Rock, Paper or Scissors");
//     //    let  computerSelection= Paper;
//         let computerSelection= Math.floor(Math.random() * Rock, Paper);
//         if(playerSelection==Rock & computerSelection==Paper){
//             alert("You lose! Paper beats Rock");
//         }
//         // else{
//         //     alert("You win! Paper beats Rock");
//         // }
    
//         // if(playerSelection==Rock & computerSelection==Scissors){
//         //     alert("You win! Rock beats Scissors");
//         // }
//         // else{
//         //     alert("You lose! Rock beats Scissors");
//         // }

//     //     if(playerSelection==Paper & computerSelection==Scissors){
//     //         alert("You lose! Scissors beats Paper");
//     //     }
//     //     else{
//     //         alert("You win! Scissors beats Paper");
//     //     }
//     //   }
//     }
//     playRound();
//  }


