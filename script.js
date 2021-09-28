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
    number = number * ;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, )
}


// Checa se os botões clicados são os mesmos gerada no jogo
let checkOreder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
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
    });

    checkOrder();
}

