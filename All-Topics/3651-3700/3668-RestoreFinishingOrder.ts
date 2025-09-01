const order = [3, 1, 2, 5, 4],
  friends = [1, 3, 4]

/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order: number[], friends: number[]) {
  const set = new Set(friends)

  return order.filter((val) => set.has(val))
}

console.log(recoverOrder(order, friends))
