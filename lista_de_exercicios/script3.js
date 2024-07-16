// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

const leia = require("readline-sync")

let notas = new Array(4)

for(let i = 0; i<4; i++){
    notas[i] = leia.questionFloat(`Digite a ${i+1}ª nota: `, {limitMessage: "Digite uma nota válida!"})
}
notas.map((nota, index)=>{
    console.log(`A ${index + 1}ª nota é: ${nota}`)
})

// OU
// console.log(notas);
let soma  = notas.reduce((acc, nota) => acc + nota, 0)
let media = soma / notas.length

console.log(`A média das notas é: ${media.toFixed(2)}`);