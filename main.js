const game = new Game();
function preload() {
  bg = loadImage("./images/background.png");
  char = loadImage("./images/output-onlinepngtools.png");
  record = loadImage("./images/vinyl-removebg-preview (1).png");
  gram = loadImage("./images/gramophone.png");
  goodEnd = loadImage("./images/handsUp.png");
  badEnd = loadImage("./images/empty2.png");
  // soundFormats("mp3", "ogg");
  // mySound = loadSound(
  //   "./images/60_Second-2020-07-09_-_Twilight_Dubstep_-_www.FesliyanStudios.com_Steve_Oxen.mp3"
  // );
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
