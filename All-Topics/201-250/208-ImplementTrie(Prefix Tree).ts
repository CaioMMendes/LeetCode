//@ts-nocheck

var Trie = function () {
  this.list = new Set()
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.list.add(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.list.has(word)
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const list = this.list
  for (const val of list) {
    if (val.startsWith(prefix)) {
      return true
    }
  }
  return false
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
