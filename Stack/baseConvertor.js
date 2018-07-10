var Stack = require('./first');

function baseConvertor(decimalNumber, base) {
  var remStack = new Stack(), rem, binaryString = '', digits = '0123456789ABCDEF';

  while(decimalNumber > 0){
    rem = Math.floor( decimalNumber % base);
    remStack.push(rem);
    decimalNumber = Math.floor( decimalNumber / base);

  }

  while(!remStack.isEmpty()){
    binaryString += digits[remStack.pop()];
  }

return binaryString;

}


console.log(baseConvertor(12,2));
console.log(baseConvertor(12,8));
console.log(baseConvertor(12,16));
