// -----------------
// Warunki
// -----------------

const czyPokazacWynik = false
const wynik = 10

// porównanie co do wartości
if (czyPokazacWynik == true) {
  console.log(wynik)
} else {
  console.log('no nie pokażę!')
}

// if/else if/else
const wiek = 18
const plec = 'k'
if (wiek >= 18 && plec == 'm') {
  console.log('pełnoletni')
} else if (wiek >= 18 && plec == 'k') {
  console.log('pełnoletnia')
} else if (wiek >= 3) {
  console.log('co za kid')
} else {
  console.log('bejbik')
}

// porównanie typów
if (czyPokazacWynik === true) {
  console.log('warunek spełniony co do typu i wartości');
}

// wartości "puste"
let jakasZmienna = ''
// jakasZmienna = null
// jakasZmienna = undefined


// falsy/truthy values
if (jakasZmienna) {
  console.log('empty value')
} else {
  console.log('nie poszło!')
}

// sprawdza jednocześnie null i undefined, uwaga na falsy values!
if (jakasZmienna != undefined) {
  console.log('nie null i nie undefined');
}

// ---------------
// Ternator
// ---------------
const czyMnozycPrzezDwa = true
const a = 5
const wynikMnozenia =
  czyMnozycPrzezDwa === 'tak'
    ? a * 2
    : a

let wynikMnozenia2
if (czyMnozycPrzezDwa === 'tak') {
  wynikMnozenia2 = a * 2
} else {
  wynikMnozenia2 = a
}
console.log(wynikMnozenia2);

// skrót który spotkasz w kodzie
czyPokazacWynik === 'tak' && console.log(wynik)

if (czyPokazacWynik === 'tak') {
  console.log(wynik)
  const y = 2 * 5
  console.log(y)
}

// ---------------------
// Switch
// ---------------------

const nrDniaTygodnia = 1
const nrTygodnia = 15


let dzienTygodnia
switch (nrDniaTygodnia) {
  case 1:
    dzienTygodnia = 'poniedziałek'
    break
  case 2:
    dzienTygodnia = 'wtorek'
    break
  case 3:
    dzienTygodnia = 'środa'
    break
  // itd..
  default:
    dzienTygodnia = ''
}