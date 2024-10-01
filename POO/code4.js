class Aluno {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }

  estaAprovado() {
    const media = this.calcularMedia();
    return media >= 6;
  }
}

// Exemplo de uso
const aluno1 = new Aluno("João", "12345", [7, 6, 6, 5]);
console.log(`Média de ${aluno1.nome}: ${aluno1.calcularMedia()}`);
console.log(`Aluno aprovado: ${aluno1.estaAprovado() ? "Sim" : "Não"}`);
