class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return parseFloat(this.largura) * parseFloat(this.altura);
  }

  calcularPerimetro() {
    return 2 * (parseFloat(this.altura) + parseFloat(this.largura));
  }
}

const meuRetangulo = new Retangulo(3, 7);
console.log(`Área: ${meuRetangulo.calcularArea().toFixed(2)}`);
console.log(`Perímetro: ${meuRetangulo.calcularPerimetro().toFixed(2)}`);
