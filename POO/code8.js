class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadeAtual = 0;
  }

  acelerar(incremento) {
    this.velocidadeAtual += incremento;
    console.log(`Acelerou! Velocidade atual: ${this.velocidadeAtual} km/h`);
  }

  frear(decremento) {
    this.velocidadeAtual -= decremento;
    if (this.velocidadeAtual < 0) {
      this.velocidadeAtual = 0;
    }
    console.log(`Freou! Velocidade atual: ${this.velocidadeAtual} km/h`);
  }

  exibirVelocidade() {
    console.log(
      `Velocidade atual do ${this.marca} ${this.modelo}: ${this.velocidadeAtual} km/h`
    );
  }
}

const carro1 = new Carro("Fiat", "uno");
carro1.acelerar(50);
carro1.exibirVelocidade();
carro1.frear(20);
carro1.exibirVelocidade();
carro1.frear(40);
