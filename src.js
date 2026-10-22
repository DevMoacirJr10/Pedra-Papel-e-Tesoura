let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const roundAtual = document.querySelector("#round-atual");
const placarAtual = document.querySelector("#placar-atual");
const menssagemAtual = document.querySelector("#menssagem-atual");

//Função de faz o PC escolher uma opção
function getComputerChoice() {
    let number = 3;
    let resultado;
    let random = Math.floor(Math.random() * number);

    if (random === 0) {
        resultado = "Pedra";
    } else if (random === 1) {
        resultado = "Papel";
    } else if (random === 2) {
        resultado = "Tesoura";
    }

    return resultado;
}

//Zera os valoress e mostra o resultado final
function finalizarGame() {
    btnPedra.disabled = true;
    btnPapel.disabled = true;
    btnTesoura.disabled = true;
    
    if (humanScore > computerScore) {
        menssagemAtual.innerHTML = `<p class="menssagem-final-v">Fim de jogo! Parabéns, você venceu!</p>`;
    } else if (computerScore > humanScore) {
        menssagemAtual.innerHTML = `<p class="menssagem-final-d">Fim de jogo! Você perdeu para o computador!</p>`;
    } else {
        menssagemAtual.innerHTML = `<p class="menssagem-final-e">Fim de jogo! Empate!</p>`;
    }
}

//Função que roda o jogo e exibe uma mensagem correspondente a escolha
function playRound(humanChoice, computerChoice) {
    rounds++;
    roundAtual.innerHTML = `<h2 class="title-round">Round ${rounds}</h2>`;

    if (humanChoice === "Pedra" && computerChoice === "Pedra") {
        menssagemAtual.innerHTML = "<p>Empate! Pedra empatou com Pedra</p>";
    } else if (humanChoice === "Pedra" && computerChoice === "Papel") {
        computerScore += 1;
        menssagemAtual.innerHTML = "<p>Você perdeu! Papel venceu Pedra</p>";
    } else if (humanChoice === "Pedra" && computerChoice === "Tesoura") {
        humanScore += 1;
        menssagemAtual.innerHTML = "<p>Você venceu! Pedra venceu Tesoura</p>";
    } else if (humanChoice === "Papel" && computerChoice === "Pedra") {
        humanScore += 1;
        menssagemAtual.innerHTML = "<p>Você venceu! Papel venceu Pedra</p>";
    } else if (humanChoice === "Papel" && computerChoice === "Papel") {
        menssagemAtual.innerHTML = "<p>Empate! Papel empatou com Papel</p>";
    } else if (humanChoice === "Papel" && computerChoice === "Tesoura") {
        computerScore += 1;
        menssagemAtual.innerHTML = "<p>Você perdeu! Tesoura venceu Papel</p>";
    } else if (humanChoice === "Tesoura" && computerChoice === "Pedra") {
        computerScore += 1;
        menssagemAtual.innerHTML = "<p>Você perdeu! Pedra venceu Tesoura</p>";
    } else if (humanChoice === "Tesoura" && computerChoice === "Papel") {
        humanScore += 1;
        menssagemAtual.innerHTML = "<p>Você venceu! Tesoura venceu Papel</p>";
    } else if (humanChoice === "Tesoura" && computerChoice === "Tesoura") {
        menssagemAtual.innerHTML = "<p>Empate! Tesoura empatou com Tesoura</p>";
    }

    if(rounds === 5) {
        finalizarGame();
    }
}

//Exibir placar
function placar(player, computer, playerScore, pcScore) {

   placarAtual.innerHTML = `
        <p>Você: ${player}</p>
        <p>PC: ${computer}</p>
        <p>
            <span class="sp-player">Você: ${playerScore}</span> 
                X 
            <span class="sp-pc">PC: ${pcScore}</span>
        </p>
    `;
}

//Ouvintes botões e mensagens exibidas de acordo com a escolha
const btnPedra = document.querySelector("#btn-pedra");
btnPedra.addEventListener("click", () => {
    const humanSelection = "Pedra";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    placar(humanSelection, computerSelection, humanScore, computerScore);
});

const btnPapel = document.querySelector("#btn-papel");
btnPapel.addEventListener("click", () => {
    const humanSelection = "Papel";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    placar(humanSelection, computerSelection, humanScore, computerScore);
});

const btnTesoura = document.querySelector("#btn-tesoura");
btnTesoura.addEventListener("click", () => {
    const humanSelection = "Tesoura";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    placar(humanSelection, computerSelection, humanScore, computerScore);
});

//Botão para reiniciar o jogo antes de acabar as rodadas
const btnReload = document.querySelector("#btn-reload");
btnReload.addEventListener("click", () => {
    location.reload();
});