const game = () => {
    let pScore= 0;
    let cScore= 0;
    
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
       
        // Computer options
        const computerOptions = ["warrior", "mage", "hunter"];
        
        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];


                compareHands(this.textContent, computerChoice);
                // Update hands images
                playerHand.src =  `./images/${this.textContent}.png`
                computerHand.src = `./images/${computerChoice}.png`
            });
        }); 
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie";
            return
        }

        if(playerChoice === "warrior" && computerChoice === "mage" ){
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
              return 
        }
        else{
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return
        }
        
        if(playerChoice === "mage" && computerChoice === "hunter"){
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return
        }
        else{
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return
        }

        if(playerChoice === "hunter" && computerChoice === "warrior"){
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return
        }
        else{
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return
        }
    }
        
        

    startGame();
    playMatch();
};

game();