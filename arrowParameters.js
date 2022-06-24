//ARROW FUNCTION

//function Declaration
function sayHello(great) {
    console.log(`${great}`);
}

//function expression
const sayName = function(name){
    console.log(`Nama saya adalah ${name}`)
}

//arrow Function
const sayNama = name => {
    console.log(`Nama saya adalah ${name}`);
}

//arrow function dengan satu parameter
const sayNamaku = name => {
    console.log(`Namaku adalah : ${name}`);
}

//arrow function tanpa paramaters
const sayHelloo = () => {
    console.log("Selamat pagi!");
}

sayHelloo();

//ketika body terdiri hanya satu baris
const sayNama2 = nama => console.log(`Nama saya adalah ${nama}`);
sayNama("Gibran Raqqila Firaz")

//arrow function mengembalikan nilai paramater dapat tidak menggunakan return

const perkalian = (a, b) => a * b;
console.log(perkalian(3, 5))
