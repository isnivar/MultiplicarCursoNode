
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

//console.log(argv);

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(`El error es ${e}`));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('comando no desconocido');
        break;
}

//let parametro = argv[2];
//let base = parametro.split('=')[1];


crearArchivo(argv.base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));