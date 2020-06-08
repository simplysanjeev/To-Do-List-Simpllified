{
    let url = "/delete-task";
    let deleteTaskArray = [];
    let listItems = $('.list-item');
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
                console.log(deleteTaskArray.toString());
                $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
                $(item).attr('data-task-completed', "false");
                event.stopImmediatePropagation(); 
                event.preventDefault();
            }else{
                $(item).find('.description-container').css({'text-decoration' : 'line-through'});
                $(item).find('.due-date-container').css({'text-decoration' : 'line-through'});
                $(item).find('.check-box').css({'border':'transparent'});
                $(item).find('.check-box i').css({'color' : 'greenyellow'});
                
                deleteTaskArray.push($(item).attr('id'));
                console.log(deleteTaskArray.toString());
                console.log($('#delete-task').attr('href'));
                $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
                $(item).attr('data-task-completed', "true");
                event.stopImmediatePropagation(); 
                event.preventDefault();
            }
            return false;
        });
    }  
    // for(let item of listItems){
    //     $(item).click(function(event){
    //         let lineThrough = $(item).find('.description-container').css('text-decoration').split(" ");
    //         if(lineThrough[0] == "line-through"){
    //             $(item).find('.description-container').css({'text-decoration' : 'none'});
    //             $(item).find('.due-date-container').css({'text-decoration' : 'none'});
    //             $(item).find('.check-box').css({'border':'2px solid #d4d3d3'});
    //             $(item).find('.check-box i').css({'color' : 'transparent'});
                
    //             let index = deleteTaskArray.indexOf($(item).attr('id'));
    //             if(index != -1){
    //                 deleteTaskArray.splice(index, 1);
    //             }
    //             console.log(deleteTaskArray.toString());
    //             $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
    //             event.stopImmediatePropagation(); 
    //             event.preventDefault();
    //         }else if(lineThrough[0] == "none"){
    //             $(item).find('.description-container').css({'text-decoration' : 'line-through'});
    //             $(item).find('.due-date-container').css({'text-decoration' : 'line-through'});
    //             $(item).find('.check-box').css({'border':'transparent'});
    //             $(item).find('.check-box i').css({'color' : 'greenyellow'});
                
    //             deleteTaskArray.push($(item).attr('id'));
    //             console.log(deleteTaskArray.toString());
    //             console.log($('#delete-task').attr('href'));
    //             $('#delete-task').attr('href', url+"?id="+deleteTaskArray.toString());
    //             event.stopImmediatePropagation(); 
    //             event.preventDefault();
    //         }
    //         return false;
    //     });
    // }                   
}