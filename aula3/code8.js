const readline = require("readline");

const pergunta = readline.createInterface({
  // apos o const eu tenho que botar o nome principal da pergunta e do close
  input: process.stdin,
  output: process.stdout,
});

console.log("olá passageiro");

pergunta.question("informe quantos km você deseja viajar: ", (km1) => {
  const preço = parseInt(km1) * 0.5;
  const desconto = parseInt(km1) * 0.45;
  const limite = 200;
  if (km1 < limite) {
    console.log(`sua viagem ira custar R$${preço.toFixed(2)}`);
  } else {
    console.log(`sua viagem ira custar R$${desconto.toFixed(2)}`);
  }

  pergunta.close();
});
