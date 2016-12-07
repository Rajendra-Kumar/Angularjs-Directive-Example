
app.service('myService', function () {
	//console.log('myService')
	this.xxx = "yyy";
});
app.filter('ordinal', function(){
  return function(number){
  	//console.log(number)
    if(isNaN(number) || number < 1){
    	//console.log(isNaN(number))
      return number;
    } else {
      var lastDigit = number % 10;
      if(lastDigit === 1){
        return number + 'st'
      } else if(lastDigit === 2){
        return number + 'nd'
      } else if (lastDigit === 3){
        return number + 'rd'
      } else if (lastDigit > 3){
        return number + 'th'
      }
    }
  }
});

app.service('myService', function() {
  console.log('myService calling..');
  // service is just a constructor function
  // that will be called with 'new'

  this.sayHello = function(name) {
     this.name = 'yes';
     return "Hi " + name + "!";
  };
  this.getMsg = function (name) {
    return this.name;
  }
});

app.factory('myFactory', function() {
  console.log('myFactory calling..');

  // factory returns an object
  // you can run some code before

  /*return {
    sayHello : function(name) {
      return "Hi " + name + "!";
    },
    getMsg : function (name) {
      return name;
    }
  }*/


  var Msg  = function (name) {
    this.factoryMsg = name;
    this.getMsg = function () {
      return this.factoryMsg;
    }
  }
  return Msg;
});

function getObject(){
  this.getName = function(){
    return "Get Name by factory calling object";
  }
}

app.factory('newFactory', function () {
    return new getObject();
})
app.provider('myProvider', function() {
  console.log('myProvider calling..');
  this.$get = function (){
    return "My Value";
  }
});