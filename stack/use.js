const Stack = require('./stack')
const stack = new Stack()
const text = 'Abdullah al Shahriar'

for (i = 0; i < text.length; i++ ){
    stack.push(text.charAt(i))
}


let reversedtext = '' 
while(!stack.isEmpty()) {
    // console.log(`[POPED]`)
    // console.log(stack)
    reversedtext += stack.pop()
}

console.log(reversedtext)
console.log(stack)




const texts = 'rasel'
const jsstack =  