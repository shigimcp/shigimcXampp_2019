<?php

	function OpenCon() {
		$dbhost = "localhost";
		$dbuser = "root";
		$dbpass = "sh1g1mcp";
		$db = "shigimcpDB_2019";

		$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

		return $conn;
	}

	function CloseCon($conn) {
		$conn -> close();
	}

?>