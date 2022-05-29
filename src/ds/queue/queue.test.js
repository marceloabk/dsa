import Queue from './queue'

describe('Queue', () => {
  let queue

  beforeEach(() => {
    queue = new Queue([1, 2, 3])
  })

  it('should queue an element', () => {
    const lengthBefore = queue.length
    queue.enqueue(4)
    const lengthAfter = queue.length
    expect(lengthAfter).toBe(lengthBefore + 1)
  })

  it('should dequeue an element', () => {
    const lengthBefore = queue.length
    queue.dequeue()
    const lengthAfter = queue.length
    expect(lengthAfter).toBe(lengthBefore - 1)
  })

  it('should get next element from new queue', () => {
    const newQueue = new Queue()
    const element = 4
    newQueue.enqueue(element)

    expect(element).toBe(newQueue.peek())
  })

  it('should remove all elements from the queue', () => {
    queue.clear()
    expect(queue).toHaveLength(0)
  })

  it('should not break when remove an element from empty queue', () => {
    queue.clear()
    queue.dequeue()
    expect(queue).toHaveLength(0)
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Queue('abc')
    }).toThrow()
  })
})
