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

app.listen(port, () =>{
    console.log(`Dragon is running on the way:${port}`);
})

