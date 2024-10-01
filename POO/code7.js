class Triangulo {
  constructor(ladoA, ladoB, ladoC) {
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  TrianguloValido() {
    return (
      this.ladoA + this.ladoB > this.ladoC,
      this.ladoA + this.ladoC > this.ladoB,
      this.ladoB + this.ladoC > this.ladoA
    );
  }

  calcularArea() {
    if (!this.TrianguloValido()) {
      throw new Error("Não é um triângulo válido.");
    }

    const semiPerimetro = (this.ladoA + this.ladoB + this.ladoC) / 2;
    const area = Math.sqrt(
      semiPerimetro *
        (semiPerimetro - this.ladoA) *
        (semiPerimetro - this.ladoB) *
        (semiPerimetro - this.ladoC)
    );
    return area;
  }
}

const triangulo1 = new Triangulo(3, 4, 5);
if (triangulo1.TrianguloValido()) {
  console.log(`Área do triângulo: ${triangulo1.calcularArea().toFixed(2)}`);
} else {
  console.log("Não é um triângulo válido.");
}
