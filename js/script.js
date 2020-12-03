$(document).ready(function(){
    $('.open_menu_mobile,.exit').click(function(event){
        $('.open_menu_mobile,.menu_mobile').toggleClass('active');
    });
    $('a[href="#onlinerecord"]').click(function(event){
        $('.exit').addClass('active');
    });
    $('.exit').click(function(event){
        $('.exit').removeClass('active');
    });
    $('#arrow-right').click(function(event){
        $('.onlrec').toggleClass('active');
    }); 
    var $arrow_nav = $('.arrow_nav');
    $(window).on("scroll",function(){
        if ($(window).scrollTop() >=600){
            $arrow_nav.addClass('active');
        }else{
            $arrow_nav.removeClass('active');
        }
    });
});
