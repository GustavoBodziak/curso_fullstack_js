/* Crie uma página que vai pedir ao usuário "Digite qual tabuada você quer saber:", o usuário vai digitar um número e a partir desse número você vai exibir a tabuada correspondente. 

Utilize um laço de repetição para montar a tabuada.*/

function tabuada () {

    let inputNumero = prompt('Digite o número da tabuada que você deseja saber:')
    numero = parseInt(inputNumero)

    for(let contador = 0; contador <= 10; contador++) {

        let resultado = numero * contador
        let mensagem = `${numero} x ${contador} = ${resultado}`

        document.write(`<h3>${mensagem}</h3>`)
    }

}