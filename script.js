let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let box = 32;
let snakePos = [];
snakePos[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}



function setBackground() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (i = 0; i < snakePos.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snakePos[i].x, snakePos[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', updateMov);

function updateMov (event) {
    if  (event.keyCode == 37 && direction != 'right') direction = 'left';
    if  (event.keyCode == 38 && direction != 'down') direction = 'up';
    if  (event.keyCode == 39 && direction != 'left') direction = 'right';
    if  (event.keyCode == 40 && direction != 'up') direction = 'down';
}



function startGame() {
    // confina a cobrinha no canvas
    if (snakePos[0].x > 15 * box && direction == "right") snakePos[0].x = 0;
    if (snakePos[0].x < 0 && direction == "left") snakePos[0].x = 16 * box;
    if (snakePos[0].y > 15 * box && direction == "down") snakePos[0].y = 0;
    if (snakePos[0].y < 0 && direction == "up") snakePos[0].y = 16 * box;

    // define a lógica do fim do jogo
    for (i = 1; i < snakePos.length; i++) {
        if (snakePos[0].x == snakePos[i].x && snakePos[0].y == snakePos[i].y) {
            clearInterval(gameBegin);
            alert('Game over :(');
        }
    }

    setBackground();
    createSnake();
    drawFood();

    let snakeX = snakePos[0].x;
    let snakeY = snakePos[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // possibilita posição aleatória da comida e aumento do corpo da cobrinha
    if (snakeX != food.x || snakeY != food.y) {
        snakePos.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snakePos.unshift(newHead);
}

let gameBegin = setInterval(startGame, 100)