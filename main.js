const game = new Game();

function preload() {
  bg = loadImage("./images/background.png");
  char = loadImage("./images/output-onlinepngtools.png");
  record = loadImage("./images/vinyl-removebg-preview (1).png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  game.setup();
}

function draw() {
  clear();
  game.draw();
}
