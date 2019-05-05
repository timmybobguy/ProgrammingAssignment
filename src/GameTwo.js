var gameTwo = new Vue({
  el: '#game-Two',
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
    finishGame: true
  },
  methods: {
    startgameTwo: function () {
      this.randomNumber = gameApp.generateRandomNumber(0, 100)
      this.numberOfGuesses = 0
      console.log(this.randomNumber)
      this.instructionShown = false
      this.gameShown = true
      this.lastGuessShown = false
    },
    dismissAlerts: function () {
      this.instructionShown = false
      this.alertStart = false
      this.alertRight = false
      this.alertCold = false
      this.alertCool = false
      this.alertWarm = false
      this.alertHot = false
      this.alertError = false
    },
    guessNumber: function () {
      this.lastGuessShown = true
      this.dismissAlerts()
      var guess = Number(gameApp.getUserInput('gameTwoInput'))
      if (this.randomNumber === guess) {
        this.alertRight = true
        document.getElementById('gameTwoInput').readOnly = true
        this.finishGame = false
      } else if (guess > 99 || guess < 0) {
        this.alertError = true
      } else if (guess > (this.randomNumber - 9) && guess < (this.randomNumber + 9)) {
        this.alertHot = true
      } else if (guess > (this.randomNumber - 19) && guess < (this.randomNumber + 19)) {
        this.alertWarm = true
      } else if (guess > (this.randomNumber - 39) && guess < (this.randomNumber + 39)) {
        this.alertCool = true
      } else {
        this.alertCold = true
      };
      this.numberOfGuesses += 1
      this.lastGuess = guess
      document.getElementById('gameTwoInput').value = ''
    },
    quitGame: function () {
      document.getElementById('gameTwoInput').readOnly = false
      this.gameShown = false
      this.dismissAlerts()
      this.alertStart = true
      this.finishGame = true
      this.instructionShown = true
      gameApp.playerScore += this.numberOfGuesses
    }
  }

})
