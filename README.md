# dsa
Implementation of multiple data structures

# How to use
```js
  // CommonJS

  const { LinkedList } = require("dsa-toolkit")

  const ll = new LinkedList([1, 2])
  ll.push(3)
  console.log(`${ll}`)          // 1,2,3
```


```js
  // ES Modules 
  import { Queue, Set } from 'dsa'

  const queue = new Queue([1, 2, 3, 4])

  queue.enqueue(5)
  console.log(queue.peek())     // 1
  console.log(queue.dequeue())  // 1
  console.log(queue.peek())     // 2
  console.log(`${queue}`)       // 2,3,4,5

  const set1 = new Set([1, 2, 3])
  const set2 = new Set([2, 3, 4])

  const unionSet = set1.union(set2)
  const intersectionSet = set1.intersection(set2)
  const differenceSet = set1.difference(set2)

  const set3 = new Set([1])
  const isSubset = set3.subset(set1)

  console.log('union', unionSet.values()) // union [ 1, 2, 3, 4 ]
  console.log('intersection', intersectionSet.values()) // intersection [ 2, 3 ]
  console.log('difference', differenceSet.values()) // difference [ 1 ]
  console.log('is subset', isSubset) // is subset true
```

# Data Structures

  - [Set](https://github.com/marceloabk/dsa/blob/main/src/ds/set/set.js)
  - [Stack](https://github.com/marceloabk/dsa/blob/main/src/ds/stack/stack.js)
  - [Queue](https://github.com/marceloabk/dsa/blob/main/src/ds/queue/queue.js)
  - [Deque](https://github.com/marceloabk/dsa/blob/main/src/ds/deque/deque.js)
  - [LinkedList](https://github.com/marceloabk/dsa/blob/main/src/ds/lists/linkedList/linkedList.js)
  - [DoubleLinkedList](https://github.com/marceloabk/dsa/blob/main/src/ds/lists/doubleLinkedList/doubleLinkedList.js)
  - [CircularLinkedList](https://github.com/marceloabk/dsa/blob/main/src/ds/lists/circularLinkedList/circularLinkedList.js)
