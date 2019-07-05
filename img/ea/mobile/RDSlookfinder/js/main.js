//"use strict";

//(function () {
//	'use strict';
//
//	pageInit();
//}());


//<!--/* ========================= INITIALIZE PAGE ========================= */-->

var shopListScroll;

var lookArrayLength = 0;
var prodArrayLength = 0;

function pageInit() {

	console.log('');
	console.log('==============================');
	console.log('pageInit');
	console.log('==============================');

	console.log('');
	console.log('navigator.userAgent = ' + navigator.userAgent);
	console.log('this = ' + this);


//	//<!--/* ------------------------- FASTCLICK ------------------------- */-->
//
//	$(function() {
//		FastClick.attach(document.body);
//	});


//	//<!--/* ------------------------- SCROLLERS - SHOPPING LIST (iScroll) ------------------------- */-->
//
////	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true});
////
////	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true,
////	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: false, tap: true,
////	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true, tap: true,
//	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, tap: true,
//		onBeforeScrollStart: function (e) {
//			console.log('e = ' + e + '     e.target = ' + e.target);
//
////			var target = e.target;
////
////			while (target.nodeType != 1) target = target.parentNode;
////				if (target.tagName.toLowerCase() != 'SELECT' && target.tagName.toLowerCase() != 'INPUT' && target.tagName.toLowerCase() != 'TEXTAREA' && target.tagName.toLowerCase() != 'CHECKBOX')
////			if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'CHECKBOX') {
////				e.preventDefault();
////			}
//
//			e.preventDefault();
//		}
//	});
//
////	$('.listContainer').append('<img src="img/spacer.gif');
//	$('#shoppingList').append('<img src="img/spacer.gif');
//
//	loadScrollers();
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//
//	console.log('');
//	console.log('shopListScroll = ' + shopListScroll);
//	console.dir('shopListScroll.width() = ' + $('shopListScroll').width());


	//<!--/* ------------------------- BUILDING THE REST... ------------------------- */-->

	getOptions();
	loadLookArray();
	resetLooks(this);

//	loadScrollers();
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

//	alertAssociate();



	idleFunction();

	$("#arrow_lf").fadeOut();

	listToChecks();



//	//<!--/* ------------------------- NAV - LOOKS ------------------------- */-->
//
//	$('#lookList').on('change', function() {
////		console.log($(this).text());
//		getSelectedLooks(this);
//	});
//
//	$('#lipList').on('change', function() {
////		console.log($(this).text());
//		getSelectedLooks(this);
//	});
//
//	$('#hairList').on('change', function() {
////		console.log($(this).text());
//		hairColor();
//	});
//
//	$('#resetBtn').on('click', function() {
////		console.log('$(this) = ' + $(this));
////		console.log('$(this).attr(id) = ' + $(this).attr('id'));
//		resetLooks($(this).attr('id'));
//	});


	console.log('PING! FUNCTION: pageInit() complete!');
}



////<!--/* ========================= SCROLLERS - SHOPPING LIST (iScroll) ========================= */-->
//
////shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true});
////
////shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true,
////shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: false, tap: true,
////shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true, tap: true,
//shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, tap: true,
//	onBeforeScrollStart: function (e) {
//		console.log('e = ' + e + '     e.target = ' + e.target);
//
////		var target = e.target;
////
////		while (target.nodeType != 1) target = target.parentNode;
//////			if (target.tagName.toLowerCase() != 'SELECT' && target.tagName.toLowerCase() != 'INPUT' && target.tagName.toLowerCase() != 'TEXTAREA' && target.tagName.toLowerCase() != 'CHECKBOX')
////		if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'CHECKBOX') {
////			e.preventDefault();
////		}
//
//		e.preventDefault();
//	}
//});
//
//$('.listContainer').append('<img src="img/spacer.gif');
//
//console.log('');
//console.log('shopListScroll = ' + shopListScroll);
//console.dir('shopListScroll.width() = ' + $('shopListScroll').width());



//<!--/* ========================= GET COOKIES - FUNCTION: getCookie (see DROP COOKIE in FUNCTION: loadProdArray) ========================= */-->

function getCookie(cookieName) {

//	console.log('');
//	console.log('==============================');
//	console.log('getCookie');
//	console.log('==============================');
//
//	console.log('document.cookie = ' + document.cookie);

	var cookieNameEq = cookieName + "=";
	var cookieArray = document.cookie.split(';');

	for(var i = 0; i < cookieArray.length; i++) {

		var thisCookie = cookieArray[i].trim();

//		if (thisCookie.indexOf(cookieNameEq)===0) return thisCookie.substring(cookieNameEq.length,thisCookie.length);
		if (thisCookie.indexOf(cookieNameEq)===0) {
			return thisCookie.substring(cookieNameEq.length,thisCookie.length);
		}
	}

	return "";
}



//<!--/* ========================= GOOGLE UNIVERSAL ANALYTICS ========================= */-->

//<!--/* ------------------------- FUNCTION: getHelp ------------------------- */-->

function getHelp(cookieName) {

//	console.log('');
//	console.log('==============================');
//	console.log('getHelp');
//	console.log('==============================');
//
//	console.log('document.cookie = ' + document.cookie);

	var cookieNameEq = cookieName + "=";
	var cookieArray = document.cookie.split(';');

	for(var i = 0; i < cookieArray.length; i++) {

		var thisCookie = cookieArray[i].trim();

//		if (thisCookie.indexOf(cookieNameEq)===0) return thisCookie.substring(cookieNameEq.length,thisCookie.length);
		if (thisCookie.indexOf(cookieNameEq)===0) {
			return thisCookie.substring(cookieNameEq.length,thisCookie.length);
		}
	}

	return "";
}


//<!--/* ------------------------- FUNCTION: newSession ------------------------- */-->

//function newSession() {
function newSession(thisTrigger) {

//	console.log('');
//	console.log('==============================');
//	console.log('newSession');
//	console.log('==============================');

//	if (thisTrigger === 'resetBtn' && shopListArray.length !== 0) {
//		emptyList(event);
//	}

	resetLooks(thisTrigger);
//	listToChecks();


//	//<!--/* ------------------------- GOOGLE UNIVERSAL ANALYTICS - EVENT TRACKING - BTN ID: newSessionBtn ------------------------- */-->
//
////	ga('send', 'event', 'button', 'click', 'newRing');
//
//	ga('send', {
//		'hitType': 'event',          // Required.
//		'eventCategory': 'button',   // Required.
//		'eventAction': 'click',      // Required.
////		'eventLabel': 'newSession_061014',
//		'eventLabel': thisTrigger,
//		'eventValue': 2,
//		'hitCallback': function() {
////			console.log('');
////			console.log('PING!!! there was a TIMEOUT; starting a NEW SESSION!     thisTrigger = ' + thisTrigger + '     event = ' + event);
//		}
//	});
}


//<!--/* ------------------------- GOOGLE UNIVERSAL ANALYTICS - EVENT TRACKING - BTN ID: ringBtn ------------------------- */-->
						//<!--/* ===== SEE * ALERT BUTTON * below - FUNCTION alertAssociate ===== */-->



//<!--/* ========================= LOCAL STORAGE ========================= */-->

////<!--/* ------------------------- FUNCTION: foolAppCache ------------------------- */-->
//
//function foolAppCache() {
//
//	$.each(lookArray, function(index, value) {
//		$.each(this, function(index, value) {
//			if (index === 'look_num') {
//
////				console.log('index = ' + index + '     value = ' + value);
//
//				$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/look/look_' + value + '.jpg" id="' + index + '_' + value + '" />');
//			}
//		});
//	});
//
//
//	$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_000.jpg" id="hair_000" />');
//	$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_black.jpg" id="hair_black" />');
//	$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_blonde.jpg" id="hair_blonde" />');
//	$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_dkbrown.jpg" id="hair_dkbrown" />');
//	$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_ltbrown.jpg" id="hair_ltbrown" />');
//	$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_red.jpg" id="hair_red" />');
//
//
//	$.each(prodArray, function(index, value) {
//		$.each(this, function(index, value) {
////			if (index === 'image' && value !== '') {
//			if (index === 'image' && value !== '') {
//
////				console.log('index = ' + index + '     value = ' + value);
//
//				$('.sectProdContainer').append('<img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + index + '_' + value + '" />');
//			}
//		});
//	});
//}



//<!--/* ------------------------- FUNCTION: storeMe ------------------------- */-->

function storeMe(index, value, thisArray) {

//	console.log('');
//	console.log('==============================');
//	console.log('storeMe');
//	console.log('==============================');

//	console.log('');
//	console.log('lookArray.length = ' + lookArray.length);
//	console.log('prodArray.length = ' + prodArray.length);
//	console.log('thisArray.length = ' + thisArray.length);


//	if (typeof(localStorage) == 'undefined' ) {
	if (typeof(localStorage) === 'undefined' ) {

		alert('Your browser does not support HTML5 localStorage. Try upgrading.');

	} else {

		try {

//			console.log('JSON.stringify(value) = ' + JSON.stringify(value));

			localStorage.setItem(index, JSON.stringify(value));		//saves to the database, "key", "value"
			sessionStorage.setItem(index, JSON.stringify(value));		//saves to the database, "key", "value"

			} catch (e) {
//				if (e == QUOTA_EXCEEDED_ERR) {
				if (e === QUOTA_EXCEEDED_ERR) {
				alert('Quota exceeded!');							//data wasn't successfully saved due to quota exceed so throw an error
			}
		}
	}

//	console.log('localStorage.length = ' + localStorage.length);
//	console.log('lookArray.length = ' + lookArray.length);
//	console.log('lookArray = ' + lookArray);
}


//<!--/* ------------------------- FUNCTION: clearStorage - CLEAR LOCAL & SESSION STORAGE (up to 2000 key/value pairs); also DELETES COOKIES ------------------------- */-->

function clearStorage() {

//	console.log('');
//	console.log('==============================');
//	console.log('clearStorage');
//	console.log('==============================');

	for (var i = 0; i < 2000; i++) {
		localStorage.removeItem(i); //deletes the matching item from the database
		sessionStorage.removeItem(i); //deletes the matching item from the database
	}

	localStorage.removeItem('EOL'); //deletes the matching item from the database
	localStorage.removeItem('EOP'); //deletes the matching item from the database
	localStorage.removeItem('undefined'); //deletes the matching item from the database

//	document.cookie = "lookArrayLength=; expires=Thu, 01 Jan 1970 00:00:00 EST";
//	document.cookie = "prodArrayLength=; expires=Thu, 01 Jan 1970 00:00:00 EST";
////	document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 EST";
//	document.cookie = "lookArrayLength=; prodArrayLength=; expires=";
	document.cookie = "";
}


//<!--/* ------------------------- FUNCTION: checkArray ------------------------- */-->

function checkArray(thisArray) {

	console.log('');
	console.log('==============================');
	console.log('checkArray');
	console.log('==============================');

	$.each(thisArray, function(index, value) {

		console.log('index = ' + index + '     value = ' + value);

		$.each(this, function(index, value) {
			console.log('index = ' + index + '     value = ' + value);
//			console.log('this[look_num] = ' + this['look_num']);
		});
	});
}



//<!--/* ========================= ALERTIFY - FUNCTION: alertifyRefreshDefaults ========================= */-->

function alertifyRefreshDefaults() {

	alertify.set({

		buttonReverse: false,
		buttonFocus: 'ok',

		labels: {
			ok     : 'OK',
			cancel : 'CANCEL'
		}
	});
}



//<!--/* ========================= SPLASH SCREEN - FUNCTIONS: splashScreen & idleFunction (ref: http://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm) ========================= */-->

var idleTime;

//<!--/* ------------------------- FUNCTION: idleFunction ------------------------- */-->

function idleFunction() {

//	console.log('');
//	console.log('==============================');
//	console.log('idleFunction for idleFunction');
//	console.log('==============================');

	addEventListener('mousemove', resetTimer, false);
	addEventListener('mousedown', resetTimer, false);
	addEventListener('keypress', resetTimer, false);
	addEventListener('DOMMouseScroll', resetTimer, false);
	addEventListener('mousewheel', resetTimer, false);
	addEventListener('touchmove', resetTimer, false);
	addEventListener('MSPointerMove', resetTimer, false);

	startTimer();
}

function startTimer() {
//	idleTime = window.setTimeout(splashScreen, 5000);
	idleTime = setTimeout(splashScreen, 5 * 60 * 1000);	// x minutes = x * 60 secs * 1000 milliseconds
}

function resetTimer(e) {
//	window.clearTimeout(idleTime);
	clearTimeout(idleTime);

//	clearTimeout(splashAnim01);
//	clearTimeout(splashAnim02);
//	clearTimeout(splashAnim03);

//	clearInterval(splashAnim01);
//	clearInterval(splashAnim02);
//	clearInterval(splashAnim03);

	startTimer();
}


//<!--/* ------------------------- FUNCTION: splashScreen ------------------------- */-->

function splashScreen() {

//	console.log('');
//	console.log('==============================');
//	console.log('splashScreen');
//	console.log('==============================');

//	setFreeOptions('toneList');
	setFreeOptions('lipList');
	setFreeOptions('lookList');
	setFreeOptions('hairList');

//	level = 'Level1';
	lip_shade = 'Neutral';
	look_type = 'Minimalist';
	hair = 'blonde';

//	$('#newSessionBtn')[0].click();
	$('#splashBtn')[0].click();
//	$('#resetBtn')[0].click();
//	resetLooks();
//	resetLooks('splashBtn');

//	splashAnim();


//	setTimeout(pageInit, 1000);
}



		//<!--/* ========================= PHP - READ MYSQL DB ========================= */-->
//<!--/* ========================= GLOBAL ARRAYS (hit the MySQL database ONCE!) ========================= */-->

var lookArray = [];
var prodArray = [];

var thisLookArray = [];
var thisProdArray = [];

//var level = '';
var lip_shade = '';
var look_type = '';
var hair = '';

var filteredLooks = [];


//<!--/* ------------------------- ARRAY OF ALL LOOKS - FUNCTION: loadLookArray ------------------------- */-->

function loadLookArray() {

	console.log('');
	console.log('==============================');
	console.log('loadLookArray');
	console.log('==============================');


////<!--/* ------------------------- localStorage ------------------------- */-->
//
//	console.log('localStorage.length = ' + localStorage.length);
//
//	if (localStorage.length === 0) {
//
//		console.log('localStorage.length is zero = ' + localStorage.length);
//
//		$.ajax({
//			url:'php/looks.php',
//			type: 'GET',
//			async: false,
//			success:function(data) {
//				console.log('data = ' + data);
//
//				var lookArrayTemp = JSON.parse(data);
//	
//				console.log('lookArrayTemp = ');
//				console.log(lookArrayTemp);
//
//				$.each(lookArrayTemp, function(index, value) {
//					storeMe(index, value, lookArray);
//	
//					console.log('index = ' + index + '     value = ' + value);
//				});
//			}
//		});
//	
//		for (var index = 0; index < localStorage.length; index++) {
//			var thisArrayObject = JSON.parse(localStorage.getItem(index));
//
////			console.log('thisArrayObject = ' + thisArrayObject);
//
//			lookArrayLength = index + 1;
//			lookArray.push(thisArrayObject);
//
////			console.log('lookArray = ' + lookArray);
//		}
//
//	} else {
//
//		console.log('localStorage.length is non-zero = ' + localStorage.length);
//
//		lookArrayLength = getCookie('lookArrayLength');
//
//		console.log('lookArrayLength = ' + lookArrayLength);
//
//		for (var index = 0; index < lookArrayLength; index++) {
//			var thisArrayObject = JSON.parse(localStorage.getItem(index));
//			lookArray.push(thisArrayObject);
//		}
//	}



////<!--/* ------------------------- sessionStorage ------------------------- */-->
//
//	console.log('sessionStorage.length = ' + sessionStorage.length);
//
//	if (sessionStorage.length === 0) {
//
//		console.log('sessionStorage.length is zero = ' + sessionStorage.length);
//
//		$.ajax({
//			url:'php/looks.php',
//			type: 'GET',
//			async: false,
//			success:function(data) {
//				console.log('data = ' + data);
//
//				var lookArrayTemp = JSON.parse(data);
//	
//				console.log('lookArrayTemp = ');
//				console.log(lookArrayTemp);
//
//				$.each(lookArrayTemp, function(index, value) {
//					storeMe(index, value, lookArray);
//	
//					console.log('index = ' + index + '     value = ' + value);
//				});
//			}
//		});
//	
//		for (var index = 0; index < sessionStorage.length; index++) {
//			var thisArrayObject = JSON.parse(sessionStorage.getItem(index));
//
////			console.log('thisArrayObject = ' + thisArrayObject);
//
//			lookArrayLength = index + 1;
//			lookArray.push(thisArrayObject);
//
////			console.log('lookArray = ' + lookArray);
//		}
//
//	} else {
//
//		console.log('sessionStorage.length is non-zero = ' + sessionStorage.length);
//
//		lookArrayLength = getCookie('lookArrayLength');
//
//		console.log('lookArrayLength = ' + lookArrayLength);
//
//		for (var index = 0; index < lookArrayLength; index++) {
//
//			var thisArrayObject = JSON.parse(sessionStorage.getItem(index));
//			console.log('thisArrayObject = ' + thisArrayObject);
//
//			lookArray.push(thisArrayObject);
//		}
//	}



//<!--/* ------------------------- JSON.parse(data) ------------------------- */-->

		$.ajax({
			url:'php/looks.php',
			type: 'GET',
			async: false,
			success:function(data) {
				lookArray = JSON.parse(data);
			}
		});



	console.log('');
	console.log('loadLookArray: lookArray.length = ' + lookArray.length);
	console.log('loadLookArray: lookArray = ');
	console.log(lookArray);

//	console.log('loadLookArray: thisLookArray.length = ' + thisLookArray.length);
//	console.log('loadLookArray: thisLookArray = ');
//	console.log(thisLookArray);

//	console.log('');
//	console.log('loadLookArray: localStorage.length = ' + localStorage.length);
//	console.log('loadLookArray: localStorage = ');
//	console.log(localStorage);


	loadProdArray();
}


//<!--/* ------------------------- ARRAY OF ALL PRODUCTS - FUNCTION: loadProdArray ------------------------- */-->

function loadProdArray() {

	console.log('');
	console.log('==============================');
	console.log('loadProdArray');
	console.log('==============================');

////	console.log('');
////	console.log('loadProdArray - PREcomp: localStorage.length = ' + localStorage.length);
////	console.log('loadProdArray - PREcomp: localStorage = ');
////	console.log(localStorage);
//
//	console.log('');
//	console.log('loadProdArray: lookArrayLength = ' + lookArrayLength);
//	console.log('loadProdArray: prodArrayLength = ' + prodArrayLength);


	var lookLength = localStorage.length;
	var thisIndex;

	lip_shade = $('#lipList').val();
	look_type = $('#lookList').val();
	hair = $('#hairList').val();



////<!--/* ------------------------- localStorage ------------------------- */-->
//
//	if (localStorage.length === lookArrayLength) {
//
////		console.log('localStorage.length === lookArrayLength (per conditional) = ' + localStorage.length);
////		console.log('lookArrayLength = ' + lookArrayLength);
//
//		$.ajax({
//			url:'php/products.php',
//			type: 'GET',
//			async: false,
//			success:function(data) {
//				console.log('data = ' + data);
//
//				var prodArrayTemp = JSON.parse(data);
//	
//				$.each(prodArrayTemp, function(index, value) {
//					thisIndex = index + lookArrayLength;
//	
//					storeMe(thisIndex, value, prodArray);
//				});
//			}
//		});
//
//		for (var index = lookArray.length; index < localStorage.length; index++) {
//			var thisArrayObject = JSON.parse(localStorage.getItem(index));
//		
//			prodArrayLength = index - lookArray.length + 1;
//			prodArray.push(thisArrayObject);
//		}
//
////		console.log('');
////		console.log('loadProdArray: lookArrayLength = ' + lookArrayLength + '     prodArrayLength = ' + prodArrayLength);
//
//		document.cookie = 'lookArrayLength = ' + lookArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
//		document.cookie = 'prodArrayLength = ' + prodArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
//
////		console.log('document.cookie = ' + document.cookie);
////		console.log('');
//
//	} else {
//
////		console.log('localStorage.length != lookArrayLength (per conditional) = ' + localStorage.length);
////		console.log('lookArrayLength = ' + lookArrayLength);
//
//		prodArrayLength = getCookie('prodArrayLength');
//
////		console.log('prodArrayLength = ' + prodArrayLength);
//
//		for (var index = lookArrayLength; index < localStorage.length; index++) {
//
//			var thisArrayObject = JSON.parse(localStorage.getItem(index));
//
//			prodArray.push(thisArrayObject);
//		}
//	}



////<!--/* ------------------------- sessionStorage ------------------------- */-->
//
//	if (sessionStorage.length === lookArrayLength) {
//
////		console.log('sessionStorage.length === lookArrayLength (per conditional) = ' + sessionStorage.length);
////		console.log('lookArrayLength = ' + lookArrayLength);
//
//		$.ajax({
//			url:'php/products.php',
//			type: 'GET',
//			async: false,
//			success:function(data) {
////				console.log('data = ' + data);
//
//				var prodArrayTemp = JSON.parse(data);
//	
//				$.each(prodArrayTemp, function(index, value) {
//					thisIndex = index + lookArrayLength;
//	
//					storeMe(thisIndex, value, prodArray);
//				});
//			}
//		});
//
//		for (var index = lookArray.length; index < sessionStorage.length; index++) {
//			var thisArrayObject = JSON.parse(sessionStorage.getItem(index));
//		
//			prodArrayLength = index - lookArray.length + 1;
//			prodArray.push(thisArrayObject);
//		}
//
////		console.log('');
////		console.log('loadProdArray: lookArrayLength = ' + lookArrayLength + '     prodArrayLength = ' + prodArrayLength);
//
//		document.cookie = 'lookArrayLength = ' + lookArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
//		document.cookie = 'prodArrayLength = ' + prodArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
//
////		console.log('document.cookie = ' + document.cookie);
////		console.log('');
//
//	} else {
//
////		console.log('sessionStorage.length != lookArrayLength (per conditional) = ' + sessionStorage.length);
////		console.log('lookArrayLength = ' + lookArrayLength);
//
//		prodArrayLength = getCookie('prodArrayLength');
//
////		console.log('prodArrayLength = ' + prodArrayLength);
//
//		for (var index = lookArrayLength; index < sessionStorage.length; index++) {
//
//			var thisArrayObject = JSON.parse(sessionStorage.getItem(index));
//
//			prodArray.push(thisArrayObject);
//		}
//	}



//<!--/* ------------------------- JSON.parse(data) ------------------------- */-->

		$.ajax({
			url:'php/products.php',
			type: 'GET',
			async: false,
			success:function(data) {
				prodArray = JSON.parse(data);
			}
		});



//	console.log('');
//	console.log('loadProdArray: lip_shade = ' + lip_shade + '     look_type = ' + look_type + '     hair = ' + hair);

	console.log('');
	console.log('loadProdArray: prodArray.length = ' + prodArray.length);
	console.log('loadProdArray: prodArray = ');
	console.log(prodArray);

//	console.log('loadProdArray: thisProdArray.length = ' + thisProdArray.length);
//	console.log('loadProdArray: thisProdArray = ');
//	console.log(thisProdArray);

//	console.log('');
//	console.log('loadProdArray - POSTcomp: localStorage.length = ' + localStorage.length);
//	console.log('loadProdArray - POSTcomp: localStorage = ');
//	console.log(localStorage);

//	foolAppCache();
	loadLooksNProds(lip_shade, look_type, hair);
}



//<!--/* ========================= DISABLE PULLDOWN OPTIONS ========================= */-->

//var toneOptArray = [];
var shadeOptArray = [];
var lookOptArray = [];


//<!--/* ------------------------- ARRAY OF ALL PULLDOWN OPTIONS - FUNCTION: getOptions ------------------------- */-->

function getOptions() {

//	console.log('');
//	console.log('==============================');
//	console.log('getOptions');
//	console.log('==============================');

//	var toneLength = $('#toneList').children().length;
	var lipLength = $('#lipList').children().length;
	var lookLength = $('#lookList').children().length;

//	console.log('toneLength = ' + toneLength + '     lipLength = ' + lipLength + '     lookLength = ' + lookLength);
//
//	for (var i = 0; i < toneLength; i++) {
//		toneOptArray.push($('#toneList').children().eq(i).val());
//	}
//
//	console.log('toneOptArray = ' + toneOptArray);

	for (var i = 0; i < lipLength; i++) {
		shadeOptArray.push($('#lipList').children().eq(i).val());
	}

//	console.log('shadeOptArray = ' + shadeOptArray);


	for (var i = 0; i < lookLength; i++) {
		lookOptArray.push($('#lookList').children().eq(i).val());
	}

//	console.log('lookOptArray = ' + lookOptArray);
}


//<!--/* ------------------------- FUNCTION: removeArrayDupes (ref: http://jsfiddle.net/Guffa/Askwb/) ------------------------- */-->

function removeArrayDupes(thisList, thisListName) {

//	console.log('');
//	console.log('==============================');
//	console.log('removeArrayDupes');
//	console.log('==============================');
//
//	console.log('thisList = ' + thisList);
//	console.log('thisListName = ' + thisListName);

	var result = [];

//	if (thisListName == 'filterTones' || thisListName == 'filterShades' || thisListName == 'filterLooks') {
	if (thisListName === 'filterTones' || thisListName === 'filterShades' || thisListName === 'filterLooks') {

		$.each(thisList, function(i, e) {
//			if ($.inArray(e, result) == -1)
			if ($.inArray(e, result) === -1) {
				result.push(e);
			}
		});

	} else {

//		console.log('');
//		console.log('thisList.length = ' + thisList.length);

		for (var n = 1; n < thisList.length; n+=2) {
//			console.log('n = ' + n + '     thisList[n] = ' + thisList[n]);

//			if ($.inArray(thisList[n], result) == -1)
//			if (result.indexOf(thisList[n]) == -1) {
			if (result.indexOf(thisList[n]) === -1) {

//				console.log('n = ' + n + '     thisList[n-1] = ' + thisList[n-1] + '     thisList[n] = ' + thisList[n]);

				result.push(thisList[n-1]);
				result.push(thisList[n]);
			}
		}
	}

//	console.log('result = ' + result);

	return result;
}


//<!--/* ------------------------- FUNCTION: setFreeOptions (RESET (DE-SELECT & ENABLE ALL) OPTIONS) ------------------------- */-->

function setFreeOptions(thisList) {

//	console.log('');
//	console.log('==============================');
//	console.log('setFreeOptions');
//	console.log('==============================');
//
//	console.log('thisList = ' + thisList + '     thisLength = ' + thisLength);


	var thisLength = $('#' + thisList + '').children().length;

	for (var i = 0; i < thisLength; i++) {
		$('select[id*="' + thisList + '"] option').prop('disabled',false);
		$('select[id*="' + thisList + '"] option').prop('selected',false);
	}
}


//<!--/* ------------------------- FUNCTION: resetOptions (RESET (ENABLE ALL) OPTIONS) ------------------------- */-->

function resetOptions(thisList) {

//	console.log('');
//	console.log('==============================');
//	console.log('resetOptions');
//	console.log('==============================');
//
//	console.log('thisList = ' + thisList + '     thisLength = ' + thisLength);


	var thisLength = $('#' + thisList + '').children().length;

	for (var i = 0; i < thisLength; i++) {
//		$('select[id*="' + thisList + '"] option').prop('selected',false);
		$('select[id*="' + thisList + '"] option').prop('disabled',false);
	}
}


//<!--/* ------------------------- FUNCTION: disableMe ------------------------- */-->

function disableMe(baseArray, compareArray, thisList) {

//	console.log('');
//	console.log('==============================');
//	console.log('disableMe');
//	console.log('==============================');
//
////	console.log('level = ' + level + '     lip_shade = ' + lip_shade + '     look_type = ' + look_type);
//	console.log('baseArray = ' + baseArray + '     compareArray = ' + compareArray + '     thisList = ' + thisList);


	resetOptions(thisList);

	//<!--/* ------------------------- check for SELECTED ------------------------- */-->
//	level = 'Level1';
//	lip_shade = 'Neutral';
//	look_type = 'Minimalist';
//	hair = 'blonde';

//	level = $('#toneList').val();
	lip_shade = $('#lipList').val();
	look_type = $('#lookList').val();
	hair = $('#hairList').val();

//	console.log('');
//	console.log('CURRENTLY SELECTED');
//	console.log('lip_shade = ' + lip_shade + '     look_type = ' + look_type);
////	console.log('level = ' + level + '     lip_shade = ' + lip_shade + '     look_type = ' + look_type);


	//<!--/* ------------------------- DISABLE FILTERED OPTIONS ------------------------- */-->

	var disableOpts = $.grep(baseArray, function(element) {
//		return $.inArray(element, compareArray) == -1;
		return $.inArray(element, compareArray) === -1;
	});

//	if (lip_shade === 'ALL' && thisList === 'lipList') {
	if (thisList === 'lipList') {
//		console.log('disableOpts.indexOf(ALL) = ' + disableOpts.indexOf('ALL'));
		disableOpts.splice(disableOpts.indexOf('ALL'), 1);
	}

//	console.log('');
//	console.log('disableOpts = ' + disableOpts);
////	console.log('disableOpts.length = ' + disableOpts.length);
////	console.log('disableOpts[0] = ' + disableOpts[0]);

	for (var i = 0; i < disableOpts.length; i++) {
		$('select[id*="' + thisList + '"] option[value*="' + disableOpts[i] + '"]').prop('disabled',true);
	}
}


//<!--/* ------------------------- FUNCTION: disableOptions ------------------------- */-->

//function disableOptions(level, lip_shade, look_type) {
//function disableOptions(lip_shade, look_type) {
function disableOptions(lip_shade, look_type, thisListSelect) {

//	console.log('');
//	console.log('==============================');
//	console.log('disableOptions');
//	console.log('==============================');
//
//	console.log('lip_shade = ' + lip_shade + '     look_type = ' + look_type + '     thisListSelect = ' + thisListSelect);
//	console.log('lip_shade = ' + lip_shade + '     look_type = ' + look_type);
////	console.log('level = ' + level + '     lip_shade = ' + lip_shade + '     look_type = ' + look_type);
//
////	console.log('');
////	console.log('toneOptArray = ' + toneOptArray + '     toneOptArray.length = ' + toneOptArray.length);
////	console.log('shadeOptArray = ' + shadeOptArray + '     shadeOptArray.length = ' + shadeOptArray.length);
////	console.log('lookOptArray = ' + lookOptArray + '     lookOptArray.length = ' + lookOptArray.length);

//	console.log('');
//	console.log('disableOptions: lookArray.length = ' + lookArray.length);
//	console.log('disableOptions: lookArray = ');
//	console.log(lookArray);


//	var filterTones = [];
	var filterShades = [];
	var filterLooks = [];



//
//
////	//<!--/* ------------------------- DISABLE LEVEL OPTIONS(S) ("level" in LOOKS DATABASE) ------------------------- */-->
////
////	$.each([lookArray], function(index, value) {
////		$.each(this, function(index, value) {
//////			console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);
////
//////			if (this['level'] === level) {
////			if (this['lip_shade'] === lip_shade && this['look_type'] === look_type) {
////				filterTones.push(this['level']);
////			}
////		});
////	});
////
//////	console.log('');	
//////	console.log('PRE removeArrayDupes - filterTones = ' + filterTones);
//////	console.log('PRE removeArrayDupes - filterTones.length = ' + filterTones.length);
////
//////	filterTones = removeArrayDupes(filterTones);
////	filterTones = removeArrayDupes(filterTones, 'filterTones');
////
//////	console.log('');
//////	console.log('POST removeArrayDupes - filterTones = ' + filterTones);
//////	console.log('POST removeArrayDupes - filterTones.length = ' + filterTones.length);
////
////	disableMe(toneOptArray, filterTones, "toneList");
//
//
////	//<!--/* ------------------------- DISABLE LIP SHADE OPTIONS(S) ("lip_shade" in LOOKS DATABASE) ------------------------- */-->
////
////	console.log('');
////
////	$.each([lookArray], function(index, value) {
////		$.each(this, function(index, value) {
//////			console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);
////
////			if (this['look_type'] === look_type) {
//////			if (this['level'] === level && this['look_type'] === look_type) {
////				filterShades.push(this['lip_shade']);
////			}
////		});
////	});
////
//////	console.log('');	
//////	console.log('PRE removeArrayDupes - filterShades.length = ' + filterShades.length);
//////	console.log('PRE removeArrayDupes - filterShades = ' + filterShades);
////
//////	filterShades = removeArrayDupes(filterShades);
////	filterShades = removeArrayDupes(filterShades, 'filterShades');
////
//////	console.log('');
//////	console.log('POST removeArrayDupes - filterShades.length = ' + filterShades.length);
////	console.log('POST removeArrayDupes - filterShades = ');
////	console.log(filterShades);
////
////	disableMe(shadeOptArray, filterShades, "lipList");
////
//////	if (thisListSelect === 'lookList') {
//////		disableMe(shadeOptArray, filterShades, "lipList");
//////	}
//
//
////	//<!--/* ------------------------- DISABLE LOOK OPTIONS(S) ("look_type" in LOOKS DATABASE) ------------------------- */-->
////
////	console.log('');
////
////	$.each([lookArray], function(index, value) {
////		$.each(this, function(index, value) {
////			console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);
////
////			if (this['lip_shade'] === lip_shade) {
//////			if (this['level'] === level && this['lip_shade'] === lip_shade) {
////				filterLooks.push(this['look_type']);
//////			} else {
//////				filterLooks.push(this['look_type']);
////			}
////		});
////	});
////
//////	console.log('');
//////	console.log('PRE removeArrayDupes - filterLooks.length = ' + filterLooks.length);
//////	console.log('PRE removeArrayDupes - filterLooks = ' + filterLooks);
////
//////	filterLooks = removeArrayDupes(filterLooks);
////	filterLooks = removeArrayDupes(filterLooks, 'filterLooks');
////
//////	console.log('');
//////	console.log('POST removeArrayDupes - filterLooks.length = ' + filterLooks.length);
////	console.log('POST removeArrayDupes - filterLooks = ');
////	console.log(filterLooks);
////
////	disableMe(lookOptArray, filterLooks, "lookList");
////
//////	if (thisListSelect === 'lipList') {
//////		disableMe(lookOptArray, filterLooks, "lookList");
//////	}
//
//



	//<!--/* ------------------------- DISABLE LIP SHADE OPTIONS(S) ("lip_shade" in LOOKS DATABASE) ------------------------- */-->

//	console.log('');

	$.each([lookArray], function(index, value) {
		$.each(this, function(index, value) {
//			console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);

			if (this['lip_shade'] === lip_shade || this['look_type'] === look_type) {
//				console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);
				filterShades.push(this['lip_shade']);
//				filterShades.push({'lip_shade':this['lip_shade']});
			}
		});
	});

	filterShades = removeArrayDupes(filterShades, 'filterShades');

//	console.log('');
//	console.log('POST removeArrayDupes - filterShades.length = ' + filterShades.length);
//	console.log('POST removeArrayDupes - filterShades = ');
//	console.log(filterShades);

	disableMe(shadeOptArray, filterShades, "lipList");


	//<!--/* ------------------------- DISABLE LOOK OPTIONS(S) ("look_type" in LOOKS DATABASE) ------------------------- */-->

//	for (var s = 0; s < filterShades.length; s++) {
//		console.log('');
//		console.log('s = ' + s + '     filterShades[' + s + '] = ' + filterShades[s]);

		$.each([lookArray], function(index, value) {
			$.each(this, function(index, value) {

//				console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);
////				console.log('this[lip_shade] = ' + this['lip_shade'] + '     filterShades[' + s + '] = ' + filterShades[s]);
//				console.log('this[lip_shade] = ' + this['lip_shade'] + '     lip_shade = ' + lip_shade);

//				if (this['lip_shade'] === filterShades[s]) {
				if (this['lip_shade'] === lip_shade) {
//				if (this['lip_shade'] !== 'ALL' && this['lip_shade'] === lip_shade) {
//					console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type']);
					filterLooks.push(this['look_type']);
				}
			});
		});
//	}

	filterLooks = removeArrayDupes(filterLooks, 'filterLooks');

	console.log('');
	console.log('POST removeArrayDupes - filterLooks.length = ' + filterLooks.length);
	console.log('POST removeArrayDupes - filterLooks = ');
	console.log(filterLooks);

//	console.log('this[lip_shade] = ' + this['lip_shade'] + '     this[look_type] = ' + this['look_type'] + '     lip_shade = ' + lip_shade);

//	disableMe(lookOptArray, filterLooks, "lookList");

//	if (this['lip_shade'] === lip_shade) {
	if (this['lip_shade'] !== 'ALL') {
		disableMe(lookOptArray, filterLooks, "lookList");
	}

}



//<!--/* ========================= LOAD LOOKS (lookArray) & LOAD PRODUCTS (prodArray)  ========================= */-->

var lookNumArray = [];
var thisEyeArray = [];
var thisLipArray = [];
var thisBaseArray = [];

var prodCount = 0;

var appOpen = 0;


//<!--/* ------------------------- LOAD LOOKS - FUNCTION: loadLooksNProds (*THEN* LOAD INITIAL PRODS via FUNCTION: getProducts) ------------------------- */-->

//function loadLooksNProds(level, lip_shade, look_type, hair) {
//function loadLooksNProds(lip_shade, look_type, hair) {
function loadLooksNProds(lip_shade, look_type, hair, thisListSelect) {

//	console.log('');
//	console.log('==============================');
//	console.log('loadLooksNProds');
//	console.log('==============================');

////	console.log('level = ' + level + '     lip_shade = ' + lip_shade + '     look_type = ' + look_type + '     hair = ' + hair);
//	console.log('loadLooksNProds: lip_shade = ' + lip_shade + '     look_type = ' + look_type + '     hair = ' + hair);
//
//	console.log('');
//	console.log('loadLooksNProds: lookArray.length = ' + lookArray.length);
//	console.log('loadLooksNProds: lookArray = ');
//	console.log(lookArray);
//
//	console.log('');
//	console.log('loadLooksNProds: prodArray.length = ' + prodArray.length);
//	console.log('loadLooksNProds: prodArray = ');
//	console.log(prodArray);


	//<!--/* ------------------------- CLEAR PRODS & LOOKS ------------------------- */-->

//	clearProdMenu();
//	clearProdMenu('loadLooksNProds');

//	$('#imgs, #hair, #eyeContainer, #lipContainer, #baseContainer').empty();
	$('#imgs, #hair').empty();
//	$('.sectProdContainer').empty();
	filteredLooks = [];
	thisLookArray = [];


	//<!--/* ------------------------- DISABLE OPTIONS ------------------------- */-->

//	disableOptions(level, lip_shade, look_type);
//	disableOptions(lip_shade, look_type);
	disableOptions(lip_shade, look_type, thisListSelect);

//	if (this['lip_shade'] !== 'ALL') {
//		disableOptions(lip_shade, look_type);
//	}


	//<!--/* ------------------------- GET LOOKS & PRODS ------------------------- */-->

//	console.log('lip_shade = ' + lip_shade);

	filteredLooks = lookArray.filter(function(obj) {
//		return (obj.level === level) && (obj.lip_shade === lip_shade) && (obj.look_type === look_type);

		if (lip_shade === 'ALL') {
			return (obj.look_type === look_type);
		} else {
			return (obj.lip_shade === lip_shade) && (obj.look_type === look_type);
		}
	});

//	console.log('');
//	console.log('loadLooksNProds: filteredLooks.length = ' + filteredLooks.length);
//	console.log('loadLooksNProds: filteredLooks = ');
//	console.log(filteredLooks);

	if (filteredLooks.length === 0) {

//		console.log('PING! there are no looks available');

		$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/look/look_000.jpg" id="look000" />');
		$('#hair').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_000.jpg" />');


		//<!--/* ------------------------- RESET LOOKS SWIPE POSITION ------------------------- */-->

		getMaxImages(filteredLooks.length);
		swipeBack(filteredLooks.length);


		//<!--/* ------------------------- GET PRODS ------------------------- */-->

		$('.prodMenu').hide();
		$('.lookNum').hide();
		$('.addToList').hide();

	} else {

//		console.log('');
//		console.log('PING! WE HAVE LOOKS AVAILABLE! HUZZAH!     appOpen = ' + appOpen);
////		console.log('');
////		console.log('loadLooksNProds: lookArray = ' + lookArray);
////		console.log('');
////		console.log('loadLooksNProds: prodArray = ' + prodArray);


		$.each(filteredLooks, function(index, value) {
			$.each(this, function(index, value) {
				if (index === 'look_num') {

//					console.log('index = ' + index + '     value = ' + value);
//					console.log('hair = ' + hair);

					thisLookArray.push(value);

					$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/look/look_' + value + '.jpg" id="' + index + '_' + value + '" />');
					$('#hair').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_' + hair + '.jpg" />');
				}
			});
		});


//		if(appOpen === 0) {
//
////			console.log('');
////			console.log('PING! APP OPEN FOR FIRST TIME!     appOpen = ' + appOpen);
//
////			var h = 0;
//
//			appOpen = 1;
//
//			$.each(filteredLooks, function(index, value) {
//				$.each(this, function(index, value) {
//					if (index === 'look_num') {
//
////						console.log('index = ' + index + '     value = ' + value);
////						console.log('hair = ' + hair);
//
//						thisLookArray.push(value);
//
////						h++;
////						console.log('loadLooksNProds(): h = ' + h);
//
//						$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/look/look_' + value + '.jpg" id="' + index + '_' + value + '" />');
//						$('#hair').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_' + hair + '.jpg" />');
//					}
//				});
//			});
//
//		} else {
//
////			console.log('');
////			console.log('PING! APP OPEN ALPREADY! just playing with options now.     appOpen = ' + appOpen);
//
////			var h = 0;
//
//			$.each(filteredLooks, function(index, value) {
//				$.each(this, function(index, value) {
//					if (index === 'look_num') {
//
////						console.log('index = ' + index + '     value = ' + value);
////						console.log('hair = ' + hair);
//
//						thisLookArray.push(value);
//
////						h++;
////						console.log('loadLooksNProds(): h = ' + h);
//
//						$('#imgs').append('<img src="../../mobile/RDSlookfinder/img/look/look_' + value + '.jpg" id="' + index + '_' + value + '" />');
//						$('#hair').append('<img src="../../mobile/RDSlookfinder/img/hair/hair_' + hair + '.jpg" />');
//					}
//				});
//			});
//		}


		//<!--/* ------------------------- LOAD LOOK NUMBER ------------------------- */-->

//		console.log('loadLooksNProds: thisLookArray = ' + thisLookArray);

		$('#thisLookNum').text(thisLookArray[0]);


		//<!--/* ------------------------- RESET LOOKS SWIPE POSITION ------------------------- */-->

		getMaxImages(filteredLooks.length);
		swipeBack(filteredLooks.length);


		//<!--/* ------------------------- GET PRODS ------------------------- */-->

		$('.prodMenu').show();
		$('.lookNum').show();
		$('.addToList').show();
//		console.log('loadLooksNProds - thisLookArray = ' + thisLookArray);
		getProducts(filteredLooks, thisLookArray, 0);


//		//<!--/* ------------------------- LOAD SCROLLERS ------------------------- */-->
//
//		loadScrollers();
//		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	}


	//<!--/* ------------------------- DISPLAY REFRESH/REDRAW/REAPINT - ref: http://www.eccesignum.org/blog/solving-display-refreshredrawrepaint-issues-in-webkit-browsers ------------------------- */-->
//
//	//Silently append and remove a text node	
//	//This is the fix that worked for me in the Phonegap/Android application the setTimeout allows a 'tick' to happen in the browser refresh, giving the UI time to update
//
//	var n = document.createTextNode(' ');
//	$('#imgs, #hair').append(n);
//	setTimeout(function(){n.parentNode.removeChild(n)}, 0);


//	console.log('');
//	console.log('loadLooksNProds: localStorage.length = ' + localStorage.length);
//	console.log('loadLooksNProds: localStorage = ');
//	console.log(localStorage);

}


//<!--/* ------------------------- CHANGE LOOKS based on form selections - FUNCTION: getSelectedLooks ------------------------- */-->

function getSelectedLooks(thisValue) {

//	console.log('');
//	console.log('==============================');
//	console.log('getSelectedLooks');
//	console.log('==============================');
//
//	console.log('thisValue = ' + thisValue);
//	console.log('thisValue.id = ' + thisValue.id);


//	level = $('#toneList').val();
	lip_shade = $('#lipList').val();
	look_type = $('#lookList').val();
	hair = $('#hairList').val();


	//<!--/* ------------------------- CHANGE lookHed & lookDescr COPY ------------------------- */-->

//	console.log('lookHed = ' + $('.lookHed').text());
//	console.log('lookDescrQuote = ' + $('.lookDescrQuote').text());
//	console.log('lookDescrAuthor = ' + $('.lookDescrAuthor').text());
//	console.log('');

	switch (look_type) {
		case 'Minimalist':
			$('.lookHed').text('Minimalist');
			$('.lookDescrQuote').text('\"This fresh and simple look only takes a few minutes to apply, but makes you confident to face the day.\"');
			$('.lookDescrAuthor').text('- Global Makeup Artist, Rebecca Restrepo');
			break;

		case 'Polished':
			$('.lookHed').text('Polished');
			$('.lookDescrQuote').text('\"The \'Polished\' look is for the woman who wants a timeless, classic makeup look to flatter her appearance.\"');
			$('.lookDescrAuthor').text('- Global Makeup Artist, Rebecca Restrepo');
			break;

		case 'Daring':
			$('.lookHed').text('Daring');
			$('.lookDescrQuote').text('\"Make a bold statement with this dramatic and trend-setting makeup look.\"');
			$('.lookDescrAuthor').text('- Global Makeup Artist, Rebecca Restrepo');
			break;

		case 'Seasonal':
			$('.lookHed').text('Seasonal');
			$('.lookDescrQuote').text('\"QUOTE NEEDED\"');
			$('.lookDescrAuthor').text('- AUTHOR NEEDED');
			break;

		default:
			$('.lookHed').text('Minimalist');
			$('.lookDescrQuote').text('\"This fresh and simple look only takes a few minutes to apply, but makes you confident to face the day.\"');
			$('.lookDescrAuthor').text('- Global Makeup Artist, Rebecca Restrepo');
			break;
	}


//	loadLooksNProds(level, lip_shade, look_type, hair);
//	loadLooksNProds(lip_shade, look_type, hair);
	loadLooksNProds(lip_shade, look_type, hair, thisValue.id);
}


//<!--/* ------------------------- RESET LOOKS - FUNCTION: resetLooks ------------------------- */-->

//function resetLooks() {
function resetLooks(thisTrigger) {

//	console.log('');
//	console.log('==============================');
//	console.log('resetLooks');
//	console.log('==============================');
//
//	console.log('thisTrigger = ' + thisTrigger);

	$('.lookHed').text('Minimalist');
	$('.lookDescrQuote').text('\"This fresh and simple look only takes a few minutes to apply, but makes you confident to face the day.\"');
	$('.lookDescrAuthor').text('- Global Makeup Artist, Rebecca Restrepo');

//	$('#toneList option').prop('selected', false);
//	$('#hairList option').prop('selected', false);
//	$('#lipList option').prop('selected', false);
//	$('#lookList option').prop('selected', false);
//
//	$('#toneList option').prop('disabled', false);
//	$('#hairList option').prop('disabled', false);
//	$('#lipList option').prop('disabled', false);
//	$('#lookList option').prop('disabled', false);

//	resetOptions('toneList');
//	resetOptions('lipList');
//	resetOptions('lookList');
//	resetOptions('hairList');

//	setFreeOptions('toneList');
	setFreeOptions('lipList');
	setFreeOptions('lookList');
	setFreeOptions('hairList');

//	level = 'Level1';
//	lip_shade = 'Neutral';
	lip_shade = 'ALL';
	look_type = 'Minimalist';
	hair = 'blonde';

////	loadLooksNProds(level, lip_shade, look_type, hair);
//	loadLooksNProds(lip_shade, look_type, hair);

	lookArray = [];
	prodArray = [];

	thisLookArray = [];
	thisProdArray = [];

	loadLookArray();

	$(".swipeCTA").animate({
		opacity: 0.5,
		}, 125, function() {
		// Animation complete.
	});

	if ((thisTrigger === 'resetBtn' && shopListArray.length !== 0) || (thisTrigger === 'newSessionBtn' && shopListArray.length !== 0)) {
		emptyList(event);
	}


	//<!--/* ------------------------- SCROLLERS - SHOPPING LIST (iScroll) ------------------------- */-->

//	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true});
//
//	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true,
//	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: false, tap: true,
//	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true, tap: true,
	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, tap: true,
		onBeforeScrollStart: function (e) {
			console.log('e = ' + e + '     e.target = ' + e.target);

//			var target = e.target;
//
//			while (target.nodeType != 1) target = target.parentNode;
//				if (target.tagName.toLowerCase() != 'SELECT' && target.tagName.toLowerCase() != 'INPUT' && target.tagName.toLowerCase() != 'TEXTAREA' && target.tagName.toLowerCase() != 'CHECKBOX')
//			if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'CHECKBOX') {
//				e.preventDefault();
//			}

			e.preventDefault();
		}
	});

//	$('.listContainer').append('<img src="img/spacer.gif');
//	$('#shoppingList').append('<img src="img/spacer.gif');

//	console.log('');
//	console.log('shopListScroll = ' + shopListScroll);
//	console.dir('shopListScroll.width() = ' + $('shopListScroll').width());


	//<!--/* ------------------------- LOAD SCROLLERS ------------------------- */-->

	loadScrollers();
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}


//<!--/* ------------------------- CHANGE HAIR COLOR - FUNCTION: hairColor ------------------------- */-->

function hairColor() {

//	console.log('');
//	console.log('==============================');
//	console.log('hairColor');
//	console.log('==============================');

	var haircolor = document.getElementById("hairList").options[hairList.selectedIndex].value.toLowerCase();
//	alert('MY HAIR, THO! It\'s ' + haircolor);

	var hairPath = "img/hair/hair_";
//	var hairExt = ".png";
//	var hairExt = ".gif";
	var hairExt = ".jpg";
	var thisHair = hairPath + haircolor + hairExt;
//	alert('hairPath = ' + hairPath + '   hairExt = ' + hairExt);
//	alert(thisHair);

//	if (filteredLooks.length != 0) {
	if (filteredLooks.length !== 0) {
		$('#hair img').each(function() {
	//		alert($(this).attr('src'));
			$(this).attr('src', thisHair);
		});
	}

//	$('#hair img').each(function() {
////		alert($(this).attr('src'));
//		$(this).attr('src', thisHair);
//	});
}


//<!--/* ------------------------- SEND #swipeMe BACK TO ORIGINAL POSITION ON CHANGE/RESET LOOKS - FUNCTION: swipeBack ------------------------- */-->

var lookWidth = 0;

function swipeBack(filteredLooksLength) {

//	console.log('');
//	console.log('==============================');
//	console.log('swipeBack');
//	console.log('==============================');
//
////	console.log('tempImageWidth = ' + tempImageWidth + '     filteredLooksLength = ' + filteredLooksLength + '     $(window).width() = ' + $(window).width());
//	console.log('thisLookArray.length = ' + thisLookArray.length);
//	console.log('lookPosition = ' + lookPosition);
//	console.log('currentImg = ' + currentImg);

	lookWidth = $('#content').width();
//	lookWidth = Math.ceil($(window).width() * 0.99);

//	var thisSwipeWidth = ((lookWidth * filteredLooksLength)/$(window).width()) * 100;
	var thisSwipeWidth = ((lookWidth * filteredLooksLength)/lookWidth) * 100;

	console.log('lookWidth = ' + lookWidth + 'px   thisSwipeWidth = ' + thisSwipeWidth + '%');

	$('#swipeMe').css('width', thisSwipeWidth+'%');
//	$('#swipeMe').css("-webkit-transform", "translate3d(0px,0px,0px)");
//	$('#swipeMe').css("-webkit-transform", "translate(0px,0px)");

	if (lookPosition > 0) {
		for(i = 0; i <= lookPosition; i++) {
//			console.log('PING! currentImg > scrollImages!');
			currentImg = Math.max(currentImg-1, 0);
			scrollImages(IMG_WIDTH * currentImg, speed);
		}
	}
}



//<!--/* ========================= LOAD PRODUCTS (prodArray) ========================= */-->

//<!--/* ------------------------- CLEAR PRODUCTS MENU prodMenu - FUNCTION: clearProdMenu ------------------------- */-->

//function clearProdMenu() {
function clearProdMenu(trigger) {

//	console.log('');
//	console.log('==============================');
//	console.log('clearProdMenu');
//	console.log('==============================');
//
////	console.log('');
//
//	console.log('trigger = ' + trigger);
//
////	console.log('prodScroll = ' + prodScroll);
////	console.dir('prodScroll.options = ' +prodScroll.options);

//	$('input[type="checkbox"]').each(function() {
//		console.log('found a checkbox! this.id = ' + this.id);
//		this.remove();
//	});

	$('.sectProdContainer').empty();
	
//	if (prodScroll != undefined) {
	if (prodScroll !== undefined) {
//		console.log('a prodScroll exists... prodScroll = ' + prodScroll);
		prodScroll.destroy();
//		prodScroll.remove();
	}

	thisEyeArray = [];
	thisLipArray = [];
	thisBaseArray = [];

	tempProdArray = [];
	tempProdImgArray = [];
}


//<!--/* ------------------------- GET PRODUCTS FOR INDIVIDUAL LOOKS - FUNCTION: getProducts ------------------------- */-->

function getProducts(filteredLooks, thisLookArray, i) {

//	console.log('');
//	console.log('==============================');
//	console.log('getProducts');
//	console.log('==============================');

////	console.log('');
////	console.log('getProducts - level = ' + level + '     lip_shade = ' + lip_shade + '     look_type = ' + look_type + '     hair = ' + hair);
////	console.log('getProducts - lookArray = ' + lookArray);
////	console.log('getProducts - prodArray = ' + prodArray);
//	console.log('getProducts - filteredLooks = ' + filteredLooks);
//	console.log('getProducts - thisLookArray = ' + thisLookArray);
//	console.log('getProducts - thisLookArray[' + i + '] = ' + thisLookArray[i]);
//
//	console.log('');

	clearProdMenu('getProducts');

//	var thisProdArray = [];
//	var thisShadeArray = [];

	$.each(filteredLooks[i], function(index, value) {
//		console.log('filteredLooks - ' + index + ' = ' + value);
//		console.log('filteredLooks[this] = ' + filteredLooks[this]);
//		console.log('filteredLooks[i] = ' + filteredLooks[' + i + '] + '     filteredLooks - index = ' + index + '     value = ' + value);

		if (index.indexOf('look_') && index.indexOf('level') && index.indexOf('lip_') && index.indexOf('base_') && value !== '') {
//			console.log('');
//			console.log('this = ' + this);
//			console.log('getProducts - ' + index + ' = ' + value);
			thisEyeArray.push(value);
		}

		if (index.indexOf('look_') && index.indexOf('level') && index.indexOf('eye_') && index.indexOf('base_') && value !== '') {
//			console.log('');
//			console.log('this = ' + this);
//			console.log('getProducts - ' + index + ' = ' + value);
			thisLipArray.push(value);
		}

		if (index.indexOf('look_') && index.indexOf('level') && index.indexOf('eye_') && index.indexOf('lip_') && value !== '') {
//			console.log('');
//			console.log('this = ' + this);
//			console.log('getProducts - ' + index + ' = ' + value);
			thisBaseArray.push(value);
		}
	});


	thisLipArray.shift();	// gets rid of lip_shade - don't need this because it yields no products


//	console.log('');
//	console.log('PRE removeArrayDupes - thisEyeArray.length = ' + thisEyeArray.length);
	thisEyeArray = removeArrayDupes(thisEyeArray, 'thisEyeArray');
//	console.log('POST removeArrayDupes - thisEyeArray.length = ' + thisEyeArray.length);
//
//	console.log('');
//	console.log('PRE removeArrayDupes - thisLipArray.length = ' + thisLipArray.length);
	thisLipArray = removeArrayDupes(thisLipArray, 'thisLipArray');
//	console.log('POST removeArrayDupes - thisLipArray.length = ' + thisLipArray.length);
//
//	console.log('');
//	console.log('PRE removeArrayDupes - thisBaseArray.length = ' + thisBaseArray.length);
	thisBaseArray = removeArrayDupes(thisBaseArray, 'thisBaseArray');
//	console.log('POST removeArrayDupes - thisBaseArray.length = ' + thisBaseArray.length);


//	prodCount = (thisEyeArray.length + thisLipArray.length + thisBaseArray.length)/2;
	prodCount = ((thisEyeArray.length * 0.5) + (thisLipArray.length * 0.5) + (thisBaseArray.length * 0.5));

//	console.log('');
//	console.log('thisEyeArray.length = ' + thisEyeArray.length + '     thisEyeArray = ' + thisEyeArray);
//	console.log('thisLipArray.length = ' + thisLipArray.length + '     thisLipArray = ' + thisLipArray);
//	console.log('thisBaseArray.length = ' + thisBaseArray.length + '     thisBaseArray = ' + thisBaseArray);
//	console.log('');
//	console.log('prodCount = ' + prodCount);

	$('#eyeContainer').width((thisEyeArray.length * 0.5) * (125 + 25));		// == > ref: .sectProd in default.css -  width: 125px;, padding: 12.5px;
	$('#lipContainer').width((thisLipArray.length * 0.5) * (125 + 25));		// == > ref: .sectProd in default.css -  width: 125px;, padding: 12.5px;
	$('#baseContainer').width((thisBaseArray.length * 0.5) * (125 + 25));		// == > ref: .sectProd in default.css -  width: 125px;, padding: 12.5px;

//	var prodContainerWidth = Math.ceil(((prodCount * (125 + 25))/$(window).width()) * 100);
	var prodContainerWidth = Math.ceil(((prodCount * (125 + 25))/$('body').width()) * 100);
//	console.log('prodContainerWidth = ' + prodContainerWidth + '%');

	$('.prodContainer').css('width', prodContainerWidth+'%');					// == > ref: .sectProd in default.css -  width: 125px;, padding: 12.5px;


	//<!--/* ------------------------- prodScroll.refresh ------------------------- */-->

//	console.log('prodScroll = ' + prodScroll);

	setTimeout(function () {
		prodScroll.refresh();	// == > ref: see SCROLLERS - PRODUCT MENU (iScroll) below
		prodScroll.scrollTo(0,0);
	}, 0);

	loadProdMenu(thisEyeArray, $('#eyeContainer'), 'EYE');
	loadProdMenu(thisLipArray, $('#lipContainer'), 'LIP');
	loadProdMenu(thisBaseArray, $('#baseContainer'), 'BASE');


	//<!--/* ------------------------- LOAD SCROLLERS ------------------------- */-->

	loadScrollers();
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}


//<!--/* ------------------------- LOAD ProdMenu PRODUCTS FOR INDIVIDUAL LOOKS - FUNCTION: loadProdMenu ------------------------- */-->

var tempProdArray = [];
var tempProdImgArray = [];

function loadProdMenu(thisSectProdArray, sectProdContainer, thisCat) {

//	console.log('');
//	console.log('==============================');
//	console.log('loadProdMenu');
//	console.log('==============================');
//
//	console.log('thisSectProdArray = ' + thisSectProdArray + '     sectProdContainer = ' + sectProdContainer + '     thisCat = ' + thisCat);

	for (i = 0; i < thisSectProdArray.length; i+=2) {
//		console.log('i = ' + i + '     thisSectProdArray[' + i + '] = ' + thisSectProdArray[i] + '     thisSectProdArray[' + (i+1) + '] = ' + thisSectProdArray[i+1]);

		$.each(prodArray, function(index, value) {
//			console.log('getProducts - ' + index + ' = ' + value);
			var tempProd = this;
//			console.log('tempProd[cat1] = ' + tempProd['cat1']);
//			tempProdArray.push(this);

			if (tempProd['product'] === thisSectProdArray[i] && tempProd['shade'] === thisSectProdArray[i+1]) {
//				console.log('prodArray - ' + index + ' = ' + value);
//				console.log('tempProd[product] = ' + tempProd['product'] + '     tempProd[shade] = ' + tempProd['shade']);
				tempProdArray.push(tempProd);
			}
		});
	}

	$.each(tempProdArray, function(index, value) {

		var tempProd = this;

//		console.log('');
//		console.log('tempProd = ' + tempProd);
//		console.log('tempProd - ' + index + ' = ' + value);

		$.each(this, function(index, value) {
			if (index === 'cat1' && value === thisCat) {

//				console.log('');
//				console.log('tempProd = ' + tempProd);
//				console.log('getProducts - ' + index + ' = ' + value);

				$.each(tempProd, function(index, value) {

//					console.log('');
//					console.log('tempProd - ' + index + ' = ' + value);
//					console.log('tempProd[image] = ' + tempProd['image']);


	//<!--/* ------------------------- calls FUNCTION openProduct using the image ID built using PRODUCT & SHADE from prodArray ------------------------- */-->

					if (index === 'image' && value !== '') {

//						console.log('');
//						console.log('image - ' + index + ' = ' + value);
//						console.log('adding checkbox...');

//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '"><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '" onClick="toggleCheck(this)">' + tempProd['shade'] + '</label></div>');
//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" onClick="toggleCheck(this)"><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '" onClick="toggleCheck(this)">' + tempProd['shade'] + '</label></div>');
						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" onClick="toggleCheck(event, this)"><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label></div>');
//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" ><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label></div>');

//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" onClick="toggleCheck(this)"></div>');
//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + value + '" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '"></div>');

					} else if (index === 'image' && value === '') {

//						console.log('');
//						console.log('image - ' + index + ' = ' + value);
//						console.log('adding checkbox...');

//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '"><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '" onClick="toggleCheck(this)">' + tempProd['shade'] + '</label></div>');
//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" onClick="toggleCheck(this)"><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '" onClick="toggleCheck(this)">' + tempProd['shade'] + '</label></div>');
						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" onClick="toggleCheck(event, this)"><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label></div>');
//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" ><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label></div>');

//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '" onClick="toggleCheck(this)"></div>');
//						sectProdContainer.append('<div class="sectProd"><a href="#thisProduct"><div class="sectProdHed" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')">' + tempProd['product'] + '</div></a><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" id="' + tempProd['product'] + ' - ' + tempProd['shade'] + '" onClick="openProduct(\'' + tempProd['product'] + '\', \'' + tempProd['shade'] + '\')" /></a><label for="' + tempProd['product'] + ' ' + tempProd['shade'] + '">' + tempProd['shade'] + '</label><input type="checkbox" id="' + tempProd['product'] + ' ' + tempProd['shade'] + '" name="' + tempProd['product'] + '" value="' + tempProd['shade'] + '"></div>');
					}
				});
			}
		});
	});

	listToChecks();
}



//<!--/* ========================= SCROLLERS - PRODUCT MENU (iScroll) ========================= */-->

var prodScroll;
//var shopListScroll;

function loadScrollers() {

//	console.log('');
//	console.log('==============================');
//	console.log('loadScrollers');
//	console.log('==============================');

//	var prodScroll;
//	var shopListScroll;

//	prodScroll = new IScroll('#products', { scrollX: true, scrollY: false, mouseWheel: true, click: false});

//	prodScroll = new IScroll('#products', { scrollX: true, scrollY: false, mouseWheel: true, click: true,
//	prodScroll = new IScroll('#products', { scrollX: true, scrollY: false, mouseWheel: true, click: false, tap: true,
//	prodScroll = new IScroll('#products', { scrollX: true, scrollY: false, mouseWheel: true, click: true, tap: true,
	prodScroll = new IScroll('#products', { scrollX: true, scrollY: false, mouseWheel: true, tap: true,
	
		onBeforeScrollStart: function (e) {

			var target = e.target;

//			while (target.nodeType != 1) target = target.parentNode;
			while (target.nodeType !== 1) {
				target = target.parentNode;
			}
//			if (target.tagName.toLowerCase() != 'SELECT' && target.tagName.toLowerCase() != 'INPUT' && target.tagName.toLowerCase() != 'TEXTAREA' && target.tagName.toLowerCase() != 'CHECKBOX')
//			if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'CHECKBOX') {
			if (target.tagName !== 'SELECT' && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA' && target.tagName !== 'CHECKBOX') {
				e.preventDefault();
			}
		}
	});


//	shopListScroll = new IScroll('#shoppingList', { scrollX: false, scrollY: true, mouseWheel: true, click: true});
}



//<!--/* ========================= CHECKBOXES ========================= */-->

//<!--/* ------------------------- FUNCTION: numChecked ------------------------- */-->

function numChecked() {

//	console.log('');
//	console.log('==============================');
//	console.log('numChecked');
//	console.log('==============================');

	var checkedNum = 0;

	$('input[type=checkbox]').each(function() {
//		console.log('this.name = ' + $(this).attr('name') + '     this.value = ' + $(this).attr('value'));
		if ($(this).is(':checked')) {
//			console.log('PING! a box was checked!');
			checkedNum++;
		}
	});

//	console.log('checkedNum = ' + checkedNum);
	return checkedNum;
}


//<!--/* ------------------------- FUNCTION: toggleCheck ------------------------- */-->

//function toggleCheck(thisToggle) {
function toggleCheck(event, thisToggle) {

//	console.log('');
//	console.log('==============================');
//	console.log('toggleCheck');
//	console.log('==============================');
//
//	console.log('');
////	console.log('event = ' + event);
//	console.log('event.type = ' + event.type);
////	console.log('');
////	console.log('this = ' + this);
////	console.log('$(this) = ' + $(this));
////	console.log('thisToggle = ' + thisToggle);
//	console.log('thisToggle.type = ' + thisToggle.type);
//	console.log('thisToggle.checked = ' + thisToggle.checked);
//	console.log('thisToggle.label = ' + thisToggle.label);
//	console.log('');




	if (thisToggle.type === 'checkbox') {

		if (thisToggle.checked === false) {
//			console.log('PING! thisToggle was checked! I just UNCHECKED it.');
			removeFromList(event);
		}

		var checkedNum = numChecked();
//		console.log('checkedNum - FUNCTION: toggleCheck()= ' + checkedNum);

//		checksToList();

	} else {
//		console.log('PING! you DID NOT click on a CHECKBOX; you clicked a LABEL!');
//		console.log('PING! you DID NOT click on a CHECKBOX; you clicked a ' + thisToggle.parentNode.childNodes[thisToggle.htmlFor].type + '!');
//		console.log('');

		var thisType = thisToggle.parentNode.childNodes[thisToggle.htmlFor].type;
		var thisProd = thisToggle.parentNode.childNodes[thisToggle.htmlFor].name;
		var thisShade = thisToggle.parentNode.childNodes[thisToggle.htmlFor].value;

//		console.log('thisType = ' + thisType + '     thisProd = ' + thisProd + '     thisShade = ' + thisShade);

		if (thisToggle.parentNode.childNodes[thisToggle.htmlFor].checked === true) {
			thisToggle.parentNode.childNodes[thisToggle.htmlFor].checked = false;
//			console.log('PING! thisToggle was checked! I just UNCHECKED it.');
			removeFromList(event);
		} else {
			thisToggle.parentNode.childNodes[thisToggle.htmlFor].checked = true;
//			console.log('PING! thisToggle was NOT checked! I just CHECKED it.');
		}

		var checkedNum = numChecked();
//		console.log('checkedNum - FUNCTION: toggleCheck()= ' + checkedNum);

//		checksToList();
	}

	checksToList();






//	if (checkedNum !== 0) {
////		console.log('PING! there are ' + checkedNum + ' boxes checked!');
//		animateCTA(1);
//	} else {
////		console.log('PING! there are NO boxes checked!');
//		animateCTA(0);
//	}

}



//<!--/* ========================= PRODUCT DETAIL ========================= */-->

//<!--/* ------------------------- FUNCTION: prodParity ------------------------- */-->

function prodParity(thisIndex) {

//	console.log('');
//	console.log('==============================');
//	console.log('prodParity');
//	console.log('==============================');
////	console.log('prodParity:   thisProdName = ' + thisProdName + '     randProd = ' + randProd + '    thisIndex = ' + thisIndex);
////	console.log('prodParity:   randProd = ' + randProd + '    thisIndex = ' + thisIndex);
////	console.log('prodParity:   thisIndex = ' + thisIndex);

//	if (thisIndex % 2 == 0) {
	if (thisIndex % 2 === 0) {
//		console.log('prodParity:   thisIndex = ' + thisIndex + ' is EVEN.');
//		console.log('prodParity:   thisIndex = ' + thisIndex + ' should RETURN.');

		return thisIndex;

	} else {
//		console.log('prodParity:   thisIndex = ' + thisIndex + ' is ODD.');

		thisIndex = thisIndex - 1;

//		console.log('prodParity:   thisIndex = ' + thisIndex + ' should RETURN.');

		return thisIndex;
	}
}


//<!--/* ------------------------- FUNCTION: randProdSearch - finds random product as ------------------------- */-->

function randProdSearch(thisProdRec, thisArray, searchIndex) {

//	console.log('');
//	console.log('==============================');
//	console.log('randProdSearch');
//	console.log('==============================');
//	console.log('thisProdRec = ' + thisProdRec + '     thisArray = ' + thisArray + '     searchIndex = ' + searchIndex);

	$.each([tempProdArray], function(index, value) {
//		console.log('tempProdArray:    index = ' + index + '     value = ' + value);

		$.each(this, function(index, value) {
//			console.log('tempProdArray:     this[cat1] = ' + this['cat1'] + '     this[product] = ' + this['product'] + '     this[shade] = ' + this['shade']);

			if (this['product'] === thisArray[searchIndex] && this['shade'] === thisArray[searchIndex + 1]) {

				$('#' + thisProdRec + ' > img').empty();
				$('#' + thisProdRec + ' > h3').empty();
				$('#' + thisProdRec + ' > p').empty();

				if (this['image'] !== '') {
					$('#' + thisProdRec + ' > img').attr('src', 'img/prod/' + this['image']);
				} else {
					$('#' + thisProdRec + ' > img').attr('src', 'img/prod/prod_000.jpg');
				}

				$('#' + thisProdRec + ' > h3').append(this['product']);
				$('#' + thisProdRec + ' > p').append(this['shade']);
			}
		});
	});
}


//<!--/* ------------------------- FUNCTION: getRandProd - BUG: thisArray is cannibalizing itself; find a way to refresh thisArray for each iteration of FUNCTION: randProdSearch ------------------------- */-->

function getRandProd(thisProd, thisShade, thisArray, thisProdRecProd) {

//	console.log('');
//	console.log('');
//	console.log('==========================================================================================');
//	console.log('==============================');
//	console.log('getRandProd');
//	console.log('==============================');

	var thisProdRec = 'prodRecProd' + thisProdRecProd;

//	console.log('thisProd = ' + thisProd + '     thisShade = ' + thisShade + '     thisProdRecProd = ' + thisProdRecProd + '     thisProdRec = ' + thisProdRec);
//	console.log('thisArray = ' + thisArray + '     thisArray.length = ' + thisArray.length);
//	console.log('tempProdArray = ' + tempProdArray);
//	console.log('');
//	console.log('thisEyeArray = ' + thisEyeArray);
//	console.log('thisLipArray = ' + thisLipArray);
//	console.log('thisBaseArray = ' + thisBaseArray);

	var searchArray = thisArray;

	$.each([thisArray], function(index, value) {

		if (thisArray.length === 2) {

//			console.log('PING!!! There is only one product in thisArray!');

			randProdSearch(thisProdRec, thisArray, 0);

		} else {

//			console.log('');
//			console.log('PRE-filter - searchArray = ' + searchArray);

			searchArray = thisArray.filter(function(i) {
				return i != thisProd;
			});

			searchArray = searchArray.filter(function(i) {
				return i != thisShade;
			});

//			console.log('POST-filter - searchArray = ' + searchArray);

			var randProd = searchArray[Math.floor(Math.random() * searchArray.length)];

			var searchIndex = searchArray.indexOf(randProd);
			searchIndex = prodParity(searchIndex);

//			randProd = searchArray[searchIndex];
//
//			console.log('');
//			console.log('randProd = ' + randProd + '     searchIndex = ' + searchIndex);

			randProdSearch(thisProdRec, searchArray, searchIndex);
		}
	});
}


//<!--/* ------------------------- FUNCTION: loadProduct ------------------------- */-->

function loadProduct(thisProd, thisShade) {

//	console.log('');
//	console.log('==============================');
//	console.log('loadProduct');
//	console.log('==============================');
//	console.log('thisProd = ' + thisProd + '     thisShade = ' + thisShade);


	$.each(prodArray, function(index, value) {
//		console.log('');
//		console.log('this[\'product\'] = ' + this['product'] + '   this[\'shade\'] = ' + this['shade'] + '   this[\'image\'] = ' + this['image']);
//		console.log('index = ' + index + '    value = ' + value);

		if (this['product'] === thisProd && this['shade'] === thisShade) {

//			console.log('this[\'product\'] = ' + this['product'] + '   this[\'shade\'] = ' + this['shade'] + '   this[\'image\'] = ' + this['image']);

			$('.prodDetailImage').empty();

			if (this['image'] !== '') {
				$('.prodDetailImage').append('<img src="../../mobile/RDSlookfinder/img/prod/' + this['image'] + '" />');
			} else {
				$('.prodDetailImage').append('<img src="../../mobile/RDSlookfinder/img/prod/prod_000.jpg" />');
			}

			$('.prodDetailName > h1').empty();
			$('.prodDetailName > h1').append(this['product']);

			$('.prodDetailName > h2').empty();
			$('.prodDetailName > h2').append(this['shade']);

			$('.prodDetailName > p').empty();
			$('.prodDetailName > p').append(this['descr1']);
//			$('.prodDetailName > p').append(this['descr2']);
		}
	});
}


//<!--/* ------------------------- FUNCTION: openProduct ------------------------- */-->

function openProduct(thisProd, thisShade) {

//	console.log('');
//	console.log('==============================');
//	console.log('openProduct');
//	console.log('==============================');
//	console.log('thisProd = ' + thisProd + '     thisShade = ' + thisShade);


	loadProduct(thisProd, thisShade);

//	NOTE: these numbers correspond to/are part of the IDs of the prodRecProd DIVs in PRODUCT DETAIL (index.php)
	getRandProd(thisProd, thisShade, thisEyeArray, '01');
	getRandProd(thisProd, thisShade, thisLipArray, '02');
	getRandProd(thisProd, thisShade, thisBaseArray, '03');
}


//<!--/* ------------------------- FUNCTION: swapProduct ------------------------- */-->

function swapProduct(thisImage) {

//	console.log('');
//	console.log('==============================');
//	console.log('swapProduct');
//	console.log('==============================');
//	console.log('thisImage = ' + thisImage + '    thisImage.parentNode.id = ' + thisImage.parentNode.id);
	
	var thisProd = $('#' + thisImage.parentNode.id + ' > h3').text();
	var thisShade = $('#' + thisImage.parentNode.id + ' > p').text();


//	var thisProd;
//	var thisShade;
//
//	$.each(prodArray, function(index, value) {
////		console.log('');
////		console.log('this[\'product\'] = ' + this['product'] + '   this[\'shade\'] = ' + this['shade'] + '   this[\'image\'] = ' + this['image']);
////		console.log('index = ' + index + '    value = ' + value);
//
//		if (this['image'] === thisImage) {
//
////			console.log('this[\'product\'] = ' + this['product'] + '   this[\'shade\'] = ' + this['shade'] + '   this[\'image\'] = ' + this['image']);
//
//			thisProd = this['product'];
//			thisShade = this['shade'];
//		}
//	});


//	console.log('thisProd = ' + thisProd + '     thisShade = ' + thisShade);


	$('.prodDetail').fadeOut('fast', function() {
//	$('.prodDetail').fadeOut(500, function() {

		loadProduct(thisProd, thisShade);
	
	//	getRandProd(thisProd, thisShade);
		getRandProd(thisProd, thisShade, thisEyeArray, '01');
		getRandProd(thisProd, thisShade, thisLipArray, '02');
		getRandProd(thisProd, thisShade, thisBaseArray, '03');

		$('.prodDetail').fadeIn('slow');
//		$('.prodDetail').fadeIn(1000);
	});
}



//<!--/* ========================= SHOPPING LIST ========================= */-->

var shopListArray = [];

//<!--/* ------------------------- FUNCTION: listToChecks ------------------------- */-->
//<!--/* ------------------------- TOTALLY FAKE WORKAROUND: this checks the current shopListArray against the prodMenu checkboxes for the current LOOK ------------------------- */-->
//<!--/* ------------------------- TOTALLY FAKE WORKAROUND: this has to happen PRIMARILY (but NOT EXCLUSIVELY -- search all documents for "listToChecks()" ) because the prodMenu is emptied and refreshed (checkboxes UNCHECKED) each time a (new) LOOK is swiped ------------------------- */-->
//<!--/* ------------------------- TOTALLY FAKE WORKAROUND: SEE index.php ==>> SWIPE LOOKS ==>> previousImage() / nextImage() ==>> FUNCTION: getProducts(filteredLooks, thisLookArray, currentImg) // FUNCTION: listToChecks() ------------------------- */-->

function listToChecks() {

//	console.log('');
//	console.log('==============================');
//	console.log('listToChecks');
//	console.log('==============================');
//
//	console.log('shopListArray.length = ' + shopListArray.length);
//	console.log('shopListArray = ' + shopListArray);

//	currentList();

	var checkedNum = numChecked();
//	console.log('checkedNum PRE - FUNCTION: listToChecks() = ' + checkedNum);
//	console.log('');


	//<!--/* ------------------------- UNCHECK all checkboxes of current LOOK ------------------------- */-->

	$('input[type=checkbox]').each(function() {
		this.checked = false;
	});


	//<!--/* ------------------------- CHECK all checkboxes of current SHOPPING LIST ------------------------- */-->

	$.each([shopListArray], function(index, value) {
		$.each(this, function(index, value) {

//			console.log('');
//			console.log('this[product] = ' + this['product'] + '     this[shade] = ' + this['shade']);

			var thisListProd = this['product'];
			var thisListShade = this['shade'];

			$('input[type=checkbox]').each(function() {
//				console.log('this = ' + this + '     $(this) = ' + $(this) + '     this.name = ' + $(this).attr('name') + '     this.value = ' + $(this).attr('value'));

//				var thisToggle = $(this);
				var thisToggle = this;
				var thisToggleName = $(this).attr('name');
				var thisToggleValue = $(this).attr('value');

//				console.log('thisToggle = ' + thisToggle + '     thisToggleName = ' + thisToggleName + '     thisToggleValue = ' + thisToggleValue);

				if (thisToggleName === thisListProd && thisToggleValue === thisListShade) {
//					console.log('');
//					console.log('PING! we got a match!');
					thisToggle.checked = true;
				}
			});
			
		});
	});

	checkedNum = numChecked();
//	console.log('');
//	console.log('checkedNum POST - FUNCTION: listToChecks() = ' + checkedNum);
}


//<!--/* ------------------------- FUNCTION: checksToList ------------------------- */-->

function checksToList() {

//	console.log('');
//	console.log('==============================');
//	console.log('checksToList');
//	console.log('==============================');

	var checkedNum = numChecked();
//	console.log('checkedNum - FUNCTION: checksToList() = ' + checkedNum);

	if (checkedNum != 0) {
		$('input[type=checkbox]').each(function() {

//			console.log('');
//			console.log('this = ' + this + '     $(this) = ' + $(this));
//			console.log('$(this).name = ' + $(this).attr('name') + '     $(this).value = ' + $(this).attr('value'));

			if ($(this).is(':checked')) {
	//			console.log('PING! a box was checked!');
				checkList($(this).attr('name'), $(this).attr('value'));	// NOTE: this FUNCTION: checkList is under SHOPPING LIST below
//				$(this).prop('checked', false);
			}
		});

		document.getElementById('addToList').href = '#myList';
		return true;

	} else {
		alertifyRefreshDefaults();

//		alertify.alert('You don\'t have any products checked.')
		document.getElementById('addToList').href = '#close';
		return false;
	}
}


//<!--/* ------------------------- FUNCTION: openList (checks for EMPTY shopListArray; won't open list if shopListArray is empty) ------------------------- */-->

function openList() {

//	console.log('');
//	console.log('==============================');
//	console.log('openList');
//	console.log('==============================');
//
//	console.log('document.getElementById(shopListBtn).href = ' + document.getElementById('shopListBtn').href);

//	listToChecks();

	var checkedNum = numChecked();

//	if (shopListArray.length === 0) {
	if (shopListArray.length === 0 && checkedNum === 0) {
		alertifyRefreshDefaults();
		alertify.alert('Your Shopping List is empty.');
		document.getElementById('shopListBtn').href = '#close';
		document.getElementById('prodDetailListBtn').href = '#close';
		return false;
	} else {
		document.getElementById('shopListBtn').href = '#myList';
		document.getElementById('prodDetailListBtn').href = '#myList';
		checksToList();

//		currentList();

		return true;
	}

//	checksToList();
}


//<!--/* ------------------------- FUNCTION: currentList (CURRENT shopListArray) ------------------------- */-->

function currentList() {

//	console.log('');
//	console.log('==============================');
//	console.log('currentList');
//	console.log('==============================');
//
//	console.log('');
//	console.log('-------------------------');
//	console.log('PING!!! let\'s check shopListArray again...');

	$.each(shopListArray, function(index, value) {
		console.log('');
		$.each(this, function(index, value) {
			console.log('shopListArray - index = ' + index + '    value = ' + value);
		});
	});
}


//<!--/* ------------------------- FUNCTION: checkList ------------------------- */-->

function checkList(thisProd, thisShade) {

//	console.log('');
//	console.log('==============================');
//	console.log('checkList');
//	console.log('==============================');

	var isInList = false;

	//<!--/* ------------------------- FROM PRODUCT DETAIL ------------------------- */-->

//	var thisProd = $('.prodDetailName > h1').text();
//	var thisShade = $('.prodDetailName > h2').text();
////	var thisShade = $('.prodDetailDescr > p').text();
////	console.log('thisProd = ' + thisProd + '     thisShade = ' + thisShade);


	//<!--/* ------------------------- CHECK TO SEE IF PRODUCT IS ALREADY IN LIST (CHECK THE THINKING HERE - it's inefficient) ------------------------- */-->

	for (var i = 0; i < shopListArray.length; i++) {
		if (shopListArray[i]['product'] === thisProd && shopListArray[i]['shade'] === thisShade) {
//			alert('This item is already on your Shopping List.');
//			alertifyRefreshDefaults();
//			alertify.alert('<b>' + thisProd + ' - ' + thisShade + '</b><br>is already on your Shopping List.');
			isInList = true;
//		} else {
//			alert('This item is NOT on your Shopping List. Would you like to add it?');
//			addToList(thisProd, thisShade);
		}
	}

//	if (shopListArray.length === 0) {
//		$.each(prodArray, function(index, value) {
//			if (this['product'] === thisProd && this['shade'] === thisShade) {
//				shopListArray.push(this);
////				thisListProd = this['product'];
////				thisListShade = this['shade'];
////				$('.listContainer').append('<div class="prodList"><div class="prodListImg"><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + this['image'] + '" /></a><button type="button" class="prodListBtn" id="removeMe" onClick="removeFromList(event)">Remove From List</button></div><div class="prodListDescr clearFix"><h1>' + this['product'] + '</h1><h2>' + this['shade'] + '</h2><p>' + this['descr1'] + '</p></div></div>');
////				$('.listContainer').append('<div class="prodList"><div class="prodListImg"><a href="#thisProduct"><img src="../../mobile/RDSlookfinder/img/prod/' + this['image'] + '" onClick="loadProduct(' + this['product'] + ', ' + this['shade'] + ')" /></a><button type="button" class="prodListBtn" id="removeMe" onClick="removeFromList(event)">Remove From List</button></div><div class="prodListDescr clearFix"><h1>' + this['product'] + '</h1><h2>' + this['shade'] + '</h2><p>' + this['descr1'] + '</p></div></div>');
//				addToList(thisProd, thisShade);
//			}
//		});
//
//		isInList = true;
//	}

	if (isInList === false) {
		addToList(thisProd, thisShade);
		isInList = true;
	}

//	currentList();
//	listToChecks();
//	openList();
}


//<!--/* ------------------------- FUNCTION: addToList ------------------------- */-->

function addToList(thisProd, thisShade) {

//	console.log('');
//	console.log('==============================');
//	console.log('addToList');
//	console.log('==============================');
//
//	console.log('');
//	console.log('thisProd = ' + thisProd + '     thisShade = ' + thisShade);


	//<!--/* ------------------------- LOAD PRODUCT TO SHOPPING LIST ------------------------- */-->

	$.each(prodArray, function(index, value) {
		if (this['product'] === thisProd && this['shade'] === thisShade) {
			shopListArray.push(this);
//			thisListProd = this['product'];
//			thisListShade = this['shade'];
//			thisListImage = this['image'];
//			thisListDescr = this['descr1'];

//			$('.listContainer').append('
//				<div class="prodList">
//					<div class="prodListImg">
//						<a href="#thisProduct" onClick="openProduct(\'' + this['product'] + '\', \'' + this['shade'] + '\')"><img src="../../mobile/RDSlookfinder/img/prod/' + this['image'] + '" /></a>
//						<button type="button" class="prodListBtn" id="removeMe" onClick="removeFromList(event)">Remove From List</button>
//					</div>
//					<div class="prodListDescr clearFix">
//						<a href="#thisProduct" onClick="openProduct(\'' + this['product'] + '\', \'' + this['shade'] + '\')">
//							<h1>' + this['product'] + '</h1>
//							<h2>' + this['shade'] + '</h2>
//							<p>' + this['descr1'] + '</p>
//						</a>
//					</div>
//				</div>');

//			$('.listContainer').append('
//				<div class="prodList">
//					<div class="prodListImg">
//						<a href="#thisProduct" onClick="openProduct(\'' + this['product'] + '\', \'' + this['shade'] + '\')"><img src="../../mobile/RDSlookfinder/img/prod/' + this['image'] + '" /></a>
//						<button type="button" class="prodListBtn" id="removeMe" onClick="removeFromList(event)">Remove From List</button>
//					</div>
//					<a href="#thisProduct" onClick="openProduct(\'' + this['product'] + '\', \'' + this['shade'] + '\')">
//						<div class="prodListDescr clearFix">
//							<h1>' + this['product'] + '</h1>
//							<h2>' + this['shade'] + '</h2>
//							<p>' + this['descr1'] + '</p>
//						</div>
//					</a>
//				</div>');


			$('.listContainer').append('<div class="prodList"><div class="prodListImg"><a href="#thisProduct" onClick="openProduct(\'' + this['product'] + '\', \'' + this['shade'] + '\')"><img src="../../mobile/RDSlookfinder/img/prod/' + this['image'] + '" /></a><button type="button" class="prodListBtn" id="removeMe" onClick="removeFromList(event)">Remove From List</button></div><a href="#thisProduct" onClick="openProduct(\'' + this['product'] + '\', \'' + this['shade'] + '\')"><div class="prodListDescr clearFix"><h1>' + this['product'] + '</h1><h2>' + this['shade'] + '</h2><p>' + this['descr2'] + '</p></div></a></div>');

		}
	});

	listToChecks();


	//<!--/* ------------------------- shopListScroll.refresh ------------------------- */-->

//	shopListScroll.refresh();

	setTimeout(function () {

//		console.log('shopListScroll.refresh(): shopListScroll = ' + shopListScroll);

		shopListScroll.refresh();
//		shopListScroll.scrollTo(0,0);
	}, 0);


//	//<!--/* ------------------------- LOAD SCROLLERS ------------------------- */-->
//
//	loadScrollers();
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}


//<!--/* ------------------------- FUNCTION: removeFromList ------------------------- */-->

function removeFromList(event) {

//	console.log('');
//	console.log('==============================');
//	console.log('removeFromList');
//	console.log('==============================');
//
//	console.log('event = ' + event);
//	console.log('event.target.nodeName = ' + event.target.nodeName + '     event.target.id = ' + event.target.id);

	var thisNodeName = event.target.nodeName;
//	console.log('thisNodeName = ' + thisNodeName);


	//<!--/* ------------------------- FROM SHOPPING LIST - BUTTON ("REMOVE FROM LIST") ------------------------- */-->

//	if (thisItem.type === 'button') {
	if (thisNodeName === 'BUTTON') {
//		console.log('PING!!! FROM SHOPPING LIST - thisNodeName = ' + thisNodeName);

//		console.log('event.target.parentNode.className = ' + event.target.parentNode.className);
//		console.log('event.target.parentNode.parentNode.className = ' + event.target.parentNode.parentNode.className);
//		console.log('event.target.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[0].innerText = ' + event.target.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[0].innerText);
//		console.log('event.target.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[1].innerText = ' + event.target.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[1].innerText);

		var thisProd = event.target.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[0].innerText;
		var thisShade = event.target.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[1].innerText;

//		console.log('I WANT TO REMOVE thisProd = ' + thisProd + '     thisShade = ' + thisShade);


		alertify.set({
			buttonReverse: true,
			buttonFocus: 'cancel',
		});

		alertify.confirm('Are you sure you want to remove <br><b>' + thisProd + ' - ' + thisShade + '</b><br>from your list?', function (e) {
			if (e) {
	//			alert('You pressed OK!');
	//			console.log('');
	
				//<!--/* ------------------------- REMOVE PRODUCT FROM shopListArray ------------------------- */-->
	
//				console.log('REMOVING THIS PRODUCT FROM shopListArray!!! ' + thisProd + '     thisShade = ' + thisShade);
	
				for (var i = 0; i < shopListArray.length; i++) {
					if (shopListArray[i]['product'] === thisProd && shopListArray[i]['shade'] === thisShade) {
	//					alert('You want to remove ' + shopListArray[i]['product'] + ' - ' + shopListArray[i]['shade'] + ' from your list.');
	
						shopListArray.splice(i, 1);

//						currentList();

//						console.log('shopListArray.length = ' + shopListArray.length);
						listToChecks();
					}
				}
	
				//<!--/* ------------------------- REMOVE PRODUCT FROM DIV #shoppingList ------------------------- */-->
	
	//			console.log('');
	//			console.log('REMOVING THIS PRODUCT FROM DIV #shoppingList!!! thisProd = ' + thisProd + '     thisShade = ' + thisShade);
	
				for (var i = 0; i < $('.prodList').length; i++) {
	//				var removeProd = $('.prodList > .prodListDescr > h1')[i].textContent;
	//				var removeShade = $('.prodList > .prodListDescr > h2')[i].textContent;
	
					var removeProd = $('.prodList > a > .prodListDescr > h1')[i].textContent;
					var removeShade = $('.prodList > a > .prodListDescr > h2')[i].textContent;
	
	//				var removeProd = $('.prodList')[i].childNodes[1].childNodes[0].childNodes[0].textContent;
	//				var removeShade = $('.prodList')[i].childNodes[1].childNodes[0].childNodes[1].textContent;
	
	//				console.log('');
	//				console.log('REMOVING removeProd = ' + removeProd + '     removeShade = ' + removeShade);
	////				console.log('$(.prodList)[i].className = ' + $('.prodList')[i].className);
	////				console.log('$(.prodList)[i].childNodes[0].textContent = ' + $('.prodList')[i].childNodes[0].textContent);
	//				console.log('$(.prodList)[i].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent = ' + $('.prodList')[i].childNodes[1].childNodes[0].childNodes[0].textContent);
	//				console.log('$(.prodList)[i].childNodes[1].childNodes[0].childNodes[0].childNodes[1].textContent = ' + $('.prodList')[i].childNodes[1].childNodes[0].childNodes[1].textContent);
	
					if (removeProd === thisProd && removeShade === thisShade) {
						$('.prodList')[i].parentNode.removeChild($('.prodList')[i]);
					}
				}
	
			} else {
	
				alertifyRefreshDefaults();
	
				alertify.alert('<br><b>' + thisProd + ' - ' + thisShade + '</b><br> will remain in your list.');
	//			console.log(thisProd + ' - ' + thisShade + ' will remain in your list.');
	//			currentList();
			}
		});
	}


	//<!--/* ------------------------- FROM PRODUCT MENU - CHECKBOX ------------------------- */-->

	if (thisNodeName === 'LABEL' || thisNodeName === 'INPUT') {
//		console.log('PING!!! FROM PRODUCT MENU - thisNodeName = ' + thisNodeName);

//		console.log('event.target.parentNode.className = ' + event.target.parentNode.className);
//		console.log('event.target.parentNode.childNodes[2].name = ' + event.target.parentNode.childNodes[2].name);
//		console.log('event.target.parentNode.childNodes[2].value = ' + event.target.parentNode.childNodes[2].value);

		var thisProd = event.target.parentNode.childNodes[2].name;
		var thisShade = event.target.parentNode.childNodes[2].value;

//		console.log('I WANT TO REMOVE thisProd = ' + thisProd + '     thisShade = ' + thisShade);


		//<!--/* ------------------------- REMOVE PRODUCT FROM shopListArray ------------------------- */-->

//			console.log('REMOVING THIS PRODUCT FROM shopListArray!!! ' + thisProd + '     thisShade = ' + thisShade);

		for (var i = 0; i < shopListArray.length; i++) {
			if (shopListArray[i]['product'] === thisProd && shopListArray[i]['shade'] === thisShade) {
//					alert('You want to remove ' + shopListArray[i]['product'] + ' - ' + shopListArray[i]['shade'] + ' from your list.');

				shopListArray.splice(i, 1);
//					currentList();

//				console.log('shopListArray.length = ' + shopListArray.length);
				listToChecks();
			}
		}

		//<!--/* ------------------------- REMOVE PRODUCT FROM DIV #shoppingList ------------------------- */-->

//			console.log('');
//			console.log('REMOVING THIS PRODUCT FROM DIV #shoppingList!!! thisProd = ' + thisProd + '     thisShade = ' + thisShade);

		for (var i = 0; i < $('.prodList').length; i++) {
//				var removeProd = $('.prodList > .prodListDescr > h1')[i].textContent;
//				var removeShade = $('.prodList > .prodListDescr > h2')[i].textContent;

			var removeProd = $('.prodList > a > .prodListDescr > h1')[i].textContent;
			var removeShade = $('.prodList > a > .prodListDescr > h2')[i].textContent;

//				var removeProd = $('.prodList')[i].childNodes[1].childNodes[0].childNodes[0].textContent;
//				var removeShade = $('.prodList')[i].childNodes[1].childNodes[0].childNodes[1].textContent;

//				console.log('');
//				console.log('REMOVING removeProd = ' + removeProd + '     removeShade = ' + removeShade);
////				console.log('$(.prodList)[i].className = ' + $('.prodList')[i].className);
////				console.log('$(.prodList)[i].childNodes[0].textContent = ' + $('.prodList')[i].childNodes[0].textContent);
//				console.log('$(.prodList)[i].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent = ' + $('.prodList')[i].childNodes[1].childNodes[0].childNodes[0].textContent);
//				console.log('$(.prodList)[i].childNodes[1].childNodes[0].childNodes[0].childNodes[1].textContent = ' + $('.prodList')[i].childNodes[1].childNodes[0].childNodes[1].textContent);

			if (removeProd === thisProd && removeShade === thisShade) {
				$('.prodList')[i].parentNode.removeChild($('.prodList')[i]);
			}
		}
	}


	//<!--/* ------------------------- shopListScroll.refresh ------------------------- */-->

//	shopListScroll.refresh();

	setTimeout(function () {

//		console.log('shopListScroll.refresh(): shopListScroll = ' + shopListScroll);

		shopListScroll.refresh();
//		shopListScroll.scrollTo(0,0);
	}, 0);


//	//<!--/* ------------------------- LOAD SCROLLERS ------------------------- */-->
//
//	loadScrollers();
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}


//<!--/* ------------------------- FUNCTION: emptyList ------------------------- */-->

function emptyList(event) {

//	console.log('');
//	console.log('==============================');
//	console.log('emptyList');
//	console.log('==============================');


	alertify.set({

//		buttonReverse: true,
//		buttonFocus: 'cancel',

		labels: {
			ok     : 'KEEP List',
			cancel : 'EMPTY List'
		}
	});

	alertify.confirm('Would you like to EMPTY or KEEP your SHOPPING LIST?', function (e) {
//	alertify.confirm('Are you sure you want to remove all products from your list?', function (e) {

		alertifyRefreshDefaults();

		if (e) {
//			alert('You pressed OK!');
//			console.log('');

			alertify.alert('All products will remain in your list.');
//			console.log(thisProd + ' - ' + thisShade + ' will remain in your list.');

		} else {


			//<!--/* ------------------------- REMOVE ALL PRODUCTS FROM shopListArray ------------------------- */-->

//			console.log('REMOVING ALL PRODUCTS FROM shopListArray!!!');

			shopListArray = [];
//			currentList();


			//<!--/* ------------------------- REMOVE ALL PRODUCTS FROM DIV #shoppingList ------------------------- */-->

//			console.log('REMOVING ALL PRODUCTS FROM DIV #shoppingList!!!');
//			console.log('$(.prodList) = ' + $('.prodList') + '     $(.prodList).length = ' + $('.prodList').length);

			$('.prodList').remove();

//			console.log('$(.prodList) = ' + $('.prodList') + '     $(.prodList).length = ' + $('.prodList').length);


			//<!--/* ------------------------- ALERT ------------------------- */-->

			listToChecks();
			alertify.alert('Your list has been emptied.');


			//<!--/* ------------------------- CLOSE MODAL WINDOW ------------------------- */-->

		//	document.getElementById('closeModal').href = '#close';
//			$('#closeModal')[0].click();
//			$('#closeModal').click();
			$('a.close')[0].click();
//			$('a.close').click();
		}
	});


	//<!--/* ------------------------- shopListScroll.refresh ------------------------- */-->

//	shopListScroll.refresh();

	setTimeout(function () {

//		console.log('shopListScroll.refresh(): shopListScroll = ' + shopListScroll);

		shopListScroll.refresh();
//		shopListScroll.scrollTo(0,0);
	}, 0);


//	//<!--/* ------------------------- LOAD SCROLLERS ------------------------- */-->
//
//	loadScrollers();
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}



//<!--/* ========================= ALERT BUTTON ========================= */-->

function alertAssociate() {

//	console.log('');
//	console.log('==============================');
//	console.log('alertAssociate');
//	console.log('==============================');
//
//	console.log('this = ' + this);
//	console.log('document.getElementById(ringAssoc).id = ' + document.getElementById('ringAssoc').id);



//	var alertAudio = document.getElementById('alertAudio');
//	var ctrl = document.getElementById('ringAssoc');
//
//	ctrl.onClick = function () {
//
//	//<!--/* ------------------------- Update the Button ------------------------- */-->
//
//		var pause = ctrl.innerHTML === 'Cancel Alert';
//		ctrl.innerHTML = pause ? 'Ring Associate<br />For Assistance' : 'Cancel Alert';
//
//
//	//<!--/* ------------------------- Update the Audio ------------------------- */-->
//
//		var method = pause ? 'pause' : 'play';
//		alertAudio[method]();
//
//		if (method == 'pause') {
////			alert('method = ' + method);
//			alertAudio.currentTime = 0;
//		}
//
//		$('#alertAudio').on('ended', function() {
////			alert('audio eneded!');
//			ctrl.innerHTML = 'Ring Associate';
//		});
//
//
//	//<!--/* ------------------------- GOOGLE UNIVERSAL ANALYTICS - EVENT TRACKING - BTN ID: ringBtn ------------------------- */-->
//
////		ga('send', 'event', 'button', 'click', 'newRing');
//
//		ga('send', {
//			'hitType': 'event',          // Required.
//			'eventCategory': 'button',   // Required.
//			'eventAction': 'click',      // Required.
//			'eventLabel': 'alertAssociate_120814',
//			'eventValue': 1,
//			'hitCallback': function() {
//				console.log('');
//				console.log('PING!!! GOOGLE UNIVERSAL ANALYTICS - LURCH: you raaaaang?');
//			}
//		});
//
//
//	//<!--/* ------------------------- Prevent Default Action ------------------------- */-->
//
//		return false;
//	};



//	//<!--/* ------------------------- REF: http://stackoverflow.com/questions/25972362/why-html5-video-doesnt-play-in-ios-8-webappwebview ------------------------- */-->
//
//	// Grab an existing DOM element and create an audio tag.
//	var ctrl = document.getElementById('ringAssoc');
//	ctrl.innerHTML += '<audio id="audio_sprite"><p>Audio not supported</p></audio>';
//	
//	// Apply the SRC to the audio tag.
//	// Q: Why don't we just do that in the step above?
//	// A: I'm not really sure why, but iOS8 doesn't like it. Sorry this is so ugly.
//	var audioSprite = document.getElementById('audio_sprite');
//	audioSprite.src = 'audio/dodo.mp3';
//	
//	// Once the metadata is loaded, call play/pause so we can play the audio later.
//	audioSprite.addEventListener('loadedmetadata', function() {
//
//		console.log('');
//		console.log('audioSprite metadata loaded!');
//
//		audioSprite.play();
////		audioSprite.pause();
//
//
//
//		ctrl.onClick = function () {
//	
//		//<!--/* ------------------------- Update the Button ------------------------- */-->
//	
//			var pause = ctrl.innerHTML === 'Cancel Alert';
//			ctrl.innerHTML = pause ? 'Ring Associate<br />For Assistance' : 'Cancel Alert';
//	
//	
//		//<!--/* ------------------------- Update the Audio ------------------------- */-->
//	
//			var method = pause ? 'pause' : 'play';
//			audioSprite[method]();
//	
//			if (method == 'play') {
//				console.log('method = ' + method);
//	
//				audioSprite.play();
//			} else {
//	
//	//		if (method == 'pause') {
//				console.log('method = ' + method);
//	
//				audioSprite.pause();
//				audioSprite.currentTime = 0;
//			}
//	
//			$('#audio_sprite').on('ended', function() {
//				console.log('audio ended!');
//	
//				ctrl.innerHTML = 'Ring Associate';
//			});
//	
//	
//		//<!--/* ------------------------- GOOGLE UNIVERSAL ANALYTICS - EVENT TRACKING - BTN ID: ringBtn ------------------------- */-->
//	
//	//		ga('send', 'event', 'button', 'click', 'newRing');
//	
//			ga('send', {
//				'hitType': 'event',          // Required.
//				'eventCategory': 'button',   // Required.
//				'eventAction': 'click',      // Required.
//				'eventLabel': 'alertAssociate_120814',
//				'eventValue': 1,
//				'hitCallback': function() {
//					console.log('PING!!! GOOGLE UNIVERSAL ANALYTICS - LURCH: you raaaaang?');
//					console.log('');
//				}
//			});
//	
//	
//		//<!--/* ------------------------- Prevent Default Action ------------------------- */-->
//	
//			return false;
//		};
//	});


}