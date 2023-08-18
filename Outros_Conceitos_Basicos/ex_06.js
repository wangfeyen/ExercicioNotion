//Escreva uma função que inverta uma string (exemplo: "hello" => "olleh").
function palavra_contrario() {
  const prompt = require("prompt-sync")();
  const palavra = prompt(
    "Insira a palavra que vai ser posta de trás para frente:"
  );
  let palcontrario = "";
  for (i = palavra.length - 1; i >= 0; i = i - 1) {
    palcontrario = `${palcontrario}${palavra[i]}`;
  }
  console.log(`Palavra invertida: ${palcontrario}`);
}
palavra_contrario()