import { BIRB_SIZE, PIPE_GAP, PIPE_SPEED } from './util.js';

export default class Pipe {
  constructor(x, y, height, game) {
    this.x = x;
    this.y = y;
    this.height = height; // check for max height
    this.game = game;
  }
  update() {
    this.x -= PIPE_SPEED;
  }
  draw() {
    this.game.ctx.fillStyle = 'rgb(0, 255, 0)';
    this.game.ctx.fillRect(this.x, this.y, BIRB_SIZE, this.height);
  }
  static generatePipe(game) {
    console.log('Generating Pipe');
    let height = Math.floor(Math.random() * 300);

    // top Pipe
    let temp = new Pipe(game.canvas.width - BIRB_SIZE, 0, height, game);
    game.pipes.push(temp);
    console.log(temp);

    //bottom pipe
    let temp1 = new Pipe(
      game.canvas.width - BIRB_SIZE,
      height + PIPE_GAP,
      game.canvas.height - height - PIPE_GAP,
      game,
    );
    game.pipes.push(temp1);
    console.log(temp1);
  }
}
