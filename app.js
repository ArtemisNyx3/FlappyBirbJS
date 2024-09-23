document.addEventListener('DOMContentLoaded', () => {
  const birb = document.querySelector('.birb');
  const gameWindow = document.querySelector('.game_window');

  let birbBottom = 275;
  let birbLeft = 175;
  gravity = 2;
  let birbInterval = setInterval(gameStart, 15);

  addEventListener('click', fly);
  generatePipes();
  // console.log('appended chid');

  function gameStart() {
    birbBottom -= 2;
    birb.style.bottom = birbBottom + 'px';
    birb.style.left = birbLeft + 'px';
  }
  function fly() {
    birbBottom += 55;
    birb.style.bottom = birbBottom + 'px';
  }
  function generatePipes() {
    let pipeLeft = 400;
    let pipeHeight = Math.random() * 300;
    let pipeBottom = 0;
    const pipe = document.createElement('div');
    pipe.classList.add('pipes');
    gameWindow.appendChild(pipe);
    pipe.style.left = pipeLeft + 'px';
    pipe.style.bottom = pipeBottom + 'px';
    pipe.style.height = pipeHeight + 'px';
    // console.log('appended chid');
    console.log(pipe);
    function movePipe() {
      pipeLeft -= 2;
      // console.log('PipeLeft = ' + pipeLeft);
      pipe.style.left = pipeLeft + 'px';
      if (pipeLeft === -50) {
        console.log('Here');
        clearInterval(pipeInterval);
        gameWindow.removeChild(pipe);
      }
    }
    let pipeInterval = setInterval(movePipe, 15);
    setTimeout(generatePipes, 3000);
  }
});
