for(var i = 1; i < 10; i++){
    console.log('Soma = ', soma(i, i-1));
    console.log('Subtracao =', Subtracao(i,i-1));
    console.log('Multiplicacao =', Multiplicacao(i,i+1));
    console.log('Divisão = ', Divisao(i,i-2));
}

function soma(a,b){
    return a + b;
};
function Subtracao(a,b){
    return a - b;
};
function Multiplicacao(a,b){
    return a * b;
};
function Divisao(a,b){
    return a / b;
};