const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vehicle', { useNewUrlParser: true, useUnifiedTopology: true });

const vehicleSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  manufacture: String,
  numberOfWheels: Number,
  yearProduction: Number,
  type: String
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

Vehicle.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.productName);
    });
  }
});