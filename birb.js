export class Birb {
  constructor(game) {
    this.game = game;
    this.width = 20;
    this.height = 20;
    this.x = 5;
    this.y = 5;
  }

  update() {}
  draw() {
    console.log('Drawinf birb');

    this.game.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
