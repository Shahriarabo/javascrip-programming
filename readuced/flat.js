let numbers = [[1,2],3,4,[5,6,],7,[8,9]]

const flatarray = numbers.flat()
    console.log(flatarray)


const flatarr = numbers.reduce((acc , cur) => {
    return acc.concat(cur)
})    

console.log(flatarr)