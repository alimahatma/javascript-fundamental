const yargs = require("yargs");
const contacts = require("./contacts");
contacts.simpanContact;

yargs.command({
    command: 'add',
    decribe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demanOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demanOption: false,
            type: 'string',
        },
        noHP: {
            describe: "Nomor HP",
            demanOption: true,
            type: 'string'
        },
    },

    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },

})
.demandCommand();

//pakage menampilkan data
yargs.command({
    command: 'list',
    describe: 'Menampilkan data',
    handler() {
        contacts.listContact();
    },
});

//pakage menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama : {
            describe: 'Nama Lengkap : ',
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
})

 //package menghapus contact berdasarkan nama
 yargs.command({
    command: 'delete',
    describe: 'Menghapus one of Contacts',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});

yargs.parse();

// const contacts = require('./contacts')

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan Nama Anda : ');
//     const email = await contacts.tulisPertanyaan('Masukkan email Anda : ');
//     const noHp = await contacts.tulisPertanyaan('Masukkan nomor HP Anda : ');

//     contacts.simpanContact(nama, email, noHp);
// }

// main();