//VARIABEL SCOPE

//Global variabel 
const a = "a";


function parent() {
    //local variabel
    const c = "c";
}


function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

// console.log(total);

//CLOSURE

function init() {
    var name = 'Gibran Raqqila Firaz'; //var lokal dalam scope function

    function greet() { //inner function, contoh closure
        console.log(`Hallo ${name}`);

    }

    greet();
}

// init(); 

let myFunction = init();


let counter = 0;
let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
conter = 23;
console.log(add());