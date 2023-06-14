const max_size = 30

class Stack {
    constructor() {
        this.list = new Array(max_size)
        this.top = -1
    }

    push (item)  {
        if (this.top >= max_size) {
            console.log('stack overflow')
            return false
        }
        this.list[++this.top] = item
        return true
    }

    pop () {
        if (this.isEmpty()) {
            console.log('Stack undeflow')
            return false
        }
        
        let item = this.list[this.top]
        delete this.list[this.top]
        this.top--
        return item
    }

    peek () {
       if (this.isEmpty()) {
        console.log('Stack Undeflow')
        return false
       }
       return this.list[this.top]
    }

    isEmpty(){
       return this.top < 0
    }
}

module.exports = Stack