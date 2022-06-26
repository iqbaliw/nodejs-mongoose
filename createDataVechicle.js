const { default: mongoose, Mongoose } = require('mongoose');

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

const nmax = new Vehicle({
  productName: 'NMAX 155 CC',
  brand: 'Yamaha',
  manufacture: 'PT YAMAHA MOTOR',
  numberOfWheels: 2,
  yearProduction: 2020,
  type: 'Motorcycle'
});
const pcx = new Vehicle({
  productName: 'PCX 155 CC',
  brand: 'Honda',
  manufacture: 'PT HONDA INDO',
  numberOfWheels: 2,
  yearProduction: 2021,
  type: 'Motorcycle'
});
const aerox = new Vehicle({
  productName: 'AEROX 155 CC',
  brand: 'Yamaha',
  manufacture: 'PT YAMAHA MOTOR',
  numberOfWheels: 2,
  yearProduction: 2018,
  type: 'Motorcycle'
});

const vehicle = [nmax, pcx, aerox];

Vehicle.insertMany(vehicle, function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Vehicles save succesfully');
  }
});

// insert single data
/*
vario.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Vehicle saved successfully.');
  }
});
*/