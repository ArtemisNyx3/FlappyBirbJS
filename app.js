document.addEventListener('DOMContentLoaded', () => {
  const birb = document.getElementById('birb');
  const score = document.getElementById('score');
  let position = 250;
  const gravity = 2;
  let gameState = false;

  //game loop
  document.addEventListener('keyup', control);
  birbMovement();

  function control(k) {
    if (k.code === 'Space') {
      console.log('FlyJump');
      let timeout = 10;
      let timerId = setInterval(function () {
        if (timeout === 0) {
          clearInterval(timerId);
        }

        position += 6;
        timeout--;
        birb.style.bottom += position + 'px';
      }, 5);
    }
  }

  function birbMovement() {
    //fall down
    let timerId = setInterval(function () {
      //console.log(position);
      position -= gravity;
      birb.style.bottom = position + 'px';
    }, 20);
  }
});
