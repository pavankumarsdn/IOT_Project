
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for live data from Device
var deviceStatusSchema = new Schema({
  sensor_name: String,
  sensor_id: String,
  IsActive: Boolean,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
deviceStatusSchema.pre('save', function(next) {
  var currentDate = new Date();  
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});


var deviceStatus = mongoose.model('deviceStatus', deviceStatusSchema);


module.exports = deviceStatus;

