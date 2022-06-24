const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a Number key'],
    [true, true]
]);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(myMap);
console.log(capital.size); //menghitung jumlah 
console.log(capital.get("London")); //mengambil data

//menambah data
capital.set(["New Delhi", "India"]);
console.log(capital.size);
