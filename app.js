const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./configs/yargs').argv; //otra forma de hacer el import de algo que necesitamos
const colors = require('colors/safe'); //libreria para imprimir con colores
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`comando ${comando}, no es valido`);
        break;
}