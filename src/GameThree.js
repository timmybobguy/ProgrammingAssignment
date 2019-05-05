var gameThree = new Vue({
  el: '#game-Three',
  data: {
    initialGuess: 0,
    maximumNumber: 99,
    minimumNumber: 0,
    numberOfGuesses: 0,
    gameShown: false,
    instructionShown: true,
    alertStart: true,
    alertRight: false,
    alertGuess: false,
    alertError: false,
    finishGame: true
  },
  methods: {
    startGameThree: function () {
      this.initialGuess = gameApp.generateRandomNumber(25, 75)
      this.numberOfGuesses = 0
      this.instructionShown = false
      this.gameShown = true
      this.maximumNumber = 99
      this.minimumNumber = 0
    },
    dismissAlerts: function () {
      this.instructionShown = false
      this.alertStart = false
      this.alertGuess = false
      this.alertRight = false
      this.alertError = false
    },
    guessRight: function () {
      this.dismissAlerts()
      this.alertRight = true
      this.finishGame = false
    },
    guessLower: function () {
      this.dismissAlerts()
      if (this.initialGuess > this.maximumNumber && this.maximumNumber !== 0) {
        this.alertError = true
    } else {
        this.maximumNumber = this.initialGuess
        this.initialGuess = Math.round(this.initialGuess - ((this.maximumNumber - this.minimumNumber) / 2))

        this.alertGuess = true
	  }
	  this.numberOfGuesses += 1
    },
    guessHigher: function () {
	  this.dismissAlerts()
	  if (this.initialGuess > this.maximumNumber && this.minimumNumber !== 0) {
    this.alertError = true
	  } else {
	  	this.minimumNumber = this.initialGuess
    this.initialGuess = Math.round(this.initialGuess + ((this.maximumNumber - this.minimumNumber) / 2))

    this.alertGuess = true
	  }
	  this.numberOfGuesses += 1
    },
    quitGame: function () {
      this.dismissAlerts()
      this.gameShown = false
      this.alertStart = true
      this.finishGame = true
      this.instructionShown = true
      gameApp.playerScore += this.numberOfGuesses
    }
  }

})
