//Crie um programa que encontre o valor mais frequente em um array de números.
const prompt = require("prompt-sync")();
let numeros = [];
console.log("Digite os numeros dando enter entre eles");
console.log("Escreva 'fim' quando concluir");
let item = 0;
while (item !== "fim") {
  item = prompt(" ");
  if (item !== "fim") {
    numeros.push(item);
  }
}
let repetir
let itemfreq=0;
let frequencia = 0;
let novoarray=[]
while(numeros.length!==0){
    item = numeros[0];
    repetir=0;
    for(i=0;i<numeros.length;i++){
        if(item===numeros[i]){
            repetir=repetir+1;
        }
    }
    if(repetir>frequencia){
        itemfreq = item;
        frequencia=repetir
    }
    for(i=0;i<numeros.length;i++){
        if(item!==numeros[i]){
            novoarray.push(numeros[i])
        }
    }
    numeros=novoarray;
    novoarray=[];

}
console.log(`O item mais frequente é "${itemfreq}", repentindo ${frequencia} vezes`);