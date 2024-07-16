//Em uma competição de salto em distância cada atleta tem direito a cinco saltos. O resultado do atleta será determinado pela média dos cinco valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe o nome, os saltos e a média dos saltos. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
//Atleta: Rodrigo Curvêllo

// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m

// Resultado final:
// Atleta: Rodrigo Curvêllo
// Saltos: 6.5 - 6.1 - 6.2 - 5.4 - 5.3
// Média dos saltos: 5.9 m

const leia = require("readline-sync");
let nome;

while (true) {
 nome = leia.question("Digite o nome do atleta: ");
 if(nome === "") break
 let primeiroSalto = leia.questionFloat("Digite o valor do primeiro salto: ");
 let segundoSalto = leia.questionFloat("Digite o valor do segundo salto: ");
 let terceiroSalto = leia.questionFloat("Digite o valor do terceiro salto: ");
 let quartoSalto = leia.questionFloat("Digite o valor do quarto salto: ");
 let quintoSalto = leia.questionFloat("Digite o valor do quinto salto: ");

 console.log(`Atleta: ${nome}`);
 console.log("               ");
 console.log(`Primeiro Salto: ${primeiroSalto}`);
 console.log(`Segundo Salto: ${segundoSalto}`);
 console.log(`Terceiro Salto: ${terceiroSalto}`);
 console.log(`Quarto Salto: ${quartoSalto}`);
 console.log(`Quinto Salto: ${quintoSalto}`);
 console.log("               ");
 console.log("Resultado final: ");
 console.log(`Atleta: ${nome}`);
 console.log(`Saltos: ${primeiroSalto} - ${segundoSalto} - ${terceiroSalto} - ${quartoSalto} - ${quintoSalto}`);
 let media = (primeiroSalto + segundoSalto + terceiroSalto + quartoSalto + quintoSalto)/5
 console.log(`Media dos saltos: ${media.toFixed(1)}`);
}
