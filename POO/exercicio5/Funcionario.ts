export class Funcionario{
    public nome: string
    public salario: number
    public cargo: string

    constructor(nome: string, salario: number, cargo: string){
        this.nome = nome
        this.salario = salario
        this.cargo = cargo
    }

    salarioLiquido():number{
        let impostos:number = 100
        let beneficios:number = 200

        return this.salario - impostos - beneficios
    }
}

const funcionario = new Funcionario("Igor", 5000, "dev")
console.log("O salario liquido é: " + funcionario.salarioLiquido());