class Game {
  constructor() {
    console.log("this is the game constructor");
    this.background = new Background();
    this.character = new Character();
    this.obstacles = [];
  }

  setup() {
    this.background.setup();
  }

  draw() {
    this.background.draw();
    this.character.draw();
    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      // everytime the obstacle goes off canvas, remove it from the array
      if (obstacle.x + obstacle.width <= 0) {
        this.obstacles.splice(index, 1);
      }
    });
  }
}
