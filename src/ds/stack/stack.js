class Stack {
  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid stack constructor')

    this.stack = {}
    this.length = elements.length
    this.buildStack(this.stack, elements)
  }

  push (element) {
    this.stack[this.length++] = element
  }

  pop () {
    if (this.isEmpty()) return

    const element = this.peek()
    this.stack[this.length--] = undefined

    return element
  }

  peek () {
    return this.stack[this.length - 1]
  }

  isEmpty () {
    return this.length === 0
  }

  clear () {
    this.stack = {}
    this.length = 0
  }

  size () {
    return this.length
  }

  buildStack (stack, elements) {
    for (let i = 0; i < elements.length; i++) {
      stack[i] = elements[i]
    }
  }
}

export default Stack
