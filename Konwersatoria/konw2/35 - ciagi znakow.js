// ------------------------
// Praca z ciągami znaków
// ------------------------

const imie = 'chatGPT'
const zainteresowania = 'Wszystko. Śpiewa, tańczy, wiersze pisze, w js-ie koduje.'

// Pobranie długości
const imieLength = imie.length

// Pobranie dowolnego znaku
const trzeciaLiteraImienia = imie[2]
// lub
// imie.at(2)
// imie.at(-4)

// Wyszukiwanie ciągu znaków
const czySpiewa = zainteresowania.includes('śpiewa')
const czyTanczy = zainteresowania.includes('tańczy')

// Zamiana ciągu znaków
zainteresowania.replace('tańczy', 'śpiewa')

// Zamiana wszystkich wystąpień podanego ciągu znaków
zainteresowania.replaceAll('.', '!')

// Czy zaczyna się od 
const czyJestToChatGPT = imie.startsWith('chat')
// analogicznie
// imie.endsWith

// Pobranie wycinka (od 4 do 7 znaku)
const gpt = imie.slice(4, 7) // slice dopuszcza ujemne indeksy startu i końca ciągu znaków
// lub 
// imie.substring(4, 7)
// różnice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr


// Zamiana stringa na tablicę
const zdaniaZZainteresowan = zainteresowania.split('.')
// odwrotnie
// arr.join('.')

// Zamiana wielkości znaków
imie.toLowerCase()
imie.toUpperCase()
zainteresowania.toLocaleLowerCase()
zainteresowania.toLocaleUpperCase()

// Obcinanie spacji na początku/końcu ciągu znaków
imie.trimStart()
imie.trimEnd()
imie.trim()

// Template strings
const personName = 'Ania'// "Ania", 
const personLastname = 'Kordas'

const fullName = 'Nazywam się ' + personName + ' ' + personLastname
const fullName3 = 'Nazywam się'.concat(' ', personName, ' ', personLastname)
const fullName2 = `Nazywam się ${personName} ${personLastname}`
// const oneLiner = 'Linia pierwsza
// linia druga'
const twoLiner = `Linia pierwsza
linia druga`

// wyrażenia regularne
const wiek = 'Mam 6 lat, 120 dni, 84 godziny'
const wiekRegex = /\d{1,2}/; // lub new Regexp('.\d{1,2}')

const parsowanyWiek = wiek.match(wiekRegex)
console.log(parsowanyWiek)

// wyszukiwanie wielu wystąpień: .matchAll()
// testowanie: .test() (zwraca true/false) lub .search() (index lub -1 jako wynik testu)
// zamiana: .replace(), .replaceAll()
// podział: .split()
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions