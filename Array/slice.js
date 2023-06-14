const arr = [1,2,3,4,5]

// const sliced =arr.slice(1,4)
// console.log(sliced)


// const colond = arr.slice()
// console.log(arr == colond)

function toarr (){
    return Array.prototype.slice.call(arguments) 

}
const array = toarr(6,7,8,9,'text','Rasel','Sakib fokir')
console.log(array)
// console.log(array,__proto__,constructor)