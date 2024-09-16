function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const readline = require("readline");

const numQ = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

numQ.question("informe um valor: ", async (inputvalue) => {
  async function sum(value) {
    await delay(1000);
    const firstvalue = 70;
    const result = parseInt(firstvalue) + parseInt(value);
    return result;
  }
  async function testSum(value) {
    try {
      const result = await sum(value);
      console.log("resultado da soma:", result);
    } catch (error) {
      console.error("erro:", error);
    } finally {
      numQ.close();
    }
  }
  const numericValue = parseFloat(inputvalue);
  if (isNaN(numericValue)) {
    console.error("o valor imformado não é um numero usavel.");
    numQ.close();
  } else {
    await testSum(numericValue);
  }
});
