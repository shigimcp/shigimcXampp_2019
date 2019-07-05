<?php
	#// ========================= CONNECT TO MYSQL DATABASE ========================= 

	// phpinfo();

	# Fill our vars and run on cli
	# $ php -f db-connect-test.php
	$dbname = 'shigimcpDB_2019';
	$dbuser = 'root';
	$dbpass = 'sh1g1mcp';
	$dbhost = 'localhost';

	$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die("Unable to Connect to '$dbhost'");

	//	Check connection
	if (mysqli_connect_errno()) {
		echo "echo PING!!! Failed to connect to MySQL: " . mysqli_connect_error();
		echo "echo Failed to connect to MySQL: " . mysqli_connect_error();
		echo mysqli_connect_error();
	} else {
		echo "Fetched data successfully! \n\n";		
	}


	// NOTE: mysql_select_db extension deprecated - REF: https://php.net/manual/en/function.mysql-select-db.php
	// NOTE: mysql_query extension deprecated - REF: https://php.net/manual/en/function.mysql-query.php
	// NOTE: mysql_fetch_array extension deprecated - REF: https://www.php.net/manual/en/function.mysql-fetch-array.php

	// mysql_select_db($dbname) or die("Could not open the db '$dbname'");
	// $test_query = "SHOW TABLES FROM $dbname";
	// $result = mysql_query( $test_query );
	// $tblCnt = 0;

	// while ( $tbl = mysql_fetch_array( $result ) ) {
	// 	$tblCnt++;
	// 	// #echo $tbl[0]."<br />\n";
	// 	// #echo $tblCnt;
	// }

	// if ( !$tblCnt ) {
	// 	echo $tblCnt;
	// } else {
	// 	echo "There are $tblCnt tables<br />\n";
	// }


	// phpinfo();

?>