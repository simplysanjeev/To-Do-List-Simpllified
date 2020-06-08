{
    let accordianList = $('.accordian-item');
    for(let item of accordianList){
        $(item).click(function(){
            $('#accordian-display').val($(this).find('label').text());
            $('.accordian').css({display:'none'});
        });
    }

    $('.accordian-display-container').click(function(){
        if($('.accordian').css('display') == 'none'){
            $('.accordian').css({display:'block'});
        }else{
            $('.accordian').css({display:'none'});
        }
    });
}