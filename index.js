const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const Categories = require('./data/categories.json')
const newsData = require('./data/news.json')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('dragon is running shore daraw')
})

app.get('/categories', (req, res)=>{
    res.send(Categories)
})

app.get('/news', (req, res) =>{
    res.send(newsData)
})

//fine single news by news id 
app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selectedNews = newsData.find(n=> n._id == id)
    res.send(selectedNews)
})

// find categories news from newsData by category_id
app.get('/categories/:id', (req, res)=>{
    const id = req.params.id;
    if(id == 0){
        res.send(newsData)
    }
    
    // find all news
    else{
        const categoryNews = newsData.filter(n=>n.category_id == id)
        res.send(categoryNews)
    }
})

app.listen(port, () =>{
    console.log(`Dragon is running on the way:${port}`);
})

