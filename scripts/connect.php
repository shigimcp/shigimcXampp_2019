<?php
// ========================= CONNECT TO MYSQL DATABASE ========================= 

	// echo "echo PING! connect.php triggered! \n\n";
	// console.log('console PING! connect.php triggered!');
	// echo '<script>console.log("PING! connect.php triggered!")</script>';

//	$con = mysqli_connect("localhost","root","3ukQ02oM#o#m","shigimcpDB");

	// $dbname = 'shigimcpDB_2019';
	$dbname = 'shigimcpDB_2019_02';
	$dbuser = 'root';
	// $dbname = 'shigimcpDB_2019_0719';
	// $dbuser = 'shigimcp';
	$dbpass = 'sh1g1mcp';
	$dbhost = 'localhost';

	$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die("Unable to Connect to '$dbhost'");


//	Check connection
	if (mysqli_connect_errno()) {
		echo "echo PING!!! Failed to connect to MySQL: " . mysqli_connect_error();
		echo "echo Failed to connect to MySQL: " . mysqli_connect_error();
		echo mysqli_connect_error();
	// } else {
	// 	echo "Fetched data successfully! \n\n";		
	}

?>