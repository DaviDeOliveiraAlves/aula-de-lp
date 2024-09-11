function inserirEmPosicao(array, indice, item) {
  if (indice < 0 || indice > array.length) {
      throw new Error("Índice fora dos limites do array");
  }
  array.splice(indice, 0, item);
  return array;
}

// Exemplo de uso:
let numeros = [1, 2, 3, 5];
inserirEmPosicao(numeros, 3, 4);  // Insere o 4 na posição 3
console.log(numeros);  // Saída: [1, 2, 3, 4, 5]