const { default: mongoose, mongo } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cobamongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruits = mongoose.model('fruits', fruitSchema);

Fruits.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();

    fruits.map((fruit) => console.log(`Buah ${fruit.name} mendapatkan rating ${fruit.rating} dengan review: ${fruit.review}`));
  }
});