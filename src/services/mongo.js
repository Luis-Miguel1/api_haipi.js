const mongoose = require('mongoose');
//connect to Mongo DB
mongoose.connect('mongodb://localhost:27017/ecomerce-API', {useNewUrlParser: true});
var db = mongoose.connection;

//check connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log(' we are connect with mongo Luís!')
});