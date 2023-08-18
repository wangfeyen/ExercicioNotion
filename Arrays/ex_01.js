//Crie um array de números e ordene-o em ordem crescente.
const prompt = require("prompt-sync")();
console.log("Digite a sequencia de números dando enter após cada um")
console.log("Digite 'parar' quando concluir.")
let numeros = [];
let num="";
while(num!=="parar"){
    num=prompt("  ")
    if(num!=="parar"){
        numeros.push(parseFloat(num))
    }
}

let ordenado=[];
let arrayantiga = numeros;
let arraynova = [];
let menor=arrayantiga[0]
let repetido = 1;

while(numeros.length!==ordenado.length){
    menor=arrayantiga[0]
    for(i=0;i<arrayantiga.length;i++){ //identificar o menor número
        if(arrayantiga[i]<menor){
            menor=arrayantiga[i];
        }
    }

    repetido=0;
    for(item2 of arrayantiga){
        if(item2!==menor){
            arraynova.push(item2)   // Criar uma nova array sem o menor número
        }else if(item2===menor){    // Se o menor número repetir, salvar quantas vezes vai se repetir
            repetido=repetido+1;
        }
    }
    for(i=1;i<=repetido;i++){ //Inserir o menor número na array organizada quantas vezes foi repetido
        ordenado.push(menor)
    }

    arrayantiga=arraynova;
    arraynova=[];

}
console.log(`A matriz: ${numeros} em odem crescente fica:`)
console.log(ordenado);