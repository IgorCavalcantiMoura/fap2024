// Altere o programa anterior, intercalando 3 vetores de 10 elementos cada.

const leia = require("readline-sync")
 let vetorA = new Array(10)
 let vetorB = new Array(10)
 let vetorC = new Array(10)
 let vetorTotal = new Array(30)


 for(let i = 0; i<10; i++){
    vetorA[i] = leia.questionInt(`Digite o ${i+1}º numero para o vetorA: `)
    vetorB[i] = leia.questionInt(`Digite o ${i+1}º numero para o vetorB: `)
    vetorC[i] = leia.questionInt(`Digite o ${i+1}º numero para o vetorB: `)
 }

for(let i = 0; i<10; i++){
    vetorTotal.push(vetorA[i])
    vetorTotal.push(vetorB[i])
    vetorTotal.push(vetorC[i])
}

console.log(vetorTotal)