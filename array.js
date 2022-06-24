let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[1]);


//metode PUSH pada array
myArray.push('Sasambo Techno');

console.log(myArray);
console.log(myArray[5])

myArray.pop();
console.log(myArray);

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

delete myArray[1];
console.log(myArray);

delete myArray[3];
console.log(myArray);


myArray.splice(2, 4);
console.log(myArray);