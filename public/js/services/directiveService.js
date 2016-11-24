
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

