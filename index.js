require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
  res.send('Animeshdotcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login to fb.com</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
