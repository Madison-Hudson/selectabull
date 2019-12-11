
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

//route to return all bulls
app.get('/bulls', (req, res) => {
  Bull.find((error, bulls) => {
      res.send(bulls)
  })
}); 

app.get('/bulls/:id', function(req, res, next) {
  Bull.findOne({_id: req.params.id}).then(function(bull){
    console.log(bull.milkProduction)
    res.send(JSON.stringify(production));
  })
});

//returns all heifers
app.get('/heifers', (req, res) => {
Heifer.find((error, heifers) => {
    res.send(heifers)
})
});
app.get('/heifers/:id', function(req, res, next) {
Heifer.findOne({_id: req.params.id}).then(function(heifer){
  res.send(heifer.name);
})
});



//grab id's of bull and heifer, caluculate average with reliability %
app.get('/traits/:bullId/:heiferId', (req, res) => {
  Heifer.findOne({_id: req.params.heiferId}).then(function(heifer){
    Bull.findOne({_id: req.params.bullId}).then(function(bull){
      console.log(bull);
      console.log(heifer);

      let heiferMilkProduction = heifer.milkProduction;
      let bullMilkProduction = bull.milkProduction;

      if (heiferMilkProduction > bullMilkProduction) {
        heiferMilkProduction += heiferMilkProduction * .1  
        bullMilkProduction -= bullMilkProduction * .1
      
      } else {
        bullMilkProduction += bullMilkProduction * .1 
        heiferMilkProduction -= heiferMilkProduction * .1
      };

      const calfTraits = {
        bullMilkProduction,
        heiferMilkProduction
      }

      res.send(calfTraits);
    })
  })
});







app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})




