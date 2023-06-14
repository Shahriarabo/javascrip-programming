 const student = [
    {id: 1, Name : 'omi'},
    {id: 2, Name : 'Prince'},
    {id: 3, Name : 'Sakib'},
    {id: 4, Name : 'rasel'},
    {id: 5, Name : 'Shahin'},
    {id: 6, Name : 'Yamin'},
    {id: 7, Name : 'Nasim'},
    {id: 8, Name : 'Asif'},
    {id: 9, Name : 'Hasim'}
 ]


 const giveid = 4
 const update = 'Abdulla al Shahriar'


 for (i = 0; i < student.length; i++){
    if (giveid == student[i].id){
        student[i].Name = update
        break
    }
 }




 console.log(student)