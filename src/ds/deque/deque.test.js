import Deque from './deque'

describe('Deque', () => {
  let deque

  beforeEach(() => {
    deque = new Deque([1, 2, 3])
  })

  it('should add element to the front', () => {
    const element = 4
    deque.addFront(element)
    expect(deque.peekFront()).toBe(element)
  })

  it('should add element to the back', () => {
    const element = 4
    deque.addBack(element)
    expect(deque.peekBack()).toBe(element)
  })

  it('should remove element from the front', () => {
    const frontElement = deque.peekFront()
    const lengthBefore = deque.length

    const removed = deque.removeFront()
    const lengthAfter = deque.length

    expect(frontElement).toBe(removed)
    expect(lengthBefore).toBeGreaterThan(lengthAfter)
  })

  it('should remove element from the back', () => {
    const backElement = deque.peekBack()
    const lengthBefore = deque.length

    const removed = deque.removeBack()
    const lengthAfter = deque.length

    expect(backElement).toBe(removed)
    expect(lengthBefore).toBeGreaterThan(lengthAfter)
  })

  it('should remove all elements', () => {
    deque.clear()
    expect(deque).toHaveLength(0)
  })

  it('should not break when remove an element from empty deque', () => {
    deque.clear()
    deque.removeBack()
    expect(deque).toHaveLength(0)
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Deque('abc')
    }).toThrow()
  })
})
