const arr = [222,1,5,8,66,7,70,53,65,20,48,96,36,25,14,75,95,68,45]


arr.sort(( a,b ) => ( a-b ))
console.log(arr)


const bainary =(arr , key) => {
    let lowest = 0
    let hightest = arr.length-1

    while(lowest  <=  hightest) {
        let mid = Math.floor((lowest + hightest)/2)
        if (arr[mid] == key) return mid
        if (arr[mid] < key)  lowest = mid +1
        if (arr[mid] > key)  hightest = mid - 1

    }
    return -1
}


const result = bainary(arr , 222)
console.log(result)
