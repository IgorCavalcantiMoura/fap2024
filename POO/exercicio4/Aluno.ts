export class Aluno {
  public nome: string;
  public matricula: number;
  public nota_1: number;
  public nota_2: number;

  constructor(nome: string, matricula: number, nota1: number, nota2: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.nota_1 = nota1;
    this.nota_2 = nota2;
  }

  mediaAluno(): number {
    return (this.nota_1 + this.nota_2) / 2;
  }

  situacaoAluno(): string {
    if (this.mediaAluno() >= 7) return "Aprovado";
    return "Reprovado";
  }
}
 const aluno = new Aluno("Igor", 1234, 10,10)
 console.log("A media é: " + aluno.mediaAluno());
 console.log("A situação é: " + aluno.situacaoAluno());