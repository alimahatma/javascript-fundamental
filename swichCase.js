let language = "Japanese";
let greeting = null;


switch (language) {
    case "English":
        greeting = "Good Mooring!";
        break;
    case "Indonesia":
        greeting = "Selamat Pagi";
        break;
    case "Japanese":
        greeting = "Ohayu Gozaimasu!";
        break;
    default:
        greeting = "Wah pagi Boss.!";
}

console.log(greeting);