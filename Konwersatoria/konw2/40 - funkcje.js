// ---------------------
// Funkcje
// ---------------------

// Wprowadzenie:
// Funkcje są OBIEKTAMI. yep.
// Funkcja konstruktora posiada właściwość "this" (jeśli wywołamy funkcję jako konstruktor - z operatorem "new")
// ..ale też this można używać w każdej funkcji:)

// 1. klasyka - tzw. function statement
// funkcji można używać w kodzie przed jej deklaracją.
const c = add(3, 5)
function add(a, b) {
  return a + b
}

// funkcję możemy przekazywać jako argument innej funkcji/metody
const ages = [10, 20, 30]
const bigElements = ages.every(AgeBiggerThan15)
function AgeBiggerThan15(age) {
  return age > 15
}
// bardziej życiowo: const bigElements = ages.every( age => age>15 )


// Argumenty funkcji
// easy one
function sum(a, b) { return a + b }

// domyślne wartości
function addTax(amount, tax = 0.12) { return amount * (1 + tax) }
const grossValue = addTax(100)

// 'rest' operator - funkcje z dowolną liczbą argumentów
function sumEmAll(a, b, ...rest) {
  let ret = a + b
  if (Array.isArray(rest)) {
    ret += rest.reduce((acc, val) => acc += val, 0)
  }
  return ret
}
sumEmAll(1, 2, 3, 4, 5, 6, 7)
sumEmAll()

// obiekt arguments - old way
function sum3() {
  // tablica arguments przechowuje wszystkie argumenty funkcji
  console.log('[sum3] arguments:', arguments)
}
const asd = sum3()
sum3(1, 2, 3)
sum3(1, 2, 3, 4, 5, 6)
sum3()


// ---------------------
// Function expression
// ---------------------
// Funkcje powstałe poprzez przypisanie do zmiennej - tzw. function expression z użyciem literału function()
// uwaga na hoisting!
const substr = function (a, b) {
  return a - b
}

// Function expression na wypasie - nazwana funkcja anonimowa
// wygodne do debugowania funkcji i rekurencji.
// Nazwa funkcji widoczna jest jedynie w tej funkcji!
const mult = function multiply(a, b) {
  return a * b
}
mult(1, 5)


// rekurencja
// ćwiczenie 
const counter = function foo(i) {
  if (i < 0) {
    return i
  }
  console.log(`licznik 1: ${i}`)
  foo(i - 1);
  console.log(`licznik 2: ${i}`)
  return i
}
counter(3);


// ---------------------------------------
// Wyrażenia strzałkowe (arrow functions)
// ---------------------------------------
// (inne nazwy - lambda, fat arrow)

// zwykłą deklarację funkcji:
const sum2 = (a, b) => a + b
// można zamienić na strzałkę:
const sum2arrow = (a, b) => {
  return a + b
}
const trimString = str => str.trim()

function trimString(str) {
  return str.trim()
}
[' 1 ', '2  ', ' 444 '].map(trimString)

// lub krócej: 
// sum2arrow = (a, b) => a + b

const multBy2 = x => x * 2
function multBy22(x) {
  return x * 2
}
const arr = [1, 2, 3, 4]
const arrMultBy2 = arr.map(multBy2)
