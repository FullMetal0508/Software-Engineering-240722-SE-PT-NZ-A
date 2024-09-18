const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    console.log('Fouls at Halftime are ' +this.fouls);
    return this;
    },
    fullTime() {
        console.log('Fulltime score is '+this.score);
        console.log('Fouls at Fulltime are ' +this.fouls)
        return this;
        }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();