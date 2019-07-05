<?php

//	phpinfo();


//	echo "echo PING! image.php triggered!";
//	console.log('console PING! image.php triggered!');

	require 'connect.php';

	$imageArray = array();

	$queryResultImage = mysqli_query($con,"
		SELECT * 
		FROM image 
	");


	while($row = mysqli_fetch_array($queryResultImage)) {

		// echo "echo PING! the WHILE loop of image.php triggered!";

		$imageArray[] = array (
			'album_index'=>$row['album_index'], 
			'album_id'=>$row['album_id'], 
			'image_index'=>$row['image_index'], 
			'src'=>$row['src'], 
			'caption'=>$row['caption'], 
			'format'=>$row['format'], 
			'format_src'=>$row['format_src'], 
			'link'=>$row['link'], 
			'cta'=>$row['cta'], 
			'alert'=>$row['alert'], 
			'mWidth'=>$row['mWidth'], 
			'mHeight'=>$row['mHeight']
		);

	}


	$encoded = json_encode($imageArray);			// encode array $json to JSON string

	die($encoded);									// send response back to java and end script execution

	// echo "$encoded = " + $encoded;
	// echo "$imageArray = " + $imageArray;

	mysqli_close($con);
?>