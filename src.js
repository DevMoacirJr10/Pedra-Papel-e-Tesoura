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

console.log(getComputerChoice());

/*function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/
