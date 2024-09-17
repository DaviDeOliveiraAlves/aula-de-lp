const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("informe seu nome: ", (nome) => {
  console.log(`ola ${nome} seja bem vindo!`);

  rl.close();
});
