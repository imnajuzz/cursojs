// npm install readline-sync
const readline = require("readline-sync");

const sexo = readline.question("Qual o seu sexo? M - Masculino ou F - Feminino");
//  sexo.toUpperCase() - Para letras maiúscula

/*
 *    ==    - Operador lógico de comparação
 *    >     - Operador lógico maior que
 *    >=    - Operador lógico maior ou igual à
 *    <     - Operador lógico menor que
 *    <=    - Operador lógico menor ou igual à
 *    !=    - Operador lógico diferente de
 */

if (sexo.toUpperCase() == "M") {
    console.log("Pode entrar no banheiro masculino.");
}   else if (sexo.toLowerCase() == "f") {
    console.log("Não pode entrar no banheiro masculino.");
} else {
    console.log("Opção desconhecida.");
}
