var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repository');


var sensorD = require('./repository_DeviceStatus_Schema');


sensorD.find({IsActive: true}, function(err, sensors) {
  if (err) throw err;
 
   sensors.forEach(function(sensor){
	console.log(sensor.sensor_name);
	});
 
});