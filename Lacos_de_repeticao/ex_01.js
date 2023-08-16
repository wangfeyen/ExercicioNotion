//Imprima os números de 1 a 10 utilizando um loop for.
const prompt = require("prompt-sync")();
function umadez() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  const resp = prompt(
    "Gostaria de imprimir novamente? (Responda 's' para sim e 'n' para não):"
  );
  if(resp==="s"){
      umadez();
  }
}
umadez()

