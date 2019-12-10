
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/Selectabull', {useNewUrlParser: true})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


router.route('/bulls').get((req, res) => {

});

router.route('/heifers').get((req, res) => {

});

router.route('/calculate').get((req, res) => {

});



app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})

