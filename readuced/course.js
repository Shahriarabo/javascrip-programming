const course = [
 {
    id    : 'Cos1' ,
    Name  : 'javascript all you know',
    topic : 'Javascript',
    price :  3360

 },

 {
    id    : 'Cos2' ,
    Name  : 'java all you know',
    topic : 'Java',
    price :  4265

 } ,  

 {
    id    : 'Cos3' ,
    Name  : 'python all you know',
    topic : 'Python',
    price :  3650

 } , 

 {
    id    : 'Cos4' ,
    Name  : 'C# all you know',
    topic : 'C#',
    price :  4560

 } ,  

 {
    id    : 'Cos5' ,
    Name  : 'C++ all you know',
    topic : 'C++',
    price :  3568

 }   
   
]


const discountprice = {
    Cos1  :  2500,
    Cos2  :  3500,
    Cos3  :  3000,
    Cos4  :  2000,
    Cos5  :  2300
}


const updatecourse = course.reduce((acc , cur ) => {
    if (discountprice[cur.id]) {
        
        cur.discountprice = discountprice[cur.id]
    }else{
        cur.discountprice= 0
    }
    acc.push(cur)

    return acc
},[])

console.log(updatecourse)



