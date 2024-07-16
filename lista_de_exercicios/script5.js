// Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

const leia = require("readline-sync")
 let numeros = new Array(20)
 let par = []
 let impar = []

 for(let i = 0; i<20; i++){
    numeros[i] = leia.questionInt(`Digite o ${i+1}º numero: `)
 }

 numeros.map((numero)=>{
    if(numero%2 ==0){
        par.push(numero)
    } else {
        impar.push(numero)
    }
 })

 console.table(numeros)
 console.table(par)
 console.table(impar);