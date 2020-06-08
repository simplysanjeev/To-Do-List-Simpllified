let taskList = [];

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
    return response.render('home', {title : 'Home', task_list : taskList, color_list:color});
}

module.exports.addTask = function(request, response){
    let taskDetail = request.body;
    let task = {}
    task["id"] = new Date().valueOf();
    task["taskCompleteStatus"] = "false";
    task["description"] = taskDetail["input-description"];
    task["category"] = taskDetail["category"];
    let date = taskDetail["input-due-date"];
    date = date.split('-');
    task["date"] =  month[parseInt(date[1]) - 1]+" "+date[2]+", "+date[0];
    taskList.push(task);
    return response.redirect('back');
}

module.exports.deleteTask = function(request, response){
    let idArray =  request.query.id.split(',');
    for(let id of idArray){
        let index = -1;
        for(let i = 0;  i < taskList.length; i++){
            if(id == taskList[i].id){
                index = i;
                break;
            }            
        }
        if(index!=-1){
            taskList.splice(index, 1);
        }
    }
    return response.redirect('back');
}

module.exports.markTask = function(request, response){
    let id = request.query.id;
    //TODO find the object
    for(let i = 0; i < taskList.length; i++){
        if(id == taskList[i].id){
            //TODO update the object
            if(taskList[i]["taskCompleteStatus"] == "false"){
                taskList[i]["taskCompleteStatus"] = "true"; 
            }else{
                taskList[i]["taskCompleteStatus"] = "false"
            }
            break;
        }
    }
    //TODO render the page
    response.status(204).send();
}