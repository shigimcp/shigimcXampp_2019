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
<h1 id="header"><a href="<?=$rel_path?>index.php"><span>MARIAH</span></a></h1>