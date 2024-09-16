function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function contagem(segundos) {
  let agora = segundos;

  while (agora >= 0) {
    console.log(agora);
    await delay(1000);
    agora--;
  }

  console.log("contagem regresiva terminada");
}

contagem(10);
