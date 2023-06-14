max_size = 80
class Queue {
    constructor() {
        this.front = 0
        this.rear = 0
        this.queue = new Array(max_size)
    }




   enqueue(item) {
    if (this.rear == max_size) {
        console.log('Queue is Full')
        return false
    }

    this.queue[this.rear++] = item

    }


    dequeue() {
        if(this.isempty()) {
        console.log('Queue is Empty')
        return
        }

        const item = this.queue[this.fonts]
        for (let i = this.front; i < this.rear - 1; i++ ) {
            this.queue[i] = this.queue[i++]
        }

        delete this.queue[--this.rear]
        return
    } 
    
    showQueue() {
        if(this.isempty()) {
            console.log('Queue is Empty')
            return
        }
       for (let i = this.front; i < this.rear; i++) {
        console.log('[Displaying]',this.queue[i])
       } 
        
    }

    next() {
        if(this.isempty()) {
            console.log('Queue is Empty')
            return
        }
    }


    isempty() {
        return this.front == this.rear
    }
    
}

module.exports = Queue


// if(this.front == this.rear) {
//     console.log('Queue is Empty')
//     return
//     }