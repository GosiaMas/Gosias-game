class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
    this.records = [];
    this.gram = [];
    //this.points = 0;
  }

  setup() {
    this.background.setup();
  }

  // //COLLECTION FOR RECORDS
  intersectionCheck(record, player) {
    //  if player's right side is to the left of the record's left
    if (player.x + player.width < record.x) {
      return false;
    }
    // if record's right side is to the left of player's left
    if (record.x + record.width < player.x) {
      return false;
    }
    // player top side is below record's bottom side
    if (player.y > record.y + record.height) {
      return false;
    }
    //  record top side is below the player's bottom side
    if (record.y > player.y + player.height) {
      return false;
    }
    return true;
  }

  draw() {
    this.background.draw();
    this.character.draw();

    //RECORDS
    if (frameCount % 420 === 0) {
      this.records.push(new Record());
    }
    this.records.forEach((record, index) => {
      record.draw();
      // when off canvas remove from records from array
      if (record.x + record.width <= 0) {
        this.records.splice(index, 1);
      }
      //  //do something when record collected
      if (this.intersectionCheck(record, this.character)) {
        console.log("GOTTHA");
        //this.points += 1;
      }
    });

    //gramophones
    const randomNewObstacle = Math.floor(random([120, 500, 350]));
    if (frameCount % randomNewObstacle === 0) {
      const newGram = new Obstacle();
      this.gram.push(newGram);
    }
    this.gram.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.x + obstacle.width <= 0) {
        this.gram.splice(index, 1);
      }
    });

    // //COLLISION CHECK FOR OBSTACLES
    //  collisionCheck(obstacle, player) {
    //     //   player.left + player.width (players.rightSide)
    //     //  if player's right side is to the left of the obstacle's left
    //     if (player.x + player.width < obstacle.x) {
    //       return false;
    //     }

    //     //  obstacle's left and obstacle width (obstacle.rightSide)
    //     // if obstacle's right side is to the left of player's left
    //     if (obstacle.x + obstacle.width < player.x) {
    //       return false;
    //     }

    //     // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    //     // player top side is below obstacle's bottom side
    //     if (player.y > obstacle.y + obstacle.height) {
    //       return false;
    //     }

    //     //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //     //  obstacle top side is below the player's bottom side
    //     if (obstacle.y > player.y + player.height) {
    //       return false;
    //     }
    //     return true;
    //   }
  }
}
