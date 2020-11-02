class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
    // this.obstacle = new Obstacle();
  }

  setup() {
    this.background.setup();
  }

  draw() {
    this.background.draw();
    this.character.draw();
    // this.obstacle.draw();
  }
}
