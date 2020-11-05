const game = new Game();

const landingPage = document.querySelector(".landingPage");
const myButton = document.querySelector(".startButton");

myButton.addEventListener("click", function (event) {
  landingPage.style.display = "none";
  game.isRunning = true;
  gameTune.play();
});

function preload() {
  bg = loadImage("./images/background.png");
  char = loadImage("./images/output-onlinepngtools.png");
  record = loadImage("./images/vinyl-removebg-preview (1).png");
  gram = loadImage("./images/gramophone.png");
  goodEnd = loadImage("./images/handsUp.png");
  badEnd = loadImage("./images/GOSIA - GAME - 1 BLOKE BACK.jpg");
  deck = loadImage("./images/deck.png");
  gameTune = loadSound("./sounds/80seconds.mp3");
}

function setup() {
  console.log("setup");
  createCanvas(1440, 705);
  game.setup();
}

function draw() {
  if (game.isRunning === false) {
    return;
  }
  clear();
  game.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.character.jump();
  }
}
