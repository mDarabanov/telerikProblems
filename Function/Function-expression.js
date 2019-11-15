/*var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };

  console.log(catSays(3));*/

  // function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };

  var marioEPich = function(size){
    return "Mario e pich i kura mu e "+size+" sm.";
  }
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc, control) {
    return "Hello " + callbackFunc(control);
  }
  
  // pass in catSays as a callback function
  


  console.log(helloCat(catSays, 5));
    console.log(helloCat(marioEPich,150));