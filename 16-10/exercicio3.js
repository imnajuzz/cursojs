// SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR

const readline = require('readline-sync');

for(let i = 1; i <= 3; i++) {
    let num = readline.questionInt(`Informe o numero: `);

        if (num % 2 == 0) {
            console.log(`O numero ${num} eh Par`);
        } else {
            console.log(`O numero ${num} eh Impar`)
        }
}
