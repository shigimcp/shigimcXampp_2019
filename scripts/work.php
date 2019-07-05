<?php 

//	phpinfo();

	$files_mimi = glob("../img/mimi/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_ea = glob("../img/ea/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_ax = glob("../img/ax/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_hearst = glob("../img/hearst/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_ddb = glob("../img/ddbstudio8/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_mrm = glob("../img/mrm/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_heeb = glob("../img/heeb/sl/*.{jpg,gif,png}", GLOB_BRACE);
	$files_hb = glob("../img/hb/sl/*.{jpg,gif,png}", GLOB_BRACE);

//	foreach ($files_mimi as $filename) {
//	foreach ($files_ea as $filename) {
//	foreach ($files_ax as $filename) {
//	foreach ($files_hearst as $filename) {
//	foreach ($files_ddb as $filename) {
//	foreach ($files_mrm as $filename) {
//	foreach ($files_heeb as $filename) {
	foreach ($files_hb as $filename) {
		echo basename($filename) . "<br>";
	}
?>

<script type="text/javascript">

	var imageArray_mimi = <?php echo json_encode($files_mimi); ?>;
	var imageArray_ea = <?php echo json_encode($files_ea); ?>;
	var imageArray_ax = <?php echo json_encode($files_ax); ?>;
	var imageArray_hearst = <?php echo json_encode($files_hearst); ?>;
	var imageArray_ddb = <?php echo json_encode($files_ddb); ?>;
	var imageArray_mrm = <?php echo json_encode($files_mrm); ?>;
	var imageArray_heeb = <?php echo json_encode($files_heeb); ?>;
	var imageArray_hb = <?php echo json_encode($files_hb); ?>;

//	for(var i=0; i<imageArray_hb.length; i++){
//		console.log(imageArray_hb[i]);
//	}

</script>
