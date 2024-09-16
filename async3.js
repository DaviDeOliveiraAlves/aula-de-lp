const { error } = require("console");

async function divide(numerador, divisor) {
  if (divisor === 0) {
    return Promise.reject(new Error("não é possivel dividir por zero"));
  }

  const result = numerador / divisor;
  return result;
}

async function testDivide() {
  try {
    const resultado = await divide(10, 2);
    console.log("resultado da divisão:", resultado);
    const resultado2 = await divide(10, 0);
    console.log("resultado da divisão:", resultado2);
  } catch (error) {
    console.error("erro:", error.message);
  }
}
testDivide();
