//Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido. Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios, simulando os lançamentos dos dados.

let resultados = new Array(100)
let contador = new Array(6).fill(0)


function dado(){
    return Math.floor(Math.random()* 6) + 1
}

for(let i = 0; i<100; i++){
let resultado = dado()
resultados[i] = resultado
contador[resultado - 1]++
}

console.log("Resultados dos lançamentos:");
for (let i = 0; i < contador.length; i++) {
    console.log(`Valor ${i + 1}: ${contador[i]} vez(es)`);
}