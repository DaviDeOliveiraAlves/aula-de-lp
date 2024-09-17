function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getNumber() {
  const randomNumber = Math.random();

  await delay(1000);

  const result = randomNumber * 100;

  return result;
}

async function testGetNumber() {
  try {
    const number = await getNumber();
    console.log("numero gerado:", number.toFixed());
  } catch (error) {
    console.error("erro:", error);
  }
}

testGetNumber();
