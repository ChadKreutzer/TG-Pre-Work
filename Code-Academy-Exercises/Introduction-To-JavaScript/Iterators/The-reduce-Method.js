const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/* A little tedious with the console.logging but understandable. Array.reduce()
is probably the hardest of these to grok. But also super powerful */