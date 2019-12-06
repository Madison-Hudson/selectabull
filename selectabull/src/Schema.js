const mongoose= require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/cows');


const cowSchema = new Schema({
    Name: String,
    Id: Number,
    milkProduction: Number
  });


  const Cow = mongoose.model('Cow', cowSchema);

let Bob = new Cow ({ Name: 'Bob', Id: 300, milkProduction: 999 });
console.log(Bob);


//one collection for heifers, another for bulls