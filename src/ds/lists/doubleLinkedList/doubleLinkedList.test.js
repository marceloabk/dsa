import DoubleLinkedList from './doubleLinkedList'

describe('doubleLinkedList', () => {
  describe('when pushing', () => {
    it('should push to an empty list', () => {
      const doubleLinkedList = new DoubleLinkedList()
      const element = 1

      doubleLinkedList.push(element)

      const firstIndex = 0
      expect(doubleLinkedList.indexOf(element)).toBe(firstIndex)
    })

    it('should push to a built list', () => {
      // consider a list of unique elements
      const doubleLinkedList = new DoubleLinkedList([1, 2, 3, 4])
      const element = 5

      doubleLinkedList.push(element)

      const lastIndex = 4
      expect(doubleLinkedList.indexOf(element)).toBe(lastIndex)
    })
  })

  describe('when inserting', () => {
    let doubleLinkedList
    beforeEach(() => {
      const elements = [1, 2, 3, 4, 5, 6]
      doubleLinkedList = new DoubleLinkedList(elements)
    })

    it.each([0, 3, 5, 6])('should insert at index %i', (index) => {
      const element = 0
      doubleLinkedList.insert(element, index)
      expect(doubleLinkedList.indexOf(element)).toBe(index)
    })

    it('should insert into empty list', () => {
      doubleLinkedList = new DoubleLinkedList()
      const element = 0
      const firstIndex = 0

      doubleLinkedList.insert(element, firstIndex)

      expect(doubleLinkedList.indexOf(element)).toBe(firstIndex)
    })

    it("should deal with index that doesn't exist", () => {
      doubleLinkedList = new DoubleLinkedList()
      const element = 0
      const index = 42

      expect(() => {
        doubleLinkedList.insert(element, index)
      }).toThrow('The position does not exist')
    })
  })

  describe('when removing', () => {
    let doubleLinkedList
    beforeEach(() => {
      const elements = [1, 2, 3, 4, 5, 6]
      doubleLinkedList = new DoubleLinkedList(elements)
    })

    it.each([0, 3, 5])('should remove from index %i', (index) => {
      const element = doubleLinkedList.getElementAt(index).value
      doubleLinkedList.removeAt(index)

      expect(doubleLinkedList.indexOf(element)).toBe(-1)
    })

    it('should remove from list with one element', () => {
      doubleLinkedList = new DoubleLinkedList([0])
      const index = 0
      const element = doubleLinkedList.getElementAt(index).value

      doubleLinkedList.removeAt(element)

      expect(doubleLinkedList.indexOf(element)).toBe(-1)

      doubleLinkedList.push(element)

      expect(doubleLinkedList.indexOf(element)).toBe(index)
    })

    it.each([1, 3, 6])('should remove value %i', (element) => {
      doubleLinkedList.remove(element)
      expect(doubleLinkedList.indexOf(element)).toBe(-1)
    })
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new DoubleLinkedList('abc')
    }).toThrow()
  })
})
