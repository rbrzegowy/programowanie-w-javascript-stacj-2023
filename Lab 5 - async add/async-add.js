const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

await measurePerformance('[add 1] for z await', () => addData1(data), data)
await measurePerformance('[add 2] reduce z sum jako Promise', () => addData2(data), data)
await measurePerformance('[add 3] parallel ops', () => addData3(data), data)

// for z await
async function addData1(data) {
  let sum = 0
  for (let item of data) {
    sum = await asyncAdd(sum, item, '[add 1] for z await')
  }
  return sum
}
// reduce z sum jako Promise
async function addData2(data) {
  console.log('reduce start')
  const resultPromise = data.reduce(async (sumPromise, item) => {
    const sumValue = await sumPromise
    return asyncAdd(sumValue, item, '[add 2] reduce z sum jako Promise')
  }, 0)
  console.log('reduce end')
  return resultPromise
}
// równoległe operacje
async function addData3(values) {
  let data = [...values]

  while (data.length > 1) {
    let asyncTempSums = []
    while (data.length > 0) {
      if (data.length === 1) {
        asyncTempSums.push(Promise.resolve(data.pop()))
      } else {
        const a = data.pop()
        const b = data.pop()
        asyncTempSums.push(asyncAdd(a, b, '[add 3] parallel ops'))
      }
    }
    data = await Promise.all(asyncTempSums)
  }
  return data.pop()
}
async function measurePerformance(name, cb) {
  console.warn(`Start: ${name}`);
  performance.mark('mf-start')
  const result = await cb()
  performance.mark('mf-end')
  const runTime = performance.measure('Czas wykonania kodu', 'mf-start', 'mf-end')
  console.warn(`[${name}] Wynik : ${result}`)
  console.warn(`[${name}] Czas wykonywania: ${runTime.duration.toFixed(2)}ms`)
}
async function asyncAdd(a, b, name = 'async add op') {
  console.count(`[${name} count]`)
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('err', { a, b })
    return Promise.reject('Argumenty muszą mieć typ number!')
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 10)
  })
}
