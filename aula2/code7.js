const readline = require("readline");

const resultados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("bem vindo");
resultados.question(
  "informe quanto dinheiro voce possui em R$(use ponto como separador decimal): ",
  (real) => {
    let conversão = parseFloat(real) / (56 / 10);
    if (isNaN(real)) {
      console.log("por, favor insira um numero diferente");
    } else {
      console.log(`você possui $${conversão.toFixed(2)} em dolar`);
    }

    resultados.close();
  }
);
