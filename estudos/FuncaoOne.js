// Função sem retorno

function imprimirSoma(a,b){
    console.log(a + b);
}

imprimirSoma(2,3);

// Função com retorno 
// Caso não seja passado o segundo parametro, 
// o valor 0 é utilizado como o segundo parametro(poderia ser qualquer valor)
function soma(a, b = 0 ){
    return a + b;
}

console.log(soma(2,8))