//Conte quantas ocorrências de uma determinada letra existem em uma string.
const prompt = require("prompt-sync")();
const frase = prompt("Digite a frase que será verificada: ");
const letra = prompt("Digite a letra a ser procurada: ");
let qtddletras = 0;
for(item of frase){
    if(item===letra){
        qtddletras = qtddletras +1;
    }
}
console.log(`Na frase " ${frase} " tem ${qtddletras} letras ${letra}`)