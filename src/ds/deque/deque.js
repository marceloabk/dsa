class Deque {
  #deque
  #start
  #end

  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid deque constructor')

    this.#deque = {}
    this.#start = 0
    this.#end = elements.length
    this.#buildDeque(this.#deque, elements)
  }

  addFront (element) {
    this.#deque[--this.#start] = element
  }

  addBack (element) {
    this.#deque[this.#end++] = element
  }

  removeFront () {
    if (this.isEmpty) return undefined

    const element = this.peekFront()
    delete this.#deque[this.#start++]

    return element
  }

  removeBack () {
    if (this.isEmpty) return undefined

    const element = this.peekBack()
    delete this.#deque[--this.#end]

    return element
  }

  peekFront () {
    return this.#deque[this.#start]
  }

  peekBack () {
    return this.#deque[this.#end - 1]
  }

  clear () {
    this.#deque = {}
    this.#start = 0
    this.#end = 0
  }

  get isEmpty () {
    return this.#end - this.#start === 0
  }

  get length () {
    return this.#end - this.#start
  }

  #buildDeque (deque, elements) {
    for (let i = 0; i < elements.length; i++) {
      deque[i] = elements[i]
    }
  }

  toString () {
    let string = ''
    for (let i = this.#start; i < this.#end; i++) {
      string += `${this.#deque[i]},`
    }

    return string.slice(0, -1)
  }
}

export default Deque
