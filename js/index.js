window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    const img = new Image(); // Create new <img> element
    img.src = '/images/road.png';

    const ctx = document.querySelector('canvas').getContext('2d');

    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)

  }
};


