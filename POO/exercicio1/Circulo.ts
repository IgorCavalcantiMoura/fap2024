export class Circulo {
    public raio: number

    constructor(raio:number){
        this.raio = raio
    }

    calcularArea(): number{
        return Math.PI * Math.pow(this.raio, 2)
    }

    calcularPerimetro():number {
        return 2* Math.PI* this.raio
    }

}

const circulo = new Circulo(5); 
console.log("Área do círculo:", circulo.calcularArea().toFixed(2)); 
console.log("Perímetro do círculo:", circulo.calcularPerimetro().toFixed(2));