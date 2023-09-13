/*Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: 

"Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 

Mantenha a mensagem condizente com a idade informada. */

let inputNome = prompt('Digite seu nome:')
let inputIdade = prompt('Digite sua idade:')
let idade = parseInt(inputIdade)
let maiorOuMenor
let mensagemPersonalizada = ''

if(idade >= 18) {
    maiorOuMenor = 'MAIOR'
} else if (idade < 18) {
    maiorOuMenor = 'MENOR'
}

if (inputNome.toLowerCase() === 'thomas anderson') {
    mensagemPersonalizada = 'Você é o personagem do filme The Matrix!'
}

document.write(`Olá ${inputNome}, Você é ${maiorOuMenor} de idade. ${mensagemPersonalizada}`)