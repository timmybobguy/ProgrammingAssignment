var gameApp = new Vue({
  el: '#main-gameApp',
  data: {
    playerScore: 0,
    two: '',
    three: ''
  },
  methods: {
    generateRandomNumber: function(lowerLimit, upperLimit) {
      return Math.floor(Math.random() * (+upperLimit - +lowerLimit)) + +lowerLimit;
    },
    getUserInput: function(elementId) {
      return document.getElementById(elementId).value
    },



  }
})
