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
    return [...this]
  }

  #buildList (elements) {
    if (elements.length === 0) return undefined

    for (const element of elements) {
      this.#set.set(element, element)
    }
  }

  union (otherSet) {
    if (!(otherSet instanceof Set)) throw Error('Invalid parameter type')
    return new Set([...this, ...otherSet])
  }

  intersection (otherSet) {
    if (!(otherSet instanceof Set)) throw Error('Invalid parameter type')

    // finding the smallest number of elements reduces the total number of comparisons
    const smallerSet = otherSet.size < this.size ? otherSet : this
    const biggerSet = otherSet.size < this.size ? this : otherSet

    const newSet = new Set()
    for (const element of smallerSet) {
      if (biggerSet.has(element)) newSet.add(element)
    }

    return newSet
  }

  difference (otherSet) {
    if (!(otherSet instanceof Set)) throw Error('Invalid parameter type')

    const newSet = new Set(this.values())
    if (otherSet.size < newSet.size) {
      for (const element of otherSet) {
        if (newSet.has(element)) newSet.delete(element)
      }
    } else {
      for (const element of newSet) {
        if (otherSet.has(element)) newSet.delete(element)
      }
    }

    return newSet
  }

  subset (otherSet) {
    if (this.size > otherSet.size) return false

    for (const element of this) {
      if (!otherSet.has(element)) return false
    }

    return true
  }

  [Symbol.iterator] () {
    const data = this.#set.values()
    return {
      next: () => {
        const { value, done } = data.next()
        if (!done) {
          return { value, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

export default Set
