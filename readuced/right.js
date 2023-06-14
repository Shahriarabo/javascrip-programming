const arr = [
    [1,3],
    [5,9],
    [7,3],
    [6,4],
]   
const result = arr.reduceRight((acc,cur) => {
    return acc.concat(cur)
},[])
 console.log(result)

// use to  reduce tight
 

const nums = [1,2,3,4,5,6,7,8,9]
const sum = nums.reduceRight((acc, cur)=>{
    console.log(`Acc [${acc}] - Cur [${cur}]`)
    return acc+ cur
},0)

console.log(`Sum [${sum}]`)
