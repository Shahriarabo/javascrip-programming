const contact = [
    {
        names   : 'Abdullah', 
        number  : 01570-58709,
        email   : 'abdullah199@gmail.com'
    },

    {
        names   : 'Al', 
        number  : 01570-58703,
        email   : 'bdullah19@gmail.com'
    }, 

    {
        names   : 'Shahriar', 
        number  : 01570-58729,
        email   : 'dullah199@gmail.com'
    },

    {
        names   : 'Rasel', 
        number  : 01570-587899,
        email   : 'abullah199@gmail.com'
    },

    {
        names   : 'Sakib', 
        number  : 01570-52709,
        email   : 'adullah199@gmail.com'
    },

    {
        names   : 'Ka', 
        number  : 01570-58707,
        email   : 'abdullah199@gmail.com'
    },
    {
        names   : 'Ka', 
        number  : 01570-58707,
        email   : 'abdullah199@gmail.com'
    },
    {
        names   : 'Ka', 
        number  : 01570-58707,
        email   : 'abdullah199@gmail.com'
    },
    {
        names   : 'Ka', 
        number  : 01570-58707,
        email   : 'abdullah199@gmail.com'
    },

    {
        names   : 'Abdul', 
        number  : 01570-58708,
        email   : 'abdull199@gmail.com'
    },

    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'Mia', 
        number  : 01570-128709,
        email   : 'mniaah199@gmail.com'
    },
    {
        names   : 'XW', 
        number  : 01530-58709,
        email   : 'abah109@gmail.com'
    }
]


contact.sort((a,b)=>{
    if (a.names > b.names) return 1
    if(a.names < b.names) return -1
    return 0

})
 console.log(contact)

const  groupname= contact.reduce((acc,cur) => {
    let groupname = cur.names.charAt(0).toUpperCase()
    if(acc[groupname]) {
       acc[groupname].push(cur)
    }else{
        acc[groupname] = [cur]
    }
    return acc
},{})

console.log(groupname)



const displaylist = (group) => {
    console.log ('Displaing Contact Ingformation')
    console.log ('<---------------<<<>>>----------------->')

    const keys = Object.keys(group)
    keys.forEach((key)=>{
        console.log(`Group ${key}`)
        console.table(group[key])
    })


}

displaylist(groupname)

