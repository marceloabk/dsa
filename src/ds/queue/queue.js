class Queue {
  #queue
  #start
  #end

  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid queue constructor')

    this.#queue = {}
    this.#start = 0
    this.#end = elements.length
    this.#buildQueue(this.#queue, elements)
  }

  enqueue (element) {
    this.#queue[this.#end++] = element
  }

  dequeue () {
    if (this.isEmpty) return undefined

    const element = this.peek()
    delete this.#queue[this.#start++]

    return element
  }

  peek () {
    return this.#queue[this.#start]
  }

  clear () {
    this.#queue = {}
    this.#start = 0
    this.#end = 0
  }

  get isEmpty () {
    return this.#end - this.#start === 0
  }

  get length () {
    return this.#end - this.#start
  }

  #buildQueue (queue, elements) {
    for (let i = 0; i < elements.length; i++) {
      queue[i] = elements[i]
    }
  }

  toString () {
    return Object.values(this.#queue).join()
  }
}

export default Queue
