var gameFour = new Vue({
  el: '#game-Four',
  data: {
	  initialGuess: 0,
	  maximumNumber: 99,
    minimumNumber: 0,
    numberOfGuesses: 0,
    hotGuess: 0,
    gameShown: false,
    instructionShown: true,
    alertStart: true,
    alertRight: false,
	  alertGuess: false,
	  alertError: false,
    finishGame: true,
  },
  methods: {
    startGameFour: function() {
	  this.initialGuess = gameApp.generateRandomNumber(25,75);
      this.numberOfGuesses = 1;
      this.instructionShown = false;
      this.gameShown = true;
	  this.maximumNumber = 99;
    this.minimumNumber = 0;

    },
	dismissAlerts: function() {
      this.instructionShown = false;
      this.alertStart = false;
      this.alertGuess = false;
      this.alertRight = false;
      this.alertError = false;
    },
	guessRight: function() {
	  this.dismissAlerts();
	  this.alertRight = true;
	  this.finishGame = false;
	},
	guessTemp: function(temp) {
	  this.dismissAlerts();
	  if (this.maximumNumber = 5) {
		  this.alertError = true; //Cheating
	  } else {

      if ((this.maximumNumber - this.minimumNumber) <= 38) {

        this.initalGuess = this.hotGuess + 1;

      } else {


        this.minimumNumber = ((this.initialGuess - temp - 1) - temp)
        if (this.minimumNumber < 0) {
          this.minimumNumber = 0;
        }
        this.hotGuess = this.minimumNumber;
        this.maximumNumber = ((this.initialGuess + temp + 1) + temp)
        if (this.maximumNumber > 99) {
          this.maximumNumber = 99;
        }
        


      }


		  this.alertGuess = true;
	  }
	  this.numberOfGuesses += 1;
	},
	quitGame: function() {
	  this.dismissAlerts();
	  this.gameShown = false;
	  this.alertStart = true;
      this.finishGame = true;
      this.instructionShown = true;
      gameApp.playerScore += this.numberOfGuesses;
	}
  }

})
