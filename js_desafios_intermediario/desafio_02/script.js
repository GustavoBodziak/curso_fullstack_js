let contador = document.querySelector('.contador')
let btnAumentar = document.querySelector('.btnAumentar')
let btnDiminuir = document.querySelector('.btnDiminuir')
let numero = 0
let intervaloAumentar
let intervaloDiminuir

btnAumentar.addEventListener('click', function(){

    btnAumentar.classList.add('verde')
    btnDiminuir.classList.remove('vermelho')

    clearInterval(intervaloDiminuir)
   
    intervaloAumentar = setInterval( function(){
        numero++
        contador.innerText = numero
    }, 100)

})

btnDiminuir.addEventListener('click',function() {

    btnDiminuir.classList.add('vermelho')
    btnAumentar.classList.remove('verde')

    clearInterval(intervaloAumentar)
    
    intervaloDiminuir = setInterval(function(){
        numero--
        contador.innerText = numero
    }, 100)

})