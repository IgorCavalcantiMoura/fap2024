// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

const leia = require("readline-sync")

let altura = new Array(5)
let idade = new Array(5)

for(let i = 0; i<5; i++){
    altura[i] = leia.questionFloat("Digite sua altura: ")
    idade[i] = leia.questionFloat("Digite seu idade: ")
}

for(let i = 5; i>0; i--){
   console.log(altura[i])  
   console.log(idade[i])  
    
}