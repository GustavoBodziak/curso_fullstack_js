/* Modifique o exercício anterior para pedir os dados do usuário somente depois dele clicar em um botão escrito "Entrar". 

Faça a mensagem de saudação ser exibida em um H1, e a mensagem personalizada em um H2. */

function verificandoIdade () {

    let maiorOuMenor = ''
    let mensagemPersonalizada = ''
    
    let nome = prompt('Digite seu nome:')
    let idade = prompt('Digite sua idade:')

    if (idade >= 18) {
        maiorOuMenor = 'MAIOR'
    } else if (idade < 18) {
        maiorOuMenor = 'MENOR'
    }

    if (nome.toLowerCase() === 'thomas anderson') {
        mensagemPersonalizada = 'Você é o personagem do filme The Matrix!'
    }

    document.write(`<h1>Olá ${nome}, você é ${maiorOuMenor} de idade.</h1>`)

    document.write(`<h2>${mensagemPersonalizada}</h2>`)
}