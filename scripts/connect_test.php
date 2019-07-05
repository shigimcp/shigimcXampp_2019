<?php
	#// ========================= CONNECT TO MYSQL DATABASE ========================= 

	phpinfo();

	# Fill our vars and run on cli
	# $ php -f db-connect-test.php
	$dbname = 'shigimcpDB_2019';
	$dbuser = 'root';
	$dbpass = 'sh1g1mcp';
	$dbhost = 'localhost';

	$connect = mysql_connect( $dbhost, $dbuser, $dbpass )or die( "Unable to Connect to '$dbhost'" );
	mysql_select_db( $dbname )or die( "Could not open the db '$dbname'" );
	$test_query = "SHOW TABLES FROM $dbname";
	$result = mysql_query( $test_query );
	$tblCnt = 0;

	while ( $tbl = mysql_fetch_array( $result ) ) {
		$tblCnt++;
		#echo $tbl[0]."<br />\n";
		#echo $tblCnt;
	}

	if ( !$tblCnt ) {
		echo $tblCnt;
	} else {
		echo "There are $tblCnt tables<br />\n";
	}

?>