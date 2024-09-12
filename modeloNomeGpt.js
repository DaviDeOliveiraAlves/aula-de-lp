const readline = require("readline");

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para calcular a idade
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();

  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

// Pergunta a data de nascimento ao usuário
rl.question(
  "Digite sua data de nascimento (YYYY-MM-DD): ",
  (dataNascimento) => {
    try {
      const idade = calcularIdade(dataNascimento);
      console.log(`Você tem ${idade} anos.`);
    } catch (error) {
      console.error("Data inválida. Por favor, use o formato YYYY-MM-DD.");
    } finally {
      rl.close();
    }
  }
);
