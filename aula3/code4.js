const readline = require("readline");

const number = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

number.question("informe um numero: ", (numero) => {
  if (numero % 2 === 0) {
    console.log(`o ${numero} é par`);
  } else {
    console.log(`o ${numero} é impar`);
  }
  number.close();
});
