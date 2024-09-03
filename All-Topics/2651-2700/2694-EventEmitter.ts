class EventEmitter {
  subscriber: any
  id: number
  constructor() {
    this.subscriber = {}
    this.id = 0
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName: string, callback: (any: any) => any) {
    this.id++
    const teste = this.id
    if (this.subscriber[eventName]) {
      this.subscriber[eventName].push([this.id, callback])
    } else {
      this.subscriber[eventName] = [[this.id, callback]]
    }
    return {
      unsubscribe: () => {
        this.subscriber[eventName] = this.subscriber[eventName].filter(
          (element: any[]) => element[0] !== teste
        )
      },
    }
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName: string, args: any[] = []) {
    if (Object.keys(this.subscriber).length === 0) {
      return []
    }

    return (
      this.subscriber[eventName]?.map((callback: any) =>
        callback[1](...args)
      ) ?? []
    )
  }
}

const emitter = new EventEmitter()

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99
}
const sub = emitter.subscribe("onClick", onClickCallback)

emitter.emit("onClick") // [99]
sub.unsubscribe() // undefined
emitter.emit("onClick") // []
