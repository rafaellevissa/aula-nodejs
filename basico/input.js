// NAVEGADOR
/*let a = prompt("Digite um valor: "); // leitura de dados
console.log(a);
*/

// NODEJS
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a;

rl.question('Digite um valor: ', (answer) => {
  a = answer;
  console.log(a);
  rl.close();
});

