const gameStartSection = document.querySelector(".game_start");
const playButton = document.querySelector(".play_btn");
const music = document.querySelector(".music");
const replayButton = document.querySelector(".replay_btn");
const replaySection = document.querySelector(".game_replay_section");
const replayOverlay = document.querySelector(".game_replay_overlay");

const gameCards = document.querySelector(".game_cards");

const loadingEl = document.querySelector(".loading");

const winnerAnnouncement = document.querySelector(".winner_announcement");

const battleArea = document.querySelector(".game_battle_area");
const speakerButton = document.querySelector(".speaker_button");
const speakerImg = document.querySelector(".speaker_img");

const playerScoreOutput = document.querySelector(".game_player_score");
const computerScoreOutput = document.querySelector(".game_computer_score");

const humanSelection = document.querySelector(".humanSelection");
const computerSelection = document.querySelector(".computerSelection");

let loading = false;
let loadloadInterval = "";
let resultTimeout = "";

let playerScore = 0;
let computerScore = 0;

let muted = true;

playButton.addEventListener("click", (e) => {
  e.preventDefault();

  gameStartSection.classList.add("hidden");
  loading = true;
  loadingLogic();
  loadingEl.classList.remove("hidden");
});

replayButton.addEventListener("click", (e) => {
  e.preventDefault();
  replaySection.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  playerScoreOutput.textContent = 0;
  computerScoreOutput.textContent = 0;
});

const loadingLogic = () => {
  if (loading == true) {
    loadInterval = setInterval(() => {
      if (loadingEl.textContent != "Players picking...") {
        loadingEl.textContent += ".";
      } else {
        loadingEl.textContent = "Players picking";
      }
    }, 500); // Change every 500ms
  } else {
    clearInterval(loadInterval);
    loadingEl.textContent = "Players picking";
  }
};

//PC CHOICE

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "scissors";
      break;

    case 2:
      computerChoice = "rock";
      break;

    case 3:
      computerChoice = "paper";
      break;
  }
};

//CARD CLICK

gameCards.addEventListener("click", (e) => {
  const choice = e.target.closest(".game_card");
  if (!choice) return;

  if (choice.getAttribute("id") === "rock") {
    playerChoice = "rock";
    getComputerChoice();
    handleChoice(playerChoice, computerChoice);
  } else if (choice.getAttribute("id") === "paper") {
    playerChoice = "paper";
    getComputerChoice();

    handleChoice(playerChoice, computerChoice);
  } else {
    playerChoice = "scissors";

    getComputerChoice();
    handleChoice(playerChoice, computerChoice);
  }
});

const handleChoice = (playerChoice, computerChoice) => {
  if ((playerScore != 5) & (computerScore != 5)) {
    if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "scissors" && computerChoice == "paper") ||
      (playerChoice == "paper" && computerChoice == "rock")
    ) {
      playerScore += 1;

      playerScoreOutput.textContent = playerScore;
      humanSelection.setAttribute(
        "src",
        `./assets/images/${playerChoice}_winner.png`
      );
      computerSelection.setAttribute(
        "src",
        `./assets/images/${computerChoice}_default.png`
      );
      winnerAnnouncement.textContent = "You win!";

      checkScore();
    } else if (
      (playerChoice == "rock" && computerChoice == "rock") ||
      (playerChoice == "scissors" && computerChoice == "scissors") ||
      (playerChoice == "paper" && computerChoice == "paper")
    ) {
      computerScoreOutput.textContent = computerScore;
      humanSelection.setAttribute(
        "src",
        `./assets/images/${playerChoice}_default.png`
      );
      computerSelection.setAttribute(
        "src",
        `./assets/images/${computerChoice}_default.png`
      );
      winnerAnnouncement.textContent = "DRAW!";
      checkScore();
    } else {
      computerScore += 1;

      computerScoreOutput.textContent = computerScore;
      humanSelection.setAttribute(
        "src",
        `./assets/images/${playerChoice}_default.png`
      );
      computerSelection.setAttribute(
        "src",
        `./assets/images/${computerChoice}_winner.png`
      );
      winnerAnnouncement.textContent = "Computer wins!";
      checkScore();
    }
  } else {
    gameFinish();
  }
};

const checkScore = () => {
  if (playerScore == 5 || computerScore == 5) {
    gameFinish();
  } else {
    battleArea.classList.remove("hidden");
    loadingEl.classList.add("hidden");
    gameCards.classList.add("game_cards_tucked");
    resultTimeout = setTimeout(() => {
      battleArea.classList.add("hidden");
      loadingEl.classList.remove("hidden");
      gameCards.classList.remove("game_cards_tucked");
    }, 3000);
    return;
  }
};

const gameFinish = () => {
  replaySection.classList.remove("hidden");
};

speakerButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (muted !== true) {
    speakerImg.setAttribute("src", "./assets/images/mute-speaker.png");
    music.muted = true;
    muted = true;
  } else {
    speakerImg.setAttribute("src", "./assets/images/playing-speaker.png");
    muted = false;
    music.muted = false;
  }
});
