//Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).
function palindromo() {
  const prompt = require("prompt-sync")();
  const palavra = prompt("Insira uma palavra: ");
  let letrafrente = [];
  let letratras = [];
  for (i = 0; i < palavra.length; i++) {
    letrafrente.push(palavra[i]);
    letratras.push(palavra[palavra.length - i - 1]);
  }
  console.log(letrafrente);
  console.log(letratras);

  let palind = true;
  for (i = 0; i < palavra.length; i++) {
    if (letrafrente[i] !== letratras[i]) {
      palind = false;
    }
  }
  if (palind === true) {
    console.log(`${palavra} é palíndromo!`);
  } else {
    console.log(`${palavra} não é palíndromo!`);
  }
  const repetir = prompt(
    "Gostaria de tentar outra palavra? (Responda 's' para sim e 'n' para não): "
  );
  if (repetir === "s") {
    palindromo();
  }
}
palindromo();
