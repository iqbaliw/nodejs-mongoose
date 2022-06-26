const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cobamongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please, input the name of the fruit!'],
  },
  rating: {
    type: Number,
    min: 5,
    max: 10,
  },
  review: String,
});

const Fruits = mongoose.model('fruits', fruitSchema);

const salak = new Fruits({
  name: 'Salak',
  rating: 8,
  review: 'Salaknya manis dan segar serta tidak berair',
});

salak.save(function (error) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    console.log('Salak berhasil disimpan');
  }
});