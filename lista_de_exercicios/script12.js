// Foram anotadas as idades e alturas de 30 alunos. Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.

const leia = require("readline-sync")
let idades = new Array(30)
let alturas = new Array(30)
let contador = 0

for(let i =0; i<30; i++){
    idades[i] = leia.questionInt(`Digite a idade da ${i+1}ª pessoa: `)
    alturas[i] = leia.questionFloat(`Digite a altura da ${i+1}ª pessoa: `)
}

let mediaAltura = alturas.reduce((acc, altura) => acc + altura, 0)/30
console.log(mediaAltura);

for(let i = 0; i<30; i++){
    if(idades[i] > 13 && alturas[i] < mediaAltura){
        ++contador
    }
}
console.log(`${contador} alunos com mais de 13 anos possuem menos que a média de: ${mediaAltura} de altura`);