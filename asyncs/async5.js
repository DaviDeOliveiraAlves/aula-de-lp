function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function etapas() {
  console.log("iniciando o processo...");
  console.log("Etapa 1: começando...");
  await delay(1000);
  console.log("Etapa 1: finalizada");

  console.log("Etapa 2: começando...");
  await delay(1000);
  console.log("Etapa 2: finalizada");

  console.log("Etapa 3: começando...");
  await delay(1000);
  console.log("Etapa 3: finalizada");

  console.log("Processo finalizado");
}
etapas();
