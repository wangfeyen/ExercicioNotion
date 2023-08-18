//Crie uma função que remova elementos duplicados de um array.
function Remover_Duplicados(){
    const prompt = require("prompt-sync")();
    let elementos = [];
    console.log("Digite os elementos dando enter entre eles")
    console.log("Escreva 'parar' quando concluir")
    let item = 0;
    while(item !== "parar"){
        item = prompt(" ")
        if(item!=="parar"){
            elementos.push(item)
        }
    }

    novoarray=[elementos[0]];
    duplic = false;
    for(i = 0;i<elementos.length;i++){
        for(j=0;j<novoarray.length;j++){
            if(elementos[i]===novoarray[j]){
                duplic = true;
            }
        }
        if(duplic===false){
            novoarray.push(elementos[i]);
        }
        duplic = false
    }
    console.log(`Array antigo: [${elementos}]`)
    console.log(`Novo array sem duplicatas: [${novoarray}]`)
}
Remover_Duplicados()