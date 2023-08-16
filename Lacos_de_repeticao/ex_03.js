//Imprima os números pares de 0 a 20 utilizando um loop for.
const prompt= require("prompt-sync")();
function pares(){
    for(i=0;i<=20;i=i+2){
        console.log(i)
    }
    const repetir = prompt("Repetir? (Responda 's' para sim e 'n' para não) ")
    if (repetir==="s"){
        pares()
    }
}
pares()