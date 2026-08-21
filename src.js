let humanScore = 0;
let computerScore = 0;

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

  return escolha;
}

function playRound(humanChoice, computerChoice) {

}

console.log(getHumanChoice());
console.log(getComputerChoice());

/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/
