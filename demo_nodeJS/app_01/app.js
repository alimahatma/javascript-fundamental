const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengakap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Hand Phone',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHP: argv.noHP
        };
        console.log(contact);


    },

});

yargs.parse();