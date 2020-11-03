class EndGame {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
}

class GoodEnd extends EndGame {
  constructor() {
    super();
  }
  draw() {
    background(0);
    textSize(40);
    fill(250);
    text("GAME OVER", 600, 100);
    text("Tonight you saved somebody's life!", 400, 150);
    //background(169, 169, 169);
    //(img, x, y, width, height)
    image(goodEnd, 480, 200, 500, 400);
  }
}

class BadEnd extends EndGame {
  constructor() {
    super();
  }
  draw() {
    background(0);
    textSize(40);
    fill(250);
    text("GAME OVER", 600, 100);
    text("Don't worry!", 607, 150);
    text("You will fill the dancefloor next time!", 380, 200);
    //background(169, 169, 169);
    //(img, x, y, width, height)
    image(badEnd, 480, 250, 500, 400);
  }
}
