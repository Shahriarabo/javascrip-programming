const add10 = (n) => n+10
const time3 = (n) => n*3
const div2 = (n) => n/2



const n = 11

const k = div2(time3(add10(n)))
console.log(k)




const pais = (...fns) => (m) => fns.reduce((v ,f)=> f(v), n)

const result = pais(add10,time3,div2)(n)
console.log(result)