# dsa
Implementation of multiple data structures

# How to use
```js
  // CommonJS

  const { Queue, LinkedList } = require("dsa-toolkit")

  const queue = new Queue([1, 2, 3, 4])

  queue.enqueue(5)
  console.log(queue.peek())     // 1
  console.log(queue.dequeue())  // 1
  console.log(queue.peek())     // 2
  console.log(`${queue}`)       // 2,3,4,5

  const ll = new LinkedList([1, 2])
  ll.push(3)
  console.log(`${ll}`)          // 1,2,3
```


```js
  // ES Modules 
  import { LinkedList, Queue } from 'dsa'

  const queue = new Queue([1, 2, 3, 4])

  queue.enqueue(5)
  console.log(queue.peek())     // 1
  console.log(queue.dequeue())  // 1
  console.log(queue.peek())     // 2
  console.log(`${queue}`)       // 2,3,4,5

  const ll = new LinkedList([1, 2])
  ll.push(3)
  console.log(`${ll}`)          // 1,2,3
```

# Data Structures

  - [Set](https://github.com/marceloabk/dsa/blob/main/src/ds/set/set.js)
  - [Stack](https://github.com/marceloabk/dsa/blob/main/src/ds/stack/stack.js)
  - [Queue](https://github.com/marceloabk/dsa/blob/main/src/ds/queue/queue.js)
  - [Deque](https://github.com/marceloabk/dsa/blob/main/src/ds/deque/deque.js)
  - [LinkedList](https://github.com/marceloabk/dsa/blob/main/src/ds/lists/linkedList/linkedList.js)
  - [DoubleLinkedList](https://github.com/marceloabk/dsa/blob/main/src/ds/lists/doubleLinkedList/doubleLinkedList.js)
  - [CircularLinkedList](https://github.com/marceloabk/dsa/blob/main/src/ds/lists/circularLinkedList/circularLinkedList.js)
