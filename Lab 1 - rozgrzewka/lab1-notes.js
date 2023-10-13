// notatnik z zajęć
const liczba1 = document.querySelector('#liczba1')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

console.dir(liczba1)

btnPrzelicz.addEventListener('click', () => {
    // Math.min(), Math.max()
    const max100 = Math.min(liczba1.value, 100)
    wynikiPojemnik.innerHTML = +liczba1.value
    isNaN()
    // Number(liczba1.value), 
    // parseInt(liczba1.value), parseFloat(liczba1.value)
    wynikiPojemnik.innerHTML = `${zmienna} sdfsfs` liczba1.value
    console.log(liczba1.value)
})
