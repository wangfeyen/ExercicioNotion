//Crie um array de nomes e ordene-o em ordem alfabética.
const prompt = require("prompt-sync")();
console.log("Digite a sequencia de nomes dando enter após cada um")
console.log("Digite 'fim' quando concluir.")
let nome="";
let nomes = []
while(nome!=="fim"){
    nome=prompt("  ")
    if(nome!=="fim"){
        nomes.push(nome)
    }
}


let alfabetica=[];
let arraynova = [];
let menor;
let repetir;
while(nomes.length!==0){
    menor=nomes[0];
    for(i=0;i<nomes.length;i++){
        if(nomes[i]<menor){
            menor=nomes[i]
        }
    }
    repetir=0;
    for(i=0;i<nomes.length;i++){
        if(nomes[i]!==menor){
            arraynova.push(nomes[i])
        }else{
            repetir=repetir+1
        }
    }
    for(i=1;i<=repetir;i++){
        alfabetica.push(menor)
    }
    nomes=arraynova;
    arraynova=[];
}
console.log(alfabetica);