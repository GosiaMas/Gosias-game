// // The obstacle class is the blueprint for each obstacle that will be created
class Obstacle {
  constructor() {
    this.x = window.innerWidth;
    this.width = 50;
    this.height = 50;
    this.y = random(100, 550);
  }

  draw() {
    image(record, this.x, this.y, this.width, this.height);
    this.x -= 3;
  }
}
