// Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

const leia = require('readline-sync');
let lista = new Array(5)

for(let i = 0; i<5; i++){
    lista[i] = leia.questionInt("\nDigite um valor do tipo Inteiro: ", {limitMessage: 'Digite um numero inteiro'});
}
for(let i = 0; i<5; i++){
    console.log(lista[i])
}

//USANDO MAP

// const leia = require('readline-sync');
// let lista = new Array(5)

// for(let i = 0; i<5; i++){
//     lista[i] = leia.questionInt("\nDigite um valor do tipo Inteiro: ", {limitMessage: 'Digite um numero inteiro'});
// }

// lista.map((item)=>{
//     console.log(item);
// })