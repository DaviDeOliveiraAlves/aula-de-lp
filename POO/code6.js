class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotalEmEstoque() {
    return this.preco * this.quantidade;
  }

  estaDisponivel() {
    return this.quantidade > 0;
  }
}

const meuProduto = new Produto("Camiseta", 50, 7);
console.log(
  `Valor total em estoque de ${meuProduto.nome}: R$ ${meuProduto
    .calcularValorTotalEmEstoque()
    .toFixed(2)}`
);
console.log(
  `Produto disponível: ${meuProduto.estaDisponivel() ? "Sim" : "Não"}`
);
