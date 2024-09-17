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
    const breve = 18 - idade;
    const atraso = idade - 18;
    if (idade === 18) {
      const idade = descobrirIdade(dataNascimento);
      console.log(`Você tem ${idade} anos e pode se alistar.`);
    } else if (idade > 18) {
      console.log(
        `você tem ${idade} e ja deveria ter se alistado a ${atraso} anos`
      );
    } else {
      console.log(
        `você tem ${idade} anos e so podera se alistar em ${breve} anos`
      );
    }
    questao.close();
  }
);
