import { Birb } from './birb.js';
import InputHandler from './input.js';
import { GameState } from './util.js';

export class Game {
  constructor(canvas, ctx) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvas = canvas;
    this.ctx = ctx;
    this.birb = new Birb(this);
    this.state = GameState.TITLE;
    this.input = new InputHandler();
  }
  init() {
    // this.ctx.fillStyle = 'rgb(61, 201, 244)';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = 'rgb(61, 201, 244)';
    //this.state = GameState.GAME;
    // remove start button
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
  }
  draw() {
    this.birb.draw();
  }
}
