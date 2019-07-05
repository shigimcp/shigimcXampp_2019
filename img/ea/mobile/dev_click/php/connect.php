<?php
// ========================= CONNECT TO MYSQL DATABASE ========================= 

//	echo "PING! connect.php triggered!";
//	console.log('PING! connect.php triggered!');

//	$con = mysqli_connect("localhost","root","qcDtZcW6","reddoorspa");
//	$con = mysqli_connect("localhost","root","td6YtHXp","reddoorspa");
	$con = mysqli_connect("localhost","shigimcpMySql","sh1g1mcpMySql","reddoorspa");

//	 Check connection
	if (mysqli_connect_errno()) {
//		echo "PING!!! Failed to connect to MySQL: " . mysqli_connect_error();
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

?>