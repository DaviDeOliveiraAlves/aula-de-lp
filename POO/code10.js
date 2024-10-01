class Livro {
  constructor(titulo, autor, numeroDePaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
    this.disponivel = true;
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi emprestado.`);
    } else {
      console.log(
        `O livro "${this.titulo}" de ${this.autor} não está disponível para empréstimo.`
      );
    }
  }

  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi devolvido.`);
    } else {
      console.log(`O livro "${this.titulo}"de ${this.autor} já foi devolvido.`);
    }
  }

  verificarDisponibilidade() {
    return this.disponivel;
  }
}

const livro1 = new Livro("the book of bill", "Alex Hirsch", 328);
livro1.emprestar();
livro1.emprestar();
livro1.devolver();
livro1.devolver();
console.log(`Disponível: ${livro1.verificarDisponibilidade() ? "Sim" : "Não"}`);
