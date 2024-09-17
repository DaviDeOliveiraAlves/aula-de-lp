const readline = require("readline");

const money = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("seja bem vindo funcionario!");

money.question("informe seu salario :", (salario) => {
  const valorA = (parseInt(salario) * 15) / 100;
  const aumento = parseInt(salario) + parseInt(valorA);

  console.log(
    `o funcionario recebera R$${valorA} de aumento e agora seu salario será R$${aumento}`
  );

  money.close();
});
