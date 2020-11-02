const game = new Game();

function preload() {
  bg = loadImage("./images/background.png");
  char = loadImage("./images/output-onlinepngtools.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  game.setup();
}

function draw() {
  clear();
  game.draw();
}
