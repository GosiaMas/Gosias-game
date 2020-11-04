class GoodEnd {
  constructor() {}
  draw() {
    background(0);
    textSize(60);
    fill(153, 51, 153);
    text("GAME OVER", 550, 100);
    textSize(28);
    fill(250);
    text("Great score!", 650, 160);
    textSize(38);
    fill(250);
    text("Tonight you saved somebody's life!", 420, 210);
    //(img, x, y, width, height)
    image(goodEnd, 480, 250, 500, 400);
  }
}

class BadEnd {
  constructor() {}
  draw() {
    background(0);
    textSize(60);
    fill(153, 51, 153);
    text("GAME OVER", 500, 100);
    textSize(30);
    fill(250);
    text("Don't worry,", 607, 170);
    text("You will fill the dancefloor next time!", 435, 215);
    //background(169, 169, 169);
    //(img, x, y, width, height)
    image(badEnd, 480, 250, 500, 400);
  }
}
