export class Retangulo{
    public largura: number
    public altura: number

    constructor(largura: number, altura: number){
        this.altura = altura
        this.largura = largura
    }

    calcularArea():number{
        return  (this.altura* this.largura)
    }
    
    calcularPerimetro():number{
        return  (this.altura*2) + (this.largura*2)
    }
}

const retangulo = new Retangulo(2,4)
console.log("A area do retangulo é: " + retangulo.calcularArea());
console.log("O perimetro do retangulo é: " + retangulo.calcularPerimetro());