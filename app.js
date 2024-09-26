import { Game } from './game.js';
import { GameState } from './util.js';
import Pipe from './pipe.js';

window.addEventListener('load', function () {
  document.body.style.visibility = 'visible';
  const game = new Game(
    document.querySelector('.gameWindow'),
    document.querySelector('.gameWindow').getContext('2d'),
  );

  const startbtn = this.document.querySelector('.startbtn');
  startbtn.onclick = async function () {
    console.log('Start Game');

    const result = await game.init();
    console.log(result);
    game.state = GameState.GAME;
  };

  function animate() {
    //console.log('Animate');
    window.requestAnimationFrame(animate);
    if (game.state === GameState.GAME) {
      game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
      game.update();
      game.draw();
    }
  }
  window.requestAnimationFrame(animate);
  console.log(game.state);
});
