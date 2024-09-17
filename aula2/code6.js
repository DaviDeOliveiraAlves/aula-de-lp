const readline = require("readline");

const resultados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("bem vindo");
resultados.question("informe o numero desejado: ", (numero1) => {
  const numero = parseFloat(numero1);
  const antecessor = numero - 1;
  const sucessor = numero + 1;
  console.log(
    `o sucessor de ${numero1} é ${sucessor} e o antecessor é ${antecessor}`
  );
  resultados.close();
});
