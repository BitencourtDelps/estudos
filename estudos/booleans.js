let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

/* 
    Exclamação tem um significado de negação, exemplo abaixo
     retorna false !isAtivo
     retorna true !!isAtivo
*/
console.log(!!isAtivo);

/*Verifica se o nome é verdadeiro, caso não seja o sistema mostra o valor 'Desconhecido'*/ 
let nome = '';
console.log(nome || 'Desconhecido');