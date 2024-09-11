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
function adicionarEspecifico(frutas) {
  frutas.splice(1, 1, 1);
  return frutas;
}
let frutas = ["abacaxi", "maçã", "laranja"];
console.log(adicionarEspecifico(frutas));
