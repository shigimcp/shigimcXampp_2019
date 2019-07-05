<?
$path_level = (strstr($_SERVER['REQUEST_URI'],'/dev/') ? 0 : substr_count($_SERVER['REQUEST_URI'], '/') - 1 );

$rel_path   = '';
/*$rel_path   = '../../../dev/';*/
/*$rel_path   = '../../../ForReview/MARIAH_CAREY/CR_15507_MARIAHCAREYBEAUTY_WEBSITE_2015/';*/

for ($x=0;$x<$path_level;$x++) {
	$rel_path = '../'.$rel_path;
}

echo "<!-- ".$_SERVER['REQUEST_URI']." -->\r\n";
echo "<!-- ".$rel_path." -->\r\n";

?>
	<ul class="navlist" id="nav_main">
		<li><a href="http://www.mariahcarey.com/" id="n_home"><span>Home</span></a></li>
		<li><a href="<?=$rel_path?>Dreams.php" id="n_dreams"><span>Mariah Carey Dreams</span></a></li>
		<!--<li><a href="<?=$rel_path?>LollipopCollection.php" id="n_lollipop"><span>Lollipop Collection</span></a></li>-->
		<!--<li><a href="<?=$rel_path?>Forever.php" id="n_forever"><span>Forever</span></a></li>-->
		<li><a href="<?=$rel_path?>LusciousPink.php" id="n_luscious"><span>Luscious Pink</span></a></li>
		<!--<li><a href="<?=$rel_path?>UltraPink.php" id="n_ultra"><span>Ultra Pink</span></a></li>-->
		<!--<li><a href="<?=$rel_path?>M.php" id="n_mbrand"><span>M</span></a></li>-->
		<li><a href="http://www.kohls.com/search.jsp;jsessionid=RpQhRhvYhyyGv11nzbXTSS4WR7KL5PGNQLJTMr2kQn9TQzQjLBN9!-141396125!-1748279387?bmForm=endeca_search&bmFormID=jTadDUS&bmUID=jTadDUT&bmIsForm=true&bmPrevTemplate=%2Fupgrade%2Fwebstore%2Fhome.jsp&bmText=search&search=mariah+carey&bmSubmit=submit-search&submit-search=Search&bmHidden=FOLDER%3C%3Efolder_id&FOLDER%3C%3Efolder_id=2534374762326345" id="n_shop" target="_blank"><span>Shop Mariah Carey Fragrances</span></a></li>
	</ul>
