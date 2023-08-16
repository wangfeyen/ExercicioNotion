//Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).
const prompt = require("prompt-sync")();
function bissexto(){
    const ano = prompt("Digite um ano para a análise se é bissexto: ");
    if(ano%400===0){
        console.log(`${ano} é bissexto!!`)
    }else if(ano%4===0 && ano%100!==0){
        console.log(`${ano} é bissexto!!`)
    }else{
        console.log(`${ano} não é bissexto!!`)
    }
}
bissexto();