import { Birb } from './birb.js';
import { GameState } from './util.js';

export class Game {
  constructor(canvas, ctx) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvas = canvas;
    this.ctx = ctx;
    this.birb = new Birb(this);
    this.state = GameState.TITLE;
  }
  init() {
    this.ctx.fillStyle = 'rgb(173, 216, 230)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.state = GameState.GAME;
    // remove start button
    document.body.removeChild(startbtn);
    console.log(this);
  }
  update() {
    this.birb.update();
  }
  draw() {
    this.birb.draw();
  }
}
