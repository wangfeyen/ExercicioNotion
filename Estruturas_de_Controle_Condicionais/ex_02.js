//Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %.
const prompt = require("prompt-sync")();
function parimpar(){
    const num = prompt("Insira o número a ser verificado se é par ou ímpar: ");
    if(num%2===0){
        console.log(`${num} é par!!!`)
    }else{
        console.log(`${num} é ímpar!!!`)
    }
    
    const repetir = prompt("Gostaria de tentar outro número? (Responda 's' para sim e 'n' para não) ");
    if(repetir==="s"){
        parimpar()
    }
}
parimpar()