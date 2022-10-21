const fish = {
    name: 'king Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phoe: '01728788',
    price: 1244
}

const phone = fish.phoe;
const price = fish.price;
console.log(phone, price);

const {age, name} = {name: 'Almas', age: 34, profession: 'actress'}
console.log(age, name);

const [first, another] = [23,34,56];
console.log(first, another);

const nayokes = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayokes;
console.log(lost);

const y = x => x*x;
const z= y(5);
console.log(z);

const divi = num1, num2 => console.log(num1/num2);