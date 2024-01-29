const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Programa if");

rl.question('Digite um numero inteiro: ', (v) => {
  if (parseInt(v) > 5) {
    console.log("O numero digitado é maior que 5");
  } else if (parseInt(v) < 5) {
    console.log("O numero é menor que 5");
  } else {
    console.log("O numero é 5");
  }

  rl.close();
});

