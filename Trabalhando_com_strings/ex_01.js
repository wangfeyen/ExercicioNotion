//Conte quantas vogais há em uma string
const prompt = require("prompt-sync")();
const palav = prompt("Digite uma palavra: ")
function qtddvogais(palavra){
    let vogais = 0;
    for(letra of palavra){
        if(letra==="a" || letra==="e" || letra==="i" || letra==="o"||letra==="u"){
            vogais = vogais+1
        }
    }
    console.log(`Em ${palavra} tem ${vogais} vogais`)
}
qtddvogais(palav)