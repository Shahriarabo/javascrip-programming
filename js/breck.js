var isrun = true
while ( isrun){
    var rand = Math.floor(Math.random() *10 + 1)
    if (rand ==9) {
        console.log('i am the winner')
        break
    } else {
        console.log('you have got' + rand)
    }
}


for (var i = 1; i < 10; i++){
    if ( i % 5 == 0 ){
        break
    } else{
        console.log(i)
    }
}