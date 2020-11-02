// // The obstacle class is the blueprint for each obstacle that will be created
class Record {
  constructor() {
    this.x = window.innerWidth;
    this.y = random(100, 450);
    this.width = 50;
    this.height = 50;
  }
  draw() {
    image(record, this.x, this.y, this.width, this.height);
    this.x -= 3;
  }
}
