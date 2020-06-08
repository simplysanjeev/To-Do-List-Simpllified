// require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/to_do_list_db');

//require the connection
const db = mongoose.connection;

//error
db.on('error', function(){
    console.log('Error while connecting to mongoose');
});

//up and running message on console
db.once('open', function(){
    console.log('successfully connected to the database');
});