// ------------------------------
// Deklarowanie zmiennych
//-------------------------------
let imie = 'Kasia'
let plec = "kobieta" // apostrofy i cudzysłowy są równoważne

let wiek = 18

// przed dinozaurami
var zmienna = 'wartosc'


// deklarowanie stałych
const API_URL = 'api.url'

const USER_KEYS = {
  privateKey: 'somePrivateKey',
  publicKey: 'somePublicKey',
}

// stałe są niezmienne co do referencji, wartość może się zmieniać!
// nie mogę
// USER_KEYS = {}
// mogę
USER_KEYS.privateKey = 'new private key'

const USERS = []
// użycie przed deklaracją?
// var zadziała, let nie zadziała
console.log(dinozaur)
var dinozaur = 'zedisdeadbaby'

// --------------------
// Typy proste
// --------------------
// dostępne typy proste (tzw. prymitywy)
// number, string, boolean, undefined, symbol, bigint

// przypisywanie dowolnych typów do zmiennej
let x = 'A'
x = 12
x = true
x = undefined
x = null
x = {}
x = []
x = function () { }