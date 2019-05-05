var gameOne = new Vue({
  el: '#game-One',
  data: {
    randomNumber: 0,
    numberOfGuesses: 0,
    gameShown: false,
    instructionShown: true,
    lastGuess: '',
    lastGuessShown: false,
    alertStart: true,
    alertHigher: false,
    alertLower: false,
    alertRight: false,
    alertError: false,
    finishGame: true
  },
  methods: {
    startGameOne: function () {
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
      this.alertHigher = false
      this.alertLower = false
      this.alertRight = false
      this.alertError = false
    },
    guessNumber: function () {
      this.lastGuessShown = true
      this.dismissAlerts()
      var guess = Number(gameApp.getUserInput('gameOneInput'))
      if (this.randomNumber === guess) {
        this.alertRight = true
        document.getElementById('gameOneInput').readOnly = true
        this.finishGame = false
      } else if (guess > 99 || guess < 0) {
        this.alertError = true
      } else if (guess < this.randomNumber) {
        this.alertHigher = true
      } else if (guess > this.randomNumber) {
        this.alertLower = true
      }
      this.numberOfGuesses += 1
      this.lastGuess = guess
      document.getElementById('gameOneInput').value = ''
    },
    quitGame: function () {
      document.getElementById('gameOneInput').readOnly = false
      this.gameShown = false
      this.dismissAlerts()
      this.alertStart = true
      this.finishGame = true
      this.instructionShown = true
      gameApp.playerScore += this.numberOfGuesses
    }
  }

})
