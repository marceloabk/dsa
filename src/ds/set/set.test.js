import Set from './set'

describe('Set', () => {
  let set
  beforeEach(() => {
    set = new Set([1, 2, 3, 4])
  })

  it('should insert add to set', () => {
    const oldSize = set.size
    set.add(5)
    const newSize = set.size

    expect(newSize).toBe(oldSize + 1)
  })

  it('should not insert an element that already exists', () => {
    const oldSize = set.size
    set.add(4)
    const newSize = set.size

    expect(newSize).toBe(oldSize)
  })

  it('should delete from set', () => {
    const oldSize = set.size
    set.delete(4)
    const newSize = set.size

    expect(newSize).toBe(oldSize - 1)
  })

  it('should clear set', () => {
    set.clear()
    const newSize = set.size

    expect(newSize).toBe(0)
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Set('abc')
    }).toThrow()
  })
})
