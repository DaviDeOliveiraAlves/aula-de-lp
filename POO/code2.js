class ContaBancaria {
  constructor(numero, nome, saldo) {
    this.numero = numero;
    this.nome = nome;
    this.saldo = saldo;
  }

  adicionarSaldo(valor) {
    this.saldo += parseFloat(valor);
    return this.saldo;
  }

  sacarSaldo(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
      return this.saldo;
    }
    this.saldo -= parseFloat(valor);
    return this.saldo;
  }

  exibirDados() {
    return `Número da Conta: ${this.numero}, Nome: ${
      this.nome
    }, Saldo: ${this.saldo.toFixed(2)}`;
  }
}

console.log("Bem-vindo à sua conta bancária");

const minhaContaBancaria = new ContaBancaria(537, "Aline", 932);
console.log(minhaContaBancaria.exibirDados());

minhaContaBancaria.adicionarSaldo(100);
console.log("Após adicionar R$100:");
console.log(minhaContaBancaria.exibirDados());

minhaContaBancaria.sacarSaldo(50);
console.log("Após sacar R$50:");
console.log(minhaContaBancaria.exibirDados());
