const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cobamongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruits = mongoose.model('fruits', fruitSchema);

Fruits.updateOne({ _id: '62b81e4ade00fe6fc5152a82' }, { name: 'Salak' }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Data updated successfully.');
  }
});

Fruits.find(function (error, fruits) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    fruits.map((fruit) => console.log(fruit.name));
  }
});