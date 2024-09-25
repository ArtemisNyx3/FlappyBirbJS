export class Birb {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = 180;
    this.y = 200;
  }

  update(input) {
    if (input.includes('ArrowUp')) this.y -= 12;
    this.y += 3;
  }
  draw() {
    //console.log('draw birb');
    this.game.ctx.fillStyle = 'rgb(240, 0, 0)';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
