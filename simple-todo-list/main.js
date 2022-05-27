$(document).ready(function () {
$('input').keypress(function(e) {
    if(e.keyCode == 13) {
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li>'+todoText+'<span><i class="fa fa-trash"></i></span></li>');
    }
});
$('ul').on('click', "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
    /*Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event. */
});
$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
});
});
