const readline = require("readline");

const pergunta = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("olá motorista");
const checarVelocidade = (velocidade) => {
  const limite = 80;
  if (velocidade > limite) {
    const excesso = velocidade - limite;
    const multa = excesso * 5;
    console.log("você foi multado");
    console.log(`Valor da multa: R$${multa.toFixed(2)}`);
  } else {
    console.log("tenha um bom dia!");
  }
};
pergunta.question(
  "informe a velocidade do veiculo em Km/h: ",
  (velocidade1) => {
    const velocidade = parseFloat(velocidade1);
    if (isNaN(velocidade)) {
      console.log("digite um numero valido por favor");
    } else {
      checarVelocidade(velocidade);
    }
    pergunta.close();
  }
);
