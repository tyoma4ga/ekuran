$(function(){
    $('.user_cabinet').click(function(e){
        e.preventDefault();
        $('.modal_wrapper').fadeIn(300);
        $('.modal_window').animate({
            display: 'block',
            'margin-top': $(window).scrollTop()+200,
        },300);
    })
});

function openModal(){

}

function closeModal(){
    $('.modal_window').animate({
        'margin-top': -500
    },300);
    $('.modal_wrapper').fadeOut(300);
}