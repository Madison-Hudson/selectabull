
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const Bull = require('./models/bullModel');
const Heifer = require('./models/heiferModel');

mongoose.connect('mongodb://localhost/selectabull2', {useNewUrlParser: true})

const app = express()

app.use(cors());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//route to return all cows
app.get('/bulls', (req, res) => {
    Bull.find((error, bulls) => {
        res.send(bulls)
    })
}); 

app.get('/heifers', (req, res) => {
  Heifer.find((error, heifers) => {
      res.send(heifers)
  })
}); 


//grab id's of bull and heifer, caluculate average with reliability %
app.get('/traits', (req, res) => {
   
}); 



app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})




