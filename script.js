let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let box = 32;
let snakePos = [];
snakePos[0] = {
    x: 8 * box,
    y: 8 * box
}

function setBackground() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (i = 0; i < snakePos.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snakePos[0].x, snakePos[0].y, box, box)
    }
}

setBackground();
createSnake();