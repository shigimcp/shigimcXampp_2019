<?php

//	echo "PING! looks.php triggered!";
//	console.log('PING! looks.php triggered!');

	require 'connect.php';
	require 'JSON.php';

    $json = new Services_JSON();    // create a new instance of Services_JSON class

//	$thisLevel = $_POST['level'];
//	$thisLipShade = $_POST['lip_shade'];
//	$thisLook = $_POST['look_type'];
	$lookArray = array();
//	$prodArray = array();
//	$preloadArray = array();

//	echo $thisLevel;
//	echo $thisLipShade;
//	echo $thisLook;
//	print_r($lookArray);


//	$queryResult = mysqli_query($con,"
//		SELECT * 
//		FROM lookfinder 
//		WHERE level='$thisLevel' AND lip_shade='$thisLipShade' AND look_type='$thisLook'
//	");

	$queryResult = mysqli_query($con,"
		SELECT * 
		FROM lookfinder 
	");


	while($row = mysqli_fetch_array($queryResult)) {
//		echo "PING! the WHILE loop of looks.php triggered!   This appears in the ALERT WINDOW because I alert-ed DATA in the dbtest.js.   ";

//		$lookArray[] = array (
//			$row['look_index'], 
//			$row['level'], 
//			$row['look_type'], 
//			$row['lip_shade'], 
//			'look_num'=>$row['look_num'], 
//			$row['eye_base'], 
//			$row['eye_base_shade'], 
//			$row['eye_contour'], 
//			$row['eye_contour_shade'], 
//			$row['eye_hilite'], 
//			$row['eye_hilite_shade'], 
//			$row['eye_btm'], 
//			$row['eye_btm_shade'], 
//			$row['eye_liner'], 
//			$row['eye_liner_shade'], 
//			$row['eye_mascara'], 
//			$row['eye_mascara_shade'], 
//			$row['lip_gloss'], 
//			$row['lip_gloss_shade'], 
//			$row['lip_stick'], 
//			$row['lip_stick_shade'], 
//			$row['lip_liner'], 
//			$row['lip_liner_shade'], 
//			$row['base_makeup'], 
//			$row['base_makeup_shade'], 
//			$row['base_blush_pwdr'], 
//			$row['base_blush_pwdr_shade'], 
//			$row['base_blush_crm'], 
//			$row['base_blush_crm_shade'], 
//			$row['base_bronzer'], 
//			$row['base_bronzer_shade'], 
//			$row['base_concealer'], 
//			$row['base_concealer_shade'], 
//			$row['base_powder'],
//			$row['base_powder_shade']
//		);


		$lookArray[] = array (
			'look_index'=>$row['look_index'], 
			'level'=>$row['level'], 
			'look_type'=>$row['look_type'], 
			'lip_shade'=>$row['lip_shade'], 
			'look_num'=>$row['look_num'], 
			'eye_base'=>$row['eye_base'], 
			'eye_base_shade'=>$row['eye_base_shade'], 
			'eye_contour'=>$row['eye_contour'], 
			'eye_contour_shade'=>$row['eye_contour_shade'], 
			'eye_hilite'=>$row['eye_hilite'], 
			'eye_hilite_shade'=>$row['eye_hilite_shade'], 
			'eye_btm'=>$row['eye_btm'], 
			'eye_btm_shade'=>$row['eye_btm_shade'], 
			'eye_liner'=>$row['eye_liner'], 
			'eye_liner_shade'=>$row['eye_liner_shade'], 
			'eye_mascara'=>$row['eye_mascara'], 
			'eye_mascara_shade'=>$row['eye_mascara_shade'], 
			'lip_gloss'=>$row['lip_gloss'], 
			'lip_gloss_shade'=>$row['lip_gloss_shade'], 
			'lip_stick'=>$row['lip_stick'], 
			'lip_stick_shade'=>$row['lip_stick_shade'], 
			'lip_liner'=>$row['lip_liner'], 
			'lip_liner_shade'=>$row['lip_liner_shade'], 
			'base_makeup'=>$row['base_makeup'], 
			'base_makeup_shade'=>$row['base_makeup_shade'], 
			'base_blush_pwdr'=>$row['base_blush_pwdr'], 
			'base_blush_pwdr_shade'=>$row['base_blush_pwdr_shade'], 
			'base_blush_crm'=>$row['base_blush_crm'], 
			'base_blush_crm_shade'=>$row['base_blush_crm_shade'], 
			'base_bronzer'=>$row['base_bronzer'], 
			'base_bronzer_shade'=>$row['base_bronzer_shade'], 
			'base_concealer'=>$row['base_concealer'], 
			'base_concealer_shade'=>$row['base_concealer_shade'], 
			'base_powder'=>$row['base_powder'],
			'base_powder_shade'=>$row['base_powder_shade']
		);

//		$lookArray[] = array (
//			'look_num'=>$row['look_num'], array (
//				'look_index'=>$row['look_index'], 
//				'level'=>$row['level'], 
//				'look_type'=>$row['look_type'], 
//				'lip_shade'=>$row['lip_shade'], 
//				'eye_base'=>$row['eye_base'], 
//				'eye_base_shade'=>$row['eye_base_shade'], 
//				'eye_contour'=>$row['eye_contour'], 
//				'eye_contour_shade'=>$row['eye_contour_shade'], 
//				'eye_hilite'=>$row['eye_hilite'], 
//				'eye_hilite_shade'=>$row['eye_hilite_shade'], 
//				'eye_btm'=>$row['eye_btm'], 
//				'eye_btm_shade'=>$row['eye_btm_shade'], 
//				'eye_liner'=>$row['eye_liner'], 
//				'eye_liner_shade'=>$row['eye_liner_shade'], 
//				'eye_mascara'=>$row['eye_mascara'], 
//				'eye_mascara_shade'=>$row['eye_mascara_shade'], 
//				'lip_gloss'=>$row['lip_gloss'], 
//				'lip_gloss_shade'=>$row['lip_gloss_shade'], 
//				'lip_stick'=>$row['lip_stick'], 
//				'lip_stick_shade'=>$row['lip_stick_shade'], 
//				'lip_liner'=>$row['lip_liner'], 
//				'lip_liner_shade'=>$row['lip_liner_shade'], 
//				'base_makeup'=>$row['base_makeup'], 
//				'base_makeup_shade'=>$row['base_makeup_shade'], 
//				'base_blush_pwdr'=>$row['base_blush_pwdr'], 
//				'base_blush_pwdr_shade'=>$row['base_blush_pwdr_shade'], 
//				'base_blush_crm'=>$row['base_blush_crm'], 
//				'base_blush_crm_shade'=>$row['base_blush_crm_shade'], 
//				'base_bronzer'=>$row['base_bronzer'], 
//				'base_bronzer_shade'=>$row['base_bronzer_shade'], 
//				'base_concealer'=>$row['base_concealer'], 
//				'base_concealer_shade'=>$row['base_concealer_shade'], 
//				'base_powder'=>$row['base_powder'],
//				'base_powder_shade'=>$row['base_powder_shade']
//			)
//		);


	}



	$encoded = $json->encode($lookArray);	// encode array $json to JSON string
	die($encoded);						// send response back to java and end script execution

	echo "$encoded = " + $encoded;
	echo "$lookArray = " + $lookArray;

	mysqli_close($con);
?>