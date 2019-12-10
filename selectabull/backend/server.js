
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

// app.get('/bulls/:id', function(req, res, next) {
//   Bull.findOne({_id: req.params.id}).then(function(bull){
//     console.log(bull.milkProduction)
//     res.send(JSON.stringify(production));
//   })
// });

app.get('/bulls/:id', function(req, res, next) {
  Bull.findOne({_id: req.params.id}).then(function(bull){
    console.log(bull.milkProduction)
    res.send(JSON.stringify(production));
  },
  Hiefer.findOne({_id: req.params.id}).then(function(heifer){
    console.log(heifer.milkProduction)
    res.send(JSON.stringify(production));
  }))
};

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
app.get('/calculate', (req, res) => {
// Heifer=await heifer.find
//(one request from front end sends two id's on click submit, then calculate)

});


// db.eval(function() { 
//   db.collection.find({tag : ""}).forEach(function(e) {
//       e.milkProduction += e.milkProduction * 0.1;
//       db.collection.save(e);
//   });

// if (heifer.milkProduction) > (bull.milkProduction) {
//   (heifer.milkProduction) ++ (heifer.milkProduction *.1) && (bull.milkProduction) -- (bull.milkProduction *.1)

// } else {
//   (bull.milkProduction) ++ (bull.milkProduction *.1) && (heifer.milkProduction) --(bull.milkProduction *.1)
// };

// }); 



app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})




