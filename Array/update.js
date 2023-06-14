// const arr = new Array(10)
// console.log(arr)

// for (let i =0; i < arr1.length; i++) {
//     arr1[1] = false;
// } 
// console.log(arr1)


// const Name = [ 'Abdullah','AL' ,'Shahriar','Rasel']
// Name [0]= 'MD.'
// Name[1]='Abdullah'
// Name[2]='AL'
// Name[3] ='Shahriar'
// Name [4]= 'RaseL'


// console.log(Name)





// const response = new Array (9) 
// response.fill(false)
// for (let i = 0; i < response.length; i++) {
//     const rand = Math.floor(Math.random() * 10 + 1) 
//     response[i]= rand > 5 ? 'One of the number': 'This is the number ';

// }

// console.log(response )


const Names = [ 'Abdullah','AL' ,'Shahriar','Rasel']


function updete(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        arr[i] = `${i+1}.  ${arr[i]}`
        

    }
    return arr;

} 
const updeteNames =   updete(Names)
console.log(Names)
console.log(updeteNames)






// const names = [ 'Abdullah','AL' ,'Shahriar','Rasel']


// function forEach(arr,cb) {
//     for (let i =0; i < arr.length; i++){
//         cb(arr [i] , i , arr)
//     }
// }

//  names.forEach(names,(value,index)=>{
//     console.log(`${index+1}:${value}`)
//  })

