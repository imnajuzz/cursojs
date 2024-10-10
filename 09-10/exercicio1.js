const readline = require('readline-sync');
/** 
 * Solicitar o nome do aluno, as 4 notas dele no ano, calcular a média final. 
 * Se a média for maior ou igual 6, exibir "O aluno <nome> foi aprovado com a média <media>".
 * Senão, exibir "O aluno <nome> foi reprovado com a média <media>".
*/
// Solicitando o NOME
const nome = readline.question("Qual o nome do(a) aluno(a)? ");

// Solicitando as NOTAS
const nota1 = readline.questionFloat("Qual a primeira nota? ");
const nota2 = readline.questionFloat("Qual a segunda nota? ");
const nota3 = readline.questionFloat("Qual a terceira nota? ");
const nota4 = readline.questionFloat("Qual a quarta nota? ");

// Calculando a MEDIA
const media = (nota1 + nota2 + nota3 + nota4)/4;

// Verificar SE o aluno foi APROVADO ou REPROVADO
if (media >= 6) {
    console.log(`O(A) aluno(a): ${nome} foi aprovado(a) e a média foi de ${media.toFixed(2)}`);
} else {
    console.log(`O(A) aluno(a): ${nome} foi reprovado(a) e a média foi de ${media.toFixed(2)}`);
}
