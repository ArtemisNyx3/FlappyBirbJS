import { Game } from './game.js';
import { GameState } from './util.js';

window.addEventListener('load', function () {
  document.body.style.visibility = 'visible';
  const game = new Game(
    document.querySelector('.gameWindow'),
    document.querySelector('.gameWindow').getContext('2d'),
  );

  const startbtn = this.document.querySelector('.startbtn');
  startbtn.onclick = function () {
    console.log('Start Game');
    game.init();
  };

  function animate() {
    console.log('Animate');
    if (game.state === GameState.GAME) {
      game.ctx.clearRect(0, 0, game.width, game.height);
      game.update();
      game.draw();
      requestAnimationFrame(animate);
    }
  }

  const animateInterval = setInterval(animate, 1000 / 60);
});
