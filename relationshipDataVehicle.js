const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vehicle');

const vehicleSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  manufacture: String,
  numberOfWheels: Number,
  yearProduction: Number,
  type: String,
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  vehicleFavorite: vehicleSchema,
});

const Vehicles = mongoose.model('Vehicles', vehicleSchema);
const Peoples = mongoose.model('Peoples', peopleSchema);

const mazda = new Vehicles({
  productName: 'Mazda CX5',
  brand: 'Hyundai',
  manufacture: 'PT Hyundai Motor Indonesia',
  numberOfWheels: 4,
  yearProduction: 2021,
  type: 'Car',
});

mazda.save(function (error, vehicle) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`${vehicle.productName} berhasil disimpan ke database`);
  }
});

const iqbal = new Peoples({
  name: 'Iqbal',
  age: 20,
  vehicleFavorite: mazda,
});

iqbal.save(function (error, people) {
  if (error) {
    console.log(error.message);
  } else {
    mongoose.connection.close();
    console.log(`${people.name} berhasil disimpan ke dalam database.`);
  }
});