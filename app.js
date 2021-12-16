
const  {crearArchivo} = require('./helpers/multiplicar');

const argv = require('./config/yargs');


const colors = require('colors/safe');




    console.clear();
    console.log(argv.b);
    

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'.bgGreen)  )
    .catch( err => console.log(err));


