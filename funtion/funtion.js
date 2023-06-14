// // 




// function myforEach(arr, cb) {
//     for(let i = 0; i < arr.length; i++) {
//       cb(arr[i],i ,arr)
//     }
// }

// const sums =[25,25,25,25,25,25,25,25,25]
//  let sum = 0

//  function sumfuns(v) {
//     sum += v
//  }  
  
// myforEach(sums,sumfuns)
// console.log(sum)
 


// const names =  [ 'abdullah','aL' ,'shahriar','rasel']


// function forEach(arr,cb) {
//     for (let i =0; i < arr.length; i++){
//         cb(arr[i],i ,arr)
//     }
// }

//  names.forEach((value,index)=>{
//     console.log(`${index+1}:${value}`)
//  })



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Filtter.map  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

studentarray = [
    { id: 1, names: 'Abdullah', cgpa: 3.85, gmail:'abdullah190@gmail.com'  },
    { id: 2, names: 'Sharmin', cgpa:2.85, gmail:'abdullah193@gmail.com'  },
    { id: 3, names: 'Shahriar', cgpa: 3.50, gmail:'abdullah192@gmail.com'  },
    { id: 4, names: 'Rasel', cgpa: 1.85, gmail: 'abdullah195@gmail.com'  },
    { id: 5, names: 'Liza', cgpa: 3.35, gmail: 'abdullah198@gmail.com'  },
    { id: 6, names: 'Rana', cgpa: 3.33, gmail :'abdullah197@gmail.com'  },
    { id: 7, names: 'Sadit', cgpa: 3.15, gmail:'abdullah199@gmail.com'  },
    { id: 8, names: 'Afif', cgpa: 3.95, gmail : 'abdullah145@gmail.com'  }
]


const emailarray = studentarray.filter((value) => value.cgpa < 3).map((value) => {
    return{
        ...value ,
        title: "student ",
        mag: ' You have failed'

    }
   
})


 console.log(studentarra)
