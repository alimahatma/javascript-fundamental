//FUNCTION PARAMETERS


//1). parameter yang diambil dari objek
const user = {
    id: 24,
    displayName: "Gibran",
    fullName: "Gibran Raqqila Firaz",
};

//2. Default Parameters

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);


//RestParameter

function exponentFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber} ^ ${exponent} = ${result}`);
}

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
