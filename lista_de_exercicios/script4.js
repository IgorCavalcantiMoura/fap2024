// Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

const leia = require("readline-sync")

let alfabetoConsoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "w", "z"]
let consoantes = []
let caracter

for(let i = 0; i<10; i++){
    caracter = leia.question("Digite um caracter: ")
    if(alfabetoConsoantes.includes(caracter)){
        consoantes.push(caracter)
    }
}

console.log(`Foram lidas ${consoantes.length} consoantes`);
console.log(`As consoantes lidas foram: ${consoantes}`);

