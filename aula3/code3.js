const readline = require("readline");

const resultados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("bem vindo professor");
resultados.question("informe a primeira nota do aluno: ", (nota1) => {
  resultados.question("informe a segunda nota do aluno: ", (nota2) => {
    let media = (parseInt(nota1) + parseInt(nota2)) / 2;
    console.log(media);
    if (media > 7) {
      console.log("o aluno passou");
    } else {
      console.log("o aluno foi reprovado");
    }
    resultados.close();
  });
});
