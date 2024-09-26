import { BIRB_X, GRAVITY, JUMP } from './util';

export class Birb {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = BIRB_X;
    this.y = 200;
  }

  update(input) {
    if (input.includes('ArrowUp')) this.y += JUMP;
    this.y += GRAVITY;
  }
  draw() {
    //console.log('draw birb');
    this.game.ctx.fillStyle = 'rgb(250, 0, 0)';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
