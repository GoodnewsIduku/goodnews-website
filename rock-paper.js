  const rockButton = document.getElementById('rock');
  const paperButton  = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const resetButton = document.getElementById('reset');
  const autoPlayButton = document.querySelector('.autoPlay');
  const underlinedText = document.querySelector('.Underlined');
  const enterButton = document.querySelector('.js-name-button');
  const playerNameButton = document.getElementById('js-player-name');
  let score = {wins:0, ties:0, loss:0};

  let score1 = document.querySelector('.js-score1');
  let score2 = document.querySelector('.js-score2');
  let score3 = document.querySelector('.js-score3');
  let finalScore = document.querySelector('.js-finalScore');
  let yourMove = document.querySelector('.js-yourMove');
  let computerMove = document.querySelector('.js-computerMove');
  
  function playGame(playerChoice){

    const choices = ['rock', 'paper','scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];

    if(playerChoice===computerChoice){
      score1.innerHTML = 0;
      score2.innerHTML = 1;
      score3.innerHTML = 0;
      score.ties++;
    }else if((playerChoice==='rock' && computerChoice==='scissors') || (playerChoice==='paper' && computerChoice==='rock') || (playerChoice==='scissors' && computerChoice==='paper')){
      yourMove.innerHTML = `Your Move: ${playerChoice}`;
      computerMove.innerHTML = `Computer Move: ${computerChoice}`;
      score1.innerHTML = 1;
      score2.innerHTML = 0;
      score3.innerHTML = 0;
      score.wins++;
    }else{
      yourMove.innerHTML = `Your Move: ${playerChoice}`;
      computerMove.innerHTML = `Computer Move: ${computerChoice}`;
      score1.innerHTML = 0;
      score2.innerHTML = 0;
      score3.innerHTML = 1;
      score.loss++;
    }
    
    yourMove.innerHTML = `Your Move: ${playerChoice}<img src="images-rock-paper-scissors/${playerChoice}-emoji.png" class="move">`;

    computerMove.innerHTML = `Computer Move: ${computerChoice}<img src="images-rock-paper-scissors/${computerChoice}-emoji.png" class="move">`;

}

let autoPlaying = false;
let intervalId;

function autoPlay(){
  if(!autoPlaying){
    intervalId = setInterval(function(){
      const choices = ['rock', 'paper','scissors'];
      let randomComputer = choices[Math.floor(Math.random()*(choices.length))];
      playGame(randomComputer);
    }, 1000);
    autoPlaying = true;
  }else{
    clearInterval(intervalId);
    autoPlaying = false;
  }
  
}

  
function playerDetails(){
  let name;
  let status;
  name = document.getElementById('js-player-name');
  if(score.wins>score.loss){
    status = 'You won';
  }else if(score.win<score.loss){
    status = 'You lose';
  }else{
    status = 'It is a tie'
  }

  document.querySelector('.js-name-result').innerHTML = `Hey ${name.value}, your final score is - wins: ${score.wins}, losses: ${score.loss}. ${status}`;

};

 
rockButton.addEventListener('click', function(){playGame('rock');});

paperButton.addEventListener('click', function(){playGame('paper');});

scissorsButton.addEventListener('click', function(){playGame('scissors');});

resetButton.addEventListener('click',()=>{
  score = {wins:0, ties:0, loss:0};
  finalScore.innerHTML = `Final scores displays here!`;yourMove.innerHTML = `Your move displays here!`;
  computerMove.innerHTML = `Computer move displays here!`; 
})

autoPlayButton.addEventListener('click', function(){
  autoPlay();
})

underlinedText.addEventListener('click', ()=>{
  finalScore.innerHTML=`Wins:${score.wins},  Ties:${score.ties},  Losses:${score.loss}`;
})

playerNameButton.addEventListener('keydown', function(event){
  if(event.key=='Enter'){
    playerDetails();
    }
})

enterButton.addEventListener('click', function(){
  playerDetails();
})

document.body.addEventListener('keydown',(event)=>{
  if(event.key=='r'){
    playGame('rock');
  }else if(event.key=='p'){
    playGame('paper');
  }else if(event.key=='s'){
    playGame('scissors');
  }
})