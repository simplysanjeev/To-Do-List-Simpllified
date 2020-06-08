const mongoose = require('mongoose');

const taskScehma = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    category : {
        type: String
    },
    date : {
        type: Date
    }
});

const Task = mongoose.model('Task', taskScehma);

module.exports = Task;