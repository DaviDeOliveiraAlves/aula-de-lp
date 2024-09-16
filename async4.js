function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dados do fetchData1");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dados do fetchData2");
    }, 3000);
  });
}

async function getData() {
  try {
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("Resultado fetchData1:", result1);
    console.log("resultado fetchData2:", result2);
  } catch (error) {
    console.error("erro ao obter dados:", error);
  }
}
getData();
