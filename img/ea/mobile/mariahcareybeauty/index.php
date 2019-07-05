<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Mariah Carey Dreams | Mariah Carey Beauty</title>

	<script type="text/javascript" src="_js/mariah.js"></script>

    <link href="_css/reset.css" rel="stylesheet" type="text/css" />
    <link href="_css/mariah.css" rel="stylesheet" type="text/css" />
    <!--[if lte IE 7]>
        <link rel="stylesheet" type="text/css" href="_css/ie7.css" />
    <![endif]-->	

	<? include 'includes/google.inc'; ?>


	<!-- IN-DOC JAVASCRIPT -->
	<script type="text/javascript">

//		<!-- BROWSER SNIFFER -->

//		console.log('window.location.href = ' + window.location.href);
//
////		var thisWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
////		var thisWidth = window.innerWidth;
////		console.log('thisWidth = ' + thisWidth);
//
//		console.log('window.innerWidth = ' + window.innerWidth);
//		console.log('screen.width = ' + screen.width);


		var uagent = navigator.userAgent.toLowerCase();

//		if(/ipad/.test(uagent)) {
//			window.location.href = "tablet_p/index.html"
//		}

		if(/iphone/.test(uagent) || /ipod/.test(uagent)) {

			if(screen.width >= 375) {
				console.log('PING!!! this is the iPhone 6. screen.width = ' + screen.width + '     screen.height = ' + screen.height);
//				window.location.href = "mobile_p/index.html"
				window.location.href = "mobile_375x667/index.html"
			} else {
				console.log('PING!!! this is the iPhone 5s. screen.width = ' + screen.width + '     screen.height = ' + screen.height);
				window.location.href = "mobile_320x568/index.html"
			}


////			window.location.href = "mobile_p/index.html"
////			window.location.href = "mobile_320x568/index.html"
//			window.location.href = "mobile_375x667/index.html"
////			window.location.href = "mobile_redirect.html"

		}


//		<!-- GOOGLE -->
//
//		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//		ga('create', 'UA-62347464-1', 'auto');
//		ga('send', 'pageview');

	</script>




</head>

<body id="home">
<div id="container">
<!-- HEADER *NOTE: "MARIAH" logo part of background.png -->
    <? include 'includes/logoheader.inc'; ?>
<!-- NAVIGATION -->    
    <div id="nav">
<!-- main nav -->    
        <? include 'includes/mainnav.inc'; ?>


<!-- subnav: Dreams Collection -->
       <ul class="navlist" id="nav_sub">
            <li><a href="Dreams/TheFragrance.php" id="s_fragrance"><span>The Fragrance</span></a></li>
            <li><a href="Dreams/TheCollection.php" id="s_collection"><span>The Collection</span></a></li>
            <li><a href="#" id="s_shopnow"><span>Shop Now</span></a></li>
        </ul>    


<!-- subnav: Lollipop Collection -->
<!--
       <ul class="navlist" id="nav_sub">
            <li><a href="LollipopCollection/Ribbon/TheFragrance.php" id="s_lc_ribbon"><span>Ribbon</span></a></li>
            <li><a href="LollipopCollection/Inseparable/TheFragrance.php" id="s_lc_inseparable"><span>Inseparable</span></a></li>
            <li><a href="LollipopCollection/VisionOfLove/TheFragrance.php" id="s_lc_vision"><span>Vision of Love</span></a></li>
            <li><a href="LollipopCollection/NeverForgetYou/TheFragrance.php" id="s_lc_never"><span>Never Forget You</span></a></li>
            <li><a href="LollipopCollection/MineAgain/TheFragrance.php" id="s_lc_mine"><span>Mine Again</span></a></li>
            <li><a href="LollipopCollection/Honey/TheFragrance.php" id="s_lc_honey"><span>Honey</span></a></li>
            <li><a href="LollipopCollection/ThatChick/TheFragrance.php" id="s_lc_thatchick"><span>That Chick</span></a></li>
            <li><a href="LollipopCollection/TheCollection.php" id="s_collection"><span>The Collection</span></a></li>
            <li><a href="#" id="s_shopnow"><span>Shop Now</span></a></li>
        </ul>    
-->

    </div>
<!-- CONTENT BOX BEGINS -->
    <div id="contentbox">
        <div id="content">
<!--  content well begins -->
			<map name="linkmap" id="linkmap">
                <area shape="rect" coords="0,0,350,425" href="Dreams/TheFragrance.php" alt="Mariah Carey Dreams"class="linkArea">
                <area shape="rect" coords="0,425,350,504" href="http://www.kohls.com/product/prd-1265683/mariah-carey-dreams-eau-de-parfum-spray-womens.jsp" target="_blank" alt="Shop Mariah Carey Dreams"class="linkArea">
            </map>
             <a href="Dreams/TheFragrance.php"><img src="_images/dreams/main.jpg" alt="Mariah Carey" width="510" height="504" border="0" /></a><img src="_images/dreams/dreams_main.jpg" alt="Mariah Carey Dreams" width="350" height="504" border="0" usemap="#linkmap" />
<!--  content well ends -->
        </div>
<!-- sign up buttons -->        
        <? include 'includes/signup_btns.inc'; ?>
    </div>
<!-- CONTENT BOX ENDS -->    
<!-- FOOTER -->       
    <? include 'includes/mainfooter.inc'; ?>
</div>
</body>
</html>