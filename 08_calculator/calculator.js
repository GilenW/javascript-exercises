const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  let sum = 0;
  if(arr.length === 0){
    return sum;
  }
  for(let i of arr){
    sum = sum + parseInt(i);
  }
  return sum;
};

const multiply = function(arr) {

  let mul = 1;
  for(let i of arr){
    mul = mul * parseInt(i);
  }
  return mul;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  // let result = 1;
  // if(n === 0 || n ===1){
  //   return 1;
  // }
  // for(let i = n; i >= 1; i--){
  //   result  = result * i;
  // }
  // return result;

  if(n === 0){
    return 1;
  }
  return n*factorial(n-1);
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
