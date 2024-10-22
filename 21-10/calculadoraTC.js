/**
 * Criem uma calculadora que irá calcular Soma, Subtração, Multiplicação e Divisão.
 * Solicitem o Primeiro número, depois a Operação e por último o Segundo número.
 * Criem uma função para cada uma das Operações Matemáticas.
 * Utilizem o if/else para saber qual operação vai chamar qual função.
 * +  -  *  /
 */
const readline = require('readline-sync');

const numero1 = readline.questionInt("Informe o primeiro numero: ");
const operacao = readline.question("Informe a operacao desejada (+ - * / ): ");
const numero2 = readline.questionInt("Informe o segundo numero: ");
let resultado;

function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}

if (operacao == "+") {
    resultado = soma(numero1, numero2);
} else if (operacao == "-") {
    resultado = subtracao(numero1, numero2);
} else if (operacao == "*") {
    resultado = multiplicacao(numero1, numero2);
} else if (operacao == "/") {
    resultado = divisao(numero1, numero2);
}

console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);
