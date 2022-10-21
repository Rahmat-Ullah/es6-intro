const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(4, 5);
console.log(result);

const addAll = (a, b, c, d) => a + b + c + d;

//no parameter arrow function
const getPie = () => 3.14;

//One parameter
const doubleIt = (num) => num * 2;

//one parameter simple version
const fiveTimes = num => num * 5;

//multi line arrow function

const doMath = (x, y, z) => {
    const firstSum = x + y + z;
    const secondSum = x + y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}