const readline = require("readline");

const resultados = readline.createInterface({
  // apos o const eu tenho que botar o nome principal da pergunta e do close
  input: process.stdin,
  output: process.stdout,
});
console.log("bem vindo professor");
resultados.question("informe a primeira nota do aluno: ", (nota1) => {
  resultados.question("informe a segunda nota do aluno: ", (nota2) => {
    let media = parseInt(nota1) + parseInt(nota2);
    console.log(media);
    resultados.close();
  });
});
