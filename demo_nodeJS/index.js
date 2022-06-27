//core modules
// const fs = require('fs');

// //import local modules
// const cetakNama = require('./coba');

// //third modules

// console.log(cetakNama("Gibran Raqqila Firaz"));

const coba = require('./coba');

console.log(coba.cetakNama("GRF"), 
'Nilai PI' , 
coba.PI, 
coba.mahasiswa.cetakMHS(),
new coba.Orang()
);