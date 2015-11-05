$(document).ready(function(){
  $('#client-slider').slick({
        dots: false,
        slidesToShow: 1,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
  });


  $('.sub-menu-item').click(function(e){

        var index = $(this).index();
        console.log(index);
        $('.bookmark-page').removeClass('its-a-kind-of-magic');
        $('.bookmark-page').eq(index).addClass('its-a-kind-of-magic');
        e.preventDefault();
  });
});