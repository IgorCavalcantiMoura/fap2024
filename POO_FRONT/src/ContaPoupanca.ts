import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _aniversario: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  public get aniversario(): number {
    return this._aniversario;
  }

  public set aniversario(aniversario: number) {
    this._aniversario = aniversario;
  }

  public visualizar(): void {
      super.visualizar()
      console.log("Dia do Aniversario: " + this._aniversario);
  }
}



const contaPoupanca = new ContaPoupanca(
  54321,      
  9876,       
  2,          
  "Maria Oliveira", 
  2000,       
  15          
);


contaPoupanca.visualizar();
