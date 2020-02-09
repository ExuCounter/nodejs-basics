const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err=>{
//     if(err) throw new Error(err);
//
//     console.log('Папка создана');
// });

// fs.writeFile(
//     path.join(__dirname, 'notes', 'notes.txt'),
//     'Hello world',
//     (err)=>{
//         if(err) throw err;
//         console.log('Файл создан');
//
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'notes.txt'),
//             'From append file',
//             err => {
//                 if(err) throw new err;
//                 console.log('Файлы изменен');
//
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'notes.txt'),
//                     'utf-8',
//                     (err, data)=>{
//                         if(err) throw err;
//                         // console.log(Buffer.from(data).toString());
//                         console.log(data);
//                     }
//                 );
//
//             }
//         )
//     }
// );

fs.rename(
    path.join(__dirname, 'notes', `mynotes.txt}`),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if(err) throw err;

        console.log('Файл переименован');
    }
);