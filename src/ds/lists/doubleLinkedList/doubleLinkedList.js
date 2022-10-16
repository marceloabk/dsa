import Node from './node.js'

class DoubleLinkedList {
  #head
  #length
  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid queue constructor')

    this.#head = null
    this.#length = elements.length
    this.#buildList(elements)
  }

  push (element) {
    const node = new Node(element)
    if (this.#head === null) {
      this.#head = node
    } else {
      const current = this.getElementAt(this.#length - 1)
      node.prev = current
      current.next = node
    }

    this.#length++
  }

  insert (element, position) {
    const node = new Node(element)
    if (position === 0) {
      node.next = this.#head
      this.#head = node
    } else {
      const previous = this.getElementAt(position - 1)
      if (previous === undefined) throw Error('The position does not exist')

      node.next = previous.next
      node.prev = previous
      if (this.#length !== position) {
        // dont need to adjust if inserting at last position
        previous.next.prev = node
      }
      previous.next = node
    }

    this.#length++
  }

  getElementAt (index) {
    if (index > this.#length) return undefined

    let currentNode = this.#head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  remove (element) {
    if (this.isEmpty) return undefined

    if (element === this.#head.value) {
      this.#head = this.#head.next
    } else {
      let prevNode = this.#head
      let currentNode = this.#head.next
      while (currentNode?.value !== element) {
        prevNode = currentNode
        currentNode = currentNode.next
      }

      if (!currentNode) return undefined

      prevNode.next = currentNode.next
      currentNode = null
    }

    this.#length--
  }

  indexOf (element) {
    let currentNode = this.#head
    let counter = 0
    while (currentNode && currentNode.value !== element) {
      currentNode = currentNode.next
      counter++
    }

    if (!currentNode) counter = -1

    return counter
  }

  removeAt (position) {
    if (position === 0) {
      this.#head = this.#head.next
    } else {
      let prevNode = this.#head
      let currentNode = this.#head

      for (let i = 0; i < position; i++) {
        prevNode = currentNode
        currentNode = currentNode.next
      }

      prevNode.next = currentNode.next
      currentNode = null
    }

    this.#length--
  }

  get isEmpty () {
    return this.#head === null
  }

  get length () {
    return this.#length
  }

  get head () {
    return this.#head
  }

  #buildList (elements) {
    if (elements.length === 0) return undefined

    this.#head = new Node(elements[0])
    let currentNode = this.#head
    for (let i = 1; i < elements.length; i++) {
      currentNode.next = new Node(elements[i])
      currentNode.next.prev = currentNode
      currentNode = currentNode.next
    }
  }

  toString () {
    let string = ''
    let current = this.#head

    while (current) {
      string += `${current.value},`
      current = current.next
    }

    return string.slice(0, -1)
  }
}

export default DoubleLinkedList
