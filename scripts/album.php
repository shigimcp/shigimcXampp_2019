<?php

//	phpinfo();


	// echo "echo PING! album.php triggered!\n";
	// console.log('console PING! album.php triggered!');

	require 'connect.php';

	$albumArray = array();

	$queryResultAlbum = mysqli_query($con,"
		SELECT * 
		FROM album 
	");


	while($row = mysqli_fetch_array($queryResultAlbum)) {

		// echo "echo PING! the WHILE loop of album.php triggered! \n";
		// echo "echo PING! the WHILE loop of album.php triggered! " . $row['employer'] . "\n";
		// echo "echo PING! the WHILE loop of album.php triggered! " . $row['info'] . "\n";

		$albumArray[] = array (
			'album_index'=>$row['album_index'], 
			'album_id'=>$row['album_id'], 
			'employer'=>$row['employer'], 
			'title'=>$row['title'], 
			'date_start'=>$row['date_start'], 
			'date_end'=>$row['date_end'], 
			'info'=>$row['info'], 
			'logopath'=>$row['logopath'], 
			'slpath'=>$row['slpath'], 
			'thpath'=>$row['thpath'], 
			'flpath'=>$row['flpath'],
			'flpath_stage'=>$row['flpath_stage']
		);
	}


	$encoded = json_encode($albumArray);			// encode array $json to JSON string

	die($encoded);									// send response back to java and end script execution

	// echo "encoded = " . $encoded . "\n";
	// echo "albumArray = " . $albumArray . "\n";

	mysqli_close($con);
?>