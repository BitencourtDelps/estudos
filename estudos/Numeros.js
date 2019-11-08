const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1 , peso2);


// Caso utilizado o valor de 1.0 o js considera que é inteiro, caso contrario considera false
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

// Exemplo
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// toFixed(numero) = valor de numeros que irá trazer apos a virgula
console.log(media.toFixed(2));

// Converter valor numerico para String
// Se quiser converte o valor para binario, necessario passar o valor 2 detro do parentese
//Exemplo: media.toString(2);
console.log(media.toString());
console.log(media.toString(2)); // Retorna valor binario

//typeof --> tras o tipo da variavel
console.log(typeof media);

/*
Number com a primeira letra maiusculo é uma função;
number com a primeira letra minuscula é o tipo do dado;
*/