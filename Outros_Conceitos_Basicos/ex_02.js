//Crie uma função que retorne o maior valor entre três números.
function maiornum(){
const prompt = require("prompt-sync")()
num = parseFloat(prompt(`Insira o 1º número: `))
let maior=num;
for (i = 2;i<=3;i++){ //Se quiser comparar mais que 3 números, substitua o "3" pela quantidade desejada
    num = parseFloat(prompt(`Insira o ${i}º número: `))
    if(maior<num){
        maior = num;
    }
}
console.log(`O maior número é: ${maior}`)
}
maiornum()
