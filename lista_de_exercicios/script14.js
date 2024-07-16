// Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//"Telefonou para a vítima?"
//"Esteve no local do crime?"
//"Mora perto da vítima?"
//"Devia para a vítima?"
//"Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

const leia = require("readline-sync")

let respostaSim = []

function interrogatorio(resposta){
    if(resposta == "sim"){
        respostaSim.push("sim")
    }
}

let telefoneVitima = leia.question("Telefonou para a vítima?")
interrogatorio(telefoneVitima)
let localCrime = leia.question("Esteve no local do crime?")
interrogatorio(localCrime)
let moraPerto = leia.question("Mora perto da vítima?")
interrogatorio(moraPerto)
let deviaVitima = leia.question("Devia para a vítima?")
interrogatorio(deviaVitima)
let trabalhouVitima = leia.question("Já trabalhou com a vítima?") 
interrogatorio(trabalhouVitima)

if(respostaSim.length == 2){
    console.log("Você é um suspeito!");
} else if(respostaSim.length == 3 || respostaSim.length == 4){
    console.log("Você é cúmplice");
}else if(respostaSim.length == 5){
    console.log("Você é o assassino!");
}else{
    console.log('Você é inocente!');
}