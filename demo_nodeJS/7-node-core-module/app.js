//core modules
const fs = require('fs');

//menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Gibran Secara Syncronouse!');
// } catch (error) {
//     console.log(error);
    
// }


//menuliskan dtring ke file (asyncronouse)
// fs.writeFile('data/test.txt','Secara Asyncronouse', (e) => {
//     console.log(e);
// });

//membaca isi file (synchronouse)
// const data= fs.readFileSync('data/test.txt','utf-8');
// console.log(data);

//membaca file (Asinchronouse)
// fs.readFile('data/test.txt','utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Whats is your name: ? ", (nama) => {
    rl.question("Input your phone number :", (noHP) => {
       const contact = {nama, noHP};
       const file = fs.readFileSync('data/contacts.json','utf8');
       const contacts = JSON.parse(file);
       contacts.push(contact);

       console.log(contact);

       fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
       console.log("terimaksih telah memasukkan data");
       
       rl.close();
    });
    
})