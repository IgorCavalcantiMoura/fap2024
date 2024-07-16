// Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.

const leia = require("readline-sync")
let vetorA = new Array(10)
let soma = 0

for(let i=0; i<10; i++){
    vetorA[i] = leia.questionInt("Digite um número inteiro: ")
}

vetorA.forEach(numero => {
 soma += numero * numero
})

console.log(`A soma do quadrado dos elementos é: ${soma}`)