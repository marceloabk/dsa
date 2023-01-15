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

  it('should union two sets', () => {
    const otherSet = new Set([3, 4, 5, 6])
    const unionSet = set.union(otherSet)

    expect(unionSet.values()).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('should get the intersection of two sets', () => {
    const otherSet = new Set([3, 4, 5, 6])
    const unionSet = set.intersection(otherSet)

    expect(unionSet.values()).toStrictEqual([3, 4])
  })

  it('should get the difference of two sets', () => {
    const otherSet = new Set([3, 4, 5, 6])
    const unionSet = set.difference(otherSet)

    expect(unionSet.values()).toStrictEqual([1, 2])
  })

  it('should check if a set is subset of another set', () => {
    const set1 = new Set([1, 2, 3])
    const set2 = new Set([1, 2, 3, 4, 5])

    expect(set1.subset(set2)).toBeTruthy()
    expect(set2.subset(set1)).toBeFalsy()
  })
})
