<?php

require( 'C:\resources\global_config.php' );
require(GC_COUNTRIES);
require(GC_FUNCTIONS);
error_reporting_on();
if ( isset( $_POST['email'] ) ) {

	$data = array_map( 'trim', $_POST );
	require( GC_VALIDATOR_PATTERNS );
	require( GC_CLASS_VALIDATOR2 );

	$v = new validator;
	$v->validate('email', $data['email'], GC_PATTERN_EMAIL, 'Please enter a valid email address' );

	if ( $v->hasErrors() ) {
		$form_msg = $v->getFirstError();
	}
	else {
		require(GC_CLASS_DB);
		require(GC_CLASS_SUBSCRIBER);
	
		if ($db =  new db( GC_SIGNUP_DB_HOST,GC_SIGNUP_DB_USER,GC_SIGNUP_DB_PASSWORD, GC_SIGNUP_DB_NAME ) ) {
	
			$data['page'] = 'signup';
			$data['domain'] = 'mariahcareybeauty.com';
	
			$s = new subscriber($db);
			$s->setData($data);
			
			switch($s->unsubscribe()) {
			
				case subscriber::SUCCESS:
					unset($data);
					$form_msg = 'You have been unsubscribed';
					break;
				default:
					$form_msg = 'That email address is not in our records.';
			
			}
			
		}
	}

}


?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Unsubscribe | Mariah Carey Beauty</title>
	<link href="_css/reset.css" rel="stylesheet" type="text/css" />
	<link href="_css/popup.css" rel="stylesheet" type="text/css" />
	<? include 'includes/google.inc'; ?>
</head>
<body class="popup">
<h1>Mariah Carey Beauty – Unsubscribe</h1>

<form action="unsubscribe.php#form" method="post" id="unsubscribe_form">
	<fieldset>
		<?php if( isset( $form_msg ) ): ?><p id="form_msg" style="text-align:center;color:#aa0000; font-weight:bold;"><?php echo $form_msg ?></p><?php endif; ?>
		<p style="text-align:center">Sorry you want to unsubscribe.<br>Please enter your email address and hit Unsubscribe</p>
		<div style="text-align:center">
			<label for="email">Email Address</label>
			<input type="text" class="textbox" name="email" id="email"<?php if ( isset( $data['email'] ) ):?> value="<?php _e( $data['email'] ) ?>"<?php endif; ?>>
		</div>
		<div id="submit" style="text-align:center; margin-top: 20px;">
			<input type="submit" value="Unsubscribe">
		</div>
	</fieldset>
</form>

</body>
</html>
