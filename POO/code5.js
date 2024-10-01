class Funcionario {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  calcularSalarioLiquido() {
    const impostos = this.calcularImpostos();
    const beneficios = this.calcularBeneficios();
    return this.salario - impostos + beneficios;
  }

  calcularImpostos() {
    const taxaImposto = 0.15;
    return this.salario * taxaImposto;
  }

  calcularBeneficios() {
    const taxaBeneficio = 0.1;
    return this.salario * taxaBeneficio;
  }
}

const funcionario1 = new Funcionario("Maria", 2000, "Desenvolvedora");
console.log(
  `Salário líquido de ${funcionario1.nome}: R$ ${funcionario1
    .calcularSalarioLiquido()
    .toFixed(2)}`
);
