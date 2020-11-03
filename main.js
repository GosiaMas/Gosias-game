const game = new Game();

function preload() {
  bg = loadImage("./images/background.png");
  char = loadImage("./images/output-onlinepngtools.png");
  record = loadImage("./images/vinyl-removebg-preview (1).png");
  gram = loadImage("./images/gramophone.png");
  goodEnd = loadImage("./images/handsUp.png");
  badEnd = loadImage("./images/empty2.png");
  //mySound =
}

function setup() {
  console.log("setup");
  createCanvas(window.innerWidth, window.innerHeight);
  game.setup();
}

function draw() {
  clear();
  game.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.character.jump();
  }
}
