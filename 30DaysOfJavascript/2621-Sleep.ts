const millis = 100

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis: number) {
  function delay(millis: number) {
    return new Promise((resolve) => setTimeout(resolve, millis))
  }

  const t = Date.now()
  await delay(millis)
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

console.log(sleep(millis))
