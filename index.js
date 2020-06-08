//Launching Express Server
const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');
const app = express();
app.use(express.urlencoded());
app.use(express.static('./assets'));
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
//Install EJS and Site View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Importing Router
app.use('/', require('./routes'));


app.listen(port, function(error){
    if(error){
        console.log(`Error in Runnung the Server : ${error}`);
        return;
    }
    console.log(`Server is Running on Port : ${port}`);
});