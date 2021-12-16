
const {option} = require('yargs');

const argv = require('yargs')
.option('b', {
    alias: 'base',
    demandOption: true,
    default: '5',
    describe: 'el numero de la tabla',
    type: 'number'
})
    .option('l', {
    alias: 'listar',
    demandOption: true,
     default: 'false',
    describe: 'permite mostrar la tabla',
    type: 'boolean'
})
   .option('h', {
   alias: 'hasta',
   demandOption: true,
   describe: 'hasta que numero se multiplica',
   type: 'number',
   default : '10'
})
  .check(  (argv, options) =>{
   if ( isNaN(argv.b) ){
        throw 'la base debe ser un numero';
    }
        return true
    
}
).argv;




module.exports = argv;