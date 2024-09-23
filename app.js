document.addEventListener('DOMContentLoaded', () => {
  /* 
  Wait for click start
  
  Then uncomment the code below



  
   */
  // const birb = document.querySelector('.birb');
  // const gameWindow = document.querySelector('.game_window');
  // let birbBottom = 275;
  // gravity = 2;
  // let game = false;
  // let gameInterval = setInterval(gameStart, 15);
  // document.addEventListener('click', fly);
  // generatePipes();
  // // console.log('appended chid');
  // function gameStart() {
  //   birbBottom -= 2;
  //   birb.style.bottom = birbBottom + 'px';
  // }
  // function fly() {
  //   birbBottom += 60;
  //   birb.style.bottom = birbBottom + 'px';
  // }
  // function generatePipes() {
  //   let pipeLeft = 400;
  //   let pipeHeight = Math.random() * 300;
  //   let pipeBottom = 0;
  //   let pipeWidth = 60;
  //   const pipe = document.createElement('div');
  //   const pipe1 = document.createElement('div');
  //   pipe.classList.add('pipes');
  //   pipe1.classList.add('pipes');
  //   if (!game) gameWindow.appendChild(pipe);
  //   pipe.style.left = pipeLeft + 'px';
  //   pipe.style.bottom = pipeBottom + 'px';
  //   pipe.style.height = pipeHeight + 'px';
  //   // console.log('appended chid');
  //   //console.log(pipe);
  //   function movePipe() {
  //     pipeLeft -= 2;
  //     // console.log('PipeLeft = ' + pipeLeft);
  //     pipe.style.left = pipeLeft + 'px';
  //     if (pipeLeft === -50) {
  //       clearInterval(pipeInterval);
  //       gameWindow.removeChild(pipe);
  //     }
  //     //game over conditions
  //     //if (birbBottom <= pipeHeight - 30) gameOver();
  //     if (birbBottom <= 0) {
  //       gameOver();
  //       clearInterval(pipeInterval);
  //     }
  //   }
  //   let pipeInterval = setInterval(movePipe, 15);
  //   if (!game) setTimeout(generatePipes, 3000);
  // }
  // function gameOver() {
  //   clearInterval(gameInterval);
  //   game = true;
  //   document.removeEventListener('click', fly);
  //   console.log('gameOver');
  // }
});
