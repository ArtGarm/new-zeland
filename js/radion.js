function showSecondLevel(){
    $('.header-nav-wrap nav ul li').hover(
        function() {
            if($(window).width()>666){
                $(this).children(".next").stop().slideDown(300);
            }
        },
        function() {
            if($(window).width()>666){
                $(this).children(".next").stop().slideUp(300);
            }
        }
    );

    var tablet = $('.header-nav-wrap>nav>ul>li>.next>li');
        if($(window).width()<1025){
            tablet = $('.header-nav-wrap>nav ul li');
        }
    tablet.each(function() {
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
            $('.header_wrap .header-nav .next').slideUp();
        }
        else{
            $(this).addClass('active');
            $('.header-nav').slideDown(300);
        }
    });
    if($(window).width() < 1025){
        $('.header-nav-wrap>nav>ul:not(.next)>li>a').click(function() {
            $(this).parent().children(".next").stop().slideToggle(300);
        });
        $('.header_wrap .header-nav .next li.arrow-next>a').click(function() {
            $(this).parent().children(".next").stop().slideToggle(300);
        });
        $(document).mouseup(function (e){
            var div = $('.header-nav');
            if (!div.is(e.target) && div.has(e.target).length === 0 && !$('.sendwich-icon').is(e.target) && $('.sendwich-icon').has(e.target).length === 0) {
                $('.sendwich-icon').removeClass('active');
                $('.header-nav').slideUp(300);
                $('.header_wrap .header-nav .next').slideUp();
            }
        });
    }


    $(window).resize(function(){
        if($(window).width() > 1025){
            $('.header-bottom, .second-level').removeAttr('style');
        }

    });
}
$(document).ready(function() {
    showSecondLevel();
    //showSecondLevelDevices();
});