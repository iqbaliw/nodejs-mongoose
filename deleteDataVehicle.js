const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vehicle');

const vehicleSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  manufacture: String,
  numberOfWheels: String,
  yearProduction: String,
  type: String
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

Vehicle.deleteMany({ productName: 'Ertiga GX' }, function (error) {
  if (error) {
    console.log(error.message);
  } else {
    console.log('Data deleted successfully.');
  }
});

Vehicle.find(function (error, fruits) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    console.log('data after deleted:');
    let i = 1;
    fruits.map((fruit) => {
      console.log(`${i++}. ${fruit.productName}`);
    });
  }
});