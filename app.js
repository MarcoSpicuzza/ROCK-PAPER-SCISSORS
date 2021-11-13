const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");

let playerScore = document.createElement("p");
let computerScore = document.createElement("p");

let playerScoreIncrement = 0;
let computerScoreIncrement = 0;

playerDisplay.appendChild(playerScore);
computerDisplay.appendChild(computerScore);

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)]);
}

choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerHTML = choice;;
    button.addEventListener("click", handleClick);
    choicesDisplay.appendChild(button);
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            resultDisplay.innerHTML = "You chose: " + userChoice + ", Computer Chose: " + computerChoice + " | You lose!";
            computerScoreIncrement++;
            computerScore.textContent = computerScoreIncrement;
            if(playerScoreIncrement === 5){
                alert("YOU SCORED 5 YOU WON THE GAME!");
                location.reload();
            }
            if(computerScoreIncrement === 5){
                alert("THE COMPUTER SCORED 5 YOU LOST THE GAME!");
                location.reload();
            }
            break
        
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
             resultDisplay.innerHTML = "You chose: " + userChoice + ", Computer Chose: " + computerChoice + " | You win!";
             playerScoreIncrement++;
             playerScore.textContent = playerScoreIncrement;
             if(playerScoreIncrement === 5){
                alert("YOU SCORED 5 YOU WON THE GAME!");
                location.reload();
            }
            if(computerScoreIncrement === 5){
                alert("THE COMPUTER SCORED 5 YOU LOST THE GAME!");
                location.reload();
            }
             break
        
        case "paperpaper":
        case "scissorscissors":
        case "rockrock":
              resultDisplay.innerHTML = "You chose: " + userChoice + ", Computer Chose: " + computerChoice + " | It's a tie!";
              break
    }
}