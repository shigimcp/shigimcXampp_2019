<?php
// ========================= CONNECT TO MYSQL DATABASE ========================= 

////	echo "PING! connect.php triggered!";
////	console.log('PING! connect.php triggered!');
//
////	$con = mysqli_connect("localhost","root","qcDtZcW6","reddoorspa");
////	$con = mysqli_connect("localhost","root","td6YtHXp","reddoorspa");
//	$con = mysqli_connect("localhost","shigimcpMySql","sh1g1mcpMySql","reddoorspa");
//
////	 Check connection
//	if (mysqli_connect_errno()) {
////		echo "PING!!! Failed to connect to MySQL: " . mysqli_connect_error();
//		echo "Failed to connect to MySQL: " . mysqli_connect_error();
//	}



// ========================= CONNECT TO MYSQL DATABASE ========================= 

//	echo "echo PING! connect.php triggered! \n\n";
//	console.log('console PING! connect.php triggered!');

//	$con = mysqli_connect("localhost","root","3ukQ02oM#o#m","shigimcpDB");

	$dbhost = 'localhost';
	$dbuser = 'shigimcpMySql';
	$dbpass = 'sh1g1mcpMySql';
	$dbname = 'reddoorspa';

	$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die("Unable to Connect to '$dbhost'");

//	Check connection
	if (mysqli_connect_errno()) {
//		echo "echo PING!!! Failed to connect to MySQL: " . mysqli_connect_error();
		echo "echo Failed to connect to MySQL: " . mysqli_connect_error();
//		echo mysqli_connect_error();
	}

?>