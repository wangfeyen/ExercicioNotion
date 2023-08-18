//Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex".
for(i = 1;i<=50;i++){
    if(i%3===0 && i%5===0){
        console.log(`${i} SofTex`)
    }else if(i%3===0){
        console.log(`${i} Sof`)
    }else if(i%5===0){
        console.log(`${i} Tex`)
    }else{
        console.log(i)
    }
}