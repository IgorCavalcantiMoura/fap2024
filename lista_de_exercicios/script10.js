// Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.

const leia = require("readline-sync")
 let vetorA = new Array(10)
 let vetorB = new Array(10)
 let vetorTotal = new Array(20)


 for(let i = 0; i<10; i++){
    vetorA[i] = leia.questionInt(`Digite o ${i+1}º numero para o vetorA: `)
    vetorB[i] = leia.questionInt(`Digite o ${i+1}º numero para o vetorB: `)
 }

for(let i = 0; i<10; i++){
    vetorTotal.push(vetorA[i])
    vetorTotal.push(vetorB[i])
}

console.log(vetorTotal)