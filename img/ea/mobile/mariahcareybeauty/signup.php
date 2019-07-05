<?php

require( 'C:\resources\global_config.php' );
require(GC_COUNTRIES);
require(GC_FUNCTIONS);
if (isset($_POST['submit'])) {

	// Include validator
	require(GC_CLASS_VALIDATOR2);
	require(GC_VALIDATOR_PATTERNS);
	
	// New validator
	$v = new validator;

	// Trim all data
	$data = array_map('trim', $_POST);

	// Validate all data
	$v->validate('first_name', $data['first_name'], GC_PATTERN_FIRST_NAME, 'Please enter your first name' );
	$v->validate('last_name', $data['last_name'], GC_PATTERN_LAST_NAME, 'Please enter your last name' );
	$v->validate('email', $data['email'], GC_PATTERN_EMAIL, 'Please enter your email' );
	$v->validate('postal_code', $data['postal_code'], GC_PATTERN_POSTAL_CODE, 'Please enter your zip code' );
	$v->validateBoolean('country',	isset( $gc_countries[$data['country']] ), true, 'Please select a country'  );
	$v->validateBoolean('certify',	isset( $data['certify'] ), true, 'Please certify that you are 13 years or older'  );
	// Check for validation errors
	if (!$v->isValid()) {
		// Set form error to first validation error
		$form_msg = $v->getFirstError();
	}
	// Form validates
	else {
	
		require(GC_CLASS_DB);
		require(GC_CLASS_SUBSCRIBER);

		if ($db =  new db( GC_SIGNUP_DB_HOST,GC_SIGNUP_DB_USER,GC_SIGNUP_DB_PASSWORD, GC_SIGNUP_DB_NAME ) ) {

			$s = new subscriber($db);
			$data['country'] = 'US';
			$data['country_site'] = 'US';
			$data['page'] = 'signup';
			$data['domain'] = 'mariahcareybeauty.com';
			
			$s->setData($data);
			
			switch($s->subscribe()) {
			
				case subscriber::ERROR_DUPLICATE:
					$form_msg = 'You are already subscribed';
					break;
				case subscriber::SUCCESS:
					unset( $data );
					$form_msg = 'Thank You';
					break;
				default:
					$form_msg= 'Unexpected error';
			
			}
		}
		else {
			$form_msg = 'Unexpected error';
		}
	}
}




?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Luscious Pink  |  Mariah Carey Beauty</title>
	<script type="text/javascript" src="_js/mariah.js"></script>
	<link href="_css/reset.css" rel="stylesheet" type="text/css" />
	<link href="_css/mariah.css" rel="stylesheet" type="text/css" />
	<link href="_css/signup.css" rel="stylesheet" type="text/css" />
	<!--[if lte IE 7]>
		<link rel="stylesheet" type="text/css" href="_css/ie7.css" />
	<![endif]-->	
	<? include 'includes/google.inc'; ?>
</head>
<!-- BRAND HOME PAGE TEMPLATE -->
<body id="luscious" class="brand_home">
<div id="container">
<!-- HEADER *NOTE: "MARIAH" logo part of background.png -->
    <? include 'includes/logoheader.inc'; ?>
<!-- NAVIGATION -->    
    <div id="nav">
<!-- main nav -->
        <? include 'includes/mainnav.inc'; ?>
<!-- subnav: Luscious Pink -->
        <ul class="navlist" id="nav_sub">
            <li><a href="LusciousPink/TheFragrance.php" id="s_fragrance"><span>The Fragrance</span></a></li>
            <li><a href="LusciousPink/TheCollection.php" id="s_collection"><span>The Collection</span></a></li>
            <li><a href="#" id="s_shopnow"><span>Shop Now</span></a></li>
        </ul>    
    </div>
<!-- CONTENT BOX BEGINS -->
    <div id="contentbox">
        <div id="content">
<!--  content well begins -->

			<div id="signup_content">
			
			<form method="post" action="">
			
				<fieldset>
				
					<img src="_images/hdr_signup.gif">
					<p id="text">Sign up at Mariah Carey Fragrance to get special offers on Mariah's latest fragrances.</p>
				
					<?php if( isset( $form_msg ) ): ?>
					<p id="form_msg"><?php echo $form_msg ?></p>
					<?php endif; ?>
					<div>
						<label>First Name*:</label>
						<input class="textbox" name="first_name" value="<?php if( isset( $data['first_name'] ) ): ?><?php echo e( $data['first_name'] ) ?><?php endif; ?>">
					</div>

					<div>
						<label>Last Name*:</label>
						<input class="textbox" name="last_name" value="<?php if( isset( $data['last_name'] ) ): ?><?php echo e( $data['last_name'] ) ?><?php endif; ?>">
					</div>

					<div>
						<label>Email*:</label>
						<input class="textbox" name="email" value="<?php if( isset( $data['email'] ) ): ?><?php echo e( $data['email'] ) ?><?php endif; ?>">
					</div>

					<div>
						<label>Cell Phone #:</label>
						<input class="textbox" name="phone_number" value="<?php if( isset( $data['phone_number'] ) ): ?><?php echo e( $data['phone_number'] ) ?><?php endif; ?>">
					</div>

					<div>
						<label>Zip Code*:</label>
						<input class="textbox" name="postal_code" value="<?php if( isset( $data['postal_code'] ) ): ?><?php echo e( $data['postal_code'] ) ?><?php endif; ?>">
					</div>

					<div>
						<label>Country*:</label>
						<select name="country">
							<option value="">Select</option>
							<?php foreach( $gc_countries as $c_a => $c_n ): ?>
							<option value="<?php echo $c_a ?>"<?php if( $c_a == $data['country'] ): ?> selected="selected"<?php endif; ?>><?php echo $c_n ?></option>
							<?php endforeach; ?>
						</select>
					</div>

					<div id="certify">
						<label>
						<input type="checkbox" name="certify"<?php if( isset( $data['certify'] ) ): ?> checked="checked"<?php endif; ?>>
						I certify that I am 13 years or older.*
						</label>
					</div>
					<p id="required">*Required</p>
					
					<div id="actions">
						<div id="follow">
							Follow us on: <a href="https://www.facebook.com/mariahcarey" target="_blank"><img src="_images/signup_fb.gif" alt="Facebook"></a>
                            <a href="https://twitter.com/#!/mariahcarey" target="_blank"><img src="_images/signup_twitter.gif" alt="Twitter"></a>
						</div>
						<input type="submit" value="" name="submit" id="signup_submit">
					</div>
	
				</fieldset>
			
			</form>			
			
			</div>

<!--  content well ends -->
        </div>
<!-- sign up buttons -->        
        <? include 'includes/signup_btns.inc'; ?>
    </div>
<!-- CONTENT BOX ENDS -->    
<!-- FOOTER -->       
    <? include 'includes/mainfooter.inc'; ?>
</div>
</body>
</html>