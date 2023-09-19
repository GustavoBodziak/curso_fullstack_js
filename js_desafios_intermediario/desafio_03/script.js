let formulario = document.querySelector('#formulario')
let selectEstados = document.querySelector('#estados')
let selectCidades = document.querySelector('#cidades')
let cidadesHtml = ''

const cidades = {

    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],

}

selectEstados.onchange = function () {

    if(selectEstados.value === 'São Paulo') {

       selectCidades.classList.add('visivel')
       cidadesHtml = ''

        for(let contador = 0; contador < cidades.sp.length; contador++) {
            let cidade = cidades.sp[contador]
            cidadesHtml += `<option value="${cidade}">${cidade}</option>`
    }


    } else if (selectEstados.value === 'Rio De Janeiro') {

        selectCidades.classList.add('visivel')
        cidadesHtml = ''

        for (let contador = 0; contador < cidades.rj.length; contador++) {
            let cidade = cidades.rj[contador]
            cidadesHtml += `<option value="${cidade}">${cidade}</option>`
        }
        
    } else if (!selectEstados.value) {

        selectCidades.classList.remove('visivel')
    }

    selectCidades.innerHTML = `
        <option value="">-- Selecione --</option>
        ${cidadesHtml}
    `

}

formulario.onsubmit = function (evento) {

    evento.preventDefault()
    let temErro = false
    
    if(!selectEstados.value) {

        temErro = true

        selectEstados.classList.add('selectErro')

        let span = selectEstados.nextElementSibling
        span.classList.add('erro')
        span.innerText = 'Selecione um estado!'


    } else {

        selectEstados.classList.remove('selectErro')

        let span = selectEstados.nextElementSibling
        span.innerText = ''

    }

    if(!selectCidades.value && selectCidades.className === 'visivel')  {

        temErro = true

        selectCidades.classList.add('selectErro')

        let span = selectCidades.nextElementSibling
        span.classList.add('erro')
        span.innerText = 'Selecione uma cidade!'

    } else {

        selectCidades.classList.remove('selectErro')

        let span = selectCidades.nextElementSibling
        span.innerText = ''

    }

    if(!temErro) {

        formulario.submit()

    }

}