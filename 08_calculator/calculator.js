const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function() {
  let arr = Array.prototype.slice.call(arguments);
  let sum = 0;
  for(let i of arr){
    sum+=i;
  }
  return sum;
};

const multiply = function() {
  let arr = Array.prototype.slice.call(arguments);
  let mul = 0;
  for(let i of arr){
    mul = mul * i;
  }
  return mul;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if(n === 0 || n === 1){
    return 1;
  }
  else{
    return n*function(n-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
