export class Game {
  constructor(canvas, ctx) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvas = canvas;
    this.ctx = ctx;
  }
  init() {
    this.ctx.fillStyle = 'rgb(173, 216, 230)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // draw birb
    // remove start button
    document.body.removeChild(startbtn);
  }
  update() {}
  draw() {}
}
