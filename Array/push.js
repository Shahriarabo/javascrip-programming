// const arrpi = [1,2,4,5]
// const arrpi2 = [76,969]
// arrpi [arrpi.length] =4
// arrpi.push(6)
// arrpi.push(7)
// arrpi.push(8)
// arrpi.push(9)
// arrpi.push(10)
// arrpi.push(11)
// arrpi.push(12)
// arrpi.push(71)
// arrpi.push(99,100, ...arrpi2)



// arrpi.unshift('A','B','C')
// console.log(arrpi)





const arrpi = [1,2,3,4,5,6]
const arrpi2 = [11,22,33,44,55,66]
arrpi.splice(9,10,12)
arrpi.splice(13,14,15,...arrpi2)

console.log(arrpi)
