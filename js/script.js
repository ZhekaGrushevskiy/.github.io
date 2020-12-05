$(document).ready(function(){
    $('.open_menu_mobile,.exit').click(function(event){
        $('.open_menu_mobile,.menu_mobile').toggleClass('active');
    });
    $('.openexit').click(function(event){
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
        if ($(window).scrollTop() > 85){
            $arrow_nav.addClass('active');
        }else{
            $arrow_nav.removeClass('active');
        }     
    });
    var lastScrollTop = 0;
    var $header = $('#header');
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if(st>lastScrollTop){
            $header.addClass('active');
        }else{
            $header.removeClass('active');
        }
        lastScrollTop = st;
    });
});

