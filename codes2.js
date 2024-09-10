const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('primeiro numero: ', (_num1) => {
  rl.question('segundo numero: ', (_num2) => {
    console.log(`a soma dos dois valores é: ${parseInt(num1) + parseInt(num2)}`); 
  

  rl.close();
     })
})