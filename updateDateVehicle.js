const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vehicle');

const vehicleSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  manufacture: String,
  numberOfWheels: Number,
  yearProduction: Number,
  type: String
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

Vehicle.updateOne({ _id: '62b824d736249300b2a7ce0a' }, { productName: 'Ertiga Diesel' }, function (error) {
  if (error) {
    console.log(error.message);
  } else {
    console.log('data berhasil diupdate.');
  }
});

Vehicle.find(function (error, vehicles) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    vehicles.map((vehicle) => console.log(vehicle.productName));
  }
});