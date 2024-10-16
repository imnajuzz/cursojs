// Solicite um número para o usuário e faça a tabuada do 1 até o 10 daquele número
const rl = require('readline-sync');

const tabuada = rl.questionInt("Qual a tabuada desejada? ");

for(let multiplicador = 1;  multiplicador <= 10; multiplicador++) {
    console.log(`${tabuada} x ${multiplicador} = ${tabuada*multiplicador}`);
}
