// const youtube =[
//     {names : 'cotun', URL: 'https://www.youtube.com/watch?v=zCW8elPxBfs'},
//     {names : 'story', URL: 'https://www.youtube.com/watch?v=0vpTUNYGF9Q'},
//     {names : 'cotun', URL: 'https://www.youtube.com/watch?v=zCW8elPxBfs'},
//     {names : 'cotun', URL: 'https://www.youtube.com/watch?v=zCW8elPxBfs'},
//     {names : 'cotun', URL: 'https://www.youtube.com/watch?v=zCW8elPxBfs'}
// ]


// const sum = (a,b) => a+b ;
// const sub = (a,b) => a-b ;
// const time = (a,b) => a*b;
// const div = (a,b) => a/b ;
// const mod = (a,b) => a%b ;




// const funs = [sum,sub,time,div,mod]

// const a = 10
//     b = 50

// for (let i = 0; i < funs.length; i++) {
//     const result = funs[i](a,b)
//     console.log(`[${funs[i].name}] Result = ${result}`)
// }


// const points =[
//     [1,3],
//     [4,2],
//     [2,6],
//     [6,8],
//     [8,9]
// ] 

// for (let i =0; i < points.length; i++){
//     console.log(`Point ${i}-x=${points[i][0]} and y=${points[i][1]}`)
// }


function res(arr) {
    for ( i = 0; i < arr.length; i++) {
        logic(arr[i] , i, arr)
    }
}


function loge (index) {
    console.log(index)
}

function logic(value, index, arr) {
    console.log(value, index,arr)
}

res([1,2],loge)
res(['one','two'],logic)
// res(['rasel','khadija'],logic)