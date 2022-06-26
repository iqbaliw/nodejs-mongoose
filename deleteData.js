const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cobamongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruits = mongoose.model('fruits', fruitSchema);

Fruits.deleteOne({ _id: '62b5e4da69ca57f132e31321' }, function (error) {
  if (error) {
    console.log(error.message);
  } else {
    console.log('berhasil dihapus');
  }
});

Fruits.find(function (error, fruits) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    console.log('data setelah dihapus:');
    let i = 1;
    fruits.map((fruit) => {
      console.log(`${i++}. ${fruit.name}`);
    });
  }
});