function playGame() {
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
    let maiusculo = escolha[0].toUpperCase();
    let minusculo = escolha.slice(1).toLowerCase();
    let escolhaCaseSensitive = maiusculo + minusculo;

    return escolhaCaseSensitive;
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Pedra" && computerChoice === "Pedra") {
      console.log("Empate! Pedra empatou com Pedra");
    } else if (humanChoice === "Pedra" && computerChoice === "Papel") {
      computerScore += 1;
      console.log("Você perdeu! Papel venceu Pedra");
    } else if (humanChoice === "Pedra" && computerChoice === "Tesoura") {
      humanScore += 1;
      console.log("Você venceu! Pedra venceu Tesoura");
    } else if (humanChoice === "Papel" && computerChoice === "Pedra") {
      humanScore += 1;
      console.log("Você venceu! Papel venceu Pedra");
    } else if (humanChoice === "Papel" && computerChoice === "Papel") {
      console.log("Empate! Papel empatou com Papel");
    } else if (humanChoice === "Papel" && computerChoice === "Tesoura") {
      computerScore += 1;
      console.log("Você perdeu! Tesoura venceu Papel");
    } else if (humanChoice === "Tesoura" && computerChoice === "Pedra") {
      computerScore += 1;
      console.log("Você perdeu! Pedra venceu Tesoura");
    } else if (humanChoice === "Tesoura" && computerChoice === "Papel") {
      humanScore += 1;
      console.log("Você venceu! Tesoura venceu Papel");
    } else if (humanChoice === "Tesoura" && computerChoice === "Tesoura") {
      console.log("Empate! Tesoura empatou com Tesoura");
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("==========================================");
    playRound(humanSelection, computerSelection);
    console.log(`Você: ${humanSelection} `);
    console.log(`PC: ${computerSelection} `);
    console.log(`Você: ${humanScore} X PC: ${computerScore}`);
  }

  console.log("==========================================");
  console.log("FIM DE JOGO!!!");
  if (humanScore > computerScore) {
    console.log("Parabéns você ganhou o jogo!!!");
  } else if (humanScore < computerScore) {
    console.log("Game Over!!!");
  } else {
    console.log("O jogo terminou empatado!");
  }
  console.log(`Placar: Você ${humanScore} X PC ${computerScore}`);
  console.log("==========================================");
}

playGame();
