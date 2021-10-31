function computerPlay(){
const randomNumber = Math.floor(Math.random() * 3) +1;
return randomNumber
}

    function playRound() {

       let playerPoints = 0;
       let computerPoints = 0;

        while(playerPoints<5 && computerPoints<5){

            const playerSelection = prompt('Choose : Rock, Paper or Scissors');
            const computerSelection = computerPlay();
            game(playerSelection, computerSelection);
        }
            function game(playerSelection, computerSelection){
                let playerInput = playerSelection.toUpperCase();
                console.log('player has chosen ' + playerInput); /* FOR CHECKING PLAYER INPUT AND IF PLAYER INPUT IS CASE-INSENSITIVE*/
                let playerChoice = playerInput;
            
                let computerChoice;
                
                /*CONVERTS THE randomNumber INTO A STRING*/
                
                if(computerSelection === 1){
                    computerChoice='ROCK';
                    console.log('computer has chosen '+ computerChoice);
                }
                if(computerSelection == 2){
                    computerChoice='PAPER';
                    console.log('computer has chosen '+ computerChoice);
                }
                if(computerSelection == 3){
                    computerChoice='SCISSORS';
                    console.log('computer has chosen '+ computerChoice);
                }
               
                /*CONDITIONALS*/

                if(computerChoice === playerChoice){
                    console.log('Its a draw!');
                    return 'ties'
                }
                if (computerChoice === 'ROCK' && playerChoice === 'PAPER'){
                    console.log(' you win!');
                    playerPoints++;
                    console.log('playerPoints: ' + playerPoints);
                    return 'win'
                }
                if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS'){
                    console.log(' you lost!');
                    computerPoints++;
                    console.log('computerPoints: ' + computerPoints);
                    return 'lost'
                }
                if (computerChoice === 'PAPER' && playerChoice === 'SCISSORS'){
                    console.log(' you win!');
                    playerPoints++
                    console.log('playerPoints: ' + playerPoints);
                    return 'win'
                }
                if (computerChoice === 'PAPER' && playerChoice === 'ROCK'){
                    console.log (' you lose!');
                    computerPoints++;
                    console.log('computerPoints: ' + computerPoints);
                    return 'lost'
                }
                if (computerChoice === 'SCISSORS' && playerChoice === 'ROCK'){
                    console.log (' you win!');
                    playerPoints++;
                    console.log('playerPoints: ' + playerPoints);
                    return 'win'
                }
                if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER'){
                    console.log (' you lose!');
                    computerPoints++;
                    console.log('computerPoints: ' + computerPoints);
                    return 'lost'
                }
            } 
    }
playRound();