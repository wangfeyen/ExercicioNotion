//Crie uma função que receba um array de números e retorne a média deles.
function Encontrar_Media(){
    const prompt = require("prompt-sync")();
    let numeros = [];
    console.log("Digite os números dando enter entre eles")
    console.log("Escreva 'p' quando concluir")
    let num = 0;
    while(num !== "p"){
        num = prompt(" ")
        if(num!=="p"){
            numeros.push(parseFloat(num))
        }
    }
    let soma=0;
    for(i=0;i<numeros.length;i++){
        soma = soma+numeros[i];
    }
    const media = soma/numeros.length;
    console.log(`A média dos números [${numeros}] é: ${media}`)
}
Encontrar_Media()