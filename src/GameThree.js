var gameThree = new Vue({
  el: '#game-Three',
  data: {
    randomNumber: 0,
    numberOfGuesses: 0,
    gameShown: false,
    instructionShown: true,
    lastGuess: '',
    lastGuessShown: false,
    alertStart: true,
    alertRight: false,
    alertCold: false,
    alertCool: false,
    alertWarm: false,
    alertHot: false,
    alertError: false,
    finishGame: true,
  },
  methods: {
    startgameThree: function() {
      this.numberOfGuesses = 0
      this.instructionShown = false;
      this.gameShown = true;

    },
    dismissAlerts: function() {
      this.instructionShown = false;
      this.alertStart = false;
      this.alertRight = false;
      this.alertCold = false;
      this.alertCool = false;
      this.alertWarm = false;
      this.alertHot = false;
      this.alertError = false;
    },
    quitGame: function() {

      this.instructionShown = true;
      gameApp.playerScore += this.numberOfGuesses;
    }
  }

})
