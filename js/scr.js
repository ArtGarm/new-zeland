var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}


/* input only Number  */
function inputNumber(block) {
	$('input', block).keypress(function(e) {
		if (e.which >= 47 && e.which <= 57 ){}
		else return false;
	});

	$('input', block).keyup(function() {
		$inputNum = $(this);
		if ($inputNum.val == '' || $inputNum.val() == 0) {
			$inputNum.val('');
		}
	});
}


/* u_tabs */
function u_tabs(link, block) {
	$(link).click(function(e) {
		var $currentTab = $(this);
		var tabId = $currentTab.data('utab');

		$(link).removeClass('active');
		$currentTab.addClass('active');

		$(block).hide().removeClass('active');
		$(block+'[data-utab="' + tabId + '"]').show().addClass('active');
		if($(link).is('a')){
			e.preventDefault();
		}
	});
	$(link).eq(0).click();
}

/* scrollUp */
function scrollUp(block,targetBlock) {

	$(block).click(function(e){
		var target = $(targetBlock).offset().top+35;

		$(scroller).animate({scrollTop:target},800);
		return false;

		e.preventDefault();
	});
}


function initScrollpane(){
	$('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}


    if($(window).width()>1024){
        oneHeight($('.oneHeight'));
        oneHeight($('.functional-way-col'));
        //oneHeight($('.specialization-wrap a'));
    }
    else if($(window).width()<1025 && $(window).width()>991){
        oneHeight($('.oneHeight'));
        oneHeight($('.functional-way-col'));
        //oneHeight($('.specialization-wrap a'));
    }
    else if($(window).width()<992 && $(window).width()>767){
        oneHeight($('.oneHeight'));
        oneHeight($('.functional-way-col'));
        //oneHeight($('.specialization-wrap a'));
    }
    else if($(window).width()<768 && $(window).width()>666){
        oneHeight($('.oneHeight'));
        oneHeight($('.functional-way-col'));
        //oneHeight($('.specialization-wrap a'));
    }
    else if($(window).width()<667 && $(window).width()>479){
        oneHeight($('.oneHeight'));
        oneHeight($('.functional-way-col'));
        //oneHeight($('.specialization-wrap a'));
    }
    else if($(window).width()<480){
        oneHeight($('.oneHeight'));
        $('.functional-way-col').removeAttr('style');
        //oneHeight($('.specialization-wrap a'));
    }

    $(window).resize(function(){

        if($(window).width() < 1025 && $(window).width() > 991){
            oneHeight($('.functional-way-col'));
            //oneHeight($('.specialization-wrap a'));
        }
        else if($(window).width() < 992 && $(window).width() > 767){
            oneHeight($('.functional-way-col'));
            //oneHeight($('.specialization-wrap a'));
        }
        else if($(window).width() < 768 && $(window).width() > 666){
            oneHeight($('.functional-way-col'));
            //oneHeight($('.specialization-wrap a'));
        }
        else if($(window).width() < 667 && $(window).width() > 479){
            oneHeight($('.functional-way-col'));
            //oneHeight($('.specialization-wrap a'));
        }
        else if($(window).width() < 480){
            $('.functional-way-col').removeAttr('style');
            //oneHeight($('.specialization-wrap a'));
        }
    });
}


function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.form_row').is('.error')){
                    $(element).closest('.form_row').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    form.submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }
    }
}

function validationCall(form){
 console.log('xfvbg');
  var thisForm = $(form);
  var formSur = thisForm.serialize();
    console.log(formSur);
    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim()!='true') {
                thisForm.trigger("reset");
                popNext();
            }
            else {
               $(this).trigger('reset');
            }

            //popNext();


        }
    });

    function popNext(){
        $(".call-success").css({
                'opacity': '1',
                'z-index': '10000'
                });
        /*$.fancybox.open("#call_success",{
            padding:0,
            fitToView:false,
            wrapCSS:"call-popup",
            autoSize:true,
            afterClose: function(){
                $('form').trigger("reset");
                clearTimeout(timer);
            }

        }); */
        var timer = null;

        timer = setTimeout(function(){
            $('form').trigger("reset");
            $.fancybox.close("#call-popup");
            $(".call-success").css({
                'opacity': '0',
                'z-index': '-1'
                });
        },2000);




    }
}

function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

function parallaxScroll(){

    var scrolled = $(window).scrollTop();
    $('.parallax img').css('top',(0-(scrolled*0.12))+'px');

    $('.parallaxmin img').css('top',(0-(scrolled*0.06))+'px');
}
//
/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();
	$('.footer_placeholder').height($('.footer').height());
    scrollUp($('.specialization-main .top_section_button a'),$('.specialization-main'));

});

$(window).load(function(){


    validate('.callback-form',{submitFunction:validationCall});
    validate('.letter-online-form',{submitFunction:validationCall});
    validate('.letter-online-page',{submitFunction:validationCall});
    inputNumber($('.inputNum'));

    oneHeightItems();

    parallaxScroll();

    $(window).bind('scroll', function(e){
        parallaxScroll();
    });


});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').height());
});






