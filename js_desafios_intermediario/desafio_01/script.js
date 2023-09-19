let contador = document.querySelector('.contador')
let btnAumentar = document.querySelector('.btnAumentar')
let btnDiminuir = document.querySelector('.btnDiminuir')
let numero = 0

btnAumentar.addEventListener('click', function(){
    numero++
    contador.innerText = numero
})

btnDiminuir.addEventListener('click',function() {
    numero--
    contador.innerText = numero
})