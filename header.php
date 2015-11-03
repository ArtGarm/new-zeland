<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,700&subset=cyrillic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=cyrillic' rel='stylesheet' type='text/css'>
	<link rel="shortcut icon" type="image/x-icon" href="images/shipfish.ico">

	<title></title>

	<!--<link rel="stylesheet" href="css/bootstrap.css" media="all" />
	<link rel="stylesheet" href="css/bootstrap-theme.css" media="all" />-->

	<link rel="stylesheet" type="text/css" href="css/style_basic.css" media="all" />

	<link rel="stylesheet" type="text/css" href="css/fonts.css" media="all" />



	<!--<link rel="stylesheet" href="css/tuesdayAnimate.css" media='all' />-->

	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>

	<!-- bootstrap -->

	<!--<script src="js/bootstrap.js" type="text/javascript"></script>-->

	<!-- /bootstrap -->

	<!-- form styler -->

	<link rel="stylesheet" href="css/jquery.formstyler.css" media='all' />
	<script src="js/jquery.formstyler.js" type="text/javascript"></script>

	<!-- /form styler -->

	<script src="js/selectivizr-min.js" type="text/javascript"></script>

	<script src="js/jquery.validate.min.js" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox.css" media="all" />
	<script src="fancybox/jquery.fancybox.js" type="text/javascript"></script>

	<script src="js/modernizr.js" type="text/javascript"></script>
	<script src="js/jquery.watermark.min.js" type="text/javascript"></script>

<!-- mask for inputs -->

	<script src="js/maskInput.js" type="text/javascript"></script>

<!-- /mask for inputs -->

<!-- sliders -->
	<link rel="stylesheet" type="text/css" href="css/slick.css" media="all" />
	<script src="js/slick.js" type="text/javascript"></script>
<!-- sliders -->

<!-- jScrollPane -->
	<link type="text/css" href="css/jquery.jscrollpane.css" rel="stylesheet" media="all" />
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.jscrollpane.min.js"></script>
<!-- jScrollPane -->

<!-- google Maps -->

	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<script>
		var cordX = 55.822389;
		var cordY= 37.647088;
		var googleText = "Москва, Проспект Мира д. 150";
	</script>
	<script src='js/googleMapsScr.js'></script>


<!-- /google Maps -->

<!-- remove Files -->

	<script src="js/radion.js" type="text/javascript"></script>

	<script src="js/artem.js" type="text/javascript"></script>

	<script src="js/roma.js" type="text/javascript"></script>

	<script src="js/nikolay.js" type="text/javascript"></script>

	<!--<script src="js/myalert.js" type="text/javascript"></script>
	<script src="develop/autocssrenew.js" type="text/javascript"></script>-->

<!-- remove Files -->

	<link rel="stylesheet" type="text/css" href="css/artem.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/nikolay.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/roma.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/radion.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/style_main.css" media="all" />

	<link rel="stylesheet" type="text/css" href="css/adaptation_artem.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/adaptation_nikolay.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/adaptation_roma.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/adaptation_radion.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/adaptation.css" media="all" />

	<script src="js/scr.js" type="text/javascript"></script>

	<!--[if lt IE 9]>
		<script>
		document.createElement('header');
		document.createElement('nav');
		document.createElement('section');
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		document.createElement('time');
		</script>
		<script src="js/pie.js" type="text/javascript"></script>
	<![endif]-->

	<!--[if lt IE 8]><script src="js/oldie/warning.js"></script><script>window.onload=function(){e("js/oldie/")}</script><![endif]-->
</head>
<body>
	<?partial('zHiddenBlock');?>
	<header class="header">
		<div class="mbox">
			<div class="header_wrap">
				<div class="header_logo">
					<a href="#">
						<img src="images/logo.png"alt="">
					</a>
				</div>
				<div class="header-nav">
					<div class="header-nav-wrap">
						<nav>
							<ul>
								<li><a href="#"><span>Главная</span></a></li>
								<li><a href="#"><span>О нас </span></a></li>
								<li><a href="#"><span>Услуги</span></a></li>
								<li><a href="#"><span>Проекты</span></a></li>
								<li><a href="#"><span>Новости</span></a></li>
								<li><a href="#"><span>Контакты</span></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="header_leng">
					<div class="header_leng_wrap">
						<ul>
							<li><a href="#"><span>ENG</span></a></li>
							<li class="active"><a href="#"><span>RUS</span></a></li>
						</ul>
					</div>
				</div>
				<div class="header_right">
					<div class="header_tel">
						<div class="header_tel_wrap">
							<div class="header_tel_row moscow">
								<span class="icon"></span>
								<span>Москва:</span>
								<a href="tel:+74950000000"> +7 (495) 000 0000</a>
							</div>
							<div class="header_tel_row kazan">
								<span class="icon"></span>
								<span>Казань:</span>
								<a href="tel:+78430000000">+7 (843) 000 0000</a>
							</div>
							<div class="header_tel_row london">
								<span class="icon"></span>
								<span>Лондон:</span>
								<a href="tel:+4407595939786">+44 (0) 759 593 9786</a>
							</div>
						</div>
					</div>
					<div class="header_button">
						<a href="#"><span>ОН-ЛАЙН ЗАЯВКА</span></a>
						<a href="#"><span>ЗАКАЗАТЬ ЗВОНОК</span></a>
					</div>
				</div>
			</div>
		</div>
	</header>