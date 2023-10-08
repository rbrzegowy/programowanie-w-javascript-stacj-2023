// ----------------------
// Pętle
// ----------------------

let tab3 = ['jeden', 'dwa', 'trzy', 'koniec', 'cztery', 'pięć']
const ludzie = ['Szczęśniak', 'Budzisz', 'Dymiński', 'Będkowski', 'Jaskółka', 'Barcikowski', 'Zawadzki', 'Szymik', 'Jagoda', 'Durzyński', 'Perliński', 'Żuk', 'Świercz', 'Piekarz', 'Wilamowski', 'Olejarz', 'Mitręga', 'Wenta', 'Gajda', 'Morawski', 'Starzec', 'Walkowiak', 'Jasik', 'Olczyk', 'Bigos', 'Kluk', 'Łubiński', 'Adach', 'Wąchała', 'Strzelecki', 'Jarzynka', 'Kaczmarek', 'Domalewski', 'Chaciński', 'Popiel', 'Tucholski', 'Żuchowski', 'Bach', 'Miazga', 'Osiak', 'Radziejewski', 'Wawer', 'Nitecki', 'Matejek', 'Pasik', 'Maliszewski', 'Wencel', 'Mruk', 'Łęgowski', 'Frej', 'Kotulski', 'Ignatowicz', 'Łempicki', 'Kiszka', 'Jurak', 'Rychlik', 'Bartoszek', 'Statkiewicz', 'Ulatowski', 'Pajda', 'Waliszewski', 'Adamczak', 'Urbaś', 'Drwal', 'Zapart', 'Gumiński', 'Chamera', 'Tomaszewski', 'Walter', 'Ważny', 'Stawowy', 'Bałut', 'Włoch', 'Maciejewski', 'Szczęsny', 'Cuber', 'Dubicki', 'Czaplicki', 'Szczurowski', 'Machnio', 'Świniarski', 'Sierant', 'Duch', 'Danilczuk', 'Trojnar', 'Grzesiak', 'Sidorczuk', 'Brożek', 'Krasuski', 'Walas', 'Kierzek', 'Bartnicki', 'Buliński', 'Kopiński', 'Kuligowski', 'Szczypka', 'Olszański', 'Szendzielorz', 'Kochański', 'Kajda']

tab3.length = 10
tab3
// inny sposób na powiększenie tablicy - odwołanie do indeksu >length
// tab3[100] = 'asd'
// tab3.length


// Pętla for
// iterowanie po tablicach (korzystamy z length)
for (let index = 0; index < tab3.length; index++) {
    console.log(tab3[index])
}

// Przerywanie iteracji
for (let index = 0; index < tab3.length; index++) {
    if (tab3[index] === 'koniec') {
        break
    }
    console.log(tab3[index])
}

// Pomijanie elementów w przetwarzaniu tablicy
for (let index = 0; index < tab3.length; index++) {
    if (index === 2) {
        continue
    }
    console.log(tab3[index])
}

// Pętla for-of (korzysta z length)
for (let el of tab3) {
    console.log(el)			// for korzysta z length - biegnie po 10. elementach tablicy!
}

// Metoda .forEach
// .forEach nie korzysta z length, biegnie po kolejnych elementach tablicy i pomija 'puste' komórki (puste to nieuzupełnione jakąkolwiek wartością przez użytkownika)
console.log(".forEach()")

tab3.forEach(someFn)
// tab4?.forEach(someFn)
// tab5?.forEach(someFn)
function someFn(val, key, wholeArrayRef) {
    console.log(val)
    wholeArrayRef[key] += '_mod'
}
tab3


// Pętla while 
const potegiDwojki = [1, 2, 4, 8, 16, 32, 64, 128, 256]

let wynik = 0
let index = 3
while (index < 3) {
    wynik += potegiDwojki[index]
    index++
}
console.log(wynik)

// Pętla do - while
let wynik2 = 0
let index2 = 3
do {
    wynik2 += potegiDwojki[index2]
    index2++
} while (index2 < 3)

console.log(wynik2)


// Pętla for-of  - po właściwościach obiektu
const albums = {
    'u2': 'one',
    'pearl jam': 'black',
    'nirvana': 'nevermind',
    'queen': 'made in heavaen',
}

for (band in albums) {
    console.log(band);
    console.log(albums[band])
}