const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 9, listar = false , hasta = 10) => {

try {
    
        let consola ='';
        let salida = '';


for(let i = 1; i <= hasta; i++){

    salida += `${base} x ${i} = ${i*base}\n`;
    consola += `${base} ${'x'.green} ${i} ${'='.bgGreen} ${i*base}\n`;

}        
         if (listar===true) {
            console.log('====================='.green);
            console.log('      Tabla del: '+ base);
            console.log('====================='.green);
            console.log(consola);
         }
        


fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

return `tabla base ${base}.txt `;///esto es lo que envie donde se llama la funcion y la promesa en el then
    
    
} catch (error) {
    throw error
}

  
}

module.exports = {
    crearArchivo:crearArchivo
};