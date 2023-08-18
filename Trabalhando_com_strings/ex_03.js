//Remova os espaços em branco de uma string.
const prompt = require("prompt-sync")();
const palavra = prompt("Digite uma frase: ")
semespaco = ""
for(letra of palavra){
    if(letra!==" "){
        semespaco = `${semespaco}${letra}`
    }
}
console.log(semespaco)