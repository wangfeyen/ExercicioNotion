//Crie uma função que calcule o fatorial de um número inteiro.
function fatorial(){
    const prompt = require("prompt-sync")();
    const num = parseFloat(prompt("Insira um número para o fatorial: "));
    let produto = num;
    let demo = num
    for (i=num-1;i>=1;i=i-1){
        demo = `${demo} * ${i}`
        produto = produto*i
    }
    console.log(`${demo} = ${produto}`)
    console.log(`O fatorial de ${num} é: ${produto}`)
}
fatorial()