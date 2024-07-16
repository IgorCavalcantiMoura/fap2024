// Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0

const leia = require("readline-sync")

let notas = new Array(10)

for(let i = 0; i<10; i++){
    let nota1 = leia.questionFloat(`Entre com a primeira nota do aluno(a) ${i + 1}: `)
    let nota2 = leia.questionFloat(`Entre com a segunda nota do aluno(a) ${i + 1}: `)
    let nota3 = leia.questionFloat(`Entre com a terceira nota do aluno(a) ${i + 1}: `)
    let nota4 = leia.questionFloat(`Entre com a quarta nota do aluno(a) ${i + 1}: `)
    notas[i] = (nota1 + nota2 + nota3 + nota4)/4
}

let notaMaior = notas.filter(function(numero){
    return numero >= 7
})
console.table(notas);
console.table(notaMaior);
console.log(`${notaMaior.length} alunos(as) possuem notas maiores ou iguais a 7!`);