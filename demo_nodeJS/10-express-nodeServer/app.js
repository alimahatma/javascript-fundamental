
const experss = require('express');
const app = experss();
const port = 3000;

app.get('/', (req, res) => {
   // res.send('Hello, Indi adalah halaman Utama');
//    res.json({
//        nama: 'Gibran',
//        email: 'grf2021@gmail.com',
//        noHP: '087856742312',
//    })
res.sendFile('./index.html',{root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman about');
    res.sendFile('./about.html', {root: __dirname});
}); 

app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contact');
    res.sendFile('./contact.html', {root: __dirname});
});

/*
method use digunakan pada saat halaman lain tidak ditemukan atau
halaman lain tidak terdaftar biasanya digunakan untuk membeikan
informai pesan 404 atau persan erorr.
 */

app.get('/product/:id', (req, res) => {
    res.send(`product ID : ${req.params.id} <br> Category ID: ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`);
});



// const http = require('http');
// const port = 3000;
// const fs = require('fs');

// http.createServer((req, res) => {
    
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });

//     const url = req.url;
//     if (url === '/about') {
//         res.write('<h1>Ini adalah halaman about</h1>');
//         res.end();
//     } else if (url === '/contact') {
//         res.write('<h1>Ini adalah halaman Contact</h1>');
//         res.end();
//     } else {
//         fs.readFile('./index.html', (err, data) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.write('Error: File not found')
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });

//     }


// }) .listen(port, () => {
//     console.log(`Server is running port ${port}...`);
// });

