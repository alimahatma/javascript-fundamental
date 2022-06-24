function greeting(name, language){
    if (language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French"){
        console.log(`Bonjur ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

function multiply (a, b) {
    return a * b;
}

let result = multiply(10, 2);

function greeting2 (name, language) {
    if (language === "English") {
        return `Good Moring ${name}!`;
    } else if (language === "French") {
        return `Bojur ${name}!`;
    } else {
        return `Selamat Pagi ${name}`;
    }
}

let greetingMessage = greeting2("Gibran", "Franch");
console.log(greetingMessage);

const greeting3 = function(name, language){
    if (language === "English") {
        return "Good Morining " + name + "!";
    } else if (language === "French") {
        return "Bojur " + name + "!";
    } else {
        return "Selamat pagi" + name + "!";
    }
}

console.log(greeting3("Gibran","English"));