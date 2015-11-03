function showSecondLevel(){
    $('.header-nav-wrap ul li').hover(
        function() {
            if($(window).width()>1024){
                $(this).children(".next").stop().slideDown(300);
            }
        },
        function() {
            if($(window).width()>1024){
                $(this).children(".next").stop().slideUp(300);
            }
        }
    );

    $('.header-nav-wrap>nav>ul>li>.next>li').each(function() {
        if($(this).find('.next').length>0){
            $(this).addClass('arrow-next');
        }
    });
};
function showSecondLevelDevices(){

    $('.sendwich-icon').click(function(){
        if($(this).is('.active')){
            $(this).removeClass('active');
            $('.header-nav').slideUp(300);
        }
        else{
            $(this).addClass('active');
            $('.header-nav').slideDown(300);
        }
    });

    // $(document).on('click', function(e){

    //     if($(window).width() < 1025){
    //         var container = $(".header-bottom-nav>ul");

    //         if (container.has(e.target).length === 0 || $(e.target).is('li.active')){

    //             $('.header-bottom-nav li.active').removeClass('active');
    //             container.find('.second-level').slideUp(300);
    //         }
    //         else if($(e.target).is('li.second-level-wrap')){
    //             var item = $(e.target);
    //             if(!item.is('.active')){
    //                 $('.header-bottom-nav li.active').removeClass('active');
    //                 item.addClass('active');
    //                 $('.header-bottom-nav li:not(.active) .second-level').slideUp(300);
    //                 item.find('.second-level').slideDown(300);
    //             }

    //         }

    //     }
    // });

    $(window).resize(function(){
        if($(window).width() > 1025){
            $('.header-bottom, .second-level').removeAttr('style');
        }

    });
}
jQuery(document).ready(function($) {
    showSecondLevel();
    showSecondLevelDevices();
});