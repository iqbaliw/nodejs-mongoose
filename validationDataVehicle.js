const { default: mongoose, mongo } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vehicle');

const vehicleSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Please, fill product name'],
  },
  brand: {
    type: String,
    required: [true, 'Please, fill brand'],
  },
  manufacture: {
    type: String,
    required: [true, 'Please, fill the manufacture'],
  },
  numberOfWheels: {
    type: Number,
    min: 2,
    max: 12
  },
  vehicleType: {
    type: String,
    required: [true, 'Please, fill the type of the vehicle!'],
  },
  yearProduction: Number,
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

const ertiga = new Vehicle({
  productName: 'Ertiga GX',
  brand: 'Suzuki',
  manufacture: 'PT Suzuki Indo Mobil',
  numberOfWheels: 2,
  vehicleType: 'Car',
  yearProduction: 2008,
});

ertiga.save(function (error) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    console.log(`berhasil ditambahkan ke dalam database.`);
  }
});