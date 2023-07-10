//Get game Elements =================================

let gameArea = document.querySelector(".game-area");
let winnerText = document.querySelector("winner-text");
let playerPaddle = document.querySelector(".player-paddle");
let computerPaddle = document.querySelector(".computer-paddle");
let ball = document.querySelector(".ball");
let playerScore = document.querySelector(".player_1_score");
let computerScore = document.querySelector(".player_2_score");
let startGameButton = document.querySelector(".start-btn");
let restartGameButton = document.querySelector(".restart-btn");

// Game Variables and Functions ======================

////Get coordinates from these elements
let playerPadCoord = playerPaddle.getBoundingClientRect();
let computerPadCoord = computerPaddle.getBoundingClientRect();
let ballCoord = ball.getBoundingClientRect();

//Ball X,Y positions and velocities .
let ballXPosition = 350;
let ballYPosition = 100;
let ballXVelocity = 1;
let ballYVelocity = 1;

//Player paddle Y position and velocity
let playerPadYPosition = 200;
let playerPadYVelocity = 3.15;

//Computer paddle Y position and velocity
let computerPadYPosition = 400;
let computerPadYVelocity = 3.15;

//reset ball and computer paddle positions
function resetBallPosition() {
  ballXPosition = 350;
  ballYPosition = 100;
  ballXVelocity = 1;
  ballYVelocity = 1;

  computerPadYPosition = 400;
  computerPadYVelocity = 3.15;
}

//Game Elements Modification ========================

//Size of the game area (in pixels)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

//Size of the ball (in px)
const BALL_SIZE = 20;

//Event Listeners ===================================

//Track user key presses
document.addEventListener("keydown", (e) => {
  if (e.code == "KeyW") {
    if (playerPadYPosition >= 10) {
      playerPadYPosition -= 15;//move 15px up
    }
  } else if (e.code == "KeyS") {
    if (playerPadYPosition <= GAME_AREA_HEIGHT - PADDLE_HEIGHT - 10) {
      playerPadYPosition += 15;//move 15px down
    }
  }

  //maintain player paddle within the game area
  if (
    playerPadYPosition + PADDLE_HEIGHT > GAME_AREA_HEIGHT ||
    playerPadYPosition < 0
  ) {
    return;
  } else {
    playerPaddle.style.top = `${playerPadYPosition}px`;
  }
  playerPadCoord = playerPaddle.getBoundingClientRect();
});
