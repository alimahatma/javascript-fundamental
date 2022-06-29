const fs = require('fs');
const { resolve } = require('path/posix');
const validator = require('validator');
const yargs = require('yargs');

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


//membuat folder data jika belum ada
const dirPath ='./data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject)=> {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// };

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
    
}

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact();

    //cek data
    const duplikat = contacts.find((contact) => contact.nama===nama);
    if (duplikat){
        console.log("Contact sudah terdaftar, Gunakan Nama Lain!");
        return false;
    }

    //cek email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log("Email tidak valid.!");
            return false;
        }
    }

    //cek noHP
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log("NO HP tidak Valid!");
        return false;
    }


    contacts.push(contact);
    console.log(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih Anda Telah Berhasil Memasukkan Data..!');
    //rl.close()
};

//fungsi panggil seluruh isi data
const listContact = () => {
    const contacts = loadContact();
    console.log("Dafatar Nama dan Contact : ");
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
}

//fungsi tampil semuad data
const detailContact =  (nama) => {
    const contacts = loadContact();

    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
        );

        if (!contact) {
            console.log(`${nama} Tidak di Temukan!`)
            return false;
        }

        //panggil nama dan nomor HP
        console.log(contact.nama);
        console.log(contact.noHP);

        if (contact.email) {
            console.log(contact.email);
        }      

};

//fungsi untuk menghapus data
const deleteContact = (nama) => {
    const contacts  = loadContact();
    const newContacts =  contacts.filter(
        (contact)=> contact.nama.toLowerCase() !==nama.toLowerCase()

    );

    if (contacts.length == newContacts.length) {
        console.log(`${nama} Tidak ditemukan`);
        return false;
    }
    fs.writeFileSync(
        'data/contacts.json',
        JSON.stringify(newContacts)
    );
    console.log("Data berhasil dihapus !");
};

module.exports  = {
    //tulisPertanyaan,
    simpanContact,
    listContact,
    detailContact,
    deleteContact,
}