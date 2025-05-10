var TimeLimitedCache = function (this: {
  keys: { [key: number]: number }
  timeouts: { [key: number]: any }
}) {
  this.keys = {}
  this.timeouts = {}
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (
  key: number,
  value: number,
  duration: number
) {
  if (this.keys[key]) {
    this.keys[key] = value
    clearTimeout(this.timeouts[key])
    const timeout = setTimeout(() => {
      delete this.keys[key]
    }, duration)
    this.timeouts[key] = timeout
    return true
  }
  this.keys[key] = value
  const timeout = setTimeout(() => {
    delete this.keys[key]
  }, duration)
  this.timeouts[key] = timeout
  this.keys[key] = value
  return false
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key: number) {
  if (this.keys[key]) {
    return this.keys[key]
  }
  return -1
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.keys).length
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
