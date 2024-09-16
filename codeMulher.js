const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularDesconto(valor, genero) {
  let desconto = 0;

  switch (genero.toLowerCase()) {
    case "homem":
      desconto = 0.05;
      break;
    case "mulher":
      desconto = 0.13;
      break;
    default:
      console.log('Gênero inválido. Por favor, digite "homem" ou "mulher".');
      return null;
  }

  return valor - valor * desconto;
}

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu gênero (homem/mulher): ", (genero) => {
    rl.question("Digite o valor da compra: ", (valorStr) => {
      const valor = parseFloat(valorStr);

      if (isNaN(valor) || valor < 0) {
        console.log(
          "Valor da compra inválido. Por favor, insira um número positivo."
        );
        rl.close();
        return;
      }

      const valorComDesconto = calcularDesconto(valor, genero);

      if (valorComDesconto !== null) {
        console.log(
          `Olá, ${nome}! O valor da sua compra com desconto é R$ ${valorComDesconto.toFixed(
            2
          )}.`
        );
      }

      rl.close();
    });
  });
});
