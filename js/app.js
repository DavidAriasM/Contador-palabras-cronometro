const radioButtons = document.querySelectorAll('.timeTotal');
const timerSeconds = document.querySelector('.timer');
const btnComenzar = document.querySelector('.btn-comenzar');
const words = document.querySelector('textarea');
let total = document.querySelector('.total');
let totalFrase = [];
let contador;
let timerSeleccionado = '60';
let timerCuentaRegresiva = timerSeleccionado;

timerSeconds.textContent = '60';

radioButtons.forEach((element, i) => {
    radioButtons[i].addEventListener('click', () => {
        radioButtons[i].checked = true;
        timerSeconds.textContent = radioButtons[i].value;
        timerSeleccionado = radioButtons[i].value;
        timerCuentaRegresiva = timerSeleccionado;
    })
})

btnComenzar.addEventListener('click', function() {
    words.value = '';
    btnComenzar.disabled = true;
    words.disabled = false;
    words.focus();
    btnComenzar.classList.add('deshabilitado')

    radioButtons.forEach((element, i) => {
        radioButtons[i].disabled = true
    })

    let id = setInterval(() => {
        if (timerCuentaRegresiva > 0) {
            timerCuentaRegresiva--
            timerSeconds.textContent = timerCuentaRegresiva
        } else {
            btnComenzar.classList.remove('deshabilitado');
            btnComenzar.disabled = false;
            timerSeconds.textContent = timerSeleccionado;
            timerCuentaRegresiva = timerSeleccionado;
            clearInterval(id);
            words.disabled = true;
            total.style.color = 'green';
            radioButtons.forEach((element, i) => {
                radioButtons[i].disabled = false
            })
        }
    }, 1000)
})

words.addEventListener('input', function() {
    totalFrase = words.value.split(" ");
    for (i = 0; i < totalFrase.length; i++) {
        contador = totalFrase.filter(elemento => elemento !== '');
        total.innerHTML = `Palabras: ${contador.length}`;
    }
})