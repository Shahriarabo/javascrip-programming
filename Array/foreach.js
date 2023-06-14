function myForeach(arr, cb){
    for (let i = 0; i < arr.lenght; i++) {
        cb(arr[i], i , arr)
    }
}


const nums =[1,2,3,4]
let sum = 0 

myForeach(nums, function(v)  {
  sum += v  
})

 
// myForeach(nums, sumf)
  
console.log(sum)