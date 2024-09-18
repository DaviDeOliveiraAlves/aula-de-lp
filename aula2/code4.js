const readline = require("readline");

const resultados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("bem vindo");
resultados.question("informe o primeiro numero: ", (numero1) => {
  resultados.question("informe o segundo numero: ", (numero2) => {
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
    resultados.close();
  });
});
