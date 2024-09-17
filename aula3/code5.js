const readline = require("readline");

const anoQ = readline.createInterface({
  // apos o const eu tenho que botar o nome principal da pergunta e do close
  input: process.stdin,
  output: process.stdout,
});

anoQ.question("Informe um ano: ", (ano) => {
  if (ano % 4 === 0) {
    console.log(`${ano} é bissexto`);
  } else {
    console.log(`${ano} não é bissexto`);
  }
  anoQ.close();
});
