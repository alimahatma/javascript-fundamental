const favorites = ["Seafood","Salad","nugget","Soup"];
const others = ["Cake","Pie","Donut"];

const allFavorites = [...favorites, ...others];

// console.log(favorites);
console.log(allFavorites);

const obj1 = {firstName : 'Gibran-Raqqila', age: 30};
const obj2 = {lastName : 'Firaz', gender: "Male"};

const newObj = {...obj1, ...obj2};

console.log(newObj);