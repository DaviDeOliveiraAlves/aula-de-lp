class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

const meuCirculo = new Circulo(7);
console.log(`Área: ${meuCirculo.calcularArea().toFixed(2)}`);
console.log(`Perímetro: ${meuCirculo.calcularPerimetro().toFixed(2)}`);
