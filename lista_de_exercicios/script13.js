// Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, calcule a média anual das temperaturas e mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso: 1 – Janeiro, 2 – Fevereiro, . . . ).

const leia = require("readline-sync")

let meses = new Array(12)
let temperaturas = new Array(12)

for(let i = 0; i<12; i++){
    meses[i] = leia.question("Digite o nome do mês: ")
    temperaturas[i] = leia.questionFloat("Digite a temperatura: ")
}

let mediaTemperatura = temperaturas.reduce((acc, temperatura) => acc + temperatura, 0)/12
console.log(`A media anual das temperaturas é: ${mediaTemperatura.toFixed(2)}`);

for(let i = 0; i<12; i++){
    if(temperaturas[i]> mediaTemperatura){
        console.log(`A temperatura de ${meses[i]} é: ${temperaturas[i]}`)
    }
}

