<!-- ========================= load xml ========================= -->

$(document).ready(function() {

	$.ajax({
		type: "GET",
		url: "work.xml",
		dataType: "xml",
		success: parseXml
	});

	/*galleryInit();*/
	/*hideSlides();*/
});


<!-- ========================= FUNCTION - switchSects/hideSects ========================= -->

function switchSects(thisNav, thisAlbum) {

	/*alert("PING! FUNCTION switchSects triggered! thisAlbum = " + thisAlbum);*/

	hideSects();

	$('#' + thisAlbum).zindex('up');		//pushes to top of stack

	$('#' + thisAlbum).animate({
		opacity: 1
	}, transDuration );

	$('#' + thisNav).zindex('up');		//pushes to top of stack

/*
	$(thisThumb).animate({
		opacity: 1
	}, transDuration );
*/

//	$('slide[id$="0"]').css('opacity', 1);

	$('slide[id$="0"]').animate({
		opacity: 1
	}, transDuration );
}


function hideSects() {
/*
	alert("PING! FUNCTION hideSects triggered!" + thisAlbum);
	$("#output").append(thisAlbum + "<br />");
*/

//	$('albumContainer').zindex('down');	//pushes down the stack

	$('albumContainer').animate({
		opacity: 0
	}, transDuration );

	$('work').zindex('down');	//pushes down the stack

	$('work').animate({
		opacity: 0
	}, transDuration );
}


<!-- ========================= FUNCTION - switchSlides/hideSlides ========================= -->

function switchSlides(thisSlide) {
/*
	alert("PING! FUNCTION switchSlides triggered!" + thisSlide);
*/
	hideSlides();

	$('#' + thisSlide).zindex('up');		//pushes to top of stack
	//$('#' + thisSlide).zindex('down');	//pushes down the stack

	$('#' + thisSlide).animate({
		opacity: 1
	}, transDuration );

	/*$('slide[id$="0"]').css('opacity', 1);*/
}


function hideSlides() {
/*
	alert("PING! FUNCTION hideSlides triggered!" + thisSlide);
	$("#output").append(thisSlide + "<br />");

	alert($('slideContainer[id|="thisAlbum_"]').attr("id"));
*/
	/*alert($('albumContainer').attr("id"));*/

	$('slide').animate({
		/*top: '12.5%',*/
		opacity: 0
	}, transDuration );
}


<!-- ========================= FUNCTION - handle z-indexes ========================= -->

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


<!-- ========================= FUNCTION - parse xml, populate menu and slides ========================= -->

var transDuration = 250;

function parseXml(xml) {

<!-- ---------- declare variables ---------- -->

	var album;
	var thisAlbum;
	var thisThumb;
	var thisInfo;

	var employer;
	var mytitle;
	var dates;
	var descr;

	var slpath;
	var thpath;
	var flpath;


<!-- ---------- find each "album" in the XML and create an "albumContainer" for each ---------- -->

	$(xml).find("album").each(function(index) {

		album = $(this).attr("id");
		thisNav = "thisNav_" + album;
		thisAlbum = "thisAlbum_" + album;
		thisThumb = "thisThumb_" + album;
		thisInfo = "thisInfo_" + album;

		employer = $(this).attr("employer");
		mytitle = $(this).attr("mytitle");
		dates = $(this).attr("dates");
		descr = $(this).attr("descr");

		slpath = $(this).attr("slpath");
		thpath = $(this).attr("thpath");
		flpath = $(this).attr("flpath");

		/*alert("album = " + album);*/
		/*alert("thisNav = " + thisNav);*/
		/*alert( "slpath = " + slpath + "   thpath = " + thpath );*/
		/*alert("album = " + album + "     thisAlbum = " + thisAlbum + "     thisInfo = " + thisInfo + "     thisThumb = " + thisThumb);*/

		$("body").append("<albumContainer id='" + album + "'></albumContainer>");
		$('ul').append('<li id="' + thisNav	 + '">' + employer + '</li>');


<!-- ---------- add sub-containers (slideContainer, thumbContainer) to the "albumContainer" of each distinct "album" ---------- -->

		$("body").find("#" + album).each(function(index) {

			/*alert("index = " + index + "     album = " + album);*/

			$(this).append("<slideContainer id='" + thisAlbum + "' class='clearFix'></slideContainer>");
//			$(this).append("<infoContainer id='" + thisInfo + "'><div id='employer'>" + employer + "</div><div id='dates'>" + dates + "</div><div id='mytitle'>" + mytitle + "</div><div id='descr'>" + descr + "</div></infoContainer>");
			$(this).append("<infoContainer id='" + thisInfo + "'><div id='employer'>" + employer + "</div><div id='dates'>" + dates + "</div><div id='mytitle'>" + mytitle);
			$(this).append("<thumbContainer id='" + thisThumb + "'></thumbContainer>");

		});


<!-- ---------- add slides and thumbnails for each "image" child of each distinct "album" ---------- -->

		$(xml).find("#" + album).children("image").each(function(index) {
/*
			var thisSrc = slpath + $(this).attr("src");
			var thisSlide = 'sl_' + album + index;
			var thisThumbnail = 'th_' + album + index;
*/
			var thisSlide = 'sl_' + album + index;
			var thisSlideSrc = slpath + $(this).attr("src");

			var thisThumbnail = 'th_' + album + index;
			var thisThumbnailSrc = thpath + $(this).attr("src");

			/*alert("index = " + index + "     album = " + album);*/
			/*alert("thisAlbum = " + thisAlbum + "     thisThumb = " + thisThumb);*/
			/*alert("thisSlide = " + thisSlide + "     thisSlideSrc = " + thisSlideSrc + "     thisThumbnail = " + thisThumbnail + "     thisThumbnailSrc = " + thisThumbnailSrc);*/
			/*alert("thisSlideSrc = " + thisSlideSrc + "     thisThumbnailSrc = " + thisThumbnailSrc);*/

			$("#" + thisAlbum).append("<slide id='" + thisSlide + "'><img src='" + thisSlideSrc + "' /></slide>");
			$("#" + thisThumb).append("<thumb id='" + thisThumbnail + "'><img src='" + thisThumbnailSrc + "' /></thumb>");

			$('#' + thisThumbnail).animate({
				opacity: .375
			}, transDuration );

			$('#' + thisThumbnail).mouseover(function(){
				$('#' + thisThumbnail).animate({
					opacity: 1
				}, transDuration );
			});

			$('#' + thisThumbnail).mouseout(function(){
				$('#' + thisThumbnail).animate({
					opacity: .375
				}, transDuration );
			});

			$('#' + thisThumbnail).click(function(){
				/*alert("thisThumbnail = " + thisThumbnail + "     thisSlide = " + thisSlide);*/
				switchSlides(thisSlide);
			});

		});

	});

	galleryInit();
	workNavInit();
}


<!-- ---------- INITIAL GALLERY STATE ---------- -->

function galleryInit() {
/*	
	var thisAlbum = $('albumContainer').first().attr('id');
	var thisSlide = $('#' + thisAlbum).first().attr('id');
	alert("PING! FUNCTION galleryInit triggered!   thisSlide = " + thisSlide);
*/	
	$('thumbContainer').first().zindex('up');		//pushes to top of stack

//	$('thumbContainer').first().animate({
//		opacity: 1
//	}, transDuration );

	$('albumContainer').first().zindex('up');		//pushes to top of stack

	$('albumContainer').first().animate({
		opacity: 1
	}, transDuration );

	$('slide').first().animate({
		opacity: 1
	}, transDuration );

	$('work').first().zindex('up');		//pushes to top of stack
}


<!-- ---------- WORK NAVIGATION ---------- -->

function workNavInit() {

	$('work').find('li').each(function(index) {

		var thisNav = $(this).attr('id');
		var thisAbum = $(this).attr('id').replace('thisNav_','');

		/*alert('FUNCTION workNavInit triggered! thisNav = ' + thisNav + '     thisAbum = ' + thisAbum);*/

/*
		$('#' + thisNav).animate({
			opacity: .375
		}, transDuration );
*/
		$('#' + thisNav).mouseover(function(){
			$('#' + thisNav).animate({
				opacity: .5
			}, transDuration );

			$('work').zindex('up');		//pushes to top of stack
		});

		$('#' + thisNav).mouseout(function(){
			$('#' + thisNav).animate({
				opacity: 1
			}, transDuration );
		});

		$('#' + thisNav).click(function(){
//			alert('FUNCTION workNavInit triggered! thisNav = ' + thisNav + '     thisAbum = ' + thisAbum);
			switchSects(thisNav, thisAbum);
		});

	});

/*
	$('work').mouseover(function(){
		$('work').animate({
			opacity: 1
		}, transDuration );

		$('work').zindex('up');		//pushes to top of stack
	});

	$('work').mouseout(function(){
		$('work').animate({
			opacity: 0
		}, transDuration );
	});
*/

	$('#workNav').click(function(){
		$('work').zindex('up');		//pushes to top of stack

		$('work').animate({
			opacity: 1
		}, transDuration );
	});

	$('#workNav').mouseover(function(){
		$('work').zindex('up');		//pushes to top of stack

		$('work').animate({
			opacity: 1
		}, transDuration );
	});

//	$('#workNav').mouseout(function(){
//		$('work').zindex('down');	//pushes down the stack
//
//		$('work').animate({
//			opacity: 0
//		}, transDuration );
//	});

//	$('#workNav').zindex('up');		//pushes to top of stack
}