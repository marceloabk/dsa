import Stack from './stack'

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack([1, 2, 3])
  })

  it('should add an element to the stack', () => {
    const lengthBefore = stack.length
    stack.push(4)
    const lengthAfter = stack.length
    expect(lengthAfter).toBe(lengthBefore + 1)
  })

  it('should remove an element from the stack', () => {
    const lengthBefore = stack.length
    stack.pop()
    const lengthAfter = stack.length
    expect(lengthAfter).toBe(lengthBefore - 1)
  })

  it('should get the last added element', () => {
    const element = 4
    stack.push(element)

    expect(element).toBe(stack.peek())
  })

  it('should get the last added element from new stack', () => {
    const newStack = new Stack()
    const element = 4
    newStack.push(element)

    expect(element).toBe(newStack.peek())
  })

  it('should remove all elements from the stack', () => {
    stack.clear()
    expect(stack).toHaveLength(0)
  })

  it('should not break when remove an element from empty stack', () => {
    stack.clear()
    stack.pop()
    expect(stack).toHaveLength(0)
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Stack('abc')
    }).toThrow()
  })
})
