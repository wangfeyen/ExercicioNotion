//Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; 
//se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1.
const prompt = require("prompt-sync")()
let n = parseFloat(prompt("Digite um número:"))
while (n!==1){
    if(n%2===0){
        console.log(`${n}/2 = ${n/2}`)
        n=n/2;
    }else{
        console.log(`${n}*3 + 1 = ${n*3+1}`)
        n=n*3+1;
    }
}