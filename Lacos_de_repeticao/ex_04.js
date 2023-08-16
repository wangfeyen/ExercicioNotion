//Calcule o produto dos números de 1 a 5 utilizando um loop do...while.
let i=1;
let prod=1;
while(i<=5){
    console.log(`${prod} x ${i} =`)
    prod = prod*i;
    console.log(prod)
    i=i+1;
}
console.log("O produto dos números de 1 a 5 é:",prod)