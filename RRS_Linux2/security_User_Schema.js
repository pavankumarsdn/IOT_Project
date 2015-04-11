
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for live data from Device
var userSchema = new Schema({
  username: String,
  password: String,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
userSchema.pre('save', function(next) {
  var currentDate = new Date();  
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});


var user = mongoose.model('user', userSchema);

module.exports = user;

