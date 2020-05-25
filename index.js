const express = require('express');
const port = 8000;
const app = express();

// Use express Router
app.use('/', require('./routes/index.js'));

// Setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(error){
    if(error){
        console.log(`Error in processing the request : ${error}`);
        return ; 
    }
    console.log(`Server is running on port : ${port}`);
});