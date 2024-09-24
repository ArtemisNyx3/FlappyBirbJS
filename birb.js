export class Birb {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = 180;
    this.y = 200;
  }

  update() {}
  draw() {
    this.game.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
