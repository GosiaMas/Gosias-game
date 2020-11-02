class Background {
  constructor() {
    this.x = 0;
  }

  setup() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    //console.log(window.innerWidth);
  }

  draw() {
    this.x -= 3; //moves it
    //below attaches one background to another so there is no gap between them
    image(bg, this.x, 0, width, height);
    image(bg, this.x + this.width, 0, this.width, this.height);

    if (this.x <= -this.width) {
      // reset the background back to its starting point, to give the illusion of never ending loop
      this.x = 0;
    }
  }
}
