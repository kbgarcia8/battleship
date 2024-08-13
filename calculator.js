const add = function() {
	let inputs = arguments;
  let sum = 0;
  for (let i = 0; i<inputs.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const subtract = function() {
  let inputs = arguments;
  let diff = arguments[0];
  for (let i = 1; i<inputs.length; i++) {
    diff -= arguments[i];
  }
  return diff;
};

const sum = function() {
  let inputs = arguments[0];
  let sumArr = 0;
  for (let i = 0; i<inputs.length; i++) {
    sumArr += inputs[i];
  }
  return sumArr;
};

const multiply = function() {
  let inputs = arguments[0];
  let prodArr = 1;
  for (let i = 0; i<inputs.length; i++) {
    prodArr *= inputs[i];
  }
  return prodArr;
};

const power = function() {
	let base = arguments[0];
  let exponent = arguments[1];
  let raiseTo = base**exponent;
  return raiseTo;
};

const factorial = function() {
	let input = arguments[0];
  let factorial = 1;
  if (input === 0) {
    return 1;
  } else if ((input !== 0) && (input>0)) {
    for(let i = 1; i<=input; i++) {
      factorial *= i;
    }
    return factorial;
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
