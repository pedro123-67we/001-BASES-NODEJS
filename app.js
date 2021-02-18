const argv = require ('yargs')
    .command ('listar', 'imprime en pantalla la tabla de multiplicar', {
           base: {
                  demand: true,
                  alias: 'b'
           },
           limite:{
               alias: 'l',
               default: 10
           }
    })
    .command ('crear', 'crea un archivo con la tabla de multiplicar', {
        base: {
               demand: true,
               alias: 'b'
        },
        limite:{
            alias: 'l',
            default: 10
        }
 })
    .argv;
const { alias } = require('yargs');
const multiplicar = require('./multiplicacion/multiplicacion');
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch ( comando ){
    case 'listar':
    multiplicar
        .listarTabla(base, limite)
        .then()
        .catch(error => console.log(`ocurrio un error ${error}`));
        
    break;

    case 'crear':
        multiplicar
            .crearArchivo(base,limite)
            .then(archivo => console.log(`el archivo ${archivo} ha sido generado con exito`))
            .catch(error => console.log(`ocurrio un error ${error}`));
        
    break;

    default:
        console.log('comando no reconocido')
        
}

