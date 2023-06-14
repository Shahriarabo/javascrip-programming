const Queue = require('./queue')
const queue = new Queue()
queue.enqueue(' Abdullah ')
queue.enqueue(' AL ')
queue.enqueue(' SHahriar ')
queue.enqueue(' Sakib ')
queue.enqueue(' Fokir ')
queue.enqueue(' SHahin ')
queue.enqueue(' Nasim ')

queue.showQueue()
queue.dequeue()
queue.showQueue()


console.log(queue.next())

console.log(queue)

