var arra = [1,3,4,5,6,7,9,8,11,10,12,13,14,15,16]

// for (var i = 0; i< arra.length; i++) {
//     console.log(arra[i])
//     arra[i] = arra[i]+2
// }

// console.log(arra)



// var sum = 0

// for (var i = 0 ; i < arra.length; i++ ) {
//     sum += arra+[i]

// }
// console.log(sum)


var sum = 0
for (var i = 0; i < arra.length; i++ ) {
   if (arra[i] % 2 ==1) {
    sum += arra+[i]
    console.log(' odd number = '+ arra[i] )
   }

}
console.log(sum)
