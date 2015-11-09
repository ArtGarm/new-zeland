function initFancyBox () {
    $('.fancybox').fancybox({
        fitToView: true,
        autoSize:true,
        padding:0
    });
}

function onMyDuckReady (){
    $('select').styler({
        onSelectClosed: function() {

            var sel = $('select[name="select-time"]').find('option[value="time-choose"]').prop("selected");
            if (sel){
                $(".add-row-for-time").css('display', 'block');
                $(".addfild").attr('required', '');
            }
            else{
                $(".add-row-for-time").css('display', 'none');
                $(".addfild").removeAttr('required');
            }
        }
    });


    initFancyBox ();

    $('.form-button-close').click( function() {
       $.fancybox.close("#call-popup");
    })

    $('.tread-box').click(function(){

        $('.tread-box').removeClass('tread-active');
        $('.image-box').removeClass('active-img');
        $('.context-box').removeClass('context-active');
        $('.box-line').removeClass('box-line-active');

        var ddd = $(this).index();

        $('.tread-box').eq(ddd).addClass('tread-active');
        $('.image-box').eq(ddd).addClass('active-img');
        $('.context-box').eq(ddd+1).addClass('context-active');
        $('.box-line').eq(ddd).addClass('box-line-active');

    });

}

$(document).ready(function() {
   onMyDuckReady ();
});