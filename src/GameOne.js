var gameOne = new Vue({
  el: '#game-One',
  data: {
    randomNumber: 0,
  },
  methods: {
    startGameOne: function() {
      this.randomNumber = gameApp.generateRandomNumber(0,100);
      console.log(this.randomNumber);
      
    },
  }

})
