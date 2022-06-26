const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cobamongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('fruit', fruitSchema);

const apple = new Fruit({
  name: 'apple',
  rating: 8,
  review: 'enak da manis',
});

const jeruk = new Fruit({
  name: 'jeruk',
  rating: 10,
  review: 'manis dan segar'
});

const melon = new Fruit({
  name: 'melon',
  rating: 9,
  review: 'manis dan enak'
});

const myFavFruti = [apple, jeruk, melon];

Fruit.insertMany(myFavFruti, function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Frutis saves successfully!');
  }
});