// ------------------------
// Konwersje
// -----------------------

const dziesiec = 10
const dziesiecSlownie = '10.60'
const prawda = true
const obj = { a: 1, b: 2 }

// string -> number
const dycha = +dziesiecSlownie
const dycha2 = parseInt(dziesiecSlownie)
const dycha3 = parseFloat(dziesiecSlownie)
const dycha4 = Number(dziesiecSlownie)

// number -> string
const dyszka = '' + dziesiec
const dyszka2 = `${dziesiec}`
const dyszka3 = String(dziesiec)
const stringObj = obj.toString()
const stirngObj2 = '' + obj


// cokolwiek do Boolean
const prawdziwaDyszka = !!dziesiec
const prawdziwaDyszka2 = Boolean(dziesiecSlownie)
// uwaga na wartości falsy/truthy
// czy wiesz co wyjdzie z konwersji 0, '', [], {} 

// string do tablicy
const tab = dziesiecSlownie.split('')

// tablica do string
const tabString = tab.join(' i ')