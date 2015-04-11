var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/security');

var user = require('./security_User_Schema');

var newUser = user({
  username: 'sysadmin',
  password: 'sysadmin'
});


newUser.save(function(err, data) {
  if (err) throw err;

});


console.log('Completed!');
