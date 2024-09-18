const readline = require("readline");

const resultados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("seja bem vindo!");
resultados.question(
  "informe o tamanho do primeiro segmento de reta: ",
  (seg1) => {
    resultados.question(
      "informe o tamanho do segundo segmento de reta: ",
      (seg2) => {
        resultados.question(
          "informe o tamanho do terceiro segmento de reta: ",
          (seg3) => {
            const soma = parseInt(seg1) + parseInt(seg2);
            const soma2 = parseInt(seg1) + parseInt(seg3);
            const soma3 = parseInt(seg2) + parseInt(seg3);
            if (soma < seg3) {
              console.log("estas retas não formam um triangulo");
            } else if (soma2 < seg2) {
              console.log("estas retas não formam um triangulo");
            } else if (soma3 < seg1) {
              console.log("estas retas não formam um triangulo");
            } else {
              console.log("é possivel formar um triangulo usando estas retas!");
            }
            resultados.close();
          }
        );
      }
    );
  }
);
