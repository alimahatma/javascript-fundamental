const foods = ['Pie','Cake','Honey']
const myFood = foods[0]
const yorFood = foods[1]
const ourFood = foods[2]


console.log(myFood, yorFood, ourFood)

const profile = {
    firstName : "Gibran",
    midName : "Raqqila",
    lastName : "Firaz",
    age : 2,
    
};

const {firstName, midName, lastName, age} = profile;

console.log(profile);
console.log(`Nama saya ${firstName} ${midName} ${lastName} ${age} tahun`)



const profile2 = {
    firstName2 : "Cak",
    lastName2 : "ali",
    age2 : 30,
}

let firstName2 = "Gibran";
let age2 = 1;

({firstName2, lastName2 ,age2} = profile2);

console.log(firstName2, lastName2);
console.log(age2);
