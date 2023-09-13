/*Modifique o exercício anterior para exibir um alerta escrito "Preencha os campos corretamente!" caso o usuário não preencha o nome ou idade. 

A página não deve exibir a mensagem de saudação neste caso. */

function verificandoIdade () {

    let maiorOuMenor = ''
    let mensagemPersonalizada = ''

    let nome = prompt('Digite seu nome:')
    let idade = prompt('Digite sua idade:')

    if (nome === '' || idade === '') {
        alert('Preencha os campos corretamente!')
        return
    }

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