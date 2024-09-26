import { Birb } from './birb.js';
import InputHandler from './input.js';
import Pipe from './pipe.js';
import { GameState } from './util.js';

export class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.birb = new Birb(this);
    this.state = GameState.TITLE;
    this.input = new InputHandler();
    this.pipes = [];
  }
  init() {
    this.canvas.style.backgroundColor = 'rgb(61, 201, 244)';

    document.body.removeChild(startbtn);
    this.draw();

    // wait 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  update() {
    this.birb.update(this.input.keys);

    // score

    // Pipes

    if (this.pipes.length === 0) Pipe.generatePipe(this);

    for (let i = 0; i < this.pipes.length; i++) {
      if (this.pipes[i].x < 0) this.pipes.splice(this.pipes[i], 1);
      else if (this.pipes[i].x < this.canvas / 2) Pipe.generatePipe(this);
      else this.pipes[i].update();
    }
  }
  draw() {
    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].draw();
    }
    this.birb.draw();
  }
}
