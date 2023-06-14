function creatPromice(id) {
    const randTime = Math.floor(Math.random() * 200 + 100)
    return  new Promise((resolve) => {
        setTimeout(() => {
            console.log(`prosesing ${id}  <-> Time ${randTime}`)
            resolve(id)
        },randTime)
    })
}


const ids = [1,2,3,4,5,6,7,8,9]

const result = ids.reduce((acc , cur ) => {
   return acc.then(()=>{
    return creatPromice(cur)
   })
},Promise.resolve())

result.then(()=>{
    console.log('Done!!!!')
})