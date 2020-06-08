const mongoose = require('mongoose');

const taskScehma = new mongoose.Schema({
    taskCompleteStatus:{
        type: String
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type: String
    },
    date : {
        type: String
    }
},{
    timestamps : true
});

const Task = mongoose.model('Task', taskScehma);

module.exports = Task;