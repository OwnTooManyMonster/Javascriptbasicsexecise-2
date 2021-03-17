function calculateSummation(array) {
  for (let i = 0; i < array.length; i++) {
    const ssum = console.log(`#${i + 1} ${array[i]}`);
  }
  array.reduce(reducer);
}

console.log(calculateSummation([2, 4, 9, 5]));
