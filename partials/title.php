<?
  if (!isset($_REQUEST['act']) || $_REQUEST['act']==__ROOT__.'/') $act='none';
  else {
    $act=explode('/',$_REQUEST['act']);
    $act=$act[count($act)-1];
  }
?>
<div class="title-wrapp">
    <div class="title-main mbox">
        <div class="title-img">
            <? if($act == 'about-company' || $act == 'about-price' || $act == 'about-managment' ){?>
                <img src="images/title-about.png" >
            <? } ?>
            <? if($act == "services"){ ?>
                <img src="images/title-services.png" alt="" />
            <? } ?>
        </div>
        <div class="title-text cfix">
            <span>
                <? if($act == 'about-company'){?>
                    О компании
                <? } ?>
                <? if($act == 'about-price'){?>
                    Наши ценности
                <? } ?>
                <? if($act == 'about-managment'){?>
                    Руководство
                <? } ?>
                <? if($act == "services"){ ?>
                    Услуги
                <? } ?>
             </span>
        </div>
    </div>
</div>