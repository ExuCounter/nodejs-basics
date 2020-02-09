const os = require('os');

/* Операционная система */
console.log(os.platform());

/* Архитектура */
console.log(os.arch());

// Информация
console.log(os.cpus());

// Свободная память
console.log(os.freemem());

// Всего памяти
console.log(os.totalmem());

// Корневая директория
console.log(os.homedir());

// Сколько система работает
console.log(os.uptime());