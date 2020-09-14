 import { getInputDirection } from "./input.js"
 export const SNAKE_SPEED = 1; // How many times snake moves per second, so it moves 2 every second
 const snakeBody = [{ x: 11, y: 11 }]  //starting position

 export function update() {
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) { // this for loop updates snake position to where you move and the following parts of the snake take the space of the head and so on
        snakeBody[i + 1] = {...snakeBody[i]} // shifts entire snake to where its parent is essentially is
    }

    snakeBody[0].x += inputDirection.x // takes the input direction from the  input function and passes it thru update function
    snakeBody[0].y += inputDirection.y
 }

 export function draw(gameBoard) {
    snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.y
      snakeElement.style.gridColumnStart = segment.x
      snakeElement.classList.add('snake')
      gameBoard.appendChild(snakeElement)
    })
  }