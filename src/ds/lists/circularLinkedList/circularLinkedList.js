import Node from './node.js'

class CircularLinkedList {
  #head
  #tail
  #length
  constructor (elements = []) {
    if (!Array.isArray(elements)) throw Error('Invalid queue constructor')

    this.#head = null
    this.#tail = null
    this.#length = elements.length
    this.#buildList(elements)
  }

  push (element) {
    const node = new Node(element)
    if (this.#head === null) {
      this.#head = node
      this.#tail = node
      node.next = node
    } else {
      this.#tail.next = node
      this.#tail = node
      node.next = this.#head
    }

    this.#length++
  }

  insert (element, position) {
    const node = new Node(element)
    if (position === 0) {
      node.next = this.#head
      this.#head = node
      this.#tail = node
      this.#tail.next = this.#head
    } else if (position === this.#length + 1) {
      return this.push(element)
    } else {
      const previous = this.getElementAt(position - 1)
      if (previous === undefined) throw Error('The position does not exist')

      node.next = previous.next
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
    if (this.isEmpty) return null

    if (element === this.#head.value) {
      this.#head = this.#head.next
      this.#tail.next = this.#head
    } else if (element === this.#tail.value) {
      const previous = this.getElementAt(this.#length - 1)
      previous.next = this.#head
      this.#tail = previous
    } else {
      let prevNode = this.#head
      let currNode = this.#head.next
      while (currNode?.value !== element) {
        prevNode = currNode
        currNode = currNode.next
      }

      if (!currNode) return null

      prevNode.next = currNode.next
      currNode = null
    }

    this.#length--
  }

  indexOf (element) {
    let currentNode = this.#head
    for (let i = 0; i < this.#length; i++) {
      if (currentNode.value === element) return i
      currentNode = currentNode.next
    }

    return null
  }

  removeAt (position) {
    if (this.#length === 1) {
      this.#head = null
      this.#tail = null
    } else if (position === 0) {
      this.#head = this.#head.next
      this.#tail.next = this.#head
    } else if (position === this.#length) {
      const prev = this.getElementAt(this.#length - 1)
      prev.next = this.#head
      this.#tail = prev
    } else {
      let prevNode = this.#head
      let currNode = this.#head

      for (let i = 0; i < position; i++) {
        prevNode = currNode
        currNode = currNode.next
      }
      prevNode.next = currNode.next
      currNode = null
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
    let currNode = this.#head
    for (let i = 1; i < elements.length; i++) {
      currNode.next = new Node(elements[i])
      currNode = currNode.next
    }

    this.#tail = currNode
  }

  toString () {
    let string = ''
    let current = this.#head

    for (let i = 0; i < this.#length; i++) {
      string += `${current.value},`
      current = current.next
    }

    return string.slice(0, -1)
  }
}

export default CircularLinkedList
