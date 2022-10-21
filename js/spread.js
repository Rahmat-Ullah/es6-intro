const max = Math.max(12, 23, 34);
// console.log(max);
const numbers = [12, 23, 34, 45, 56, 67];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(345);
numbers2.push(765);
console.log(numbers);
console.log(numbers2);

const numbers3  = [...numbers2];
const numbers4 = [12, 34, 45, 56, ...numbers, 233, 456];
console.log(numbers4);