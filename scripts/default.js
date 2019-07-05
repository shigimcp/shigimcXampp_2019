'use strict';

//<!--/* ========================= INITIALIZE PAGE ========================= */-->

//function pageInit() {
function pageInit(thisSect) {

	// console.log('');
	// console.log('==============================');
	// console.log('pageInit');
	// console.log('==============================');

	// console.log('PING! pageInit triggered! thisSect = ' + thisSect);

	window.localStorage.clear();

	// TweenMax.set([btn_resumeD1, btn_resumeD2], {y:-20, autoAlpha:0});
	setTimeout('collapseResumeNav()', 2500);
	// collapseResumeNav();



	// var thisLoc = window.location.hostname;
	var thisLoc = window.location.origin + window.location.pathname;
	console.log('thisLoc = ' + thisLoc);

	window.location.hash = '#close';
	// document.querySelector("[href='#close']").style.display = 'none';
	// document.querySelector("[href='#']").style.display = 'none';
	clearHash();



	switch(thisSect) {

		case 'splash':
			console.log('DING! pageInit triggered! thisSect = ' + thisSect);

			TweenMax.staggerTo([btn_resumeD1, btn_resumeD2], 0, {y:-40, autoAlpha:0, ease:Power1.easeOut}, 0.125);
			setTimeout('expandResumeNav()', 2500);

			// window.location.hash = '#close';
			splash();

			break;

		case 'work':
			console.log('DING! pageInit triggered! thisSect = ' + thisSect);

			// window.location.hash = '#close';
			requestFlashPermission();

			buildBG_work();
			loadAlbumArray();

			break;

		case 'about':
			console.log('DING! pageInit triggered! thisSect = ' + thisSect);

			// window.location.hash = '#close';

			// TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], {xPercent:afroXpercent, y:900, scale:logoIconScale, transformOrigin:"0 0", ease:Power3.easeOut, onComplete:checkDims, onCompleteParams:["shigeru_logo_afro"]});
			// // TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], {xPercent:afroXpercent, y:900, scale:logoIconScale, transformOrigin:"0 0", ease:Power3.easeOut, onComplete:checkDims, onCompleteParams:["shigeru_logo_afro"]});

			// about_in_NG();
			about_in();
			// about_set();
			// loadAboutArray();

			break;


		case 'email_gif':
			console.log('DING! pageInit triggered! thisSect = ' + thisSect);

			loadEmailGif("img/ea/email_gif/email/NM_TUMBLR_EMAIL_BLAST_deploy/index.html");

			break;

		case 'mesmerize':
			console.log('DING! pageInit triggered! thisSect = ' + thisSect);

			// mesmerize();

			break;
	}
}


//<!--/* ========================= FUNCTION: clearHash ========================= */-->

function clearHash() {

	// console.log('');
	// console.log('PING! clearHash triggered!');
	// // console.log('PING! clearHash triggered! thisLoc = ' + thisLoc);

	// Remove the # from the hash, as different browsers may or may not include it
	var hash = location.hash.replace('#','');

	if(hash != ''){
		// Show the hash if it's set
		// alert(hash);

		// Clear the hash in the URL
		window.location.hash = '';
		// window.location.href = thisLoc;
	}
}

// $(window).on('hashchange', function(e){ // listen if hashtag is being added to the URL

//     location.href = location.href.replace(location.hash,"") //replace it with nothing
//     console.log("bam!"); //enjoy it

// });

//<!--/* ========================= FUNCTION: sniffDevice ========================= */-->

function sniffDevice() {

	console.log('PING! sniffDevice triggered!');

	var device = {
		is_android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		is_blackberry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		is_iphone: function() {
			return navigator.userAgent.match(/iPhone/i);
		},
		is_ipad: function() {
			return navigator.userAgent.match(/iPad/i);
		},
		is_ipod: function() {
			return navigator.userAgent.match(/iPod/i);
		},
		is_ios: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		is_windows_phone: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		is_mobile: function() {
			return (device.is_android() || device.is_blackberry() || device.is_ios() || device.is_windows_phone() );
		}
	};

	if (device.is_mobile()) {
		// The User Is Using A Mobile Phone
		document.location = "http://www.shigimcp.com/mobile";
	}
}



//<!--/* ========================================================== */-->
//<!--/* ========================= GLOBAL ========================= */-->
//<!--/* ========================================================== */-->

//<!--/* ========================= FUNCTION: handle z-indexes ========================= */-->

//Thanks to lonesomeday at stackoverflow http://stackoverflow.com/a/8568191/250241

var highest = 1;

var publicMethods = {
	up : function() {
		this.css('z-index', ++highest); // increase highest by 1 and set the style
		return this;
	},

	down : function(){
		this.css('z-index', --highest); // increase highest by 1 and set the style
		return this;
	}
};

$.fn.zindex = function(method){
	if (publicMethods[method]){
		return publicMethods[method].apply(this);
	}else{
		$.error( 'Method ' +  method + ' does not exist, yo.' );
	}
};


//<!--/* ========================= GET COOKIES - FUNCTION: getCookie(cookieName) (see document.cookie in FUNCTIONs: loadAlbumArray & loadImageArray) ========================= */-->

function getCookie(cookieName) {

	// console.log('');
	// console.log('==============================');
	// console.log('getCookie');
	// console.log('==============================');

	// console.log('document.cookie = ' + document.cookie);

	var cookieNameEq = cookieName + "=";
	var cookieArray = document.cookie.split(';');

	for(var i = 0; i < cookieArray.length; i++) {

		var thisCookie = cookieArray[i].trim();

		// if (thisCookie.indexOf(cookieNameEq)===0) return thisCookie.substring(cookieNameEq.length,thisCookie.length);
		if (thisCookie.indexOf(cookieNameEq)===0) {
			return thisCookie.substring(cookieNameEq.length,thisCookie.length);
		}
	}

	return "";
}


//==================== FUNCTION: consoleLog(message) ====================

function consoleLog(message) {
	// alert(message);
	console.log(message);
}


//==================== FUNCTION: enableBtns(thisBtnArray) ====================

function enableBtns(thisBtnArray) {

	// console.log('');
	// console.log('PING! enableBtns triggered! thisBtnArray[0].id = ' + thisBtnArray[0].id);

	for (var thisBtnIndex = 0; thisBtnIndex < thisBtnArray.length; thisBtnIndex++) {

		// console.log('thisBtnArray[thisBtnIndex].id = ' + thisBtnArray[thisBtnIndex].id);

		$('#' + thisBtnArray[thisBtnIndex].id).css('pointer-events', 'auto');
	}
}


//==================== FUNCTION: disableBtns(thisBtnArray) ====================

function disableBtns(thisBtnArray) {

	// console.log('');
	// console.log('PING! disableBtns triggered! thisBtnArray[0].id = ' + thisBtnArray[0].id);

	for (var thisBtnIndex = 0; thisBtnIndex < thisBtnArray.length; thisBtnIndex++) {

		// console.log('thisBtnArray[thisBtnIndex].id = ' + thisBtnArray[thisBtnIndex].id);

		$('#' + thisBtnArray[thisBtnIndex].id).css('pointer-events', 'none');
	}
}


//==================== FUNCTION: getSiblings(thisChild) ====================
//-------------------- REF: https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/ --------------------

function getSiblings(thisChild) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = thisChild.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== thisChild) {
		siblings.push(sibling);
	}
		sibling = sibling.nextSibling
	}

	return siblings;
}


//==================== FUNCTION: rollOver(propsArray) RE: mezCTA - SOOOOOOPER MESSY! Please clean this up for more universal use. ====================

function rollOver(propsArray) {

	console.log('');
	console.log('PING! rollOver triggered!   propsArray = ' + propsArray);

	for (var thisObjIndex = 0; thisObjIndex < propsArray.length; thisObjIndex++) {

		console.log('thisObjIndex = ' + thisObjIndex + '     propsArray[thisObjIndex] = ' + propsArray[thisObjIndex]);

		var propObject = {};
		var key = propsArray[1];

		propObject[key] = propsArray[2];
		propObject['transformOrigin'] = "50% 50%";

		// console.log('propObject = ' + propObject);

		TweenMax.to([propsArray[0]], 0.25, propObject);
		TweenMax.to([getSiblings(propsArray[0])], 0.25, {autoAlpha:propsArray[3]});
	}
}


//==================== FUNCTION: getDims(thisElem) ====================

function getDims(thisElem) {

	// console.log('');
	// console.log('PING! getDims triggered! thisElem = ' + thisElem);

	var thisX = document.getElementById(thisElem).getBoundingClientRect().x;
	var thisY = document.getElementById(thisElem).getBoundingClientRect().y;
	var thisW = document.getElementById(thisElem).getBoundingClientRect().width;
	var thisH = document.getElementById(thisElem).getBoundingClientRect().height;

	// console.log('*PRE* tween');
	// console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisW = ' + thisW + '     thisH = ' + thisH);

	return [thisX, thisY, thisW, thisH];
}


//==================== FUNCTION: checkDims(thisElem) ====================

function checkDims(thisElem) {

	console.log('');
	console.log('PING! checkDims triggered! thisElem = ' + thisElem);

	var thisX = getDims(thisElem)[0];
	var thisY = getDims(thisElem)[1];
	var thisW = getDims(thisElem)[2];
	var thisH = getDims(thisElem)[3];

	console.log('*** POST tween ***');
	console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisW = ' + thisW + '     thisH = ' + thisH);

	return [thisX, thisY, thisW, thisH];
}



//<!--/* ========================================================= */-->
//<!--/* ========================== NAV ========================== */-->
//<!--/* ========================================================= */-->

var navTimer;

function expandResumeNav() {

	// console.log('PING! expandResumeNav triggered!');

	navTimer = setTimeout(function(){
		collapseResumeNav()
	}, 2500);

	TweenMax.staggerTo([btn_resumeD1, btn_resumeD2], 0.25, {y:0, autoAlpha:1, ease:Power1.easeOut}, 0.125);

	enableBtns([btn_resumeD1, btn_resumeD2]);
}


function collapseResumeNav() {

	// console.log('PING! collapseResumeNav triggered!');

	clearTimeout(navTimer);

	TweenMax.staggerTo([btn_resumeD1, btn_resumeD2], 0.25, {y:-40, autoAlpha:0, ease:Power1.easeOut}, 0.125);

	disableBtns([btn_resumeD1, btn_resumeD2]);
}



//<!--/* ========================================================== */-->
//<!--/* ========================= SPLASH ========================= */-->
//<!--/* ========================================================== */-->

//<!--/* ========================= FUNCTION: jump(thisURL) (SPLASH/INTRO) ========================= */-->

function jump(thisURL) {

	console.log('PING! jump triggered!');
	console.log('thisURL = ' + thisURL);

	// window.open(thisURL);
	location.href = thisURL;
}


//<!--/* ========================= FUNCTION: splash (SPLASH/INTRO) ========================= */-->

//var splashTL = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var splashTL = new TimelineLite({delay:0.25});
//var splashTL = new TimelineMax({delay:0});
//var splashTL = new TimelineMax({delay:2});
//var splashTL = new TimelineMax({delay:10});
//var splashTL = new TimelineMax({delay:30});
var splashTL = new TimelineMax({paused:true});

function splash() {

	console.log('PING! splash triggered!');

	console.log('');
	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());


	//<!--/* ------------------------- LOGO ------------------------- */-->

	console.log('');
	console.log('<!--/* ------------------------- LOGO ------------------------- */-->');

	TweenMax.set([header_mask_afro_w, header_mask_glasses_w], {scaleY:0});
	TweenMax.set([header_mask_afro_k, header_mask_glasses_k], {scaleY:2.5});
	// TweenMax.set([header_mask_afro_k, header_mask_glasses_k, header_mask_kanji_w], {scaleY:2.5});
	// TweenMax.set([shigeru_logo_kanji_w_mask], {scaleY:0});

	var logoX = getDims("logo")[0];
	var logoY = getDims("logo")[1];
	var logoW = getDims("logo")[2];
	var logoH = getDims("logo")[3];

	console.log('*** PRE tween: LOGO ***');
	console.log('logoX = ' + logoX + '     logoY = ' + logoY + '     logoW = ' + logoW + '     logoH = ' + logoH);


	var KanjiScale = 1.3 / (700/1000);		// source/shigimcp_2017_1366x768.psd

	var kanjiX = getDims("shigeru_logo_kanji")[0];
	var kanjiY = getDims("shigeru_logo_kanji")[1];
	var kanjiW = getDims("shigeru_logo_kanji")[2];
	var kanjiH = getDims("shigeru_logo_kanji")[3];

	var kanjiDx = -170;		// assets/shigeru_logo.ai: shigeru_logo_kanji_01_ctrX - shigeru_logo_kanji_02_ctrX = -170
	// var kanjiDy = 40;		// source/shigimcp_2017_1366x768.psd: shigeru_logo_kanji_top = 40 
	var kanjiDy = 10;

	console.log('');
	console.log('KanjiScale = ' + KanjiScale);
	console.log('kanjiX = ' + kanjiX + '     kanjiY = ' + kanjiY + '     kanjiW = ' + kanjiW + '     kanjiH = ' + kanjiH);
	console.log('kanjiDx = ' + kanjiDx + '     kanjiDy = ' + kanjiDy);


	TweenMax.set([shigeru_logo_kanji], {x:kanjiDx, y:kanjiDy, scale:KanjiScale, transformOrigin:"50% 50%"});

	kanjiX = getDims("shigeru_logo_kanji")[0];
	kanjiY = getDims("shigeru_logo_kanji")[1];
	kanjiW = getDims("shigeru_logo_kanji")[2];
	kanjiH = getDims("shigeru_logo_kanji")[3];

	console.log('');
	console.log('*** POST tween: LOGO ***');
	console.log('kanjiX = ' + kanjiX + '     kanjiY = ' + kanjiY + '     kanjiW = ' + kanjiW + '     kanjiH = ' + kanjiH);


	// //<!--/* ------------------------- RESET ------------------------- */-->

	// var hedArray = [hed, hed01, hed02, contact, phone, email, nav];

	// console.log('');
	// console.log('hedArray = ' + hedArray);



	splashTL

		//==================== SPLASH 01 ====================

		.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		// .fromTo(mezCTA, 5, {autoAlpha:0}, {autoAlpha:1, ease:Power3.easeIn}, "frame01 +=0")

		.fromTo(header, 0.5, {y:-60}, {y:0, ease:Power1.easeOut}, "frame01 +=0")
		.fromTo(navResume, 0.5, {y:-60}, {y:0, ease:Power1.easeOut}, "frame01 +=0")

		.to([shigeru_logo_kanji], 0.5, {x:0, y:0, scale:1, ease:Power3.easeOut}, "frame01 +=0")
		.fromTo(shigeru_logo_kanji_k, 0.5, {autoAlpha:1}, {autoAlpha:0, ease:Power1.easeOut}, "frame01 +=0")
		.fromTo(shigeru_logo_kanji_w_mask, 0.5, {scaleY:0}, {scaleY:2, ease:Power1.easeOut}, "frame01 +=0")
		// .fromTo(shigeru_logo_kanji_w_mask, 0.5, {scaleY:0}, {scaleY:2, ease:Power1.easeOut, onComplete:checkDims, onCompleteParams:["shigeru_logo_kanji_w_mask"]}, "frame01 +=0")

		.fromTo(splashHed, 0.5, {scale:1, autoAlpha:1}, {scale:0.5, autoAlpha:0, ease:Power1.easeOut}, "frame01 +=0")

		.fromTo([shigeru_logo_afro], 1, {scale:0.9, autoAlpha:0, transformOrigin:"50% 50%"}, {scale:1, autoAlpha:1, transformOrigin:"50% 50%", ease:Power3.easeOut}, "frame01 +=0.25")
		.fromTo([shigeru_logo_glasses], 1, {scale:0.9, autoAlpha:0, transformOrigin:"50% top"}, {scale:1, autoAlpha:1, transformOrigin:"50% top", ease:Power3.easeOut}, "frame01 +=0.25")

		.fromTo([calligraphyCredit], 0.5, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.25")

		// .fromTo(mezCTA, 5, {autoAlpha:0}, {autoAlpha:1, ease:Power3.easeIn}, "frame01 +=0.25")

		.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.25")


		//==================== SPLASH 02 ====================

		.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

		.to([logo], 0.5, {x:-250, ease:Power3.easeOut}, "frame02 +=0.5")
		.fromTo(greeting, 0.5, {x:-50, autoAlpha:0}, {x:0, autoAlpha:1, ease:Power3.easeOut}, "frame02 +=0.5")

		// .fromTo(mezCTA_img, 5, {autoAlpha:0}, {autoAlpha:0.25, ease:Power3.easeIn}, "frame02 +=0.5")

		.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=0.5")
	;

	//splashTL.duration(1.5);
	//splashTL.duration(15);
	
	console.log("timing = " + splashTL.duration() + " secs");
}


function playSplash() {
	splashTL.play();
}


//<!--/* ========================= FUNCTION: splash_logoIcon(thisURL) (SPLASH/INTRO) ========================= */-->

function splash_logoIcon(thisURL) {

	console.log('');
	console.log('PING! splash_logoIcon triggered! thisURL = ' + thisURL);

	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());

	// TweenMax.to([header_mask_kanji_w], 1, {y:370, ease:Power1.easeOut});
	// TweenMax.to([shigeru_logo_afro], 1, {x:-528.75, y:-467.5, scale:0.214285714285714, ease:Power3.easeOut});
	// TweenMax.fromTo([header_mask_afro_w], 1, {scaleY:0}, {scaleY:1, ease:Power1.easeOut});
	// TweenMax.to([shigeru_logo_glasses], 1, {x:-528.75, y:-557.5, scale:0.214285714285714, ease:Power3.easeOut, onComplete:jump, onCompleteParams:[thisURL]});


	var iconWidth = 150;
	var iconHeight = iconWidth * 880/1000;

	var logoX = getDims("logo")[0];
	var logoY = getDims("logo")[1];
	var logoW = getDims("logo")[2];
	var logoH = getDims("logo")[3];

	var hedX = getDims("hed")[0];
	var hedY = getDims("hed")[1];
	var hedW = getDims("hed")[2];
	var hedH = getDims("hed")[3];

	var header_mask_kanji_wX = getDims("header_mask_kanji_w")[0];
	var header_mask_kanji_wY = getDims("header_mask_kanji_w")[1];
	var header_mask_kanji_wW = getDims("header_mask_kanji_w")[2];
	var header_mask_kanji_wH = getDims("header_mask_kanji_w")[3];

	console.log('');
	console.log('*** PRE tween: LOGO ***');
	console.log('logoX = ' + logoX + '     logoY = ' + logoY + '     logoW = ' + logoW + '     logoH = ' + logoH);
	console.log('hedX = ' + hedX + '     hedY = ' + hedY + '     hedW = ' + hedW + '     hedH = ' + hedH);
	console.log('header_mask_kanji_wX = ' + header_mask_kanji_wX + '     header_mask_kanji_wY = ' + header_mask_kanji_wY + '     header_mask_kanji_wW = ' + header_mask_kanji_wW + '     header_mask_kanji_wH = ' + header_mask_kanji_wH);

	// var iconX = -$(window).width()/2 + iconWidth/2 - 35;
	var iconX = -hedW/2 + iconWidth/2 - 35;

	// var iconX;

	// // if ($(window).width() < 1366) {
	// if ($(window).width() <= 1440) {
	// 	iconX = -$(window).width()/2 + iconWidth/2 - 35;
	// } else {
	// 	iconX = -1400/2 - 35;
	// }

	var iconY = -logoY + 5;
	// var iconY = -logoY;

	var logoTL = new TimelineMax({delay:0});

	logoTL
		// .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		.to([logo], 1, {x:iconX, y:iconY, width:iconWidth, height:iconHeight, transformOrigin:"50% 50%", ease:Power3.easeOut}, "frame01 +=0")

		.to([shigeru_logo_afro, shigeru_logo_glasses], 1, {scale:1, ease:Power3.easeOut}, "frame01 +=0")

		.to([shigeru_logo_afro], 1, {x:0, y:0, ease:Power3.easeOut}, "frame01 +=0")
		.to([header_mask_afro_k], 1, {y:360, scaleY:1.5, ease:Power3.easeOut}, "frame01 +=0")
		.to([header_mask_afro_w], 1, {y:0, scaleY:1, ease:Power3.easeOut}, "frame01 +=0")

		.to([shigeru_logo_glasses], 1, {x:0, y:0, ease:Power3.easeOut}, "frame01 +=0")

		.to([shigeru_logo_kanji_k], 1, {autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0")
		// .to([shigeru_logo_kanji_w_mask], 1, {y:360, ease:Power3.easeOut, transformOrigin:"50% top"}, "frame01 +=0")
		.to([shigeru_logo_kanji_w_mask], 1, {y:360, ease:Power3.easeOut, transformOrigin:"50% top", onComplete:jump, onCompleteParams:[thisURL]}, "frame01 +=0")
		// .to([shigeru_logo_kanji_w_mask], 1, {y:360, ease:Power3.easeOut, transformOrigin:"50% top", onComplete:checkDims, onCompleteParams:["shigeru_logo_kanji_w_mask"]}, "frame01 +=0")

		// .to([greeting, navResume], 1, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")
		.to([greeting], 1, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")

		// .call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=1")
	;

	// header_mask_kanji_wX = getDims("header_mask_kanji_w")[0];
	// header_mask_kanji_wY = getDims("header_mask_kanji_w")[1];
	// header_mask_kanji_wW = getDims("header_mask_kanji_w")[2];
	// header_mask_kanji_wH = getDims("header_mask_kanji_w")[3];

	// console.log('');
	// console.log('*** POST tween: LOGO ***');
	// console.log('header_mask_kanji_wX = ' + header_mask_kanji_wX + '     header_mask_kanji_wY = ' + header_mask_kanji_wY + '     header_mask_kanji_wW = ' + header_mask_kanji_wW + '     header_mask_kanji_wH = ' + header_mask_kanji_wH);
}


//<!--/* ========================= FUNCTION: splash_about(thisURL) (SPLASH/INTRO) ========================= */-->

function splash_about(thisURL) {

	console.log('');
	console.log('PING! splash_about triggered! thisURL = ' + thisURL);

	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());

	// TweenMax.fromTo([splashNav], 1, {autoAlpha:0}, {autoAlpha:1, ease:Power1.easeOut});

	// TweenMax.to([shigeru_logo_afro], 1, {x:390, y:260, scale:1.428571428571429, transformOrigin:"50% 50%", ease:Power3.easeOut});
	// TweenMax.to([shigeru_logo_glasses], 1, {x:390, y:335, scale:1.428571428571429, transformOrigin:"50% 50%", ease:Power3.easeOut});

	// TweenMax.to([shigeru_logo_afro], 1, {x:390, y:260, scale:1.428571428571429, ease:Power3.easeOut});
	// TweenMax.to([shigeru_logo_glasses], 1, {x:390, y:310, scale:1.428571428571429, ease:Power3.easeOut});
	TweenMax.to([shigeru_logo_afro], 1, {x:391, y:260, scale:1.428571428571429, ease:Power3.easeOut});
	TweenMax.to([shigeru_logo_glasses], 1, {x:391.5, y:308, scale:1.428571428571429, ease:Power3.easeOut});

	// TweenMax.to([header_mask_afro_k], 1, {scaleY:1, ease:Power1.easeOut});
	// TweenMax.to([header_mask_afro_k, shigeru_logo_glasses_k], {scaleY:1, ease:Power1.easeOut});
	// TweenMax.to([header_mask_afro_w, shigeru_logo_glasses_w], {scaleY:1, ease:Power1.easeOut});
	TweenMax.to([header_mask_afro_k], 1, {scaleY:1.7109375, ease:Power1.easeOut});
	// TweenMax.to([header_mask_glasses_k], 1, {scaleY:0.68359375, ease:Power1.easeOut});
	// TweenMax.to([header_mask_glasses_k], 1, {scaleY:0.685546875, ease:Power1.easeOut});
	TweenMax.to([header_mask_glasses_k], 1, {scaleY:0.685546875, ease:Power1.easeOut, onComplete:jump, onCompleteParams:[thisURL]});

	// jump(thisURL);
	// TweenMax.to([greeting], 1, {opacity:0, ease:Power3.easeOut, onComplete:jump, onCompleteParams:[thisURL]});
}


//<!--/* ========================= FUNCTION: setHeader(thisSect) ========================= */-->

function setHeader(thisSect) {

	// console.log('PING! setHeader triggered!');

	// TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], {autoAlpha:0});

	switch (thisSect) {
		case 'work':
			// console.log('DING! thisSect = ' + thisSect);

			TweenMax.set([header_mask_kanji_w], {y:370});
			TweenMax.set([header_mask_afro_k, header_mask_glasses_k], {scaleY:6.125});

			break;

		case 'about':
			// console.log('DING! thisSect = ' + thisSect);

			// TweenMax.set([logo], {x:-643, y:5, width:150});
			// // TweenMax.set(header_mask_kanji_w, {y:-369, scaleY:1});
			TweenMax.set(header_mask_kanji_w, {y:-370, scaleY:1});

			TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], {autoAlpha:1, scale:6.666666666666667});
			TweenMax.set([shigeru_logo_afro], {x:1455, y:900});
			TweenMax.set([shigeru_logo_glasses], {x:3100, y:4040});

			// TweenMax.set([header_mask_afro_w, header_mask_glasses_w], {scaleY:0});
			TweenMax.set([header_mask_afro_k, header_mask_glasses_k], {scaleY:1.7109375});

			break;

		// case 'about02':
		// 	// console.log('DING! thisSect = ' + thisSect);

		// 	TweenMax.set([logo], {x:-643, y:5, width:150});
		// 	// TweenMax.set(header_mask_kanji_w, {y:-369, scaleY:1});
		// 	TweenMax.set(header_mask_kanji_w, {y:-370, scaleY:1});

		// 	TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], {scale:6.666666666666667});
		// 	TweenMax.set([shigeru_logo_afro], {x:1455, y:900});
		// 	TweenMax.set([shigeru_logo_glasses], {x:3100, y:4040});

		// 	TweenMax.set([header_mask_afro_w, header_mask_glasses_w], {scaleY:0});
		// 	TweenMax.set([header_mask_afro_k, header_mask_glasses_k], {scaleY:1.7109375});

		// 	break;
	}
}



//<!--/* ========================================================== */-->
//<!--/* ========================== WORK ========================== */-->
//<!--/* ========================================================== */-->



//<!--/* ========================= FLASH prompt (ref: https://stackoverflow.com/questions/45679318/google-chrome-is-not-prompting-the-users-to-enable-flash-on-my-site ) ========================= */-->

// /**
//  * Tries to show browser's prompt for enabling flash
//  *
//  * Chrome starting from 56 version and Edge from 15 are disabling flash by default. To promt user to enable flash, they suggest to send user to flash player download page. Then this browser will catch such request and show a promt to user: https://www.chromium.org/flash-roadmap#TOC-Developer-Recommendations
//  * In this method we are forcing such promt by navigating user to adobe site in iframe, instead of top window
//  */

var isNewEdge = (navigator.userAgent.match(/Edge\/(\d+)/) || [])[1] > 14;
var isNewSafari = (navigator.userAgent.match(/OS X (\d+)/) || [])[1] > 9;
var isNewChrome = (navigator.userAgent.match(/Chrom(e|ium)\/(\d+)/) || [])[2] > 56 && !/Mobile/i.test(navigator.userAgent);
var canRequestPermission = isNewEdge || isNewSafari || isNewChrome;

function requestFlashPermission() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://get.adobe.com/flashplayer';
    iframe.sandbox = '';
    document.body.appendChild(iframe);
    document.body.removeChild(iframe);
}



//<!--/* ========================= FUNCTION: buildBG_work ========================= */-->

// var gridDisplaceY = -20;
var gridDisplaceY = -40;

function buildBG_work() {

	// console.log('');
	// console.log('PING! buildBG_work triggered!');
	// console.log('NOTE: 1 block = 320 x 360');

	// console.log('window.innerWidth = ' + window.innerWidth + '    $(window).width() = ' + $(window).width());
	// console.log('window.innerHeight = ' + window.innerHeight + '    $(window).height() = ' + $(window).height());
	// console.log('window.innerWidth/320 = ' + window.innerWidth/320);

	// var thisW = $('#workBG').width();
	var thisW = $('#workBG').width() + 320;
	var thisH = 768;

	// console.log('$(#workBG).width = ' + thisW);
	// console.log('$(#workBG).height = ' + thisH);

	// var thisX = 0;
	// var thisY = 0;

	var thisX;
	var thisY;

	for (var row = 0; row < thisH/360; row++) {

		var thisRowID = "row" + row;

		thisX = (row * 40) - 100;
		thisY = gridDisplaceY;

		$('#workBG').append('<div class="gridRow" id="' + thisRowID + '"></div>');

		TweenMax.set($('#'+thisRowID), {x:thisX, y:thisY});

		for (var col = 0; col < thisW/320; col++) {

			var thisImgID = "r" + row + "c" + col;

			// console.log('row = ' + row + '   col = ' + col + '   thisImgID = ' + thisImgID);

			switch (col % 2 === 0) {
				case true:
					// console.log('DING! col is EVEN = ' + col);

					thisX = (col * 20) + 20;
					// thisY = (col * 20);
					thisY = (col * 20) - 20;

					$('#'+thisRowID).append('<img class="gridImg" id="' + thisImgID + '" src="img/0elements/grid.svg" width="320px" height="360px">');

					// console.log("thisX, thisY = " + thisX + ", " + thisY);
					// console.log('');

					break;

				case false:
					// console.log('DONG! col = is ODD ' + col);

					thisX = (col * 20) + 0;
					thisY = (col * 20) - 200;

					$('#'+thisRowID).append('<img class="gridImg" id="' + thisImgID + '" src="img/0elements/grid.svg" width="320px" height="360px">');

					// console.log("thisX, thisY = " + thisX + ", " + thisY);
					// console.log('');

					break;
			}

			TweenMax.set($('#'+thisImgID), {x:thisX, y:thisY});
			// TweenMax.set($('#'+thisImgID), {x:thisX, y:thisY-20});
			// TweenMax.set($('#'+thisImgID), {x:thisX, y:thisY-20, opacity:0});
		}
	}

	// <!--/* ------------------------- showcaseContainer ------------------------- */-->

	TweenMax.set([showcaseContainer], {css:{height:"0px"}, alpha:0, transformOrigin:"50% 0"});

	TweenMax.set([r0c1, r1c1, r1c3], {webkitClipPath:'polygon(0 0, 100% 0, 100% 300px, 0 300px)'});

	logoGrid_logos();
}


//<!--/* ========================= FUNCTION: logoGrid_logos ========================= */-->

function logoGrid_logos() {

	// <!--/* ------------------------- HEDs ------------------------- */-->

	TweenMax.set([r0c1, r1c1, r1c3], {webkitClipPath:'polygon(0 0, 100% 0, 100% 300px, 0 300px)'});

	TweenMax.set([hedWeb], {x:220, y:-20});
	TweenMax.set([hedPrint], {x:260, y:-92.5});
	TweenMax.set([hedOther], {x:860, y:51.25});

	// <!--/* ------------------------- LOGOs ------------------------- */-->

	TweenMax.set([logo_mimi], {x:300, y:30});
	TweenMax.set([logo_ea], {x:410, y:37.5});
	TweenMax.set([logo_ax], {x:483.75, y:80});
	TweenMax.set([logo_hearst], {x:585, y:65});

	TweenMax.set([logo_ddb], {x:255, y:-25});
	TweenMax.set([logo_mrm], {x:285, y:18.75});
	TweenMax.set([logo_smcp], {x:930, y:-88});

	TweenMax.set([logo_heeb], {x:290, y:-70});
	TweenMax.set([logo_hb], {x:370, y:-40});

	// <!--/* ------------------------- NAV FOR SMALLER SCREENS ------------------------- */-->

	if ($(window).width() <= 1440) {
		scaleGrid();
	}

	logoGrid_fadeIn();
}


//<!--/* ========================= FUNCTION: scaleGrid ========================= */-->

function scaleGrid() {

	// console.log('');
	// console.log('PING! scaleGrid triggered!');

	var logoGridDims = getDims("logoGrid");

	// console.log('logoGridX = ' + logoGridDims[0] + '     logoGridY = ' + logoGridDims[1] + '     logoGridW = ' + logoGridDims[2] + '     logoGridH = ' + logoGridDims[3]);

	var gridScale = $(window).width()/1440;
	var logoGridY = logoGridDims[1] * gridScale;

	// console.log('gridScale = ' + gridScale + '     logoGridY = ' + logoGridY);

	TweenMax.set([workBG, logoGrid], {scale:gridScale, transformOrigin:"0 0"});
	TweenMax.set([logoGrid], {top:logoGridY, transformOrigin:"0 0"});
}


//<!--/* ========================= FUNCTION: scaleShowcaseContent ========================= */-->

var contentScale = ($(window).width() * 1000/1500) / 1000;
var showcaseHeightInit = 721;		// see .showcaseContainer in file default.scss - height = 721px
var dotNavYInit = 685;				// see .dotNavContainer in file default.scss - top = 685px

// console.log('');
// console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());
// console.log('contentScale = ' + contentScale + '     showcaseHeightInit = ' + showcaseHeightInit + '     dotNavYInit = ' + dotNavYInit);


function scaleShowcaseContent() {

	// console.log('');
	// console.log('PING! scaleShowcaseContent triggered!');

	// console.log('NOTE: calculations based on the following dims');
	// console.log('- showcaseContainer: 1500 x 721');
	// console.log('- slideContainer: 1000 x 721');

	// console.log('');
	// console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());

	// var slideContainerX = getDims("slideContainer")[0];
	// var slideContainerY = getDims("slideContainer")[1];
	// var slideContainerW = getDims("slideContainer")[2];
	// var slideContainerH = getDims("slideContainer")[3];

	// console.log('slideContainerX = ' + slideContainerX + '     slideContainerY = ' + slideContainerY + '     slideContainerW = ' + slideContainerW + '     slideContainerH = ' + slideContainerH);

	// var slideContainerDims = getDims("slideContainer");
	// console.log('slideContainerX = ' + slideContainerDims[0] + '     slideContainerY = ' + slideContainerDims[1] + '     slideContainerW = ' + slideContainerDims[2] + '     slideContainerH = ' + slideContainerDims[3]);

	// var showcaseContainerDims = getDims("showcaseContainer");
	// console.log('showcaseContainerX = ' + showcaseContainerDims[0] + '     showcaseContainerY = ' + showcaseContainerDims[1] + '     showcaseContainerW = ' + showcaseContainerDims[2] + '     showcaseContainerH = ' + showcaseContainerDims[3]);

	// var showDescrContainerDims = getDims("showDescr");
	// console.log('showDescrContainerX = ' + showDescrContainerDims[0] + '     showDescrContainerY = ' + showDescrContainerDims[1] + '     showDescrContainerW = ' + showDescrContainerDims[2] + '     showDescrContainerH = ' + showDescrContainerDims[3]);

	// var dotNavContainerDims = getDims("dotNavContainer");
	// console.log('dotNavContainerX = ' + dotNavContainerDims[0] + '     dotNavContainerY = ' + dotNavContainerDims[1] + '     dotNavContainerW = ' + dotNavContainerDims[2] + '     dotNavContainerH = ' + dotNavContainerDims[3]);


	var slideContainerX = -(getDims("showDescr")[2] - (getDims("showDescr")[2] * contentScale));
	var showcaseContainerH = showcaseHeightInit * contentScale;
	var dotNavY = - (dotNavYInit - (dotNavYInit * contentScale));

	TweenMax.set([showDescr, slideContainer, dotNavContainer], {scale:contentScale, transformOrigin:"0 0"});
	TweenMax.set([slideContainer, dotNavContainer], {x:slideContainerX, transformOrigin:"0 0"});
	TweenMax.set([dotNavContainer], {y:dotNavY, transformOrigin:"0 0"});

	return [showcaseContainerH];
}


//<!--/* ========================= FUNCTION: logoGrid_fadeIn ========================= */-->

function logoGrid_fadeIn() {

	// console.log('');
	// console.log('PING! logoGrid_fadeIn triggered!');

	var setY = -60;
	var heightScale = $(window).height()/768;

	// console.log('setY = ' + setY + '     heightScale = ' + heightScale);

	var logoGrid_TL = new TimelineLite({delay:0});

	logoGrid_TL
		.staggerFromTo(('.gridRow'), 1, {y:setY, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, 0.375, "frame01 +=0")
		.staggerFromTo(('.logoRow'), 1, {y:setY, opacity:0, ease:Power2.easeOut}, {y:0, opacity:1, ease:Power2.easeOut}, 0.375, "frame01 +=0")
	;

	// expandBG_work();
}


//<!--/* ========================= FUNCTION: expandBG_work ========================= */-->

var showcaseHeight;
var expandGridY;

function expandBG_work() {
	
	// console.log('');
	// console.log('PING! expandBG_work triggered!');

	// if ($(window).width() < 1440) {
	if ($(window).width() < 1441) {

		showcaseHeight = scaleShowcaseContent()[0];
		expandGridY = showcaseHeight - 60;

		// console.log('showcaseHeight = ' + showcaseHeight + '     expandGridY = ' + expandGridY);

	} else {

		showcaseHeight = showcaseHeightInit;
		expandGridY = showcaseHeight - 60;

		// console.log('showcaseHeight = ' + showcaseHeight + '     expandGridY = ' + expandGridY);
	}


	// ========================= expandBG_work_TL: for larger screens =========================

	var expandBG_work_TL = new TimelineLite({delay:0, paused:true});

	expandBG_work_TL

		.staggerTo(('.gridRow'), 1, {y:showcaseHeight, ease:Power2.easeOut}, 0.125, "frame01 +=0")
		.staggerTo(('.logoRow'), 1, {y:showcaseHeight, ease:Power2.easeOut}, 0.125, "frame01 +=0")

		.to([showcaseContainer], 1, {height:showcaseHeight, alpha:1, transformOrigin:"50% 0", ease:Power2.easeOut}, "frame01 +=0")
	;

	// expandBG_work_TL.duration(1.5);
	// console.log("timing = " + expandBG_work_TL.duration() + " secs");


	// ========================= expandBG_work_TL_alt: for smaller screens =========================

	var expandBG_work_TL_alt = new TimelineLite({delay:0, paused:true});

	expandBG_work_TL_alt

		.staggerTo(('.gridRow'), 1, {y:showcaseHeight, autoAlpha:0, ease:Power2.easeOut}, 0.125, "frame01 +=0")
		.staggerTo(('.logoRow'), 1, {y:showcaseHeight, autoAlpha:0, ease:Power2.easeOut}, 0.125, "frame01 +=0")

		// .staggerTo(('.gridRow'), 1, {y:showcaseHeight, autoAlpha:0, display:"none", ease:Power2.easeOut}, 0.125, "frame01 +=0")
		// .staggerTo(('.logoRow'), 1, {y:showcaseHeight, autoAlpha:0, display:"none", ease:Power2.easeOut}, 0.125, "frame01 +=0")

		.to([showcaseContainer], 1, {height:showcaseHeight, alpha:1, transformOrigin:"50% 0", ease:Power2.easeOut}, "frame01 +=0")

		.fromTo([showcaseNav], 1, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")
		// .fromTo([showcaseNav], 1, {y:-40, autoAlpha:0}, {y:-20, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")
		// .fromTo([showcaseNav], 1, {top:showcaseHeight, autoAlpha:0}, {top:showcaseHeight + 60, autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")
	;

	// expandBG_work_TL_alt.duration(1.5);
	// console.log("timing = " + expandBG_work_TL_alt.duration() + " secs");


	// if ($(window).width() < 1440) {
	if ($(window).width() < 1441) {

		// console.log('');
		// console.log('PING! expandBG_work_TL_alt.play() triggered!');

		expandBG_work_TL_alt.play();

	} else {

		// console.log('');
		// console.log('PING! expandBG_work_TL.play() triggered!');

		expandBG_work_TL.play();
	}
}


//<!--/* ========================= FUNCTION: resetBG_work ========================= */-->

function resetBG_work() {

	console.log('PING! resetBG_work triggered!');

	// expandBG_work_TL.reversed() ? expandBG_work_TL.play() : expandBG_work_TL.reverse();


	// ========================= resetBG_work_TL: for larger screens =========================

	var resetBG_work_TL = new TimelineLite({delay:0, paused:true});

	resetBG_work_TL

		.call(consoleLog, ["PING! resetBG_work_TL triggered"], "frame01")

		.staggerTo(('.gridRow'), 1, {y:0, ease:Power3.easeOut}, 0.125, "frame01 +=0")
		.staggerTo(('.logoRow'), 1, {y:0, ease:Power3.easeOut}, 0.125, "frame01 +=0")

		.to([showcaseContainer], 1, {css:{height:"0px"}, alpha:0, transformOrigin:"50% 0", ease:Power3.easeOut}, "frame01 +=0")
	;

	// resetBG_work_TL.duration(1.5);
	// console.log("timing = " + resetBG_work_TL.duration() + " secs");


	// ========================= resetBG_work_TL_alt: for smaller screens =========================

	var resetBG_work_TL_alt = new TimelineLite({delay:0, paused:true});

	resetBG_work_TL_alt

		.call(consoleLog, ["PING! resetBG_work_TL_alt triggered"], "frame01")

		.staggerTo(('.gridRow'), 1, {y:0, autoAlpha:1, ease:Power3.easeOut}, 0.125, "frame01 +=0")
		.staggerTo(('.logoRow'), 1, {y:0, autoAlpha:1, ease:Power3.easeOut}, 0.125, "frame01 +=0")

		// .staggerTo(('.gridRow'), 1, {y:0, autoAlpha:1, display:"table", ease:Power3.easeOut}, 0.125, "frame01 +=0")
		// .staggerTo(('.logoRow'), 1, {y:0, autoAlpha:1, display:"table", ease:Power3.easeOut}, 0.125, "frame01 +=0")

		.to([showcaseContainer], 1, {css:{height:"0px"}, alpha:0, transformOrigin:"50% 0", ease:Power3.easeOut}, "frame01 +=0")

		.to([showcaseNav], 1, {y:-20, autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")
	;

	// resetBG_work_TL_alt.duration(1.5);
	// console.log("timing = " + resetBG_work_TL_alt.duration() + " secs");


	// if ($(window).width() < 1440) {
	if ($(window).width() < 1441) {
		resetBG_work_TL_alt.play();
	} else {
		resetBG_work_TL.play();
	}
}


//<!--/* ========================= FUNCTION: storeMe ========================= */-->

function storeMe(index, value, thisArray) {

	// console.log('');
	// console.log('==============================');
	// console.log('storeMe');
	// console.log('==============================');

	// console.log('');
	// console.log('albumArray.length = ' + albumArray.length);
	// console.log('imageArray.length = ' + imageArray.length);
	// console.log('thisArray.length = ' + thisArray.length);


	// if (typeof(localStorage) == 'undefined' ) {
	if (typeof(localStorage) === 'undefined' ) {

		alert('Your browser does not support HTML5 localStorage. Try upgrading.');

	} else {

		try {

			// console.log('JSON.stringify(value) = ' + JSON.stringify(value));

			localStorage.setItem(index, JSON.stringify(value));		//saves to the database, "key", "value"
			sessionStorage.setItem(index, JSON.stringify(value));		//saves to the database, "key", "value"

			} catch (e) {
				// if (e == QUOTA_EXCEEDED_ERR) {
				if (e === QUOTA_EXCEEDED_ERR) {
				alert('Quota exceeded!');							//data wasn't successfully saved due to quota exceed so throw an error
			}
		}
	}

	// console.log('localStorage.length = ' + localStorage.length);
	// console.log('albumArray.length = ' + albumArray.length);
	// console.log('albumArray = ' + albumArray);
}


//<!--/* ========================= FUNCTIONs: loadAlbumArray, loadImageArray ========================= */-->

var albumArray = [];
var albumArrayLength = 0;

var imageArray = [];
var imageArrayLength = 0;


//<!--/* ------------------------- ARRAY OF ALL ALBUMS - FUNCTION: loadAlbumArray ------------------------- */-->

function loadAlbumArray() {

	// console.log('');
	// console.log('==============================');
	// console.log('loadAlbumArray');
	// console.log('==============================');

	// console.log('localStorage.length = ' + localStorage.length);

	if (localStorage.length === 0) {

		// console.log('localStorage.length is zero = ' + localStorage.length);

		$.ajax({
			url:'scripts/album.php',
			type: 'GET',
			async: false,
			success:function(data) {

				// console.log('data = ' + data);

				var albumArrayTemp = JSON.parse(data);
	
				// console.log('albumArrayTemp = ');
				// console.log(albumArrayTemp);

				$.each(albumArrayTemp, function(index, value) {
					storeMe(index, value, albumArray);
	
					// console.log('index = ' + index + '     value = ' + value);
				});
			}
		});
	
		for (var index = 0; index < localStorage.length; index++) {
			var thisArrayObject = JSON.parse(localStorage.getItem(index));

			// console.log('thisArrayObject = ' + thisArrayObject);

			albumArrayLength = index + 1;
			albumArray.push(thisArrayObject);

			// console.log('albumArrayLength = ' + albumArrayLength + '     albumArray = ' + albumArray);
		}

		document.cookie = 'albumArrayLength = ' + albumArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
		// document.cookie = 'imageArrayLength = ' + imageArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';

	} else {

		// console.log('localStorage.length is non-zero = ' + localStorage.length);

		// console.log('albumArrayLength = ' + albumArrayLength);

		albumArrayLength = getCookie('albumArrayLength');

		for (var index2 = 0; index2 < albumArrayLength; index2++) {
			var thisArrayObject2 = JSON.parse(localStorage.getItem(index2));
			albumArray.push(thisArrayObject2);
		}
	}

	// console.log('');
	// console.log('loadAlbumArray: albumArray.length = ' + albumArray.length);
	// console.log('loadAlbumArray: albumArray = ');
	// console.log(albumArray);

	// console.log('loadAlbumArray: thisalbumArray.length = ' + thisalbumArray.length);
	// console.log('loadAlbumArray: thisalbumArray = ');
	// console.log(thisalbumArray);

	// console.log('');
	// console.log('loadAlbumArray: localStorage.length = ' + localStorage.length + '     albumArrayLength = ' + albumArrayLength);
	// console.log('loadAlbumArray: localStorage = (see next line)');
	// console.log(localStorage);

	loadImageArray();
}


//<!--/* ------------------------- ARRAY OF ALL IMAGES - FUNCTION: loadImageArray ------------------------- */-->

function loadImageArray() {

	// console.log('');
	// console.log('==============================');
	// console.log('loadImageArray');
	// console.log('==============================');

	// console.log('');
	// console.log('loadImageArray - PREcomp: localStorage.length = ' + localStorage.length);
	// console.log('loadImageArray - PREcomp: localStorage = ');
	// console.log(localStorage);

	// console.log('');
	// console.log('loadImageArray: localStorage.length = ' + localStorage.length);
	// console.log('loadImageArray: albumArrayLength = ' + albumArrayLength);
	// // console.log('loadImageArray: imageArrayLength = ' + imageArrayLength);


	// var albumLength = localStorage.length;
	var thisIndex;

	if (localStorage.length === albumArrayLength) {

		// console.log('localStorage.length === albumArrayLength (per conditional) = ' + localStorage.length);
		// console.log('albumArrayLength = ' + albumArrayLength);

		$.ajax({
			url:'scripts/image.php',
			type: 'GET',
			async: false,
			success:function(data) {
				// console.log('data = ' + data);

				var imageArrayTemp = JSON.parse(data);
	
				$.each(imageArrayTemp, function(index, value) {
					thisIndex = index + albumArrayLength;
	
					storeMe(thisIndex, value, imageArray);
				});
			}
		});

		for (var index = albumArray.length; index < localStorage.length; index++) {
			var thisArrayObject = JSON.parse(localStorage.getItem(index));
		
			imageArrayLength = index - albumArray.length + 1;
			imageArray.push(thisArrayObject);
		}

		// console.log('');
		// console.log('loadImageArray: albumArrayLength = ' + albumArrayLength + '     imageArrayLength = ' + imageArrayLength);

		// document.cookie = 'albumArrayLength = ' + albumArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
		document.cookie = 'imageArrayLength = ' + imageArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';

		// console.log('document.cookie = ' + document.cookie);
		// console.log('');

	} else {

		// console.log('localStorage.length != albumArrayLength (per conditional) = ' + localStorage.length);
		// console.log('albumArrayLength = ' + albumArrayLength);

		imageArrayLength = getCookie('imageArrayLength');

		// console.log('imageArrayLength = ' + imageArrayLength);

		for (var index = albumArrayLength; index < localStorage.length; index++) {

			var thisArrayObject = JSON.parse(localStorage.getItem(index));

			imageArray.push(thisArrayObject);
		}
	}

	// console.log('');
	// console.log('');
	// console.log('loadImageArray: imageArray.length = ' + imageArray.length);
	// console.log('loadImageArray: imageArray = ');
	// console.log(imageArray);

	// console.log('loadImageArray: thisimageArray.length = ' + thisimageArray.length);
	// console.log('loadImageArray: thisimageArray = ');
	// console.log(thisimageArray);

	// console.log('');
	// console.log('loadImageArray - POSTcomp: localStorage.length = ' + localStorage.length);
	// console.log('loadImageArray - POSTcomp: localStorage = ');
	// console.log(localStorage);

	// foolAppCache();
	// loadLooksNProds(lip_shade, look_type, hair);
	// hideSlides();

	// console.log('albumArray = ' + albumArray);
	// console.log(albumArray);
	// console.log("imageArray = " + imageArray);
	// console.log(imageArray);

	createAlbumArrays();
}


//<!-- ========================= FUNCTION - createAlbumArrays ========================= -->

//var albumArray_ea = Array;
//var albumArray_ax = Array;
//var albumArray_hearst = Array;
//var albumArray_ddb = Array;
//var albumArray_mrm = Array;
//var albumArray_heeb = Array;
//var albumArray_hb = Array;
//var albumArray_other = Array;

function createAlbumArrays() {

	// console.log('');
	// console.log('==============================');
	// console.log('createAlbumArrays');
	// console.log('==============================');

	// console.log('');
	// console.log('albumArrayLength = ' + albumArrayLength );
	// console.log('albumArray = ' + albumArray);
	// console.log('imageArrayLength = ' + imageArrayLength);
	// console.log('imageArray = ' + imageArray);

	$.each(albumArray, function(indexA) {

		// console.log('');
		// // console.log('this = ' + this);
		// // console.log(albumArray[indexA].album_id);
		// console.log('albumArray_' + (albumArray[indexA].album_id));
		// console.log(albumArray[indexA]);

		// window['albumArray_' + (albumArray[indexA].album_id)] = [albumArray[indexA]];
		window['albumArray_' + (albumArray[indexA].album_id)] = [];

		$.each(imageArray, function(indexI) {

			if (albumArray[indexA].album_index === imageArray[indexI].album_index) {

				// // console.log('this = ');
				// // console.log(this);
				// // console.log('albumArray_' + (albumArray[indexA].album_id));
				// console.log(imageArray[indexI]);
				// // console.log('imageArray[' + indexI + '].album_index = ' + imageArray[indexI].album_index + '     imageArray[' + indexI + '].src = ' + imageArray[indexI].src + '     imageArray[' + indexI + '].link = ' + imageArray[indexI].link + '     imageArray[' + indexI + '].mWidth = ' + imageArray[indexI].mWidth);
				// // console.log('albumArray_' + (albumArray[indexA].album_id));

				window['albumArray_' + (albumArray[indexA].album_id)].push(imageArray[indexI]);

				// // console.log('albumArray_' + (albumArray[indexA].album_id));
				// console.log('albumArray_' + (window['albumArray_' + (albumArray[indexA].album_id)]));
			}

		});

		// console.log((window['albumArray_' + (albumArray[indexA].album_id)]).length);

	});

	// console.log('');
	// console.log('albumArray_hb.length = ' + albumArray_hb.length);
	// console.log(Object.keys(window));
	
	// loadSlidesNThumbs();
}


//<!--/* ========================= FUNCTION: loadWORK(thisAlbum) ========================= */-->

function loadWORK(thisAlbum) {

	// console.log('');
	// console.log('==============================');
	// console.log('loadWORK(thisAlbum)');
	// console.log('==============================');

	// console.log('thisAlbum = ' + thisAlbum);
	// console.log('$("#showcaseContainer").data(album) = ' + $("#showcaseContainer").data('album'));

	// console.log('albumArray_ea = ' + albumArray_ea);
	// console.log('albumArray_ax = ' + albumArray_ax);
	// console.log('albumArray_hearst = ' + albumArray_hearst);
	// console.log('albumArray_ddb = ' + albumArray_ddb);
	// console.log('albumArray_mrm = ' + albumArray_mrm);
	// console.log('albumArray_heeb = ' + albumArray_heeb);
	// console.log('albumArray_hb = ' + albumArray_hb);
	// console.log('albumArray_other = ' + albumArray_other);

	// console.log('');

	// console.log('albumArray.keys() = ' + albumArray.keys());
	// console.log('albumArray.length = ' + albumArray.length);
	// console.log('albumArray[0].album_id = ' + albumArray[0].album_id);
	// console.log('albumArray[0].slpath = ' + albumArray[0].slpath);

	// console.log('');
	// console.log('$("#showcaseContainer").data(album) = ' + $("#showcaseContainer").data('album'));


	if ($("#showcaseContainer").data('album') !== thisAlbum) {
		setTimeout(removeModalContent, 400);
		$("#showcaseContainer").data('album', thisAlbum);
	}

	// console.log('$("#showcaseContainer").data(album) = ' + $("#showcaseContainer").data('album'));


	switch(thisAlbum) {
		case 'mimi':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			$("#showDescr").load("scripts/work/mimi.php");
			loadSlides(0, thisAlbum, albumArray_mimi);

			break;

		case 'ea':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/ea.php");
			// $("#showDescr").load("scripts/ea.php");
			$("#showDescr").load("scripts/work/ea.php");

			// console.log('albumArray_ea.keys() = ' + albumArray_ea.keys());
			// console.log('albumArray_ea.length = ' + albumArray_ea.length);

			loadSlides(1, thisAlbum, albumArray_ea);

			break;

		case 'ax':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/ax.php");
			// $("#showDescr").load("scripts/ax.php");
			$("#showDescr").load("scripts/work/ax.php");

			// console.log('albumArray_ax.keys() = ' + albumArray_ax.keys());
			// console.log('albumArray_ax.length = ' + albumArray_ax.length);

			loadSlides(2, thisAlbum, albumArray_ax);

			break;

		case 'hearst':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/hearst.php");
			// $("#showDescr").load("scripts/hearst.php");
			$("#showDescr").load("scripts/work/hearst.php");

			// console.log('albumArray_hearst.keys() = ' + albumArray_hearst.keys());
			// console.log('albumArray_hearst.length = ' + albumArray_hearst.length);

			loadSlides(3, thisAlbum, albumArray_hearst);

			break;

		case 'ddb':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/ddb.php");
			// $("#showDescr").load("scripts/ddb.php");
			$("#showDescr").load("scripts/work/ddb.php");

			// console.log('albumArray_ddb.keys() = ' + albumArray_ddb.keys());
			// console.log('albumArray_ddb.length = ' + albumArray_ddb.length);

			loadSlides(4, thisAlbum, albumArray_ddb);

			break;

		case 'mrm':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/mrm.php");
			// $("#showDescr").load("scripts/mrm.php");
			$("#showDescr").load("scripts/work/mrm.php");

			// console.log('albumArray_mrm.keys() = ' + albumArray_mrm.keys());
			// console.log('albumArray_mrm.length = ' + albumArray_mrm.length);

			loadSlides(5, thisAlbum, albumArray_mrm);

			break;

		case 'heeb':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/heeb.php");
			// $("#showDescr").load("scripts/heeb.php");
			$("#showDescr").load("scripts/work/heeb.php");

			// console.log('albumArray_heeb.keys() = ' + albumArray_heeb.keys());
			// console.log('albumArray_heeb.length = ' + albumArray_heeb.length);

			loadSlides(6, thisAlbum, albumArray_heeb);

			break;

		case 'hb':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/hb.php");
			// $("#showDescr").load("scripts/hb.php");
			$("#showDescr").load("scripts/work/hb.php");

			// console.log('albumArray_hb.keys() = ' + albumArray_hb.keys());
			// console.log('albumArray_hb.length = ' + albumArray_hb.length);

			loadSlides(7, thisAlbum, albumArray_hb);

			break;

		case 'lum':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showDescr").load("scripts/work/luminant.php");

			// console.log('albumArray_lum.keys() = ' + albumArray_lum.keys());
			// console.log('albumArray_lum.length = ' + albumArray_lum.length);

			// loadSlides(8, thisAlbum, albumArray_lum);

			break;

		case 'dar':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showDescr").load("scripts/work/darwin.php");

			// console.log('albumArray_dar.keys() = ' + albumArray_dar.keys());
			// console.log('albumArray_dar.length = ' + albumArray_dar.length);

			// loadSlides(9, thisAlbum, albumArray_dar);

			break;

		case 'other':
			// console.log('DING! thisAlbum = ' + thisAlbum);

			// $("#showcaseContainer").load("scripts/other.php");
			// $("#showDescr").load("scripts/other.php");
			$("#showDescr").load("scripts/work/other.php");

			// console.log('albumArray_other.keys() = ' + albumArray_other.keys());
			// console.log('albumArray_other.length = ' + albumArray_other.length);

			loadSlides(10, thisAlbum, albumArray_other);

			break;
	}

	// console.log('');

	// expandBG_work();


	if (getDims("showcaseContainer")[3] > 5) {
		// console.log('getDims("showcaseContainer")[3] = ' + getDims("showcaseContainer")[3] + ' is expanded. Do nothing.');
	} else {
		// console.log('getDims("showcaseContainer")[3] = ' + getDims("showcaseContainer")[3] + ' is collapsed.');
		expandBG_work();
	}

	document.getElementById('header').scrollIntoView({behavior:'smooth'});
}



//<!--/* ========================= SLIDESHOW - REF: https://www.w3schools.com/howto/howto_js_slideshow.asp ========================= */-->

$(".slideContainer").load("work/ea.html");

var slideIndex;
// var slideIndex = 0;
// var slideIndex = 1;
// var slideIndex = 2;
// showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {

	// console.log('');
	// console.log('PING! plusSlides triggered!');
	// console.log('slideIndex = ' + slideIndex + '     n = ' + n);

	showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {

	// console.log('');
	// console.log('PING! currentSlide triggered!');
	// console.log('slideIndex = ' + slideIndex + '     n = ' + n);

	showSlides(slideIndex = n);
}


// function showSlides(n, thisAlbumArray) {
function showSlides(n) {

	// console.log('');
	// console.log('PING! showSlides triggered!');
	// console.log('slideIndex = ' + slideIndex + '     n = ' + n);
	// // console.log('slideIndex = ' + slideIndex + '     n = ' + n + '     thisAlbumArray = ' + thisAlbumArray);

	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	// console.log('slides = ' + slides);
	// console.log('slides.length = ' + slides.length);

	if (n > slides.length) {
		// console.log('n > slides.length-1: slides.length = ' + slides.length + '     n = ' + n);

		slideIndex = 1;
	}

	if (n < 1) {
		// console.log('n == 0: slides.length = ' + slides.length + '     n = ' + n);

		slideIndex = slides.length;
	}

	// console.log('slideIndex = ' + slideIndex + '     n = ' + n);

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";

	// slides[slideIndex].style.display = "block";
	// dots[slideIndex].className += " active";
}


function emptySlides() {
	$('.slide').remove();
	$('.dot').remove();
}


//function loadSlides(thisAlbumArray) {
//function loadSlides(thisAlbumIndex, thisAlbumArray) {
function loadSlides(thisAlbumIndex, thisAlbum, thisAlbumArray) {

	// console.log('');
	// console.log('==============================');
	// console.log('loadSlides(thisAlbumIndex, thisAlbumArray)');
	// console.log('==============================');

	// console.log('thisAlbumIndex = ' + thisAlbumIndex);
	// console.log('thisAlbumIndex = ' + thisAlbumIndex + '     thisAlbumArray = ' + thisAlbumArray);
	// console.log('thisAlbumIndex = ' + thisAlbumIndex + '     thisAlbum = ' + thisAlbum + '     thisAlbumArray = ' + thisAlbumArray);

	emptySlides();

	// var thisAlbumIndex = 0;
	// var thisAlbumArray = albumArray_ea;
	// var thisAlbumArray = 'albumArray_' + albumArray[thisAlbumIndex].album_id;

	// console.log('albumArray[' + thisAlbumIndex + '].flpath_stage = ' + albumArray[thisAlbumIndex].flpath_stage);
	// console.log('thisAlbumIndex = ' + thisAlbumIndex + '     thisAlbumArray = ' + thisAlbumArray);

	for(var i=0; i<thisAlbumArray.length; i++){

		// console.log(thisAlbumArray + '[' + i + '].src = ' + thisAlbumArray[i].src);
		// console.log(thisAlbumArray + '[' + thisAlbumIndex + '].slpath' + thisAlbumArray + '[' + i + '].src = ' + albumArray[thisAlbumIndex].slpath + thisAlbumArray[i].src);
		// console.log(thisAlbumArray + '[' + i + '].caption = ' + thisAlbumArray[i].caption);
		// console.log(thisAlbumArray + '[' + i + '].link = ' + thisAlbumArray[i].link);
		// console.log(thisAlbumArray + '[' + i + '].cta = ' + thisAlbumArray[i].cta);
		// console.log(thisAlbumArray + '[' + i + '].alert = ' + thisAlbumArray[i].alert);
		// console.log(thisAlbumArray + '[' + i + '].mWidth = ' + thisAlbumArray[i].mWidth);
		// console.log('');

		// console.log('thisAlbumArray[' + i + '].src = ' + thisAlbumArray[i].src);
		// console.log('thisAlbumArray[' + thisAlbumIndex + '].slpath' + 'thisAlbumArray[' + i + '].src = ' + albumArray[thisAlbumIndex].slpath + thisAlbumArray[i].src);
		// console.log('thisAlbumArray[' + i + '].caption = ' + thisAlbumArray[i].caption);
		// console.log('thisAlbumArray[' + i + '].link = ' + thisAlbumArray[i].link);
		// console.log('thisAlbumArray[' + i + '].cta = ' + thisAlbumArray[i].cta);
		// console.log('thisAlbumArray[' + i + '].alert = ' + thisAlbumArray[i].alert);
		// console.log('thisAlbumArray[' + i + '].mWidth = ' + thisAlbumArray[i].mWidth);
		// console.log('');

		// console.log(thisAlbum + '[' + thisAlbumArray[i].album_index + '].slpath = ' + albumArray[thisAlbumIndex].slpath);
		// console.log('');

		// console.log(thisAlbum + '[' + i + '].album_index = ' + thisAlbumArray[i].album_index);
		// console.log(thisAlbum + '[' + i + '].image_index = ' + thisAlbumArray[i].image_index);
		// console.log(thisAlbum + '[' + i + '].src = ' + thisAlbumArray[i].src);
		// // console.log(thisAlbum + '[' + i + '].slpath' + ' + ' + thisAlbum + '[' + i + '].src = ' + albumArray[thisAlbumIndex].slpath + thisAlbumArray[i].src);
		// console.log(thisAlbum + '[' + i + '].caption = ' + thisAlbumArray[i].caption);
		// console.log(thisAlbum + '[' + i + '].format = ' + thisAlbumArray[i].format);
		// console.log(thisAlbum + '[' + i + '].link = ' + thisAlbumArray[i].link);
		// console.log(thisAlbum + '[' + i + '].cta = ' + thisAlbumArray[i].cta);
		// console.log(thisAlbum + '[' + i + '].alert = ' + thisAlbumArray[i].alert);
		// console.log(thisAlbum + '[' + i + '].mWidth = ' + thisAlbumArray[i].mWidth);
		// console.log(thisAlbum + '[' + i + '].mHeight = ' + thisAlbumArray[i].mHeight);
		// console.log('');


		// var thisImage = albumArray[thisAlbumIndex].flpath + 'sl/' + thisAlbumArray[i].src;
		// var thisImage = 'http://www.shigimcp.com/Xstage/shigimcp_2019/00/img/' + thisAlbum + '/sl/' + thisAlbumArray[i].src;
		var thisImage = 'http://www.shigimcp.com/Xstage/shigimcp_2019_massage/img/' + thisAlbum + '/sl/' + thisAlbumArray[i].src;
		var thisLink;
		// var thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;
		// var thisImage = albumArray[thisAlbumIndex].flpath_stage + 'sl/' + thisAlbumArray[i].src;
		// var thisLink = albumArray[thisAlbumIndex].flpath_stage + thisAlbumArray[i].link;
		var thisFormat = thisAlbumArray[i].format;
		var thisCTA = thisAlbumArray[i].cta;
		var thisAlert = thisAlbumArray[i].alert;
		var mWidth = thisAlbumArray[i].mWidth;
		var mHeight = thisAlbumArray[i].mHeight;

		// console.log('');
		// // console.log('thisImage = ' + thisImage + '     thisLink = ' + thisLink + '     thisCTA = ' + thisCTA + '     thisAlert = ' + thisAlert + '     mWidth = ' + mWidth + '     mHeight = ' + mHeight + '     thisFormat = ' + thisFormat);
		// console.log('thisImage = ' + thisImage + '     thisLink = ' + thisLink);
		// console.log('mWidth = ' + mWidth + '     mHeight = ' + mHeight + '     thisFormat = ' + thisFormat);
		// console.log('thisCTA = ' + thisCTA);
		// console.log('thisAlert = ' + thisAlert);


		switch(thisFormat) {
			case 'image':
				// console.log('DING! thisFormat = ' + thisFormat);
				// console.log('DING! thisFormat = image');

				thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;

				console.log('thisLink = ' + thisLink);

				break;

			case 'video':
				// console.log('DING! thisFormat = ' + thisFormat);
				// console.log('DING! thisFormat = video');

				thisLink = thisAlbumArray[i].link;

				console.log('thisLink = ' + thisLink);

				break;

			case 'html5':
				// console.log('DING! thisFormat = ' + thisFormat);
				// console.log('DING! thisFormat = html5');

				thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;

				console.log('thisLink = ' + thisLink);

				break;

			case 'flash':
				// console.log('DING! thisFormat = ' + thisFormat);
				// console.log('DING! thisFormat = flash');

				thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;

				console.log('thisLink = ' + thisLink);

				break;
		}


		// if (thisAlbumArray[i].link == '#') {
		if (thisAlbumArray[i].link === '#') {

			// console.log('albumArray_ax[' + i + '].link = ' + thisAlbumArray[i].link + '     - NO LINK AVAILABLE');

			// $("#slideContainer").append("<div class=\"slide fade\", " + mWidth + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
			$("#slideContainer").append("<div class=\"slide fade\")><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");

		} else {

			// console.log('albumArray_ax[' + i + '].link = ' + thisAlbumArray[i].link);

			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + albumArray[thisAlbumIndex].flpath_stage + thisAlbumArray[i].link + "', " + mWidth + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "<font class=\"ctaAlert\" id=\"ctaAlert\"><br>*" + thisCTA + "</font></div></div>");
			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div><div class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</div></div>");
			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div><div class=\"cta\" id=\"cta\">" + thisCTA + "<br><font class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</font></div></div>");
			// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ")\"><div class=\"cta\" id=\"cta\">" + thisCTA + "<br><font class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</font></div><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
			$("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ", '" + thisFormat + "')\"><div class=\"cta\" id=\"cta\">" + thisCTA + "<br><font class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</font></div><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");

			// <div class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</div>
			// <div class=\"cta\" id=\"cta\">" + thisCTA + "<br><font class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</font></div>

		}

		// $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisAlbumArray[i].link + "', " + mWidth + ")\"><div class=\"numbertext\" id=\"numbertext\">" + (i+1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
		$("#dotNav").append("<span class=\"dot\" onClick=\"currentSlide(" + (i + 1) + ")\"></span>");

		// $("#ctaAlert").append(thisAlert);
	}

	slideIndex = 1;
	showSlides(slideIndex);
	// showSlides(slideIndex, thisAlbumArray);
}



//<!--/* ========================= FUNCTION: includeHTML - REF: https://www.w3schools.com/howto/howto_html_include.asp ========================= */-->

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	// loop through a collection of all HTML elements:
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		// search for elements with a certain atrribute:
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			// make an HTTP request using the attribute value as the file name:
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					// remove the attribute, and call this function once more:
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			// exit the function:
			return;
		}
	}
}



//<!--/* ========================= FUNCTION: loadMODAL ========================= */-->

//function loadMODAL(thisLink, mWidth, mHeight) {
function loadMODAL(thisLink, mWidth, mHeight, thisFormat) {

	includeHTML();

	// console.log('');
	// console.log('==============================');
	// console.log('loadMODAL');
	// console.log('==============================');

	// console.log('thisLink = ' + thisLink + '     mWidth = ' + mWidth + '     mHeight = ' + mHeight + '     thisFormat = ' + thisFormat);


	switch(thisFormat) {
		case 'image':
			console.log('DING! thisFormat = ' + thisFormat);

			break;

		case 'video':
			console.log('DING! thisFormat = ' + thisFormat);

			$("#modalContent").append("<iframe id=\"modalObject\" width=\"" + mWidth + "\" height=\"" + mHeight + "\" src=\"https://player.vimeo.com/video/" + thisLink + "\"?autoplay=true frameborder=\"0\" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>");

			break;

		case 'html5':
			console.log('DING! thisFormat = ' + thisFormat);

			// $("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"100%\" height=\"100%\"></object>");
			$("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWidth + "\" height=\"" + mHeight + "\"></object>");

			break;

		case 'flash':
			console.log('DING! thisFormat = ' + thisFormat);

			$("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"100%\" height=\"100%\"></object>");

			break;

		case 'resume':
			console.log('DING! thisFormat = ' + thisFormat);

			var showcaseNavOpacity = document.getElementById("showcaseNav").style.opacity;
			console.log('showcaseNavOpacity = ' + showcaseNavOpacity);

			if (mHeight > getDims("showcaseNav")[1] && showcaseNavOpacity > 0) {

				mHeight = getDims("showcaseNav")[1] - getDims("showcaseNav")[3];
				$("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWidth + "\" height=\"" + mHeight + "\"></object>");

			} else {

				mHeight = getDims("showcaseNav")[1] - 20;
				$("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWidth + "\" height=\"" + mHeight + "\"></object>");

				TweenMax.set([modalObject, btn_closeModal], {y:-getDims("header")[3] + 20, transformOrigin:"0 0"});
			}

			// $("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWidth + "\" height=\"" + mHeight + "\"></object>");

			break;
	}


	var scaleModalReturn = scaleModalContent(mWidth, mHeight);
	console.log('thisLink = ' + thisLink + '     mWidth = ' + mWidth + '     mHeight = ' + mHeight + '     thisFormat = ' + thisFormat);

	if (mWidth > $(window).width() || mHeight > getDims("showcaseNav")[1]) {

		// console.log('');
		// console.log('scaleModalReturn: scaled_mWidth = ' + scaleModalReturn[0] + '     scaled_mHeight = ' + scaleModalReturn[1] + '     scaled_modalScale = ' + scaleModalReturn[2] + '     modalContentY = ' + scaleModalReturn[3]);

		TweenMax.set([modalObject], {scale:scaleModalReturn[2], transformOrigin:"0 0"});
		TweenMax.set([modalObject, btn_closeModal], {y:scaleModalReturn[3], transformOrigin:"0 0"});

		$("#modalContent").width(scaleModalReturn[0]);
		$("#modalContent").height(scaleModalReturn[1]);

	} else {

		// console.log('');
		// console.log('scaleModalReturn: scaled_mWidth = ' + scaleModalReturn[0] + '     scaled_mHeight = ' + scaleModalReturn[1] + '     scaled_modalScale = ' + scaleModalReturn[2] + '     modalContentY = ' + scaleModalReturn[3]);

		var modalContentY = (getDims("showcaseNav")[1] - mHeight)/2 - getDims("modalObject")[1];
		TweenMax.set([modalObject, btn_closeModal], {y:modalContentY, transformOrigin:"0 0"});
	
		$("#modalContent").width(mWidth);
		$("#modalContent").height(mHeight);

	}

	setTimeout(function() {
		window.location.hash = '#openModal';
	} , 500);

	clearHash();
}



//<!--/* ========================= FUNCTION: scaleModalContent ========================= */-->

function scaleModalContent(mWidth, mHeight) {

	// console.log('');
	// console.log('==============================');
	// console.log('scaleModalContent');
	// console.log('==============================');

	// console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());
	// console.log('mWidth = ' + mWidth + '     mHeight = ' + mHeight);


	var modalScale = 0.9;

	var scaled_mWidth = $(window).width() * modalScale;
	var scaled_mHeight = scaled_mWidth * mHeight/mWidth;
	var scaled_modalScale = scaled_mWidth/mWidth;

	if (scaled_mHeight >= getDims("showcaseNav")[1]) {

		// console.log('');
		// console.log('TOO TALL! TOO TALL!');

		scaled_mHeight = getDims("showcaseNav")[1] * modalScale;
		scaled_mWidth = scaled_mHeight * mWidth/mHeight;
		scaled_modalScale = scaled_mHeight/mHeight;

	}

	var modalContentY = (getDims("showcaseNav")[1] - scaled_mHeight)/2 - getDims("modalObject")[1];


	// console.log('');
	// console.log('modalScale = ' + modalScale);
	// console.log('scaled_mWidth = ' + scaled_mWidth + '     scaled_mHeight = ' + scaled_mHeight);
	// console.log('scaled_modalScale = ' + scaled_modalScale);
	// console.log('getDims("showcaseNav")[0] = x = ' + getDims("showcaseNav")[0] + '     getDims("showcaseNav")[1] = y = ' + getDims("showcaseNav")[1]);
	// console.log('modalContentY = ' + modalContentY);


	return [scaled_mWidth, scaled_mHeight, scaled_modalScale, modalContentY];

}


//<!--/* ========================= FUNCTION: removeModalContent ========================= */-->

function removeModalContent() {

	// console.log('');
	// console.log('==============================');
	// console.log('removeModalContent');
	// console.log('==============================');

	// $("#btn_close").remove();
	$("#modalObject").remove();
	// $("#modalObject").empty();
	// document.getElementById("modalObject").setAttribute('w3-include-html', '#');

	clearHash();
}


//<!--/* ========================= FUNCTION: work_out(thisSect) (WORK) ========================= */-->

function work_out(thisSect) {

	// console.log('');
	// console.log('PING! work_out triggered! thisSect = ' + thisSect);

	resetBG_work();
	// about_in_NG();
	// about_in();

	// TweenMax.to([workBG, logoGrid, showcaseContainer], 1.5, {autoAlpha:0, ease:Power3.easeOut	, delay:0.5});
	TweenMax.to([workBG, logoGrid, showcaseContainer], 1.5, {autoAlpha:0, ease:Power3.easeOut, onComplete:jump, onCompleteParams:[thisSect], delay:0.5});
}



//<!--/* ========================================================= */-->
//<!--/* ========================= ABOUT ========================= */-->
//<!--/* ========================================================= */-->


//<!--/* ========================= FUNCTION: about_in_NG() (SPLASH/INTRO) ========================= */-->

function about_in_NG() {

	// console.log('');
	// console.log('PING! about_in_NG triggered!');


	//<!--/* ------------------------- TIMELINE: aboutTL ------------------------- */-->

	var aboutTL = new TimelineLite({delay:0.5});

	aboutTL

		// ==================== SPLASH 01 ====================

		// .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		// .to([shigeru_logo_afro, shigeru_logo_glasses], 1, {scale:6.666666666666667, ease:Power3.easeOut}, "frame01 +=0")
	
		// .to([shigeru_logo_afro], 1, {x:1455, y:900, ease:Power3.easeOut}, "frame01 +=0")
		// .to([header_mask_afro_k], 1, {y:-628.75, scaleY:1.7109375, ease:Power3.easeOut}, "frame01 +=0")
		// .to([header_mask_afro_w], 0.25, {scaleY:0, ease:Power3.easeOut}, "frame01 +=0")

		// .to([shigeru_logo_glasses], 1, {x:3100, y:4040, ease:Power3.easeOut}, "frame01 +=0")
		// .to([header_mask_glasses_k], 0.6875, {y:-628.75, scaleY:1.7109375, ease:Power1.easeOut}, "frame01 +=0")
		// .to([header_mask_glasses_w], 0.6875, {scaleY:0, ease:Power1.easeOut}, "frame01 +=0")

		// .to([header_mask_kanji_w], 0.5, {y:-370, ease:Power3.easeOut, onComplete:loadAboutArray}, "frame01 +=0")



		.to([shigeru_logo_afro], 0.5, {width:250, ease:Power3.easeOut}, "frame01 +=0")


		// .call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=1")
	;

	aboutTL.duration(1.5);

	console.log("aboutTL timing = " + aboutTL.duration() + " secs");
}



var afroWidthScale = 0.75;
// console.log('afroWidthScale = ' + afroWidthScale);


//<!--/* ========================= FUNCTION: about_in() (WORK) ========================= */-->

function about_in() {

	// console.log('');
	// console.log('PING! about_in triggered!');


	// console.log('');
	// console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	// console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
	// console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());
	// console.log('document.body.clientWidth = ' + document.body.clientWidth + '     document.body.clientHeight = ' + document.body.clientHeight);
	// console.log('$(document).width() = ' + $(document).width() + '     $(document).height() = ' + $(document).height());


	var afroX = getDims("shigeru_logo_afro")[0];
	var afroY = getDims("shigeru_logo_afro")[1];
	var afroW = getDims("shigeru_logo_afro")[2];
	var afroH = getDims("shigeru_logo_afro")[3];

	// console.log('');
	// console.log('*** PRE tween: afro, glasses INITIAL STATE ***');
	// console.log('afroX = ' + afroX + '     afroY = ' + afroY + '     afroW = ' + afroW + '     afroH = ' + afroH);


	// console.log('');
	// console.log('*** PRE tween: afro, glasses CALCULATED STATE ***');

	if (window.innerWidth <= 1440) {

		console.log('viewport <= 1440');

		var logoIconScale = window.innerWidth * afroWidthScale / afroW;
		console.log('logoIconScale = ' + logoIconScale);

		var afroXpercent = (((window.innerWidth - (afroW * logoIconScale)) / 2) + 35) / 150 * 100;
		console.log('afroXpercent = ' + afroXpercent);
		console.log('');

	} else {

		console.log('viewport > 1440');

		var logoIconScale = 1440 * afroWidthScale / afroW;
		console.log('logoIconScale = ' + logoIconScale);

		// var afroXpercent = (1440 - (afroW * logoIconScale)) / 2;
		var afroXpercent = (((1440 - (afroW * logoIconScale)) / 2) + 35) / 150 * 100;
		console.log('afroXpercent = ' + afroXpercent + '     looking for afroXpercent = 1.433333333333333 w/ transformOrigin:0 0');
		console.log('');
	}


	//<!--/* ------------------------- TIMELINE: aboutTL ------------------------- */-->

	document.getElementById("btn_name").style.visibility = "visible";
	document.getElementById("resetThoughtsID").style.visibility = "visible";
	// document.getElementById("thoughtBubble").style.visibility = "visible";

	// var aboutTL = new TimelineLite({delay:0.5});
	var aboutTL = new TimelineLite({delay:1});

	aboutTL

		//==================== SPLASH 01 ====================

		// .call(consoleLog, ["aboutTL - FRAME 01 BEGIN!!!"], "frame01")

		.to([shigeru_logo_afro, shigeru_logo_glasses], 1, {xPercent:afroXpercent, y:900, scale:logoIconScale, transformOrigin:"0 0", ease:Power3.easeOut, onComplete:checkDims, onCompleteParams:["shigeru_logo_afro"]}, "frame01 +=0")

		.to([header_mask_afro_k, header_mask_glasses_k], 1, {y:-360, height:620, transformOrigin:"50% 0", ease:Power3.easeOut}, "frame01 +=0")
		.to([header_mask_afro_w], 1, {y:-360, transformOrigin:"50% 0", ease:Power3.easeOut}, "frame01 +=0")

		// .fromTo([header_mask_kanji_w], 1, {y:0}, {y:-360, ease:Power3.easeOut}, "frame01 +=0")
		.fromTo([header_mask_kanji_w], 1, {y:0}, {y:-360, ease:Power3.easeOut, onComplete:loadAboutArray}, "frame01 +=0")
		// .fromTo([header_mask_kanji_w], 1, {y:0}, {y:-360, ease:Power3.easeOut, onComplete:checkDims, onCompleteParams:["shigeru_logo_afro"]}, "frame01 +=0")

		.fromTo([btn_name, resetThoughtsID], 1, {autoAlpha:0}, {autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")
		// .fromTo([btn_name, name_pronunciation, resetThoughtsID], 1, {autoAlpha:0}, {autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0.5")

		// .call(consoleLog, ["aboutTL - FRAME 01 END!!!"], "frame01 +=1.5")
	;

	// aboutTL.duration(0.5);
	aboutTL.duration(1);
	// aboutTL.duration(1.5);
	// aboutTL.duration(15);

	// console.log("aboutTL timing = " + aboutTL.duration() + " secs");

	// loadAboutArray();
}


//<!--/* ========================= FUNCTION: about_set() (ABOUT) ========================= */-->

function about_set() {

	console.log('');
	console.log('PING! about_set triggered!');


	console.log('');
	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());
	console.log('document.body.clientWidth = ' + document.body.clientWidth + '     document.body.clientHeight = ' + document.body.clientHeight);
	console.log('$(document).width() = ' + $(document).width() + '     $(document).height() = ' + $(document).height());


	console.log('');
	console.log('*** PRE tween: afro, glasses INITIAL STATE ***');

	var afroX = getDims("shigeru_logo_afro")[0];
	var afroY = getDims("shigeru_logo_afro")[1];
	var afroW = getDims("shigeru_logo_afro")[2];
	var afroH = getDims("shigeru_logo_afro")[3];

	console.log('afroX = ' + afroX + '     afroY = ' + afroY + '     afroW = ' + afroW + '     afroH = ' + afroH);


	console.log('');
	console.log('*** PRE tween: afro, glasses CALCULATED STATE ***');

	if (window.innerWidth <= 1440) {

		console.log('viewport <= 1440');

		var logoIconScale = window.innerWidth * afroWidthScale / afroW;
		console.log('logoIconScale = ' + logoIconScale);

		var afroXpercent = (((window.innerWidth - (afroW * logoIconScale)) / 2) + 35) / 150 * 100;
		console.log('afroXpercent = ' + afroXpercent);
		console.log('');

	} else {

		console.log('viewport > 1440');

		var logoIconScale = 1440 * afroWidthScale / afroW;
		console.log('logoIconScale = ' + logoIconScale);

		var afroXpercent = (((1440 - (afroW * logoIconScale)) / 2) + 35) / 150 * 100;
		console.log('afroXpercent = ' + afroXpercent + '     looking for afroXpercent = 1.433333333333333 w/ transformOrigin:0 0');
		console.log('');
	}

	TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], {xPercent:afroXpercent, y:900, scale:logoIconScale, transformOrigin:"0 0", ease:Power3.easeOut, onComplete:checkDims, onCompleteParams:["shigeru_logo_afro"]});

	TweenMax.set([header_mask_afro_k, header_mask_glasses_k], {y:-360, height:620, transformOrigin:"50% 0", ease:Power3.easeOut});
	TweenMax.set([header_mask_afro_w], {y:-360, transformOrigin:"50% 0", ease:Power3.easeOut});
}


//<!--/* ========================= FUNCTION: about_out() (SPLASH/INTRO) ========================= */-->

function about_out(thisSect) {

	console.log('PING! about_in triggered!');

	//<!--/* ------------------------- TIMELINE: aboutTL ------------------------- */-->

	document.getElementById("thoughtBubble").style.visibility = "hidden";

	var aboutTL = new TimelineMax({delay:0});

	aboutTL

	//==================== SPLASH 01 ====================

		// .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		.to([thoughtFro, resetThoughtsID, btn_name], 1, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")
		// .to([thoughtFro, thoughtBubble, resetThoughtsID, btn_name], 1, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")
		// .to([thoughtFro, thoughtBubble, resetThoughtsID, btn_name, name_pronunciation], 1, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")

		.to([shigeru_logo_afro, shigeru_logo_glasses], 1, {xPercent:0, y:0, scale:1, ease:Power3.easeOut}, "frame01 +=0")

		.to([header_mask_afro_k, header_mask_glasses_k], 1, {y:0, height:620, transformOrigin:"50% 0", ease:Power3.easeOut}, "frame01 +=0")
		.to([header_mask_afro_w], 1, {y:0, transformOrigin:"50% 0", ease:Power3.easeOut}, "frame01 +=0")

		// // .to([header_mask_kanji_w], 1, {y:360, ease:Power3.easeOut}, "frame01 +=0")
		// .to([header_mask_kanji_w], 1, {y:360, ease:Power3.easeOut, onComplete:jump, onCompleteParams:[thisSect]}, "frame01 +=0")

		// .to([header_mask_kanji_w], 1, {y:0, ease:Power3.easeOut}, "frame01 +=0")
		.to([header_mask_kanji_w], 1, {y:0, ease:Power3.easeOut, onComplete:jump, onCompleteParams:[thisSect]}, "frame01 +=0")

		// .call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=1")
	;

	aboutTL.duration(1);

	console.log("aboutTL timing = " + aboutTL.duration() + " secs");
}



//<!--/* ========================= NAME / PRONUNCIATION ========================= */-->

function showThis(thisID) {

	switch(thisID) {
		case ('btn_name'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;

		case ('name_syllable01'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});
			TweenMax.to([name_def01], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;

		case ('name_syllable02'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});
			TweenMax.to([name_def02], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;

		case ('name_syllable03'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:1, ease:Power3.easeOut});
			TweenMax.to([name_def03], 0.375, {autoAlpha:1, ease:Power3.easeOut});

			break;
	}
}


function hideThis(thisID) {

	switch(thisID) {
		case ('btn_name'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;

		case ('name_syllable01'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_def01], 0.375, {autoAlpha:0, ease:Power3.easeOut});
			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;

		case ('name_syllable02'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_def02], 0.375, {autoAlpha:0, ease:Power3.easeOut});
			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;

		case ('name_syllable03'):
			// console.log('DING! thisID = ' + thisID);

			TweenMax.to([name_def03], 0.375, {autoAlpha:0, ease:Power3.easeOut});
			TweenMax.to([name_pronunciation], 0.375, {autoAlpha:0, ease:Power3.easeOut});

			break;
	}
}



//<!--/* ========================= ARRAY OF ALL THOUGHTS - FUNCTIONs: loadAboutArray ========================= */-->

var aboutArray = [];
var aboutArrayLength = 0;


function loadAboutArray() {

	// console.log('');
	// console.log('==============================');
	// console.log('loadAboutArray');
	// console.log('==============================');

	// console.log('localStorage.length = ' + localStorage.length);

	if (localStorage.length === 0) {

		// console.log('localStorage.length is zero = ' + localStorage.length);

		$.ajax({
			url:'scripts/about.php',
			type: 'GET',
			async: false,
			success:function(data) {

				// console.log('data = ' + data);

				var aboutArrayTemp = JSON.parse(data);
	
				// console.log('aboutArrayTemp = ');
				// console.log(aboutArrayTemp);

				$.each(aboutArrayTemp, function(index, value) {
					storeMe(index, value, aboutArray);
	
					// console.log('index = ' + index + '     value = ' + value);
				});
			}
		});
	
		for (var index = 0; index < localStorage.length; index++) {
			var thisArrayObject = JSON.parse(localStorage.getItem(index));

			// console.log('thisArrayObject = ' + thisArrayObject);

			aboutArrayLength = index + 1;
			aboutArray.push(thisArrayObject);

			// console.log('aboutArrayLength = ' + aboutArrayLength + '     aboutArray = ' + aboutArray);
		}

		document.cookie = 'aboutArrayLength = ' + aboutArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';
		// document.cookie = 'imageArrayLength = ' + imageArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';

	} else {

		// console.log('localStorage.length is non-zero = ' + localStorage.length);

		// console.log('aboutArrayLength = ' + aboutArrayLength);

		aboutArrayLength = getCookie('aboutArrayLength');

		for (var index2 = 0; index2 < aboutArrayLength; index2++) {
			var thisArrayObject2 = JSON.parse(localStorage.getItem(index2));
			aboutArray.push(thisArrayObject2);
		}
	}

	// console.log('');
	// console.log('loadAboutArray: aboutArray.length = ' + aboutArray.length);
	// console.log('loadAboutArray: aboutArray = ');
	// console.log(aboutArray);

	// console.log('');
	// console.log('loadAboutArray: localStorage.length = ' + localStorage.length + '     aboutArrayLength = ' + aboutArrayLength);
	// console.log('loadAboutArray: localStorage = (see next line)');
	// console.log(localStorage);

	// addCurls();
	setTimeout(function() {
		addCurls();
	} , 500);
}



//<!--/* ========================= ADD THOUGHTS ========================= */-->

//<!--/* ------------------------- RANDOM POINTS WITHIN SVG - CIRCLE ------------------------- */-->
//<!--/* ------------------------- REF: https://stackoverflow.com/questions/20539196/creating-svg-elements-dynamically-with-javascript-inside-html ------------------------- */-->

//var minAngleDegrees = -180;
//var maxAngleDegrees = 0;

var minAngleDegrees = -170;
var maxAngleDegrees = -10;

//var minAngleDegrees = 190;
//var maxAngleDegrees = 350;

var maxRadius = 1000;
var outerRadius = 900;
var innerRadius = 450;

//var numPoints = 1000;
//var numPoints = 1;
var numPoints;
var cRad = 30;


//<!--/* ------------------------- FUNCTION: getRandomCoords_Circle(minAngleDegrees, maxAngleDegrees, outerRadius, innerRadius) ------------------------- */-->

function getRandomCoords_Circle(minAngleDegrees, maxAngleDegrees, outerRadius, innerRadius) {

	// 	var thisAngle = Math.random() * Math.PI * 2;
	// 	var thisRadius = maxRadius;
	// //	var thisRadius = outerRadius;
	// //	var thisRadius = innerRadius;

	var thisAngle = (Math.random() * (maxAngleDegrees-minAngleDegrees) + minAngleDegrees) / 180 * Math.PI;
	var thisRadius = (Math.random() * (outerRadius-innerRadius) + innerRadius);

	var thisX = Math.cos(thisAngle) * (thisRadius / 2);
	var thisY = Math.sin(thisAngle) * (thisRadius / 2);

	return [thisX, thisY, thisAngle];
}


//<!--/* ------------------------- FUNCTION: testOverlap(thisRollover, rolloverX, rolloverY, thisBrain) ------------------------- */-->
//<!--/* ------------------------- REF: http://www.inkfood.com/collision-detection-with-svg/ ------------------------- */-->

function testOverlap(thisRollover, rolloverX, rolloverY, thisBrain) {

	// // console.log('PING!!! testOverlap triggered!');
	// console.log('PING!!! testOverlap triggered!     thisRollover = ' + thisRollover + '     thisRollover.id = ' + thisRollover.id + '     rolloverX = ' + rolloverX + '     rolloverY = ' + rolloverY + '     cRad = ' + cRad);
	// // console.log('');


	// var thisLeft = rolloverX - cRad;
	// var thisRight = rolloverX + cRad;
	// var thisTop = rolloverY - cRad;
	// var thisBottom = rolloverY + cRad;

	// // console.log('thisLeft = ' + thisLeft + '     thisRight = ' + thisRight + '     thisTop = ' + thisTop + '     thisBottom = ' + thisBottom);

	var newRollover = thisRollover.getBoundingClientRect();

	// console.log('newRollover.left = ' + newRollover.left + '     newRollover.right = ' + newRollover.right + '     newRollover.top = ' + newRollover.top + '     newRollover.bottom = ' + newRollover.bottom);
	// console.log('');


	$('.rollover').each(function(i, obj) {
		// console.log('i = ' + i + '     obj = ' + obj + '     obj.id = ' + obj.id);

		// var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
		// var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

		// return !(r2.left > r1.right || 
		// 	 r2.right < r1.left || 
		// 	 r2.top > r1.bottom ||
		// 	 r2.bottom < r1.top);

		// var thisRollover = thisRollover.getBoundingClientRect();
		var preRollover = obj.getBoundingClientRect();

		// console.log('thisLeft = ' + thisLeft + '     thisRight = ' + thisRight + '     thisTop = ' + thisTop + '     thisBottom = ' + thisBottom);
		// console.log('preRollover.id = ' + obj.id + '     preRollover.left = ' + preRollover.left + '     preRollover.right = ' + preRollover.right + '     preRollover.top = ' + preRollover.top + '     preRollover.bottom = ' + preRollover.bottom);

		// return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
		// var overlap = !(preRollover.left > thisRight || preRollover.right < thisLeft || preRollover.top > thisBottom || preRollover.bottom < thisTop);
		var overlap =  !(preRollover.left > newRollover.right || preRollover.right < newRollover.left || preRollover.top > newRollover.bottom || preRollover.bottom < newRollover.top);

		// console.log('overlap = ' + overlap);

		if (overlap && thisRollover.id !== obj.id) {
			// console.log('overlap = ' + overlap);
			// console.log('newRollover.id = ' + thisRollover.id + '     newRollover.left = ' + newRollover.left + '     newRollover.right = ' + newRollover.right + '     newRollover.top = ' + newRollover.top + '     newRollover.bottom = ' + newRollover.bottom);
			// console.log('newRollover.id = ' + thisRollover.id + '     newRollover.brain = ' + thisBrain + '     newRollover.left = ' + newRollover.left + '     newRollover.right = ' + newRollover.right + '     newRollover.top = ' + newRollover.top + '     newRollover.bottom = ' + newRollover.bottom);
			// console.log('preRollover.id = ' + obj.id + '     preRollover.left = ' + preRollover.left + '     preRollover.right = ' + preRollover.right + '     preRollover.top = ' + preRollover.top + '     preRollover.bottom = ' + preRollover.bottom);
			// console.log('newRollover.id = ' + thisRollover.id + '     newRollover.brain = ' + thisBrain + '     newRollover.left = ' + newRollover.left + '     newRollover.right = ' + newRollover.right + '     newRollover.top = ' + newRollover.top + '     newRollover.bottom = ' + newRollover.bottom + '     newRollover.width = ' + newRollover.width);
			// console.log('preRollover.id = ' + obj.id + '     preRollover.left = ' + preRollover.left + '     preRollover.right = ' + preRollover.right + '     preRollover.top = ' + preRollover.top + '     preRollover.bottom = ' + preRollover.bottom + '     preRollover.width = ' + preRollover.width);
			// console.log('');

			// var thisRolloverX = newRollover.left;
			// var thisRolloverY = newRollover.top;

			// console.log('thisRolloverX = ' + thisRolloverX + '     thisRolloverY = ' + thisRolloverY);

			var newRolloverX;
			var newRolloverY;
			var newRolloverT = newRollover.top;

			if (thisBrain === "left") {
				console.log('thisBrain = ' + thisBrain);
				console.log('thisRollover.id = ' + thisRollover.id + '     newRollover.left = ' + newRollover.left + '     preRollover.width = ' + preRollover.width + '     newRollover.top = ' + newRollover.top + '     preRollover.height = ' + preRollover.height + '     cRad = ' + cRad);
				console.log('preRollover.id = ' + obj.id + '     preRollover.left = ' + preRollover.left + '     preRollover.right = ' + preRollover.right + '     preRollover.top = ' + preRollover.top + '     preRollover.bottom = ' + preRollover.bottom + '     preRollover.width = ' + preRollover.width);

				// newRolloverX = newRollover.left - preRollover.width;
				// newRolloverY = newRollover.top + preRollover.height;

				var newRolloverL = newRollover.left;
				// var newRolloverT = newRollover.top;
				// var preRolloverW = preRollover.width;
				// var preRolloverH = preRollover.height;

				// console.log('newRolloverL = ' + newRolloverL + '     newRolloverT = ' + newRolloverT + '     preRolloverW = ' + preRolloverW + '     preRolloverH = ' + preRolloverH);

				// newRolloverX = newRolloverL - preRolloverW;
				// newRolloverY = newRolloverT + preRolloverH;

				newRolloverX = newRolloverL - (cRad * 2);
				newRolloverY = newRolloverT + (cRad * 2);

				console.log('newRolloverX = ' + newRolloverX + '     newRolloverY = ' + newRolloverY);

				TweenMax.set(newRollover, {x:newRolloverX, y:newRolloverY});

			} else if (thisBrain === "right") {
				console.log('thisBrain = ' + thisBrain);
				console.log('thisRollover.id = ' + thisRollover.id + '     newRollover.right = ' + newRollover.right + '     preRollover.width = ' + preRollover.width + '     newRollover.top = ' + newRollover.top + '     preRollover.height = ' + preRollover.height + '     cRad = ' + cRad);
				console.log('preRollover.id = ' + obj.id + '     preRollover.left = ' + preRollover.left + '     preRollover.right = ' + preRollover.right + '     preRollover.top = ' + preRollover.top + '     preRollover.bottom = ' + preRollover.bottom + '     preRollover.width = ' + preRollover.width);

				// newRolloverX = newRollover.right + preRollover.width;
				// newRolloverY = newRollover.top - preRollover.height;

				var newRolloverR = newRollover.right;
				// var newRolloverT = newRollover.top;
				// var preRolloverW = preRollover.width;
				// var preRolloverH = preRollover.height;

				// console.log('newRolloverL = ' + newRolloverL + '     newRolloverT = ' + newRolloverT + '     preRolloverW = ' + preRolloverW + '     preRolloverH = ' + preRolloverH);

				// newRolloverX = newRolloverL - preRolloverW;
				// newRolloverY = newRolloverT + preRolloverH;

				newRolloverX = newRolloverR + (cRad * 2);
				newRolloverY = newRolloverT + (cRad * 2);

				console.log('newRolloverX = ' + newRolloverX + '     newRolloverY = ' + newRolloverY);

				TweenMax.set(newRollover, {x:newRolloverX, y:newRolloverY});

			} else {
				console.log('No brain activity detected... my sincerest condolences.');
			}

			// console.log('');

			// console.log('newRolloverX = ' + newRolloverX + '     newRolloverY = ' + newRolloverX);

			// TweenMax.set(newRollover, {x:newRolloverX, y:newRolloverY});
		}

	// console.log('');

	});

	// console.log('');
}


//<!--/* ------------------------- FUNCTION: addCurls ------------------------- */-->

var thisBoingPath_LB = document.createElementNS("http://www.w3.org/2000/svg", "path");

thisBoingPath_LB.setAttributeNS(null, "class", "boingPath");
thisBoingPath_LB.setAttributeNS(null, "id", "thisBoingPath_LB");
thisBoingPath_LB.setAttributeNS(null, "d", "M0,245c10.099-47.992,24.712-91.212,42.769-127.508s39.559-65.669,63.435-85.968S156.33,0,183.884,0s53.805,11.225,77.681,31.524S306.943,81.196,325,117.492");
thisBoingPath_LB.setAttributeNS(null, "fill", "none");
thisBoingPath_LB.setAttributeNS(null, "stroke", "#00FF00");


var thisBoingPath_RB = document.createElementNS("http://www.w3.org/2000/svg", "path");

thisBoingPath_RB.setAttributeNS(null, "class", "boingPath");
thisBoingPath_RB.setAttributeNS(null, "id", "thisBoingPath_RB");
thisBoingPath_RB.setAttributeNS(null, "d", "M325,245c-10.099-47.992-24.712-91.212-42.769-127.508c-18.057-36.296-39.559-65.669-63.435-85.968S168.67,0,141.116,0c-27.555,0-53.805,11.225-77.681,31.524S18.057,81.196,0,117.492");
thisBoingPath_RB.setAttributeNS(null, "fill", "none");
thisBoingPath_RB.setAttributeNS(null, "stroke", "#00FF00");


//var thoughtBubble = document.createElementNS("http://www.w3.org/2000/svg", "path");
//
//thoughtBubble.setAttributeNS(null, "class", "thoughtBubble");
//thoughtBubble.setAttributeNS(null, "id", "thoughtBubble");
//thoughtBubble.setAttributeNS(null, "d", "M382.251,169.261c7.461-6.466,12.188-16.008,12.188-26.662c0-6.062-1.53-11.766-4.222-16.749c4.338-7.034,6.843-15.32,6.843-24.193c0-25.477-20.636-46.13-46.092-46.13c-7.243,0-14.095,1.674-20.194,4.654c-8.838-8.423-20.799-13.593-33.967-13.593c-2.795,0-5.535,0.237-8.203,0.684C287.3,20.945,265.559,0,238.93,0c-20.425,0-37.971,12.324-45.629,29.945c-0.633-0.029-1.269-0.048-1.91-0.048c-3.76,0-7.399,0.509-10.863,1.446c-9.959-15.136-27.087-25.129-46.55-25.129c-30.763,0-55.701,24.959-55.701,55.747c0,2.625,0.185,5.205,0.536,7.733c-13.753,6.122-24.152,18.419-27.684,33.375c-1.494-0.145-3.009-0.221-4.541-0.221C20.858,102.848,0,123.724,0,149.475c0,20.759,13.556,38.347,32.291,44.387c-0.244,2.102-0.374,4.239-0.374,6.407c0,30.3,24.542,54.862,54.817,54.862c3.136,0,6.209-0.267,9.201-0.774C102.862,269.486,118.115,280,135.83,280c19.422,0,35.885-12.635,41.66-30.136c4.578,1.64,9.509,2.539,14.65,2.539c12.362,0,23.509-5.172,31.426-13.461c5.602,3.106,12.044,4.879,18.902,4.879c8.597,0,16.54-2.785,22.993-7.494c3.727,16.983,18.84,29.696,36.928,29.696c13.161,0,24.746-6.732,31.52-16.939c5.832,2.597,12.289,4.042,19.085,4.042c25.961,0,47.006-21.063,47.006-47.045C400,191.169,393.066,177.88,382.251,169.261z");
//thoughtBubble.setAttributeNS(null, "fill", "#FFFFFF");
//thoughtBubble.setAttributeNS(null, "stroke", "#000000");
//thoughtBubble.setAttributeNS(null, "stroke-width", "5");

//thoughts.appendChild(thisBoingPath_LB);
//thoughts.appendChild(thisBoingPath_RB);
//thoughts.appendChild(thoughtBubble);


TweenMax.set($('#thoughtBubble'), {autoAlpha:0});
//TweenMax.set([thoughtBubble], {autoAlpha:0});


function addCurls() {

	thoughts.appendChild(thisBoingPath_LB);
	thoughts.appendChild(thisBoingPath_RB);
	// thoughts.appendChild(thoughtBubble);

	// shigeru_logo_afro.appendChild(thisBoingPath_LB);
	// shigeru_logo_afro.appendChild(thisBoingPath_RB);
	// // shigeru_logo_afro.appendChild(thoughtBubble);

	TweenMax.set([thisBoingPath_LB, thisBoingPath_RB], {autoAlpha:0});


	numPoints = aboutArray.length;
	// console.log('numPoints = ' + numPoints);

	for (var i = 0; i < numPoints; i++) {

		// console.log('aboutArray[' + i + '].about_index = ' + aboutArray[i].about_index);
		// console.log('aboutArray[' + i + '].brain = ' + aboutArray[i].brain);
		// console.log('aboutArray[' + i + '].thought = ' + aboutArray[i].thought);
		// console.log('aboutArray[' + i + '].format = ' + aboutArray[i].format);
		// console.log('aboutArray[' + i + '].format_src = ' + aboutArray[i].format_src);
		// console.log('aboutArray[' + i + '].link = ' + aboutArray[i].link);
		// console.log('aboutArray[' + i + '].aWidth = ' + aboutArray[i].aWidth);
		// console.log('aboutArray[' + i + '].aHeight = ' + aboutArray[i].aHeight);

		// console.log('');


		switch(aboutArray[i].brain) {
			case ('left'):
				// console.log('DING! Left Brain');

				// minAngleDegrees = -90;
				// maxAngleDegrees = -10;

				minAngleDegrees = -80;
				maxAngleDegrees = -10;

				break;

			case ('right'):
				// console.log('DING! Right Brain');

				// minAngleDegrees = -170;
				// maxAngleDegrees = -90;

				minAngleDegrees = -170;
				maxAngleDegrees = -100;

				break;
		}


		var thoughtCoords = getRandomCoords_Circle(minAngleDegrees, maxAngleDegrees, outerRadius, innerRadius);


		var rolloverID = "rollover" + i;
		var rolloverX = thoughtCoords[0] + (outerRadius / 2);
		var rolloverY = thoughtCoords[1] + (outerRadius / 2);

		// console.log('rolloverID = ' + rolloverID + '     rolloverX = ' + rolloverX + '     rolloverY = ' + rolloverY);


		var curlID = "curl" + i;
		var curlX = thoughtCoords[0] + (outerRadius / 2) - 25;
		var curlY = thoughtCoords[1] + (outerRadius / 2) - 60;
		var curlAngle = thoughtCoords[2] * (180 / Math.PI) + 90;

		// console.log('curlID = ' + curlID + '     curlX = ' + curlX + '     curlY = ' + curlY + '     curlAngle = ' + curlAngle);


		var thisCurl = document.createElementNS("http://www.w3.org/2000/svg", "path");

		thisCurl.setAttributeNS(null, "class", "curl");
		thisCurl.setAttributeNS(null, "id", curlID);
		thisCurl.setAttributeNS(null, "d", "M10.164,93.706c7.735,9.34,24.605,8.114,30.362-2.544c2.813-5.207,3.003-11.594,0.186-16.841c-2.904-5.409-9.065-8.554-15.283-9.187c-6.42-0.654-13.07,1.684-16.954,6.63c-3.9,4.967-4.607,12.137,0.127,16.854c4.535,4.519,11.862,4.529,17.812,3.054c6.502-1.612,12.996-5.167,17.529-9.865c4.63-4.799,7.285-11.432,4.873-17.805c-2.334-6.168-8.464-10.812-15.243-12.04c-7.614-1.379-15.903,0.719-22.151,4.969C5.731,60.803,0.579,67.627,3.316,74.503c2.442,6.138,9.839,8.83,16.369,8.566c6.804-0.275,13.364-3.138,18.18-7.649c4.742-4.442,7.872-10.615,7.761-16.987c-0.11-6.344-3.209-12.58-8.088-16.92c-5.093-4.531-11.966-6.989-18.977-6.173c-7.488,0.872-14.26,5.337-16.428,12.352c-2.057,6.655,1.092,13.196,7.015,16.996c5.61,3.599,13.084,4.383,19.476,2.346c12.553-4.002,21.796-17.54,16.672-29.843c-4.598-11.04-18.768-18.509-31.069-14.478C7.754,24.835,1.948,29.951,0.401,36.402c-1.619,6.75,1.803,13.231,7.732,17.037c13.012,8.352,31.07-0.389,36.818-12.776c2.866-6.175,3.009-13.057-0.232-19.131c-2.938-5.505-8.711-10.039-15.202-11.202C15.903,7.89,1.992,21.103,8.207,33.824c2.564,5.248,8.339,8.883,14.24,10.029c6.566,1.275,13.086-0.263,18.328-4.176c10.726-8.007,12.619-23.191,2.918-32.612C34.201-2.154,18.144-2.59,8.912,7.171C4.61,11.719,1.877,17.889,2.466,24.053c0.608,6.364,4.229,11.872,9.602,15.683c5.374,3.812,11.683,4.921,18.234,4.069c1.675-0.218,2.557-2.219,2.17-3.602c-0.474-1.693-2.168-2.261-3.823-2.045c-8.777,1.142-18.597-6.131-19.341-14.408C8.565,15.478,15.746,6.901,24.715,6.412c8.967-0.489,18.345,6.243,18.482,15.054c0.128,8.205-7.129,16.42-16.131,16.4c-8.49-0.019-17.218-7.439-11.98-15.537c2.38-3.68,6.918-6.178,11.536-5.851c4.436,0.314,8.528,3.002,10.931,6.45c5.757,8.263,1.266,18.961-7.086,23.972c-4.61,2.766-10.651,4.208-15.927,2.308c-4.212-1.516-7.828-5.308-7.577-9.743c0.25-4.418,3.944-8.158,8.021-9.971c4.014-1.785,8.712-1.542,12.784-0.067C36,32.41,41.685,40.547,39.007,48.822c-2.678,8.275-12.488,14.607-21.66,12.234c-4.222-1.092-8.558-4.08-8.875-8.519c-0.35-4.903,3.659-8.896,8.411-10.204c9.776-2.69,19.335,4.311,21.422,13.225c2.078,8.875-5.134,17.536-13.882,20.112c-4.005,1.179-9.161,1.445-12.698-1.087c-4.502-3.223-1.064-8.445,2.161-11.161c7.48-6.298,22.26-8.296,27.789,1.365c5.072,8.86-6.388,16.947-13.93,19.792c-3.786,1.428-8.921,2.651-12.772,0.776c-4.126-2.008-3.626-6.896-1.337-10.037c5.212-7.15,17.959-5.482,22.176,1.703c4.825,8.223-1.311,18.582-11.122,19.275c-4.643,0.328-9.373-1.22-12.639-4.367C10.815,90.737,9.138,92.468,10.164,93.706L10.164,93.706z");
		thisCurl.setAttributeNS(null, "cx", curlX);
		thisCurl.setAttributeNS(null, "cy", curlY);
		thisCurl.setAttributeNS(null, "ca", curlAngle);
		// thisCurl.setAttributeNS(null, "fill", "#191919");
 		thisCurl.setAttributeNS(null, "fill", "#333333");
		// thisCurl.setAttributeNS(null, "fill", "#0000FF");

		thoughts.appendChild(thisCurl);
		// shigeru_logo_afro.appendChild(thisCurl);
		TweenMax.set(thisCurl, {x:curlX, y:curlY, rotation:curlAngle, transformOrigin:'50% 50%'});


		var thisRollover = document.createElementNS("http://www.w3.org/2000/svg", "circle");

		thisRollover.setAttributeNS(null, "class", "rollover");
		thisRollover.setAttributeNS(null, "id", rolloverID);
		thisRollover.setAttributeNS(null, "brain", aboutArray[i].brain);
		thisRollover.setAttributeNS(null, "cx", rolloverX);
		thisRollover.setAttributeNS(null, "cy", rolloverY);
		thisRollover.setAttributeNS(null, "r", cRad);
		thisRollover.setAttributeNS(null, "fill", "#ff0000");
		thisRollover.setAttributeNS(null, "fill-opacity", "0");
		// thisRollover.setAttributeNS(null, "stroke", "#ff0000");

		thoughts.appendChild(thisRollover);
		// shigeru_logo_afro.appendChild(thisRollover);


		// testOverlap(thisRollover, rolloverX, rolloverY, aboutArray[i].brain);


		// thisRollover.onmouseover = function() {
		// // thisCurl.onmouseover = function() {
		// 	boing(this);
		// 	// boing(this, boingPathX, boingPathY);
		// };

		thisRollover.addEventListener('mouseover', boing);
		thisRollover.boingParam = thisRollover;
	}

	TweenMax.set(thoughts, {x:50, y:60});
	// TweenMax.fromTo(thoughts, 0.25, {autoAlpha:0}, {autoAlpha:1});
	TweenMax.staggerFromTo(".curl", 0.25, {autoAlpha:0}, {autoAlpha:1}, 0.0625);
}


//<!--/* ------------------------- FUNCTION: boing(thisRollover, boingPathX, boingPathY) ------------------------- */-->
//<!--/* ------------------------- REF: https://greensock.com/forums/topic/16352-animating-along-a-path/     REF: https://codepen.io/PointC/pen/vKaBxQ ------------------------- */-->

//function boing(thisRollover) {
//function boing(thisRollover, boingPathX, boingPathY) {
function boing(Event) {

	var thisRollover = Event.target;

	// console.log('PING!!! boing triggered!     Event = ' + Event + '     thisRollover = ' + thisRollover);

	// console.log('PING!!! boing triggered!');
	// console.log('PING!!! boing triggered!     this.id = ' + this.id);
	// console.log('PING!!! boing triggered!     thisRollover = ' + thisRollover + '     thisRollover.id = ' + thisRollover.id);
	// console.log('PING!!! boing triggered!     thisRollover = ' + thisRollover + '     thisRollover.id = ' + thisRollover.id + '     thisRollover.cx = ' + thisRollover.cx + '     thisRollover.cy = ' + thisRollover.cy);
	// console.log('PING!!! boing triggered!     thisRollover = ' + thisRollover + '     thisRollover.id = ' + thisRollover.id + '     thisRollover.cx = ' + thisRollover.cx + '     thisRollover.cy = ' + thisRollover.cy + '     thisRollover.getAttribute("brain") = ' + thisRollover.getAttribute("brain"));
	// console.log('PING!!! boing triggered!' + '     thisRollover.id = ' + thisRollover.id + '     thisRollover.getAttribute("cx") = ' + thisRollover.getAttribute("cx") + '     thisRollover.getAttribute("cy") = ' + thisRollover.getAttribute("cy") + '     thisRollover.getAttribute("brain") = ' + thisRollover.getAttribute("brain"));
	// console.log('PING!!! boing triggered!' + '     thisRollover.id = ' + thisRollover.id + '     thisRollover.getAttribute("brain") = ' + thisRollover.getAttribute("brain") + '     thisRollover.getAttribute("cx") = ' + thisRollover.getAttribute("cx") + '     thisRollover.getAttribute("cy") = ' + thisRollover.getAttribute("cy") + '     thisRollover.getAttribute("brain") = ' + thisRollover.getAttribute("brain"));


	// var thisIndex = thisRollover.id.replace('rollover','');

	// console.log('thisIndex = ' + thisIndex);


	// console.log('aboutArray.keys() = ' + aboutArray.keys());
	// console.log('aboutArray.length = ' + aboutArray.length);
	// console.log('aboutArray[0].about_index = ' + aboutArray[0].about_index);
	// console.log('aboutArray[0].brain = ' + aboutArray[0].brain);
	// console.log('aboutArray[0].thought = ' + aboutArray[0].thought);
	// console.log('aboutArray[0].format = ' + aboutArray[0].format);
	// console.log('aboutArray[0].format_src = ' + aboutArray[0].format_src);
	// console.log('aboutArray[0].link = ' + aboutArray[0].link);
	// console.log('aboutArray[0].aWidth = ' + aboutArray[0].aWidth);
	// console.log('aboutArray[0].aHeight = ' + aboutArray[0].aHeight);

	// console.log('');

	// console.log('$("#thoughts") = '+ $('#thoughts'));

	var thisCurl = $('#' + (thisRollover.id.replace('rollover','curl')));
	// var thisBoingPath = $('#' + (thisRollover.id.replace('rollover','boingPath')));


	var bezierData;

	switch(true) {
		// case (thisCurl.attr("ca") > 360):
		case (thisCurl.attr("ca") > 0):
			// console.log('thisCurl.attr("ca") = ' + thisCurl.attr("ca"));
			// console.log('DING! Left Brain');

			// var bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath_LB, {align:"relative"});
			bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath_LB, {align:"relative"});

			break;

		case (thisCurl.attr("ca") < 0):
			// console.log('thisCurl.attr("ca") = ' + thisCurl.attr("ca"));
			// console.log('DING! Right Brain');

			// var bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath_RB, {align:"relative"});
			bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath_RB, {align:"relative"});

			break;
	}

	// console.log('thisCurl = '+ thisCurl + '     thisCurl.attr("id") = ' + thisCurl.attr("id") + '     thisCurl.attr("cx") = ' + thisCurl.attr("cx") + '     thisCurl.attr("cy") = ' + thisCurl.attr("cy") + '     thisCurl.attr("ca") = ' + thisCurl.attr("ca"));
	// console.log('thisBoingPath = '+ thisBoingPath + '     thisBoingPath.attr("id") = ' + thisBoingPath.attr("id"));

	// var bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath, {align:"relative"});

	var tl = new TimelineMax({paused:true});

	tl
		// .to([thoughtBubble], 0.5, {autoAlpha:0, ease:Power1.easeOut})
		// .set(thisCurl, {autoAlpha:1, xPercent:-50, yPercent:-50});
		// .to(thisCurl, 2, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Linear.easeNone, repeat:-1, yoyo:true})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Power3.easeOut})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Expo.easeOut})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Expo.easeOut, repeat:1, yoyo:true, onComplete:resetBoing, onCompleteParams:[thisCurl]})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Expo.easeOut, onComplete:resetBoing, onCompleteParams:[thisCurl]})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Expo.easeOut, onComplete:resetBoing, onCompleteParams:[thisCurl, thisCurl.attr("cx"), thisCurl.attr("cy"), thisCurl.attr("ca")]})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Expo.easeOut, onComplete:showThought, onCompleteParams:[thisCurl, thisCurl.attr("cx"), thisCurl.attr("cy"), thisCurl.attr("ca")]})
		// .to(thisCurl, 1, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Expo.easeOut, onComplete:showThought, onCompleteParams:[thisCurl]})
		.to(thisCurl, 0.5, {bezier:{values:bezierData, type:"cubic", autoRotate:90}, ease:Power1.easeOut, onComplete:showThought, onCompleteParams:[thisCurl]})
	;

	TweenMax.set(thisRollover, {autoAlpha:0});

	tl.play();

	// console.log('');
}



//<!--/* ------------------------- FUNCTION: showThought ------------------------- */-->
//<!--/* ------------------------- REF: https://stackoverflow.com/questions/8851023/how-to-get-the-actual-x-y-position-of-an-element-in-svg-with-transformations-and ------------------------- */-->

var thoughtWidth = 400;
var thoughtHeight = 280;


//<!--/* ------------------------- a   b   e  -  a = scaleX, b = , e = transX ------------------------- */-->
//<!--/* ------------------------- c   d   f  -  c = , d = scaleY, f = transY ------------------------- */-->
//<!--/* ------------------------- 0   0   1  -  0 = , 0 = , 1 = scaleZ ------------------------- */-->


// function showThought(thisCurl, curlX, curlY, curlAngle) {
function showThought(thisCurl) {

	// console.log('PING!!! resetBoing triggered!     thisThoughtCurl = ' + thisThoughtCurl);
	// console.log('PING!!! resetBoing triggered!     thisThoughtCurl = ' + thisThoughtCurl + '     thisThoughtCurlX = ' + thisThoughtCurlX + '     thisThoughtCurlY = ' + thisThoughtCurlY + '     thisThoughtCurlA = ' + thisThoughtCurlA);
	// console.log('PING!!! resetBoing triggered!     thisCurl = ' + thisCurl + '     thisCurl.attr("id") = ' + thisCurl.attr("id") + '     curlX = ' + curlX + '     curlY = ' + curlY + '     curlAngle = ' + curlAngle);


	var thisThoughtIndex = thisCurl.attr("id").replace('curl','');

	// console.log('thisThoughtIndex = ' + thisThoughtIndex);
	// console.log('aboutArray[' + thisThoughtIndex + '].thought = ' + aboutArray[thisThoughtIndex].thought);

	// console.log('aboutArray[' + thisThoughtIndex + '].about_index = ' + aboutArray[thisThoughtIndex].about_index);
	// console.log('aboutArray[' + thisThoughtIndex + '].brain = ' + aboutArray[thisThoughtIndex].brain);
	// console.log('aboutArray[' + thisThoughtIndex + '].thought = ' + aboutArray[thisThoughtIndex].thought);
	// console.log('aboutArray[' + thisThoughtIndex + '].format = ' + aboutArray[thisThoughtIndex].format);
	// console.log('aboutArray[' + thisThoughtIndex + '].format_src = ' + aboutArray[thisThoughtIndex].format_src);
	// console.log('aboutArray[' + thisThoughtIndex + '].link = ' + aboutArray[thisThoughtIndex].link);
	// console.log('aboutArray[' + thisThoughtIndex + '].aWidth = ' + aboutArray[thisThoughtIndex].aWidth);
	// console.log('aboutArray[' + thisThoughtIndex + '].aHeight = ' + aboutArray[thisThoughtIndex].aHeight);

	// console.log('');

	// $('#thoughtCopy').innerHTML = aboutArray[thisThoughtIndex].thought;
	// $('#thoughtCopy').contents().first().replaceWith(aboutArray[thisThoughtIndex].thought);
	$('#thoughtCopy').html(aboutArray[thisThoughtIndex].thought);


	// var thisCurlBBox = document.getElementById(thisCurl.attr("id")).getBBox();

	// console.log('PING!!! resetBoing triggered!     thisCurl = ' + thisCurl + '     thisCurl.attr("id") = ' + thisCurl.attr("id") + '     thisCurlBBox = ' + thisCurlBBox);
	// console.log('PING!!! resetBoing triggered!     thisCurl = ' + thisCurl + '     thisCurl.attr("id") = ' + thisCurl.attr("id") + '     thisCurlBBox = ' + thisCurlBBox + '     thisCurlBBox.x = ' + thisCurlBBox.x + '     thisCurlBBox.y = ' + thisCurlBBox.y);


	var thisCurlCTM = document.getElementById(thisCurl.attr("id")).getCTM();
	// console.log('PING!!! resetBoing triggered!     thisCurl = ' + thisCurl + '     thisCurl.attr("id") = ' + thisCurl.attr("id") + '     thisCurlCTM = ' + thisCurlCTM);
	// console.log('PING!!! resetBoing triggered!     thisCurl = ' + thisCurl + '     thisCurl.attr("id") = ' + thisCurl.attr("id") + '     thisCurlCTM = ' + thisCurlCTM + '     thisCurlCTM.e = ' + thisCurlCTM.e + '     thisCurlCTM.f = ' + thisCurlCTM.f);

	// // var thoughtBubbleX = thisCurlCTM.e - (thoughtWidth * 0.6875);
	// // var thoughtBubbleY = thisCurlCTM.f - (thoughtHeight * 0.75);

	// // var thoughtBubbleX = thisCurlCTM.e - (thoughtWidth * 0.125);
	// var thoughtBubbleX = thisCurlCTM.e - (thoughtWidth * 0.5);
	// var thoughtBubbleY = thisCurlCTM.f - (thoughtHeight * 0.125);

	var thoughtBubbleX;
	// var thoughtBubbleY;
	var thoughtBubbleY = thisCurlCTM.f - (thoughtHeight * 0.125);


	switch(aboutArray[thisThoughtIndex].brain) {
		case ('left'):
			// console.log('DING! Left Brain');

			// thoughtBubbleX = thisCurlCTM.e - (thoughtWidth * 0.125);
			thoughtBubbleX = thisCurlCTM.e - (thoughtWidth * 0.5);
			// thoughtBubbleY = thisCurlCTM.f - (thoughtHeight * 0.125);

			break;

		case ('right'):
			// console.log('DING! Right Brain');

			thoughtBubbleX = thisCurlCTM.e + (thoughtWidth * 0.125);
			// thoughtBubbleX = thisCurlCTM.e + (thoughtWidth * 0.5);
			// thoughtBubbleY = thisCurlCTM.f - (thoughtHeight * 0.125);

			break;
	}

	// console.log('thoughtBubbleX = ' + thoughtBubbleX + '     thoughtBubbleY = ' + thoughtBubbleY);

	// // TweenMax.set(thisCurl, {x:curlX, y:curlY, rotation:curlAngle, transformOrigin:'50% 50%'});
	// TweenMax.set(thisCurl, {autoAlpha:0});
	// TweenMax.set($('#thoughtBubble'), {x:thoughtBubbleX, y:thoughtBubbleY, autoAlpha:1, transformOrigin:'50% 50%'});

	TweenMax.to([thisCurl], 0.5, {autoAlpha:0, ease:Power1.easeOut});

	TweenMax.set([thoughtBubble], {x:thoughtBubbleX, y:thoughtBubbleY, transformOrigin:'50% 50%'});
	TweenMax.fromTo([thoughtBubble], 0.5, {scale:0.95, autoAlpha:0}, {scale:1, autoAlpha:1, ease:Power3.easeOut});

	// console.log('');
}


//<!--/* ------------------------- FUNCTION: closeThought ------------------------- */-->

function closeThought() {

	// console.log('PING!!! closeThought triggered!');
	// console.log('PING!!! closeThought triggered!     $(this).parent() = ' + $(this).parent());

	// TweenMax.set($('#thoughtBubble'), {autoAlpha:0});
	TweenMax.to([thoughtBubble], 0.5, {autoAlpha:0, ease:Power1.easeOut});
}


//<!--/* ------------------------- FUNCTION: resetThoughts ------------------------- */-->

function resetThoughts() {

	// console.log('PING!!! resetThoughts triggered!');

	TweenMax.set($('#thoughtBubble'), {autoAlpha:0});
	$("#thoughts").empty();
	addCurls();
}



//<!--/* =============================================================== */-->
//<!--/* ========================== EMAIL_GIF ========================== */-->
//<!--/* =============================================================== */-->

function loadEmailGif(thisURL) {
	$(".email_gifContent").load(thisURL);
}



//<!--/* =============================================================== */-->
//<!--/* ========================== MESMERIZE ========================== */-->
//<!--/* =============================================================== */-->


//<!--/* ========================= FUNCTION: mesmerize() (MESMERIZE) ========================= */-->

function mesmerize() {

	console.log('PING! mesmerize triggered!');

	console.log('');
	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());

	// var vidSpaceH = $(window).height() - 60;
	var vidSpaceH = $(window).height();

	console.log('vidSpaceH = ' + vidSpaceH);
	console.log('16/9 = ' + 16/9 );
	console.log('$(window).width()/$(window).height() = ' + $(window).width()/$(window).height());
	console.log('$(window).width()/vidSpaceH = ' + $(window).width()/vidSpaceH);

	// // if (vidSpaceH >= 1080) {
	// if ($(window).width()/vidSpaceH >= 16/9) {
	// // if ($(window).width()/$(window).width()/$(window).height() <= 16/9) {
	// 	TweenMax.set([mezVid], {height:vidSpaceH, transformOrigin:"50% 50%"});
	// }

	var logoCenterOffset = 10 * vidSpaceH/1080;

	var logoHeight = vidSpaceH * 880/1080;
	var logoWidth = logoHeight * 1000/880;
	var logoScale = logoWidth/150;
	var logoX = $(window).width()/2 - logoWidth/2;
	var logoY = vidSpaceH/2 - logoHeight/2 - logoCenterOffset;

	console.log('');
	console.log('logoCenterOffset = ' + logoCenterOffset + '    (NOTE: please see shigimcp_2019_05.ai: position of center of logo vs center of layout)');
	console.log('logoWidth = ' + logoWidth + '     logoHeight = ' + logoHeight + '     logoScale = ' + logoScale);
	console.log('logoX = ' + logoX + '     logoY = ' + logoY);

	TweenMax.set([mezLogo], {x:logoX, y:logoY, width:logoWidth, transformOrigin:"50% 50%"});
	// TweenMax.set([mezLogo], {x:logoX, y:logoY, scale:logoScale, transformOrigin:"50% 50%"});

	TweenMax.set([header_mask_afro_k], {y:-360, scaleY:2.5, transformOrigin:"50% 0%"});
	TweenMax.set([header_mask_afro_w], {scaleY:0, transformOrigin:"50% 0%"});
	// TweenMax.set([header_mask_glasses_k], {y:360, transformOrigin:"50% 0%"});
	// TweenMax.set([header_mask_glasses_w], {y:0, transformOrigin:"50% 0%"});
	TweenMax.set([header_mask_kanji_w], {y:-360, scaleY:1.5, transformOrigin:"50% 0%"});

	$(window).on('resize', function () {
		vidResize();
	});
}


//<!--/* ========================= FUNCTION: vid_out(thisSect) (MESMERIZE) ========================= */-->

function vid_out(thisSect) {

	// console.log('PING! vid_out triggered! thisSect = ' + thisSect);

	console.log('');
	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());
	console.log('document.body.clientWidth = ' + document.body.clientWidth + '     document.body.clientHeight = ' + document.body.clientHeight);
	console.log('$(document).width() = ' + $(document).width() + '     $(document).height() = ' + $(document).height());

	// var vidSpaceH = $(window).height() - 60;
	// var vidSpaceH = $(window).height();
	var vidSpaceH = window.innerHeight;

	console.log('');
	console.log('vidSpaceH = ' + vidSpaceH);
	console.log('16/9 = ' + 16/9 );
	console.log('');
	console.log('window.innerWidth/window.innerHeight = ' + window.innerWidth/window.innerHeight);
	console.log('window.innerWidth/vidSpaceH = ' + $(window).width()/vidSpaceH);
	console.log('$(window).width()/$(window).height() = ' + $(window).width()/$(window).height());
	console.log('$(window).width()/vidSpaceH = ' + $(window).width()/vidSpaceH);

	// // if (vidSpaceH >= 1080) {
	// if ($(window).width()/vidSpaceH >= 16/9) {
	// // if ($(window).width()/$(window).width()/$(window).height() <= 16/9) {
	// 	TweenMax.set([mezVid], {height:vidSpaceH, transformOrigin:"50% 50%"});
	// }

	var logoCenterOffset = 10 * vidSpaceH/1080;

	var logoHeight = vidSpaceH * 880/1080;
	var logoWidth = logoHeight * 1000/880;
	var logoScale = logoWidth/150;
	// var logoX = $(window).width()/2 - logoWidth/2;
	var logoX = window.innerWidth/2 - logoWidth/2;
	var logoY = vidSpaceH/2 - logoHeight/2 - logoCenterOffset;

	console.log('');
	console.log('logoCenterOffset = ' + logoCenterOffset + '    (NOTE: please see shigimcp_2019_05.ai: position of center of logo vs center of layout)');
	console.log('logoWidth = ' + logoWidth + '     logoHeight = ' + logoHeight + '     logoScale = ' + logoScale);
	console.log('logoX = ' + logoX + '     logoY = ' + logoY);

	// TweenMax.set([mezLogo], {x:logoX, y:logoY, width:logoWidth, transformOrigin:"50% 50%"});

	// TweenMax.set([header_mask_afro_k], {y:-360, scaleY:2.5, transformOrigin:"50% 0%"});
	// TweenMax.set([header_mask_afro_w], {scaleY:0, transformOrigin:"50% 0%"});
	// TweenMax.set([header_mask_kanji_w], {y:-360, scaleY:1.5, transformOrigin:"50% 0%"});

	$(window).on('resize', function () {
		vidResize();
	});


	//<!--/* ------------------------- TIMELINE: videoTL ------------------------- */-->

	document.getElementById("mezLogo").style.visibility = "visible";

	var videoTL = new TimelineMax({delay:0});

	videoTL
		// .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		.fromTo([mezHeader], 1, {autoAlpha:0}, {autoAlpha:1, ease:Power3.easeOut}, "frame01 +=0")
		.to([mezContent], 1, {backgroundColor:"#FFFFFF", ease:Power3.easeOut}, "frame01 +=0")
		.to([mezVidContainer], 1, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")

		.fromTo([mezLogo], 1, {x:logoX, y:logoY, width:logoWidth}, {x:-35, y:5, width:150, transformOrigin:"50% 50%", ease:Power3.easeOut}, "frame01 +=0")

		.fromTo([header_mask_afro_k], 1, {y:-360, scaleY:2.5}, {y:0, scaleY:1, transformOrigin:"50% 0%"}, "frame01 +=0")
		.fromTo([header_mask_afro_w], 1, {scaleY:0}, {scaleY:1, transformOrigin:"50% 0%"}, "frame01 +=0")
		// .fromTo([header_mask_kanji_w], 1, {y:-360, scaleY:1.5}, {y:0, scaleY:1, transformOrigin:"50% 0%"}, "frame01 +=0")
		.fromTo([header_mask_kanji_w], 1, {y:-360, scaleY:1.5}, {y:0, scaleY:1, transformOrigin:"50% 0%", onComplete:jump, onCompleteParams:[thisSect]}, "frame01 +=0")
	;

	videoTL.duration(1);

	console.log('');
	console.log("videoTL timing = " + videoTL.duration() + " secs");
}



//==================== FUNCTION: vidResize() ====================

function vidResize() {

	console.log('PING! vidResize triggered!');

	console.log('');
	console.log('screen.width = ' + screen.width + '     screen.height = ' + screen.height);
	console.log('screen.width/screen.height = ' + screen.width/screen.height);
	console.log('');
	console.log('$(window).width() = ' + $(window).width() + '     $(window).height() = ' + $(window).height());
	console.log('$(window).width()/$(window).height() = ' + $(window).width()/$(window).height());

	var vidSpaceH = $(window).height() - 60;

	console.log('vidSpaceH = ' + vidSpaceH);

	// if (vidSpaceH >= 1080) {
	if ($(window).width()/vidSpaceH >= 16/9) {
		TweenMax.set([mezVid], {height:vidSpaceH, transformOrigin:"50% 50%"});
	}


	var mezVidX = getDims("mezVid")[0];
	var mezVidY = getDims("mezVid")[1];
	var mezVidW = getDims("mezVid")[2];
	var mezVidH = getDims("mezVid")[3];

	console.log('*** PRE tween: mezVid ***');
	console.log('mezVidX = ' + mezVidX + '     mezVidY = ' + mezVidY + '     mezVidW = ' + mezVidW + '     mezVidH = ' + mezVidH);

	var logoCenterOffset = 10 * vidSpaceH/1080;

	// var logoHeight = vidSpaceH * 880/1080;
	var logoHeight = mezVidH * 880/1080;
	var logoWidth = logoHeight * 1000/880;
	var logoX = $(window).width()/2 - logoWidth/2;
	var logoY = vidSpaceH/2 - logoHeight/2 - logoCenterOffset;

	console.log('');
	console.log('logoCenterOffset = ' + logoCenterOffset + '    (NOTE: please see shigimcp_2019_05.ai: position of center of logo vs center of layout)');
	console.log('logoWidth = ' + logoWidth + '     logoHeight = ' + logoHeight);
	console.log('logoX = ' + logoX + '     logoY = ' + logoY);

	// TweenMax.set([mezLogo], {x:logoX, y:logoY, width:logoWidth, transformOrigin:"50% 50%"});
	TweenMax.set([mezLogo], {x:logoX, y:logoY, height:logoHeight, transformOrigin:"50% 50%"});
}



