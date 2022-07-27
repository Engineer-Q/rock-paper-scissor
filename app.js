let playerScore = 0;
let compScore = 0;
const arrOfChoices = ["rock", "paper", "scissor"];


function getComputerChoice (){
  const arrOfChoices = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random()*arrOfChoices.length);
  const compChoice = arrOfChoices[randomNum];
  return compChoice;
}

function playRound(playerSelection, computerSelection){ 
  if(playerSelection==='rock' && computerSelection==='rock'){
    return 'you tied! you both poicked rock'
  }else if (playerSelection=== 'scissor' && computerSelection==='scissor'){
    return 'you tied! you both picked scissor'
  }else if (playerSelection=== 'paper' && computerSelection==='paper'){
    return 'you tied! you both picked paper'
  }else if (playerSelection==='scissor' && computerSelection==='rock'){
    compScore++;
    return 'you lost! rock crushes scissor'
     
  }else if (playerSelection==='scissor' && computerSelection==='paper'){
    playerScore++;
    return 'you won! scissor cuts paper'
     
  }else if (playerSelection==='rock' && computerSelection==='paper'){
    compScore++;
    return 'you lost! paper covers rock'
    
  }else if (playerSelection==='rock' && computerSelection==='scissor'){
    playerScore++;
    return ' you won! rock crushes scissor'
    
  }else if (playerSelection==='paper' && computerSelection === 'scissor'){
    compScore++;
    return 'you lost scissor cuts paper'
    
  }else if (playerSelection==='paper' && computerSelection==='rock'){
    playerScore++;
    return 'you won! paper cover rock' 
  }
}
playRound()

function game(){
  
  for(let i = 0; i<5; i++){
    const playerSelection = prompt('type your choice', 'rock, paper, scissor').toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection)
  }

  if (playerScore>compScore){
    return 'you beat the computer'
  } else if (playerScore<compScore){
    return 'you got beat by a computer'
  }else{
    return 'tied'
  }
}
console.log(game());



