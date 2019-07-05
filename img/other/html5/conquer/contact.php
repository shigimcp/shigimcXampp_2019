<?php

	$firstname = mysql_escape_string($_POST['firstname']);
	$lastname = mysql_escape_string($_POST['lastname']);
	$email = mysql_escape_string($_POST['email']);

	$dbhost  = 'conquerbeauty.db.6823313.hostedresource.com';
	$dbuser  = 'conquerbeauty';
	$dbpass  = 'C0nqu3rB3@uty'; 
	$dbname  = 'conquerbeauty';
	$dbtable = 'skincare';



// =============================================================
// ==================== DATABASE - skincare ====================
// =============================================================

//	echo 'PING! pushToDatabase triggered!';

	$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

		if (mysqli_connect_errno()) {
			echo 'Failed to connect to MySQL: ' . mysqli_connect_error();
		}

		mysqli_query($con,"
			INSERT INTO skincare (id, firstName, lastName, email)
			VALUES (NULL,'$_POST[firstname]','$_POST[lastname]','$_POST[email]')
		");

//		echo '1 record added!';
//		echo 'Thank you for subscribing to CONQUER Beauty!';

	mysqli_close($con);



// ============================================================================
// ==================== EMAIL - skincare@conquerbeauty.com ====================
// ============================================================================

	// Blank message to start with so we can append to it.
	$message = '';

	// Check that name & email aren't empty.
	if(empty($_POST['firstname'])){
		die('Please ensure a first name is provided.');
	//		echo 'Please ensure a first name is provided.';
	}

	if(empty($_POST['lastname'])){
		die('Please ensure a last name is provided.');
	//		echo 'Please ensure a last name is provided.';
	}

	if(empty($_POST['email'])){
		die('Please ensure an email is provided.');
	//		echo 'Please ensure an email is provided.';
	}

	// Check the checkbox
	//$checkString = 'I DO NOT agree to the Terms & Conditions.';
	//
	//if(isset($_POST['checkme'])){
	//    $checkString = 'I agree to the Terms & Conditions.';
	//} else {
	//    die('Please ensure you agree to the Terms & Conditions by checking the box.');
	//}


// Construct the message - ** NOTE: somehow, indenting this block throws an error when trying to send the email below. LEAVE AS IS!
$message .= <<<TEXT
	First Name: {$firstname}
	Last Name: {$lastname}
	Email: {$email}
TEXT;

	// Email to send to
	$to = 'skincare@conquerbeauty.com';
	
	// Email Subject
	$subject = 'You have been contacted via skincare@conquerbeauty.com!';
	
	// Name to show email from
	$from = 'CONQUER Beauty website';
	
	// Domain to show the email from
	$fromEmail = 'skincare@conquerbeauty.com';
	
	// Construct a header to send who the email is from
	$header = 'From: ' . $from . '<' . $fromEmail . '>';
	
	// ** Try sending the email
	if(!mail($to, $subject, $message, $header)){
		die('Error sending email.');
	}else{
//		pushToDatabase();
		die('Thank you for subscribing to CONQUER Beauty!');
	}

?>