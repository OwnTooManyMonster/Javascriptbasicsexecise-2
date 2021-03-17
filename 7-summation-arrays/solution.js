let sum = 0;

function calculateSummation(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(calculateSummation([2, 4, 9, 5]));
