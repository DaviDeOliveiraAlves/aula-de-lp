const readline = require("readline");

const resultados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("seja bem vindo arquiteto!");
resultados.question("informe a largura da parede em metros: ", (largura) => {
  resultados.question("informe a altura da parede em metros: ", (altura) => {
    let area = parseInt(largura) * parseInt(altura);
    let tinta = parseFloat(area) / 2;
    console.log(
      `a area a ser pintada será de ${area} metros e irá precisar de ${tinta} litros de tinta para ser pintada`
    );
    resultados.close();
  });
});
