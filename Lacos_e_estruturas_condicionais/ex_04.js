//Verifique se um número é primo ou não.
function primoounao(n){
    primo = true;
    for(i=parseFloat(n)-1;i>1;i=i-1){
        if(parseFloat(n)%i===0){
            primo=false;
        }
    }
    if(primo===true){
        console.log(`${n} é primo`)
    }else{
        console.log(`${n} não é primo`)
    }
}
primoounao(7)