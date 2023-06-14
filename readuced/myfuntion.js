function myfuntion(arr,cb, init){
    let acc = init,
    start = 0
    if (!init) {
        acc = arr[0]
        start = 1
    }

    for (i=start; i < arr.length; i++){
        acc = cb(acc,arr[i],i,arr)
    }
    return acc
}


const arr = [1,2,3,4,5,6,7,8,9]
const sum = myfuntion(arr,(acc, cur)=>{
     return acc + cur
    },
0
)

console.log(sum)