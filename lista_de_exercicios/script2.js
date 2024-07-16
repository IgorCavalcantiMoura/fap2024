// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

const leia = require('readline-sync')

let lista = new Array(10)

for(let i = 0; i<10; i++){
    lista[i] = leia.questionInt("\nDigite um número inteiro: ", {limitMessage:"Digite um valor do tipo inteiro"})
}
for(let i = 9; i>=0; i--){
    console.log(lista[i]);
}