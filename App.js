const mencari = require('./src/Function');

const convertM= mencari.jarakTempuh_Mobil('10:12:21','12:00:00',6)/1000;

console.log(`Jarak Tempuh : ${mencari.jarakTempuh_Mobil('10:12:21','12:00:00',6)} m`);
console.log(`Jarak Tempuh : ${convertM} km`);