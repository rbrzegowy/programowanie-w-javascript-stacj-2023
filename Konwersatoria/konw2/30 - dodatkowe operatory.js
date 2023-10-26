// ---------------------------------
// inkrementacja/dekrementacja
// --------------------------------
let licznik = 0
console.log(licznik++)
console.log(++licznik)
--licznik
licznik--



// -------------------
// Optional chaining
// -------------------
const foo = {
  bar: {
    baz: () => { }
  }
}

// problem: 
foo.bar = {}
const foobarbaz = foo.bar.baz()

if (foo && foo.bar && foo.bar.baz) {
  const foobarbaz = foo.bar.baz()
}
// lub const x = foo && foo.bar && foo.bar.baz()

// optional chaining
const x = foo?.bar?.baz?.();
// ? nie robi 'falsy' values w przeciwieństwie do && w if, 


// --------------------------
// Nullish coalescing
// --------------------------
// problem: co będzie jeśli sprawdzana wartość = ''? Albo 0. Albo [], {} itd?
// const cartItems = null
const cartItems = ['item1', 'item2']
const y = (cartItems !== null && cartItems !== undefined) ? cartItems : []
const z = cartItems || []

// rozw
const z2 = cartItems ?? []

let a = 0
let defA = 5
let b = a ?? defA

// ---------------------------
// Operatory logiczne and i or
// ---------------------------
function someFunctionHardToEvaluate() {
  console.log('loong await')
  return Math.random() > 0.5
}

// ile razy wykona się somenFunctionHardToEvaluate?
const warunek1 = true
const warunek2 = false
const wynik1 = warunek1 && warunek2 && someFunctionHardToEvaluate()
const wynik2 = warunek1 || warunek2 || someFunctionHardToEvaluate()
