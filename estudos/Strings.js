const escola = "Cod3r";
// escola.charAt(4) --> Retorna a letra no quarto indice, o indice começa do zero ou seja 
/*
No exemplo da palavra Cod3r;
Indice zero: C
Indice um: o
Indice dois: d
Indice tres: 3
Indice quatro: r

*/
console.log(escola.charAt(4));

// Mesma função do charAt, porém retorna o valor do indice na tabela Ascii
console.log(escola.charCodeAt(3));

// Verifica o indice na frase e retorna o valor correspondente
console.log(escola.indexOf('3'));

// Pega toda a string apartir do primeiro indice, até o final
console.log(escola.substring(1));

//Pega a string apartir do primeiro indice informado, até o ultimo indice informado
console.log(escola.substring(0,3));
console.log(escola.substr(0,3));

// Concatenar variavel
console.log('ESCOLA '.concat(escola.concat("!")));

//Replace 
console.log(escola.replace(3, 'e'));

// Altera a string para uma array, usando o separado ',' como parametro
console.log('Ana,Maria,Pedro'.split(','));