let order = [];
let clickedOrder = []
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// Criando ordem aleatória de cores
let shufffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for( let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number{i} + 1);
    }
}


// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}


// Checa se os botões clicados são os mesmos gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação ${score}\nVocê acertou!\nIniciando próximo nível`)
        nextLevel();
    }
}

// Função para o click do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);


}

// Função que retorna a cor

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

// Função para proximo nível do jogo

let nextLevel = () => {
    score++;
    shufffleOrder();
}

// Função para gameover

let gameOver = () => {
    alert(`Pontação ${score}\nVocê perdeu o jogo\nClick em Ok para reiniciar`)
    order = [];
    clickedOrder = [];

    playGame();
}

// Função de início do jogo

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    nextLevel();

}

// Eventos de clique para as cores

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Início do jogo 

playGame();