//Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados.
const prompt = require("prompt-sync")()
const qtdditens = parseFloat(prompt("Digite a quantidade de numeros que as arrays vão ter: "))
let array1=[];
let item;
for(i=1;i<=qtdditens;i++){
    item = parseFloat(prompt(`${i}º item da 1ª array:`));
    array1.push(item)
}
console.log()
let array2=[];
for(i=1;i<=qtdditens;i++){
    item = parseFloat(prompt(`${i}º item da 1ª array:`));
    array2.push(item)
    
}
let resultado=[];
for(i=0;i<qtdditens;i++){
    resultado.push(+array1[i]+array2[i])
}
console.log(array1,"+")
console.log(array2,"=")
console.log(resultado)