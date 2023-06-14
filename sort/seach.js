const arr = [222,1,5,8,66,7,70,53,65,20,48,96,36,25,14,75,95,68,45]


const team = [
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



const seach =((arr,key)=>{
    for (i = 0; i < arr.length; i++){
        if (arr[i] == key) {
            return i
        }
    }
    return -1
})

const seachnumber = seach(arr, 14)
console.log(seachnumber);



const seachs =(arr , cb) => {
    for (let i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            return i
        }
    }
    return -1
}


const seachnumbers =seachs(team , (item) => item.names == 'Sakib')
console.log(seachnumbers)




const seachnumberid =seachs(team , (item) => item.id == 5)
console.log(seachnumberid)