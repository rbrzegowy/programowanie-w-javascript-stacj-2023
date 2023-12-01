## Reactive programming, decoupling
Ćwiczenie nie wchodzi w skład projektów zaliczeniowych.

### Coupling  
Coupling to (biorąc rzecz baardzo powierzchownie) "sztywne" połączenie kilku miejsc w kodzie. Np.:
function A() {
  let secret = Math.random()
  B(secret)
}

Nie lubimy couplingu jeśli nie jest konieczny - utrudnia utrzymanie i reużywanie kodu, łamie podstawowe zasady programowania i robi inne straszne rzeczy. Unikaj couplingu.

### Todo 1
Usuń coupling pomiędzy funkcjami interval() a saveCToSessionStorage() z przykładu w index.js zachowując działanie kodu (timer co 2s jest dalej przekazywany do funkcji saveCToSessionStorage)

### Todo 2
Usuń Logger z funkcji saveCToSessionStorage() (ale oczywiście dalej chcemy zachować logowanie działania)

### Todo 3
Jeśli jeszcze tego nie zrobiłaś/zrobiłeś - zaprojektuj third-party bibliotekę która będzie pośredniczyć w komunikacji i wymianie danych między interval, saveCToSessionStorage i discoverPowerBallNumber. Czy przygotowana biblioteka może w przyszłości pośredniczyć w wymianie danych pomiędzy kolejnymi porcjami kodu czy potrzebuje zmiany?

### Todo 4
Spytaj prowadzącego, niespodzianka;)

### Przydatne
> Wzorzec Observer
