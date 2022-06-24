const favorit = ["Seafood","Salad","Nugget","Soup"];
// const [firstFood, secondFood, thirdFood, fourthFood]=favorit;
/*
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
*/



const [, , thirdFood] = favorit;
console.log(thirdFood);

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorit;

console.log(myFood);
console.log(herFood);

//studi kasus SWAP TEST

var a =1;
var b =2;
var temp;

console.log("Sebelum SWAP");
console.log("Nilai a : " + a);
console.log("Nilai b: " + b);


[a, b] = [b, a];

console.log("Setelah SWAP");
console.log("Nilai a : " + a);
console.log("Nilai b : " + b);

const favorit2 = ['Seafood'];
const [myFood2, herFood2 = "Salad"] = favorit2;

console.log(myFood2);
console.log(herFood2);

