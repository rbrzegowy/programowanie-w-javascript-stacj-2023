interval();

function interval() {
  let timer = 1
  setInterval(
    () => {
      // tutaj mamy coupling - interval ma na sztywno zaszyte w sobie kolejne funkcje (..i logger)
      saveCToSessionStorage(timer)
      discoverPowerBallNumber(timer)
      timer++
    }
    , 1000)
}

class Logger {
  static log(data) {
    console.log(data)
  }
}

function saveCToSessionStorage(data) {
  console.log('[reader C]', data)
  const storageData = { data }
  sessionStorage.setItem('C', JSON.stringify(storageData))
  // brudzimy funkcję loggerem - to nie jest jej funkcjonalność!
  Logger.log(`[log from C] ${data}`)
}

function discoverPowerBallNumber(data) {
  const number = Math.floor(Math.random() * data * 100)
  console.log('[powerball number]', number)
}