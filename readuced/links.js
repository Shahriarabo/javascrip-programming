const links = [
    {names : 'Facebook',  url: 'https://www.facebook.com'},
    {names : 'Youtube',   url: 'https://www.Youtube.com'},
    {names : 'Instagram', url: 'https://www.Instagram.com'},
    {names : 'linked',    url: 'https://www.inked.com'},
    {names : 'Twitter',   url: 'https://www.Twitter.com'},
]


let template = `<ul>{{links}}</ul>`;

const linklist = links.reduce((acc, cur) =>{
    acc += `<li><a href="${cur.url}"${cur.names}></a></li>`
    return acc
}, '');

template = template.replace('{{links}}', linklist);
console.log(template);
// console.log(linklist)
