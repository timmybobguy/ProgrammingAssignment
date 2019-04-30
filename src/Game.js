var gameApp = new Vue({
  el: '#main-gameApp',
  data: {
    one: '',
    two: '',
    three: ''
  },
  methods: {
    generateRandomNumber: function(lowerLimit, upperLimit) {
      return Math.floor(Math.random() * (+upperLimit - +lowerLimit)) + +lowerLimit;
    },
    

  }
})
