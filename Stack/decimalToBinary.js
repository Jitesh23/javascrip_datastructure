var Stack = require('./first');

function divideByTwo(decimalNumber) {

  var remStack = new Stack(), rem, binaryString = '';

  while(decimalNumber > 0){
    rem = Math.floor(decimalNumber % 2);
    remStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  while(!remStack.isEmpty()){
      binaryString += remStack.pop().toString();
  }

  return binaryString;

}


console.log(divideByTwo(12));
