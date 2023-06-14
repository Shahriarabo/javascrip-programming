// const names =['rasel','khadija','sarmin','shati']
// function forEach(arr,cb){
//     for(let i =0;i<arr.length;i++){
//         cb(arr[i],i,arr)
//     }
// }
// names.forEach((value,index)=>{
// console.log(`${index+10}:${value}`);
// })


const names =  [ 'abdullah','aL' ,'shahriar','rasel']


function forEach(arr,cb) {
    for (let i =0; i < arr.length; i++){
        cb(arr[i],i ,arr)
    }
}

 names.forEach((value,index)=>{
    console.log(`${index+1}:${value}`)
 })