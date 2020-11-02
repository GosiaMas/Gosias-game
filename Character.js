class Character {
  constructor() {
    this.x = 200;
    this.y = 530;
    this.width = 80;
    this.height = 80;
    //Starting at 0, so that we can see the character fall down on load
    this.y = 0;

    //gravity property is emulating the continuos force of gravity on the player, velocity will multiply gravity every time draw() is called to pull player down
    this.gravity = 0.2;
    this.velocity = 0;
    //create background floor
    this.floor = 530;
    this.jumpCounts = 0;
  }

  jump() {
    if (this.jumpCounts === 4) {
      return;
    }
    this.jumpCounts++;
    this.y -= 100;
    this.velocity -= 5;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    // ON THE FLOOR
    if (this.y > this.floor) {
      this.y = this.floor;
      this.jumpCounts = 0;
      // we reset the velocity
      this.velocity = 0;
    }
    image(char, this.x, this.y, this.width, this.height);
  }
}
