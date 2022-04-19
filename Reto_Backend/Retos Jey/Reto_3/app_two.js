const entrada = "5a9b3e8r";

function convertir(input) {
    
    const lista = [...input];
    const numero = lista.filter( n => !isNaN(n));
    const letra = lista.filter( n => isNaN(n));
    const multiplicandoLetras = [];

    for (let i = 0; i < numero.length; i++) {
        const num = parseInt(numero[i]);
        multiplicandoLetras.push(letra[i].repeat(num));
        
    }
    console.log(multiplicandoLetras.join(""));
}

convertir(entrada);



// let numero;
// let contador = 0;
// let salida = "";

// for(let n of entrada) {
//     if(contador === 1) {
//         for(let i = 0; i < numero; i++){
//             salida+= `${n}`;
//         }
//         contador=0;
//     }
//     if(n === '0' || n === '1' || n === '2' || n === '3' || n === '4' || n === '5' || n === '6' || n === '7' || n === '8' || n === '9'){
//         numero = Number(n);
//         contador=1;
//     }
// }
// console.log(salida);