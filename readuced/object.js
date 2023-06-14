let product = [
    {names: 'java new book ',   price: 500},
    {names: 'java old book ',   price: 600},
    {names: 'python new book ', price: 800},
    {names: 'python old book ', price: 300},
    {names: 'C++ new book ',    price: 900},
    {names: 'C++ old book ',    price: 700},
    {names: 'C new book ',      price: 520},
    {names: 'C old book ',      price: 590},
    {names: 'golanb new book ', price: 860},
    {names: 'golanb old book ', price: 3860},
    {names: 'notjs new book ',  price: 960}
]


const invoice= product.reduce((acc , cur ) => {
  if (acc[cur.names]){
    acc[cur.names].quantity++
    acc[cur.names].price +=cur.price
    } else{
        acc[cur.names] = {
            price: cur.price,
            quantity : 1,
        }
    }
    return acc 
},{})

console.log(invoice)
