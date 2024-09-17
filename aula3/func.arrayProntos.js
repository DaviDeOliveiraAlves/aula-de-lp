function adicionarFinal(frutas) {
  frutas.push("banana", "jaca");
  return frutas;
}
function removerInicio(frutas) {
  frutas.shift();
  return frutas;
}
function adicionarInicio(frutas) {
  frutas.unshift("kiwi");
  frutas.pop();
  return frutas;
}
function removerFinal(frutas) {
  frutas.pop();
  return frutas;
}
function trocarItem(frutas) {
  frutas.splice(1, 1, "manga");
  return frutas;
}
let frutas = ["abacaxi", "maçã", "laranja", "pessego", "abacate"];

function inserirItem(frutas, indice, elemento) {
  const novoarray = [...frutas];
  novoarray.splice(indice, 1, elemento);
  return novoarray;
}
const localColocado = 2;

const frutasAtualizada = inserirItem(frutas, localColocado);

function removerItem(frutas, item) {
  const novoArray = frutas.filter((element) => element !== item);
  return novoArray;
}
const itemParaRemover = "laranja";

const frutasNovas = removerItem(frutas, itemParaRemover);

console.log(frutasNovas);
