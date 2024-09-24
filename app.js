import { Game } from './game.js';
import { Birb } from './birb.js';

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

  // function animate() {
  //   game.draw();
  //   requestAnimationFrame(animate);
  // }
  // animate();
});
