const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cobamongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Fruits = mongoose.model('Fruits', fruitSchema);
const Peoples = mongoose.model('Peoples', peopleSchema);

const anggur = new Fruits({
  name: 'Anggur',
  rating: 8,
  review: 'Rasanya manis banget, segar, dan berair',
});

anggur.save(function (error, fruit) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`buah ${fruit.name} berhasil disimpan ke dalam database!`);
  }
});

const iqbal = new Peoples({
  name: 'Iqbal Wahyudi',
  age: 20,
  favoriteFruit: anggur,
});

iqbal.save(function (error, people) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log(`${people.name} berhasil disimpan ke dalam database.`);
  }
});