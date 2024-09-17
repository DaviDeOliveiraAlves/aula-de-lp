const readline = require("readline");

const dias = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("seja bem vindo funcionario!");

dias.question(
  "informe a quantidade de dias em que você trabalhou neste mês: ",
  (dias1) => {
    const horas = dias1 * 8;
    const salario = horas * 25;
    console.log(
      `o funcionario trabalhos por ${horas} horas e recebera R$${salario}`
    );
    dias.close();
  }
);
