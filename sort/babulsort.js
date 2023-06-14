const myArray =[222,1,5,8,66,7,70,53,65,20,48,96,36,25,14,75,95,68,45]

const babblesort = (array) => {
    for (let i = 0; i<array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j]>array[j+1]){
                let temp = array[j]
                array[j]= array[j+1]
                array[j+1]= temp
            }
        }
    }
}
console.log('unsorted', myArray)
babblesort(myArray)
console.log('sorted', myArray)