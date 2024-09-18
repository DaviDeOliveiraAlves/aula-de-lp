const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("informe seu nome: ", (nome) => {
  rl.question("informe seu salario: ", (_salario) => {
    console.log(`O funcionario, ${nome} recebe R$${_salario} por mes`);

    rl.close();
  });
});
