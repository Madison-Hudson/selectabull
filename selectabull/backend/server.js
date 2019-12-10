
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
app.get('/calculate', (req, res) => {
let heifer = await heifer.find
 

.then



if (heifer.milkProduction) > (bull.milkProduction) {
  (heifer.milkProduction) + 10% && (bull.milkProduction)- 10%

} else {
  (bull.milkProduction) +10% && (heifer.milkProduction) -10%
};

}); 



app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})




