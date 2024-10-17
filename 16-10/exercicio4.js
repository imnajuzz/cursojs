// const readline = require('readline-sync');

// let soma = 0;
// let contador = 0;
// while(contador < 3) {
//     soma = soma + 10;
//     contador = contador + 1; // contador++
// }
// console.log("soma: ",soma);


const readline = require('readline-sync');

let soma = 0;

while(soma < 100) {
    let numero = readline.questionInt("Informe um numero para adicionar a soma: ");
    soma = soma + numero;
    console.log("soma: ", soma);
}
