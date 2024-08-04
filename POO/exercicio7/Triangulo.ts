export class Triangulo{
    public ladoA: number
    public ladoB: number
    public ladoC: number

    constructor(ladoA: number, ladoB: number, ladoC: number){
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    trianguloValido():boolean {
        return (
          this.ladoA + this.ladoB > this.ladoC &&
          this.ladoA + this.ladoC > this.ladoB &&
          this.ladoB + this.ladoC > this.ladoA
        );
      }

      calcularArea() {
        if (this.trianguloValido()) {
          const s = (this.ladoA + this.ladoB + this.ladoC) / 2;
          const area = Math.sqrt(
            s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC)
          );
          return area;
        } else {
          return "Os lados fornecidos não formam um triângulo válido.";
        }
      }


}

const triangulo = new Triangulo(3, 4, 5);

if (triangulo.trianguloValido()) {
  console.log("Área do triângulo:", triangulo.calcularArea());
} else {
  console.log("Os lados fornecidos não formam um triângulo válido.");
}