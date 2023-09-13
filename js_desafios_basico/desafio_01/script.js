/*  Faça uma página que ao entrar vai pedir o nome do usuário e depois a idade, em seguida mostre na tela uma mensagem de saudação de acordo com a idade do usuário:  

"Olá [nome], você é MAIOR de idade" 

ou 

"Olá [nome], você é MENOR de idade" 

*/


let nome = prompt('Digite seu nome:')
let inputIdade = prompt('Digite sua idade:')
let idade = parseInt(inputIdade)
let maiorOuMenor


/*

if(idade >= 18) {
    document.write(`<h1>Olá ${nome}, você é MAIOR de idade!</h1>`)
} else if (idade < 18) {
    document.write(`<h1>Olá ${nome}, você é MENOR de idade!</h1>`)
}

*/

if (idade >= 18) {
    maiorOuMenor = 'MAIOR'
} else if (idade < 18) {
    maiorOuMenor = 'MENOR'
}

document.write(`<h1>Olá ${nome}, você é ${maiorOuMenor} de idade!</h1>`)