//Encontre o maior valor em um array de números.
const prompt = require("prompt-sync")();
console.log("Digite a sequencia de números dando enter após cada um")
console.log("Digite 'fim' quando concluir.")
let num="";
let maior = parseFloat(prompt("  "));
while(num!=="fim"){
    num=prompt("  ")
    if(num!=="fim" && parseFloat(num)>maior){
        maior=num;
    }
}
console.log(`O maior número é: ${maior}`)