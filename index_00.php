<?php
	include 'db_connection.php';

	$conn = OpenCon();

	echo "Connected to shigimcpDB_2019 Successfully";

	CloseCon($conn);

?>