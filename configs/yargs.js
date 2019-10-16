const opts = {
    base: { //recibe la base
        demand: true, //es obligatoria
        alias: 'b' //se puede coloca solo b valor
    },
    limite: { //recibe el limite
        alias: 'l', //se puede colocar solo l valor
        default: 10 //si no se especifica el valor es 10 por defecto
    }
};
const argv = require('yargs')
    //declara el comando a usar en este caso listar y crear, el cual imprime en consola
    //la tabla de multiplicar, el objeto declarado son los argumentos que puede recibir
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar de un numero hasta un limite en .txt', opts)
    .help() //genera la ayuda cuando se digita node app.js listar --help con toda la informacion
    .argv; //captura los argumntos en el .argv

module.exports = {
    argv
}