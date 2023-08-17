//Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /).
function calculadora() {
  const prompt = require("prompt-sync")();
  const num1 = parseFloat(prompt("Número: "));
  const operador = prompt("Operador(+, -, *, /): ");
  const num2 = parseFloat(prompt("Número: "));
  let resultado = 0;
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }
  console.log(`${num1} ${operador} ${num2} = ${resultado}`);
  const repetir = prompt("Gostaria de fazer um novo cálculo? (Responda 's' para sim e 'n' para não): ")
  if(repetir==="s"){
    calculadora()
  }
}
calculadora()