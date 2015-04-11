var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repository');

var deviceData = require('./repository_DeviceData_Schema');

var newDeviceData = deviceData({
  sensor_name: '',
  sensor_id: '',
  data_value: '',
  unit: ''
});


newDeviceData.save(function(err, data) {
  if (err) throw err;

});


var deviceStatus = require('./repository_DeviceStatus_Schema');

var newDeviceStatus = deviceStatus({
  sensor_name: '',
  sensor_id: '',
  IsActive: false
});


newDeviceStatus.save(function(err, data) {
  if (err) throw err;

});


console.log('Completed!');
