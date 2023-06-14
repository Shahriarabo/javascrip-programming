var a = 100
var b = 90
var c = 70
var d = 80


if (a > b && a > c && a > d){
    console.log('A is big ')

} else if (b > a && b > c && b > d ){
    console.log('B is big')

} else if (c > a && c > b && c > d){
    console.log('C is big')

} else {
    console.log('D is big')
}

if (a > b || c > d ) {
     console.log(' A is big than B or C is big than D')

} else (
    console.log('al is false')
)

var check = (a > b)    
console.log(check)
