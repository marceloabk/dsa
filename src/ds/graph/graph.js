class Graph {
  #graph
  #isDirected

  constructor (isDirected = false) {
    this.#graph = {}
    this.#isDirected = isDirected
  }

  addVertex (vertex) {
    if (vertex in this.#graph) return false

    this.#graph[vertex] = []

    return true
  }

  addEdge (vertex1, vertex2, weight = 1) {
    if (!(vertex1 in this.#graph)) this.addVertex(vertex1)
    if (!(vertex2 in this.#graph)) this.addVertex(vertex2)

    this.#graph[vertex1].push([vertex2, weight])

    if (!this.#isDirected) {
      this.#graph[vertex2].push([vertex1, weight])
    }

    return true
  }

  siblings (vertex) {
    return this.#graph[vertex]
  }

  get vertices () {
    return Object.keys(this.#graph)
  }

  toString () {
    const vertices = []

    for (const key in this.#graph) {
      const siblings =
        this.#graph[key]
          .map(([vertice]) => vertice)
          .join(' ')
      vertices.push(`${key} => ${siblings}`)
    }

    return vertices.join('\n')
  }
}

export default Graph
