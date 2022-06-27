// console.log("Hello Gibran");

function cetakNama(nama) {
    return `Hallo, nama saya adalah ${nama}`;
}

const PI = 3.14;

const mahasiswa =  {
    nama : "Gibran Raqqila Firaz",
    umur : 1,
    //function
    cetakMHS() {
        return `Hallo nama saya ${this.nama} saya berusia ${this.umur} tahun.`
    }

}

class Orang {
    constructor(){
        console.log("Gibran adalah manusia");
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang,
// };

module.exports = {cetakNama, PI, mahasiswa, Orang}

