const contacts = require('./contacts')

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan Nama Anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email Anda : ');
    const noHp = await contacts.tulisPertanyaan('Masukkan nomor HP Anda : ');

    contacts.simpanContact(nama, email, noHp);
}

main();