{
    let url = "/delete-task";
    let deleteTaskArray = [];
    let listItems = $('.list-item');
    initialize();
    for(let item of listItems){
        $(item).click(function(event){
            let marked = $(item).attr('data-task-completed');
            if(marked == "true"){
                $(item).find('.description-container').css({'text-decoration' : 'none'});
                $(item).find('.due-date-container').css({'text-decoration' : 'none'});
                $(item).find('.check-box').css({'border':'2px solid #d4d3d3'});
                $(item).find('.check-box i').css({'color' : 'transparent'});
                
                let index = deleteTaskArray.indexOf($(item).attr('id'));
                if(index != -1){
                    deleteTaskArray.splice(index, 1);
                }
                $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
                $(item).attr('data-task-completed', 'false');
            }else if(marked == "false"){
                $(item).find('.description-container').css({'text-decoration' : 'line-through'});
                $(item).find('.due-date-container').css({'text-decoration' : 'line-through'});
                $(item).find('.check-box').css({'border':'transparent'});
                $(item).find('.check-box i').css({'color' : 'greenyellow'});
                deleteTaskArray.push($(item).attr('id'));
                $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
                $(item).attr('data-task-completed', 'true');
            }

        });
    }    
    function initialize(){
    for(let item of listItems){
            let marked = $(item).attr('data-task-completed');
            if(marked == "false"){
                console.log('value of attrbute is true');
                $(item).find('.description-container').css({'text-decoration' : 'none'});
                $(item).find('.due-date-container').css({'text-decoration' : 'none'});
                $(item).find('.check-box').css({'border':'2px solid #d4d3d3'});
                $(item).find('.check-box i').css({'color' : 'transparent'});
            }else if(marked == "true"){
                console.log('value of attribute is false');
                $(item).find('.description-container').css({'text-decoration' : 'line-through'});
                $(item).find('.due-date-container').css({'text-decoration' : 'line-through'});
                $(item).find('.check-box').css({'border':'transparent'});
                $(item).find('.check-box i').css({'color' : 'greenyellow'});
                deleteTaskArray.push($(item).attr('id'));
            }
    }    
                    
    if(deleteTaskArray.length != 0 ){
        $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
    }
    }            
}