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
