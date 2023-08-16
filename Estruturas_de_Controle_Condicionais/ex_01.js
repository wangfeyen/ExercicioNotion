//Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else.
const prompt=require("prompt-sync")();
function numero(){
    const num = prompt("Digite um número para verificação se é positivo, negativo ou zero: ")
    if(num>0){
        console.log(`${num} é positivo`);
    }else if(num<0){
        console.log(`${num} é negativo`);
    }else{
        console.log(`${num} é zero`);
    }
    const repetir = prompt("Quer verificar um novo número? (Responda 's' para sim e 'n' para não): ")
    if(repetir==="s"){
        numero()
    }
}
numero()