window.addEventListener('load', function () {
  console.log('Loaded');
  document.body.style.visibility = 'visible';
  const canvas = document.querySelector('.gameWindow');
  const ctx = canvas.getContext('2d');

  const startbtn = this.document.querySelector('.startbtn');
  console.log(startbtn);

  startbtn.onclick = function () {
    console.log('clicked');
    init(canvas, ctx);
  };
  function init() {
    console.log('init');
    ctx.fillStyle = 'rgb(173, 216, 230)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw birb
    // remove start button
    document.body.removeChild(startbtn);
  }
});
