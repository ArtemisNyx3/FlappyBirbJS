import { Birb } from './birb.js';

export class Game {
  constructor(canvas, ctx) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvas = canvas;
    this.ctx = ctx;
    this.birb = new Birb(this);
  }
  init() {
    this.ctx.fillStyle = 'rgb(173, 216, 230)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // remove start button
    document.body.removeChild(startbtn);
    console.log(this);
    this.birb.draw();
  }
  update() {}
  draw() {
    this.birb.draw();
  }
}
