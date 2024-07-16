// Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

const leia = require('readline-sync')
let numeros = new Array(5)

for(let i = 0; i<5; i++){
    numeros[i] = leia.questionInt("Digite um número: ")
}

let soma = numeros.reduce((acc, numero) => acc + numero, 0)
let multiplicacao = numeros.reduce((acc, numero) => acc * numero, 1)

console.table(numeros)
console.table(soma)
console.table(multiplicacao)
