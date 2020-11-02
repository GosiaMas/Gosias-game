class Obstacle {
  constructor() {
    this.x = window.innerWidth;
    this.y = 560;
    this.width = 60;
    this.height = 50;
  }

  draw() {
    this.x -= 5;
    image(gram, this.x, this.y, this.width, this.height);
  }
}
