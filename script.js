const gameStartSection = document.querySelector('.game_start');
const playButton = document.querySelector('.play_button');

playButton.addEventListener('click', (e) => {
e.preventDefault();

gameStartSection.classList.add('hidden');
console.log(gameStartSection.classList);
})

// let playerScore = 0;
// let computerScore = 0;
// let computerChoice = '';
// let playerChoice = '';

// const getComputerChoice = () => {
//   const randomNumber =  Math.floor(Math.random()* 3) + 1;
    
//     switch(randomNumber){
//         case 1: 
//         computerChoice = 'scissors';
//         break;

//         case 2: 
//         computerChoice = 'rock';
//         break;

//         case 3:
//         computerChoice = 'paper';
//         break;
//     }
// }

// choiceButtons.addEventListener('click',(e) => {
//     const choice = e.target.closest('button');
//     if(!choice) return;

//     if(choice.classList.contains('rock_btn')) {
//         playerChoice = 'rock';
//         getComputerChoice();
//         handleChoice(playerChoice,computerChoice);
//     } else if (choice.classList.contains('paper_btn')) {
//         playerChoice = 'paper';
//         getComputerChoice();
//         handleChoice(playerChoice,computerChoice);
//     } else {
//         playerChoice = 'scissors';
//         getComputerChoice();
//         handleChoice(playerChoice,computerChoice);
//     }
// });

// const handleChoice = (playerChoice,computerChoice) => {
//     if(playerChoice == 'rock' && computerChoice == 'scissors' ||
//         playerChoice == 'scissors' && computerChoice == 'paper' ||
//         playerChoice == 'paper' && computerChoice == 'rock'){
//             playerScore += 1; 
//             humanScoreOutput.textContent = playerScore;
//             console.log("human");
//         } else if (playerChoice == 'rock' && computerChoice == 'rock' ||
//             playerChoice == 'scissors' && computerChoice == 'scissors' ||
//             playerChoice == 'paper' && computerChoice == 'paper'){ 
//                 console.log("draw");
//         } else {
//             computerScore += 1; 
//             computerScoreOutput.textContent = computerScore;
//             console.log('computer')
//         }
// }
