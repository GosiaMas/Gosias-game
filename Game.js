class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
    this.records = [];
    this.gram = [];
    this.points = 0;
    this.lifes = 3;
    this.goodEnd = new GoodEnd();
    this.badEnd = new BadEnd();
    this.timer = 40;
  }

  setup() {
    this.background.setup();
  }

  //COLLISION CHECK AGAINST CHARACTER (obstacle is just a placeholder for record or gramophone)
  collisionCheck(obstacle, character) {
    if (character.x + character.width < obstacle.x) {
      return false;
    }
    if (obstacle.x + obstacle.width < character.x) {
      return false;
    }
    if (character.y > obstacle.y + obstacle.height) {
      return false;
    }
    if (obstacle.y > character.y + character.height) {
      return false;
    }
    if (obstacle.beenTouched) {
      return false;
    }
    obstacle.beenTouched = true;
    return true;
  }

  draw() {
    this.background.draw();
    this.character.draw();

    //RECORDS
    if (frameCount % 300 === 0) {
      this.records.push(new Record());
    }
    this.records.forEach((record, index) => {
      record.draw();
      // when off canvas remove from records from array
      if (record.x + record.width <= 0) {
        this.records.splice(index, 1);
      }
      //  //do something when record collected
      if (this.collisionCheck(record, this.character)) {
        this.points += 1;
        record.y = -200;
      }
    });

    //GRAMOPHONES
    const randomNewObstacle = Math.floor(random([120, 300, 350]));
    if (frameCount % randomNewObstacle === 0) {
      const newGram = new Obstacle();
      this.gram.push(newGram);
    }
    this.gram.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.x + obstacle.width <= 0) {
        this.gram.splice(index, 1);
      }
      if (this.collisionCheck(obstacle, this.character)) {
        this.lifes -= 1;
        obstacle.y = 1000;
      }
    });
    if (this.lifes <= 0) {
      this.callGameOver();
    }

    //draw Points and Lifes
    image(record, 100, 75, 30, 30);
    textSize(30);
    textStyle(BOLD);
    fill(70, 3, 117);
    text(`${this.points}`, 150, 100);
    text(`❤️  ${this.lifes}`, 100, 140);

    //set game timer to 1 min
    if (frameCount % 60 === 0 && this.timer > 0) {
      this.timer--;
    }
    if (this.timer === 0) {
      this.callGameOver();
    }
  }
  callGameOver() {
    if (this.points >= 6) {
      clear();
      this.goodEnd.draw();
      noLoop();
    } else {
      clear();
      this.badEnd.draw();
      noLoop();
    }
  }
}
