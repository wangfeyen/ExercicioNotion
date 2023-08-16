//Crie um loop que imprima a sequência de Fibonacci até o 10º termo.
NumAnterior = 1;
NumAnterior2x = 0;
NumAtual=NumAnterior;
console.log(`1º: 1`);
for(i=2;i<=10;i++){
    NumAtual=NumAnterior+NumAnterior2x;
    console.log(`${i}º: ${NumAtual}`);
    NumAnterior2x=NumAnterior;
    NumAnterior=NumAtual;
}