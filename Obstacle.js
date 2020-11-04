class Obstacle {
  constructor(speed) {
    this.x = window.innerWidth;
    this.y = 560;
    this.width = 60;
    this.height = 50;
    this.beenTouched = false;
    this.speed = speed;
  }

  draw() {
    this.x -= this.speed;
    image(gram, this.x, this.y, this.width, this.height);
  }
}
