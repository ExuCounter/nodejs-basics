const path = require('path');

console.log(__filename); /* Абсолютный путь к файлу */
console.log(path.basename(__filename)); /* имя файла */
console.log(path.dirname(__filename)); /* имя папки в котором находится файл */
console.log(path.extname(__filename)); /* расширение файла */

console.log(path.parse(__filename).ext); /* расширение файла с обьекта */

// console.log(path.join(__dirname, '../test', 'second.html')); /* свой путь файла */
// console.log(path.resolve(__dirname, '/test', '/second.html'));
