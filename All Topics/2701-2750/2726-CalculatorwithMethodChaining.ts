class Calculator {
  value: number

  constructor(value: number) {
    this.value = value
  }

  add(value: number): this {
    this.value += value
    return this
  }

  subtract(value: number): this {
    this.value -= value
    return this
  }

  multiply(value: number): this {
    this.value *= value
    return this
  }

  divide(value: number): this {
    this.value /= value
    return this
  }

  power(value: number): this {
    this.value **= value
    return this
  }

  getResult(): number {
    return this.value
  }
}

const calculator = new Calculator(10)
console.log(
  calculator.add(5).subtract(3).multiply(2).divide(4).power(3).getResult()
)
