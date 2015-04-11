
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for live data from Device
var deviceDataSchema = new Schema({
  sensor_name: String,
  sensor_id: String,
  data_value: String,
  unit: String,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
deviceDataSchema.pre('save', function(next) {
  var currentDate = new Date();  
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});


var deviceData = mongoose.model('deviceData', deviceDataSchema);


module.exports = deviceData;

