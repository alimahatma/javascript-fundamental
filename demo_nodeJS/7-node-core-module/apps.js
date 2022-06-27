//core modules 
//file system
const fs = require('fs');



//menulis pesan berhasi or error
// try {
//     //menuliskan string ke file (syncronue)
//     fs.writeFileSync('data/test.text', 'Hello GIBRAN secara syncronus!');
    
// } catch (e) {
//     console.log(e);
    
// }

const data = fs.readFileSync('data/test.text', 'utf-8');
console.log(data);