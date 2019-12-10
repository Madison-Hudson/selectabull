const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const heiferSchema = new Schema({
    Name: String,
    Id: Number,
    milkProduction: Number,
    Category: String
  });


const Heifer = mongoose.model('Heifer', heiferSchema);


module.exports = Heifer;
