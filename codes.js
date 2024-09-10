const readline = require('readline'); // importa o módulo readline

// Cria uma interface de leitura para a entrada padrão e a saída padrão
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pede que o usuáro digite seu nome e captura a resposta
rl.question('informe seu nome: ', (nome) => {
  rl.question('informe seu salario: ', (_salario) => {
    console.log(`O funcionario, ${nome} recebe $${_salario} por mes`); // Mostra uma saudação com o nome informado
  
  // Fecha a interface de leitura após a resposta
  rl.close();
     })
})