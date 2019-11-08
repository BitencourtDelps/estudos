/* Array criado manualmente */
const valores = [7.7,8.9,6.3,9.2];

console.log(valores[0], valores[3]);
//Quarta Posição do array, index
valores[4] = 10;

console.log(valores[4]);

// Tamanho do array
console.log(valores.length);

// No array pode se misturar tipo
valores.push({id: 3}, false, null, 'teste');

console.log(valores);

// Pega o ultimo valor do array e esclui do mesmo
console.log(valores.pop());

// outra maneira de excluir valor da array
delete valores[0];
console.log(valores);

// Tipo
console.log(typeof valores);
