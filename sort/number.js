const numbers = [222,1,5,8,66,7,70,53,65,20,48,96,36,25,14,75,95,68,45]

numbers.sort((a , b) => {
    console.log(a,b)
    return (a+b)

})



const member = [
    { id: 13, names: 'Sakib'},
    { id: 10, names: 'Price'},
    { id: 3, names: 'RaseL'},
    { id: 7, names: 'Shahin'},
    { id: 1, names: 'Abdullah'},
    { id: 12, names: 'Yamin'},
    { id: 2, names: 'Shahriar'},
    { id: 11, names: 'Raju'},
    { id: 4, names: 'Rakib'},
    { id: 5, names: 'Nice'},
    { id: 6, names: 'Sompa'},
    { id: 9, names: 'Sadat'},
    { id: 7, names: 'Afif'},
]


const babblesort = (array,cb) => {
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - 1; j++){
            if (cb(array[j] , array[j+1]) > 0){
                let temp = array[j]
                array[j]= array[j+1]
                array[j+1]= temp
            }
        }
    }
}

   
babblesort(member, ( a, b ) => a.id - b.id)
console.log(member)



babblesort(member, (a,b) =>{
    if(a.names > b.names) return 1
    if (a.names <  b.names ) return -1
    return 0
})

console.log(member)