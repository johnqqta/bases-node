const fs = require('fs');
const colors = require('colors'); //libreria para imprimir con colores

let listarTabla = (base, limite) => {
    let data = '';
    console.log('==================='.bgGreen);
    console.log(`Tabla De ${base}`.green);
    console.log('==================='.bgGreen);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base*i}`.yellow);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) || base == undefined || !Number(limite) || limite == undefined) {
            reject(`La Base ${base} o el Limite ${limite}, no es un Numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla${base}-al-${limite}.txt`, data, { encoding: 'utf8', mode: 0o777, flag: 'w' }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla${base}-al-${limite}.txt`);
            }
        });
    });

};
module.exports = {
    crearArchivo,
    listarTabla
}