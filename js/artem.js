function initFancyBox () {
    $('.fancybox').fancybox({
        fitToView: true,
        autoSize:true
    });
}

$(document).ready(function() {
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

});