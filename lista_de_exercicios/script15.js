// Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:
//Mostre a quantidade de valores que foram lidos;
//Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
//Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
//Calcule e mostre a soma dos valores;
//Calcule e mostre a média dos valores;
//Calcule e mostre a quantidade de valores acima da média calculada;
//Calcule e mostre a quantidade de valores abaixo de sete;
//Encerre o programa com uma mensagem;

const leia = require("readline-sync");
let notas = [];
let nota;
let contador = 0
let contadorSete = 0


do {
  nota = leia.questionFloat("Digite a Nota: ");
  if (nota != -1) {
    notas.push(nota);
  }
} while (nota != -1);
console.log("***********************************************************");
console.log(`Foram lidos ${notas.length} valores`);
console.log("***********************************************************");
console.log(`Os valores lidos foram: ${notas}`);
console.log("***********************************************************");
console.log("Os valores lidos na ordem inversa são: ");
for(let i = notas.length; i>=0; i--){
    console.log(notas[i]);
}
console.log("***********************************************************");
let soma = notas.reduce((acc, nota)=> acc + nota, 0)
console.log(`A soma dos valores é: ${soma}`);

console.log("***********************************************************");
let media = soma/ notas.length
console.log(`A media dos valores é: ${media.toFixed(2)}`);

console.log("***********************************************************");

for(let i = 0; i<notas.length; i++){
    if(notas[i] > media) {
        contador++
    }
}
 console.log(`A quantidade de notas acima da média é: ${contador}`);

 console.log("***********************************************************");
 for(let i = 0; i<notas.length; i++){
    if(notas[i] > 7) {
        contadorSete++
    }
}
 console.log(`A quantidade de notas a baixo de 7 é: ${contadorSete}`);


