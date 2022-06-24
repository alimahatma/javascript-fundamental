const user = {
    firstName : "Gibran",
    lastName : "Raqqila Firaz",
    age : 19,
    isJedi: true,
    "home world": "Mataram",
};

console.log(`Hallo, nama saya ${user.firstName} ${user.lastName}`)
console.log(`Usia saya ${user.age} tahun`)
console.log(`Saya berasal dari ${user["home world"]}`);

//nett to example 02

const spaceship = {
    nama : "Yakina Destin",
    manufacturer : "Backend Engineer",
    maxSpeed : 1200,
    color : "Light gray",
};


spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);