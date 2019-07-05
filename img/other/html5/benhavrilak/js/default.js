<!--/* ========================= GLOBAL NAVIGATION ========================= */-->

$(document).ready(function() {
	/*alert('PING! document ready!');*/
	$('navContainer').load('nav.html');
	/*pageInit();*/
});


<!-- ========================= maximize browser window ========================= -->

document.addEventListener('DOMContentLoaded', function() {
	/*alert( 'DOMContentLoaded!' );*/
	moveTo(0,0);
	resizeTo(window.screen.width, window.screen.height);
}, false);


<!-- ========================= resize images with browser window ========================= -->
/*    
$(window).resize(function() {
	$('body img').css({
		maxHeight: $('body').height() * 0.8,
		maxWidth: $('body').width() * 0.8
	});
});
*/    


<!-- ========================= hide address bar ========================= -->

function hideAddressBar() {
	if(!window.location.hash) { 
		if(document.height <= window.outerHeight + 10) {
			document.body.style.height = (window.outerHeight + 50) +'px';
			setTimeout( function() { window.scrollTo(0, 1); }, 50 );
		} else {
			setTimeout( function() { window.scrollTo(0, 1); }, 0 ); 
		}
	}
} 

/*    
window.addEventListener('load', hideAddressBar );
*/
window.addEventListener('orientationchange', hideAddressBar );


<!--/* ========================= FUNCTION - handle z-indexes ========================= */-->

//Thanks to lonesomeday at stackoverflow http://stackoverflow.com/a/8568191/250241

var highest = 1;

var publicMethods = {
	up : function() {
		this.css('z-index', ++highest); // increase highest by 1 and set the style
		return this;
	},

	down : function() {
		this.css('z-index', --highest); // increase highest by 1 and set the style
		return this;
	}
}

$.fn.zindex = function(method) {
	if (publicMethods[method]) {
		return publicMethods[method].apply(this);
	}else{
		$.error( 'Method ' +  method + ' does not exist. Yo.' );
	}
}


<!--/* ========================= FUNCTION - pageInit ========================= */-->

/*
var transDuration = 250;

function pageInit() {

	$('hero').animate({
		opacity: 1
	}, transDuration );

	$('copyContainer').animate({
		opacity: 1
	}, transDuration );

	$('.comp').animate({
		opacity: 1
	}, transDuration );
}
*/