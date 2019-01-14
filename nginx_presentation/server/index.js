const express = require('express')
const app = express()
const port = 3000

let dogs =[
    'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg',
    'https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg',
    'https://images.hellogiggles.com/uploads/2018/03/21041247/puppies.jpg',
    'https://ae01.alicdn.com/kf/HTB1JtvYQVXXXXXvXVXXq6xXFXXXu.jpg',
    'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
];
let cats=[
    'https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
    'https://d3thpuk46eyjbu.cloudfront.net/uploads/production/9328/1533731634/original/adorable-animal-blur-326875.jpg?1533731634',
    'https://www.petguide.com/wp-content/uploads/2016/10/9SushiCatCostume.jpg',
    'https://t2.ea.ltmcdn.com/en/images/3/0/7/img_cute_halloween_costumes_for_cats_703_paso_0_600.jpg',
    'https://cdn.images.express.co.uk/img/dynamic/128/590x/Tiger-boy-kid-cub-play-Siberian-Amur-endangered-736635.jpg'
];
let other=[
    'http://cascadekennels.com/wp-content/uploads/2016/07/exotic-pet-boarding-miniature-pig.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/000/452/907/large/lindsey-wakefield-pikachu.jpg?1443927567',
    'http://parcomega.ca/wp-content/uploads/2016/04/ratonlaveur-laforet-parcomega.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/RedPandaFullBody.JPG/1200px-RedPandaFullBody.JPG',
    'https://tpwmagazine.com/archive/2016/dec/images/articles/WT-Owl/owl.jpg'
];

const getRandom = ()=>{
    let arr =[];
    arr.push(dogs[Math.floor(Math.random()*5)]);
   arr.push(cats[Math.floor(Math.random()*5)]);
   arr.push(other[Math.floor(Math.random()*5)]);
   return arr;
}

app.get('/', (req, res) => res.send(JSON.stringify(getRandom())));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))