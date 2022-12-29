import CircularLinkedList from './circularLinkedList'

describe('CircularLinkedList', () => {
  describe('when pushing', () => {
    it('should push to an empty list', () => {
      const circularLinkedList = new CircularLinkedList()
      const element = 1

      circularLinkedList.push(element)

      const firstIndex = 0
      expect(circularLinkedList.indexOf(element)).toBe(firstIndex)
    })

    it('should push to a built list', () => {
      // consider a list of unique elements
      const circularLinkedList = new CircularLinkedList([1, 2, 3, 4])
      const element = 5

      circularLinkedList.push(element)

      const lastIndex = 4
      expect(circularLinkedList.indexOf(element)).toBe(lastIndex)
    })
  })

  describe('when inserting', () => {
    let circularLinkedList
    beforeEach(() => {
      const elements = [1, 2, 3, 4, 5, 6]
      circularLinkedList = new CircularLinkedList(elements)
    })

    it.each([0, 3, 5, 6])('should insert at index %i', (index) => {
      const element = 0
      circularLinkedList.insert(element, index)
      expect(circularLinkedList.getElementAt(index).value).toBe(element)
    })

    it('should insert into empty list', () => {
      circularLinkedList = new CircularLinkedList()
      const element = 0
      const firstIndex = 0

      circularLinkedList.insert(element, firstIndex)

      expect(circularLinkedList.indexOf(element)).toBe(firstIndex)
    })

    it('should deal with index that doesn`t exist', () => {
      circularLinkedList = new CircularLinkedList()
      const element = 0
      const index = 42

      expect(() => {
        circularLinkedList.insert(element, index)
      }).toThrow('The position does not exist')
    })
  })

  describe('when removing', () => {
    let circularLinkedList
    beforeEach(() => {
      const elements = [1, 2, 3, 4, 5, 6]
      circularLinkedList = new CircularLinkedList(elements)
    })

    it.each([0, 3, 5])('should remove from index %i', (index) => {
      const element = circularLinkedList.getElementAt(index).value
      circularLinkedList.removeAt(index)
      expect(circularLinkedList.indexOf(element)).toBe(null)
    })

    it('should remove from list with one element', () => {
      circularLinkedList = new CircularLinkedList([0])
      const index = 0
      const element = circularLinkedList.getElementAt(index).value

      circularLinkedList.removeAt(index)

      expect(circularLinkedList.indexOf(element)).toBe(null)

      circularLinkedList.push(element)

      expect(circularLinkedList.indexOf(element)).toBe(index)
    })

    it.each([1, 3, 6])('should remove value %i', (element) => {
      circularLinkedList.remove(element)
      expect(circularLinkedList.indexOf(element)).toBe(null)
    })
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new CircularLinkedList('abc')
    }).toThrow()
  })
})
