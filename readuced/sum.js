const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [11,22,33]

]

// row matrix

const resultH = matrix.map((row) =>{
    return row.reduce((a,b) => a+b)
})

console.log(resultH)



// comlam matrix

const resultV = matrix.reduce((acc,cur) => {
    return acc.map((v,i) => cur[i]+v)
})

console.log(resultV)


// <<<<<<Flat sum>>>>>


const resultF = matrix.reduce((acc , cur) =>{
    return acc + cur.reduce((a,b) => a*b)
},0)

console.log(resultF)