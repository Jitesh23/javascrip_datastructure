var numbers = [1,2,3,4,5,6,7,8,9,10];

var result = numbers.reduce( function(current, previous, i){
	return current + previous;
});

console.log(result);
