 function creadid(arr) {
    if (arr.length==0) return 1
    return arr [arr.length -1].id + 1
 }


 class todo {
    constructor(todolist=[]){
        this.todolist = todolist
    }


    additem(text) {
        const item = {
            text,
            id: genarated(this.todolist),
            created : new Date()
        } 

        this.toString.push(item)
    }

    update(id,text){
        for (i = 0; i < this.todolist.length; i++) {
            if (this.todolist[i].id == id) {
                this.todolist[i].text = text
                break
            }
        }
    }

    done() {
       return this.todolist.shift()
    }

    list() {
        return this.todolist()
    }
   

    find(item) {
        const resulr= []
        for (i = 0; i < this.todolist.length; i++) {
            const item = this.todolist[i]
            if (item.text.tolowercsae().includes(tram.tolowercsae())){
                return resulr.push(item)
            }
        }
        return resulr
    }
}