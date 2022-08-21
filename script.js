let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let box = 32;
let snakePos = [];
snakePos[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function setBackground() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (i = 0; i < snakePos.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snakePos[i].x, snakePos[i].y, box, box)
    }
}

function startGame() {
    setBackground();
    createSnake();

    let snakeX = snakePos[0].x;
    let snakeY = snakePos[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snakePos.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snakePos.unshift(newHead);
}

let gameBegin = setInterval(startGame, 100)