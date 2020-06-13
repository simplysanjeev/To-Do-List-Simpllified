//Javascript to reset due date
(function(){
    let intializeDueDate = function(){
        let today = new Date().toISOString().substr(0, 10);
        $('#input__due__date').val(today);
    }
    intializeDueDate();
})();