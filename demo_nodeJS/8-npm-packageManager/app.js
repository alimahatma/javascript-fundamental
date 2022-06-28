const validator = require('validator');
const chalk = require('chalk');
const { bgBlue } = require('chalk');

//console.log(validator.isEmail("grf@gmail.com")); 

//console.log(validator.isMobilePhone('+6281234567', 'id-ID'));
// console.log(chalk.white.bgBlue("Hello World"));
const nama = 'Gibaran';
const makananFavorit = chalk `Nama Saya {bgYellow.black ${nama}} Saya suka makan {bgRed.bold siomay} dan {bgWhite.italic.black sate!} `;
console.log(makananFavorit);


