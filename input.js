export default class InputHandler {
  constructor() {
    this.keys = [];

    window.addEventListener('keydown', (e) => {
      //console.log(e.key, this.keys);
      if ((e.key == 'Escape' || e.key == 'ArrowUp') && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });

    window.addEventListener('keyup', (e) => {
      //console.log(e.key, this.keys);
      if ((e.key == 'Escape' || e.key == 'ArrowUp') && this.keys.indexOf(e.key) != -1) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
