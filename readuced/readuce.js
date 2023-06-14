let numbers = [1,2,3,4,5,6,7,8,9]

function sumfuns(accumulator,currentValue) {
    return accumulator + currentValue
}

const sum = numbers.reduce(sumfuns)
    console.log(sum)



const avg = numbers.reduce((acc, cur,index,arr) => {
      acc += cur 
    if (index == arr.length - 1) {
        return acc / arr.length
    }  
    return acc
})   
 console.log(avg)







