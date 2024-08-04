export class Carro{
    public marca:string
    public modelo:string
    public velocidadeAtual:number

    constructor(marca:string, modelo:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = 0; 
      }

      acelerar(valor:number) {
        this.velocidadeAtual += valor;
        console.log(`O carro acelerou. Velocidade atual: ${this.velocidadeAtual} km/h`);
      }

      frear(valor:number) {
        this.velocidadeAtual -= valor;
        if (this.velocidadeAtual < 0) {
          this.velocidadeAtual = 0; 
        }
        console.log(`O carro freou. Velocidade atual: ${this.velocidadeAtual} km/h`);
      }
    
      
      exibirVelocidade() {
        console.log(`A velocidade atual é: ${this.velocidadeAtual} km/h`);
      }
    }
    
    
    const meuCarro = new Carro("Toyota", "Corolla");
    
    meuCarro.acelerar(50); 
    meuCarro.exibirVelocidade(); 
    
    meuCarro.frear(20); 
    meuCarro.exibirVelocidade(); 
