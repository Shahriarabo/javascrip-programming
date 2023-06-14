const todos =[
    { id: '123', task: 'Eat', time: "Morning"},
    { id: '456', task: 'Rest', time: "Afternoon"},
    { id: '789', task: 'Visiting', time: "Eveneing"},
    { id: '852', task: 'Sleeping', time: "Night"},
]

const todo = todos.find((item) => item.time == 'Night')
console.log(todo)
 todo.task = 'Runing!!👩‍🚀👩‍🚀👩‍🚀 '
console.log(todos) 
