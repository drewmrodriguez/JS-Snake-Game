import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

function main(currentTime) {   // function that loops over on a set interval so it updates snake's postion.
    window.requestAnimationFrame(main)   //tells us when the computer can update the current frame.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;   // this variable converts seconds to milliseconds
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return   // if statements tells computer how often it should be rendering a new frame based on snake speed. Faster snake = more animations.
    lastRenderTime = currentTime; //lastRenderTime variable is reassigned the the current time.

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = "" // clears game board so snake moves w/o showing previous pieces behind it
    drawSnake(gameBoard)
}