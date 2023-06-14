 const words = [
    'One',
    'Two',
    'Three',
    'Fore',
    'Five',
    'Six',
    'Saven',
    'Eight',
    'Nine',
    'Ten',
    'Rasel',
    'Abdullah Al',
    'Sakib fokir',
    'Shahriar',
    ''


]



const group = words.reduce((acc , cur)=>{
    const len = cur.length
    if (acc[len]){
        acc[len].push(cur)
    }else{
        acc[len]=[cur]
    }
    return acc
},{})

console.log(group)