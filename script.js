const gameStartSection = document.querySelector('.game_start');
const playButton = document.querySelector('.play_btn');

const replayButton = document.querySelector('.replay_btn');
const replaySection = document.querySelector('.game_replay_section')
const replayOverlay = document.querySelector('.game_replay_overlay');
const closeButton = document.querySelector('.close_btn');

const closeOverlay  = [replayButton, closeButton, replayOverlay];

playButton.addEventListener('click', (e) => {
e.preventDefault();

gameStartSection.classList.add('hidden');
})

closeOverlay.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        replaySection.classList.add('hidden');
        })
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
