class Set {
  #set

  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid set constructor')
    this.#set = new Map()
    this.#buildList(elements)
  }

  add (element) {
    if (this.has(element)) return false

    this.#set.set(element, element)

    return true
  }

  delete (element) {
    return this.#set.delete(element)
  }

  has (element) {
    return this.#set.has(element)
  }

  clear () {
    return this.#set.clear()
  }

  get size () {
    return this.#set.size
  }

  values () {
    const items = []

    for (const [, value] of this.#set) {
      items.push(value)
    }

    return items
  }

  #buildList (elements) {
    if (elements.length === 0) return undefined

    for (const element of elements) {
      this.#set.set(element, element)
    }
  }

  [Symbol.iterator] () {
    let index = 0
    const data = this.values()
    return {
      next: () => {
        if (index < data.length) {
          return { value: data[index++], done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

export default Set
