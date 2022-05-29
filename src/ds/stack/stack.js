class Stack {
  #stack
  #length

  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid stack constructor')

    this.#stack = {}
    this.#length = elements.length
    this.#buildStack(this.#stack, elements)
  }

  push (element) {
    this.#stack[this.#length++] = element
  }

  pop () {
    if (this.isEmpty) return undefined

    const element = this.peek()
    delete this.#stack[this.#length--]

    return element
  }

  peek () {
    return this.#stack[this.#length - 1]
  }

  clear () {
    this.#stack = {}
    this.#length = 0
  }

  get isEmpty () {
    return this.#length === 0
  }

  get length () {
    return this.#length
  }

  #buildStack (stack, elements) {
    for (let i = 0; i < elements.length; i++) {
      stack[i] = elements[i]
    }
  }
}

export default Stack
