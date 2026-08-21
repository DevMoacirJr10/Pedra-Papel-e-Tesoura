let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

function getHumanChoice() {
  let escolha = prompt("Escolha: Pedra, Papel ou Tesoura");
  let maiusculo = escolha[0].toUpperCase();
  let minusculo = escolha.slice(1).toLowerCase();
  let escolhaCaseSensitive = maiusculo + minusculo;

  return escolhaCaseSensitive;
}

function playRound(humanChoice, computerChoice) {
  if (humanSelection === "Pedra" && computerSelection === "Pedra") {
    console.log("Empate! Pedra empatou com Pedra");
  } else if (humanSelection === "Pedra" && computerSelection === "Papel") {
    computerScore += 1;
    console.log("Você perdeu! Papel venceu Pedra");
  } else if (humanSelection === "Pedra" && computerSelection === "Tesoura") {
    humanScore += 1;
    console.log("Você venceu! Pedra venceu Tesoura");
  } else if (humanSelection === "Papel" && computerSelection === "Pedra") {
    humanScore += 1;
    console.log("Você venceu! Papel venceu Pedra");
  } else if (humanSelection === "Papel" && computerSelection === "Papel") {
    console.log("Empate! Tesoura empatou com Tesoura");
  } else if (humanSelection === "Papel" && computerSelection === "Tesoura") {
    computerScore += 1;
    console.log("Você perdeu! Tesoura venceu Papel");
  } else if (humanSelection === "Tesoura" && computerSelection === "Pedra") {
    computerScore += 1;
    console.log("Você perdeu! Pedra venceu Tesoura");
  } else if (humanSelection === "Tesoura" && computerSelection === "Papel") {
    humanScore += 1;
    console.log("Você venceu! Tesoura venceu Papel");
  } else if (humanSelection === "Tesoura" && computerSelection === "Tesoura") {
    console.log("Empate! Tesoura empatou com Tesoura");
  }
}

console.log(`Você: ${humanSelection} `);
console.log(`PC: ${computerSelection} `);
playRound(humanSelection, computerSelection);
console.log(`Você: ${humanScore} X PC: ${computerScore}`);
