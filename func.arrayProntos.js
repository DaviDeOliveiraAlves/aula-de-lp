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
console.log(trocarItem(frutas));
