const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const bullSchema = new Schema({
    Name: String,
    Id: Number,
    milkProduction: Number,
    Category: String
  });


const Bull = mongoose.model('Bull', bullSchema);



module.exports = Bull;
