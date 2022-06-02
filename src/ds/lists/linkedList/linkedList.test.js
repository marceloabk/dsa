import LinkedList from './linkedList'

describe('LinkedList', () => {
  describe('when pushing', () => {
    it('should push to an empty list', () => {
      const linkedList = new LinkedList()
      const element = 1

      linkedList.push(element)

      const firstIndex = 0
      expect(linkedList.indexOf(element)).toBe(firstIndex)
    })

    it('should push to a built list', () => {
      // consider a list of unique elements
      const linkedList = new LinkedList([1, 2, 3, 4])
      const element = 5

      linkedList.push(element)

      const lastIndex = 4
      expect(linkedList.indexOf(element)).toBe(lastIndex)
    })
  })

  describe('when inserting', () => {
    let linkedList
    beforeEach(() => {
      const elements = [1, 2, 3, 4, 5, 6]
      linkedList = new LinkedList(elements)
    })

    it.each([0, 3, 5, 6])('should insert at index %i', (index) => {
      const element = 0
      linkedList.insert(element, index)
      expect(linkedList.indexOf(element)).toBe(index)
    })

    it('should insert into empty list', () => {
      linkedList = new LinkedList()
      const element = 0
      const firstIndex = 0

      linkedList.insert(element, firstIndex)

      expect(linkedList.indexOf(element)).toBe(firstIndex)
    })
  })

  describe('when removing', () => {
    let linkedList
    beforeEach(() => {
      const elements = [1, 2, 3, 4, 5, 6]
      linkedList = new LinkedList(elements)
    })

    it.each([0, 3, 5])('should remove from index %i', (index) => {
      const element = linkedList.getElementAt(index).value
      linkedList.removeAt(index)

      expect(linkedList.indexOf(element)).toBe(-1)
    })

    it('should remove from list with one element', () => {
      linkedList = new LinkedList([0])
      const index = 0
      const element = linkedList.getElementAt(index).value

      linkedList.removeAt(element)

      expect(linkedList.indexOf(element)).toBe(-1)

      linkedList.push(element)

      expect(linkedList.indexOf(element)).toBe(index)
    })

    it.each([1, 3, 6])('should remove value %i', (element) => {
      linkedList.remove(element)
      expect(linkedList.indexOf(element)).toBe(-1)
    })
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new LinkedList('abc')
    }).toThrow()
  })
})
