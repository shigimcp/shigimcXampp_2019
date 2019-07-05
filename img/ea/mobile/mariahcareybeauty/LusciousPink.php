<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Luscious Pink  |  Mariah Carey Beauty</title>
	<script type="text/javascript" src="_js/mariah.js"></script>
	<link href="_css/reset.css" rel="stylesheet" type="text/css" />
	<link href="_css/mariah.css" rel="stylesheet" type="text/css" />
	<!--[if lte IE 7]>
		<link rel="stylesheet" type="text/css" href="_css/ie7.css" />
	<![endif]-->
	<? include 'includes/google.inc'; ?>
</head>
<!-- BRAND HOME PAGE TEMPLATE -->
<body id="luscious" class="brand_home">
<div id="container"> 
	<!-- HEADER *NOTE: "MARIAH" logo part of background.png -->
	<? include 'includes/logoheader.inc'; ?>
	<!-- NAVIGATION -->
	<div id="nav"> 
		<!-- main nav -->
		<? include 'includes/mainnav.inc'; ?>
		<!-- subnav: Luscious Pink -->
		<ul class="navlist" id="nav_sub">
			<li><a href="LusciousPink/TheFragrance.php" id="s_fragrance"><span>The Fragrance</span></a></li>
			<li><a href="LusciousPink/TheCollection.php" id="s_collection"><span>The Collection</span></a></li>
			<li><a href="#" id="s_shopnow"><span>Shop Now</span></a></li>
		</ul>
	</div>
	<!-- CONTENT BOX BEGINS -->
	<div id="contentbox">
		<div id="content"> 
			<!--  content well begins --> 
			<map name="linkmap" id="linkmap">
				<area shape="rect" coords="0,0,430,425" href="LusciousPink/TheFragrance.php" alt="Mariah Carey's Luscious Pink" class="linkArea">
				<area shape="rect" coords="0,425,430,504" href="http://www.walmart.com/ip/Mariah-Carey-Luscious-Pink-Eau-de-Parfum-Spray-0.5oz/10974325" target="_blank" alt="Shop Mariah Carey's Luscious Pink" class="linkArea">
			</map>
			<a href="LusciousPink/TheFragrance.php"><img src="_images/mariah_default.jpg" alt="Mariah Carey" width="430" height="504" border="0" /><img src="_images/luscious/luscious_main.jpg" alt="Mariah Carey's Luscious Pink" width="430" height="504" border="0" usemap="#linkmap" /></a> 
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