export class Produto{
    public nome: string
    public preco: number
    public quantEstoque: number

    constructor(nome: string, preco: number, quantEstoque: number){
        this.nome = nome
        this.preco = preco
        this.quantEstoque = quantEstoque
    }

    ValorTotal_NoEstoque():number{
        return this.preco* this.quantEstoque
    }

    verificarProduto():string{
        if (this.quantEstoque  > 0)
            return "Disponivel"
        return "Indisponivel"
    }
}

const produto = new Produto("água", 2, 0)
console.log("O valor total em estoque é: " + produto.ValorTotal_NoEstoque());
console.log("situação: " + produto.verificarProduto());