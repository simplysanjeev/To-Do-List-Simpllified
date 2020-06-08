const Task = require('../models/task');
let color = {
                    'Choose a category':'transparent',
                    'None' : 'transparent',
                    'Personal' : 'tomato',
                    'Work' : 'orange',
                    'School' : 'violet',
                    'Cleaning' : 'slateblue',
                    'Other' : 'dodgerblue'
            };
let month =['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

module.exports.home = function (request, response){
    Task.find({}, function(error, taskList){
        if(error){
            console.log('Error in fetching from Database');
            return;
        }
        return response.render('home', {title : 'Home', task_list : taskList, color_list:color});
    });
    
}

module.exports.addTask = function(request, response){
    let taskDetail = request.body;
    let task = {}
    task["taskCompleteStatus"] = "false";
    task["description"] = taskDetail["input-description"];
    task["category"] = taskDetail["category"];
    let date = taskDetail["input-due-date"];
    date = date.split('-');
    task["date"] =  month[parseInt(date[1]) - 1]+" "+date[2]+", "+date[0];
    Task.create(task, function(error, newTask){
        if(error){
            console.log('Error while adding the Task');
            return;
        }
        return response.redirect('back');
    });
}

module.exports.deleteTask = function(request, response){
    if(Object.keys(request.query).length === 0){
        return response.redirect('back');
    }
    let idArray =  request.query.id.split(',');
    for(let id of idArray){
        Task.findByIdAndDelete(id, function(error){
            if(error){
                console.log('Error in deleting the task');
                return;
            }
        });
    }
    return response.redirect('back');
}

module.exports.markTask = function(request, response){
    let id = request.query.id;
    Task.findById({"_id" : id}, function(error, task){
        if(task.taskCompleteStatus == 'true'){
            Task.findOneAndUpdate({"_id" : id}, {'taskCompleteStatus' : 'false'}, function(error, result){
                if(error){
                    console.log('Error in updating the document');
                    return;
                }
                console.log('Document is updated successfully');
            });
        }else{
            Task.findOneAndUpdate({"_id" : id}, {'taskCompleteStatus' : 'true'}, function(error, result){
                if(error){
                    console.log('Error in updating the document');
                    return;
                }
                console.log('Document is updated successfully');
            });
        }
    });
    //TODO render the page
    response.redirect('back');
}