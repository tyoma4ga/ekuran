$(function(){
    $('.top_slider ul').bxSlider({
        mode: 'fade',
        controls: false,
        pager: false
    });

    $('#upload_user_photo, #user_photo_wrapper').click(function(e){
        e.preventDefault();
        $(this).closest('form').find('#user_photo').click();
    });

    $('#user_photo_wrapper').change(function(){$('#user_photo').val()});

    $('#user_photo_wrapper').keyup(function(){
        $(this).val('');
        resetFile();
    });

    $('.user_cabinet').click(function(e){
        e.preventDefault();
        openModal();
    })
});

function getFileName(){
    $('#user_photo_wrapper').val($('#user_photo').val());
}

function resetFile(){
    $('#user_photo').val('');
}
