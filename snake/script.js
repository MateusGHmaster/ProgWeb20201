const bordaTabuleiro = 'black';
const fundoTabuleiro = "white";
const corSnake = 'white';
const bordaSnake = 'black';
      
let snake = [
    {x: 190, y: 100},
    {x: 180, y: 100},
    {x: 170, y: 100}];

let pontos = 0;
let mudaDirecao = false;
let rangoX;
let rangoY;
let dx = 10;
let dy = 0;
const tabuleiro = document.getElementById("tabuleiro");
const tabuleiro_ctx = tabuleiro.getContext("2d");

var flag = 0; 
// 0 - parado
// 1 - rodando
// 2 - pausado
// 3 - perdeu

main(); //Inicia o jogo
geraRango(); 

document.addEventListener("keydown", alteraDirecao);
document.addEventListener("keydown", statusJogo);
      
function main() { //Mantem o jogo rodando
    if (fimDeJogo()){
        document.getElementById('fim').style.display = "block";
        return;
    }
    if(flag == 0 || flag == 2) return;
    mudaDirecao = false;
    setTimeout(function onTick() {
        limpaTabuleiro();
        desenhaRango();
        moveSnake();
        desenhaSnake();
        main();
    }, 100);
}

function limpaTabuleiro() { //Cria tabuleiro
tabuleiro_ctx.fillStyle = fundoTabuleiro;
tabuleiro_ctx.strokestyle = bordaTabuleiro;
tabuleiro_ctx.fillRect(0, 0, tabuleiro.width, tabuleiro.height);
tabuleiro_ctx.strokeRect(0, 0, tabuleiro.width, tabuleiro.height);
}

function desenhaSnake() { //Desenha snake na tela
snake.forEach(novoPedacoSnake)
}

function randomizaRango(min, max) { //Escolhe local aleatorio onde vai ser criada a comida
return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function geraRango() { //Gera comida em local aleatorio
rangoX = randomizaRango(0, tabuleiro.width - 10);
rangoY = randomizaRango(0, tabuleiro.height - 10);
snake.forEach(function comeuRango(pedaco) {
    const comeu = pedaco.x == rangoX && pedaco.y == rangoY;
    if (comeu) geraRango();
});
}

function desenhaRango() { //Desenha a comida na tela
tabuleiro_ctx.fillStyle = 'black';
tabuleiro_ctx.strokestyle = 'black';
tabuleiro_ctx.fillRect(rangoX, rangoY, 10, 10);
tabuleiro_ctx.strokeRect(rangoX, rangoY, 10, 10);
}

function novoPedacoSnake(novoPedaco) { //Cria nova parte da snake
tabuleiro_ctx.fillStyle = corSnake;
tabuleiro_ctx.strokestyle = bordaSnake;
tabuleiro_ctx.fillRect(novoPedaco.x, novoPedaco.y, 10, 10);
tabuleiro_ctx.strokeRect(novoPedaco.x, novoPedaco.y, 10, 10);
}

function fimDeJogo() { //Finaliza o jogo
for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y){
        flag = 3;
        return true;
    } 
}
const colisaoEsquerda = snake[0].x < 0;
const colisaoDireita = snake[0].x > tabuleiro.width - 10;
const colisaoCima = snake[0].y < 0;
const colisaoBaixo = snake[0].y > tabuleiro.height - 10;
if(colisaoEsquerda || colisaoDireita || colisaoCima || colisaoBaixo){
    flag = 3;
    return true;
}
return  false;
}

function statusJogo(acao){
    if(acao.keyCode == 80){
        if(flag == 1) flag = 2;
        else if(flag == 2){
        flag = 1;
        main();
        } 
    }
    if(acao.keyCode == 83){
    if(flag == 0){
        document.getElementById('inicia').style.display = "none";
        document.getElementById('pontos').style.display = "block";
        flag = 1;
        main();
    }
    if(flag == 3){
        flag = 1;
        document.getElementById('fim').style.display = "none";
        setTimeout(function onTick() {
            snake = [
            {x: 190, y: 100},
            {x: 180, y: 100},
            {x: 170, y: 100}
            ];
            pontos = 0;
            document.getElementById('pontos').innerHTML = pontos.toLocaleString('en-US', {minimumIntegerDigits: 5, useGrouping:false})
            mudaDirecao = false;
            dx = 10;
            dy = 0;
            geraRango();
            limpaTabuleiro();
            desenhaRango();
            moveSnake();
            desenhaSnake();
            main();
        }, 100);
    }
    }
}

function alteraDirecao(acao) { //Muda direcao e nao permite voltar para tras
const setaEsquerda = 37;
const setaDireita = 39;
const setaCima = 38;
const setaBaixo = 40;
if (mudaDirecao) return;
mudaDirecao= true;
const setaPressionada = acao.keyCode;
const paraCima = dy === -10;
const paraBaixo = dy === 10;
const paraDireita = dx === 10;
const paraEsquerda = dx === -10;
if (setaPressionada === setaEsquerda && !paraDireita) {
    dx = -10;
    dy = 0;
}
if (setaPressionada === setaCima && !paraBaixo) {
    dx = 0;
    dy = -10;
}
if (setaPressionada === setaDireita && !paraEsquerda) {
    dx = 10;
    dy = 0;
}
if (setaPressionada === setaBaixo && !paraCima) {
    dx = 0;
    dy = 10;
}
}

function moveSnake() { //Cria cabeca da snake, contabiliza pontos e remove cauda: "faz andar"
const cabeca = {x: snake[0].x + dx, y: snake[0].y + dy};
snake.unshift(cabeca);
const comePontos = snake[0].x === rangoX && snake[0].y === rangoY;
if (comePontos) {
    pontos += 1;
    document.getElementById('pontos').innerHTML = pontos.toLocaleString('en-US', {minimumIntegerDigits: 5, useGrouping:false})
    geraRango();
} else {
    snake.pop();
}
}