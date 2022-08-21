let playerScore = 0
let computerScore = 0;

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random()* choices.length)
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        return 'its a tie. you both picked rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'its a tie. you both picked paper'
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'its a tie. you both picked scissors'
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++
       return 'you lose! paper covers rock' 
       
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return 'you win! rock crushes scissors' 
          
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++ 
        return 'you win! paper covers rock' 
         
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){     
        computerScore++
        return 'you lose! scissors cut paper' 
           
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++
        return 'you lose! rock crushes scissors' 
          
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){     
        playerScore++
        return 'you win! scissors cut paper'
         
    } 
       
}

function game() {
    
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('rock paper scissors', 'type your choice').toLowerCase();
        console.log(playerSelection)
        const computerSelection = getComputerChoice();
        console.log(computerSelection)
        console.log(playRound(playerSelection,computerSelection))
        
        console.log(playerScore)
        console.log(computerScore)     
    }
    function final() {
    
        if (playerScore>computerScore){
            console.log('you beat the computer') 
           } else if (playerScore<computerScore){
            console.log('you got beat by a computer') 
           }else{
            console.log('tied') 
           }
    }
    final()
    
}
game()
