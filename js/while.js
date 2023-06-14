// var i = 0
// while ( i< 20){
//     console.log('rasel')
//     i++ 
// }

var isrun = true
while ( isrun){
    var rand = Math.floor(Math.random() *10 + 1)
    if (rand ==9) {
        console.log('i am the winner')
        isrun = false
    } else {
        console.log('you have got' + rand)
    }
}