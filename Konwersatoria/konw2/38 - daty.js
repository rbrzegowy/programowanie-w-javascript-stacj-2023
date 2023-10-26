// ------------------------
// Praca z datami
// ------------------------

// Tworzenie obiektu daty
const teraz = new Date()
const nowyRok = new Date('2023-01-01') // Date.parse()

// Pobieranie aktualnego timestamp-a
const liczbaMsOd1970 = Date.now()

// Formaty przechowywanych dat
// 1. ISO string
const isoTeraz = teraz.toISOString()
// 2. Timestamp
const timestampTeraz = teraz.getTime()

// Pobieranie daty w lokalnym formacie
const dataWlokalnymFormacie = teraz.toLocaleDateString()
const czasWlokalnymFormacie = teraz.toLocaleTimeString()
const dataICzasWlokalnymFormacie = teraz.toLocaleString()

// Pobieranie elementów daty z obiektu
const dzienTygodnia = teraz.getDay()
const godzina = teraz.getHours()
const rok = teraz.getFullYear()
// ...itd - metody .getXXX

// Zmiana daty przechowywanej w obiekcie daty
teraz.setHours(9, 45, 30)
teraz.setMonth(0) // miesiące liczone od zera!
// ...itd - metody .setXXX

// zaawansowana praca z datami: biblioteki zewnętrzne date-fns, moment.js
// * zaaawansowane formatowanie
// * obliczenia na datach
