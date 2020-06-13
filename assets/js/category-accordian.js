//Javascript to create Category Accordian [i.e list of category]
(function(){
    //function to add Click Event To Category List Items
    let addingClickEventToCategoryListItem = function(){
        let accordianList = $('.accordian__item');
        for(let item of accordianList){
            $(item).click(function(){
                $('.accordian__display').val($(this).find('label').text());
                $('.accordian').css({display:'none'});
            });
        }
    }
    //function to display And Hide Category List
    let displayAndHideCategoryList = function(){
        $('.accordian__display__container').click(function(){
            if($('.accordian').css('display') == 'none'){
                $('.accordian').css({display:'block'});
            }else{
                $('.accordian').css({display:'none'});
            }
        });
    }

    let intialiseCategoryAccodian = function(){
        addingClickEventToCategoryListItem();
        displayAndHideCategoryList();
    }
    intialiseCategoryAccodian();
})();