const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiline = 'first line text \n' + 'second line of code \n' + 'third line of code \n' + 'fourth line of code';
console.log(multiline);

const newMultiline = `first line of text
second line of code
third line of text
fourth line of code`;
console.log(newMultiline);

const a = 20;
const b = 29;
// const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
const newSummary = `Sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);
