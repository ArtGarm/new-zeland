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
            <? if($act == 'about-company' || $act == 'about-price' || $act == 'about-managment' || $act == 'news' ){?>
                <img src="images/title-about.png" >
            <? } ?>
            <? if($act == "services"){ ?>
                <img src="images/title-services.png" alt="" />
            <? } ?>
            <? if($act == "projects" || $act == 'project'){ ?>
                <img src="images/title-project.png" alt="" />
            <? } ?>
            <? if($act == "services-strategy"){ ?>
                <img src="images/title-services-strat.png" alt="" />
            <? } ?>
            <? if($act == "services-operation"){ ?>
                <img src="images/title-services-oper.png" alt="" />
            <? } ?>
            <? if($act == "services-international"){ ?>
                <img src="images/title-services-inter.png" alt="" />
            <? } ?>
            <? if($act == "services-econom"){ ?>
                <img src="images/title-services-eco.png" alt="" />
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
                <? if($act == "services-strategy"){ ?>
                    Стратегический консалтинг
                <? } ?>
                <? if($act == "services-operation"){ ?>
                    Операционный консалтинг
                <? } ?>
                <? if($act == "services-international"){ ?>
                    Международный бизнес
                <? } ?>
                <? if($act == "services-econom"){ ?>
                    Экономические иследования
                <? } ?>
                <? if($act == 'projects' || $act == 'project'){?>
                    Проекты
                <? } ?>
                <? if($act == 'projects' || $act == 'news'){?>
                    новости
                <? } ?>
             </span>
        </div>
    </div>
</div>