const numbers = [4,5,6,8,9,5,7]


const squres = numbers.reduce((acc , cur) => {
    acc.push(cur*cur)   
    return acc        
},[])

console.log(squres)


const odds = numbers.reduce((acc , cur) =>{
    if ( cur %2 == 1 ){
        acc.push(cur)
      
    }
    return acc  
    
},[])

console.log(odds)





const bigArray = [] 

for (let i = 0; i< 5000000; i++) {
  bigArray.push(i)
}


console.time('both')
bigArray.filter((v)=> v %2 ==0).map((v)=>  v* 2 )
console.timeEnd('both')


console.time('Reduce')
bigArray.reduce((acc ,cur) =>{
  if (cur %2 ==0){
    acc.push(cur*2)
  }
  return acc
},[])

console.timeEnd('Reduce')
