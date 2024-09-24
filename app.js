import { Game } from './game.js';

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
});
