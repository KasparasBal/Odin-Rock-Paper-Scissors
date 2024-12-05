let humanScore = 0;
let computerScore = 0;
let playAgain = false;
let gameState = false;

const getComputerChoice = () => {
  const randomNumber =  Math.floor(Math.random()* 3) + 1;
  let answer = '';
    
    switch(randomNumber){
        case 1: 
        answer = 'scissors';
        break;
        case 2: 
        answer = 'rock';
        break;
        case 3:
        answer = 'paper';
        break;
    }
    
    return answer;
}


const getHumanChoice = () => {
    let answer = prompt('Rock, Paper, Scissors. What will it be?').toLowerCase();
    if(answer != 'rock' && answer != 'paper' && answer !== 'scissors' ){
        alert('Wrong input! You must choose Rock, Paper or Scissors');
        return getHumanChoice();
    } else {
        return answer;
    }
}




const gameLogic = (humanChoice, computerChoice) => {
    console.log(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}`)
    if (humanChoice === computerChoice) {
        console.log('Draw! Go again!');
        checkScores();
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
               humanChoice === 'scissors' && computerChoice === 'paper' ||
               humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! You get a point!');
        humanScore++;
        checkScores();
        
    } else {
        console.log('Computer wins! Computer gets a point!');
        computerScore++;
        checkScores();

    }

}

const checkScores = () => {
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
        if( humanScore == 3 ){
            console.log('You win this game!')
           playAgain = confirm('Do you want to play again?')
        } else if (computerScore == 3) {
            console.log('Computer wins this game!')
            playAgain = confirm('Do you want to play again?')
        } else {
            gameLogic(getComputerChoice(), getHumanChoice());
        }

        if(!gameState && playAgain) {
            console.clear()
            humanScore = 0;
            computerScore = 0;
            gameLogic(getComputerChoice(), getHumanChoice());
        }
    }

  gameLogic(getComputerChoice(), getHumanChoice());