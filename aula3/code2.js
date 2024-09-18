const readline = require("readline");

const questao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function descobrirIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

questao.question(
  "Digite sua data de nascimento (YYYY-MM-DD): ",
  (dataNascimento) => {
    const idade = descobrirIdade(dataNascimento);
    if (idade > 18) {
      console.log(`Você tem ${idade} anos e pode votar.`);
    } else {
      console.log(`Você tem ${idade} e é jovem demais para votar.`);
    }
    questao.close();
  }
);
