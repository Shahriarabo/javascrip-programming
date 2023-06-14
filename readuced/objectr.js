const js = {
    names : 'Javascript: All You need know',
    author: {
        names: 'Abdullah al Shahriar',
        email: 'abdullahalshahriar195@gmail.com',

    },
    contents : {
        video: {
            count: 550,
        },
    },
}



const node = {
    names : 'Dive into nodejs',
    author: {
        names: 'Abdullah al Shahriar',
        email: 'abdullahalshahriar195@gmail.com',

    },
    contents : {
        video: {
            count: 660,
        },
    },
}



const react = {
    names : 'React: All You need',
    author: {
        names: 'Abdullah al Shahriar',
        email: 'abdullahalshahriar195@gmail.com',

    },
    contents : {
        video: {
            count: 230,
        },
        article : {
            count: 1311111100
        },
        quiz: {
            count : 12
        },

    },   

}


const insarobj = (obj,path) =>{
    // const path = 'contents,video,count'
    return path.split('.').reduce((acc , field) =>{
        if (acc) {
            return acc[field]
        }
        return 0
    },obj)
}


const course = [js ,node,react]
 course.forEach((course) =>{
    const coursevideo = insarobj(course,'contents.video.count')
    const coursearticle = insarobj(course,'contents.article.count')
    const countquiz = insarobj(course,'contents.quiz.count')

    console.log(`TOtal video=${coursevideo} , Article= ${coursearticle} and , quiz= ${countquiz}`)
})