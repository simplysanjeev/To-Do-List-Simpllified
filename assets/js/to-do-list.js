//Javascript to mark completed task and unmark completed task
(function(){
    let url = "/delete-task";
    let deleteTaskArray = [];
    let listItems = $('.list__item');
    //Function to mark completed task
    let markTask = function(item){
        $(item).find('.description__container').css({'text-decoration' : 'line-through'});
        $(item).find('.due__date__container').css({'text-decoration' : 'line-through'});
        $(item).find('.check__box').css({'border':'transparent'});
        $(item).find('.check__box i').css({'color' : 'greenyellow'});
    }
    //Function to unmark completed task
    let unmarkTask = function(item){
        $(item).find('.description__container').css({'text-decoration' : 'none'});
        $(item).find('.due__date__container').css({'text-decoration' : 'none'});
        $(item).find('.check__box').css({'border':'2px solid #d4d3d3'});
        $(item).find('.check__box i').css({'color' : 'transparent'});  
    }
    //Function to mark [completed task] and unmark [uncompleted task]
    let markAndUnmarkTasks = function (){
        for(let item of listItems){
            let marked = $(item).attr('data-task-completed');
            if(marked == "true"){
                markTask(item);
                deleteTaskArray.push($(item).attr('id'));
            }else{
                unmarkTask(item);
            }
        }    
        if(deleteTaskArray.length != 0 ){
            $('.delete__task').attr('href', url+"?id="+deleteTaskArray.toString());
        }
    }
    //Function to to add task in Completed Task
    let addToDeleteList = function(){
        for(let item of listItems){
            $(item).click(function(event){
                let marked = $(item).attr('data-task-completed');
                if(marked == "true"){
                    unmarkTask(item);
                    let index = deleteTaskArray.indexOf($(item).attr('id'));
                    if(index != -1){
                        deleteTaskArray.splice(index, 1);
                    }
                    $('#delete__task').attr('href', url+"?id="+deleteTaskArray.toString());
                    $(item).attr('data-task-completed', 'false');
                }else{
                    markTask(item);
                    deleteTaskArray.push($(item).attr('id'));
                    $('.delete__task').attr('href', url+"?id="+deleteTaskArray.toString());
                    $(item).attr('data-task-completed', 'true');
                }
    
            });
        }    
    }
    let todoListController = function(){
        markAndUnmarkTasks();
        addToDeleteList();
    }
    todoListController();
})();