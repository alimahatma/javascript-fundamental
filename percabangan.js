//if else statement
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatam.");

if (isRaining){
    console.log("Hari ini hujan. Bawa payung");
}

console.log("Berangkat kegiatan.");


let x =50;

if (x > 80){
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}


//language

let language = "Japanese";
let greeting = "Selamat Pagi";

if (language === "English") {
    greeting = "Good Moring";
} else if (language === "French") {
    greeting = "Bonjur";
} else if (language === "Japanese"){
    greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);


const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)



let name ="Gibran";

if (name) {
    console.log(`Hallo, ${name}`);
} else {
    console.log("Nama Masih Kosong");
}
