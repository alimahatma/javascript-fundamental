let lastName;
lastName = 'amak kesek';

console.log(lastName)

let fullName = (lastName = "Gibran")

console.log(fullName);

let fullName2 = "Gibran" + "Raqqila Firaz";

console.log(fullName2);

const z = 100;
console.log(z);

console.log(z);

let x;
console.log(typeof(x));

let x2 = 100;
let y = 17.25;

console.log(typeof(x2), typeof(y));

let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b)
console.log(a / b);
console.log(a % b);
console.log(a**b)

let postfix = 5;
console.log(postfix++)
console.log(postfix)

let prefix = 5;
console.log(++prefix)

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

const bigIntBigSmall = 7n;


console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

let greet_ = "Hello";
console.log(greet_);

const question = '"What do you think of Javascript" I asked';
console.log(question);

const answer = '"I Think it\'s awesome" he answerd confidently';
console.log(answer) 

let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

const myName = "Gibran";
console.log(`Hello, my name is ${myName}.`);

let xx = true;
let yy = false;
console.log(typeof(xx));
console.log(typeof(yy));

const aa = 10;
const bb = 12;

let isGreater = a > b;
let isLess =  a < b;

console.log(isGreater);
console.log(isLess);

let SomeLaterData = null;
console.log(SomeLaterData);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);
console.log(id1===id2);
console.log(id1 != id2);
console.log(id1 == id1);