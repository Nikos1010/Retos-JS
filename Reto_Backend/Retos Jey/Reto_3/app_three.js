const entrada = 'JavaScript';
const lista = [...entrada];
console.log(lista.join("+"));

function agregarMas(input, signo) {
    const lista = [...input];
    console.log(lista.join(signo));
}
agregarMas(entrada, "'");
// let salida = "";
// let i = 1;

// for(let letra of entrada) {
//     if(entrada.length === i) {
//         salida += `${letra}`;
//     } else {
//         salida += `${letra}+`
//         i++;
//     }
// }

// console.log(salida)
