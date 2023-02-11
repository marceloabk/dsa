import Graph from './graph'

describe('Graph', () => {
  let graph
  beforeEach(() => {
    graph = new Graph([1, 2, 3, 4])
  })

  it('should insert add to graph', () => {
    const oldSize = graph.size
    graph.add(5)
    const newSize = graph.size

    expect(newSize).toBe(oldSize + 1)
  })

  it('should not insert an element that already exists', () => {
    const oldSize = graph.size
    graph.add(4)
    const newSize = graph.size

    expect(newSize).toBe(oldSize)
  })

  it('should delete from graph', () => {
    const oldSize = graph.size
    graph.delete(4)
    const newSize = graph.size

    expect(newSize).toBe(oldSize - 1)
  })

  it('should clear graph', () => {
    graph.clear()
    const newSize = graph.size

    expect(newSize).toBe(0)
  })

  it('should return error if an invalid constructor is used', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Graph('abc')
    }).toThrow()
  })

  it('should union two graphs', () => {
    const otherGraph = new Graph([3, 4, 5, 6])
    const unionGraph = graph.union(otherGraph)

    expect(unionGraph.values()).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('should get the intersection of two graphs', () => {
    const otherGraph = new Graph([3, 4, 5, 6])
    const unionGraph = graph.intersection(otherGraph)

    expect(unionGraph.values()).toStrictEqual([3, 4])
  })

  it('should get the difference of two graphs', () => {
    const otherGraph = new Graph([3, 4, 5, 6])
    const unionGraph = graph.difference(otherGraph)

    expect(unionGraph.values()).toStrictEqual([1, 2])
  })

  it('should check if a graph is subgraph of another graph', () => {
    const graph1 = new Graph([1, 2, 3])
    const graph2 = new Graph([1, 2, 3, 4, 5])

    expect(graph1.subgraph(graph2)).toBeTruthy()
    expect(graph2.subgraph(graph1)).toBeFalsy()
  })
})
