<?php

//	echo "PING! products.php triggered!";
//	console.log('PING! products.php triggered!');

	require 'connect.php';
	require 'JSON.php';

//	require '../../dev_click/php/connect.php';
//	require '../../dev_click/php/JSON.php';

    $json = new Services_JSON();    // create a new instance of Services_JSON class

//	$thisProd = $_POST['product'];
//	$thisShade = $_POST['shade'];
	$prodArray = array();

//	echo '$thisProd = ' + $thisProd + '     $thisShade = ' + $thisShade;
//	echo '$thisProd';
//	echo '$thisShade';
//	echo $thisProd;
//	echo $thisShade;
//	print_r($prodArray);

//
//	$queryProdResult = mysqli_query($con,"
//		SELECT * 
//		FROM products 
//		WHERE product='$thisProd' AND shade=$thisShade
//	");


	$queryProdResult = mysqli_query($con,"
		SELECT * 
		FROM products 
	");


	while($row = mysqli_fetch_array($queryProdResult)) {
//		echo "PING! the WHILE loop of looks.php triggered!   This appears in the ALERT WINDOW because I alert-ed DATA in the dbtest.js.   ";

//		$prodArray[] = array (
//			$row['prod_index'], 
//			'product'=>$row['product'], 
//			$row['shade'], 
//			$row['cat1'], 
//			$row['cat2'], 
//			$row['cat3'], 
//			$row['link'], 
//			$row['image'], 
//			$row['descr1'], 
//			$row['descr2'], 
//			$row['rating'], 
//			$row['notes']
//		);

		$prodArray[] = array (
//			'prod_index'=>$row['prod_index'], 
			'product'=>$row['product'], 
			'shade'=>$row['shade'], 
			'cat1'=>$row['cat1'], 
			'cat2'=>$row['cat2'], 
			'cat3'=>$row['cat3'], 
//			'link'=>$row['link'], 
			'image'=>$row['image'], 
			'descr1'=>$row['descr1'], 
			'descr2'=>$row['descr2'], 
//			'rating'=>$row['rating'], 
//			'notes'=>$row['notes']
		);

	}



	$encoded = $json->encode($prodArray);    // encode array $json to JSON string
//	die($encoded);  // send response back to java and end script execution
	echo $encoded;

	mysqli_close($con);
?>