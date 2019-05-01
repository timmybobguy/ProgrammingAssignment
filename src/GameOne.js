var gameOne = new Vue({
  el: '#game-One',
  data: {
    randomNumber: 0,
    numberOfGuesses: 0,
    gameShown: false,
    instructionShown: true,
    alertStart: true,
    alertHigher: false,
    alertLower: false,
    alertRight: false,
  },
  methods: {
    startGameOne: function() {
      this.randomNumber = gameApp.generateRandomNumber(0,100);
      this.numberOfGuesses = 0
      console.log(this.randomNumber);
      this.instructionShown = false;
      this.gameShown = true;

    },
    dismissAlerts: function() {
      this.instructionShown = false;
      this.alertStart = false;
      this.alertHigher = false;
      this.alertLower = false;
      this.alertRight = false;
    },
    guessNumber: function() {
      this.dismissAlerts()
      var guess = Number(gameApp.getUserInput('gameOneInput'));
      if (this.randomNumber == guess) {
        this.alertRight = true;
        document.getElementById('gameOneInput').readOnly = true;
      } else if (guess > this.randomNumber) {
        this.alertLower = true;
      } else if (guess < this.randomNumber) {
        this.alertHigher = true;
      }

    }
  }

})
