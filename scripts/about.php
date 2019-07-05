<?php

//	phpinfo();


//	echo "echo PING! about.php triggered!";
//	console.log('console PING! about.php triggered!');

	require 'connect.php';

	$aboutArray = array();

	$queryResultabout = mysqli_query($con,"
		SELECT * 
		FROM about 
	");


	while($row = mysqli_fetch_array($queryResultabout)) {

		// echo "echo PING! the WHILE loop of about.php triggered!\n";

		$aboutArray[] = array (
			'about_index'=>$row['about_index'], 
			'brain'=>$row['brain'], 
			'thought'=>$row['thought'], 
			'format'=>$row['format'], 
			'format_src'=>$row['format_src'], 
			'link'=>$row['link'],
			'aWidth'=>$row['aWidth'], 
			'aHeight'=>$row['aHeight']
		);
	}


	$encoded = json_encode($aboutArray);			// encode array $json to JSON string

	die($encoded);									// send response back to java and end script execution

	// echo "$encoded = " + $encoded;
	// echo "$aboutArray = " + $aboutArray;

	mysqli_close($con);
?>