class Background {
  constructor() {
    this.x = 0;
    this.speed = 3;
  }

  setup() {
    this.height = 705; //window.innerHeight;
    this.width = 1440; //window.innerWidth;
  }

  draw() {
    this.x -= this.speed; //moves background
    //below attaches one background to another so there is no gap between them
    image(bg, this.x, 0, this.width, this.height);
    image(bg, this.x + this.width, 0, this.width, this.height);

    if (this.x <= -this.width) {
      // reset the background back to its starting point, to give the illusion of never ending loop
      this.x = 0;
    }
  }
}
