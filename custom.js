'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🤣Corret Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;



let secretNumber = Math.trunc( Math.random()*20)+1;

let score =20;
let highscore =0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}






document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess){
    // document.querySelector('.message').textContent = 'No number🙌!'
    
displayMessage('No number🙌!');

    // 같음
  }else if (guess === secretNumber){
    // document.querySelector('.message').textContent = '🤣Corret Number';
    displayMessage(' Correct Number!');
    document.querySelector('body').style.background = 'lightgreen';
    document.querySelector('.number').style.width ='30rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score >highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    // is wrong
  } else if(guess !== secretNumber) {
    if(score >1){
      // document.querySelector('.message').textContent= guess > secretNumber ?'Hight number😂': 'Low number';
      displayMessage(guess > secretNumber ?'Hight number😂': 'Low number');
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage('you lose');
      // document.querySelector('.message').textContent = 'you lose';
      document.querySelector('.score').textContent = 0;
    }
  } 
  // else if (guess > secretNumber){
  //   if(score >1){
  //     document.querySelector('.message').textContent='Hight number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = 'you lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
    
  // }
  // // low
  // else if (guess < secretNumber){
  //   if(score >1){
  //     document.querySelector('.message').textContent='low number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = 'you lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click',function(){
  score = 20; 
  secretNumber = Math.trunc( Math.random()*20)+1;
  
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('number').style.width = '15rem'
});